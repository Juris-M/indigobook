(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fieldlist"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/fieldlist.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??postcss!./src/fieldlist.css ***!
  \**********************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/react-spinner.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??postcss!./src/react-spinner.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-spinner {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  top: 50%;\n  left: 50%;\n}\n\n.react-spinner_bar {\n  -webkit-animation: react-spinner_spin 1.2s linear infinite;\n  animation: react-spinner_spin 1.2s linear infinite;\n  border-radius: 5px;\n  background-color: black;\n  position: absolute;\n  width: 20%;\n  height: 7.8%;\n  top: 46.1%;\n  left: 50%;\n}\n\n@keyframes react-spinner_spin {\n 0% { opacity: 1; }\n 100% { opacity: 0.15; }\n}\n\n@-webkit-keyframes react-spinner_spin {\n 0% { opacity: 1; }\n 100% { opacity: 0.15; }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/fieldlist.css":
/*!***************************!*\
  !*** ./src/fieldlist.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-1!../node_modules/postcss-loader/src??postcss!./fieldlist.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/fieldlist.css");

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
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fieldlist_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fieldlist.css */ "./src/fieldlist.css");
/* harmony import */ var _fieldlist_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fieldlist_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spinner */ "./node_modules/react-spinner/build/index.js");
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_spinner_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./react-spinner.css */ "./src/react-spinner.css");
/* harmony import */ var _react_spinner_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_spinner_css__WEBPACK_IMPORTED_MODULE_7__);









const axiosGetAsync = async function (url) {
  var res = await axios__WEBPACK_IMPORTED_MODULE_4___default()(url);
  return res;
};

