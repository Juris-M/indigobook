const fs = require("fs");
const csvparse = require("csv-parse");
const csvstringify = require("csv-stringify");

const stringifier = csvstringify();
const parser = csvparse();

const path_to_csv = "citations.csv";

const makeThree = (seq) => {
    seq = "" + seq;
    while (seq.length < 3) {
        seq = "0" + seq;
    }
    return seq;
}

const writeSpreadsheetArrays = (path_to_csv, arr) => {
    var data = [];
    var writerPromise = new Promise((resolve, reject) => {
        stringifier.on("readable", function(){
            let row;
            while(row = stringifier.read()){
                data.push(row)
            }
        });
        stringifier.on('error', function(err){
            console.error(err.message)
            reject(err);
        });
        stringifier.on('finish', function(){
            var ret = data.join("");
            fs.writeFileSync(path_to_csv, ret);
            resolve(data.join(""));
        });
        for (var line of arr) {
            stringifier.write(line);
        }
        stringifier.end();
        
    });
    return writerPromise;
}

const readSpreadsheetArrays = (path_to_csv) => {
    var firstRecord = false;
    var ret = [];
    var spreadsheetArraysPromise = new Promise((resolve, reject) => {
        parser.on("readable", function(){
            let record;
            while (record = parser.read()) {
                if (firstRecord) {
                    firstRecord = false;
                } else {
                    ret.push(record);
                }
            }
        });
        parser.on('error', function(err){
            reject(err);
        });
        parser.on('end', function(){
            resolve(ret);
        });
        var txt = fs.readFileSync(path_to_csv);
        parser.write(txt);
        parser.end();
    });
    return spreadsheetArraysPromise;
}

const run = async () => {
    const arr = await readSpreadsheetArrays(path_to_csv);
    var obj = {};
    for (var info of arr) {
        if (info[3]) {
            var seq = makeThree(info[0]);
            obj[seq] = info;
        }
    }
    var txt = fs.readFileSync("index-new.html").toString();
    var count = 1;
    var txt = txt.replace(/id="(c[0-9]{3})"\s+class="cite"\s+data-info=""/g, (o) => {
        var seq = makeThree(count);
        count++;
        if (obj[seq]) {
            var m = obj[seq][7].match(/(?:(?:,\s+([-0-9]+)\s+\()|(?:§\s+(.*)\s+\()|(?:at\s+(.*)))/);
            if (m && !obj[seq][6]) {
                if (m[1]) {
                    obj[seq][6] = `p. ${m[1]}`;
                } else if (m[2]) {
                    obj[seq][6] = `sec. ${m[2]}`;
                } else if (m[3]) {
                    obj[seq][6] = `p. ${m[3]}`;
                }
            }
            var prefix = obj[seq][2];
            var key = obj[seq][3];
            var position = obj[seq][4];
            var suppressAuthor = obj[seq][5];
            var locator = obj[seq][6];
            if (locator) {
                return `id="c${seq}" class="cite" data-info="${prefix}-${key}-${position}-${suppressAuthor}-${locator}"`;
            } else {
                return `id="c${seq}" class="cite" data-info="${prefix}-${key}-${position}-${suppressAuthor}"`;
            }
        } else {
            return `id="c${seq}" class="cite nodata" data-info=""`;
        }
    });
    //var ret = Object.keys(obj).map((o) => {
    //    return obj[o];
    //});
    // await writeSpreadsheetArrays("citations-revised.csv", ret);
    fs.writeFileSync("index-new-revised.html", txt);
}

run();
