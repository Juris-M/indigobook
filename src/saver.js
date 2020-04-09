import axios from "axios";
// const base64 = require("base-64");
// const utf8 = require("utf8");

const apiStub = "https://api.github.com";

const handleErr = (e, label, quiet) => {
    var msg = e.message;
    if (label) {
        msg = `${label}: ${msg}`;
    }
    if (!quiet) {
        console.log(msg);
    }
}

const protect = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

const buildFileName = (citeCode) => {
    return `style_${citeCode}.txt`;
}

/*
var btoa = (str) => {
    var bytes = utf8.encode(str);
    return `${base64.encode(bytes)}`;
}
*/

const apiCall = async (props, quiet) => {
    var mth = props.apiMethod ? props.apiMethod : "get";
    var pth = [props.apiSection, props.repoPath, props.apiSuffix].filter((o) => o).join("/");
    var result = await axios({
        method: mth,
        url: `${apiStub}/${pth}`,
        headers: {
            Authorization: `token ${props.apiToken}`
        },
        data: props.params
    }).catch((e) => handleErr(e, "API fail", quiet));
    return result ? result.data : false;
}

class GitHub {
    constructor() {
        this.client = (apiToken) => {
            return new Client(apiToken);
        };
    }
}

class Client {
    constructor(apiToken) {
        this.repo = repo.bind({
            apiToken: apiToken
        });
        this.me = me.bind({
            apiToken: apiToken
        });
    }
}

class Repo {
    constructor (props) {
        // Clone properties and reset to repo defaults
        props = protect(props);
        this.apiMethod = "get";
        this.apiSection = "repos";
        this.repoPath = props.result.full_name;
        this.apiSuffix = false;
        
        this.info = info.bind(props);
        this.fork = fork.bind(props);
        this.commits = commits.bind(props);
        this.patch = patch.bind(props);
        this.getBranch = getBranch.bind(props);
        this.deleteBranch = deleteBranch.bind(props);
        this.setBranch = setBranch.bind(props);
        this.getContents = getContents.bind(props);
        this.updateContents = updateContents.bind(props);
        this.createPullRequest = createPullRequest.bind(props);
        this.getPullRequest = getPullRequest.bind(props);
    }
}

function info () {
    return this.result;
}

async function repo (repoPath, quiet) {
    var props = protect(this);
    props.apiMethod = "get";
    props.apiSection = "repos";
    props.repoPath = repoPath;
    props.apiSuffix = false;
    props.result = await apiCall(props, quiet);
    return new Repo(props);
};

async function me () {
    var props = protect(this);
    props.apiSection = "user";
    props.result = await apiCall(props);
    return new Repo(props);
}

async function fork (repoPath) {
    var props = protect(this);
    props.apiMethod = "post";
    props.apiSection = "repos";
    props.repoPath = repoPath;
    props.apiSuffix = "forks";
    props.result = await apiCall(props);
    return new Repo(props);
}

async function commits () {
    var props = protect(this);
    props.apiSuffix = `commits?sha=master`;
    return apiCall(props);
}

async function patch (headSHA) {
    var props = protect(this);
    props.apiMethod = "patch";
    props.apiSuffix = "git/refs/heads/master";
    props.params = {
        sha: headSHA,
        force: true
    };
    return apiCall(props);
}

async function getBranch (branchName, quiet) {
    var props = protect(this);
    props.apiSuffix = `git/ref/heads/${branchName}`;
    return apiCall(props, quiet);
}

async function deleteBranch(citeCode) {
    var props = protect(this);
    props.apiMethod = "delete";
    props.apiSuffix = `git/refs/heads/${citeCode}`;
    return apiCall(props);
}

async function setBranch (branchName, SHA) {
    var props = protect(this);
    props.apiMethod = "post";
    props.apiSuffix = "git/refs";
    props.params = {
        ref: `refs/heads/${branchName}`,
        sha: SHA
    };
    return apiCall(props);
}

