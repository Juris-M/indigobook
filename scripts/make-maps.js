const fs = require("fs");
const path = require("path");
const axios = require("axios");

const schemaURL = "https://raw.githubusercontent.com/Juris-M/zotero-schema/master/schema-jurism.json";
const abbrevIndexURL = "https://raw.githubusercontent.com/Juris-M/jurism-abbreviations/master/DIRECTORY_LISTING.json";
const abbrevStub = "https://raw.githubusercontent.com/Juris-M/jurism-abbreviations/master";

const jurisMapDir = path.join(__dirname, "..", "..", "JM", "jurism", "juris-maps");

const handleErr = (e, url) => {
    console.log(`Axios fail: ${e.message} (${url})`);
    process.exit();
}

const getType = (itemType, typeList) => {
    for (var zType of typeList) {
        if (zType === itemType) {
            return true;
        }
    }
}

const getCSL = (field, fieldList, dateList) => {
    var ret = false;
    for (var zField of fieldList) {
        if (zField === field) {
            ret = true;
        }
    }
    if (!ret) {
        for (var zField of fieldList) {
            if (zField === field) {
                ret = true;
            }
        }
    }
    return ret;
}

const runItemMaps = async () => {
    console.log(`Get schema: ${schemaURL}`);
    var obj = await axios({
        method: "get",
        url: schemaURL
    }).catch((e) => handleErr(e, schemaURL));
    var data = obj.data;
    var typeLabels = data.locales["en-US"].itemTypes;
    var fieldLabels = data.locales["en-US"].fields;
    var creatorLabels = data.locales["en-US"].creatorTypes;
    outMap = {
        itemType: {
            csl: "type",
            label: "Item Type"
        }
    };
    
    // Build the map by iterating through itemTypes, to catch all varnames.
    for (var info of data.itemTypes) {
        // map type
        for (var cslType in data.csl.types) {
            if (getType(info.itemType, data.csl.types[cslType])) {
                outMap[info.itemType] = {
                    csl: cslType,
                    label: typeLabels[info.itemType]
                };
                break;
            }
        }
        // map fields and dates
        for (var entry of info.fields) {
            outMap[entry.field] = {
                label: fieldLabels[entry.field]
            };
            if (entry.baseField) {
                for (var cslField in data.csl.fields.text) {
                    if (getCSL(entry.baseField, data.csl.fields.text[cslField])) {
                        outMap[entry.field].csl = cslField;
                        break;
                    }
                }
                if (!outMap[entry.field].csl) {
                    for (var cslDate in data.csl.fields.date) {
                        if (getCSL(entry.baseField, data.csl.fields.date[cslDate])) {
                            outMap[entry.field].csl = cslDate;
                            break;
                        }
                    }
                }
            } else {
                for (var cslField in data.csl.fields.text) {
                    if (getCSL(entry.field, data.csl.fields.text[cslField])) {
                        outMap[entry.field].csl = cslField;
                        break;
                    }
                }
                if (!outMap[entry.field].csl) {
                    for (var cslDate in data.csl.fields.date) {
                        if (getCSL(entry.field, data.csl.fields.date[cslDate])) {
                            outMap[entry.field].csl = cslDate;
                            break;
                        }
                    }
                }
            }
        }
        // map creators
        for (var entry of info.creatorTypes) {
            outMap[entry.creatorType] = {
                label: creatorLabels[entry.creatorType]
            };
            if (entry.primary) {
                outMap[entry.creatorType].csl = "author";
            } else {
                if (data.csl.names[entry.creatorType]) {
                    outMap[entry.creatorType].csl = data.csl.names[entry.creatorType];
                }
            }
        }
    }
        
    var retCSL = {};
    for (var zVar in outMap) {
        retCSL[zVar] = outMap[zVar].csl;
    }
    var pth = path.join(__dirname, "..", "scripts", "cslMap.json");
    fs.writeFileSync(pth, JSON.stringify(retCSL, null, 2));

    for (var info of data.itemTypes) {
        var retLabels = {};
        retLabels[outMap[info.itemType].csl] = outMap[info.itemType].label;
        for (var entry of info.creatorTypes) {
            if (outMap[entry.creatorType].csl) {
                retLabels[outMap[entry.creatorType].csl] = outMap[entry.creatorType].label;
            }
        }
        for (var entry of info.fields) {
            if (outMap[entry.field].csl) {
                retLabels[outMap[entry.field].csl] = outMap[entry.field].label;
            }
        }
        var fileStub = outMap[info.itemType].csl;
        var pth = path.join(__dirname, "..", "static", "labelMaps", `${fileStub}.json`);
        fs.writeFileSync(pth, JSON.stringify(retLabels, null, 2));
    }
}

const extractCourtMap = (obj) => {
    var fullJurisdictionID = [];
    for (var i=0,ilen=obj.jurisdictions.length; i<ilen; i++) {
        var entry = obj.jurisdictions[i];
        if ("undefined" === typeof entry[2]) {
            fullJurisdictionID.push(entry[0]);
        } else {
            fullJurisdictionID.push(`${fullJurisdictionID[entry[2]]}:${entry[0]}`);
        }
    }
    var fullCourtName = [];
    for (var i=0,ilen=obj.courts.length; i<ilen; i++) {
        var entry = obj.courts[i];
        fullCourtName.push(obj.courtNames[entry[1]]);
    }
    var ret = {};
    for (var i=0,ilen=obj.courtJurisdictionLinks.length; i<ilen; i++) {
        var entry = obj.courtJurisdictionLinks[i];
        if (!ret[fullJurisdictionID[entry[0]]]) {
            ret[fullJurisdictionID[entry[0]]] = {};
        }
        ret[fullJurisdictionID[entry[0]]][obj.courts[entry[1]][0]] = fullCourtName[entry[1]];
    }
    return ret;
};

const runJurisdictionMaps = async () => {
    for (var filename of fs.readdirSync(jurisMapDir)) {
        if (filename.slice(-5) !== ".json") continue;
        var m = filename.match(/^juris-([a-z]+)-map.json/);
        if (m) {
            // var retJurisdiction = {};
            var outFile = `${m[1]}.json`;
            var outPath = path.join(__dirname, "..", "static", "courtMaps", outFile);
            var jurisMapFilePath = `${jurisMapDir}/juris-${m[1]}-map.json`;
            var obj = JSON.parse(fs.readFileSync(jurisMapFilePath).toString());
            if (obj.courts) {
                console.log(`Court abbrevs from: ${filename}`);
                var retCourts = extractCourtMap(obj);
            } else {
                var retCourts = {};
                retCourts[m[1]] = {};
            }
            fs.writeFileSync(outPath, JSON.stringify(retCourts));
        }
    }
};

const run = async () => {
    await runItemMaps();
    await runJurisdictionMaps().catch((e) => console.log(e));
}


run();
