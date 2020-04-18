(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
// Access token is acquired by interactions below
// Token is pushed into localstorage, and should expire when session ends
// (expiration needs to be confirmed)


var login = {
  startLogin: function startLogin() {
    window.localStorage.removeItem('cite_url');
    var access_token = window.localStorage.getItem('access_token');
    if (access_token) return;
    window.localStorage.removeItem('block_login');
    var params = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["urlParts"])();

    if (!params.query.code) {
      // ID from Juris-M OAuth app reg
      var client_id = "eb529c0faf1bace5811d";

      if (document.location.host === "fbennett.github.io") {
        client_id = "28d992e126b54d095e4b";
      }

      document.location.href = "https://github.com/login/oauth/authorize?client_id=" + client_id + "&scope=public_repo&status=98754325";
    }
  },
  finishLogin: function finishLogin(openModal) {
    var block_login = window.localStorage.getItem('block_login');
    if (block_login) return;
    var params = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["urlParts"])();

    if (params.query.code) {
      // Get temporary code
      var code = params.query.code; // Remove code from URL

      history.replaceState({}, document.title, params.url); // Call for validation

      var mode = "indigo";

      if (document.location.host === "fbennett.github.io") {
        mode = "indigodev";
      }

      var url = 'https://our.law.nagoya-u.ac.jp/juris-m/authenticate/' + code + '?case=' + mode;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbG9naW4uanMiXSwibmFtZXMiOlsibG9naW4iLCJzdGFydExvZ2luIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImFjY2Vzc190b2tlbiIsImdldEl0ZW0iLCJwYXJhbXMiLCJ1cmxQYXJ0cyIsInF1ZXJ5IiwiY29kZSIsImNsaWVudF9pZCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJob3N0IiwiaHJlZiIsImZpbmlzaExvZ2luIiwib3Blbk1vZGFsIiwiYmxvY2tfbG9naW4iLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJ1cmwiLCJtb2RlIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRJdGVtIiwiZGF0YSIsInRva2VuIiwiaHRtbF9pZCIsImVsZW0iLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBRVZDLFlBQVUsRUFBRSxzQkFBTTtBQUNkQyxVQUFNLENBQUNDLFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLFVBQS9CO0FBQ0EsUUFBTUMsWUFBWSxHQUFHSCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JHLE9BQXBCLENBQTRCLGNBQTVCLENBQXJCO0FBQ0EsUUFBSUQsWUFBSixFQUFrQjtBQUNsQkgsVUFBTSxDQUFDQyxZQUFQLENBQW9CQyxVQUFwQixDQUErQixhQUEvQjtBQUNBLFFBQU1HLE1BQU0sR0FBR0MsMERBQVEsRUFBdkI7O0FBQ0EsUUFBSSxDQUFDRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsSUFBbEIsRUFBd0I7QUFDcEI7QUFDQSxVQUFJQyxTQUFTLEdBQUcsc0JBQWhCOztBQUNBLFVBQUlDLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsSUFBbEIsS0FBMkIsb0JBQS9CLEVBQXFEO0FBQ2pESCxpQkFBUyxHQUFHLHNCQUFaO0FBQ0g7O0FBQ0RDLGNBQVEsQ0FBQ0MsUUFBVCxDQUFrQkUsSUFBbEIsR0FBdUIsd0RBQXdESixTQUF4RCxHQUFvRSxvQ0FBM0Y7QUFDSDtBQUNKLEdBaEJTO0FBa0JWSyxhQUFXLEVBQUUscUJBQUNDLFNBQUQsRUFBZTtBQUN4QixRQUFNQyxXQUFXLEdBQUdoQixNQUFNLENBQUNDLFlBQVAsQ0FBb0JHLE9BQXBCLENBQTRCLGFBQTVCLENBQXBCO0FBQ0EsUUFBSVksV0FBSixFQUFpQjtBQUNqQixRQUFNWCxNQUFNLEdBQUdDLDBEQUFRLEVBQXZCOztBQUNBLFFBQUlELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxJQUFqQixFQUF1QjtBQUNuQjtBQUNBLFVBQUlBLElBQUksR0FBR0gsTUFBTSxDQUFDRSxLQUFQLENBQWFDLElBQXhCLENBRm1CLENBR25COztBQUNBUyxhQUFPLENBQUNDLFlBQVIsQ0FBcUIsRUFBckIsRUFBeUJSLFFBQVEsQ0FBQ1MsS0FBbEMsRUFBeUNkLE1BQU0sQ0FBQ2UsR0FBaEQsRUFKbUIsQ0FLbkI7O0FBQ0EsVUFBSUMsSUFBSSxHQUFHLFFBQVg7O0FBQ0EsVUFBSVgsUUFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixLQUEyQixvQkFBL0IsRUFBcUQ7QUFDakRTLFlBQUksR0FBRyxXQUFQO0FBQ0g7O0FBQ0QsVUFBSUQsR0FBRyxHQUFHLHlEQUF5RFosSUFBekQsR0FBZ0UsUUFBaEUsR0FBMkVhLElBQXJGO0FBQ0FDLGtEQUFLLENBQUNDLEdBQU4sQ0FBVUgsR0FBVixFQUFlSSxJQUFmLENBQW9CLFVBQUNDLFFBQUQsRUFBYztBQUM5QnpCLGNBQU0sQ0FBQ0MsWUFBUCxDQUFvQnlCLE9BQXBCLENBQTRCLGNBQTVCLEVBQTRDRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsS0FBMUQ7QUFDQSxZQUFJQyxPQUFPLEdBQUc3QixNQUFNLENBQUNDLFlBQVAsQ0FBb0JHLE9BQXBCLENBQTRCLFNBQTVCLENBQWQ7QUFDQSxZQUFJMEIsSUFBSSxHQUFHcEIsUUFBUSxDQUFDcUIsY0FBVCxDQUF3QkYsT0FBeEIsQ0FBWDs7QUFDQSxZQUFJQyxJQUFKLEVBQVU7QUFDTkEsY0FBSSxDQUFDRSxjQUFMO0FBQ0g7O0FBQ0RqQixpQkFBUztBQUNaLE9BUkQsRUFRR2tCLEtBUkgsQ0FRUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFrQkYsS0FBSyxDQUFDRyxPQUFwQztBQUNILE9BVkQ7QUFXSDtBQUNKO0FBN0NTLENBQWQ7QUFnRGV2QyxvRUFBZixFIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWNjZXNzIHRva2VuIGlzIGFjcXVpcmVkIGJ5IGludGVyYWN0aW9ucyBiZWxvd1xuLy8gVG9rZW4gaXMgcHVzaGVkIGludG8gbG9jYWxzdG9yYWdlLCBhbmQgc2hvdWxkIGV4cGlyZSB3aGVuIHNlc3Npb24gZW5kc1xuLy8gKGV4cGlyYXRpb24gbmVlZHMgdG8gYmUgY29uZmlybWVkKVxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVybFBhcnRzIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IGxvZ2luID0ge1xuXG4gICAgc3RhcnRMb2dpbjogKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NpdGVfdXJsJyk7XG4gICAgICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgICAgIGlmIChhY2Nlc3NfdG9rZW4pIHJldHVybjtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdibG9ja19sb2dpbicpO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB1cmxQYXJ0cygpO1xuICAgICAgICBpZiAoIXBhcmFtcy5xdWVyeS5jb2RlKSB7XG4gICAgICAgICAgICAvLyBJRCBmcm9tIEp1cmlzLU0gT0F1dGggYXBwIHJlZ1xuICAgICAgICAgICAgdmFyIGNsaWVudF9pZCA9IFwiZWI1MjljMGZhZjFiYWNlNTgxMWRcIjtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ob3N0ID09PSBcImZiZW5uZXR0LmdpdGh1Yi5pb1wiKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50X2lkID0gXCIyOGQ5OTJlMTI2YjU0ZDA5NWU0YlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dpbi9vYXV0aC9hdXRob3JpemU/Y2xpZW50X2lkPVwiICsgY2xpZW50X2lkICsgXCImc2NvcGU9cHVibGljX3JlcG8mc3RhdHVzPTk4NzU0MzI1XCI7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoTG9naW46IChvcGVuTW9kYWwpID0+IHtcbiAgICAgICAgY29uc3QgYmxvY2tfbG9naW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2NrX2xvZ2luJyk7XG4gICAgICAgIGlmIChibG9ja19sb2dpbikgcmV0dXJuO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB1cmxQYXJ0cygpO1xuICAgICAgICBpZiAocGFyYW1zLnF1ZXJ5LmNvZGUpIHtcbiAgICAgICAgICAgIC8vIEdldCB0ZW1wb3JhcnkgY29kZVxuICAgICAgICAgICAgdmFyIGNvZGUgPSBwYXJhbXMucXVlcnkuY29kZTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBjb2RlIGZyb20gVVJMXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHBhcmFtcy51cmwpO1xuICAgICAgICAgICAgLy8gQ2FsbCBmb3IgdmFsaWRhdGlvblxuICAgICAgICAgICAgdmFyIG1vZGUgPSBcImluZGlnb1wiO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgPT09IFwiZmJlbm5ldHQuZ2l0aHViLmlvXCIpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gXCJpbmRpZ29kZXZcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly9vdXIubGF3Lm5hZ295YS11LmFjLmpwL2p1cmlzLW0vYXV0aGVudGljYXRlLycgKyBjb2RlICsgJz9jYXNlPScgKyBtb2RlO1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc190b2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIGxldCBodG1sX2lkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdodG1sX2lkJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChodG1sX2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMT0dJTiBFUlJPUjogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=