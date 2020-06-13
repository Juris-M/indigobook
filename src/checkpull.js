import { pullreq, apiCall } from './saver';
import { getFromBase64 } from "./utils.js";

const fromBase64 = getFromBase64(atob);

const checkPull = async (html_id) => {
    // pullreq sets userName in localStorage
    // Apart from that, it serves here to screen out pull requests
    // that have been closed on merge or rejection.
    var cite_url = false;
    var test_content = false;
    if (window.localStorage.getItem('cite_url')) {
        cite_url = window.localStorage.getItem('cite_url');
        test_content = window.localStorage.getItem('test_content');
    } else {
        var result = await pullreq(html_id);
        if (!!result && result.length > 0) {
            cite_url = result[0].html_url;
            window.localStorage.setItem('cite_url', cite_url);
        }
        var userName = window.localStorage.getItem("cite_userName");
        var apiToken = window.localStorage.getItem('access_token');
        var contents = await apiCall({
            apiSection: "repos",
            repoPath: `${userName}/jsti-indigobook`,
            apiSuffix: `contents/style_${html_id}.txt?ref=${html_id}`,
            apiToken: `${apiToken}`
        });
        var test_content = fromBase64(contents.content);
    }
    if (test_content) {
        // This value is the same as "html_id" in localStorage
        // var html_id = result[0].head.ref;
        /*
        console.log(txt);
         */
        var lst = test_content.split("\n");
        var keys = ["DESCRIPTION", "RESULT"];
        var state = {};
        var rex = {
            open: {},
            close: {}
        };
        var res = {};
        for (var key of keys) {
            state[key] = false;
            rex.open[key] = new RegExp(`>=+\\s+${key}\\s+=+>`);
            rex.close[key] = new RegExp(`<=+\\s+${key}\\s+=+<`);
        };
        var buf = [];
        for (var line of lst) {
            if (state.DESCRIPTION || state.RESULT) {
                buf.push(line);
            }
            for (var key in state) {
                if (line.match(rex.open[key])) {
                    state[key] = true;
                } else if (line.match(rex.close[key])) {
                    buf.pop();
                    res[key] = buf.join("\n");
                    buf = [];
                    state[key] = false;
                }
            }
        }

        // Okay, did it work?
        window.localStorage.setItem("citation", res.RESULT);
        window.localStorage.setItem("cite_desc", res.DESCRIPTION);
    } else {
        window.localStorage.removeItem("cite_desc");
    }
}

export default checkPull;
