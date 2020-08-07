const fs = require("fs");
const path = require("path");
const dom = require("htmldom2").DOMParser;
const xpath = require("xpath");
const serializer = require("htmldom2").XMLSerializer;
const axios = require("axios");

const staticPath = (filename) => {
    return path.join(__dirname, "static", filename);
};
const scriptsPath = (filename) => {
    return path.join(__dirname, "scripts", filename);
};
const mapsPath = (filename) => {
    return path.join(__dirname, "..", "JM", "jurism", "juris-abbrevs", filename);
};
const immediatePath = (filename) => {
    return path.join(__dirname, filename);
};
const testFixturesPath = (filename) => {
    return path.join(__dirname, "..", "JM", "citeproc-js", "fixtures", "styles", "jm-indigobook-law-review", filename);
};

const getResult = (txt) => {
    var lst = txt.split("\n");
    var startRex = /\>==+\s+RESULT/;
    var endRex = /\<==+\s+RESULT/;
    var buf = [];
    var inRegion = false;
    for (var line of lst) {
        if (line.match(endRex)) {
            inRegion = false;
        }
        if (inRegion === true) {
            buf.push(line);
        }
        if (line.match(startRex)) {
            inRegion = true;
        }
    }
    var result = buf.join("\n").trim();
    return result;
}

const getNewResult = (key) => {
    var fn = `style_${key}.txt`;
    var txt = fs.readFileSync(testFixturesPath(fn)).toString();
    var result = getResult(txt);
    return result;
};

const injectNewResults = (doc) => {
    var nodes = xpath.select('//span[contains(@class, "cite")]', doc);
    for (var i=0,ilen=nodes.length; i<ilen; i++) {
        var node = nodes[i];

        var hasVarNodes = xpath.select(".//var", node).length > 0;
        if (hasVarNodes) continue;

        var key = node.getAttribute("id");
        var result = getNewResult(key);
        var frag = new dom().parseFromString(result, "text/html");
        // Path here is html / body / actual nodes
        var children = frag.childNodes[0].childNodes[0].childNodes;
        while (node.childNodes.length) {
            node.removeChild(node.childNodes[0]);
        }
        for (var j=0,jlen=children.length; j<jlen; j++) {
            // Need to clone to avoid random lossage when moving across documents, apparently.
            var cln = children[j].cloneNode(true);
            node.appendChild(cln);
        }
    }
    return doc;
}

const getTopMainTail = (html, label) => {
    var linecount = 1;
    var ret = {
        top: [],
        blurb: [],
        moretop: [],
        main: [],
        tail: []
    };
    var state = "top";
    var lst = html.split("\n");
    for (var line of lst) {
        if (line.trim() === "</main>") {
            state = "tail";
        }
        if (line.trim() === "<!-- END BLURB -->") {
            state = "moretop";
        }
        ret[state].push(line);
        if (line.trim() === "<!-- START BLURB -->") {
            state = "blurb";
        }
        if (line.trim() === "<main>") {
            state = "main";
        }
    }
    for (var key in ret) {
        if (["top", "tail", "blurb", "moretop"].indexOf(key) > -1) {
            ret[key] = ret[key].join("\n");
        }
    }
    return ret;
}

const fixAndSave = async () => {
    var xml = fs.readFileSync(staticPath("for-briefs-and-memoranda.html")).toString();
    var doc = new dom().parseFromString(xml, "text/html");
    
    doc = injectNewResults(doc);
    
    var html = (new serializer()).serializeToString(doc, "text/html");
    html = html.replace(/&amp;/g, "&");
    
    var origParts = getTopMainTail(xml, "orig");
    var newParts = getTopMainTail(html, "new");

    var newBlurb = fs.readFileSync(staticPath("blurb-law-reviews.html")).toString();

    if (origParts.main.length !== newParts.main.length) {
        console.log("OUCH: misalignment between orig and new line counts");
        process.exit();
    }

    for (var i=0,ilen=origParts.main.length; i<ilen; i++) {
        if (newParts.main[i].match(/class="[^"]*cite[^"]*"/)) {
            origParts.main[i] = newParts.main[i];
        }
    }

    origParts.main = origParts.main.join("\n");
    
    html = [origParts.top, newBlurb, origParts.moretop, origParts.main, origParts.tail].join("\n");
    
    fs.writeFileSync(staticPath("index.html"), html);
    console.log("Done!");
}


const run = async () => {
    var nodes = await fixAndSave();
}

run();
