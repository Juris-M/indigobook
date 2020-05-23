import { getToBase64 } from "./utils.js";

var signalMap = {
    none: "",
    eg: "e.g.",
    accord: "accord",
    see: "see",
    seealso: "see also",
    seeeg: "see, e.g.",
    cf: "cf.",
    contra: "contra",
    butsee: "but see",
    seegenerally: "see generally",
    Eg: "E.g.",
    Accord: "Accord",
    See: "See",
    Seealso: "See also",
    Seeeg: "See, e.g.",
    Cf: "Cf.",
    Contra: "Contra",
    Butsee: "But see",
    Butseeeg: "But see, e.g.",
    Seegenerally: "See generally",
    butcf: "but cf.",
    compare: "compare",
    Butcf: "But cf.",
    Compare: "Compare",
    with: "with",
    and: "and",
    affirmed: "aff'd",
    affirming: "aff'g",
    certdenied: "cert. denied",
    other: "on other grounds",
    revsub: "sub nom.",
    affirmed: "aff'd",
    affirming: "aff'g",
    certdenied: "cert. denied",
    reversed: "rev'd",
    other: "on other grounds",
    subnom: "sub nom.",
    description: "Description of content,"
}

const commaCheck = (str) => {
    var whitelist = [
        "eg"
    ];
    var blacklist = [
        "generally"
    ];
    var noSlice = [
        "affirmed",
        "certdenied",
        "reversed::other",
        "reversed"
    ];
    str = str.toLowerCase();
    if (noSlice.indexOf(str) > -1) {
        return true;
    } else {
        for (var substr of blacklist) {
            if (str.indexOf(substr) > -1) {
                return false;
            }
        }
        for (var substr of whitelist) {
            if (str.indexOf(substr) > -1) {
                return true;
            }
        }
    }
    return false;
}

export default (html_id, rawStr, base64encoder) => {
    if ("string" !== typeof html_id || "string" !== typeof rawStr) {
        throw "parseid must have two string arguments";
    }
    rawStr = rawStr.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">");
    if (!base64encoder) {
        var toBase64 = getToBase64(btoa);
    } else {
        var toBase64 = getToBase64(base64encoder);
    }
    var ret = {
        html_id: html_id,
        test_id: null,
        "citation-items": []
    };
    var test_id = [];
    var strLst = rawStr.split("++");
    for (var str of strLst) {
        var m = str.match(/^([^\-]+)-([^\-]+)-([0-3]+)-([0-1]+)(?:\-(.*))*/);
        if (m) {
            var test_id_buf = m.slice(1, 5);
            var params = {};
            if (m[1] !== "none") {
                var lst = m[1].split("::");
                lst = lst.map((o) => {
                    return typeof signalMap[o] !== "undefined" ? signalMap[o] : o;
                });
                var signal = lst.join(" ");
                if (m[1] === "description") {
                    params.prefix = signal;
                } else {
                    params.prefix = `<i>${signal}</i>`;
                }
                if (commaCheck(m[1])) {
                    params.prefix = `${params.prefix},`;
                    console.log(`OK! ${html_id}`);
                }
            }
            params.id = m[2];
            params.position = parseInt(m[3]);
            if (parseInt(m[4])) {
                params["suppress-author"] = !!parseInt(m[4]);
            }
            if (m[5]) {
                params.locator = m[5];
                test_id_buf.push(toBase64(m[5]));
            }
            test_id.push(test_id_buf.join("-"));
            ret["citation-items"].push(params);
        } else {
            return false;
        }
    }
    ret.test_id = test_id.join("++");
    return ret;
}
