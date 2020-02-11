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

export {
    urlParts,
    buildQuery,
    error
}

module = {
    exports: {
        urlParts: urlParts,
        buildQuery: buildQuery,
        error: error
    }
}
