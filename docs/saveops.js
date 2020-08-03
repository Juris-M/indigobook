(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saveops"],{

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./src/composer.js":
/*!*************************!*\
  !*** ./src/composer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);




var composer = function composer(items, params, newCite, comment) {
  if (!items) {
    items = [];
    params = {};
  }

  var keysArray = JSON.stringify(items.map(function (o) {
    return o.id;
  }), null, 2);
  var paramsArray = JSON.stringify([params], null, 2);
  var itemsArray = JSON.stringify(items, null, 2);
  return "\n>>===== MODE =====>>\ncitation\n<<===== MODE =====<<\n\n>>===== OPTIONS =====>>\n{\n    \"wrap_url_and_doi\": true\n}\n<<===== OPTIONS =====<<\n\n>>===== KEYS =====>>\n".concat(keysArray, "\n<<===== KEYS =====<<\n\n>>===== DESCRIPTION =====>>\n").concat(comment, "\n<<===== DESCRIPTION =====<<\n\n>>===== RESULT =====>>\n").concat(newCite, "\n<<===== RESULT =====<<\n\n>>===== CITATION-ITEMS =====>>\n").concat(paramsArray, "\n<<===== CITATION-ITEMS =====<<\n\n>>===== INPUT =====>>\n").concat(itemsArray, "\n<<===== INPUT =====<<\n").trim();
};

/* harmony default export */ __webpack_exports__["default"] = (composer);

/***/ }),

/***/ "./src/err.js":
/*!********************!*\
  !*** ./src/err.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (e, extra) {
  if (extra) {
    console.log("Axios fail: ".concat(e.message, " (").concat(extra, ")"));
  } else {
    console.log("Axios fail: ".concat(e.message));
  }
});

/***/ }),

/***/ "./src/saveops.js":
/*!************************!*\
  !*** ./src/saveops.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _saver_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./saver.js */ "./src/saver.js");
/* harmony import */ var _composer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./composer.js */ "./src/composer.js");
/* harmony import */ var _err__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./err */ "./src/err.js");















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/*
 Maybe this should just rebuild the DOM element from scratch.
*/

