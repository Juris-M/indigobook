(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/save.jsx":
/*!**********************!*\
  !*** ./src/save.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spinner */ "./node_modules/react-spinner/build/index.js");
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _checkpull__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkpull */ "./src/checkpull.js");










function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var SaveButton = function SaveButton(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      pendingOn = _useState2[0],
      setPending = _useState2[1];

  var startSave = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function () {
    return setPending(function (pendingOn) {
      return pendingOn = true;
    });
  }, []);

  var endSave = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_checkpull__WEBPACK_IMPORTED_MODULE_11__["checkPull"])();

            case 2:
              _context.next = 4;
              return props.modal();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function endSave() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = function handleClick() {
    __webpack_require__.e(/*! import() | saveops */ "saveops").then(__webpack_require__.bind(null, /*! ./saveops */ "./src/saveops.js")).then(function (_ref2) {
      var saveops = _ref2.default;
      saveops(props.params, startSave, endSave);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    onClick: handleClick,
    id: "save-button"
  }, pendingOn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_spinner__WEBPACK_IMPORTED_MODULE_10___default.a, null) : 'Save');
};

/* harmony default export */ __webpack_exports__["default"] = (SaveButton);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZS5qc3giXSwibmFtZXMiOlsiU2F2ZUJ1dHRvbiIsInByb3BzIiwidXNlU3RhdGUiLCJwZW5kaW5nT24iLCJzZXRQZW5kaW5nIiwic3RhcnRTYXZlIiwidXNlQ2FsbGJhY2siLCJlbmRTYXZlIiwiY2hlY2tQdWxsIiwibW9kYWwiLCJoYW5kbGVDbGljayIsInRoZW4iLCJzYXZlb3BzIiwiZGVmYXVsdCIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEtBQUQsQ0FEWjtBQUFBO0FBQUEsTUFDckJDLFNBRHFCO0FBQUEsTUFDVkMsVUFEVTs7QUFHNUIsTUFBTUMsU0FBUyxHQUFHQyx5REFBVyxDQUFDO0FBQUEsV0FBTUYsVUFBVSxDQUFDLFVBQUFELFNBQVM7QUFBQSxhQUFJQSxTQUFTLEdBQUcsSUFBaEI7QUFBQSxLQUFWLENBQWhCO0FBQUEsR0FBRCxFQUFrRCxFQUFsRCxDQUE3Qjs7QUFFQSxNQUFNSSxPQUFPO0FBQUEsdUVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ05DLDZEQUFTLEVBREg7O0FBQUE7QUFBQTtBQUFBLHFCQUVOUCxLQUFLLENBQUNRLEtBQU4sRUFGTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQRixPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBS0UsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0Qix5SUFBc0RDLElBQXRELENBQTJELGlCQUEwQjtBQUFBLFVBQWRDLE9BQWMsU0FBdkJDLE9BQXVCO0FBQ2pGRCxhQUFPLENBQUNYLEtBQUssQ0FBQ2EsTUFBUCxFQUFlVCxTQUFmLEVBQTBCRSxPQUExQixDQUFQO0FBQ0gsS0FGRDtBQUdILEdBSkQ7O0FBS0Esc0JBQ1E7QUFBUSxXQUFPLEVBQUVHLFdBQWpCO0FBQThCLE1BQUUsRUFBQztBQUFqQyxLQUFpRFAsU0FBUyxnQkFBRywyREFBQyxxREFBRCxPQUFILEdBQWlCLE1BQTNFLENBRFI7QUFHSCxDQWxCRDs7QUFvQmVILHlFQUFmLEUiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJcIjtcbmltcG9ydCB7IGNoZWNrUHVsbCwgZ2V0UHVsbFJlcXVlc3RVUkwgfSBmcm9tICcuL2NoZWNrcHVsbCc7XG5cbmNvbnN0IFNhdmVCdXR0b24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3BlbmRpbmdPbiwgc2V0UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBjb25zdCBzdGFydFNhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRQZW5kaW5nKHBlbmRpbmdPbiA9PiBwZW5kaW5nT24gPSB0cnVlKSwgW10pO1xuXG4gIGNvbnN0IGVuZFNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBjaGVja1B1bGwoKTtcbiAgICAgIGF3YWl0IHByb3BzLm1vZGFsKCk7XG4gIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJzYXZlb3BzXCIgKi8gJy4vc2F2ZW9wcycpLnRoZW4oKHsgZGVmYXVsdDogc2F2ZW9wcyB9KSA9PiB7XG4gICAgICAgICAgICBzYXZlb3BzKHByb3BzLnBhcmFtcywgc3RhcnRTYXZlLCBlbmRTYXZlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gaWQ9XCJzYXZlLWJ1dHRvblwiPnsgcGVuZGluZ09uID8gPFNwaW5uZXIgLz4gOiAnU2F2ZScgfTwvYnV0dG9uPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVCdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9