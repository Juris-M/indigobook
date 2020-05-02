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

const xml = fs.readFileSync(immediatePath("indigobook-NEW.html")).toString();

const doc = new dom().parseFromString(xml, "text/html");

var nodes = xpath.select("//span[contains(@class, 'cite')]", doc);

var skips = [];

const getNodes = async () => {
    var ret = [];
    for (var node of nodes) {

        // Get values of id, class, and data-info
        
        var html_id = node.getAttribute("id");
        var data_info = node.getAttribute("data-info");
        var key = null;
        if (data_info) {
            key = data_info.split("-")[1];
        }
        if (key) {
            ret.push(key)
        } else {
            skips.push(html_id);
        }
    }
    console.log(JSON.stringify(ret, null, 2));
    console.log(skips.length);
}



const run = async () => {
    var nodes = await getNodes();
}

run();
