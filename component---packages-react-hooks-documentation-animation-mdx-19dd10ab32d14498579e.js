(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8844],{623:function(e,n,t){"use strict";t.d(n,{zX:function(){return b},vD:function(){return u},O8:function(){return s},Iy:function(){return d},zP:function(){return D},JZ:function(){return o},EV:function(){return E},gE:function(){return j}});var r=t(7378),i="(prefers-reduced-motion: no-preference)",o=function(){var e=(0,r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia(i).matches)),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e,n,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia(i),n=function(e){return t(!e.matches)},null===(r=e)||void 0===r||r.addListener(n));return function(){var t;null===(t=e)||void 0===t||t.removeListener(n)}}),[]),n};function u(e,n){var t=(0,r.useRef)(),i=(0,r.useRef)(),u=(0,r.useRef)(null),s=(0,r.useRef)(!0),f=o();function a(t){var r,i=c(u);i&&t.target===i&&(i.removeAttribute("style"),null==n||null===(r=n.onTransitionEnd)||void 0===r||r.call(n,e))}var d=(0,r.useCallback)((function(){var r;if(!s.current)if(null==n||null===(r=n.onTransitionStart)||void 0===r||r.call(n,e),f){var o;null==n||null===(o=n.onTransitionEnd)||void 0===o||o.call(n,e)}else{var a=c(u);if(a)if(a.style.display="block",a.style.overflow="hidden",e)a.style.height="0",a.style.height=a.scrollHeight+"px";else{if(0===a.scrollHeight)return void a.removeAttribute("style");a.style.height=a.scrollHeight+"px",t.current=requestAnimationFrame((function(){i.current=requestAnimationFrame((function(){a.style.height="0px"}))}))}}}),[e]);return(0,r.useLayoutEffect)((function(){d()}),[e,d]),(0,r.useEffect)((function(){var e=c(u);return e&&e.addEventListener("transitionend",a),function(){e&&e.removeEventListener("transitionend",a)}}),[e]),(0,r.useEffect)((function(){var e=t.current,n=i.current;return s.current=!1,function(){e&&cancelAnimationFrame(e),n&&cancelAnimationFrame(n)}}),[t,i]),[u,d]}function c(e){return e.current&&(e.current.el||e.current)}function s(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("click",t),function(){e&&document&&document.removeEventListener("click",t)}}))}t(7226),t(4417);var f,a=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},d=function(e,n,t){var i=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=i.current;if(a()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(n),o&&r.observe(o,t)}return function(){a()&&r&&r.disconnect()}}),[e,n,t])},l=(t(5424),t(3450)),m=t(6328);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(f||(f={}));var w={resized:f.resized},y=function(e,n){return{isSmallDevice:e<=m.AV.small,isMediumDevice:e>m.AV.small&&e<m.AV.medium,isLargeDevice:e>m.AV.medium&&e<m.AV.large,isXlDevice:e>m.AV.large,isPortrait:n>=e,isLandscape:n<e,inner:{height:n,width:e}}},b={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},g=function(){var e="undefined"!=typeof window?window.innerWidth:0,n="undefined"!=typeof window?window.innerHeight:0;return y(e,n)},h=function(e,n){var t=n.type,r=n.width,i=n.height;switch(t){case w.resized:return p(p({},e),y(r,i))}};function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var E=function(){var e=(0,r.useReducer)(h,b,g),n=e[0],t=e[1],i=function(){return requestAnimationFrame((function(){return t({type:w.resized,width:window.innerWidth,height:window.innerHeight})}))};return(0,r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)},j=function(e){var n=e.ref,t=e.timeout,i=void 0===t?0:t,o=e.autoScroll,u=void 0===o||o,c=e.options,s=void 0===c?{behavior:"smooth"}:c,f=function(){null!=n&&n.current&&n.current.scrollIntoView(s)};return(0,r.useEffect)((function(){if(u){var e=setTimeout(f,i);return function(){return clearTimeout(e)}}}),[n,i,u]),[f]},D=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}},7226:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(7378);function i(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("focusin",t),function(){e&&document&&document.removeEventListener("focusin",t)}}))}},5424:function(e,n,t){"use strict";t.d(n,{S:function(){return o}});var r=t(7378),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},o=function(e,n,t,o){var u=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=u.current;if(i()){var c=e.current;r&&r.disconnect(),r=new IntersectionObserver(n,o),c&&r.observe(c)}else t();return function(){i()&&r&&r.disconnect()}}),[e,n,t,o])}},4417:function(e,n,t){"use strict";t.d(n,{W:function(){return i}});var r=t(7378);function i(e,n,t){function i(e){n&&!n.includes(e.key)||t(e)}"string"==typeof n&&(n=[n]),(0,r.useEffect)((function(){var n=e&&e.current;return n&&n.addEventListener("keydown",i),function(){n&&n.removeEventListener("keydown",i)}}))}},1289:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return b}});var r=t(120),i=t(7378),o=t(1368),u=t(2803),c=t(623),s=function(e){console.log("transition started ("+(e?"opening":"closing")+")")},f=function(e){console.log("transition ended ("+(e?"open":"closed")+")")},a=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=(0,c.vD)(n,{onTransitionStart:s,onTransitionEnd:f})[0];return i.createElement("section",null,i.createElement("button",{className:"jkl-button jkl-button--secondary",onClick:function(){return t((function(e){return!e}))}},"Animate ",n?"Out":"In"),i.createElement("div",{className:"lorem-text-wrapper "+(n?"":"lorem-text-wrapper--hidden"),ref:r},i.createElement("div",{className:"lorem-text"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam officiis optio soluta veniam voluptatibus!")))},d=["components"],l={},m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},v=m("Ingress"),p=m("ComponentExample"),w={_frontmatter:l},y=u.Z;function b(e){var n=e.components,t=(0,r.Z)(e,d);return(0,o.mdx)(y,Object.assign({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(v,{mdxType:"Ingress"},"Animering av ting inn og ut av DOMet i React er ikke lett, men med useAnimatedHeight blir jobben en god del lettere."),(0,o.mdx)(p,{component:a,mdxType:"ComponentExample"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-animation-mdx-19dd10ab32d14498579e.js.map