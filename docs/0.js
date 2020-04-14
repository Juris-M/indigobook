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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Qtc3Bpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXIvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXJyLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZGxpc3QuY3NzP2Y5OGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LXNwaW5uZXIuY3NzP2NjMjUiXSwibmFtZXMiOlsidXJsU3R1YiIsInVybFBhcnRzIiwiYmFzZSIsInBvc2l0aW9uTWFwIiwibGFiZWxNYXBzIiwiY291cnRNYXAiLCJjc2xPYmoiLCJsb2NhdG9yIiwicG9zaXRpb24iLCJvZmZzZXQiLCJqdXJpc2RpY3Rpb24iLCJtIiwibWF0Y2giLCJwYXJzZUludCIsInR5cGUiLCJhdXRob3JpdHkiLCJqdXJpc2RpY3Rpb25Db2RlIiwic2xpY2UiLCJjb3VudHJ5Q29kZSIsInNwbGl0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJjYXRjaCIsImUiLCJoYW5kbGVFcnIiLCJyZXN1bHQiLCJkYXRhIiwiY291bnRyeUFiYnJldnMiLCJjb3VydCIsImxzdCIsImxlbmd0aCIsImpvaW4iLCJsYWJlbE1hcCIsInJldCIsImtleSIsInZhbCIsIm1hcCIsImRhdGUiLCJsaXRlcmFsIiwicHVzaCIsImxhYmVsIiwidmFsdWUiLCJuYW1lTGFiZWwiLCJuYW1lIiwiZmFtaWx5IiwiZ2l2ZW4iLCJleHRyYSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3RJdGVtcyIsInNldExpc3RJdGVtcyIsImdldEl0ZW1zIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJmdW5jIiwicGFyYW1zIiwiaWQiLCJyZXNwb25zZSIsImRpc3BsYXllciIsImRpc3BsYXlJdGVtIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMseUZBQThCO0FBQ2pELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQztBQUMxRiw4QkFBOEIsbUJBQU8sQ0FBQyxpSEFBMEM7O0FBRWhGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGdGQUFnRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNqQkQ7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUywwQkFBMEIsd0JBQXdCLHdCQUF3QixHQUFHLGlDQUFpQyxzQkFBc0IsdUJBQXVCLHNCQUFzQixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxtQkFBbUIseUJBQXlCLEdBQUc7QUFDaFQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxtQkFBbUIsdUJBQXVCLGdCQUFnQixpQkFBaUIsYUFBYSxjQUFjLEdBQUcsd0JBQXdCLCtEQUErRCw0REFBNEQsdURBQXVELHVCQUF1Qiw0QkFBNEIsdUJBQXVCLGVBQWUsaUJBQWlCLGVBQWUsY0FBYyxHQUFHLHFDQUFxQyw4QkFBOEIsR0FBRyxtQ0FBbUMsT0FBTyxZQUFZLEVBQUUsU0FBUyxlQUFlLEVBQUUsR0FBRyx3Q0FBd0MsT0FBTyxZQUFZLEVBQUUsU0FBUyxlQUFlLEVBQUUsR0FBRywyQ0FBMkMsT0FBTyxZQUFZLEVBQUUsU0FBUyxlQUFlLEVBQUUsR0FBRztBQUN0eUI7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxJQUFJLElBQXlEO0FBQzdELDJCQUEy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QXVCdUIsSUFBSSxDQUFDdEIsS0FBNUIsQ0FGSixDQURKO0FBTUgsS0FQRCxDQUZDLENBREYsQ0FBUDtBQWNILEdBZkQsTUFlTztBQUNILHdCQUFPLDREQUFDLHFEQUFELE9BQVA7QUFDSDtBQUVKLENBL0JELEU7Ozs7Ozs7Ozs7O0FDUkEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw2SUFBd0U7O0FBRTFHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG4vLyBGRjQ5LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YWJsZS1kaXNwbGF5IC5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhYmxlLWRpc3BsYXkgLmxhYmVsOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIjogXFxcIjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhYmxlLWRpc3BsYXkgLnZhbHVlIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uc3Bpbi1jZW50cmFsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZWFjdC1zcGlubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbi5yZWFjdC1zcGlubmVyX2JhciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcmVhY3Qtc3Bpbm5lcl9zcGluIDEuMnMgbGluZWFyIGluZmluaXRlO1xcbiAgLW1vei1hbmltYXRpb246IHJlYWN0LXNwaW5uZXJfc3BpbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogcmVhY3Qtc3Bpbm5lcl9zcGluIDEuMnMgbGluZWFyIGluZmluaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiA3LjglO1xcbiAgdG9wOiA0Ni4xJTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLmJsYWNrLXdoZWVsIC5yZWFjdC1zcGlubmVyX2JhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJlYWN0LXNwaW5uZXJfc3BpbiB7XFxuIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAxMDAlIHsgb3BhY2l0eTogMC4xNTsgfVxcbn1cXG5cXG5ALW1vei1rZXlmcmFtZXMgcmVhY3Qtc3Bpbm5lcl9zcGluIHtcXG4gMCUgeyBvcGFjaXR5OiAxOyB9XFxuIDEwMCUgeyBvcGFjaXR5OiAwLjE1OyB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByZWFjdC1zcGlubmVyX3NwaW4ge1xcbiAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gMTAwJSB7IG9wYWNpdHk6IDAuMTU7IH1cXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlNwaW5uZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3Bpbm5lclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9idWlsZFwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0dmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHRmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXHRcblx0dmFyIF9yZWFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblx0XG5cdHZhciBTcGlubmVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdCAgX2luaGVyaXRzKFNwaW5uZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXHRcblx0ICBmdW5jdGlvbiBTcGlubmVyKHByb3BzKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3Bpbm5lcik7XG5cdFxuXHQgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3Bpbm5lci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhTcGlubmVyLCBbe1xuXHQgICAga2V5OiAncmVuZGVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdCAgICAgIHZhciBiYXJzID0gW107XG5cdCAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cdFxuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcblx0ICAgICAgICB2YXIgYmFyU3R5bGUgPSB7fTtcblx0ICAgICAgICBiYXJTdHlsZS5XZWJraXRBbmltYXRpb25EZWxheSA9IGJhclN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gKGkgLSAxMikgLyAxMCArICdzJztcblx0XG5cdCAgICAgICAgYmFyU3R5bGUuV2Via2l0VHJhbnNmb3JtID0gYmFyU3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgaSAqIDMwICsgJ2RlZykgdHJhbnNsYXRlKDE0NiUpJztcblx0XG5cdCAgICAgICAgYmFycy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHN0eWxlOiBiYXJTdHlsZSwgY2xhc3NOYW1lOiAncmVhY3Qtc3Bpbm5lcl9iYXInLCBrZXk6IGkgfSkpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgJ2RpdicsXG5cdCAgICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCB7IGNsYXNzTmFtZTogKHByb3BzLmNsYXNzTmFtZSB8fCAnJykgKyAnIHJlYWN0LXNwaW5uZXInIH0pLFxuXHQgICAgICAgIGJhcnNcblx0ICAgICAgKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBTcGlubmVyO1xuXHR9KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblx0XG5cdDtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNwaW5uZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWFwIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXJsUGFydHMgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuaW1wb3J0IGhhbmRsZUVyciBmcm9tIFwiLi9lcnJcIjtcblxudmFyIHVybFN0dWIgPSB1cmxQYXJ0cygpLmJhc2U7XG5cbnZhciBwb3NpdGlvbk1hcCA9IHtcbiAgICBcIjBcIjogXCJGaXJzdCByZWZlcmVuY2VcIixcbiAgICBcIjFcIjogXCJTdWJzZXF1ZW50IHJlZmVyZW5jZVwiLFxuICAgIFwiMlwiOiBcIklkLiByZWZlcmVuY2VcIixcbiAgICBcIjNcIjogXCJJZC4gcmVmZXJlbmNlIHdpdGggbG9jYXRvclwiXG59O1xuXG52YXIgbGFiZWxNYXBzID0ge307XG5cbnZhciBjb3VydE1hcCA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGNzbE9iaiwgbG9jYXRvciwgcG9zaXRpb24pID0+IHtcbiAgICB2YXIgb2Zmc2V0ID0gbnVsbDtcbiAgICBpZiAoY3NsT2JqLmp1cmlzZGljdGlvbikge1xuICAgICAgICB2YXIgbSA9IGNzbE9iai5qdXJpc2RpY3Rpb24ubWF0Y2goL14oWzAtOV1bMC05XVswLTldKS8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gcGFyc2VJbnQobVsxXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwibGVnYWxfY2FzZVwiID09PSBjc2xPYmoudHlwZSAmJiBjc2xPYmouanVyaXNkaWN0aW9uICYmIGNzbE9iai5hdXRob3JpdHkpIHtcbiAgICAgICAgaWYgKG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIGp1cmlzZGljdGlvbkNvZGUgPSBjc2xPYmouanVyaXNkaWN0aW9uLnNsaWNlKDMsIDMrb2Zmc2V0KTtcbiAgICAgICAgICAgIHZhciBjb3VudHJ5Q29kZSA9IGp1cmlzZGljdGlvbkNvZGUuc3BsaXQoXCI6XCIpWzBdO1xuICAgICAgICAgICAgaWYgKCFjb3VydE1hcFtqdXJpc2RpY3Rpb25Db2RlXSkge1xuICAgICAgICAgICAgICAgIC8vIEZldGNoIGNvdXJ0TWFwIGZvciBqdXJpc2RpY3Rpb24gaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAke3VybFN0dWJ9L2NvdXJ0TWFwcy8ke2NvdW50cnlDb2RlfS5qc29uYFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiBoYW5kbGVFcnIoZSkpO1xuICAgICAgICAgICAgICAgIGNvdXJ0TWFwW2NvdW50cnlDb2RlXSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvdW50cnlBYmJyZXZzID0gY291cnRNYXBbY291bnRyeUNvZGVdO1xuICAgICAgICAgICAgdmFyIGNvdXJ0ID0gY291bnRyeUFiYnJldnNbanVyaXNkaWN0aW9uQ29kZV1bY3NsT2JqLmF1dGhvcml0eV07XG4gICAgICAgICAgICBpZiAoY291cnQpIHtcbiAgICAgICAgICAgICAgICBjc2xPYmouYXV0aG9yaXR5ID0gY291cnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9mZnNldCkge1xuICAgICAgICB2YXIgbHN0ID0gY3NsT2JqLmp1cmlzZGljdGlvbi5zbGljZShvZmZzZXQgKyAzKS5zcGxpdChcInxcIik7XG4gICAgICAgIGlmIChsc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgIGNzbE9iai5qdXJpc2RpY3Rpb24gPSBsc3Quam9pbihcInxcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc2xPYmouanVyaXNkaWN0aW9uID0gbHN0LnNsaWNlKDEpLmpvaW4oXCJ8XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gT2theSwgZ3JlYXQuIFdlIGhhdmUgYSBDU0wgSlNPTiBvYmplY3Qgd2l0aCBodW1hbi1yZWFkYWJsZSBjb250ZW50LlxuICAgIFxuICAgIC8vIExvYWQgdGhlIGxhYmVsc1xuICAgIGlmICghbGFiZWxNYXBzW2NzbE9iai50eXBlXSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgdXJsOiBgJHt1cmxTdHVifS9sYWJlbE1hcHMvJHtjc2xPYmoudHlwZX0uanNvbmBcbiAgICAgICAgfSk7XG4gICAgICAgIGxhYmVsTWFwc1tjc2xPYmoudHlwZV0gPSByZXN1bHQuZGF0YTtcbiAgICB9XG4gICAgdmFyIGxhYmVsTWFwID0gbGFiZWxNYXBzW2NzbE9iai50eXBlXTtcbiAgICBcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIGNzbE9iaikge1xuICAgICAgICBpZiAoXCJpZFwiID09PSBrZXkpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgdmFsID0gY3NsT2JqW2tleV07XG4gICAgICAgIGlmIChcIm9iamVjdFwiID09PSB0eXBlb2YgdmFsKSB7XG4gICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHZhbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsW1wiZGF0ZS1wYXJ0c1wiXSAmJiB2YWxbXCJkYXRlLXBhcnRzXCJdWzBdICYmIHZhbFtcImRhdGUtcGFydHNcIl1bMF1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHZhbFtcImRhdGUtcGFydHNcIl0ubWFwKGRhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuam9pbihcIi1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oXCIvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsLmxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLmxpdGVyYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsTWFwW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVMYWJlbCA9IGxhYmVsTWFwW2tleV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBvZiB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG5hbWVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbbmFtZS5mYW1pbHksIG5hbWUuZ2l2ZW5dLmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZUxhYmVsID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXCJ0eXBlXCIgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkl0ZW0gVHlwZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBsYWJlbE1hcFt2YWxdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxNYXBba2V5XSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobG9jYXRvcikge1xuICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogXCJMb2NhdG9yXCIsXG4gICAgICAgICAgICB2YWx1ZTogbG9jYXRvclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0LnB1c2goe1xuICAgICAgICBsYWJlbDogXCJQb3NpdGlvblwiLFxuICAgICAgICB2YWx1ZTogcG9zaXRpb25NYXBbcG9zaXRpb25dXG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IChlLCBleHRyYSkgPT4ge1xuICAgIGlmIChleHRyYSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQXhpb3MgZmFpbDogJHtlLm1lc3NhZ2V9ICgke2V4dHJhfSlgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgQXhpb3MgZmFpbDogJHtlLm1lc3NhZ2V9YCk7XG4gICAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9maWVsZGxpc3QuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJy4vZmllbGRsaXN0LmNzcyc7XG5pbXBvcnQgZGlzcGxheWVyIGZyb20gXCIuL2Rpc3BsYXllci5qc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJcIjtcblxuaW1wb3J0ICcuL3JlYWN0LXNwaW5uZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2xpc3RJdGVtcywgc2V0TGlzdEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBnZXRJdGVtcyA9IHVzZUNhbGxiYWNrKChkYXRhKSA9PiBzZXRMaXN0SXRlbXMoKGxpc3RJdGVtcykgPT4gbGlzdEl0ZW1zID0gZGF0YSksIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgZnVuYyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHsgdXJsOiBwcm9wcy51cmxTdHViICsgJ2l0ZW1kYXRhLycgKyBwcm9wcy5wYXJhbXMuaWQgKyAnLmpzb24nIH0pO1xuICAgICAgICAgICAgLy8gTWFnaWMgaGVyZSB0byB0cmFuc2Zvcm0gQ1NMIGtleS92YWwgb24gaXRlbSB0byBhcnJheSBvZiBsYWJlbCArIHZhbHVlIG9iamVjdHNcbiAgICAgICAgICAgIHZhciBkaXNwbGF5SXRlbSA9IGF3YWl0IGRpc3BsYXllcihyZXNwb25zZS5kYXRhLCBwcm9wcy5wYXJhbXMubG9jYXRvciwgcHJvcHMucGFyYW1zLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGdldEl0ZW1zKGRpc3BsYXlJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW10pO1xuICAgIGlmIChsaXN0SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1zLm1hcChpbmZvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZm8ubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsYWJlbFwiPntpbmZvLmxhYmVsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInZhbHVlXCI+e2luZm8udmFsdWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPFNwaW5uZXIgLz5cbiAgICB9XG4gICAgXG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL3JlYWN0LXNwaW5uZXIuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=