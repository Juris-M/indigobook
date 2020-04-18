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
  var paramsArray = JSON.stringify([params], null, 2);
  var itemsArray = JSON.stringify(items, null, 2);
  return "\n>>===== MODE =====>>\ncitation\n<<===== MODE =====<<\n\n>>===== KEYS =====>>\n".concat(keysArray, "\n<<===== KEYS =====<<\n\n>>===== DESCRIPTION =====>>\n").concat(comment, "\n<<===== DESCRIPTION =====<<\n\n>>===== RESULT =====>>\n").concat(newCite, "\n<<===== RESULT =====<<\n\n>>===== CITATION-ITEMS =====>>\n[\n").concat(paramsArray, "\n]\n<<===== CITATION-ITEMS =====<<\n\n>>===== INPUT =====>>\n").concat(itemsArray, "\n<<===== INPUT =====<<\n").trim();
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
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _saver_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./saver.js */ "./src/saver.js");
/* harmony import */ var _composer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./composer.js */ "./src/composer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _err__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./err */ "./src/err.js");










function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var urlStub = Object(_utils_js__WEBPACK_IMPORTED_MODULE_12__["urlParts"])().base;
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, startSave, endSave) {
    var test_id, item_key, elem, citation, cite_desc, editor, newCite, result, item, m, offset, items, newTest;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return startSave();

          case 2:
            test_id = window.localStorage.getItem('test_id');
            item_key = test_id.split("-")[1];
            elem = document.getElementById("save-button"); // Okay. Here is where our saved values come into play?
            // NB: citation is either the document example or the user's pull request proposal

            citation = window.localStorage.getItem('citation'); // NB: cite_desc will exist only if user has an active pull request

            cite_desc = window.localStorage.getItem('cite_desc');
            editor = document.getElementById("editor");
            newCite = editor.content.innerHTML.replace(/\<u\>/g, "<span class=\"small-caps\">").replace(/\<\/u\>/g, "</span>");

            if (!cite_desc) {
              cite_desc = document.getElementById("modal-comment").value;
            }

            if (!(newCite !== citation)) {
              _context.next = 27;
              break;
            }

            elem.classList.add("save-ok");
            _context.next = 14;
            return axios__WEBPACK_IMPORTED_MODULE_11___default()({
              method: "get",
              url: "".concat(urlStub, "/itemdata/").concat(item_key, ".json")
            }).catch(function (e) {
              return Object(_err__WEBPACK_IMPORTED_MODULE_13__["default"])(e);
            });

          case 14:
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
            newTest = Object(_composer_js__WEBPACK_IMPORTED_MODULE_10__["default"])(items, params, newCite, cite_desc);
            _context.next = 21;
            return Object(_saver_js__WEBPACK_IMPORTED_MODULE_9__["saver"])(test_id, newTest, cite_desc);

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

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vyci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZW9wcy5qcyJdLCJuYW1lcyI6WyJjb21wb3NlciIsIml0ZW1zIiwicGFyYW1zIiwibmV3Q2l0ZSIsImNvbW1lbnQiLCJrZXlzQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwibyIsImlkIiwicGFyYW1zQXJyYXkiLCJpdGVtc0FycmF5IiwidHJpbSIsImUiLCJleHRyYSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwidXJsU3R1YiIsInVybFBhcnRzIiwiYmFzZSIsInN0YXJ0U2F2ZSIsImVuZFNhdmUiLCJ0ZXN0X2lkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW1fa2V5Iiwic3BsaXQiLCJlbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNpdGF0aW9uIiwiY2l0ZV9kZXNjIiwiZWRpdG9yIiwiY29udGVudCIsImlubmVySFRNTCIsInJlcGxhY2UiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiY2F0Y2giLCJoYW5kbGVFcnIiLCJyZXN1bHQiLCJpdGVtIiwiZGF0YSIsImp1cmlzZGljdGlvbiIsIm0iLCJtYXRjaCIsIm9mZnNldCIsInBhcnNlSW50Iiwic2xpY2UiLCJu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TCxHQUFvQkYsSUFBSSxDQUFDRSxZQUFMLENBQWtCSyxLQUFsQixDQUF3QixDQUF4QixFQUEyQixJQUFJRixNQUEvQixDQUFwQjtBQUNIO0FBQ0o7O0FBQ0dwRCxpQkFsQ0csR0FrQ0ssQ0FBQzhDLE1BQU0sQ0FBQ0UsSUFBUixDQWxDTDtBQW1DSE8sbUJBbkNHLEdBbUNPeEQsNkRBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxPQUFoQixFQUF5QitCLFNBQXpCLENBbkNmO0FBQUE7QUFBQSxtQkFvQ1l1Qix1REFBSyxDQUFDakMsT0FBRCxFQUFVZ0MsT0FBVixFQUFtQnRCLFNBQW5CLENBcENqQjs7QUFBQTtBQW9DSGEsa0JBcENHO0FBQUE7QUFBQSxtQkFxQ0R4QixPQUFPLENBQUN3QixNQUFNLENBQUNXLFFBQVIsQ0FyQ047O0FBQUE7QUFzQ1A1QixnQkFBSSxDQUFDVSxTQUFMLENBQWVtQixNQUFmLENBQXNCLFNBQXRCO0FBdENPO0FBQUE7O0FBQUE7QUF3Q1A3QixnQkFBSSxDQUFDVSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsYUFBbkI7QUFDQVgsZ0JBQUksQ0FBQ1UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CO0FBekNPO0FBQUEsbUJBMENEbEIsT0FBTyxFQTFDTjs7QUFBQTtBQTJDUE8sZ0JBQUksQ0FBQ1UsU0FBTCxDQUFlbUIsTUFBZixDQUFzQixhQUF0QjtBQUNBN0IsZ0JBQUksQ0FBQ1UsU0FBTCxDQUFlbUIsTUFBZixDQUFzQixhQUF0Qjs7QUE1Q087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNIiwiZmlsZSI6InNhdmVvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPSBub24gfHwgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FO1xuICB9KTtcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gIH1cbn0pO1xuIiwiY29uc3QgY29tcG9zZXIgPSAoaXRlbXMsIHBhcmFtcywgbmV3Q2l0ZSwgY29tbWVudCkgPT4ge1xuICAgIHZhciBrZXlzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShpdGVtcy5tYXAoKG8pID0+IG8uaWQpLCBudWxsLCAyKTtcbiAgICB2YXIgcGFyYW1zQXJyYXkgPSBKU09OLnN0cmluZ2lmeShbcGFyYW1zXSwgbnVsbCwgMik7XG4gICAgdmFyIGl0ZW1zQXJyYXkgPSBKU09OLnN0cmluZ2lmeShpdGVtcywgbnVsbCwgMik7XG4gICAgcmV0dXJuIGBcbj4+PT09PT0gTU9ERSA9PT09PT4+XG5jaXRhdGlvblxuPDw9PT09PSBNT0RFID09PT09PDxcblxuPj49PT09PSBLRVlTID09PT09Pj5cbiR7a2V5c0FycmF5fVxuPDw9PT09PSBLRVlTID09PT09PDxcblxuPj49PT09PSBERVNDUklQVElPTiA9PT09PT4+XG4ke2NvbW1lbnR9XG48PD09PT09IERFU0NSSVBUSU9OID09PT09PDxcblxuPj49PT09PSBSRVNVTFQgPT09PT0+PlxuJHtuZXdDaXRlfVxuPDw9PT09PSBSRVNVTFQgPT09PT08PFxuXG4+Pj09PT09IENJVEFUSU9OLUlURU1TID09PT09Pj5cbltcbiR7cGFyYW1zQXJyYXl9XG5dXG48PD09PT09IENJVEFUSU9OLUlURU1TID09PT09PDxcblxuPj49PT09PSBJTlBVVCA9PT09PT4+XG4ke2l0ZW1zQXJyYXl9XG48PD09PT09IElOUFVUID09PT09PDxcbmAudHJpbSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlcjtcbiIsImV4cG9ydCBkZWZhdWx0IChlLCBleHRyYSkgPT4ge1xuICAgIGlmIChleHRyYSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQXhpb3MgZmFpbDogJHtlLm1lc3NhZ2V9ICgke2V4dHJhfSlgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgQXhpb3MgZmFpbDogJHtlLm1lc3NhZ2V9YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc2F2ZXIgfSBmcm9tIFwiLi9zYXZlci5qc1wiO1xuaW1wb3J0IGNvbXBvc2VyIGZyb20gXCIuL2NvbXBvc2VyLmpzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1cmxQYXJ0cyB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgaGFuZGxlRXJyIGZyb20gXCIuL2VyclwiO1xuXG52YXIgdXJsU3R1YiA9IHVybFBhcnRzKCkuYmFzZTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHBhcmFtcywgc3RhcnRTYXZlLCBlbmRTYXZlKSA9PiB7XG4gICAgYXdhaXQgc3RhcnRTYXZlKCk7XG4gICAgdmFyIHRlc3RfaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3RfaWQnKTtcbiAgICB2YXIgaXRlbV9rZXkgPSB0ZXN0X2lkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZS1idXR0b25cIik7XG4gICAgXG4gICAgLy8gT2theS4gSGVyZSBpcyB3aGVyZSBvdXIgc2F2ZWQgdmFsdWVzIGNvbWUgaW50byBwbGF5P1xuXG4gICAgLy8gTkI6IGNpdGF0aW9uIGlzIGVpdGhlciB0aGUgZG9jdW1lbnQgZXhhbXBsZSBvciB0aGUgdXNlcidzIHB1bGwgcmVxdWVzdCBwcm9wb3NhbFxuICAgIHZhciBjaXRhdGlvbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0YXRpb24nKTtcbiAgICAvLyBOQjogY2l0ZV9kZXNjIHdpbGwgZXhpc3Qgb25seSBpZiB1c2VyIGhhcyBhbiBhY3RpdmUgcHVsbCByZXF1ZXN0XG4gICAgdmFyIGNpdGVfZGVzYyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0ZV9kZXNjJyk7XG4gICAgXG4gICAgdmFyIGVkaXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdG9yXCIpO1xuICAgIHZhciBuZXdDaXRlID0gZWRpdG9yLmNvbnRlbnQuaW5uZXJIVE1MXG4gICAgICAgICAgICAucmVwbGFjZSgvXFw8dVxcPi9nLCBcIjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1jYXBzXFxcIj5cIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXDxcXC91XFw+L2csIFwiPC9zcGFuPlwiKTtcbiAgICBpZiAoIWNpdGVfZGVzYykge1xuICAgICAgICBjaXRlX2Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbW1lbnRcIikudmFsdWU7XG4gICAgfVxuICAgIGlmIChuZXdDaXRlICE9PSBjaXRhdGlvbikge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJzYXZlLW9rXCIpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgdXJsOiBgJHt1cmxTdHVifS9pdGVtZGF0YS8ke2l0ZW1fa2V5fS5qc29uYFxuICAgICAgICB9KS5jYXRjaCgoZSkgPT4gaGFuZGxlRXJyKGUpKTtcbiAgICAgICAgdmFyIGl0ZW0gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgaWYgKGl0ZW0uanVyaXNkaWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbSA9IGl0ZW0uanVyaXNkaWN0aW9uLm1hdGNoKC9eKFswLTldezN9KS8pO1xuICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5qdXJpc2RpY3Rpb24gPSBpdGVtLmp1cmlzZGljdGlvbi5zbGljZSgzLCAzICsgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaXRlbXMgPSBbcmVzdWx0LmRhdGFdO1xuICAgICAgICB2YXIgbmV3VGVzdCA9IGNvbXBvc2VyKGl0ZW1zLCBwYXJhbXMsIG5ld0NpdGUsIGNpdGVfZGVzYyk7XG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBzYXZlcih0ZXN0X2lkLCBuZXdUZXN0LCBjaXRlX2Rlc2MpO1xuICAgICAgICBhd2FpdCBlbmRTYXZlKHJlc3VsdC5odG1sX3VybCk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNhdmUtb2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwic2F2ZS1ub3Qtb2tcIik7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImJsYWNrLXdoZWVsXCIpO1xuICAgICAgICBhd2FpdCBlbmRTYXZlKCk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNhdmUtbm90LW9rXCIpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJibGFjay13aGVlbFwiKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9