async function getContents (citeCode) {
    var props = protect(this);
    var fileName = buildFileName(citeCode);
    props.apiSuffix = `contents/${fileName}?ref=${encodeURIComponent(citeCode)}`;
    return apiCall(props);
}

async function updateContents (citeCode, content, contentsSHA) {
    var props = protect(this);
    var fileName = buildFileName(citeCode);
    props.apiMethod = "put";
    props.apiSuffix = `contents/${fileName}`;
    props.params = {
        message:  "Proposed edit",
        content: content,
        branch: citeCode
    };
    if (contentsSHA) {
        props.params.sha = contentsSHA;
    }
    return apiCall(props);
}

async function createPullRequest(citeCode, userName, comment) {
    var props = protect(this);
    props.apiMethod = "post";
    props.apiSuffix = "pulls";
    props.params = {
        title: `Citation: ${citeCode}`,
        head: `${userName}:${citeCode}`,
        base: "master",
        body: comment,
        maintainer_can_modify: true
    };
    return apiCall(props);
}

async function getPullRequest(citeCode, userName) {
    var props = protect(this);
    props.apiMethod = "get";
    props.apiSuffix = `pulls?head=${userName}:${citeCode}`;
    return apiCall(props);
}

var github = new GitHub;

const saver = async (citeCode, testContent, comment) => {

    // Create client
    // console.log("(1)");
    var apiToken = window.localStorage.getItem('access_token');
    var client = github.client(apiToken);
    
    // Instantiate test repo
    // console.log("(2)");
    var ghrepo = await client.repo("Juris-M/jsti-indigobook");
    
    // Get user name and user ID
    // console.log("(3)");
    var userName = window.localStorage.getItem("cite_userName");
    
    // Instantiate fork, creating if necessary (true is for quiet)
    // console.log("(4)");
    var ghfork = await client.repo(`${userName}/jsti-indigobook`, true);
    var result = ghfork.info();
    if (!result.full_name) {
        // console.log("(5)");
        result = await ghme.fork('Juris-M/jsti-indigobook').catch((e) => handleErr(e, "create fork"));
    }
    
    // Align fork to the latest test repo master commit
    // console.log("(6)");
    var commits = await ghrepo.commits();
    if (commits.length !== 0) { 
        var headSHA = commits[0].sha;
        // console.log("(7)");
        await ghfork.patch(headSHA);
    }
    
    // Get branch pointer
    // Scrubbing an existing branch for this cite code, if any, will
    // also remove any pull requests associated with it. Pull requests
    // will always consist of a single commit.
    // console.log("(8)");
    var branch = ghfork.getBranch(citeCode, true);
    if (branch) {
        // console.log("(9)");
        await ghfork.deleteBranch(citeCode);
    }
    branch = await ghfork.setBranch(citeCode, headSHA);

    // Create or update the target file (no-change screening should occur in the UI layer, before invoking this)
    // console.log("(10)");
    var result = await ghfork.getContents(citeCode);

    var newContent = btoa(testContent);
    if (!result) {
        // console.log("(11)");
        await ghfork.updateContents(citeCode, newContent);
        var result = ghrepo.createPullRequest(citeCode, userName, comment);
    } else {
        var oldContent = result.content.split("\n").join("");
        if (newContent !== oldContent) {
            var contentsSHA = result.sha;
            // console.log("(12)");
            await ghfork.updateContents(citeCode, newContent, contentsSHA);
            var result = ghrepo.createPullRequest(citeCode, userName, comment);
        }
    }
    return result;
};

const pullreq = async (citeCode) => {
    var apiToken = window.localStorage.getItem('access_token');
    var client = github.client(apiToken);
    var ghrepo = await client.repo("Juris-M/jsti-indigobook");
    var ghme = await client.me();
    var myinfo = ghme.info();
    window.localStorage.setItem("cite_userName", myinfo.login);
    
    return ghrepo.getPullRequest(citeCode, myinfo.login);
}

export {
    saver,
    pullreq,
    apiCall
};
