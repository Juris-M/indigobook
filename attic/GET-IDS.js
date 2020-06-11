var fs = require("fs");

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

var files = [
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c361.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c362.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c376.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c377.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c419.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c461.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c466.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c467.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c480.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c481.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c482.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c576.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c610.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c611.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c659.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c683.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c684.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c732.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c737.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c744.txt",
    "/media/storage/src/JM/citeproc-js/fixtures/styles/jm-indigobook-law-review-2/style_c745.txt",
]

var ret = [];

for (var file of files) {
    var txt = fs.readFileSync(file).toString();
    var itemKeys = getItemKeys(txt);
    for (var itemKey of itemKeys) {
        if (ret.indexOf(itemKey) === -1) {
            ret.push(itemKey);
        }
    }
}

console.log(JSON.stringify(ret, null, 2));


