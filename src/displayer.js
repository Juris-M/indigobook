import axios from "axios";
import { urlParts } from "./utils.js";
import handleErr from "./err";

var urlStub = urlParts().base;

var positionMap = {
    "0": "First reference",
    "1": "Subsequent reference",
    "2": "Id. reference",
    "3": "Id. reference with locator"
};

var labelMaps = {};

var courtMap = {};
export default async (cslObj, params) => {
    var offset = null;
    if (cslObj.jurisdiction) {
        var m = cslObj.jurisdiction.match(/^([0-9][0-9][0-9])/);
        if (m) {
            offset = parseInt(m[1]);
        }
    }
    if ("legal_case" === cslObj.type && cslObj.jurisdiction && cslObj.authority) {
        if (offset) {
            var jurisdictionCode = cslObj.jurisdiction.slice(3, 3+offset);
            var countryCode = jurisdictionCode.split(":")[0];
            if (!courtMap[jurisdictionCode]) {
                // Fetch courtMap for jurisdiction if necessary
                var result = await axios({
                    method: "get",
                    url: `${urlStub}/courtMaps/${countryCode}.json`
                }).catch((e) => handleErr(e));
                courtMap[countryCode] = result.data;
            }
            var countryAbbrevs = courtMap[countryCode];
            var court = countryAbbrevs[jurisdictionCode][cslObj.authority];
            if (court) {
                cslObj.authority = court;
            }
        }
    }
    if (offset) {
        var lst = cslObj.jurisdiction.slice(offset + 3).split("|");
        if (lst.length == 2) {
            cslObj.jurisdiction = lst.join("|");
        } else {
            cslObj.jurisdiction = lst.slice(1).join("|");
        }
    }

    // Okay, great. We have a CSL JSON object with human-readable content.
    
    // Load the labels
    if (!labelMaps[cslObj.type]) {
        var result = await axios({
            method: "get",
            url: `${urlStub}/labelMaps/${cslObj.type}.json`
        });
        labelMaps[cslObj.type] = result.data;
    }
    var labelMap = labelMaps[cslObj.type];

    const decodeVal = (val) => {
        var value;
        if (!val) return false;
        
        // Returns a string or an array of string values.
        
        if ("object" === typeof val) {
            if ("undefined" === typeof val.length) {
                if (val["date-parts"] && val["date-parts"][0] && val["date-parts"][0][0]) {
                    value = val["date-parts"].map(date => {
                        return date.join("-");
                    }).join("/");
                } else if (val.literal) {
                    value = val.literal;
                } else {
                    value = false;
                    console.log("Ouch");
                }
            } else {
                value = [];
                for (var name of val) {
                    value.push([name.family, name.given].join(", "));
                }
                if (value.length === 0) {
                    value = false;
                }
            }
        } else {
            value = val;
        }
        return value;
    };
    
    // Step through the labels, check each for presence in item, push Label and (decoded) val.
    var ret = [];
    var value, label;
    for (var mapInfo of labelMap) {
        if (mapInfo[0] === "type") {
            ret.push({
                label: "Item Type",
                value: mapInfo[1]
            });
        } else if ( mapInfo[0] === "admin-flag" || mapInfo[0] === "gazette-flag") {
            if (cslObj[mapInfo[0]]) {
                ret.push({
                    label: mapInfo[1],
                    value: "✓"
                });
            }
        } else {
            label = mapInfo[1];
            var value = decodeVal(cslObj[mapInfo[0]]);
            if (value) {
                if ("object" === typeof value) {
                    for (var v of value) {
                        ret.push({
                            label: label,
                            value: v
                        });
                        label = "";
                    }
                } else {
                    ret.push({
                        label: label,
                        value: value
                    });
                }
            }
        }
    }
    
    if (params.locator) {
        ret.push({
            label: "Locator",
            value: params.locator
        });
    }
    ret.push({
        label: "Position",
        value: positionMap[params.position]
    });
    if (params["suppress-author"]) {
        ret.push({
            label: "Suppress Author",
            value: "✓"
        });
    }
    return ret;
}
