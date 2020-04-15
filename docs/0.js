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
var positionMap = {
  "0": "First reference",
  "1": "Subsequent reference",
  "2": "Id. reference",
  "3": "Id. reference with locator"
};
var labelMaps = {};
var courtMap = {};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cslObj, locator, position) {
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
            if (locator) {
              ret.push({
                label: "Locator",
                value: locator
              });
            }

            ret.push({
              label: "Position",
              value: positionMap[position]
            });
            return _context.abrupt("return", ret);

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
        var response, displayItem;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_11___default()({
                  url: props.urlStub + 'itemdata/' + props.params.id + '.json'
                });

              case 2:
                response = _context.sent;
                _context.next = 5;
                return Object(_displayer_js__WEBPACK_IMPORTED_MODULE_13__["default"])(response.data, props.params.locator, props.params.position);

              case 5:
                displayItem = _context.sent;
                getItems(displayItem);

              case 7:
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lcnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5jc3M/Zjk4YSIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmpzeCJdLCJuYW1lcyI6WyJ1cmxTdHViIiwidXJsUGFydHMiLCJiYXNlIiwicG9zaXRpb25NYXAiLCJsYWJlbE1hcHMiLCJjb3VydE1hcCIsImNzbE9iaiIsImxvY2F0b3IiLCJwb3NpdGlvbiIsIm9mZnNldCIsImp1cmlzZGljdGlvbiIsIm0iLCJtYXRjaCIsInBhcnNlSW50IiwidHlwZSIsImF1dGhvcml0eSIsImp1cmlzZGljdGlvbkNvZGUiLCJzbGljZSIsImNvdW50cnlDb2RlIiwic3BsaXQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImNhdGNoIiwiZSIsImhhbmRsZUVyciIsInJlc3VsdCIsImRhdGEiLCJjb3VudHJ5QWJicmV2cyIsImNvdXJ0IiwibHN0IiwibGVuZ3RoIiwiam9pbiIsImxhYmVsTWFwIiwicmV0Iiwia2V5IiwidmFsIiwibWFwIiwiZGF0ZSIsImxpdGVyYWwiLCJwdXNoIiwibGFiZWwiLCJ2YWx1ZSIsIm5hbWVMYWJlbCIsIm5hbWUiLCJmYW1pbHkiLCJnaXZlbiIsImV4dHJhIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwibGlzdEl0ZW1zIiwic2V0TGlzdEl0ZW1zIiwiZ2V0SXRlbXMiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImZ1bmMiLCJwYXJhbXMiLCJpZCIsInJlc3BvbnNlIiwiZGlzcGxheWVyIiwiZGlzcGxheUl0ZW0iLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFD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SSxXQUFHLEVBQUVBLElBQUksQ0FBQ3ZCO0FBQWQsc0JBQ0k7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBdUJ1QixJQUFJLENBQUN2QixLQUE1QixDQURKLGVBRUk7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBdUJ1QixJQUFJLENBQUN0QixLQUE1QixDQUZKLENBREo7QUFNSCxLQVBELENBRkMsQ0FERixDQUFQO0FBY0gsR0FmRCxNQWVPO0FBQ0gsd0JBQU8sNERBQUMscURBQUQsT0FBUDtBQUNIO0FBRUosQ0EvQkQsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuLy8gRkY0OS0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGUtZGlzcGxheSAubGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50YWJsZS1kaXNwbGF5IC5sYWJlbDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCI6IFxcXCI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YWJsZS1kaXNwbGF5IC52YWx1ZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnNwaW4tY2VudHJhbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVybFBhcnRzIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcbmltcG9ydCBoYW5kbGVFcnIgZnJvbSBcIi4vZXJyXCI7XG5cbnZhciB1cmxTdHViID0gdXJsUGFydHMoKS5iYXNlO1xuXG52YXIgcG9zaXRpb25NYXAgPSB7XG4gICAgXCIwXCI6IFwiRmlyc3QgcmVmZXJlbmNlXCIsXG4gICAgXCIxXCI6IFwiU3Vic2VxdWVudCByZWZlcmVuY2VcIixcbiAgICBcIjJcIjogXCJJZC4gcmVmZXJlbmNlXCIsXG4gICAgXCIzXCI6IFwiSWQuIHJlZmVyZW5jZSB3aXRoIGxvY2F0b3JcIlxufTtcblxudmFyIGxhYmVsTWFwcyA9IHt9O1xuXG52YXIgY291cnRNYXAgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChjc2xPYmosIGxvY2F0b3IsIHBvc2l0aW9uKSA9PiB7XG4gICAgdmFyIG9mZnNldCA9IG51bGw7XG4gICAgaWYgKGNzbE9iai5qdXJpc2RpY3Rpb24pIHtcbiAgICAgICAgdmFyIG0gPSBjc2xPYmouanVyaXNkaWN0aW9uLm1hdGNoKC9eKFswLTldWzAtOV1bMC05XSkvKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHBhcnNlSW50KG1bMV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcImxlZ2FsX2Nhc2VcIiA9PT0gY3NsT2JqLnR5cGUgJiYgY3NsT2JqLmp1cmlzZGljdGlvbiAmJiBjc2xPYmouYXV0aG9yaXR5KSB7XG4gICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICAgIHZhciBqdXJpc2RpY3Rpb25Db2RlID0gY3NsT2JqLmp1cmlzZGljdGlvbi5zbGljZSgzLCAzK29mZnNldCk7XG4gICAgICAgICAgICB2YXIgY291bnRyeUNvZGUgPSBqdXJpc2RpY3Rpb25Db2RlLnNwbGl0KFwiOlwiKVswXTtcbiAgICAgICAgICAgIGlmICghY291cnRNYXBbanVyaXNkaWN0aW9uQ29kZV0pIHtcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBjb3VydE1hcCBmb3IganVyaXNkaWN0aW9uIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHt1cmxTdHVifS9jb3VydE1hcHMvJHtjb3VudHJ5Q29kZX0uanNvbmBcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4gaGFuZGxlRXJyKGUpKTtcbiAgICAgICAgICAgICAgICBjb3VydE1hcFtjb3VudHJ5Q29kZV0gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb3VudHJ5QWJicmV2cyA9IGNvdXJ0TWFwW2NvdW50cnlDb2RlXTtcbiAgICAgICAgICAgIHZhciBjb3VydCA9IGNvdW50cnlBYmJyZXZzW2p1cmlzZGljdGlvbkNvZGVdW2NzbE9iai5hdXRob3JpdHldO1xuICAgICAgICAgICAgaWYgKGNvdXJ0KSB7XG4gICAgICAgICAgICAgICAgY3NsT2JqLmF1dGhvcml0eSA9IGNvdXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgdmFyIGxzdCA9IGNzbE9iai5qdXJpc2RpY3Rpb24uc2xpY2Uob2Zmc2V0ICsgMykuc3BsaXQoXCJ8XCIpO1xuICAgICAgICBpZiAobHN0Lmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBjc2xPYmouanVyaXNkaWN0aW9uID0gbHN0LmpvaW4oXCJ8XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NsT2JqLmp1cmlzZGljdGlvbiA9IGxzdC5zbGljZSgxKS5qb2luKFwifFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9rYXksIGdyZWF0LiBXZSBoYXZlIGEgQ1NMIEpTT04gb2JqZWN0IHdpdGggaHVtYW4tcmVhZGFibGUgY29udGVudC5cbiAgICBcbiAgICAvLyBMb2FkIHRoZSBsYWJlbHNcbiAgICBpZiAoIWxhYmVsTWFwc1tjc2xPYmoudHlwZV0pIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgIHVybDogYCR7dXJsU3R1Yn0vbGFiZWxNYXBzLyR7Y3NsT2JqLnR5cGV9Lmpzb25gXG4gICAgICAgIH0pO1xuICAgICAgICBsYWJlbE1hcHNbY3NsT2JqLnR5cGVdID0gcmVzdWx0LmRhdGE7XG4gICAgfVxuICAgIHZhciBsYWJlbE1hcCA9IGxhYmVsTWFwc1tjc2xPYmoudHlwZV07XG4gICAgXG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBjc2xPYmopIHtcbiAgICAgICAgaWYgKFwiaWRcIiA9PT0ga2V5KSBjb250aW51ZTtcbiAgICAgICAgdmFyIHZhbCA9IGNzbE9ialtrZXldO1xuICAgICAgICBpZiAoXCJvYmplY3RcIiA9PT0gdHlwZW9mIHZhbCkge1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB2YWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbFtcImRhdGUtcGFydHNcIl0gJiYgdmFsW1wiZGF0ZS1wYXJ0c1wiXVswXSAmJiB2YWxbXCJkYXRlLXBhcnRzXCJdWzBdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB2YWxbXCJkYXRlLXBhcnRzXCJdLm1hcChkYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmpvaW4oXCItXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKFwiL1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbC5saXRlcmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5saXRlcmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbE1hcFtrZXldLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lTGFiZWwgPSBsYWJlbE1hcFtrZXldO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWUgb2YgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBuYW1lTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW25hbWUuZmFtaWx5LCBuYW1lLmdpdmVuXS5qb2luKFwiLCBcIilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVMYWJlbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFwidHlwZVwiID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJJdGVtIFR5cGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogbGFiZWxNYXBbdmFsXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsTWFwW2tleV0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxvY2F0b3IpIHtcbiAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IFwiTG9jYXRvclwiLFxuICAgICAgICAgICAgdmFsdWU6IGxvY2F0b3JcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldC5wdXNoKHtcbiAgICAgICAgbGFiZWw6IFwiUG9zaXRpb25cIixcbiAgICAgICAgdmFsdWU6IHBvc2l0aW9uTWFwW3Bvc2l0aW9uXVxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoZSwgZXh0cmEpID0+IHtcbiAgICBpZiAoZXh0cmEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEF4aW9zIGZhaWw6ICR7ZS5tZXNzYWdlfSAoJHtleHRyYX0pYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYEF4aW9zIGZhaWw6ICR7ZS5tZXNzYWdlfWApO1xuICAgIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vZmllbGRsaXN0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICcuL2ZpZWxkbGlzdC5jc3MnO1xuaW1wb3J0IGRpc3BsYXllciBmcm9tIFwiLi9kaXNwbGF5ZXIuanNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1zcGlubmVyXCI7XG5cbmltcG9ydCAnLi9yZWFjdC1zcGlubmVyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtsaXN0SXRlbXMsIHNldExpc3RJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgZ2V0SXRlbXMgPSB1c2VDYWxsYmFjaygoZGF0YSkgPT4gc2V0TGlzdEl0ZW1zKChsaXN0SXRlbXMpID0+IGxpc3RJdGVtcyA9IGRhdGEpLCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmFyIGZ1bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7IHVybDogcHJvcHMudXJsU3R1YiArICdpdGVtZGF0YS8nICsgcHJvcHMucGFyYW1zLmlkICsgJy5qc29uJyB9KTtcbiAgICAgICAgICAgIC8vIE1hZ2ljIGhlcmUgdG8gdHJhbnNmb3JtIENTTCBrZXkvdmFsIG9uIGl0ZW0gdG8gYXJyYXkgb2YgbGFiZWwgKyB2YWx1ZSBvYmplY3RzXG4gICAgICAgICAgICB2YXIgZGlzcGxheUl0ZW0gPSBhd2FpdCBkaXNwbGF5ZXIocmVzcG9uc2UuZGF0YSwgcHJvcHMucGFyYW1zLmxvY2F0b3IsIHByb3BzLnBhcmFtcy5wb3NpdGlvbik7XG4gICAgICAgICAgICBnZXRJdGVtcyhkaXNwbGF5SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFtdKTtcbiAgICBpZiAobGlzdEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtcy5tYXAoaW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmZvLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGFiZWxcIj57aW5mby5sYWJlbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ2YWx1ZVwiPntpbmZvLnZhbHVlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxTcGlubmVyIC8+XG4gICAgfVxuICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==