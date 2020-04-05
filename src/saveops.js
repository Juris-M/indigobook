import { saver } from "./saver.js";
import composer from "./composer.js";
import axios from "axios";
import { urlParts } from "./utils.js";
import handleErr from "./err";

var urlStub = urlParts().base;

export default async (startSave, endSave) => {
    await startSave();
    var cite_id = window.localStorage.getItem('cite_id');
    var elem = document.getElementById("save-button");
    var realID = cite_id.slice(1);
    var cite_text = window.localStorage.getItem('cite_text');
    var editor = document.getElementById("editor");
    var newCite = editor.content.innerHTML
            .replace(/\<u\>/g, "<span class=\"small-caps\">")
            .replace(/\<\/u\>/g, "</span>");
    var comment = document.getElementById("modal-comment").value;
    if (newCite !== cite_text) {
        elem.classList.add("save-ok");
        var result = await axios({
            method: "get",
            url: `${urlStub}/itemdata/${realID}.json`
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
        var params = {
            id: `${realID}`
        };
        var newTest = composer(items, params, newCite, comment);
        var result = await saver(cite_id, newTest, comment);
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
