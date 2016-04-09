importScripts('../citeproc/citeproc.js');

var xhr = new XMLHttpRequest();
var data = {
    styles: {},
    locales: {},
    juris: {},
    items: {
        'DUMMY': {
            id: 'DUMMY',
            type: 'book',
            title: 'Dummy Title'
        }
    },
    processors: {},
    abbreviations: {
        "container-title": {},
        "collection-title": {},
        "institution-entire": {},
        "institution-part": {},
        nickname: {},
        number: {},
        title: {},
        place: {
            "us": "!here>>>",
            "us:co": "Colo."
        },
        hereinafter: {},
        classic: {},
        "container-phrase": {},
        "title-phrase": {}
    }
};

CSL.getAbbreviation = function (listname, obj, jurisdiction, category, key, itemType, noHints) {
    if (!obj || !key || !category) return;
    if (!obj.default) {
        obj["default"] = new CSL.AbbreviationSegments();
    }
    if (data.abbreviations[category]) {
        if (data.abbreviations[category][key]) {
            obj["default"][category][key] = data.abbreviations[category][key];
        } else {
            // Well, it doesn't work, but we tried. Setting to a non-match should revert abbrev.
            delete obj["default"][category][key];
        }
    }
}

var sysObject = {
    retrieveItem: function(id) {
        var ret = data.items[id];
        return ret;
    },
    retrieveLocale: function (lang){
        if (!lang) {
            lang = 'en-US';
        }
        return data.locales[lang];
    },
    retrieveStyleModule: function(jurisdiction) {
        return data.juris[jurisdiction];
    }
}

self.addEventListener('message', function(e){
    runProcessor(e.data.itemID, e.data.styleID);
});

/*
 * Thingie to make citation samples
 */

var CitationFactory = function(){
    this.citations = [];
}

CitationFactory.prototype.reset = function() {
    this.citations = [];
}

CitationFactory.prototype.getBreadCrumbs = function () {
    var ret = [];
    for (var i=0,ilen=this.citations.length;i<ilen;i++) {
        ret.push(["CITATION-"+(i+1),(i+1)]);
    }
    return ret;
}

CitationFactory.prototype.addCitation = function(itemID, locator) {
    var citation = [
        {
            "citationID": "CITATION-" + (this.citations.length + 1), 
            "citationItems": [
                {
                    "id": itemID
                }
            ], 
            "properties": {
                "noteIndex": (this.citations.length + 1)
            }
        }, 
        this.getBreadCrumbs(), 
        []
    ]
    if (locator) {
        citation[0].citationItems[0].locator = locator;
    }
    this.citations.push(citation);
}

CitationFactory.prototype.getCitations = function() {
    var cres = [];
    for (var i=0,ilen=this.citations.length;i<ilen;i++) {
        var res = this.citeproc.processCitationCluster(this.citations[i][0], this.citations[i][1], this.citations[i][2]);
        for (var j=0,jlen=res[1].length;j<jlen;j++) {
            cres[res[1][j][0]] = res[1][j][1];
        }
    }
    return cres;
}

CitationFactory.prototype.setupProcessor = function(itemID, styleID) {
    if (!data.processors[styleID]) {
        data.processors[styleID] = new CSL.Engine(sysObject, data.styles[styleID]);
    }
    this.citeproc = data.processors[styleID];
    this.citeproc.updateItems(['DUMMY',itemID]);
};


var citationFactory = new CitationFactory();

function generateSampleCites(itemID, styleID) {
    citationFactory.setupProcessor(itemID, styleID);
    
    // Samples
    // * plain Full
    // * Full w/locator
    // * plain Ibid
    // * Ibid w/locator
    // * plain Supra
    // * Supra w/locator
    // * plain Far-note
    // * Far-note with locator
    
    var cites = {};
    var locator = '123';

    citationFactory.addCitation(itemID, null);
    citationFactory.addCitation(itemID, locator);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation(itemID, null);
    var res = citationFactory.getCitations();
    cites['full-plain'] = res[0];
    cites['ibid-locator'] = res[1];
    cites['far-plain'] = res[7];

    citationFactory.reset();
    citationFactory.addCitation(itemID, locator);
    citationFactory.addCitation(itemID, locator);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation(itemID, null);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation(itemID, locator);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation('DUMMY', null);
    citationFactory.addCitation(itemID, locator);
    var res = citationFactory.getCitations();
    cites['full-locator'] = res[0];
    cites['ibid-plain'] = res[1];
    cites['supra-plain'] = res[3];
    cites['supra-locator'] = res[5];
    cites['far-locator'] = res[11];

    citationFactory.reset();
    //citationFactory.addCitation(itemID, null);
    //var bibliographyResults = citeproc.makeBibliography();
    //return {citations:citations,bibliography:bibliographyResults[1]};
    return cites;
};

function getJuris(pos, jurisModules, itemID, styleID) {
    if (pos === jurisModules.length) {
        try {
            var cites = generateSampleCites(itemID, styleID);
            self.postMessage({
                msgType: 'OK',
                msgId: 'msg0',
                msgTxt: 'Processor initialized',
                itemID: itemID,
                styleID: styleID,
                cites: cites
            });
        } catch (e) {
            self.postMessage({
                msgType: 'ERR',
                msgId: 'err0',
                msgTxt: 'Error initializing processor: ' + e
            });
        }
        return;
    }
    // If not finished, set juris modules as required
    var jurisModule = jurisModules[pos];
    getXML(jurisModules[pos], 'juris', function() {
        getJuris(pos+1, jurisModules, itemID, styleID);
    });
};


function runProcessor (itemID, styleID) {
    this.styleID = styleID;
    this.itemID = itemID;
    var me = this;
    getXML(itemID, 'items', function() {
        getXML(me.styleID, 'styles', function() {
            getXML('en-US', 'locales', function() {
                getXML('en-GB', 'locales', function() {
                    var jurisModules = [];
                    if (data.items[me.itemID].jurisdiction) {
                        var lst = data.items[itemID].jurisdiction.split(':');
                        for (var i=0,ilen=lst.length;i<ilen;i++) {
                            jurisModules.push(lst.slice(0,i+1).join(':'));
                        }
                    }
                    jurisModules.reverse();
                    getJuris(0, jurisModules, itemID, styleID);
                });
            });
        });
    });
};

function setXML(type, fileStub, XMLstring) {
    if (data[type][fileStub] || data[type][fileStub]) return;
    if (type === 'items') {
        XMLstring = JSON.parse(XMLstring);
    }
    data[type][fileStub] = XMLstring;
}

function getXML(fileStub, type, callback) {
    var fileName;
    if (type === 'styles') {
        fileName = '../csl/' + fileStub + '.csl';
    } else if (type === 'locales') {
        fileName = '../locale/locales-' + fileStub + '.xml';
    } else if (type === 'juris') {
        fileName = '../juris/juris-' + fileStub + '.csl';
    } else if (type === 'items') {
        fileName = '../items/' + fileStub + '.json';
    }
    if (data[type][fileStub] || data[type][fileStub] === false) {
        return callback ? callback() : null
    }
    xhr.open('GET', fileName, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                setXML(type, fileStub, xhr.responseText);
                callback ? callback() : null;
            } else if (xhr.status == 404) {
                setXML(type, fileStub, false);
                callback ? callback() : null;
            }
        }
    }
    xhr.send(null);
}
