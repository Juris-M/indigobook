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

export default (str, toBase64) => {
    if (!toBase64) {
        toBase64 = getToBase64(btoa);
    }
    var ret = false;
    var m = str.match(/^([^\-]+)-([^\-]+)-([0-3]+)-([0-1]+)(?:\-(.*))*/);
    if (m) {
        var test_id_buf = m.slice(1, 5);
        ret = {
            test_id: null,
            params: {}
        };
        if (m[1] !== "none") {
            var lst = m[1].split("::");
            lst = lst.map((o) => {
                return typeof signalMap[o] !== "undefined" ? signalMap[o] : o;
            });
            var signal = lst.join(" ");
            ret.params.prefix = `<i>${signal}</i>`;
        }
        ret.params.id = m[2];
        ret.params.position = parseInt(m[3]);
        if (parseInt(m[4])) {
            ret.params["suppress-author"] = !!parseInt(m[4]);
        }
        if (m[5]) {
            ret.params.locator = m[5];
            test_id_buf.push(toBase64(m[5]));
        }
        ret.test_id = test_id_buf.join("-");
    }
    return ret;
}
