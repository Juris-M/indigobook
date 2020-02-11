const axios = require('axios');
const z2j = require("./zotero2jurism");
const dom = require('xmldom').DOMParser;
const fs = require("fs");
const path = require("path");
const xpath = require("xpath");

const apiStub = "https://api.zotero.org/groups/2319948/items/";

function fixHTML(txt) {
    return txt.replace(/&nbsp;/g, "")
        .replace(/<br[^>]*>/g, "")
        .replace(/(<input [^>]+)>/g, "$1/>")
        .replace(/(<img [^>]+)>/g, "$1/>")
        .replace(/(<link [^>]+)>/g, "$1/>")
        .replace(/(<meta [^>]+)>/g, "$1/>")
        .replace(/(<hr[^>]*)>/g, "$1/>")
        .replace(/\ [<>]\ /g, " ")
        .replace(/xmlns=\"[^\"]+\"/g, "");
}

var xml = fs.readFileSync(path.join(__dirname, "..", "src", "index.html")).toString();

var xml = fixHTML(xml);

var lines = xml.split("\n");
for (var i in lines) {
    lineno = parseInt(i, 10) + 1;
    lines[i] = lineno + " " + lines[i];
}
lines = lines.join("\n");

var doc = new dom().parseFromString(xml);

var nodes = xpath.select("//a[contains(@class,'cite')]", doc);

var outputPath = path.join(__dirname, "..", "static", "itemdata");

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
}

var len = nodes.length;
var count = len;
for (var node of nodes) {
    let id = node.getAttribute("id");
    let key = id.slice(-8);
    axios.get( apiStub + key)
    .then((response) =>{
        const jObj = z2j.zoteroToJurismData(response.data);
        const jMap = z2j.getLabelsAndVals(jObj);
        const obj = jMap.fields;
        // const obj = Object.keys(jMap.fields).map(key => jMap.fields[key]);
	    fs.writeFileSync(
	        path.join(outputPath, jObj.key + ".json"), 
	        JSON.stringify(obj, null, 2)
	    );
        count--;
        if (count === 0) {
	        console.log(len + " items processed");
        }
    }).catch((err) => {
        console.log("ERROR: "+err.message);
    });
}
