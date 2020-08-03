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





var fixWeirdSpans = function fixWeirdSpans(node, parent) {
  console.log("in fixWeirdSpans OK");

  if (node.nodeType === 1) {
    console.log("nodeType is 1 OK");

    if (node.tagName === "span") {
      console.log("node tagName is span OK");
      var hasSmallCaps = false;
      var attr = node.getAttribute("style");

      if (attr) {
        hasSmallCaps = attr.indexOf("small-caps") > -1;
      }

      if (hasSmallCaps) {
        console.log("found small caps!");
        node.setAttribute("style", "font-variant: small-caps:");
      } else {
        var cloneOfNode = node.cloneNode(true);

        for (var i = 0, ilen = cloneOfNode.childNodes.length; i < ilen; i++) {
          node.insertBefore(cloneOfNode.childNodes[i], node);
        }

        parent.removeChild(node);
        node = cloneOfNode.childNodes[0];
      }
    }

    for (var i = 0, ilen = node.childNodes.length; i < ilen; i++) {
      fixWeirdSpans(node.childNodes[i], node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vyci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZW9wcy5qcyJdLCJuYW1lcyI6WyJjb21wb3NlciIsIml0ZW1zIiwicGFyYW1zIiwibmV3Q2l0ZSIsImNvbW1lbnQiLCJrZXlzQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwibyIsImlkIiwicGFyYW1zQXJyYXkiLCJpdGVtc0FycmF5IiwidHJpbSIsImUiLCJleHRyYSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZml4V2VpcmRTcGFucyIsIm5vZGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsInRhZ05hbWUiLCJoYXNTbWFsbENhcHMiLCJhdHRyIiwiZ2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInNldEF0dHJpYnV0ZSIsImNsb25lT2ZOb2RlIiwiY2xvbmVOb2RlIiwiaSIsImlsZW4iLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwiaW5zZXJ0QmVmb3JlIiwicmVtb3ZlQ2hpbGQiLCJjaXRhdGlvbkluZm8iLCJzdGFydFNhdmUiLCJlbmRTYXZlIiwiaHRtbF9pZCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNpdGF0aW9uIiwiY2l0ZV9kZXNjIiwiZWRpdG9yIiwic3R5bGVOb2RlcyIsImNvbnRlbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNoaWxkIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsInZhbHVlIiwiY2l0YXRpb25faXRlbXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaXRhdGlvbkl0ZW1zIiwicGFyc2UiLCJpdGVtIiwianVyaXNkaWN0aW9uIiwibSIsIm1hdGNoIiwib2Zmc2V0IiwicGFyc2VJbnQiLCJzbGljZSIsIm5ld1Rlc3QiLCJzYXZlciIsInJlc3VsdCIsInNldEl0ZW0iLCJodG1sX3VybCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1hBLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsZ0RBQWdEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLG1CQUFPLENBQUMsaUZBQTBCO0FBQzlDLDZCQUE2QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFdEU7QUFDQTtBQUNBLEdBQUcsd0VBQXdFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hELElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsT0FBaEIsRUFBeUJD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QUFMLENBQWVnQixNQUFmLENBQXNCLGFBQXRCO0FBQ0E5QixnQkFBSSxDQUFDYyxTQUFMLENBQWVnQixNQUFmLENBQXNCLGFBQXRCOztBQWpFTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLE0iLCJmaWxlIjoic2F2ZW9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gIH0pO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iLCJjb25zdCBjb21wb3NlciA9IChpdGVtcywgcGFyYW1zLCBuZXdDaXRlLCBjb21tZW50KSA9PiB7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgICBpdGVtcyA9IFtdO1xuICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICB9XG4gICAgdmFyIGtleXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zLm1hcCgobykgPT4gby5pZCksIG51bGwsIDIpO1xuICAgIHZhciBwYXJhbXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KFtwYXJhbXNdLCBudWxsLCAyKTtcbiAgICB2YXIgaXRlbXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zLCBudWxsLCAyKTtcbiAgICByZXR1cm4gYFxuPj49PT09PSBNT0RFID09PT09Pj5cbmNpdGF0aW9uXG48PD09PT09IE1PREUgPT09PT08PFxuXG4+Pj09PT09IE9QVElPTlMgPT09PT0+Plxue1xuICAgIFwid3JhcF91cmxfYW5kX2RvaVwiOiB0cnVlXG59XG48PD09PT09IE9QVElPTlMgPT09PT08PFxuXG4+Pj09PT09IEtFWVMgPT09PT0+PlxuJHtrZXlzQXJyYXl9XG48PD09PT09IEtFWVMgPT09PT08PFxuXG4+Pj09PT09IERFU0NSSVBUSU9OID09PT09Pj5cbiR7Y29tbWVudH1cbjw8PT09PT0gREVTQ1JJUFRJT04gPT09PT08PFxuXG4+Pj09PT09IFJFU1VMVCA9PT09PT4+XG4ke25ld0NpdGV9XG48PD09PT09IFJFU1VMVCA9PT09PTw8XG5cbj4+PT09PT0gQ0lUQVRJT04tSVRFTVMgPT09PT0+PlxuJHtwYXJhbXNBcnJheX1cbjw8PT09PT0gQ0lUQVRJT04tSVRFTVMgPT09PT08PFxuXG4+Pj09PT09IElOUFVUID09PT09Pj5cbiR7aXRlbXNBcnJheX1cbjw8PT09PT0gSU5QVVQgPT09PT08PFxuYC50cmltKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2VyO1xuIiwiZXhwb3J0IGRlZmF1bHQgKGUsIGV4dHJhKSA9PiB7XG4gICAgaWYgKGV4dHJhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX0gKCR7ZXh0cmF9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzYXZlciB9IGZyb20gXCIuL3NhdmVyLmpzXCI7XG5pbXBvcnQgY29tcG9zZXIgZnJvbSBcIi4vY29tcG9zZXIuanNcIjtcbmltcG9ydCBoYW5kbGVFcnIgZnJvbSBcIi4vZXJyXCI7XG5cbmNvbnN0IGZpeFdlaXJkU3BhbnMgPSAobm9kZSwgcGFyZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coYGluIGZpeFdlaXJkU3BhbnMgT0tgKTtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbm9kZVR5cGUgaXMgMSBPS2ApO1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSBcInNwYW5cIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYG5vZGUgdGFnTmFtZSBpcyBzcGFuIE9LYCk7XG4gICAgICAgICAgICB2YXIgaGFzU21hbGxDYXBzID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IG5vZGUuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICAgICAgICBpZiAoYXR0cikge1xuICAgICAgICAgICAgICAgIGhhc1NtYWxsQ2FwcyA9IGF0dHIuaW5kZXhPZihcInNtYWxsLWNhcHNcIikgPiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNTbWFsbENhcHMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZm91bmQgc21hbGwgY2FwcyFgKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZm9udC12YXJpYW50OiBzbWFsbC1jYXBzOlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsb25lT2ZOb2RlID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wLCBpbGVuPWNsb25lT2ZOb2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpPGlsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShjbG9uZU9mTm9kZS5jaGlsZE5vZGVzW2ldLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBjbG9uZU9mTm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGk9MCxpbGVuPW5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGk8aWxlbjsgaSsrKSB7XG4gICAgICAgICAgICBmaXhXZWlyZFNwYW5zKG5vZGUuY2hpbGROb2Rlc1tpXSwgbm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChjaXRhdGlvbkluZm8sIHN0YXJ0U2F2ZSwgZW5kU2F2ZSkgPT4ge1xuICAgIGF3YWl0IHN0YXJ0U2F2ZSgpO1xuXG4gICAgdmFyIGh0bWxfaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2h0bWxfaWQnKTtcbiAgICBcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZS1idXR0b25cIik7XG4gICAgXG4gICAgLy8gT2theS4gSGVyZSBpcyB3aGVyZSBvdXIgc2F2ZWQgdmFsdWVzIGNvbWUgaW50byBwbGF5P1xuXG4gICAgLy8gTkI6IGNpdGF0aW9uIGlzIGVpdGhlciB0aGUgZG9jdW1lbnQgZXhhbXBsZSBvciB0aGUgdXNlcidzIHB1bGwgcmVxdWVzdCBwcm9wb3NhbFxuICAgIHZhciBjaXRhdGlvbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0YXRpb24nKTtcbiAgICAvLyBOQjogY2l0ZV9kZXNjIHdpbGwgZXhpc3Qgb25seSBpZiB1c2VyIGhhcyBhbiBhY3RpdmUgcHVsbCByZXF1ZXN0XG4gICAgdmFyIGNpdGVfZGVzYyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0ZV9kZXNjJyk7XG4gICAgXG4gICAgdmFyIGVkaXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdG9yXCIpO1xuXG4gICAgdmFyIHN0eWxlTm9kZXMgPSBlZGl0b3IuY29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuICAgIGZvciAodmFyIGk9c3R5bGVOb2Rlcy5sZW5ndGgtMTsgaT4tMTsgaS0tKSB7XG4gICAgICAgIGVkaXRvci5jb250ZW50LnJlbW92ZUNoaWxkKHN0eWxlTm9kZXNbaV0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgQmVmb3JlIGZpeFdlaXJkU3BhbnMgbG9vcGApO1xuICAgIGZvciAodmFyIGk9MCxpbGVuPWVkaXRvci5jb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpPGlsZW47IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBlZGl0b3IuY29udGVudC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICBjb25zb2xlLmxvZyhgdG9wLWxldmVsIHJ1biBvZiBmaXhXZWlyZFNwYW5zIGZvciBpbmRleCAke2l9YCk7XG4gICAgICAgIGZpeFdlaXJkU3BhbnMoY2hpbGQsIGVkaXRvci5jb250ZW50KTtcbiAgICB9XG4gICAgLy8gTmVlZCBhbHNvIHRvIHN0cmlwIG91dCBleHRyYW5lb3VzIGlubGluZSBnYXJiYWdlIGFkZGVkIGJ5IFdvcmQuXG4gICAgLy8gKGJhc2ljYWxseSBldmVyeXRoaW5nIGJ1dCBzbWFsbC1jYXBzKVxuICAgIHZhciBuZXdDaXRlID0gZWRpdG9yLmNvbnRlbnQuaW5uZXJIVE1MXG4gICAgICAgICAgICAucmVwbGFjZSgvXFw8dVxcPi9nLCBcIjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1jYXBzXFxcIj5cIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC88XFwvdT4vZywgXCI8L3NwYW4+XCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvPFxcLz9kaXZbXj5dKj4vZywgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC88XFwvP3BbXj5dKj4vZywgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXDxiclxcLypcXD4vZywgXCJcIilcbiAgICAgICAgICAgIC50cmltKCk7XG4gICAgaWYgKCFjaXRlX2Rlc2MpIHtcbiAgICAgICAgY2l0ZV9kZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb21tZW50XCIpLnZhbHVlO1xuICAgIH1cbiAgICB2YXIgY2l0YXRpb25faXRlbXMgPSBbXTtcbiAgICBpZiAobmV3Q2l0ZSAhPT0gY2l0YXRpb24pIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwic2F2ZS1va1wiKTtcbiAgICAgICAgdmFyIGNpdGF0aW9uSXRlbXMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGVzX2luZm9cIikpO1xuICAgICAgICB2YXIgaXRlbXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRlc19tZXRhZGF0YVwiKTtcbiAgICAgICAgaWYgKCEhaXRlbXMpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gSlNPTi5wYXJzZShpdGVtcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uanVyaXNkaWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gaXRlbS5qdXJpc2RpY3Rpb24ubWF0Y2goL14oWzAtOV17M30pW2Etel0vKVxuICAgICAgICAgICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KG1bMV0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uanVyaXNkaWN0aW9uID0gaXRlbS5qdXJpc2RpY3Rpb24uc2xpY2UoMywgKDMrb2Zmc2V0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld1Rlc3QgPSBjb21wb3NlcihpdGVtcywgY2l0YXRpb25JdGVtcywgbmV3Q2l0ZSwgY2l0ZV9kZXNjKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IHNhdmVyKGh0bWxfaWQsIG5ld1Rlc3QsIGNpdGVfZGVzYyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0ZV91cmwnLCByZXN1bHQuaHRtbF91cmwpO1xuICAgICAgICBhd2FpdCBlbmRTYXZlKCk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNhdmUtb2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwic2F2ZS1ub3Qtb2tcIik7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImJsYWNrLXdoZWVsXCIpO1xuICAgICAgICBhd2FpdCBlbmRTYXZlKCk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNhdmUtbm90LW9rXCIpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJibGFjay13aGVlbFwiKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9