!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,y=Math.min,m=function(){return s.Date.now()};function b(t,e,n){var r,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(i);function b(e){var n=r,i=o;return r=o=void 0,l=e,f=t.apply(i,n)}function h(t){return l=t,a=setTimeout(O,e),d?b(t):f}function w(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function O(){var t=m();if(w(t))return T(t);a=setTimeout(O,function(t){var n=e-(t-c);return s?y(n,u-(t-l)):n}(t))}function T(t){return a=void 0,v&&r?b(t):(r=o=void 0,f)}function x(){var t=m(),n=w(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return h(c);if(s)return a=setTimeout(O,e),b(c)}return void 0===a&&(a=setTimeout(O,e)),f}return e=j(e)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(j(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},x.flush=function(){return void 0===a?f:T(m())},x}function g(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=f.test(e);return i||a.test(e)?c(e.slice(2),i?2:8):u.test(e)?NaN:+e}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})};var h={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea"),input:document.querySelector("input")},w={};h.form.addEventListener("input",t(e)((function(t){w[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500))}();
//# sourceMappingURL=03-feedback.8defa37a.js.map