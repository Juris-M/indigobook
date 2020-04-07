(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/fieldlist.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/fieldlist.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table-display .label {\n    font-weight: bold;\n    text-align: right;\n}\n\n.table-display .label:after {\n    content: \": \";\n    text-align: left;\n\tfont-weight: bold;\n}\n\n.table-display .value {\n\tfont-weight: normal;\n}\n\n.spin-central {\n    text-align: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/react-spinner.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/react-spinner.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-spinner {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  top: 50%;\n  left: 50%;\n}\n\n.react-spinner_bar {\n  -webkit-animation: react-spinner_spin 1.2s linear infinite;\n  -moz-animation: react-spinner_spin 1.2s linear infinite;\n  animation: react-spinner_spin 1.2s linear infinite;\n  border-radius: 5px;\n  background-color: white;\n  position: absolute;\n  width: 20%;\n  height: 7.8%;\n  top: 46.1%;\n  left: 50%;\n}\n\n.black-wheel .react-spinner_bar {\n    background-color: black;\n}\n\n@keyframes react-spinner_spin {\n 0% { opacity: 1; }\n 100% { opacity: 0.15; }\n}\n\n@-moz-keyframes react-spinner_spin {\n 0% { opacity: 1; }\n 100% { opacity: 0.15; }\n}\n\n@-webkit-keyframes react-spinner_spin {\n 0% { opacity: 1; }\n 100% { opacity: 0.15; }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/displayer.js":
/*!**************************!*\
  !*** ./src/displayer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _err__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./err */ "./src/err.js");















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var urlStub = Object(_utils_js__WEBPACK_IMPORTED_MODULE_15__["urlParts"])().base;
var labelMaps = {};
var courtMap = {};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cslObj) {
    var offset, m, jurisdictionCode, countryCode, result, countryAbbrevs, court, lst, labelMap, ret, key, val, nameLabel, _iterator, _step, name;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            offset = null;

            if (cslObj.jurisdiction) {
              m = cslObj.jurisdiction.match(/^([0-9][0-9][0-9])/);

              if (m) {
                offset = parseInt(m[1]);
              }
            }

            if (!("legal_case" === cslObj.type && cslObj.jurisdiction && cslObj.authority)) {
              _context.next = 14;
              break;
            }

            if (!offset) {
              _context.next = 14;
              break;
            }

            jurisdictionCode = cslObj.jurisdiction.slice(3, 3 + offset);
            countryCode = jurisdictionCode.split(":")[0];

            if (courtMap[jurisdictionCode]) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_14___default()({
              method: "get",
              url: "".concat(urlStub, "/courtMaps/").concat(countryCode, ".json")
            }).catch(function (e) {
              return Object(_err__WEBPACK_IMPORTED_MODULE_16__["default"])(e);
            });

          case 9:
            result = _context.sent;
            courtMap[countryCode] = result.data;

          case 11:
            countryAbbrevs = courtMap[countryCode];
            court = countryAbbrevs[jurisdictionCode][cslObj.authority];

            if (court) {
              cslObj.authority = court;
            }

          case 14:
            if (offset) {
              lst = cslObj.jurisdiction.slice(offset + 3).split("|");

              if (lst.length == 2) {
                cslObj.jurisdiction = lst.join("|");
              } else {
                cslObj.jurisdiction = lst.slice(1).join("|");
              }
            } // Okay, great. We have a CSL JSON object with human-readable content.
            // Load the labels


            if (labelMaps[cslObj.type]) {
              _context.next = 20;
              break;
            }

            _context.next = 18;
            return axios__WEBPACK_IMPORTED_MODULE_14___default()({
              method: "get",
              url: "".concat(urlStub, "/labelMaps/").concat(cslObj.type, ".json")
            });

          case 18:
            result = _context.sent;
            labelMaps[cslObj.type] = result.data;

          case 20:
            labelMap = labelMaps[cslObj.type];
            ret = [];
            _context.t0 = regeneratorRuntime.keys(cslObj);

          case 23:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 31;
              break;
            }

            key = _context.t1.value;

            if (!("id" === key)) {
              _context.next = 27;
              break;
            }

            return _context.abrupt("continue", 23);

          case 27:
            val = cslObj[key];

            if ("object" === typeof val) {
              if ("undefined" === typeof val.length) {
                if (val["date-parts"] && val["date-parts"][0] && val["date-parts"][0][0]) {
                  val = val["date-parts"].map(function (date) {
                    return date.join("-");
                  }).join("/");
                } else if (val.literal) {
                  val = val.literal;
                }

                ret.push({
                  label: labelMap[key],
                  value: val
                });
              } else {
                nameLabel = labelMap[key];
                _iterator = _createForOfIteratorHelper(val);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    name = _step.value;
                    ret.push({
                      label: nameLabel,
                      value: [name.family, name.given].join(", ")
                    });
                    nameLabel = "";
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            } else if ("type" === key) {
              ret.push({
                label: "Item Type",
                value: labelMap[val]
              });
            } else {
              ret.push({
                label: labelMap[key],
                value: val
              });
            }

            _context.next = 23;
            break;

          case 31:
            return _context.abrupt("return", ret);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

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

/***/ "./src/fieldlist.css":
/*!***************************!*\
  !*** ./src/fieldlist.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./fieldlist.css */ "./node_modules/css-loader/dist/cjs.js?!./src/fieldlist.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/fieldlist.jsx":
/*!***************************!*\
  !*** ./src/fieldlist.jsx ***!
  \***************************/
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
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fieldlist_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fieldlist.css */ "./src/fieldlist.css");
/* harmony import */ var _fieldlist_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fieldlist_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _displayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./displayer.js */ "./src/displayer.js");
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-spinner */ "./node_modules/react-spinner/build/index.js");
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_spinner__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _react_spinner_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./react-spinner.css */ "./src/react-spinner.css");
/* harmony import */ var _react_spinner_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_react_spinner_css__WEBPACK_IMPORTED_MODULE_15__);











