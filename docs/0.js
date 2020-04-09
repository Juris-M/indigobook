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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Qtc3Bpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXIvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXJyLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZGxpc3QuY3NzP2Y5OGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LXNwaW5uZXIuY3NzP2NjMjUiXSwibmFtZXMiOlsidXJsU3R1YiIsInVybFBhcnRzIiwiYmFzZSIsImxhYmVsTWFwcyIsImNvdXJ0TWFwIiwiY3NsT2JqIiwib2Zmc2V0IiwianVyaXNkaWN0aW9uIiwibSIsIm1hdGNoIiwicGFyc2VJbnQiLCJ0eXBlIiwiYXV0aG9yaXR5IiwianVyaXNkaWN0aW9uQ29kZSIsInNsaWNlIiwiY291bnRyeUNvZGUiLCJzcGxpdCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiY2F0Y2giLCJlIiwiaGFuZGxlRXJyIiwicmVzdWx0IiwiZGF0YSIsImNvdW50cnlBYmJyZXZzIiwiY291cnQiLCJsc3QiLCJsZW5ndGgiLCJqb2luIiwibGFiZWxNYXAiLCJyZXQiLCJrZXkiLCJ2YWwiLCJtYXAiLCJkYXRlIiwibGl0ZXJhbCIsInB1c2giLCJsYWJlbCIsInZhbHVlIiwibmFtZUxhYmVsIiwibmFtZSIsImZhbWlseSIsImdpdmVuIiwiZXh0cmEiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInByb3BzIiwidXNlU3RhdGUiLCJsaXN0SXRlbXMiLCJzZXRMaXN0SXRlbXMiLCJnZXRJdGVtcyIsInVzZUNhbGxiYWNrIiwidXNlRWZm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QztBQUEzQyxpQkFBRCxDQUZqQjs7QUFBQTtBQUVMeUIsd0JBRks7QUFBQTtBQUFBLHVCQUllQyw4REFBUyxDQUFDRCxRQUFRLENBQUNqQyxJQUFWLENBSnhCOztBQUFBO0FBSUxtQywyQkFKSztBQUtUUCx3QkFBUSxDQUFDTyxXQUFELENBQVI7O0FBTFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBSkosSUFBSTtBQUFBO0FBQUE7QUFBQSxPQUFSOztBQU9BQSxRQUFJO0FBQ1AsR0FUUSxFQVNOLEVBVE0sQ0FBVDs7QUFVQSxNQUFJTCxTQUFTLENBQUN0QixNQUFkLEVBQXNCO0FBQ2xCLHdCQUFPO0FBQU8sZUFBUyxFQUFDO0FBQWpCLG9CQUNFLDJFQUVEc0IsU0FBUyxDQUFDaEIsR0FBVixDQUFjLFVBQUEwQixJQUFJLEVBQUk7QUFDbEIsMEJBQ0k7QUFBSSxXQUFHLEVBQUVBLElBQUksQ0FBQ3RCO0FBQWQsc0JBQ0k7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBdUJzQixJQUFJLENBQUN0QixLQUE1QixDQURKLGVBRUk7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBdUJzQixJQUFJLENBQUNyQixLQUE1QixDQUZKLENBREo7QUFNSCxLQVBELENBRkMsQ0FERixDQUFQO0FBY0gsR0FmRCxNQWVPO0FBQ0gsd0JBQU8sNERBQUMscURBQUQsT0FBUDtBQUNIO0FBRUosQ0FoQ0QsRTs7Ozs7Ozs7Ozs7QUNSQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDZJQUF3RTs7QUFFMUc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcbi8vIEZGNDktIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYmxlLWRpc3BsYXkgLmxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udGFibGUtZGlzcGxheSAubGFiZWw6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiOiBcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFibGUtZGlzcGxheSAudmFsdWUge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5zcGluLWNlbnRyYWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0LXNwaW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLnJlYWN0LXNwaW5uZXJfYmFyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByZWFjdC1zcGlubmVyX3NwaW4gMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxuICAtbW96LWFuaW1hdGlvbjogcmVhY3Qtc3Bpbm5lcl9zcGluIDEuMnMgbGluZWFyIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiByZWFjdC1zcGlubmVyX3NwaW4gMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDcuOCU7XFxuICB0b3A6IDQ2LjElO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4uYmxhY2std2hlZWwgLnJlYWN0LXNwaW5uZXJfYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbkBrZXlmcmFtZXMgcmVhY3Qtc3Bpbm5lcl9zcGluIHtcXG4gMCUgeyBvcGFjaXR5OiAxOyB9XFxuIDEwMCUgeyBvcGFjaXR5OiAwLjE1OyB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyByZWFjdC1zcGlubmVyX3NwaW4ge1xcbiAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gMTAwJSB7IG9wYWNpdHk6IDAuMTU7IH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJlYWN0LXNwaW5uZXJfc3BpbiB7XFxuIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAxMDAlIHsgb3BhY2l0eTogMC4xNTsgfVxcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3Bpbm5lclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTcGlubmVyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2J1aWxkXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHR2YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cdFxuXHR2YXIgX3JlYWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXHRcblx0dmFyIFNwaW5uZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0ICBfaW5oZXJpdHMoU3Bpbm5lciwgX1JlYWN0JENvbXBvbmVudCk7XG5cdFxuXHQgIGZ1bmN0aW9uIFNwaW5uZXIocHJvcHMpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTcGlubmVyKTtcblx0XG5cdCAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihTcGlubmVyLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgcHJvcHMpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKFNwaW5uZXIsIFt7XG5cdCAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0ICAgICAgdmFyIGJhcnMgPSBbXTtcblx0ICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblx0XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xuXHQgICAgICAgIHZhciBiYXJTdHlsZSA9IHt9O1xuXHQgICAgICAgIGJhclN0eWxlLldlYmtpdEFuaW1hdGlvbkRlbGF5ID0gYmFyU3R5bGUuYW5pbWF0aW9uRGVsYXkgPSAoaSAtIDEyKSAvIDEwICsgJ3MnO1xuXHRcblx0ICAgICAgICBiYXJTdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSBiYXJTdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKCcgKyBpICogMzAgKyAnZGVnKSB0cmFuc2xhdGUoMTQ2JSknO1xuXHRcblx0ICAgICAgICBiYXJzLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IGJhclN0eWxlLCBjbGFzc05hbWU6ICdyZWFjdC1zcGlubmVyX2JhcicsIGtleTogaSB9KSk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAnZGl2Jyxcblx0ICAgICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiAocHJvcHMuY2xhc3NOYW1lIHx8ICcnKSArICcgcmVhY3Qtc3Bpbm5lcicgfSksXG5cdCAgICAgICAgYmFyc1xuXHQgICAgICApO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIFNwaW5uZXI7XG5cdH0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXHRcblx0O1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gU3Bpbm5lcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tYXAiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1cmxQYXJ0cyB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgaGFuZGxlRXJyIGZyb20gXCIuL2VyclwiO1xuXG52YXIgdXJsU3R1YiA9IHVybFBhcnRzKCkuYmFzZTtcblxudmFyIGxhYmVsTWFwcyA9IHt9O1xuXG52YXIgY291cnRNYXAgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChjc2xPYmopID0+IHtcbiAgICB2YXIgb2Zmc2V0ID0gbnVsbDtcbiAgICBpZiAoY3NsT2JqLmp1cmlzZGljdGlvbikge1xuICAgICAgICB2YXIgbSA9IGNzbE9iai5qdXJpc2RpY3Rpb24ubWF0Y2goL14oWzAtOV1bMC05XVswLTldKS8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwibGVnYWxfY2FzZVwiID09PSBjc2xPYmoudHlwZSAmJiBjc2xPYmouanVyaXNkaWN0aW9uICYmIGNzbE9iai5hdXRob3JpdHkpIHtcbiAgICAgICAgaWYgKG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIGp1cmlzZGljdGlvbkNvZGUgPSBjc2xPYmouanVyaXNkaWN0aW9uLnNsaWNlKDMsIDMrb2Zmc2V0KTtcbiAgICAgICAgICAgIHZhciBjb3VudHJ5Q29kZSA9IGp1cmlzZGljdGlvbkNvZGUuc3BsaXQoXCI6XCIpWzBdO1xuICAgICAgICAgICAgaWYgKCFjb3VydE1hcFtqdXJpc2RpY3Rpb25Db2RlXSkge1xuICAgICAgICAgICAgICAgIC8vIEZldGNoIGNvdXJ0TWFwIGZvciBqdXJpc2RpY3Rpb24gaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAke3VybFN0dWJ9L2NvdXJ0TWFwcy8ke2NvdW50cnlDb2RlfS5qc29uYFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiBoYW5kbGVFcnIoZSkpO1xuICAgICAgICAgICAgICAgIGNvdXJ0TWFwW2NvdW50cnlDb2RlXSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvdW50cnlBYmJyZXZzID0gY291cnRNYXBbY291bnRyeUNvZGVdO1xuICAgICAgICAgICAgdmFyIGNvdXJ0ID0gY291bnRyeUFiYnJldnNbanVyaXNkaWN0aW9uQ29kZV1bY3NsT2JqLmF1dGhvcml0eV07XG4gICAgICAgICAgICBpZiAoY291cnQpIHtcbiAgICAgICAgICAgICAgICBjc2xPYmouYXV0aG9yaXR5ID0gY291cnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9mZnNldCkge1xuICAgICAgICB2YXIgbHN0ID0gY3NsT2JqLmp1cmlzZGljdGlvbi5zbGljZShvZmZzZXQgKyAzKS5zcGxpdChcInxcIik7XG4gICAgICAgIGlmIChsc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgIGNzbE9iai5qdXJpc2RpY3Rpb24gPSBsc3Quam9pbihcInxcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc2xPYmouanVyaXNkaWN0aW9uID0gbHN0LnNsaWNlKDEpLmpvaW4oXCJ8XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gT2theSwgZ3JlYXQuIFdlIGhhdmUgYSBDU0wgSlNPTiBvYmplY3Qgd2l0aCBodW1hbi1yZWFkYWJsZSBjb250ZW50LlxuICAgIFxuICAgIC8vIExvYWQgdGhlIGxhYmVsc1xuICAgIGlmICghbGFiZWxNYXBzW2NzbE9iai50eXBlXSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgdXJsOiBgJHt1cmxTdHVifS9sYWJlbE1hcHMvJHtjc2xPYmoudHlwZX0uanNvbmBcbiAgICAgICAgfSk7XG4gICAgICAgIGxhYmVsTWFwc1tjc2xPYmoudHlwZV0gPSByZXN1bHQuZGF0YTtcbiAgICB9XG4gICAgdmFyIGxhYmVsTWFwID0gbGFiZWxNYXBzW2NzbE9iai50eXBlXTtcbiAgICBcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIGNzbE9iaikge1xuICAgICAgICBpZiAoXCJpZFwiID09PSBrZXkpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgdmFsID0gY3NsT2JqW2tleV07XG4gICAgICAgIGlmIChcIm9iamVjdFwiID09PSB0eXBlb2YgdmFsKSB7XG4gICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHZhbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsW1wiZGF0ZS1wYXJ0c1wiXSAmJiB2YWxbXCJkYXRlLXBhcnRzXCJdWzBdICYmIHZhbFtcImRhdGUtcGFydHNcIl1bMF1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHZhbFtcImRhdGUtcGFydHNcIl0ubWFwKGRhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuam9pbihcIi1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oXCIvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsLmxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLmxpdGVyYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsTWFwW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVMYWJlbCA9IGxhYmVsTWFwW2tleV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBvZiB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG5hbWVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbbmFtZS5mYW1pbHksIG5hbWUuZ2l2ZW5dLmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZUxhYmVsID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXCJ0eXBlXCIgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkl0ZW0gVHlwZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBsYWJlbE1hcFt2YWxdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxNYXBba2V5XSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKGUsIGV4dHJhKSA9PiB7XG4gICAgaWYgKGV4dHJhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX0gKCR7ZXh0cmF9KWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBeGlvcyBmYWlsOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL2ZpZWxkbGlzdC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2t9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnLi9maWVsZGxpc3QuY3NzJztcbmltcG9ydCBkaXNwbGF5ZXIgZnJvbSBcIi4vZGlzcGxheWVyLmpzXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3Qtc3Bpbm5lclwiO1xuXG5pbXBvcnQgJy4vcmVhY3Qtc3Bpbm5lci5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbbGlzdEl0ZW1zLCBzZXRMaXN0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGdldEl0ZW1zID0gdXNlQ2FsbGJhY2soKGRhdGEpID0+IHNldExpc3RJdGVtcygobGlzdEl0ZW1zKSA9PiBsaXN0SXRlbXMgPSBkYXRhKSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZhciBmdW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IHByb3BzLmlkLnNsaWNlKC04KTtcbiAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7IHVybDogcHJvcHMudXJsU3R1YiArICdpdGVtZGF0YS8nICsga2V5ICsgJy5qc29uJyB9KTtcbiAgICAgICAgICAvLyBNYWdpYyBoZXJlIHRvIHRyYW5zZm9ybSBDU0wga2V5L3ZhbCBvbiBpdGVtIHRvIGFycmF5IG9mIGxhYmVsICsgdmFsdWUgb2JqZWN0c1xuICAgICAgICAgIHZhciBkaXNwbGF5SXRlbSA9IGF3YWl0IGRpc3BsYXllcihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBnZXRJdGVtcyhkaXNwbGF5SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFtdKTtcbiAgICBpZiAobGlzdEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtcy5tYXAoaW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmZvLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGFiZWxcIj57aW5mby5sYWJlbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ2YWx1ZVwiPntpbmZvLnZhbHVlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxTcGlubmVyIC8+XG4gICAgfVxuICAgIFxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9yZWFjdC1zcGlubmVyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9