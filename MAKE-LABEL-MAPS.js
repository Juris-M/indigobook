const fs = require("fs");
const path = require("path");

const schemaPath = (fn) => {
    var stub = path.join(__dirname, "..", "JM", "jurism", "resource", "schema", "global");
    if (fn) {
        return path.join(stub, fn);
    } else {
        return stub;
    }
}

const labelPath = (fn) => {
    var stub = path.join(__dirname, "static", "labelMaps");
    if (fn) {
        return path.join(stub, fn);
    } else {
        return stub;
    }
}

var obj = JSON.parse(fs.readFileSync(schemaPath("schema-jurism.json")).toString());

const makeTypes = () => {
    cslToLabel = {};
    typeZtoCSL = {};
    for (var cslType in obj.csl.types) {
        for (var zType of obj.csl.types[cslType]) {
            if (["attachment", "note"].indexOf(zType) > -1) {
                continue;
            }
            typeZtoCSL[zType] = cslType;
        }
    }
    for (var zType in typeZtoCSL) {
        var cslType = typeZtoCSL[zType];
        cslToLabel[cslType] = [
            [
                "type",
                obj.locales["en-US"].itemTypes[zType]
            ]
        ];
        setOneFieldLabelForType(cslToLabel[cslType], zType, 0);
        setCreatorLabelsForType(cslToLabel[cslType], zType);
        setFieldLabelsForType(cslToLabel[cslType], zType);
    }
    return cslToLabel;
}

const setOneFieldLabelForType = (mapForType, zType, idx) => {
    top:
    for (var typeInfo of obj.itemTypes) {
        if (zType === typeInfo.itemType) {
            var fieldInfo = typeInfo.fields[idx];
            var zField = fieldInfo.field;
            var zBaseField = fieldInfo.baseField ? fieldInfo.baseField : fieldInfo.field;
            outer:
            for (var segment in obj.csl.fields) {
                for (var cslField in obj.csl.fields[segment]) {
                    for (var zFieldCandidate of obj.csl.fields[segment][cslField]) {
                        if (zFieldCandidate === zBaseField) {
                            mapForType.push([
                                cslField,
                                obj.locales["en-US"].fields[zField]
                            ]);
                            break outer;
                        }
                    }
                }
            }
            break top;
        }
    }
}

const setFieldLabelsForType = (mapForType, zType) => {
    for (var typeInfo of obj.itemTypes) {
        if (zType === typeInfo.itemType) {
            for (var i=1,ilen=typeInfo.fields.length;i<ilen;i++) {
                setOneFieldLabelForType(mapForType, zType, i);
            }
        }
    }
}

const setOneCreatorLabelForType = (mapForType, zType, idx) => {
    top:
    for (var typeInfo of obj.itemTypes) {
        if (zType === typeInfo.itemType) {
            var creatorInfo = typeInfo.creatorTypes[idx];
            var zCreator = creatorInfo.creatorType;
            if (!obj.csl.names[zCreator]) break;
            mapForType.push([
                obj.csl.names[zCreator],
                obj.locales["en-US"].creatorTypes[zCreator]
            ]);
            break;
        }
    }
}

const setCreatorLabelsForType = (mapForType, zType) => {
    for (var typeInfo of obj.itemTypes) {
        if (zType === typeInfo.itemType) {
            for (var i=0,ilen=typeInfo.creatorTypes.length;i<ilen;i++) {
                setOneCreatorLabelForType(mapForType, zType, i);
            }
        }
    }
}

var ret = makeTypes();

for (var fn in ret) {
    fs.writeFileSync(labelPath(`${fn}.json`), JSON.stringify(ret[fn]));
}

console.log("Done!");
