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















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var checkPull = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var test_id, result, userName, apiToken, contents, txt, lst, keys, state, rex, res, _i, _keys, key, buf, _iterator, _step, line;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            test_id = window.localStorage.getItem('test_id'); // pullreq sets userName in localStorage
            // Apart from that, it serves here to screen out pull requests
            // that have been closed on merge or rejection.

            _context.next = 3;
            return Object(_saver__WEBPACK_IMPORTED_MODULE_14__["pullreq"])(test_id);

          case 3:
            result = _context.sent;

            if (!(result && result.length)) {
              _context.next = 26;
              break;
            }

            window.localStorage.setItem('cite_url', result[0].html_url); // This value is the same as "test_id" in localStorage
            // var test_id = result[0].head.ref;

            userName = window.localStorage.getItem("cite_userName");
            apiToken = window.localStorage.getItem('access_token');
            _context.next = 10;
            return Object(_saver__WEBPACK_IMPORTED_MODULE_14__["apiCall"])({
              apiSection: "repos",
              repoPath: "".concat(userName, "/jsti-indigobook"),
              apiSuffix: "contents/style_".concat(test_id, ".txt?ref=").concat(test_id),
              apiToken: "".concat(apiToken)
            });

          case 10:
            contents = _context.sent;
            txt = atob(contents.content);
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

  return function checkPull() {
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
/*
var btoa = (str) => {
    var bytes = utf8.encode(str);
    return `${base64.encode(bytes)}`;
}
*/


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
            newContent = btoa(testContent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2twdWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXZlci5qcyJdLCJuYW1lcyI6WyJjaGVja1B1bGwiLCJ0ZXN0X2lkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1bGxyZXEiLCJyZXN1bHQiLCJsZW5ndGgiLCJzZXRJdGVtIiwiaHRtbF91cmwiLCJ1c2VyTmFtZSIsImFwaVRva2VuIiwiYXBpQ2FsbCIsImFwaVNlY3Rpb24iLCJyZXBvUGF0aCIsImFwaVN1ZmZpeCIsImNvbnRlbnRzIiwidHh0IiwiYXRvYiIsImNvbnRlbnQiLCJsc3QiLCJzcGxpdCIsImtleXMiLCJzdGF0ZSIsInJleCIsIm9wZW4iLCJjbG9zZSIsInJlcyIsImtleSIsIlJlZ0V4cCIsImJ1ZiIsImxpbmUiLCJERVNDUklQVElPTiIsIlJFU1VMVCIsInB1c2giLCJtYXRjaCIsInBvcCIsImpvaW4iLCJyZW1vdmVJdGVtIiwiYXBpU3R1YiIsImhhbmRsZUVyciIsImUiLCJsYWJlbCIsInF1aWV0IiwibXNnIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwcm90ZWN0Iiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYnVpbGRGaWxlTmFtZSIsImNpdGVDb2RlIiwicHJvcHMiLCJtdGgiLCJhcGlNZXRob2QiLCJwdGgiLCJmaWx0ZXIiLCJvIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJwYXJhbXMiLCJjYXRjaCIsIkdpdEh1YiIsImNsaWVudCIsIkNsaWVudCIsInJlcG8iLCJiaW5kIiwibWUiLCJSZXBvIiwiZnVsbF9uYW1lIiwiaW5mbyIsImZvcmsiLCJjb21taXRzIiwicGF0Y2giLCJnZXRCcmFuY2giLCJkZWxldGVCcmFuY2giLCJzZXRCcmFuY2giLCJnZXRDb250ZW50cyIsInVwZGF0ZUNvbnRlbnRzIiwiY3JlYXRlUHVsbFJlcXVlc3QiLCJnZXRQdWxsUmVxdWVzdCIsImhlYWRTSEEiLCJzaGEiLCJmb3JjZSIsImJyYW5jaE5hbWUiLCJTSEEiLCJyZWYiLCJmaWxlTmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImNvbnRlbnRzU0hBIiwiYnJhbmNoIiwiY29tbWVudCIsInRpdGxlIiwiaGVhZCIsImJhc2UiLCJib2R5IiwibWFpbnRhaW5lcl9jYW5fbW9kaWZ5IiwiZ2l0aHViIiwic2F2ZXIiLCJ0ZXN0Q29udGVudCIsImdocmVwbyIsImdoZm9yayIsImdobWUiLCJuZXdDb250ZW50IiwiYnRvYSIsIm9sZENvbnRlbnQiLCJteWluZm8iLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxxQkFBcUIsbUJBQU8sQ0FBQyx5R0FBc0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDcEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLDhCQUE4QixtQkFBTyxDQUFDLGlIQUEwQzs7QUFFaEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0ZBQWdGO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pCRCxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFD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QUE7QUFDUjNDLG9CQURRLEdBQ0dULE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsY0FBNUIsQ0FESDtBQUVSa0Usa0JBRlEsR0FFQ2tDLE1BQU0sQ0FBQ2xDLE1BQVAsQ0FBYzNELFFBQWQsQ0FGRDtBQUFBO0FBQUEsbUJBR08yRCxNQUFNLENBQUNFLElBQVAsQ0FBWSx5QkFBWixDQUhQOztBQUFBO0FBR1JtQyxrQkFIUTtBQUFBO0FBQUEsbUJBSUtyQyxNQUFNLENBQUNJLEVBQVAsRUFKTDs7QUFBQTtBQUlSbUMsZ0JBSlE7QUFLUkksa0JBTFEsR0FLQ0osSUFBSSxDQUFDaEMsSUFBTCxFQUxEO0FBTVozRSxrQkFBTSxDQUFDQyxZQUFQLENBQW9CSyxPQUFwQixDQUE0QixlQUE1QixFQUE2Q3lHLE1BQU0sQ0FBQ0MsS0FBcEQ7QUFOWSw4Q0FRTFAsTUFBTSxDQUFDcEIsY0FBUCxDQUFzQmpDLFFBQXRCLEVBQWdDMkQsTUFBTSxDQUFDQyxLQUF2QyxDQVJLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVA3RyxPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWIiLCJmaWxlIjoiY2hlY2tQdWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG4gIGlmIChcbiAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcbiAgICBzZXRQcm90b3R5cGVPZiAmJlxuICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcbiAgICB0eXBlb2YgKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSA9PSAnZnVuY3Rpb24nICYmXG4gICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG4gICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcbiAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG4gICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG4gIHJldHVybiAkdGhpcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG4vLyBFZGdlIDE0LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcbnZhciBnZXRGbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1zdGlja3ktaGVscGVycycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJykuc2V0O1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xudmFyIE5hdGl2ZVJlZ0V4cCA9IGdsb2JhbC5SZWdFeHA7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gTmF0aXZlUmVnRXhwLnByb3RvdHlwZTtcbnZhciByZTEgPSAvYS9nO1xudmFyIHJlMiA9IC9hL2c7XG5cbi8vIFwibmV3XCIgc2hvdWxkIGNyZWF0ZSBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnXG52YXIgQ09SUkVDVF9ORVcgPSBuZXcgTmF0aXZlUmVnRXhwKHJlMSkgIT09IHJlMTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLlVOU1VQUE9SVEVEX1k7XG5cbnZhciBGT1JDRUQgPSBERVNDUklQVE9SUyAmJiBpc0ZvcmNlZCgnUmVnRXhwJywgKCFDT1JSRUNUX05FVyB8fCBVTlNVUFBPUlRFRF9ZIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmUyW01BVENIXSA9IGZhbHNlO1xuICAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuICByZXR1cm4gTmF0aXZlUmVnRXhwKHJlMSkgIT0gcmUxIHx8IE5hdGl2ZVJlZ0V4cChyZTIpID09IHJlMiB8fCBOYXRpdmVSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcbn0pKSk7XG5cbi8vIGBSZWdFeHBgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAtY29uc3RydWN0b3JcbmlmIChGT1JDRUQpIHtcbiAgdmFyIFJlZ0V4cFdyYXBwZXIgPSBmdW5jdGlvbiBSZWdFeHAocGF0dGVybiwgZmxhZ3MpIHtcbiAgICB2YXIgdGhpc0lzUmVnRXhwID0gdGhpcyBpbnN0YW5jZW9mIFJlZ0V4cFdyYXBwZXI7XG4gICAgdmFyIHBhdHRlcm5Jc1JlZ0V4cCA9IGlzUmVnRXhwKHBhdHRlcm4pO1xuICAgIHZhciBmbGFnc0FyZVVuZGVmaW5lZCA9IGZsYWdzID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIHN0aWNreTtcblxuICAgIGlmICghdGhpc0lzUmVnRXhwICYmIHBhdHRlcm5Jc1JlZ0V4cCAmJiBwYXR0ZXJuLmNvbnN0cnVjdG9yID09PSBSZWdFeHBXcmFwcGVyICYmIGZsYWdzQXJlVW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG5cbiAgICBpZiAoQ09SUkVDVF9ORVcpIHtcbiAgICAgIGlmIChwYXR0ZXJuSXNSZWdFeHAgJiYgIWZsYWdzQXJlVW5kZWZpbmVkKSBwYXR0ZXJuID0gcGF0dGVybi5zb3VyY2U7XG4gICAgfSBlbHNlIGlmIChwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwV3JhcHBlcikge1xuICAgICAgaWYgKGZsYWdzQXJlVW5kZWZpbmVkKSBmbGFncyA9IGdldEZsYWdzLmNhbGwocGF0dGVybik7XG4gICAgICBwYXR0ZXJuID0gcGF0dGVybi5zb3VyY2U7XG4gICAgfVxuXG4gICAgaWYgKFVOU1VQUE9SVEVEX1kpIHtcbiAgICAgIHN0aWNreSA9ICEhZmxhZ3MgJiYgZmxhZ3MuaW5kZXhPZigneScpID4gLTE7XG4gICAgICBpZiAoc3RpY2t5KSBmbGFncyA9IGZsYWdzLnJlcGxhY2UoL3kvZywgJycpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBpbmhlcml0SWZSZXF1aXJlZChcbiAgICAgIENPUlJFQ1RfTkVXID8gbmV3IE5hdGl2ZVJlZ0V4cChwYXR0ZXJuLCBmbGFncykgOiBOYXRpdmVSZWdFeHAocGF0dGVybiwgZmxhZ3MpLFxuICAgICAgdGhpc0lzUmVnRXhwID8gdGhpcyA6IFJlZ0V4cFByb3RvdHlwZSxcbiAgICAgIFJlZ0V4cFdyYXBwZXJcbiAgICApO1xuXG4gICAgaWYgKFVOU1VQUE9SVEVEX1kgJiYgc3RpY2t5KSBzZXRJbnRlcm5hbFN0YXRlKHJlc3VsdCwgeyBzdGlja3k6IHN0aWNreSB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBrZXkgaW4gUmVnRXhwV3JhcHBlciB8fCBkZWZpbmVQcm9wZXJ0eShSZWdFeHBXcmFwcGVyLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTmF0aXZlUmVnRXhwW2tleV07IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChpdCkgeyBOYXRpdmVSZWdFeHBba2V5XSA9IGl0OyB9XG4gICAgfSk7XG4gIH07XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhOYXRpdmVSZWdFeHApO1xuICB2YXIgaW5kZXggPSAwO1xuICB3aGlsZSAoa2V5cy5sZW5ndGggPiBpbmRleCkgcHJveHkoa2V5c1tpbmRleCsrXSk7XG4gIFJlZ0V4cFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlZ0V4cFdyYXBwZXI7XG4gIFJlZ0V4cFdyYXBwZXIucHJvdG90eXBlID0gUmVnRXhwUHJvdG90eXBlO1xuICByZWRlZmluZShnbG9iYWwsICdSZWdFeHAnLCBSZWdFeHBXcmFwcGVyKTtcbn1cblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC1AQHNwZWNpZXNcbnNldFNwZWNpZXMoJ1JlZ0V4cCcpO1xuIiwiaW1wb3J0IHsgcHVsbHJlcSwgYXBpQ2FsbCB9IGZyb20gJy4vc2F2ZXInO1xuXG5jb25zdCBjaGVja1B1bGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdmFyIHRlc3RfaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3RfaWQnKTtcbiAgICAvLyBwdWxscmVxIHNldHMgdXNlck5hbWUgaW4gbG9jYWxTdG9yYWdlXG4gICAgLy8gQXBhcnQgZnJvbSB0aGF0LCBpdCBzZXJ2ZXMgaGVyZSB0byBzY3JlZW4gb3V0IHB1bGwgcmVxdWVzdHNcbiAgICAvLyB0aGF0IGhhdmUgYmVlbiBjbG9zZWQgb24gbWVyZ2Ugb3IgcmVqZWN0aW9uLlxuICAgIHZhciByZXN1bHQgPSBhd2FpdCBwdWxscmVxKHRlc3RfaWQpO1xuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGVfdXJsJywgcmVzdWx0WzBdLmh0bWxfdXJsKTtcbiAgICAgICAgLy8gVGhpcyB2YWx1ZSBpcyB0aGUgc2FtZSBhcyBcInRlc3RfaWRcIiBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgLy8gdmFyIHRlc3RfaWQgPSByZXN1bHRbMF0uaGVhZC5yZWY7XG4gICAgICAgIHZhciB1c2VyTmFtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGVfdXNlck5hbWVcIik7XG4gICAgICAgIHZhciBhcGlUb2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgICAgIHZhciBjb250ZW50cyA9IGF3YWl0IGFwaUNhbGwoe1xuICAgICAgICAgICAgYXBpU2VjdGlvbjogXCJyZXBvc1wiLFxuICAgICAgICAgICAgcmVwb1BhdGg6IGAke3VzZXJOYW1lfS9qc3RpLWluZGlnb2Jvb2tgLFxuICAgICAgICAgICAgYXBpU3VmZml4OiBgY29udGVudHMvc3R5bGVfJHt0ZXN0X2lkfS50eHQ/cmVmPSR7dGVzdF9pZH1gLFxuICAgICAgICAgICAgYXBpVG9rZW46IGAke2FwaVRva2VufWBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0eHQgPSBhdG9iKGNvbnRlbnRzLmNvbnRlbnQpO1xuICAgICAgICB2YXIgbHN0ID0gdHh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICB2YXIga2V5cyA9IFtcIkRFU0NSSVBUSU9OXCIsIFwiUkVTVUxUXCJdO1xuICAgICAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICAgICAgdmFyIHJleCA9IHtcbiAgICAgICAgICAgIG9wZW46IHt9LFxuICAgICAgICAgICAgY2xvc2U6IHt9XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgIHN0YXRlW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgIHJleC5vcGVuW2tleV0gPSBuZXcgUmVnRXhwKGA+PStcXFxccyske2tleX1cXFxccys9Kz5gKTtcbiAgICAgICAgICAgIHJleC5jbG9zZVtrZXldID0gbmV3IFJlZ0V4cChgPD0rXFxcXHMrJHtrZXl9XFxcXHMrPSs8YCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBidWYgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgbGluZSBvZiBsc3QpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5ERVNDUklQVElPTiB8fCBzdGF0ZS5SRVNVTFQpIHtcbiAgICAgICAgICAgICAgICBidWYucHVzaChsaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChsaW5lLm1hdGNoKHJleC5vcGVuW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGluZS5tYXRjaChyZXguY2xvc2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNba2V5XSA9IGJ1Zi5qb2luKFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICBidWYgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9rYXksIGRpZCBpdCB3b3JrP1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRhdGlvblwiLCByZXMuUkVTVUxUKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0ZV9kZXNjXCIsIHJlcy5ERVNDUklQVElPTik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2l0ZV9kZXNjXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tQdWxsO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gY29uc3QgYmFzZTY0ID0gcmVxdWlyZShcImJhc2UtNjRcIik7XG4vLyBjb25zdCB1dGY4ID0gcmVxdWlyZShcInV0ZjhcIik7XG5cbmNvbnN0IGFwaVN0dWIgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb21cIjtcblxuY29uc3QgaGFuZGxlRXJyID0gKGUsIGxhYmVsLCBxdWlldCkgPT4ge1xuICAgIHZhciBtc2cgPSBlLm1lc3NhZ2U7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICAgIG1zZyA9IGAke2xhYmVsfTogJHttc2d9YDtcbiAgICB9XG4gICAgaWYgKCFxdWlldCkge1xuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIH1cbn1cblxuY29uc3QgcHJvdGVjdCA9IChvYmopID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuY29uc3QgYnVpbGRGaWxlTmFtZSA9IChjaXRlQ29kZSkgPT4ge1xuICAgIHJldHVybiBgc3R5bGVfJHtjaXRlQ29kZX0udHh0YDtcbn1cblxuLypcbnZhciBidG9hID0gKHN0cikgPT4ge1xuICAgIHZhciBieXRlcyA9IHV0ZjguZW5jb2RlKHN0cik7XG4gICAgcmV0dXJuIGAke2Jhc2U2NC5lbmNvZGUoYnl0ZXMpfWA7XG59XG4qL1xuXG5jb25zdCBhcGlDYWxsID0gYXN5bmMgKHByb3BzLCBxdWlldCkgPT4ge1xuICAgIHZhciBtdGggPSBwcm9wcy5hcGlNZXRob2QgPyBwcm9wcy5hcGlNZXRob2QgOiBcImdldFwiO1xuICAgIHZhciBwdGggPSBbcHJvcHMuYXBpU2VjdGlvbiwgcHJvcHMucmVwb1BhdGgsIHByb3BzLmFwaVN1ZmZpeF0uZmlsdGVyKChvKSA9PiBvKS5qb2luKFwiL1wiKTtcbiAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IG10aCxcbiAgICAgICAgdXJsOiBgJHthcGlTdHVifS8ke3B0aH1gLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtwcm9wcy5hcGlUb2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHByb3BzLnBhcmFtc1xuICAgIH0pLmNhdGNoKChlKSA9PiBoYW5kbGVFcnIoZSwgXCJBUEkgZmFpbFwiLCBxdWlldCkpO1xuICAgIHJldHVybiByZXN1bHQgPyByZXN1bHQuZGF0YSA6IGZhbHNlO1xufVxuXG5jbGFzcyBHaXRIdWIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsaWVudCA9IChhcGlUb2tlbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDbGllbnQoYXBpVG9rZW4pO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3RvcihhcGlUb2tlbikge1xuICAgICAgICB0aGlzLnJlcG8gPSByZXBvLmJpbmQoe1xuICAgICAgICAgICAgYXBpVG9rZW46IGFwaVRva2VuXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1lID0gbWUuYmluZCh7XG4gICAgICAgICAgICBhcGlUb2tlbjogYXBpVG9rZW5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBSZXBvIHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgLy8gQ2xvbmUgcHJvcGVydGllcyBhbmQgcmVzZXQgdG8gcmVwbyBkZWZhdWx0c1xuICAgICAgICBwcm9wcyA9IHByb3RlY3QocHJvcHMpO1xuICAgICAgICB0aGlzLmFwaU1ldGhvZCA9IFwiZ2V0XCI7XG4gICAgICAgIHRoaXMuYXBpU2VjdGlvbiA9IFwicmVwb3NcIjtcbiAgICAgICAgdGhpcy5yZXBvUGF0aCA9IHByb3BzLnJlc3VsdC5mdWxsX25hbWU7XG4gICAgICAgIHRoaXMuYXBpU3VmZml4ID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmluZm8gPSBpbmZvLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmZvcmsgPSBmb3JrLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmNvbW1pdHMgPSBjb21taXRzLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLnBhdGNoID0gcGF0Y2guYmluZChwcm9wcyk7XG4gICAgICAgIHRoaXMuZ2V0QnJhbmNoID0gZ2V0QnJhbmNoLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmRlbGV0ZUJyYW5jaCA9IGRlbGV0ZUJyYW5jaC5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXRCcmFuY2ggPSBzZXRCcmFuY2guYmluZChwcm9wcyk7XG4gICAgICAgIHRoaXMuZ2V0Q29udGVudHMgPSBnZXRDb250ZW50cy5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50cyA9IHVwZGF0ZUNvbnRlbnRzLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmNyZWF0ZVB1bGxSZXF1ZXN0ID0gY3JlYXRlUHVsbFJlcXVlc3QuYmluZChwcm9wcyk7XG4gICAgICAgIHRoaXMuZ2V0UHVsbFJlcXVlc3QgPSBnZXRQdWxsUmVxdWVzdC5iaW5kKHByb3BzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluZm8gKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVwbyAocmVwb1BhdGgsIHF1aWV0KSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcImdldFwiO1xuICAgIHByb3BzLmFwaVNlY3Rpb24gPSBcInJlcG9zXCI7XG4gICAgcHJvcHMucmVwb1BhdGggPSByZXBvUGF0aDtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBmYWxzZTtcbiAgICBwcm9wcy5yZXN1bHQgPSBhd2FpdCBhcGlDYWxsKHByb3BzLCBxdWlldCk7XG4gICAgcmV0dXJuIG5ldyBSZXBvKHByb3BzKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIG1lICgpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaVNlY3Rpb24gPSBcInVzZXJcIjtcbiAgICBwcm9wcy5yZXN1bHQgPSBhd2FpdCBhcGlDYWxsKHByb3BzKTtcbiAgICByZXR1cm4gbmV3IFJlcG8ocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmb3JrIChyZXBvUGF0aCkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgcHJvcHMuYXBpTWV0aG9kID0gXCJwb3N0XCI7XG4gICAgcHJvcHMuYXBpU2VjdGlvbiA9IFwicmVwb3NcIjtcbiAgICBwcm9wcy5yZXBvUGF0aCA9IHJlcG9QYXRoO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IFwiZm9ya3NcIjtcbiAgICBwcm9wcy5yZXN1bHQgPSBhd2FpdCBhcGlDYWxsKHByb3BzKTtcbiAgICByZXR1cm4gbmV3IFJlcG8ocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb21taXRzICgpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBjb21taXRzP3NoYT1tYXN0ZXJgO1xuICAgIHJldHVybiBhcGlDYWxsKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGF0Y2ggKGhlYWRTSEEpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaU1ldGhvZCA9IFwicGF0Y2hcIjtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBcImdpdC9yZWZzL2hlYWRzL21hc3RlclwiO1xuICAgIHByb3BzLnBhcmFtcyA9IHtcbiAgICAgICAgc2hhOiBoZWFkU0hBLFxuICAgICAgICBmb3JjZTogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRCcmFuY2ggKGJyYW5jaE5hbWUsIHF1aWV0KSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBgZ2l0L3JlZi9oZWFkcy8ke2JyYW5jaE5hbWV9YDtcbiAgICByZXR1cm4gYXBpQ2FsbChwcm9wcywgcXVpZXQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVCcmFuY2goY2l0ZUNvZGUpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaU1ldGhvZCA9IFwiZGVsZXRlXCI7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gYGdpdC9yZWZzL2hlYWRzLyR7Y2l0ZUNvZGV9YDtcbiAgICByZXR1cm4gYXBpQ2FsbChwcm9wcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEJyYW5jaCAoYnJhbmNoTmFtZSwgU0hBKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInBvc3RcIjtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBcImdpdC9yZWZzXCI7XG4gICAgcHJvcHMucGFyYW1zID0ge1xuICAgICAgICByZWY6IGByZWZzL2hlYWRzLyR7YnJhbmNoTmFtZX1gLFxuICAgICAgICBzaGE6IFNIQVxuICAgIH07XG4gICAgcmV0dXJuIGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb250ZW50cyAoY2l0ZUNvZGUpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHZhciBmaWxlTmFtZSA9IGJ1aWxkRmlsZU5hbWUoY2l0ZUNvZGUpO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBjb250ZW50cy8ke2ZpbGVOYW1lfT9yZWY9JHtlbmNvZGVVUklDb21wb25lbnQoY2l0ZUNvZGUpfWA7XG4gICAgcmV0dXJuIGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVDb250ZW50cyAoY2l0ZUNvZGUsIGNvbnRlbnQsIGNvbnRlbnRzU0hBKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICB2YXIgZmlsZU5hbWUgPSBidWlsZEZpbGVOYW1lKGNpdGVDb2RlKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInB1dFwiO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBjb250ZW50cy8ke2ZpbGVOYW1lfWA7XG4gICAgcHJvcHMucGFyYW1zID0ge1xuICAgICAgICBtZXNzYWdlOiAgXCJQcm9wb3NlZCBlZGl0XCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIGJyYW5jaDogY2l0ZUNvZGVcbiAgICB9O1xuICAgIGlmIChjb250ZW50c1NIQSkge1xuICAgICAgICBwcm9wcy5wYXJhbXMuc2hhID0gY29udGVudHNTSEE7XG4gICAgfVxuICAgIHJldHVybiBhcGlDYWxsKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVsbFJlcXVlc3QoY2l0ZUNvZGUsIHVzZXJOYW1lLCBjb21tZW50KSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInBvc3RcIjtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBcInB1bGxzXCI7XG4gICAgcHJvcHMucGFyYW1zID0ge1xuICAgICAgICB0aXRsZTogYENpdGF0aW9uOiAke2NpdGVDb2RlfWAsXG4gICAgICAgIGhlYWQ6IGAke3VzZXJOYW1lfToke2NpdGVDb2RlfWAsXG4gICAgICAgIGJhc2U6IFwibWFzdGVyXCIsXG4gICAgICAgIGJvZHk6IGNvbW1lbnQsXG4gICAgICAgIG1haW50YWluZXJfY2FuX21vZGlmeTogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRQdWxsUmVxdWVzdChjaXRlQ29kZSwgdXNlck5hbWUpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaU1ldGhvZCA9IFwiZ2V0XCI7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gYHB1bGxzP2hlYWQ9JHt1c2VyTmFtZX06JHtjaXRlQ29kZX1gO1xuICAgIHJldHVybiBhcGlDYWxsKHByb3BzKTtcbn1cblxudmFyIGdpdGh1YiA9IG5ldyBHaXRIdWI7XG5cbmNvbnN0IHNhdmVyID0gYXN5bmMgKGNpdGVDb2RlLCB0ZXN0Q29udGVudCwgY29tbWVudCkgPT4ge1xuXG4gICAgLy8gQ3JlYXRlIGNsaWVudFxuICAgIC8vIGNvbnNvbGUubG9nKFwiKDEpXCIpO1xuICAgIHZhciBhcGlUb2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgdmFyIGNsaWVudCA9IGdpdGh1Yi5jbGllbnQoYXBpVG9rZW4pO1xuICAgIFxuICAgIC8vIEluc3RhbnRpYXRlIHRlc3QgcmVwb1xuICAgIC8vIGNvbnNvbGUubG9nKFwiKDIpXCIpO1xuICAgIHZhciBnaHJlcG8gPSBhd2FpdCBjbGllbnQucmVwbyhcIkp1cmlzLU0vanN0aS1pbmRpZ29ib29rXCIpO1xuICAgIFxuICAgIC8vIEdldCB1c2VyIG5hbWUgYW5kIHVzZXIgSURcbiAgICAvLyBjb25zb2xlLmxvZyhcIigzKVwiKTtcbiAgICB2YXIgdXNlck5hbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRlX3VzZXJOYW1lXCIpO1xuICAgIFxuICAgIC8vIEluc3RhbnRpYXRlIGZvcmssIGNyZWF0aW5nIGlmIG5lY2Vzc2FyeSAodHJ1ZSBpcyBmb3IgcXVpZXQpXG4gICAgLy8gY29uc29sZS5sb2coXCIoNClcIik7XG4gICAgdmFyIGdoZm9yayA9IGF3YWl0IGNsaWVudC5yZXBvKGAke3VzZXJOYW1lfS9qc3RpLWluZGlnb2Jvb2tgLCB0cnVlKTtcbiAgICB2YXIgcmVzdWx0ID0gZ2hmb3JrLmluZm8oKTtcbiAgICBpZiAoIXJlc3VsdC5mdWxsX25hbWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIoNSlcIik7XG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IGdobWUuZm9yaygnSnVyaXMtTS9qc3RpLWluZGlnb2Jvb2snKS5jYXRjaCgoZSkgPT4gaGFuZGxlRXJyKGUsIFwiY3JlYXRlIGZvcmtcIikpO1xuICAgIH1cbiAgICBcbiAgICAvLyBBbGlnbiBmb3JrIHRvIHRoZSBsYXRlc3QgdGVzdCByZXBvIG1hc3RlciBjb21taXRcbiAgICAvLyBjb25zb2xlLmxvZyhcIig2KVwiKTtcbiAgICB2YXIgY29tbWl0cyA9IGF3YWl0IGdocmVwby5jb21taXRzKCk7XG4gICAgaWYgKGNvbW1pdHMubGVuZ3RoICE9PSAwKSB7IFxuICAgICAgICB2YXIgaGVhZFNIQSA9IGNvbW1pdHNbMF0uc2hhO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIig3KVwiKTtcbiAgICAgICAgYXdhaXQgZ2hmb3JrLnBhdGNoKGhlYWRTSEEpO1xuICAgIH1cbiAgICBcbiAgICAvLyBHZXQgYnJhbmNoIHBvaW50ZXJcbiAgICAvLyBTY3J1YmJpbmcgYW4gZXhpc3RpbmcgYnJhbmNoIGZvciB0aGlzIGNpdGUgY29kZSwgaWYgYW55LCB3aWxsXG4gICAgLy8gYWxzbyByZW1vdmUgYW55IHB1bGwgcmVxdWVzdHMgYXNzb2NpYXRlZCB3aXRoIGl0LiBQdWxsIHJlcXVlc3RzXG4gICAgLy8gd2lsbCBhbHdheXMgY29uc2lzdCBvZiBhIHNpbmdsZSBjb21taXQuXG4gICAgLy8gY29uc29sZS5sb2coXCIoOClcIik7XG4gICAgdmFyIGJyYW5jaCA9IGdoZm9yay5nZXRCcmFuY2goY2l0ZUNvZGUsIHRydWUpO1xuICAgIGlmIChicmFuY2gpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIoOSlcIik7XG4gICAgICAgIGF3YWl0IGdoZm9yay5kZWxldGVCcmFuY2goY2l0ZUNvZGUpO1xuICAgIH1cbiAgICBicmFuY2ggPSBhd2FpdCBnaGZvcmsuc2V0QnJhbmNoKGNpdGVDb2RlLCBoZWFkU0hBKTtcblxuICAgIC8vIENyZWF0ZSBvciB1cGRhdGUgdGhlIHRhcmdldCBmaWxlIChuby1jaGFuZ2Ugc2NyZWVuaW5nIHNob3VsZCBvY2N1ciBpbiB0aGUgVUkgbGF5ZXIsIGJlZm9yZSBpbnZva2luZyB0aGlzKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiKDEwKVwiKTtcbiAgICB2YXIgcmVzdWx0ID0gYXdhaXQgZ2hmb3JrLmdldENvbnRlbnRzKGNpdGVDb2RlKTtcblxuICAgIHZhciBuZXdDb250ZW50ID0gYnRvYSh0ZXN0Q29udGVudCk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIoMTEpXCIpO1xuICAgICAgICBhd2FpdCBnaGZvcmsudXBkYXRlQ29udGVudHMoY2l0ZUNvZGUsIG5ld0NvbnRlbnQpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZ2hyZXBvLmNyZWF0ZVB1bGxSZXF1ZXN0KGNpdGVDb2RlLCB1c2VyTmFtZSwgY29tbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG9sZENvbnRlbnQgPSByZXN1bHQuY29udGVudC5zcGxpdChcIlxcblwiKS5qb2luKFwiXCIpO1xuICAgICAgICBpZiAobmV3Q29udGVudCAhPT0gb2xkQ29udGVudCkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRzU0hBID0gcmVzdWx0LnNoYTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKDEyKVwiKTtcbiAgICAgICAgICAgIGF3YWl0IGdoZm9yay51cGRhdGVDb250ZW50cyhjaXRlQ29kZSwgbmV3Q29udGVudCwgY29udGVudHNTSEEpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGdocmVwby5jcmVhdGVQdWxsUmVxdWVzdChjaXRlQ29kZSwgdXNlck5hbWUsIGNvbW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBwdWxscmVxID0gYXN5bmMgKGNpdGVDb2RlKSA9PiB7XG4gICAgdmFyIGFwaVRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICB2YXIgY2xpZW50ID0gZ2l0aHViLmNsaWVudChhcGlUb2tlbik7XG4gICAgdmFyIGdocmVwbyA9IGF3YWl0IGNsaWVudC5yZXBvKFwiSnVyaXMtTS9qc3RpLWluZGlnb2Jvb2tcIik7XG4gICAgdmFyIGdobWUgPSBhd2FpdCBjbGllbnQubWUoKTtcbiAgICB2YXIgbXlpbmZvID0gZ2htZS5pbmZvKCk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0ZV91c2VyTmFtZVwiLCBteWluZm8ubG9naW4pO1xuICAgIFxuICAgIHJldHVybiBnaHJlcG8uZ2V0UHVsbFJlcXVlc3QoY2l0ZUNvZGUsIG15aW5mby5sb2dpbik7XG59XG5cbmV4cG9ydCB7XG4gICAgc2F2ZXIsXG4gICAgcHVsbHJlcSxcbiAgICBhcGlDYWxsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==