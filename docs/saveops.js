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
  var keysArray = JSON.stringify(items.map(function (o) {
    return o.id;
  }), null, 2);
  var paramsArray = JSON.stringify(params, null, 2);
  var itemsArray = JSON.stringify(items, null, 2);
  return "\n>>===== MODE =====>>\ncitation\n<<===== MODE =====<<\n\n>>===== KEYS =====>>\n".concat(keysArray, "\n<<===== KEYS =====<<\n\n>>===== DESCRIPTION =====>>\n").concat(comment, "\n<<===== DESCRIPTION =====<<\n\n>>===== RESULT =====>>\n").concat(newCite, "\n<<===== RESULT =====<<\n\n>>===== CITATION-ITEMS =====>>\n[\n").concat(paramsArray, "\n]\n<<===== CITATION-ITEMS =====<<\n\n>>===== INPUT =====>>\n").concat(itemsArray, "\n<<===== INPUT =====<<\n").trim();
};

/* harmony default export */ __webpack_exports__["default"] = (composer);

/***/ }),

/***/ "./src/saveops.js":
/*!************************!*\
  !*** ./src/saveops.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _saver_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./saver.js */ "./src/saver.js");
/* harmony import */ var _composer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./composer.js */ "./src/composer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _err__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./err */ "./src/err.js");









