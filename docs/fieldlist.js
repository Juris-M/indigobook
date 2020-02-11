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

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Qtc3Bpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkbGlzdC5jc3M/MDE4MyIsIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRsaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Qtc3Bpbm5lci5jc3M/ZDA1MiJdLCJuYW1lcyI6WyJheGlvc0dldEFzeW5jIiwidXJsIiwicmVzIiwiYXhpb3MiLCJwcm9wcyIsImxpc3RJdGVtcyIsInNldExpc3RJdGVtcyIsInVzZVN0YXRlIiwiZ2V0SXRlbXMiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ1c2VFZmZlY3QiLCJmdW5jIiwia2V5IiwiaWQiLCJzbGljZSIsInJlc3BvbnNlIiwidXJsU3R1YiIsImxlbmd0aCIsIm1hcCIsImluZm8iLCJsYWJlbCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDBCQUEwQix3QkFBd0Isd0JBQXdCLEdBQUcsaUNBQWlDLHNCQUFzQix1QkFBdUIsc0JBQXNCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLG1CQUFtQix5QkFBeUIsR0FBRztBQUNoVDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLG1CQUFtQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixhQUFhLGNBQWMsR0FBRyx3QkFBd0IsK0RBQStELHVEQUF1RCx1QkFBdUIsNEJBQTRCLHVCQUF1QixlQUFlLGlCQUFpQixlQUFlLGNBQWMsR0FBRyxtQ0FBbUMsT0FBTyxZQUFZLEVBQUUsU0FBUyxlQUFlLEVBQUUsR0FBRywyQ0FBMkMsT0FBTyxZQUFZLEVBQUUsU0FBUyxlQUFlLEVBQUUsR0FBRztBQUMxa0I7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw2TkFBeUg7O0FBRTNKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxnQkFBT0MsR0FBUCxFQUFlO0FBQy9CLE1BQUlDLEdBQUcsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDRixHQUFELENBQXJCO0FBQ0EsU0FBT0MsR0FBUDtBQUNMLENBSEQ7O0FBS2UseUVBQUNFLEtBQUQsRUFBVztBQUN0QixRQUFNLENBQUNDLFNBQUQsRUFBWUMsWUFBWixJQUE0QkMsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLElBQUQ7QUFBQSxXQUFVSixZQUFZLENBQUMsVUFBQ0QsU0FBRDtBQUFBLGFBQWVBLFNBQVMsR0FBR0ssSUFBM0I7QUFBQSxLQUFELENBQXRCO0FBQUEsR0FBRCxFQUEwRCxFQUExRCxDQUE1QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxJQUFJLEdBQUcsa0JBQVk7QUFDckIsWUFBTUMsR0FBRyxHQUFHVCxLQUFLLENBQUNVLEVBQU4sQ0FBU0MsS0FBVCxDQUFlLENBQUMsQ0FBaEIsQ0FBWjtBQUNBLFVBQUlDLFFBQVEsR0FBRyxNQUFNaEIsYUFBYSxDQUFDSSxLQUFLLENBQUNhLE9BQU4sR0FBZ0IsV0FBaEIsR0FBOEJKLEdBQTlCLEdBQW9DLE9BQXJDLENBQWxDO0FBQ0FMLGNBQVEsQ0FBQ1EsUUFBUSxDQUFDTixJQUFWLENBQVI7QUFDRCxLQUpEOztBQUtBRSxRQUFJO0FBQ1AsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFRQSxNQUFJUCxTQUFTLENBQUNhLE1BQWQsRUFBc0I7QUFDbEIsV0FBTztBQUFPLGVBQVMsRUFBQztBQUFqQixPQUNFLDBFQUVEYixTQUFTLENBQUNjLEdBQVYsQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDbEIsYUFDSTtBQUFJLFdBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUFkLFNBQ0k7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBdUJELElBQUksQ0FBQ0MsS0FBNUIsQ0FESixFQUVJO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQXVCRCxJQUFJLENBQUNFLEtBQTVCLENBRkosQ0FESjtBQU1ILEtBUEQsQ0FGQyxDQURGLENBQVA7QUFjSCxHQWZELE1BZU87QUFDSCxXQUFPLDJEQUFDLG9EQUFELE9BQVA7QUFDSDtBQUVKLENBOUJELEU7Ozs7Ozs7Ozs7O0FDWkEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxxT0FBNkg7O0FBRS9KOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImZpZWxkbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGUtZGlzcGxheSAubGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50YWJsZS1kaXNwbGF5IC5sYWJlbDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCI6IFxcXCI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YWJsZS1kaXNwbGF5IC52YWx1ZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnNwaW4tY2VudHJhbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVhY3Qtc3Bpbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4ucmVhY3Qtc3Bpbm5lcl9iYXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJlYWN0LXNwaW5uZXJfc3BpbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogcmVhY3Qtc3Bpbm5lcl9zcGluIDEuMnMgbGluZWFyIGluZmluaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiA3LjglO1xcbiAgdG9wOiA0Ni4xJTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuQGtleWZyYW1lcyByZWFjdC1zcGlubmVyX3NwaW4ge1xcbiAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gMTAwJSB7IG9wYWNpdHk6IDAuMTU7IH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJlYWN0LXNwaW5uZXJfc3BpbiB7XFxuIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAxMDAlIHsgb3BhY2l0eTogMC4xNTsgfVxcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuL2ZpZWxkbGlzdC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2t9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnLi9maWVsZGxpc3QuY3NzJztcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1zcGlubmVyXCI7XG5cbmltcG9ydCAnLi9yZWFjdC1zcGlubmVyLmNzcyc7XG5cbmNvbnN0IGF4aW9zR2V0QXN5bmMgPSBhc3luYyAodXJsKSA9PiB7XG4gICAgICB2YXIgcmVzID0gYXdhaXQgYXhpb3ModXJsKTtcbiAgICAgIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtsaXN0SXRlbXMsIHNldExpc3RJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgZ2V0SXRlbXMgPSB1c2VDYWxsYmFjaygoZGF0YSkgPT4gc2V0TGlzdEl0ZW1zKChsaXN0SXRlbXMpID0+IGxpc3RJdGVtcyA9IGRhdGEpLCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmFyIGZ1bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gcHJvcHMuaWQuc2xpY2UoLTgpO1xuICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zR2V0QXN5bmMocHJvcHMudXJsU3R1YiArICdpdGVtZGF0YS8nICsga2V5ICsgJy5qc29uJyk7XG4gICAgICAgICAgZ2V0SXRlbXMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFtdKTtcbiAgICBpZiAobGlzdEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtcy5tYXAoaW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmZvLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGFiZWxcIj57aW5mby5sYWJlbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ2YWx1ZVwiPntpbmZvLnZhbHVlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxTcGlubmVyIC8+XG4gICAgfVxuICAgIFxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuL3JlYWN0LXNwaW5uZXIuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=