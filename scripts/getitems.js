const axios = require('axios');
const z2j = require("./zotero2jurism");
const dom = require('xmldom').DOMParser;
const fs = require("fs");
const path = require("path");
const xpath = require("xpath");

const apiStub = "https://api.zotero.org/groups/2319948/items/"

function fixHTML(txt) {
    return txt.replace(/&nbsp;/g, "")
        .replace(/<br[^>]*>/g, "")
        .replace(/(<input [^>]+)>/g, "$1/>")
        .replace(/(<img [^>]+)>/g, "$1/>")
        .replace(/(<link [^>]+)>/g, "$1/>")
        .replace(/(<meta [^>]+)>/g, "$1/>")
        .replace(/(<hr[^>]*)>/g, "$1/>")
        .replace(/xmlns=\"[^\"]+\"/g, "");
}


var xml = fixHTML(fs.readFileSync(path.join(__dirname, "..", "src", "index.html")).toString());

var doc = new dom().parseFromString(xml);

var nodes = xpath.select("//a[contains(@class,'cite')]", doc);

var outputPath = path.join(__dirname, "..", "webpage", "itemdata");

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
}


for (var node of nodes) {
    let id = node.getAttribute("id");
    let key = id.slice(-8);
    axios.get( apiStub + key)
    .then((response) =>{
        const jObj = z2j.zoteroToJurismData(response.data);
        const jMap = z2j.getLabelsAndVals(jObj);
        const obj = Object.keys(jMap.fields).map(key => jMap.fields[key]);
	fs.writeFileSync(
	    path.join(__dirname, "..", "webpage", "itemdata", jMap.key + ".json"), 
	    JSON.stringify(obj, null, 2)
	);
	console.log("Done");
    }).catch((err) => {
        console.log("ERROR: "+err.message);
    });
}
