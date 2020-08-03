(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/react-tabs.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/react-tabs.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-tabs {\n  -webkit-tap-highlight-color: transparent;\n}\n\n.react-tabs__tab-list {\n  border-bottom: 1px solid #aaa;\n  margin: 0 0 10px;\n  padding: 0;\n}\n\n.react-tabs__tab {\n  display: inline-block;\n  border: 1px solid transparent;\n  border-bottom: none;\n  bottom: -1px;\n  position: relative;\n  list-style: none;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.react-tabs__tab--selected {\n  background: #fff;\n  border-color: #aaa;\n  color: black;\n  border-radius: 5px 5px 0 0;\n}\n\n.react-tabs__tab--disabled {\n  color: GrayText;\n  cursor: default;\n}\n\n.react-tabs__tab:focus {\n  box-shadow: 0 0 5px hsl(208, 99%, 50%);\n  border-color: hsl(208, 99%, 50%);\n  outline: none;\n}\n\n.react-tabs__tab:focus:after {\n  content: \"\";\n  position: absolute;\n  height: 5px;\n  left: -4px;\n  right: -4px;\n  bottom: -5px;\n  background: #fff;\n}\n\n.react-tabs__tab-panel {\n  display: none;\n}\n\n.react-tabs__tab-panel--selected {\n  display: block;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/react-tabs.css":
/*!****************************!*\
  !*** ./src/react-tabs.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./react-tabs.css */ "./node_modules/css-loader/dist/cjs.js?!./src/react-tabs.css");

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

/***/ "./src/tabbeddisplay.jsx":
/*!*******************************!*\
  !*** ./src/tabbeddisplay.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _fieldlist_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fieldlist.jsx */ "./src/fieldlist.jsx");
