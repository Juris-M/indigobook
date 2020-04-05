(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saveops"],{

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


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

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./src/composer.js":
/*!*************************!*\
  !*** ./src/composer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);




var composer = function composer(items, params, newCite, comment) {
  var keysArray = JSON.stringify(items.map(function (o) {
    return o.id;
  }), null, 2);
  var paramsArray = JSON.stringify(params, null, 2);
  var itemsArray = JSON.stringify(items, null, 2);
  return "\n>>===== MODE =====>>\ncitation\n<<===== MODE =====<<\n\n>>===== KEYS =====>>\n".concat(keysArray, "\n<<===== KEYS =====<<\n\n>>===== DESCRIPTION =====>>\n").concat(comment, "\n<<===== DESCRIPTION =====<<\n\n>>===== RESULT =====>>\n").concat(newCite, "\n<<===== RESULT =====<<\n\n>>===== CITATION-ITEMS =====>>\n[\n").concat(paramsArray, "\n]\n<<===== CITATION-ITEMS =====<<\n\n>>===== INPUT =====>>\n").concat(itemsArray, "\n<<===== INPUT =====<<\n").trim();
};

/* harmony default export */ __webpack_exports__["default"] = (composer);

/***/ }),

/***/ "./src/saveops.js":
/*!************************!*\
  !*** ./src/saveops.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _saver_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saver.js */ "./src/saver.js");
/* harmony import */ var _composer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./composer.js */ "./src/composer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _err__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./err */ "./src/err.js");








