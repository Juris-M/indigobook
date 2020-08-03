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

        for (var i = 0, ilen = cloneOfNode.childNodes.length; i < ilen; i++) {
          if (cloneOfNode.childNodes[i]) {
            var retNode = parent.insertBefore(cloneOfNode.childNodes[i], node);

            if (!newNode && retNode.nodeType === 1) {
              newNode = retNode;
            }
          }
        }

        parent.removeChild(node);
        node = newNode;
      }
    }

    if (node) {
      for (var i = 0, ilen = node.childNodes.length; i < ilen; i++) {
        fixWeirdSpans(node.childNodes[i], node);
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vyci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZW9wcy5qcyJdLCJuYW1lcyI6WyJjb21wb3NlciIsIml0ZW1zIiwicGFyYW1zIiwibmV3Q2l0ZSIsImNvbW1lbnQiLCJrZXlzQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwibyIsImlkIiwicGFyYW1zQXJyYXkiLCJpdGVtc0FycmF5IiwidHJpbSIsImUiLCJleHRyYSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZml4V2VpcmRTcGFucyIsIm5vZGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsInRhZ05hbWUiLCJoYXNTbWFsbENhcHMiLCJhdHRyIiwiZ2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInNldEF0dHJpYnV0ZSIsIm5ld05vZGUiLCJjbG9uZU9mTm9kZSIsImNsb25lTm9kZSIsImkiLCJpbGVuIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInJldE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsImNpdGF0aW9uSW5mbyIsInN0YXJ0U2F2ZSIsImVuZFNhdmUiLCJodG1sX2lkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2l0YXRpb24iLCJjaXRlX2Rlc2MiLCJlZGl0b3IiLCJzdHlsZU5vZGVzIiwiY29udGVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2hpbGQiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwidmFsdWUiLCJjaXRhdGlvbl9pdGVtcyIsImNsYXNzTGlzdCIsImFkZCIsImNpdGF0aW9uSXRlbXMiLCJwYXJzZSIsIml0ZW0iLCJqdXJpc2RpY3Rpb24iLCJtIiwibWF0Y2giLCJvZmZzZXQiLCJwYXJzZUludCIsInNsaWNlIiwibmV3VGVzdCIsInNhdmVyIiwicmVzdWx0Iiwic2V0SXRlbSIsImh0bWxfdXJsIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDWEEsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixnREFBZ0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVksbUJBQU8sQ0FBQyxpRkFBMEI7QUFDOUMsNkJBQTZCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsR0FBRyx3RUFBd0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFS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LENBQXNCLFNBQXRCO0FBM0RPO0FBQUE7O0FBQUE7QUE2RFA5QixnQkFBSSxDQUFDYyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsYUFBbkI7QUFDQWYsZ0JBQUksQ0FBQ2MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CO0FBOURPO0FBQUEsbUJBK0REcEIsT0FBTyxFQS9ETjs7QUFBQTtBQWdFUEssZ0JBQUksQ0FBQ2MsU0FBTCxDQUFlZ0IsTUFBZixDQUFzQixhQUF0QjtBQUNBOUIsZ0JBQUksQ0FBQ2MsU0FBTCxDQUFlZ0IsTUFBZixDQUFzQixhQUF0Qjs7QUFqRU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNIiwiZmlsZSI6InNhdmVvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPSBub24gfHwgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FO1xuICB9KTtcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gIH1cbn0pO1xuIiwiY29uc3QgY29tcG9zZXIgPSAoaXRlbXMsIHBhcmFtcywgbmV3Q2l0ZSwgY29tbWVudCkgPT4ge1xuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgaXRlbXMgPSBbXTtcbiAgICAgICAgcGFyYW1zID0ge307XG4gICAgfVxuICAgIHZhciBrZXlzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShpdGVtcy5tYXAoKG8pID0+IG8uaWQpLCBudWxsLCAyKTtcbiAgICB2YXIgcGFyYW1zQXJyYXkgPSBKU09OLnN0cmluZ2lmeShbcGFyYW1zXSwgbnVsbCwgMik7XG4gICAgdmFyIGl0ZW1zQXJyYXkgPSBKU09OLnN0cmluZ2lmeShpdGVtcywgbnVsbCwgMik7XG4gICAgcmV0dXJuIGBcbj4+PT09PT0gTU9ERSA9PT09PT4+XG5jaXRhdGlvblxuPDw9PT09PSBNT0RFID09PT09PDxcblxuPj49PT09PSBPUFRJT05TID09PT09Pj5cbntcbiAgICBcIndyYXBfdXJsX2FuZF9kb2lcIjogdHJ1ZVxufVxuPDw9PT09PSBPUFRJT05TID09PT09PDxcblxuPj49PT09PSBLRVlTID09PT09Pj5cbiR7a2V5c0FycmF5fVxuPDw9PT09PSBLRVlTID09PT09PDxcblxuPj49PT09PSBERVNDUklQVElPTiA9PT09PT4+XG4ke2NvbW1lbnR9XG48PD09PT09IERFU0NSSVBUSU9OID09PT09PDxcblxuPj49PT09PSBSRVNVTFQgPT09PT0+PlxuJHtuZXdDaXRlfVxuPDw9PT09PSBSRVNVTFQgPT09PT08PFxuXG4+Pj09PT09IENJVEFUSU9OLUlURU1TID09PT09Pj5cbiR7cGFyYW1zQXJyYXl9XG48PD09PT09IENJVEFUSU9OLUlURU1TID09PT09PDxcblxuPj49PT09PSBJTlBVVCA9PT09PT4+XG4ke2l0ZW1zQXJyYXl9XG48PD09PT09IElOUFVUID09PT09PDxcbmAudHJpbSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlcjtcbiIsImV4cG9ydCBkZWZhdWx0IChlLCBleHRyYSkgPT4ge1xuICAgIGlmIChleHRyYSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQXhpb3MgZmFpbDogJHtlLm1lc3NhZ2V9ICgke2V4dHJhfSlgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgQXhpb3MgZmFpbDogJHtlLm1lc3NhZ2V9YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc2F2ZXIgfSBmcm9tIFwiLi9zYXZlci5qc1wiO1xuaW1wb3J0IGNvbXBvc2VyIGZyb20gXCIuL2NvbXBvc2VyLmpzXCI7XG5pbXBvcnQgaGFuZGxlRXJyIGZyb20gXCIuL2VyclwiO1xuXG4vKlxuIE1heWJlIHRoaXMgc2hvdWxkIGp1c3QgcmVidWlsZCB0aGUgRE9NIGVsZW1lbnQgZnJvbSBzY3JhdGNoLlxuKi9cbmNvbnN0IGZpeFdlaXJkU3BhbnMgPSAobm9kZSwgcGFyZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coYGluIGZpeFdlaXJkU3BhbnMgT0tgKTtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSBcIlNQQU5cIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYG5vZGUgdGFnTmFtZSBpcyBzcGFuIE9LYCk7XG4gICAgICAgICAgICB2YXIgaGFzU21hbGxDYXBzID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IG5vZGUuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICAgICAgICBpZiAoYXR0cikge1xuICAgICAgICAgICAgICAgIGhhc1NtYWxsQ2FwcyA9IGF0dHIuaW5kZXhPZihcInNtYWxsLWNhcHNcIikgPiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNTbWFsbENhcHMpIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZm9udC12YXJpYW50OiBzbWFsbC1jYXBzOlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBjbG9uZU9mTm9kZSA9IG5vZGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MCwgaWxlbj1jbG9uZU9mTm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaTxpbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb25lT2ZOb2RlLmNoaWxkTm9kZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXROb2RlID0gcGFyZW50Lmluc2VydEJlZm9yZShjbG9uZU9mTm9kZS5jaGlsZE5vZGVzW2ldLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3Tm9kZSAmJiByZXROb2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Tm9kZSA9IHJldE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTAsaWxlbj1ub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpPGlsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGZpeFdlaXJkU3BhbnMobm9kZS5jaGlsZE5vZGVzW2ldLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGNpdGF0aW9uSW5mbywgc3RhcnRTYXZlLCBlbmRTYXZlKSA9PiB7XG4gICAgYXdhaXQgc3RhcnRTYXZlKCk7XG5cbiAgICB2YXIgaHRtbF9pZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaHRtbF9pZCcpO1xuICAgIFxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLWJ1dHRvblwiKTtcbiAgICBcbiAgICAvLyBPa2F5LiBIZXJlIGlzIHdoZXJlIG91ciBzYXZlZCB2YWx1ZXMgY29tZSBpbnRvIHBsYXk/XG5cbiAgICAvLyBOQjogY2l0YXRpb24gaXMgZWl0aGVyIHRoZSBkb2N1bWVudCBleGFtcGxlIG9yIHRoZSB1c2VyJ3MgcHVsbCByZXF1ZXN0IHByb3Bvc2FsXG4gICAgdmFyIGNpdGF0aW9uID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRhdGlvbicpO1xuICAgIC8vIE5COiBjaXRlX2Rlc2Mgd2lsbCBleGlzdCBvbmx5IGlmIHVzZXIgaGFzIGFuIGFjdGl2ZSBwdWxsIHJlcXVlc3RcbiAgICB2YXIgY2l0ZV9kZXNjID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRlX2Rlc2MnKTtcbiAgICBcbiAgICB2YXIgZWRpdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0b3JcIik7XG5cbiAgICB2YXIgc3R5bGVOb2RlcyA9IGVkaXRvci5jb250ZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG4gICAgZm9yICh2YXIgaT1zdHlsZU5vZGVzLmxlbmd0aC0xOyBpPi0xOyBpLS0pIHtcbiAgICAgICAgZWRpdG9yLmNvbnRlbnQucmVtb3ZlQ2hpbGQoc3R5bGVOb2Rlc1tpXSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBCZWZvcmUgZml4V2VpcmRTcGFucyBsb29wYCk7XG4gICAgZm9yICh2YXIgaT0wLGlsZW49ZWRpdG9yLmNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGk8aWxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGVkaXRvci5jb250ZW50LmNoaWxkTm9kZXNbaV07XG4gICAgICAgIGNvbnNvbGUubG9nKGB0b3AtbGV2ZWwgcnVuIG9mIGZpeFdlaXJkU3BhbnMgZm9yIGluZGV4ICR7aX1gKTtcbiAgICAgICAgZml4V2VpcmRTcGFucyhjaGlsZCwgZWRpdG9yLmNvbnRlbnQpO1xuICAgIH1cbiAgICAvLyBOZWVkIGFsc28gdG8gc3RyaXAgb3V0IGV4dHJhbmVvdXMgaW5saW5lIGdhcmJhZ2UgYWRkZWQgYnkgV29yZC5cbiAgICAvLyAoYmFzaWNhbGx5IGV2ZXJ5dGhpbmcgYnV0IHNtYWxsLWNhcHMpXG4gICAgdmFyIG5ld0NpdGUgPSBlZGl0b3IuY29udGVudC5pbm5lckhUTUxcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXDx1XFw+L2csIFwiPHNwYW4gY2xhc3M9XFxcInNtYWxsLWNhcHNcXFwiPlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzxcXC91Pi9nLCBcIjwvc3Bhbj5cIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC88XFwvP2RpdltePl0qPi9nLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzxcXC8/cFtePl0qPi9nLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcPGJyXFwvKlxcPi9nLCBcIlwiKVxuICAgICAgICAgICAgLnRyaW0oKTtcbiAgICBpZiAoIWNpdGVfZGVzYykge1xuICAgICAgICBjaXRlX2Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbW1lbnRcIikudmFsdWU7XG4gICAgfVxuICAgIHZhciBjaXRhdGlvbl9pdGVtcyA9IFtdO1xuICAgIGlmIChuZXdDaXRlICE9PSBjaXRhdGlvbikge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJzYXZlLW9rXCIpO1xuICAgICAgICB2YXIgY2l0YXRpb25JdGVtcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0ZXNfaW5mb1wiKSk7XG4gICAgICAgIHZhciBpdGVtcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGVzX21ldGFkYXRhXCIpO1xuICAgICAgICBpZiAoISFpdGVtcykge1xuICAgICAgICAgICAgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5qdXJpc2RpY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBpdGVtLmp1cmlzZGljdGlvbi5tYXRjaCgvXihbMC05XXszfSlbYS16XS8pXG4gICAgICAgICAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5qdXJpc2RpY3Rpb24gPSBpdGVtLmp1cmlzZGljdGlvbi5zbGljZSgzLCAoMytvZmZzZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3VGVzdCA9IGNvbXBvc2VyKGl0ZW1zLCBjaXRhdGlvbkl0ZW1zLCBuZXdDaXRlLCBjaXRlX2Rlc2MpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgc2F2ZXIoaHRtbF9pZCwgbmV3VGVzdCwgY2l0ZV9kZXNjKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRlX3VybCcsIHJlc3VsdC5odG1sX3VybCk7XG4gICAgICAgIGF3YWl0IGVuZFNhdmUoKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2F2ZS1va1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJzYXZlLW5vdC1va1wiKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYmxhY2std2hlZWxcIik7XG4gICAgICAgIGF3YWl0IGVuZFNhdmUoKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2F2ZS1ub3Qtb2tcIik7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImJsYWNrLXdoZWVsXCIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=