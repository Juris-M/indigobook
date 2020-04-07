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

/***/ "./node_modules/react-spinner/build/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinner/build/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Spinner = (function (_React$Component) {
	  _inherits(Spinner, _React$Component);
	
	  function Spinner(props) {
	    _classCallCheck(this, Spinner);
	
	    _get(Object.getPrototypeOf(Spinner.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(Spinner, [{
	    key: 'render',
	    value: function render() {
	      var bars = [];
	      var props = this.props;
	
	      for (var i = 0; i < 12; i++) {
	        var barStyle = {};
	        barStyle.WebkitAnimationDelay = barStyle.animationDelay = (i - 12) / 10 + 's';
	
	        barStyle.WebkitTransform = barStyle.transform = 'rotate(' + i * 30 + 'deg) translate(146%)';
	
	        bars.push(_react2['default'].createElement('div', { style: barStyle, className: 'react-spinner_bar', key: i }));
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        _extends({}, props, { className: (props.className || '') + ' react-spinner' }),
	        bars
	      );
	    }
	  }]);
	
	  return Spinner;
	})(_react2['default'].Component);
	
	;
	
	exports['default'] = Spinner;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=index.map

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Qtc3Bpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXIvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXJyLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZGxpc3QuY3NzP2Y5OGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LXNwaW5uZXIuY3NzP2NjMjUiXSwibmFtZXMiOlsidXJsU3R1YiIsInVybFBhcnRzIiwiYmFzZSIsImxhYmVsTWFwcyIsImNvdXJ0TWFwIiwiY3NsT2JqIiwib2Zmc2V0IiwianVyaXNkaWN0aW9uIiwibSIsIm1hdGNoIiwicGFyc2VJbnQiLCJ0eXBlIiwiYXV0aG9yaXR5IiwianVyaXNkaWN0aW9uQ29kZSIsInNsaWNlIiwiY291bnRyeUNvZGUiLCJzcGxpdCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiY2F0Y2giLCJlIiwiaGFuZGxlRXJyIiwicmVzdWx0IiwiZGF0YSIsImNvdW50cnlBYmJyZXZzIiwiY291cnQiLCJsc3QiLCJsZW5ndGgiLCJqb2luIiwibGFiZWxNYXAiLCJyZXQiLCJrZXkiLCJ2YWwiLCJtYXAiLCJkYXRlIiwibGl0ZXJhbCIsInB1c2giLCJsYWJlbCIsInZhbHVlIiwibmFtZUxhYmVsIiwibmFtZSIsImZhbWlseSIsImdpdmVuIiwiZXh0cmEiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInByb3BzIiwidXNlU3RhdGUiLCJsaXN0SXRlbXMiLCJzZXRMaXN0SXRlbXMiLCJnZXRJdGVtcyIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiZnVuYyIsImlkIiwicmVzcG9uc2UiLCJkaXNwbGF5ZXIiLCJkaXNwbGF5SXRlbSIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxtQkFBTyxDQUFDLHlGQUE4QjtBQUNqRCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUYsOEJBQThCLG1CQUFPLENBQUMsaUhBQTBDOztBQUVoRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxnRkFBZ0Y7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pCWTtBQUNiLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNDRDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDBCQUEwQix3QkFBd0Isd0JBQXdCLEdBQUcsaUNBQWlDLHNCQUFzQix1QkFBdUIsc0JBQXNCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLG1CQUFtQix5QkFBeUIsR0FBRztBQUNoVDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLG1CQUFtQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixhQUFhLGNBQWMsR0FBRyx3QkFBd0IsK0RBQStELDREQUE0RCx1REFBdUQsdUJBQXVCLDRCQUE0Qix1QkFBdUIsZUFBZSxpQkFBaUIsZUFBZSxjQUFjLEdBQUcscUNBQXFDLDhCQUE4QixHQUFHLG1DQUFtQyxPQUFPLFlBQVksRUFBRSxTQUFTLGVBQWUsRUFBRSxHQUFHLHdDQUF3QyxPQUFPLFlBQVksRUFBRSxTQUFTLGVBQWUsRUFBRSxHQUFHLDJDQUEyQyxPQUFPLFlBQVksRUFBRSxTQUFTLGVBQWUsRUFBRSxHQUFHO0FBQ3R5QjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLElBQUksSUFBeUQ7QUFDN0QsMkJBQTJCLG1CQUFPLENBQUMsNENBQU87QUFDMUMsTUFBTSxFQUtxQztBQUMzQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLG9EQUFvRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRS9QLGtDQUFrQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRW5qQix3Q0FBd0MsbUJBQW1CLDRCQUE0QixpREFBaUQsZ0JBQWdCLGtEQUFrRCw4REFBOEQsMEJBQTBCLDRDQUE0Qyx1QkFBdUIsa0JBQWtCLEVBQUUsT0FBTyxhQUFhLGdCQUFnQixnQkFBZ0IsZUFBZSwyQkFBMkIsb0JBQW9CLEVBQUUsRUFBRSw0QkFBNEIsbUJBQW1CLEVBQUUsT0FBTyx1QkFBdUIsNEJBQTRCLGtCQUFrQixFQUFFLDhCQUE4QixFQUFFLEVBQUU7O0FBRWhwQix1Q0FBdUMsdUNBQXVDLGtCQUFrQjs7QUFFaEcsa0RBQWtELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFeEosMkNBQTJDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFN2U7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBOztBQUVBOztBQUVBLDREQUE0RCwwREFBMEQ7QUFDdEg7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixVQUFVLHdEQUF3RDtBQUN0RjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBLENBQUM7QUFDRDtBQUNBLDhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaElBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE9BQU8sR0FBR0MsMkRBQVEsR0FBR0MsSUFBekI7QUFFQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFFQSxJQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBO0FBQUEscUVBQWUsaUJBQU9DLE1BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQQyxrQkFETyxHQUNFLElBREY7O0FBRVgsZ0JBQUlELE1BQU0sQ0FBQ0UsWUFBWCxFQUF5QjtBQUNqQkMsZUFEaUIsR0FDYkgsTUFBTSxDQUFDRSxZQUFQLENBQW9CRSxLQUFwQixDQUEwQixvQkFBMUIsQ0FEYTs7QUFFckIsa0JBQUlELENBQUosRUFBTztBQUNIRixzQkFBTSxHQUFHSSxRQUFRLENBQUNGLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBakI7QUFDSDtBQUNKOztBQVBVLGtCQVFQLGlCQUFpQkgsTUFBTSxDQUFDTSxJQUF4QixJQUFnQ04sTUFBTSxDQUFDRSxZQUF2QyxJQUF1REYsTUFBTSxDQUFDTyxTQVJ2RDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxpQkFTSE4sTUFURztBQUFBO0FBQUE7QUFBQTs7QUFVQ08sNEJBVkQsR0FVb0JSLE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQk8sS0FBcEIsQ0FBMEIsQ0FBMUIsRUFBNkIsSUFBRVIsTUFBL0IsQ0FWcEI7QUFXQ1MsdUJBWEQsR0FXZUYsZ0JBQWdCLENBQUNHLEtBQWpCLENBQXVCLEdBQXZCLEVBQTRCLENBQTVCLENBWGY7O0FBQUEsZ0JBWUVaLFFBQVEsQ0FBQ1MsZ0JBQUQsQ0FaVjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQWNvQkksNkNBQUssQ0FBQztBQUNyQkMsb0JBQU0sRUFBRSxLQURhO0FBRXJCQyxpQkFBRyxZQUFLbkIsT0FBTCx3QkFBMEJlLFdBQTFCO0FBRmtCLGFBQUQsQ0FBTCxDQUdoQkssS0FIZ0IsQ0FHVixVQUFDQyxDQUFEO0FBQUEscUJBQU9DLHFEQUFTLENBQUNELENBQUQsQ0FBaEI7QUFBQSxhQUhVLENBZHBCOztBQUFBO0FBY0tFLGtCQWRMO0FBa0JDbkIsb0JBQVEsQ0FBQ1csV0FBRCxDQUFSLEdBQXdCUSxNQUFNLENBQUNDLElBQS9COztBQWxCRDtBQW9CQ0MsMEJBcEJELEdBb0JrQnJCLFFBQVEsQ0FBQ1csV0FBRCxDQXBCMUI7QUFxQkNXLGlCQXJCRCxHQXFCU0QsY0FBYyxDQUFDWixnQkFBRCxDQUFkLENBQWlDUixNQUFNLENBQUNPLFNBQXhDLENBckJUOztBQXNCSCxnQkFBSWMsS0FBSixFQUFXO0FBQ1ByQixvQkFBTSxDQUFDTyxTQUFQLEdBQW1CYyxLQUFuQjtBQUNIOztBQXhCRTtBQTJCWCxnQkFBSXBCLE1BQUosRUFBWTtBQUNKcUIsaUJBREksR0FDRXRCLE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQk8sS0FBcEIsQ0FBMEJSLE1BQU0sR0FBRyxDQUFuQyxFQUFzQ1UsS0FBdEMsQ0FBNEMsR0FBNUMsQ0FERjs7QUFFUixrQkFBSVcsR0FBRyxDQUFDQyxNQUFKLElBQWMsQ0FBbEIsRUFBcUI7QUFDakJ2QixzQkFBTSxDQUFDRSxZQUFQLEdBQXNCb0IsR0FBRyxDQUFDRSxJQUFKLENBQVMsR0FBVCxDQUF0QjtBQUNILGVBRkQsTUFFTztBQUNIeEIsc0JBQU0sQ0FBQ0UsWUFBUCxHQUFzQm9CLEdBQUcsQ0FBQ2IsS0FBSixDQUFVLENBQVYsRUFBYWUsSUFBYixDQUFrQixHQUFsQixDQUF0QjtBQUNIO0FBQ0osYUFsQ1UsQ0FvQ1g7QUFFQTs7O0FBdENXLGdCQXVDTjFCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDTSxJQUFSLENBdkNIO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBd0NZTSw2Q0FBSyxDQUFDO0FBQ3JCQyxvQkFBTSxFQUFFLEtBRGE7QUFFckJDLGlCQUFHLFlBQUtuQixPQUFMLHdCQUEwQkssTUFBTSxDQUFDTSxJQUFqQztBQUZrQixhQUFELENBeENqQjs7QUFBQTtBQXdDSFksa0JBeENHO0FBNENQcEIscUJBQVMsQ0FBQ0UsTUFBTSxDQUFDTSxJQUFSLENBQVQsR0FBeUJZLE1BQU0sQ0FBQ0MsSUFBaEM7O0FBNUNPO0FBOENQTSxvQkE5Q08sR0E4Q0kzQixTQUFTLENBQUNFLE1BQU0sQ0FBQ00sSUFBUixDQTlDYjtBQWdEUG9CLGVBaERPLEdBZ0RELEVBaERDO0FBQUEsa0RBaURLMUIsTUFqREw7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpREYyQixlQWpERTs7QUFBQSxrQkFrREgsU0FBU0EsR0FsRE47QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFtREhDLGVBbkRHLEdBbURHNUIsTUFBTSxDQUFDMkIsR0FBRCxDQW5EVDs7QUFvRFAsZ0JBQUksYUFBYSxPQUFPQyxHQUF4QixFQUE2QjtBQUN6QixrQkFBSSxnQkFBZ0IsT0FBT0EsR0FBRyxDQUFDTCxNQUEvQixFQUF1QztBQUNuQyxvQkFBSUssR0FBRyxDQUFDLFlBQUQsQ0FBSCxJQUFxQkEsR0FBRyxDQUFDLFlBQUQsQ0FBSCxDQUFrQixDQUFsQixDQUFyQixJQUE2Q0EsR0FBRyxDQUFDLFlBQUQsQ0FBSCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFqRCxFQUEwRTtBQUNsRUEscUJBRGtFLEdBQzVEQSxHQUFHLENBQUMsWUFBRCxDQUFILENBQWtCQyxHQUFsQixDQUFzQixVQUFBQyxJQUFJLEVBQUk7QUFDcEMsMkJBQU9BLElBQUksQ0FBQ04sSUFBTCxDQUFVLEdBQVYsQ0FBUDtBQUNILG1CQUZTLEVBRVBBLElBRk8sQ0FFRixHQUZFLENBRDREO0FBSXpFLGlCQUpELE1BSU8sSUFBSUksR0FBRyxDQUFDRyxPQUFSLEVBQWlCO0FBQ3BCSCxxQkFBRyxHQUFHQSxHQUFHLENBQUNHLE9BQVY7QUFDSDs7QUFDREwsbUJBQUcsQ0FBQ00sSUFBSixDQUFTO0FBQ0xDLHVCQUFLLEVBQUVSLFFBQVEsQ0FBQ0UsR0FBRCxDQURWO0FBRUxPLHVCQUFLLEVBQUVOO0FBRkYsaUJBQVQ7QUFJSCxlQVpELE1BWU87QUFDQ08seUJBREQsR0FDYVYsUUFBUSxDQUFDRSxHQUFELENBRHJCO0FBQUEsdURBRWNDLEdBRmQ7O0FBQUE7QUFFSCxzRUFBc0I7QUFBYlEsd0JBQWE7QUFDbEJWLHVCQUFHLENBQUNNLElBQUosQ0FBUztBQUNMQywyQkFBSyxFQUFFRSxTQURGO0FBRUxELDJCQUFLLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDQyxNQUFOLEVBQWNELElBQUksQ0FBQ0UsS0FBbkIsRUFBMEJkLElBQTFCLENBQStCLElBQS9CO0FBRkYscUJBQVQ7QUFJQVcsNkJBQVMsR0FBRyxFQUFaO0FBQ0g7QUFSRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU047QUFDSixhQXZCRCxNQXVCTyxJQUFJLFdBQVdSLEdBQWYsRUFBb0I7QUFDdkJELGlCQUFHLENBQUNNLElBQUosQ0FBUztBQUNMQyxxQkFBSyxFQUFFLFdBREY7QUFFTEMscUJBQUssRUFBRVQsUUFBUSxDQUFDRyxHQUFEO0FBRlYsZUFBVDtBQUlILGFBTE0sTUFLQTtBQUNIRixpQkFBRyxDQUFDTSxJQUFKLENBQVM7QUFDTEMscUJBQUssRUFBRVIsUUFBUSxDQUFDRSxHQUFELENBRFY7QUFFTE8scUJBQUssRUFBRU47QUFGRixlQUFUO0FBSUg7O0FBckZNO0FBQUE7O0FBQUE7QUFBQSw2Q0F1RkpGLEdBdkZJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RlLHlFQUFDVixDQUFELEVBQUl1QixLQUFKLEVBQWM7QUFDekIsTUFBSUEsS0FBSixFQUFXO0FBQ1BDLFdBQU8sQ0FBQ0MsR0FBUix1QkFBMkJ6QixDQUFDLENBQUMwQixPQUE3QixlQUF5Q0gsS0FBekM7QUFDSCxHQUZELE1BRU87QUFDSEMsV0FBTyxDQUFDQyxHQUFSLHVCQUEyQnpCLENBQUMsQ0FBQzBCLE9BQTdCO0FBQ0g7QUFDSixDQU5ELEU7Ozs7Ozs7Ozs7O0FDQUEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxxSUFBb0U7O0FBRXRHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSx5RUFBQ0MsS0FBRCxFQUFXO0FBQUEsa0JBQ1lDLHVEQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBO0FBQUEsTUFDZkMsU0FEZTtBQUFBLE1BQ0pDLFlBREk7O0FBRXRCLE1BQU1DLFFBQVEsR0FBR0MsMERBQVcsQ0FBQyxVQUFDN0IsSUFBRDtBQUFBLFdBQVUyQixZQUFZLENBQUMsVUFBQ0QsU0FBRDtBQUFBLGFBQWVBLFNBQVMsR0FBRzFCLElBQTNCO0FBQUEsS0FBRCxDQUF0QjtBQUFBLEdBQUQsRUFBMEQsRUFBMUQsQ0FBNUI7QUFDQThCLDBEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLElBQUk7QUFBQSx5RUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSHZCLG1CQURHLEdBQ0dnQixLQUFLLENBQUNRLEVBQU4sQ0FBUzFDLEtBQVQsQ0FBZSxDQUFDLENBQWhCLENBREg7QUFBQTtBQUFBLHVCQUVZRyw2Q0FBSyxDQUFDO0FBQUVFLHFCQUFHLEVBQUU2QixLQUFLLENBQUNoRCxPQUFOLEdBQWdCLFdBQWhCLEdBQThCZ0MsR0FBOUIsR0FBb0M7QUFBM0MsaUJBQUQsQ0FGakI7O0FBQUE7QUFFTHlCLHdCQUZLO0FBQUE7QUFBQSx1QkFJZUMsOERBQVMsQ0FBQ0QsUUFBUSxDQUFDakMsSUFBVixDQUp4Qjs7QUFBQTtBQUlMbUMsMkJBSks7QUFLVFAsd0JBQVEsQ0FBQ08sV0FBRCxDQUFSOztBQUxTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQUpKLElBQUk7QUFBQTtBQUFBO0FBQUEsT0FBUjs7QUFPQUEsUUFBSTtBQUNQLEdBVFEsRUFTTixFQVRNLENBQVQ7O0FBVUEsTUFBSUwsU0FBUyxDQUFDdEIsTUFBZCxFQUFzQjtBQUNsQix3QkFBTztBQUFPLGVBQVMsRUFBQztBQUFqQixvQkFDRSwyRUFFRHNCLFNBQVMsQ0FBQ2hCLEdBQVYsQ0FBYyxVQUFBMEIsSUFBSSxFQUFJO0FBQ2xCLDBCQUNJO0FBQUksV0FBRyxFQUFFQSxJQUFJLENBQUN0QjtBQUFkLHNCQUNJO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQXVCc0IsSUFBSSxDQUFDdEIsS0FBNUIsQ0FESixlQUVJO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQXVCc0IsSUFBSSxDQUFDckIsS0FBNUIsQ0FGSixDQURKO0FBTUgsS0FQRCxDQUZDLENBREYsQ0FBUDtBQWNILEdBZkQsTUFlTztBQUNILHdCQUFPLDREQUFDLHFEQUFELE9BQVA7QUFDSDtBQUVKLENBaENELEU7Ozs7Ozs7Ozs7O0FDUkEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw2SUFBd0U7O0FBRTFHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG4vLyBGRjQ5LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ21hdGNoJywgMSwgZnVuY3Rpb24gKE1BVENILCBuYXRpdmVNYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBtYXRjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICByZXR1cm4gbWF0Y2hlciAhPT0gdW5kZWZpbmVkID8gbWF0Y2hlci5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuXG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgbisrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICB9XG4gIF07XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGUtZGlzcGxheSAubGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50YWJsZS1kaXNwbGF5IC5sYWJlbDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCI6IFxcXCI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YWJsZS1kaXNwbGF5IC52YWx1ZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnNwaW4tY2VudHJhbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVhY3Qtc3Bpbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4ucmVhY3Qtc3Bpbm5lcl9iYXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJlYWN0LXNwaW5uZXJfc3BpbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIC1tb3otYW5pbWF0aW9uOiByZWFjdC1zcGlubmVyX3NwaW4gMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxuICBhbmltYXRpb246IHJlYWN0LXNwaW5uZXJfc3BpbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGhlaWdodDogNy44JTtcXG4gIHRvcDogNDYuMSU7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbi5ibGFjay13aGVlbCAucmVhY3Qtc3Bpbm5lcl9iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuQGtleWZyYW1lcyByZWFjdC1zcGlubmVyX3NwaW4ge1xcbiAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gMTAwJSB7IG9wYWNpdHk6IDAuMTU7IH1cXG59XFxuXFxuQC1tb3ota2V5ZnJhbWVzIHJlYWN0LXNwaW5uZXJfc3BpbiB7XFxuIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAxMDAlIHsgb3BhY2l0eTogMC4xNTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmVhY3Qtc3Bpbm5lcl9zcGluIHtcXG4gMCUgeyBvcGFjaXR5OiAxOyB9XFxuIDEwMCUgeyBvcGFjaXR5OiAwLjE1OyB9XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTcGlubmVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNwaW5uZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vYnVpbGRcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdHZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0ZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblx0XG5cdHZhciBfcmVhY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cdFxuXHR2YXIgU3Bpbm5lciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHQgIF9pbmhlcml0cyhTcGlubmVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblx0XG5cdCAgZnVuY3Rpb24gU3Bpbm5lcihwcm9wcykge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNwaW5uZXIpO1xuXHRcblx0ICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKFNwaW5uZXIucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcyk7XG5cdCAgfVxuXHRcblx0ICBfY3JlYXRlQ2xhc3MoU3Bpbm5lciwgW3tcblx0ICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHQgICAgICB2YXIgYmFycyA9IFtdO1xuXHQgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXHRcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG5cdCAgICAgICAgdmFyIGJhclN0eWxlID0ge307XG5cdCAgICAgICAgYmFyU3R5bGUuV2Via2l0QW5pbWF0aW9uRGVsYXkgPSBiYXJTdHlsZS5hbmltYXRpb25EZWxheSA9IChpIC0gMTIpIC8gMTAgKyAncyc7XG5cdFxuXHQgICAgICAgIGJhclN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IGJhclN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoJyArIGkgKiAzMCArICdkZWcpIHRyYW5zbGF0ZSgxNDYlKSc7XG5cdFxuXHQgICAgICAgIGJhcnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogYmFyU3R5bGUsIGNsYXNzTmFtZTogJ3JlYWN0LXNwaW5uZXJfYmFyJywga2V5OiBpIH0pKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICdkaXYnLFxuXHQgICAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IChwcm9wcy5jbGFzc05hbWUgfHwgJycpICsgJyByZWFjdC1zcGlubmVyJyB9KSxcblx0ICAgICAgICBiYXJzXG5cdCAgICAgICk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gU3Bpbm5lcjtcblx0fSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cdFxuXHQ7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTcGlubmVyO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1hcCIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVybFBhcnRzIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcbmltcG9ydCBoYW5kbGVFcnIgZnJvbSBcIi4vZXJyXCI7XG5cbnZhciB1cmxTdHViID0gdXJsUGFydHMoKS5iYXNlO1xuXG52YXIgbGFiZWxNYXBzID0ge307XG5cbnZhciBjb3VydE1hcCA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGNzbE9iaikgPT4ge1xuICAgIHZhciBvZmZzZXQgPSBudWxsO1xuICAgIGlmIChjc2xPYmouanVyaXNkaWN0aW9uKSB7XG4gICAgICAgIHZhciBtID0gY3NsT2JqLmp1cmlzZGljdGlvbi5tYXRjaCgvXihbMC05XVswLTldWzAtOV0pLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBwYXJzZUludChtWzFdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJsZWdhbF9jYXNlXCIgPT09IGNzbE9iai50eXBlICYmIGNzbE9iai5qdXJpc2RpY3Rpb24gJiYgY3NsT2JqLmF1dGhvcml0eSkge1xuICAgICAgICBpZiAob2Zmc2V0KSB7XG4gICAgICAgICAgICB2YXIganVyaXNkaWN0aW9uQ29kZSA9IGNzbE9iai5qdXJpc2RpY3Rpb24uc2xpY2UoMywgMytvZmZzZXQpO1xuICAgICAgICAgICAgdmFyIGNvdW50cnlDb2RlID0ganVyaXNkaWN0aW9uQ29kZS5zcGxpdChcIjpcIilbMF07XG4gICAgICAgICAgICBpZiAoIWNvdXJ0TWFwW2p1cmlzZGljdGlvbkNvZGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggY291cnRNYXAgZm9yIGp1cmlzZGljdGlvbiBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7dXJsU3R1Yn0vY291cnRNYXBzLyR7Y291bnRyeUNvZGV9Lmpzb25gXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IGhhbmRsZUVycihlKSk7XG4gICAgICAgICAgICAgICAgY291cnRNYXBbY291bnRyeUNvZGVdID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY291bnRyeUFiYnJldnMgPSBjb3VydE1hcFtjb3VudHJ5Q29kZV07XG4gICAgICAgICAgICB2YXIgY291cnQgPSBjb3VudHJ5QWJicmV2c1tqdXJpc2RpY3Rpb25Db2RlXVtjc2xPYmouYXV0aG9yaXR5XTtcbiAgICAgICAgICAgIGlmIChjb3VydCkge1xuICAgICAgICAgICAgICAgIGNzbE9iai5hdXRob3JpdHkgPSBjb3VydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob2Zmc2V0KSB7XG4gICAgICAgIHZhciBsc3QgPSBjc2xPYmouanVyaXNkaWN0aW9uLnNsaWNlKG9mZnNldCArIDMpLnNwbGl0KFwifFwiKTtcbiAgICAgICAgaWYgKGxzdC5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgY3NsT2JqLmp1cmlzZGljdGlvbiA9IGxzdC5qb2luKFwifFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzbE9iai5qdXJpc2RpY3Rpb24gPSBsc3Quc2xpY2UoMSkuam9pbihcInxcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPa2F5LCBncmVhdC4gV2UgaGF2ZSBhIENTTCBKU09OIG9iamVjdCB3aXRoIGh1bWFuLXJlYWRhYmxlIGNvbnRlbnQuXG4gICAgXG4gICAgLy8gTG9hZCB0aGUgbGFiZWxzXG4gICAgaWYgKCFsYWJlbE1hcHNbY3NsT2JqLnR5cGVdKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICB1cmw6IGAke3VybFN0dWJ9L2xhYmVsTWFwcy8ke2NzbE9iai50eXBlfS5qc29uYFxuICAgICAgICB9KTtcbiAgICAgICAgbGFiZWxNYXBzW2NzbE9iai50eXBlXSA9IHJlc3VsdC5kYXRhO1xuICAgIH1cbiAgICB2YXIgbGFiZWxNYXAgPSBsYWJlbE1hcHNbY3NsT2JqLnR5cGVdO1xuICAgIFxuICAgIHZhciByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gY3NsT2JqKSB7XG4gICAgICAgIGlmIChcImlkXCIgPT09IGtleSkgY29udGludWU7XG4gICAgICAgIHZhciB2YWwgPSBjc2xPYmpba2V5XTtcbiAgICAgICAgaWYgKFwib2JqZWN0XCIgPT09IHR5cGVvZiB2YWwpIHtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgdmFsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWxbXCJkYXRlLXBhcnRzXCJdICYmIHZhbFtcImRhdGUtcGFydHNcIl1bMF0gJiYgdmFsW1wiZGF0ZS1wYXJ0c1wiXVswXVswXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdmFsW1wiZGF0ZS1wYXJ0c1wiXS5tYXAoZGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5qb2luKFwiLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbihcIi9cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWwubGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWwubGl0ZXJhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxNYXBba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZUxhYmVsID0gbGFiZWxNYXBba2V5XTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIG9mIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbmFtZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtuYW1lLmZhbWlseSwgbmFtZS5naXZlbl0uam9pbihcIiwgXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBuYW1lTGFiZWwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcInR5cGVcIiA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiSXRlbSBUeXBlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGxhYmVsTWFwW3ZhbF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbE1hcFtrZXldLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoZSwgZXh0cmEpID0+IHtcbiAgICBpZiAoZXh0cmEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEF4aW9zIGZhaWw6ICR7ZS5tZXNzYWdlfSAoJHtleHRyYX0pYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYEF4aW9zIGZhaWw6ICR7ZS5tZXNzYWdlfWApO1xuICAgIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vZmllbGRsaXN0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICcuL2ZpZWxkbGlzdC5jc3MnO1xuaW1wb3J0IGRpc3BsYXllciBmcm9tIFwiLi9kaXNwbGF5ZXIuanNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1zcGlubmVyXCI7XG5cbmltcG9ydCAnLi9yZWFjdC1zcGlubmVyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtsaXN0SXRlbXMsIHNldExpc3RJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgZ2V0SXRlbXMgPSB1c2VDYWxsYmFjaygoZGF0YSkgPT4gc2V0TGlzdEl0ZW1zKChsaXN0SXRlbXMpID0+IGxpc3RJdGVtcyA9IGRhdGEpLCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmFyIGZ1bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gcHJvcHMuaWQuc2xpY2UoLTgpO1xuICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHsgdXJsOiBwcm9wcy51cmxTdHViICsgJ2l0ZW1kYXRhLycgKyBrZXkgKyAnLmpzb24nIH0pO1xuICAgICAgICAgIC8vIE1hZ2ljIGhlcmUgdG8gdHJhbnNmb3JtIENTTCBrZXkvdmFsIG9uIGl0ZW0gdG8gYXJyYXkgb2YgbGFiZWwgKyB2YWx1ZSBvYmplY3RzXG4gICAgICAgICAgdmFyIGRpc3BsYXlJdGVtID0gYXdhaXQgZGlzcGxheWVyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIGdldEl0ZW1zKGRpc3BsYXlJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW10pO1xuICAgIGlmIChsaXN0SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1zLm1hcChpbmZvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZm8ubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsYWJlbFwiPntpbmZvLmxhYmVsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInZhbHVlXCI+e2luZm8udmFsdWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPFNwaW5uZXIgLz5cbiAgICB9XG4gICAgXG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL3JlYWN0LXNwaW5uZXIuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=