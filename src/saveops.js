import { saver } from "./saver.js";
import composer from "./composer.js";
import handleErr from "./err";

export default async (citationInfo, startSave, endSave) => {
    await startSave();

    var html_id = window.localStorage.getItem('html_id');
    
    var elem = document.getElementById("save-button");
    
    // Okay. Here is where our saved values come into play?

    // NB: citation is either the document example or the user's pull request proposal
    var citation = window.localStorage.getItem('citation');
    // NB: cite_desc will exist only if user has an active pull request
    var cite_desc = window.localStorage.getItem('cite_desc');
    
    var editor = document.getElementById("editor");
    var newCite = editor.content.innerHTML
            .replace(/\<u\>/g, "<span class=\"small-caps\">")
            .replace(/\<\/u\>/g, "</span>")
            .replace(/^\<div\>/, "")
            .replace(/\<\/div\>$/, "")
            .replace(/\<br\/*\>/, "");
    if (!cite_desc) {
        cite_desc = document.getElementById("modal-comment").value;
    }
    var citation_items = [];
    if (newCite !== citation) {
        elem.classList.add("save-ok");
        var citationItems = JSON.parse(window.localStorage.getItem("cites_info"));
        var items = window.localStorage.getItem("cites_metadata");
        if (!!items) {
            items = JSON.parse(items);
            for (var item of items) {
                if (item.jurisdiction) {
                    var m = item.jurisdiction.match(/^([0-9]{3})[a-z]/)
                    if (m) {
                        var offset = parseInt(m[1], 10);
                        item.jurisdiction = item.jurisdiction.slice(3, (3+offset));
                    }
                }
            }
        }
        var newTest = composer(items, citationItems, newCite, cite_desc);
        var result = await saver(html_id, newTest, cite_desc);
        window.localStorage.setItem('cite_url', result.html_url);
        await endSave();
        elem.classList.remove("save-ok");
    } else {
        elem.classList.add("save-not-ok");
        elem.classList.add("black-wheel");
        await endSave();
        elem.classList.remove("save-not-ok");
        elem.classList.remove("black-wheel");
    }
}
