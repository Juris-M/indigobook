var fs = require("fs");
var path = require("path");

const testPath = (filename) => {
    var testStub = path.join(__dirname, "..", "JM", "citeproc-js", "fixtures", "styles", "jm-indigobook-law-review-2");
    if (filename) {
        return path.join(testStub, filename);
    } else {
        return testStub;
    }
}

var itemKeys = [
  "6VIYWAWJ",
  "XVTKXI7Y",
  "3XNATSZD",
  "VSGCNUVB",
  "SI6YUISN",
  "FXFY32GJ",
  "5DDGKY6Y",
  "RJ2N4G4M",
  "JLJPW4UX",
  "7QD6IBEC",
  "UYSCVZQT",
  "EXERGX5M",
  "FWBEN4WI",
  "CGRQIYQN",
  "B4DWN7AF",
  "5JHPL8PV",
  "NNI8FY9M",
  "U9FKV6XK",
  "FXMI59JW",
  "RTNU9MPN",
  "63JBQY62",
  "K6LGVX5N",
  "LYN8K8UE",
  "INB34WPT",
  "NU6W72D7",
  "CA6ZYIEB"
]

var ret = [];

for (var filename of fs.readdirSync(testPath())) {
    var txt = fs.readFileSync(testPath(filename)).toString();
    for (var itemKey of itemKeys) {
        var rex = new RegExp(`${itemKey}`);
        if (txt.match(rex)) {
            ret.push(filename.slice(6, -4));
            break;
        }
    }
}

console.log(JSON.stringify(ret, null, 2));
