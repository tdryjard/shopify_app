module.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=3)}([function(n,e){n.exports=require("react")},function(n,e,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function c(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],a=0;a<n.length;a++){var o=n[a],l=e.base?o[0]+e.base:o[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=c(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:m(f,e),references:1}),r.push(u)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,a);else{var o=document.createTextNode(a),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}function p(n,e,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var A=null,h=0;function m(n,e){var t,r,a;if(e.singleton){var o=h++;t=A||(A=s(e)),r=f.bind(null,t,o,!1),a=f.bind(null,t,o,!0)}else t=s(e),r=p.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var a=c(t[r]);i[a].references--}for(var o=l(n,e),s=0;s<t.length;s++){var u=c(t[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=o}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([a]).join("\n")}var i,c,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a=function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){a=!0,o=n}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=t(0),i=d(o),c=d(t(4)),l=d(t(5)),s=d(t(8)),u=d(t(9));function d(n){return n&&n.__esModule?n:{default:n}}function f(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}function p(n){return function(){var e=n.apply(this,arguments);return new Promise((function(n,t){return function r(a,o){try{var i=e[a](o),c=i.value}catch(n){return void t(n)}if(!i.done)return Promise.resolve(c).then((function(n){r("next",n)}),(function(n){r("throw",n)}));n(c)}("next")}))}}t(10);e.default=function(n){var e=n.modelId,t=n.userId,d=(0,o.useState)([]),A=a(d,2),h=A[0],m=A[1],g=(0,o.useState)([]),b=a(g,2),x=b[0],y=b[1],v=(0,o.useState)([]),C=a(v,2),w=C[0],Z=C[1],S=(0,o.useState)([]),E=a(S,2),J=E[0],R=E[1],G=(0,o.useState)(0),k=a(G,2),Y=k[0],M=k[1],N=(0,o.useState)(),z=a(N,2),I=z[0],j=z[1],O=(0,o.useState)([]),B=a(O,2),X=B[0],P=B[1],L=(0,o.useState)(!1),V=a(L,2),W=V[0],D=V[1],Q=(0,o.useState)([]),T=a(Q,2),H=T[0],F=T[1],U=(0,o.useState)(!1),q=a(U,2),K=q[0],_=q[1],$=(0,o.useState)(!0),nn=a($,2),en=nn[0],tn=nn[1];(0,o.useEffect)((function(){cn()}),[t,X]),(0,o.useEffect)((function(){setTimeout((function(){tn(!1)}),4e3)}));var rn,an,on,cn=(rn=p(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{fetch("http://192.168.43.193:8000/api/container/findAll/"+t+"/"+Y+"/"+e).then((function(n){return n.json()})).then((function(n){if(n.length)if(I){var e=n.filter((function(n){return null!=n.response_id})),t=[].concat(f(I),f(e));m(t),ln(t)}else m(n),ln(n)}))}catch(n){console.log(n)}j(h);case 2:case"end":return n.stop()}}),n,void 0)}))),function(){return rn.apply(this,arguments)}),ln=(an=p(regeneratorRuntime.mark((function n(a){var o,i,c,l,s,u,d,p,A,h,m,g,b;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=[],i=0;case 2:if(!(i<a.length+3)){n.next=14;break}if(!a[i]){n.next=11;break}return n.next=6,fetch("http://192.168.43.193:8000/api/relation/findCardQuestion/"+a[i].id+"/"+t+"/"+e,{method:"GET",headers:{"Content-Type":"application/json"}});case 6:return c=n.sent,n.next=9,c.json();case 9:l=n.sent,o=[].concat(f(o),[l]);case 11:i++,n.next=2;break;case 14:if(!o.length){n.next=20;break}return y(o),n.next=18,o.filter((function(n){return n[0]}));case 18:s=n.sent,F(s);case 20:u=[],d=0;case 22:if(!(d<a.length+3)){n.next=34;break}if(!a[d]){n.next=31;break}return n.next=26,fetch("http://192.168.43.193:8000/api/relation/findCardResponse/"+a[d].id+"/"+t+"/"+e,{method:"GET",headers:{"Content-Type":"application/json"}});case 26:return p=n.sent,n.next=29,p.json();case 29:A=n.sent,u=[].concat(f(u),[A]);case 31:d++,n.next=22;break;case 34:Z(u),h=[],m=0;case 37:if(!(m<a.length+3)){n.next=49;break}if("object"!==r(a[m])){n.next=46;break}return n.next=41,fetch("http://192.168.43.193:8000/api/relation/findCardCategory/"+a[m].id+"/"+t+"/"+e,{method:"GET",headers:{"Content-Type":"application/json"}});case 41:return g=n.sent,n.next=44,g.json();case 44:b=n.sent,h=[].concat(f(h),[b]);case 46:m++,n.next=37;break;case 49:R(h);case 50:case"end":return n.stop()}}),n,void 0)}))),function(n){return an.apply(this,arguments)}),sn=(on=p(regeneratorRuntime.mark((function n(e,t){var r,a,o,i,c,l,s,u,d,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(D(!W),r=h,o=t+1,M(a=e),X.length=e,r.length=o,i=[].concat(f(X),[a]),c=0;c<w.length;c++)if(w[c].length)for(l=0;l<w[c].length;l++)for(s=0;s<i.length;s++)if((u=w[c].filter((function(n){return i.includes(n.id)}))).length>1)for(d=0;d<i.length;d++)for(p=0;p<u.length-1;p++)u[p].id===i[d]&&i.splice(d,1);P(i),j(r),r&&cn(),setTimeout((function(){window.scrollTo(0,document.body.scrollHeight)}),700);case 13:case"end":return n.stop()}}),n,this)}))),function(n,e){return on.apply(this,arguments)}),un=function(){_(!0)};return i.default.createElement("div",{className:K?"containerChatbot":"containerIconChat"},K&&i.default.createElement("div",{className:"headChatbot"},i.default.createElement("img",{onClick:function(){_(!K)},alt:"close sortouch",src:s.default,className:"crossChatbot"}),i.default.createElement("a",{target:"__blank",href:"https://sortouch.com",className:"sortouch"},"Sortouch")),i.default.createElement("div",{className:K?"contentChatbot":"contentIcon"},K?Array.isArray(h)&&h.map((function(n,r){return i.default.createElement("div",{className:"question"===n.content_type?"contentLittleQuestChat":"response"===n.content_type?"contentResponseChat":"contentLittleDestinationChat"},Array.isArray(x[r])&&"question"===n.content_type&&x[r].map((function(n){return H[H.length-1]&&n.id===H[H.length-1][0].id?i.default.createElement("div",{className:"contentQuestChat"},i.default.createElement(c.default,{text:n.content}),i.default.createElement("img",{alt:"sortouch",src:u.default,className:"logoChat"})):i.default.createElement("div",{className:"contentQuestChat"},i.default.createElement("p",{className:"textQuest"},n.content),i.default.createElement("img",{alt:"sortouch",src:u.default,className:"logoChat"}))})),Array.isArray(w[r])&&"response"===n.content_type&&w[r].map((function(n){return i.default.createElement("div",{onClick:function(){sn(n.id,r)},className:X.includes(n.id)?"containerLittleCardResChatActive":"containerLittleCardResChat"},i.default.createElement("p",{id:"container"+r,className:"textCardResChat"},n.content))})),Array.isArray(J[r])&&"category"===n.content_type&&J[r].map((function(n){return i.default.createElement(l.default,{categoryId:n.id,userId:t,modelId:e})})))})):i.default.createElement("div",{className:"contentIcon"},en&&i.default.createElement("div",{className:"contentTextIconChat"},i.default.createElement("p",{onClick:un,className:"textIconCard"},i.default.createElement(c.default,{text:"Prenez contact avec moi !"}))),i.default.createElement("img",{alt:"icon chat",onClick:un,src:u.default,className:"iconChat"}))))}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){a=!0,o=n}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=t(0),i=(r=o)&&r.__esModule?r:{default:r};function c(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}e.default=function(n){var e=(0,o.useState)([]),t=a(e,2),r=t[0],l=t[1];(0,o.useEffect)((function(){s(n.text)}),[n.text]);var s=function(e){if(n.text)var t=0,a=e.split(""),o=[],i=setInterval((function(){if(o=[].concat(c(o),[a[t]]),l([].concat(c(r),[o])),++t===a.length)return clearInterval(i),!0}),50)};return i.default.createElement("div",null,i.default.createElement("p",{className:"questionPrint"},r))}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){a=!0,o=n}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=t(0),i=(r=o)&&r.__esModule?r:{default:r};t(6);e.default=function(n){var e=(0,o.useState)(""),t=a(e,2),r=t[0],c=t[1],l=(0,o.useState)(""),s=a(l,2),u=s[0],d=s[1],f=(0,o.useState)(""),p=a(f,2),A=p[0],h=p[1];return i.default.createElement("div",{className:"containerLittleFormChatbot"},i.default.createElement("input",{onChange:function(n){d(n.target.value)},type:"text",className:"inputFormChat",placeholder:"email"}),i.default.createElement("input",{onChange:function(n){c(n.target.value)},type:"text",className:"inputFormChat",placeholder:"numéro de téléphone"}),i.default.createElement("textarea",{className:"inputMessageFormChatbot",placeholder:"message",onChange:function(n){h(n.target.value)}}),i.default.createElement("button",{onClick:function(){!function(n){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)}(u)?alert("email non valide"):!function(n){return/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(n)}(r)?alert("numéro de téléphone non valide"):fetch("http://192.168.43.193:8000/api/mail/create",{method:"POST",headers:{"Content-Type":"application/json","Acces-Control-Allow-Origin":{origin:origin}},body:JSON.stringify({phone:r,email:u,message:A,category_id:n.categoryId,model_id:n.modelId,user_id:n.userId,view:0})})},className:"sendFormChatbot"},"Envoyer !"))}},function(n,e,t){var r=t(1),a=t(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});n.exports=i},function(n,e,t){(e=t(2)(!1)).push([n.i,".containerLittleFormChatbot{\n    margin: 0;\n    height: 450px;\n    margin-top: 30px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.inputFormChat{\n    width: 80%;\n    border-radius: 30px;\n    height: 30px;\n    padding: 5px;\n    background-color: white;\n    box-shadow: inset 0px 0px 3px rgb(66, 66, 66);\n    border: none;\n    font-size: 15px;\n    font-family: 'Sen', sans-serif;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.inputMessageFormChatbot{\n    width: 80%;\n    border-radius: 15px;\n    height: 40%;\n    padding: 10px;\n    background-color: white;\n    box-shadow: inset 0px 0px 3px rgb(66, 66, 66);\n    border: none;\n    font-size: 15px;\n    font-family: 'Sen', sans-serif;\n    text-align: center;\n    margin-bottom: 20px;\n    font-size: 15px;\n    font-family: 'Sen', sans-serif;\n}\n\n.sendFormChatbot{\n    width: 100px;\n    height: 40px;\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n    font-size: 15px;\n    font-weight: 600;\n    font-family: 'Sen', sans-serif;\n    box-shadow: 0px 0px 10px 0px rgb(143, 109, 182);\n    color: #b36fff;\n    cursor: pointer;\n}",""]),n.exports=e},function(n,e,t){"use strict";t.r(e),e.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAvRJREFUWIXt2DFrFEEUB/D/8y5iuTuNnUXmERA0oCKksLARJYeSIAkxMUELEQs/gYVoJwh2NqJFhHAmwUQxSAiCpYLYiFY7iZ3YzPRJbsfCPY17M7t7u5fKe93em9n53czsvLsF+tGPfmRGzZcYHBycEULcE0IExpjP+zA2SSlvCiHuCCFgjPnqbOT6kJknAbxoX1tr55VS1wDYHuIWiGiq/UGr1ZrY2tpaTjc84OptrR39525Ec1LKBXi+UFUcANRqtVFXYycQwJeOuxJN9QBZc+EAwFr7zdXBN9hBZl4HcNZxo6ZS6iqAVgncEhGNO3Lvoyg6D2A7nfDN4DaACwA20olkJpeQ8YB1idtIxurAAfnLNcDMawDOpRPW2hWl1CSA3Zx71KWUiz5cFEUNADu+zkX2UxZyTSk1loGsSylXiajh6TuehQP8S7w3dqIoalhr19IJImpIKVcB1B39BnJwY3k4oLsnspvZqDLrpYGZSPzdT+jBvi0NbCOdm95a+5aI6hm4CXR5PJU9dLOOjY6ocHZWrgq5yAQ3jZJ1vJvDtmNsY8xyGIZDRHRsP3BAsWMmKywReZctyVX6gVFlBg8w8zyAmYw2w0II1lqvlB2kLJCY+Tmyce0YFkIc0Vq/LjNQGSAx81MAc+lEcsx8ByBTqRMJ8tV+A9u4647chlLqotZ6QQgx4kEe1lp3lMyeAZn5mQuXlK9L+F3qYq1104M83S2yMJCZHwO44cGla2ustW6GYXiSiIaqIAsBE9wtB25FKXUZ7toaG2MWwzA85UEGWuv1ysAcXF5tbSOPE9HRVG6kCDITmIFrKqWu5OD2IpfLIr1AZn4E4LYHNw0gLoD70y0HeUhr/a4wkJlnATxw4OaVUrMoV1uzaveZIAh+GmM+pTsV+uO+B1f17UJLKTVtrW2mE0Q04urgA35IXT/p4asP60LGcfzG1di5xMaYj0EQRABqRPRQKXW/B7D0GC/DMPwBYJeI7m5ubi71eox+9OO/iF8cD50K8BSZdAAAAhNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC44MCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPnRob21hcyBkcnlqYXJkPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+5X1UMQAAAABJRU5ErkJggg=="},function(n,e,t){"use strict";t.r(e),e.default="data:image/png;base64,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AAITaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJyB4OnhtcHRrPSdJbWFnZTo6RXhpZlRvb2wgMTAuODAnPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj50aG9tYXMgZHJ5amFyZDwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PuV9VDEAAAAASUVORK5CYII="},function(n,e,t){var r=t(1),a=t(11);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});n.exports=i},function(n,e,t){var r=t(2),a=t(12),o=t(13);e=r(!1);var i=a(o);e.push([n.i,".containerIconChat{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    bottom: 5%;\n    right: 8%;\n    border-radius: 50%;\n    box-shadow: 0px 0px 5px #6d6d6d;\n    padding: 5px;\n    background-color: #ffffff;\n    border: 3px #b36fff solid;\n}\n\n.iconChat{\n    width: 60px;\n    height: auto;\n    background-color: #b36fff;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.contentTextIconChat{\n    display: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    background-image: url("+i+");\n    width: 220px;\n    height: 90px;\n    right: 50%;\n    bottom: 30%;\n    animation: textIcon 7s;\n} @keyframes textIcon{\n    0%{\n        opacity: 100%\n    }\n    85%{\n        opacity: 100%;\n    }\n    100%{\n        opacity: 0%;\n        display: none;\n    }\n}\n\n.questionPrint{\n    margin: 0;\n}\n\n.textIconCard{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 15px;\n    width: 70%;\n    margin: 0;\n    text-align: center;\n    margin-right: 8px;\n    margin-top: 5px;\n    font-family: 'Varela Round', sans-serif;\n}\n\n\n.textQuest{\n    margin: 0;\n    font-family: 'Sen', sans-serif;\n    font-size: 18px;\n    overflow: hidden;\n}\n\n\n.containerChatbot{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    height: 500px;\n    width: 320px;\n    position: fixed;\n    bottom: 8%;\n    right: 4%;\n    border-radius: 15px;\n    box-shadow: 0px 0px 15px #b8b8b8;\n    padding: 5px;\n    background: rgb(216,181,255);\n    background: linear-gradient(0deg, rgb(196, 147, 255) 0%, rgb(207, 164, 255) 100%);\n    overflow: auto;\n}\n\n.contentChatbot{\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: column;\n    height: 95%;\n    width: 100%;\n    margin-top: 30px;\n    overflow: auto;\n}\n\n.contentIcon{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.headChatbot{\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    flex-direction: row;\n    position: absolute;\n    width: 320px;\n    background-color: white;\n    height: 30px;\n    padding: 5px;\n    margin-top: -5px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    z-index: 2;\n    box-shadow: 0px 4px 5px rgb(174, 134, 219);\n}\n\n.crossChatbot{\n    height: 18px;\n    width: auto;\n    background-color: rgb(255, 111, 86);\n    padding: 5px;\n    border-radius: 50%;\n    margin-left: 5px;\n    cursor: pointer;\n}\n\n.sortouch{\n    font-family: 'Lobster', cursive;\n    color: #b36fff;\n    font-size: 22px;\n    text-decoration: none;\n    margin-left: 55%;\n    letter-spacing: 1px;\n}\n\n.contentLittleQuestChat{\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    flex-direction: row;\n    width: 210px;\n    min-height: 80px;\n    border-radius: 10px;\n    padding: 20px;\n    padding-right: 60px;\n    margin-top: 35px;\n    margin-bottom: 10px;\n    background-color: #fdfbfb;\n    position: relative;\n}\n\n\n.logoChat{\n    width: 40px;\n    height: auto;\n    background-color: #b36fff;\n    border-radius: 50%;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n\n\n.contentResponseChat{\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    width: 40%;\n    margin-left: 10%;\n    margin-bottom: 10px;\n    border-radius: 15px;\n    padding: 10px;\n}\n\n.containerLittleCardResChat{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(255, 240, 242);\n    box-shadow: -4px -3px 2px 0px #ffffff, 2px 2px 7px 0px rgb(158, 122, 199);\n    margin: 15px;\n    margin-right: 0;\n    margin-left: 0;\n    padding: 10px 20px 10px 20px;\n    border-radius: 25px;\n    cursor: pointer;\n}\n\n.containerLittleCardResChat:hover{\n    background-color: rgb(252, 235, 235);\n}\n\n.containerLittleCardResChat:active{\n    box-shadow: inset -5px -4px 4px 0px #c9c9c9, inset 2px 2px 9px 0px #ffffff;\n}\n\n.containerLittleCardResChatActive{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(252, 235, 235);\n    box-shadow: inset 1px 1px 4px 0px #868686, inset -3px -3px 2px 0px #ffffff;\n    padding: 10px 20px 10px 20px;\n    border-radius: 25px;\n    cursor: pointer;\n    width: 100%;\n}\n\n.contentResponseChat{\n    width: 75%;\n    margin-left: 0;\n    max-height: 50%;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.containerLittleCardResChat{\n    width: 80%;\n    text-align: center;\n    margin-left: 0;\n}\n\n.textCardResChat{\n    font-size: 17px;\n    font-family: 'Sen', sans-serif;\n}\n\n.contentLittleDestinationChat{\n    width: 100%;\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default="data:image/png;base64,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"}]);