const fs = require("fs");
const path = require("path");
const axios = require("axios");

const schemaURL = "https://raw.githubusercontent.com/Juris-M/zotero-schema/master/schema-jurism.json";
const abbrevIndexURL = "https://raw.githubusercontent.com/Juris-M/jurism-abbreviations/master/DIRECTORY_LISTING.json";
const abbrevStub = "https://raw.githubusercontent.com/Juris-M/jurism-abbreviations/master";

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

const runJurisdictionMaps = async () => {
    var indexObj = await axios({
        method: "get",
        url: abbrevIndexURL
    }).catch((e) => handleErr(e, abbrevIndexURL));
    var index = indexObj.data;
    for (var indexInfo of index) {
        var m = indexInfo.filename.match(/^auto-([a-z]+).*/);
        if (m) {
            var retJurisdiction = {};
            var outFile = `${m[1]}.json`;
            var outPath = path.join(__dirname, "..", "static", "courtMaps", outFile);
            var abbrevsObj = await axios({
                method: "get",
                url: `${abbrevStub}/${indexInfo.filename}`
            }).catch((e) => handleErr(e, `${abbrevStub}/${indexInfo.filename}`));
            var abbrevs = abbrevsObj.data;
            for (var key in abbrevs.xdata) {
                if ("default" === key) continue;
                if (abbrevs.xdata[key]["institution-part"]) {
                    retJurisdiction[key] = abbrevs.xdata[key]["institution-part"];
                }
            }
            fs.writeFileSync(outPath, JSON.stringify(retJurisdiction));
        }
    }
};

const run = async () => {
    await runItemMaps();
    await runJurisdictionMaps();
}


run();
