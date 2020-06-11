const fs = require("fs");

var obj = JSON.parse(fs.readFileSync("footprints.json").toString());

var ret = {};

for (var key in obj) {
    ret[obj[key]] = key;
}

var arr = [];

for (var key in ret) {
    arr.push(ret[key]);
}


console.log(JSON.stringify(arr, null, 2));

console.log(arr.length);
