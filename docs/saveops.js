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

var fixWeirdSpans = function fixWeirdSpans(deletes, node, depth) {
  if (node.nodeType === 1) {
    if (node.tagName === "SPAN") {
      var hasSmallCaps = false;
      var attr = node.getAttribute("style");

      if (attr) {
        hasSmallCaps = attr.indexOf("small-caps") > -1;
      }

      if (hasSmallCaps) {
        node.setAttribute("style", "font-variant: small-caps:");
        node.removeAttribute("lang");
      } else {
        deletes.push(node);
      }
    }

    for (var i = 0, ilen = node.childNodes.length; i < ilen; i++) {
      var child = node.childNodes[i];
      deletes = fixWeirdSpans(deletes, child, depth + 1);
    }
  }

  if (depth === 0) {
    console.log("RUN DELETES HERE! ".concat(deletes.length));

    for (var i = deletes.length - 1; i > -1; i--) {
      var delnode = deletes[i];
      var cln = delnode.cloneNode(true);

      for (var j = 0, jlen = delnode.childNodes.length; j < jlen; j++) {
        delnode.parentNode.insertBefore(cln.childNodes[j], delnode);
      }

      delnode.parentNode.removeChild(delnode);
    }

    return [];
  }

  return deletes;
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(citationInfo, startSave, endSave) {
    var html_id, elem, citation, cite_desc, editor, styleNodes, i, newCite, citation_items, citationItems, items, _iterator, _step, item, m, offset, newTest, result;

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

            fixWeirdSpans([], editor.content, 0); // Need also to strip out extraneous inline garbage added by Word.
            // (basically everything but small-caps)

            newCite = editor.content.innerHTML.replace(/\<u\>/g, "<span class=\"small-caps\">").replace(/<\/u>/g, "</span>").replace(/<\/?div[^>]*>/g, "").replace(/<\/?p[^>]*>/g, "").replace(/\<br\/*\>/g, "").trim();

            if (!cite_desc) {
              cite_desc = document.getElementById("modal-comment").value;
            }

            citation_items = [];

            if (!(newCite !== citation)) {
              _context.next = 28;
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
            _context.next = 21;
            return Object(_saver_js__WEBPACK_IMPORTED_MODULE_14__["saver"])(html_id, newTest, cite_desc);

          case 21:
            result = _context.sent;
            window.localStorage.setItem('cite_url', result.html_url);
            _context.next = 25;
            return endSave();

          case 25:
            elem.classList.remove("save-ok");
            _context.next = 34;
            break;

          case 28:
            elem.classList.add("save-not-ok");
            elem.classList.add("black-wheel");
            _context.next = 32;
            return endSave();

          case 32:
            elem.classList.remove("save-not-ok");
            elem.classList.remove("black-wheel");

          case 34:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vyci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZW9wcy5qcyJdLCJuYW1lcyI6WyJjb21wb3NlciIsIml0ZW1zIiwicGFyYW1zIiwibmV3Q2l0ZSIsImNvbW1lbnQiLCJrZXlzQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwibyIsImlkIiwicGFyYW1zQXJyYXkiLCJpdGVtc0FycmF5IiwidHJpbSIsImUiLCJleHRyYSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZml4V2VpcmRTcGFucyIsImRlbGV0ZXMiLCJub2RlIiwiZGVwdGgiLCJub2RlVHlwZSIsInRhZ05hbWUiLCJoYXNTbWFsbENhcHMiLCJhdHRyIiwiZ2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInB1c2giLCJpIiwiaWxlbiIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJjaGlsZCIsImRlbG5vZGUiLCJjbG4iLCJjbG9uZU5vZGUiLCJqIiwiamxlbiIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsImNpdGF0aW9uSW5mbyIsInN0YXJ0U2F2ZSIsImVuZFNhdmUiLCJodG1sX2lkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2l0YXRpb24iLCJjaXRlX2Rlc2MiLCJlZGl0b3IiLCJzdHlsZU5vZGVzIiwiY29udGVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsInZhbHVlIiwiY2l0YXRpb25faXRlbXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaXRhdGlvbkl0ZW1zIiwicGFyc2UiLCJpdGVtIiwianVyaXNkaWN0aW9uIiwibSIsIm1hdGNoIiwib2Zmc2V0IiwicGFyc2VJbnQiLCJzbGljZSIsIm5ld1Rlc3QiLCJzYXZlciIsInJlc3VsdCIsInNldEl0ZW0iLCJodG1sX3VybCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1hBLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsZ0RBQWdEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLG1CQUFPLENBQUMsaUZBQTBCO0FBQzlDLDZCQUE2QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFdEU7QUFDQTtBQUNBLEdBQUcsd0VBQXdFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hELElBQU1BLFFB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QW5CO0FBQ0FkLGdCQUFJLENBQUNhLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjtBQXpETztBQUFBLG1CQTBERG5CLE9BQU8sRUExRE47O0FBQUE7QUEyRFBLLGdCQUFJLENBQUNhLFNBQUwsQ0FBZWdCLE1BQWYsQ0FBc0IsYUFBdEI7QUFDQTdCLGdCQUFJLENBQUNhLFNBQUwsQ0FBZWdCLE1BQWYsQ0FBc0IsYUFBdEI7O0FBNURPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTSIsImZpbGUiOiJzYXZlb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIG5vbiA9ICdcXHUyMDBCXFx1MDA4NVxcdTE4MEUnO1xuXG4vLyBjaGVjayB0aGF0IGEgbWV0aG9kIHdvcmtzIHdpdGggdGhlIGNvcnJlY3QgbGlzdFxuLy8gb2Ygd2hpdGVzcGFjZXMgYW5kIGhhcyBhIGNvcnJlY3QgbmFtZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0oKSB8fCBub25bTUVUSE9EX05BTUVdKCkgIT0gbm9uIHx8IHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRTtcbiAgfSk7XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciBmb3JjZWRTdHJpbmdUcmltTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW0nKSB9LCB7XG4gIHRyaW06IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgcmV0dXJuICR0cmltKHRoaXMpO1xuICB9XG59KTtcbiIsImNvbnN0IGNvbXBvc2VyID0gKGl0ZW1zLCBwYXJhbXMsIG5ld0NpdGUsIGNvbW1lbnQpID0+IHtcbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIGl0ZW1zID0gW107XG4gICAgICAgIHBhcmFtcyA9IHt9O1xuICAgIH1cbiAgICB2YXIga2V5c0FycmF5ID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMubWFwKChvKSA9PiBvLmlkKSwgbnVsbCwgMik7XG4gICAgdmFyIHBhcmFtc0FycmF5ID0gSlNPTi5zdHJpbmdpZnkoW3BhcmFtc10sIG51bGwsIDIpO1xuICAgIHZhciBpdGVtc0FycmF5ID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMsIG51bGwsIDIpO1xuICAgIHJldHVybiBgXG4+Pj09PT09IE1PREUgPT09PT0+PlxuY2l0YXRpb25cbjw8PT09PT0gTU9ERSA9PT09PTw8XG5cbj4+PT09PT0gT1BUSU9OUyA9PT09PT4+XG57XG4gICAgXCJ3cmFwX3VybF9hbmRfZG9pXCI6IHRydWVcbn1cbjw8PT09PT0gT1BUSU9OUyA9PT09PTw8XG5cbj4+PT09PT0gS0VZUyA9PT09PT4+XG4ke2tleXNBcnJheX1cbjw8PT09PT0gS0VZUyA9PT09PTw8XG5cbj4+PT09PT0gREVTQ1JJUFRJT04gPT09PT0+PlxuJHtjb21tZW50fVxuPDw9PT09PSBERVNDUklQVElPTiA9PT09PTw8XG5cbj4+PT09PT0gUkVTVUxUID09PT09Pj5cbiR7bmV3Q2l0ZX1cbjw8PT09PT0gUkVTVUxUID09PT09PDxcblxuPj49PT09PSBDSVRBVElPTi1JVEVNUyA9PT09PT4+XG4ke3BhcmFtc0FycmF5fVxuPDw9PT09PSBDSVRBVElPTi1JVEVNUyA9PT09PTw8XG5cbj4+PT09PT0gSU5QVVQgPT09PT0+PlxuJHtpdGVtc0FycmF5fVxuPDw9PT09PSBJTlBVVCA9PT09PTw8XG5gLnRyaW0oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZXI7XG4iLCJleHBvcnQgZGVmYXVsdCAoZSwgZXh0cmEpID0+IHtcbiAgICBpZiAoZXh0cmEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEF4aW9zIGZhaWw6ICR7ZS5tZXNzYWdlfSAoJHtleHRyYX0pYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYEF4aW9zIGZhaWw6ICR7ZS5tZXNzYWdlfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHNhdmVyIH0gZnJvbSBcIi4vc2F2ZXIuanNcIjtcbmltcG9ydCBjb21wb3NlciBmcm9tIFwiLi9jb21wb3Nlci5qc1wiO1xuaW1wb3J0IGhhbmRsZUVyciBmcm9tIFwiLi9lcnJcIjtcblxuLypcbiBNYXliZSB0aGlzIHNob3VsZCBqdXN0IHJlYnVpbGQgdGhlIERPTSBlbGVtZW50IGZyb20gc2NyYXRjaC5cbiovXG5jb25zdCBmaXhXZWlyZFNwYW5zID0gKGRlbGV0ZXMsIG5vZGUsIGRlcHRoKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJTUEFOXCIpIHtcbiAgICAgICAgICAgIHZhciBoYXNTbWFsbENhcHMgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBhdHRyID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgaGFzU21hbGxDYXBzID0gYXR0ci5pbmRleE9mKFwic21hbGwtY2Fwc1wiKSA+IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc1NtYWxsQ2Fwcykge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM6XCIpO1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKFwibGFuZ1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGk9MCxpbGVuPW5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGk8aWxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBkZWxldGVzID0gZml4V2VpcmRTcGFucyhkZWxldGVzLCBjaGlsZCwgZGVwdGgrMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSVU4gREVMRVRFUyBIRVJFISAke2RlbGV0ZXMubGVuZ3RofWApO1xuICAgICAgICBmb3IgKHZhciBpPWRlbGV0ZXMubGVuZ3RoLTE7IGk+LTE7IGktLSkge1xuICAgICAgICAgICAgdmFyIGRlbG5vZGUgPSBkZWxldGVzW2ldO1xuICAgICAgICAgICAgdmFyIGNsbiA9IGRlbG5vZGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaj0wLGpsZW49ZGVsbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgajxqbGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBkZWxub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsbi5jaGlsZE5vZGVzW2pdLCBkZWxub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkZWxub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBkZWxldGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY2l0YXRpb25JbmZvLCBzdGFydFNhdmUsIGVuZFNhdmUpID0+IHtcbiAgICBhd2FpdCBzdGFydFNhdmUoKTtcblxuICAgIHZhciBodG1sX2lkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdodG1sX2lkJyk7XG4gICAgXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmUtYnV0dG9uXCIpO1xuICAgIFxuICAgIC8vIE9rYXkuIEhlcmUgaXMgd2hlcmUgb3VyIHNhdmVkIHZhbHVlcyBjb21lIGludG8gcGxheT9cblxuICAgIC8vIE5COiBjaXRhdGlvbiBpcyBlaXRoZXIgdGhlIGRvY3VtZW50IGV4YW1wbGUgb3IgdGhlIHVzZXIncyBwdWxsIHJlcXVlc3QgcHJvcG9zYWxcbiAgICB2YXIgY2l0YXRpb24gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGF0aW9uJyk7XG4gICAgLy8gTkI6IGNpdGVfZGVzYyB3aWxsIGV4aXN0IG9ubHkgaWYgdXNlciBoYXMgYW4gYWN0aXZlIHB1bGwgcmVxdWVzdFxuICAgIHZhciBjaXRlX2Rlc2MgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGVfZGVzYycpO1xuICAgIFxuICAgIHZhciBlZGl0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRvclwiKTtcblxuICAgIHZhciBzdHlsZU5vZGVzID0gZWRpdG9yLmNvbnRlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiAgICBmb3IgKHZhciBpPXN0eWxlTm9kZXMubGVuZ3RoLTE7IGk+LTE7IGktLSkge1xuICAgICAgICBlZGl0b3IuY29udGVudC5yZW1vdmVDaGlsZChzdHlsZU5vZGVzW2ldKTtcbiAgICB9XG4gICAgZml4V2VpcmRTcGFucyhbXSwgZWRpdG9yLmNvbnRlbnQsIDApO1xuICAgIC8vIE5lZWQgYWxzbyB0byBzdHJpcCBvdXQgZXh0cmFuZW91cyBpbmxpbmUgZ2FyYmFnZSBhZGRlZCBieSBXb3JkLlxuICAgIC8vIChiYXNpY2FsbHkgZXZlcnl0aGluZyBidXQgc21hbGwtY2FwcylcbiAgICB2YXIgbmV3Q2l0ZSA9IGVkaXRvci5jb250ZW50LmlubmVySFRNTFxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcPHVcXD4vZywgXCI8c3BhbiBjbGFzcz1cXFwic21hbGwtY2Fwc1xcXCI+XCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvPFxcL3U+L2csIFwiPC9zcGFuPlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzxcXC8/ZGl2W14+XSo+L2csIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvPFxcLz9wW14+XSo+L2csIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFw8YnJcXC8qXFw+L2csIFwiXCIpXG4gICAgICAgICAgICAudHJpbSgpO1xuICAgIGlmICghY2l0ZV9kZXNjKSB7XG4gICAgICAgIGNpdGVfZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29tbWVudFwiKS52YWx1ZTtcbiAgICB9XG4gICAgdmFyIGNpdGF0aW9uX2l0ZW1zID0gW107XG4gICAgaWYgKG5ld0NpdGUgIT09IGNpdGF0aW9uKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcInNhdmUtb2tcIik7XG4gICAgICAgIHZhciBjaXRhdGlvbkl0ZW1zID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRlc19pbmZvXCIpKTtcbiAgICAgICAgdmFyIGl0ZW1zID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0ZXNfbWV0YWRhdGFcIik7XG4gICAgICAgIGlmICghIWl0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtcyA9IEpTT04ucGFyc2UoaXRlbXMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmp1cmlzZGljdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGl0ZW0uanVyaXNkaWN0aW9uLm1hdGNoKC9eKFswLTldezN9KVthLXpdLylcbiAgICAgICAgICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChtWzFdLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmp1cmlzZGljdGlvbiA9IGl0ZW0uanVyaXNkaWN0aW9uLnNsaWNlKDMsICgzK29mZnNldCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdUZXN0ID0gY29tcG9zZXIoaXRlbXMsIGNpdGF0aW9uSXRlbXMsIG5ld0NpdGUsIGNpdGVfZGVzYyk7XG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBzYXZlcihodG1sX2lkLCBuZXdUZXN0LCBjaXRlX2Rlc2MpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGVfdXJsJywgcmVzdWx0Lmh0bWxfdXJsKTtcbiAgICAgICAgYXdhaXQgZW5kU2F2ZSgpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzYXZlLW9rXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcInNhdmUtbm90LW9rXCIpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJibGFjay13aGVlbFwiKTtcbiAgICAgICAgYXdhaXQgZW5kU2F2ZSgpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzYXZlLW5vdC1va1wiKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxhY2std2hlZWxcIik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==