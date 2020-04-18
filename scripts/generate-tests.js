const fs = require("fs");
const path = require("path");
const composer = require("./shimmed/composer.js").default;
const parseid = require("./shimmed/parseid.js").default;
const dom = require("htmldom2").DOMParser;
const XMLSerializer = require("htmldom2").XMLSerializer;
const xpath = require("xpath");
const base64 = require("base-64");
const utf8 = require('utf8');

var cite_desc = "Initial test checkin";

const toBase64 = (str) => {
    var bytes = utf8.encode(str);
    return base64.encode(bytes);
}

var run = async () => {
    var xml = fs.readFileSync(path.join(__dirname, "..", "static", "indigobook.html")).toString();
    var doc = new dom().parseFromString(xml, 'text/html');
    var nodes = xpath.select("//span[contains(@class,'cite')]", doc);
    for (var node of nodes) {
        var serializer = new XMLSerializer();
        var newCite = serializer.serializeToString(node);
        newCite = newCite.replace(/^<[^>]+>/, "").replace(/<[^>]+>$/, "");
        var rawKey = node.getAttribute("data-info");
        var info = parseid(rawKey, toBase64);
        if (!info) continue;
        var item_key = info.params.id;
        var item = fs.readFileSync(path.join(__dirname, "..", "static", "itemdata", `${item_key}.json`)).toString();
        item = JSON.parse(item);
        if (item.jurisdiction) {
            var m = item.jurisdiction.match(/^([0-9]{3})/);
            if (m) {
                var offset = parseInt(m[1]);
                item.jurisdiction = item.jurisdiction.slice(3, 3 + offset);
            }
        }
        var items = [item];
        var newTest = composer(items, info.params, newCite, cite_desc);
        var fileName = `style_${info.test_id}.txt`;
        console.log(fileName);
        fs.writeFileSync(path.join(__dirname, "..", "..", "JM", "jsti-indigobook", fileName), newTest);
    }
}

run();
