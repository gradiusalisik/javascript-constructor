!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var f=s(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:m(d,e),references:1}),r.push(l)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(t,e){var n,r,o;if(e.singleton){var i=h++;n=v||(v=u(e)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=c(t,e),u=0;u<n.length;u++){var l=s(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r)()(!1);o.push([t.i,"#app {\n  position: relative;\n}\n\n.content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 200px;\n}\n\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 200px;\n  z-index: 100;\n  padding: 10px;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n  overflow-y: auto;\n}\n",""]),e.default=o},function(t,e,n){"use strict";n.r(e);var r=n.p+"f435046c35f1078da00f1ca7fc1ca6ce.jpg";function o(t,e=""){return`<div class="row" style="${"margin: 0; "+e}">${t}</div>`}function i(t,e){return`<div class="col-sm" style="${e}">${t}</div>`}function a(t={}){return Object.keys(t).map(e=>`${e}: ${t[e]}`).join(";")}class s{constructor(t,e){this.value=t,this.options=e}toHTML(){throw new Error("Метод toHTML должен быть реализован!")}}class c extends s{constructor(t,e){super(t,e)}toHTML(){const{tag:t="h2",styles:e}=this.options;return o(i(`\n        <${t}>${this.value}</${t}>\n    `),e)}}class u extends s{constructor(t,e){super(t,e)}toHTML(){const{styles:t}=this.options;return o(i(`\n        <p style="margin-bottom: 0">\n          ${this.value}\n        </p>\n    `),t)}}const l=[new c("Конструктор сайтов на чистом JavaScript!",{tag:"h2",styles:a({background:"linear-gradient(to right, #ff0099, #493240)",color:"#fff",padding:"1.5rem","text-align":"center"})}),new class extends s{constructor(t,e){super(t,e)}toHTML(){const{alt:t,styles:e,imageStyles:n}=this.options;return o(i(`<img style="${n}" src="${this.value}" alt="${t}" />`,e))}}(r,{alt:"my image",styles:a({padding:"2rem 0",display:"flex","justify-content":"center"}),imageStyles:"width: 500px; height: auto;"}),new class extends s{constructor(t,e){super(t,e)}toHTML(){const{styles:t}=this.options;return o(this.value.map(t=>i(t)).join(" "),t)}}(["Приложение на чистом JavaScript, без использования библиотек","Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс","JavaScript - это просто, интересно. Научись создавать любые UI своими руками"],{styles:a({padding:"2rem 0",color:"#fff",background:"linear-gradient(to bottom, #8e2de2, #4a00e0)","font-weight":"bold"})}),new u('Крутые видео и уроки по JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!',{styles:a({background:"linear-gradient(to left, #f2994a, #f2c94c)","font-weight":"bold",padding:"1rem"})})];function f(t){return`\n    <form name="${t}">\n      <h5>${t}</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value" />\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="styles" />\n      </div>\n      <button type='submit' class="btn btn-primary brn-sm">Добавить</button>\n    </form>\n    <hr />\n  `}n(1);const d=new class{constructor(t){this.$el=document.querySelector(t)}render(t){this.$el.innerHTML="",t.forEach(t=>{this.$el.insertAdjacentHTML("beforeend",t.toHTML())})}}("#site");new class{constructor(t,e){this.$el=document.querySelector(t),this.update=e,this.init()}init(){this.$el.addEventListener("submit",this.addBlock.bind(this)),this.$el.innerHTML=this.template}get template(){return[f("text"),f("title")].join(" ")}addBlock(t){t.preventDefault();const e=t.target.name,n=t.target.value.value,r=t.target.styles.value,o=new("text"===e?u:c)(n,{styles:r});this.update(o),t.target.value.value="",t.target.styles.value=""}}("#panel",t=>{l.push(t),d.render(l)}),d.render(l)}]);