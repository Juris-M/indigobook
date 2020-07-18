const fs = require("fs");
const dom = require("htmldom2").DOMParser;
const xpath = require("xpath");

var xml = fs.readFileSync("index.html").toString();
const doc = new dom().parseFromString(xml, "text/html");


var nodes = xpath.select("//h3[contains(@id, 'R')] | //h3[contains(@id, 'T')] | //span[contains(@class, 'cite')] | //tr[@class='state']/td", doc);

var acc = {
    frontmatter: 0
};
var total = 0;
var currid = 'frontmatter';
var checkme = null;
for (var node of nodes) {
    var id = node.getAttribute("id");
    if (id && id.match(/^[RT][0-9]+$/)) {
        id = `${node.textContent}`;
        if (!acc[id]) {
            acc[id] = 0;
            currid = id;
        }
    } else if (!id) {
        if (!acc[node.textContent]) {
            acc[node.textContent] = 0;
            currid = node.textContent;
        }
    } else if (id.slice(0, 1) === "c") {
        acc[currid]++;
        total++;
    }
}

var keys = Object.keys(acc);
for (var key of keys) {
    if (acc[key] === 0) {
        delete acc[key];
    }
}

var out = "";
for (var key in acc) {
    out +=`"","${acc[key]}","${key}"\n`;
}

console.log(out);
