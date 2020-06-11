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

var serviceCount = 0;

for (var node of nodes) {
    var info = node.getAttribute("data-info");
    if (info) continue;
    var txt = node.innerHTML;
    txt = txt.replace(/^<span[^>]+>/, "").replace(/<\/span>$/, "");
    txt = txt.replace(/\&amp;/g, "&");
    var html_id = node.getAttribute("id");
    console.log(`${html_id}: ${txt}`);
}