/* harmony default export */ __webpack_exports__["default"] = (FieldList = function (props) {
  const [listItems, setListItems] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const getItems = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (data) {
    return setListItems(function (listItems) {
      return listItems = data;
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var func = async function () {
      const key = props.id.slice(-8);
      var response = await axiosGetAsync(props.urlStub + 'itemdata/' + key + '.json');
      getItems(response.data);
    };

    func();
  }, []);

  if (listItems.length) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table", {
      className: "table-display"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", null, listItems.map(function (info) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", {
        key: info.label
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
        className: "label"
      }, info.label), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
        className: "value"
      }, info.value));
    })));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_spinner__WEBPACK_IMPORTED_MODULE_6___default.a, null);
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
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-1!../node_modules/postcss-loader/src??postcss!./react-spinner.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/react-spinner.css");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Qtc3Bpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5jc3M/MDE4MyIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Qtc3Bpbm5lci5jc3M/ZDA1MiJdLCJuYW1lcyI6WyJheGlvc0dldEFzeW5jIiwidXJsIiwicmVzIiwiYXhpb3MiLCJGaWVsZExpc3QiLCJwcm9wcyIsImxpc3RJdGVtcyIsInNldExpc3RJdGVtcyIsInVzZVN0YXRlIiwiZ2V0SXRlbXMiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ1c2VFZmZlY3QiLCJmdW5jIiwia2V5IiwiaWQiLCJzbGljZSIsInJlc3BvbnNlIiwidXJsU3R1YiIsImxlbmd0aCIsIm1hcCIsImluZm8iLCJsYWJlbCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDBCQUEwQix3QkFBd0Isd0JBQXdCLEdBQUcsaUNBQWlDLHNCQUFzQix1QkFBdUIsc0JBQXNCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLG1CQUFtQix5QkFBeUIsR0FBRztBQUNoVDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLG1CQUFtQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixhQUFhLGNBQWMsR0FBRyx3QkFBd0IsK0RBQStELHVEQUF1RCx1QkFBdUIsNEJBQTRCLHVCQUF1QixlQUFlLGlCQUFpQixlQUFlLGNBQWMsR0FBRyxtQ0FBbUMsT0FBTyxZQUFZLEVBQUUsU0FBUyxlQUFlLEVBQUUsR0FBRywyQ0FBMkMsT0FBTyxZQUFZLEVBQUUsU0FBUyxlQUFlLEVBQUUsR0FBRztBQUMxa0I7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw2TkFBeUg7O0FBRTNKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxnQkFBT0MsR0FBUCxFQUFlO0FBQy9CLE1BQUlDLEdBQUcsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDRixHQUFELENBQXJCO0FBQ0EsU0FBT0MsR0FBUDtBQUNMLENBSEQ7O0FBS2VFLHdFQUFTLEdBQUcsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQU0sQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLElBQTRCQyxzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsSUFBRDtBQUFBLFdBQVVKLFlBQVksQ0FBQyxVQUFDRCxTQUFEO0FBQUEsYUFBZUEsU0FBUyxHQUFHSyxJQUEzQjtBQUFBLEtBQUQsQ0FBdEI7QUFBQSxHQUFELEVBQTBELEVBQTFELENBQTVCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLElBQUksR0FBRyxrQkFBWTtBQUNyQixZQUFNQyxHQUFHLEdBQUdULEtBQUssQ0FBQ1UsRUFBTixDQUFTQyxLQUFULENBQWUsQ0FBQyxDQUFoQixDQUFaO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLE1BQU1qQixhQUFhLENBQUNLLEtBQUssQ0FBQ2EsT0FBTixHQUFnQixXQUFoQixHQUE4QkosR0FBOUIsR0FBb0MsT0FBckMsQ0FBbEM7QUFDQUwsY0FBUSxDQUFDUSxRQUFRLENBQUNOLElBQVYsQ0FBUjtBQUNELEtBSkQ7O0FBS0FFLFFBQUk7QUFDUCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVFBLE1BQUlQLFNBQVMsQ0FBQ2EsTUFBZCxFQUFzQjtBQUNsQixXQUFPO0FBQU8sZUFBUyxFQUFDO0FBQWpCLE9BQ0UsMEVBRURiLFNBQVMsQ0FBQ2MsR0FBVixDQUFjLFVBQUFDLElBQUksRUFBSTtBQUNsQixhQUNJO0FBQUksV0FBRyxFQUFFQSxJQUFJLENBQUNDO0FBQWQsU0FDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUF1QkQsSUFBSSxDQUFDQyxLQUE1QixDQURKLEVBRUk7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBdUJELElBQUksQ0FBQ0UsS0FBNUIsQ0FGSixDQURKO0FBTUgsS0FQRCxDQUZDLENBREYsQ0FBUDtBQWNILEdBZkQsTUFlTztBQUNILFdBQU8sMkRBQUMsb0RBQUQsT0FBUDtBQUNIO0FBRUosQ0E5QkQsRTs7Ozs7Ozs7Ozs7QUNaQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLHFPQUE2SDs7QUFFL0o7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiZmllbGRsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YWJsZS1kaXNwbGF5IC5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhYmxlLWRpc3BsYXkgLmxhYmVsOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIjogXFxcIjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhYmxlLWRpc3BsYXkgLnZhbHVlIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uc3Bpbi1jZW50cmFsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZWFjdC1zcGlubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbi5yZWFjdC1zcGlubmVyX2JhciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcmVhY3Qtc3Bpbm5lcl9zcGluIDEuMnMgbGluZWFyIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiByZWFjdC1zcGlubmVyX3NwaW4gMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDcuOCU7XFxuICB0b3A6IDQ2LjElO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJlYWN0LXNwaW5uZXJfc3BpbiB7XFxuIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAxMDAlIHsgb3BhY2l0eTogMC4xNTsgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmVhY3Qtc3Bpbm5lcl9zcGluIHtcXG4gMCUgeyBvcGFjaXR5OiAxOyB9XFxuIDEwMCUgeyBvcGFjaXR5OiAwLjE1OyB9XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMSEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4vZmllbGRsaXN0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICcuL2ZpZWxkbGlzdC5jc3MnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJcIjtcblxuaW1wb3J0ICcuL3JlYWN0LXNwaW5uZXIuY3NzJztcblxuY29uc3QgYXhpb3NHZXRBc3luYyA9IGFzeW5jICh1cmwpID0+IHtcbiAgICAgIHZhciByZXMgPSBhd2FpdCBheGlvcyh1cmwpO1xuICAgICAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRMaXN0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2xpc3RJdGVtcywgc2V0TGlzdEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBnZXRJdGVtcyA9IHVzZUNhbGxiYWNrKChkYXRhKSA9PiBzZXRMaXN0SXRlbXMoKGxpc3RJdGVtcykgPT4gbGlzdEl0ZW1zID0gZGF0YSksIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgZnVuYyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBwcm9wcy5pZC5zbGljZSgtOCk7XG4gICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3NHZXRBc3luYyhwcm9wcy51cmxTdHViICsgJ2l0ZW1kYXRhLycgKyBrZXkgKyAnLmpzb24nKTtcbiAgICAgICAgICBnZXRJdGVtcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW10pO1xuICAgIGlmIChsaXN0SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1zLm1hcChpbmZvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZm8ubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsYWJlbFwiPntpbmZvLmxhYmVsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInZhbHVlXCI+e2luZm8udmFsdWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPFNwaW5uZXIgLz5cbiAgICB9XG4gICAgXG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMSEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4vcmVhY3Qtc3Bpbm5lci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==