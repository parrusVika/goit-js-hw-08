function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(t,e,n){var r,i,o,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,o=i;return r=i=void 0,c=e,a=t.apply(o,n)}function S(t){return c=t,f=setTimeout(x,e),l?b(t):a}function j(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=o}function x(){var t=p();if(j(t))return O(t);f=setTimeout(x,function(t){var n=e-(t-u);return s?m(n,o-(t-c)):n}(t))}function O(t){return f=void 0,g&&r?b(t):(r=i=void 0,a)}function h(){var t=p(),n=j(t);if(r=arguments,i=this,u=t,n){if(void 0===f)return S(u);if(s)return f=setTimeout(x,e),b(u)}return void 0===f&&(f=setTimeout(x,e)),a}return e=y(e)||0,v(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},h.flush=function(){return void 0===f?a:O(p())},h}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=o.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(t,e,{leading:r,maxWait:e,trailing:i})};const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea"),input:document.querySelector("input")};b.form.addEventListener("input",t(e)((function(t){if(S){const e={...S};e[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}else{const e={};e[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}}),500));let S=JSON.parse(localStorage.getItem("feedback-form-state"));S&&(b.input.value=S.email||"",b.textarea.value=S.message||"");
//# sourceMappingURL=03-feedback.d6ada002.js.map
