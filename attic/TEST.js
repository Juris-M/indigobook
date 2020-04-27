var fs = require("fs");

var obj = JSON.parse(fs.readFileSync("placeholder-map.json").toString());

var obj2 = {};

for (var key in obj) {
    if (obj2[obj[key]]) {
        console.log(`${key} === ${obj2[obj[key]]}`);
        continue;
    }
    obj2[obj[key]] = key;
}
