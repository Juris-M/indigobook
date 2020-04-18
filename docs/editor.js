(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editor"],{

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
exports.push([module.i, ".pell {\n  border: 1px solid rgba(10, 10, 10, 0.1);\n  box-sizing: border-box; }\n\n.pell-content {\n  box-sizing: border-box;\n  height: 50px;\n  outline: 0;\n  overflow-y: auto;\n  padding: 10px;\n  background-color: lightgoldenrodyellow;\n}\n\n.pell-actionbar {\n  background-color: #4b0082;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.1); }\n\n.pell-button {\n  background-color: white;\n  border: none;\n  cursor: pointer;\n  height: 30px;\n  outline: 0;\n  width: 45px;\n  vertical-align: bottom;\n  margin: 1px 5px;\n  border-radius: 4px;\n}\n\n.pell-button-selected {\n  background-color: #F0F0F0; }\n\n.pell u {\n    text-decoration-color: transparent;\n    font-variant: small-caps;\n}\n\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZmxlY3QuY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVsbC9kaXN0L3BlbGwubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanN4Iiwid2VicGFjazovLy8uL3NyYy9wZWxsLmNzcz8zNmZkIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJodG1sIiwiZWRpdG9yIiwiaW5pdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsImFjdGlvbnMiLCJuYW1lIiwiaWNvbiIsInRpdGxlIiwicmVzdWx0IiwiZXhlYyIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJjaXRlQ29udGVudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNwRCxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGFBQWEsbUJBQU8s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O0FBQUEsU0FGRztBQUdqQlEsZUFBTyxFQUFFLENBQ0EsTUFEQSxFQUVBLFFBRkEsRUFHQTtBQUNHQyxjQUFJLEVBQUUsV0FEVDtBQUVHQyxjQUFJLEVBQUUsbURBRlQ7QUFHR0MsZUFBSyxFQUFFLFlBSFY7QUFJR0MsZ0JBQU0sRUFBRTtBQUFBLG1CQUFNQyxpREFBSSxDQUFDLFdBQUQsQ0FBVjtBQUFBO0FBSlgsU0FIQSxFQVNBO0FBQ0dKLGNBQUksRUFBRSxhQURUO0FBRUdDLGNBQUksRUFBRSwwQkFGVDtBQUdHQyxlQUFLLEVBQUUsYUFIVjtBQUlHQyxnQkFBTSxFQUFFO0FBQUEsbUJBQU1DLGlEQUFJLENBQUMsYUFBRCxDQUFWO0FBQUE7QUFKWCxTQVRBO0FBSFEsT0FBRCxDQUFsQjtBQW9CQSxXQUFLWixNQUFMLENBQVlhLE9BQVosQ0FBb0JDLFNBQXBCLEdBQWdDLEtBQUtqQixLQUFMLENBQVdrQixXQUEzQztBQUNEOzs7NkJBRVE7QUFDUCwwQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLFVBQUUsRUFBQyxRQUFSO0FBQWlCLGlCQUFTLEVBQUM7QUFBM0IsUUFERixDQURGO0FBS0Q7Ozs7RUFyQ2VDLCtDOztBQXdDSHBCLGtFQUFmLEU7Ozs7Ozs7Ozs7O0FDL0NBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsMkhBQStEOztBQUVqRzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJlZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIShhcmdzTGVuZ3RoIGluIGZhY3RvcmllcykpIHtcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZmFjdG9yaWVzW2FyZ3NMZW5ndGhdID0gRnVuY3Rpb24oJ0MsYScsICdyZXR1cm4gbmV3IEMoJyArIGxpc3Quam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gIHZhciBwYXJ0QXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKSB7XG4gICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoZm4ucHJvdG90eXBlKSkgYm91bmRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG4gIHJldHVybiBib3VuZEZ1bmN0aW9uO1xufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBuYXRpdmVDb25zdHJ1Y3QgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ2NvbnN0cnVjdCcpO1xuXG4vLyBgUmVmbGVjdC5jb25zdHJ1Y3RgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVmbGVjdC5jb25zdHJ1Y3Rcbi8vIE1TIEVkZ2Ugc3VwcG9ydHMgb25seSAyIGFyZ3VtZW50cyBhbmQgYXJndW1lbnRzTGlzdCBhcmd1bWVudCBpcyBvcHRpb25hbFxuLy8gRkYgTmlnaHRseSBzZXRzIHRoaXJkIGFyZ3VtZW50IGFzIGBuZXcudGFyZ2V0YCwgYnV0IGRvZXMgbm90IGNyZWF0ZSBgdGhpc2AgZnJvbSBpdFxudmFyIE5FV19UQVJHRVRfQlVHID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiAhKG5hdGl2ZUNvbnN0cnVjdChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIFtdLCBGKSBpbnN0YW5jZW9mIEYpO1xufSk7XG52YXIgQVJHU19CVUcgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBuYXRpdmVDb25zdHJ1Y3QoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbn0pO1xudmFyIEZPUkNFRCA9IE5FV19UQVJHRVRfQlVHIHx8IEFSR1NfQlVHO1xuXG4kKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VELCBzaGFtOiBGT1JDRUQgfSwge1xuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3MgLyogLCBuZXdUYXJnZXQgKi8pIHtcbiAgICBhRnVuY3Rpb24oVGFyZ2V0KTtcbiAgICBhbk9iamVjdChhcmdzKTtcbiAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcbiAgICBpZiAoQVJHU19CVUcgJiYgIU5FV19UQVJHRVRfQlVHKSByZXR1cm4gbmF0aXZlQ29uc3RydWN0KFRhcmdldCwgYXJncywgbmV3VGFyZ2V0KTtcbiAgICBpZiAoVGFyZ2V0ID09IG5ld1RhcmdldCkge1xuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBvcHRpbWl6YXRpb24gZm9yIDAtNCBhcmd1bWVudHNcbiAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IFRhcmdldCgpO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICBjYXNlIDQ6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgfVxuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBsb3Qgb2YgYXJndW1lbnRzIGNhc2VcbiAgICAgIHZhciAkYXJncyA9IFtudWxsXTtcbiAgICAgICRhcmdzLnB1c2guYXBwbHkoJGFyZ3MsIGFyZ3MpO1xuICAgICAgcmV0dXJuIG5ldyAoYmluZC5hcHBseShUYXJnZXQsICRhcmdzKSkoKTtcbiAgICB9XG4gICAgLy8gd2l0aCBhbHRlcmVkIG5ld1RhcmdldCwgbm90IHN1cHBvcnQgYnVpbHQtaW4gY29uc3RydWN0b3JzXG4gICAgdmFyIHByb3RvID0gbmV3VGFyZ2V0LnByb3RvdHlwZTtcbiAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3QucHJvdG90eXBlKTtcbiAgICB2YXIgcmVzdWx0ID0gRnVuY3Rpb24uYXBwbHkuY2FsbChUYXJnZXQsIGluc3RhbmNlLCBhcmdzKTtcbiAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xuICB9XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGVsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLnBlbGwtY29udGVudCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgb3V0bGluZTogMDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XFxufVxcblxcbi5wZWxsLWFjdGlvbmJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGIwMDgyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTAsIDEwLCAxMCwgMC4xKTsgfVxcblxcbi5wZWxsLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMzBweDtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogNDVweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW46IDFweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5wZWxsLWJ1dHRvbi1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwOyB9XFxuXFxuLnBlbGwgdSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG59XFxuXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP2UoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLGUpOmUodC5wZWxsPXt9KX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjt2YXIgZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1hcmd1bWVudHNbZV07Zm9yKHZhciByIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scikmJih0W3JdPW5bcl0pfXJldHVybiB0fSxjPVwiZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvclwiLGw9XCJmb3JtYXRCbG9ja1wiLGE9ZnVuY3Rpb24odCxlLG4pe3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoZSxuKX0scz1mdW5jdGlvbih0LGUpe3JldHVybiB0LmFwcGVuZENoaWxkKGUpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpfSxuPWZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZSh0KX0sZj1mdW5jdGlvbih0KXt2YXIgZT0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06bnVsbDtyZXR1cm4gZG9jdW1lbnQuZXhlY0NvbW1hbmQodCwhMSxlKX0scD17Ym9sZDp7aWNvbjpcIjxiPkI8L2I+XCIsdGl0bGU6XCJCb2xkXCIsc3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gbihcImJvbGRcIil9LHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKFwiYm9sZFwiKX19LGl0YWxpYzp7aWNvbjpcIjxpPkk8L2k+XCIsdGl0bGU6XCJJdGFsaWNcIixzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBuKFwiaXRhbGljXCIpfSxyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcIml0YWxpY1wiKX19LHVuZGVybGluZTp7aWNvbjpcIjx1PlU8L3U+XCIsdGl0bGU6XCJVbmRlcmxpbmVcIixzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBuKFwidW5kZXJsaW5lXCIpfSxyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcInVuZGVybGluZVwiKX19LHN0cmlrZXRocm91Z2g6e2ljb246XCI8c3RyaWtlPlM8L3N0cmlrZT5cIix0aXRsZTpcIlN0cmlrZS10aHJvdWdoXCIsc3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gbihcInN0cmlrZVRocm91Z2hcIil9LHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKFwic3RyaWtlVGhyb3VnaFwiKX19LGhlYWRpbmcxOntpY29uOlwiPGI+SDxzdWI+MTwvc3ViPjwvYj5cIix0aXRsZTpcIkhlYWRpbmcgMVwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKGwsXCI8aDE+XCIpfX0saGVhZGluZzI6e2ljb246XCI8Yj5IPHN1Yj4yPC9zdWI+PC9iPlwiLHRpdGxlOlwiSGVhZGluZyAyXCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYobCxcIjxoMj5cIil9fSxwYXJhZ3JhcGg6e2ljb246XCImIzE4MjtcIix0aXRsZTpcIlBhcmFncmFwaFwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKGwsXCI8cD5cIil9fSxxdW90ZTp7aWNvbjpcIiYjODIyMDsgJiM4MjIxO1wiLHRpdGxlOlwiUXVvdGVcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihsLFwiPGJsb2NrcXVvdGU+XCIpfX0sb2xpc3Q6e2ljb246XCImIzM1O1wiLHRpdGxlOlwiT3JkZXJlZCBMaXN0XCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJpbnNlcnRPcmRlcmVkTGlzdFwiKX19LHVsaXN0OntpY29uOlwiJiM4MjI2O1wiLHRpdGxlOlwiVW5vcmRlcmVkIExpc3RcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcImluc2VydFVub3JkZXJlZExpc3RcIil9fSxjb2RlOntpY29uOlwiJmx0Oy8mZ3Q7XCIsdGl0bGU6XCJDb2RlXCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYobCxcIjxwcmU+XCIpfX0sbGluZTp7aWNvbjpcIiYjODIxMztcIix0aXRsZTpcIkhvcml6b250YWwgTGluZVwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKFwiaW5zZXJ0SG9yaXpvbnRhbFJ1bGVcIil9fSxsaW5rOntpY29uOlwiJiMxMjgyNzk7XCIsdGl0bGU6XCJMaW5rXCIscmVzdWx0OmZ1bmN0aW9uKCl7dmFyIHQ9d2luZG93LnByb21wdChcIkVudGVyIHRoZSBsaW5rIFVSTFwiKTt0JiZmKFwiY3JlYXRlTGlua1wiLHQpfX0saW1hZ2U6e2ljb246XCImIzEyODI0NztcIix0aXRsZTpcIkltYWdlXCIscmVzdWx0OmZ1bmN0aW9uKCl7dmFyIHQ9d2luZG93LnByb21wdChcIkVudGVyIHRoZSBpbWFnZSBVUkxcIik7dCYmZihcImluc2VydEltYWdlXCIsdCl9fX0sbT17YWN0aW9uYmFyOlwicGVsbC1hY3Rpb25iYXJcIixidXR0b246XCJwZWxsLWJ1dHRvblwiLGNvbnRlbnQ6XCJwZWxsLWNvbnRlbnRcIixzZWxlY3RlZDpcInBlbGwtYnV0dG9uLXNlbGVjdGVkXCJ9LHI9ZnVuY3Rpb24obil7dmFyIHQ9bi5hY3Rpb25zP24uYWN0aW9ucy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/cFt0XTpwW3QubmFtZV0/ZSh7fSxwW3QubmFtZV0sdCk6dH0pOk9iamVjdC5rZXlzKHApLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gcFt0XX0pLHI9ZSh7fSxtLG4uY2xhc3NlcyksaT1uW2NdfHxcImRpdlwiLG89ZChcImRpdlwiKTtvLmNsYXNzTmFtZT1yLmFjdGlvbmJhcixzKG4uZWxlbWVudCxvKTt2YXIgdT1uLmVsZW1lbnQuY29udGVudD1kKFwiZGl2XCIpO3JldHVybiB1LmNvbnRlbnRFZGl0YWJsZT0hMCx1LmNsYXNzTmFtZT1yLmNvbnRlbnQsdS5vbmlucHV0PWZ1bmN0aW9uKHQpe3ZhciBlPXQudGFyZ2V0LmZpcnN0Q2hpbGQ7ZSYmMz09PWUubm9kZVR5cGU/ZihsLFwiPFwiK2krXCI+XCIpOlwiPGJyPlwiPT09dS5pbm5lckhUTUwmJih1LmlubmVySFRNTD1cIlwiKSxuLm9uQ2hhbmdlKHUuaW5uZXJIVE1MKX0sdS5vbmtleWRvd249ZnVuY3Rpb24odCl7dmFyIGU7XCJFbnRlclwiPT09dC5rZXkmJlwiYmxvY2txdW90ZVwiPT09KGU9bCxkb2N1bWVudC5xdWVyeUNvbW1hbmRWYWx1ZShlKSkmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gZihsLFwiPFwiK2krXCI+XCIpfSwwKX0scyhuLmVsZW1lbnQsdSksdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPWQoXCJidXR0b25cIik7aWYoZS5jbGFzc05hbWU9ci5idXR0b24sZS5pbm5lckhUTUw9dC5pY29uLGUudGl0bGU9dC50aXRsZSxlLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxlLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gdC5yZXN1bHQoKSYmdS5mb2N1cygpfSx0LnN0YXRlKXt2YXIgbj1mdW5jdGlvbigpe3JldHVybiBlLmNsYXNzTGlzdFt0LnN0YXRlKCk/XCJhZGRcIjpcInJlbW92ZVwiXShyLnNlbGVjdGVkKX07YSh1LFwia2V5dXBcIixuKSxhKHUsXCJtb3VzZXVwXCIsbiksYShlLFwiY2xpY2tcIixuKX1zKG8sZSl9KSxuLnN0eWxlV2l0aENTUyYmZihcInN0eWxlV2l0aENTU1wiKSxmKGMsaSksbi5lbGVtZW50fSxpPXtleGVjOmYsaW5pdDpyfTt0LmV4ZWM9Zix0LmluaXQ9cix0LmRlZmF1bHQ9aSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pO1xuIiwiLy8gQXBwLmpzXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbml0LCBleGVjIH0gZnJvbSAncGVsbCc7XG5cbmltcG9ydCAnLi9wZWxsLmNzcydcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBodG1sOiBudWxsIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLmVkaXRvciA9IGluaXQoe1xuICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvcicpLFxuICAgICAgb25DaGFuZ2U6IGh0bWwgPT4gdGhpcy5zZXRTdGF0ZSh7IGh0bWwgfSksXG4gICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAnYm9sZCcsXG4gICAgICAgICAgICAgICAnaXRhbGljJyxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdzbWFsbENhcHMnLFxuICAgICAgICAgICAgICAgICAgaWNvbjogJzxkaXYgc3R5bGU9XCJmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XCI+Q2FwczwvZGl2PicsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ1NtYWxsIENhcHMnLFxuICAgICAgICAgICAgICAgICAgcmVzdWx0OiAoKSA9PiBleGVjKCd1bmRlcmxpbmUnKVxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdXBlcnNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICBpY29uOiAnPGRpdj5BPHN1cD5iPC9zdXA+PC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VwZXJzY3JpcHQnLFxuICAgICAgICAgICAgICAgICAgcmVzdWx0OiAoKSA9PiBleGVjKCdzdXBlcnNjcmlwdCcpXG4gICAgICAgICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgICB0aGlzLmVkaXRvci5jb250ZW50LmlubmVySFRNTCA9IHRoaXMucHJvcHMuY2l0ZUNvbnRlbnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJlZGl0b3JcIiBjbGFzc05hbWU9XCJwZWxsXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9wZWxsLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9