function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var urlStub = Object(_utils_js__WEBPACK_IMPORTED_MODULE_11__["urlParts"])().base;
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(startSave, endSave) {
    var cite_id, elem, realID, cite_text, editor, newCite, comment, result, item, m, offset, items, params, newTest;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return startSave();

          case 2:
            cite_id = window.localStorage.getItem('cite_id');
            elem = document.getElementById("save-button");
            realID = cite_id.slice(1);
            cite_text = window.localStorage.getItem('cite_text');
            editor = document.getElementById("editor");
            newCite = editor.content.innerHTML.replace(/\<u\>/g, "<span class=\"small-caps\">").replace(/\<\/u\>/g, "</span>");
            comment = document.getElementById("modal-comment").value;

            if (!(newCite !== cite_text)) {
              _context.next = 27;
              break;
            }

            elem.classList.add("save-ok");
            _context.next = 13;
            return axios__WEBPACK_IMPORTED_MODULE_10___default()({
              method: "get",
              url: "".concat(urlStub, "/itemdata/").concat(realID, ".json")
            }).catch(function (e) {
              return Object(_err__WEBPACK_IMPORTED_MODULE_12__["default"])(e);
            });

          case 13:
            result = _context.sent;
            item = result.data;

            if (item.jurisdiction) {
              m = item.jurisdiction.match(/^([0-9]{3})/);

              if (m) {
                offset = parseInt(m[1]);
                item.jurisdiction = item.jurisdiction.slice(3, 3 + offset);
              }
            }

            items = [result.data];
            params = {
              id: "".concat(realID)
            };
            newTest = Object(_composer_js__WEBPACK_IMPORTED_MODULE_9__["default"])(items, params, newCite, comment);
            _context.next = 21;
            return Object(_saver_js__WEBPACK_IMPORTED_MODULE_8__["saver"])(cite_id, newTest, comment);

          case 21:
            result = _context.sent;
            _context.next = 24;
            return endSave(result.html_url);

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

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdmVvcHMuanMiXSwibmFtZXMiOlsiY29tcG9zZXIiLCJpdGVtcyIsInBhcmFtcyIsIm5ld0NpdGUiLCJjb21tZW50Iiwia2V5c0FycmF5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hcCIsIm8iLCJpZCIsInBhcmFtc0FycmF5IiwiaXRlbXNBcnJheSIsInRyaW0iLCJ1cmxTdHViIiwidXJsUGFydHMiLCJiYXNlIiwic3RhcnRTYXZlIiwiZW5kU2F2ZSIsImNpdGVfaWQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZWFsSUQiLCJzbGljZSIsImNpdGVfdGV4dCIsImVkaXRvciIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImNhdGNoIiwiZSIsImhhbmRsZUVyciIsInJlc3VsdCIsIml0ZW0iLCJkYXRhIiwianVyaXNkaWN0aW9uIiwibSIsIm1hdGNoIiwib2Zmc2V0IiwicGFyc2VJbnQiLCJuZXdUZXN0Iiwic2F2ZXIiLCJodG1sX3VybCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWSxtQkFBTyxDQUFDLHFF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LE1BQWYsQ0FBc0IsU0FBdEI7QUFoQ087QUFBQTs7QUFBQTtBQWtDUDlCLGdCQUFJLENBQUNXLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjtBQUNBWixnQkFBSSxDQUFDVyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsYUFBbkI7QUFuQ087QUFBQSxtQkFvQ0RqQixPQUFPLEVBcENOOztBQUFBO0FBcUNQSyxnQkFBSSxDQUFDVyxTQUFMLENBQWVtQixNQUFmLENBQXNCLGFBQXRCO0FBQ0E5QixnQkFBSSxDQUFDVyxTQUFMLENBQWVtQixNQUFmLENBQXNCLGFBQXRCOztBQXRDTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLE0iLCJmaWxlIjoic2F2ZW9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gIH0pO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iLCJjb25zdCBjb21wb3NlciA9IChpdGVtcywgcGFyYW1zLCBuZXdDaXRlLCBjb21tZW50KSA9PiB7XG4gICAgdmFyIGtleXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zLm1hcCgobykgPT4gby5pZCksIG51bGwsIDIpO1xuICAgIHZhciBwYXJhbXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gICAgdmFyIGl0ZW1zQXJyYXkgPSBKU09OLnN0cmluZ2lmeShpdGVtcywgbnVsbCwgMik7XG4gICAgcmV0dXJuIGBcbj4+PT09PT0gTU9ERSA9PT09PT4+XG5jaXRhdGlvblxuPDw9PT09PSBNT0RFID09PT09PDxcblxuPj49PT09PSBLRVlTID09PT09Pj5cbiR7a2V5c0FycmF5fVxuPDw9PT09PSBLRVlTID09PT09PDxcblxuPj49PT09PSBERVNDUklQVElPTiA9PT09PT4+XG4ke2NvbW1lbnR9XG48PD09PT09IERFU0NSSVBUSU9OID09PT09PDxcblxuPj49PT09PSBSRVNVTFQgPT09PT0+PlxuJHtuZXdDaXRlfVxuPDw9PT09PSBSRVNVTFQgPT09PT08PFxuXG4+Pj09PT09IENJVEFUSU9OLUlURU1TID09PT09Pj5cbltcbiR7cGFyYW1zQXJyYXl9XG5dXG48PD09PT09IENJVEFUSU9OLUlURU1TID09PT09PDxcblxuPj49PT09PSBJTlBVVCA9PT09PT4+XG4ke2l0ZW1zQXJyYXl9XG48PD09PT09IElOUFVUID09PT09PDxcbmAudHJpbSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlcjtcbiIsImltcG9ydCB7IHNhdmVyIH0gZnJvbSBcIi4vc2F2ZXIuanNcIjtcbmltcG9ydCBjb21wb3NlciBmcm9tIFwiLi9jb21wb3Nlci5qc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXJsUGFydHMgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuaW1wb3J0IGhhbmRsZUVyciBmcm9tIFwiLi9lcnJcIjtcblxudmFyIHVybFN0dWIgPSB1cmxQYXJ0cygpLmJhc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChzdGFydFNhdmUsIGVuZFNhdmUpID0+IHtcbiAgICBhd2FpdCBzdGFydFNhdmUoKTtcbiAgICB2YXIgY2l0ZV9pZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0ZV9pZCcpO1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlLWJ1dHRvblwiKTtcbiAgICB2YXIgcmVhbElEID0gY2l0ZV9pZC5zbGljZSgxKTtcbiAgICB2YXIgY2l0ZV90ZXh0ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRlX3RleHQnKTtcbiAgICB2YXIgZWRpdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0b3JcIik7XG4gICAgdmFyIG5ld0NpdGUgPSBlZGl0b3IuY29udGVudC5pbm5lckhUTUxcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXDx1XFw+L2csIFwiPHNwYW4gY2xhc3M9XFxcInNtYWxsLWNhcHNcXFwiPlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcPFxcL3VcXD4vZywgXCI8L3NwYW4+XCIpO1xuICAgIHZhciBjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb21tZW50XCIpLnZhbHVlO1xuICAgIGlmIChuZXdDaXRlICE9PSBjaXRlX3RleHQpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwic2F2ZS1va1wiKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgIHVybDogYCR7dXJsU3R1Yn0vaXRlbWRhdGEvJHtyZWFsSUR9Lmpzb25gXG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiBoYW5kbGVFcnIoZSkpO1xuICAgICAgICB2YXIgaXRlbSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICBpZiAoaXRlbS5qdXJpc2RpY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBtID0gaXRlbS5qdXJpc2RpY3Rpb24ubWF0Y2goL14oWzAtOV17M30pLyk7XG4gICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChtWzFdKTtcbiAgICAgICAgICAgICAgICBpdGVtLmp1cmlzZGljdGlvbiA9IGl0ZW0uanVyaXNkaWN0aW9uLnNsaWNlKDMsIDMgKyBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtcyA9IFtyZXN1bHQuZGF0YV07XG4gICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICBpZDogYCR7cmVhbElEfWBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG5ld1Rlc3QgPSBjb21wb3NlcihpdGVtcywgcGFyYW1zLCBuZXdDaXRlLCBjb21tZW50KTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IHNhdmVyKGNpdGVfaWQsIG5ld1Rlc3QsIGNvbW1lbnQpO1xuICAgICAgICBhd2FpdCBlbmRTYXZlKHJlc3VsdC5odG1sX3VybCk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNhdmUtb2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwic2F2ZS1ub3Qtb2tcIik7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImJsYWNrLXdoZWVsXCIpO1xuICAgICAgICBhd2FpdCBlbmRTYXZlKCk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNhdmUtbm90LW9rXCIpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJibGFjay13aGVlbFwiKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9