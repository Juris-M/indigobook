(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
exports.push([module.i, ".pell {\n  border: 1px solid rgba(10, 10, 10, 0.1);\n  box-sizing: border-box; }\n\n.pell-content {\n  box-sizing: border-box;\n  height: 50px;\n  outline: 0;\n  overflow-y: auto;\n  padding: 10px;\n  background-color: lightgoldenrodyellow;\n}\n\n.pell-actionbar {\n  background-color: #4b0082;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.1); }\n\n.pell-button {\n  background-color: white;\n  border: none;\n  cursor: pointer;\n  height: 30px;\n  outline: 0;\n  width: 45px;\n  vertical-align: bottom;\n  margin: 1px 5px;\n  border-radius: 4px;\n}\n\n.pell-button-selected {\n  background-color: #F0F0F0; }\n\n.pell u {\n    text-decoration-color: transparent;\n    font-variant: small-caps;\n}\n\n.pell textarea {\n    background: lightgoldenrodyellow;\n}", ""]);
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
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pell */ "./node_modules/pell/dist/pell.min.js");
/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pell__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pell_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pell.css */ "./src/pell.css");
/* harmony import */ var _pell_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pell_css__WEBPACK_IMPORTED_MODULE_5__);




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

      this.editor = Object(pell__WEBPACK_IMPORTED_MODULE_4__["init"])({
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
            return Object(pell__WEBPACK_IMPORTED_MODULE_4__["exec"])('underline');
          }
        }, {
          name: 'superscript',
          icon: '<div>A<sup>b</sup></div>',
          title: 'Superscript',
          result: function result() {
            return Object(pell__WEBPACK_IMPORTED_MODULE_4__["exec"])('superscript');
          }
        }]
      });
      this.editor.content.innerHTML = this.props.citeContent;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "App"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        id: "editor",
        className: "pell"
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZmxlY3QuY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVsbC9kaXN0L3BlbGwubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanN4Iiwid2VicGFjazovLy8uL3NyYy9wZWxsLmNzcz8zNmZkIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJodG1sIiwiZWRpdG9yIiwiaW5pdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsImFjdGlvbnMiLCJuYW1lIiwiaWNvbiIsInRpdGxlIiwicmVzdWx0IiwiZXhlYyIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJjaXRlQ29udGVudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNwRCxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGFBQWEsbUJBQU8s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QUFFUDtBQUFGLFdBQWQsQ0FBSjtBQUFBLFNBRkc7QUFHakJRLGVBQU8sRUFBRSxDQUNBLE1BREEsRUFFQSxRQUZBLEVBR0E7QUFDR0MsY0FBSSxFQUFFLFdBRFQ7QUFFR0MsY0FBSSxFQUFFLG1EQUZUO0FBR0dDLGVBQUssRUFBRSxZQUhWO0FBSUdDLGdCQUFNLEVBQUU7QUFBQSxtQkFBTUMsaURBQUksQ0FBQyxXQUFELENBQVY7QUFBQTtBQUpYLFNBSEEsRUFTQTtBQUNHSixjQUFJLEVBQUUsYUFEVDtBQUVHQyxjQUFJLEVBQUUsMEJBRlQ7QUFHR0MsZUFBSyxFQUFFLGFBSFY7QUFJR0MsZ0JBQU0sRUFBRTtBQUFBLG1CQUFNQyxpREFBSSxDQUFDLGFBQUQsQ0FBVjtBQUFBO0FBSlgsU0FUQTtBQUhRLE9BQUQsQ0FBbEI7QUFvQkEsV0FBS1osTUFBTCxDQUFZYSxPQUFaLENBQW9CQyxTQUFwQixHQUFnQyxLQUFLakIsS0FBTCxDQUFXa0IsV0FBM0M7QUFDRDs7OzZCQUVRO0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxVQUFFLEVBQUMsUUFBUjtBQUFpQixpQkFBUyxFQUFDO0FBQTNCLFFBREYsQ0FERjtBQUtEOzs7O0VBckNlQywrQzs7QUF3Q0hwQixrRUFBZixFOzs7Ozs7Ozs7OztBQy9DQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDJIQUErRDs7QUFFakc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBmYWN0b3JpZXMgPSB7fTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uIChDLCBhcmdzTGVuZ3RoLCBhcmdzKSB7XG4gIGlmICghKGFyZ3NMZW5ndGggaW4gZmFjdG9yaWVzKSkge1xuICAgIGZvciAodmFyIGxpc3QgPSBbXSwgaSA9IDA7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIGxpc3RbaV0gPSAnYVsnICsgaSArICddJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBmYWN0b3JpZXNbYXJnc0xlbmd0aF0gPSBGdW5jdGlvbignQyxhJywgJ3JldHVybiBuZXcgQygnICsgbGlzdC5qb2luKCcsJykgKyAnKScpO1xuICB9IHJldHVybiBmYWN0b3JpZXNbYXJnc0xlbmd0aF0oQywgYXJncyk7XG59O1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyogLCAuLi5hcmdzICovKSB7XG4gIHZhciBmbiA9IGFGdW5jdGlvbih0aGlzKTtcbiAgdmFyIHBhcnRBcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmRGdW5jdGlvbiA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogZm4uYXBwbHkodGhhdCwgYXJncyk7XG4gIH07XG4gIGlmIChpc09iamVjdChmbi5wcm90b3R5cGUpKSBib3VuZEZ1bmN0aW9uLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kRnVuY3Rpb247XG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIG5hdGl2ZUNvbnN0cnVjdCA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnY29uc3RydWN0Jyk7XG5cbi8vIGBSZWZsZWN0LmNvbnN0cnVjdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWZsZWN0LmNvbnN0cnVjdFxuLy8gTVMgRWRnZSBzdXBwb3J0cyBvbmx5IDIgYXJndW1lbnRzIGFuZCBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4vLyBGRiBOaWdodGx5IHNldHMgdGhpcmQgYXJndW1lbnQgYXMgYG5ldy50YXJnZXRgLCBidXQgZG9lcyBub3QgY3JlYXRlIGB0aGlzYCBmcm9tIGl0XG52YXIgTkVXX1RBUkdFVF9CVUcgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuICEobmF0aXZlQ29uc3RydWN0KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgW10sIEYpIGluc3RhbmNlb2YgRik7XG59KTtcbnZhciBBUkdTX0JVRyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIG5hdGl2ZUNvbnN0cnVjdChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG52YXIgRk9SQ0VEID0gTkVXX1RBUkdFVF9CVUcgfHwgQVJHU19CVUc7XG5cbiQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQsIHNoYW06IEZPUkNFRCB9LCB7XG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gY29uc3RydWN0KFRhcmdldCwgYXJncyAvKiAsIG5ld1RhcmdldCAqLykge1xuICAgIGFGdW5jdGlvbihUYXJnZXQpO1xuICAgIGFuT2JqZWN0KGFyZ3MpO1xuICAgIHZhciBuZXdUYXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IFRhcmdldCA6IGFGdW5jdGlvbihhcmd1bWVudHNbMl0pO1xuICAgIGlmIChBUkdTX0JVRyAmJiAhTkVXX1RBUkdFVF9CVUcpIHJldHVybiBuYXRpdmVDb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpO1xuICAgIGlmIChUYXJnZXQgPT0gbmV3VGFyZ2V0KSB7XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIG9wdGltaXphdGlvbiBmb3IgMC00IGFyZ3VtZW50c1xuICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgVGFyZ2V0KCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICB9XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKSgpO1xuICAgIH1cbiAgICAvLyB3aXRoIGFsdGVyZWQgbmV3VGFyZ2V0LCBub3Qgc3VwcG9ydCBidWlsdC1pbiBjb25zdHJ1Y3RvcnNcbiAgICB2YXIgcHJvdG8gPSBuZXdUYXJnZXQucHJvdG90eXBlO1xuICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpO1xuICAgIHZhciByZXN1bHQgPSBGdW5jdGlvbi5hcHBseS5jYWxsKFRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XG4gIH1cbn0pO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAsIDEwLCAxMCwgMC4xKTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4ucGVsbC1jb250ZW50IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBvdXRsaW5lOiAwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcXG59XFxuXFxuLnBlbGwtYWN0aW9uYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjAwODI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMCwgMTAsIDEwLCAwLjEpOyB9XFxuXFxuLnBlbGwtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIG1hcmdpbjogMXB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnBlbGwtYnV0dG9uLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7IH1cXG5cXG4ucGVsbCB1IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbn1cXG5cXG4ucGVsbCB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/ZShleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sZSk6ZSh0LnBlbGw9e30pfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO3ZhciBlPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPWFyZ3VtZW50c1tlXTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKHRbcl09bltyXSl9cmV0dXJuIHR9LGM9XCJkZWZhdWx0UGFyYWdyYXBoU2VwYXJhdG9yXCIsbD1cImZvcm1hdEJsb2NrXCIsYT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihlLG4pfSxzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuYXBwZW5kQ2hpbGQoZSl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCl9LG49ZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKHQpfSxmPWZ1bmN0aW9uKHQpe3ZhciBlPTE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsO3JldHVybiBkb2N1bWVudC5leGVjQ29tbWFuZCh0LCExLGUpfSxwPXtib2xkOntpY29uOlwiPGI+QjwvYj5cIix0aXRsZTpcIkJvbGRcIixzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBuKFwiYm9sZFwiKX0scmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJib2xkXCIpfX0saXRhbGljOntpY29uOlwiPGk+STwvaT5cIix0aXRsZTpcIkl0YWxpY1wiLHN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG4oXCJpdGFsaWNcIil9LHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKFwiaXRhbGljXCIpfX0sdW5kZXJsaW5lOntpY29uOlwiPHU+VTwvdT5cIix0aXRsZTpcIlVuZGVybGluZVwiLHN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG4oXCJ1bmRlcmxpbmVcIil9LHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKFwidW5kZXJsaW5lXCIpfX0sc3RyaWtldGhyb3VnaDp7aWNvbjpcIjxzdHJpa2U+Uzwvc3RyaWtlPlwiLHRpdGxlOlwiU3RyaWtlLXRocm91Z2hcIixzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBuKFwic3RyaWtlVGhyb3VnaFwiKX0scmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJzdHJpa2VUaHJvdWdoXCIpfX0saGVhZGluZzE6e2ljb246XCI8Yj5IPHN1Yj4xPC9zdWI+PC9iPlwiLHRpdGxlOlwiSGVhZGluZyAxXCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYobCxcIjxoMT5cIil9fSxoZWFkaW5nMjp7aWNvbjpcIjxiPkg8c3ViPjI8L3N1Yj48L2I+XCIsdGl0bGU6XCJIZWFkaW5nIDJcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihsLFwiPGgyPlwiKX19LHBhcmFncmFwaDp7aWNvbjpcIiYjMTgyO1wiLHRpdGxlOlwiUGFyYWdyYXBoXCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYobCxcIjxwPlwiKX19LHF1b3RlOntpY29uOlwiJiM4MjIwOyAmIzgyMjE7XCIsdGl0bGU6XCJRdW90ZVwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKGwsXCI8YmxvY2txdW90ZT5cIil9fSxvbGlzdDp7aWNvbjpcIiYjMzU7XCIsdGl0bGU6XCJPcmRlcmVkIExpc3RcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcImluc2VydE9yZGVyZWRMaXN0XCIpfX0sdWxpc3Q6e2ljb246XCImIzgyMjY7XCIsdGl0bGU6XCJVbm9yZGVyZWQgTGlzdFwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKFwiaW5zZXJ0VW5vcmRlcmVkTGlzdFwiKX19LGNvZGU6e2ljb246XCImbHQ7LyZndDtcIix0aXRsZTpcIkNvZGVcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihsLFwiPHByZT5cIil9fSxsaW5lOntpY29uOlwiJiM4MjEzO1wiLHRpdGxlOlwiSG9yaXpvbnRhbCBMaW5lXCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJpbnNlcnRIb3Jpem9udGFsUnVsZVwiKX19LGxpbms6e2ljb246XCImIzEyODI3OTtcIix0aXRsZTpcIkxpbmtcIixyZXN1bHQ6ZnVuY3Rpb24oKXt2YXIgdD13aW5kb3cucHJvbXB0KFwiRW50ZXIgdGhlIGxpbmsgVVJMXCIpO3QmJmYoXCJjcmVhdGVMaW5rXCIsdCl9fSxpbWFnZTp7aWNvbjpcIiYjMTI4MjQ3O1wiLHRpdGxlOlwiSW1hZ2VcIixyZXN1bHQ6ZnVuY3Rpb24oKXt2YXIgdD13aW5kb3cucHJvbXB0KFwiRW50ZXIgdGhlIGltYWdlIFVSTFwiKTt0JiZmKFwiaW5zZXJ0SW1hZ2VcIix0KX19fSxtPXthY3Rpb25iYXI6XCJwZWxsLWFjdGlvbmJhclwiLGJ1dHRvbjpcInBlbGwtYnV0dG9uXCIsY29udGVudDpcInBlbGwtY29udGVudFwiLHNlbGVjdGVkOlwicGVsbC1idXR0b24tc2VsZWN0ZWRcIn0scj1mdW5jdGlvbihuKXt2YXIgdD1uLmFjdGlvbnM/bi5hY3Rpb25zLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9wW3RdOnBbdC5uYW1lXT9lKHt9LHBbdC5uYW1lXSx0KTp0fSk6T2JqZWN0LmtleXMocCkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBwW3RdfSkscj1lKHt9LG0sbi5jbGFzc2VzKSxpPW5bY118fFwiZGl2XCIsbz1kKFwiZGl2XCIpO28uY2xhc3NOYW1lPXIuYWN0aW9uYmFyLHMobi5lbGVtZW50LG8pO3ZhciB1PW4uZWxlbWVudC5jb250ZW50PWQoXCJkaXZcIik7cmV0dXJuIHUuY29udGVudEVkaXRhYmxlPSEwLHUuY2xhc3NOYW1lPXIuY29udGVudCx1Lm9uaW5wdXQ9ZnVuY3Rpb24odCl7dmFyIGU9dC50YXJnZXQuZmlyc3RDaGlsZDtlJiYzPT09ZS5ub2RlVHlwZT9mKGwsXCI8XCIraStcIj5cIik6XCI8YnI+XCI9PT11LmlubmVySFRNTCYmKHUuaW5uZXJIVE1MPVwiXCIpLG4ub25DaGFuZ2UodS5pbm5lckhUTUwpfSx1Lm9ua2V5ZG93bj1mdW5jdGlvbih0KXt2YXIgZTtcIkVudGVyXCI9PT10LmtleSYmXCJibG9ja3F1b3RlXCI9PT0oZT1sLGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKGUpKSYmc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBmKGwsXCI8XCIraStcIj5cIil9LDApfSxzKG4uZWxlbWVudCx1KSx0LmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9ZChcImJ1dHRvblwiKTtpZihlLmNsYXNzTmFtZT1yLmJ1dHRvbixlLmlubmVySFRNTD10Lmljb24sZS50aXRsZT10LnRpdGxlLGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGUub25jbGljaz1mdW5jdGlvbigpe3JldHVybiB0LnJlc3VsdCgpJiZ1LmZvY3VzKCl9LHQuc3RhdGUpe3ZhciBuPWZ1bmN0aW9uKCl7cmV0dXJuIGUuY2xhc3NMaXN0W3Quc3RhdGUoKT9cImFkZFwiOlwicmVtb3ZlXCJdKHIuc2VsZWN0ZWQpfTthKHUsXCJrZXl1cFwiLG4pLGEodSxcIm1vdXNldXBcIixuKSxhKGUsXCJjbGlja1wiLG4pfXMobyxlKX0pLG4uc3R5bGVXaXRoQ1NTJiZmKFwic3R5bGVXaXRoQ1NTXCIpLGYoYyxpKSxuLmVsZW1lbnR9LGk9e2V4ZWM6Zixpbml0OnJ9O3QuZXhlYz1mLHQuaW5pdD1yLHQuZGVmYXVsdD1pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSk7XG4iLCIvLyBBcHAuanNcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluaXQsIGV4ZWMgfSBmcm9tICdwZWxsJztcblxuaW1wb3J0ICcuL3BlbGwuY3NzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IGh0bWw6IG51bGwgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuZWRpdG9yID0gaW5pdCh7XG4gICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yJyksXG4gICAgICBvbkNoYW5nZTogaHRtbCA9PiB0aGlzLnNldFN0YXRlKHsgaHRtbCB9KSxcbiAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICdib2xkJyxcbiAgICAgICAgICAgICAgICdpdGFsaWMnLFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3NtYWxsQ2FwcycsXG4gICAgICAgICAgICAgICAgICBpY29uOiAnPGRpdiBzdHlsZT1cImZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcIj5DYXBzPC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU21hbGwgQ2FwcycsXG4gICAgICAgICAgICAgICAgICByZXN1bHQ6ICgpID0+IGV4ZWMoJ3VuZGVybGluZScpXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1cGVyc2NyaXB0JyxcbiAgICAgICAgICAgICAgICAgIGljb246ICc8ZGl2PkE8c3VwPmI8L3N1cD48L2Rpdj4nLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdXBlcnNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICByZXN1bHQ6ICgpID0+IGV4ZWMoJ3N1cGVyc2NyaXB0JylcbiAgICAgICAgICAgICAgIH1cbiAgICAgIF1cbiAgICB9KVxuICAgIHRoaXMuZWRpdG9yLmNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5wcm9wcy5jaXRlQ29udGVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPGRpdiBpZD1cImVkaXRvclwiIGNsYXNzTmFtZT1cInBlbGxcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL3BlbGwuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=