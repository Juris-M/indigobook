import utf8 from "utf8";

const error = (e) => {
    console.log(e.toString());
}

const urlParts = () => {
    var url = window.location.toString();
    var qrex = /[?&]([^=#]+)=([^&#]*)/g,
        frex = /\#(.*)$/g,
        query = {},
        frag = "",
        match;
    while (match = qrex.exec(url)) {
        query[match[1]] = match[2];
    }
    match = frex.exec(url);
    if (match) {
        frag = match[1];
    }
    url = url.replace(/\?.*/, "").replace(/\#.*/, "");
    var base = url.replace(/^(.*\/).*/, "$1");
    return {
        query: query,
        frag: frag,
        url: url,
        base: base
    };
}

const buildQuery = (data) => {
    var ret = [];
    for (let key in data) {
        let val = data[key];
        ret.push(`${key}=${val}`);
    }
    ret = ret.join('&');
    return '?`${ret}`';
}

const getRepoAddr = () => {
    var ret = null;
    if (window.location.pathname.indexOf("indigobook/for-briefs-and-memoranda.html") > -1) {
        ret = "indigobook";
    } else {
        ret = "indigobook-law-review";
    }
    return ret;
}

const getPullRequestURL = () => {
    return window.localStorage.getItem('cite_url');
};

const loginOK = () => {
    const access_token = window.localStorage.getItem('access_token');
    return !!access_token;
};

const logOut = () => {
    var elem = document.getElementById(window.localStorage.getItem("html_id"));
    window.localStorage.setItem("citation", window.localStorage.getItem('citation_orig'));
    window.localStorage.removeItem('cite_url');
    window.localStorage.removeItem('test_content');
    window.localStorage.removeItem('access_token');
    window.localStorage.setItem('block_login', true);
};

const getToBase64 = (func) => {
    return (str) => {
        var bytes = utf8.encode(str);
        return func(bytes);
    };
};

const getFromBase64 = (func) => {
    return (str) => {
        console.log(str);
        var bytes = func(str);
        return utf8.decode(bytes);
    };
};

export {
    urlParts,
    buildQuery,
    error,
    getPullRequestURL,
    loginOK,
    logOut,
    getToBase64,
    getFromBase64,
    getRepoAddr
}

module = {
    exports: {
        urlParts: urlParts,
        buildQuery: buildQuery,
        error: error,
        getPullRequestURL: getPullRequestURL,
        loginOK: loginOK,
        logOut: logOut,
        getToBase64: getToBase64,
        getFromBase64: getFromBase64,
        getRepoAddr: getRepoAddr
    }
}
