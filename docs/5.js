(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7],{145:function(t,e,n){"use strict";n(95);e.a=function(t,e){e?console.log("Axios fail: ".concat(t.message," (").concat(e,")")):console.log("Axios fail: ".concat(t.message))}},146:function(t,e,n){var r=n(63),a=n(147);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});t.exports=i},147:function(t,e,n){(e=n(64)(!1)).push([t.i,'.table-display .label {\n    font-weight: bold;\n    text-align: right;\n}\n\n.table-display .label:after {\n    content: ": ";\n    text-align: left;\n\tfont-weight: bold;\n}\n\n.table-display .value {\n\tfont-weight: normal;\n}\n\n.spin-central {\n    text-align: center;\n}\n',""]),t.exports=e},158:function(t,e,n){"use strict";n.r(e);n(58),n(59),n(95),n(22),n(97),n(60),n(34),n(57),n(35),n(61),n(96);var r=n(0),a=n.n(r),o=n(143),i=n.n(o),l=n(7),c=(n(146),n(23),n(62),n(98),n(145));function u(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){i=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e,n,r,a,o,i){try{var l=t[o](i),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,a)}var b=Object(l.f)().base,d={0:"First reference",1:"Subsequent reference",2:"Id. reference",3:"Id. reference with locator"},p={},y={},m=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n){var r,a,o,l,s,f,m,h,v,g,x,w,j,k,S,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=null,e.jurisdiction&&(a=e.jurisdiction.match(/^([0-9][0-9][0-9])/))&&(r=parseInt(a[1])),"legal_case"!==e.type||!e.jurisdiction||!e.authority){t.next=14;break}if(!r){t.next=14;break}if(o=e.jurisdiction.slice(3,3+r),l=o.split(":")[0],y[o]){t.next=11;break}return t.next=9,i()({method:"get",url:"".concat(b,"/courtMaps/").concat(l,".json")}).catch((function(t){return Object(c.a)(t)}));case 9:s=t.sent,y[l]=s.data;case 11:f=y[l],(m=f[o][e.authority])&&(e.authority=m);case 14:if(r&&(2==(h=e.jurisdiction.slice(r+3).split("|")).length?e.jurisdiction=h.join("|"):e.jurisdiction=h.slice(1).join("|")),p[e.type]){t.next=20;break}return t.next=18,i()({method:"get",url:"".concat(b,"/labelMaps/").concat(e.type,".json")});case 18:s=t.sent,p[e.type]=s.data;case 20:v=p[e.type],g=[],t.t0=regeneratorRuntime.keys(e);case 23:if((t.t1=t.t0()).done){t.next=31;break}if("id"!==(x=t.t1.value)){t.next=27;break}return t.abrupt("continue",23);case 27:if("object"==typeof(w=e[x])){if(void 0===w.length)w["date-parts"]&&w["date-parts"][0]&&w["date-parts"][0][0]?w=w["date-parts"].map((function(t){return t.join("-")})).join("/"):w.literal&&(w=w.literal),g.push({label:v[x],value:w});else if("seeAlso"!==x){j=v[x],k=u(w);try{for(k.s();!(S=k.n()).done;)_=S.value,g.push({label:j,value:[_.family,_.given].join(", ")}),j=""}catch(t){k.e(t)}finally{k.f()}}}else"type"===x?g.push({label:"Item Type",value:v[w]}):"admin-flag"===x||"gazette-flag"===x?g.push({label:v[x],value:"✓"}):g.push({label:v[x],value:w});t.next=23;break;case 31:return n.locator&&g.push({label:"Locator",value:n.locator}),g.push({label:"Position",value:d[n.position]}),n["suppress-author"]&&g.push({label:"Suppress Author",value:"✓"}),t.abrupt("return",g);case 35:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){f(o,r,a,i,l,"next",t)}function l(t){f(o,r,a,i,l,"throw",t)}i(void 0)}))});return function(t,n){return e.apply(this,arguments)}}(),h=n(65),v=n.n(h);n(99);function g(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=j(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){i=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}function x(t,e,n,r,a,o,i){try{var l=t[o](i),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,a)}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=t[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(t,e)||j(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var S=Object(l.f)().base,_={};e.default=function(t){var e=w(Object(r.useState)([]),2),n=e[0],o=e[1],l=Object(r.useCallback)((function(t){return o((function(e){return t}))}),[]);return Object(r.useEffect)((function(){(function(){var e,n=(e=regeneratorRuntime.mark((function e(){var n,r,a,o,c,u,s,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.citationInfo["citation-items"],r=[],a=g(n),e.prev=3,a.s();case 5:if((o=a.n()).done){e.next=19;break}if(c=o.value,!_[c.id]){e.next=11;break}s=_[c.id],e.next=16;break;case 11:return e.next=13,i()({url:"".concat(S,"itemdata/").concat(c.id,".json")});case 13:u=e.sent,s=u.data,_[c.id]=s;case 16:r.push(s);case 17:e.next=5;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(3),a.e(e.t0);case 24:return e.prev=24,a.f(),e.finish(24);case 27:return window.localStorage.setItem("cites_metadata",JSON.stringify(r)),window.localStorage.setItem("cites_info",JSON.stringify(n)),e.next=31,m(r[t.selectedIndex],n[0]);case 31:f=e.sent,l(f);case 33:case"end":return e.stop()}}),e,null,[[3,21,24,27]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(t){x(o,r,a,i,l,"next",t)}function l(t){x(o,r,a,i,l,"throw",t)}i(void 0)}))});return function(){return n.apply(this,arguments)}})()()}),[]),n.length?a.a.createElement("table",{className:"table-display"},a.a.createElement("tbody",null,n.map((function(e){return a.a.createElement("tr",{key:t.selectedIndex+"::"+e.label},a.a.createElement("td",{className:"label"},e.label),a.a.createElement("td",{className:"value"},e.value))})))):a.a.createElement(v.a,{className:"black-wheel"})}},178:function(t,e,n){var r=n(63),a=n(179);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});t.exports=i},179:function(t,e,n){(e=n(64)(!1)).push([t.i,'.react-tabs {\n  -webkit-tap-highlight-color: transparent;\n}\n\n.react-tabs__tab-list {\n  border-bottom: 1px solid #aaa;\n  margin: 0 0 10px;\n  padding: 0;\n}\n\n.react-tabs__tab {\n  display: inline-block;\n  border: 1px solid transparent;\n  border-bottom: none;\n  bottom: -1px;\n  position: relative;\n  list-style: none;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.react-tabs__tab--selected {\n  background: #fff;\n  border-color: #aaa;\n  color: black;\n  border-radius: 5px 5px 0 0;\n}\n\n.react-tabs__tab--disabled {\n  color: GrayText;\n  cursor: default;\n}\n\n.react-tabs__tab:focus {\n  box-shadow: 0 0 5px hsl(208, 99%, 50%);\n  border-color: hsl(208, 99%, 50%);\n  outline: none;\n}\n\n.react-tabs__tab:focus:after {\n  content: "";\n  position: absolute;\n  height: 5px;\n  left: -4px;\n  right: -4px;\n  bottom: -5px;\n  background: #fff;\n}\n\n.react-tabs__tab-panel {\n  display: none;\n}\n\n.react-tabs__tab-panel--selected {\n  display: block;\n}\n',""]),t.exports=e},194:function(t,e,n){"use strict";n.r(e);n(97);var r=n(0),a=n.n(r),o=n(192),i=n(158);n(178);e.default=function(t){return a.a.createElement(o.d,null,a.a.createElement(o.b,null,t.citationInfo["citation-items"].map((function(t,e){return a.a.createElement(o.a,{key:t},"Cite ",e+1)}))),t.citationInfo["citation-items"].map((function(e,n){return a.a.createElement(o.c,{key:e},a.a.createElement(i.default,{selectedIndex:n,citationInfo:t.citationInfo,urlStub:t.urlStub}))})))}}}]);