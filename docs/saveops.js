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
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _saver_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./saver.js */ "./src/saver.js");
/* harmony import */ var _composer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./composer.js */ "./src/composer.js");
/* harmony import */ var _err__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./err */ "./src/err.js");














function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




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
            } // Need also to strip out extraneous inline garbage added by Word.
            // (basically everything but small-caps)


            newCite = editor.content.innerHTML.replace(/\<u\>/g, "<span class=\"small-caps\">").replace(/<\/u>/g, "</span>").replace(/<\/?div[^>]*>/g, "").replace(/<\/?p[^>]*>/g, "").replace(/\<br\/*\>/g, "").trim();

            if (!cite_desc) {
              cite_desc = document.getElementById("modal-comment").value;
            }

            citation_items = [];

            if (!(newCite !== citation)) {
              _context.next = 27;
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

            newTest = Object(_composer_js__WEBPACK_IMPORTED_MODULE_14__["default"])(items, citationItems, newCite, cite_desc);
            _context.next = 20;
            return Object(_saver_js__WEBPACK_IMPORTED_MODULE_13__["saver"])(html_id, newTest, cite_desc);

          case 20:
            result = _context.sent;
            window.localStorage.setItem('cite_url', result.html_url);
            _context.next = 24;
            return endSave();

          case 24:
            elem.classList.remove("save-ok");
            _context.next = 33;
            break;

          case 27:
            elem.classList.add("save-not-ok");
            elem.classList.add("black-wheel");
            _context.next = 31;
            return endSave();

          case 31:
            elem.classList.remove("save-not-ok");
            elem.classList.remove("black-wheel");

          case 33:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vyci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZW9wcy5qcyJdLCJuYW1lcyI6WyJjb21wb3NlciIsIml0ZW1zIiwicGFyYW1zIiwibmV3Q2l0ZSIsImNvbW1lbnQiLCJrZXlzQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwibyIsImlkIiwicGFyYW1zQXJyYXkiLCJpdGVtc0FycmF5IiwidHJpbSIsImUiLCJleHRyYSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY2l0YXRpb25JbmZvIiwic3RhcnRTYXZlIiwiZW5kU2F2ZSIsImh0bWxfaWQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaXRhdGlvbiIsImNpdGVfZGVzYyIsImVkaXRvciIsInN0eWxlTm9kZXMiLCJjb250ZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwibGVuZ3RoIiwicmVtb3ZlQ2hpbGQiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwidmFsdWUiLCJjaXRhdGlvbl9pdGVtcyIsImNsYXNzTGlzdCIsImFkZCIsImNpdGF0aW9uSXRlbXMiLCJwYXJzZSIsIml0ZW0iLCJqdXJpc2RpY3Rpb24iLCJtIiwibWF0Y2giLCJvZmZzZXQiLCJwYXJzZUludCIsInNsaWNlIiwibmV3VGVzdCIsInNhdmVyIiwicmVzdWx0Iiwic2V0SXRlbSIsImh0bWxfdXJsIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDWEEsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixnREFBZ0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVksbUJBQU8sQ0FBQyxpRkFBMEI7QUFDOUMsNkJBQTZCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsR0FBRyx3RUFBd0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxPQUFoQixFQUF5QkMsT0FBekIsRUFBcUM7QUFDbEQsTUFBSSxDQUFDSCxLQUFMLEVBQVk7QUFDUkEsU0FBSyxHQUFHLEVBQVI7QUFDQUMsVUFBTSxHQUFHLEVBQVQ7QUFDSDs7QUFDRCxNQUFJRyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFD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LENBQUNnQixTQUFMLENBQWVnQixNQUFmLENBQXNCLFNBQXRCO0FBckRPO0FBQUE7O0FBQUE7QUF1RFBoQyxnQkFBSSxDQUFDZ0IsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CO0FBQ0FqQixnQkFBSSxDQUFDZ0IsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CO0FBeERPO0FBQUEsbUJBeUREdEIsT0FBTyxFQXpETjs7QUFBQTtBQTBEUEssZ0JBQUksQ0FBQ2dCLFNBQUwsQ0FBZWdCLE1BQWYsQ0FBc0IsYUFBdEI7QUFDQWhDLGdCQUFJLENBQUNnQixTQUFMLENBQWVnQixNQUFmLENBQXNCLGFBQXRCOztBQTNETztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLE0iLCJmaWxlIjoic2F2ZW9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gIH0pO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iLCJjb25zdCBjb21wb3NlciA9IChpdGVtcywgcGFyYW1zLCBuZXdDaXRlLCBjb21tZW50KSA9PiB7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICBpdGVtcyA9IFtdO1xuICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICB9XG4gICAgdmFyIGtleXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zLm1hcCgobykgPT4gby5pZCksIG51bGwsIDIpO1xuICAgIHZhciBwYXJhbXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KFtwYXJhbXNdLCBudWxsLCAyKTtcbiAgICB2YXIgaXRlbXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zLCBudWxsLCAyKTtcbiAgICByZXR1cm4gYFxuPj49PT09PSBNT0RFID09PT09Pj5cbmNpdGF0aW9uXG48PD09PT09IE1PREUgPT09PT08PFxuXG4+Pj09PT09IE9QVElPTlMgPT09PT0+Plxue1xuICAgIFwid3JhcF91cmxfYW5kX2RvaVwiOiB0cnVlXG59XG48PD09PT09IE9QVElPTlMgPT09PT08PFxuXG4+Pj09PT09IEtFWVMgPT09PT0+PlxuJHtrZXlzQXJyYXl9XG48PD09PT09IEtFWVMgPT09PT08PFxuXG4+Pj09PT09IERFU0NSSVBUSU9OID09PT09Pj5cbiR7Y29tbWVudH1cbjw8PT09PT0gREVTQ1JJUFRJT04gPT09PT08PFxuXG4+Pj09PT09IFJFU1VMVCA9PT09PT4+XG4ke25ld0NpdGV9XG48PD09PT09IFJFU1VMVCA9PT09PTw8XG5cbj4+PT09PT0gQ0lUQVRJT04tSVRFTVMgPT09PT0+PlxuJHtwYXJhbXNBcnJheX1cbjw8PT09PT0gQ0lUQVRJT04tSVRFTVMgPT09PT08PFxuXG4+Pj09PT09IElOUFVUID09PT09Pj5cbiR7aXRlbXNBcnJheX1cbjw8PT09PT0gSU5QVVQgPT09PT08PFxuYC50cmltKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2VyO1xuIiwiZXhwb3J0IGRlZmF1bHQgKGUsIGV4dHJhKSA9PiB7XG4gICAgaWYgKGV4dHJhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX0gKCR7ZXh0cmF9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzYXZlciB9IGZyb20gXCIuL3NhdmVyLmpzXCI7XG5pbXBvcnQgY29tcG9zZXIgZnJvbSBcIi4vY29tcG9zZXIuanNcIjtcbmltcG9ydCBoYW5kbGVFcnIgZnJvbSBcIi4vZXJyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChjaXRhdGlvbkluZm8sIHN0YXJ0U2F2ZSwgZW5kU2F2ZSkgPT4ge1xuICAgIGF3YWl0IHN0YXJ0U2F2ZSgpO1xuXG4gICAgdmFyIGh0bWxfaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2h0bWxfaWQnKTtcbiAgICBcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZS1idXR0b25cIik7XG4gICAgXG4gICAgLy8gT2theS4gSGVyZSBpcyB3aGVyZSBvdXIgc2F2ZWQgdmFsdWVzIGNvbWUgaW50byBwbGF5P1xuXG4gICAgLy8gTkI6IGNpdGF0aW9uIGlzIGVpdGhlciB0aGUgZG9jdW1lbnQgZXhhbXBsZSBvciB0aGUgdXNlcidzIHB1bGwgcmVxdWVzdCBwcm9wb3NhbFxuICAgIHZhciBjaXRhdGlvbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0YXRpb24nKTtcbiAgICAvLyBOQjogY2l0ZV9kZXNjIHdpbGwgZXhpc3Qgb25seSBpZiB1c2VyIGhhcyBhbiBhY3RpdmUgcHVsbCByZXF1ZXN0XG4gICAgdmFyIGNpdGVfZGVzYyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0ZV9kZXNjJyk7XG4gICAgXG4gICAgdmFyIGVkaXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdG9yXCIpO1xuXG4gICAgdmFyIHN0eWxlTm9kZXMgPSBlZGl0b3IuY29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuICAgIGZvciAodmFyIGk9c3R5bGVOb2Rlcy5sZW5ndGgtMTsgaT4tMTsgaS0tKSB7XG4gICAgICAgIGVkaXRvci5jb250ZW50LnJlbW92ZUNoaWxkKHN0eWxlTm9kZXNbaV0pO1xuICAgIH1cbiAgICAvLyBOZWVkIGFsc28gdG8gc3RyaXAgb3V0IGV4dHJhbmVvdXMgaW5saW5lIGdhcmJhZ2UgYWRkZWQgYnkgV29yZC5cbiAgICAvLyAoYmFzaWNhbGx5IGV2ZXJ5dGhpbmcgYnV0IHNtYWxsLWNhcHMpXG4gICAgdmFyIG5ld0NpdGUgPSBlZGl0b3IuY29udGVudC5pbm5lckhUTUxcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXDx1XFw+L2csIFwiPHNwYW4gY2xhc3M9XFxcInNtYWxsLWNhcHNcXFwiPlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzxcXC91Pi9nLCBcIjwvc3Bhbj5cIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC88XFwvP2RpdltePl0qPi9nLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzxcXC8/cFtePl0qPi9nLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcPGJyXFwvKlxcPi9nLCBcIlwiKVxuICAgICAgICAgICAgLnRyaW0oKTtcbiAgICBpZiAoIWNpdGVfZGVzYykge1xuICAgICAgICBjaXRlX2Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbW1lbnRcIikudmFsdWU7XG4gICAgfVxuICAgIHZhciBjaXRhdGlvbl9pdGVtcyA9IFtdO1xuICAgIGlmIChuZXdDaXRlICE9PSBjaXRhdGlvbikge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJzYXZlLW9rXCIpO1xuICAgICAgICB2YXIgY2l0YXRpb25JdGVtcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0ZXNfaW5mb1wiKSk7XG4gICAgICAgIHZhciBpdGVtcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGVzX21ldGFkYXRhXCIpO1xuICAgICAgICBpZiAoISFpdGVtcykge1xuICAgICAgICAgICAgaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zKTtcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5qdXJpc2RpY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBpdGVtLmp1cmlzZGljdGlvbi5tYXRjaCgvXihbMC05XXszfSlbYS16XS8pXG4gICAgICAgICAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5qdXJpc2RpY3Rpb24gPSBpdGVtLmp1cmlzZGljdGlvbi5zbGljZSgzLCAoMytvZmZzZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3VGVzdCA9IGNvbXBvc2VyKGl0ZW1zLCBjaXRhdGlvbkl0ZW1zLCBuZXdDaXRlLCBjaXRlX2Rlc2MpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgc2F2ZXIoaHRtbF9pZCwgbmV3VGVzdCwgY2l0ZV9kZXNjKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRlX3VybCcsIHJlc3VsdC5odG1sX3VybCk7XG4gICAgICAgIGF3YWl0IGVuZFNhdmUoKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2F2ZS1va1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJzYXZlLW5vdC1va1wiKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYmxhY2std2hlZWxcIik7XG4gICAgICAgIGF3YWl0IGVuZFNhdmUoKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2F2ZS1ub3Qtb2tcIik7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImJsYWNrLXdoZWVsXCIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=