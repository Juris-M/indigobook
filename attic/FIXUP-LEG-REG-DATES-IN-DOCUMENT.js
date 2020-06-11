const fs = require("fs");
const path = require("path");

const staticPath = (filename) => {
    var staticStub = path.join(__dirname, "static");
    if (filename) {
        return path.join(staticStub, filename);
    } else {
        return staticStub;
    }
}

const immediatePath = (filename) => {
    var stub = path.join(__dirname);
    if (filename) {
        return path.join(stub, filename);
    } else {
        return stub;
    }
}


var txt = fs.readFileSync(staticPath("indigobook.html")).toString();
var lists = JSON.parse(fs.readFileSync(immediatePath("FIXUP-LEG-REG-DATES-OBJECT.json")));


// Okay, success!
// Read in the html_id array and step though it, making this replacement
// in the document.

// Then on to the DB manipulation.

const processOneCite = (txt, htmlID) => {
    var rex = new RegExp(`(?:id=\"${htmlID}\"[^>]+>(<var>year</var>))`);
    txt = txt.replace(rex, (str, mOne) => {
        var newStr = str.replace(mOne, "<var>year as volume<\/var>");
        return newStr;
    });
    return txt;
};

                                       

const run = () => {
    for (var htmlID of lists.htmlIDs) {
        txt = processOneCite(txt, htmlID);
    }
};

run();

fs.writeFileSync(staticPath("indigobook-NEW.html"), txt);

console.log("Done!");
