(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkPull"],{

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var getFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var setInternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").set;
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "./src/checkpull.js":
/*!**************************!*\
  !*** ./src/checkpull.js ***!
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
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var _saver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./saver */ "./src/saver.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var fromBase64 = Object(_utils_js__WEBPACK_IMPORTED_MODULE_15__["getFromBase64"])(atob);

var checkPull = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(citationInfo) {
    var html_id, result, userName, apiToken, contents, txt, lst, keys, state, rex, res, _i, _keys, key, buf, _iterator, _step, line;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            html_id = citationInfo.html_id; // pullreq sets userName in localStorage
            // Apart from that, it serves here to screen out pull requests
            // that have been closed on merge or rejection.

            _context.next = 3;
            return Object(_saver__WEBPACK_IMPORTED_MODULE_14__["pullreq"])(html_id);

          case 3:
            result = _context.sent;

            if (!(result && result.length)) {
              _context.next = 26;
              break;
            }

            window.localStorage.setItem('cite_url', result[0].html_url); // This value is the same as "html_id" in localStorage
            // var html_id = result[0].head.ref;

            userName = window.localStorage.getItem("cite_userName");
            apiToken = window.localStorage.getItem('access_token');
            _context.next = 10;
            return Object(_saver__WEBPACK_IMPORTED_MODULE_14__["apiCall"])({
              apiSection: "repos",
              repoPath: "".concat(userName, "/jsti-indigobook"),
              apiSuffix: "contents/style_".concat(html_id, ".txt?ref=").concat(html_id),
              apiToken: "".concat(apiToken)
            });

          case 10:
            contents = _context.sent;
            txt = fromBase64(contents.content);
            lst = txt.split("\n");
            keys = ["DESCRIPTION", "RESULT"];
            state = {};
            rex = {
              open: {},
              close: {}
            };
            res = {};

            for (_i = 0, _keys = keys; _i < _keys.length; _i++) {
              key = _keys[_i];
              state[key] = false;
              rex.open[key] = new RegExp(">=+\\s+".concat(key, "\\s+=+>"));
              rex.close[key] = new RegExp("<=+\\s+".concat(key, "\\s+=+<"));
            }

            ;
            buf = [];
            _iterator = _createForOfIteratorHelper(lst);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                line = _step.value;

                if (state.DESCRIPTION || state.RESULT) {
                  buf.push(line);
                }

                for (key in state) {
                  if (line.match(rex.open[key])) {
                    state[key] = true;
                  } else if (line.match(rex.close[key])) {
                    buf.pop();
                    res[key] = buf.join("\n");
                    buf = [];
                    state[key] = false;
                  }
                }
              } // Okay, did it work?

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            window.localStorage.setItem("citation", res.RESULT);
            window.localStorage.setItem("cite_desc", res.DESCRIPTION);
            _context.next = 27;
            break;

          case 26:
            window.localStorage.removeItem("cite_desc");

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkPull(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (checkPull);

/***/ }),

/***/ "./src/saver.js":
/*!**********************!*\
  !*** ./src/saver.js ***!
  \**********************/
