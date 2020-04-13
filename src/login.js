// Access token is acquired by interactions below
// Token is pushed into localstorage, and should expire when session ends
// (expiration needs to be confirmed)
import axios from 'axios';
import { urlParts } from './utils.js';

const startLogin = () => {
    window.localStorage.removeItem('cite_url');
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

const finishLogin = (openModal) => {
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
            window.localStorage.setItem('access_token', response.data.token);
            let html_id = window.localStorage.getItem('html_id');
            let elem = document.getElementById(html_id);
            if (elem) {
                elem.scrollIntoView();
            }
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
    var elem = document.getElementById(window.localStorage.getItem("html_id"));
    window.localStorage.setItem("citation", elem.innerHTML);
    window.localStorage.removeItem('access_token');
    window.localStorage.setItem('block_login', true);
}

export {
    startLogin,
    finishLogin,
    loginOK,
    logOut
}
