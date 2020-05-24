#!/usr/bin/env node 

var fs = require("fs");
var path = require("path");
var getItems = require("./scripts/getitems");
var generateTests = require("./scripts/generate-tests");
const { spawn } = require("child_process");

var custom = [
  // Test IDs (html_id) go here.
]

const itemPath = (filename) => {
    var itemStub = path.join(__dirname, "static", "itemdata");
    return path.join(itemStub, filename);
}

const testPath = (filename) => {
    var testStub = path.join(__dirname, "..", "JM", "citeproc-js", "fixtures", "styles", "jm-indigobook-law-review-2");
    if (filename) {
        return path.join(testStub, filename);
    } else {
        return testStub;
    }
}

// Open the designated test
// Fetch its KEYS element and parse
// Delete the keyed items
// Delete the test
// Run getitems
// Run generate

var arg = process.argv[2];
arg = arg.replace(/^style\_/, "");


const getTableKeys = () => {    
    var ret = [];
    for (var filename of fs.readdirSync(testPath())) {
        var testKey = filename.replace(/^style\_/, "").slice(0, -4);
        var num = parseInt(testKey.slice(1), 10);
        if (typeof num !== "number" || num < 232) {
            continue;
        }
        var keys = getItemKeys(testKey);
        for (var key of keys) {
            if (ret.indexOf(key) === -1) {
                ret.push(key);
            }
        }
        fs.unlinkSync(testPath(filename));
    }
    return ret;
};

const getNonTableKeys = () => {    
    var ret = [];
    for (var filename of fs.readdirSync(testPath())) {
        var testKey = filename.replace(/^style\_/, "").slice(0, -4);
        var num = parseInt(testKey.slice(1), 10);
        if (typeof num !== "number" || num > 231) {
            continue;
        }
        var keys = getItemKeys(testKey);
        for (var key of keys) {
            if (ret.indexOf(key) === -1) {
                ret.push(key);
            }
        }
        fs.unlinkSync(testPath(filename));
    }
    return ret;
};

if (!arg || !(arg.match(/^c[0-9]{3}$/) || arg === "tables" || arg === "nontables" || arg === "custom")) {
    console.log("Error: argument must be of the form \"c000\" or \"style_c000\" or \"tables\" or \"nontables\".");
    process.exit();
}

const getItemKeys = (arg) => {
    var itemKeys = [];
    var filePath = testPath(`style_${arg}.txt`);
    if (fs.existsSync(filePath)) {
        var test = fs.readFileSync(filePath).toString();
        var lst = test.split("\n");
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
    }
    return itemKeys;
}

const deleteItems = (itemKeys) => {
    for (var key of itemKeys) {
        var filePath = itemPath(`${key}.json`);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
}

const deleteTest = (arg) => {
    var filePath = testPath(`style_${arg}.txt`);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
}

const openItem = async (key) => {
    var url = `zotero://select/groups/2319948/items/${key}`;
    spawn("gnome-open", [url]);
}

var run = async (arg) => {
    if (arg === "tables") {
        // This also deletes target test fixtures
        var keys = getTableKeys();
    } else if (arg === "nontables") {
        var keys = getNonTableKeys();
    } else if (arg === "custom") {
        var customArgs = custom;
        var keys = [];
        for (var customArg of customArgs) {
            keys = keys.concat(getItemKeys(customArg));
            deleteTest(customArg);
        }
    } else {
        var keys = getItemKeys(arg);
        deleteTest(arg);
    }
    deleteItems(keys);
    await getItems();
    await generateTests();
    await openItem(keys[0]);
}

run(arg);
