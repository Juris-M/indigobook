import { getToBase64 } from "./utils.js";

var signalMap = {
    none: "",
    eg: "e.g.",
    accord: "accord",
    see: "see",
    seealso: "see also",
    seeeg: "see e.g.",
    cf: "cf.",
    contra: "contra",
    butsee: "but see",
    seegenerally: "see generally",
    Eg: "E.g.",
    Accord: "Accord",
    See: "See",
    Seealso: "See also",
    Seeeg: "See e.g.",
    Cf: "Cf.",
    Contra: "Contra",
    Butsee: "But see",
    Seegenerally: "See generally",
    butcf: "but cf.",
    compare: "compare",
    Butcf: "but cf.",
    Compare: "compare",
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
    subnom: "sub nom."
}

export default (html_id, rawStr, base64encoder) => {
    if ("string" !== typeof html_id || "string" !== typeof rawStr) {
        throw "parseid must have two string arguments";
    }
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
                params.prefix = `<i>${signal}</i>`;
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
