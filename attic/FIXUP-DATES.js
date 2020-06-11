const fs = require("fs");
const path = require("path");

const testPath = (filename) => {
    var testStub = path.join(__dirname, "..", "JM", "citeproc-js", "fixtures", "styles", "jm-indigobook-law-review-2");
    if (filename) {
        return path.join(testStub, filename);
    } else {
        return testStub;
    }
}

const getItemKeys = (txt) => {
    var lst = txt.split("\n");
    var startRex = /\>==+\s+KEYS/;
    var endRex = /\<==+\s+KEYS/;
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
    itemKeys = JSON.parse(buf.join("\n"));
    return itemKeys;
}

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

var ret = {
    collectionNumber: [],
    date: []
}

for (var filename of fs.readdirSync(testPath())) {
    var testKey = filename.slice(6, -4);
    // console.log(testKey);
    var num = parseInt(testKey.slice(1), 10);
    if (!num || num < 232) {
        continue;
    }
    var txt = fs.readFileSync(testPath(filename)).toString();
    var itemKeys = getItemKeys(txt);
    var result = getResult(txt);
    if (result.match(/^2000/)) {
        for (var itemKey of itemKeys) {
            if (ret.collectionNumber.indexOf(itemKey) === -1) {
                ret.collectionNumber.push(itemKey);
            }
        }
    } else if (result.match(/2000/)) {
        for (var itemKey of itemKeys) {
            if (ret.date.indexOf(itemKey) === -1) {
                ret.date.push(itemKey);
            }
        }
    }
}

fs.writeFileSync("FIXME-DATES.json", JSON.stringify(ret, null, 2));
