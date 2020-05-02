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

const xml = fs.readFileSync(staticPath("indigobook.html")).toString();

const doc = new dom().parseFromString(xml, "text/html");

var nodes = xpath.select("//span[contains(@class, 'cite')]", doc);

const getExistingItem = async (key) => {
    var result = await axios({
        method: "get",
        url: `https://api.zotero.org/groups/2319948/items/${key}`,
        headers: {
            Authorization: "Bearer 9HW9R62bchgk0jm0ukB62Qsc"
        }
    });
    return result.data.data;
}

const getNewItem = async (html_id) => {
    var result = await axios({
        method: "get",
        url: `https://api.zotero.org/groups/2319948/items?tag=t:${html_id}`,
        headers: {
            Authorization: "Bearer 9HW9R62bchgk0jm0ukB62Qsc"
        }
    });
    return result.data[0].data;
}

const patchItem = async (html_id, existingItem, newItem) => {
    var nochange = [
        "key",
        "version",
        "tags",
        "collections",
        "relations",
        "dateModified",
        "dateAdded"
    ];
    var patchData = {};
    for (var field in newItem) {
        if (nochange.indexOf(field) > -1) continue;
        // if (newItem[field].length === 0) continue;
        patchData[field] = newItem[field];
    }
    var result = await axios({
        method: "patch",
        url: `https://api.zotero.org/groups/2319948/items/${existingItem.key}`,
        headers: {
            Authorization: "Bearer 9HW9R62bchgk0jm0ukB62Qsc",
            "If-Unmodified-Since-Version": existingItem.version
        },
        data: patchData
    }).catch((e) => {
        console.log(`OUCH ${e}`);
        process.exit();
    });
    return result;
};

const getNodes = async () => {
    var ret = {};
    for (var node of nodes) {
        var txt = node.innerHTML;
        if (txt.indexOf("<var>") === -1) continue;

        // Get values of id, class, and data-info
        
        var html_id = node.getAttribute("id");
        var data_info = node.getAttribute("data-info");
        var key = null;
        if (data_info) {
            key = data_info.split("-")[1];
        }
        if (key) {
            console.log(`${html_id} / ${key}`);
            var existingItem = await getExistingItem(key);
            var newItem = await getNewItem(html_id);
            var patchedItem = await patchItem(html_id, existingItem, newItem);
        } else {
            console.log(`${html_id} (no preexisting item registered)`);
            var newItem = await getNewItem(html_id);
            node.setAttribute("data-info", `none-${newItem.key}-0-0`);
            var classy = node.getAttribute("class");
            classy = classy.split(/\s+/).filter((o) => {
                if (o !== "nodata") {
                    return o;
                } else {
                    return false;
                }
            });
            node.setAttribute("class", classy.join(" "));
        }
    }
    var html = (new serializer()).serializeToString(doc, "text/html");
    fs.writeFileSync("./indigobook-NEW.html", html);
    console.log("Done!");
}


const run = async () => {
    var nodes = await getNodes();
}

run();
