(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4249],{90375:function(e,t,n){var r=n(12371),o=n(90930),i=n(52306),a=n(50211)("toStringTag"),c="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),a))?n:c?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}},89720:function(e,t,n){"use strict";var r=n(2258),o=n(77826),i=n(55736);e.exports=function(e,t,n){var a=r(t);a in e?o.f(e,a,i(0,n)):e[a]=n}},18516:function(e,t,n){var r=n(45089);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},61667:function(e,t,n){var r=n(90375),o=n(2964),i=n(97719),a=n(50211)("iterator");e.exports=function(e){if(null!=e)return o(e,a)||o(e,"@@iterator")||i[r(e)]}},73546:function(e,t,n){var r=n(45089),o=n(56112),i=n(61667);e.exports=function(e,t){var n=arguments.length<2?i(e):t;if(r(n))return o(n.call(e));throw TypeError(String(e)+" is not iterable")}},92814:function(e,t,n){var r=n(50211),o=n(97719),i=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||a[i]===e)}},94722:function(e,t,n){var r=n(56112),o=n(92814),i=n(82871),a=n(18516),c=n(73546),s=n(61667),u=n(26737),l=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var f,d,p,m,h,v,k,g=n&&n.that,b=!(!n||!n.AS_ENTRIES),y=!(!n||!n.IS_ITERATOR),E=!(!n||!n.INTERRUPTED),O=a(t,g,1+b+E),w=function(e){return f&&u(f,"normal",e),new l(!0,e)},j=function(e){return b?(r(e),E?O(e[0],e[1],w):O(e[0],e[1])):E?O(e,w):O(e)};if(y)f=e;else{if(!(d=s(e)))throw TypeError(String(e)+" is not iterable");if(o(d)){for(p=0,m=i(e);m>p;p++)if((h=j(e[p]))&&h instanceof l)return h;return new l(!1)}f=c(e,d)}for(v=f.next;!(k=v.call(f)).done;){try{h=j(k.value)}catch(S){u(f,"throw",S)}if("object"==typeof h&&h&&h instanceof l)return h}return new l(!1)}},26737:function(e,t,n){var r=n(56112),o=n(2964);e.exports=function(e,t,n){var i,a;r(e);try{if(!(i=o(e,"return"))){if("throw"===t)throw n;return n}i=i.call(e)}catch(c){a=!0,i=c}if("throw"===t)throw n;if(a)throw i;return r(i),n}},97719:function(e){e.exports={}},12371:function(e,t,n){var r={};r[n(50211)("toStringTag")]="z",e.exports="[object z]"===String(r)},41940:function(e,t,n){var r=n(51695),o=n(94722),i=n(89720);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){i(t,e,n)}),{AS_ENTRIES:!0}),t}})},18465:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return ce},default:function(){return pe}});var r=n(30808),o=n(27378),i=n(81368),a=n(62803),c=n(64649),s=(n(41940),n(73804));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f="fremtind-cookie-consent",d=function(e){var t=function(e){void 0===e&&(e=f);var t=document.cookie.split(";").map((function(e){return e.trim().split("=")})).find((function(t){return t[0]===e}));if(t)return t}();return t?JSON.parse(t[1]):e?e():void 0},p=function(e){if(e)return"denied"!==e},m=function(e){var t=Object.entries(l(l({},{functional:null,marketing:null,statistics:null}),e)).map((function(e){var t=e[0],n=e[1];return[t,p(n)]}));return Object.fromEntries(t)},h=function(e){var t={functional:void 0,marketing:void 0,statistics:void 0},n=Object.entries(l(l({},t),e)).map((function(e){var t,n=e[0],r=e[1];return[n,(t=r,void 0===t?null:!1===t||"false"===String(t).toLowerCase()?"denied":"accepted")]}));return Object.fromEntries(n)};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=o.createContext(void 0),b=function(e,t){switch(t.type){case"SET_SHOW_CONSENT":return k(k({},e),{},{isOpen:t.payload});case"SET_SHOW_SETTINGS":return k(k({},e),{},{showSettings:t.payload});case"UPDATE_CONSENT":return k(k({},e),{},{consent:k(k({},e.consent),t.payload)});default:throw new Error("Unhandled action type: "+t.type)}},y=function(e){var t=e.children,n=e.cookieAdapter,r=e.marketing,i=e.functional,a=e.statistics,c=(0,o.useMemo)((function(){var e;return null!==(e=d(n))&&void 0!==e?e:{marketing:null,functional:null,statistics:null}}),[n]),s=(0,o.useMemo)((function(){return{marketing:null!=r&&r,functional:null!=i&&i,statistics:null!=a&&a}}),[r,i,a]),u=o.useReducer(b,{isOpen:!1,showSettings:!1,requirement:s,consent:c}),l=u[0],f=u[1];(0,o.useEffect)((function(){!function(e,t){if(t){for(var n=new Map(Object.entries(t)),r=0,o=Object.entries(e);r<o.length;r++){var i=o[r],a=i[0];if(i[1]&&null===n.get(a))return!0}return!1}return Object.values(e).some((function(e){return e}))}(s,c)?c&&f({type:"UPDATE_CONSENT",payload:c}):f({type:"SET_SHOW_CONSENT",payload:!0})}),[s,c]);var p={state:l,dispatch:f};return o.createElement(g.Provider,{value:p},t)},E=function(){var e=o.useContext(g);if(void 0===e)throw new Error("useCookieConsentState must be used within a CookieConsentProvider");return k({dispatch:e.dispatch},e.state)};function O(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var w=O(n(27378));function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function N(e,t,n){return N=x()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&C(o,n.prototype),o},N.apply(null,arguments)}function T(e){var t="function"==typeof Map?new Map:void 0;return T=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return N(e,arguments,_(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),C(r,e)},T(e)}function P(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I="undefined"!=typeof window;I&&/(android)/i.test(navigator.userAgent),I&&/iPad|iPhone|iPod/.test(String(navigator.platform)),I||n.g.HTMLElement||(n.g.HTMLElement=function(){return function e(){j(this,e)}}());var M,R,L=(M="undefined"==typeof window?{}:window.Element.prototype,R=M.matches||M.msMatchesSelector||M.webkitMatchesSelector,M.closest?function(e,t){return e.closest(t)}:function(e,t){for(e.correspondingUseElement&&(e=e.correspondingUseElement);e;e=e.parentElement)if(R.call(e,t))return e;return null});function B(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.hasAttribute(t);return!n===e.hasAttribute(t)&&e[n?"setAttribute":"removeAttribute"](t,""),n}function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(e){if(e.nodeType)return[e];if("string"==typeof e)return[].slice.call(t.querySelectorAll(e));if(e.length)return[].slice.call(e)}return[]}var W="[tabindex],a,button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled])",H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(c,e);var t,n,r,o,i,a=(t=c,n=x(),function(){var e,r=_(t);if(n){var o=_(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return P(this,e)});function c(){return j(this,c),a.apply(this,arguments)}return r=c,o=[{key:"connectedCallback",value:function(){this._focus=!0,this.attributeChangedCallback(),this.addEventListener("transitionend",this),document.addEventListener("keydown",this),document.addEventListener("click",this)}},{key:"disconnectedCallback",value:function(){G(this._focus),this._generatedBackdrop&&this._generatedBackdrop.parentNode.removeChild(this._generatedBackdrop),this._focus=this._generatedBackdrop=null,this.removeEventListener("transitionend",this),document.removeEventListener("keydown",this),document.removeEventListener("click",this)}},{key:"attributeChangedCallback",value:function(e,t,n){var r=this;if(this._focus){var o="backdrop"===e&&V(this,t),i=this.backdrop;if(this.className=this.className,this.setAttribute("role","dialog"),this.setAttribute("aria-modal",Boolean(i)),o&&o.setAttribute("hidden",""),i&&B(i,"hidden",this.hidden),this.hidden)G(this._focus);else{var a=window.getComputedStyle(this).getPropertyValue("z-index");if(("auto"===a||"0"===a)&&""===this.style.zIndex){var c=U(this.nodeName).filter((function(e){return e!==i&&!r.contains(e)&&z(e)}));a=Math.min(Math.max.apply(Math,[1].concat(A(c.map(F)))),2e9),i&&(i.style.zIndex=a+1),this.style.zIndex=a+2}this._focus=document.activeElement||document.body,setTimeout((function(){return Z(r)}))}"hidden"===e&&n!==t&&function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="prevent_recursive_dispatch_maximum_callstack".concat(t);if(e[o])return!0;e[o]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r);e.dispatchEvent(n);e[o]=null}(this,"dialog.toggle")}}},{key:"handleEvent",value:function(e){if(!e.defaultPrevented)if("transitionend"!==e.type||e.target!==this||this.hidden){if("click"===e.type){if(e.target===this.backdrop&&!this.strict)return this.close();var t=L(e.target,"button"),n=t&&(t.getAttribute("data-for")||t.getAttribute("for"));"close"===n&&L(e.target,this.nodeName)===this?this.close():n===this.id&&this.show()}else if("keydown"===e.type&&(9===e.keyCode||27===e.keyCode)&&!this.hidden){if(U("".concat(this.nodeName,":not([hidden])")).sort((function(e,t){return F(e)-F(t)})).pop()!==this)return;9===e.keyCode&&function(e,t){var n=U(W,e).filter(z),r=n[t.shiftKey?0:n.length-1];t.target!==r&&e.contains(t.target)||(t.preventDefault(),n[t.shiftKey?n.length-1:0].focus())}(this,e),27!==e.keyCode||this.strict||(e.preventDefault(),this.close())}}else Z(this)}},{key:"close",value:function(){this.hidden=!0}},{key:"show",value:function(){this.hidden=!1}},{key:"open",get:function(){return!this.hidden},set:function(e){this.hidden=!e}},{key:"strict",get:function(){return this.hasAttribute("strict")},set:function(e){B(this,"strict",e)}},{key:"hidden",get:function(){return this.hasAttribute("hidden")},set:function(e){B(this,"hidden",e)}},{key:"backdrop",get:function(){return V(this,this.getAttribute("backdrop"))},set:function(e){"string"==typeof e?this.setAttribute("backdrop",e):this.removeAttribute("backdrop")}}],i=[{key:"observedAttributes",get:function(){return["hidden","backdrop"]}}],o&&S(r.prototype,o),i&&S(r,i),c}(T(HTMLElement));function V(e,t){var n=e.nextElementSibling,r=String(t).toLowerCase();return!(!e.parentNode||"off"===r)&&(t&&"on"!==r?document.getElementById(t)||console.warn(e,"cannot find backdrop element with id: ".concat(t))||!1:n&&"BACKDROP"===n.nodeName?n:(e._generatedBackdrop=document.createElement("backdrop"),e.insertAdjacentElement("afterend",e._generatedBackdrop)))}function z(e){return e.offsetWidth&&e.offsetHeight&&"hidden"!==window.getComputedStyle(e).getPropertyValue("visibility")}function F(e){for(var t=1,n=e;n;n=n.offsetParent)t+=Number(window.getComputedStyle(n).getPropertyValue("z-index"))||0;return t}function G(e){setTimeout((function(){try{e.focus()}catch(t){}}))}function Z(e){if(!e.contains(document.activeElement)&&z(e)){var t=U("[autofocus]",e).concat(U(W,e)).filter(z)[0];try{t.focus()}catch(n){console.warn(e,'is initialized without focusable elements. Please add [tabindex="-1"] the main element (for instance a <h1>)')}}}var K=function(){var e="undefined"==typeof window?{}:window.Element.prototype,t=e.matches||e.msMatchesSelector||e.webkitMatchesSelector;return e.closest?function(e,t){return e.closest(t)}:function(e,n){for(;e;e=e.parentElement)if(t.call(e,n))return e;return null}}();var X=function(e,t){void 0===t&&(t={});var n=(t.name||e.name||String(e).match(/function ([^(]+)/)[1]).replace(/.[A-Z]/g,(function(e){return e[0]+"-"+e[1]})),r=t.props||[],o=t.customEvents||[],i=o.reduce((function(e,t){return e[t]="on"+t.replace(/(^|\.)./g,(function(e){return e.slice(-1).toUpperCase()})),e}),{}),a=r.concat("forwardRef",Object.keys(i).map((function(e){return i[e]}))),c=(n+"-"+(t.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(t){function n(e){var n=this;t.call(this,e),this.ref=function(e){return"function"==typeof n.props.forwardRef?n.props.forwardRef(e):n.props.forwardRef&&(n.props.forwardRef.current=e),n.el=e},Object.keys(i).forEach((function(e){var t=i[e];n[e]=function(e){n.props[t]&&K(e.target,n.el.nodeName)===n.el&&n.props[t](e)}}))}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var t=this;window.customElements.get(c)||window.customElements.define(c,e),r.forEach((function(e){e in t.props&&(t.el[e]=t.props[e])})),o.forEach((function(e){t.el.addEventListener(e,t[e])}))},n.prototype.componentDidUpdate=function(e){var t=this;r.forEach((function(n){e[n]!==t.props[n]&&(t.el[n]=t.props[n])}))},n.prototype.componentWillUnmount=function(){var e=this;o.forEach((function(t){e.el.removeEventListener(t,e[t])}))},n.prototype.render=function(){var e=this;return w.default.createElement(c,Object.keys(this.props).reduce((function(t,n){return-1===a.indexOf(n)&&("className"===n?t.class=e.props[n]:!0===e.props[n]?t[n]="":!1!==e.props[n]&&(t[n]=e.props[n])),t}),{ref:this.ref}))},n}(w.default.Component)}(H,{customEvents:["dialog.toggle"],suffix:"4.0.0"}),q=n(44900),J=n(15529),Q=n(70897),$=n(76139),Y=function(e){var t=e.name,n=e.label,r=e.children,i=(0,$.Gc)().register;return o.createElement(o.Fragment,null,o.createElement(J.X,Object.assign({value:"True"},i(t),{className:"jkl-cookie-consent-modal__checkbox"}),n),o.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},r))},ee=function(e){var t=e.onAccept,n=E(),r=n.consent,i=n.dispatch,a=n.isOpen,c=n.requirement,s=n.showSettings,u=(0,$.cI)({defaultValues:m(r)}),l=function(e){t("implicit"===e?h(c):e)};return o.createElement(X,{backdrop:"on",strict:!0,hidden:!a,"aria-label":"Informasjonskapsler",className:"jkl-cookie-consent-modal","data-testautoid":"jkl-cookie-consent-modal"},s?o.createElement($.RV,u,o.createElement("h1",{className:"jkl-cookie-consent-modal__header"},"Informasjonskapsler"),o.createElement(q.QI,{className:"jkl-cookie-consent-modal__checklist"},o.createElement(q.O2,null,"Nettsidene skal fungere teknisk")),o.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},"For at nettsidene skal fungere, må vi bruke tekniske informasjonskapsler. Denne kan derfor ikke slås av."),o.createElement("form",{onSubmit:u.handleSubmit((function(e){l(h(e))}))},c.functional&&o.createElement(Y,{name:"functional",label:"Tillat funksjonelle"},"Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene og hvilke innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset deg."),c.statistics&&o.createElement(Y,{name:"statistics",label:"Tillat statistikk"},"Informasjonskapslene lagrer statistikk som hjelper oss med å forstå hvordan nettsidene blir brukt, slik at vi kan gjøre dem bedre og enklere å bruke."),c.marketing&&o.createElement(Y,{name:"marketing",label:"Tillat personlig markedsføring"},"Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også gjennom våre samarbeidspartnere, på for eksempel nettsider, annonser og i sosiale medier."),o.createElement("div",{className:"jkl-cookie-consent-modal__button-group"},o.createElement(Q.KM,{"data-testid":"jkl-cookie-consent-godta"},"Godta")))):o.createElement(o.Fragment,null,o.createElement("h1",{className:"jkl-cookie-consent-modal__header"},"Vi bruker informasjonskapsler slik at:"),o.createElement(q.QI,{className:"jkl-cookie-consent-modal__checklist"},o.createElement(q.O2,null,"Nettsidene skal fungere teknisk"),c.functional&&o.createElement(q.O2,null,"Nettsidene skal tilpasses din bruk, dine valg og dine innstillinger."),c.statistics&&o.createElement(q.O2,null,"Vi kan samle statistikk på hvordan nettsidene brukes og dermed kunne forbedre tjenestene våre."),c.marketing&&o.createElement(q.O2,null,"Vi kan gi deg personlig tilpasset innhold og relevante annonser, også gjennom våre samarbeidspartnere, på for eksempel nettsider og i sosiale medier.")),o.createElement("div",{className:"jkl-cookie-consent-modal__button-group"},o.createElement(Q.KM,{onClick:function(){return l("implicit")},"data-testid":"jkl-cookie-consent-godta"},"Godta"),o.createElement(Q.C9,{onClick:function(){i({type:"SET_SHOW_SETTINGS",payload:!0})}},"Innstillinger"))))};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(e){var t=e.blocking,n=e.onAccept,r=E(),i=r.dispatch,a=r.consent,c=(0,s.zP)(a);if((0,o.useEffect)((function(){n&&a!==c&&n(a)}),[n,a,c]),navigator&&!navigator.cookieEnabled)return n&&n({functional:"denied",marketing:"denied",statistics:"denied"}),null;return t?o.createElement(ee,{onAccept:function(e){var t=Object.fromEntries(Object.entries(e).filter((function(e){return null!=e[1]}))),n=ne(ne({},a),t);i({type:"UPDATE_CONSENT",payload:n}),i({type:"SET_SHOW_CONSENT",payload:!1}),function(e,t,n){void 0===t&&(t=10368e3),void 0===n&&(n=f);var r=[];r.push(n+"="+JSON.stringify(e)),r.push("max-age="+t),r.push("SameSite=Lax"),document.cookie=r.join(";")}(n)}}):null},oe=function(){var e=function(){var e=o.useContext(g);if(void 0===e)throw new Error("useCookieConsent must be used within a CookieConsentProvider");return{openConsentModalWithSettings:function(){e.dispatch({type:"SET_SHOW_CONSENT",payload:!0}),e.dispatch({type:"SET_SHOW_SETTINGS",payload:!0})}}}().openConsentModalWithSettings;return o.createElement(Q.C9,{"data-testid":"trigger-cookie-consent",onClick:e},"Informasjonskapsler")},ie=function(){return"undefined"==typeof window?null:o.createElement(y,null,o.createElement(oe,null),o.createElement(re,{blocking:!0}))},ae=["components"],ce={},se=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",t)}},ue=se("Ingress"),le=se("ComponentExample"),fe={_frontmatter:ce},de=a.Z;function pe(e){var t=e.components,n=(0,r.Z)(e,ae);return(0,i.mdx)(de,Object.assign({},fe,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(ue,{mdxType:"Ingress"},"Et Cookie Consent informerer en bruker av et nettsted om bruken av informasjonskapsler."),(0,i.mdx)("p",null,"Vi anser det som at cookies kan deles opp i 3 formål, med hver sine hensikter og lovverk:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Funksjonelle"),(0,i.mdx)("li",{parentName:"ul"},"Markedsføring"),(0,i.mdx)("li",{parentName:"ul"},"Statistikk")),(0,i.mdx)("p",null,"Et kjernekonsept i Cookie Consent komponenten er at man ",(0,i.mdx)("strong",{parentName:"p"},"ikke skal spørre om mer enn man har behov for"),". I praksis\nbetyr dette at man eksplisitt setter hvilke formål man vil inhente et consent for, og man blir ikke spurt om andre\nformål enn disse."),(0,i.mdx)("p",null,"Ved aksept vil komponenten lagre en cookie med en utløpstid på 120 dager, hvor det defineres hvorvidt et consent\ner tatt stilling til:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-JSON"},'{\n    "marketing":null,         // ikke tatt stilling til\n    "functional":"accepted",  // godtatt\n    "statistics":"denied"     // avslått\n}\n')),(0,i.mdx)("h2",null,"Blocking"),(0,i.mdx)("p",null,"Foreløpig støtter Cookie Consent kun en blokkerende modal, hvor brukeren må ta et aktivt valg for å komme videre."),(0,i.mdx)(le,{component:ie,mdxType:"ComponentExample"}))}pe.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-cookie-consent-react-documentation-cookie-consent-mdx-14263ee5e809dce3a30e.js.map