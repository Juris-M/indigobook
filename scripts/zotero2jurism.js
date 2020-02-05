const schema = require("./schema-min.json");
// If this is made into a general toolbox for handling Zotero API
// returns as Jurism data, we could pull in the schema here,
// and both do a better job with creator conversions, and provide
// a return supplemented with field labels.

// Encoding of names set single-field names as "name" in encoded data
// at some point. This recovers from that glitch.
function normalizeName(obj, fieldMode, isTop) {
    var ret = {
        creatorType: obj.creatorType
    };
    if (obj.name || (obj.lastName && !obj.firstName) || fieldMode) {
        ret.lastName = obj.lastName ? obj.lastName : obj.name;
        ret.fieldMode = 1;
    } else {
        ret.lastName = obj.lastName;
        ret.firstName = obj.firstName;
        ret.fieldMode = 0;
    }
    if (isTop) {
        ret.multi = obj.multi;
        if (!ret.multi) {
            ret.multi = {
                _key: {}
            }
        }
    }
    return ret;
}

function getCreatorLabel(fieldName) {
    return schema.locales["en-US"].creatorTypes[fieldName];
}

function getFieldLabel(fieldName) {
    return schema.locales["en-US"].fields[fieldName];
}

function normalizeNames(obj) {
    for (var i in obj.creators) {
        var creator = obj.creators[i];
        if (getCreatorLabel(creator.creatorType)) {
            obj.creators[i] = normalizeName(creator, creator.fieldMode, true);
            for (var j in creator.multi._key) {
                creator.multi._key[j] = normalizeName(creator.multi._key[j], creator.fieldMode);
            }
        }
    }
    return obj;
}

function zoteroToJurismData(obj) {
    var extradata = null;
    var zObj = obj.data;
    zObj.multi = {
        main: {},
        _keys: {}
    }
    if (zObj.extra) {
        var m = zObj.extra.match(/mlzsync1:([0-9][0-9][0-9][0-9])(.*)/);
        if (m) {
            offset = parseInt(m[1], 10);
            extradata = JSON.parse(m[2].slice(0, offset))
            zObj.extra = zObj.extra.slice((offset+13));
        }
    }
    if (extradata) {
        if (extradata.extracreators) {
            for (var j=0,jlen=extradata.extracreators.length;j<jlen;j++) {
                zObj.creators.push(zCreator);
            }
        }
    }
    if (extradata) {
        var creatorMap = {};
        var creatorCounts = {};
        for (var j=0,jlen=zObj.creators.length;j<jlen;j++) {
            var zCreatorName = zObj.creators[j].creatorType;
            if (!creatorCounts[zCreatorName]) {
                creatorCounts[zCreatorName] = 0;
            }
            creatorMap[j] = {
                zCreatorName: zCreatorName,
                pos: creatorCounts[zCreatorName]
            }
            creatorCounts[zCreatorName]++;
        }
        // FIX-UPS
        if (extradata.xtype) {
            zObj.type = extradata.xtype;
        }
        if (extradata.extrafields) {
            for (var key in extradata.extrafields) {
                zObj[key] = extradata.extrafields[key];
            }
        }
        if (extradata.multifields) {
            zObj.multi = extradata.multifields;
        }
        if (extradata.multicreators) {
            for (var pos in extradata.multicreators) {
                var creatorData = extradata.multicreators[pos];
                zObj.creators[creatorMap[pos].pos].multi = creatorData;
            }
        }
        if (zObj.jurisdiction) {
            var m = zObj.jurisdiction.match(/^([0-9][0-9][0-9])/);
            if (m) {
                var offset = parseInt(m[1]);
                zObj.jurisdiction = zObj.jurisdiction.slice(offset + 3).split("|").slice(1).join("|");

            }
        }
    }
    zObj = normalizeNames(zObj);
    return zObj;
}

function getLabelsAndVals(obj) {
    var ret = {
        key: obj.key,
        creators: {},
        fields: {}
    };
    for (var fieldName in obj) {
        if (!obj[fieldName]) continue;
        if (["dateModified", "dateAdded"].indexOf(fieldName) > -1) continue;
        var fieldLabel = getFieldLabel(fieldName);
        if (fieldLabel) {
            ret.fields[fieldName] = {
                value: obj[fieldName],
                label: fieldLabel.split(/\s+/).slice(-1)[0]
            }
        }
    }
    for (var i in obj.creators) {
        var creator = obj.creators[i];
        var creatorLabel = getCreatorLabel(creator.creatorType);
        if (creatorLabel) {
            if (!ret.creators[creator.creatorType]) {
                ret.creators[creator.creatorType] = [];
            }
            ret.creators[creator.creatorType].push({
                value: creator,
                label: creatorLabel
            });
        }
    }
    return ret;
}

module.exports = {
    zoteroToJurismData: zoteroToJurismData,
    getLabelsAndVals: getLabelsAndVals
}


