"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var signalMap = {
  none: "",
  eg: "e.g.",
  accord: "accord",
  see: "see",
  seealso: "see also",
  seeeg: "see, e.g.",
  cf: "cf.",
  contra: "contra",
  butsee: "but see",
  seegenerally: "see generally",
  Eg: "E.g.",
  Accord: "Accord",
  See: "See",
  Seealso: "See also",
  Seeeg: "See, e.g.",
  Cf: "Cf.",
  Contra: "Contra",
  Butsee: "But see",
  Butseeeg: "But see, e.g.",
  Seegenerally: "See generally",
  butcf: "but cf.",
  compare: "compare",
  Butcf: "But cf.",
  Compare: "Compare",
  with: "with",
  and: "and",
  affirmed: "aff'd",
  affirming: "aff'g",
  certdenied: "cert. denied",
  other: "on other grounds",
  revsub: "sub nom.",
  affirmed: "aff'd",
  affirming: "aff'g",
  certdenied: "cert. denied",
  reversed: "rev'd",
  other: "on other grounds",
  subnom: "sub nom."
};

var commaCheck = function commaCheck(str) {
  var preSlice = ["eg"];
  var postSlice = [];
  var noSlice = ["affirmed", "certdenied", "reversed::other", "reversed"];
  str = str.toLowerCase();

  if (noSlice.indexOf(str) > -1) {
    return true;
  } else if (preSlice.indexOf(str.slice(0, str.length)) > -1) {
    return true;
  } else if (postSlice.indexOf(str.slice(-1 * str.length)) > -1) {
    return true;
  }

  return false;
};

var _default = function _default(html_id, rawStr, base64encoder) {
  if ("string" !== typeof html_id || "string" !== typeof rawStr) {
    throw "parseid must have two string arguments";
  }

  rawStr = rawStr.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">");

  if (!base64encoder) {
    var toBase64 = (0, _utils.getToBase64)(btoa);
  } else {
    var toBase64 = (0, _utils.getToBase64)(base64encoder);
  }

  var ret = {
    html_id: html_id,
    test_id: null,
    "citation-items": []
  };
  var test_id = [];
  var strLst = rawStr.split("++");

  var _iterator = _createForOfIteratorHelper(strLst),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var str = _step.value;
      var m = str.match(/^([^\-]+)-([^\-]+)-([0-3]+)-([0-1]+)(?:\-(.*))*/);

      if (m) {
        var test_id_buf = m.slice(1, 5);
        var params = {};

        if (m[1] !== "none") {
          var lst = m[1].split("::");
          lst = lst.map(function (o) {
            return typeof signalMap[o] !== "undefined" ? signalMap[o] : o;
          });
          var signal = lst.join(" ");
          params.prefix = "<i>".concat(signal, "</i>");

          if (commaCheck(m[1])) {
            params.prefix = "".concat(params.prefix, ",");
          }
        }

        params.id = m[2];
        params.position = parseInt(m[3]);

        if (parseInt(m[4])) {
          params["suppress-author"] = !!parseInt(m[4]);
        }

        if (m[5]) {
          params.locator = m[5];
          test_id_buf.push(toBase64(m[5]));
        }

        test_id.push(test_id_buf.join("-"));
        ret["citation-items"].push(params);
      } else {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ret.test_id = test_id.join("++");
  return ret;
};

exports.default = _default;