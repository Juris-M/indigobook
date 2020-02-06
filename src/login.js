// this for logging in (needs jQuery calls replaced)

// Access token should be acquired by interactions below
// It should be used only within this module
import axios from 'axios';

var access_token = null;

const parseQuery = () => {
    const url = window.location.toString();
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
        params = {},
        match;
    while (match = regex.exec(url)) {
        params[match[1]] = match[2];
    }
    return params;
}

const requireLogin = () => {
    /*
    window.addEventListener("beforeunload", function(event) {
        window.localStorage.removeItem('access_token');
    });
    */

    /*
     * I think this is not needed. The page will reauthenticate
     * anyway, and if the user is logged in to GitHub, a token
     * will be returned without a request for id/pw.
     *
    if (!access_token) {
        access_token = localStorage.getItem('access_token');
    }
    */
    // GitHub login
    const params = parseQuery();
    if (!params.code && !access_token) {
        // ID from Juris-M OAuth app reg
        var client_id = "eb529c0faf1bace5811d";
        if (document.location.host === "fbennett.github.io") {
            client_id = "28d992e126b54d095e4b";
        }
        document.location.href="https://github.com/login/oauth/authorize?client_id=" + client_id + "&scope=public_repo&status=98754321";
    } else if (params.code) {
        // Get temporary code
        var code = params.code;
        // Remove code from URL
        history.replaceState({}, document.title, url.search(""));
        // Call for validation
        var mode = "indigo";
        if (document.location.host === "fbennett.github.io") {
            mode = "indigodev";
        }
        var url = 'https://our.law.nagoya-u.ac.jp/juris-m/authenticate/' + code + '?case=' + mode;
        axios.get(url).then((response) => {
            access_token = response.data;
        }).catch((error) => {
            console.log("LOGIN ERROR: " + error.message);
        })
    }
}

const loginOK = () => {
    return !!access_token;
}

export {
    loginOK,
    requireLogin
}
