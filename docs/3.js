(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

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

/***/ "./node_modules/core-js/modules/es.reflect.construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/pell.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/pell.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pell {\n  border: 1px solid rgba(10, 10, 10, 0.1);\n  box-sizing: border-box; }\n\n.pell-content {\n  box-sizing: border-box;\n  height: 50px;\n  outline: 0;\n  overflow-y: auto;\n  padding: 10px;\n  background-color: lightgoldenrodyellow;\n}\n\n.pell-actionbar {\n  background-color: #4b0082;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.1); }\n\n.pell-button {\n  background-color: white;\n  border: none;\n  cursor: pointer;\n  height: 30px;\n  outline: 0;\n  width: 50px;\n  vertical-align: bottom;\n  margin: 1px 5px;\n  border-radius: 4px;\n}\n\n.pell-button-selected {\n  background-color: #F0F0F0; }\n\n.pell u {\n    text-decoration-color: transparent;\n    font-variant: small-caps;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/pell/dist/pell.min.js":
/*!********************************************!*\
  !*** ./node_modules/pell/dist/pell.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c="defaultParagraphSeparator",l="formatBlock",a=function(t,e,n){return t.addEventListener(e,n)},s=function(t,e){return t.appendChild(e)},d=function(t){return document.createElement(t)},n=function(t){return document.queryCommandState(t)},f=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return document.execCommand(t,!1,e)},p={bold:{icon:"<b>B</b>",title:"Bold",state:function(){return n("bold")},result:function(){return f("bold")}},italic:{icon:"<i>I</i>",title:"Italic",state:function(){return n("italic")},result:function(){return f("italic")}},underline:{icon:"<u>U</u>",title:"Underline",state:function(){return n("underline")},result:function(){return f("underline")}},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:function(){return n("strikeThrough")},result:function(){return f("strikeThrough")}},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:function(){return f(l,"<h1>")}},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:function(){return f(l,"<h2>")}},paragraph:{icon:"&#182;",title:"Paragraph",result:function(){return f(l,"<p>")}},quote:{icon:"&#8220; &#8221;",title:"Quote",result:function(){return f(l,"<blockquote>")}},olist:{icon:"&#35;",title:"Ordered List",result:function(){return f("insertOrderedList")}},ulist:{icon:"&#8226;",title:"Unordered List",result:function(){return f("insertUnorderedList")}},code:{icon:"&lt;/&gt;",title:"Code",result:function(){return f(l,"<pre>")}},line:{icon:"&#8213;",title:"Horizontal Line",result:function(){return f("insertHorizontalRule")}},link:{icon:"&#128279;",title:"Link",result:function(){var t=window.prompt("Enter the link URL");t&&f("createLink",t)}},image:{icon:"&#128247;",title:"Image",result:function(){var t=window.prompt("Enter the image URL");t&&f("insertImage",t)}}},m={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"},r=function(n){var t=n.actions?n.actions.map(function(t){return"string"==typeof t?p[t]:p[t.name]?e({},p[t.name],t):t}):Object.keys(p).map(function(t){return p[t]}),r=e({},m,n.classes),i=n[c]||"div",o=d("div");o.className=r.actionbar,s(n.element,o);var u=n.element.content=d("div");return u.contentEditable=!0,u.className=r.content,u.oninput=function(t){var e=t.target.firstChild;e&&3===e.nodeType?f(l,"<"+i+">"):"<br>"===u.innerHTML&&(u.innerHTML=""),n.onChange(u.innerHTML)},u.onkeydown=function(t){var e;"Enter"===t.key&&"blockquote"===(e=l,document.queryCommandValue(e))&&setTimeout(function(){return f(l,"<"+i+">")},0)},s(n.element,u),t.forEach(function(t){var e=d("button");if(e.className=r.button,e.innerHTML=t.icon,e.title=t.title,e.setAttribute("type","button"),e.onclick=function(){return t.result()&&u.focus()},t.state){var n=function(){return e.classList[t.state()?"add":"remove"](r.selected)};a(u,"keyup",n),a(u,"mouseup",n),a(e,"click",n)}s(o,e)}),n.styleWithCSS&&f("styleWithCSS"),f(c,i),n.element},i={exec:f,init:r};t.exec=f,t.init=r,t.default=i,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ "./src/editor.jsx":
/*!************************!*\
  !*** ./src/editor.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pell */ "./node_modules/pell/dist/pell.min.js");
