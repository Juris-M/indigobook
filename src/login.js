// this for logging in (needs jQuery calls replaced)

// Access token should be acquired by interactions below
// It should be used only within this module
import axios from 'axios';

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
    }
}

const queryMaker = (data) => {
    var ret = [];
    for (let key in data) {
        let val = data[key];
        ret.push(`${key}=${val}`);
    }
    ret = ret.join('&');
    return '?`${ret}`'
}

const startLogin = () => {
    const access_token = window.localStorage.getItem('access_token');
    if (access_token) return;
    window.localStorage.removeItem('block_login');
    const params = urlParts();
    if (!params.query.code) {
        // ID from Juris-M OAuth app reg
        var client_id = "eb529c0faf1bace5811d";
        if (document.location.host === "fbennett.github.io") {
            client_id = "28d992e126b54d095e4b";
        }
        document.location.href="https://github.com/login/oauth/authorize?client_id=" + client_id + "&scope=public_repo&status=98754325";
    }
}

const finishLogin = (getLoginStateOn, getEvdata, openModal) => {
    const block_login = window.localStorage.getItem('block_login');
    if (block_login) return;
    const params = urlParts();
    if (params.query.code) {
        // Get temporary code
        var code = params.query.code;
        // Remove code from URL
        history.replaceState({}, document.title, params.url);
        // Call for validation
        var mode = "indigo";
        if (document.location.host === "fbennett.github.io") {
            mode = "indigodev";
        }
        var url = 'https://our.law.nagoya-u.ac.jp/juris-m/authenticate/' + code + '?case=' + mode;
        axios.get(url).then((response) => {
            window.localStorage.setItem('access_token', response.data);
            let cite_id = window.localStorage.getItem('cite_id');
            let cite_text = window.localStorage.getItem('cite_text');
            getEvdata({
                id: cite_id,
                cite: cite_text
            });
            let elem = document.getElementById(cite_id);
            if (elem) {
                elem.scrollIntoView();
            }
            getLoginStateOn();
            openModal();
        }).catch((error) => {
            console.log("LOGIN ERROR: " + error.message);
        });
    }
}

const loginOK = () => {
    const access_token = window.localStorage.getItem('access_token');
    return !!access_token;
}

const logOut = () => {
    window.localStorage.removeItem('access_token');
    window.localStorage.setItem('block_login', true);
}

export {
    startLogin,
    finishLogin,
    loginOK,
    logOut,
    urlParts
}
