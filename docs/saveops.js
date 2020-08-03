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
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _saver_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./saver.js */ "./src/saver.js");
/* harmony import */ var _composer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./composer.js */ "./src/composer.js");
/* harmony import */ var _err__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./err */ "./src/err.js");













function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(citationInfo, startSave, endSave) {
    var html_id, elem, citation, cite_desc, editor, newCite, citation_items, citationItems, items, _iterator, _step, item, m, offset, newTest, result;

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
            newCite = editor.content.innerHTML.replace(/\<u\>/g, "<span class=\"small-caps\">").replace(/\<\/u\>/g, "</span>").replace(/^\<div\>/, "").replace(/\<\/div\>$/, "").replace(/\<br\/*\>/, "");

            if (!cite_desc) {
              cite_desc = document.getElementById("modal-comment").value;
            }

            citation_items = [];

            if (!(newCite !== citation)) {
              _context.next = 25;
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

            newTest = Object(_composer_js__WEBPACK_IMPORTED_MODULE_13__["default"])(items, citationItems, newCite, cite_desc);
            _context.next = 18;
            return Object(_saver_js__WEBPACK_IMPORTED_MODULE_12__["saver"])(html_id, newTest, cite_desc);

          case 18:
            result = _context.sent;
            window.localStorage.setItem('cite_url', result.html_url);
            _context.next = 22;
            return endSave();

          case 22:
            elem.classList.remove("save-ok");
            _context.next = 31;
            break;

          case 25:
            elem.classList.add("save-not-ok");
            elem.classList.add("black-wheel");
            _context.next = 29;
            return endSave();

          case 29:
            elem.classList.remove("save-not-ok");
            elem.classList.remove("black-wheel");

          case 31:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vyci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZW9wcy5qcyJdLCJuYW1lcyI6WyJjb21wb3NlciIsIml0ZW1zIiwicGFyYW1zIiwibmV3Q2l0ZSIsImNvbW1lbnQiLCJrZXlzQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwibyIsImlkIiwicGFyYW1zQXJyYXkiLCJpdGVtc0FycmF5IiwidHJpbSIsImUiLCJleHRyYSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY2l0YXRpb25JbmZvIiwic3RhcnRTYXZlIiwiZW5kU2F2ZSIsImh0bWxfaWQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaXRhdGlvbiIsImNpdGVfZGVzYyIsImVkaXRvciIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwidmFsdWUiLCJjaXRhdGlvbl9pdGVtcyIsImNsYXNzTGlzdCIsImFkZCIsImNpdGF0aW9uSXRlbXMiLCJwYXJzZSIsIml0ZW0iLCJqdXJpc2RpY3Rpb24iLCJtIiwibWF0Y2giLCJvZmZzZXQiLCJwYXJzZUludCIsInNsaWNlIiwibmV3VGVzdCIsInNhdmVyIiwicmVzdWx0Iiwic2V0SXRlbSIsImh0bWxfdXJsIiwicmVt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ImZpbGUiOiJzYXZlb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIG5vbiA9ICdcXHUyMDBCXFx1MDA4NVxcdTE4MEUnO1xuXG4vLyBjaGVjayB0aGF0IGEgbWV0aG9kIHdvcmtzIHdpdGggdGhlIGNvcnJlY3QgbGlzdFxuLy8gb2Ygd2hpdGVzcGFjZXMgYW5kIGhhcyBhIGNvcnJlY3QgbmFtZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0oKSB8fCBub25bTUVUSE9EX05BTUVdKCkgIT0gbm9uIHx8IHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRTtcbiAgfSk7XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciBmb3JjZWRTdHJpbmdUcmltTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW0nKSB9LCB7XG4gIHRyaW06IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgcmV0dXJuICR0cmltKHRoaXMpO1xuICB9XG59KTtcbiIsImNvbnN0IGNvbXBvc2VyID0gKGl0ZW1zLCBwYXJhbXMsIG5ld0NpdGUsIGNvbW1lbnQpID0+IHtcbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgIGl0ZW1zID0gW107XG4gICAgICAgIHBhcmFtcyA9IHt9O1xuICAgIH1cbiAgICB2YXIga2V5c0FycmF5ID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMubWFwKChvKSA9PiBvLmlkKSwgbnVsbCwgMik7XG4gICAgdmFyIHBhcmFtc0FycmF5ID0gSlNPTi5zdHJpbmdpZnkoW3BhcmFtc10sIG51bGwsIDIpO1xuICAgIHZhciBpdGVtc0FycmF5ID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMsIG51bGwsIDIpO1xuICAgIHJldHVybiBgXG4+Pj09PT09IE1PREUgPT09PT0+PlxuY2l0YXRpb25cbjw8PT09PT0gTU9ERSA9PT09PTw8XG5cbj4+PT09PT0gT1BUSU9OUyA9PT09PT4+XG57XG4gICAgXCJ3cmFwX3VybF9hbmRfZG9pXCI6IHRydWVcbn1cbjw8PT09PT0gT1BUSU9OUyA9PT09PTw8XG5cbj4+PT09PT0gS0VZUyA9PT09PT4+XG4ke2tleXNBcnJheX1cbjw8PT09PT0gS0VZUyA9PT09PTw8XG5cbj4+PT09PT0gREVTQ1JJUFRJT04gPT09PT0+PlxuJHtjb21tZW50fVxuPDw9PT09PSBERVNDUklQVElPTiA9PT09PTw8XG5cbj4+PT09PT0gUkVTVUxUID09PT09Pj5cbiR7bmV3Q2l0ZX1cbjw8PT09PT0gUkVTVUxUID09PT09PDxcblxuPj49PT09PSBDSVRBVElPTi1JVEVNUyA9PT09PT4+XG4ke3BhcmFtc0FycmF5fVxuPDw9PT09PSBDSVRBVElPTi1JVEVNUyA9PT09PTw8XG5cbj4+PT09PT0gSU5QVVQgPT09PT0+PlxuJHtpdGVtc0FycmF5fVxuPDw9PT09PSBJTlBVVCA9PT09PTw8XG5gLnRyaW0oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZXI7XG4iLCJleHBvcnQgZGVmYXVsdCAoZSwgZXh0cmEpID0+IHtcbiAgICBpZiAoZXh0cmEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEF4aW9zIGZhaWw6ICR7ZS5tZXNzYWdlfSAoJHtleHRyYX0pYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYEF4aW9zIGZhaWw6ICR7ZS5tZXNzYWdlfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHNhdmVyIH0gZnJvbSBcIi4vc2F2ZXIuanNcIjtcbmltcG9ydCBjb21wb3NlciBmcm9tIFwiLi9jb21wb3Nlci5qc1wiO1xuaW1wb3J0IGhhbmRsZUVyciBmcm9tIFwiLi9lcnJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGNpdGF0aW9uSW5mbywgc3RhcnRTYXZlLCBlbmRTYXZlKSA9PiB7XG4gICAgYXdhaXQgc3RhcnRTYXZlKCk7XG5cbiAgICB2YXIgaHRtbF9pZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaHRtbF9pZCcpO1xuICAgIFxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLWJ1dHRvblwiKTtcbiAgICBcbiAgICAvLyBPa2F5LiBIZXJlIGlzIHdoZXJlIG91ciBzYXZlZCB2YWx1ZXMgY29tZSBpbnRvIHBsYXk/XG5cbiAgICAvLyBOQjogY2l0YXRpb24gaXMgZWl0aGVyIHRoZSBkb2N1bWVudCBleGFtcGxlIG9yIHRoZSB1c2VyJ3MgcHVsbCByZXF1ZXN0IHByb3Bvc2FsXG4gICAgdmFyIGNpdGF0aW9uID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRhdGlvbicpO1xuICAgIC8vIE5COiBjaXRlX2Rlc2Mgd2lsbCBleGlzdCBvbmx5IGlmIHVzZXIgaGFzIGFuIGFjdGl2ZSBwdWxsIHJlcXVlc3RcbiAgICB2YXIgY2l0ZV9kZXNjID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRlX2Rlc2MnKTtcbiAgICBcbiAgICB2YXIgZWRpdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0b3JcIik7XG4gICAgdmFyIG5ld0NpdGUgPSBlZGl0b3IuY29udGVudC5pbm5lckhUTUxcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXDx1XFw+L2csIFwiPHNwYW4gY2xhc3M9XFxcInNtYWxsLWNhcHNcXFwiPlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcPFxcL3VcXD4vZywgXCI8L3NwYW4+XCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcPGRpdlxcPi8sIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFw8XFwvZGl2XFw+JC8sIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFw8YnJcXC8qXFw+LywgXCJcIik7XG4gICAgaWYgKCFjaXRlX2Rlc2MpIHtcbiAgICAgICAgY2l0ZV9kZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb21tZW50XCIpLnZhbHVlO1xuICAgIH1cbiAgICB2YXIgY2l0YXRpb25faXRlbXMgPSBbXTtcbiAgICBpZiAobmV3Q2l0ZSAhPT0gY2l0YXRpb24pIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwic2F2ZS1va1wiKTtcbiAgICAgICAgdmFyIGNpdGF0aW9uSXRlbXMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGVzX2luZm9cIikpO1xuICAgICAgICB2YXIgaXRlbXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRlc19tZXRhZGF0YVwiKTtcbiAgICAgICAgaWYgKCEhaXRlbXMpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gSlNPTi5wYXJzZShpdGVtcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uanVyaXNkaWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gaXRlbS5qdXJpc2RpY3Rpb24ubWF0Y2goL14oWzAtOV17M30pW2Etel0vKVxuICAgICAgICAgICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KG1bMV0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uanVyaXNkaWN0aW9uID0gaXRlbS5qdXJpc2RpY3Rpb24uc2xpY2UoMywgKDMrb2Zmc2V0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld1Rlc3QgPSBjb21wb3NlcihpdGVtcywgY2l0YXRpb25JdGVtcywgbmV3Q2l0ZSwgY2l0ZV9kZXNjKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IHNhdmVyKGh0bWxfaWQsIG5ld1Rlc3QsIGNpdGVfZGVzYyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0ZV91cmwnLCByZXN1bHQuaHRtbF91cmwpO1xuICAgICAgICBhd2FpdCBlbmRTYXZlKCk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNhdmUtb2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwic2F2ZS1ub3Qtb2tcIik7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImJsYWNrLXdoZWVsXCIpO1xuICAgICAgICBhd2FpdCBlbmRTYXZlKCk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNhdmUtbm90LW9rXCIpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJibGFjay13aGVlbFwiKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9