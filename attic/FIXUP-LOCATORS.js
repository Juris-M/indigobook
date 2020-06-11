const fs = require("fs");
const path = require("path");

// Okay. Next step.
// *** Find items with locator 123 and page 321.
// Change them to remove the locator and page, and add section "sec. 321" to the item.
// To do that, we need two changes.
// First, dump the keys of the items.
// - Use the key list in Jurism to make the change to the item.
// Second, dump the html_ids of the tests
// - Use the id list to remove the locator segments in the document.
// Finally, sync and rerun refresh with tables option.
// Run tests again and see how we fared.

const testPath = (filename) => {
    var testStub = path.join(__dirname, "..", "JM", "citeproc-js", "fixtures", "styles", "jm-indigobook-law-review-2");
    if (filename) {
        return path.join(testStub, filename);
    } else {
        return testStub;
    }
}

const itemPath = (filename) => {
    var testStub = path.join(__dirname, "static", "itemdata");
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

const getCitationItems = (txt) => {
    var lst = txt.split("\n");
    var startRex = /\>==+\s+CITATION-ITEMS/;
    var endRex = /\<==+\s+CITATION-ITEMS/;
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
    itemInfo = JSON.parse(buf.join("\n"));
    return itemInfo;
}

var ret = {
    itemKeys: [],
    htmlIDs: []
}

for (var filename of fs.readdirSync(testPath())) {
    var testKey = filename.slice(6, -4);
    // console.log(testKey);
    var num = parseInt(testKey.slice(1), 10);
    if (!num || num < 232) {
        continue;
    }
    var txt = fs.readFileSync(testPath(filename)).toString();
    var itemInfo = getCitationItems(txt)[0][0];
    var item = JSON.parse(fs.readFileSync(itemPath(`${itemInfo.id}.json`)).toString());
    if (itemInfo.locator && item.page) {
        if (itemInfo.locator.indexOf("123") > -1 && item.page.indexOf("321") > -1) {
            if (item.type === "legislation" || item.type === "regulation") {
                ret.itemKeys.push(itemInfo.id);
                ret.htmlIDs.push(`${testKey}`);
            }
        }
    }
}

console.log(JSON.stringify(ret, null, 2));

// fs.writeFileSync("FIXME-DATES.json", JSON.stringify(ret, null, 2));
