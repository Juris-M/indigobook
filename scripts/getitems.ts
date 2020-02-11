import axios from 'axios';
const z2j = require('./zotero2jurism');
const dom = require('xmldom').DOMParser;
import fs from 'fs';
import path from 'path';
import xpath from 'xpath';
const error = require('../src/utils').error;

const apiStub:string = "https://api.zotero.org/groups/2319948/items/";

function fixHTML (txt:string) {
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

var xml:string = fs.readFileSync(path.join(__dirname, "..", "src", "index.html")).toString();

xml = fixHTML(xml);

var xml_lines = xml.split("\n");
for (var i in xml_lines) {
    var lineno:number = parseInt(i, 10) + 1;
    xml_lines[i] = lineno + " " + xml_lines[i];
}

try {
    var doc = new dom().parseFromString(xml);
} catch (e) {
    var display_lines = xml_lines.join("\n");
    console.log(display_lines);
    console.log(e.toString());
    process.exit();
}

var nodes = xpath.select("//a[contains(@class,'cite')]", doc);

var outputPath = path.join(__dirname, "..", "src", "itemdata");

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
}

const getItems = async () => {
    var len = nodes.length, count = len;
    for (var node of nodes) {
        let id = (<HTMLElement>node).getAttribute("id");
        let key = id.slice(-8);
        let response = await axios.get( apiStub + key).catch(error);

        if (response) {
        const jObj = z2j.zoteroToJurismData(response.data);
        const jMap = z2j.getLabelsAndVals(jObj);
        const obj = jMap.fields;
	    fs.writeFileSync(
	        path.join(__dirname, "..", "src", "itemdata", jObj.key + ".json"), 
	        JSON.stringify(obj, null, 2)
	    );
        count--;
        if (count === 0) {
	        console.log(len + " items processed");
        }
        } else {
            console.log(`No API response for ${key}`);
            process.exit();
        }
    };
};

getItems();