var fixWeirdSpans = function fixWeirdSpans(node, parent) {
  console.log("in fixWeirdSpans OK");

  if (node.nodeType === 1) {
    if (node.tagName === "SPAN") {
      console.log("node tagName is span OK");
      var hasSmallCaps = false;
      var attr = node.getAttribute("style");

      if (attr) {
        hasSmallCaps = attr.indexOf("small-caps") > -1;
      }

      if (hasSmallCaps) {
        node.setAttribute("style", "font-variant: small-caps:");
      } else {
        var newNode = null;
        var cloneOfNode = node.cloneNode(true);
        var childNodes = cloneOfNode.childNodes;
        var i = 0;
        console.log("HOW IN HELL CAN THIS BE? ".concat(cloneOfNode.childNodes.length));

        for (var i = 0, ilen = cloneOfNode.childNodes.length; i < ilen; i++) {
          console.log("  ".concat(cloneOfNode.childNodes[i]));
        }

        while (i < childNodes.length) {
          var retNode = parent.insertBefore(cloneOfNode.childNodes[i], node);

          if (!newNode && retNode.nodeType === 1) {
            newNode = retNode;
          }

          childNodes = node.childNodes;
          i++;
        }

        parent.removeChild(node);
        node = newNode;
      }
    }

    if (node) {
      // Run this as a while loop to allow expansion
      var childNodes = node.childNodes;
      var i = 0;

      while (childNodes && i < childNodes.length) {
        childNodes = fixWeirdSpans(childNodes[i], node);
        i++;
      }
    }

    return parent.childNodes;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(citationInfo, startSave, endSave) {
    var html_id, elem, citation, cite_desc, editor, styleNodes, i, ilen, child, newCite, citation_items, citationItems, items, _iterator, _step, item, m, offset, newTest, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return startSave();

          case 2:
            html_id = window.localStorage.getItem('html_id');
            elem = document.getElementById("save-button"); // Okay. Here is where our saved values come into play?
            // NB: citation is either the document example or the user's pull request proposal

            citation = window.localStorage.getItem('citation'); // NB: cite_desc will exist only if user has an active pull request

            cite_desc = window.localStorage.getItem('cite_desc');
            editor = document.getElementById("editor");
            styleNodes = editor.content.getElementsByTagName("style");

            for (i = styleNodes.length - 1; i > -1; i--) {
              editor.content.removeChild(styleNodes[i]);
            }

            console.log("Before fixWeirdSpans loop");

            for (i = 0, ilen = editor.content.childNodes.length; i < ilen; i++) {
              child = editor.content.childNodes[i];
              console.log("top-level run of fixWeirdSpans for index ".concat(i));
              fixWeirdSpans(child, editor.content);
            } // Need also to strip out extraneous inline garbage added by Word.
            // (basically everything but small-caps)


            newCite = editor.content.innerHTML.replace(/\<u\>/g, "<span class=\"small-caps\">").replace(/<\/u>/g, "</span>").replace(/<\/?div[^>]*>/g, "").replace(/<\/?p[^>]*>/g, "").replace(/\<br\/*\>/g, "").trim();

            if (!cite_desc) {
              cite_desc = document.getElementById("modal-comment").value;
            }

            citation_items = [];

            if (!(newCite !== citation)) {
              _context.next = 29;
              break;
            }

            elem.classList.add("save-ok");
            citationItems = JSON.parse(window.localStorage.getItem("cites_info"));
            items = window.localStorage.getItem("cites_metadata");

            if (!!items) {
              items = JSON.parse(items);
              _iterator = _createForOfIteratorHelper(items);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  item = _step.value;

                  if (item.jurisdiction) {
                    m = item.jurisdiction.match(/^([0-9]{3})[a-z]/);

                    if (m) {
                      offset = parseInt(m[1], 10);
                      item.jurisdiction = item.jurisdiction.slice(3, 3 + offset);
                    }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            newTest = Object(_composer_js__WEBPACK_IMPORTED_MODULE_15__["default"])(items, citationItems, newCite, cite_desc);
            _context.next = 22;
            return Object(_saver_js__WEBPACK_IMPORTED_MODULE_14__["saver"])(html_id, newTest, cite_desc);

          case 22:
            result = _context.sent;
            window.localStorage.setItem('cite_url', result.html_url);
            _context.next = 26;
            return endSave();

          case 26:
            elem.classList.remove("save-ok");
            _context.next = 35;
            break;

          case 29:
            elem.classList.add("save-not-ok");
            elem.classList.add("black-wheel");
            _context.next = 33;
            return endSave();

          case 33:
            elem.classList.remove("save-not-ok");
            elem.classList.remove("black-wheel");

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vyci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZW9wcy5qcyJdLCJuYW1lcyI6WyJjb21wb3NlciIsIml0ZW1zIiwicGFyYW1zIiwibmV3Q2l0ZSIsImNvbW1lbnQiLCJrZXlzQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwibyIsImlkIiwicGFyYW1zQXJyYXkiLCJpdGVtc0FycmF5IiwidHJpbSIsImUiLCJleHRyYSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZml4V2VpcmRTcGFucyIsIm5vZGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsInRhZ05hbWUiLCJoYXNTbWFsbENhcHMiLCJhdHRyIiwiZ2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInNldEF0dHJpYnV0ZSIsIm5ld05vZGUiLCJjbG9uZU9mTm9kZSIsImNsb25lTm9kZSIsImNoaWxkTm9kZXMiLCJpIiwibGVuZ3RoIiwiaWxlbiIsInJldE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsImNpdGF0aW9uSW5mbyIsInN0YXJ0U2F2ZSIsImVuZFNhdmUiLCJodG1sX2lkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2l0YXRpb24iLCJjaXRlX2Rlc2MiLCJlZGl0b3IiLCJzdHlsZU5vZGVzIiwiY29udGVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2hpbGQiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwidmFsdWUiLCJjaXRhdGlvbl9pdGVtcyIsImNsYXNzTGlzdCIsImFkZCIsImNpdGF0aW9uSXRlbXMiLCJwYXJzZSIsIml0ZW0iLCJqdXJpc2RpY3Rpb24iLCJtIiwibWF0Y2giLCJvZmZzZXQiLCJwYXJzZUludCIsInNsaWNlIiwibmV3VGVzdCIsInNhdmVyIiwicmVzdWx0Iiwic2V0SXRlbSIsImh0bWxfdXJsIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDWEEsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixnREFBZ0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVksbUJBQU8sQ0FBQyxpRkFBMEI7QUFDOUMsNkJBQTZCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsR0FBRyx3RUFBd0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFS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RUFBdUIzRCxPQUF2QixFQUFnQytDLFNBQWhDLENBdkRmO0FBQUE7QUFBQSxtQkF3RFlzQix3REFBSyxDQUFDOUIsT0FBRCxFQUFVNkIsT0FBVixFQUFtQnJCLFNBQW5CLENBeERqQjs7QUFBQTtBQXdESHVCLGtCQXhERztBQXlEUDlCLGtCQUFNLENBQUNDLFlBQVAsQ0FBb0I4QixPQUFwQixDQUE0QixVQUE1QixFQUF3Q0QsTUFBTSxDQUFDRSxRQUEvQztBQXpETztBQUFBLG1CQTBERGxDLE9BQU8sRUExRE47O0FBQUE7QUEyRFBLLGdCQUFJLENBQUNjLFNBQUwsQ0FBZWdCLE1BQWYsQ0FBc0IsU0FBdEI7QUEzRE87QUFBQTs7QUFBQTtBQTZEUDlCLGdCQUFJLENBQUNjLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjtBQUNBZixnQkFBSSxDQUFDYyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsYUFBbkI7QUE5RE87QUFBQSxtQkErRERwQixPQUFPLEVBL0ROOztBQUFBO0FBZ0VQSyxnQkFBSSxDQUFDYyxTQUFMLENBQWVnQixNQUFmLENBQXNCLGFBQXRCO0FBQ0E5QixnQkFBSSxDQUFDYyxTQUFMLENBQWVnQixNQUFmLENBQXNCLGFBQXRCOztBQWpFTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLE0iLCJmaWxlIjoic2F2ZW9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gIH0pO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iLCJjb25zdCBjb21wb3NlciA9IChpdGVtcywgcGFyYW1zLCBuZXdDaXRlLCBjb21tZW50KSA9PiB7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICBpdGVtcyA9IFtdO1xuICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICB9XG4gICAgdmFyIGtleXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zLm1hcCgobykgPT4gby5pZCksIG51bGwsIDIpO1xuICAgIHZhciBwYXJhbXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KFtwYXJhbXNdLCBudWxsLCAyKTtcbiAgICB2YXIgaXRlbXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zLCBudWxsLCAyKTtcbiAgICByZXR1cm4gYFxuPj49PT09PSBNT0RFID09PT09Pj5cbmNpdGF0aW9uXG48PD09PT09IE1PREUgPT09PT08PFxuXG4+Pj09PT09IE9QVElPTlMgPT09PT0+Plxue1xuICAgIFwid3JhcF91cmxfYW5kX2RvaVwiOiB0cnVlXG59XG48PD09PT09IE9QVElPTlMgPT09PT08PFxuXG4+Pj09PT09IEtFWVMgPT09PT0+PlxuJHtrZXlzQXJyYXl9XG48PD09PT09IEtFWVMgPT09PT08PFxuXG4+Pj09PT09IERFU0NSSVBUSU9OID09PT09Pj5cbiR7Y29tbWVudH1cbjw8PT09PT0gREVTQ1JJUFRJT04gPT09PT08PFxuXG4+Pj09PT09IFJFU1VMVCA9PT09PT4+XG4ke25ld0NpdGV9XG48PD09PT09IFJFU1VMVCA9PT09PTw8XG5cbj4+PT09PT0gQ0lUQVRJT04tSVRFTVMgPT09PT0+PlxuJHtwYXJhbXNBcnJheX1cbjw8PT09PT0gQ0lUQVRJT04tSVRFTVMgPT09PT08PFxuXG4+Pj09PT09IElOUFVUID09PT09Pj5cbiR7aXRlbXNBcnJheX1cbjw8PT09PT0gSU5QVVQgPT09PT08PFxuYC50cmltKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2VyO1xuIiwiZXhwb3J0IGRlZmF1bHQgKGUsIGV4dHJhKSA9PiB7XG4gICAgaWYgKGV4dHJhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX0gKCR7ZXh0cmF9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzYXZlciB9IGZyb20gXCIuL3NhdmVyLmpzXCI7XG5pbXBvcnQgY29tcG9zZXIgZnJvbSBcIi4vY29tcG9zZXIuanNcIjtcbmltcG9ydCBoYW5kbGVFcnIgZnJvbSBcIi4vZXJyXCI7XG5cbi8qXG4gTWF5YmUgdGhpcyBzaG91bGQganVzdCByZWJ1aWxkIHRoZSBET00gZWxlbWVudCBmcm9tIHNjcmF0Y2guXG4qL1xuY29uc3QgZml4V2VpcmRTcGFucyA9IChub2RlLCBwYXJlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgaW4gZml4V2VpcmRTcGFucyBPS2ApO1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09IFwiU1BBTlwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgbm9kZSB0YWdOYW1lIGlzIHNwYW4gT0tgKTtcbiAgICAgICAgICAgIHZhciBoYXNTbWFsbENhcHMgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBhdHRyID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgaGFzU21hbGxDYXBzID0gYXR0ci5pbmRleE9mKFwic21hbGwtY2Fwc1wiKSA+IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc1NtYWxsQ2Fwcykge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM6XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIGNsb25lT2ZOb2RlID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSBjbG9uZU9mTm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIHZhciBpPTA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEhPVyBJTiBIRUxMIENBTiBUSElTIEJFPyAke2Nsb25lT2ZOb2RlLmNoaWxkTm9kZXMubGVuZ3RofWApO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MCxpbGVuPWNsb25lT2ZOb2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpPGlsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICAke2Nsb25lT2ZOb2RlLmNoaWxkTm9kZXNbaV19YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldE5vZGUgPSBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lT2ZOb2RlLmNoaWxkTm9kZXNbaV0sIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld05vZGUgJiYgcmV0Tm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Tm9kZSA9IHJldE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5ld05vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIC8vIFJ1biB0aGlzIGFzIGEgd2hpbGUgbG9vcCB0byBhbGxvdyBleHBhbnNpb25cbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgdmFyIGk9MDtcbiAgICAgICAgICAgIHdoaWxlIChjaGlsZE5vZGVzICYmIGkgPCBjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBmaXhXZWlyZFNwYW5zKGNoaWxkTm9kZXNbaV0sIG5vZGUpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyZW50LmNoaWxkTm9kZXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY2l0YXRpb25JbmZvLCBzdGFydFNhdmUsIGVuZFNhdmUpID0+IHtcbiAgICBhd2FpdCBzdGFydFNhdmUoKTtcblxuICAgIHZhciBodG1sX2lkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdodG1sX2lkJyk7XG4gICAgXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmUtYnV0dG9uXCIpO1xuICAgIFxuICAgIC8vIE9rYXkuIEhlcmUgaXMgd2hlcmUgb3VyIHNhdmVkIHZhbHVlcyBjb21lIGludG8gcGxheT9cblxuICAgIC8vIE5COiBjaXRhdGlvbiBpcyBlaXRoZXIgdGhlIGRvY3VtZW50IGV4YW1wbGUgb3IgdGhlIHVzZXIncyBwdWxsIHJlcXVlc3QgcHJvcG9zYWxcbiAgICB2YXIgY2l0YXRpb24gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGF0aW9uJyk7XG4gICAgLy8gTkI6IGNpdGVfZGVzYyB3aWxsIGV4aXN0IG9ubHkgaWYgdXNlciBoYXMgYW4gYWN0aXZlIHB1bGwgcmVxdWVzdFxuICAgIHZhciBjaXRlX2Rlc2MgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGVfZGVzYycpO1xuICAgIFxuICAgIHZhciBlZGl0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRvclwiKTtcblxuICAgIHZhciBzdHlsZU5vZGVzID0gZWRpdG9yLmNvbnRlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiAgICBmb3IgKHZhciBpPXN0eWxlTm9kZXMubGVuZ3RoLTE7IGk+LTE7IGktLSkge1xuICAgICAgICBlZGl0b3IuY29udGVudC5yZW1vdmVDaGlsZChzdHlsZU5vZGVzW2ldKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYEJlZm9yZSBmaXhXZWlyZFNwYW5zIGxvb3BgKTtcbiAgICBmb3IgKHZhciBpPTAsaWxlbj1lZGl0b3IuY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaTxpbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gZWRpdG9yLmNvbnRlbnQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgY29uc29sZS5sb2coYHRvcC1sZXZlbCBydW4gb2YgZml4V2VpcmRTcGFucyBmb3IgaW5kZXggJHtpfWApO1xuICAgICAgICBmaXhXZWlyZFNwYW5zKGNoaWxkLCBlZGl0b3IuY29udGVudCk7XG4gICAgfVxuICAgIC8vIE5lZWQgYWxzbyB0byBzdHJpcCBvdXQgZXh0cmFuZW91cyBpbmxpbmUgZ2FyYmFnZSBhZGRlZCBieSBXb3JkLlxuICAgIC8vIChiYXNpY2FsbHkgZXZlcnl0aGluZyBidXQgc21hbGwtY2FwcylcbiAgICB2YXIgbmV3Q2l0ZSA9IGVkaXRvci5jb250ZW50LmlubmVySFRNTFxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcPHVcXD4vZywgXCI8c3BhbiBjbGFzcz1cXFwic21hbGwtY2Fwc1xcXCI+XCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvPFxcL3U+L2csIFwiPC9zcGFuPlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzxcXC8/ZGl2W14+XSo+L2csIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvPFxcLz9wW14+XSo+L2csIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFw8YnJcXC8qXFw+L2csIFwiXCIpXG4gICAgICAgICAgICAudHJpbSgpO1xuICAgIGlmICghY2l0ZV9kZXNjKSB7XG4gICAgICAgIGNpdGVfZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29tbWVudFwiKS52YWx1ZTtcbiAgICB9XG4gICAgdmFyIGNpdGF0aW9uX2l0ZW1zID0gW107XG4gICAgaWYgKG5ld0NpdGUgIT09IGNpdGF0aW9uKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcInNhdmUtb2tcIik7XG4gICAgICAgIHZhciBjaXRhdGlvbkl0ZW1zID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRlc19pbmZvXCIpKTtcbiAgICAgICAgdmFyIGl0ZW1zID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0ZXNfbWV0YWRhdGFcIik7XG4gICAgICAgIGlmICghIWl0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtcyA9IEpTT04ucGFyc2UoaXRlbXMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmp1cmlzZGljdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGl0ZW0uanVyaXNkaWN0aW9uLm1hdGNoKC9eKFswLTldezN9KVthLXpdLylcbiAgICAgICAgICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChtWzFdLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmp1cmlzZGljdGlvbiA9IGl0ZW0uanVyaXNkaWN0aW9uLnNsaWNlKDMsICgzK29mZnNldCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdUZXN0ID0gY29tcG9zZXIoaXRlbXMsIGNpdGF0aW9uSXRlbXMsIG5ld0NpdGUsIGNpdGVfZGVzYyk7XG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBzYXZlcihodG1sX2lkLCBuZXdUZXN0LCBjaXRlX2Rlc2MpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGVfdXJsJywgcmVzdWx0Lmh0bWxfdXJsKTtcbiAgICAgICAgYXdhaXQgZW5kU2F2ZSgpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzYXZlLW9rXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcInNhdmUtbm90LW9rXCIpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJibGFjay13aGVlbFwiKTtcbiAgICAgICAgYXdhaXQgZW5kU2F2ZSgpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzYXZlLW5vdC1va1wiKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxhY2std2hlZWxcIik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==