/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pell_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pell.css */ "./src/pell.css");
/* harmony import */ var _pell_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_pell_css__WEBPACK_IMPORTED_MODULE_8__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// App.js




var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      html: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.editor = Object(pell__WEBPACK_IMPORTED_MODULE_7__["init"])({
        element: document.getElementById('editor'),
        onChange: function onChange(html) {
          return _this2.setState({
            html
          });
        },
        actions: ['bold', 'italic', {
          name: 'smallCaps',
          icon: '<div style="font-variant: small-caps;">Caps</div>',
          title: 'Small Caps',
          result: function result() {
            return Object(pell__WEBPACK_IMPORTED_MODULE_7__["exec"])('underline');
          }
        }, {
          name: 'superscript',
          icon: '<div>A<sup>b</sup></div>',
          title: 'Superscript',
          result: function result() {
            return Object(pell__WEBPACK_IMPORTED_MODULE_7__["exec"])('superscript');
          }
        }]
      });
      var wrapper = document.createElement("div");
      wrapper.innerHTML = this.props.citeContent;
      var styleNodes = wrapper.getElementsByTagName("style");

      for (var i = styleNodes.length - 1; i > -1; i--) {
        wrapper.removeChild(styleNodes[i]);
      } // Need also to strip out extraneous inline garbage added by Word.


      var citeContent = wrapper.innerHTML;
      citeContent = citeContent.replace(/<\/?div>/g, "");
      citeContent = citeContent.trim();
      this.editor.content.innerHTML = citeContent;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "App"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "editor",
        className: "pell"
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/pell.css":
/*!**********************!*\
  !*** ./src/pell.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./pell.css */ "./node_modules/css-loader/dist/cjs.js?!./src/pell.css");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWZsZWN0LmNvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzIiwid2VicGFjazovLy8uL3NyYy9wZWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVsbC9kaXN0L3BlbGwubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanN4Iiwid2VicGFjazovLy8uL3NyYy9wZWxsLmNzcz8zNmZkIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJodG1sIiwiZWRpdG9yIiwiaW5pdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsImFjdGlvbnMiLCJuYW1lIiwiaWNvbiIsInRpdGxlIiwicmVzdWx0IiwiZXhlYyIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2l0ZUNvbnRlbnQiLCJzdHlsZU5vZGVzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwibGVuZ3RoIiwicmVtb3ZlQ2hpbGQiLCJyZXBsYWNlIiwidHJpbSIsImNvbnRlbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLGdC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LDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssVUFBRSxFQUFDLFFBQVI7QUFBaUIsaUJBQVMsRUFBQztBQUEzQixRQURGLENBREY7QUFLRDs7OztFQS9DZVMsK0M7O0FBa0RIN0Isa0VBQWYsRTs7Ozs7Ozs7Ozs7QUN6REEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQywySEFBK0Q7O0FBRWpHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIShhcmdzTGVuZ3RoIGluIGZhY3RvcmllcykpIHtcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZmFjdG9yaWVzW2FyZ3NMZW5ndGhdID0gRnVuY3Rpb24oJ0MsYScsICdyZXR1cm4gbmV3IEMoJyArIGxpc3Quam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gIHZhciBwYXJ0QXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKSB7XG4gICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoZm4ucHJvdG90eXBlKSkgYm91bmRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG4gIHJldHVybiBib3VuZEZ1bmN0aW9uO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gIH0pO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgbmF0aXZlQ29uc3RydWN0ID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdjb25zdHJ1Y3QnKTtcblxuLy8gYFJlZmxlY3QuY29uc3RydWN0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZmxlY3QuY29uc3RydWN0XG4vLyBNUyBFZGdlIHN1cHBvcnRzIG9ubHkgMiBhcmd1bWVudHMgYW5kIGFyZ3VtZW50c0xpc3QgYXJndW1lbnQgaXMgb3B0aW9uYWxcbi8vIEZGIE5pZ2h0bHkgc2V0cyB0aGlyZCBhcmd1bWVudCBhcyBgbmV3LnRhcmdldGAsIGJ1dCBkb2VzIG5vdCBjcmVhdGUgYHRoaXNgIGZyb20gaXRcbnZhciBORVdfVEFSR0VUX0JVRyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gIShuYXRpdmVDb25zdHJ1Y3QoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCBbXSwgRikgaW5zdGFuY2VvZiBGKTtcbn0pO1xudmFyIEFSR1NfQlVHID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgbmF0aXZlQ29uc3RydWN0KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcbnZhciBGT1JDRUQgPSBORVdfVEFSR0VUX0JVRyB8fCBBUkdTX0JVRztcblxuJCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCwgc2hhbTogRk9SQ0VEIH0sIHtcbiAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzIC8qICwgbmV3VGFyZ2V0ICovKSB7XG4gICAgYUZ1bmN0aW9uKFRhcmdldCk7XG4gICAgYW5PYmplY3QoYXJncyk7XG4gICAgdmFyIG5ld1RhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gVGFyZ2V0IDogYUZ1bmN0aW9uKGFyZ3VtZW50c1syXSk7XG4gICAgaWYgKEFSR1NfQlVHICYmICFORVdfVEFSR0VUX0JVRykgcmV0dXJuIG5hdGl2ZUNvbnN0cnVjdChUYXJnZXQsIGFyZ3MsIG5ld1RhcmdldCk7XG4gICAgaWYgKFRhcmdldCA9PSBuZXdUYXJnZXQpIHtcbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgb3B0aW1pemF0aW9uIGZvciAwLTQgYXJndW1lbnRzXG4gICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBUYXJnZXQoKTtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgY2FzZSA0OiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgIH1cbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgbG90IG9mIGFyZ3VtZW50cyBjYXNlXG4gICAgICB2YXIgJGFyZ3MgPSBbbnVsbF07XG4gICAgICAkYXJncy5wdXNoLmFwcGx5KCRhcmdzLCBhcmdzKTtcbiAgICAgIHJldHVybiBuZXcgKGJpbmQuYXBwbHkoVGFyZ2V0LCAkYXJncykpKCk7XG4gICAgfVxuICAgIC8vIHdpdGggYWx0ZXJlZCBuZXdUYXJnZXQsIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGNvbnN0cnVjdG9yc1xuICAgIHZhciBwcm90byA9IG5ld1RhcmdldC5wcm90b3R5cGU7XG4gICAgdmFyIGluc3RhbmNlID0gY3JlYXRlKGlzT2JqZWN0KHByb3RvKSA/IHByb3RvIDogT2JqZWN0LnByb3RvdHlwZSk7XG4gICAgdmFyIHJlc3VsdCA9IEZ1bmN0aW9uLmFwcGx5LmNhbGwoVGFyZ2V0LCBpbnN0YW5jZSwgYXJncyk7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMCwgMTAsIDEwLCAwLjEpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5wZWxsLWNvbnRlbnQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG91dGxpbmU6IDA7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbn1cXG5cXG4ucGVsbC1hY3Rpb25iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiMDA4MjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7IH1cXG5cXG4ucGVsbC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBvdXRsaW5lOiAwO1xcbiAgd2lkdGg6IDUwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgbWFyZ2luOiAxcHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ucGVsbC1idXR0b24tc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDsgfVxcblxcbi5wZWxsIHUge1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9lKGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSxlKTplKHQucGVsbD17fSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYodFtyXT1uW3JdKX1yZXR1cm4gdH0sYz1cImRlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3JcIixsPVwiZm9ybWF0QmxvY2tcIixhPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKGUsbil9LHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5hcHBlbmRDaGlsZChlKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KX0sbj1mdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUodCl9LGY9ZnVuY3Rpb24odCl7dmFyIGU9MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm51bGw7cmV0dXJuIGRvY3VtZW50LmV4ZWNDb21tYW5kKHQsITEsZSl9LHA9e2JvbGQ6e2ljb246XCI8Yj5CPC9iPlwiLHRpdGxlOlwiQm9sZFwiLHN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG4oXCJib2xkXCIpfSxyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcImJvbGRcIil9fSxpdGFsaWM6e2ljb246XCI8aT5JPC9pPlwiLHRpdGxlOlwiSXRhbGljXCIsc3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gbihcIml0YWxpY1wiKX0scmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJpdGFsaWNcIil9fSx1bmRlcmxpbmU6e2ljb246XCI8dT5VPC91PlwiLHRpdGxlOlwiVW5kZXJsaW5lXCIsc3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gbihcInVuZGVybGluZVwiKX0scmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJ1bmRlcmxpbmVcIil9fSxzdHJpa2V0aHJvdWdoOntpY29uOlwiPHN0cmlrZT5TPC9zdHJpa2U+XCIsdGl0bGU6XCJTdHJpa2UtdGhyb3VnaFwiLHN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG4oXCJzdHJpa2VUaHJvdWdoXCIpfSxyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcInN0cmlrZVRocm91Z2hcIil9fSxoZWFkaW5nMTp7aWNvbjpcIjxiPkg8c3ViPjE8L3N1Yj48L2I+XCIsdGl0bGU6XCJIZWFkaW5nIDFcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihsLFwiPGgxPlwiKX19LGhlYWRpbmcyOntpY29uOlwiPGI+SDxzdWI+Mjwvc3ViPjwvYj5cIix0aXRsZTpcIkhlYWRpbmcgMlwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKGwsXCI8aDI+XCIpfX0scGFyYWdyYXBoOntpY29uOlwiJiMxODI7XCIsdGl0bGU6XCJQYXJhZ3JhcGhcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihsLFwiPHA+XCIpfX0scXVvdGU6e2ljb246XCImIzgyMjA7ICYjODIyMTtcIix0aXRsZTpcIlF1b3RlXCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYobCxcIjxibG9ja3F1b3RlPlwiKX19LG9saXN0OntpY29uOlwiJiMzNTtcIix0aXRsZTpcIk9yZGVyZWQgTGlzdFwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKFwiaW5zZXJ0T3JkZXJlZExpc3RcIil9fSx1bGlzdDp7aWNvbjpcIiYjODIyNjtcIix0aXRsZTpcIlVub3JkZXJlZCBMaXN0XCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJpbnNlcnRVbm9yZGVyZWRMaXN0XCIpfX0sY29kZTp7aWNvbjpcIiZsdDsvJmd0O1wiLHRpdGxlOlwiQ29kZVwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKGwsXCI8cHJlPlwiKX19LGxpbmU6e2ljb246XCImIzgyMTM7XCIsdGl0bGU6XCJIb3Jpem9udGFsIExpbmVcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcImluc2VydEhvcml6b250YWxSdWxlXCIpfX0sbGluazp7aWNvbjpcIiYjMTI4Mjc5O1wiLHRpdGxlOlwiTGlua1wiLHJlc3VsdDpmdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aGUgbGluayBVUkxcIik7dCYmZihcImNyZWF0ZUxpbmtcIix0KX19LGltYWdlOntpY29uOlwiJiMxMjgyNDc7XCIsdGl0bGU6XCJJbWFnZVwiLHJlc3VsdDpmdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aGUgaW1hZ2UgVVJMXCIpO3QmJmYoXCJpbnNlcnRJbWFnZVwiLHQpfX19LG09e2FjdGlvbmJhcjpcInBlbGwtYWN0aW9uYmFyXCIsYnV0dG9uOlwicGVsbC1idXR0b25cIixjb250ZW50OlwicGVsbC1jb250ZW50XCIsc2VsZWN0ZWQ6XCJwZWxsLWJ1dHRvbi1zZWxlY3RlZFwifSxyPWZ1bmN0aW9uKG4pe3ZhciB0PW4uYWN0aW9ucz9uLmFjdGlvbnMubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P3BbdF06cFt0Lm5hbWVdP2Uoe30scFt0Lm5hbWVdLHQpOnR9KTpPYmplY3Qua2V5cyhwKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHBbdF19KSxyPWUoe30sbSxuLmNsYXNzZXMpLGk9bltjXXx8XCJkaXZcIixvPWQoXCJkaXZcIik7by5jbGFzc05hbWU9ci5hY3Rpb25iYXIscyhuLmVsZW1lbnQsbyk7dmFyIHU9bi5lbGVtZW50LmNvbnRlbnQ9ZChcImRpdlwiKTtyZXR1cm4gdS5jb250ZW50RWRpdGFibGU9ITAsdS5jbGFzc05hbWU9ci5jb250ZW50LHUub25pbnB1dD1mdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldC5maXJzdENoaWxkO2UmJjM9PT1lLm5vZGVUeXBlP2YobCxcIjxcIitpK1wiPlwiKTpcIjxicj5cIj09PXUuaW5uZXJIVE1MJiYodS5pbm5lckhUTUw9XCJcIiksbi5vbkNoYW5nZSh1LmlubmVySFRNTCl9LHUub25rZXlkb3duPWZ1bmN0aW9uKHQpe3ZhciBlO1wiRW50ZXJcIj09PXQua2V5JiZcImJsb2NrcXVvdGVcIj09PShlPWwsZG9jdW1lbnQucXVlcnlDb21tYW5kVmFsdWUoZSkpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGYobCxcIjxcIitpK1wiPlwiKX0sMCl9LHMobi5lbGVtZW50LHUpLHQuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT1kKFwiYnV0dG9uXCIpO2lmKGUuY2xhc3NOYW1lPXIuYnV0dG9uLGUuaW5uZXJIVE1MPXQuaWNvbixlLnRpdGxlPXQudGl0bGUsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksZS5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIHQucmVzdWx0KCkmJnUuZm9jdXMoKX0sdC5zdGF0ZSl7dmFyIG49ZnVuY3Rpb24oKXtyZXR1cm4gZS5jbGFzc0xpc3RbdC5zdGF0ZSgpP1wiYWRkXCI6XCJyZW1vdmVcIl0oci5zZWxlY3RlZCl9O2EodSxcImtleXVwXCIsbiksYSh1LFwibW91c2V1cFwiLG4pLGEoZSxcImNsaWNrXCIsbil9cyhvLGUpfSksbi5zdHlsZVdpdGhDU1MmJmYoXCJzdHlsZVdpdGhDU1NcIiksZihjLGkpLG4uZWxlbWVudH0saT17ZXhlYzpmLGluaXQ6cn07dC5leGVjPWYsdC5pbml0PXIsdC5kZWZhdWx0PWksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcbiIsIi8vIEFwcC5qc1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5pdCwgZXhlYyB9IGZyb20gJ3BlbGwnO1xuXG5pbXBvcnQgJy4vcGVsbC5jc3MnXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHsgaHRtbDogbnVsbCB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5lZGl0b3IgPSBpbml0KHtcbiAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3InKSxcbiAgICAgIG9uQ2hhbmdlOiBodG1sID0+IHRoaXMuc2V0U3RhdGUoeyBodG1sIH0pLFxuICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgJ2JvbGQnLFxuICAgICAgICAgICAgICAgJ2l0YWxpYycsXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnc21hbGxDYXBzJyxcbiAgICAgICAgICAgICAgICAgIGljb246ICc8ZGl2IHN0eWxlPVwiZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1wiPkNhcHM8L2Rpdj4nLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTbWFsbCBDYXBzJyxcbiAgICAgICAgICAgICAgICAgIHJlc3VsdDogKCkgPT4gZXhlYygndW5kZXJsaW5lJylcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnc3VwZXJzY3JpcHQnLFxuICAgICAgICAgICAgICAgICAgaWNvbjogJzxkaXY+QTxzdXA+Yjwvc3VwPjwvZGl2PicsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1cGVyc2NyaXB0JyxcbiAgICAgICAgICAgICAgICAgIHJlc3VsdDogKCkgPT4gZXhlYygnc3VwZXJzY3JpcHQnKVxuICAgICAgICAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gdGhpcy5wcm9wcy5jaXRlQ29udGVudDtcbiAgICB2YXIgc3R5bGVOb2RlcyA9IHdyYXBwZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiAgICBmb3IgKHZhciBpPXN0eWxlTm9kZXMubGVuZ3RoLTE7IGk+LTE7IGktLSkge1xuICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHN0eWxlTm9kZXNbaV0pO1xuICAgIH1cbiAgICAvLyBOZWVkIGFsc28gdG8gc3RyaXAgb3V0IGV4dHJhbmVvdXMgaW5saW5lIGdhcmJhZ2UgYWRkZWQgYnkgV29yZC5cbiAgICB2YXIgY2l0ZUNvbnRlbnQgPSB3cmFwcGVyLmlubmVySFRNTDtcbiAgICBjaXRlQ29udGVudCA9IGNpdGVDb250ZW50LnJlcGxhY2UoLzxcXC8/ZGl2Pi9nLCBcIlwiKTtcbiAgICBjaXRlQ29udGVudCA9IGNpdGVDb250ZW50LnRyaW0oKTtcbiAgICB0aGlzLmVkaXRvci5jb250ZW50LmlubmVySFRNTCA9IGNpdGVDb250ZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8ZGl2IGlkPVwiZWRpdG9yXCIgY2xhc3NOYW1lPVwicGVsbFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vcGVsbC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==