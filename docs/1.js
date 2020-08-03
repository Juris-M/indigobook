(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
exports.push([module.i, ".table-display .label {\n    font-weight: bold;\n    text-align: right;\n    min-width: max-content;\n}\n\n.table-display .label:after {\n    content: \": \";\n    text-align: left;\n\tfont-weight: bold;\n}\n\n.table-display .value {\n\tfont-weight: normal;\n}\n\n.spin-central {\n    text-align: center;\n}\n\n", ""]);
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
    var offset, m, jurisdictionCode, countryCode, result, countryAbbrevs, court, lst, labelMap, decodeVal, ret, value, label, _iterator2, _step2, mapInfo, _iterator3, _step3, v;

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

            decodeVal = function decodeVal(val) {
              var value;
              if (!val) return false; // Returns a string or an array of string values.

              if ("object" === typeof val) {
                if ("undefined" === typeof val.length) {
                  if (val["date-parts"] && val["date-parts"][0] && val["date-parts"][0][0]) {
                    value = val["date-parts"].map(function (date) {
                      return date.join("-");
                    }).join("/");
                  } else if (val.literal) {
                    value = val.literal;
                  } else {
                    value = false;
                    console.log("Ouch");
                  }
                } else {
                  value = [];

                  var _iterator = _createForOfIteratorHelper(val),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var name = _step.value;
                      value.push([name.family, name.given].join(", "));
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  if (value.length === 0) {
                    value = false;
                  }
                }
              } else {
                value = val;
              }

              return value;
            }; // Step through the labels, check each for presence in item, push Label and (decoded) val.


            ret = [];
            _iterator2 = _createForOfIteratorHelper(labelMap);

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                mapInfo = _step2.value;

                if (mapInfo[0] === "type") {
                  ret.push({
                    label: "Item Type",
                    value: mapInfo[1]
                  });
                } else if (mapInfo[0] === "admin-flag" || mapInfo[0] === "gazette-flag") {
                  if (cslObj[mapInfo[0]]) {
                    ret.push({
                      label: mapInfo[1],
                      value: "✓"
                    });
                  }
                } else {
                  label = mapInfo[1];
                  value = decodeVal(cslObj[mapInfo[0]]);

                  if (value) {
                    if ("object" === typeof value) {
                      _iterator3 = _createForOfIteratorHelper(value);

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          v = _step3.value;
                          ret.push({
                            label: label,
                            value: v
                          });
                          label = "";
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                    } else {
                      ret.push({
                        label: label,
                        value: value
                      });
                    }
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

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

          case 29:
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

  var storeListItems = Object(react__WEBPACK_IMPORTED_MODULE_11__["useCallback"])(function (data) {
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
                return Object(_displayer_js__WEBPACK_IMPORTED_MODULE_15__["default"])(items[props.selectedIndex], citationItems[0]);

              case 31:
                displayItem = _context.sent;
                storeListItems(displayItem);

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
        key: props.selectedIndex + "::" + info.label
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lcnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5jc3M/Zjk4YSIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmpzeCJdLCJuYW1lcyI6WyJ1cmxTdHViIiwidXJsUGFydHMiLCJiYXNlIiwicG9zaXRpb25NYXAiLCJsYWJlbE1hcHMiLCJjb3VydE1hcCIsImNzbE9iaiIsInBhcmFtcyIsIm9mZnNldCIsImp1cmlzZGljdGlvbiIsIm0iLCJtYXRjaCIsInBhcnNlSW50IiwidHlwZSIsImF1dGhvcml0eSIsImp1cmlzZGljdGlvbkNvZGUiLCJzbGljZSIsImNvdW50cnlDb2RlIiwic3BsaXQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImNhdGNoIiwiZSIsImhhbmRsZUVyciIsInJlc3VsdCIsImRhdGEiLCJjb3VudHJ5QWJicmV2cyIsImNvdXJ0IiwibHN0IiwibGVuZ3RoIiwiam9pbiIsImxhYmVsTWFwIiwiZGVjb2RlVmFsIiwidmFsIiwidmFsdWUiLCJtYXAiLCJkYXRlIiwibGl0ZXJhbCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicHVzaCIsImZhbWlseSIsImdpdmVuIiwicmV0IiwibWFwSW5mbyIsImxhYmVsIiwidiIsImxvY2F0b3IiLCJwb3NpdGlvbiIsImV4dHJhIiwibWVzc2FnZSIsImNhY2hlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3RJdGVtcyIsInNldExpc3RJdGVtcyIsInN0b3JlTGlzdEl0ZW1zIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJmdW5jIiwiY2l0YXRpb25JdGVtcyIsImNpdGF0aW9uSW5mbyIsIml0ZW1zIiwiaXRlbUluZm8iLCJpZCIsIml0ZW0iLCJyZXNwb25zZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGlzcGxheWVyIiwic2VsZWN0ZWRJbmRleCIsImRpc3BsYXlJdGVtIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUywwQkFBMEIsd0JBQXdCLHdCQUF3Qiw2QkFBNkIsR0FBRyxpQ0FBaUMsc0JBQXNCLHVCQUF1QixzQkFBc0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsbUJBQW1CLHlCQUF5QixHQUFHO0FBQzdVO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsT0FBTyxHQUFHQywyREFBUSxHQUFHQyxJQUF6QjtBQUVBLElBQUlDLFdBQVcsR0FBRztBQUNkLE9BQUssaUJBRFM7QUFFZCxPQUFLLHNCQUZTO0FBR2QsT0FBSyxlQUhTO0FBSWQsT0FBSztBQUpTLENBQWxCO0FBT0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBRUEsSUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQTtBQUFBLHFFQUFlLGlCQUFPQyxNQUFQLEVBQWVDLE1BQWY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQQyxrQkFETyxHQUNFLElBREY7O0FBRVgsZ0JBQUlGLE1BQU0sQ0FBQ0csWUFBWCxFQUF5QjtBQUNqQkMsZUFEaUIsR0FDYkosTUFBTSxDQUFDRyxZQUFQLENBQW9CRSxLQUFwQixDQUEwQixvQkFBMUIsQ0FEYTs7QUFFckIsa0JBQUlELENBQUosRUFBTztBQUNIRixzQkFBTSxHQUFHSSxRQUFRLENBQUNGLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBakI7QUFDSDtBQUNKOztBQVBVLGtCQVFQLGlCQUFpQkosTUFBTSxDQUFDTyxJQUF4QixJQUFnQ1AsTUFBTSxDQUFDRyxZQUF2QyxJQUF1REgsTUFBTSxDQUFDUSxTQVJ2RDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxpQkFTSE4sTUFURztBQUFBO0FBQUE7QUFBQTs7QUFVQ08sNEJBVkQsR0FVb0JULE1BQU0sQ0FBQ0csWUFBUCxDQUFvQk8sS0FBcEIsQ0FBMEIsQ0FBMUIsRUFBNkIsSUFBRVIsTUFBL0IsQ0FWcEI7QUFXQ1MsdUJBWEQsR0FXZUYsZ0JBQWdCLENBQUNHLEtBQWpCLENBQXVCLEdBQXZCLEVBQTRCLENBQTVCLENBWGY7O0FBQUEsZ0JBWUViLFFBQVEsQ0FBQ1UsZ0JBQUQsQ0FaVjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQWNvQkksNkNBQUssQ0FBQztBQUNyQkMsb0JBQU0sRUFBRSxLQURhO0FBRXJCQyxpQkFBRyxZQUFLckIsT0FBTCx3QkFBMEJpQixXQUExQjtBQUZrQixhQUFELENBQUwsQ0FHaEJLLEtBSGdCLENBR1YsVUFBQ0MsQ0FBRDtBQUFBLHFCQUFPQyxxREFBUyxDQUFDRCxDQUFELENBQWhCO0FBQUEsYUFIVSxDQWRwQjs7QUFBQTtBQWNLRSxrQkFkTDtBQWtCQ3BCLG9CQUFRLENBQUNZLFdBQUQsQ0FBUixHQUF3QlEsTUFBTSxDQUFDQyxJQUEvQjs7QUFsQkQ7QUFvQkNDLDBCQXBCRCxHQW9Ca0J0QixRQUFRLENBQUNZLFdBQUQsQ0FwQjFCO0FBcUJDVyxpQkFyQkQsR0FxQlNELGNBQWMsQ0FBQ1osZ0JBQUQsQ0FBZCxDQUFpQ1QsTUFBTSxDQUFDUSxTQUF4QyxDQXJCVDs7QUFzQkgsZ0JBQUljLEtBQUosRUFBVztBQUNQdEIsb0JBQU0sQ0FBQ1EsU0FBUCxHQUFtQmMsS0FBbkI7QUFDSDs7QUF4QkU7QUEyQlgsZ0JBQUlwQixNQUFKLEVBQVk7QUFDSnFCLGlCQURJLEdBQ0V2QixNQUFNLENBQUNHLFlBQVAsQ0FBb0JPLEtBQXBCLENBQTBCUixNQUFNLEdBQUcsQ0FBbkMsRUFBc0NVLEtBQXRDLENBQTRDLEdBQTVDLENBREY7O0FBRVIsa0JBQUlXLEdBQUcsQ0FBQ0MsTUFBSixJQUFjLENBQWxCLEVBQXFCO0FBQ2pCeEIsc0JBQU0sQ0FBQ0csWUFBUCxHQUFzQm9CLEdBQUcsQ0FBQ0UsSUFBSixDQUFTLEdBQVQsQ0FBdEI7QUFDSCxlQUZELE1BRU87QUFDSHpCLHNCQUFNLENBQUNHLFlBQVAsR0FBc0JvQixHQUFHLENBQUNiLEtBQUosQ0FBVSxDQUFWLEVBQWFlLElBQWIsQ0FBa0IsR0FBbEIsQ0FBdEI7QUFDSDtBQUNKLGFBbENVLENBb0NYO0FBRUE7OztBQXRDVyxnQkF1Q04zQixTQUFTLENBQUNFLE1BQU0sQ0FBQ08sSUFBUixDQXZDSDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQXdDWU0sNkNBQUssQ0FBQztBQUNyQkMsb0JBQU0sRUFBRSxLQURhO0FBRXJCQyxpQkFBRyxZQUFLckIsT0FBTCx3QkFBMEJNLE1BQU0sQ0FBQ08sSUFBakM7QUFGa0IsYUFBRCxDQXhDakI7O0FBQUE7QUF3Q0hZLGtCQXhDRztBQTRDUHJCLHFCQUFTLENBQUNFLE1BQU0sQ0FBQ08sSUFBUixDQUFULEdBQXlCWSxNQUFNLENBQUNDLElBQWhDOztBQTVDTztBQThDUE0sb0JBOUNPLEdBOENJNUIsU0FBUyxDQUFDRSxNQUFNLENBQUNPLElBQVIsQ0E5Q2I7O0FBZ0RMb0IscUJBaERLLEdBZ0RPLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFTO0FBQ3ZCLGtCQUFJQyxLQUFKO0FBQ0Esa0JBQUksQ0FBQ0QsR0FBTCxFQUFVLE9BQU8sS0FBUCxDQUZhLENBSXZCOztBQUVBLGtCQUFJLGFBQWEsT0FBT0EsR0FBeEIsRUFBNkI7QUFDekIsb0JBQUksZ0JBQWdCLE9BQU9BLEdBQUcsQ0FBQ0osTUFBL0IsRUFBdUM7QUFDbkMsc0JBQUlJLEdBQUcsQ0FBQyxZQUFELENBQUgsSUFBcUJBLEdBQUcsQ0FBQyxZQUFELENBQUgsQ0FBa0IsQ0FBbEIsQ0FBckIsSUFBNkNBLEdBQUcsQ0FBQyxZQUFELENBQUgsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBakQsRUFBMEU7QUFDdEVDLHlCQUFLLEdBQUdELEdBQUcsQ0FBQyxZQUFELENBQUgsQ0FBa0JFLEdBQWxCLENBQXNCLFVBQUFDLElBQUksRUFBSTtBQUNsQyw2QkFBT0EsSUFBSSxDQUFDTixJQUFMLENBQVUsR0FBVixDQUFQO0FBQ0gscUJBRk8sRUFFTEEsSUFGSyxDQUVBLEdBRkEsQ0FBUjtBQUdILG1CQUpELE1BSU8sSUFBSUcsR0FBRyxDQUFDSSxPQUFSLEVBQWlCO0FBQ3BCSCx5QkFBSyxHQUFHRCxHQUFHLENBQUNJLE9BQVo7QUFDSCxtQkFGTSxNQUVBO0FBQ0hILHlCQUFLLEdBQUcsS0FBUjtBQUNBSSwyQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNIO0FBQ0osaUJBWEQsTUFXTztBQUNITCx1QkFBSyxHQUFHLEVBQVI7O0FBREcsNkRBRWNELEdBRmQ7QUFBQTs7QUFBQTtBQUVILHdFQUFzQjtBQUFBLDBCQUFiTyxJQUFhO0FBQ2xCTiwyQkFBSyxDQUFDTyxJQUFOLENBQVcsQ0FBQ0QsSUFBSSxDQUFDRSxNQUFOLEVBQWNGLElBQUksQ0FBQ0csS0FBbkIsRUFBMEJiLElBQTFCLENBQStCLElBQS9CLENBQVg7QUFDSDtBQUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0gsc0JBQUlJLEtBQUssQ0FBQ0wsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQksseUJBQUssR0FBRyxLQUFSO0FBQ0g7QUFDSjtBQUNKLGVBckJELE1BcUJPO0FBQ0hBLHFCQUFLLEdBQUdELEdBQVI7QUFDSDs7QUFDRCxxQkFBT0MsS0FBUDtBQUNILGFBL0VVLEVBaUZYOzs7QUFDSVUsZUFsRk8sR0FrRkQsRUFsRkM7QUFBQSxvREFvRlNiLFFBcEZUOztBQUFBO0FBb0ZYLHFFQUE4QjtBQUFyQmMsdUJBQXFCOztBQUMxQixvQkFBSUEsT0FBTyxDQUFDLENBQUQsQ0FBUCxLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCRCxxQkFBRyxDQUFDSCxJQUFKLENBQVM7QUFDTEsseUJBQUssRUFBRSxXQURGO0FBRUxaLHlCQUFLLEVBQUVXLE9BQU8sQ0FBQyxDQUFEO0FBRlQsbUJBQVQ7QUFJSCxpQkFMRCxNQUtPLElBQUtBLE9BQU8sQ0FBQyxDQUFELENBQVAsS0FBZSxZQUFmLElBQStCQSxPQUFPLENBQUMsQ0FBRCxDQUFQLEtBQWUsY0FBbkQsRUFBbUU7QUFDdEUsc0JBQUl4QyxNQUFNLENBQUN3QyxPQUFPLENBQUMsQ0FBRCxDQUFSLENBQVYsRUFBd0I7QUFDcEJELHVCQUFHLENBQUNILElBQUosQ0FBUztBQUNMSywyQkFBSyxFQUFFRCxPQUFPLENBQUMsQ0FBRCxDQURUO0FBRUxYLDJCQUFLLEVBQUU7QUFGRixxQkFBVDtBQUlIO0FBQ0osaUJBUE0sTUFPQTtBQUNIWSx1QkFBSyxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQUFmO0FBQ0lYLHVCQUZELEdBRVNGLFNBQVMsQ0FBQzNCLE1BQU0sQ0FBQ3dDLE9BQU8sQ0FBQyxDQUFELENBQVIsQ0FBUCxDQUZsQjs7QUFHSCxzQkFBSVgsS0FBSixFQUFXO0FBQ1Asd0JBQUksYUFBYSxPQUFPQSxLQUF4QixFQUErQjtBQUFBLDhEQUNiQSxLQURhOztBQUFBO0FBQzNCLCtFQUFxQjtBQUFaYSwyQkFBWTtBQUNqQkgsNkJBQUcsQ0FBQ0gsSUFBSixDQUFTO0FBQ0xLLGlDQUFLLEVBQUVBLEtBREY7QUFFTFosaUNBQUssRUFBRWE7QUFGRiwyQkFBVDtBQUlBRCwrQkFBSyxHQUFHLEVBQVI7QUFDSDtBQVAwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUTlCLHFCQVJELE1BUU87QUFDSEYseUJBQUcsQ0FBQ0gsSUFBSixDQUFTO0FBQ0xLLDZCQUFLLEVBQUVBLEtBREY7QUFFTFosNkJBQUssRUFBRUE7QUFGRix1QkFBVDtBQUlIO0FBQ0o7QUFDSjtBQUNKO0FBckhVO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBdUhYLGdCQUFJNUIsTUFBTSxDQUFDMEMsT0FBWCxFQUFvQjtBQUNoQkosaUJBQUcsQ0FBQ0gsSUFBSixDQUFTO0FBQ0xLLHFCQUFLLEVBQUUsU0FERjtBQUVMWixxQkFBSyxFQUFFNUIsTUFBTSxDQUFDMEM7QUFGVCxlQUFUO0FBSUg7O0FBQ0RKLGVBQUcsQ0FBQ0gsSUFBSixDQUFTO0FBQ0xLLG1CQUFLLEVBQUUsVUFERjtBQUVMWixtQkFBSyxFQUFFaEMsV0FBVyxDQUFDSSxNQUFNLENBQUMyQyxRQUFSO0FBRmIsYUFBVDs7QUFJQSxnQkFBSTNDLE1BQU0sQ0FBQyxpQkFBRCxDQUFWLEVBQStCO0FBQzNCc0MsaUJBQUcsQ0FBQ0gsSUFBSixDQUFTO0FBQ0xLLHFCQUFLLEVBQUUsaUJBREY7QUFFTFoscUJBQUssRUFBRTtBQUZGLGVBQVQ7QUFJSDs7QUF0SVUsNkNBdUlKVSxHQXZJSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLE07Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmUseUVBQUN0QixDQUFELEVBQUk0QixLQUFKLEVBQWM7QUFDekIsTUFBSUEsS0FBSixFQUFXO0FBQ1BaLFdBQU8sQ0FBQ0MsR0FBUix1QkFBMkJqQixDQUFDLENBQUM2QixPQUE3QixlQUF5Q0QsS0FBekM7QUFDSCxHQUZELE1BRU87QUFDSFosV0FBTyxDQUFDQyxHQUFSLHVCQUEyQmpCLENBQUMsQ0FBQzZCLE9BQTdCO0FBQ0g7QUFDSixDQU5ELEU7Ozs7Ozs7Ozs7O0FDQUEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxxSUFBb0U7O0FBRXRHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQUlwRCxPQUFPLEdBQUdDLDJEQUFRLEdBQUdDLElBQXpCO0FBRUEsSUFBSW1ELEtBQUssR0FBRyxFQUFaO0FBRWUseUVBQUNDLEtBQUQsRUFBVztBQUFBLGtCQUNZQyx1REFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQTtBQUFBLE1BQ2ZDLFNBRGU7QUFBQSxNQUNKQyxZQURJOztBQUV0QixNQUFNQyxjQUFjLEdBQUdDLDBEQUFXLENBQUMsVUFBQ2pDLElBQUQ7QUFBQSxXQUFVK0IsWUFBWSxDQUFDLFVBQUNELFNBQUQ7QUFBQSxhQUFlQSxTQUFTLEdBQUc5QixJQUEzQjtBQUFBLEtBQUQsQ0FBdEI7QUFBQSxHQUFELEVBQTBELEVBQTFELENBQWxDO0FBQ0FrQywwREFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxJQUFJO0FBQUEseUVBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIQyw2QkFERyxHQUNhUixLQUFLLENBQUNTLFlBQU4sQ0FBbUIsZ0JBQW5CLENBRGI7QUFFSEMscUJBRkcsR0FFSyxFQUZMO0FBQUEsdURBR2NGLGFBSGQ7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdFRyx3QkFIRjs7QUFBQSxxQkFJQ1osS0FBSyxDQUFDWSxRQUFRLENBQUNDLEVBQVYsQ0FKTjtBQUFBO0FBQUE7QUFBQTs7QUFLQ0Msb0JBQUksR0FBR2QsS0FBSyxDQUFDWSxRQUFRLENBQUNDLEVBQVYsQ0FBWjtBQUxEO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVCQU9zQi9DLDZDQUFLLENBQUM7QUFBRUUscUJBQUcsWUFBS3JCLE9BQUwsc0JBQXdCaUUsUUFBUSxDQUFDQyxFQUFqQztBQUFMLGlCQUFELENBUDNCOztBQUFBO0FBT0tFLHdCQVBMO0FBUUtELG9CQVJMLEdBUVlDLFFBQVEsQ0FBQzFDLElBUnJCO0FBU0MyQixxQkFBSyxDQUFDWSxRQUFRLENBQUNDLEVBQVYsQ0FBTCxHQUFxQkMsSUFBckI7O0FBVEQ7QUFXSEgscUJBQUssQ0FBQ3RCLElBQU4sQ0FBV3lCLElBQVg7O0FBWEc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQWFQRSxzQkFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixnQkFBNUIsRUFBOENDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxLQUFmLENBQTlDO0FBQ0FLLHNCQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFlBQTVCLEVBQTBDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsYUFBZixDQUExQyxFQWRPLENBaUJQOztBQWpCTztBQUFBLHVCQWtCaUJZLDhEQUFTLENBQUNWLEtBQUssQ0FBQ1YsS0FBSyxDQUFDcUIsYUFBUCxDQUFOLEVBQTZCYixhQUFhLENBQUMsQ0FBRCxDQUExQyxDQWxCMUI7O0FBQUE7QUFrQkhjLDJCQWxCRztBQW1CUGxCLDhCQUFjLENBQUNrQixXQUFELENBQWQ7O0FBbkJPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQUpmLElBQUk7QUFBQTtBQUFBO0FBQUEsT0FBUjs7QUFxQkFBLFFBQUk7QUFDUCxHQXZCUSxFQXVCTixFQXZCTSxDQUFUOztBQXdCQSxNQUFJTCxTQUFTLENBQUMxQixNQUFkLEVBQXNCO0FBQ2xCLHdCQUFPO0FBQU8sZUFBUyxFQUFDO0FBQWpCLG9CQUNFLDJFQUVEMEIsU0FBUyxDQUFDcEIsR0FBVixDQUFjLFVBQUF5QyxJQUFJLEVBQUk7QUFDbEIsMEJBQ0k7QUFBSSxXQUFHLEVBQUV2QixLQUFLLENBQUNxQixhQUFOLEdBQXFCLElBQXJCLEdBQTRCRSxJQUFJLENBQUM5QjtBQUExQyxzQkFDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUF1QjhCLElBQUksQ0FBQzlCLEtBQTVCLENBREosZUFFSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUF1QjhCLElBQUksQ0FBQzFDLEtBQTVCLENBRkosQ0FESjtBQU1ILEtBUEQsQ0FGQyxDQURGLENBQVA7QUFjSCxHQWZELE1BZU87QUFDSCx3QkFBTyw0REFBQyxxREFBRDtBQUFTLGVBQVMsRUFBQztBQUFuQixNQUFQO0FBQ0g7QUFFSixDQTlDRCxFIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYmxlLWRpc3BsYXkgLmxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4udGFibGUtZGlzcGxheSAubGFiZWw6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiOiBcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFibGUtZGlzcGxheSAudmFsdWUge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5zcGluLWNlbnRyYWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1cmxQYXJ0cyB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgaGFuZGxlRXJyIGZyb20gXCIuL2VyclwiO1xuXG52YXIgdXJsU3R1YiA9IHVybFBhcnRzKCkuYmFzZTtcblxudmFyIHBvc2l0aW9uTWFwID0ge1xuICAgIFwiMFwiOiBcIkZpcnN0IHJlZmVyZW5jZVwiLFxuICAgIFwiMVwiOiBcIlN1YnNlcXVlbnQgcmVmZXJlbmNlXCIsXG4gICAgXCIyXCI6IFwiSWQuIHJlZmVyZW5jZVwiLFxuICAgIFwiM1wiOiBcIklkLiByZWZlcmVuY2Ugd2l0aCBsb2NhdG9yXCJcbn07XG5cbnZhciBsYWJlbE1hcHMgPSB7fTtcblxudmFyIGNvdXJ0TWFwID0ge307XG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY3NsT2JqLCBwYXJhbXMpID0+IHtcbiAgICB2YXIgb2Zmc2V0ID0gbnVsbDtcbiAgICBpZiAoY3NsT2JqLmp1cmlzZGljdGlvbikge1xuICAgICAgICB2YXIgbSA9IGNzbE9iai5qdXJpc2RpY3Rpb24ubWF0Y2goL14oWzAtOV1bMC05XVswLTldKS8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwibGVnYWxfY2FzZVwiID09PSBjc2xPYmoudHlwZSAmJiBjc2xPYmouanVyaXNkaWN0aW9uICYmIGNzbE9iai5hdXRob3JpdHkpIHtcbiAgICAgICAgaWYgKG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIGp1cmlzZGljdGlvbkNvZGUgPSBjc2xPYmouanVyaXNkaWN0aW9uLnNsaWNlKDMsIDMrb2Zmc2V0KTtcbiAgICAgICAgICAgIHZhciBjb3VudHJ5Q29kZSA9IGp1cmlzZGljdGlvbkNvZGUuc3BsaXQoXCI6XCIpWzBdO1xuICAgICAgICAgICAgaWYgKCFjb3VydE1hcFtqdXJpc2RpY3Rpb25Db2RlXSkge1xuICAgICAgICAgICAgICAgIC8vIEZldGNoIGNvdXJ0TWFwIGZvciBqdXJpc2RpY3Rpb24gaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAke3VybFN0dWJ9L2NvdXJ0TWFwcy8ke2NvdW50cnlDb2RlfS5qc29uYFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiBoYW5kbGVFcnIoZSkpO1xuICAgICAgICAgICAgICAgIGNvdXJ0TWFwW2NvdW50cnlDb2RlXSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvdW50cnlBYmJyZXZzID0gY291cnRNYXBbY291bnRyeUNvZGVdO1xuICAgICAgICAgICAgdmFyIGNvdXJ0ID0gY291bnRyeUFiYnJldnNbanVyaXNkaWN0aW9uQ29kZV1bY3NsT2JqLmF1dGhvcml0eV07XG4gICAgICAgICAgICBpZiAoY291cnQpIHtcbiAgICAgICAgICAgICAgICBjc2xPYmouYXV0aG9yaXR5ID0gY291cnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9mZnNldCkge1xuICAgICAgICB2YXIgbHN0ID0gY3NsT2JqLmp1cmlzZGljdGlvbi5zbGljZShvZmZzZXQgKyAzKS5zcGxpdChcInxcIik7XG4gICAgICAgIGlmIChsc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgIGNzbE9iai5qdXJpc2RpY3Rpb24gPSBsc3Quam9pbihcInxcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc2xPYmouanVyaXNkaWN0aW9uID0gbHN0LnNsaWNlKDEpLmpvaW4oXCJ8XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gT2theSwgZ3JlYXQuIFdlIGhhdmUgYSBDU0wgSlNPTiBvYmplY3Qgd2l0aCBodW1hbi1yZWFkYWJsZSBjb250ZW50LlxuICAgIFxuICAgIC8vIExvYWQgdGhlIGxhYmVsc1xuICAgIGlmICghbGFiZWxNYXBzW2NzbE9iai50eXBlXSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgdXJsOiBgJHt1cmxTdHVifS9sYWJlbE1hcHMvJHtjc2xPYmoudHlwZX0uanNvbmBcbiAgICAgICAgfSk7XG4gICAgICAgIGxhYmVsTWFwc1tjc2xPYmoudHlwZV0gPSByZXN1bHQuZGF0YTtcbiAgICB9XG4gICAgdmFyIGxhYmVsTWFwID0gbGFiZWxNYXBzW2NzbE9iai50eXBlXTtcblxuICAgIGNvbnN0IGRlY29kZVZhbCA9ICh2YWwpID0+IHtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICBpZiAoIXZhbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgLy8gUmV0dXJucyBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmcgdmFsdWVzLlxuICAgICAgICBcbiAgICAgICAgaWYgKFwib2JqZWN0XCIgPT09IHR5cGVvZiB2YWwpIHtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgdmFsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWxbXCJkYXRlLXBhcnRzXCJdICYmIHZhbFtcImRhdGUtcGFydHNcIl1bMF0gJiYgdmFsW1wiZGF0ZS1wYXJ0c1wiXVswXVswXSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbFtcImRhdGUtcGFydHNcIl0ubWFwKGRhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuam9pbihcIi1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oXCIvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsLmxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWwubGl0ZXJhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk91Y2hcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWUgb2YgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goW25hbWUuZmFtaWx5LCBuYW1lLmdpdmVuXS5qb2luKFwiLCBcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgXG4gICAgLy8gU3RlcCB0aHJvdWdoIHRoZSBsYWJlbHMsIGNoZWNrIGVhY2ggZm9yIHByZXNlbmNlIGluIGl0ZW0sIHB1c2ggTGFiZWwgYW5kIChkZWNvZGVkKSB2YWwuXG4gICAgdmFyIHJldCA9IFtdO1xuICAgIHZhciB2YWx1ZSwgbGFiZWw7XG4gICAgZm9yICh2YXIgbWFwSW5mbyBvZiBsYWJlbE1hcCkge1xuICAgICAgICBpZiAobWFwSW5mb1swXSA9PT0gXCJ0eXBlXCIpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJJdGVtIFR5cGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogbWFwSW5mb1sxXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIG1hcEluZm9bMF0gPT09IFwiYWRtaW4tZmxhZ1wiIHx8IG1hcEluZm9bMF0gPT09IFwiZ2F6ZXR0ZS1mbGFnXCIpIHtcbiAgICAgICAgICAgIGlmIChjc2xPYmpbbWFwSW5mb1swXV0pIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBtYXBJbmZvWzFdLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCLinJNcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFiZWwgPSBtYXBJbmZvWzFdO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGVjb2RlVmFsKGNzbE9ialttYXBJbmZvWzBdXSk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiA9PT0gdHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHYgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAocGFyYW1zLmxvY2F0b3IpIHtcbiAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IFwiTG9jYXRvclwiLFxuICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5sb2NhdG9yXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXQucHVzaCh7XG4gICAgICAgIGxhYmVsOiBcIlBvc2l0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBwb3NpdGlvbk1hcFtwYXJhbXMucG9zaXRpb25dXG4gICAgfSk7XG4gICAgaWYgKHBhcmFtc1tcInN1cHByZXNzLWF1dGhvclwiXSkge1xuICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogXCJTdXBwcmVzcyBBdXRob3JcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIuKck1wiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKGUsIGV4dHJhKSA9PiB7XG4gICAgaWYgKGV4dHJhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX0gKCR7ZXh0cmF9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL2ZpZWxkbGlzdC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2t9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVybFBhcnRzIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcbmltcG9ydCAnLi9maWVsZGxpc3QuY3NzJztcbmltcG9ydCBkaXNwbGF5ZXIgZnJvbSBcIi4vZGlzcGxheWVyLmpzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3Qtc3Bpbm5lclwiO1xuXG5pbXBvcnQgJy4vcmVhY3Qtc3Bpbm5lci5jc3MnO1xuXG52YXIgdXJsU3R1YiA9IHVybFBhcnRzKCkuYmFzZTtcblxudmFyIGNhY2hlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtsaXN0SXRlbXMsIHNldExpc3RJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgc3RvcmVMaXN0SXRlbXMgPSB1c2VDYWxsYmFjaygoZGF0YSkgPT4gc2V0TGlzdEl0ZW1zKChsaXN0SXRlbXMpID0+IGxpc3RJdGVtcyA9IGRhdGEpLCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmFyIGZ1bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgY2l0YXRpb25JdGVtcyA9IHByb3BzLmNpdGF0aW9uSW5mb1tcImNpdGF0aW9uLWl0ZW1zXCJdO1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpdGVtSW5mbyBvZiBjaXRhdGlvbkl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlW2l0ZW1JbmZvLmlkXSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gY2FjaGVbaXRlbUluZm8uaWRdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHsgdXJsOiBgJHt1cmxTdHVifWl0ZW1kYXRhLyR7aXRlbUluZm8uaWR9Lmpzb25gIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlW2l0ZW1JbmZvLmlkXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGVzX21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0ZXNfaW5mbycsIEpTT04uc3RyaW5naWZ5KGNpdGF0aW9uSXRlbXMpKTtcblxuXG4gICAgICAgICAgICAvLyBNYWdpYyBoZXJlIHRvIHRyYW5zZm9ybSBDU0wga2V5L3ZhbCBvbiBpdGVtIHRvIGFycmF5IG9mIGxhYmVsICsgdmFsdWUgb2JqZWN0c1xuICAgICAgICAgICAgdmFyIGRpc3BsYXlJdGVtID0gYXdhaXQgZGlzcGxheWVyKGl0ZW1zW3Byb3BzLnNlbGVjdGVkSW5kZXhdLCBjaXRhdGlvbkl0ZW1zWzBdKTtcbiAgICAgICAgICAgIHN0b3JlTGlzdEl0ZW1zKGRpc3BsYXlJdGVtKTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFtdKTtcbiAgICBpZiAobGlzdEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtcy5tYXAoaW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwcm9wcy5zZWxlY3RlZEluZGV4ICtcIjo6XCIgKyBpbmZvLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGFiZWxcIj57aW5mby5sYWJlbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ2YWx1ZVwiPntpbmZvLnZhbHVlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxTcGlubmVyIGNsYXNzTmFtZT1cImJsYWNrLXdoZWVsXCIvPlxuICAgIH1cbiAgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=