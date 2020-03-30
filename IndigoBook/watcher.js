const fs = require('fs');
const chokidar = require('chokidar');

const updateFile = () => {
	if (fs.existsSync('./frag.txt')) {
		var index = fs.readFileSync('index.html').toString();
		var frag = fs.readFileSync('frag.txt').toString().trim();
        if (!frag) {
            console.log("Warning: frag.txt was empty, aborting save");
            return;
        }
		// The START comment is weirdly included, so clip it off
		// if necessary.
		var fragLst = frag.split("\n");
		if (fragLst[0].indexOf("START") > -1) {
			fragLst = fragLst.slice(1);
			frag = fragLst.join("\n");
		}
        if (!frag.trim()) {
            console.log("Warning: frag.txt was empty after stripping, aborting save");
            return;
        }
		var indexLst = index.split('\n');
		var topLst = [];
		var tailLst = [];
		var state = 'top';
		for (var line of indexLst) {
			if (line.indexOf('END') > -1) {
				state = 'tail';
			}
			if (state === 'top') {
				topLst.push(line);
			} else if (state === 'tail') {
				tailLst.push(line);
			}
			if (line.indexOf('START') > -1) {
				state = 'body';
			}
		}
		topLst.push('<div id="editor"><div id="edited">');
		tailLst = ['</div></div>'].concat(tailLst);
		var top = topLst.join('\n');
		var tail = tailLst.join('\n');
		var ret = [top, frag, tail].join('\n');
		fs.writeFileSync('index.html', ret);
		// fs.unlinkSync('./frag.txt');
	}
}

// One-liner for current directory
chokidar.watch('./frag.txt').on('all', (event, path) => {
	console.log('Updating');
	updateFile();
});