/*! exports provided: saver, pullreq, apiCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saver", function() { return saver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pullreq", function() { return pullreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCall", function() { return apiCall; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // const base64 = require("base-64");
// const utf8 = require("utf8");

var apiStub = "https://api.github.com";

var handleErr = function handleErr(e, label, quiet) {
  var msg = e.message;

  if (label) {
    msg = "".concat(label, ": ").concat(msg);
  }

  if (!quiet) {
    console.log(msg);
  }
};

var protect = function protect(obj) {
  return JSON.parse(JSON.stringify(obj));
};

var buildFileName = function buildFileName(citeCode) {
  return "style_".concat(citeCode, ".txt");
};

var toBase64 = Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["getToBase64"])(btoa);

var apiCall = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(props, quiet) {
    var mth, pth, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mth = props.apiMethod ? props.apiMethod : "get";
            pth = [props.apiSection, props.repoPath, props.apiSuffix].filter(function (o) {
              return o;
            }).join("/");
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_7___default()({
              method: mth,
              url: "".concat(apiStub, "/").concat(pth),
              headers: {
                Authorization: "token ".concat(props.apiToken)
              },
              data: props.params
            }).catch(function (e) {
              return handleErr(e, "API fail", quiet);
            });

          case 4:
            result = _context.sent;
            return _context.abrupt("return", result ? result.data : false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function apiCall(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var GitHub = function GitHub() {
  _classCallCheck(this, GitHub);

  this.client = function (apiToken) {
    return new Client(apiToken);
  };
};

var Client = function Client(apiToken) {
  _classCallCheck(this, Client);

  this.repo = repo.bind({
    apiToken: apiToken
  });
  this.me = me.bind({
    apiToken: apiToken
  });
};

var Repo = function Repo(props) {
  _classCallCheck(this, Repo);

  // Clone properties and reset to repo defaults
  props = protect(props);
  this.apiMethod = "get";
  this.apiSection = "repos";
  this.repoPath = props.result.full_name;
  this.apiSuffix = false;
  this.info = info.bind(props);
  this.fork = fork.bind(props);
  this.commits = commits.bind(props);
  this.patch = patch.bind(props);
  this.getBranch = getBranch.bind(props);
  this.deleteBranch = deleteBranch.bind(props);
  this.setBranch = setBranch.bind(props);
  this.getContents = getContents.bind(props);
  this.updateContents = updateContents.bind(props);
  this.createPullRequest = createPullRequest.bind(props);
  this.getPullRequest = getPullRequest.bind(props);
};

function info() {
  return this.result;
}

function repo(_x3, _x4) {
  return _repo.apply(this, arguments);
}

function _repo() {
  _repo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(repoPath, quiet) {
    var props;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "get";
            props.apiSection = "repos";
            props.repoPath = repoPath;
            props.apiSuffix = false;
            _context4.next = 7;
            return apiCall(props, quiet);

          case 7:
            props.result = _context4.sent;
            return _context4.abrupt("return", new Repo(props));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _repo.apply(this, arguments);
}

;

function me() {
  return _me.apply(this, arguments);
}

function _me() {
  _me = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var props;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            props = protect(this);
            props.apiSection = "user";
            _context5.next = 4;
            return apiCall(props);

          case 4:
            props.result = _context5.sent;
            return _context5.abrupt("return", new Repo(props));

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _me.apply(this, arguments);
}

function fork(_x5) {
  return _fork.apply(this, arguments);
}

function _fork() {
  _fork = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(repoPath) {
    var props;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "post";
            props.apiSection = "repos";
            props.repoPath = repoPath;
            props.apiSuffix = "forks";
            _context6.next = 7;
            return apiCall(props);

          case 7:
            props.result = _context6.sent;
            return _context6.abrupt("return", new Repo(props));

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _fork.apply(this, arguments);
}

function commits() {
  return _commits.apply(this, arguments);
}

function _commits() {
  _commits = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var props;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            props = protect(this);
            props.apiSuffix = "commits?sha=master";
            return _context7.abrupt("return", apiCall(props));

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _commits.apply(this, arguments);
}

function patch(_x6) {
  return _patch.apply(this, arguments);
}

function _patch() {
  _patch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(headSHA) {
    var props;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "patch";
            props.apiSuffix = "git/refs/heads/master";
            props.params = {
              sha: headSHA,
              force: true
            };
            return _context8.abrupt("return", apiCall(props));

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _patch.apply(this, arguments);
}

function getBranch(_x7, _x8) {
  return _getBranch.apply(this, arguments);
}

function _getBranch() {
  _getBranch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(branchName, quiet) {
    var props;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            props = protect(this);
            props.apiSuffix = "git/ref/heads/".concat(branchName);
            return _context9.abrupt("return", apiCall(props, quiet));

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));
  return _getBranch.apply(this, arguments);
}

function deleteBranch(_x9) {
  return _deleteBranch.apply(this, arguments);
}

function _deleteBranch() {
  _deleteBranch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(citeCode) {
    var props;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "delete";
            props.apiSuffix = "git/refs/heads/".concat(citeCode);
            return _context10.abrupt("return", apiCall(props));

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));
  return _deleteBranch.apply(this, arguments);
}

function setBranch(_x10, _x11) {
  return _setBranch.apply(this, arguments);
}

function _setBranch() {
  _setBranch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(branchName, SHA) {
    var props;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "post";
            props.apiSuffix = "git/refs";
            props.params = {
              ref: "refs/heads/".concat(branchName),
              sha: SHA
            };
            return _context11.abrupt("return", apiCall(props));

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));
  return _setBranch.apply(this, arguments);
}

function getContents(_x12) {
  return _getContents.apply(this, arguments);
}

function _getContents() {
  _getContents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(citeCode) {
    var props, fileName;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            props = protect(this);
            fileName = buildFileName(citeCode);
            props.apiSuffix = "contents/".concat(fileName, "?ref=").concat(encodeURIComponent(citeCode));
            return _context12.abrupt("return", apiCall(props));

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));
  return _getContents.apply(this, arguments);
}

function updateContents(_x13, _x14, _x15) {
  return _updateContents.apply(this, arguments);
}

function _updateContents() {
  _updateContents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(citeCode, content, contentsSHA) {
    var props, fileName;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            props = protect(this);
            fileName = buildFileName(citeCode);
            props.apiMethod = "put";
            props.apiSuffix = "contents/".concat(fileName);
            props.params = {
              message: "Proposed edit",
              content: content,
              branch: citeCode
            };

            if (contentsSHA) {
              props.params.sha = contentsSHA;
            }

            return _context13.abrupt("return", apiCall(props));

          case 7:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));
  return _updateContents.apply(this, arguments);
}

function createPullRequest(_x16, _x17, _x18) {
  return _createPullRequest.apply(this, arguments);
}

function _createPullRequest() {
  _createPullRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(citeCode, userName, comment) {
    var props;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "post";
            props.apiSuffix = "pulls";
            props.params = {
              title: "Citation: ".concat(citeCode),
              head: "".concat(userName, ":").concat(citeCode),
              base: "master",
              body: comment,
              maintainer_can_modify: true
            };
            return _context14.abrupt("return", apiCall(props));

          case 5:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, this);
  }));
  return _createPullRequest.apply(this, arguments);
}

function getPullRequest(_x19, _x20) {
  return _getPullRequest.apply(this, arguments);
}

function _getPullRequest() {
  _getPullRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(citeCode, userName) {
    var props;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "get";
            props.apiSuffix = "pulls?head=".concat(userName, ":").concat(citeCode);
            return _context15.abrupt("return", apiCall(props));

          case 4:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, this);
  }));
  return _getPullRequest.apply(this, arguments);
}

var github = new GitHub();

var saver = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(citeCode, testContent, comment) {
    var apiToken, client, ghrepo, userName, ghfork, result, commits, headSHA, branch, newContent, oldContent, contentsSHA;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Create client
            // console.log("(1)");
            apiToken = window.localStorage.getItem('access_token');
            client = github.client(apiToken); // Instantiate test repo
            // console.log("(2)");

            _context2.next = 4;
            return client.repo("Juris-M/jsti-indigobook");

          case 4:
            ghrepo = _context2.sent;
            // Get user name and user ID
            // console.log("(3)");
            userName = window.localStorage.getItem("cite_userName"); // Instantiate fork, creating if necessary (true is for quiet)
            // console.log("(4)");

            _context2.next = 8;
            return client.repo("".concat(userName, "/jsti-indigobook"), true);

          case 8:
            ghfork = _context2.sent;
            result = ghfork.info();

            if (result.full_name) {
              _context2.next = 14;
              break;
            }

            _context2.next = 13;
            return ghme.fork('Juris-M/jsti-indigobook').catch(function (e) {
              return handleErr(e, "create fork");
            });

          case 13:
            result = _context2.sent;

          case 14:
            _context2.next = 16;
            return ghrepo.commits();

          case 16:
            commits = _context2.sent;

            if (!(commits.length !== 0)) {
              _context2.next = 21;
              break;
            }

            headSHA = commits[0].sha; // console.log("(7)");

            _context2.next = 21;
            return ghfork.patch(headSHA);

          case 21:
            // Get branch pointer
            // Scrubbing an existing branch for this cite code, if any, will
            // also remove any pull requests associated with it. Pull requests
            // will always consist of a single commit.
            // console.log("(8)");
            branch = ghfork.getBranch(citeCode, true);

            if (!branch) {
              _context2.next = 25;
              break;
            }

            _context2.next = 25;
            return ghfork.deleteBranch(citeCode);

          case 25:
            _context2.next = 27;
            return ghfork.setBranch(citeCode, headSHA);

          case 27:
            branch = _context2.sent;
            _context2.next = 30;
            return ghfork.getContents(citeCode);

          case 30:
            result = _context2.sent;
            newContent = toBase64(testContent);

            if (result) {
              _context2.next = 38;
              break;
            }

            _context2.next = 35;
            return ghfork.updateContents(citeCode, newContent);

          case 35:
            result = ghrepo.createPullRequest(citeCode, userName, comment);
            _context2.next = 44;
            break;

          case 38:
            oldContent = result.content.split("\n").join("");

            if (!(newContent !== oldContent)) {
              _context2.next = 44;
              break;
            }

            contentsSHA = result.sha; // console.log("(12)");

            _context2.next = 43;
            return ghfork.updateContents(citeCode, newContent, contentsSHA);

          case 43:
            result = ghrepo.createPullRequest(citeCode, userName, comment);

          case 44:
            return _context2.abrupt("return", result);

          case 45:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function saver(_x21, _x22, _x23) {
    return _ref2.apply(this, arguments);
  };
}();

var pullreq = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(citeCode) {
    var apiToken, client, ghrepo, ghme, myinfo;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            apiToken = window.localStorage.getItem('access_token');
            client = github.client(apiToken);
            _context3.next = 4;
            return client.repo("Juris-M/jsti-indigobook");

          case 4:
            ghrepo = _context3.sent;
            _context3.next = 7;
            return client.me();

          case 7:
            ghme = _context3.sent;
            myinfo = ghme.info();
            window.localStorage.setItem("cite_userName", myinfo.login);
            return _context3.abrupt("return", ghrepo.getPullRequest(citeCode, myinfo.login));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function pullreq(_x24) {
    return _ref3.apply(this, arguments);
  };
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2twdWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXZlci5qcyJdLCJuYW1lcyI6WyJmcm9tQmFzZTY0IiwiZ2V0RnJvbUJhc2U2NCIsImF0b2IiLCJjaGVja1B1bGwiLCJjaXRhdGlvbkluZm8iLCJodG1sX2lkIiwicHVsbHJlcSIsInJlc3VsdCIsImxlbmd0aCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJodG1sX3VybCIsInVzZXJOYW1lIiwiZ2V0SXRlbSIsImFwaVRva2VuIiwiYXBpQ2FsbCIsImFwaVNlY3Rpb24iLCJyZXBvUGF0aCIsImFwaVN1ZmZpeCIsImNvbnRlbnRzIiwidHh0IiwiY29udGVudCIsImxzdCIsInNwbGl0Iiwia2V5cyIsInN0YXRlIiwicmV4Iiwib3BlbiIsImNsb3NlIiwicmVzIiwia2V5IiwiUmVnRXhwIiwiYnVmIiwibGluZSIsIkRFU0NSSVBUSU9OIiwiUkVTVUxUIiwicHVzaCIsIm1hdGNoIiwicG9wIiwiam9pbiIsInJlbW92ZUl0ZW0iLCJhcGlTdHViIiwiaGFuZGxlRXJyIiwiZSIsImxhYmVsIiwicXVpZXQiLCJtc2ciLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInByb3RlY3QiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJidWlsZEZpbGVOYW1lIiwiY2l0ZUNvZGUiLCJ0b0Jhc2U2NCIsImdldFRvQmFzZTY0IiwiYnRvYSIsInByb3BzIiwibXRoIiwiYXBpTWV0aG9kIiwicHRoIiwiZmlsdGVyIiwibyIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwicGFyYW1zIiwiY2F0Y2giLCJHaXRIdWIiLCJjbGllbnQiLCJDbGllbnQiLCJyZXBvIiwiYmluZCIsIm1lIiwiUmVwbyIsImZ1bGxfbmFtZSIsImluZm8iLCJmb3JrIiwiY29tbWl0cyIsInBhdGNoIiwiZ2V0QnJhbmNoIiwiZGVsZXRlQnJhbmNoIiwic2V0QnJhbmNoIiwiZ2V0Q29udGVudHMiLCJ1cGRhdGVDb250ZW50cyIsImNyZWF0ZVB1bGxSZXF1ZXN0IiwiZ2V0UHVsbFJlcXVlc3QiLCJoZWFkU0hBIiwic2hhIiwiZm9yY2UiLCJicmFuY2hOYW1lIiwiU0hBIiwicmVmIiwiZmlsZU5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJjb250ZW50c1NIQSIsImJyYW5jaCIsImNvbW1lbnQiLCJ0aXRsZSIsImhlYWQiLCJiYXNlIiwiYm9keSIsIm1haW50YWluZXJfY2FuX21vZGlmeSIsImdpdGh1YiIsInNhdmVyIiwidGVzdENvbnRlbnQiLCJnaHJlcG8iLCJnaGZvcmsiLCJnaG1lIiwibmV3Q29udGVudCIsIm9sZENvbnRlbnQiLCJteWluZm8iLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxxQkFBcUIsbUJBQU8sQ0FBQyx5R0FBc0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDcEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLDhCQUE4QixtQkFBTyxDQUFDLGlIQUEwQzs7QUFFaEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0ZBQWdGO0FB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Rzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFMd0csS0FBSztBQUFBO0FBQUE7QUFBQSxHQUFYOztBQWtFQSxJQUFNekcsT0FBTztBQUFBLHNFQUFHLGtCQUFPbUQsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUjFDLG9CQURRLEdBQ0dOLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkksT0FBcEIsQ0FBNEIsY0FBNUIsQ0FESDtBQUVSOEQsa0JBRlEsR0FFQ2tDLE1BQU0sQ0FBQ2xDLE1BQVAsQ0FBYzdELFFBQWQsQ0FGRDtBQUFBO0FBQUEsbUJBR082RCxNQUFNLENBQUNFLElBQVAsQ0FBWSx5QkFBWixDQUhQOztBQUFBO0FBR1JtQyxrQkFIUTtBQUFBO0FBQUEsbUJBSUtyQyxNQUFNLENBQUNJLEVBQVAsRUFKTDs7QUFBQTtBQUlSbUMsZ0JBSlE7QUFLUkcsa0JBTFEsR0FLQ0gsSUFBSSxDQUFDaEMsSUFBTCxFQUxEO0FBTVoxRSxrQkFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixlQUE1QixFQUE2QzJHLE1BQU0sQ0FBQ0MsS0FBcEQ7QUFOWSw4Q0FRTE4sTUFBTSxDQUFDcEIsY0FBUCxDQUFzQnBDLFFBQXRCLEVBQWdDNkQsTUFBTSxDQUFDQyxLQUF2QyxDQVJLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBqSCxPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWIiLCJmaWxlIjoiY2hlY2tQdWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG4gIGlmIChcbiAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcbiAgICBzZXRQcm90b3R5cGVPZiAmJlxuICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcbiAgICB0eXBlb2YgKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSA9PSAnZnVuY3Rpb24nICYmXG4gICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG4gICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcbiAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG4gICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG4gIHJldHVybiAkdGhpcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG4vLyBFZGdlIDE0LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcbnZhciBnZXRGbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1zdGlja3ktaGVscGVycycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJykuc2V0O1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xudmFyIE5hdGl2ZVJlZ0V4cCA9IGdsb2JhbC5SZWdFeHA7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gTmF0aXZlUmVnRXhwLnByb3RvdHlwZTtcbnZhciByZTEgPSAvYS9nO1xudmFyIHJlMiA9IC9hL2c7XG5cbi8vIFwibmV3XCIgc2hvdWxkIGNyZWF0ZSBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnXG52YXIgQ09SUkVDVF9ORVcgPSBuZXcgTmF0aXZlUmVnRXhwKHJlMSkgIT09IHJlMTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLlVOU1VQUE9SVEVEX1k7XG5cbnZhciBGT1JDRUQgPSBERVNDUklQVE9SUyAmJiBpc0ZvcmNlZCgnUmVnRXhwJywgKCFDT1JSRUNUX05FVyB8fCBVTlNVUFBPUlRFRF9ZIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmUyW01BVENIXSA9IGZhbHNlO1xuICAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuICByZXR1cm4gTmF0aXZlUmVnRXhwKHJlMSkgIT0gcmUxIHx8IE5hdGl2ZVJlZ0V4cChyZTIpID09IHJlMiB8fCBOYXRpdmVSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcbn0pKSk7XG5cbi8vIGBSZWdFeHBgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAtY29uc3RydWN0b3JcbmlmIChGT1JDRUQpIHtcbiAgdmFyIFJlZ0V4cFdyYXBwZXIgPSBmdW5jdGlvbiBSZWdFeHAocGF0dGVybiwgZmxhZ3MpIHtcbiAgICB2YXIgdGhpc0lzUmVnRXhwID0gdGhpcyBpbnN0YW5jZW9mIFJlZ0V4cFdyYXBwZXI7XG4gICAgdmFyIHBhdHRlcm5Jc1JlZ0V4cCA9IGlzUmVnRXhwKHBhdHRlcm4pO1xuICAgIHZhciBmbGFnc0FyZVVuZGVmaW5lZCA9IGZsYWdzID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIHN0aWNreTtcblxuICAgIGlmICghdGhpc0lzUmVnRXhwICYmIHBhdHRlcm5Jc1JlZ0V4cCAmJiBwYXR0ZXJuLmNvbnN0cnVjdG9yID09PSBSZWdFeHBXcmFwcGVyICYmIGZsYWdzQXJlVW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG5cbiAgICBpZiAoQ09SUkVDVF9ORVcpIHtcbiAgICAgIGlmIChwYXR0ZXJuSXNSZWdFeHAgJiYgIWZsYWdzQXJlVW5kZWZpbmVkKSBwYXR0ZXJuID0gcGF0dGVybi5zb3VyY2U7XG4gICAgfSBlbHNlIGlmIChwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwV3JhcHBlcikge1xuICAgICAgaWYgKGZsYWdzQXJlVW5kZWZpbmVkKSBmbGFncyA9IGdldEZsYWdzLmNhbGwocGF0dGVybik7XG4gICAgICBwYXR0ZXJuID0gcGF0dGVybi5zb3VyY2U7XG4gICAgfVxuXG4gICAgaWYgKFVOU1VQUE9SVEVEX1kpIHtcbiAgICAgIHN0aWNreSA9ICEhZmxhZ3MgJiYgZmxhZ3MuaW5kZXhPZigneScpID4gLTE7XG4gICAgICBpZiAoc3RpY2t5KSBmbGFncyA9IGZsYWdzLnJlcGxhY2UoL3kvZywgJycpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBpbmhlcml0SWZSZXF1aXJlZChcbiAgICAgIENPUlJFQ1RfTkVXID8gbmV3IE5hdGl2ZVJlZ0V4cChwYXR0ZXJuLCBmbGFncykgOiBOYXRpdmVSZWdFeHAocGF0dGVybiwgZmxhZ3MpLFxuICAgICAgdGhpc0lzUmVnRXhwID8gdGhpcyA6IFJlZ0V4cFByb3RvdHlwZSxcbiAgICAgIFJlZ0V4cFdyYXBwZXJcbiAgICApO1xuXG4gICAgaWYgKFVOU1VQUE9SVEVEX1kgJiYgc3RpY2t5KSBzZXRJbnRlcm5hbFN0YXRlKHJlc3VsdCwgeyBzdGlja3k6IHN0aWNreSB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBrZXkgaW4gUmVnRXhwV3JhcHBlciB8fCBkZWZpbmVQcm9wZXJ0eShSZWdFeHBXcmFwcGVyLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTmF0aXZlUmVnRXhwW2tleV07IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChpdCkgeyBOYXRpdmVSZWdFeHBba2V5XSA9IGl0OyB9XG4gICAgfSk7XG4gIH07XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhOYXRpdmVSZWdFeHApO1xuICB2YXIgaW5kZXggPSAwO1xuICB3aGlsZSAoa2V5cy5sZW5ndGggPiBpbmRleCkgcHJveHkoa2V5c1tpbmRleCsrXSk7XG4gIFJlZ0V4cFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlZ0V4cFdyYXBwZXI7XG4gIFJlZ0V4cFdyYXBwZXIucHJvdG90eXBlID0gUmVnRXhwUHJvdG90eXBlO1xuICByZWRlZmluZShnbG9iYWwsICdSZWdFeHAnLCBSZWdFeHBXcmFwcGVyKTtcbn1cblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC1AQHNwZWNpZXNcbnNldFNwZWNpZXMoJ1JlZ0V4cCcpO1xuIiwiaW1wb3J0IHsgcHVsbHJlcSwgYXBpQ2FsbCB9IGZyb20gJy4vc2F2ZXInO1xuaW1wb3J0IHsgZ2V0RnJvbUJhc2U2NCB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5cbmNvbnN0IGZyb21CYXNlNjQgPSBnZXRGcm9tQmFzZTY0KGF0b2IpO1xuXG5jb25zdCBjaGVja1B1bGwgPSBhc3luYyAoY2l0YXRpb25JbmZvKSA9PiB7XG4gICAgdmFyIGh0bWxfaWQgPSBjaXRhdGlvbkluZm8uaHRtbF9pZDtcbiAgICAvLyBwdWxscmVxIHNldHMgdXNlck5hbWUgaW4gbG9jYWxTdG9yYWdlXG4gICAgLy8gQXBhcnQgZnJvbSB0aGF0LCBpdCBzZXJ2ZXMgaGVyZSB0byBzY3JlZW4gb3V0IHB1bGwgcmVxdWVzdHNcbiAgICAvLyB0aGF0IGhhdmUgYmVlbiBjbG9zZWQgb24gbWVyZ2Ugb3IgcmVqZWN0aW9uLlxuICAgIHZhciByZXN1bHQgPSBhd2FpdCBwdWxscmVxKGh0bWxfaWQpO1xuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGVfdXJsJywgcmVzdWx0WzBdLmh0bWxfdXJsKTtcbiAgICAgICAgLy8gVGhpcyB2YWx1ZSBpcyB0aGUgc2FtZSBhcyBcImh0bWxfaWRcIiBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgLy8gdmFyIGh0bWxfaWQgPSByZXN1bHRbMF0uaGVhZC5yZWY7XG4gICAgICAgIHZhciB1c2VyTmFtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGVfdXNlck5hbWVcIik7XG4gICAgICAgIHZhciBhcGlUb2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgICAgIHZhciBjb250ZW50cyA9IGF3YWl0IGFwaUNhbGwoe1xuICAgICAgICAgICAgYXBpU2VjdGlvbjogXCJyZXBvc1wiLFxuICAgICAgICAgICAgcmVwb1BhdGg6IGAke3VzZXJOYW1lfS9qc3RpLWluZGlnb2Jvb2tgLFxuICAgICAgICAgICAgYXBpU3VmZml4OiBgY29udGVudHMvc3R5bGVfJHtodG1sX2lkfS50eHQ/cmVmPSR7aHRtbF9pZH1gLFxuICAgICAgICAgICAgYXBpVG9rZW46IGAke2FwaVRva2VufWBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0eHQgPSBmcm9tQmFzZTY0KGNvbnRlbnRzLmNvbnRlbnQpO1xuICAgICAgICB2YXIgbHN0ID0gdHh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICB2YXIga2V5cyA9IFtcIkRFU0NSSVBUSU9OXCIsIFwiUkVTVUxUXCJdO1xuICAgICAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICAgICAgdmFyIHJleCA9IHtcbiAgICAgICAgICAgIG9wZW46IHt9LFxuICAgICAgICAgICAgY2xvc2U6IHt9XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgIHN0YXRlW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgIHJleC5vcGVuW2tleV0gPSBuZXcgUmVnRXhwKGA+PStcXFxccyske2tleX1cXFxccys9Kz5gKTtcbiAgICAgICAgICAgIHJleC5jbG9zZVtrZXldID0gbmV3IFJlZ0V4cChgPD0rXFxcXHMrJHtrZXl9XFxcXHMrPSs8YCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBidWYgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgbGluZSBvZiBsc3QpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5ERVNDUklQVElPTiB8fCBzdGF0ZS5SRVNVTFQpIHtcbiAgICAgICAgICAgICAgICBidWYucHVzaChsaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChsaW5lLm1hdGNoKHJleC5vcGVuW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGluZS5tYXRjaChyZXguY2xvc2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNba2V5XSA9IGJ1Zi5qb2luKFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICBidWYgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9rYXksIGRpZCBpdCB3b3JrP1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRhdGlvblwiLCByZXMuUkVTVUxUKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0ZV9kZXNjXCIsIHJlcy5ERVNDUklQVElPTik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2l0ZV9kZXNjXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tQdWxsO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZ2V0VG9CYXNlNjQgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuLy8gY29uc3QgYmFzZTY0ID0gcmVxdWlyZShcImJhc2UtNjRcIik7XG4vLyBjb25zdCB1dGY4ID0gcmVxdWlyZShcInV0ZjhcIik7XG5cbmNvbnN0IGFwaVN0dWIgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb21cIjtcblxuY29uc3QgaGFuZGxlRXJyID0gKGUsIGxhYmVsLCBxdWlldCkgPT4ge1xuICAgIHZhciBtc2cgPSBlLm1lc3NhZ2U7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICAgIG1zZyA9IGAke2xhYmVsfTogJHttc2d9YDtcbiAgICB9XG4gICAgaWYgKCFxdWlldCkge1xuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIH1cbn1cblxuY29uc3QgcHJvdGVjdCA9IChvYmopID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuY29uc3QgYnVpbGRGaWxlTmFtZSA9IChjaXRlQ29kZSkgPT4ge1xuICAgIHJldHVybiBgc3R5bGVfJHtjaXRlQ29kZX0udHh0YDtcbn1cblxuY29uc3QgdG9CYXNlNjQgPSBnZXRUb0Jhc2U2NChidG9hKTtcblxuY29uc3QgYXBpQ2FsbCA9IGFzeW5jIChwcm9wcywgcXVpZXQpID0+IHtcbiAgICB2YXIgbXRoID0gcHJvcHMuYXBpTWV0aG9kID8gcHJvcHMuYXBpTWV0aG9kIDogXCJnZXRcIjtcbiAgICB2YXIgcHRoID0gW3Byb3BzLmFwaVNlY3Rpb24sIHByb3BzLnJlcG9QYXRoLCBwcm9wcy5hcGlTdWZmaXhdLmZpbHRlcigobykgPT4gbykuam9pbihcIi9cIik7XG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBtdGgsXG4gICAgICAgIHVybDogYCR7YXBpU3R1Yn0vJHtwdGh9YCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7cHJvcHMuYXBpVG9rZW59YFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBwcm9wcy5wYXJhbXNcbiAgICB9KS5jYXRjaCgoZSkgPT4gaGFuZGxlRXJyKGUsIFwiQVBJIGZhaWxcIiwgcXVpZXQpKTtcbiAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0LmRhdGEgOiBmYWxzZTtcbn1cblxuY2xhc3MgR2l0SHViIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSAoYXBpVG9rZW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2xpZW50KGFwaVRva2VuKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNsYXNzIENsaWVudCB7XG4gICAgY29uc3RydWN0b3IoYXBpVG9rZW4pIHtcbiAgICAgICAgdGhpcy5yZXBvID0gcmVwby5iaW5kKHtcbiAgICAgICAgICAgIGFwaVRva2VuOiBhcGlUb2tlblxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tZSA9IG1lLmJpbmQoe1xuICAgICAgICAgICAgYXBpVG9rZW46IGFwaVRva2VuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgUmVwbyB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIC8vIENsb25lIHByb3BlcnRpZXMgYW5kIHJlc2V0IHRvIHJlcG8gZGVmYXVsdHNcbiAgICAgICAgcHJvcHMgPSBwcm90ZWN0KHByb3BzKTtcbiAgICAgICAgdGhpcy5hcGlNZXRob2QgPSBcImdldFwiO1xuICAgICAgICB0aGlzLmFwaVNlY3Rpb24gPSBcInJlcG9zXCI7XG4gICAgICAgIHRoaXMucmVwb1BhdGggPSBwcm9wcy5yZXN1bHQuZnVsbF9uYW1lO1xuICAgICAgICB0aGlzLmFwaVN1ZmZpeCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mby5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5mb3JrID0gZm9yay5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5jb21taXRzID0gY29tbWl0cy5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5wYXRjaCA9IHBhdGNoLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmdldEJyYW5jaCA9IGdldEJyYW5jaC5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5kZWxldGVCcmFuY2ggPSBkZWxldGVCcmFuY2guYmluZChwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0QnJhbmNoID0gc2V0QnJhbmNoLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmdldENvbnRlbnRzID0gZ2V0Q29udGVudHMuYmluZChwcm9wcyk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudHMgPSB1cGRhdGVDb250ZW50cy5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQdWxsUmVxdWVzdCA9IGNyZWF0ZVB1bGxSZXF1ZXN0LmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmdldFB1bGxSZXF1ZXN0ID0gZ2V0UHVsbFJlcXVlc3QuYmluZChwcm9wcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmZvICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcG8gKHJlcG9QYXRoLCBxdWlldCkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgcHJvcHMuYXBpTWV0aG9kID0gXCJnZXRcIjtcbiAgICBwcm9wcy5hcGlTZWN0aW9uID0gXCJyZXBvc1wiO1xuICAgIHByb3BzLnJlcG9QYXRoID0gcmVwb1BhdGg7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gZmFsc2U7XG4gICAgcHJvcHMucmVzdWx0ID0gYXdhaXQgYXBpQ2FsbChwcm9wcywgcXVpZXQpO1xuICAgIHJldHVybiBuZXcgUmVwbyhwcm9wcyk7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBtZSAoKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlTZWN0aW9uID0gXCJ1c2VyXCI7XG4gICAgcHJvcHMucmVzdWx0ID0gYXdhaXQgYXBpQ2FsbChwcm9wcyk7XG4gICAgcmV0dXJuIG5ldyBSZXBvKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZm9yayAocmVwb1BhdGgpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaU1ldGhvZCA9IFwicG9zdFwiO1xuICAgIHByb3BzLmFwaVNlY3Rpb24gPSBcInJlcG9zXCI7XG4gICAgcHJvcHMucmVwb1BhdGggPSByZXBvUGF0aDtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBcImZvcmtzXCI7XG4gICAgcHJvcHMucmVzdWx0ID0gYXdhaXQgYXBpQ2FsbChwcm9wcyk7XG4gICAgcmV0dXJuIG5ldyBSZXBvKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tbWl0cyAoKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBgY29tbWl0cz9zaGE9bWFzdGVyYDtcbiAgICByZXR1cm4gYXBpQ2FsbChwcm9wcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBhdGNoIChoZWFkU0hBKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInBhdGNoXCI7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gXCJnaXQvcmVmcy9oZWFkcy9tYXN0ZXJcIjtcbiAgICBwcm9wcy5wYXJhbXMgPSB7XG4gICAgICAgIHNoYTogaGVhZFNIQSxcbiAgICAgICAgZm9yY2U6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBhcGlDYWxsKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoIChicmFuY2hOYW1lLCBxdWlldCkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gYGdpdC9yZWYvaGVhZHMvJHticmFuY2hOYW1lfWA7XG4gICAgcmV0dXJuIGFwaUNhbGwocHJvcHMsIHF1aWV0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlQnJhbmNoKGNpdGVDb2RlKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcImRlbGV0ZVwiO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBnaXQvcmVmcy9oZWFkcy8ke2NpdGVDb2RlfWA7XG4gICAgcmV0dXJuIGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRCcmFuY2ggKGJyYW5jaE5hbWUsIFNIQSkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgcHJvcHMuYXBpTWV0aG9kID0gXCJwb3N0XCI7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gXCJnaXQvcmVmc1wiO1xuICAgIHByb3BzLnBhcmFtcyA9IHtcbiAgICAgICAgcmVmOiBgcmVmcy9oZWFkcy8ke2JyYW5jaE5hbWV9YCxcbiAgICAgICAgc2hhOiBTSEFcbiAgICB9O1xuICAgIHJldHVybiBhcGlDYWxsKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGVudHMgKGNpdGVDb2RlKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICB2YXIgZmlsZU5hbWUgPSBidWlsZEZpbGVOYW1lKGNpdGVDb2RlKTtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBgY29udGVudHMvJHtmaWxlTmFtZX0/cmVmPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNpdGVDb2RlKX1gO1xuICAgIHJldHVybiBhcGlDYWxsKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ29udGVudHMgKGNpdGVDb2RlLCBjb250ZW50LCBjb250ZW50c1NIQSkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgdmFyIGZpbGVOYW1lID0gYnVpbGRGaWxlTmFtZShjaXRlQ29kZSk7XG4gICAgcHJvcHMuYXBpTWV0aG9kID0gXCJwdXRcIjtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBgY29udGVudHMvJHtmaWxlTmFtZX1gO1xuICAgIHByb3BzLnBhcmFtcyA9IHtcbiAgICAgICAgbWVzc2FnZTogIFwiUHJvcG9zZWQgZWRpdFwiLFxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICBicmFuY2g6IGNpdGVDb2RlXG4gICAgfTtcbiAgICBpZiAoY29udGVudHNTSEEpIHtcbiAgICAgICAgcHJvcHMucGFyYW1zLnNoYSA9IGNvbnRlbnRzU0hBO1xuICAgIH1cbiAgICByZXR1cm4gYXBpQ2FsbChwcm9wcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVB1bGxSZXF1ZXN0KGNpdGVDb2RlLCB1c2VyTmFtZSwgY29tbWVudCkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgcHJvcHMuYXBpTWV0aG9kID0gXCJwb3N0XCI7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gXCJwdWxsc1wiO1xuICAgIHByb3BzLnBhcmFtcyA9IHtcbiAgICAgICAgdGl0bGU6IGBDaXRhdGlvbjogJHtjaXRlQ29kZX1gLFxuICAgICAgICBoZWFkOiBgJHt1c2VyTmFtZX06JHtjaXRlQ29kZX1gLFxuICAgICAgICBiYXNlOiBcIm1hc3RlclwiLFxuICAgICAgICBib2R5OiBjb21tZW50LFxuICAgICAgICBtYWludGFpbmVyX2Nhbl9tb2RpZnk6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBhcGlDYWxsKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UHVsbFJlcXVlc3QoY2l0ZUNvZGUsIHVzZXJOYW1lKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcImdldFwiO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBwdWxscz9oZWFkPSR7dXNlck5hbWV9OiR7Y2l0ZUNvZGV9YDtcbiAgICByZXR1cm4gYXBpQ2FsbChwcm9wcyk7XG59XG5cbnZhciBnaXRodWIgPSBuZXcgR2l0SHViO1xuXG5jb25zdCBzYXZlciA9IGFzeW5jIChjaXRlQ29kZSwgdGVzdENvbnRlbnQsIGNvbW1lbnQpID0+IHtcblxuICAgIC8vIENyZWF0ZSBjbGllbnRcbiAgICAvLyBjb25zb2xlLmxvZyhcIigxKVwiKTtcbiAgICB2YXIgYXBpVG9rZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgIHZhciBjbGllbnQgPSBnaXRodWIuY2xpZW50KGFwaVRva2VuKTtcbiAgICBcbiAgICAvLyBJbnN0YW50aWF0ZSB0ZXN0IHJlcG9cbiAgICAvLyBjb25zb2xlLmxvZyhcIigyKVwiKTtcbiAgICB2YXIgZ2hyZXBvID0gYXdhaXQgY2xpZW50LnJlcG8oXCJKdXJpcy1NL2pzdGktaW5kaWdvYm9va1wiKTtcbiAgICBcbiAgICAvLyBHZXQgdXNlciBuYW1lIGFuZCB1c2VyIElEXG4gICAgLy8gY29uc29sZS5sb2coXCIoMylcIik7XG4gICAgdmFyIHVzZXJOYW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0ZV91c2VyTmFtZVwiKTtcbiAgICBcbiAgICAvLyBJbnN0YW50aWF0ZSBmb3JrLCBjcmVhdGluZyBpZiBuZWNlc3NhcnkgKHRydWUgaXMgZm9yIHF1aWV0KVxuICAgIC8vIGNvbnNvbGUubG9nKFwiKDQpXCIpO1xuICAgIHZhciBnaGZvcmsgPSBhd2FpdCBjbGllbnQucmVwbyhgJHt1c2VyTmFtZX0vanN0aS1pbmRpZ29ib29rYCwgdHJ1ZSk7XG4gICAgdmFyIHJlc3VsdCA9IGdoZm9yay5pbmZvKCk7XG4gICAgaWYgKCFyZXN1bHQuZnVsbF9uYW1lKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKDUpXCIpO1xuICAgICAgICByZXN1bHQgPSBhd2FpdCBnaG1lLmZvcmsoJ0p1cmlzLU0vanN0aS1pbmRpZ29ib29rJykuY2F0Y2goKGUpID0+IGhhbmRsZUVycihlLCBcImNyZWF0ZSBmb3JrXCIpKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQWxpZ24gZm9yayB0byB0aGUgbGF0ZXN0IHRlc3QgcmVwbyBtYXN0ZXIgY29tbWl0XG4gICAgLy8gY29uc29sZS5sb2coXCIoNilcIik7XG4gICAgdmFyIGNvbW1pdHMgPSBhd2FpdCBnaHJlcG8uY29tbWl0cygpO1xuICAgIGlmIChjb21taXRzLmxlbmd0aCAhPT0gMCkgeyBcbiAgICAgICAgdmFyIGhlYWRTSEEgPSBjb21taXRzWzBdLnNoYTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIoNylcIik7XG4gICAgICAgIGF3YWl0IGdoZm9yay5wYXRjaChoZWFkU0hBKTtcbiAgICB9XG4gICAgXG4gICAgLy8gR2V0IGJyYW5jaCBwb2ludGVyXG4gICAgLy8gU2NydWJiaW5nIGFuIGV4aXN0aW5nIGJyYW5jaCBmb3IgdGhpcyBjaXRlIGNvZGUsIGlmIGFueSwgd2lsbFxuICAgIC8vIGFsc28gcmVtb3ZlIGFueSBwdWxsIHJlcXVlc3RzIGFzc29jaWF0ZWQgd2l0aCBpdC4gUHVsbCByZXF1ZXN0c1xuICAgIC8vIHdpbGwgYWx3YXlzIGNvbnNpc3Qgb2YgYSBzaW5nbGUgY29tbWl0LlxuICAgIC8vIGNvbnNvbGUubG9nKFwiKDgpXCIpO1xuICAgIHZhciBicmFuY2ggPSBnaGZvcmsuZ2V0QnJhbmNoKGNpdGVDb2RlLCB0cnVlKTtcbiAgICBpZiAoYnJhbmNoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKDkpXCIpO1xuICAgICAgICBhd2FpdCBnaGZvcmsuZGVsZXRlQnJhbmNoKGNpdGVDb2RlKTtcbiAgICB9XG4gICAgYnJhbmNoID0gYXdhaXQgZ2hmb3JrLnNldEJyYW5jaChjaXRlQ29kZSwgaGVhZFNIQSk7XG5cbiAgICAvLyBDcmVhdGUgb3IgdXBkYXRlIHRoZSB0YXJnZXQgZmlsZSAobm8tY2hhbmdlIHNjcmVlbmluZyBzaG91bGQgb2NjdXIgaW4gdGhlIFVJIGxheWVyLCBiZWZvcmUgaW52b2tpbmcgdGhpcylcbiAgICAvLyBjb25zb2xlLmxvZyhcIigxMClcIik7XG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IGdoZm9yay5nZXRDb250ZW50cyhjaXRlQ29kZSk7XG5cbiAgICB2YXIgbmV3Q29udGVudCA9IHRvQmFzZTY0KHRlc3RDb250ZW50KTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIigxMSlcIik7XG4gICAgICAgIGF3YWl0IGdoZm9yay51cGRhdGVDb250ZW50cyhjaXRlQ29kZSwgbmV3Q29udGVudCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBnaHJlcG8uY3JlYXRlUHVsbFJlcXVlc3QoY2l0ZUNvZGUsIHVzZXJOYW1lLCBjb21tZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb2xkQ29udGVudCA9IHJlc3VsdC5jb250ZW50LnNwbGl0KFwiXFxuXCIpLmpvaW4oXCJcIik7XG4gICAgICAgIGlmIChuZXdDb250ZW50ICE9PSBvbGRDb250ZW50KSB7XG4gICAgICAgICAgICB2YXIgY29udGVudHNTSEEgPSByZXN1bHQuc2hhO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIoMTIpXCIpO1xuICAgICAgICAgICAgYXdhaXQgZ2hmb3JrLnVwZGF0ZUNvbnRlbnRzKGNpdGVDb2RlLCBuZXdDb250ZW50LCBjb250ZW50c1NIQSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZ2hyZXBvLmNyZWF0ZVB1bGxSZXF1ZXN0KGNpdGVDb2RlLCB1c2VyTmFtZSwgY29tbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IHB1bGxyZXEgPSBhc3luYyAoY2l0ZUNvZGUpID0+IHtcbiAgICB2YXIgYXBpVG9rZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgIHZhciBjbGllbnQgPSBnaXRodWIuY2xpZW50KGFwaVRva2VuKTtcbiAgICB2YXIgZ2hyZXBvID0gYXdhaXQgY2xpZW50LnJlcG8oXCJKdXJpcy1NL2pzdGktaW5kaWdvYm9va1wiKTtcbiAgICB2YXIgZ2htZSA9IGF3YWl0IGNsaWVudC5tZSgpO1xuICAgIHZhciBteWluZm8gPSBnaG1lLmluZm8oKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRlX3VzZXJOYW1lXCIsIG15aW5mby5sb2dpbik7XG4gICAgXG4gICAgcmV0dXJuIGdocmVwby5nZXRQdWxsUmVxdWVzdChjaXRlQ29kZSwgbXlpbmZvLmxvZ2luKTtcbn1cblxuZXhwb3J0IHtcbiAgICBzYXZlcixcbiAgICBwdWxscmVxLFxuICAgIGFwaUNhbGxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9