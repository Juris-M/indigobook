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

const getInput = (txt) => {
    var lst = txt.split("\n");
    var startRex = /\>==+\s+INPUT/;
    var endRex = /\<==+\s+INPUT/;
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
    htmlIDs: [],
    itemIDs: [],
}
var newItems = [];

for (var filename of fs.readdirSync(testPath())) {
    var testKey = filename.slice(6, -4);
    // console.log(testKey);
    var num = parseInt(testKey.slice(1), 10);
    if (!num || num < 232) {
        continue;
    }
    var txt = fs.readFileSync(testPath(filename)).toString();
    var input = getInput(txt);
    var result = getResult(txt);

    if ((input[0].type === "legislation" || input[0].type === "regulation")) {
        if (input[0].volume === "2006") {
            if (result.match(/^2000/)) {
                delete input[0].volume;
                input[0]["collection-number"] = "2006";
                input[0].tags = [input[0].id];
                if (ret.htmlIDs.indexOf(testKey) === -1) {
                    ret.htmlIDs.push(testKey);
                }
                if (ret.itemIDs.indexOf(input[0].id) === -1) {
                    ret.itemIDs.push(input[0].id);
                    newItems.push(input[0]);
                }
            }
        }
    }

}

fs.writeFileSync("FIXUP-LEG-REG-DATES-OBJECT.json", JSON.stringify(ret, null, 2));
fs.writeFileSync("FIXUP-LEG-REG-DATES-ITEMS.json", JSON.stringify(newItems, null, 2));