function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var urlStub = Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["urlParts"])().base;
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(e, startSave, endSave) {
    var cite_id, elem, realID, cite_text, editor, newCite, comment, result, items, params, newTest;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return startSave();

          case 2:
            cite_id = window.localStorage.getItem('cite_id');
            elem = document.getElementById("save-button");
            realID = cite_id.slice(1);
            cite_text = window.localStorage.getItem('cite_text');
            editor = document.getElementById("editor");
            newCite = editor.content.innerHTML.replace(/\<u\>/g, "<span class=\"small-caps\">").replace(/\<\/u\>/g, "</span>");
            comment = document.getElementById("modal-comment").value;

            if (!(newCite !== cite_text)) {
              _context.next = 24;
              break;
            }

            elem.classList.add("save-ok");
            _context.next = 13;
            return axios__WEBPACK_IMPORTED_MODULE_9___default()({
              method: "get",
              url: "".concat(urlStub, "/itemdata/").concat(realID, ".json")
            }).catch(function (e) {
              return Object(_err__WEBPACK_IMPORTED_MODULE_11__["default"])(e);
            });

          case 13:
            result = _context.sent;
            items = [result.data];
            params = {
              id: "".concat(realID)
            };
            newTest = Object(_composer_js__WEBPACK_IMPORTED_MODULE_8__["default"])(items, params, newCite, comment);
            _context.next = 19;
            return Object(_saver_js__WEBPACK_IMPORTED_MODULE_7__["default"])(cite_id, newTest);

          case 19:
            elem.classList.remove("save-ok");
            _context.next = 22;
            return endSave();

          case 22:
            _context.next = 27;
            break;

          case 24:
            elem.classList.add("save-not-ok");
            elem.classList.add("black-wheel");
            setTimeout(function () {
              elem.classList.remove("save-not-ok");
              elem.classList.remove("black-wheel");
              endSave();
            }, 3000);

          case 27:
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

/***/ "./src/saver.js":
/*!**********************!*\
  !*** ./src/saver.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


var apiCall =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(props, quiet) {
    var mth, pth, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mth = props.apiMethod ? props.apiMethod : "get";
            pth = [props.apiSection, props.repoPath, props.apiSuffix].filter(function (o) {
              return o;
            }).join("/"); // console.log(mth + " :: " + pth);
            // if (props.params) {
            //     console.log(JSON.stringify(props.params, null, 2));
            // }

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
};

function info() {
  return this.result;
}

function repo(_x3, _x4) {
  return _repo.apply(this, arguments);
}

function _repo() {
  _repo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(repoPath, quiet) {
    var props;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "get";
            props.apiSection = "repos";
            props.repoPath = repoPath;
            props.apiSuffix = false;
            _context3.next = 7;
            return apiCall(props, quiet);

          case 7:
            props.result = _context3.sent;
            return _context3.abrupt("return", new Repo(props));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _repo.apply(this, arguments);
}

;

function me() {
  return _me.apply(this, arguments);
}

function _me() {
  _me = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var props;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            props = protect(this);
            props.apiSection = "user";
            _context4.next = 4;
            return apiCall(props);

          case 4:
            props.result = _context4.sent;
            return _context4.abrupt("return", new Repo(props));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _me.apply(this, arguments);
}

function fork(_x5) {
  return _fork.apply(this, arguments);
}

function _fork() {
  _fork = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(repoPath) {
    var props;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "post";
            props.apiSection = "repos";
            props.repoPath = repoPath;
            props.apiSuffix = "forks";
            _context5.next = 7;
            return apiCall(props);

          case 7:
            props.result = _context5.sent;
            return _context5.abrupt("return", new Repo(props));

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _fork.apply(this, arguments);
}

function commits() {
  return _commits.apply(this, arguments);
}

function _commits() {
  _commits = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var props;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            props = protect(this);
            props.apiSuffix = "commits?sha=master";
            _context6.next = 4;
            return apiCall(props);

          case 4:
            return _context6.abrupt("return", _context6.sent);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _commits.apply(this, arguments);
}

function patch(_x6) {
  return _patch.apply(this, arguments);
}

function _patch() {
  _patch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(headSHA) {
    var props;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "patch";
            props.apiSuffix = "git/refs/heads/master";
            props.params = {
              sha: headSHA,
              force: true
            };
            _context7.next = 6;
            return apiCall(props);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _patch.apply(this, arguments);
}

function getBranch(_x7, _x8) {
  return _getBranch.apply(this, arguments);
}

function _getBranch() {
  _getBranch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(branchName, quiet) {
    var props;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            props = protect(this);
            props.apiSuffix = "git/ref/heads/".concat(branchName);
            _context8.next = 4;
            return apiCall(props, quiet);

          case 4:
            return _context8.abrupt("return", _context8.sent);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _getBranch.apply(this, arguments);
}

function deleteBranch(_x9) {
  return _deleteBranch.apply(this, arguments);
}

function _deleteBranch() {
  _deleteBranch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(citeCode) {
    var props;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "delete";
            props.apiSuffix = "git/refs/heads/".concat(citeCode);
            _context9.next = 5;
            return apiCall(props);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));
  return _deleteBranch.apply(this, arguments);
}

function setBranch(_x10, _x11) {
  return _setBranch.apply(this, arguments);
}

function _setBranch() {
  _setBranch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(branchName, SHA) {
    var props;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "post";
            props.apiSuffix = "git/refs";
            props.params = {
              ref: "refs/heads/".concat(branchName),
              sha: SHA
            };
            _context10.next = 6;
            return apiCall(props);

          case 6:
            return _context10.abrupt("return", _context10.sent);

          case 7:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));
  return _setBranch.apply(this, arguments);
}

function getContents(_x12) {
  return _getContents.apply(this, arguments);
}

function _getContents() {
  _getContents = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(citeCode) {
    var props, fileName;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            props = protect(this);
            fileName = buildFileName(citeCode);
            props.apiSuffix = "contents/".concat(fileName, "?ref=").concat(encodeURIComponent(citeCode));
            _context11.next = 5;
            return apiCall(props);

          case 5:
            return _context11.abrupt("return", _context11.sent);

          case 6:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));
  return _getContents.apply(this, arguments);
}

function updateContents(_x13, _x14, _x15, _x16) {
  return _updateContents.apply(this, arguments);
}

function _updateContents() {
  _updateContents = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12(citeCode, message, content, contentsSHA) {
    var props, fileName;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            props = protect(this);
            fileName = buildFileName(citeCode);
            props.apiMethod = "put";
            props.apiSuffix = "contents/".concat(fileName);
            props.params = {
              message: message,
              content: content,
              branch: citeCode
            };

            if (contentsSHA) {
              props.params.sha = contentsSHA;
            }

            _context12.next = 8;
            return apiCall(props);

          case 8:
            return _context12.abrupt("return", _context12.sent);

          case 9:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));
  return _updateContents.apply(this, arguments);
}

function createPullRequest(_x17, _x18, _x19) {
  return _createPullRequest.apply(this, arguments);
}

function _createPullRequest() {
  _createPullRequest = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13(citeCode, userName, testContent) {
    var props;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            props = protect(this);
            props.apiMethod = "post";
            props.apiSuffix = "pulls";
            props.params = {
              title: "Citation: ".concat(citeCode),
              head: "".concat(userName, ":").concat(citeCode),
              base: "master",
              body: testContent,
              maintainer_can_modify: true
            };
            _context13.next = 6;
            return apiCall(props);

          case 6:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));
  return _createPullRequest.apply(this, arguments);
}

var github = new GitHub();

var saver =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(citeCode, testContent) {
    var testMessage, apiToken, client, ghrepo, ghme, myinfo, userName, userID, ghfork, result, commits, headSHA, branch, newContent, oldContent, contentsSHA;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            testMessage = "Citation: style_".concat(citeCode, ".txt"); // Create client
            // console.log("(1)");

            apiToken = window.localStorage.getItem('access_token');
            client = github.client(apiToken); // Instantiate test repo
            // console.log("(2)");

            _context2.next = 5;
            return client.repo("Juris-M/jsti-indigobook");

          case 5:
            ghrepo = _context2.sent;
            _context2.next = 8;
            return client.me();

          case 8:
            ghme = _context2.sent;
            myinfo = ghme.info();
            userName = myinfo.login;
            userID = myinfo.id; // Instantiate fork, creating if necessary (true is for quiet)
            // console.log("(4)");

            _context2.next = 14;
            return client.repo("".concat(userName, "/jsti-indigobook"), true);

          case 14:
            ghfork = _context2.sent;
            result = ghfork.info();

            if (result.full_name) {
              _context2.next = 20;
              break;
            }

            _context2.next = 19;
            return ghme.fork('Juris-M/jsti-indigobook').catch(function (e) {
              return handleErr(e, "create fork");
            });

          case 19:
            result = _context2.sent;

          case 20:
            _context2.next = 22;
            return ghrepo.commits();

          case 22:
            commits = _context2.sent;

            if (!(commits.length !== 0)) {
              _context2.next = 27;
              break;
            }

            headSHA = commits[0].sha; // console.log("(7)");

            _context2.next = 27;
            return ghfork.patch(headSHA);

          case 27:
            _context2.next = 29;
            return ghfork.getBranch(citeCode, true);

          case 29:
            branch = _context2.sent;

            if (!branch) {
              _context2.next = 33;
              break;
            }

            _context2.next = 33;
            return ghfork.deleteBranch(citeCode);

          case 33:
            _context2.next = 35;
            return ghfork.setBranch(citeCode, headSHA);

          case 35:
            branch = _context2.sent;
            _context2.next = 38;
            return ghfork.getContents(citeCode);

          case 38:
            result = _context2.sent;
            newContent = btoa(testContent);

            if (result) {
              _context2.next = 47;
              break;
            }

            _context2.next = 43;
            return ghfork.updateContents(citeCode, testMessage, newContent);

          case 43:
            _context2.next = 45;
            return ghrepo.createPullRequest(citeCode, userName);

          case 45:
            _context2.next = 54;
            break;

          case 47:
            oldContent = result.content.split("\n").join("");

            if (!(newContent !== oldContent)) {
              _context2.next = 54;
              break;
            }

            contentsSHA = result.sha; // console.log("(12)");

            _context2.next = 52;
            return ghfork.updateContents(citeCode, testMessage, newContent, contentsSHA);

          case 52:
            _context2.next = 54;
            return ghrepo.createPullRequest(citeCode, userName);

          case 54:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function saver(_x20, _x21) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (saver);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdmVvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdmVyLmpzIl0sIm5hbWVzIjpbImNvbXBvc2VyIiwiaXRlbXMiLCJwYXJhbXMiLCJuZXdDaXRlIiwiY29tbWVudCIsImtleXNBcnJheSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXAiLCJvIiwiaWQiLCJwYXJhbXNBcnJheSIsIml0ZW1zQXJyYXkiLCJ0cmltIiwidXJsU3R1YiIsInVybFBhcnRzIiwiYmFzZSIsImUiLCJzdGFydFNhdmUiLCJlbmRTYXZlIiwiY2l0ZV9pZCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlYWxJRCIsInNsaWNlIiwiY2l0ZV90ZXh0IiwiZWRpdG9yIiwiY29udGVudCIsImlubmVySFRNTCIsInJlcGxhY2UiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiY2F0Y2giLCJoYW5kbGVFcnIiLCJyZXN1bHQiLCJkYXRhIiwibmV3VGVzdCIsInNhdmVyIiwicmVtb3ZlIiwic2V0VGltZW91dCIsImFwaVN0dWIiLCJsYWJlbCIsInF1aWV0IiwibXNnIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwcm90ZWN0Iiwib2JqIiwicGFyc2UiLCJidWlsZEZpbGVOYW1lIiwiY2l0ZUNvZGUiLCJhcGlDYWxsIiwicHJvcHMiLCJtdGgiLCJhcGlNZXRob2QiLCJwdGgiLCJhcGlTZWN0aW9uIiwicmVwb1BhdGgiLCJhcGlTdWZmaXgiLCJmaWx0ZXIiLCJqb2luIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJhcGlUb2tlbiIsIkdpdEh1YiIsImNsaWVudCIsIkNsaWVudCIsInJlcG8iLCJiaW5kIiwibWUiLCJSZXBvIiwiZnVsbF9uYW1lIiwiaW5mbyIsImZvcmsiLCJjb21taXRzIiwicGF0Y2giLCJnZXRCcmFuY2giLCJkZWxldGVCcmFuY2giLCJzZXRCcmFuY2giLCJnZXRDb250ZW50cyIsInVwZGF0ZUNvbnRlbnRzIiwiY3JlYXRlUHVsbFJlcXVlc3QiLCJoZWFkU0hBIiwic2hhIiwiZm9yY2UiLCJicmFuY2hOYW1lIiwiU0hBIiwicmVmIiwiZmlsZU5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJjb250ZW50c1NIQSIsImJyYW5jaCIsInVzZXJOYW1lIiwidGVzdENvbnRlbnQiLCJ0aXRsZSIsImhlYWQiLCJib2R5IiwibWFpbnRhaW5lcl9jYW5fbW9kaWZ5IiwiZ2l0aHViIiwidGVzdE1lc3NhZ2UiLCJnaHJlcG8iLCJnaG1lIiwibXlpbmZvIiwibG9naW4iLCJ1c2VySUQiLCJnaGZvcmsiLCJsZW5ndGgiLCJuZXdDb250ZW50IiwiYnRvYSIsIm9sZENvbnRlbnQiLCJzcGxpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1hBLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxrQkFB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QWhDLEVBQTZDUSxVQUE3QyxDQXpEQTs7QUFBQTtBQUFBO0FBQUEsbUJBMERBUCxNQUFNLENBQUNuQixpQkFBUCxDQUF5Qi9CLFFBQXpCLEVBQW1DMEMsUUFBbkMsQ0ExREE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBNERGaUIsc0JBNURFLEdBNERXNUUsTUFBTSxDQUFDWCxPQUFQLENBQWV3RixLQUFmLENBQXFCLElBQXJCLEVBQTJCbEQsSUFBM0IsQ0FBZ0MsRUFBaEMsQ0E1RFg7O0FBQUEsa0JBNkRGK0MsVUFBVSxLQUFLRSxVQTdEYjtBQUFBO0FBQUE7QUFBQTs7QUE4REVuQix1QkE5REYsR0E4RGdCekQsTUFBTSxDQUFDa0QsR0E5RHZCLEVBK0RGOztBQS9ERTtBQUFBLG1CQWdFSXNCLE1BQU0sQ0FBQ3pCLGNBQVAsQ0FBc0I5QixRQUF0QixFQUFnQ2lELFdBQWhDLEVBQTZDUSxVQUE3QyxFQUF5RGpCLFdBQXpELENBaEVKOztBQUFBO0FBQUE7QUFBQSxtQkFpRUlVLE1BQU0sQ0FBQ25CLGlCQUFQLENBQXlCL0IsUUFBekIsRUFBbUMwQyxRQUFuQyxDQWpFSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFMeEQsS0FBSztBQUFBO0FBQUE7QUFBQSxHQUFYOztBQXlFZUEsb0VBQWYsRSIsImZpbGUiOiJzYXZlb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIG5vbiA9ICdcXHUyMDBCXFx1MDA4NVxcdTE4MEUnO1xuXG4vLyBjaGVjayB0aGF0IGEgbWV0aG9kIHdvcmtzIHdpdGggdGhlIGNvcnJlY3QgbGlzdFxuLy8gb2Ygd2hpdGVzcGFjZXMgYW5kIGhhcyBhIGNvcnJlY3QgbmFtZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0oKSB8fCBub25bTUVUSE9EX05BTUVdKCkgIT0gbm9uIHx8IHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRTtcbiAgfSk7XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcbi8vIEVkZ2UgMTQtIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iLCJjb25zdCBjb21wb3NlciA9IChpdGVtcywgcGFyYW1zLCBuZXdDaXRlLCBjb21tZW50KSA9PiB7XG4gICAgdmFyIGtleXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zLm1hcCgobykgPT4gby5pZCksIG51bGwsIDIpO1xuICAgIHZhciBwYXJhbXNBcnJheSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gICAgdmFyIGl0ZW1zQXJyYXkgPSBKU09OLnN0cmluZ2lmeShpdGVtcywgbnVsbCwgMik7XG4gICAgcmV0dXJuIGBcbj4+PT09PT0gTU9ERSA9PT09PT4+XG5jaXRhdGlvblxuPDw9PT09PSBNT0RFID09PT09PDxcblxuPj49PT09PSBLRVlTID09PT09Pj5cbiR7a2V5c0FycmF5fVxuPDw9PT09PSBLRVlTID09PT09PDxcblxuPj49PT09PSBERVNDUklQVElPTiA9PT09PT4+XG4ke2NvbW1lbnR9XG48PD09PT09IERFU0NSSVBUSU9OID09PT09PDxcblxuPj49PT09PSBSRVNVTFQgPT09PT0+PlxuJHtuZXdDaXRlfVxuPDw9PT09PSBSRVNVTFQgPT09PT08PFxuXG4+Pj09PT09IENJVEFUSU9OLUlURU1TID09PT09Pj5cbltcbiR7cGFyYW1zQXJyYXl9XG5dXG48PD09PT09IENJVEFUSU9OLUlURU1TID09PT09PDxcblxuPj49PT09PSBJTlBVVCA9PT09PT4+XG4ke2l0ZW1zQXJyYXl9XG48PD09PT09IElOUFVUID09PT09PDxcbmAudHJpbSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlcjtcbiIsImltcG9ydCBzYXZlciBmcm9tIFwiLi9zYXZlci5qc1wiO1xuaW1wb3J0IGNvbXBvc2VyIGZyb20gXCIuL2NvbXBvc2VyLmpzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1cmxQYXJ0cyB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgaGFuZGxlRXJyIGZyb20gXCIuL2VyclwiO1xuXG52YXIgdXJsU3R1YiA9IHVybFBhcnRzKCkuYmFzZTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGUsIHN0YXJ0U2F2ZSwgZW5kU2F2ZSkgPT4ge1xuICAgIGF3YWl0IHN0YXJ0U2F2ZSgpO1xuICAgIHZhciBjaXRlX2lkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRlX2lkJyk7XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmUtYnV0dG9uXCIpO1xuICAgIHZhciByZWFsSUQgPSBjaXRlX2lkLnNsaWNlKDEpO1xuICAgIHZhciBjaXRlX3RleHQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGVfdGV4dCcpO1xuICAgIHZhciBlZGl0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRvclwiKTtcbiAgICB2YXIgbmV3Q2l0ZSA9IGVkaXRvci5jb250ZW50LmlubmVySFRNTFxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcPHVcXD4vZywgXCI8c3BhbiBjbGFzcz1cXFwic21hbGwtY2Fwc1xcXCI+XCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFw8XFwvdVxcPi9nLCBcIjwvc3Bhbj5cIik7XG4gICAgdmFyIGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbW1lbnRcIikudmFsdWU7XG4gICAgaWYgKG5ld0NpdGUgIT09IGNpdGVfdGV4dCkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJzYXZlLW9rXCIpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgdXJsOiBgJHt1cmxTdHVifS9pdGVtZGF0YS8ke3JlYWxJRH0uanNvbmBcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IGhhbmRsZUVycihlKSk7XG4gICAgICAgIHZhciBpdGVtcyA9IFtyZXN1bHQuZGF0YV07XG4gICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICBpZDogYCR7cmVhbElEfWBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG5ld1Rlc3QgPSBjb21wb3NlcihpdGVtcywgcGFyYW1zLCBuZXdDaXRlLCBjb21tZW50KTtcbiAgICAgICAgYXdhaXQgc2F2ZXIoY2l0ZV9pZCwgbmV3VGVzdCk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNhdmUtb2tcIik7XG4gICAgICAgIGF3YWl0IGVuZFNhdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJzYXZlLW5vdC1va1wiKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYmxhY2std2hlZWxcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2F2ZS1ub3Qtb2tcIik7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJibGFjay13aGVlbFwiKTtcbiAgICAgICAgICAgIGVuZFNhdmUoKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gY29uc3QgYmFzZTY0ID0gcmVxdWlyZShcImJhc2UtNjRcIik7XG4vLyBjb25zdCB1dGY4ID0gcmVxdWlyZShcInV0ZjhcIik7XG5cbmNvbnN0IGFwaVN0dWIgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb21cIjtcblxuY29uc3QgaGFuZGxlRXJyID0gKGUsIGxhYmVsLCBxdWlldCkgPT4ge1xuICAgIHZhciBtc2cgPSBlLm1lc3NhZ2U7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICAgIG1zZyA9IGAke2xhYmVsfTogJHttc2d9YDtcbiAgICB9XG4gICAgaWYgKCFxdWlldCkge1xuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIH1cbn1cblxuY29uc3QgcHJvdGVjdCA9IChvYmopID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuY29uc3QgYnVpbGRGaWxlTmFtZSA9IChjaXRlQ29kZSkgPT4ge1xuICAgIHJldHVybiBgc3R5bGVfJHtjaXRlQ29kZX0udHh0YDtcbn1cblxuLypcbnZhciBidG9hID0gKHN0cikgPT4ge1xuICAgIHZhciBieXRlcyA9IHV0ZjguZW5jb2RlKHN0cik7XG4gICAgcmV0dXJuIGAke2Jhc2U2NC5lbmNvZGUoYnl0ZXMpfWA7XG59XG4qL1xuXG5jb25zdCBhcGlDYWxsID0gYXN5bmMgKHByb3BzLCBxdWlldCkgPT4ge1xuICAgIHZhciBtdGggPSBwcm9wcy5hcGlNZXRob2QgPyBwcm9wcy5hcGlNZXRob2QgOiBcImdldFwiO1xuICAgIHZhciBwdGggPSBbcHJvcHMuYXBpU2VjdGlvbiwgcHJvcHMucmVwb1BhdGgsIHByb3BzLmFwaVN1ZmZpeF0uZmlsdGVyKChvKSA9PiBvKS5qb2luKFwiL1wiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhtdGggKyBcIiA6OiBcIiArIHB0aCk7XG4gICAgLy8gaWYgKHByb3BzLnBhcmFtcykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwcm9wcy5wYXJhbXMsIG51bGwsIDIpKTtcbiAgICAvLyB9XG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBtdGgsXG4gICAgICAgIHVybDogYCR7YXBpU3R1Yn0vJHtwdGh9YCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7cHJvcHMuYXBpVG9rZW59YFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBwcm9wcy5wYXJhbXNcbiAgICB9KS5jYXRjaCgoZSkgPT4gaGFuZGxlRXJyKGUsIFwiQVBJIGZhaWxcIiwgcXVpZXQpKTtcbiAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0LmRhdGEgOiBmYWxzZTtcbn1cblxuY2xhc3MgR2l0SHViIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSAoYXBpVG9rZW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2xpZW50KGFwaVRva2VuKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNsYXNzIENsaWVudCB7XG4gICAgY29uc3RydWN0b3IoYXBpVG9rZW4pIHtcbiAgICAgICAgdGhpcy5yZXBvID0gcmVwby5iaW5kKHtcbiAgICAgICAgICAgIGFwaVRva2VuOiBhcGlUb2tlblxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tZSA9IG1lLmJpbmQoe1xuICAgICAgICAgICAgYXBpVG9rZW46IGFwaVRva2VuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgUmVwbyB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIC8vIENsb25lIHByb3BlcnRpZXMgYW5kIHJlc2V0IHRvIHJlcG8gZGVmYXVsdHNcbiAgICAgICAgcHJvcHMgPSBwcm90ZWN0KHByb3BzKTtcbiAgICAgICAgdGhpcy5hcGlNZXRob2QgPSBcImdldFwiO1xuICAgICAgICB0aGlzLmFwaVNlY3Rpb24gPSBcInJlcG9zXCI7XG4gICAgICAgIHRoaXMucmVwb1BhdGggPSBwcm9wcy5yZXN1bHQuZnVsbF9uYW1lO1xuICAgICAgICB0aGlzLmFwaVN1ZmZpeCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mby5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5mb3JrID0gZm9yay5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5jb21taXRzID0gY29tbWl0cy5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5wYXRjaCA9IHBhdGNoLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmdldEJyYW5jaCA9IGdldEJyYW5jaC5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5kZWxldGVCcmFuY2ggPSBkZWxldGVCcmFuY2guYmluZChwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0QnJhbmNoID0gc2V0QnJhbmNoLmJpbmQocHJvcHMpO1xuICAgICAgICB0aGlzLmdldENvbnRlbnRzID0gZ2V0Q29udGVudHMuYmluZChwcm9wcyk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudHMgPSB1cGRhdGVDb250ZW50cy5iaW5kKHByb3BzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQdWxsUmVxdWVzdCA9IGNyZWF0ZVB1bGxSZXF1ZXN0LmJpbmQocHJvcHMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5mbyAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xufVxuXG5hc3luYyBmdW5jdGlvbiByZXBvIChyZXBvUGF0aCwgcXVpZXQpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHByb3BzLmFwaU1ldGhvZCA9IFwiZ2V0XCI7XG4gICAgcHJvcHMuYXBpU2VjdGlvbiA9IFwicmVwb3NcIjtcbiAgICBwcm9wcy5yZXBvUGF0aCA9IHJlcG9QYXRoO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGZhbHNlO1xuICAgIHByb3BzLnJlc3VsdCA9IGF3YWl0IGFwaUNhbGwocHJvcHMsIHF1aWV0KTtcbiAgICByZXR1cm4gbmV3IFJlcG8ocHJvcHMpO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gbWUgKCkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgcHJvcHMuYXBpU2VjdGlvbiA9IFwidXNlclwiO1xuICAgIHByb3BzLnJlc3VsdCA9IGF3YWl0IGFwaUNhbGwocHJvcHMpO1xuICAgIHJldHVybiBuZXcgUmVwbyhwcm9wcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZvcmsgKHJlcG9QYXRoKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInBvc3RcIjtcbiAgICBwcm9wcy5hcGlTZWN0aW9uID0gXCJyZXBvc1wiO1xuICAgIHByb3BzLnJlcG9QYXRoID0gcmVwb1BhdGg7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gXCJmb3Jrc1wiO1xuICAgIHByb3BzLnJlc3VsdCA9IGF3YWl0IGFwaUNhbGwocHJvcHMpO1xuICAgIHJldHVybiBuZXcgUmVwbyhwcm9wcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbW1pdHMgKCkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gYGNvbW1pdHM/c2hhPW1hc3RlcmA7XG4gICAgcmV0dXJuIGF3YWl0IGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwYXRjaCAoaGVhZFNIQSkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgcHJvcHMuYXBpTWV0aG9kID0gXCJwYXRjaFwiO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IFwiZ2l0L3JlZnMvaGVhZHMvbWFzdGVyXCI7XG4gICAgcHJvcHMucGFyYW1zID0ge1xuICAgICAgICBzaGE6IGhlYWRTSEEsXG4gICAgICAgIGZvcmNlOiB0cnVlXG4gICAgfTtcbiAgICBhd2FpdCBhcGlDYWxsKHByb3BzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoIChicmFuY2hOYW1lLCBxdWlldCkge1xuICAgIHZhciBwcm9wcyA9IHByb3RlY3QodGhpcyk7XG4gICAgcHJvcHMuYXBpU3VmZml4ID0gYGdpdC9yZWYvaGVhZHMvJHticmFuY2hOYW1lfWA7XG4gICAgcmV0dXJuIGF3YWl0IGFwaUNhbGwocHJvcHMsIHF1aWV0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlQnJhbmNoKGNpdGVDb2RlKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcImRlbGV0ZVwiO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBnaXQvcmVmcy9oZWFkcy8ke2NpdGVDb2RlfWA7XG4gICAgYXdhaXQgYXBpQ2FsbChwcm9wcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEJyYW5jaCAoYnJhbmNoTmFtZSwgU0hBKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInBvc3RcIjtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBcImdpdC9yZWZzXCI7XG4gICAgcHJvcHMucGFyYW1zID0ge1xuICAgICAgICByZWY6IGByZWZzL2hlYWRzLyR7YnJhbmNoTmFtZX1gLFxuICAgICAgICBzaGE6IFNIQVxuICAgIH07XG4gICAgcmV0dXJuIGF3YWl0IGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb250ZW50cyAoY2l0ZUNvZGUpIHtcbiAgICB2YXIgcHJvcHMgPSBwcm90ZWN0KHRoaXMpO1xuICAgIHZhciBmaWxlTmFtZSA9IGJ1aWxkRmlsZU5hbWUoY2l0ZUNvZGUpO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBjb250ZW50cy8ke2ZpbGVOYW1lfT9yZWY9JHtlbmNvZGVVUklDb21wb25lbnQoY2l0ZUNvZGUpfWA7XG4gICAgcmV0dXJuIGF3YWl0IGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVDb250ZW50cyAoY2l0ZUNvZGUsIG1lc3NhZ2UsIGNvbnRlbnQsIGNvbnRlbnRzU0hBKSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICB2YXIgZmlsZU5hbWUgPSBidWlsZEZpbGVOYW1lKGNpdGVDb2RlKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInB1dFwiO1xuICAgIHByb3BzLmFwaVN1ZmZpeCA9IGBjb250ZW50cy8ke2ZpbGVOYW1lfWA7XG4gICAgcHJvcHMucGFyYW1zID0ge1xuICAgICAgICBtZXNzYWdlOiAgbWVzc2FnZSxcbiAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgYnJhbmNoOiBjaXRlQ29kZVxuICAgIH07XG4gICAgaWYgKGNvbnRlbnRzU0hBKSB7XG4gICAgICAgIHByb3BzLnBhcmFtcy5zaGEgPSBjb250ZW50c1NIQTtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IGFwaUNhbGwocHJvcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVQdWxsUmVxdWVzdChjaXRlQ29kZSwgdXNlck5hbWUsIHRlc3RDb250ZW50KSB7XG4gICAgdmFyIHByb3BzID0gcHJvdGVjdCh0aGlzKTtcbiAgICBwcm9wcy5hcGlNZXRob2QgPSBcInBvc3RcIjtcbiAgICBwcm9wcy5hcGlTdWZmaXggPSBcInB1bGxzXCI7XG4gICAgcHJvcHMucGFyYW1zID0ge1xuICAgICAgICB0aXRsZTogYENpdGF0aW9uOiAke2NpdGVDb2RlfWAsXG4gICAgICAgIGhlYWQ6IGAke3VzZXJOYW1lfToke2NpdGVDb2RlfWAsXG4gICAgICAgIGJhc2U6IFwibWFzdGVyXCIsXG4gICAgICAgIGJvZHk6IHRlc3RDb250ZW50LFxuICAgICAgICBtYWludGFpbmVyX2Nhbl9tb2RpZnk6IHRydWVcbiAgICB9O1xuICAgIGF3YWl0IGFwaUNhbGwocHJvcHMpO1xufVxuXG52YXIgZ2l0aHViID0gbmV3IEdpdEh1YjtcblxuY29uc3Qgc2F2ZXIgPSBhc3luYyAoY2l0ZUNvZGUsIHRlc3RDb250ZW50KSA9PiB7XG5cbiAgICB2YXIgdGVzdE1lc3NhZ2UgPSBgQ2l0YXRpb246IHN0eWxlXyR7Y2l0ZUNvZGV9LnR4dGA7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGNsaWVudFxuICAgIC8vIGNvbnNvbGUubG9nKFwiKDEpXCIpO1xuICAgIHZhciBhcGlUb2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgdmFyIGNsaWVudCA9IGdpdGh1Yi5jbGllbnQoYXBpVG9rZW4pO1xuICAgIFxuICAgIC8vIEluc3RhbnRpYXRlIHRlc3QgcmVwb1xuICAgIC8vIGNvbnNvbGUubG9nKFwiKDIpXCIpO1xuICAgIHZhciBnaHJlcG8gPSBhd2FpdCBjbGllbnQucmVwbyhcIkp1cmlzLU0vanN0aS1pbmRpZ29ib29rXCIpO1xuICAgIFxuICAgIC8vIEdldCB1c2VyIG5hbWUgYW5kIHVzZXIgSURcbiAgICAvLyBjb25zb2xlLmxvZyhcIigzKVwiKTtcbiAgICB2YXIgZ2htZSA9IGF3YWl0IGNsaWVudC5tZSgpO1xuICAgIHZhciBteWluZm8gPSBnaG1lLmluZm8oKTtcbiAgICB2YXIgdXNlck5hbWUgPSBteWluZm8ubG9naW47XG4gICAgdmFyIHVzZXJJRCA9IG15aW5mby5pZDtcbiAgICBcbiAgICAvLyBJbnN0YW50aWF0ZSBmb3JrLCBjcmVhdGluZyBpZiBuZWNlc3NhcnkgKHRydWUgaXMgZm9yIHF1aWV0KVxuICAgIC8vIGNvbnNvbGUubG9nKFwiKDQpXCIpO1xuICAgIHZhciBnaGZvcmsgPSBhd2FpdCBjbGllbnQucmVwbyhgJHt1c2VyTmFtZX0vanN0aS1pbmRpZ29ib29rYCwgdHJ1ZSk7XG4gICAgdmFyIHJlc3VsdCA9IGdoZm9yay5pbmZvKCk7XG4gICAgaWYgKCFyZXN1bHQuZnVsbF9uYW1lKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKDUpXCIpO1xuICAgICAgICByZXN1bHQgPSBhd2FpdCBnaG1lLmZvcmsoJ0p1cmlzLU0vanN0aS1pbmRpZ29ib29rJykuY2F0Y2goKGUpID0+IGhhbmRsZUVycihlLCBcImNyZWF0ZSBmb3JrXCIpKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQWxpZ24gZm9yayB0byB0aGUgbGF0ZXN0IHRlc3QgcmVwbyBtYXN0ZXIgY29tbWl0XG4gICAgLy8gY29uc29sZS5sb2coXCIoNilcIik7XG4gICAgdmFyIGNvbW1pdHMgPSBhd2FpdCBnaHJlcG8uY29tbWl0cygpO1xuICAgIGlmIChjb21taXRzLmxlbmd0aCAhPT0gMCkgeyBcbiAgICAgICAgdmFyIGhlYWRTSEEgPSBjb21taXRzWzBdLnNoYTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIoNylcIik7XG4gICAgICAgIGF3YWl0IGdoZm9yay5wYXRjaChoZWFkU0hBKTtcbiAgICB9XG4gICAgXG4gICAgLy8gR2V0IGJyYW5jaCBwb2ludGVyXG4gICAgLy8gU2NydWJiaW5nIGFuIGV4aXN0aW5nIGJyYW5jaCBmb3IgdGhpcyBjaXRlIGNvZGUsIGlmIGFueSwgd2lsbFxuICAgIC8vIGFsc28gcmVtb3ZlIGFueSBwdWxsIHJlcXVlc3RzIGFzc29jaWF0ZWQgd2l0aCBpdC4gUHVsbCByZXF1ZXN0c1xuICAgIC8vIHdpbGwgYWx3YXlzIGNvbnNpc3Qgb2YgYSBzaW5nbGUgY29tbWl0LlxuICAgIC8vIGNvbnNvbGUubG9nKFwiKDgpXCIpO1xuICAgIHZhciBicmFuY2ggPSBhd2FpdCBnaGZvcmsuZ2V0QnJhbmNoKGNpdGVDb2RlLCB0cnVlKTtcbiAgICBpZiAoYnJhbmNoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKDkpXCIpO1xuICAgICAgICBhd2FpdCBnaGZvcmsuZGVsZXRlQnJhbmNoKGNpdGVDb2RlKTtcbiAgICB9XG4gICAgYnJhbmNoID0gYXdhaXQgZ2hmb3JrLnNldEJyYW5jaChjaXRlQ29kZSwgaGVhZFNIQSk7XG5cbiAgICAvLyBDcmVhdGUgb3IgdXBkYXRlIHRoZSB0YXJnZXQgZmlsZSAobm8tY2hhbmdlIHNjcmVlbmluZyBzaG91bGQgb2NjdXIgaW4gdGhlIFVJIGxheWVyLCBiZWZvcmUgaW52b2tpbmcgdGhpcylcbiAgICAvLyBjb25zb2xlLmxvZyhcIigxMClcIik7XG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IGdoZm9yay5nZXRDb250ZW50cyhjaXRlQ29kZSk7XG5cbiAgICB2YXIgbmV3Q29udGVudCA9IGJ0b2EodGVzdENvbnRlbnQpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKDExKVwiKTtcbiAgICAgICAgYXdhaXQgZ2hmb3JrLnVwZGF0ZUNvbnRlbnRzKGNpdGVDb2RlLCB0ZXN0TWVzc2FnZSwgbmV3Q29udGVudCk7XG4gICAgICAgIGF3YWl0IGdocmVwby5jcmVhdGVQdWxsUmVxdWVzdChjaXRlQ29kZSwgdXNlck5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvbGRDb250ZW50ID0gcmVzdWx0LmNvbnRlbnQuc3BsaXQoXCJcXG5cIikuam9pbihcIlwiKTtcbiAgICAgICAgaWYgKG5ld0NvbnRlbnQgIT09IG9sZENvbnRlbnQpIHtcbiAgICAgICAgICAgIHZhciBjb250ZW50c1NIQSA9IHJlc3VsdC5zaGE7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIigxMilcIik7XG4gICAgICAgICAgICBhd2FpdCBnaGZvcmsudXBkYXRlQ29udGVudHMoY2l0ZUNvZGUsIHRlc3RNZXNzYWdlLCBuZXdDb250ZW50LCBjb250ZW50c1NIQSk7XG4gICAgICAgICAgICBhd2FpdCBnaHJlcG8uY3JlYXRlUHVsbFJlcXVlc3QoY2l0ZUNvZGUsIHVzZXJOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBDcmVhdGUgYSBwdWxsIHJlcXVlc3QgZnJvbSB0aGUgdXNlciBmb3JrIGFuZCBicmFuY2hcbiAgICAvLyBjb25zb2xlLmxvZyhcIigxMylcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzYXZlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=