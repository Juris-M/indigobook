(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fieldlist"],{

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
                return Object(_displayer_js__WEBPACK_IMPORTED_MODULE_13__["default"])(response.data, props.params);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lcnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5jc3M/Zjk4YSIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmpzeCJdLCJuYW1lcyI6WyJ1cmxTdHViIiwidXJsUGFydHMiLCJiYXNlIiwicG9zaXRpb25NYXAiLCJsYWJlbE1hcHMiLCJjb3VydE1hcCIsImNzbE9iaiIsInBhcmFtcyIsIm9mZnNldCIsImp1cmlzZGljdGlvbiIsIm0iLCJtYXRjaCIsInBhcnNlSW50IiwidHlwZSIsImF1dGhvcml0eSIsImp1cmlzZGljdGlvbkNvZGUiLCJzbGljZSIsImNvdW50cnlDb2RlIiwic3BsaXQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImNhdGNoIiwiZSIsImhhbmRsZUVyciIsInJlc3VsdCIsImRhdGEiLCJjb3VudHJ5QWJicmV2cyIsImNvdXJ0IiwibHN0IiwibGVuZ3RoIiwiam9pbiIsImxhYmVsTWFwIiwicmV0Iiwia2V5IiwidmFsIiwibWFwIiwiZGF0ZSIsImxpdGVyYWwiLCJwdXNoIiwibGFiZWwiLCJ2YWx1ZSIsIm5hbWVMYWJlbCIsIm5hbWUiLCJmYW1pbHkiLCJnaXZlbiIsImxvY2F0b3IiLCJwb3NpdGlvbiIsImV4dHJhIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwibGlzdEl0ZW1zIiwic2V0TGlzdEl0ZW1zIiwiZ2V0SXRlbXMiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImZ1bmMiLCJpZCIsInJlc3BvbnNlIiwiZGlzcGxheWVyIiwiZGlzcGxheUl0ZW0iLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDBCQUEwQix3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Q0FBUDtBQWNILEdBZkQsTUFlTztBQUNILHdCQUFPLDREQUFDLHFEQUFELE9BQVA7QUFDSDtBQUVKLENBL0JELEUiLCJmaWxlIjoiZmllbGRsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YWJsZS1kaXNwbGF5IC5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhYmxlLWRpc3BsYXkgLmxhYmVsOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIjogXFxcIjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhYmxlLWRpc3BsYXkgLnZhbHVlIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uc3Bpbi1jZW50cmFsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXJsUGFydHMgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuaW1wb3J0IGhhbmRsZUVyciBmcm9tIFwiLi9lcnJcIjtcblxudmFyIHVybFN0dWIgPSB1cmxQYXJ0cygpLmJhc2U7XG5cbnZhciBwb3NpdGlvbk1hcCA9IHtcbiAgICBcIjBcIjogXCJGaXJzdCByZWZlcmVuY2VcIixcbiAgICBcIjFcIjogXCJTdWJzZXF1ZW50IHJlZmVyZW5jZVwiLFxuICAgIFwiMlwiOiBcIklkLiByZWZlcmVuY2VcIixcbiAgICBcIjNcIjogXCJJZC4gcmVmZXJlbmNlIHdpdGggbG9jYXRvclwiXG59O1xuXG52YXIgbGFiZWxNYXBzID0ge307XG5cbnZhciBjb3VydE1hcCA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGNzbE9iaiwgcGFyYW1zKSA9PiB7XG4gICAgdmFyIG9mZnNldCA9IG51bGw7XG4gICAgaWYgKGNzbE9iai5qdXJpc2RpY3Rpb24pIHtcbiAgICAgICAgdmFyIG0gPSBjc2xPYmouanVyaXNkaWN0aW9uLm1hdGNoKC9eKFswLTldWzAtOV1bMC05XSkvKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHBhcnNlSW50KG1bMV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcImxlZ2FsX2Nhc2VcIiA9PT0gY3NsT2JqLnR5cGUgJiYgY3NsT2JqLmp1cmlzZGljdGlvbiAmJiBjc2xPYmouYXV0aG9yaXR5KSB7XG4gICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICAgIHZhciBqdXJpc2RpY3Rpb25Db2RlID0gY3NsT2JqLmp1cmlzZGljdGlvbi5zbGljZSgzLCAzK29mZnNldCk7XG4gICAgICAgICAgICB2YXIgY291bnRyeUNvZGUgPSBqdXJpc2RpY3Rpb25Db2RlLnNwbGl0KFwiOlwiKVswXTtcbiAgICAgICAgICAgIGlmICghY291cnRNYXBbanVyaXNkaWN0aW9uQ29kZV0pIHtcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBjb3VydE1hcCBmb3IganVyaXNkaWN0aW9uIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHt1cmxTdHVifS9jb3VydE1hcHMvJHtjb3VudHJ5Q29kZX0uanNvbmBcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4gaGFuZGxlRXJyKGUpKTtcbiAgICAgICAgICAgICAgICBjb3VydE1hcFtjb3VudHJ5Q29kZV0gPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb3VudHJ5QWJicmV2cyA9IGNvdXJ0TWFwW2NvdW50cnlDb2RlXTtcbiAgICAgICAgICAgIHZhciBjb3VydCA9IGNvdW50cnlBYmJyZXZzW2p1cmlzZGljdGlvbkNvZGVdW2NzbE9iai5hdXRob3JpdHldO1xuICAgICAgICAgICAgaWYgKGNvdXJ0KSB7XG4gICAgICAgICAgICAgICAgY3NsT2JqLmF1dGhvcml0eSA9IGNvdXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgdmFyIGxzdCA9IGNzbE9iai5qdXJpc2RpY3Rpb24uc2xpY2Uob2Zmc2V0ICsgMykuc3BsaXQoXCJ8XCIpO1xuICAgICAgICBpZiAobHN0Lmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBjc2xPYmouanVyaXNkaWN0aW9uID0gbHN0LmpvaW4oXCJ8XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NsT2JqLmp1cmlzZGljdGlvbiA9IGxzdC5zbGljZSgxKS5qb2luKFwifFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9rYXksIGdyZWF0LiBXZSBoYXZlIGEgQ1NMIEpTT04gb2JqZWN0IHdpdGggaHVtYW4tcmVhZGFibGUgY29udGVudC5cbiAgICBcbiAgICAvLyBMb2FkIHRoZSBsYWJlbHNcbiAgICBpZiAoIWxhYmVsTWFwc1tjc2xPYmoudHlwZV0pIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgIHVybDogYCR7dXJsU3R1Yn0vbGFiZWxNYXBzLyR7Y3NsT2JqLnR5cGV9Lmpzb25gXG4gICAgICAgIH0pO1xuICAgICAgICBsYWJlbE1hcHNbY3NsT2JqLnR5cGVdID0gcmVzdWx0LmRhdGE7XG4gICAgfVxuICAgIHZhciBsYWJlbE1hcCA9IGxhYmVsTWFwc1tjc2xPYmoudHlwZV07XG4gICAgXG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBjc2xPYmopIHtcbiAgICAgICAgaWYgKFwiaWRcIiA9PT0ga2V5KSBjb250aW51ZTtcbiAgICAgICAgdmFyIHZhbCA9IGNzbE9ialtrZXldO1xuICAgICAgICBpZiAoXCJvYmplY3RcIiA9PT0gdHlwZW9mIHZhbCkge1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB2YWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbFtcImRhdGUtcGFydHNcIl0gJiYgdmFsW1wiZGF0ZS1wYXJ0c1wiXVswXSAmJiB2YWxbXCJkYXRlLXBhcnRzXCJdWzBdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB2YWxbXCJkYXRlLXBhcnRzXCJdLm1hcChkYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmpvaW4oXCItXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKFwiL1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbC5saXRlcmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5saXRlcmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbE1hcFtrZXldLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lTGFiZWwgPSBsYWJlbE1hcFtrZXldO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWUgb2YgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBuYW1lTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW25hbWUuZmFtaWx5LCBuYW1lLmdpdmVuXS5qb2luKFwiLCBcIilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVMYWJlbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFwidHlwZVwiID09PSBrZXkpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJJdGVtIFR5cGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogbGFiZWxNYXBbdmFsXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsTWFwW2tleV0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sb2NhdG9yKSB7XG4gICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkxvY2F0b3JcIixcbiAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMubG9jYXRvclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0LnB1c2goe1xuICAgICAgICBsYWJlbDogXCJQb3NpdGlvblwiLFxuICAgICAgICB2YWx1ZTogcG9zaXRpb25NYXBbcGFyYW1zLnBvc2l0aW9uXVxuICAgIH0pO1xuICAgIGlmIChwYXJhbXNbXCJzdXBwcmVzcy1hdXRob3JcIl0pIHtcbiAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IFwiU3VwcHJlc3MgQXV0aG9yXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCLinJNcIlxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IChlLCBleHRyYSkgPT4ge1xuICAgIGlmIChleHRyYSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQXhpb3MgZmFpbDogJHtlLm1lc3NhZ2V9ICgke2V4dHJhfSlgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgQXhpb3MgZmFpbDogJHtlLm1lc3NhZ2V9YCk7XG4gICAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9maWVsZGxpc3QuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJy4vZmllbGRsaXN0LmNzcyc7XG5pbXBvcnQgZGlzcGxheWVyIGZyb20gXCIuL2Rpc3BsYXllci5qc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJcIjtcblxuaW1wb3J0ICcuL3JlYWN0LXNwaW5uZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2xpc3RJdGVtcywgc2V0TGlzdEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBnZXRJdGVtcyA9IHVzZUNhbGxiYWNrKChkYXRhKSA9PiBzZXRMaXN0SXRlbXMoKGxpc3RJdGVtcykgPT4gbGlzdEl0ZW1zID0gZGF0YSksIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgZnVuYyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHsgdXJsOiBwcm9wcy51cmxTdHViICsgJ2l0ZW1kYXRhLycgKyBwcm9wcy5wYXJhbXMuaWQgKyAnLmpzb24nIH0pO1xuICAgICAgICAgICAgLy8gTWFnaWMgaGVyZSB0byB0cmFuc2Zvcm0gQ1NMIGtleS92YWwgb24gaXRlbSB0byBhcnJheSBvZiBsYWJlbCArIHZhbHVlIG9iamVjdHNcbiAgICAgICAgICAgIHZhciBkaXNwbGF5SXRlbSA9IGF3YWl0IGRpc3BsYXllcihyZXNwb25zZS5kYXRhLCBwcm9wcy5wYXJhbXMpO1xuICAgICAgICAgICAgZ2V0SXRlbXMoZGlzcGxheUl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmMoKTtcbiAgICB9LCBbXSk7XG4gICAgaWYgKGxpc3RJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbXMubWFwKGluZm8gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5mby5sYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxhYmVsXCI+e2luZm8ubGFiZWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidmFsdWVcIj57aW5mby52YWx1ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8U3Bpbm5lciAvPlxuICAgIH1cbiAgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=