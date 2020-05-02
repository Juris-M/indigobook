var fs = require("fs");
var path = require("path");

const itemdataPath = (filename) => {
    return path.join(__dirname, "static", "itemdata", filename);
}

var removals = JSON.parse(fs.readFileSync("./REMOVALS.json").toString());

for (var key in removals) {
    var info = JSON.parse(fs.readFileSync(itemdataPath(`${key}.json`)).toString());
    console.log(info.section);
    //delete info.section;
    //fs.writeFileSync(itemdataPath(`${key}.json`), JSON.stringify(info, null, 2));
}
