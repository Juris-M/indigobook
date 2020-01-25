===========
Indigo Book
===========

This repo has code for layering interactive sampling popups over the
citation examples contained in the Indigo Book, a citation manual for
US law. The repo contains only the code; the text of the manual is
available separately (link below).

----
Demo
----

Here's what it looks like (animated GIF):

.. image:: https://juris-m.github.io/indigobook/indigo-citeproc.gif

----
ToDo
----

This code provides a panel of citation samples in four styles under
an icon, which can potentially be attached to every citation in
Indigo Book. A further step would be to extend the sample panel to
serve as a bug-report form for style errata and revision proposals.
The form would offer a GitHub login button (using a gatekeeper
instance), and submit issues tagged to the Indigo Book rule that they
affect, with a diff showing the precise edit suggested by the
submitter and their comment text.

I will eventually get around to setting this up, but if some
enterprising soul would like to tackle it, please feel free to fork!

-------------
Prerequisites
-------------

``node.js``
    This is not a requirement, strictly speaking, but the layer makes
    use of ``XMLHttpRequest()``, so you must view the document through
    a web browser. A simple server written in ``node.js`` is included
    in the sources.

------------
Installation
------------

To run the layer, set up as follows:

1. Fetch a full working copy of the repo and its submodules::

       git clone --recursive https://github.com/Juris-M/indigobook.git

2. Enter the top-level directory of the repo::

      cd indigobook

2. Download the _`Indigo Book` itself, and save it into the repo as ``index.html``::

      curl -o index.html https://law.resource.org/pub/us/code/blue/IndigoBook.html

3. Apply the patch in the ``patches`` subdirectory to the text::

      patch index.html < ./patches/indigobook.patch

4. Run the tiny webserver::

      node ./node-server.js
       
5. Point a web browser at the document::

      http://localhost:16005/index.html
       
6. Search for "Lessig v" to find the citations decorated by the demo.
   Click on the chevron next to a cite and enjoy the magic.

That's it!

| Frank Bennett
| Nagoya
| 2016-04-09

.. _`Indigo Book`: https://law.resource.org/pub/us/code/blue/IndigoBook.html
