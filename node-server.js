// node-server.js
// for citeproc-js CSL citation formatter

var port = 16005;

var http = require('http');
var url = require('url');
var fs = require('fs');

// This is the list of files this server will serve - no others.
var filesToServe = [
    '/index.html',
    '/css/screen.css',
    '/citeproc/citeproc.js',
    '/octicons/octicons/octicons.css',
    '/octicons/octicons/octicons.woff',
    '/octicons/octicons/octicons.ttf',
    '/js/browser-info.js',
    '/js/csl-sampler.js',
    '/locale/locales-en-US.xml',
    '/locale/locales-en-GB.xml',
    '/csl/jm-indigobook.csl',
    '/csl/jm-indigobook-law-review.csl',
    '/csl/jm-oscola.csl',
    '/csl/jm-chicago-fullnote-bibliography.csl',
    '/workers/cites.js'
];

http.createServer(function (request, response) {
    var uriObj = url.parse(request.url);
    var uri_href = uriObj.href;
    console.log("Request for " + uri_href);

    // Root resources will redirect
    if (uri_href == '/') {
        response.writeHead(302, {'Location': '/index.html'});
        response.end();
    }

    else if (filesToServe.indexOf(uri_href) > -1 || uri_href.match(/^\/items\/ic[0-9]+\.json$/) || uri_href.match(/^\/juris\/.*.csl$/)) {
        // Translate URL path into filename.  This assumes the file is either
        // in the local directory (/demo) or in the parent.
	    var filename = './' + uri_href.substr(1);
        returnFile(response, filename);
    }

    else {
        resp_error(response, 400, "Sorry, I don't know about that file");
    }
}).listen(port);

function returnFile(response, filename) {
    fs.readFile(filename, function(err, data) {
        if (err) {
            resp_error(response, 404, "Error trying to retrieve that file: " + err);
        }
        else {
            response.writeHead(200, {'Content-Type': media_type(filename)});
            response.end(data);
        }
    });
};

function resp_error(response, status, msg) {
    console.log("  " + msg);
    response.writeHead(status, {'Content-Type': 'text/plain'});
    response.end(msg);
}

function media_type(filename) {
    if (filename.slice(-3) === '.js') {
        return 'text/javascript';
    }
    else if (filename.slice(-5) === '.json') {
        return 'application/json';
    }
    else if (filename.slice(-5) === '.html') {
        return 'text/html';
    }
    else if (filename.slice(-4) === '.svg') {
        return 'image/svg+xml';
    }
    else if (filename.slice(-4) === '.css') {
        return 'text/css';
    }
    else if (filename.slice(-4) === '.xml') {
        return 'text/xml';
    }
    else {
        return "text/plain";
    }
}

console.log("Point your browser at http://localhost:" + port + "/");
