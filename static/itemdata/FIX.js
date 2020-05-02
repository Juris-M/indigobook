var fs = require("fs");

for (var filename of fs.readdirSync(".")) {
    if (filename.slice(-5) !== ".json") continue;
    var obj = JSON.parse(fs.readFileSync(filename).toString());
    var note = obj.note;
    if (note) {
      console.log(obj.note);
    }
    // fs.writeFileSync(filename, JSON.stringify(obj, null, 2));
}
