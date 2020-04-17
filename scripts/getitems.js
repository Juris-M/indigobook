const axios = require('axios');
const z2j = require("./zotero2jurism");
const dom = require('htmldom2').DOMParser;
const fs = require("fs");
const path = require("path");
const xpath = require("xpath");
const dateparser = require("./dateparser");

var cslMap = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "scripts", "cslMap.json")).toString());

const apiStub = "https://api.zotero.org/groups/2319948/items/";

const dateVars = [
    "locator-date", 
    "issued", 
    "event-date", 
    "accessed", 
    "original-date",
    "publication-date",
    "available-date",
    "submitted",
    "alt-issued",
    "alt-event"
]

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

var xml = fs.readFileSync(path.join(__dirname, "..", "src", "indigobook.html")).toString();

/*
var xml = fixHTML(xml);

var lines = xml.split("\n");
for (var i in lines) {
    lineno = parseInt(i, 10) + 1;
    lines[i] = lineno + " " + lines[i];
}
lines = lines.join("\n");
 */

var doc = new dom().parseFromString(xml, 'text/html');

var nodes = xpath.select("//span[contains(@class,'cite')]", doc);

var outputPath = path.join(__dirname, "..", "static", "itemdata");

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
}

const run = async () => {

    var donesies = {};
    
    var len = nodes.length;
    var count = len;
    var courtMap = {};
    for (var node of nodes) {
        let info = node.getAttribute("data-info");
        if (!info) continue;
        var key = info.split("-")[1];
        if (donesies[key]) continue;
        donesies[key] = true;
        console.log(key);
        var response = await axios({
            method: "get",
            url: `${apiStub}${key}`
        }).catch((err) => {
            console.log(`ERROR: ${key} ${err.message} [${apiStub + key}]`);
        });
        const jObj = z2j.zoteroToJurismData(response.data);
        var cslObj = {};
        for (var key in jObj) {
            if ("key" === key) {
                cslObj.id = jObj.key;
            } else if ("creators" === key) {
                for (var creator of jObj.creators) {
                    var cslCreator = {};
                    if (!cslObj[creator.creatorType]) {
                        cslObj[cslMap[creator.creatorType]] = [];
                    }
                    cslCreator.given = creator.firstName;
                    cslCreator.family = creator.lastName;
                    cslObj[cslMap[creator.creatorType]].push(cslCreator);
                }
            } else {
                if ("creators" === key) continue;
                if (!cslMap[key]) continue;
                if (!jObj[key]) continue;
                if (dateVars.indexOf(cslMap[key]) > -1) {
                    cslObj[cslMap[key]] = dateparser.parseDateToArray(jObj[key]);
                } else if ("itemType" === key) {
                    cslObj[cslMap[key]] = cslMap[jObj[key]];
                } else {
                    cslObj[cslMap[key]] = jObj[key];
                }
            }
        }
	    fs.writeFileSync(
	        path.join(outputPath, cslObj.id + ".json"), 
	        JSON.stringify(cslObj, null, 2)
	    );
        count--;
        if (count === 0) {
	        console.log(len + " items processed");
        }
    }
}

run();
