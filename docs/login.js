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
  },
  loginOK: function loginOK() {
    var access_token = window.localStorage.getItem('access_token');
    return !!access_token;
  },
  logOut: function logOut() {
    var elem = document.getElementById(window.localStorage.getItem("html_id"));
    window.localStorage.setItem("citation", elem.innerHTML);
    window.localStorage.removeItem('access_token');
    window.localStorage.setItem('block_login', true);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbG9naW4uanMiXSwibmFtZXMiOlsibG9naW4iLCJzdGFydExvZ2luIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImFjY2Vzc190b2tlbiIsImdldEl0ZW0iLCJwYXJhbXMiLCJ1cmxQYXJ0cyIsInF1ZXJ5IiwiY29kZSIsImNsaWVudF9pZCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJob3N0IiwiaHJlZiIsImZpbmlzaExvZ2luIiwib3Blbk1vZGFsIiwiYmxvY2tfbG9naW4iLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJ1cmwiLCJtb2RlIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRJdGVtIiwiZGF0YSIsInRva2VuIiwiaHRtbF9pZCIsImVsZW0iLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibG9naW5PSyIsImxvZ091dCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUVWQyxZQUFVLEVBQUUsc0JBQU07QUFDZEMsVUFBTSxDQUFDQyxZQUFQLENBQW9CQyxVQUFwQixDQUErQixVQUEvQjtBQUNBLFFBQU1DLFlBQVksR0FBR0gsTUFBTSxDQUFDQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QixjQUE1QixDQUFyQjtBQUNBLFFBQUlELFlBQUosRUFBa0I7QUFDbEJILFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsVUFBcEIsQ0FBK0IsYUFBL0I7QUFDQSxRQUFNRyxNQUFNLEdBQUdDLDBEQUFRLEVBQXZCOztBQUNBLFFBQUksQ0FBQ0QsTUFBTSxDQUFDRSxLQUFQLENBQWFDLElBQWxCLEVBQXdCO0FBQ3BCO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLHNCQUFoQjs7QUFDQSxVQUFJQyxRQUFRLENBQUNDLFFBQVQsQ0FBa0JDLElBQWxCLEtBQTJCLG9CQUEvQixFQUFxRDtBQUNqREgsaUJBQVMsR0FBRyxzQkFBWjtBQUNIOztBQUNEQyxjQUFRLENBQUNDLFFBQVQsQ0FBa0JFLElBQWxCLEdBQXVCLHdEQUF3REosU0FBeEQsR0FBb0Usb0NBQTNGO0FBQ0g7QUFDSixHQWhCUztBQWtCVkssYUFBVyxFQUFFLHFCQUFDQyxTQUFELEVBQWU7QUFDeEIsUUFBTUMsV0FBVyxHQUFHaEIsTUFBTSxDQUFDQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QixhQUE1QixDQUFwQjtBQUNBLFFBQUlZLFdBQUosRUFBaUI7QUFDakIsUUFBTVgsTUFBTSxHQUFHQywwREFBUSxFQUF2Qjs7QUFDQSxRQUFJRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsSUFBakIsRUFBdUI7QUFDbkI7QUFDQSxVQUFJQSxJQUFJLEdBQUdILE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxJQUF4QixDQUZtQixDQUduQjs7QUFDQVMsYUFBTyxDQUFDQyxZQUFSLENBQXFCLEVBQXJCLEVBQXlCUixRQUFRLENBQUNTLEtBQWxDLEVBQXlDZCxNQUFNLENBQUNlLEdBQWhELEVBSm1CLENBS25COztBQUNBLFVBQUlDLElBQUksR0FBRyxRQUFYOztBQUNBLFVBQUlYLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsSUFBbEIsS0FBMkIsb0JBQS9CLEVBQXFEO0FBQ2pEUyxZQUFJLEdBQUcsV0FBUDtBQUNIOztBQUNELFVBQUlELEdBQUcsR0FBRyx5REFBeURaLElBQXpELEdBQWdFLFFBQWhFLEdBQTJFYSxJQUFyRjtBQUNBQyxrREFBSyxDQUFDQyxHQUFOLENBQVVILEdBQVYsRUFBZUksSUFBZixDQUFvQixVQUFDQyxRQUFELEVBQWM7QUFDOUJ6QixjQUFNLENBQUNDLFlBQVAsQ0FBb0J5QixPQUFwQixDQUE0QixjQUE1QixFQUE0Q0QsUUFBUSxDQUFDRSxJQUFULENBQWNDLEtBQTFEO0FBQ0EsWUFBSUMsT0FBTyxHQUFHN0IsTUFBTSxDQUFDQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QixTQUE1QixDQUFkO0FBQ0EsWUFBSTBCLElBQUksR0FBR3BCLFFBQVEsQ0FBQ3FCLGNBQVQsQ0FBd0JGLE9BQXhCLENBQVg7O0FBQ0EsWUFBSUMsSUFBSixFQUFVO0FBQ05BLGNBQUksQ0FBQ0UsY0FBTDtBQUNIOztBQUNEakIsaUJBQVM7QUFDWixPQVJELEVBUUdrQixLQVJILENBUVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBa0JGLEtBQUssQ0FBQ0csT0FBcEM7QUFDSCxPQVZEO0FBV0g7QUFDSixHQTdDUztBQStDVkMsU0FBTyxFQUFFLG1CQUFNO0FBQ1gsUUFBTW5DLFlBQVksR0FBR0gsTUFBTSxDQUFDQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QixjQUE1QixDQUFyQjtBQUNBLFdBQU8sQ0FBQyxDQUFDRCxZQUFUO0FBQ0gsR0FsRFM7QUFvRFZvQyxRQUFNLEVBQUUsa0JBQU07QUFDVixRQUFJVCxJQUFJLEdBQUdwQixRQUFRLENBQUNxQixjQUFULENBQXdCL0IsTUFBTSxDQUFDQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QixTQUE1QixDQUF4QixDQUFYO0FBQ0FKLFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQnlCLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDSSxJQUFJLENBQUNVLFNBQTdDO0FBQ0F4QyxVQUFNLENBQUNDLFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLGNBQS9CO0FBQ0FGLFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQnlCLE9BQXBCLENBQTRCLGFBQTVCLEVBQTJDLElBQTNDO0FBQ0g7QUF6RFMsQ0FBZDtBQTREZTVCLG9FQUFmLEUiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY2Nlc3MgdG9rZW4gaXMgYWNxdWlyZWQgYnkgaW50ZXJhY3Rpb25zIGJlbG93XG4vLyBUb2tlbiBpcyBwdXNoZWQgaW50byBsb2NhbHN0b3JhZ2UsIGFuZCBzaG91bGQgZXhwaXJlIHdoZW4gc2Vzc2lvbiBlbmRzXG4vLyAoZXhwaXJhdGlvbiBuZWVkcyB0byBiZSBjb25maXJtZWQpXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXJsUGFydHMgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgbG9naW4gPSB7XG5cbiAgICBzdGFydExvZ2luOiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2l0ZV91cmwnKTtcbiAgICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAgICAgaWYgKGFjY2Vzc190b2tlbikgcmV0dXJuO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2Jsb2NrX2xvZ2luJyk7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHVybFBhcnRzKCk7XG4gICAgICAgIGlmICghcGFyYW1zLnF1ZXJ5LmNvZGUpIHtcbiAgICAgICAgICAgIC8vIElEIGZyb20gSnVyaXMtTSBPQXV0aCBhcHAgcmVnXG4gICAgICAgICAgICB2YXIgY2xpZW50X2lkID0gXCJlYjUyOWMwZmFmMWJhY2U1ODExZFwiO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgPT09IFwiZmJlbm5ldHQuZ2l0aHViLmlvXCIpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRfaWQgPSBcIjI4ZDk5MmUxMjZiNTRkMDk1ZTRiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2F1dGhvcml6ZT9jbGllbnRfaWQ9XCIgKyBjbGllbnRfaWQgKyBcIiZzY29wZT1wdWJsaWNfcmVwbyZzdGF0dXM9OTg3NTQzMjVcIjtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2hMb2dpbjogKG9wZW5Nb2RhbCkgPT4ge1xuICAgICAgICBjb25zdCBibG9ja19sb2dpbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvY2tfbG9naW4nKTtcbiAgICAgICAgaWYgKGJsb2NrX2xvZ2luKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHVybFBhcnRzKCk7XG4gICAgICAgIGlmIChwYXJhbXMucXVlcnkuY29kZSkge1xuICAgICAgICAgICAgLy8gR2V0IHRlbXBvcmFyeSBjb2RlXG4gICAgICAgICAgICB2YXIgY29kZSA9IHBhcmFtcy5xdWVyeS5jb2RlO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGNvZGUgZnJvbSBVUkxcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgcGFyYW1zLnVybCk7XG4gICAgICAgICAgICAvLyBDYWxsIGZvciB2YWxpZGF0aW9uXG4gICAgICAgICAgICB2YXIgbW9kZSA9IFwiaW5kaWdvXCI7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaG9zdCA9PT0gXCJmYmVubmV0dC5naXRodWIuaW9cIikge1xuICAgICAgICAgICAgICAgIG1vZGUgPSBcImluZGlnb2RldlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwczovL291ci5sYXcubmFnb3lhLXUuYWMuanAvanVyaXMtbS9hdXRoZW50aWNhdGUvJyArIGNvZGUgKyAnP2Nhc2U9JyArIG1vZGU7XG4gICAgICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgcmVzcG9uc2UuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgbGV0IGh0bWxfaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2h0bWxfaWQnKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGh0bWxfaWQpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3Blbk1vZGFsKCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxPR0lOIEVSUk9SOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9naW5PSzogKCkgPT4ge1xuICAgICAgICBjb25zdCBhY2Nlc3NfdG9rZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgICAgICByZXR1cm4gISFhY2Nlc3NfdG9rZW47XG4gICAgfSxcblxuICAgIGxvZ091dDogKCkgPT4ge1xuICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImh0bWxfaWRcIikpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRhdGlvblwiLCBlbGVtLmlubmVySFRNTCk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmxvY2tfbG9naW4nLCB0cnVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==