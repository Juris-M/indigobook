(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(function() {

    var orderedFields = ["type", "caseName", "jurisdiction", "court", "reporterVolume", "reporter", "firstPage", "dateDecided"];
    
    var z2j = require("./zotero2jurism");

    var apiStub = "https://api.zotero.org/groups/2319948/items/"
    
    function setField(grid, row, info) {
        var label = document.createElement("div");
        var value = document.createElement("div");

        label.setAttribute("class", "label");
        label.setAttribute("align", "right");
        label.setAttribute("style", "grid-row: " + row + ";");

        value.setAttribute("class", "value");
        value.setAttribute("style", "grid-row: " + row + ";");

        label.innerHTML = info.label + ":";
        value.innerHTML = info.value;
        
        grid.append(label);
        grid.append(value);
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
            grid.setAttribute("class", "citegrid");
            var cite = document.createElement("p");
            cite.setAttribute("class", "example");
            cite.setAttribute("style", "grid-row: " + row + ";");
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
            hline.setAttribute("class", "hline");
            hline.setAttribute("style", "grid-row: " + row + ";");
            grid.append(hline);
            html.append(grid);
            row++;

            var footer = document.createElement("div");
            var button = document.createElement("a");

            footer.setAttribute("class", "footer");
            footer.setAttribute("style", "grid-row: " + row + ";");
            footer.setAttribute("align", "right");

            button.setAttribute("class", "button");

            button.innerHTML = "Login";
            
            footer.append(button);
            grid.append(footer);
            
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUvYmVubmV0dC8ubnZtL3ZlcnNpb25zL25vZGUvdjguOS40L2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYnVpbGQvbWFpbi5qcyIsImJ1aWxkL3NjaGVtYS1taW4uanNvbiIsImJ1aWxkL3pvdGVybzJqdXJpc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChmdW5jdGlvbigpIHtcblxuICAgIHZhciBvcmRlcmVkRmllbGRzID0gW1widHlwZVwiLCBcImNhc2VOYW1lXCIsIFwianVyaXNkaWN0aW9uXCIsIFwiY291cnRcIiwgXCJyZXBvcnRlclZvbHVtZVwiLCBcInJlcG9ydGVyXCIsIFwiZmlyc3RQYWdlXCIsIFwiZGF0ZURlY2lkZWRcIl07XG4gICAgXG4gICAgdmFyIHoyaiA9IHJlcXVpcmUoXCIuL3pvdGVybzJqdXJpc21cIik7XG5cbiAgICB2YXIgYXBpU3R1YiA9IFwiaHR0cHM6Ly9hcGkuem90ZXJvLm9yZy9ncm91cHMvMjMxOTk0OC9pdGVtcy9cIlxuICAgIFxuICAgIGZ1bmN0aW9uIHNldEZpZWxkKGdyaWQsIHJvdywgaW5mbykge1xuICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImFsaWduXCIsIFwicmlnaHRcIik7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1yb3c6IFwiICsgcm93ICsgXCI7XCIpO1xuXG4gICAgICAgIHZhbHVlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidmFsdWVcIik7XG4gICAgICAgIHZhbHVlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1yb3c6IFwiICsgcm93ICsgXCI7XCIpO1xuXG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGluZm8ubGFiZWwgKyBcIjpcIjtcbiAgICAgICAgdmFsdWUuaW5uZXJIVE1MID0gaW5mby52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIGdyaWQuYXBwZW5kKGxhYmVsKTtcbiAgICAgICAgZ3JpZC5hcHBlbmQodmFsdWUpO1xuICAgICAgICByb3crKztcbiAgICAgICAgcmV0dXJuIHJvdztcbiAgICB9XG4gICAgXG4gICAgJCgnLmNpdGUnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgJC5idXN5TG9hZEZ1bGwoXCJzaG93XCIsIHtcbiAgICAgICAgICAgIHNwaW5uZXI6IFwiYWNjb3JkaW9uXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmlkLnNsaWNlKDEpO1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICAkLmdldCggYXBpU3R1YiArIGtleSwgZnVuY3Rpb24oIGRhdGEgKSB7XG4gICAgICAgICAgICB2YXIgak9iaiA9IHoyai56b3Rlcm9Ub0p1cmlzbURhdGEoZGF0YSk7XG4gICAgICAgICAgICB2YXIgak1hcCA9IHoyai5nZXRMYWJlbHNBbmRWYWxzKGpPYmopO1xuICAgICAgICAgICAgdmFyIGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaHRtbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsXCIpO1xuICAgICAgICAgICAgdmFyIGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIHJvdyA9IDE7XG4gICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2l0ZWdyaWRcIik7XG4gICAgICAgICAgICB2YXIgY2l0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgY2l0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImV4YW1wbGVcIik7XG4gICAgICAgICAgICBjaXRlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1yb3c6IFwiICsgcm93ICsgXCI7XCIpO1xuICAgICAgICAgICAgY2l0ZS5pbm5lckhUTUwgPSAkKFwiI1wiICsgaWQpLmh0bWwoKTtcbiAgICAgICAgICAgIGdyaWQuYXBwZW5kKGNpdGUpO1xuICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICB2YXIgZmllbGRTdG9wTGlzdCA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcmRlcmVkRmllbGRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IG9yZGVyZWRGaWVsZHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGpNYXAuZmllbGRzW2ZpZWxkTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gc2V0RmllbGQoZ3JpZCwgcm93LCBqTWFwLmZpZWxkc1tmaWVsZE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRTdG9wTGlzdFtmaWVsZE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gak1hcC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IGpNYXAuZmllbGRzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCFmaWVsZFN0b3BMaXN0W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gc2V0RmllbGQoZ3JpZCwgcm93LCBpbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgICAgICAgICBobGluZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhsaW5lXCIpO1xuICAgICAgICAgICAgaGxpbmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLXJvdzogXCIgKyByb3cgKyBcIjtcIik7XG4gICAgICAgICAgICBncmlkLmFwcGVuZChobGluZSk7XG4gICAgICAgICAgICBodG1sLmFwcGVuZChncmlkKTtcbiAgICAgICAgICAgIHJvdysrO1xuXG4gICAgICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgICAgICAgICAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9vdGVyXCIpO1xuICAgICAgICAgICAgZm9vdGVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1yb3c6IFwiICsgcm93ICsgXCI7XCIpO1xuICAgICAgICAgICAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImFsaWduXCIsIFwicmlnaHRcIik7XG5cbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ1dHRvblwiKTtcblxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFwiTG9naW5cIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9vdGVyLmFwcGVuZChidXR0b24pO1xuICAgICAgICAgICAgZ3JpZC5hcHBlbmQoZm9vdGVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJC5idXN5TG9hZEZ1bGwoXCJoaWRlXCIpO1xuICAgICAgICAgICAgJChodG1sKS5hcHBlbmRUbygnYm9keScpLm1vZGFsKCk7XG4gICAgICAgIH0sIFwianNvblwiKTtcbiAgICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHM9e1wibG9jYWxlc1wiOntcImVuLVVTXCI6e1wiaXRlbVR5cGVzXCI6e1wiYXJ0d29ya1wiOlwiQXJ0d29ya1wiLFwiYXR0YWNobWVudFwiOlwiQXR0YWNobWVudFwiLFwiYXVkaW9SZWNvcmRpbmdcIjpcIkF1ZGlvIFJlY29yZGluZ1wiLFwiYmlsbFwiOlwiQmlsbFwiLFwiYmxvZ1Bvc3RcIjpcIkJsb2cgUG9zdFwiLFwiYm9va1wiOlwiQm9va1wiLFwiYm9va1NlY3Rpb25cIjpcIkJvb2sgU2VjdGlvblwiLFwiY2FzZVwiOlwiQ2FzZVwiLFwiY2xhc3NpY1wiOlwiQ2xhc3NpY1wiLFwiY29tcHV0ZXJQcm9ncmFtXCI6XCJDb21wdXRlciBQcm9ncmFtXCIsXCJjb25mZXJlbmNlUGFwZXJcIjpcIkNvbmZlcmVuY2UgUGFwZXJcIixcImRpY3Rpb25hcnlFbnRyeVwiOlwiRGljdGlvbmFyeSBFbnRyeVwiLFwiZG9jdW1lbnRcIjpcIkRvY3VtZW50XCIsXCJlbWFpbFwiOlwiRS1tYWlsXCIsXCJlbmN5Y2xvcGVkaWFBcnRpY2xlXCI6XCJFbmN5Y2xvcGVkaWEgQXJ0aWNsZVwiLFwiZmlsbVwiOlwiRmlsbVwiLFwiZm9ydW1Qb3N0XCI6XCJGb3J1bSBQb3N0XCIsXCJnYXpldHRlXCI6XCJHYXpldHRlXCIsXCJoZWFyaW5nXCI6XCJIZWFyaW5nXCIsXCJpbnN0YW50TWVzc2FnZVwiOlwiSW5zdGFudCBNZXNzYWdlXCIsXCJpbnRlcnZpZXdcIjpcIkludGVydmlld1wiLFwiam91cm5hbEFydGljbGVcIjpcIkpvdXJuYWwgQXJ0aWNsZVwiLFwibGV0dGVyXCI6XCJMZXR0ZXJcIixcIm1hZ2F6aW5lQXJ0aWNsZVwiOlwiTWFnYXppbmUgQXJ0aWNsZVwiLFwibWFudXNjcmlwdFwiOlwiTWFudXNjcmlwdFwiLFwibWFwXCI6XCJNYXBcIixcIm5ld3NwYXBlckFydGljbGVcIjpcIk5ld3NwYXBlciBBcnRpY2xlXCIsXCJub3RlXCI6XCJOb3RlXCIsXCJwYXRlbnRcIjpcIlBhdGVudFwiLFwicG9kY2FzdFwiOlwiUG9kY2FzdFwiLFwicHJlc2VudGF0aW9uXCI6XCJQcmVzZW50YXRpb25cIixcInJhZGlvQnJvYWRjYXN0XCI6XCJSYWRpbyBCcm9hZGNhc3RcIixcInJlZ3VsYXRpb25cIjpcIlJlZ3VsYXRpb25cIixcInJlcG9ydFwiOlwiUmVwb3J0XCIsXCJzdGFuZGFyZFwiOlwiU3RhbmRhcmRcIixcInN0YXR1dGVcIjpcIlN0YXR1dGVcIixcInRoZXNpc1wiOlwiVGhlc2lzXCIsXCJ0cmVhdHlcIjpcIlRyZWF0eVwiLFwidHZCcm9hZGNhc3RcIjpcIlRWIEJyb2FkY2FzdFwiLFwidmlkZW9SZWNvcmRpbmdcIjpcIlZpZGVvIFJlY29yZGluZ1wiLFwid2VicGFnZVwiOlwiV2ViIFBhZ2VcIn0sXCJmaWVsZHNcIjp7XCJhYnN0cmFjdE5vdGVcIjpcIkFic3RyYWN0XCIsXCJhY2Nlc3NEYXRlXCI6XCJBY2Nlc3NlZFwiLFwiYWRvcHRpb25EYXRlXCI6XCJEYXRlIEFkb3B0ZWRcIixcImFsYnVtXCI6XCJBbGJ1bVwiLFwiYXBwbGljYXRpb25OdW1iZXJcIjpcIkFwcGxpY2F0aW9uIE51bWJlclwiLFwiYXJjaGl2ZVwiOlwiQXJjaGl2ZVwiLFwiYXJjaGl2ZUxvY2F0aW9uXCI6XCJMb2MuIGluIEFyY2hpdmVcIixcImFydHdvcmtNZWRpdW1cIjpcIk1lZGl1bVwiLFwiYXJ0d29ya1NpemVcIjpcIkFydHdvcmsgU2l6ZVwiLFwiYXNzZW1ibHlOdW1iZXJcIjpcIkFzc3kuIE5vLlwiLFwiYXNzaWduZWVcIjpcIkFzc2lnbmVlXCIsXCJhdWRpb0ZpbGVUeXBlXCI6XCJGaWxlIFR5cGVcIixcImF1ZGlvUmVjb3JkaW5nRm9ybWF0XCI6XCJGb3JtYXRcIixcImJpbGxOdW1iZXJcIjpcIkJpbGwgTnVtYmVyXCIsXCJibG9nVGl0bGVcIjpcIkJsb2cgVGl0bGVcIixcImJvb2tUaXRsZVwiOlwiQm9vayBUaXRsZVwiLFwiY2FsbE51bWJlclwiOlwiQ2FsbCBOdW1iZXJcIixcImNhc2VOYW1lXCI6XCJDYXNlIE5hbWVcIixcImNvZGVcIjpcIkNvZGVcIixcImNvZGVOdW1iZXJcIjpcIkNvZGUgTnVtYmVyXCIsXCJjb2RlUGFnZXNcIjpcIkNvZGUgUGFnZXNcIixcImNvZGVWb2x1bWVcIjpcIkNvZGUgVm9sdW1lXCIsXCJjb21taXR0ZWVcIjpcIkNvbW1pdHRlZVwiLFwiY29tcGFueVwiOlwiQ29tcGFueVwiLFwiY29uZmVyZW5jZURhdGVcIjpcIkNvbmYuIERhdGVcIixcImNvbmZlcmVuY2VOYW1lXCI6XCJDb25mZXJlbmNlIE5hbWVcIixcImNvdW50cnlcIjpcIkNvdW50cnlcIixcImNvdXJ0XCI6XCJDb3VydFwiLFwiZGF0ZVwiOlwiRGF0ZVwiLFwiZGF0ZUFkZGVkXCI6XCJEYXRlIEFkZGVkXCIsXCJkYXRlQW1lbmRlZFwiOlwiRGF0ZSBBbWVuZGVkXCIsXCJkYXRlRGVjaWRlZFwiOlwiRGF0ZSBEZWNpZGVkXCIsXCJkYXRlRW5hY3RlZFwiOlwiRGF0ZSBFbmFjdGVkXCIsXCJkYXRlTW9kaWZpZWRcIjpcIk1vZGlmaWVkXCIsXCJkaWN0aW9uYXJ5VGl0bGVcIjpcIkRpY3Rpb25hcnkgVGl0bGVcIixcImRpc3RyaWJ1dG9yXCI6XCJEaXN0cmlidXRvclwiLFwiZG9ja2V0TnVtYmVyXCI6XCJEb2NrZXQgTnVtYmVyXCIsXCJkb2N1bWVudE5hbWVcIjpcIkRvY3VtZW50IE5hbWVcIixcImRvY3VtZW50TnVtYmVyXCI6XCJEb2N1bWVudCBOdW1iZXJcIixcIkRPSVwiOlwiRE9JXCIsXCJlZGl0aW9uXCI6XCJFZGl0aW9uXCIsXCJlbmN5Y2xvcGVkaWFUaXRsZVwiOlwiRW5jeWNsb3BlZGlhIFRpdGxlXCIsXCJlcGlzb2RlTnVtYmVyXCI6XCJFcGlzb2RlIE51bWJlclwiLFwiZXh0cmFcIjpcIkV4dHJhXCIsXCJmaWxpbmdEYXRlXCI6XCJGaWxpbmcgRGF0ZVwiLFwiZmlyc3RQYWdlXCI6XCJGaXJzdCBQYWdlXCIsXCJmb3J1bVRpdGxlXCI6XCJGb3J1bS9MaXN0c2VydiBUaXRsZVwiLFwiZ2F6ZXR0ZUZsYWdcIjpcIkdhemV0dGUgUmVmXCIsXCJnZW5yZVwiOlwiR2VucmVcIixcImhpc3RvcnlcIjpcIkhpc3RvcnlcIixcImluc3RpdHV0aW9uXCI6XCJJbnN0aXR1dGlvblwiLFwiaW50ZXJ2aWV3TWVkaXVtXCI6XCJNZWRpdW1cIixcIklTQk5cIjpcIklTQk5cIixcIklTU05cIjpcIklTU05cIixcImlzc3VlXCI6XCJJc3N1ZVwiLFwiaXNzdWVEYXRlXCI6XCJJc3N1ZSBEYXRlXCIsXCJpc3N1aW5nQXV0aG9yaXR5XCI6XCJJc3N1aW5nIEF1dGhvcml0eVwiLFwiaXRlbVR5cGVcIjpcIlR5cGVcIixcImpvdXJuYWxBYmJyZXZpYXRpb25cIjpcIkpvdXJuYWwgQWJiclwiLFwianVyaXNkaWN0aW9uXCI6XCJKdXJpc2RpY3Rpb25cIixcImxhYmVsXCI6XCJMYWJlbFwiLFwibGFuZ3VhZ2VcIjpcIkxhbmd1YWdlXCIsXCJsZWdhbFN0YXR1c1wiOlwiTGVnYWwgU3RhdHVzXCIsXCJsZWdpc2xhdGl2ZUJvZHlcIjpcIkxlZ2lzbGF0aXZlIEJvZHlcIixcImxldHRlclR5cGVcIjpcIlR5cGVcIixcImxpYnJhcnlDYXRhbG9nXCI6XCJMaWJyYXJ5IENhdGFsb2dcIixcIm1hbnVzY3JpcHRUeXBlXCI6XCJUeXBlXCIsXCJtYXBUeXBlXCI6XCJUeXBlXCIsXCJtZWRpdW1cIjpcIk1lZGl1bVwiLFwibWVldGluZ05hbWVcIjpcIk1lZXRpbmcgTmFtZVwiLFwibWVldGluZ051bWJlclwiOlwiTWVldGluZyBOby5cIixcIm5hbWVPZkFjdFwiOlwiTmFtZSBvZiBBY3RcIixcIm5ldHdvcmtcIjpcIk5ldHdvcmtcIixcIm5ld3NDYXNlRGF0ZVwiOlwiQ2FzZSBEYXRlXCIsXCJudW1iZXJcIjpcIk51bWJlclwiLFwibnVtYmVyT2ZWb2x1bWVzXCI6XCIjIG9mIFZvbHVtZXNcIixcIm51bVBhZ2VzXCI6XCIjIG9mIFBhZ2VzXCIsXCJvcGVuaW5nRGF0ZVwiOlwiRGF0ZSBPcGVuZWRcIixcIm9wdXNcIjpcIk9wdXMgTm8uXCIsXCJvcmlnaW5hbERhdGVcIjpcIk9yaWcuIERhdGVcIixcInBhZ2VzXCI6XCJQYWdlc1wiLFwicGFyZW50VHJlYXR5XCI6XCJQYXJlbnQgVHJlYXR5XCIsXCJwYXRlbnROdW1iZXJcIjpcIlBhdGVudCBOdW1iZXJcIixcInBsYWNlXCI6XCJQbGFjZVwiLFwicG9zdFR5cGVcIjpcIlBvc3QgVHlwZVwiLFwicHJlc2VudGF0aW9uVHlwZVwiOlwiVHlwZVwiLFwicHJpb3JpdHlEYXRlXCI6XCJQcmlvcml0eSBEYXRlXCIsXCJwcmlvcml0eU51bWJlcnNcIjpcIlByaW9yaXR5IE51bWJlcnNcIixcInByb2NlZWRpbmdzVGl0bGVcIjpcIlByb2NlZWRpbmdzIFRpdGxlXCIsXCJwcm9ncmFtbWluZ0xhbmd1YWdlXCI6XCJQcm9nLiBMYW5ndWFnZVwiLFwicHJvZ3JhbVRpdGxlXCI6XCJQcm9ncmFtIFRpdGxlXCIsXCJwdWJsaWNhdGlvbkRhdGVcIjpcIkRhdGUgUHVibGlzaGVkXCIsXCJwdWJsaWNhdGlvbk51bWJlclwiOlwiUHVibGljYXRpb24gTm8uXCIsXCJwdWJsaWNhdGlvblRpdGxlXCI6XCJQdWJsaWNhdGlvblwiLFwicHVibGljTGF3TnVtYmVyXCI6XCJQdWJsaWMgTGF3IE51bWJlclwiLFwicHVibGlzaGVyXCI6XCJQdWJsaXNoZXJcIixcInJlZmVyZW5jZXNcIjpcIlJlZmVyZW5jZXNcIixcInJlZ25hbFllYXJcIjpcIlJlZ25hbCBZZWFyXCIsXCJyZWd1bGF0aW9uVHlwZVwiOlwiVHlwZVwiLFwicmVndWxhdG9yeUJvZHlcIjpcIkF1dGhvcml0eVwiLFwicmVpZ25cIjpcIkNhc2UgVHlwZVwiLFwicmVsZWFzZVwiOlwiUmVsZWFzZVwiLFwicmVwb3J0ZXJcIjpcIlJlcG9ydGVyXCIsXCJyZXBvcnRlclZvbHVtZVwiOlwiUmVwb3J0ZXIgVm9sdW1lXCIsXCJyZXBvcnROdW1iZXJcIjpcIlJlcG9ydCBOdW1iZXJcIixcInJlcG9ydFR5cGVcIjpcIlJlcG9ydCBUeXBlXCIsXCJyZXNvbHV0aW9uTGFiZWxcIjpcIlJlc29sLiBMYWJlbFwiLFwicmlnaHRzXCI6XCJSaWdodHNcIixcInJ1bm5pbmdUaW1lXCI6XCJSdW5uaW5nIFRpbWVcIixcInNjYWxlXCI6XCJTY2FsZVwiLFwic2VjdGlvblwiOlwiU2VjdGlvblwiLFwic2VyaWVzXCI6XCJTZXJpZXNcIixcInNlcmllc051bWJlclwiOlwiU2VyaWVzIE51bWJlclwiLFwic2VyaWVzVGV4dFwiOlwiU2VyaWVzIFRleHRcIixcInNlcmllc1RpdGxlXCI6XCJTZXJpZXMgVGl0bGVcIixcInNlc3Npb25cIjpcIlNlc3Npb25cIixcInNlc3Npb25UeXBlXCI6XCJTZXNzaW9uIFR5cGVcIixcInNob3J0VGl0bGVcIjpcIlNob3J0IFRpdGxlXCIsXCJzaWduaW5nRGF0ZVwiOlwiRGF0ZSBTaWduZWRcIixcInN0YXR1c1wiOlwiU3RhdHVzXCIsXCJzdHVkaW9cIjpcIlN0dWRpb1wiLFwic3ViamVjdFwiOlwiU3ViamVjdFwiLFwic3VwcGxlbWVudE5hbWVcIjpcIlN1cHAuIE5hbWVcIixcInN5c3RlbVwiOlwiU3lzdGVtXCIsXCJ0aGVzaXNUeXBlXCI6XCJUeXBlXCIsXCJ0aXRsZVwiOlwiVGl0bGVcIixcInVuaXZlcnNpdHlcIjpcIlVuaXZlcnNpdHlcIixcInVybFwiOlwiVVJMXCIsXCJ2ZXJzaW9uTnVtYmVyXCI6XCJWZXJzaW9uXCIsXCJ2aWRlb1JlY29yZGluZ0Zvcm1hdFwiOlwiRm9ybWF0XCIsXCJ2b2x1bWVcIjpcIlZvbHVtZVwiLFwidm9sdW1lVGl0bGVcIjpcIlZvbHVtZSBUaXRsZVwiLFwid2Vic2l0ZVRpdGxlXCI6XCJXZWJzaXRlIFRpdGxlXCIsXCJ3ZWJzaXRlVHlwZVwiOlwiV2Vic2l0ZSBUeXBlXCIsXCJ5ZWFyQXNWb2x1bWVcIjpcIlllYXIgQXMgVm9sLlwifSxcImNyZWF0b3JUeXBlc1wiOntcImFydGlzdFwiOlwiQXJ0aXN0XCIsXCJhdHRvcm5leUFnZW50XCI6XCJBdHRvcm5leS9BZ2VudFwiLFwiYXV0aG9yXCI6XCJBdXRob3JcIixcImJvb2tBdXRob3JcIjpcIkJvb2sgQXV0aG9yXCIsXCJjYXJ0b2dyYXBoZXJcIjpcIkNhcnRvZ3JhcGhlclwiLFwiY2FzdE1lbWJlclwiOlwiQ2FzdCBNZW1iZXJcIixcImNvbW1lbnRlclwiOlwiQ29tbWVudGVyXCIsXCJjb21wb3NlclwiOlwiQ29tcG9zZXJcIixcImNvbnRyaWJ1dG9yXCI6XCJDb250cmlidXRvclwiLFwiY29zcG9uc29yXCI6XCJDb3Nwb25zb3JcIixcImNvdW5zZWxcIjpcIkNvdW5zZWxcIixcImRpcmVjdG9yXCI6XCJEaXJlY3RvclwiLFwiZWRpdG9yXCI6XCJFZGl0b3JcIixcImd1ZXN0XCI6XCJHdWVzdFwiLFwiaW50ZXJ2aWV3ZWVcIjpcIkludGVydmlldyBXaXRoXCIsXCJpbnRlcnZpZXdlclwiOlwiSW50ZXJ2aWV3ZXJcIixcImludmVudG9yXCI6XCJJbnZlbnRvclwiLFwicGVyZm9ybWVyXCI6XCJQZXJmb3JtZXJcIixcInBvZGNhc3RlclwiOlwiUG9kY2FzdGVyXCIsXCJwcmVzZW50ZXJcIjpcIlByZXNlbnRlclwiLFwicHJvZHVjZXJcIjpcIlByb2R1Y2VyXCIsXCJwcm9ncmFtbWVyXCI6XCJQcm9ncmFtbWVyXCIsXCJyZWNpcGllbnRcIjpcIlJlY2lwaWVudFwiLFwicmV2aWV3ZWRBdXRob3JcIjpcIlJldmlld2VkIEF1dGhvclwiLFwic2NyaXB0d3JpdGVyXCI6XCJTY3JpcHR3cml0ZXJcIixcInNlcmllc0VkaXRvclwiOlwiU2VyaWVzIEVkaXRvclwiLFwic3BvbnNvclwiOlwiU3BvbnNvclwiLFwidGVzdGltb255QnlcIjpcIlRlc3RpbW9ueSBCeVwiLFwidHJhbnNsYXRvclwiOlwiVHJhbnNsYXRvclwiLFwid29yZHNCeVwiOlwiV29yZHMgQnlcIn19fX0iLCJ2YXIgc2NoZW1hID0gcmVxdWlyZShcIi4uL2J1aWxkL3NjaGVtYS1taW4uanNvblwiKTtcbi8vIElmIHRoaXMgaXMgbWFkZSBpbnRvIGEgZ2VuZXJhbCB0b29sYm94IGZvciBoYW5kbGluZyBab3Rlcm8gQVBJXG4vLyByZXR1cm5zIGFzIEp1cmlzbSBkYXRhLCB3ZSBjb3VsZCBwdWxsIGluIHRoZSBzY2hlbWEgaGVyZSxcbi8vIGFuZCBib3RoIGRvIGEgYmV0dGVyIGpvYiB3aXRoIGNyZWF0b3IgY29udmVyc2lvbnMsIGFuZCBwcm92aWRlXG4vLyBhIHJldHVybiBzdXBwbGVtZW50ZWQgd2l0aCBmaWVsZCBsYWJlbHMuXG5cbi8vIEVuY29kaW5nIG9mIG5hbWVzIHNldCBzaW5nbGUtZmllbGQgbmFtZXMgYXMgXCJuYW1lXCIgaW4gZW5jb2RlZCBkYXRhXG4vLyBhdCBzb21lIHBvaW50LiBUaGlzIHJlY292ZXJzIGZyb20gdGhhdCBnbGl0Y2guXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lKG9iaiwgZmllbGRNb2RlLCBpc1RvcCkge1xuICAgIHZhciByZXQgPSB7XG4gICAgICAgIGNyZWF0b3JUeXBlOiBvYmouY3JlYXRvclR5cGVcbiAgICB9O1xuICAgIGlmIChvYmoubmFtZSB8fCAob2JqLmxhc3ROYW1lICYmICFvYmouZmlyc3ROYW1lKSB8fCBmaWVsZE1vZGUpIHtcbiAgICAgICAgcmV0Lmxhc3ROYW1lID0gb2JqLmxhc3ROYW1lID8gb2JqLmxhc3ROYW1lIDogb2JqLm5hbWU7XG4gICAgICAgIHJldC5maWVsZE1vZGUgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5sYXN0TmFtZSA9IG9iai5sYXN0TmFtZTtcbiAgICAgICAgcmV0LmZpcnN0TmFtZSA9IG9iai5maXJzdE5hbWU7XG4gICAgICAgIHJldC5maWVsZE1vZGUgPSAwO1xuICAgIH1cbiAgICBpZiAoaXNUb3ApIHtcbiAgICAgICAgcmV0Lm11bHRpID0gb2JqLm11bHRpO1xuICAgICAgICBpZiAoIXJldC5tdWx0aSkge1xuICAgICAgICAgICAgcmV0Lm11bHRpID0ge1xuICAgICAgICAgICAgICAgIF9rZXk6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0Q3JlYXRvckxhYmVsKGZpZWxkTmFtZSkge1xuICAgIHJldHVybiBzY2hlbWEubG9jYWxlc1tcImVuLVVTXCJdLmNyZWF0b3JUeXBlc1tmaWVsZE5hbWVdO1xufVxuXG5mdW5jdGlvbiBnZXRGaWVsZExhYmVsKGZpZWxkTmFtZSkge1xuICAgIHJldHVybiBzY2hlbWEubG9jYWxlc1tcImVuLVVTXCJdLmZpZWxkc1tmaWVsZE5hbWVdO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lcyhvYmopIHtcbiAgICBmb3IgKHZhciBpIGluIG9iai5jcmVhdG9ycykge1xuICAgICAgICB2YXIgY3JlYXRvciA9IG9iai5jcmVhdG9yc1tpXTtcbiAgICAgICAgaWYgKGdldENyZWF0b3JMYWJlbChjcmVhdG9yLmNyZWF0b3JUeXBlKSkge1xuICAgICAgICAgICAgb2JqLmNyZWF0b3JzW2ldID0gbm9ybWFsaXplTmFtZShjcmVhdG9yLCBjcmVhdG9yLmZpZWxkTW9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBqIGluIGNyZWF0b3IubXVsdGkuX2tleSkge1xuICAgICAgICAgICAgICAgIGNyZWF0b3IubXVsdGkuX2tleVtqXSA9IG5vcm1hbGl6ZU5hbWUoY3JlYXRvci5tdWx0aS5fa2V5W2pdLCBjcmVhdG9yLmZpZWxkTW9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gem90ZXJvVG9KdXJpc21EYXRhKG9iaikge1xuICAgIHZhciBleHRyYWRhdGEgPSBudWxsO1xuICAgIHZhciB6T2JqID0gb2JqLmRhdGE7XG4gICAgek9iai5tdWx0aSA9IHtcbiAgICAgICAgbWFpbjoge30sXG4gICAgICAgIF9rZXlzOiB7fVxuICAgIH1cbiAgICBpZiAoek9iai5leHRyYSkge1xuICAgICAgICB2YXIgbSA9IHpPYmouZXh0cmEubWF0Y2goL21senN5bmMxOihbMC05XVswLTldWzAtOV1bMC05XSkoLiopLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBwYXJzZUludChtWzFdLCAxMCk7XG4gICAgICAgICAgICBleHRyYWRhdGEgPSBKU09OLnBhcnNlKG1bMl0uc2xpY2UoMCwgb2Zmc2V0KSlcbiAgICAgICAgICAgIHpPYmouZXh0cmEgPSB6T2JqLmV4dHJhLnNsaWNlKChvZmZzZXQrMTMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXh0cmFkYXRhKSB7XG4gICAgICAgIGlmIChleHRyYWRhdGEuZXh0cmFjcmVhdG9ycykge1xuICAgICAgICAgICAgZm9yICh2YXIgaj0wLGpsZW49ZXh0cmFkYXRhLmV4dHJhY3JlYXRvcnMubGVuZ3RoO2o8amxlbjtqKyspIHtcbiAgICAgICAgICAgICAgICB6T2JqLmNyZWF0b3JzLnB1c2goekNyZWF0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChleHRyYWRhdGEpIHtcbiAgICAgICAgY3JlYXRvck1hcCA9IHt9O1xuICAgICAgICBjcmVhdG9yQ291bnRzID0ge307XG4gICAgICAgIGZvciAodmFyIGo9MCxqbGVuPXpPYmouY3JlYXRvcnMubGVuZ3RoO2o8amxlbjtqKyspIHtcbiAgICAgICAgICAgIHZhciB6Q3JlYXRvck5hbWUgPSB6T2JqLmNyZWF0b3JzW2pdLmNyZWF0b3JUeXBlO1xuICAgICAgICAgICAgaWYgKCFjcmVhdG9yQ291bnRzW3pDcmVhdG9yTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjcmVhdG9yQ291bnRzW3pDcmVhdG9yTmFtZV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3JlYXRvck1hcFtqXSA9IHtcbiAgICAgICAgICAgICAgICB6Q3JlYXRvck5hbWU6IHpDcmVhdG9yTmFtZSxcbiAgICAgICAgICAgICAgICBwb3M6IGNyZWF0b3JDb3VudHNbekNyZWF0b3JOYW1lXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3JlYXRvckNvdW50c1t6Q3JlYXRvck5hbWVdKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRklYLVVQU1xuICAgICAgICBpZiAoZXh0cmFkYXRhLnh0eXBlKSB7XG4gICAgICAgICAgICB6T2JqLnR5cGUgPSBleHRyYWRhdGEueHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4dHJhZGF0YS5leHRyYWZpZWxkcykge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGV4dHJhZGF0YS5leHRyYWZpZWxkcykge1xuICAgICAgICAgICAgICAgIHpPYmpba2V5XSA9IGV4dHJhZGF0YS5leHRyYWZpZWxkc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChleHRyYWRhdGEubXVsdGlmaWVsZHMpIHtcbiAgICAgICAgICAgIHpPYmoubXVsdGkgPSBleHRyYWRhdGEubXVsdGlmaWVsZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4dHJhZGF0YS5tdWx0aWNyZWF0b3JzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwb3MgaW4gZXh0cmFkYXRhLm11bHRpY3JlYXRvcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3JlYXRvckRhdGEgPSBleHRyYWRhdGEubXVsdGljcmVhdG9yc1twb3NdO1xuICAgICAgICAgICAgICAgIHpPYmouY3JlYXRvcnNbY3JlYXRvck1hcFtwb3NdLnBvc10ubXVsdGkgPSBjcmVhdG9yRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoek9iai5qdXJpc2RpY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBtID0gek9iai5qdXJpc2RpY3Rpb24ubWF0Y2goL14oWzAtOV1bMC05XVswLTldKS8pO1xuICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSk7XG4gICAgICAgICAgICAgICAgek9iai5qdXJpc2RpY3Rpb24gPSB6T2JqLmp1cmlzZGljdGlvbi5zbGljZShvZmZzZXQgKyAzKS5zcGxpdChcInxcIikuc2xpY2UoMSkuam9pbihcInxcIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB6T2JqID0gbm9ybWFsaXplTmFtZXMoek9iaik7XG4gICAgcmV0dXJuIHpPYmo7XG59XG5cbmZ1bmN0aW9uIGdldExhYmVsc0FuZFZhbHMob2JqKSB7XG4gICAgdmFyIHJldCA9IHtcbiAgICAgICAgY3JlYXRvcnM6IHt9LFxuICAgICAgICBmaWVsZHM6IHt9XG4gICAgfTtcbiAgICBmb3IgKHZhciBmaWVsZE5hbWUgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqW2ZpZWxkTmFtZV0pIGNvbnRpbnVlO1xuICAgICAgICBpZiAoW1wiZGF0ZU1vZGlmaWVkXCIsIFwiZGF0ZUFkZGVkXCJdLmluZGV4T2YoZmllbGROYW1lKSA+IC0xKSBjb250aW51ZTtcbiAgICAgICAgdmFyIGZpZWxkTGFiZWwgPSBnZXRGaWVsZExhYmVsKGZpZWxkTmFtZSk7XG4gICAgICAgIGlmIChmaWVsZExhYmVsKSB7XG4gICAgICAgICAgICByZXQuZmllbGRzW2ZpZWxkTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG9ialtmaWVsZE5hbWVdLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZExhYmVsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSBpbiBvYmouY3JlYXRvcnMpIHtcbiAgICAgICAgdmFyIGNyZWF0b3IgPSBvYmouY3JlYXRvcnNbaV07XG4gICAgICAgIHZhciBjcmVhdG9yTGFiZWwgPSBnZXRDcmVhdG9yTGFiZWwoY3JlYXRvci5jcmVhdG9yVHlwZSk7XG4gICAgICAgIGlmIChjcmVhdG9yTGFiZWwpIHtcbiAgICAgICAgICAgIGlmICghcmV0LmNyZWF0b3JzW2NyZWF0b3IuY3JlYXRvclR5cGVdKSB7XG4gICAgICAgICAgICAgICAgcmV0LmNyZWF0b3JzW2NyZWF0b3IuY3JlYXRvclR5cGVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXQuY3JlYXRvcnNbY3JlYXRvci5jcmVhdG9yVHlwZV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGNyZWF0b3IsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGNyZWF0b3JMYWJlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgem90ZXJvVG9KdXJpc21EYXRhOiB6b3Rlcm9Ub0p1cmlzbURhdGEsXG4gICAgZ2V0TGFiZWxzQW5kVmFsczogZ2V0TGFiZWxzQW5kVmFsc1xufVxuIl19
