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
            } else if ("admin-flag" === key || "gazette-flag" === key) {
              ret.push({
                label: labelMap[key],
                value: "✓"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lcnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5jc3M/Zjk4YSIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmpzeCJdLCJuYW1lcyI6WyJ1cmxTdHViIiwidXJsUGFydHMiLCJiYXNlIiwicG9zaXRpb25NYXAiLCJsYWJlbE1hcHMiLCJjb3VydE1hcCIsImNzbE9iaiIsInBhcmFtcyIsIm9mZnNldCIsImp1cmlzZGljdGlvbiIsIm0iLCJtYXRjaCIsInBhcnNlSW50IiwidHlwZSIsImF1dGhvcml0eSIsImp1cmlzZGljdGlvbkNvZGUiLCJzbGljZSIsImNvdW50cnlDb2RlIiwic3BsaXQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImNhdGNoIiwiZSIsImhhbmRsZUVyciIsInJlc3VsdCIsImRhdGEiLCJjb3VudHJ5QWJicmV2cyIsImNvdXJ0IiwibHN0IiwibGVuZ3RoIiwiam9pbiIsImxhYmVsTWFwIiwicmV0Iiwia2V5IiwidmFsIiwibWFwIiwiZGF0ZSIsImxpdGVyYWwiLCJwdXNoIiwibGFiZWwiLCJ2YWx1ZSIsIm5hbWVMYWJlbCIsIm5hbWUiLCJmYW1pbHkiLCJnaXZlbiIsImxvY2F0b3IiLCJwb3NpdGlvbiIsImV4dHJhIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJjYWNoZSIsInByb3BzIiwidXNlU3RhdGUiLCJsaXN0SXRlbXMiLCJzZXRMaXN0SXRlbXMiLCJzdG9yZUl0ZW1zIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJmdW5jIiwiY2l0YXRpb25JdGVtcyIsImNpdGF0aW9uSW5mbyIsIml0ZW1zIiwiaXRlbUluZm8iLCJpZCIsIml0ZW0iLCJyZXNwb25zZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGlz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QUFDbkMsS0FBNUIsQ0FESixlQUVJO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQXVCbUMsSUFBSSxDQUFDbEMsS0FBNUIsQ0FGSixDQURKO0FBTUgsS0FQRCxDQUZDLENBREYsQ0FBUDtBQWNILEdBZkQsTUFlTztBQUNILHdCQUFPLDREQUFDLHFEQUFEO0FBQVMsZUFBUyxFQUFDO0FBQW5CLE1BQVA7QUFDSDtBQUVKLENBNUNELEUiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGUtZGlzcGxheSAubGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50YWJsZS1kaXNwbGF5IC5sYWJlbDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCI6IFxcXCI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YWJsZS1kaXNwbGF5IC52YWx1ZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnNwaW4tY2VudHJhbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVybFBhcnRzIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcbmltcG9ydCBoYW5kbGVFcnIgZnJvbSBcIi4vZXJyXCI7XG5cbnZhciB1cmxTdHViID0gdXJsUGFydHMoKS5iYXNlO1xuXG52YXIgcG9zaXRpb25NYXAgPSB7XG4gICAgXCIwXCI6IFwiRmlyc3QgcmVmZXJlbmNlXCIsXG4gICAgXCIxXCI6IFwiU3Vic2VxdWVudCByZWZlcmVuY2VcIixcbiAgICBcIjJcIjogXCJJZC4gcmVmZXJlbmNlXCIsXG4gICAgXCIzXCI6IFwiSWQuIHJlZmVyZW5jZSB3aXRoIGxvY2F0b3JcIlxufTtcblxudmFyIGxhYmVsTWFwcyA9IHt9O1xuXG52YXIgY291cnRNYXAgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChjc2xPYmosIHBhcmFtcykgPT4ge1xuICAgIHZhciBvZmZzZXQgPSBudWxsO1xuICAgIGlmIChjc2xPYmouanVyaXNkaWN0aW9uKSB7XG4gICAgICAgIHZhciBtID0gY3NsT2JqLmp1cmlzZGljdGlvbi5tYXRjaCgvXihbMC05XVswLTldWzAtOV0pLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBwYXJzZUludChtWzFdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJsZWdhbF9jYXNlXCIgPT09IGNzbE9iai50eXBlICYmIGNzbE9iai5qdXJpc2RpY3Rpb24gJiYgY3NsT2JqLmF1dGhvcml0eSkge1xuICAgICAgICBpZiAob2Zmc2V0KSB7XG4gICAgICAgICAgICB2YXIganVyaXNkaWN0aW9uQ29kZSA9IGNzbE9iai5qdXJpc2RpY3Rpb24uc2xpY2UoMywgMytvZmZzZXQpO1xuICAgICAgICAgICAgdmFyIGNvdW50cnlDb2RlID0ganVyaXNkaWN0aW9uQ29kZS5zcGxpdChcIjpcIilbMF07XG4gICAgICAgICAgICBpZiAoIWNvdXJ0TWFwW2p1cmlzZGljdGlvbkNvZGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggY291cnRNYXAgZm9yIGp1cmlzZGljdGlvbiBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7dXJsU3R1Yn0vY291cnRNYXBzLyR7Y291bnRyeUNvZGV9Lmpzb25gXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IGhhbmRsZUVycihlKSk7XG4gICAgICAgICAgICAgICAgY291cnRNYXBbY291bnRyeUNvZGVdID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY291bnRyeUFiYnJldnMgPSBjb3VydE1hcFtjb3VudHJ5Q29kZV07XG4gICAgICAgICAgICB2YXIgY291cnQgPSBjb3VudHJ5QWJicmV2c1tqdXJpc2RpY3Rpb25Db2RlXVtjc2xPYmouYXV0aG9yaXR5XTtcbiAgICAgICAgICAgIGlmIChjb3VydCkge1xuICAgICAgICAgICAgICAgIGNzbE9iai5hdXRob3JpdHkgPSBjb3VydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob2Zmc2V0KSB7XG4gICAgICAgIHZhciBsc3QgPSBjc2xPYmouanVyaXNkaWN0aW9uLnNsaWNlKG9mZnNldCArIDMpLnNwbGl0KFwifFwiKTtcbiAgICAgICAgaWYgKGxzdC5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgY3NsT2JqLmp1cmlzZGljdGlvbiA9IGxzdC5qb2luKFwifFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzbE9iai5qdXJpc2RpY3Rpb24gPSBsc3Quc2xpY2UoMSkuam9pbihcInxcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPa2F5LCBncmVhdC4gV2UgaGF2ZSBhIENTTCBKU09OIG9iamVjdCB3aXRoIGh1bWFuLXJlYWRhYmxlIGNvbnRlbnQuXG4gICAgXG4gICAgLy8gTG9hZCB0aGUgbGFiZWxzXG4gICAgaWYgKCFsYWJlbE1hcHNbY3NsT2JqLnR5cGVdKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICB1cmw6IGAke3VybFN0dWJ9L2xhYmVsTWFwcy8ke2NzbE9iai50eXBlfS5qc29uYFxuICAgICAgICB9KTtcbiAgICAgICAgbGFiZWxNYXBzW2NzbE9iai50eXBlXSA9IHJlc3VsdC5kYXRhO1xuICAgIH1cbiAgICB2YXIgbGFiZWxNYXAgPSBsYWJlbE1hcHNbY3NsT2JqLnR5cGVdO1xuICAgIFxuICAgIHZhciByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gY3NsT2JqKSB7XG4gICAgICAgIGlmIChcImlkXCIgPT09IGtleSkgY29udGludWU7XG4gICAgICAgIHZhciB2YWwgPSBjc2xPYmpba2V5XTtcbiAgICAgICAgaWYgKFwib2JqZWN0XCIgPT09IHR5cGVvZiB2YWwpIHtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgdmFsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWxbXCJkYXRlLXBhcnRzXCJdICYmIHZhbFtcImRhdGUtcGFydHNcIl1bMF0gJiYgdmFsW1wiZGF0ZS1wYXJ0c1wiXVswXVswXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdmFsW1wiZGF0ZS1wYXJ0c1wiXS5tYXAoZGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5qb2luKFwiLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbihcIi9cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWwubGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWwubGl0ZXJhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxNYXBba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZUxhYmVsID0gbGFiZWxNYXBba2V5XTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIG9mIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbmFtZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtuYW1lLmZhbWlseSwgbmFtZS5naXZlbl0uam9pbihcIiwgXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBuYW1lTGFiZWwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcInR5cGVcIiA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiSXRlbSBUeXBlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGxhYmVsTWFwW3ZhbF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKFwiYWRtaW4tZmxhZ1wiID09PSBrZXkgfHwgXCJnYXpldHRlLWZsYWdcIiA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsTWFwW2tleV0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwi4pyTXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbE1hcFtrZXldLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJhbXMubG9jYXRvcikge1xuICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogXCJMb2NhdG9yXCIsXG4gICAgICAgICAgICB2YWx1ZTogcGFyYW1zLmxvY2F0b3JcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldC5wdXNoKHtcbiAgICAgICAgbGFiZWw6IFwiUG9zaXRpb25cIixcbiAgICAgICAgdmFsdWU6IHBvc2l0aW9uTWFwW3BhcmFtcy5wb3NpdGlvbl1cbiAgICB9KTtcbiAgICBpZiAocGFyYW1zW1wic3VwcHJlc3MtYXV0aG9yXCJdKSB7XG4gICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlN1cHByZXNzIEF1dGhvclwiLFxuICAgICAgICAgICAgdmFsdWU6IFwi4pyTXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoZSwgZXh0cmEpID0+IHtcbiAgICBpZiAoZXh0cmEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEF4aW9zIGZhaWw6ICR7ZS5tZXNzYWdlfSAoJHtleHRyYX0pYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYEF4aW9zIGZhaWw6ICR7ZS5tZXNzYWdlfWApO1xuICAgIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vZmllbGRsaXN0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXJsUGFydHMgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuaW1wb3J0ICcuL2ZpZWxkbGlzdC5jc3MnO1xuaW1wb3J0IGRpc3BsYXllciBmcm9tIFwiLi9kaXNwbGF5ZXIuanNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1zcGlubmVyXCI7XG5cbmltcG9ydCAnLi9yZWFjdC1zcGlubmVyLmNzcyc7XG5cbnZhciB1cmxTdHViID0gdXJsUGFydHMoKS5iYXNlO1xuXG52YXIgY2FjaGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2xpc3RJdGVtcywgc2V0TGlzdEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBzdG9yZUl0ZW1zID0gdXNlQ2FsbGJhY2soKGRhdGEpID0+IHNldExpc3RJdGVtcygobGlzdEl0ZW1zKSA9PiBsaXN0SXRlbXMgPSBkYXRhKSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZhciBmdW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGNpdGF0aW9uSXRlbXMgPSBwcm9wcy5jaXRhdGlvbkluZm9bXCJjaXRhdGlvbi1pdGVtc1wiXTtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaXRlbUluZm8gb2YgY2l0YXRpb25JdGVtcykge1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZVtpdGVtSW5mby5pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGNhY2hlW2l0ZW1JbmZvLmlkXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7IHVybDogYCR7dXJsU3R1Yn1pdGVtZGF0YS8ke2l0ZW1JbmZvLmlkfS5qc29uYCB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBjYWNoZVtpdGVtSW5mby5pZF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRlc19tZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGVzX2luZm8nLCBKU09OLnN0cmluZ2lmeShjaXRhdGlvbkl0ZW1zKSk7XG4gICAgICAgICAgICAvLyBNYWdpYyBoZXJlIHRvIHRyYW5zZm9ybSBDU0wga2V5L3ZhbCBvbiBpdGVtIHRvIGFycmF5IG9mIGxhYmVsICsgdmFsdWUgb2JqZWN0c1xuICAgICAgICAgICAgdmFyIGRpc3BsYXlJdGVtID0gYXdhaXQgZGlzcGxheWVyKGl0ZW1zWzBdLCBjaXRhdGlvbkl0ZW1zWzBdKTtcbiAgICAgICAgICAgIHN0b3JlSXRlbXMoZGlzcGxheUl0ZW0pO1xuICAgICAgICB9O1xuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW10pO1xuICAgIGlmIChsaXN0SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1zLm1hcChpbmZvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZm8ubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsYWJlbFwiPntpbmZvLmxhYmVsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInZhbHVlXCI+e2luZm8udmFsdWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPFNwaW5uZXIgY2xhc3NOYW1lPVwiYmxhY2std2hlZWxcIi8+XG4gICAgfVxuICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==