function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      listItems = _useState2[0],
      setListItems = _useState2[1];

  var getItems = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(function (data) {
    return setListItems(function (listItems) {
      return listItems = data;
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    var func = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var key, response, displayItem;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = props.id.slice(-8);
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_11___default()({
                  url: props.urlStub + 'itemdata/' + key + '.json'
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return Object(_displayer_js__WEBPACK_IMPORTED_MODULE_13__["default"])(response.data);

              case 6:
                displayItem = _context.sent;
                getItems(displayItem);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function func() {
        return _ref.apply(this, arguments);
      };
    }();

    func();
  }, []);

  if (listItems.length) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
      className: "table-display"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", null, listItems.map(function (info) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        key: info.label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        className: "label"
      }, info.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        className: "value"
      }, info.value));
    })));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_spinner__WEBPACK_IMPORTED_MODULE_14___default.a, null);
  }
});

/***/ }),

/***/ "./src/react-spinner.css":
/*!*******************************!*\
  !*** ./src/react-spinner.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./react-spinner.css */ "./node_modules/css-loader/dist/cjs.js?!./src/react-spinner.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Qtc3Bpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXJyLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZGxpc3QuY3NzP2Y5OGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LXNwaW5uZXIuY3NzP2NjMjUiXSwibmFtZXMiOlsidXJsU3R1YiIsInVybFBhcnRzIiwiYmFzZSIsImxhYmVsTWFwcyIsImNvdXJ0TWFwIiwiY3NsT2JqIiwib2Zmc2V0IiwianVyaXNkaWN0aW9uIiwibSIsIm1hdGNoIiwicGFyc2VJbnQiLCJ0eXBlIiwiYXV0aG9yaXR5IiwianVyaXNkaWN0aW9uQ29kZSIsInNsaWNlIiwiY291bnRyeUNvZGUiLCJzcGxpdCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiY2F0Y2giLCJlIiwiaGFuZGxlRXJyIiwicmVzdWx0IiwiZGF0YSIsImNvdW50cnlBYmJyZXZzIiwiY291cnQiLCJsc3QiLCJsZW5ndGgiLCJqb2luIiwibGFiZWxNYXAiLCJyZXQiLCJrZXkiLCJ2YWwiLCJtYXAiLCJkYXRlIiwibGl0ZXJhbCIsInB1c2giLCJsYWJlbCIsInZhbHVlIiwibmFtZUxhYmVsIiwibmFtZSIsImZhbWlseSIsImdpdmVuIiwiZXh0cmEiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInByb3BzIiwidXNlU3RhdGUiLCJsaXN0SXRlbXMiLCJzZXRMaXN0SXRlbXMiLCJnZXRJdGVtcyIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiZnVuYyIsImlkIiwicmVzcG9uc2UiLCJkaXNwbGF5ZXIiLCJkaXNwbGF5SXRlbSIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxtQkFBTyxDQUFDLHlGQUE4QjtBQUNqRCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUYsOEJBQThCLG1CQUFPLENBQUMsaUhBQTBDOztBQUVoRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxnRkFBZ0Y7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pCWTtBQUNiLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNDRDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDBCQUEwQix3QkFBd0Isd0JBQXdCLEdBQUcsaUNBQWlDLHNCQUFzQix1QkFBdUIsc0JBQXNCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLG1CQUFtQix5QkFBeUIsR0FBRztBQUNoVDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMx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dCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG4vLyBGRjQ5LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ21hdGNoJywgMSwgZnVuY3Rpb24gKE1BVENILCBuYXRpdmVNYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBtYXRjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICByZXR1cm4gbWF0Y2hlciAhPT0gdW5kZWZpbmVkID8gbWF0Y2hlci5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuXG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgbisrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICB9XG4gIF07XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGUtZGlzcGxheSAubGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50YWJsZS1kaXNwbGF5IC5sYWJlbDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCI6IFxcXCI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YWJsZS1kaXNwbGF5IC52YWx1ZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnNwaW4tY2VudHJhbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVhY3Qtc3Bpbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4ucmVhY3Qtc3Bpbm5lcl9iYXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJlYWN0LXNwaW5uZXJfc3BpbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIC1tb3otYW5pbWF0aW9uOiByZWFjdC1zcGlubmVyX3NwaW4gMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxuICBhbmltYXRpb246IHJlYWN0LXNwaW5uZXJfc3BpbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGhlaWdodDogNy44JTtcXG4gIHRvcDogNDYuMSU7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbi5ibGFjay13aGVlbCAucmVhY3Qtc3Bpbm5lcl9iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuQGtleWZyYW1lcyByZWFjdC1zcGlubmVyX3NwaW4ge1xcbiAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gMTAwJSB7IG9wYWNpdHk6IDAuMTU7IH1cXG59XFxuXFxuQC1tb3ota2V5ZnJhbWVzIHJlYWN0LXNwaW5uZXJfc3BpbiB7XFxuIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAxMDAlIHsgb3BhY2l0eTogMC4xNTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmVhY3Qtc3Bpbm5lcl9zcGluIHtcXG4gMCUgeyBvcGFjaXR5OiAxOyB9XFxuIDEwMCUgeyBvcGFjaXR5OiAwLjE1OyB9XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1cmxQYXJ0cyB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgaGFuZGxlRXJyIGZyb20gXCIuL2VyclwiO1xuXG52YXIgdXJsU3R1YiA9IHVybFBhcnRzKCkuYmFzZTtcblxudmFyIGxhYmVsTWFwcyA9IHt9O1xuXG52YXIgY291cnRNYXAgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChjc2xPYmopID0+IHtcbiAgICB2YXIgb2Zmc2V0ID0gbnVsbDtcbiAgICBpZiAoY3NsT2JqLmp1cmlzZGljdGlvbikge1xuICAgICAgICB2YXIgbSA9IGNzbE9iai5qdXJpc2RpY3Rpb24ubWF0Y2goL14oWzAtOV1bMC05XVswLTldKS8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwibGVnYWxfY2FzZVwiID09PSBjc2xPYmoudHlwZSAmJiBjc2xPYmouanVyaXNkaWN0aW9uICYmIGNzbE9iai5hdXRob3JpdHkpIHtcbiAgICAgICAgaWYgKG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIGp1cmlzZGljdGlvbkNvZGUgPSBjc2xPYmouanVyaXNkaWN0aW9uLnNsaWNlKDMsIDMrb2Zmc2V0KTtcbiAgICAgICAgICAgIHZhciBjb3VudHJ5Q29kZSA9IGp1cmlzZGljdGlvbkNvZGUuc3BsaXQoXCI6XCIpWzBdO1xuICAgICAgICAgICAgaWYgKCFjb3VydE1hcFtqdXJpc2RpY3Rpb25Db2RlXSkge1xuICAgICAgICAgICAgICAgIC8vIEZldGNoIGNvdXJ0TWFwIGZvciBqdXJpc2RpY3Rpb24gaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAke3VybFN0dWJ9L2NvdXJ0TWFwcy8ke2NvdW50cnlDb2RlfS5qc29uYFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiBoYW5kbGVFcnIoZSkpO1xuICAgICAgICAgICAgICAgIGNvdXJ0TWFwW2NvdW50cnlDb2RlXSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvdW50cnlBYmJyZXZzID0gY291cnRNYXBbY291bnRyeUNvZGVdO1xuICAgICAgICAgICAgdmFyIGNvdXJ0ID0gY291bnRyeUFiYnJldnNbanVyaXNkaWN0aW9uQ29kZV1bY3NsT2JqLmF1dGhvcml0eV07XG4gICAgICAgICAgICBpZiAoY291cnQpIHtcbiAgICAgICAgICAgICAgICBjc2xPYmouYXV0aG9yaXR5ID0gY291cnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9mZnNldCkge1xuICAgICAgICB2YXIgbHN0ID0gY3NsT2JqLmp1cmlzZGljdGlvbi5zbGljZShvZmZzZXQgKyAzKS5zcGxpdChcInxcIik7XG4gICAgICAgIGlmIChsc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgIGNzbE9iai5qdXJpc2RpY3Rpb24gPSBsc3Quam9pbihcInxcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc2xPYmouanVyaXNkaWN0aW9uID0gbHN0LnNsaWNlKDEpLmpvaW4oXCJ8XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gT2theSwgZ3JlYXQuIFdlIGhhdmUgYSBDU0wgSlNPTiBvYmplY3Qgd2l0aCBodW1hbi1yZWFkYWJsZSBjb250ZW50LlxuICAgIFxuICAgIC8vIExvYWQgdGhlIGxhYmVsc1xuICAgIGlmICghbGFiZWxNYXBzW2NzbE9iai50eXBlXSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgdXJsOiBgJHt1cmxTdHVifS9sYWJlbE1hcHMvJHtjc2xPYmoudHlwZX0uanNvbmBcbiAgICAgICAgfSk7XG4gICAgICAgIGxhYmVsTWFwc1tjc2xPYmoudHlwZV0gPSByZXN1bHQuZGF0YTtcbiAgICB9XG4gICAgdmFyIGxhYmVsTWFwID0gbGFiZWxNYXBzW2NzbE9iai50eXBlXTtcbiAgICBcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIGNzbE9iaikge1xuICAgICAgICBpZiAoXCJpZFwiID09PSBrZXkpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgdmFsID0gY3NsT2JqW2tleV07XG4gICAgICAgIGlmIChcIm9iamVjdFwiID09PSB0eXBlb2YgdmFsKSB7XG4gICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHZhbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsW1wiZGF0ZS1wYXJ0c1wiXSAmJiB2YWxbXCJkYXRlLXBhcnRzXCJdWzBdICYmIHZhbFtcImRhdGUtcGFydHNcIl1bMF1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHZhbFtcImRhdGUtcGFydHNcIl0ubWFwKGRhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuam9pbihcIi1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oXCIvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsLmxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLmxpdGVyYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsTWFwW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVMYWJlbCA9IGxhYmVsTWFwW2tleV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBvZiB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG5hbWVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbbmFtZS5mYW1pbHksIG5hbWUuZ2l2ZW5dLmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZUxhYmVsID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXCJ0eXBlXCIgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkl0ZW0gVHlwZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBsYWJlbE1hcFt2YWxdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxNYXBba2V5XSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKGUsIGV4dHJhKSA9PiB7XG4gICAgaWYgKGV4dHJhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX0gKCR7ZXh0cmF9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL2ZpZWxkbGlzdC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2t9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnLi9maWVsZGxpc3QuY3NzJztcbmltcG9ydCBkaXNwbGF5ZXIgZnJvbSBcIi4vZGlzcGxheWVyLmpzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3Qtc3Bpbm5lclwiO1xuXG5pbXBvcnQgJy4vcmVhY3Qtc3Bpbm5lci5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbbGlzdEl0ZW1zLCBzZXRMaXN0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGdldEl0ZW1zID0gdXNlQ2FsbGJhY2soKGRhdGEpID0+IHNldExpc3RJdGVtcygobGlzdEl0ZW1zKSA9PiBsaXN0SXRlbXMgPSBkYXRhKSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZhciBmdW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IHByb3BzLmlkLnNsaWNlKC04KTtcbiAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7IHVybDogcHJvcHMudXJsU3R1YiArICdpdGVtZGF0YS8nICsga2V5ICsgJy5qc29uJyB9KTtcbiAgICAgICAgICAvLyBNYWdpYyBoZXJlIHRvIHRyYW5zZm9ybSBDU0wga2V5L3ZhbCBvbiBpdGVtIHRvIGFycmF5IG9mIGxhYmVsICsgdmFsdWUgb2JqZWN0c1xuICAgICAgICAgIHZhciBkaXNwbGF5SXRlbSA9IGF3YWl0IGRpc3BsYXllcihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBnZXRJdGVtcyhkaXNwbGF5SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFtdKTtcbiAgICBpZiAobGlzdEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtcy5tYXAoaW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmZvLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGFiZWxcIj57aW5mby5sYWJlbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ2YWx1ZVwiPntpbmZvLnZhbHVlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxTcGlubmVyIC8+XG4gICAgfVxuICAgIFxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9yZWFjdC1zcGlubmVyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9