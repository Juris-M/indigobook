var fs = require("fs");
var path = require("path");

var unset = process.argv[2] === "-R" ? true : false;

const stylePath = () => {
    return path.join(__dirname, "..", "JM", "jm-styles", "jm-indigobook-law-review-2.csl");
}

const modulePath = (str) => {
    var base = path.join(__dirname, "..", "JM", "citeproc-js", "juris-modules");
    if (str) {
        return path.join(base, str);
    } else {
        return base;
    }
}

var counter = 1;

var padout = (num) => {
    var num = "" + num;
    while (num.length < 4) {
        num = "0" + num;
    }
    return num;
}

const addIDs = (txt) => {
    var lst = txt.split("\n");
    for (var i in lst) {
        var line = lst[i];
        var m = line.match(/^(\s*<(?:if|else-if|else))(?:\s+condition-id=\"[^\"]+\")*(.*)/);
        if (m) {
            if (unset) {
                lst[i] = `${m[1]}${m[2]}`;
            } else {
                lst[i] = `${m[1]} condition-id="z${padout(counter)}"${m[2]}`;
            }
            counter++;
        }
    }
    return lst.join("\n");
}

var txt = fs.readFileSync(stylePath()).toString();
txt = addIDs(txt);
fs.writeFileSync(stylePath(), txt);

for (var fileName of fs.readdirSync(modulePath())) {
    if (!fileName.match(/^juris.*csl$/)) continue;
    var txt = fs.readFileSync(modulePath(fileName)).toString();
    txt = addIDs(txt);
    fs.writeFileSync(modulePath(fileName), txt);
}

console.log(counter);
