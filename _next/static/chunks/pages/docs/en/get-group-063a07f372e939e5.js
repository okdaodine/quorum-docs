(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{3484:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/en/get-group",function(){return r(5327)}])},5160:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5893),o=r(7294),a=r(7087),i=r(640),u=r.n(i),c=r(5434),l=r(3854),s=r(6010);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={document:{render:void 0},th:{attributes:{scope:{type:String,default:"col"}},render:function(e){return(0,n.jsx)("th",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}({},e))}},fence:{render:function(e){var t=e.children,r=e.language,i=p(o.useState(!1),2),f=i[0],d=i[1],y=p(o.useState(!1),2),m=y[0],g=y[1],h=p(o.useState(!1),2),v=h[0],x=h[1],j=o.useRef();return o.useEffect((function(){if(f){u()(t.trimEnd());var e=setTimeout(d,1e3,!1);return function(){return clearTimeout(e)}}}),[f,t]),o.useEffect((function(){var e=function(){j.current&&(j.current.scrollHeight>j.current.clientHeight||j.current.clientHeight>240)?x(!0):x(!1)};return setTimeout(e,50),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,n.jsx)(a.ZP,b({},a.lG,{code:t.trimEnd(),language:r,theme:void 0,children:function(e){var t=e.className,r=e.style,a=e.tokens,i=e.getTokenProps;return(0,n.jsxs)("pre",{className:(0,s.Z)(t,"relative"),style:r,children:[(0,n.jsx)("div",{onClick:function(){return d(!0)},className:"absolute top-1 right-1 opacity-70 cursor-pointer text-[16px] py-3 px-2 bg-[#0D1117]",children:f?(0,n.jsx)(c.HhX,{}):(0,n.jsx)(c.Fqs,{})}),(0,n.jsx)("code",{ref:j,className:(0,s.Z)({fold:!m,expand:m}),children:a.map((function(e,t){return(0,n.jsxs)(o.Fragment,{children:[e.map((function(e,t){return(0,n.jsx)("span",b({},i({token:e})),t)})),"\n"]},t)}))}),v&&!m&&(0,n.jsx)("div",{className:"absolute bottom-0 inset-x-0 flex justify-center text-2xl bg-gradient-to-t text-white/90 dark:text-white/70 from-[#777] dark:from-[#444] to-transparent dark:to-transparent py-[10px] cursor-pointer",onClick:function(){g(!0)},children:(0,n.jsx)(l.SUY,{})})]})}}))},attributes:{language:{type:String}}}},g=m},6317:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(4211),o=r(5893),a=r(6010),i=r(8193);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}var l={note:{container:"bg-sky-50 dark:bg-slate-900/60 dark:ring-1 dark:ring-slate-300/10",title:"text-sky-900 dark:text-orange-500",body:"text-sky-800 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300 prose-a:text-sky-900 [--tw-prose-background:theme(colors.sky.50)]"},warning:{container:"bg-amber-50 dark:bg-slate-900/60 dark:ring-1 dark:ring-slate-300/10",title:"text-amber-900 dark:text-orange-500",body:"text-amber-800 prose-code:text-amber-900 prose-a:text-amber-900 [--tw-prose-underline:theme(colors.amber.400)] dark:[--tw-prose-underline:theme(colors.sky.700)] [--tw-prose-background:theme(colors.amber.50)] dark:text-slate-300 dark:prose-code:text-slate-300"}},s={note:function(e){return(0,o.jsx)(i.ocf,c({},e))},warning:function(e){return(0,o.jsx)(i.SR5,c({},e))}};var f=r(7294);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=f.createContext();var y={callout:{attributes:{title:{type:String},type:{type:String,default:"note",matches:["note","warning"],errorLevel:"critical"}},render:function(e){var t=e.type,r=void 0===t?"note":t,n=e.title,i=e.children,u=s[r];return(0,o.jsxs)("div",{className:(0,a.Z)("my-8 flex rounded-3xl p-6",l[r].container),children:[(0,o.jsx)(u,{className:(0,a.Z)("h-8 w-8 flex-none",l[r].title)}),(0,o.jsxs)("div",{className:"ml-4 flex-auto",children:[(0,o.jsx)("p",{className:(0,a.Z)("m-0 font-display text-xl",l[r].title),children:n}),(0,o.jsx)("div",{className:(0,a.Z)("prose mt-2.5",l[r].body),children:i})]})]})}},tab:{render:function(e){var t=e.label,r=e.children;return t!==f.useContext(p)?null:r},attributes:{label:{type:String}}},tabs:{render:function(e){var t=e.labels,r=e.children,n=b(f.useState(t[0]),2),i=n[0],u=n[1];return f.useEffect((function(){var e=localStorage.getItem("selectedCodeLang");e&&t.includes(e)&&u(e)}),[t]),(0,o.jsxs)(p.Provider,{value:i,children:[(0,o.jsx)("div",{role:"tablist",className:"flex items-center",children:t.map((function(e){return(0,o.jsx)("div",{onClick:function(){u(e),localStorage.setItem("selectedCodeLang",e)},className:(0,a.Z)({"border-orange-500 text-orange-500":e===i,"border-gray-600 opacity-70 dark:opacity-100":e!==i},"px-3 border rounded-xl mr-2 text-sm cursor-pointer text-[13px]"),children:e},e)}))}),r]})},attributes:{},transform:function(e,t){var r=e.transformChildren(t).filter((function(e){return e&&"Tab"===e.name})).map((function(e){return"object"===typeof e?e.attributes.label:null}));return new n.Vp(this.render,{labels:r},e.transformChildren(t))}}}},5327:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return p},default:function(){return y}});var n=r(7294),o=r(4211),a=r(4266),i=r(6317),u=r(5160);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}var s={},f={},d=l({tags:i?i.default||i:{},nodes:u?u.default||u:{},functions:f?f.default||f:{}},s?s.default||s:{}),b=(0,a.J)(d).components,p=!0;function y(e){return o.RZ.react(e.markdoc.content,n,{components:l({},b,e.components)})}}},function(e){e.O(0,[617,649,556,280,774,888,179],(function(){return t=3484,e(e.s=t);var t}));var t=e.O();_N_E=t}]);