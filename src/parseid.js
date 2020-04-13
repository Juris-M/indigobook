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
    Seegenerally: "See generally"
}

export default (str) => {
    var ret = false;
    var m = str.match(/^([^\-]+)-([^\-]+)-([^\-\|]+)(?:\-(.*))*/);
    if (m) {
        ret = {
            test_id: null,
            params: {}
        };
        ret.params.prefix = typeof signalMap[lst[0]] !== "undefined" ? signalMap[lst[0]] : lst[0];
        ret.id = m[1];
        ret.params.position = parseInt(m[2]);
        
        ret.test_id = lst.slice(0, 3);
        
        if (m[3]) {
            ret.params.locator = m[3];
            ret.test_id.push(btoa(m[3]));
        }
    }
    return ret;
}
