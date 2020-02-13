# Makeshift WYSIWYG DOM editor

This is used to mark citations in the Indigo Book text.

## Setup

Download the Aloha editor ver 1.4.58 and unpack in this directory:

> curl -o Aloha-1.4.58.zip https://github.com/alohaeditor/Aloha-Editor/archive/1.4.58.zip
> unzip Aloha-1.4.58.zip

Install the node kit used to handle saves (chokidar):

> npm install

Run a local HTTP server:

> http-server

In a separate terminal, spin up the watcher that completes saves (important!):

> node ./watcher.js

Now you can view the document. A "Save" button will appear in the upper-right
corner of the viewport. Clicking on the button will add a "Ready" link below
the button. Click the link and accept the save of a file "frag.txt."

The save will write the editable body of Indigo Book to the frag.txt file,
and the watcher will insert the saved block into the disk copy of index.html.
After the save, it is safe to refresh the page: the markup will persist.

Note that the watcher must be running for this to work. If the watcher
if not up, everything will seem to work, but refreshing the page will
lose changes.

Frank Bennett
2020.02.13
