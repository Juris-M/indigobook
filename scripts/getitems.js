const axios = require('axios');
const z2j = require("./zotero2jurism");
const dom = require('htmldom2').DOMParser;
const fs = require("fs");
const path = require("path");
const xpath = require("xpath");
const dateparser = require("./dateparser");
const parseid = require("./parseid.js").default;
const base64encode = require("base-64").encode;

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

var xml = fs.readFileSync(path.join(__dirname, "..", "static", "indigobook.html")).toString();

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
        let html_id = node.getAttribute("id");
        let rawStr = node.getAttribute("data-info");
        if (!rawStr) continue;

        var info = parseid(html_id, rawStr, base64encode);
        if (!info) continue;
        for (var item of info["citation-items"]) {
            var key = item.id;
            if (donesies[key]) continue;
            donesies[key] = true;
            var filePath = path.join(outputPath, key + ".json");
            if (fs.existsSync(filePath)) {
                continue;
            }
            console.log("Getting " + filePath);
            var response = await axios({
                method: "get",
                url: `${apiStub}${key}`
            }).catch((err) => {
                console.log(`ERROR: ${key} ${err.message} [${apiStub + key}]`);
                process.exit();
            });
            console.log(JSON.stringify(response.data, null, 2));
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
            // Set seeAlso relations
            if (jObj.relations && jObj.relations["dc:relation"]) {
                var relations = jObj.relations["dc:relation"];
                if ("string" === typeof relations) {
                    relations = [relations];
                }
                cslObj.seeAlso = relations.map((o) => {
                    return o.split("/").slice(-1)[0];
                });
            }
	        fs.writeFileSync(
	            filePath, 
	            JSON.stringify(cslObj, null, 2)
	        );
        }
        count--;
        if (count === 0) {
	        console.log(len + " items processed");
        }
    }
}

if (require.main === module) {
    run();
} else {
    module.exports = run;
}
