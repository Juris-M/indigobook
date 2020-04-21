const fs = require("fs");
const path = require("path");
const xpath = require("xpath");
const dom = require("htmldom2").DOMParser;
const parseid = require("../scripts/parseid.js").default;
const base64 = require("base-64").encode;

var guidePath = path.join(__dirname, "..", "static", "indigobook.html");

var fixturePath = path.join(__dirname, "..", "..", "JM", "citeproc-js", "fixtures", "styles", "jm-indigobook-law-review-2");

var doc = new dom().parseFromString(fs.readFileSync(guidePath).toString(), "text/html");

var nodes = xpath.select("//span[contains(@class, 'cite')]", doc);

for (var node of nodes) {
    var test_info = node.getAttribute("data-info");
    var html_id = node.getAttribute("id");
    if (!test_info) {
        continue;
    }
    var info = parseid(test_info, base64);
    var fileFromPath = path.join(fixturePath, `style_${info.test_id}.txt`);
    if (!fs.existsSync(fileFromPath)) {
        console.log(`Ouch: [${html_id}] ${fileFromPath}\n${JSON.stringify(info, null, 2)}`);
        process.exit();
    }
    var fileToPath = path.join(fixturePath, `style_${html_id}.txt`);
    //console.log(`${fileFromPath} -> ${fileToPath}`);
    fs.copyFileSync(fileFromPath, fileToPath);
}
