(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cslObj, params) {
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
            if (params.locator) {
              ret.push({
                label: "Locator",
                value: params.locator
              });
            }

            ret.push({
              label: "Position",
              value: positionMap[params.position]
            });

            if (params["suppress-author"]) {
              ret.push({
                label: "Suppress Author",
                value: "✓"
              });
            }

            return _context.abrupt("return", ret);

          case 35:
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
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _fieldlist_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fieldlist.css */ "./src/fieldlist.css");
/* harmony import */ var _fieldlist_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fieldlist_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _displayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./displayer.js */ "./src/displayer.js");
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-spinner */ "./node_modules/react-spinner/build/index.js");
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_spinner__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _react_spinner_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./react-spinner.css */ "./src/react-spinner.css");
/* harmony import */ var _react_spinner_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_react_spinner_css__WEBPACK_IMPORTED_MODULE_17__);












function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var urlStub = Object(_utils_js__WEBPACK_IMPORTED_MODULE_13__["urlParts"])().base;
var cache = {};
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      listItems = _useState2[0],
      setListItems = _useState2[1];

  var storeItems = Object(react__WEBPACK_IMPORTED_MODULE_11__["useCallback"])(function (data) {
    return setListItems(function (listItems) {
      return listItems = data;
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    var func = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var citationItems, items, _iterator, _step, itemInfo, response, item, displayItem;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                citationItems = props.citationInfo["citation-items"];
                items = [];
                _iterator = _createForOfIteratorHelper(citationItems);
                _context.prev = 3;

                _iterator.s();

              case 5:
                if ((_step = _iterator.n()).done) {
                  _context.next = 19;
                  break;
                }

                itemInfo = _step.value;

                if (!cache[itemInfo.id]) {
                  _context.next = 11;
                  break;
                }

                item = cache[itemInfo.id];
                _context.next = 16;
                break;

              case 11:
                _context.next = 13;
                return axios__WEBPACK_IMPORTED_MODULE_12___default()({
                  url: "".concat(urlStub, "itemdata/").concat(itemInfo.id, ".json")
                });

              case 13:
                response = _context.sent;
                item = response.data;
                cache[itemInfo.id] = item;

              case 16:
                items.push(item);

              case 17:
                _context.next = 5;
                break;

              case 19:
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](3);

                _iterator.e(_context.t0);

              case 24:
                _context.prev = 24;

                _iterator.f();

                return _context.finish(24);

              case 27:
                window.localStorage.setItem('cites_metadata', JSON.stringify(items));
                window.localStorage.setItem('cites_info', JSON.stringify(citationItems)); // Magic here to transform CSL key/val on item to array of label + value objects

                _context.next = 31;
                return Object(_displayer_js__WEBPACK_IMPORTED_MODULE_15__["default"])(items[0], citationItems[0]);

              case 31:
                displayItem = _context.sent;
                storeItems(displayItem);

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 21, 24, 27]]);
      }));

      return function func() {
        return _ref.apply(this, arguments);
      };
    }();

    func();
  }, []);

  if (listItems.length) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("table", {
      className: "table-display"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tbody", null, listItems.map(function (info) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", {
        key: info.label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
        className: "label"
      }, info.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
        className: "value"
      }, info.value));
    })));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_spinner__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: "black-wheel"
    });
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lcnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5jc3M/Zjk4YSIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmpzeCJdLCJuYW1lcyI6WyJ1cmxTdHViIiwidXJsUGFydHMiLCJiYXNlIiwicG9zaXRpb25NYXAiLCJsYWJlbE1hcHMiLCJjb3VydE1hcCIsImNzbE9iaiIsInBhcmFtcyIsIm9mZnNldCIsImp1cmlzZGljdGlvbiIsIm0iLCJtYXRjaCIsInBhcnNlSW50IiwidHlwZSIsImF1dGhvcml0eSIsImp1cmlzZGljdGlvbkNvZGUiLCJzbGljZSIsImNvdW50cnlDb2RlIiwic3BsaXQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImNhdGNoIiwiZSIsImhhbmRsZUVyciIsInJlc3VsdCIsImRhdGEiLCJjb3VudHJ5QWJicmV2cyIsImNvdXJ0IiwibHN0IiwibGVuZ3RoIiwiam9pbiIsImxhYmVsTWFwIiwicmV0Iiwia2V5IiwidmFsIiwibWFwIiwiZGF0ZSIsImxpdGVyYWwiLCJwdXNoIiwibGFiZWwiLCJ2YWx1ZSIsIm5hbWVMYWJlbCIsIm5hbWUiLCJmYW1pbHkiLCJnaXZlbiIsImxvY2F0b3IiLCJwb3NpdGlvbiIsImV4dHJhIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJjYWNoZSIsInByb3BzIiwidXNlU3RhdGUiLCJsaXN0SXRlbXMiLCJzZXRMaXN0SXRlbXMiLCJzdG9yZUl0ZW1zIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJmdW5jIiwiY2l0YXRpb25JdGVtcyIsImNpdGF0aW9uSW5mbyIsIml0ZW1zIiwiaXRlbUluZm8iLCJpZCIsIml0ZW0iLCJyZXNwb25zZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGlz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QztBQUFuQixNQUFQO0FBQ0g7QUFFSixDQTVDRCxFIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYmxlLWRpc3BsYXkgLmxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udGFibGUtZGlzcGxheSAubGFiZWw6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiOiBcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFibGUtZGlzcGxheSAudmFsdWUge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5zcGluLWNlbnRyYWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1cmxQYXJ0cyB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgaGFuZGxlRXJyIGZyb20gXCIuL2VyclwiO1xuXG52YXIgdXJsU3R1YiA9IHVybFBhcnRzKCkuYmFzZTtcblxudmFyIHBvc2l0aW9uTWFwID0ge1xuICAgIFwiMFwiOiBcIkZpcnN0IHJlZmVyZW5jZVwiLFxuICAgIFwiMVwiOiBcIlN1YnNlcXVlbnQgcmVmZXJlbmNlXCIsXG4gICAgXCIyXCI6IFwiSWQuIHJlZmVyZW5jZVwiLFxuICAgIFwiM1wiOiBcIklkLiByZWZlcmVuY2Ugd2l0aCBsb2NhdG9yXCJcbn07XG5cbnZhciBsYWJlbE1hcHMgPSB7fTtcblxudmFyIGNvdXJ0TWFwID0ge307XG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY3NsT2JqLCBwYXJhbXMpID0+IHtcbiAgICB2YXIgb2Zmc2V0ID0gbnVsbDtcbiAgICBpZiAoY3NsT2JqLmp1cmlzZGljdGlvbikge1xuICAgICAgICB2YXIgbSA9IGNzbE9iai5qdXJpc2RpY3Rpb24ubWF0Y2goL14oWzAtOV1bMC05XVswLTldKS8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwibGVnYWxfY2FzZVwiID09PSBjc2xPYmoudHlwZSAmJiBjc2xPYmouanVyaXNkaWN0aW9uICYmIGNzbE9iai5hdXRob3JpdHkpIHtcbiAgICAgICAgaWYgKG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIGp1cmlzZGljdGlvbkNvZGUgPSBjc2xPYmouanVyaXNkaWN0aW9uLnNsaWNlKDMsIDMrb2Zmc2V0KTtcbiAgICAgICAgICAgIHZhciBjb3VudHJ5Q29kZSA9IGp1cmlzZGljdGlvbkNvZGUuc3BsaXQoXCI6XCIpWzBdO1xuICAgICAgICAgICAgaWYgKCFjb3VydE1hcFtqdXJpc2RpY3Rpb25Db2RlXSkge1xuICAgICAgICAgICAgICAgIC8vIEZldGNoIGNvdXJ0TWFwIGZvciBqdXJpc2RpY3Rpb24gaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAke3VybFN0dWJ9L2NvdXJ0TWFwcy8ke2NvdW50cnlDb2RlfS5qc29uYFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiBoYW5kbGVFcnIoZSkpO1xuICAgICAgICAgICAgICAgIGNvdXJ0TWFwW2NvdW50cnlDb2RlXSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvdW50cnlBYmJyZXZzID0gY291cnRNYXBbY291bnRyeUNvZGVdO1xuICAgICAgICAgICAgdmFyIGNvdXJ0ID0gY291bnRyeUFiYnJldnNbanVyaXNkaWN0aW9uQ29kZV1bY3NsT2JqLmF1dGhvcml0eV07XG4gICAgICAgICAgICBpZiAoY291cnQpIHtcbiAgICAgICAgICAgICAgICBjc2xPYmouYXV0aG9yaXR5ID0gY291cnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9mZnNldCkge1xuICAgICAgICB2YXIgbHN0ID0gY3NsT2JqLmp1cmlzZGljdGlvbi5zbGljZShvZmZzZXQgKyAzKS5zcGxpdChcInxcIik7XG4gICAgICAgIGlmIChsc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgIGNzbE9iai5qdXJpc2RpY3Rpb24gPSBsc3Quam9pbihcInxcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc2xPYmouanVyaXNkaWN0aW9uID0gbHN0LnNsaWNlKDEpLmpvaW4oXCJ8XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gT2theSwgZ3JlYXQuIFdlIGhhdmUgYSBDU0wgSlNPTiBvYmplY3Qgd2l0aCBodW1hbi1yZWFkYWJsZSBjb250ZW50LlxuICAgIFxuICAgIC8vIExvYWQgdGhlIGxhYmVsc1xuICAgIGlmICghbGFiZWxNYXBzW2NzbE9iai50eXBlXSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgdXJsOiBgJHt1cmxTdHVifS9sYWJlbE1hcHMvJHtjc2xPYmoudHlwZX0uanNvbmBcbiAgICAgICAgfSk7XG4gICAgICAgIGxhYmVsTWFwc1tjc2xPYmoudHlwZV0gPSByZXN1bHQuZGF0YTtcbiAgICB9XG4gICAgdmFyIGxhYmVsTWFwID0gbGFiZWxNYXBzW2NzbE9iai50eXBlXTtcbiAgICBcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIGNzbE9iaikge1xuICAgICAgICBpZiAoXCJpZFwiID09PSBrZXkpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgdmFsID0gY3NsT2JqW2tleV07XG4gICAgICAgIGlmIChcIm9iamVjdFwiID09PSB0eXBlb2YgdmFsKSB7XG4gICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHZhbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsW1wiZGF0ZS1wYXJ0c1wiXSAmJiB2YWxbXCJkYXRlLXBhcnRzXCJdWzBdICYmIHZhbFtcImRhdGUtcGFydHNcIl1bMF1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHZhbFtcImRhdGUtcGFydHNcIl0ubWFwKGRhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuam9pbihcIi1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oXCIvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsLmxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLmxpdGVyYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsTWFwW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVMYWJlbCA9IGxhYmVsTWFwW2tleV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBvZiB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG5hbWVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbbmFtZS5mYW1pbHksIG5hbWUuZ2l2ZW5dLmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZUxhYmVsID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXCJ0eXBlXCIgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkl0ZW0gVHlwZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBsYWJlbE1hcFt2YWxdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxNYXBba2V5XSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvY2F0b3IpIHtcbiAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IFwiTG9jYXRvclwiLFxuICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5sb2NhdG9yXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXQucHVzaCh7XG4gICAgICAgIGxhYmVsOiBcIlBvc2l0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBwb3NpdGlvbk1hcFtwYXJhbXMucG9zaXRpb25dXG4gICAgfSk7XG4gICAgaWYgKHBhcmFtc1tcInN1cHByZXNzLWF1dGhvclwiXSkge1xuICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogXCJTdXBwcmVzcyBBdXRob3JcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIuKck1wiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKGUsIGV4dHJhKSA9PiB7XG4gICAgaWYgKGV4dHJhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX0gKCR7ZXh0cmF9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL2ZpZWxkbGlzdC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2t9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVybFBhcnRzIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcbmltcG9ydCAnLi9maWVsZGxpc3QuY3NzJztcbmltcG9ydCBkaXNwbGF5ZXIgZnJvbSBcIi4vZGlzcGxheWVyLmpzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3Qtc3Bpbm5lclwiO1xuXG5pbXBvcnQgJy4vcmVhY3Qtc3Bpbm5lci5jc3MnO1xuXG52YXIgdXJsU3R1YiA9IHVybFBhcnRzKCkuYmFzZTtcblxudmFyIGNhY2hlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtsaXN0SXRlbXMsIHNldExpc3RJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgc3RvcmVJdGVtcyA9IHVzZUNhbGxiYWNrKChkYXRhKSA9PiBzZXRMaXN0SXRlbXMoKGxpc3RJdGVtcykgPT4gbGlzdEl0ZW1zID0gZGF0YSksIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgZnVuYyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHZhciBjaXRhdGlvbkl0ZW1zID0gcHJvcHMuY2l0YXRpb25JbmZvW1wiY2l0YXRpb24taXRlbXNcIl07XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW1JbmZvIG9mIGNpdGF0aW9uSXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVbaXRlbUluZm8uaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBjYWNoZVtpdGVtSW5mby5pZF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoeyB1cmw6IGAke3VybFN0dWJ9aXRlbWRhdGEvJHtpdGVtSW5mby5pZH0uanNvbmAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVbaXRlbUluZm8uaWRdID0gaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0ZXNfbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRlc19pbmZvJywgSlNPTi5zdHJpbmdpZnkoY2l0YXRpb25JdGVtcykpO1xuICAgICAgICAgICAgLy8gTWFnaWMgaGVyZSB0byB0cmFuc2Zvcm0gQ1NMIGtleS92YWwgb24gaXRlbSB0byBhcnJheSBvZiBsYWJlbCArIHZhbHVlIG9iamVjdHNcbiAgICAgICAgICAgIHZhciBkaXNwbGF5SXRlbSA9IGF3YWl0IGRpc3BsYXllcihpdGVtc1swXSwgY2l0YXRpb25JdGVtc1swXSk7XG4gICAgICAgICAgICBzdG9yZUl0ZW1zKGRpc3BsYXlJdGVtKTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFtdKTtcbiAgICBpZiAobGlzdEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtcy5tYXAoaW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmZvLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGFiZWxcIj57aW5mby5sYWJlbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ2YWx1ZVwiPntpbmZvLnZhbHVlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxTcGlubmVyIGNsYXNzTmFtZT1cImJsYWNrLXdoZWVsXCIvPlxuICAgIH1cbiAgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=