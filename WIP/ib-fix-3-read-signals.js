const fs = require("fs");
const csvparse = require("csv-parse");

const parser = csvparse();

const path_to_csv = "citations.csv";

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
    var ret = {};
    const arr = await readSpreadsheetArrays(path_to_csv);
    for (var row of arr) {
        ret[row[2]] = true;
    }
    for (var key in ret) {
        console.log(key);
    }
}

run();
