const fs = require("fs");
const path = require("path");
const dom = require("htmldom2").DOMParser;
const xpath = require("xpath");
const serializer = require("htmldom2").XMLSerializer;
const axios = require("axios");

const staticPath = (filename) => {
    return path.join(__dirname, "static", filename);
}
const scriptsPath = (filename) => {
    return path.join(__dirname, "scripts", filename);
}
const mapsPath = (filename) => {
    return path.join(__dirname, "..", "JM", "jurism", "juris-abbrevs", filename);
}
const immediatePath = (filename) => {
    return path.join(__dirname, filename);
}

const placeMap = JSON.parse(fs.readFileSync(mapsPath("auto-us.json")).toString()).xdata.default.place;

placeMap["US:MS"] = "N. Mar. I.";
placeMap["US:PR"] = "P.R.";
placeMap["US:VI"] = "V.I.";

const sortByLength = (a,b) => {
    if (a.length > b.length) {
        return -1;
    } else if (a.length < b.length) {
        return 1;
    } else {
        return 0;
    }
}

var revPlaceMap = {};
var revPlaceArr = [];
for (var key in placeMap) {
    revPlaceMap[placeMap[key]] = key.toLowerCase();
    revPlaceArr.push(placeMap[key]);
}
revPlaceArr.sort(sortByLength);
revPlaceArr = revPlaceArr.map((o) => {
    return o.replace(/\./g, "\\.");
});
revPlaceRex = new RegExp(`(${revPlaceArr.join("|")})`);

var typeMap = {
    "regulation": ["Reg", "Admin"],
    "legislation": ["Code", "Stat", "Legis", "Acts", "Sess", "Laws"],
    "bill": ["Gaz"],
    "report": [],
    "legal_case": ["IL App.", "IL", "R."]
}

const placeholderMap = JSON.parse(fs.readFileSync(scriptsPath("placeholder-map.json")).toString());
const placeholderArr = Object.keys(placeholderMap);
placeholderArr.sort(sortByLength);

var check = {};
for (var key in placeholderMap) {
    if (check[placeholderMap[key].val]) {
        console.log("OUCH");
    }
    check[placeholderMap[key].val] = true;
}

const xml = fs.readFileSync(staticPath("indigobook.html")).toString();

const doc = new dom().parseFromString(xml, "text/html");

var nodes = xpath.select("//span[contains(@class, 'cite')]", doc);

var services = [
    "West",
    "LexisNexis"
];

var typeSupplement = JSON.parse(fs.readFileSync(immediatePath("supplementary-item-type-map.json")).toString());

var serviceCount = 0;

var ret = {};
for (var node of nodes) {
    var txt = node.innerHTML;
    txt = txt.replace(/^<span[^>]+>/, "").replace(/<\/span>$/, "");
    txt = txt.replace(/\&amp;/g, "&");
    if (txt.indexOf("<var>") === -1) continue;
    
    var html_id = node.getAttribute("id");
    var key = node.getAttribute("data-info");
    if (key) {
        key = key.split("-")[1];
    }
    
    var publisher = null;
    txt = txt.replace(/(?:<a[^>]+>|<\/a>)/g, "");
    var lst = txt.split(/<var>[^<]+<\/var>/);
    lst = lst.map((o) => {
        return o.replace(/(?:§|,\s*§|\(|\))/g, "");
    });
    lst = lst.filter((o) => {
        var ret = !!o.trim();
        if (o.trim().length === 1) {
            ret = false;
        }
        for (var service of services) {
            if (o.indexOf(service) > -1) {
                publisher = service;
                ret = false;
                serviceCount++;
                break;
            }
        }
        return ret;
    });
    var containerTitle;
    containerTitle = lst.join(" | ").trim();
    var jurisdiction;
    var m = containerTitle.match(revPlaceRex);
    if (m) {
        jurisdiction = revPlaceMap[m[1]];
    } else {
        jurisdiction = "us";
    }

    var type = "";
    if (!containerTitle.trim()) {
        type = "bill";
    } else {
        outer:
        for (var typeKey in typeMap) {
            for (var frag of typeMap[typeKey]) {
                if (containerTitle.indexOf(frag) > -1) {
                    type = typeKey;
                    break outer;
                }
            }
        }
    }
    containerTitle = containerTitle.replace(/\s+No./g, "");

    if (!type) {
        type = typeSupplement[html_id];
    }
    
    ret[html_id] = {
        type: type,
        jurisdiction: jurisdiction,
        "container-title": containerTitle,
        note: `key: ${key}\nhtml_id: ${html_id}`
    };
    if (publisher) {
        ret[html_id].publisher = publisher;
    }
    check = {};

    for (var placeholder of placeholderArr) {
        if (txt.indexOf(`<var>${placeholder}</var>`) > -1) {
            var field = placeholderMap[placeholder].field;
            if (check[field]) {
                console.log("Ouch!");
                console.log(txt);
                console.log(placeholder);
                console.log(JSON.stringify(ret[html_id], null,2));
                process.exit();
            }
            var val = placeholderMap[placeholder].val;
            if (field === "section") {
                if (ret[html_id].type === "legal_case") {
                    ret[html_id].page = val;
                } else {
                    ret[html_id].section = val;
                }
            } else {
                ret[html_id][field] = val;
            }
            check[field] = true;
        }
    }

    /*
    if (key === "8MVNK7MG") {
        console.log("HELLO THERE!");
        console.log(JSON.stringify(ret[html_id]));
    }
    continue;
     */

    //if (!ret[html_id].type) {
    //    console.log(`${html_id}: ${txt}`);
    //}
}

// console.log("Services: " + serviceCount);
var out = [];
for (var markup in ret) {
    out.push(ret[markup]);
}
// console.log(JSON.stringify(out, null, 2));

console.log(out.length);

process.exit();

// Okay! Strategy.
// So what we do is:
// Get all of the new items (paging as necessary) to obtain
// their metadata in one massive 460-odd-element array.
// For each of the new items, either:
// Return the key of the newly created item; or
// Retrieve the previous item, delete all of its editable fields,
// and "assign" the new values to it.
// And, er, that's it.

const getItem = async () => {
    var result = await axios({
        method: "get",
        url: "https://api.zotero.org/groups/2319948/items/PQJHSCHD",
        headers: {
            Authorization: "Bearer 9HW9R62bchgk0jm0ukB62Qsc"
        }
    });
    return result;
}

const amendItem = async (itemKey, newData) => {
    var nochange = [
        "key",
        "version",
        "tags",
        "collections",
        "relations",
        "dateModified",
        "dateAdded"
    ];
    var result = await getItem(itemKey);
    // PATCH <userOrGroupPrefix>/items/<itemKey>
    // If-Unmodified-Since-Version: <version>}

    console.log(JSON.stringify(out[0], null, 2));
};

const run = async () => {
    for (var cslItem of out) {
        console.log(JSON.stringify(cslItem));
        process.exit();
    }
}

run();
