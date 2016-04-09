===========
Indigo Book
===========

This is repo has code for layering interactive sampling popups over
the citation examples contained in the Indigo Book, a citation
manual for US law. The repo contains only the code; the text of
manual is available separately (see link below).

-------------
Prerequisites
-------------

``node.js``
    This is not a requirement, strictly speaking, but the layer makes
    use of ``XMLHttpRequest()``, so you must view the document through
    a web browser. A simple server written in ``node.js`` is included
    in the sources.

To run the layer, set up as follows:

1. Fetch a full working copy of the repo and its submodules:

       git clone --recursive https://github.com/Juris-M/indigobook.git

2. Download the _`Indigo Book` and save into the repo as ``index.html``:

       curl -o index.html https://law.resource.org/pub/us/code/blue/IndigoBook.html

3. Apply the patch in the ``patches`` subdirectory to the text:

       patch index.html -p1 < ./patches/indigobook.patch

4. Run the tiny webserver:

       node ./node-server.js
       
5. Point a web browser at the document:

       http://localhost:16005/index.html
       
6. Search for "Lessig v" to find the citations decorated by the demo.
   Click on the chevron next to a cite and enjoy the magic.

.. _`Indigo Book`: https://law.resource.org/pub/us/code/blue/IndigoBook.html
