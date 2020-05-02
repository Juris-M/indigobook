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

const placeholderMap = JSON.parse(fs.readFileSync(scriptsPath("placeholder-map.json")).toString());

const xml = fs.readFileSync(staticPath("indigobook.html")).toString();

const doc = new dom().parseFromString(xml, "text/html");

var nodes = xpath.select("//span[contains(@class, 'cite')]", doc);

// THIS IS REALLY WEIRD. HOW WAS THE ORIGINAL IMPORT-ME.json BUILT?

var res = [];
for (var node of nodes) {
    var txt = node.innerHTML;
    txt = txt.replace(/^<span[^>]+>/, "").replace(/<\/span>$/, "");
    txt = txt.replace(/\&amp;/g, "&");
    if (txt.indexOf("<var>") > -1) {
        var info = {};
        var m = txt.match(/<var>[^<]+<\/var>/g);
        if (m) {
            for (var matchText of m) {
                key = matchText.slice(5, -6);
                if (placeholderMap[key]) {
                    txt = txt.replace(matchText, placeholderMap[key].val);
                    
                } else {
                    console.log("OUCH " + key);
                }
            }
            
            //console.log(txt)
        }
    }
}
