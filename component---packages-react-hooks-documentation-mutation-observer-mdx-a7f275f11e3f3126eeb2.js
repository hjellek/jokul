(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7581],{3257:function(e,n,t){"use strict";t.d(n,{zX:function(){return b},vD:function(){return u},O8:function(){return s},Iy:function(){return l},JZ:function(){return o},EV:function(){return E},gE:function(){return k}});var r=t(7378),i="(prefers-reduced-motion: no-preference)",o=function(){var e=(0,r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia(i).matches)),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e,n,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia(i),n=function(e){return t(!e.matches)},null===(r=e)||void 0===r||r.addListener(n));return function(){var t;null===(t=e)||void 0===t||t.removeListener(n)}}),[]),n};function u(e,n){var t=(0,r.useRef)(),i=(0,r.useRef)(),u=(0,r.useRef)(null),s=(0,r.useRef)(!0),a=o();function f(t){var r,i=c(u);i&&t.target===i&&(i.removeAttribute("style"),null==n||null===(r=n.onTransitionEnd)||void 0===r||r.call(n,e))}var l=(0,r.useCallback)((function(){var r;if(!s.current)if(null==n||null===(r=n.onTransitionStart)||void 0===r||r.call(n,e),a){var o;null==n||null===(o=n.onTransitionEnd)||void 0===o||o.call(n,e)}else{var f=c(u);if(f)if(f.style.display="block",f.style.overflow="hidden",e)f.style.height="0",f.style.height=f.scrollHeight+"px";else{if(0===f.scrollHeight)return void f.removeAttribute("style");f.style.height=f.scrollHeight+"px",t.current=requestAnimationFrame((function(){i.current=requestAnimationFrame((function(){f.style.height="0px"}))}))}}}),[e]);return(0,r.useLayoutEffect)((function(){l()}),[e,l]),(0,r.useEffect)((function(){var e=c(u);return e&&e.addEventListener("transitionend",f),function(){e&&e.removeEventListener("transitionend",f)}}),[e]),(0,r.useEffect)((function(){var e=t.current,n=i.current;return s.current=!1,function(){e&&cancelAnimationFrame(e),n&&cancelAnimationFrame(n)}}),[t,i]),[u,l]}function c(e){return e.current&&(e.current.el||e.current)}function s(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("click",t),function(){e&&document&&document.removeEventListener("click",t)}}))}t(7226),t(4417);var a,f=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},l=function(e,n,t){var i=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=i.current;if(f()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(n),o&&r.observe(o,t)}return function(){f()&&r&&r.disconnect()}}),[e,n,t])},d=(t(5424),t(3450)),m=t(6328);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(a||(a={}));var w={resized:a.resized},y=function(e,n){return{isSmallDevice:e<=m.AV.small,isMediumDevice:e>m.AV.small&&e<m.AV.medium,isLargeDevice:e>m.AV.medium&&e<m.AV.large,isXlDevice:e>m.AV.large,isPortrait:n>=e,isLandscape:n<e,inner:{height:n,width:e}}},b={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},g=function(){var e="undefined"!=typeof window?window.innerWidth:0,n="undefined"!=typeof window?window.innerHeight:0;return y(e,n)},h=function(e,n){var t=n.type,r=n.width,i=n.height;switch(t){case w.resized:return p(p({},e),y(r,i))}};function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var E=function(){var e=(0,r.useReducer)(h,b,g),n=e[0],t=e[1],i=function(){return requestAnimationFrame((function(){return t({type:w.resized,width:window.innerWidth,height:window.innerHeight})}))};return(0,r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)},k=function(e){var n=e.ref,t=e.timeout,i=void 0===t?0:t,o=e.autoScroll,u=void 0===o||o,c=e.options,s=void 0===c?{behavior:"smooth"}:c,a=function(){null!=n&&n.current&&n.current.scrollIntoView(s)};return(0,r.useEffect)((function(){if(u){var e=setTimeout(a,i);return function(){return clearTimeout(e)}}}),[n,i,u]),[a]}},7226:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(7378);function i(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("focusin",t),function(){e&&document&&document.removeEventListener("focusin",t)}}))}},5424:function(e,n,t){"use strict";t.d(n,{S:function(){return o}});var r=t(7378),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},o=function(e,n,t,o){var u=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=u.current;if(i()){var c=e.current;r&&r.disconnect(),r=new IntersectionObserver(n,o),c&&r.observe(c)}else t();return function(){i()&&r&&r.disconnect()}}),[e,n,t,o])}},4417:function(e,n,t){"use strict";t.d(n,{W:function(){return i}});var r=t(7378);function i(e,n,t){function i(e){n&&!n.includes(e.key)||t(e)}"string"==typeof n&&(n=[n]),(0,r.useEffect)((function(){var n=e&&e.current;return n&&n.addEventListener("keydown",i),function(){n&&n.removeEventListener("keydown",i)}}))}},4906:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return f},default:function(){return w}});var r=t(120),i=t(7378),o=t(1368),u=t(2803),c=t(6250),s=t(3257),a=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=(0,i.useState)([]),o=r[0],u=r[1],a=(0,i.useRef)(null),f=(0,i.useRef)();f.current=o;return(0,s.Iy)(a,(function(e){u([].concat((0,c.Z)(f.current||[]),(0,c.Z)(e.map((function(e){return e.target.textContent||""})))))}),{characterData:!0,subtree:!0}),i.createElement("section",null,i.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing--right-1",onClick:function(){return t(!n)}},"Endre status"),i.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:function(){return u([])}},"Nullstill liste"),i.createElement("p",{ref:a,className:"jkl-spacing--top-1 jkl-body"},"Nåværende status: ",i.createElement("strong",null,n?"Åpen":"Lukket"),i.createElement("br",null),"Liste over endringer:"),0!==o.length&&i.createElement("ul",{className:"jkl-list jkl-list--unordered jkl-body"},o.map((function(e,n){return i.createElement("li",{className:"jkl-list__item",key:n},e)}))))},f={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},d=l("Ingress"),m=l("ComponentExample"),v={_frontmatter:f},p=u.Z;function w(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.mdx)(p,Object.assign({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(d,{mdxType:"Ingress"},"Med useMutationObserver kan du lytte på endringer i DOMet."),(0,o.mdx)("p",null,"Dette er en tynn wrapper over MutationObserver APIet som gjør det lettere å ta det i bruk i React. Den er nyttig om du f.eks. ønsker å spore når en bruker trykker på et element der du ikke har tilgang på ",(0,o.mdx)("inlineCode",{parentName:"p"},"onChange"),"-funksjonen, som ",(0,o.mdx)("inlineCode",{parentName:"p"},"Accordion"),"."),(0,o.mdx)(m,{component:a,mdxType:"ComponentExample"}))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-mutation-observer-mdx-a7f275f11e3f3126eeb2.js.map