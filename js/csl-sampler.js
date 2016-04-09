var worker = new Worker('workers/cites.js');

var pageData = {
    styleID: 'jm-indigobook',
    lastItemID: null,
    htmlCache: {
        "jm-indigobook": {},
        "jm-indigobook-law-review": {},
        "jm-oscola": {},
        "jm-chicago-fullnote-bibliography": {}
    },
    scrollSetting: false
}

if (browserInfo.browser === 'Firefox') {
    pageData.scrollSetting = {
        behavior: 'smooth',
        block: 'end'
    }
}

var citeForms = [
    "full-plain",
    "full-locator",
    "ibid-plain",
    "ibid-locator",
    "supra-plain",
    "supra-locator",
    "far-plain",
    "far-locator"
];

template = '<div class="cite-details-inner">'
    + '  <div class="nav-fade row">'
    + '    <div name="jm-indigobook" class="style-tab jm-indigobook">Indigo</div>'
    + '    <div name="jm-indigobook-law-review" class="style-tab jm-indigobook-law-review">Indigo (LRev)</div>'
    + '    <div name="jm-oscola" class="style-tab jm-oscola">OSCOLA</div>'
    + '    <div name="jm-chicago-fullnote-bibliography" class="style-tab jm-chicago-fullnote-bibliography">Chicago</div>'
    + '  </div>'
    + '  <div class="small-faint-heading">Full plain</div>'
    + '  <div class="sampler-citation full-plain">%%full-plain%%</div>'
    + '  <div class="small-faint-heading">Full with locator</div>'
    + '  <div class="sampler-citation full-locator">%%full-locator%%</div>'
    + '  <div class="small-faint-heading">Ibid plain</div>'
    + '  <div class="sampler-citation ibid-plain">%%ibid-plain%%</div>'
    + '  <div class="small-faint-heading">Ibid with locator</div>'
    + '  <div class="sampler-citation ibid-locator">%%ibid-locator%%</div>'
    + '  <div class="small-faint-heading">Supra plain</div>'
    + '  <div class="sampler-citation supra-plain">%%supra-plain%%</div>'
    + '  <div class="small-faint-heading">Supra with locator</div>'
    + '  <div class="sampler-citation supra-locator">%%supra-locator%%</div>'
    + '  <div class="small-faint-heading">Far plain</div>'
    + '  <div class="sampler-citation far-plain">%%far-plain%%</div>'
    + '  <div class="small-faint-heading">Far with locator</div>'
    + '  <div class="sampler-citation far-locator">%%far-locator%%</div>'
    + '</div>'


function composeHTML(cites) {
    var ret = template;
    for (var key in cites) {
        ret = ret.replace('%%' + key + '%%', cites[key])
    }
    return ret;
}

function setTab(node) {
    var tabContainer = node.getElementsByClassName('nav-fade')[0];
    for (var i=0,ilen=tabContainer.children.length;i<ilen;i++) {
        var tab = tabContainer.children[i];
        if (tab.classList.contains(pageData.styleID)) {
            tab.classList.add('selected');
        } else {
            tab.classList.remove('selected');
        }
    }
}

function clearLastReveal(itemID) {
    if (pageData.lastItemID && pageData.lastItemID !== itemID) {
        var oldNode = document.getElementById(pageData.lastItemID);
        var oldDetailsNode = oldNode.getElementsByClassName('cite-details')[0];
        if (oldDetailsNode) {
            oldDetailsNode.previousSibling.classList.remove('selected');
            oldDetailsNode.previousSibling.setAttribute('title', 'show cite forms');
            oldDetailsNode.parentNode.removeChild(oldDetailsNode);
        }
    }
    pageData.lastItemID = itemID;
}

function selectCite(node, select) {
    if (select) {
        node.firstChild.classList.add('selected');
    } else {
        node.firstChild.classList.remove('selected');
    }
}

worker.onmessage = function(e) {
    switch (e.data.msgId) {
    case 'msg0':
        var node = document.getElementById(e.data.itemID);
        var itemID = e.data.itemID;
        if (!node.firstChild.nextSibling.classList || !node.firstChild.nextSibling.classList.contains('cite-details')) {
            var newnode = document.createElement('div');
            newnode.classList.add('cite-details');
            var sampleBlock = composeHTML(e.data.cites);
            newnode.innerHTML = sampleBlock;
            pageData.htmlCache[pageData.styleID][itemID] = sampleBlock;
            node.insertBefore(newnode, node.firstChild.nextSibling);
            setTab(node);
            newnode.scrollIntoView(pageData.scrollSetting);
            node.firstChild.setAttribute('title', 'hide cite forms');
            selectCite(node, true);
       } else {
            setTab(node);
            var detailNode = node.firstChild.nextSibling;
            var tabContainer = detailNode.firstChild;
            for (var i=0,ilen=citeForms.length;i<ilen;i++) {
                var form = citeForms[i];
                var citeNode = detailNode.getElementsByClassName(form)[0];
                citeNode.innerHTML = e.data.cites[form];
            }
            detailNode.scrollIntoView(pageData.scrollSetting);
            node.firstChild.setAttribute('title', 'hide cite forms');
            pageData.htmlCache[pageData.styleID][itemID] = composeHTML(e.data.cites);
           selectCite(node, true);
        }
        break;
    case 'err0':
        console.log("ERROR FROM WORKER: "+e.data.msgTxt);
        break;
    default:
        console.log('Mysterious response');
        break;
    }
}

function installSampler() {
    var nodes = document.getElementsByClassName('cite');
    for (var i=0,ilen=nodes.length;i<ilen;i++) {
        var octicon = document.createElement('span');
        octicon.setAttribute('class', 'octicon octicon-chevron-down cite-details-button');
        octicon.setAttribute('title', 'show cite forms');
        nodes[i].insertBefore(octicon, nodes[i].firstChild);
    }
    document.body.addEventListener('click', function(e) {
        if (e.target.classList && e.target.classList.contains('style-tab')) {
            var node = e.target.parentNode.parentNode.parentNode.parentNode;
            var tab = e.target;
            pageData.styleID = tab.getAttribute('name');
            worker.postMessage({
                itemID: itemID,
                styleID: pageData.styleID
            });
        } else if (e.target.parentNode.classList && e.target.parentNode.classList.contains('cite')) {
            var node = e.target.parentNode;
            itemID = node.id;
            if (!node.firstChild.nextSibling.classList.contains('cite-details')) {
                clearLastReveal(itemID);
                worker.postMessage({
                    itemID: itemID,
                    styleID: pageData.styleID
                });
            } else {
                if (node.firstChild.nextSibling.classList.contains('cite-details')) {
                    clearLastReveal(null);
                    selectCite(node, false);
                }
            }
        }
    }, false)
};

window.addEventListener('load', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'items/ic0001.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                installSampler();
            }
        }
    }
    xhr.send(null);
});
