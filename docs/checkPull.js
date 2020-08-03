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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(html_id) {
    var cite_url, test_content, result, userName, apiToken, contents, lst, keys, state, rex, res, _i, _keys, key, buf, _iterator, _step, line;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // pullreq sets userName in localStorage
            // Apart from that, it serves here to screen out pull requests
            // that have been closed on merge or rejection.
            cite_url = false;
            test_content = false;

            if (!window.localStorage.getItem('cite_url')) {
              _context.next = 7;
              break;
            }

            cite_url = window.localStorage.getItem('cite_url');
            test_content = window.localStorage.getItem('test_content');
            _context.next = 17;
            break;

          case 7:
            _context.next = 9;
            return Object(_saver__WEBPACK_IMPORTED_MODULE_14__["pullreq"])(html_id);

          case 9:
            result = _context.sent;

            if (!!result && result.length > 0) {
              cite_url = result[0].html_url;
              window.localStorage.setItem('cite_url', cite_url);
            }

            userName = window.localStorage.getItem("cite_userName");
            apiToken = window.localStorage.getItem('access_token');
            _context.next = 15;
            return Object(_saver__WEBPACK_IMPORTED_MODULE_14__["apiCall"])({
              apiSection: "repos",
              repoPath: "".concat(userName, "/jsti-indigobook"),
              apiSuffix: "contents/style_".concat(html_id, ".txt?ref=").concat(html_id),
              apiToken: "".concat(apiToken)
            });

          case 15:
            contents = _context.sent;
            test_content = fromBase64(contents.content);

          case 17:
            if (test_content) {
              // This value is the same as "html_id" in localStorage
              // var html_id = result[0].head.ref;

              /*
              console.log(txt);
               */
              lst = test_content.split("\n");
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
            } else {
              window.localStorage.removeItem("cite_desc");
            }

          case 18:
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
              return handleErr(e, "API fail for ".concat(mth, " on ").concat(apiStub, "/").concat(pth), quiet);
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
    var apiToken, client, ghme, ghrepo, userName, ghfork, result, commits, headSHA, branch, newContent, oldContent, contentsSHA;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Create client
            // console.log("(1)");
            apiToken = window.localStorage.getItem('access_token');
            client = github.client(apiToken); // User info

            _context2.next = 4;
            return client.me();

          case 4:
            ghme = _context2.sent;
            _context2.next = 7;
            return client.repo("Juris-M/jsti-indigobook");

          case 7:
            ghrepo = _context2.sent;
            // Get user name and user ID
            // console.log("(3)");
            userName = window.localStorage.getItem("cite_userName"); // Instantiate fork, creating if necessary (true is for quiet)
            // console.log("(4)");

            _context2.next = 11;
            return client.repo("".concat(userName, "/jsti-indigobook"), true);

          case 11:
            ghfork = _context2.sent;
            result = ghfork.info();

            if (result.full_name) {
              _context2.next = 17;
              break;
            }

            _context2.next = 16;
            return ghme.fork('Juris-M/jsti-indigobook').catch(function (e) {
              return handleErr(e, "create fork");
            });

          case 16:
            result = _context2.sent;

          case 17:
            _context2.next = 19;
            return ghrepo.commits();

          case 19:
            commits = _context2.sent;

            if (!(commits.length !== 0)) {
              _context2.next = 24;
              break;
            }

            headSHA = commits[0].sha; // console.log("(7)");

            _context2.next = 24;
            return ghfork.patch(headSHA);

          case 24:
            _context2.next = 26;
            return ghfork.getBranch(citeCode, true);

          case 26:
            branch = _context2.sent;

            if (!branch) {
              _context2.next = 30;
              break;
            }

            _context2.next = 30;
            return ghfork.deleteBranch(citeCode);

          case 30:
            _context2.next = 32;
            return ghfork.setBranch(citeCode, headSHA);

          case 32:
            branch = _context2.sent;
            _context2.next = 35;
            return ghfork.getContents(citeCode);

          case 35:
            result = _context2.sent;
            newContent = toBase64(testContent);

            if (result) {
              _context2.next = 45;
              break;
            }

            _context2.next = 40;
            return ghfork.updateContents(citeCode, newContent);

          case 40:
            _context2.next = 42;
            return ghrepo.createPullRequest(citeCode, userName, comment);

          case 42:
            result = _context2.sent;
            _context2.next = 53;
            break;

          case 45:
            oldContent = result.content.split("\n").join("");

            if (!(newContent !== oldContent)) {
              _context2.next = 53;
              break;
            }

            contentsSHA = result.sha; // console.log("(12)");

            _context2.next = 50;
            return ghfork.updateContents(citeCode, newContent, contentsSHA);

          case 50:
            _context2.next = 52;
            return ghrepo.createPullRequest(citeCode, userName, comment);

          case 52:
            result = _context2.sent;

          case 53:
            window.localStorage.setItem('test_content', testContent);
            return _context2.abrupt("return", result);

          case 55:
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
    var apiToken, client, ghrepo, ghme, myinfo, ret;
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
            _context3.next = 12;
            return ghrepo.getPullRequest(citeCode, myinfo.login);

          case 12:
            ret = _context3.sent;
            return _context3.abrupt("return", ret);

          case 14:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2twdWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXZlci5qcyJdLCJuYW1lcyI6WyJmcm9tQmFzZTY0IiwiZ2V0RnJvbUJhc2U2NCIsImF0b2IiLCJjaGVja1B1bGwiLCJodG1sX2lkIiwiY2l0ZV91cmwiLCJ0ZXN0X2NvbnRlbnQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVsbHJlcSIsInJlc3VsdCIsImxlbmd0aCIsImh0bWxfdXJsIiwic2V0SXRlbSIsInVzZXJOYW1lIiwiYXBpVG9rZW4iLCJhcGlDYWxsIiwiYXBpU2VjdGlvbiIsInJlcG9QYXRoIiwiYXBpU3VmZml4IiwiY29udGVudHMiLCJjb250ZW50IiwibHN0Iiwic3BsaXQiLCJrZXlzIiwic3RhdGUiLCJyZXgiLCJvcGVuIiwiY2xvc2UiLCJyZXMiLCJrZXkiLCJSZWdFeHAiLCJidWYiLCJsaW5lIiwiREVTQ1JJUFRJT04iLCJSRVNVTFQiLCJwdXNoIiwibWF0Y2giLCJwb3AiLCJqb2luIiwicmVtb3ZlSXRlbSIsImFwaVN0dWIiLCJoYW5kbGVFcnIiLCJlIiwibGFiZWwiLCJxdWlldCIsIm1zZyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicHJvdGVjdCIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImJ1aWxkRmlsZU5hbWUiLCJjaXRlQ29kZSIsInRvQmFzZTY0IiwiZ2V0VG9CYXNlNjQiLCJidG9hIiwicHJvcHMiLCJtdGgiLCJhcGlNZXRob2QiLCJwdGgiLCJmaWx0ZXIiLCJvIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJwYXJhbXMiLCJjYXRjaCIsIkdpdEh1YiIsImNsaWVudCIsIkNsaWVudCIsInJlcG8iLCJiaW5kIiwibWUiLCJSZXBvIiwiZnVsbF9uYW1lIiwiaW5mbyIsImZvcmsiLCJjb21taXRzIiwicGF0Y2giLCJnZXRCcmFuY2giLCJkZWxldGVCcmFuY2giLCJzZXRCcmFuY2giLCJnZXRDb250ZW50cyIsInVwZGF0ZUNvbnRlbnRzIiwiY3JlYXRlUHVsbFJlcXVlc3QiLCJnZXRQdWxsUmVxdWVzdCIsImhlYWRTSEEiLCJzaGEiLCJmb3JjZSIsImJyYW5jaE5hbWUiLCJTSEEiLCJyZWYiLCJmaWxlTmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImNvbnRlbnRzU0hBIiwiYnJhbmNoIiwiY29tbWVudCIsInRpdGxlIiwiaGVhZCIsImJhc2UiLCJib2R5IiwibWFpbnRhaW5lcl9jYW5fbW9kaWZ5IiwiZ2l0aHViIiwic2F2ZXIiLCJ0ZXN0Q29udGVudCIsImdobWUiLCJnaHJlcG8iLCJnaGZvcmsiLCJuZXdDb250ZW50Iiwib2xkQ29udGVudCIsIm15aW5mbyIsImxvZ2luIiwicmV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLHFCQUFxQixtQkFBTyxDQUFDLHlHQUFzQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLHlGQUE4QjtBQUNwRCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUYsOEJBQThCLG1CQUFPLENBQUMsaUhBQTBDOztBQUVoRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FB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QUpRO0FBS1JLLGtCQUxRLEdBS0NMLElBQUksQ0FBQzlCLElBQUwsRUFMRDtBQU1aNUUsa0JBQU0sQ0FBQ0MsWUFBUCxDQUFvQk0sT0FBcEIsQ0FBNEIsZUFBNUIsRUFBNkN3RyxNQUFNLENBQUNDLEtBQXBEO0FBTlk7QUFBQSxtQkFPSUwsTUFBTSxDQUFDckIsY0FBUCxDQUFzQnBDLFFBQXRCLEVBQWdDNkQsTUFBTSxDQUFDQyxLQUF2QyxDQVBKOztBQUFBO0FBT1JDLGVBUFE7QUFBQSw4Q0FRTEEsR0FSSzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQOUcsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiIiwiZmlsZSI6ImNoZWNrUHVsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcbiAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuICBpZiAoXG4gICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG4gICAgc2V0UHJvdG90eXBlT2YgJiZcbiAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG4gICAgdHlwZW9mIChOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuLy8gRWRnZSAxNC0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG52YXIgZ2V0RmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG52YXIgc3RpY2t5SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpLnNldDtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcbnZhciBOYXRpdmVSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IE5hdGl2ZVJlZ0V4cC5wcm90b3R5cGU7XG52YXIgcmUxID0gL2EvZztcbnZhciByZTIgPSAvYS9nO1xuXG4vLyBcIm5ld1wiIHNob3VsZCBjcmVhdGUgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z1xudmFyIENPUlJFQ1RfTkVXID0gbmV3IE5hdGl2ZVJlZ0V4cChyZTEpICE9PSByZTE7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gc3RpY2t5SGVscGVycy5VTlNVUFBPUlRFRF9ZO1xuXG52YXIgRk9SQ0VEID0gREVTQ1JJUFRPUlMgJiYgaXNGb3JjZWQoJ1JlZ0V4cCcsICghQ09SUkVDVF9ORVcgfHwgVU5TVVBQT1JURURfWSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJlMltNQVRDSF0gPSBmYWxzZTtcbiAgLy8gUmVnRXhwIGNvbnN0cnVjdG9yIGNhbiBhbHRlciBmbGFncyBhbmQgSXNSZWdFeHAgd29ya3MgY29ycmVjdCB3aXRoIEBAbWF0Y2hcbiAgcmV0dXJuIE5hdGl2ZVJlZ0V4cChyZTEpICE9IHJlMSB8fCBOYXRpdmVSZWdFeHAocmUyKSA9PSByZTIgfHwgTmF0aXZlUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG59KSkpO1xuXG4vLyBgUmVnRXhwYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLWNvbnN0cnVjdG9yXG5pZiAoRk9SQ0VEKSB7XG4gIHZhciBSZWdFeHBXcmFwcGVyID0gZnVuY3Rpb24gUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSB7XG4gICAgdmFyIHRoaXNJc1JlZ0V4cCA9IHRoaXMgaW5zdGFuY2VvZiBSZWdFeHBXcmFwcGVyO1xuICAgIHZhciBwYXR0ZXJuSXNSZWdFeHAgPSBpc1JlZ0V4cChwYXR0ZXJuKTtcbiAgICB2YXIgZmxhZ3NBcmVVbmRlZmluZWQgPSBmbGFncyA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBzdGlja3k7XG5cbiAgICBpZiAoIXRoaXNJc1JlZ0V4cCAmJiBwYXR0ZXJuSXNSZWdFeHAgJiYgcGF0dGVybi5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwV3JhcHBlciAmJiBmbGFnc0FyZVVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuXG4gICAgaWYgKENPUlJFQ1RfTkVXKSB7XG4gICAgICBpZiAocGF0dGVybklzUmVnRXhwICYmICFmbGFnc0FyZVVuZGVmaW5lZCkgcGF0dGVybiA9IHBhdHRlcm4uc291cmNlO1xuICAgIH0gZWxzZSBpZiAocGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cFdyYXBwZXIpIHtcbiAgICAgIGlmIChmbGFnc0FyZVVuZGVmaW5lZCkgZmxhZ3MgPSBnZXRGbGFncy5jYWxsKHBhdHRlcm4pO1xuICAgICAgcGF0dGVybiA9IHBhdHRlcm4uc291cmNlO1xuICAgIH1cblxuICAgIGlmIChVTlNVUFBPUlRFRF9ZKSB7XG4gICAgICBzdGlja3kgPSAhIWZsYWdzICYmIGZsYWdzLmluZGV4T2YoJ3knKSA+IC0xO1xuICAgICAgaWYgKHN0aWNreSkgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKC95L2csICcnKTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gaW5oZXJpdElmUmVxdWlyZWQoXG4gICAgICBDT1JSRUNUX05FVyA/IG5ldyBOYXRpdmVSZWdFeHAocGF0dGVybiwgZmxhZ3MpIDogTmF0aXZlUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSxcbiAgICAgIHRoaXNJc1JlZ0V4cCA/IHRoaXMgOiBSZWdFeHBQcm90b3R5cGUsXG4gICAgICBSZWdFeHBXcmFwcGVyXG4gICAgKTtcblxuICAgIGlmIChVTlNVUFBPUlRFRF9ZICYmIHN0aWNreSkgc2V0SW50ZXJuYWxTdGF0ZShyZXN1bHQsIHsgc3RpY2t5OiBzdGlja3kgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAga2V5IGluIFJlZ0V4cFdyYXBwZXIgfHwgZGVmaW5lUHJvcGVydHkoUmVnRXhwV3JhcHBlciwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5hdGl2ZVJlZ0V4cFtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoaXQpIHsgTmF0aXZlUmVnRXhwW2tleV0gPSBpdDsgfVxuICAgIH0pO1xuICB9O1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlUmVnRXhwKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgd2hpbGUgKGtleXMubGVuZ3RoID4gaW5kZXgpIHByb3h5KGtleXNbaW5kZXgrK10pO1xuICBSZWdFeHBQcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWdFeHBXcmFwcGVyO1xuICBSZWdFeHBXcmFwcGVyLnByb3RvdHlwZSA9IFJlZ0V4cFByb3RvdHlwZTtcbiAgcmVkZWZpbmUoZ2xvYmFsLCAnUmVnRXhwJywgUmVnRXhwV3JhcHBlcik7XG59XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAtQEBzcGVjaWVzXG5zZXRTcGVjaWVzKCdSZWdFeHAnKTtcbiIsImltcG9ydCB7IHB1bGxyZXEsIGFwaUNhbGwgfSBmcm9tICcuL3NhdmVyJztcbmltcG9ydCB7IGdldEZyb21CYXNlNjQgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG5jb25zdCBmcm9tQmFzZTY0ID0gZ2V0RnJvbUJhc2U2NChhdG9iKTtcblxuY29uc3QgY2hlY2tQdWxsID0gYXN5bmMgKGh0bWxfaWQpID0+IHtcbiAgICAvLyBwdWxscmVxIHNldHMgdXNlck5hbWUgaW4gbG9jYWxTdG9yYWdlXG4gICAgLy8gQXBhcnQgZnJvbSB0aGF0LCBpdCBzZXJ2ZXMgaGVyZSB0byBzY3JlZW4gb3V0IHB1bGwgcmVxdWVzdHNcbiAgICAvLyB0aGF0IGhhdmUgYmVlbiBjbG9zZWQgb24gbWVyZ2Ugb3IgcmVqZWN0aW9uLlxuICAgIHZhciBjaXRlX3VybCA9IGZhbHNlO1xuICAgIHZhciB0ZXN0X2NvbnRlbnQgPSBmYWxzZTtcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRlX3VybCcpKSB7XG4gICAgICAgIGNpdGVfdXJsID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRlX3VybCcpO1xuICAgICAgICB0ZXN0X2NvbnRlbnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3RfY29udGVudCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBwdWxscmVxKGh0bWxfaWQpO1xuICAgICAgICBpZiAoISFyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNpdGVfdXJsID0gcmVzdWx0WzBdLmh0bWxfdXJsO1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRlX3VybCcsIGNpdGVfdXJsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXNlck5hbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRlX3VzZXJOYW1lXCIpO1xuICAgICAgICB2YXIgYXBpVG9rZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgICAgICB2YXIgY29udGVudHMgPSBhd2FpdCBhcGlDYWxsKHtcbiAgICAgICAgICAgIGFwaVNlY3Rpb246IFwicmVwb3NcIixcbiAgICAgICAgICAgIHJlcG9QYXRoOiBgJHt1c2VyTmFtZX0vanN0aS1pbmRpZ29ib29rYCxcbiAgICAgICAgICAgIGFwaVN1ZmZpeDogYGNvbnRlbnRzL3N0eWxlXyR7aHRtbF9pZH0udHh0P3JlZj0ke2h0bWxfaWR9YCxcbiAgICAgICAgICAgIGFwaVRva2VuOiBgJHthcGlUb2tlbn1gXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdGVzdF9jb250ZW50ID0gZnJvbUJhc2U2NChjb250ZW50cy5jb250ZW50KTtcbiAgICB9XG4gICAgaWYgKHRlc3RfY29udGVudCkge1xuICAgICAgICAvLyBUaGlzIHZhbHVlIGlzIHRoZSBzYW1lIGFzIFwiaHRtbF9pZFwiIGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAvLyB2YXIgaHRtbF9pZCA9IHJlc3VsdFswXS5oZWFkLnJlZjtcbiAgICAgICAgLypcbiAgICAgICAgY29uc29sZS5sb2codHh0KTtcbiAgICAgICAgICovXG4gICAgICAgIHZhciBsc3QgPSB0ZXN0X2NvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIHZhciBrZXlzID0gW1wiREVTQ1JJUFRJT05cIiwgXCJSRVNVTFRcIl07XG4gICAgICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgICAgICB2YXIgcmV4ID0ge1xuICAgICAgICAgICAgb3Blbjoge30sXG4gICAgICAgICAgICBjbG9zZToge31cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgc3RhdGVba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV4Lm9wZW5ba2V5XSA9IG5ldyBSZWdFeHAoYD49K1xcXFxzKyR7a2V5fVxcXFxzKz0rPmApO1xuICAgICAgICAgICAgcmV4LmNsb3NlW2tleV0gPSBuZXcgUmVnRXhwKGA8PStcXFxccyske2tleX1cXFxccys9KzxgKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGJ1ZiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBsaW5lIG9mIGxzdCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLkRFU0NSSVBUSU9OIHx8IHN0YXRlLlJFU1VMVCkge1xuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmUubWF0Y2gocmV4Lm9wZW5ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaW5lLm1hdGNoKHJleC5jbG9zZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBidWYucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc1trZXldID0gYnVmLmpvaW4oXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT2theSwgZGlkIGl0IHdvcms/XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGF0aW9uXCIsIHJlcy5SRVNVTFQpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRlX2Rlc2NcIiwgcmVzLkRFU0NSSVBUSU9OKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjaXRlX2Rlc2NcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja1B1bGw7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBnZXRUb0Jhc2U2NCB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG4vLyBjb25zdCBiYXNlNjQgPSByZXF1aXJlKFwiYmFzZS02NFwiKTtcbi8vIGNvbnN0IHV0ZjggPSByZXF1aXJlKFwidXRmOFwiKTtcblxuY29uc3QgYXBpU3R1YiA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbVwiO1xuXG5jb25zdCBoYW5kbGVFcnIgPSAoZSwgbGFiZWwsIHF1aWV0KSA9PiB7XG4gICAgdmFyIG1zZyA9IGUubWVzc2FnZTtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgbXNnID0gYCR7bGFiZWx9OiAke21zZ31gO1xuICAgIH1cbiAgICBpZiAoIXF1aWV0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgfVxufVxuXG5jb25zdCBwcm90ZWN0ID0gKG9iaikgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG5jb25zdCBidWlsZEZpbGVOYW1lID0gKGNpdGVDb2RlKSA9PiB7XG4gICAgcmV0dXJuIGBzdHlsZV8ke2NpdGVDb2RlfS50eHRgO1xufVxuXG5jb25zdCB0b0Jhc2U2NCA9IGdldFRvQmFzZTY0KGJ0b2EpO1xuXG5jb25zdCBhcGlDYWxsID0gYXN5bmMgKHByb3BzLCBxdWlldCkgPT4ge1xuICAgIHZhciBtdGggPSBwcm9wcy5hcGlNZXRob2QgPyBwcm9wcy5hcGlNZXRob2QgOiBcImdldFwiO1xuICAgIHZhciBwdGggPSBbcHJvcHMuYXBpU2VjdGlvbiwgcHJvcHMucmVwb1BhdGgsIHByb3BzLmFwaVN1ZmZpeF0uZmlsdGVyKChvKSA9PiBvKS5qb2luKFwiL1wiKTtcbiAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IG10aCxcbiAgICAgICAgdXJsOiBgJHthcGlTdHVifS8ke3B0aH1gLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtwcm9wcy5hcGlUb2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHByb3BzLnBhcmFtc1xuICAgIH0pLmNhdGNoKChlKSA9PiBoYW5kbGVFcnIoZSwgYEFQSSBmYWlsIGZvciAke210aH0gb24gJHthcGlTdHVifS8ke3B0aH1gLCBxdWlldCkpO1xuICAgIHJldHVybiByZXN1bHQgPyByZXN1bHQuZGF0YSA6IGZhbHNlO1xufVxuXG5jbGFzcyBHaXRIdWIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsaWVudCA9IChhcGlUb2tlbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDbGllbnQoYXBpVG9rZW4pO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3RvcihhcGlUb2tlbikge1xuICAgICAgICB0aGlzLnJlcG8gPSByZXBvLmJpbmQoe1xuICAgICAgICAgICAgYXBpVG9rZW46IGFwaVRva2VuXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1lID0gbWUuYmluZCh7XG4gICAgICAgICAgICBhcGlUb2tlbjogYXBpVG9rZW5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBSZXBvIHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgLy8gQ2xvbmUgcHJvcGVydGllcyBhbmQgcmVzZXQgdG8gcmVwbyBkZWZhdWx0c1xuICAgICAgICBwcm9wcyA9IHByb3RlY3QocHJvcHMpO1xuICAgICAgICB0aGlzLmFwaU1ldGhvZCA9IFwiZ2V0XCI7XG4gICAgICAgIHRoaXMuYXBpU2VjdGlvbiA9IFwicmVwb3NcIjtcbiAgICAgICAgdGhpcy5yZXBvUGF0aCA9IHByb3BzLnJlc3VsdC5mdWxsX25hbWU7XG4gICAgICAgIHRoaXMuYXBpU3VmZml4ID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmluZm8gPSBpbmZvLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmZvcmsgPSBmb3JrLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmNvbW1pdHMgPSBjb21taXRzLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLnBhdGNoID0gcGF0Y2guYmluZChwcm9wcyk7XG4gICAgICAgIHRoaXMuZ2V0QnJhbmNoID0gZ2V0QnJhbmNoLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmRlbGV0ZUJyYW5jaCA9IGRlbGV0ZUJyYW5jaC5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXRCcmFuY2ggPSBzZXRCcmFuY2guYmluZChwcm9wcyk7XG4gICAgICAgIHRoaXMuZ2V0Q29udGVudHMgPSBnZXRDb250ZW50cy5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50cyA9IHVwZGF0ZUNvbnRlbnRzLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmNyZWF0ZVB1bGxSZXF1ZXN0ID0gY3JlYXRlUHVsbFJlcXVlc3QuYmluZChwcm9wcyk7XG4gICAgICAgIHRoaXMuZ2V0UHVsbFJlcXVlc3QgPSBnZXRQdWxsUmVxdWVzdC5iaW5kKHByb3BzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluZm8gKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVwbyAocmVwb1BhdGgsIHF1aWV0KSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcImdldFwiO1xuICAgIHByb3BzLmFwaVNlY3Rpb24gPSBcInJlcG9zXCI7XG4gICAgcHJvcHMucmVwb1BhdGggPSByZXBvUGF0aDtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBmYWxzZTtcbiAgICBwcm9wcy5yZXN1bHQgPSBhd2FpdCBhcGlDYWxsKHByb3BzLCBxdWlldCk7XG4gICAgcmV0dXJuIG5ldyBSZXBvKHByb3BzKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIG1lICgpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaVNlY3Rpb24gPSBcInVzZXJcIjtcbiAgICBwcm9wcy5yZXN1bHQgPSBhd2FpdCBhcGlDYWxsKHByb3BzKTtcbiAgICByZXR1cm4gbmV3IFJlcG8ocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmb3JrIChyZXBvUGF0aCkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgcHJvcHMuYXBpTWV0aG9kID0gXCJwb3N0XCI7XG4gICAgcHJvcHMuYXBpU2VjdGlvbiA9IFwicmVwb3NcIjtcbiAgICBwcm9wcy5yZXBvUGF0aCA9IHJlcG9QYXRoO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IFwiZm9ya3NcIjtcbiAgICBwcm9wcy5yZXN1bHQgPSBhd2FpdCBhcGlDYWxsKHByb3BzKTtcbiAgICByZXR1cm4gbmV3IFJlcG8ocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb21taXRzICgpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBjb21taXRzP3NoYT1tYXN0ZXJgO1xuICAgIHJldHVybiBhcGlDYWxsKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGF0Y2ggKGhlYWRTSEEpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaU1ldGhvZCA9IFwicGF0Y2hcIjtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBcImdpdC9yZWZzL2hlYWRzL21hc3RlclwiO1xuICAgIHByb3BzLnBhcmFtcyA9IHtcbiAgICAgICAgc2hhOiBoZWFkU0hBLFxuICAgICAgICBmb3JjZTogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRCcmFuY2ggKGJyYW5jaE5hbWUsIHF1aWV0KSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBgZ2l0L3JlZi9oZWFkcy8ke2JyYW5jaE5hbWV9YDtcbiAgICByZXR1cm4gYXBpQ2FsbChwcm9wcywgcXVpZXQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVCcmFuY2goY2l0ZUNvZGUpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaU1ldGhvZCA9IFwiZGVsZXRlXCI7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gYGdpdC9yZWZzL2hlYWRzLyR7Y2l0ZUNvZGV9YDtcbiAgICByZXR1cm4gYXBpQ2FsbChwcm9wcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEJyYW5jaCAoYnJhbmNoTmFtZSwgU0hBKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInBvc3RcIjtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBcImdpdC9yZWZzXCI7XG4gICAgcHJvcHMucGFyYW1zID0ge1xuICAgICAgICByZWY6IGByZWZzL2hlYWRzLyR7YnJhbmNoTmFtZX1gLFxuICAgICAgICBzaGE6IFNIQVxuICAgIH07XG4gICAgcmV0dXJuIGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb250ZW50cyAoY2l0ZUNvZGUpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHZhciBmaWxlTmFtZSA9IGJ1aWxkRmlsZU5hbWUoY2l0ZUNvZGUpO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBjb250ZW50cy8ke2ZpbGVOYW1lfT9yZWY9JHtlbmNvZGVVUklDb21wb25lbnQoY2l0ZUNvZGUpfWA7XG4gICAgcmV0dXJuIGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVDb250ZW50cyAoY2l0ZUNvZGUsIGNvbnRlbnQsIGNvbnRlbnRzU0hBKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICB2YXIgZmlsZU5hbWUgPSBidWlsZEZpbGVOYW1lKGNpdGVDb2RlKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInB1dFwiO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBjb250ZW50cy8ke2ZpbGVOYW1lfWA7XG4gICAgcHJvcHMucGFyYW1zID0ge1xuICAgICAgICBtZXNzYWdlOiAgXCJQcm9wb3NlZCBlZGl0XCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIGJyYW5jaDogY2l0ZUNvZGVcbiAgICB9O1xuICAgIGlmIChjb250ZW50c1NIQSkge1xuICAgICAgICBwcm9wcy5wYXJhbXMuc2hhID0gY29udGVudHNTSEE7XG4gICAgfVxuICAgIHJldHVybiBhcGlDYWxsKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVsbFJlcXVlc3QoY2l0ZUNvZGUsIHVzZXJOYW1lLCBjb21tZW50KSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInBvc3RcIjtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBcInB1bGxzXCI7XG4gICAgcHJvcHMucGFyYW1zID0ge1xuICAgICAgICB0aXRsZTogYENpdGF0aW9uOiAke2NpdGVDb2RlfWAsXG4gICAgICAgIGhlYWQ6IGAke3VzZXJOYW1lfToke2NpdGVDb2RlfWAsXG4gICAgICAgIGJhc2U6IFwibWFzdGVyXCIsXG4gICAgICAgIGJvZHk6IGNvbW1lbnQsXG4gICAgICAgIG1haW50YWluZXJfY2FuX21vZGlmeTogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRQdWxsUmVxdWVzdChjaXRlQ29kZSwgdXNlck5hbWUpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaU1ldGhvZCA9IFwiZ2V0XCI7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gYHB1bGxzP2hlYWQ9JHt1c2VyTmFtZX06JHtjaXRlQ29kZX1gO1xuICAgIHJldHVybiBhcGlDYWxsKHByb3BzKTtcbn1cblxudmFyIGdpdGh1YiA9IG5ldyBHaXRIdWI7XG5cbmNvbnN0IHNhdmVyID0gYXN5bmMgKGNpdGVDb2RlLCB0ZXN0Q29udGVudCwgY29tbWVudCkgPT4ge1xuXG4gICAgLy8gQ3JlYXRlIGNsaWVudFxuICAgIC8vIGNvbnNvbGUubG9nKFwiKDEpXCIpO1xuICAgIHZhciBhcGlUb2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgdmFyIGNsaWVudCA9IGdpdGh1Yi5jbGllbnQoYXBpVG9rZW4pO1xuXG4gICAgLy8gVXNlciBpbmZvXG4gICAgdmFyIGdobWUgPSBhd2FpdCBjbGllbnQubWUoKTtcblxuICAgIC8vIEluc3RhbnRpYXRlIHRlc3QgcmVwb1xuICAgIC8vIGNvbnNvbGUubG9nKFwiKDIpXCIpO1xuICAgIHZhciBnaHJlcG8gPSBhd2FpdCBjbGllbnQucmVwbyhcIkp1cmlzLU0vanN0aS1pbmRpZ29ib29rXCIpO1xuICAgIFxuICAgIC8vIEdldCB1c2VyIG5hbWUgYW5kIHVzZXIgSURcbiAgICAvLyBjb25zb2xlLmxvZyhcIigzKVwiKTtcbiAgICB2YXIgdXNlck5hbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRlX3VzZXJOYW1lXCIpO1xuICAgIFxuICAgIC8vIEluc3RhbnRpYXRlIGZvcmssIGNyZWF0aW5nIGlmIG5lY2Vzc2FyeSAodHJ1ZSBpcyBmb3IgcXVpZXQpXG4gICAgLy8gY29uc29sZS5sb2coXCIoNClcIik7XG4gICAgdmFyIGdoZm9yayA9IGF3YWl0IGNsaWVudC5yZXBvKGAke3VzZXJOYW1lfS9qc3RpLWluZGlnb2Jvb2tgLCB0cnVlKTtcbiAgICB2YXIgcmVzdWx0ID0gZ2hmb3JrLmluZm8oKTtcbiAgICBpZiAoIXJlc3VsdC5mdWxsX25hbWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIoNSlcIik7XG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IGdobWUuZm9yaygnSnVyaXMtTS9qc3RpLWluZGlnb2Jvb2snKS5jYXRjaCgoZSkgPT4gaGFuZGxlRXJyKGUsIFwiY3JlYXRlIGZvcmtcIikpO1xuICAgIH1cbiAgICBcbiAgICAvLyBBbGlnbiBmb3JrIHRvIHRoZSBsYXRlc3QgdGVzdCByZXBvIG1hc3RlciBjb21taXRcbiAgICAvLyBjb25zb2xlLmxvZyhcIig2KVwiKTtcbiAgICB2YXIgY29tbWl0cyA9IGF3YWl0IGdocmVwby5jb21taXRzKCk7XG4gICAgaWYgKGNvbW1pdHMubGVuZ3RoICE9PSAwKSB7IFxuICAgICAgICB2YXIgaGVhZFNIQSA9IGNvbW1pdHNbMF0uc2hhO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIig3KVwiKTtcbiAgICAgICAgYXdhaXQgZ2hmb3JrLnBhdGNoKGhlYWRTSEEpO1xuICAgIH1cbiAgICBcbiAgICAvLyBHZXQgYnJhbmNoIHBvaW50ZXJcbiAgICAvLyBTY3J1YmJpbmcgYW4gZXhpc3RpbmcgYnJhbmNoIGZvciB0aGlzIGNpdGUgY29kZSwgaWYgYW55LCB3aWxsXG4gICAgLy8gYWxzbyByZW1vdmUgYW55IHB1bGwgcmVxdWVzdHMgYXNzb2NpYXRlZCB3aXRoIGl0LiBQdWxsIHJlcXVlc3RzXG4gICAgLy8gd2lsbCBhbHdheXMgY29uc2lzdCBvZiBhIHNpbmdsZSBjb21taXQuXG4gICAgLy8gY29uc29sZS5sb2coXCIoOClcIik7XG4gICAgdmFyIGJyYW5jaCA9IGF3YWl0IGdoZm9yay5nZXRCcmFuY2goY2l0ZUNvZGUsIHRydWUpO1xuICAgIGlmICghIWJyYW5jaCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIig5KVwiKTtcbiAgICAgICAgYXdhaXQgZ2hmb3JrLmRlbGV0ZUJyYW5jaChjaXRlQ29kZSk7XG4gICAgfVxuICAgIGJyYW5jaCA9IGF3YWl0IGdoZm9yay5zZXRCcmFuY2goY2l0ZUNvZGUsIGhlYWRTSEEpO1xuXG4gICAgLy8gQ3JlYXRlIG9yIHVwZGF0ZSB0aGUgdGFyZ2V0IGZpbGUgKG5vLWNoYW5nZSBzY3JlZW5pbmcgc2hvdWxkIG9jY3VyIGluIHRoZSBVSSBsYXllciwgYmVmb3JlIGludm9raW5nIHRoaXMpXG4gICAgLy8gY29uc29sZS5sb2coXCIoMTApXCIpO1xuICAgIHZhciByZXN1bHQgPSBhd2FpdCBnaGZvcmsuZ2V0Q29udGVudHMoY2l0ZUNvZGUpO1xuXG4gICAgdmFyIG5ld0NvbnRlbnQgPSB0b0Jhc2U2NCh0ZXN0Q29udGVudCk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIoMTEpXCIpO1xuICAgICAgICBhd2FpdCBnaGZvcmsudXBkYXRlQ29udGVudHMoY2l0ZUNvZGUsIG5ld0NvbnRlbnQpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgZ2hyZXBvLmNyZWF0ZVB1bGxSZXF1ZXN0KGNpdGVDb2RlLCB1c2VyTmFtZSwgY29tbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG9sZENvbnRlbnQgPSByZXN1bHQuY29udGVudC5zcGxpdChcIlxcblwiKS5qb2luKFwiXCIpO1xuICAgICAgICBpZiAobmV3Q29udGVudCAhPT0gb2xkQ29udGVudCkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRzU0hBID0gcmVzdWx0LnNoYTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKDEyKVwiKTtcbiAgICAgICAgICAgIGF3YWl0IGdoZm9yay51cGRhdGVDb250ZW50cyhjaXRlQ29kZSwgbmV3Q29udGVudCwgY29udGVudHNTSEEpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGdocmVwby5jcmVhdGVQdWxsUmVxdWVzdChjaXRlQ29kZSwgdXNlck5hbWUsIGNvbW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdF9jb250ZW50JywgdGVzdENvbnRlbnQpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBwdWxscmVxID0gYXN5bmMgKGNpdGVDb2RlKSA9PiB7XG4gICAgdmFyIGFwaVRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICB2YXIgY2xpZW50ID0gZ2l0aHViLmNsaWVudChhcGlUb2tlbik7XG4gICAgdmFyIGdocmVwbyA9IGF3YWl0IGNsaWVudC5yZXBvKFwiSnVyaXMtTS9qc3RpLWluZGlnb2Jvb2tcIik7XG4gICAgdmFyIGdobWUgPSBhd2FpdCBjbGllbnQubWUoKTtcbiAgICB2YXIgbXlpbmZvID0gZ2htZS5pbmZvKCk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0ZV91c2VyTmFtZVwiLCBteWluZm8ubG9naW4pO1xuICAgIHZhciByZXQgPSBhd2FpdCBnaHJlcG8uZ2V0UHVsbFJlcXVlc3QoY2l0ZUNvZGUsIG15aW5mby5sb2dpbik7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IHtcbiAgICBzYXZlcixcbiAgICBwdWxscmVxLFxuICAgIGFwaUNhbGxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9