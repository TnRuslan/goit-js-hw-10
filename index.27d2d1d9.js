!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,l=d||a||Function("return this")(),s=Object.prototype.toString,v=Math.max,b=Math.min,p=function(){return l.Date.now()};function y(n){var e=void 0===n?"undefined":t(u)(n);return!!n&&("object"==e||"function"==e)}function g(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(u)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==s.call(n)}(n))return NaN;if(y(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=y(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var d=o.test(n);return d||i.test(n)?c(n.slice(2),d?2:8):f.test(n)?NaN:+n}n=function(t,n,e){var u,r,f,o,i,c,d=0,a=!1,l=!1,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function j(n){var e=u,f=r;return u=r=void 0,d=n,o=t.apply(f,e)}function m(t){return d=t,i=setTimeout(O,n),a?j(t):o}function h(t){var e=t-c;return void 0===c||e>=n||e<0||l&&t-d>=f}function O(){var t=p();if(h(t))return x(t);i=setTimeout(O,function(t){var e=n-(t-c);return l?b(e,f-(t-d)):e}(t))}function x(t){return i=void 0,s&&u?j(t):(u=r=void 0,o)}function S(){var t=p(),e=h(t);if(u=arguments,r=this,c=t,e){if(void 0===i)return m(c);if(l)return i=setTimeout(O,n),j(c)}return void 0===i&&(i=setTimeout(O,n)),o}return n=g(n)||0,y(e)&&(a=!!e.leading,f=(l="maxWait"in e)?v(g(e.maxWait)||0,n):f,s="trailing"in e?!!e.trailing:s),S.cancel=function(){void 0!==i&&clearTimeout(i),d=0,u=c=r=i=void 0},S.flush=function(){return void 0===i?o:x(p())},S};var j,m="[object Symbol]",h=/^\s+|\s+$/g,O="[\ud800-\udfff]",x="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",S="[^\ud800-\udfff]",T="(?:\ud83c[\udde6-\uddff]){2}",w="[\ud800-\udbff][\udc00-\udfff]",E="(?:"+x+"|"+"\ud83c[\udffb-\udfff])"+"?",$="[\\ufe0e\\ufe0f]?",M=$+E+("(?:\\u200d(?:"+[S,T,w].join("|")+")"+$+E+")*"),N="(?:"+[S+x+"?",x,T,w,O].join("|")+")",_=RegExp("\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|"+N+M,"g"),F=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),I="object"==typeof e&&e&&e.Object===Object&&e,R="object"==typeof self&&self&&self.Object===Object&&self,W=I||R||Function("return this")();function q(t,n,e){if(n!=n)return function(t,n,e,u){for(var r=t.length,f=e+(u?1:-1);u?f--:++f<r;)if(n(t[f],f,t))return f;return-1}(t,A,e);for(var u=e-1,r=t.length;++u<r;)if(t[u]===n)return u;return-1}function A(t){return t!=t}function D(t){return function(t){return F.test(t)}(t)?function(t){return t.match(_)||[]}(t):function(t){return t.split("")}(t)}var L=Object.prototype.toString,P=W.Symbol,k=P?P.prototype:void 0,z=k?k.toString:void 0;function B(n){if("string"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(u)(n))||function(t){return!!t&&"object"==typeof t}(n)&&L.call(n)==m}(n))return z?z.call(n):"";var e=n+"";return"0"==e&&1/n==-Infinity?"-0":e}function C(t,n,e){var u=t.length;return e=void 0===e?u:e,!n&&e>=u?t:function(t,n,e){var u=-1,r=t.length;n<0&&(n=-n>r?0:r+n),(e=e>r?r:e)<0&&(e+=r),r=n>e?0:e-n>>>0,n>>>=0;for(var f=Array(r);++u<r;)f[u]=t[u+n];return f}(t,n,e)}j=function(t,n,e){var u;if((t=null==(u=t)?"":B(u))&&(e||void 0===n))return t.replace(h,"");if(!t||!(n=B(n)))return t;var r=D(t),f=D(n),o=function(t,n){for(var e=-1,u=t.length;++e<u&&q(n,t[e],0)>-1;);return e}(r,f),i=function(t,n){for(var e=t.length;e--&&q(n,t[e],0)>-1;);return e}(r,f)+1;return C(r,o,i).join("")};document.querySelector("#search-box").addEventListener("input",t(n)((function(n){console.log(n.target.value),function(n){if(""===t(j)(n))return;fetch("https://restcountries.com/v3.1/name/".concat(n)).then((function(t){return t.json()})).then((function(t){return t.map((function(t){return console.log(t.name)}))})).catch((function(t){return console.log(t)}))}(n.target.value)}),500))}();
//# sourceMappingURL=index.27d2d1d9.js.map
