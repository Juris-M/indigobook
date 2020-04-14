import { saver } from "./saver.js";
import composer from "./composer.js";
import axios from "axios";
import { urlParts } from "./utils.js";
import handleErr from "./err";

var urlStub = urlParts().base;

export default async (params, startSave, endSave) => {
    await startSave();
    var test_id = window.localStorage.getItem('test_id');
    var item_key = test_id.split("-")[1];
    var elem = document.getElementById("save-button");
    
    // Okay. Here is where our saved values come into play?

    // NB: citation is either the document example or the user's pull request proposal
    var citation = window.localStorage.getItem('citation');
    // NB: cite_desc will exist only if user has an active pull request
    var cite_desc = window.localStorage.getItem('cite_desc');
    
    var editor = document.getElementById("editor");
    var newCite = editor.content.innerHTML
            .replace(/\<u\>/g, "<span class=\"small-caps\">")
            .replace(/\<\/u\>/g, "</span>");
    if (!cite_desc) {
        cite_desc = document.getElementById("modal-comment").value;
    }
    if (newCite !== citation) {
        elem.classList.add("save-ok");
        var result = await axios({
            method: "get",
            url: `${urlStub}/itemdata/${item_key}.json`
        }).catch((e) => handleErr(e));
        var item = result.data;
        if (item.jurisdiction) {
            var m = item.jurisdiction.match(/^([0-9]{3})/);
            if (m) {
                var offset = parseInt(m[1]);
                item.jurisdiction = item.jurisdiction.slice(3, 3 + offset);
            }
        }
        var items = [result.data];
        var newTest = composer(items, params, newCite, cite_desc);
        var result = await saver(test_id, newTest, cite_desc);
        await endSave(result.html_url);
        elem.classList.remove("save-ok");
    } else {
        elem.classList.add("save-not-ok");
        elem.classList.add("black-wheel");
        await endSave();
        elem.classList.remove("save-not-ok");
        elem.classList.remove("black-wheel");
    }
}
