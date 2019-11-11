!function(t){var e={};
function n(r){if(e[r])return e[r].exports;
	var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){(function(n){var r,o,i,a={scope:{}};a.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},a.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:void 0!==n&&null!=n?n:t},a.global=a.getGlobal(this),a.SYMBOL_PREFIX="jscomp_symbol_",a.initSymbol=function(){a.initSymbol=function(){},a.global.Symbol||(a.global.Symbol=a.Symbol)},a.symbolCounter_=0,a.Symbol=function(t){return a.SYMBOL_PREFIX+(t||"")+a.symbolCounter_++},a.initSymbolIterator=function(){a.initSymbol();var t=a.global.Symbol.iterator;t||(t=a.global.Symbol.iterator=a.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&a.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return a.arrayIterator(this)}}),a.initSymbolIterator=function(){}},a.arrayIterator=function(t){var e=0;return a.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},a.iteratorPrototype=function(t){return a.initSymbolIterator(),(t={next:t})[a.global.Symbol.iterator]=function(){return this},t},a.array=a.array||{},a.iteratorFromArray=function(t,e){a.initSymbolIterator(),t instanceof String&&(t+="");var n=0,r={next:function(){if(n<t.length){var o=n++;return{value:e(o,t[o]),done:!1}}return r.next=function(){return{done:!0,value:void 0}},r.next()}};return r[Symbol.iterator]=function(){return r},r},a.polyfill=function(t,e,n,r){if(e){for(n=a.global,t=t.split("."),r=0;r<t.length-1;r++){var o=t[r];o in n||(n[o]={}),n=n[o]}(e=e(r=n[t=t[t.length-1]]))!=r&&null!=e&&a.defineProperty(n,t,{configurable:!0,writable:!0,value:e})}},a.polyfill("Array.prototype.keys",function(t){return t||function(){return a.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var s=this;o=[],void 0===(i="function"==typeof(r=function(){function t(t){if(!q.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var n=t.length,r=2<=arguments.length?arguments[1]:void 0,o=[],i=0;i<n;i++)if(i in t){var a=t[i];e.call(r,a,i,t)&&o.push(a)}return o}function n(t){return t.reduce(function(t,e){return t.concat(q.arr(e)?n(e):e)},[])}function r(e){return q.arr(e)?e:(q.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function o(t,e){return t.some(function(t){return t===e})}function i(t){var e,n={};for(e in t)n[e]=t[e];return n}function a(t,e){var n,r=i(t);for(n in t)r[n]=e.hasOwnProperty(n)?e[n]:t[n];return r}function u(t,e){var n,r=i(t);for(n in e)r[n]=q.und(t[n])?e[n]:t[n];return r}function l(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function c(t,e){return q.fnc(t)?t(e.target,e.id,e.total):t}function f(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function d(t,e){return q.dom(t)&&o(P,e)?"transform":q.dom(t)&&(t.getAttribute(e)||q.svg(t)&&t[e])?"attribute":q.dom(t)&&"transform"!==e&&f(t,e)?"css":null!=t[e]?"object":void 0}function p(t,n){switch(d(t,n)){case"transform":return function(t,n){var r=function(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}(n),r=-1<n.indexOf("scale")?1:0+r;if(!(t=t.style.transform))return r;for(var o=[],i=[],a=[],s=/(\w+)\((.+?)\)/g;o=s.exec(t);)i.push(o[1]),a.push(o[2]);return(t=e(a,function(t,e){return i[e]===n})).length?t[0]:r}(t,n);case"css":return f(t,n);case"attribute":return t.getAttribute(n)}return t[n]||0}function h(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=l(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(n[0],"")),n[0][0]){case"+":return e+t+r;case"-":return e-t+r;case"*":return e*t+r}}function m(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function g(t){t=t.points;for(var e,n=0,r=0;r<t.numberOfItems;r++){var o=t.getItem(r);0<r&&(n+=m(e,o)),e=o}return n}function y(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return m({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return g(t);case"polygon":var e=t.points;return g(t)+m(e.getItem(e.numberOfItems-1),e.getItem(0))}}function v(t,e){function n(n){return n=void 0===n?0:n,t.el.getPointAtLength(1<=e+n?e+n:0)}var r=n(),o=n(-1),i=n(1);switch(t.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(i.y-o.y,i.x-o.x)/Math.PI}}function w(t,e){var n,r=/-?\d*\.?\d+/g;if(n=q.pth(t)?t.totalLength:t,q.col(n))if(q.rgb(n)){var o=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=o?"rgba("+o[1]+",1)":n}else n=q.hex(n)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var n=parseInt(e[2],16),e=parseInt(e[3],16);return"rgba("+t+","+n+","+e+",1)"}(n):q.hsl(n)?function(t){function e(t,e,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:.5>n?e:n<2/3?t+(e-t)*(2/3-n)*6:t}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(n[1])/360;var r=parseInt(n[2])/100,o=parseInt(n[3])/100,n=n[4]||1;if(0==r)o=r=t=o;else{var i=.5>o?o*(1+r):o+r-o*r,a=2*o-i,o=e(a,i,t+1/3),r=e(a,i,t);t=e(a,i,t-1/3)}return"rgba("+255*o+","+255*r+","+255*t+","+n+")"}(n):void 0;else o=(o=l(n))?n.substr(0,n.length-o.length):n,n=e&&!/\s/g.test(n)?o+e:o;return{original:n+="",numbers:n.match(r)?n.match(r).map(Number):[0],strings:q.str(t)||e?n.split(r):[]}}function x(t){return e(t=t?n(q.arr(t)?t.map(r):r(t)):[],function(t,e,n){return n.indexOf(t)===e})}function S(t,e){var n=i(e);if(q.arr(t)){var o=t.length;2!==o||q.obj(t[0])?q.fnc(e.duration)||(n.duration=e.duration/o):t={value:t}}return r(t).map(function(t,n){return n=n?0:e.delay,t=q.obj(t)&&!q.pth(t)?t:{value:t},q.und(t.delay)&&(t.delay=n),t}).map(function(t){return u(t,n)})}function A(t,e){var n;return t.tweens.map(function(r){var o=(r=function(t,e){var n,r={};for(n in t){var o=c(t[n],e);q.arr(o)&&1===(o=o.map(function(t){return c(t,e)})).length&&(o=o[0]),r[n]=o}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(r,e)).value,i=p(e.target,t.name),a=n?n.to.original:i,a=q.arr(o)?o[0]:a,s=h(q.arr(o)?o[1]:o,a),i=l(s)||l(a)||l(i);return r.from=w(a,i),r.to=w(s,i),r.start=n?n.end:t.offset,r.end=r.start+r.delay+r.duration,r.easing=function(t){return q.arr(t)?T.apply(this,t):F[t]}(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,r.isPath=q.pth(o),r.isColor=q.col(r.from.original),r.isColor&&(r.round=1),n=r})}function E(t,e,n,r){var o="delay"===t;return e.length?(o?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):o?r.delay:n.offset+r.delay+r.duration}function b(t){var r,o=a(I,t),i=a(M,t),s=function(t){var e=x(t);return e.map(function(t,n){return{target:t,id:n,total:e.length}})}(t.targets),l=[],c=u(o,i);for(r in t)c.hasOwnProperty(r)||"targets"===r||l.push({name:r,offset:c.offset,tweens:S(t[r],i)});return t=function(t,r){return e(n(t.map(function(t){return r.map(function(e){var n=d(t.target,e.name);if(n){var r=A(e,t);e={type:n,property:e.name,animatable:t,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else e=void 0;return e})})),function(t){return!q.und(t)})}(s,l),u(o,{children:[],animatables:s,animations:t,duration:E("duration",t,o,i),delay:E("delay",t,o,i)})}function O(t){function n(){return window.Promise&&new Promise(function(t){return d=t})}function r(t){return h.reversed?h.duration-t:t}function o(t){for(var n=0,r={},o=h.animations,i=o.length;n<i;){var a=o[n],s=a.animatable,u=a.tweens,l=u.length-1,c=u[l];l&&(c=e(u,function(e){return t<e.end})[0]||c);for(var u=Math.min(Math.max(t-c.start-c.delay,0),c.duration)/c.duration,d=isNaN(u)?1:c.easing(u,c.elasticity),u=c.to.strings,p=c.round,l=[],m=void 0,m=c.to.numbers.length,g=0;g<m;g++){var y=void 0,y=c.to.numbers[g],w=c.from.numbers[g],y=c.isPath?v(c.value,d*y):w+d*(y-w);p&&(c.isColor&&2<g||(y=Math.round(y*p)/p)),l.push(y)}if(c=u.length)for(m=u[0],d=0;d<c;d++)p=u[d+1],g=l[d],isNaN(g)||(m=p?m+(g+p):m+(g+" "));else m=l[0];L[a.type](s.target,a.property,m,r,s.id),a.currentValue=m,n++}if(n=Object.keys(r).length)for(o=0;o<n;o++)C||(C=f(document.body,"transform")?"transform":"-webkit-transform"),h.animatables[o].target.style[C]=r[o].join(" ");h.currentTime=t,h.progress=t/h.duration*100}function i(t){h[t]&&h[t](h)}function a(){h.remaining&&!0!==h.remaining&&h.remaining--}function s(t){var e=h.duration,s=h.offset,f=s+h.delay,m=h.currentTime,g=h.reversed,y=r(t);if(h.children.length){var v=h.children,w=v.length;if(y>=h.currentTime)for(var x=0;x<w;x++)v[x].seek(y);else for(;w--;)v[w].seek(y)}(y>=f||!e)&&(h.began||(h.began=!0,i("begin")),i("run")),y>s&&y<e?o(y):(y<=s&&0!==m&&(o(0),g&&a()),(y>=e&&m!==e||!e)&&(o(e),g||a())),i("update"),t>=e&&(h.remaining?(l=u,"alternate"===h.direction&&(h.reversed=!h.reversed)):(h.pause(),h.completed||(h.completed=!0,i("complete"),"Promise"in window&&(d(),p=n()))),c=0)}t=void 0===t?{}:t;var u,l,c=0,d=null,p=n(),h=b(t);return h.reset=function(){var t=h.direction,e=h.loop;for(h.currentTime=0,h.progress=0,h.paused=!0,h.began=!1,h.completed=!1,h.reversed="reverse"===t,h.remaining="alternate"===t&&1===e?2:e,o(0),t=h.children.length;t--;)h.children[t].reset()},h.tick=function(t){u=t,l||(l=u),s((c+u-l)*O.speed)},h.seek=function(t){s(r(t))},h.pause=function(){var t=_.indexOf(h);-1<t&&_.splice(t,1),h.paused=!0},h.play=function(){h.paused&&(h.paused=!1,l=0,c=r(h.currentTime),_.push(h),j||H())},h.reverse=function(){h.reversed=!h.reversed,l=0,c=r(h.currentTime)},h.restart=function(){h.pause(),h.reset(),h.play()},h.finished=p,h.reset(),h.autoplay&&h.play(),h}var C,I={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},M={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},P="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),q={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return q.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||q.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return q.hex(t)||q.rgb(t)||q.hsl(t)}},T=function(){function t(t,e,n){return(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t}return function(e,n,r,o){if(0<=e&&1>=e&&0<=r&&1>=r){var i=new Float32Array(11);if(e!==n||r!==o)for(var a=0;11>a;++a)i[a]=t(.1*a,e,r);return function(a){if(e===n&&r===o)return a;if(0===a)return 0;if(1===a)return 1;for(var s=0,u=1;10!==u&&i[u]<=a;++u)s+=.1;var u=s+(a-i[--u])/(i[u+1]-i[u])*.1,l=3*(1-3*r+3*e)*u*u+2*(3*r-6*e)*u+3*e;if(.001<=l){for(s=0;4>s&&0!=(l=3*(1-3*r+3*e)*u*u+2*(3*r-6*e)*u+3*e);++s)var c=t(u,e,r)-a,u=u-c/l;a=u}else if(0===l)a=u;else{var u=s,s=s+.1,f=0;do{0<(l=t(c=u+(s-u)/2,e,r)-a)?s=c:u=c}while(1e-7<Math.abs(l)&&10>++f);a=c}return t(a,n,o)}}}}(),F=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,n){return 1-t(1-e,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,n){return.5>e?t(2*e,n)/2:1-t(-2*e+2,n)/2}]},o={linear:T(.25,.25,.75,.75)},i={};for(e in r)i.type=e,r[i.type].forEach(function(t){return function(e,r){o["ease"+t.type+n[r]]=q.fnc(e)?e:T.apply(s,e)}}(i)),i={type:i.type};return o}(),L={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,o){r[o]||(r[o]=[]),r[o].push(e+"("+n+")")}},_=[],j=0,H=function(){function t(){j=requestAnimationFrame(e)}function e(e){var n=_.length;if(n){for(var r=0;r<n;)_[r]&&_[r].tick(e),r++;t()}else cancelAnimationFrame(j),j=0}return t}();return O.version="2.2.0",O.speed=1,O.running=_,O.remove=function(t){t=x(t);for(var e=_.length;e--;)for(var n=_[e],r=n.animations,i=r.length;i--;)o(t,r[i].animatable.target)&&(r.splice(i,1),r.length||n.pause())},O.getValue=p,O.path=function(e,n){var r=q.str(e)?t(e)[0]:e,o=n||100;return function(t){return{el:r,property:t,totalLength:y(r)*(o/100)}}},O.setDashoffset=function(t){var e=y(t);return t.setAttribute("stroke-dasharray",e),e},O.bezier=T,O.easings=F,O.timeline=function(t){var e=O(t);return e.pause(),e.duration=0,e.add=function(n){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),r(n).forEach(function(n){var r=u(n,a(M,t||{}));r.targets=r.targets||t.targets,n=e.duration;var o=r.offset;r.autoplay=!1,r.direction=e.direction,r.offset=q.und(o)?n:h(o,n),e.began=!0,e.completed=!0,e.seek(r.offset),(r=O(r)).began=!0,r.completed=!0,r.duration>n&&(e.duration=r.duration),e.children.push(r)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},O.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},O})?r.apply(e,o):r)||(t.exports=i)}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(n){var r,o;/*! smooth-scroll v15.0.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),r=this;do{for(e=n.length;--e>=0&&n.item(e)!==r;);}while(e<0&&(r=r.parentElement));return r}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}if("function"==typeof window.CustomEvent)return!1;t.prototype=window.Event.prototype,window.CustomEvent=t}(),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var r=(new Date).getTime(),o=Math.max(0,16-(r-t)),i=window.setTimeout(function(){e(r+o)},o);return t=r+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),o=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}}),t},r=function(e){return parseInt(t.getComputedStyle(e).height,10)},o=function(t){var e;try{e=decodeURIComponent(t)}catch(n){e=t}return e},i=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),r=n.length,o=-1,i="",a=n.charCodeAt(0);++o<r;){if(0===(e=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=e>=1&&e<=31||127==e||0===o&&e>=48&&e<=57||1===o&&e>=48&&e<=57&&45===a?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?n.charAt(o):"\\"+n.charAt(o)}var s;try{s=decodeURIComponent("#"+i)}catch(t){s="#"+i}return s},a=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},s=function(t){return t?r(t)+t.offsetTop:0},u=function(e,n,r,o){if(n.emitEvents&&"function"==typeof t.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(i)}};return function(r,l){var c,f,d,p,h,m,g={cancelScroll:function(t){cancelAnimationFrame(m),m=null,t||u("scrollCancel",c)},animateScroll:function(r,o,i){var l=n(c||e,i||{}),f="[object Number]"===Object.prototype.toString.call(r),h=f||!r.tagName?null:r;if(f||h){var y=t.pageYOffset;l.header&&!d&&(d=document.querySelector(l.header)),p||(p=s(d));var v,w,x,S=f?r:function(e,n,r,o){var i=0;if(e.offsetParent)do{i+=e.offsetTop,e=e.offsetParent}while(e);return i=Math.max(i-n-r,0),o&&(i=Math.min(i,a()-t.innerHeight)),i}(h,p,parseInt("function"==typeof l.offset?l.offset(r,o):l.offset,10),l.clip),A=S-y,E=a(),b=0,O=function(t,e){var n=e.speedAsDuration?e.speed:Math.abs(t/1e3*e.speed);return e.durationMax&&n>e.durationMax?e.durationMax:e.durationMin&&n<e.durationMin?e.durationMin:n}(A,l),C=function(e,n){var i=t.pageYOffset;if(e==n||i==n||(y<n&&t.innerHeight+i)>=E)return g.cancelScroll(!0),function(e,n,r){0===e&&document.body.focus(),r||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,n))}(r,n,f),u("scrollStop",l,r,o),v=null,m=null,!0},I=function(e){v||(v=e),w=(b+=e-v)/parseInt(O,10),x=y+A*function(t,e){var n;return"easeInQuad"===t.easing&&(n=e*e),"easeOutQuad"===t.easing&&(n=e*(2-e)),"easeInOutQuad"===t.easing&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t.easing&&(n=e*e*e),"easeOutCubic"===t.easing&&(n=--e*e*e+1),"easeInOutCubic"===t.easing&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t.easing&&(n=e*e*e*e),"easeOutQuart"===t.easing&&(n=1- --e*e*e*e),"easeInOutQuart"===t.easing&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t.easing&&(n=e*e*e*e*e),"easeOutQuint"===t.easing&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t.easing&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),t.customEasing&&(n=t.customEasing(e)),n||e}(l,w=w>1?1:w),t.scrollTo(0,Math.floor(x)),C(x,S)||(m=t.requestAnimationFrame(I),v=e)};0===t.pageYOffset&&t.scrollTo(0,0),function(t,e,n){e||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:t.id},document.title,t===document.documentElement?"#top":"#"+t.id)}(r,f,l),u("scrollStart",l,r,o),g.cancelScroll(!0),t.requestAnimationFrame(I)}}},y=function(e){if(!("matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(f=e.target.closest(r))&&"a"===f.tagName.toLowerCase()&&!e.target.closest(c.ignore)&&f.hostname===t.location.hostname&&f.pathname===t.location.pathname&&/#/.test(f.href)){var n=i(o(f.hash)),a=c.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(a=a||"#top"!==n?a:document.documentElement)&&(e.preventDefault(),g.animateScroll(a,f))}},v=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)&&history.state.anchor){var e=document.querySelector(i(o(history.state.anchor)));e&&g.animateScroll(e,null,{updateURL:!1})}},w=function(t){h||(h=setTimeout(function(){h=null,p=s(d)},66))};return g.destroy=function(){c&&(document.removeEventListener("click",y,!1),t.removeEventListener("resize",w,!1),t.removeEventListener("popstate",v,!1),g.cancelScroll(),c=null,f=null,d=null,p=null,h=null,m=null)},g.init=function(r){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";g.destroy(),c=n(e,r||{}),d=c.header?document.querySelector(c.header):null,p=s(d),document.addEventListener("click",y,!1),d&&t.addEventListener("resize",w,!1),c.updateURL&&c.popstate&&t.addEventListener("popstate",v,!1)},g.init(l),g}}(o)}.apply(e,[]))||(t.exports=r)}).call(this,n(1))},function(t,e,n){"use strict";n.r(e);n(4);var r=n(2),o=n.n(r),i=n(0),a=n.n(i),s=(n(5),new o.a('a[href*="#"]',{easing:"easeInOutCubic",speed:800,speedAsDuration:!0}),document.querySelector("body")),u=document.querySelectorAll(".switch span");var l=document.querySelector(".lang--es"),c=document.querySelector(".lang--en");l.addEventListener("click",function(){s.className="",s.classList.add("in-spanish"),u.forEach(function(t){a.a.remove(t),a()({targets:t,duration:1500,easing:"easeOutExpo",translateY:"-50%"})})}),c.addEventListener("click",function(){s.className="",s.classList.add("in-english"),u.forEach(function(t){a.a.remove(t),a()({targets:t,duration:1500,easing:"easeOutExpo",translateY:0})})}),document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){a.a.timeline({easing:"easeOutExpo"}).add({targets:".hero__title .wrap span",duration:3e3,translateY:[0,0],delay:function(t,e){return 125*e}}).add({targets:".brand__name .wrap span, .brand__tagline .wrap span",duration:2e3,translateY:["100%",0],delay:function(t,e){return 50*e},offset:"-=2500"}).add({targets:".nav__item .wrap span, .hero__caption .wrap span",duration:2e3,translateY:["100%",0],delay:function(t,e){return 50*e},offset:"-=2500"})},1250)});new Waypoint({element:document.getElementById("about"),handler:function(){var t=this.element.querySelectorAll(".section__title-line"),e=this.element.querySelectorAll(".wrap span");a()({targets:t,easing:"easeOutExpo",width:[0,"100%"],delay:function(t,e){return 150*e}}),a()({targets:e,easing:"easeOutExpo",translateY:["100%","0%"],duration:1500,delay:function(t,e){return 50*e}}),this.destroy()},offset:"30%"}),new Waypoint({element:document.getElementById("work"),handler:function(){var t=this.element.querySelectorAll(".section__title-line"),e=this.element.querySelectorAll(".wrap span");a()({targets:t,easing:"easeOutExpo",width:[0,"100%"],delay:function(t,e){return 150*e}}),a()({targets:e,easing:"easeOutExpo",translateY:["100%","0%"],duration:1500,delay:function(t,e){return 50*e}}),this.destroy()},offset:"30%"}),new Waypoint({element:document.getElementById("contact"),handler:function(){var t=document.querySelectorAll(".langs .wrap span"),e=this.element.querySelectorAll(".section__title-line"),n=document.querySelectorAll("#contact .wrap span, .copyright .wrap span");a()({targets:t,easing:"easeOutExpo",translateY:["100%","0%"],duration:1500,delay:function(t,e){return 50*e}}),a()({targets:e,easing:"easeOutExpo",width:[0,"100%"],delay:function(t,e){return 150*e}}),a()({targets:n,easing:"easeOutExpo",translateY:["100%","0%"],duration:1500,delay:function(t,e){return 50*e}}),this.destroy()},offset:"30%"})},function(t,e,n){},function(t,e){
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";var t=0,e={};function n(r){if(!r)throw new Error("No options passed to Waypoint constructor");if(!r.element)throw new Error("No element option passed to Waypoint constructor");if(!r.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+t,this.options=n.Adapter.extend({},n.defaults,r),this.element=this.options.element,this.adapter=new n.Adapter(this.element),this.callback=r.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=n.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=n.Context.findOrCreateByElement(this.options.context),n.offsetAliases[this.options.offset]&&(this.options.offset=n.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),e[this.key]=this,t+=1}n.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},n.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},n.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete e[this.key]},n.prototype.disable=function(){return this.enabled=!1,this},n.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},n.prototype.next=function(){return this.group.next(this)},n.prototype.previous=function(){return this.group.previous(this)},n.invokeAll=function(t){var n=[];for(var r in e)n.push(e[r]);for(var o=0,i=n.length;o<i;o++)n[o][t]()},n.destroyAll=function(){n.invokeAll("destroy")},n.disableAll=function(){n.invokeAll("disable")},n.enableAll=function(){for(var t in n.Context.refreshAll(),e)e[t].enabled=!0;return this},n.refreshAll=function(){n.Context.refreshAll()},n.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},n.viewportWidth=function(){return document.documentElement.clientWidth},n.adapters=[],n.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},n.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=n}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}var e=0,n={},r=window.Waypoint,o=window.onload;function i(t){this.element=t,this.Adapter=r.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+e,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,e+=1,r.windowContext||(r.windowContext=!0,r.windowContext=new i(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}i.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},i.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),r=this.element==this.element.window;t&&e&&!r&&(this.adapter.off(".waypoints"),delete n[this.key])},i.prototype.createThrottledResizeHandler=function(){var t=this;function e(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,r.requestAnimationFrame(e))})},i.prototype.createThrottledScrollHandler=function(){var t=this;function e(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.waypoints",function(){t.didScroll&&!r.isTouch||(t.didScroll=!0,r.requestAnimationFrame(e))})},i.prototype.handleResize=function(){r.Context.refreshAll()},i.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var r=e[n],o=r.newScroll>r.oldScroll?r.forward:r.backward;for(var i in this.waypoints[n]){var a=this.waypoints[n][i];if(null!==a.triggerPoint){var s=r.oldScroll<a.triggerPoint,u=r.newScroll>=a.triggerPoint;(s&&u||!s&&!u)&&(a.queueTrigger(o),t[a.group.id]=a.group)}}}for(var l in t)t[l].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},i.prototype.innerHeight=function(){return this.element==this.element.window?r.viewportHeight():this.adapter.innerHeight()},i.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},i.prototype.innerWidth=function(){return this.element==this.element.window?r.viewportWidth():this.adapter.innerWidth()},i.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var r=0,o=t.length;r<o;r++)t[r].destroy()},i.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),o={};for(var i in this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var a=t[i];for(var s in this.waypoints[i]){var u,l,c,f,d=this.waypoints[i][s],p=d.options.offset,h=d.triggerPoint,m=0,g=null==h;d.element!==d.element.window&&(m=d.adapter.offset()[a.offsetProp]),"function"==typeof p?p=p.apply(d):"string"==typeof p&&(p=parseFloat(p),d.options.offset.indexOf("%")>-1&&(p=Math.ceil(a.contextDimension*p/100))),u=a.contextScroll-a.contextOffset,d.triggerPoint=Math.floor(m+u-p),l=h<a.oldScroll,c=d.triggerPoint>=a.oldScroll,f=!l&&!c,!g&&(l&&c)?(d.queueTrigger(a.backward),o[d.group.id]=d.group):!g&&f?(d.queueTrigger(a.forward),o[d.group.id]=d.group):g&&a.oldScroll>=d.triggerPoint&&(d.queueTrigger(a.forward),o[d.group.id]=d.group)}}return r.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},i.findOrCreateByElement=function(t){return i.findByElement(t)||new i(t)},i.refreshAll=function(){for(var t in n)n[t].refresh()},i.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){o&&o(),i.refreshAll()},r.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},r.Context=i}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}var n={vertical:{},horizontal:{}},r=window.Waypoint;function o(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}o.prototype.add=function(t){this.waypoints.push(t)},o.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},o.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var r=this.triggerQueues[n],o="up"===n||"left"===n;r.sort(o?e:t);for(var i=0,a=r.length;i<a;i+=1){var s=r[i];(s.options.continuous||i===r.length-1)&&s.trigger([n])}}this.clearTriggerQueues()},o.prototype.next=function(e){this.waypoints.sort(t);var n=r.Adapter.inArray(e,this.waypoints);return n===this.waypoints.length-1?null:this.waypoints[n+1]},o.prototype.previous=function(e){this.waypoints.sort(t);var n=r.Adapter.inArray(e,this.waypoints);return n?this.waypoints[n-1]:null},o.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},o.prototype.remove=function(t){var e=r.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},o.prototype.first=function(){return this.waypoints[0]},o.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},o.findOrCreate=function(t){return n[t.axis][t.name]||new o(t)},r.Group=o}(),function(){"use strict";var t=window.Waypoint;function e(t){return t===t.window}function n(t){return e(t)?t:t.defaultView}function r(t){this.element=t,this.handlers={}}r.prototype.innerHeight=function(){return e(this.element)?this.element.innerHeight:this.element.clientHeight},r.prototype.innerWidth=function(){return e(this.element)?this.element.innerWidth:this.element.clientWidth},r.prototype.off=function(t,e){function n(t,e,n){for(var r=0,o=e.length-1;r<o;r++){var i=e[r];n&&n!==i||t.removeEventListener(i)}}var r=t.split("."),o=r[0],i=r[1],a=this.element;if(i&&this.handlers[i]&&o)n(a,this.handlers[i][o],e),this.handlers[i][o]=[];else if(o)for(var s in this.handlers)n(a,this.handlers[s][o]||[],e),this.handlers[s][o]=[];else if(i&&this.handlers[i]){for(var u in this.handlers[i])n(a,this.handlers[i][u],e);this.handlers[i]={}}},r.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,e=n(this.element.ownerDocument),r={top:0,left:0};return this.element.getBoundingClientRect&&(r=this.element.getBoundingClientRect()),{top:r.top+e.pageYOffset-t.clientTop,left:r.left+e.pageXOffset-t.clientLeft}},r.prototype.on=function(t,e){var n=t.split("."),r=n[0],o=n[1]||"__default",i=this.handlers[o]=this.handlers[o]||{};(i[r]=i[r]||[]).push(e),this.element.addEventListener(r,e)},r.prototype.outerHeight=function(t){var n,r=this.innerHeight();return t&&!e(this.element)&&(n=window.getComputedStyle(this.element),r+=parseInt(n.marginTop,10),r+=parseInt(n.marginBottom,10)),r},r.prototype.outerWidth=function(t){var n,r=this.innerWidth();return t&&!e(this.element)&&(n=window.getComputedStyle(this.element),r+=parseInt(n.marginLeft,10),r+=parseInt(n.marginRight,10)),r},r.prototype.scrollLeft=function(){var t=n(this.element);return t?t.pageXOffset:this.element.scrollLeft},r.prototype.scrollTop=function(){var t=n(this.element);return t?t.pageYOffset:this.element.scrollTop},r.extend=function(){var t=Array.prototype.slice.call(arguments);function e(t,e){if("object"==typeof t&&"object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}for(var n=1,r=t.length;n<r;n++)e(t[0],t[n]);return t[0]},r.inArray=function(t,e,n){return null==e?-1:e.indexOf(t,n)},r.isEmptyObject=function(t){for(var e in t)return!1;return!0},t.adapters.push({name:"noframework",Adapter:r}),t.Adapter=r}()}]);