const fs = require("fs");
const path = require("path");
const dom = require("htmldom2").DOMParser;
const xpath = require("xpath");
const serializer = require("htmldom2").XMLSerializer;
const dateparser = require("./scripts/dateparser");

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

var months = [
    "Jan\\.", "Feb\\.", "Mar\\.", "Apr\\.", "May", "Jun\\.", "Jul\\.", "Aug\\.", "Sep\\.", "Oct\\.", "Nov\\.", "Dec\\."
];

var rex = new RegExp(`^(.*?)((?:(?:${months.join("|")})(?:\\s+[0-9]{1,2},\\s+)*)*[12][0-9]{3})(.*)`);

var ret = [];

for (var node of nodes) {
    var item = {
        type: "legal_case"
    };
    var info = node.getAttribute("data-info");
    if (info) continue;
    var txt = node.innerHTML;
    txt = txt.replace(/^<span[^>]+>/, "").replace(/<\/span>$/, "");
    txt = txt.replace(/\&amp;/g, "&");
    txt = txt.replace(/\&#38;/g, "&");
    txt = txt.replace(/<[^>]+>/g, "");
    var html_id = node.getAttribute("id");

    var m = txt.match(rex);
    if (m) {
        item.issued = dateparser.parseDateToArray(m[2]);
        item.title = `${m[1]} ${m[3]}`.replace(/\s+\(\s*\)\s*/g, "").replace(/\s+\)\s*/g, "");
    } else {
        item.title = txt;
    }
    item.tags = [html_id];
    ret.push(item);
}

console.log(JSON.stringify(ret, null, 2));
