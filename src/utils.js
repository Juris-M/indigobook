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
    if (match = frex.exec(url)) {
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

const getPullRequestURL = () => {
    return window.localStorage.getItem('cite_url');
};

const loginOK = () => {
    const access_token = window.localStorage.getItem('access_token');
    return !!access_token;
};

const logOut = () => {
    var elem = document.getElementById(window.localStorage.getItem("html_id"));
    window.localStorage.setItem("citation", elem.innerHTML);
    window.localStorage.removeItem('access_token');
    window.localStorage.setItem('block_login', true);
};

export {
    urlParts,
    buildQuery,
    error,
    getPullRequestURL,
    loginOK,
    logOut
}

module = {
    exports: {
        urlParts: urlParts,
        buildQuery: buildQuery,
        error: error,
        getPullRequestURL: getPullRequestURL,
        loginOK: loginOK,
        logOut: logOut
    }
}
