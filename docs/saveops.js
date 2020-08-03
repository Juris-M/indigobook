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

    if (["SPAN", "I", "B", "SUP"].indexOf(node.nodeType) === -1) {
      deletes.push(node);
    }

    for (var i = 0, ilen = node.childNodes.length; i < ilen; i++) {
      var child = node.childNodes[i];
      deletes = fixWeirdSpans(deletes, child, depth + 1);
    }
  }

  if (depth === 0) {
    for (var i = deletes.length - 1; i > -1; i--) {
      var delnode = deletes[i];

      for (var j = 0, jlen = delnode.childNodes.length; j < jlen; j++) {
        if (delnode.childNodes[j]) {
          var cln = delnode.childNodes[j].cloneNode(true);
          delnode.parentNode.insertBefore(cln, delnode);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vyci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZW9wcy5qcyJdLCJuYW1lcyI6WyJjb21wb3NlciIsIml0ZW1zIiwicGFyYW1zIiwibmV3Q2l0ZSIsImNvbW1lbnQiLCJrZXlzQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwibyIsImlkIiwicGFyYW1zQXJyYXkiLCJpdGVtc0FycmF5IiwidHJpbSIsImUiLCJleHRyYSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZml4V2VpcmRTcGFucyIsImRlbGV0ZXMiLCJub2RlIiwiZGVwdGgiLCJub2RlVHlwZSIsInRhZ05hbWUiLCJoYXNTbWFsbENhcHMiLCJhdHRyIiwiZ2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInB1c2giLCJpIiwiaWxlbiIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJjaGlsZCIsImRlbG5vZGUiLCJqIiwiamxlbiIsImNsbiIsImNsb25lTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsImNpdGF0aW9uSW5mbyIsInN0YXJ0U2F2ZSIsImVuZFNhdmUiLCJodG1sX2lkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2l0YXRpb24iLCJjaXRlX2Rlc2MiLCJlZGl0b3IiLCJzdHlsZU5vZGVzIiwiY29udGVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsInZhbHVlIiwiY2l0YXRpb25faXRlbXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaXRhdGlvbkl0ZW1zIiwicGFyc2UiLCJpdGVtIiwianVyaXNkaWN0aW9uIiwibSIsIm1hdGNoIiwib2Zmc2V0IiwicGFyc2VJbnQiLCJzbGljZSIsIm5ld1Rlc3QiLCJzYXZlciIsInJlc3VsdCIsInNldEl0ZW0iLCJodG1sX3VybCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1hBLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsZ0RBQWdEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLG1CQUFPLENBQUMsaUZBQTBCO0FBQzlDLDZCQUE2QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFdEU7QUFDQTtBQUNBLEdBQUcsd0VBQXdFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hELElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsT0FBaEIsRUFBeUJDLE9BQXpCLEVBQXFDO0FBQ2xELE1BQUksQ0FBQ0gsS0FBTCxFQUFZO0FBQ1JBLFNBQUssR0FBRyxFQUFSO0FBQ0FDLFVBQU0sR0FBRyxFQUFUO0FBQ0g7O0FBQ0QsTUFBSUcsU0FBUyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsRUFBVDtBQUFBLEdBQVYsQ0FBZixFQUF1QyxJQUF2QyxFQUE2QyxDQUE3QyxDQUFoQjtBQUNBLE1BQUlDLFdBQVcsR0FBR0wsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBQ0wsTUFBRCxDQUFmLEVBQXlCLElBQXpCLEVBQStCLENBQS9CLENBQWxCO0FBQ0EsTUFBSVUsVUFBVSxHQUFHTixJQUFJLENBQUNDLFNBQUwsQ0FBZU4sS0FBZixFQUFzQixJQUF0QixFQUE0QixDQUE1QixDQUFqQjtBQUNBLFNBQU8sb0xBWVRJLFNBWlMsb0VBZ0JURCxPQWhCUyxzRUFvQlRELE9BcEJTLHlFQXdCVFEsV0F4QlMsd0VBNEJUQyxVQTVCUywrQkE4QlRDLElBOUJTLEVBQVA7QUErQkgsQ0F2Q0Q7O0FBeUNlYix1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNlLHlFQUFDYyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUN6QixNQUFJQSxLQUFKLEVBQVc7QUFDUEMsV0FBTyxDQUFDQyxHQUFSLHVCQUEyQkgsQ0FBQyxDQUFDSSxPQUE3QixlQUF5Q0gsS0FBekM7QUFDSCxHQUZELE1BRU87QUFDSEMsV0FBTyxDQUFDQyxHQUFSLHVCQUEyQkgsQ0FBQyxDQUFDSSxPQUE3QjtBQUNIO0FBQ0osQ0FORCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsT0FBRCxFQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUEwQjtBQUM1QyxNQUFJRCxJQUFJLENBQUNFLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsUUFBSUYsSUFBSSxDQUFDRyxPQUFMLEtBQWlCLE1BQXJCLEVBQTZCO0FBQ3pCLFVBQUlDLFlBQVksR0FBRyxLQUFuQjtBQUNBLFVBQUlDLElBQUksR0FBR0wsSUFBSSxDQUFDTSxZQUFMLENBQWtCLE9BQWxCLENBQVg7O0FBQ0EsVUFBSUQsSUFBSixFQUFVO0FBQ05ELG9CQUFZLEdBQUdDLElBQUksQ0FBQ0UsT0FBTCxDQUFhLFlBQWIsSUFBNkIsQ0FBQyxDQUE3QztBQUNIOztBQUNELFVBQUlILFlBQUosRUFBa0I7QUFDZEosWUFBSSxDQUFDUSxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLDJCQUEzQjtBQUNBUixZQUFJLENBQUNTLGVBQUwsQ0FBcUIsTUFBckI7QUFDSCxPQUhELE1BR087QUFDSFYsZUFBTyxDQUFDVyxJQUFSLENBQWFWLElBQWI7QUFDSDtBQUNKOztBQUNELFFBQUksQ0FBQyxNQUFELEVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsS0FBbkIsRUFBMEJPLE9BQTFCLENBQWtDUCxJQUFJLENBQUNFLFFBQXZDLE1BQXFELENBQUMsQ0FBMUQsRUFBNkQ7QUFDekRILGFBQU8sQ0FBQ1csSUFBUixDQUFhVixJQUFiO0FBQ0g7O0FBQ0QsU0FBSyxJQUFJVyxDQUFDLEdBQUMsQ0FBTixFQUFRQyxJQUFJLEdBQUNaLElBQUksQ0FBQ2EsVUFBTCxDQUFnQkMsTUFBbEMsRUFBMENILENBQUMsR0FBQ0MsSUFBNUMsRUFBa0RELENBQUMsRUFBbkQsRUFBdUQ7QUFDbkQsVUFBSUksS0FBSyxHQUFHZixJQUFJLENBQUNhLFVBQUwsQ0FBZ0JGLENBQWhCLENBQVo7QUFDQVosYUFBTyxHQUFHRCxhQUFhLENBQUNDLE9BQUQsRUFBVWdCLEtBQVYsRUFBaUJkLEtBQUssR0FBQyxDQUF2QixDQUF2QjtBQUNIO0FBQ0o7O0FBQ0QsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixTQUFLLElBQUlVLENBQUMsR0FBQ1osT0FBTyxDQUFDZSxNQUFSLEdBQWUsQ0FBMUIsRUFBNkJILENBQUMsR0FBQyxDQUFDLENBQWhDLEVBQW1DQSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFVBQUlLLE9BQU8sR0FBR2pCLE9BQU8sQ0FBQ1ksQ0FBRCxDQUFyQjs7QUFDQSxXQUFLLElBQUlNLENBQUMsR0FBQyxDQUFOLEVBQVFDLElBQUksR0FBQ0YsT0FBTyxDQUFDSCxVQUFSLENBQW1CQyxNQUFyQyxFQUE2Q0csQ0FBQyxHQUFDQyxJQUEvQyxFQUFxREQsQ0FBQyxFQUF0RCxFQUEwRDtBQUN0RCxZQUFJRCxPQUFPLENBQUNILFVBQVIsQ0FBbUJJLENBQW5CLENBQUosRUFBMkI7QUFDdkIsY0FBSUUsR0FBRyxHQUFHSCxPQUFPLENBQUNILFVBQVIsQ0FBbUJJLENBQW5CLEVBQXNCRyxTQUF0QixDQUFnQyxJQUFoQyxDQUFWO0FBQ0FKLGlCQUFPLENBQUNLLFVBQVIsQ0FBbUJDLFlBQW5CLENBQWdDSCxHQUFoQyxFQUFxQ0gsT0FBckM7QUFDSDtBQUNKOztBQUNEQSxhQUFPLENBQUNLLFVBQVIsQ0FBbUJFLFdBQW5CLENBQStCUCxPQUEvQjtBQUNIOztBQUNELFdBQU8sRUFBUDtBQUNIOztBQUNELFNBQU9qQixPQUFQO0FBQ0gsQ0FyQ0Q7O0FBdUNBO0FBQUEscUVBQWUsaUJBQU95QixZQUFQLEVBQXFCQyxTQUFyQixFQUFnQ0MsT0FBaEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0xELFNBQVMsRUFESjs7QUFBQTtBQUdQRSxtQkFITyxHQUdHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFNBQTVCLENBSEg7QUFLUEMsZ0JBTE8sR0FLQUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBTEEsRUFPWDtBQUVBOztBQUNJQyxvQkFWTyxHQVVJTixNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFVBQTVCLENBVkosRUFXWDs7QUFDSUsscUJBWk8sR0FZS1AsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixXQUE1QixDQVpMO0FBY1BNLGtCQWRPLEdBY0VKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQWRGO0FBZ0JQSSxzQkFoQk8sR0FnQk1ELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQyxvQkFBZixDQUFvQyxPQUFwQyxDQWhCTjs7QUFpQlgsaUJBQVM1QixDQUFULEdBQVcwQixVQUFVLENBQUN2QixNQUFYLEdBQWtCLENBQTdCLEVBQWdDSCxDQUFDLEdBQUMsQ0FBQyxDQUFuQyxFQUFzQ0EsQ0FBQyxFQUF2QyxFQUEyQztBQUN2Q3lCLG9CQUFNLENBQUNFLE9BQVAsQ0FBZWYsV0FBZixDQUEyQmMsVUFBVSxDQUFDMUIsQ0FBRCxDQUFyQztBQUNIOztBQUNEYix5QkFBYSxDQUFDLEVBQUQsRUFBS3NDLE1BQU0sQ0FBQ0UsT0FBWixFQUFxQixDQUFyQixDQUFiLENBcEJXLENBcUJYO0FBQ0E7O0FBQ0l4RCxtQkF2Qk8sR0F1QkdzRCxNQUFNLENBQUNFLE9BQVAsQ0FBZUUsU0FBZixDQUNMQyxPQURLLENBQ0csUUFESCxFQUNhLDZCQURiLEVBRUxBLE9BRkssQ0FFRyxRQUZILEVBRWEsU0FGYixFQUdMQSxPQUhLLENBR0csZ0JBSEgsRUFHcUIsRUFIckIsRUFJTEEsT0FKSyxDQUlHLGNBSkgsRUFJbUIsRUFKbkIsRUFLTEEsT0FMSyxDQUtHLFlBTEgsRUFLaUIsRUFMakIsRUFNTGpELElBTkssRUF2Qkg7O0FBOEJYLGdCQUFJLENBQUMyQyxTQUFMLEVBQWdCO0FBQ1pBLHVCQUFTLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q1MsS0FBckQ7QUFDSDs7QUFDR0MsMEJBakNPLEdBaUNVLEVBakNWOztBQUFBLGtCQWtDUDdELE9BQU8sS0FBS29ELFFBbENMO0FBQUE7QUFBQTtBQUFBOztBQW1DUEgsZ0JBQUksQ0FBQ2EsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFNBQW5CO0FBQ0lDLHlCQXBDRyxHQW9DYTdELElBQUksQ0FBQzhELEtBQUwsQ0FBV25CLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsWUFBNUIsQ0FBWCxDQXBDYjtBQXFDSGxELGlCQXJDRyxHQXFDS2dELE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLENBckNMOztBQXNDUCxnQkFBSSxDQUFDLENBQUNsRCxLQUFOLEVBQWE7QUFDVEEsbUJBQUssR0FBR0ssSUFBSSxDQUFDOEQsS0FBTCxDQUFXbkUsS0FBWCxDQUFSO0FBRFMscURBRVFBLEtBRlI7O0FBQUE7QUFFVCxvRUFBd0I7QUFBZm9FLHNCQUFlOztBQUNwQixzQkFBSUEsSUFBSSxDQUFDQyxZQUFULEVBQXVCO0FBQ2ZDLHFCQURlLEdBQ1hGLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkUsS0FBbEIsQ0FBd0Isa0JBQXhCLENBRFc7O0FBRW5CLHdCQUFJRCxDQUFKLEVBQU87QUFDQ0UsNEJBREQsR0FDVUMsUUFBUSxDQUFDSCxDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU8sRUFBUCxDQURsQjtBQUVIRiwwQkFBSSxDQUFDQyxZQUFMLEdBQW9CRCxJQUFJLENBQUNDLFlBQUwsQ0FBa0JLLEtBQWxCLENBQXdCLENBQXhCLEVBQTRCLElBQUVGLE1BQTlCLENBQXBCO0FBQ0g7QUFDSjtBQUNKO0FBVlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdaOztBQUNHRyxtQkFsREcsR0FrRE81RSw2REFBUSxDQUFDQyxLQUFELEVBQVFrRSxhQUFSLEVBQXVCaEUsT0FBdkIsRUFBZ0NxRCxTQUFoQyxDQWxEZjtBQUFBO0FBQUEsbUJBbURZcUIsd0RBQUssQ0FBQzdCLE9BQUQsRUFBVTRCLE9BQVYsRUFBbUJwQixTQUFuQixDQW5EakI7O0FBQUE7QUFtREhzQixrQkFuREc7QUFvRFA3QixrQkFBTSxDQUFDQyxZQUFQLENBQW9CNkIsT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0NELE1BQU0sQ0FBQ0UsUUFBL0M7QUFwRE87QUFBQSxtQkFxRERqQyxPQUFPLEVBckROOztBQUFBO0FBc0RQSyxnQkFBSSxDQUFDYSxTQUFMLENBQWVnQixNQUFmLENBQXNCLFNBQXRCO0FBdERPO0FBQUE7O0FBQUE7QUF3RFA3QixnQkFBSSxDQUFDYSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsYUFBbkI7QUFDQWQsZ0JBQUksQ0FBQ2EsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CO0FBekRPO0FBQUEsbUJBMEREbkIsT0FBTyxFQTFETjs7QUFBQTtBQTJEUEssZ0JBQUksQ0FBQ2EsU0FBTCxDQUFlZ0IsTUFBZixDQUFzQixhQUF0QjtBQUNBN0IsZ0JBQUksQ0FBQ2EsU0FBTCxDQUFlZ0IsTUFBZixDQUFzQixhQUF0Qjs7QUE1RE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNIiwiZmlsZSI6InNhdmVvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPSBub24gfHwgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FO1xuICB9KTtcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gIH1cbn0pO1xuIiwiY29uc3QgY29tcG9zZXIgPSAoaXRlbXMsIHBhcmFtcywgbmV3Q2l0ZSwgY29tbWVudCkgPT4ge1xuICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgaXRlbXMgPSBbXTtcbiAgICAgICAgcGFyYW1zID0ge307XG4gICAgfVxuICAgIHZhciBrZXlzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShpdGVtcy5tYXAoKG8pID0+IG8uaWQpLCBudWxsLCAyKTtcbiAgICB2YXIgcGFyYW1zQXJyYXkgPSBKU09OLnN0cmluZ2lmeShbcGFyYW1zXSwgbnVsbCwgMik7XG4gICAgdmFyIGl0ZW1zQXJyYXkgPSBKU09OLnN0cmluZ2lmeShpdGVtcywgbnVsbCwgMik7XG4gICAgcmV0dXJuIGBcbj4+PT09PT0gTU9ERSA9PT09PT4+XG5jaXRhdGlvblxuPDw9PT09PSBNT0RFID09PT09PDxcblxuPj49PT09PSBPUFRJT05TID09PT09Pj5cbntcbiAgICBcIndyYXBfdXJsX2FuZF9kb2lcIjogdHJ1ZVxufVxuPDw9PT09PSBPUFRJT05TID09PT09PDxcblxuPj49PT09PSBLRVlTID09PT09Pj5cbiR7a2V5c0FycmF5fVxuPDw9PT09PSBLRVlTID09PT09PDxcblxuPj49PT09PSBERVNDUklQVElPTiA9PT09PT4+XG4ke2NvbW1lbnR9XG48PD09PT09IERFU0NSSVBUSU9OID09PT09PDxcblxuPj49PT09PSBSRVNVTFQgPT09PT0+PlxuJHtuZXdDaXRlfVxuPDw9PT09PSBSRVNVTFQgPT09PT08PFxuXG4+Pj09PT09IENJVEFUSU9OLUlURU1TID09PT09Pj5cbiR7cGFyYW1zQXJyYXl9XG48PD09PT09IENJVEFUSU9OLUlURU1TID09PT09PDxcblxuPj49PT09PSBJTlBVVCA9PT09PT4+XG4ke2l0ZW1zQXJyYXl9XG48PD09PT09IElOUFVUID09PT09PDxcbmAudHJpbSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlcjtcbiIsImV4cG9ydCBkZWZhdWx0IChlLCBleHRyYSkgPT4ge1xuICAgIGlmIChleHRyYSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQXhpb3MgZmFpbDogJHtlLm1lc3NhZ2V9ICgke2V4dHJhfSlgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgQXhpb3MgZmFpbDogJHtlLm1lc3NhZ2V9YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc2F2ZXIgfSBmcm9tIFwiLi9zYXZlci5qc1wiO1xuaW1wb3J0IGNvbXBvc2VyIGZyb20gXCIuL2NvbXBvc2VyLmpzXCI7XG5pbXBvcnQgaGFuZGxlRXJyIGZyb20gXCIuL2VyclwiO1xuXG4vKlxuIE1heWJlIHRoaXMgc2hvdWxkIGp1c3QgcmVidWlsZCB0aGUgRE9NIGVsZW1lbnQgZnJvbSBzY3JhdGNoLlxuKi9cbmNvbnN0IGZpeFdlaXJkU3BhbnMgPSAoZGVsZXRlcywgbm9kZSwgZGVwdGgpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSBcIlNQQU5cIikge1xuICAgICAgICAgICAgdmFyIGhhc1NtYWxsQ2FwcyA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGF0dHIgPSBub2RlLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgICAgICAgICBoYXNTbWFsbENhcHMgPSBhdHRyLmluZGV4T2YoXCJzbWFsbC1jYXBzXCIpID4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzU21hbGxDYXBzKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImZvbnQtdmFyaWFudDogc21hbGwtY2FwczpcIik7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJsYW5nXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFtcIlNQQU5cIiwgXCJJXCIsIFwiQlwiLCBcIlNVUFwiXS5pbmRleE9mKG5vZGUubm9kZVR5cGUpID09PSAtMSkge1xuICAgICAgICAgICAgZGVsZXRlcy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGk9MCxpbGVuPW5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGk8aWxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBkZWxldGVzID0gZml4V2VpcmRTcGFucyhkZWxldGVzLCBjaGlsZCwgZGVwdGgrMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGk9ZGVsZXRlcy5sZW5ndGgtMTsgaT4tMTsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgZGVsbm9kZSA9IGRlbGV0ZXNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBqPTAsamxlbj1kZWxub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBqPGpsZW47IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChkZWxub2RlLmNoaWxkTm9kZXNbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsbiA9IGRlbG5vZGUuY2hpbGROb2Rlc1tqXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xuLCBkZWxub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGVsbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gZGVsZXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGNpdGF0aW9uSW5mbywgc3RhcnRTYXZlLCBlbmRTYXZlKSA9PiB7XG4gICAgYXdhaXQgc3RhcnRTYXZlKCk7XG5cbiAgICB2YXIgaHRtbF9pZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaHRtbF9pZCcpO1xuICAgIFxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLWJ1dHRvblwiKTtcbiAgICBcbiAgICAvLyBPa2F5LiBIZXJlIGlzIHdoZXJlIG91ciBzYXZlZCB2YWx1ZXMgY29tZSBpbnRvIHBsYXk/XG5cbiAgICAvLyBOQjogY2l0YXRpb24gaXMgZWl0aGVyIHRoZSBkb2N1bWVudCBleGFtcGxlIG9yIHRoZSB1c2VyJ3MgcHVsbCByZXF1ZXN0IHByb3Bvc2FsXG4gICAgdmFyIGNpdGF0aW9uID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRhdGlvbicpO1xuICAgIC8vIE5COiBjaXRlX2Rlc2Mgd2lsbCBleGlzdCBvbmx5IGlmIHVzZXIgaGFzIGFuIGFjdGl2ZSBwdWxsIHJlcXVlc3RcbiAgICB2YXIgY2l0ZV9kZXNjID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRlX2Rlc2MnKTtcbiAgICBcbiAgICB2YXIgZWRpdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0b3JcIik7XG5cbiAgICB2YXIgc3R5bGVOb2RlcyA9IGVkaXRvci5jb250ZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG4gICAgZm9yICh2YXIgaT1zdHlsZU5vZGVzLmxlbmd0aC0xOyBpPi0xOyBpLS0pIHtcbiAgICAgICAgZWRpdG9yLmNvbnRlbnQucmVtb3ZlQ2hpbGQoc3R5bGVOb2Rlc1tpXSk7XG4gICAgfVxuICAgIGZpeFdlaXJkU3BhbnMoW10sIGVkaXRvci5jb250ZW50LCAwKTtcbiAgICAvLyBOZWVkIGFsc28gdG8gc3RyaXAgb3V0IGV4dHJhbmVvdXMgaW5saW5lIGdhcmJhZ2UgYWRkZWQgYnkgV29yZC5cbiAgICAvLyAoYmFzaWNhbGx5IGV2ZXJ5dGhpbmcgYnV0IHNtYWxsLWNhcHMpXG4gICAgdmFyIG5ld0NpdGUgPSBlZGl0b3IuY29udGVudC5pbm5lckhUTUxcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXDx1XFw+L2csIFwiPHNwYW4gY2xhc3M9XFxcInNtYWxsLWNhcHNcXFwiPlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzxcXC91Pi9nLCBcIjwvc3Bhbj5cIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC88XFwvP2RpdltePl0qPi9nLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzxcXC8/cFtePl0qPi9nLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcPGJyXFwvKlxcPi9nLCBcIlwiKVxuICAgICAgICAgICAgLnRyaW0oKTtcbiAgICBpZiAoIWNpdGVfZGVzYykge1xuICAgICAgICBjaXRlX2Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbW1lbnRcIikudmFsdWU7XG4gICAgfVxuICAgIHZhciBjaXRhdGlvbl9pdGVtcyA9IFtdO1xuICAgIGlmIChuZXdDaXRlICE9PSBjaXRhdGlvbikge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJzYXZlLW9rXCIpO1xuICAgICAgICB2YXIgY2l0YXRpb25JdGVtcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0ZXNfaW5mb1wiKSk7XG4gICAgICAgIHZhciBpdGVtcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGVzX21ldGFkYXRhXCIpO1xuICAgICAgICBpZiAoISFpdGVtcykge1xuICAgICAgICAgICAgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5qdXJpc2RpY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBpdGVtLmp1cmlzZGljdGlvbi5tYXRjaCgvXihbMC05XXszfSlbYS16XS8pXG4gICAgICAgICAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5qdXJpc2RpY3Rpb24gPSBpdGVtLmp1cmlzZGljdGlvbi5zbGljZSgzLCAoMytvZmZzZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3VGVzdCA9IGNvbXBvc2VyKGl0ZW1zLCBjaXRhdGlvbkl0ZW1zLCBuZXdDaXRlLCBjaXRlX2Rlc2MpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgc2F2ZXIoaHRtbF9pZCwgbmV3VGVzdCwgY2l0ZV9kZXNjKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRlX3VybCcsIHJlc3VsdC5odG1sX3VybCk7XG4gICAgICAgIGF3YWl0IGVuZFNhdmUoKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2F2ZS1va1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJzYXZlLW5vdC1va1wiKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYmxhY2std2hlZWxcIik7XG4gICAgICAgIGF3YWl0IGVuZFNhdmUoKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2F2ZS1ub3Qtb2tcIik7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImJsYWNrLXdoZWVsXCIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=