/* harmony import */ var _react_tabs_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./react-tabs.css */ "./src/react-tabs.css");
/* harmony import */ var _react_tabs_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_tabs_css__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], null, props.citationInfo["citation-items"].map(function (ignoreThisArgument, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: ignoreThisArgument
    }, "Cite ", idx + 1);
  })), props.citationInfo["citation-items"].map(function (ignoreThisArgument, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
      key: ignoreThisArgument
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fieldlist_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      selectedIndex: idx,
      citationInfo: props.citationInfo,
      urlStub: props.urlStub
    }));
  }));
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QtdGFicy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LXRhYnMuY3NzPzdlMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmJlZGRpc3BsYXkuanN4Il0sIm5hbWVzIjpbInByb3BzIiwiY2l0YXRpb25JbmZvIiwibWFwIiwiaWdub3JlVGhpc0FyZ3VtZW50IiwiaWR4IiwidXJsU3R1YiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxnQkFBZ0IsNkNBQTZDLEdBQUcsMkJBQTJCLGtDQUFrQyxxQkFBcUIsZUFBZSxHQUFHLHNCQUFzQiwwQkFBMEIsa0NBQWtDLHdCQUF3QixpQkFBaUIsdUJBQXVCLHFCQUFxQixzQkFBc0Isb0JBQW9CLEdBQUcsZ0NBQWdDLHFCQUFxQix1QkFBdUIsaUJBQWlCLCtCQUErQixHQUFHLGdDQUFnQyxvQkFBb0Isb0JBQW9CLEdBQUcsNEJBQTRCLDJDQUEyQyxxQ0FBcUMsa0JBQWtCLEdBQUcsa0NBQWtDLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGVBQWUsZ0JBQWdCLGlCQUFpQixxQkFBcUIsR0FBRyw0QkFBNEIsa0JBQWtCLEdBQUcsc0NBQXNDLG1CQUFtQixHQUFHO0FBQzErQjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLHVJQUFxRTs7QUFFdkc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBRUE7QUFFZSx5RUFBQ0EsS0FBRDtBQUFBLHNCQUNiLDJEQUFDLCtDQUFELHFCQUNFLDJEQUFDLGtEQUFELFFBRVFBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQixnQkFBbkIsRUFBcUNDLEdBQXJDLENBQXlDLFVBQUNDLGtCQUFELEVBQXFCQyxHQUFyQixFQUE2QjtBQUNsRSx3QkFBTywyREFBQyw4Q0FBRDtBQUFLLFNBQUcsRUFBRUQ7QUFBVixnQkFBb0NDLEdBQUcsR0FBRyxDQUExQyxDQUFQO0FBQ0gsR0FGRCxDQUZSLENBREYsRUFVTUosS0FBSyxDQUFDQyxZQUFOLENBQW1CLGdCQUFuQixFQUFxQ0MsR0FBckMsQ0FBeUMsVUFBQ0Msa0JBQUQsRUFBcUJDLEdBQXJCLEVBQTZCO0FBQ2xFLHdCQUFPLDJEQUFDLG1EQUFEO0FBQVUsU0FBRyxFQUFFRDtBQUFmLG9CQUNILDJEQUFDLHNEQUFEO0FBQVcsbUJBQWEsRUFBRUMsR0FBMUI7QUFBK0Isa0JBQVksRUFBRUosS0FBSyxDQUFDQyxZQUFuRDtBQUFpRSxhQUFPLEVBQUVELEtBQUssQ0FBQ0s7QUFBaEYsTUFERyxDQUFQO0FBR0gsR0FKRCxDQVZOLENBRGE7QUFBQSxDQUFmLEUiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVhY3QtdGFicyB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmVhY3QtdGFic19fdGFiLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XFxuICBtYXJnaW46IDAgMCAxMHB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnJlYWN0LXRhYnNfX3RhYiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3R0b206IC0xcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWFjdC10YWJzX190YWItLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG59XFxuXFxuLnJlYWN0LXRhYnNfX3RhYi0tZGlzYWJsZWQge1xcbiAgY29sb3I6IEdyYXlUZXh0O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ucmVhY3QtdGFic19fdGFiOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggaHNsKDIwOCwgOTklLCA1MCUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2woMjA4LCA5OSUsIDUwJSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucmVhY3QtdGFic19fdGFiOmZvY3VzOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBsZWZ0OiAtNHB4O1xcbiAgcmlnaHQ6IC00cHg7XFxuICBib3R0b206IC01cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cXG4ucmVhY3QtdGFic19fdGFiLXBhbmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yZWFjdC10YWJzX190YWItcGFuZWwtLXNlbGVjdGVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9yZWFjdC10YWJzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAncmVhY3QtdGFicyc7XG5pbXBvcnQgRmllbGRMaXN0IGZyb20gJy4vZmllbGRsaXN0LmpzeCc7XG5cbmltcG9ydCAnLi9yZWFjdC10YWJzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICA8VGFicz5cbiAgICA8VGFiTGlzdD5cbiAgICAgICAge1xuICAgICAgICAgICAgcHJvcHMuY2l0YXRpb25JbmZvW1wiY2l0YXRpb24taXRlbXNcIl0ubWFwKChpZ25vcmVUaGlzQXJndW1lbnQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8VGFiIGtleT17aWdub3JlVGhpc0FyZ3VtZW50fT5DaXRlIHtpZHggKyAxfTwvVGFiPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIDwvVGFiTGlzdD5cblxuICAgIHtcbiAgICAgICAgcHJvcHMuY2l0YXRpb25JbmZvW1wiY2l0YXRpb24taXRlbXNcIl0ubWFwKChpZ25vcmVUaGlzQXJndW1lbnQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxUYWJQYW5lbCBrZXk9e2lnbm9yZVRoaXNBcmd1bWVudH0+XG4gICAgICAgICAgICAgICAgPEZpZWxkTGlzdCBzZWxlY3RlZEluZGV4PXtpZHh9IGNpdGF0aW9uSW5mbz17cHJvcHMuY2l0YXRpb25JbmZvfSB1cmxTdHViPXtwcm9wcy51cmxTdHVifSAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgfSlcbiAgICB9XG4gIDwvVGFicz5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9