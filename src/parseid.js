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

export default (html_id) => {
    var elem = document.getElementById(html_id);
    var str = elem.getAttribute("data-info");
    var ret = false;
    var m = str.match(/^([^\-]+)-([^\-]+)-([^\-\|]+)(?:\-(.*))*/);
    if (m) {
        var test_id_buf = m.slice(1, 4);
        ret = {
            test_id: null,
            params: {}
        };
        if (m[1] !== "none") {
            ret.params.prefix = typeof signalMap[m[1]] !== "undefined" ? signalMap[m[1]] : m[1];
        }
        ret.params.id = m[2];
        ret.params.position = parseInt(m[3]);
        
        if (m[4]) {
            ret.params.locator = m[4];
            test_id_buf.push(btoa(m[4]));
        }
        ret.test_id = test_id_buf.join("-");
    }
    return ret;
}
