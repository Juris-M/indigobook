const fs = require("fs");

var txt = fs.readFileSync("index.html").toString();

var count = 1;

var newtxt = txt.replace(/(<sub>)/g, (o) => {
    var slug = "" + count;
    count++;
    while (slug.length < 3) {
        slug = "0" + slug;
    }
    var ret = `<span id="c${slug}" class="cite" data-info="">`
    return ret;
})

fs.writeFileSync("index-new.html", newtxt);
