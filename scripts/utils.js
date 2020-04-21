"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromBase64 = exports.getToBase64 = exports.logOut = exports.loginOK = exports.getPullRequestURL = exports.error = exports.buildQuery = exports.urlParts = void 0;

var _utf = _interopRequireDefault(require("utf8"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var error = function error(e) {
  console.log(e.toString());
};

exports.error = error;

var urlParts = function urlParts() {
  var url = window.location.toString();
  var qrex = /[?&]([^=#]+)=([^&#]*)/g,
      frex = /\#(.*)$/g,
      query = {},
      frag = "",
      match;

  while (match = qrex.exec(url)) {
    query[match[1]] = match[2];
  }

  if (match = frex.exec(url)) {
    frag = match[1];
  }

  url = url.replace(/\?.*/, "").replace(/\#.*/, "");
  var base = url.replace(/^(.*\/).*/, "$1");
  return {
    query: query,
    frag: frag,
    url: url,
    base: base
  };
};

exports.urlParts = urlParts;

var buildQuery = function buildQuery(data) {
  var ret = [];

  for (var key in data) {
    var val = data[key];
    ret.push("".concat(key, "=").concat(val));
  }

  ret = ret.join('&');
  return '?`${ret}`';
};

exports.buildQuery = buildQuery;

var getPullRequestURL = function getPullRequestURL() {
  return window.localStorage.getItem('cite_url');
};

exports.getPullRequestURL = getPullRequestURL;

var loginOK = function loginOK() {
  var access_token = window.localStorage.getItem('access_token');
  return !!access_token;
};

exports.loginOK = loginOK;

var logOut = function logOut() {
  var elem = document.getElementById(window.localStorage.getItem("html_id"));
  window.localStorage.setItem("citation", elem.innerHTML);
  window.localStorage.removeItem('access_token');
  window.localStorage.setItem('block_login', true);
};

exports.logOut = logOut;

var getToBase64 = function getToBase64(func) {
  return function (str) {
    var bytes = _utf.default.encode(str);

    return func(bytes);
  };
};

exports.getToBase64 = getToBase64;

var getFromBase64 = function getFromBase64(func) {
  return function (str) {
    var bytes = func(str);
    return _utf.default.decode(bytes);
  };
};

exports.getFromBase64 = getFromBase64;
module = {
  exports: {
    urlParts: urlParts,
    buildQuery: buildQuery,
    error: error,
    getPullRequestURL: getPullRequestURL,
    loginOK: loginOK,
    logOut: logOut,
    getToBase64: getToBase64,
    getFromBase64: getFromBase64
  }
};