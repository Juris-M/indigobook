import axios from "axios";
import { urlParts } from "./utils.js";
import handleErr from "./err";

var urlStub = urlParts().base;

var labelMaps = {};

var courtMap = {};
export default async (cslObj) => {
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
                var countryAbbrevs = result.data;
                courtMap[countryCode] = countryAbbrevs;
            }
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
    
    console.log(JSON.stringify(labelMap, null, 2));
    
    var ret = [];
    for (var key in cslObj) {
        if ("id" === key) continue;
        var val = cslObj[key];
        if ("object" === typeof val) {
            if ("undefined" === typeof val.length) {
                if (val["date-parts"]) {
                    val = val["date-parts"].join("-");
                } else if (val.literal) {
                    val = val.literal;
                }
                ret.push({
                    label: labelMap[key],
                    value: val
                });
            } else {
                var nameLabel = labelMap[key];
                for (var name of val) {
                    ret.push({
                        label: nameLabel,
                        value: [name.family, name.given].join(", ")
                    });
                    nameLabel = "";
                }
            }
        } else if ("type" === key) {
            ret.push({
                label: "Item Type",
                value: labelMap[val]
            });
        } else {
            ret.push({
                label: labelMap[key],
                value: val
            });
        }
    }
    console.log(JSON.stringify(ret, null, 2));
    return ret;
}
