window.AColorPicker=function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){function i(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var o=n(r);return[i].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[i].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(e,t,i){function n(e,t){for(var i=0;i<e.length;i++){var n=e[i],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(u(n.parts[o],t))}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(u(n.parts[o],t));f[n.id]={id:n.id,refs:1,parts:a}}}}function r(e,t){for(var i=[],n={},r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],s=o[1],l=o[2],c=o[3],u={css:s,media:l,sourceMap:c};n[a]?n[a].parts.push(u):i.push(n[a]={id:a,parts:[u]})}return i}function o(e,t){var i=b(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=F[F.length-1];if("top"===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),F.push(t);else if("bottom"===e.insertAt)i.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=b(e.insertInto+" "+e.insertAt.before);i.insertBefore(t,r)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=F.indexOf(e);t>=0&&F.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),o(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),o(e,t),t}function c(e,t){Object.keys(t).forEach(function(i){e.setAttribute(i,t[i])})}function u(e,t){var i,n,r,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var c=m++;i=g||(g=s(t)),n=h.bind(null,i,c,!1),r=h.bind(null,i,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=l(t),n=d.bind(null,i,t),r=function(){a(i),i.href&&URL.revokeObjectURL(i.href)}):(i=s(t),n=p.bind(null,i),r=function(){a(i)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}function h(e,t,i,n){var r=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=k(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t){var i=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function d(e,t,i){var n=i.css,r=i.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(n=y(n)),r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var f={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(i){if(void 0===t[i]){var n=e.call(this,i);if(n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[i]=n}return t[i]}}(function(e){return document.querySelector(e)}),g=null,m=0,F=[],y=i(5);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=r(e,t);return n(i,t),function(e){for(var o=[],a=0;a<i.length;a++){var s=i[a],l=f[s.id];l.refs--,o.push(l)}if(e){n(r(e,t),t)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete f[l.id]}}}};var k=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,i){return e?e instanceof HTMLElement?e:e instanceof NodeList?e[0]:"string"==typeof e?document.querySelector(e):e.jquery?e.get(0):i?t:null:t}function a(e){var t=e.getContext("2d"),i=+e.width,n=+e.height,r=t.createLinearGradient(1,1,1,n-1);return r.addColorStop(0,"white"),r.addColorStop(1,"black"),{setHue:function(e){var o=t.createLinearGradient(0,0,i-1,0);o.addColorStop(0,"hsla("+e+", 100%, 50%, 0)"),o.addColorStop(1,"hsla("+e+", 100%, 50%, 1)"),t.fillStyle=r,t.fillRect(0,0,i,n),t.fillStyle=o,t.globalCompositeOperation="multiply",t.fillRect(0,0,i,n),t.globalCompositeOperation="source-over"},grabColor:function(e,i){return t.getImageData(e,i,1,1).data},findColor:function(e,r,o){for(var a=4*i,s=t.getImageData(0,0,i,n).data,l=[-1,-1],c=0;c<s.length;c+=4)if(Math.abs(s[c]-e)<=5&&Math.abs(s[c+1]-r)<=5&&Math.abs(s[c+2]-o)<=5){l=[c%a/4,Math.floor(c/a)];break}return l}}}function s(e){if(e){var t=b.COLOR_NAMES[e.toString().toLowerCase()],i=/^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F]))|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})))\s*$/i.exec(t||e)||[],n=v(i,10),r=n[3],o=n[4],a=n[5],s=n[7],l=n[8],c=n[9];if(void 0!==r)return[parseInt(r+r,16),parseInt(o+o,16),parseInt(a+a,16)];if(void 0!==s)return[parseInt(s,16),parseInt(l,16),parseInt(c,16)]}}function l(e){if(e){var t=/^rgb\((\d+),(\d+),(\d+)\)/i.exec(e)||[],i=v(t,4),n=i[0],r=i[1],o=i[2],a=i[3];return n?[(0,b.limit)(r,0,255),(0,b.limit)(o,0,255),(0,b.limit)(a,0,255)]:void 0}}function c(e){if(e){var t=/^rgba\((\d+),(\d+),(\d+),(\d*(.\d+)?)\)/i.exec(e)||[],i=v(t,5),n=i[0],r=i[1],o=i[2],a=i[3],s=i[4];return n?[(0,b.limit)(r,0,255),(0,b.limit)(o,0,255),(0,b.limit)(a,0,255),(0,b.limit)(s,0,1)]:void 0}}function u(e){return Array.isArray(e)?e=[(0,b.limit)(e[0],0,255),(0,b.limit)(e[1],0,255),(0,b.limit)(e[2],0,255)]:s(e)||l(e)}function h(e){if(Array.isArray(e))return e=[(0,b.limit)(e[0],0,255),(0,b.limit)(e[1],0,255),(0,b.limit)(e[2],0,255),(0,b.limit)((0,b.nvl)(e[3],1),0,1)];var t=s(e)||l(e)||c(e);return t&&3===t.length&&t.push(1),t}function p(e,t,i,n){t["on"+i]=n&&"function"==typeof n?function(){n.call.apply(n,[null,e].concat(Array.prototype.slice.call(arguments)))}:null}function d(e){var t=new R(e),i={};return{get element(){return t.element},get rgb(){return[t.R,t.G,t.B]},set rgb(e){var i=v(e,3),n=i[0],r=i[1],o=i[2],a=[(0,b.limit)(n,0,255),(0,b.limit)(r,0,255),(0,b.limit)(o,0,255)];n=a[0],r=a[1],o=a[2],t.onValueChanged(A,[n,r,o,1])},get hsl(){return[t.H,t.S,t.L]},set hsl(e){var i=v(e,3),n=i[0],r=i[1],o=i[2],a=[(0,b.limit)(n,0,360),(0,b.limit)(r,0,100),(0,b.limit)(o,0,100)];n=a[0],r=a[1],o=a[2],t.onValueChanged(H,[n,r,o,1])},get rgbhex(){return(0,b.rgbToHex)(t.R,t.G,t.B)},get rgba(){return[t.R,t.G,t.B,t.A]},set rgba(e){var i=v(e,4),n=i[0],r=i[1],o=i[2],a=i[3],s=[(0,b.limit)(n,0,255),(0,b.limit)(r,0,255),(0,b.limit)(o,0,255),(0,b.limit)(a,0,1)];n=s[0],r=s[1],o=s[2],a=s[3],t.onValueChanged(A,[n,r,o,a])},get hsla(){return[t.H,t.S,t.L,t.A]},set hsla(e){var i=v(e,4),n=i[0],r=i[1],o=i[2],a=i[3],s=[(0,b.limit)(n,0,360),(0,b.limit)(r,0,100),(0,b.limit)(o,0,100),(0,b.limit)(a,0,1)];n=s[0],r=s[1],o=s[2],a=s[3],t.onValueChanged(H,[n,r,o,a])},get color(){return 1===t.A?this.rgbhex:"rgba("+t.R+","+t.G+","+t.B+","+t.A+")"},set color(e){t.onValueChanged(E,e)},get onchange(){return i.change},set onchange(e){p(this,t,"change",e),i.change=e},get oncoloradd(){return i.coloradd},set oncoloradd(e){p(this,t,"coloradd",e),i.coloradd=e},get oncolorremove(){return i.colorremove},set oncolorremove(e){p(this,t,"colorremove",e),i.colorremove=e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.PALETTE_MATERIAL_CHROME=t.PALETTE_MATERIAL_500=t.COLOR_NAMES=t.intToRgb=t.rgbToInt=t.rgbToHsl=t.hslToRgb=t.rgbToHex=t.parseColorToRgba=t.parseColorToRgb=t.createPicker=void 0;var f=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),v=function(){function e(e,t){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();i(3);var b=i(6),g=window.navigator.userAgent.indexOf("Edge")>-1,m=window.navigator.userAgent.indexOf("rv:")>-1,F={attachTo:"body",showHSL:!0,showRGB:!0,showHEX:!0,showAlpha:!1,color:"#ff0000",palette:null,paletteEditable:!1},y=[200,150],k=[150,16],B=k,E="COLOR",A="RGBA_USER",H="HSLA_USER",C='<div class="a-color-picker-row a-color-picker-stack">\n                            <canvas class="a-color-picker-sl a-color-picker-transparent"></canvas>\n                            <div class="a-color-picker-dot"></div>\n                        </div>\n                        <div class="a-color-picker-row">\n                            <div class="a-color-picker-stack a-color-picker-transparent a-color-picker-circle">\n                                <div class="a-color-picker-preview">\n                                    <input class="a-color-picker-clipbaord" type="text">\n                                </div>\n                            </div>\n                            <div class="a-color-picker-column">\n                                <div class="a-color-picker-cell a-color-picker-stack">\n                                    <canvas class="a-color-picker-h"></canvas>\n                                    <div class="a-color-picker-dot"></div>\n                                </div>\n                                <div class="a-color-picker-cell a-color-picker-stack" show-on-alpha>\n                                    <canvas class="a-color-picker-a a-color-picker-transparent"></canvas>\n                                    <div class="a-color-picker-dot"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-hsl" show-on-hsl>\n                            <label>H</label>\n                            <input name="H" type="number" maxlength="3" min="0" max="360" value="0">\n                            <label>S</label>\n                            <input name="S" type="number" maxlength="3" min="0" max="100" value="0">\n                            <label>L</label>\n                            <input name="L" type="number" maxlength="3" min="0" max="100" value="0">\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-rgb" show-on-rgb>\n                            <label>R</label>\n                            <input name="R" type="number" maxlength="3" min="0" max="255" value="0">\n                            <label>G</label>\n                            <input name="G" type="number" maxlength="3" min="0" max="255" value="0">\n                            <label>B</label>\n                            <input name="B" type="number" maxlength="3" min="0" max="255" value="0">\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-single-input" show-on-single-input>\n                            <label>HEX</label>\n                            <input name="RGBHEX" type="text" select-on-focus>\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-palette"></div>',R=function(){function e(t){r(this,e);var i=o(t);if(i?this.options=Object.assign({},F,{attachTo:t}):(this.options=Object.assign({},F,t),i=o(this.options.attachTo)),!i)throw"Container not found: "+this.options.attachTo;this.H=0,this.S=0,this.L=0,this.R=0,this.G=0,this.B=0,this.A=1,this.element=document.createElement("div"),this.element.className="a-color-picker",this.options.showRGB||(this.element.className+=" hide-rgb"),this.options.showHSL||(this.element.className+=" hide-hsl"),this.options.showHEX||(this.element.className+=" hide-single-input"),this.options.showAlpha||(this.element.className+=" hide-alpha"),this.element.innerHTML=C,i.appendChild(this.element);var n=this.element.querySelector(".a-color-picker-h");this.setupHueCanvas(n),this.hueBarHelper=a(n),this.huePointer=this.element.querySelector(".a-color-picker-h+.a-color-picker-dot");var s=this.element.querySelector(".a-color-picker-sl");this.setupSlCanvas(s),this.slBarHelper=a(s),this.slPointer=this.element.querySelector(".a-color-picker-sl+.a-color-picker-dot"),this.preview=this.element.querySelector(".a-color-picker-preview"),this.setupClipboard(this.preview.querySelector(".a-color-picker-clipbaord")),this.setupInput(this.inputH=this.element.querySelector(".a-color-picker-hsl>input[name=H]")),this.setupInput(this.inputS=this.element.querySelector(".a-color-picker-hsl>input[name=S]")),this.setupInput(this.inputL=this.element.querySelector(".a-color-picker-hsl>input[name=L]")),this.setupInput(this.inputR=this.element.querySelector(".a-color-picker-rgb>input[name=R]")),this.setupInput(this.inputG=this.element.querySelector(".a-color-picker-rgb>input[name=G]")),this.setupInput(this.inputB=this.element.querySelector(".a-color-picker-rgb>input[name=B]")),this.setupInput(this.inputRGBHEX=this.element.querySelector("input[name=RGBHEX]")),this.setPalette(this.element.querySelector(".a-color-picker-palette")),this.setupAlphaCanvas(this.element.querySelector(".a-color-picker-a")),this.alphaPointer=this.element.querySelector(".a-color-picker-a+.a-color-picker-dot"),this.onValueChanged(E,this.options.color)}return f(e,[{key:"setupHueCanvas",value:function(e){var t=this;e.width=k[0],e.height=k[1];for(var i=e.getContext("2d"),n=i.createLinearGradient(0,0,k[0],0),r=0;r<=1;r+=1/360)n.addColorStop(r,"hsl("+360*r+", 100%, 50%)");i.fillStyle=n,i.fillRect(0,0,k[0],k[1]);var o=function(i){var n=(0,b.limit)(i.clientX-e.getBoundingClientRect().left,0,k[0]),r=Math.round(360*n/k[0]);t.huePointer.style.left=n-7+"px",t.onValueChanged("H",r)},a=function e(){document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",e)};e.addEventListener("mousedown",function(e){o(e),document.addEventListener("mousemove",o),document.addEventListener("mouseup",a)})}},{key:"setupSlCanvas",value:function(e){var t=this;e.width=y[0],e.height=y[1];var i=function(i){var n=(0,b.limit)(i.clientX-e.getBoundingClientRect().left,0,y[0]-1),r=(0,b.limit)(i.clientY-e.getBoundingClientRect().top,0,y[1]-1),o=t.slBarHelper.grabColor(n,r);t.slPointer.style.left=n-7+"px",t.slPointer.style.top=r-7+"px",t.onValueChanged("RGB",o)},n=function e(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)};e.addEventListener("mousedown",function(e){i(e),document.addEventListener("mousemove",i),document.addEventListener("mouseup",n)})}},{key:"setupAlphaCanvas",value:function(e){var t=this;e.width=B[0],e.height=B[1];var i=e.getContext("2d"),n=i.createLinearGradient(0,0,e.width-1,0);n.addColorStop(0,"hsla(0, 0%, 50%, 0)"),n.addColorStop(1,"hsla(0, 0%, 50%, 1)"),i.fillStyle=n,i.fillRect(0,0,B[0],B[1]);var r=function(i){var n=(0,b.limit)(i.clientX-e.getBoundingClientRect().left,0,B[0]),r=+(n/B[0]).toFixed(2);t.alphaPointer.style.left=n-7+"px",t.onValueChanged("ALPHA",r)},o=function e(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",e)};e.addEventListener("mousedown",function(e){r(e),document.addEventListener("mousemove",r),document.addEventListener("mouseup",o)})}},{key:"setupInput",value:function(e){var t=this,i=+e.min,n=+e.max,r=e.name;e.hasAttribute("select-on-focus")&&e.addEventListener("focus",function(){e.select()}),"text"===e.type?e.addEventListener("change",function(){t.onValueChanged(r,e.value)}):((g||m)&&e.addEventListener("keydown",function(o){"Up"===o.key?(e.value=(0,b.limit)(+e.value+1,i,n),t.onValueChanged(r,e.value),o.returnValue=!1):"Down"===o.key&&(e.value=(0,b.limit)(+e.value-1,i,n),t.onValueChanged(r,e.value),o.returnValue=!1)}),e.addEventListener("change",function(){var o=+e.value;t.onValueChanged(r,(0,b.limit)(o,i,n))}))}},{key:"setupClipboard",value:function(e){var t=this;e.title="click to copy",e.addEventListener("click",function(i){e.value=(0,b.rgbToHex)(t.R,t.G,t.B),e.select(),document.execCommand("copy")})}},{key:"setPalette",value:function(e){var t=this,i=(0,b.ensureArray)(this.options.palette);if(this.options.paletteEditable||i.length>0){var r=function(i,n,r){var o=e.querySelector('.a-color-picker-palette-color[data-color="'+i+'"]')||document.createElement("div");o.className="a-color-picker-palette-color",o.style.backgroundColor=i,o.setAttribute("data-color",i),o.title=i,e.insertBefore(o,n),r&&t.onPaletteColorAdd(i)},o=function(i,n){i?(e.removeChild(i),n&&t.onPaletteColorRemove(i.getAttribute("data-color"))):(e.querySelectorAll(".a-color-picker-palette-color[data-color]").forEach(function(t){e.removeChild(t)}),n&&t.onPaletteColorRemove())};if(i.map(function(e){return e&&u(e)}).filter(function(e){return!!e}).forEach(function(e){return r(b.rgbToHex.apply(void 0,n(e)))}),this.options.paletteEditable){var a=document.createElement("div");a.className="a-color-picker-palette-color a-color-picker-palette-add",a.innerHTML="+",e.appendChild(a)}e.addEventListener("click",function(e){/a-color-picker-palette-add/.test(e.target.className)?e.shiftKey?o(null,!0):r((0,b.rgbToHex)(t.R,t.G,t.B),e.target,!0):/a-color-picker-palette-color/.test(e.target.className)&&(e.shiftKey?o(e.target,!0):t.onValueChanged(E,e.target.getAttribute("data-color")))})}else e.style.display="none"}},{key:"onValueChanged",value:function(e,t){switch(e){case"H":this.H=t;var i=(0,b.hslToRgb)(this.H,this.S,this.L),n=v(i,3);this.R=n[0],this.G=n[1],this.B=n[2],this.slBarHelper.setHue(t),this.updatePointerH(this.H),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"S":this.S=t;var r=(0,b.hslToRgb)(this.H,this.S,this.L),o=v(r,3);this.R=o[0],this.G=o[1],this.B=o[2],this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"L":this.L=t;var a=(0,b.hslToRgb)(this.H,this.S,this.L),l=v(a,3);this.R=l[0],this.G=l[1],this.B=l[2],this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"R":this.R=t;var c=(0,b.rgbToHsl)(this.R,this.G,this.B),u=v(c,3);this.H=u[0],this.S=u[1],this.L=u[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"G":this.G=t;var p=(0,b.rgbToHsl)(this.R,this.G,this.B),d=v(p,3);this.H=d[0],this.S=d[1],this.L=d[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"B":this.B=t;var f=(0,b.rgbToHsl)(this.R,this.G,this.B),g=v(f,3);this.H=g[0],this.S=g[1],this.L=g[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"RGB":var m=v(t,3);this.R=m[0],this.G=m[1],this.B=m[2];var F=(0,b.rgbToHsl)(this.R,this.G,this.B),y=v(F,3);this.H=y[0],this.S=y[1],this.L=y[2],this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case A:var k=v(t,4);this.R=k[0],this.G=k[1],this.B=k[2],this.A=k[3];var B=(0,b.rgbToHsl)(this.R,this.G,this.B),C=v(B,3);this.H=C[0],this.S=C[1],this.L=C[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B),this.updatePointerA(this.A);break;case H:var R=v(t,4);this.H=R[0],this.S=R[1],this.L=R[2],this.A=R[3];var L=(0,b.hslToRgb)(this.H,this.S,this.L),x=v(L,3);this.R=x[0],this.G=x[1],this.B=x[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B),this.updatePointerA(this.A);break;case"RGBHEX":var S=s(t)||[this.R,this.G,this.B],w=v(S,3);this.R=w[0],this.G=w[1],this.B=w[2];var G=(0,b.rgbToHsl)(this.R,this.G,this.B),T=v(G,3);this.H=T[0],this.S=T[1],this.L=T[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B);break;case E:var D=h(t)||[0,0,0,1],I=v(D,4);this.R=I[0],this.G=I[1],this.B=I[2],this.A=I[3];var j=(0,b.rgbToHsl)(this.R,this.G,this.B),O=v(j,3);this.H=O[0],this.S=O[1],this.L=O[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B),this.updatePointerA(this.A);break;case"ALPHA":this.A=t}this.onColorChanged(this.R,this.G,this.B,this.A)}},{key:"onColorChanged",value:function(e,t,i,n){this.preview.style.backgroundColor=1===n?"rgb("+e+","+t+","+i+")":"rgba("+e+","+t+","+i+","+n+")",this.onchange&&this.onchange()}},{key:"onPaletteColorAdd",value:function(e){this.oncoloradd&&this.oncoloradd(e)}},{key:"onPaletteColorRemove",value:function(e){this.oncolorremove&&this.oncolorremove(e)}},{key:"updateInputHSL",value:function(e,t,i){this.inputH.value=e,this.inputS.value=t,this.inputL.value=i}},{key:"updateInputRGB",value:function(e,t,i){this.inputR.value=e,this.inputG.value=t,this.inputB.value=i}},{key:"updateInputRGBHEX",value:function(e,t,i){this.inputRGBHEX.value=(0,b.rgbToHex)(e,t,i)}},{key:"updatePointerH",value:function(e){var t=k[0]*e/360;this.huePointer.style.left=t-7+"px"}},{key:"updatePointerSL",value:function(e,t,i){var n=(0,b.hslToRgb)(e,t,i),r=v(n,3),o=r[0],a=r[1],s=r[2],l=this.slBarHelper.findColor(o,a,s),c=v(l,2),u=c[0],h=c[1];u>=0&&(this.slPointer.style.left=u-7+"px",this.slPointer.style.top=h-7+"px")}},{key:"updatePointerA",value:function(e){var t=B[0]*e;this.alphaPointer.style.left=t-7+"px"}}]),e}();t.createPicker=d,t.parseColorToRgb=u,t.parseColorToRgba=h,t.rgbToHex=b.rgbToHex,t.hslToRgb=b.hslToRgb,t.rgbToHsl=b.rgbToHsl,t.rgbToInt=b.rgbToInt,t.intToRgb=b.intToRgb,t.COLOR_NAMES=b.COLOR_NAMES,t.PALETTE_MATERIAL_500=b.PALETTE_MATERIAL_500,t.PALETTE_MATERIAL_CHROME=b.PALETTE_MATERIAL_CHROME},function(e,t,i){var n=i(4);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0};r.transform=void 0;i(1)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,".a-color-picker {\n    background-color: #fafafa;\n    padding: 2px;\n    box-sizing: border-box;\n    display: inline-flex;\n    flex-direction: column;\n    user-select: none;\n    width: 208px;\n    font: 400 10px Helvetica,Arial,sans-serif;\n}\n\n.a-color-picker input {\n    box-sizing: border-box;\n}\n\n.a-color-picker-row {\n    padding: 2px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    user-select: none;\n}\n\n.a-color-picker-row:not(:first-child) {\n    border-top: solid 1px #eee;\n}\n\n.a-color-picker-column {\n    display: flex;\n    flex-direction: column;\n}\n\n.a-color-picker-cell {\n    flex: 1 1 auto;\n}\n\n.a-color-picker-stack {\n    position: relative;\n    overflow: hidden;\n}\n\n.a-color-picker-dot {\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    top: 0px;\n    left: 0px;\n    background: rgba(255, 255, 255, 0.59);\n    pointer-events: none;\n    border-radius: 50px;\n    border: solid 1px #074462;\n}\n\n.a-color-picker-h,\n.a-color-picker-a {\n    border-radius: 2px;\n}\n\n.a-color-picker-preview {\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    user-select: none;\n}\n\n.a-color-picker-circle {\n    border-radius: 50px;\n    border: solid 1px #eee;    \n}\n\n.a-color-picker-hsl,\n.a-color-picker-rgb,\n.a-color-picker-single-input {\n    justify-content: space-evenly;\n}\n\n.a-color-picker-hsl>label,\n.a-color-picker-rgb>label,\n.a-color-picker-single-input>label {\n    padding: 0 6px;\n    flex: 0 0 auto;\n}\n\n.a-color-picker-hsl>input,\n.a-color-picker-rgb>input,\n.a-color-picker-single-input>input {\n    text-align: center;\n    padding: 2px 0px;\n    width: 0;\n    flex: 1 1 auto;\n}\n\n.a-color-picker-transparent {\n    background-image: linear-gradient(to right, #f2eeee 1px, transparent 1px), linear-gradient(to bottom, #f2eeee 1px, transparent 1px);\n    background-size: 8px 8px;\n}\n\n.a-color-picker.hide-hsl [show-on-hsl],\n.a-color-picker.hide-rgb [show-on-rgb],\n.a-color-picker.hide-single-input [show-on-single-input],\n.a-color-picker.hide-alpha [show-on-alpha] {\n    display: none;\n}\n\n.a-color-picker-clipbaord {\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.a-color-picker-palette {\n    flex-flow: wrap;\n    flex-direction: row;\n    justify-content: flex-start;\n    padding: 2px 0px;\n}\n\n.a-color-picker-palette-color {\n    width: 15px;\n    height: 15px;\n    flex: 0 1 15px;\n    margin: 5px;\n    box-sizing: border-box;\n    cursor: pointer;\n    border-radius: 3px;\n    border: solid 1px rgba(203, 203, 203, 0.32);\n}\n\n.a-color-picker-palette-add {\n    text-align: center;\n    line-height: 13px;\n    color: #607D8B;\n}",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,n=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var o;return o=0===r.indexOf("//")?r:0===r.indexOf("/")?i+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(e,t,i){"use strict";function n(e,t,i){return e=+e,isNaN(e)?t:e<t?t:e>i?i:e}function r(e,t){return null===e||void 0===e?t:e}function o(e){return e?Array.from(e):[]}function a(e,t,i){var r=[n(e,0,255),n(t,0,255),n(i,0,255)];return e=r[0],t=r[1],i=r[2],"#"+("000000"+(e<<16|t<<8|i).toString(16)).slice(-6)}function s(e,t,i){var r=void 0,o=void 0,a=void 0,s=[n(e,0,360)/360,n(t,0,100)/100,n(i,0,100)/100];if(e=s[0],t=s[1],i=s[2],0==t)r=o=a=i;else{var l=function(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e},c=i<.5?i*(1+t):i+t-i*t,u=2*i-c;r=l(u,c,e+1/3),o=l(u,c,e),a=l(u,c,e-1/3)}return[255*r,255*o,255*a].map(Math.round)}function l(e,t,i){var r=[n(e,0,255)/255,n(t,0,255)/255,n(i,0,255)/255];e=r[0],t=r[1],i=r[2];var o=Math.max(e,t,i),a=Math.min(e,t,i),s=void 0,l=void 0,c=(o+a)/2;if(o==a)s=l=0;else{var u=o-a;switch(l=c>.5?u/(2-o-a):u/(o+a),o){case e:s=(t-i)/u+(t<i?6:0);break;case t:s=(i-e)/u+2;break;case i:s=(e-t)/u+4}s/=6}return[360*s,100*l,100*c].map(Math.round)}function c(e,t,i){return e<<16|t<<8|i}function u(e){return[e>>16&255,e>>8&255,255&e]}Object.defineProperty(t,"__esModule",{value:!0});var h={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4","indianred ":"#CD5C5C","indigo ":"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},p=["#F44336","#E91E63","#E91E63","#9C27B0","#9C27B0","#673AB7","#673AB7","#3F51B5","#3F51B5","#2196F3","#2196F3","#03A9F4","#03A9F4","#00BCD4","#00BCD4","#009688","#009688","#4CAF50","#4CAF50","#8BC34A","#8BC34A","#CDDC39","#CDDC39","#FFEB3B","#FFEB3B","#FFC107","#FFC107","#FF9800","#FF9800","#FF5722","#FF5722","#795548","#795548","#9E9E9E","#9E9E9E","#607D8B","#607D8B"],d=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"];t.COLOR_NAMES=h,t.PALETTE_MATERIAL_500=p,t.PALETTE_MATERIAL_CHROME=d,t.rgbToHex=a,t.hslToRgb=s,t.rgbToHsl=l,t.rgbToInt=c,t.intToRgb=u,t.limit=n,t.ensureArray=o,t.nvl=r}]);
