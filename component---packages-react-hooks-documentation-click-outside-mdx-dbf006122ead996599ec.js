"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7334],{1699:function(e,n,t){t.d(n,{zX:function(){return y},vD:function(){return u},cs:function(){return S},O8:function(){return f},Iy:function(){return d},zP:function(){return M},JZ:function(){return o},EV:function(){return E},gE:function(){return O}});var r=t(7378),i="(prefers-reduced-motion: no-preference)",o=function(){var e=(0,r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia(i).matches)),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e,n,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia(i),n=function(e){return t(!e.matches)},null===(r=e)||void 0===r||r.addListener(n));return function(){var t;null===(t=e)||void 0===t||t.removeListener(n)}}),[]),n};function u(e,n){var t=(0,r.useRef)(),i=(0,r.useRef)(),u=(0,r.useRef)(null),f=(0,r.useRef)(!0),s=o();function a(t){var r,i=c(u);i&&t.target===i&&(i.removeAttribute("style"),null==n||null===(r=n.onTransitionEnd)||void 0===r||r.call(n,e))}var d=(0,r.useCallback)((function(){var r;if(!f.current)if(null==n||null===(r=n.onTransitionStart)||void 0===r||r.call(n,e),s){var o;null==n||null===(o=n.onTransitionEnd)||void 0===o||o.call(n,e)}else{var a=c(u);if(a)if(a.style.display="block",a.style.overflow="hidden",e)a.style.height="0",a.style.height=a.scrollHeight+"px";else{if(0===a.scrollHeight)return void a.removeAttribute("style");a.style.height=a.scrollHeight+"px",t.current=requestAnimationFrame((function(){i.current=requestAnimationFrame((function(){a.style.height="0px"}))}))}}}),[e]);return(0,r.useLayoutEffect)((function(){d()}),[e,d]),(0,r.useEffect)((function(){var e=c(u);return e&&e.addEventListener("transitionend",a),function(){e&&e.removeEventListener("transitionend",a)}}),[e]),(0,r.useEffect)((function(){var e=t.current,n=i.current;return f.current=!1,function(){e&&cancelAnimationFrame(e),n&&cancelAnimationFrame(n)}}),[t,i]),[u,d]}function c(e){return e.current&&(e.current.el||e.current)}function f(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("click",t),function(){e&&document&&document.removeEventListener("click",t)}}))}t(7226),t(4417);var s,a=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},d=function(e,n,t){var i=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=i.current;if(a()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(n),o&&r.observe(o,t)}return function(){a()&&r&&r.disconnect()}}),[e,n,t])},l=(t(5424),t(4649)),m=t(6328);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(s||(s={}));var w={resized:s.resized},h=function(e,n){return{isSmallDevice:e<=m.AV.small,isMediumDevice:e>m.AV.small&&e<m.AV.medium,isLargeDevice:e>m.AV.medium&&e<m.AV.large,isXlDevice:e>m.AV.large,isPortrait:n>=e,isLandscape:n<e,inner:{height:n,width:e}}},y={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},b=function(){var e="undefined"!=typeof window?window.innerWidth:0,n="undefined"!=typeof window?window.innerHeight:0;return h(e,n)},k=function(e,n){var t=n.type,r=n.width,i=n.height;if(t===w.resized)return p(p({},e),h(r,i))};function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var E=function(){var e=(0,r.useReducer)(k,y,b),n=e[0],t=e[1],i=function(){return requestAnimationFrame((function(){return t({type:w.resized,width:window.innerWidth,height:window.innerHeight})}))};return(0,r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)},O=function(e){var n=e.ref,t=e.timeout,i=void 0===t?0:t,o=e.autoScroll,u=void 0===o||o,c=e.options,f=void 0===c?{behavior:"smooth"}:c,s=function(){null!=n&&n.current&&n.current.scrollIntoView(f)};return(0,r.useEffect)((function(){if(u){var e=setTimeout(s,i);return function(){return clearTimeout(e)}}}),[n,i,u]),[s]},j="(prefers-reduced-motion: reduce)",D="(prefers-color-scheme: light)",L=function(e){return!("undefined"==typeof window||!window.matchMedia)&&window.matchMedia(e).matches},P=function(e,n){void 0!==e.addEventListener?e.addEventListener("change",n):e.addListener(n)},S=function(){var e=(0,r.useState)(L(j)),n=e[0],t=e[1],i=(0,r.useState)(L(D)?"light":"dark"),o=i[0],u=i[1];return(0,r.useEffect)((function(){"undefined"!=typeof window&&window.matchMedia&&(P(window.matchMedia(j),(function(e){t(e.matches)})),P(window.matchMedia(D),(function(e){u(e.matches?"light":"dark")})))}),[]),{prefersReducedMotion:n,prefersColorScheme:o}},M=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}},7226:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7378);function i(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("focusin",t),function(){e&&document&&document.removeEventListener("focusin",t)}}))}},5424:function(e,n,t){t.d(n,{S:function(){return o}});var r=t(7378),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},o=function(e,n,t,o){var u=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=u.current;if(i()){var c=e.current;r&&r.disconnect(),r=new IntersectionObserver(n,o),c&&r.observe(c)}else t();return function(){i()&&r&&r.disconnect()}}),[e,n,t,o])}},4417:function(e,n,t){t.d(n,{W:function(){return i}});var r=t(7378);function i(e,n,t){function i(e){n&&!n.includes(e.key)||t(e)}"string"==typeof n&&(n=[n]),(0,r.useEffect)((function(){var n=e&&e.current;return n&&n.addEventListener("keydown",i),function(){n&&n.removeEventListener("keydown",i)}}))}},2028:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return h}});var r=t(808),i=t(7378),o=t(1368),u=t(2803),c=t(126),f=t(1699),s=function(){var e=(0,i.useState)([]),n=e[0],t=e[1],r=(0,i.useState)(!1),o=r[0],u=r[1],s=(0,i.useRef)(null),a=(0,i.useRef)();a.current=n;return(0,f.O8)(s,(function(){o&&t([].concat((0,c.Z)(a.current||[]),["Klikk utenfor"]))})),i.createElement("section",{ref:s},i.createElement("p",{className:"jkl-body jkl-spacing--bottom-1"},"Klikk utenfor eksempelet for å se klikket listet opp under. Klikk inne i eksempelet vil ikke listes opp"),i.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing--right-1",onClick:function(){return u(!o)}},o?"Skru av":"Skru på"),i.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:function(){return t([])}},"Nullstill liste"),0!==n.length&&i.createElement("ul",{className:"jkl-list jkl-list--unordered jkl-body"},n.map((function(e,n){return i.createElement("li",{className:"jkl-list__item",key:n},e)}))))},a=["components"],d={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},m=l("Ingress"),v=l("ComponentExample"),p={_frontmatter:d},w=u.Z;function h(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.mdx)(w,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(m,{mdxType:"Ingress"},"useClickOutside lar deg lytte på klikk utenfor et element. Det kan være nyttig for å lukke modaler o.l."),(0,o.mdx)(v,{component:s,mdxType:"ComponentExample"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-click-outside-mdx-dbf006122ead996599ec.js.map