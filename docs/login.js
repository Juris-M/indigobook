(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

// Access token is acquired by interactions below
// Token is pushed into localstorage, and should expire when session ends
// (expiration needs to be confirmed)


var login = {
  startLogin: function startLogin() {
    window.localStorage.removeItem('cite_url');
    var access_token = window.localStorage.getItem('access_token');
    if (access_token) return;
    window.localStorage.removeItem('block_login');
    var params = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["urlParts"])();

    if (!params.query.code) {
      // ID from Juris-M OAuth app reg
      var client_id = "eb529c0faf1bace5811d";

      if (document.location.host === "fbennett.github.io") {
        client_id = "28d992e126b54d095e4b";
      }

      var url = "https://github.com/login/oauth/authorize?client_id=".concat(client_id, "&scope=public_repo&status=98754325&redirect_uri=").concat(document.location.href);
      document.location.href = url;
    }
  },
  finishLogin: function finishLogin(openModal) {
    var block_login = window.localStorage.getItem('block_login');
    if (block_login) return;
    var params = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["urlParts"])();

    if (params.query.code) {
      // Get temporary code
      var code = params.query.code; // Remove code from URL

      history.replaceState({}, document.title, params.url); // Call for validation

      var mode = "indigo";

      if (document.location.host === "fbennett.github.io") {
        mode = "indigodev";
      }

      var url = "https://our.law.nagoya-u.ac.jp/juris-m/authenticate/".concat(code, "?case=").concat(mode);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url).then(function (response) {
        window.localStorage.setItem('access_token', response.data.token);
        var html_id = window.localStorage.getItem('html_id');
        var elem = document.getElementById(html_id);

        if (elem) {
          elem.scrollIntoView();
        }

        openModal();
      }).catch(function (error) {
        console.log("LOGIN ERROR: " + error.message);
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbG9naW4uanMiXSwibmFtZXMiOlsibG9naW4iLCJzdGFydExvZ2luIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImFjY2Vzc190b2tlbiIsImdldEl0ZW0iLCJwYXJhbXMiLCJ1cmxQYXJ0cyIsInF1ZXJ5IiwiY29kZSIsImNsaWVudF9pZCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJob3N0IiwidXJsIiwiaHJlZiIsImZpbmlzaExvZ2luIiwib3Blbk1vZGFsIiwiYmxvY2tfbG9naW4iLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJtb2RlIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRJdGVtIiwiZGF0YSIsInRva2VuIiwiaHRtbF9pZCIsImVsZW0iLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFFVkMsWUFBVSxFQUFFLHNCQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsVUFBcEIsQ0FBK0IsVUFBL0I7QUFDQSxRQUFNQyxZQUFZLEdBQUdILE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkcsT0FBcEIsQ0FBNEIsY0FBNUIsQ0FBckI7QUFDQSxRQUFJRCxZQUFKLEVBQWtCO0FBQ2xCSCxVQUFNLENBQUNDLFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLGFBQS9CO0FBQ0EsUUFBTUcsTUFBTSxHQUFHQywwREFBUSxFQUF2Qjs7QUFDQSxRQUFJLENBQUNELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxJQUFsQixFQUF3QjtBQUNwQjtBQUNBLFVBQUlDLFNBQVMsR0FBRyxzQkFBaEI7O0FBQ0EsVUFBSUMsUUFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixLQUEyQixvQkFBL0IsRUFBcUQ7QUFDakRILGlCQUFTLEdBQUcsc0JBQVo7QUFDSDs7QUFDRCxVQUFJSSxHQUFHLGdFQUF5REosU0FBekQsNkRBQXFIQyxRQUFRLENBQUNDLFFBQVQsQ0FBa0JHLElBQXZJLENBQVA7QUFDQUosY0FBUSxDQUFDQyxRQUFULENBQWtCRyxJQUFsQixHQUF1QkQsR0FBdkI7QUFDSDtBQUNKLEdBakJTO0FBbUJWRSxhQUFXLEVBQUUscUJBQUNDLFNBQUQsRUFBZTtBQUN4QixRQUFNQyxXQUFXLEdBQUdqQixNQUFNLENBQUNDLFlBQVAsQ0FBb0JHLE9BQXBCLENBQTRCLGFBQTVCLENBQXBCO0FBQ0EsUUFBSWEsV0FBSixFQUFpQjtBQUNqQixRQUFNWixNQUFNLEdBQUdDLDBEQUFRLEVBQXZCOztBQUNBLFFBQUlELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxJQUFqQixFQUF1QjtBQUNuQjtBQUNBLFVBQUlBLElBQUksR0FBR0gsTUFBTSxDQUFDRSxLQUFQLENBQWFDLElBQXhCLENBRm1CLENBR25COztBQUNBVSxhQUFPLENBQUNDLFlBQVIsQ0FBcUIsRUFBckIsRUFBeUJULFFBQVEsQ0FBQ1UsS0FBbEMsRUFBeUNmLE1BQU0sQ0FBQ1EsR0FBaEQsRUFKbUIsQ0FLbkI7O0FBQ0EsVUFBSVEsSUFBSSxHQUFHLFFBQVg7O0FBQ0EsVUFBSVgsUUFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixLQUEyQixvQkFBL0IsRUFBcUQ7QUFDakRTLFlBQUksR0FBRyxXQUFQO0FBQ0g7O0FBQ0QsVUFBSVIsR0FBRyxpRUFBMERMLElBQTFELG1CQUF1RWEsSUFBdkUsQ0FBUDtBQUNBQyxrREFBSyxDQUFDQyxHQUFOLENBQVVWLEdBQVYsRUFBZVcsSUFBZixDQUFvQixVQUFDQyxRQUFELEVBQWM7QUFDOUJ6QixjQUFNLENBQUNDLFlBQVAsQ0FBb0J5QixPQUFwQixDQUE0QixjQUE1QixFQUE0Q0QsUUFBUSxDQUFDRSxJQUFULENBQWNDLEtBQTFEO0FBQ0EsWUFBSUMsT0FBTyxHQUFHN0IsTUFBTSxDQUFDQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QixTQUE1QixDQUFkO0FBQ0EsWUFBSTBCLElBQUksR0FBR3BCLFFBQVEsQ0FBQ3FCLGNBQVQsQ0FBd0JGLE9BQXhCLENBQVg7O0FBQ0EsWUFBSUMsSUFBSixFQUFVO0FBQ05BLGNBQUksQ0FBQ0UsY0FBTDtBQUNIOztBQUNEaEIsaUJBQVM7QUFDWixPQVJELEVBUUdpQixLQVJILENBUVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBa0JGLEtBQUssQ0FBQ0csT0FBcEM7QUFDSCxPQVZEO0FBV0g7QUFDSjtBQTlDUyxDQUFkO0FBaURldkMsb0VBQWYsRSIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFjY2VzcyB0b2tlbiBpcyBhY3F1aXJlZCBieSBpbnRlcmFjdGlvbnMgYmVsb3dcbi8vIFRva2VuIGlzIHB1c2hlZCBpbnRvIGxvY2Fsc3RvcmFnZSwgYW5kIHNob3VsZCBleHBpcmUgd2hlbiBzZXNzaW9uIGVuZHNcbi8vIChleHBpcmF0aW9uIG5lZWRzIHRvIGJlIGNvbmZpcm1lZClcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1cmxQYXJ0cyB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBsb2dpbiA9IHtcblxuICAgIHN0YXJ0TG9naW46ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjaXRlX3VybCcpO1xuICAgICAgICBjb25zdCBhY2Nlc3NfdG9rZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgICAgICBpZiAoYWNjZXNzX3Rva2VuKSByZXR1cm47XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmxvY2tfbG9naW4nKTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdXJsUGFydHMoKTtcbiAgICAgICAgaWYgKCFwYXJhbXMucXVlcnkuY29kZSkge1xuICAgICAgICAgICAgLy8gSUQgZnJvbSBKdXJpcy1NIE9BdXRoIGFwcCByZWdcbiAgICAgICAgICAgIHZhciBjbGllbnRfaWQgPSBcImViNTI5YzBmYWYxYmFjZTU4MTFkXCI7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaG9zdCA9PT0gXCJmYmVubmV0dC5naXRodWIuaW9cIikge1xuICAgICAgICAgICAgICAgIGNsaWVudF9pZCA9IFwiMjhkOTkyZTEyNmI1NGQwOTVlNGJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1cmwgPSBgaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2F1dGhvcml6ZT9jbGllbnRfaWQ9JHtjbGllbnRfaWR9JnNjb3BlPXB1YmxpY19yZXBvJnN0YXR1cz05ODc1NDMyNSZyZWRpcmVjdF91cmk9JHtkb2N1bWVudC5sb2NhdGlvbi5ocmVmfWA7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPXVybDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2hMb2dpbjogKG9wZW5Nb2RhbCkgPT4ge1xuICAgICAgICBjb25zdCBibG9ja19sb2dpbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvY2tfbG9naW4nKTtcbiAgICAgICAgaWYgKGJsb2NrX2xvZ2luKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHVybFBhcnRzKCk7XG4gICAgICAgIGlmIChwYXJhbXMucXVlcnkuY29kZSkge1xuICAgICAgICAgICAgLy8gR2V0IHRlbXBvcmFyeSBjb2RlXG4gICAgICAgICAgICB2YXIgY29kZSA9IHBhcmFtcy5xdWVyeS5jb2RlO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGNvZGUgZnJvbSBVUkxcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgcGFyYW1zLnVybCk7XG4gICAgICAgICAgICAvLyBDYWxsIGZvciB2YWxpZGF0aW9uXG4gICAgICAgICAgICB2YXIgbW9kZSA9IFwiaW5kaWdvXCI7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaG9zdCA9PT0gXCJmYmVubmV0dC5naXRodWIuaW9cIikge1xuICAgICAgICAgICAgICAgIG1vZGUgPSBcImluZGlnb2RldlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVybCA9IGBodHRwczovL291ci5sYXcubmFnb3lhLXUuYWMuanAvanVyaXMtbS9hdXRoZW50aWNhdGUvJHtjb2RlfT9jYXNlPSR7bW9kZX1gO1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc190b2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIGxldCBodG1sX2lkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdodG1sX2lkJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChodG1sX2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMT0dJTiBFUlJPUjogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=