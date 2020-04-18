import { pullreq, apiCall } from './saver';

const checkPull = async () => {
    var test_id = window.localStorage.getItem('test_id');
    // pullreq sets userName in localStorage
    // Apart from that, it serves here to screen out pull requests
    // that have been closed on merge or rejection.
    var result = await pullreq(test_id);
    if (result && result.length) {
        window.localStorage.setItem('cite_url', result[0].html_url);
        // This value is the same as "test_id" in localStorage
        // var test_id = result[0].head.ref;
        var userName = window.localStorage.getItem("cite_userName");
        var apiToken = window.localStorage.getItem('access_token');
        var contents = await apiCall({
            apiSection: "repos",
            repoPath: `${userName}/jsti-indigobook`,
            apiSuffix: `contents/style_${test_id}.txt?ref=${test_id}`,
            apiToken: `${apiToken}`
        });
        var txt = atob(contents.content);
        var lst = txt.split("\n");
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
