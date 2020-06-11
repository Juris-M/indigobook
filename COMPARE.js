const fs = require("fs");
const path = require("path");
const dom = require("htmldom2").DOMParser;
const xpath = require("xpath");
const ghDiffHTML = require('gh-diff-html')

const staticPath = (filename) => {
    return path.join(__dirname, "static", filename);
}
const scriptsPath = (filename) => {
    return path.join(__dirname, "scripts", filename);
}
const mapsPath = (filename) => {
    return path.join(__dirname, "..", "JM", "jurism", "juris-abbrevs", filename);
}
const immediatePath = (filename) => {
    return path.join(__dirname, filename);
}

const oldXml = fs.readFileSync(immediatePath("indigobook-old.html")).toString();
const newXml = fs.readFileSync(staticPath("indigobook.html")).toString();

const fixup = (txt) => {
    var txt = node.innerHTML;
    txt = txt.replace(/^<span[^>]+>/, "").replace(/<\/span>$/, "");
    txt = txt.trim();
    txt = txt.replace(/<var>/g, "[var]").replace(/<\/var>/g, "[/var]");
    txt = txt.replace(/<[^>]+>/g, "");
    txt = txt.replace(/\[var\]/g, "<").replace(/\[\/var\]/g, ">");
    txt = txt.replace(/&amp;/g, "&");
    txt = txt.replace(/&#38;/g, "&");
    txt = txt.replace(/&amp;/g, "&");
    txt = txt.replace(/\.$/, "");
    return txt;
}

var oldStuff = {};
var doc = new dom().parseFromString(oldXml, "text/html");
var nodes = xpath.select("//span[contains(@class, 'cite')]", doc);
for (var node of nodes) {
    var html_id = node.getAttribute("id");
    if (!html_id) console.log("OUCH1");
    oldStuff[html_id] = fixup(node.innerHTML);
}

var newStuff = {};
doc = new dom().parseFromString(newXml, "text/html");
var nodes = xpath.select("//span[contains(@class, 'cite')]", doc);
for (var node of nodes) {
    var html_id = node.getAttribute("id");
    newStuff[html_id] = fixup(node.innerHTML);
}

var ret = [];
for (var key in newStuff) {
    var oldThing = oldStuff[key];
    var newThing = newStuff[key];
    if (oldThing !== newThing) {
        ret.push(ghDiffHTML(oldThing+"\n", newThing+"\n", {
            outputFormat: 'line-by-line',
            fileName: key
        }));
    }
}

var html = ret.join("\n");

var HTML = `
<head>
  <title>IndigoBook diffs</title>
  <style>
.d2h-wrapper {
  text-align: left;
}

.d2h-file-header {
  padding: 5px 10px;
  border-bottom: 1px solid #d8d8d8;
  background-color: #f7f7f7;
}

.d2h-file-stats {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: auto;
  font-size: 14px;
}

.d2h-lines-added {
  text-align: right;
  border: 1px solid #b4e2b4;
  border-radius: 5px 0 0 5px;
  color: #399839;
  padding: 2px;
  vertical-align: middle;
}

.d2h-lines-deleted {
  text-align: left;
  border: 1px solid #e9aeae;
  border-radius: 0 5px 5px 0;
  color: #c33;
  padding: 2px;
  vertical-align: middle;
  margin-left: 1px;
}

.d2h-file-name-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
}

.d2h-file-name {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
  line-height: 21px;
}

.d2h-file-wrapper {
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-bottom: 1em;
}

.d2h-diff-table {
  width: 100%;
  border-collapse: collapse;
  font-family: "Menlo", "Consolas", monospace;
  font-size: 13px;
}

.d2h-diff-tbody > tr > td {
  height: 20px;
  line-height: 20px;
}

.d2h-files-diff {
  display: block;
  width: 100%;
  height: 100%;
}

.d2h-file-diff {
  overflow-x: scroll;
  overflow-y: hidden;
}

.d2h-file-side-diff {
  display: inline-block;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 50%;
  margin-right: -4px;
  margin-bottom: -8px;
}

.d2h-code-line {
  display: inline-block;
  white-space: nowrap;
  padding: 0 10px;
  margin-left: 80px;
}

.d2h-code-side-line {
  display: inline-block;
  white-space: nowrap;
  padding: 0 10px;
  margin-left: 50px;
}

.d2h-code-line del,
.d2h-code-side-line del {
  display: inline-block;
  margin-top: -1px;
  text-decoration: none;
  background-color: #ffb6ba;
  border-radius: 0.2em;
}

.d2h-code-line ins,
.d2h-code-side-line ins {
  display: inline-block;
  margin-top: -1px;
  text-decoration: none;
  background-color: #97f295;
  border-radius: 0.2em;
  text-align: left;
}

.d2h-code-line-prefix {
  display: inline;
  background: none;
  padding: 0;
  word-wrap: normal;
  white-space: pre;
}

.d2h-code-line-ctn {
  display: inline;
  background: none;
  padding: 0;
  word-wrap: normal;
  white-space: pre;
}

.line-num1 {
  box-sizing: border-box;
  float: left;
  width: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 3px;
}

.line-num2 {
  box-sizing: border-box;
  float: right;
  width: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 3px;
}

.d2h-code-linenumber {
  box-sizing: border-box;
  position: absolute;
  width: 86px;
  padding-left: 2px;
  padding-right: 2px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.3);
  text-align: right;
  border: solid #eeeeee;
  border-width: 0 1px 0 1px;
  cursor: pointer;
}

.d2h-code-side-linenumber {
  box-sizing: border-box;
  position: absolute;
  width: 56px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.3);
  text-align: right;
  border: solid #eeeeee;
  border-width: 0 1px 0 1px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
}

/*
 * Changes Highlight
 */

.d2h-del {
  background-color: #fee8e9;
  border-color: #e9aeae;
}

.d2h-ins {
  background-color: #dfd;
  border-color: #b4e2b4;
}

.d2h-info {
  background-color: #f8fafd;
  color: rgba(0, 0, 0, 0.3);
  border-color: #d5e4f2;
}

.d2h-file-diff .d2h-del.d2h-change {
  background-color: #fdf2d0;
}

.d2h-file-diff .d2h-ins.d2h-change {
  background-color: #ded;
}

/*
 * File Summary List
 */

.d2h-file-list-wrapper {
  margin-bottom: 10px;
}

.d2h-file-list-wrapper a {
  text-decoration: none;
  color: #3572b0;
}

.d2h-file-list-wrapper a:visited {
  color: #3572b0;
}

.d2h-file-list-header {
  text-align: left;
}

.d2h-file-list-title {
  font-weight: bold;
}

.d2h-file-list-line {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: left;
}

.d2h-file-list {
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
}

.d2h-file-list > li {
  border-bottom: #ddd solid 1px;
  padding: 5px 10px;
  margin: 0;
}

.d2h-file-list > li:last-child {
  border-bottom: none;
}

.d2h-file-switch {
  display: none;
  font-size: 10px;
  cursor: pointer;
}

.d2h-icon-wrapper {
  line-height: 31px;
}

.d2h-icon {
  vertical-align: middle;
  margin-right: 10px;
  fill: currentColor;
}

.d2h-deleted {
  color: #c33;
}

.d2h-added {
  color: #399839;
}

.d2h-changed {
  color: #d0b44c;
}

.d2h-moved {
  color: #3572b0;
}

.d2h-tag {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 10px;
  margin-left: 5px;
  padding: 0 2px;
  background-color: #fff;
}

.d2h-deleted-tag {
  border: #c33 1px solid;
}

.d2h-added-tag {
  border: #399839 1px solid;
}

.d2h-changed-tag {
  border: #d0b44c 1px solid;
}

.d2h-moved-tag {
  border: #3572b0 1px solid;
}

/*
 * Selection util.
 */

.selecting-left .d2h-code-line,
.selecting-left .d2h-code-line *,
.selecting-right td.d2h-code-linenumber,
.selecting-right td.d2h-code-linenumber *,
.selecting-left .d2h-code-side-line,
.selecting-left .d2h-code-side-line *,
.selecting-right td.d2h-code-side-linenumber,
.selecting-right td.d2h-code-side-linenumber * {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.selecting-left .d2h-code-line::-moz-selection,
.selecting-left .d2h-code-line *::-moz-selection,
.selecting-right td.d2h-code-linenumber::-moz-selection,
.selecting-left .d2h-code-side-line::-moz-selection,
.selecting-left .d2h-code-side-line *::-moz-selection,
.selecting-right td.d2h-code-side-linenumber::-moz-selection,
.selecting-right td.d2h-code-side-linenumber *::-moz-selection {
  background: transparent;
}

.selecting-left .d2h-code-line::selection,
.selecting-left .d2h-code-line *::selection,
.selecting-right td.d2h-code-linenumber::selection,
.selecting-left .d2h-code-side-line::selection,
.selecting-left .d2h-code-side-line *::selection,
.selecting-right td.d2h-code-side-linenumber::selection,
.selecting-right td.d2h-code-side-linenumber *::selection {
  background: transparent;
}
  </style>
  <style>
.d2h-files-diff {
    display: flex;
    height: initial;
}
.d2h-diff-tbody tr:first-of-type {
    display: none;
}
.d2h-diff-tbody>tr>td {
    height: 22px;
}
.d2h-file-side-diff {
    margin-bottom: 0;
}
li {
  margin-top: 0.5em;
}
</style>
</head>
<body>
<h1>IndigoBook diffs</h1>
<div style="border-radius:1em;border: solid black 2px;padding:1em;width:60%;margin:1em auto;">
  Return to <a href="index.html">IndigoBook+Jurism project page</a>
</div>
<p>
This page shows changes made to the text of citation examples in the IndigoBook
in connection with the IndigoBook+Jurism integration. The revised forms in
green reflect the output Jurism citation processor against appropriate metadata.
A few notes on the content:
</p>
<ul>
<li>Many of the changes are small adjustments to typography, such as
changing straight-quotes to curly-quotes, or setting en-dash rather
than hyphen as the delimiter for ranged numbers.</li>
<li>Some touch on editorial choices. Some of these are arbitrary, such as the use of “No.”
versus no-label against docket numbers. Others reflect inconsistency in formatting
embodied in the original examples, where there is no explicit governing rule. An example
of this latter case is the use or non-use of “at“ to set off a pinpoint page number.
In both cases, editorial preferences should govern. If changes need to be made to
any of these citations, just let me know.
</li>
<li>Examples of multiple
citations (parallel citations and procedural histories) are due to
changes in the scope of the <span
style="font-family:ariel">&lt;span&gt;&lt;/span&gt;</span> citation
wrapper to include additional portions of the citation. In these cases
there may be no actual difference in the cites themselves.</li>
<li>The examples that include placeholders bracketed in “<span
style="font-family:ariel">&lt;</span>” and “<span
style="font-family:ariel">&gt;</span>” characters are a bit
special. For these, the bracketed elements are converted to actual
values for testing purposes.  To produce meaningful test data, cryptic
placeholders such as <span style="font-family:ariel">&lt;xx&gt;</span>
have been replaced with placeholders that make their semantics more
clear. The changes in that regard were done on the fly while building
the citation stylesheet, and have not yet been normalized across
IndigoBook. Editors should feel free to make changes to these: just
send a note that changes have been made (no need for a detailed list)
so that I can make any necessary adjustments at this end.</li>
</ul>
<hr/>
${html}
</body>
`

fs.writeFileSync(path.join(__dirname, "static", "indigobook-diffs.html"), HTML);
