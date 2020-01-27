(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(function() {

    var orderedFields = ["type", "caseName", "jurisdiction", "court", "reporterVolume", "reporter", "firstPage", "dateDecided"];
    
    var z2j = require("./zotero2jurism");

    var apiStub = "https://api.zotero.org/groups/2319948/items/"
    
    function setField(grid, row, info) {
        var cell1 = document.createElement("div");
        var cell2 = document.createElement("div");
        
        cell1.setAttribute("style", "font-weight: bold; grid-column:1; grid-row: " + row + ";");
        cell1.setAttribute("align", "right");
        cell2.setAttribute("style", "grid-column:2; grid-row: " + row + ";");

        cell1.innerHTML = info.label + ":";
        cell2.innerHTML = info.value;
        
        grid.append(cell1);
        grid.append(cell2);
        row++;
        return row;
    }
    
    $('.cite').click(function(event) {
        event.preventDefault();
        this.blur();
        $.busyLoadFull("show", {
            spinner: "accordion"
        });
        var key = this.id.slice(1);
        var id = this.id;
        $.get( apiStub + key, function( data ) {
            var jObj = z2j.zoteroToJurismData(data);
            var jMap = z2j.getLabelsAndVals(jObj);
            var html = document.createElement("div");
            html.setAttribute("class", "modal");
            var grid = document.createElement("div");
            var row = 1;
            grid.setAttribute("class", "grid");
            grid.setAttribute("style", "display: grid;grid-gap: 3px; grid-template-columns: 150px auto");
            var cite = document.createElement("p");
            cite.setAttribute("style", "grid-column: 1 / 3; grid-row: " + row + "; border-radius: 0.5em; background: #ccc; padding: 0.5em;");
            cite.innerHTML = $("#" + id).html();
            grid.append(cite);
            row++;
            var fieldStopList = {};
            for (var i in orderedFields) {
                var fieldName = orderedFields[i];
                if (jMap.fields[fieldName]) {
                    row = setField(grid, row, jMap.fields[fieldName]);
                    fieldStopList[fieldName] = true;
                }
            }
            for (var key in jMap.fields) {
                var info = jMap.fields[key];
                if (!fieldStopList[key]) {
                    row = setField(grid, row, info);
                }
            }
            var hline = document.createElement("hr");
            hline.setAttribute("style", "margin: 0.5em 0; grid-column: 1 / 3; grid-row: " + row + ";");
            grid.append(hline);
            html.append(grid);
            row++;

            var buttonDiv = document.createElement("div");
            var button = document.createElement("a");
            
            buttonDiv.setAttribute("style", "grid-column: 1 / 3; grid-row: " + row + "; font-size: 110%;");
            buttonDiv.setAttribute("align", "right");
            button.setAttribute("style", "cursor: pointer; font-weight: bold; color:white; background: green; border-radius: 1em; padding: 0.5em");

            button.innerHTML = "Login";
            
            buttonDiv.append(button);
            grid.append(buttonDiv);
            
            $.busyLoadFull("hide");
            $(html).appendTo('body').modal();
        }, "json");
    });
});

},{"./zotero2jurism":3}],2:[function(require,module,exports){
module.exports={"locales":{"en-US":{"itemTypes":{"artwork":"Artwork","attachment":"Attachment","audioRecording":"Audio Recording","bill":"Bill","blogPost":"Blog Post","book":"Book","bookSection":"Book Section","case":"Case","classic":"Classic","computerProgram":"Computer Program","conferencePaper":"Conference Paper","dictionaryEntry":"Dictionary Entry","document":"Document","email":"E-mail","encyclopediaArticle":"Encyclopedia Article","film":"Film","forumPost":"Forum Post","gazette":"Gazette","hearing":"Hearing","instantMessage":"Instant Message","interview":"Interview","journalArticle":"Journal Article","letter":"Letter","magazineArticle":"Magazine Article","manuscript":"Manuscript","map":"Map","newspaperArticle":"Newspaper Article","note":"Note","patent":"Patent","podcast":"Podcast","presentation":"Presentation","radioBroadcast":"Radio Broadcast","regulation":"Regulation","report":"Report","standard":"Standard","statute":"Statute","thesis":"Thesis","treaty":"Treaty","tvBroadcast":"TV Broadcast","videoRecording":"Video Recording","webpage":"Web Page"},"fields":{"abstractNote":"Abstract","accessDate":"Accessed","adoptionDate":"Date Adopted","album":"Album","applicationNumber":"Application Number","archive":"Archive","archiveLocation":"Loc. in Archive","artworkMedium":"Medium","artworkSize":"Artwork Size","assemblyNumber":"Assy. No.","assignee":"Assignee","audioFileType":"File Type","audioRecordingFormat":"Format","billNumber":"Bill Number","blogTitle":"Blog Title","bookTitle":"Book Title","callNumber":"Call Number","caseName":"Case Name","code":"Code","codeNumber":"Code Number","codePages":"Code Pages","codeVolume":"Code Volume","committee":"Committee","company":"Company","conferenceDate":"Conf. Date","conferenceName":"Conference Name","country":"Country","court":"Court","date":"Date","dateAdded":"Date Added","dateAmended":"Date Amended","dateDecided":"Date Decided","dateEnacted":"Date Enacted","dateModified":"Modified","dictionaryTitle":"Dictionary Title","distributor":"Distributor","docketNumber":"Docket Number","documentName":"Document Name","documentNumber":"Document Number","DOI":"DOI","edition":"Edition","encyclopediaTitle":"Encyclopedia Title","episodeNumber":"Episode Number","extra":"Extra","filingDate":"Filing Date","firstPage":"First Page","forumTitle":"Forum/Listserv Title","gazetteFlag":"Gazette Ref","genre":"Genre","history":"History","institution":"Institution","interviewMedium":"Medium","ISBN":"ISBN","ISSN":"ISSN","issue":"Issue","issueDate":"Issue Date","issuingAuthority":"Issuing Authority","itemType":"Type","journalAbbreviation":"Journal Abbr","jurisdiction":"Jurisdiction","label":"Label","language":"Language","legalStatus":"Legal Status","legislativeBody":"Legislative Body","letterType":"Type","libraryCatalog":"Library Catalog","manuscriptType":"Type","mapType":"Type","medium":"Medium","meetingName":"Meeting Name","meetingNumber":"Meeting No.","nameOfAct":"Name of Act","network":"Network","newsCaseDate":"Case Date","number":"Number","numberOfVolumes":"# of Volumes","numPages":"# of Pages","openingDate":"Date Opened","opus":"Opus No.","originalDate":"Orig. Date","pages":"Pages","parentTreaty":"Parent Treaty","patentNumber":"Patent Number","place":"Place","postType":"Post Type","presentationType":"Type","priorityDate":"Priority Date","priorityNumbers":"Priority Numbers","proceedingsTitle":"Proceedings Title","programmingLanguage":"Prog. Language","programTitle":"Program Title","publicationDate":"Date Published","publicationNumber":"Publication No.","publicationTitle":"Publication","publicLawNumber":"Public Law Number","publisher":"Publisher","references":"References","regnalYear":"Regnal Year","regulationType":"Type","regulatoryBody":"Authority","reign":"Case Type","release":"Release","reporter":"Reporter","reporterVolume":"Reporter Volume","reportNumber":"Report Number","reportType":"Report Type","resolutionLabel":"Resol. Label","rights":"Rights","runningTime":"Running Time","scale":"Scale","section":"Section","series":"Series","seriesNumber":"Series Number","seriesText":"Series Text","seriesTitle":"Series Title","session":"Session","sessionType":"Session Type","shortTitle":"Short Title","signingDate":"Date Signed","status":"Status","studio":"Studio","subject":"Subject","supplementName":"Supp. Name","system":"System","thesisType":"Type","title":"Title","university":"University","url":"URL","versionNumber":"Version","videoRecordingFormat":"Format","volume":"Volume","volumeTitle":"Volume Title","websiteTitle":"Website Title","websiteType":"Website Type","yearAsVolume":"Year As Vol."},"creatorTypes":{"artist":"Artist","attorneyAgent":"Attorney/Agent","author":"Author","bookAuthor":"Book Author","cartographer":"Cartographer","castMember":"Cast Member","commenter":"Commenter","composer":"Composer","contributor":"Contributor","cosponsor":"Cosponsor","counsel":"Counsel","director":"Director","editor":"Editor","guest":"Guest","interviewee":"Interview With","interviewer":"Interviewer","inventor":"Inventor","performer":"Performer","podcaster":"Podcaster","presenter":"Presenter","producer":"Producer","programmer":"Programmer","recipient":"Recipient","reviewedAuthor":"Reviewed Author","scriptwriter":"Scriptwriter","seriesEditor":"Series Editor","sponsor":"Sponsor","testimonyBy":"Testimony By","translator":"Translator","wordsBy":"Words By"}}}}
},{}],3:[function(require,module,exports){
var schema = require("../build/schema-min.json");
// If this is made into a general toolbox for handling Zotero API
// returns as Jurism data, we could pull in the schema here,
// and both do a better job with creator conversions, and provide
// a return supplemented with field labels.

// Encoding of names set single-field names as "name" in encoded data
// at some point. This recovers from that glitch.
function normalizeName(obj, fieldMode, isTop) {
    var ret = {
        creatorType: obj.creatorType
    };
    if (obj.name || (obj.lastName && !obj.firstName) || fieldMode) {
        ret.lastName = obj.lastName ? obj.lastName : obj.name;
        ret.fieldMode = 1;
    } else {
        ret.lastName = obj.lastName;
        ret.firstName = obj.firstName;
        ret.fieldMode = 0;
    }
    if (isTop) {
        ret.multi = obj.multi;
        if (!ret.multi) {
            ret.multi = {
                _key: {}
            }
        }
    }
    return ret;
}

function getCreatorLabel(fieldName) {
    return schema.locales["en-US"].creatorTypes[fieldName];
}

function getFieldLabel(fieldName) {
    return schema.locales["en-US"].fields[fieldName];
}

function normalizeNames(obj) {
    for (var i in obj.creators) {
        var creator = obj.creators[i];
        if (getCreatorLabel(creator.creatorType)) {
            obj.creators[i] = normalizeName(creator, creator.fieldMode, true);
            for (var j in creator.multi._key) {
                creator.multi._key[j] = normalizeName(creator.multi._key[j], creator.fieldMode);
            }
        }
    }
    return obj;
}

function zoteroToJurismData(obj) {
    var extradata = null;
    var zObj = obj.data;
    zObj.multi = {
        main: {},
        _keys: {}
    }
    if (zObj.extra) {
        var m = zObj.extra.match(/mlzsync1:([0-9][0-9][0-9][0-9])(.*)/);
        if (m) {
            offset = parseInt(m[1], 10);
            extradata = JSON.parse(m[2].slice(0, offset))
            zObj.extra = zObj.extra.slice((offset+13));
        }
    }
    if (extradata) {
        if (extradata.extracreators) {
            for (var j=0,jlen=extradata.extracreators.length;j<jlen;j++) {
                zObj.creators.push(zCreator);
            }
        }
    }
    if (extradata) {
        creatorMap = {};
        creatorCounts = {};
        for (var j=0,jlen=zObj.creators.length;j<jlen;j++) {
            var zCreatorName = zObj.creators[j].creatorType;
            if (!creatorCounts[zCreatorName]) {
                creatorCounts[zCreatorName] = 0;
            }
            creatorMap[j] = {
                zCreatorName: zCreatorName,
                pos: creatorCounts[zCreatorName]
            }
            creatorCounts[zCreatorName]++;
        }
        // FIX-UPS
        if (extradata.xtype) {
            zObj.type = extradata.xtype;
        }
        if (extradata.extrafields) {
            for (var key in extradata.extrafields) {
                zObj[key] = extradata.extrafields[key];
            }
        }
        if (extradata.multifields) {
            zObj.multi = extradata.multifields;
        }
        if (extradata.multicreators) {
            for (var pos in extradata.multicreators) {
                var creatorData = extradata.multicreators[pos];
                zObj.creators[creatorMap[pos].pos].multi = creatorData;
            }
        }
        if (zObj.jurisdiction) {
            var m = zObj.jurisdiction.match(/^([0-9][0-9][0-9])/);
            if (m) {
                var offset = parseInt(m[1]);
                zObj.jurisdiction = zObj.jurisdiction.slice(offset + 3).split("|").slice(1).join("|");

            }
        }
    }
    zObj = normalizeNames(zObj);
    return zObj;
}

function getLabelsAndVals(obj) {
    var ret = {
        creators: {},
        fields: {}
    };
    for (var fieldName in obj) {
        if (!obj[fieldName]) continue;
        if (["dateModified", "dateAdded"].indexOf(fieldName) > -1) continue;
        var fieldLabel = getFieldLabel(fieldName);
        if (fieldLabel) {
            ret.fields[fieldName] = {
                value: obj[fieldName],
                label: fieldLabel
            }
        }
    }
    for (var i in obj.creators) {
        var creator = obj.creators[i];
        var creatorLabel = getCreatorLabel(creator.creatorType);
        if (creatorLabel) {
            if (!ret.creators[creator.creatorType]) {
                ret.creators[creator.creatorType] = [];
            }
            ret.creators[creator.creatorType].push({
                value: creator,
                label: creatorLabel
            });
        }
    }
    return ret;
}

module.exports = {
    zoteroToJurismData: zoteroToJurismData,
    getLabelsAndVals: getLabelsAndVals
}

},{"../build/schema-min.json":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUvYmVubmV0dC8ubnZtL3ZlcnNpb25zL25vZGUvdjguOS40L2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYnVpbGQvbWFpbi5qcyIsImJ1aWxkL3NjaGVtYS1taW4uanNvbiIsImJ1aWxkL3pvdGVybzJqdXJpc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChmdW5jdGlvbigpIHtcblxuICAgIHZhciBvcmRlcmVkRmllbGRzID0gW1widHlwZVwiLCBcImNhc2VOYW1lXCIsIFwianVyaXNkaWN0aW9uXCIsIFwiY291cnRcIiwgXCJyZXBvcnRlclZvbHVtZVwiLCBcInJlcG9ydGVyXCIsIFwiZmlyc3RQYWdlXCIsIFwiZGF0ZURlY2lkZWRcIl07XG4gICAgXG4gICAgdmFyIHoyaiA9IHJlcXVpcmUoXCIuL3pvdGVybzJqdXJpc21cIik7XG5cbiAgICB2YXIgYXBpU3R1YiA9IFwiaHR0cHM6Ly9hcGkuem90ZXJvLm9yZy9ncm91cHMvMjMxOTk0OC9pdGVtcy9cIlxuICAgIFxuICAgIGZ1bmN0aW9uIHNldEZpZWxkKGdyaWQsIHJvdywgaW5mbykge1xuICAgICAgICB2YXIgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgY2VsbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBcbiAgICAgICAgY2VsbDEuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZ3JpZC1jb2x1bW46MTsgZ3JpZC1yb3c6IFwiICsgcm93ICsgXCI7XCIpO1xuICAgICAgICBjZWxsMS5zZXRBdHRyaWJ1dGUoXCJhbGlnblwiLCBcInJpZ2h0XCIpO1xuICAgICAgICBjZWxsMi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtY29sdW1uOjI7IGdyaWQtcm93OiBcIiArIHJvdyArIFwiO1wiKTtcblxuICAgICAgICBjZWxsMS5pbm5lckhUTUwgPSBpbmZvLmxhYmVsICsgXCI6XCI7XG4gICAgICAgIGNlbGwyLmlubmVySFRNTCA9IGluZm8udmFsdWU7XG4gICAgICAgIFxuICAgICAgICBncmlkLmFwcGVuZChjZWxsMSk7XG4gICAgICAgIGdyaWQuYXBwZW5kKGNlbGwyKTtcbiAgICAgICAgcm93Kys7XG4gICAgICAgIHJldHVybiByb3c7XG4gICAgfVxuICAgIFxuICAgICQoJy5jaXRlJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICAgICQuYnVzeUxvYWRGdWxsKFwic2hvd1wiLCB7XG4gICAgICAgICAgICBzcGlubmVyOiBcImFjY29yZGlvblwiXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5pZC5zbGljZSgxKTtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgJC5nZXQoIGFwaVN0dWIgKyBrZXksIGZ1bmN0aW9uKCBkYXRhICkge1xuICAgICAgICAgICAgdmFyIGpPYmogPSB6Mmouem90ZXJvVG9KdXJpc21EYXRhKGRhdGEpO1xuICAgICAgICAgICAgdmFyIGpNYXAgPSB6MmouZ2V0TGFiZWxzQW5kVmFscyhqT2JqKTtcbiAgICAgICAgICAgIHZhciBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGh0bWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbFwiKTtcbiAgICAgICAgICAgIHZhciBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciByb3cgPSAxO1xuICAgICAgICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdyaWRcIik7XG4gICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogZ3JpZDtncmlkLWdhcDogM3B4OyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IGF1dG9cIik7XG4gICAgICAgICAgICB2YXIgY2l0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgY2l0ZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtY29sdW1uOiAxIC8gMzsgZ3JpZC1yb3c6IFwiICsgcm93ICsgXCI7IGJvcmRlci1yYWRpdXM6IDAuNWVtOyBiYWNrZ3JvdW5kOiAjY2NjOyBwYWRkaW5nOiAwLjVlbTtcIik7XG4gICAgICAgICAgICBjaXRlLmlubmVySFRNTCA9ICQoXCIjXCIgKyBpZCkuaHRtbCgpO1xuICAgICAgICAgICAgZ3JpZC5hcHBlbmQoY2l0ZSk7XG4gICAgICAgICAgICByb3crKztcbiAgICAgICAgICAgIHZhciBmaWVsZFN0b3BMaXN0ID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG9yZGVyZWRGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gb3JkZXJlZEZpZWxkc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoak1hcC5maWVsZHNbZmllbGROYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSBzZXRGaWVsZChncmlkLCByb3csIGpNYXAuZmllbGRzW2ZpZWxkTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFN0b3BMaXN0W2ZpZWxkTmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBqTWFwLmZpZWxkcykge1xuICAgICAgICAgICAgICAgIHZhciBpbmZvID0gak1hcC5maWVsZHNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIWZpZWxkU3RvcExpc3Rba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSBzZXRGaWVsZChncmlkLCByb3csIGluZm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBobGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgICAgICAgICAgIGhsaW5lLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwibWFyZ2luOiAwLjVlbSAwOyBncmlkLWNvbHVtbjogMSAvIDM7IGdyaWQtcm93OiBcIiArIHJvdyArIFwiO1wiKTtcbiAgICAgICAgICAgIGdyaWQuYXBwZW5kKGhsaW5lKTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kKGdyaWQpO1xuICAgICAgICAgICAgcm93Kys7XG5cbiAgICAgICAgICAgIHZhciBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBidXR0b25EaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLWNvbHVtbjogMSAvIDM7IGdyaWQtcm93OiBcIiArIHJvdyArIFwiOyBmb250LXNpemU6IDExMCU7XCIpO1xuICAgICAgICAgICAgYnV0dG9uRGl2LnNldEF0dHJpYnV0ZShcImFsaWduXCIsIFwicmlnaHRcIik7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjp3aGl0ZTsgYmFja2dyb3VuZDogZ3JlZW47IGJvcmRlci1yYWRpdXM6IDFlbTsgcGFkZGluZzogMC41ZW1cIik7XG5cbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkxvZ2luXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJ1dHRvbkRpdi5hcHBlbmQoYnV0dG9uKTtcbiAgICAgICAgICAgIGdyaWQuYXBwZW5kKGJ1dHRvbkRpdik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQuYnVzeUxvYWRGdWxsKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICQoaHRtbCkuYXBwZW5kVG8oJ2JvZHknKS5tb2RhbCgpO1xuICAgICAgICB9LCBcImpzb25cIik7XG4gICAgfSk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcImxvY2FsZXNcIjp7XCJlbi1VU1wiOntcIml0ZW1UeXBlc1wiOntcImFydHdvcmtcIjpcIkFydHdvcmtcIixcImF0dGFjaG1lbnRcIjpcIkF0dGFjaG1lbnRcIixcImF1ZGlvUmVjb3JkaW5nXCI6XCJBdWRpbyBSZWNvcmRpbmdcIixcImJpbGxcIjpcIkJpbGxcIixcImJsb2dQb3N0XCI6XCJCbG9nIFBvc3RcIixcImJvb2tcIjpcIkJvb2tcIixcImJvb2tTZWN0aW9uXCI6XCJCb29rIFNlY3Rpb25cIixcImNhc2VcIjpcIkNhc2VcIixcImNsYXNzaWNcIjpcIkNsYXNzaWNcIixcImNvbXB1dGVyUHJvZ3JhbVwiOlwiQ29tcHV0ZXIgUHJvZ3JhbVwiLFwiY29uZmVyZW5jZVBhcGVyXCI6XCJDb25mZXJlbmNlIFBhcGVyXCIsXCJkaWN0aW9uYXJ5RW50cnlcIjpcIkRpY3Rpb25hcnkgRW50cnlcIixcImRvY3VtZW50XCI6XCJEb2N1bWVudFwiLFwiZW1haWxcIjpcIkUtbWFpbFwiLFwiZW5jeWNsb3BlZGlhQXJ0aWNsZVwiOlwiRW5jeWNsb3BlZGlhIEFydGljbGVcIixcImZpbG1cIjpcIkZpbG1cIixcImZvcnVtUG9zdFwiOlwiRm9ydW0gUG9zdFwiLFwiZ2F6ZXR0ZVwiOlwiR2F6ZXR0ZVwiLFwiaGVhcmluZ1wiOlwiSGVhcmluZ1wiLFwiaW5zdGFudE1lc3NhZ2VcIjpcIkluc3RhbnQgTWVzc2FnZVwiLFwiaW50ZXJ2aWV3XCI6XCJJbnRlcnZpZXdcIixcImpvdXJuYWxBcnRpY2xlXCI6XCJKb3VybmFsIEFydGljbGVcIixcImxldHRlclwiOlwiTGV0dGVyXCIsXCJtYWdhemluZUFydGljbGVcIjpcIk1hZ2F6aW5lIEFydGljbGVcIixcIm1hbnVzY3JpcHRcIjpcIk1hbnVzY3JpcHRcIixcIm1hcFwiOlwiTWFwXCIsXCJuZXdzcGFwZXJBcnRpY2xlXCI6XCJOZXdzcGFwZXIgQXJ0aWNsZVwiLFwibm90ZVwiOlwiTm90ZVwiLFwicGF0ZW50XCI6XCJQYXRlbnRcIixcInBvZGNhc3RcIjpcIlBvZGNhc3RcIixcInByZXNlbnRhdGlvblwiOlwiUHJlc2VudGF0aW9uXCIsXCJyYWRpb0Jyb2FkY2FzdFwiOlwiUmFkaW8gQnJvYWRjYXN0XCIsXCJyZWd1bGF0aW9uXCI6XCJSZWd1bGF0aW9uXCIsXCJyZXBvcnRcIjpcIlJlcG9ydFwiLFwic3RhbmRhcmRcIjpcIlN0YW5kYXJkXCIsXCJzdGF0dXRlXCI6XCJTdGF0dXRlXCIsXCJ0aGVzaXNcIjpcIlRoZXNpc1wiLFwidHJlYXR5XCI6XCJUcmVhdHlcIixcInR2QnJvYWRjYXN0XCI6XCJUViBCcm9hZGNhc3RcIixcInZpZGVvUmVjb3JkaW5nXCI6XCJWaWRlbyBSZWNvcmRpbmdcIixcIndlYnBhZ2VcIjpcIldlYiBQYWdlXCJ9LFwiZmllbGRzXCI6e1wiYWJzdHJhY3ROb3RlXCI6XCJBYnN0cmFjdFwiLFwiYWNjZXNzRGF0ZVwiOlwiQWNjZXNzZWRcIixcImFkb3B0aW9uRGF0ZVwiOlwiRGF0ZSBBZG9wdGVkXCIsXCJhbGJ1bVwiOlwiQWxidW1cIixcImFwcGxpY2F0aW9uTnVtYmVyXCI6XCJBcHBsaWNhdGlvbiBOdW1iZXJcIixcImFyY2hpdmVcIjpcIkFyY2hpdmVcIixcImFyY2hpdmVMb2NhdGlvblwiOlwiTG9jLiBpbiBBcmNoaXZlXCIsXCJhcnR3b3JrTWVkaXVtXCI6XCJNZWRpdW1cIixcImFydHdvcmtTaXplXCI6XCJBcnR3b3JrIFNpemVcIixcImFzc2VtYmx5TnVtYmVyXCI6XCJBc3N5LiBOby5cIixcImFzc2lnbmVlXCI6XCJBc3NpZ25lZVwiLFwiYXVkaW9GaWxlVHlwZVwiOlwiRmlsZSBUeXBlXCIsXCJhdWRpb1JlY29yZGluZ0Zvcm1hdFwiOlwiRm9ybWF0XCIsXCJiaWxsTnVtYmVyXCI6XCJCaWxsIE51bWJlclwiLFwiYmxvZ1RpdGxlXCI6XCJCbG9nIFRpdGxlXCIsXCJib29rVGl0bGVcIjpcIkJvb2sgVGl0bGVcIixcImNhbGxOdW1iZXJcIjpcIkNhbGwgTnVtYmVyXCIsXCJjYXNlTmFtZVwiOlwiQ2FzZSBOYW1lXCIsXCJjb2RlXCI6XCJDb2RlXCIsXCJjb2RlTnVtYmVyXCI6XCJDb2RlIE51bWJlclwiLFwiY29kZVBhZ2VzXCI6XCJDb2RlIFBhZ2VzXCIsXCJjb2RlVm9sdW1lXCI6XCJDb2RlIFZvbHVtZVwiLFwiY29tbWl0dGVlXCI6XCJDb21taXR0ZWVcIixcImNvbXBhbnlcIjpcIkNvbXBhbnlcIixcImNvbmZlcmVuY2VEYXRlXCI6XCJDb25mLiBEYXRlXCIsXCJjb25mZXJlbmNlTmFtZVwiOlwiQ29uZmVyZW5jZSBOYW1lXCIsXCJjb3VudHJ5XCI6XCJDb3VudHJ5XCIsXCJjb3VydFwiOlwiQ291cnRcIixcImRhdGVcIjpcIkRhdGVcIixcImRhdGVBZGRlZFwiOlwiRGF0ZSBBZGRlZFwiLFwiZGF0ZUFtZW5kZWRcIjpcIkRhdGUgQW1lbmRlZFwiLFwiZGF0ZURlY2lkZWRcIjpcIkRhdGUgRGVjaWRlZFwiLFwiZGF0ZUVuYWN0ZWRcIjpcIkRhdGUgRW5hY3RlZFwiLFwiZGF0ZU1vZGlmaWVkXCI6XCJNb2RpZmllZFwiLFwiZGljdGlvbmFyeVRpdGxlXCI6XCJEaWN0aW9uYXJ5IFRpdGxlXCIsXCJkaXN0cmlidXRvclwiOlwiRGlzdHJpYnV0b3JcIixcImRvY2tldE51bWJlclwiOlwiRG9ja2V0IE51bWJlclwiLFwiZG9jdW1lbnROYW1lXCI6XCJEb2N1bWVudCBOYW1lXCIsXCJkb2N1bWVudE51bWJlclwiOlwiRG9jdW1lbnQgTnVtYmVyXCIsXCJET0lcIjpcIkRPSVwiLFwiZWRpdGlvblwiOlwiRWRpdGlvblwiLFwiZW5jeWNsb3BlZGlhVGl0bGVcIjpcIkVuY3ljbG9wZWRpYSBUaXRsZVwiLFwiZXBpc29kZU51bWJlclwiOlwiRXBpc29kZSBOdW1iZXJcIixcImV4dHJhXCI6XCJFeHRyYVwiLFwiZmlsaW5nRGF0ZVwiOlwiRmlsaW5nIERhdGVcIixcImZpcnN0UGFnZVwiOlwiRmlyc3QgUGFnZVwiLFwiZm9ydW1UaXRsZVwiOlwiRm9ydW0vTGlzdHNlcnYgVGl0bGVcIixcImdhemV0dGVGbGFnXCI6XCJHYXpldHRlIFJlZlwiLFwiZ2VucmVcIjpcIkdlbnJlXCIsXCJoaXN0b3J5XCI6XCJIaXN0b3J5XCIsXCJpbnN0aXR1dGlvblwiOlwiSW5zdGl0dXRpb25cIixcImludGVydmlld01lZGl1bVwiOlwiTWVkaXVtXCIsXCJJU0JOXCI6XCJJU0JOXCIsXCJJU1NOXCI6XCJJU1NOXCIsXCJpc3N1ZVwiOlwiSXNzdWVcIixcImlzc3VlRGF0ZVwiOlwiSXNzdWUgRGF0ZVwiLFwiaXNzdWluZ0F1dGhvcml0eVwiOlwiSXNzdWluZyBBdXRob3JpdHlcIixcIml0ZW1UeXBlXCI6XCJUeXBlXCIsXCJqb3VybmFsQWJicmV2aWF0aW9uXCI6XCJKb3VybmFsIEFiYnJcIixcImp1cmlzZGljdGlvblwiOlwiSnVyaXNkaWN0aW9uXCIsXCJsYWJlbFwiOlwiTGFiZWxcIixcImxhbmd1YWdlXCI6XCJMYW5ndWFnZVwiLFwibGVnYWxTdGF0dXNcIjpcIkxlZ2FsIFN0YXR1c1wiLFwibGVnaXNsYXRpdmVCb2R5XCI6XCJMZWdpc2xhdGl2ZSBCb2R5XCIsXCJsZXR0ZXJUeXBlXCI6XCJUeXBlXCIsXCJsaWJyYXJ5Q2F0YWxvZ1wiOlwiTGlicmFyeSBDYXRhbG9nXCIsXCJtYW51c2NyaXB0VHlwZVwiOlwiVHlwZVwiLFwibWFwVHlwZVwiOlwiVHlwZVwiLFwibWVkaXVtXCI6XCJNZWRpdW1cIixcIm1lZXRpbmdOYW1lXCI6XCJNZWV0aW5nIE5hbWVcIixcIm1lZXRpbmdOdW1iZXJcIjpcIk1lZXRpbmcgTm8uXCIsXCJuYW1lT2ZBY3RcIjpcIk5hbWUgb2YgQWN0XCIsXCJuZXR3b3JrXCI6XCJOZXR3b3JrXCIsXCJuZXdzQ2FzZURhdGVcIjpcIkNhc2UgRGF0ZVwiLFwibnVtYmVyXCI6XCJOdW1iZXJcIixcIm51bWJlck9mVm9sdW1lc1wiOlwiIyBvZiBWb2x1bWVzXCIsXCJudW1QYWdlc1wiOlwiIyBvZiBQYWdlc1wiLFwib3BlbmluZ0RhdGVcIjpcIkRhdGUgT3BlbmVkXCIsXCJvcHVzXCI6XCJPcHVzIE5vLlwiLFwib3JpZ2luYWxEYXRlXCI6XCJPcmlnLiBEYXRlXCIsXCJwYWdlc1wiOlwiUGFnZXNcIixcInBhcmVudFRyZWF0eVwiOlwiUGFyZW50IFRyZWF0eVwiLFwicGF0ZW50TnVtYmVyXCI6XCJQYXRlbnQgTnVtYmVyXCIsXCJwbGFjZVwiOlwiUGxhY2VcIixcInBvc3RUeXBlXCI6XCJQb3N0IFR5cGVcIixcInByZXNlbnRhdGlvblR5cGVcIjpcIlR5cGVcIixcInByaW9yaXR5RGF0ZVwiOlwiUHJpb3JpdHkgRGF0ZVwiLFwicHJpb3JpdHlOdW1iZXJzXCI6XCJQcmlvcml0eSBOdW1iZXJzXCIsXCJwcm9jZWVkaW5nc1RpdGxlXCI6XCJQcm9jZWVkaW5ncyBUaXRsZVwiLFwicHJvZ3JhbW1pbmdMYW5ndWFnZVwiOlwiUHJvZy4gTGFuZ3VhZ2VcIixcInByb2dyYW1UaXRsZVwiOlwiUHJvZ3JhbSBUaXRsZVwiLFwicHVibGljYXRpb25EYXRlXCI6XCJEYXRlIFB1Ymxpc2hlZFwiLFwicHVibGljYXRpb25OdW1iZXJcIjpcIlB1YmxpY2F0aW9uIE5vLlwiLFwicHVibGljYXRpb25UaXRsZVwiOlwiUHVibGljYXRpb25cIixcInB1YmxpY0xhd051bWJlclwiOlwiUHVibGljIExhdyBOdW1iZXJcIixcInB1Ymxpc2hlclwiOlwiUHVibGlzaGVyXCIsXCJyZWZlcmVuY2VzXCI6XCJSZWZlcmVuY2VzXCIsXCJyZWduYWxZZWFyXCI6XCJSZWduYWwgWWVhclwiLFwicmVndWxhdGlvblR5cGVcIjpcIlR5cGVcIixcInJlZ3VsYXRvcnlCb2R5XCI6XCJBdXRob3JpdHlcIixcInJlaWduXCI6XCJDYXNlIFR5cGVcIixcInJlbGVhc2VcIjpcIlJlbGVhc2VcIixcInJlcG9ydGVyXCI6XCJSZXBvcnRlclwiLFwicmVwb3J0ZXJWb2x1bWVcIjpcIlJlcG9ydGVyIFZvbHVtZVwiLFwicmVwb3J0TnVtYmVyXCI6XCJSZXBvcnQgTnVtYmVyXCIsXCJyZXBvcnRUeXBlXCI6XCJSZXBvcnQgVHlwZVwiLFwicmVzb2x1dGlvbkxhYmVsXCI6XCJSZXNvbC4gTGFiZWxcIixcInJpZ2h0c1wiOlwiUmlnaHRzXCIsXCJydW5uaW5nVGltZVwiOlwiUnVubmluZyBUaW1lXCIsXCJzY2FsZVwiOlwiU2NhbGVcIixcInNlY3Rpb25cIjpcIlNlY3Rpb25cIixcInNlcmllc1wiOlwiU2VyaWVzXCIsXCJzZXJpZXNOdW1iZXJcIjpcIlNlcmllcyBOdW1iZXJcIixcInNlcmllc1RleHRcIjpcIlNlcmllcyBUZXh0XCIsXCJzZXJpZXNUaXRsZVwiOlwiU2VyaWVzIFRpdGxlXCIsXCJzZXNzaW9uXCI6XCJTZXNzaW9uXCIsXCJzZXNzaW9uVHlwZVwiOlwiU2Vzc2lvbiBUeXBlXCIsXCJzaG9ydFRpdGxlXCI6XCJTaG9ydCBUaXRsZVwiLFwic2lnbmluZ0RhdGVcIjpcIkRhdGUgU2lnbmVkXCIsXCJzdGF0dXNcIjpcIlN0YXR1c1wiLFwic3R1ZGlvXCI6XCJTdHVkaW9cIixcInN1YmplY3RcIjpcIlN1YmplY3RcIixcInN1cHBsZW1lbnROYW1lXCI6XCJTdXBwLiBOYW1lXCIsXCJzeXN0ZW1cIjpcIlN5c3RlbVwiLFwidGhlc2lzVHlwZVwiOlwiVHlwZVwiLFwidGl0bGVcIjpcIlRpdGxlXCIsXCJ1bml2ZXJzaXR5XCI6XCJVbml2ZXJzaXR5XCIsXCJ1cmxcIjpcIlVSTFwiLFwidmVyc2lvbk51bWJlclwiOlwiVmVyc2lvblwiLFwidmlkZW9SZWNvcmRpbmdGb3JtYXRcIjpcIkZvcm1hdFwiLFwidm9sdW1lXCI6XCJWb2x1bWVcIixcInZvbHVtZVRpdGxlXCI6XCJWb2x1bWUgVGl0bGVcIixcIndlYnNpdGVUaXRsZVwiOlwiV2Vic2l0ZSBUaXRsZVwiLFwid2Vic2l0ZVR5cGVcIjpcIldlYnNpdGUgVHlwZVwiLFwieWVhckFzVm9sdW1lXCI6XCJZZWFyIEFzIFZvbC5cIn0sXCJjcmVhdG9yVHlwZXNcIjp7XCJhcnRpc3RcIjpcIkFydGlzdFwiLFwiYXR0b3JuZXlBZ2VudFwiOlwiQXR0b3JuZXkvQWdlbnRcIixcImF1dGhvclwiOlwiQXV0aG9yXCIsXCJib29rQXV0aG9yXCI6XCJCb29rIEF1dGhvclwiLFwiY2FydG9ncmFwaGVyXCI6XCJDYXJ0b2dyYXBoZXJcIixcImNhc3RNZW1iZXJcIjpcIkNhc3QgTWVtYmVyXCIsXCJjb21tZW50ZXJcIjpcIkNvbW1lbnRlclwiLFwiY29tcG9zZXJcIjpcIkNvbXBvc2VyXCIsXCJjb250cmlidXRvclwiOlwiQ29udHJpYnV0b3JcIixcImNvc3BvbnNvclwiOlwiQ29zcG9uc29yXCIsXCJjb3Vuc2VsXCI6XCJDb3Vuc2VsXCIsXCJkaXJlY3RvclwiOlwiRGlyZWN0b3JcIixcImVkaXRvclwiOlwiRWRpdG9yXCIsXCJndWVzdFwiOlwiR3Vlc3RcIixcImludGVydmlld2VlXCI6XCJJbnRlcnZpZXcgV2l0aFwiLFwiaW50ZXJ2aWV3ZXJcIjpcIkludGVydmlld2VyXCIsXCJpbnZlbnRvclwiOlwiSW52ZW50b3JcIixcInBlcmZvcm1lclwiOlwiUGVyZm9ybWVyXCIsXCJwb2RjYXN0ZXJcIjpcIlBvZGNhc3RlclwiLFwicHJlc2VudGVyXCI6XCJQcmVzZW50ZXJcIixcInByb2R1Y2VyXCI6XCJQcm9kdWNlclwiLFwicHJvZ3JhbW1lclwiOlwiUHJvZ3JhbW1lclwiLFwicmVjaXBpZW50XCI6XCJSZWNpcGllbnRcIixcInJldmlld2VkQXV0aG9yXCI6XCJSZXZpZXdlZCBBdXRob3JcIixcInNjcmlwdHdyaXRlclwiOlwiU2NyaXB0d3JpdGVyXCIsXCJzZXJpZXNFZGl0b3JcIjpcIlNlcmllcyBFZGl0b3JcIixcInNwb25zb3JcIjpcIlNwb25zb3JcIixcInRlc3RpbW9ueUJ5XCI6XCJUZXN0aW1vbnkgQnlcIixcInRyYW5zbGF0b3JcIjpcIlRyYW5zbGF0b3JcIixcIndvcmRzQnlcIjpcIldvcmRzIEJ5XCJ9fX19IiwidmFyIHNjaGVtYSA9IHJlcXVpcmUoXCIuLi9idWlsZC9zY2hlbWEtbWluLmpzb25cIik7XG4vLyBJZiB0aGlzIGlzIG1hZGUgaW50byBhIGdlbmVyYWwgdG9vbGJveCBmb3IgaGFuZGxpbmcgWm90ZXJvIEFQSVxuLy8gcmV0dXJucyBhcyBKdXJpc20gZGF0YSwgd2UgY291bGQgcHVsbCBpbiB0aGUgc2NoZW1hIGhlcmUsXG4vLyBhbmQgYm90aCBkbyBhIGJldHRlciBqb2Igd2l0aCBjcmVhdG9yIGNvbnZlcnNpb25zLCBhbmQgcHJvdmlkZVxuLy8gYSByZXR1cm4gc3VwcGxlbWVudGVkIHdpdGggZmllbGQgbGFiZWxzLlxuXG4vLyBFbmNvZGluZyBvZiBuYW1lcyBzZXQgc2luZ2xlLWZpZWxkIG5hbWVzIGFzIFwibmFtZVwiIGluIGVuY29kZWQgZGF0YVxuLy8gYXQgc29tZSBwb2ludC4gVGhpcyByZWNvdmVycyBmcm9tIHRoYXQgZ2xpdGNoLlxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZShvYmosIGZpZWxkTW9kZSwgaXNUb3ApIHtcbiAgICB2YXIgcmV0ID0ge1xuICAgICAgICBjcmVhdG9yVHlwZTogb2JqLmNyZWF0b3JUeXBlXG4gICAgfTtcbiAgICBpZiAob2JqLm5hbWUgfHwgKG9iai5sYXN0TmFtZSAmJiAhb2JqLmZpcnN0TmFtZSkgfHwgZmllbGRNb2RlKSB7XG4gICAgICAgIHJldC5sYXN0TmFtZSA9IG9iai5sYXN0TmFtZSA/IG9iai5sYXN0TmFtZSA6IG9iai5uYW1lO1xuICAgICAgICByZXQuZmllbGRNb2RlID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQubGFzdE5hbWUgPSBvYmoubGFzdE5hbWU7XG4gICAgICAgIHJldC5maXJzdE5hbWUgPSBvYmouZmlyc3ROYW1lO1xuICAgICAgICByZXQuZmllbGRNb2RlID0gMDtcbiAgICB9XG4gICAgaWYgKGlzVG9wKSB7XG4gICAgICAgIHJldC5tdWx0aSA9IG9iai5tdWx0aTtcbiAgICAgICAgaWYgKCFyZXQubXVsdGkpIHtcbiAgICAgICAgICAgIHJldC5tdWx0aSA9IHtcbiAgICAgICAgICAgICAgICBfa2V5OiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldENyZWF0b3JMYWJlbChmaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gc2NoZW1hLmxvY2FsZXNbXCJlbi1VU1wiXS5jcmVhdG9yVHlwZXNbZmllbGROYW1lXTtcbn1cblxuZnVuY3Rpb24gZ2V0RmllbGRMYWJlbChmaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gc2NoZW1hLmxvY2FsZXNbXCJlbi1VU1wiXS5maWVsZHNbZmllbGROYW1lXTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZXMob2JqKSB7XG4gICAgZm9yICh2YXIgaSBpbiBvYmouY3JlYXRvcnMpIHtcbiAgICAgICAgdmFyIGNyZWF0b3IgPSBvYmouY3JlYXRvcnNbaV07XG4gICAgICAgIGlmIChnZXRDcmVhdG9yTGFiZWwoY3JlYXRvci5jcmVhdG9yVHlwZSkpIHtcbiAgICAgICAgICAgIG9iai5jcmVhdG9yc1tpXSA9IG5vcm1hbGl6ZU5hbWUoY3JlYXRvciwgY3JlYXRvci5maWVsZE1vZGUsIHRydWUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBjcmVhdG9yLm11bHRpLl9rZXkpIHtcbiAgICAgICAgICAgICAgICBjcmVhdG9yLm11bHRpLl9rZXlbal0gPSBub3JtYWxpemVOYW1lKGNyZWF0b3IubXVsdGkuX2tleVtqXSwgY3JlYXRvci5maWVsZE1vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHpvdGVyb1RvSnVyaXNtRGF0YShvYmopIHtcbiAgICB2YXIgZXh0cmFkYXRhID0gbnVsbDtcbiAgICB2YXIgek9iaiA9IG9iai5kYXRhO1xuICAgIHpPYmoubXVsdGkgPSB7XG4gICAgICAgIG1haW46IHt9LFxuICAgICAgICBfa2V5czoge31cbiAgICB9XG4gICAgaWYgKHpPYmouZXh0cmEpIHtcbiAgICAgICAgdmFyIG0gPSB6T2JqLmV4dHJhLm1hdGNoKC9tbHpzeW5jMTooWzAtOV1bMC05XVswLTldWzAtOV0pKC4qKS8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSwgMTApO1xuICAgICAgICAgICAgZXh0cmFkYXRhID0gSlNPTi5wYXJzZShtWzJdLnNsaWNlKDAsIG9mZnNldCkpXG4gICAgICAgICAgICB6T2JqLmV4dHJhID0gek9iai5leHRyYS5zbGljZSgob2Zmc2V0KzEzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV4dHJhZGF0YSkge1xuICAgICAgICBpZiAoZXh0cmFkYXRhLmV4dHJhY3JlYXRvcnMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGo9MCxqbGVuPWV4dHJhZGF0YS5leHRyYWNyZWF0b3JzLmxlbmd0aDtqPGpsZW47aisrKSB7XG4gICAgICAgICAgICAgICAgek9iai5jcmVhdG9ycy5wdXNoKHpDcmVhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXh0cmFkYXRhKSB7XG4gICAgICAgIGNyZWF0b3JNYXAgPSB7fTtcbiAgICAgICAgY3JlYXRvckNvdW50cyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBqPTAsamxlbj16T2JqLmNyZWF0b3JzLmxlbmd0aDtqPGpsZW47aisrKSB7XG4gICAgICAgICAgICB2YXIgekNyZWF0b3JOYW1lID0gek9iai5jcmVhdG9yc1tqXS5jcmVhdG9yVHlwZTtcbiAgICAgICAgICAgIGlmICghY3JlYXRvckNvdW50c1t6Q3JlYXRvck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRvckNvdW50c1t6Q3JlYXRvck5hbWVdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyZWF0b3JNYXBbal0gPSB7XG4gICAgICAgICAgICAgICAgekNyZWF0b3JOYW1lOiB6Q3JlYXRvck5hbWUsXG4gICAgICAgICAgICAgICAgcG9zOiBjcmVhdG9yQ291bnRzW3pDcmVhdG9yTmFtZV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyZWF0b3JDb3VudHNbekNyZWF0b3JOYW1lXSsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZJWC1VUFNcbiAgICAgICAgaWYgKGV4dHJhZGF0YS54dHlwZSkge1xuICAgICAgICAgICAgek9iai50eXBlID0gZXh0cmFkYXRhLnh0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChleHRyYWRhdGEuZXh0cmFmaWVsZHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBleHRyYWRhdGEuZXh0cmFmaWVsZHMpIHtcbiAgICAgICAgICAgICAgICB6T2JqW2tleV0gPSBleHRyYWRhdGEuZXh0cmFmaWVsZHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXh0cmFkYXRhLm11bHRpZmllbGRzKSB7XG4gICAgICAgICAgICB6T2JqLm11bHRpID0gZXh0cmFkYXRhLm11bHRpZmllbGRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChleHRyYWRhdGEubXVsdGljcmVhdG9ycykge1xuICAgICAgICAgICAgZm9yICh2YXIgcG9zIGluIGV4dHJhZGF0YS5tdWx0aWNyZWF0b3JzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNyZWF0b3JEYXRhID0gZXh0cmFkYXRhLm11bHRpY3JlYXRvcnNbcG9zXTtcbiAgICAgICAgICAgICAgICB6T2JqLmNyZWF0b3JzW2NyZWF0b3JNYXBbcG9zXS5wb3NdLm11bHRpID0gY3JlYXRvckRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHpPYmouanVyaXNkaWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbSA9IHpPYmouanVyaXNkaWN0aW9uLm1hdGNoKC9eKFswLTldWzAtOV1bMC05XSkvKTtcbiAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KG1bMV0pO1xuICAgICAgICAgICAgICAgIHpPYmouanVyaXNkaWN0aW9uID0gek9iai5qdXJpc2RpY3Rpb24uc2xpY2Uob2Zmc2V0ICsgMykuc3BsaXQoXCJ8XCIpLnNsaWNlKDEpLmpvaW4oXCJ8XCIpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgek9iaiA9IG5vcm1hbGl6ZU5hbWVzKHpPYmopO1xuICAgIHJldHVybiB6T2JqO1xufVxuXG5mdW5jdGlvbiBnZXRMYWJlbHNBbmRWYWxzKG9iaikge1xuICAgIHZhciByZXQgPSB7XG4gICAgICAgIGNyZWF0b3JzOiB7fSxcbiAgICAgICAgZmllbGRzOiB7fVxuICAgIH07XG4gICAgZm9yICh2YXIgZmllbGROYW1lIGluIG9iaikge1xuICAgICAgICBpZiAoIW9ialtmaWVsZE5hbWVdKSBjb250aW51ZTtcbiAgICAgICAgaWYgKFtcImRhdGVNb2RpZmllZFwiLCBcImRhdGVBZGRlZFwiXS5pbmRleE9mKGZpZWxkTmFtZSkgPiAtMSkgY29udGludWU7XG4gICAgICAgIHZhciBmaWVsZExhYmVsID0gZ2V0RmllbGRMYWJlbChmaWVsZE5hbWUpO1xuICAgICAgICBpZiAoZmllbGRMYWJlbCkge1xuICAgICAgICAgICAgcmV0LmZpZWxkc1tmaWVsZE5hbWVdID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBvYmpbZmllbGROYW1lXSxcbiAgICAgICAgICAgICAgICBsYWJlbDogZmllbGRMYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgaW4gb2JqLmNyZWF0b3JzKSB7XG4gICAgICAgIHZhciBjcmVhdG9yID0gb2JqLmNyZWF0b3JzW2ldO1xuICAgICAgICB2YXIgY3JlYXRvckxhYmVsID0gZ2V0Q3JlYXRvckxhYmVsKGNyZWF0b3IuY3JlYXRvclR5cGUpO1xuICAgICAgICBpZiAoY3JlYXRvckxhYmVsKSB7XG4gICAgICAgICAgICBpZiAoIXJldC5jcmVhdG9yc1tjcmVhdG9yLmNyZWF0b3JUeXBlXSkge1xuICAgICAgICAgICAgICAgIHJldC5jcmVhdG9yc1tjcmVhdG9yLmNyZWF0b3JUeXBlXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0LmNyZWF0b3JzW2NyZWF0b3IuY3JlYXRvclR5cGVdLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBjcmVhdG9yLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBjcmVhdG9yTGFiZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHpvdGVyb1RvSnVyaXNtRGF0YTogem90ZXJvVG9KdXJpc21EYXRhLFxuICAgIGdldExhYmVsc0FuZFZhbHM6IGdldExhYmVsc0FuZFZhbHNcbn1cbiJdfQ==
