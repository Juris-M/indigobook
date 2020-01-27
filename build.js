var fs = require("fs");
var path = require("path");
var _exec = require("child_process").exec;

if (!fs.existsSync(path.join(__dirname, "build"))) {
    fs.mkdirSync(path.join(__dirname, "build"));
}

//fs.copyFileSync(path.join(__dirname, "node_modules", "jquery-modal", "jquery.modal.js"),
//                path.join(__dirname, "assets", "js", "jquery.modal.js"));

//fs.copyFileSync(path.join(__dirname, "node_modules", "busy-load", "dist", "app.js"),
//                path.join(__dirname, "assets", "js", "busy.load.js"));

fs.copyFileSync(path.join(__dirname, "zotero2jurism.js"),
                path.join(__dirname, "build", "zotero2jurism.js"));

fs.copyFileSync(path.join(__dirname, "main.js"),
                path.join(__dirname, "build", "main.js"));

var schema = JSON.parse(fs.readFileSync(path.join(__dirname, "schema", "schema-jurism.json")).toString());
var schema_min = {
    locales: {
        "en-US": schema.locales["en-US"]
    }
}
fs.writeFileSync(path.join(__dirname, "build", "schema-min.json"), JSON.stringify(schema_min));

_exec("browserify "
      + path.join(__dirname, "build", "main.js")
      + " -o "
      + path.join(__dirname, "assets", "js", "bundle.js") + " -d",
      function(e){
          if (e) {
              console.log(e.message);
              console.log(e);
          } else {
              console.log("Done "+e);
          }
      });
      
