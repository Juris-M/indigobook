const fs = require("fs");
const path = require("path");
const composer = require("./composer.js").default;
const parseid = require("./parseid.js").default;
const dom = require("htmldom2").DOMParser;
const XMLSerializer = require("htmldom2").XMLSerializer;
const xpath = require("xpath");
const base64 = require("base-64").encode;
const utf8 = require('utf8');

const varMap = JSON.parse(fs.readFileSync(path.join(__dirname, "placeholder-map.json")).toString());

// console.log(`VALUE: ${JSON.stringify(varMap["Name of the legislature (i.e. Leg.)"])}`);

var cite_desc = "Initial test checkin";

var run = async () => {
    var xml = fs.readFileSync(path.join(__dirname, "..", "static", "indigobook.html")).toString();
    var doc = new dom().parseFromString(xml, 'text/html');
    var nodes = xpath.select("//span[contains(@class,'cite')]", doc);
    for (var node of nodes) {
        var html_id = node.getAttribute("id");
        var rawKey = node.getAttribute("data-info");
        if (!rawKey) continue;
        var serializer = new XMLSerializer();
        var newCite = serializer.serializeToString(node);
        newCite = newCite.replace(/\&amp;/g, "&");
        newCite = newCite.replace(/<\/var>/g, "[/VAR]").replace(/<var>/g, "[VAR]");
        newCite = newCite.replace(/<span>[^<]+<\/span>/g, "");
        newCite = newCite.replace(/\[VAR\]/g, "<var>").replace(/\[\/VAR\]/g, "</var>");
        newCite = newCite.replace(/<span[^>]*>/g, "").replace(/<\/span>/g, "");
        newCite = newCite.replace(/<a[^>]*>/g, "").replace(/<\/a>/g, "");
        for (var key in varMap) {
            newCite = newCite.replace(`<var>${key}</var>`, varMap[key].val);
            //if (html_id === "c159" && key === "Name of the legislature (i.e. Leg.)") {
            //    console.log(`AFTER CONV: ${newCite}`);
            //}
        }
        newCite = newCite.replace(/<span[^>]+>/g, "").replace(/<\/span>/g, "");
        var info = parseid(html_id, rawKey, base64);
        if (!info) continue;
        var items = [];
        for (var itemInfo of info["citation-items"]) {
            if (itemInfo.position == 1) {
                itemInfo["near-note"] = 1;
            }
            var item_key = itemInfo.id;
            var item = fs.readFileSync(path.join(__dirname, "..", "static", "itemdata", `${item_key}.json`)).toString();
            item = JSON.parse(item);
            if (item.jurisdiction) {
                var m = item.jurisdiction.match(/^([0-9]{3})/);
                if (m) {
                    var offset = parseInt(m[1]);
                    item.jurisdiction = item.jurisdiction.slice(3, 3 + offset);
                }
            }
            items.push(item);
        }
        var newTest = composer(items, info["citation-items"], newCite, cite_desc);
        var fileName = `style_${info.html_id}.txt`;
        var filePath = path.join(__dirname, "..", "..", "JM", "citeproc-js", "fixtures", "styles", "jm-indigobook-law-review-2", fileName);
        if (!fs.existsSync(filePath)) {
            console.log(`Write: ${filePath}`);
            fs.writeFileSync(filePath, newTest);
        }
    }
}

if (require.main === module) {
    run();
} else {
    module.exports = run;
}
