(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4249],{2640:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return ae},default:function(){return de}});var r=n(7077),o=n(7378),i=n(1368),a=n(2803);var s=n(7554),c=(n(3611),n(3804));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f="fremtind-cookie-consent",d=function(e){var t=function(e){void 0===e&&(e=f);var t=document.cookie.split(";").map((function(e){return e.trim().split("=")})).find((function(t){return t[0]===e}));if(t)return t}();return t?JSON.parse(t[1]):e?e():void 0},p=function(e){if(e)return"denied"!==e},m=function(e){var t=Object.entries(l(l({},{functional:null,marketing:null,statistics:null}),e)).map((function(e){var t=e[0],n=e[1];return[t,p(n)]}));return Object.fromEntries(t)},h=function(e){var t={functional:void 0,marketing:void 0,statistics:void 0},n=Object.entries(l(l({},t),e)).map((function(e){var t,n=e[0],r=e[1];return[n,(t=r,void 0===t?null:!1===t||"false"===String(t).toLowerCase()?"denied":"accepted")]}));return Object.fromEntries(n)};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=o.createContext(void 0),b=function(e,t){switch(t.type){case"SET_SHOW_CONSENT":return v(v({},e),{},{isOpen:t.payload});case"SET_SHOW_SETTINGS":return v(v({},e),{},{showSettings:t.payload});case"UPDATE_CONSENT":return v(v({},e),{},{consent:v(v({},e.consent),t.payload)});default:throw new Error("Unhandled action type: "+t.type)}},y=function(e){var t=e.children,n=e.cookieAdapter,r=e.marketing,i=e.functional,a=e.statistics,s=(0,o.useMemo)((function(){var e;return null!==(e=d(n))&&void 0!==e?e:{marketing:null,functional:null,statistics:null}}),[n]),c=(0,o.useMemo)((function(){return{marketing:null!=r&&r,functional:null!=i&&i,statistics:null!=a&&a}}),[r,i,a]),u=o.useReducer(b,{isOpen:!1,showSettings:!1,requirement:c,consent:s}),l=u[0],f=u[1];(0,o.useEffect)((function(){!function(e,t){if(t){for(var n=new Map(Object.entries(t)),r=0,o=Object.entries(e);r<o.length;r++){var i=o[r],a=i[0];if(i[1]&&null===n.get(a))return!0}return!1}return Object.values(e).some((function(e){return e}))}(c,s)?s&&f({type:"UPDATE_CONSENT",payload:s}):f({type:"SET_SHOW_CONSENT",payload:!0})}),[c,s]);var p={state:l,dispatch:f};return o.createElement(g.Provider,{value:p},t)},E=function(){var e=o.useContext(g);if(void 0===e)throw new Error("useCookieConsentState must be used within a CookieConsentProvider");return v({dispatch:e.dispatch},e.state)};var O,w=(O=n(7378))&&"object"==typeof O&&"default"in O?O.default:O;function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function N(e,t,n){return(N=x()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&C(o,n.prototype),o}).apply(null,arguments)}function T(e){var t="function"==typeof Map?new Map:void 0;return(T=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return N(e,arguments,_(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),C(r,e)})(e)}function P(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var D="undefined"!=typeof window;D&&/(android)/i.test(navigator.userAgent),D&&/iPad|iPhone|iPod/.test(String(navigator.platform));D||n.g.HTMLElement||(n.g.HTMLElement=function(){return function e(){j(this,e)}}());var I,M,R=(I="undefined"==typeof window?{}:window.Element.prototype,M=I.matches||I.msMatchesSelector||I.webkitMatchesSelector,I.closest?function(e,t){return e.closest(t)}:function(e,t){for(e.correspondingUseElement&&(e=e.correspondingUseElement);e;e=e.parentElement)if(M.call(e,t))return e;return null});function L(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.hasAttribute(t);return!n===e.hasAttribute(t)&&e[n?"setAttribute":"removeAttribute"](t,""),n}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(e){if(e.nodeType)return[e];if("string"==typeof e)return[].slice.call(t.querySelectorAll(e));if(e.length)return[].slice.call(e)}return[]}var B="[tabindex],a,button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled])",H=function(e){function t(){return j(this,t),P(this,_(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),n=t,o=[{key:"observedAttributes",get:function(){return["hidden","backdrop"]}}],(r=[{key:"connectedCallback",value:function(){this._focus=!0,this._autoBackdrop=null,this.attributeChangedCallback(),this.addEventListener("transitionend",this),document.addEventListener("keydown",this),document.addEventListener("click",this)}},{key:"disconnectedCallback",value:function(){F(this._focus),this._autoBackdrop&&this._autoBackdrop.parentNode.removeChild(this._autoBackdrop),this._focus=this._autoBackdrop=null,this.removeEventListener("transitionend",this),document.removeEventListener("keydown",this),document.removeEventListener("click",this)}},{key:"attributeChangedCallback",value:function(e,t,n){var r=this;if(this._focus){var o="backdrop"===e&&U(this,t),i=this.backdrop;if(this.className=this.className,this.setAttribute("role","dialog"),this.setAttribute("aria-modal",Boolean(i)),o&&o.setAttribute("hidden",""),i&&L(i,"hidden",this.hidden),this.hidden)F(this._focus);else{var a=window.getComputedStyle(this).getPropertyValue("z-index");if(("auto"===a||"0"===a)&&""===this.style.zIndex){var s=W(this.nodeName).filter((function(e){return e!==i&&!r.contains(e)&&V(e)}));a=Math.min(Math.max.apply(Math,[1].concat(A(s.map(z)))),2e9),i&&(i.style.zIndex=a+1),this.style.zIndex=a+2}this._focus=document.activeElement||document.body,setTimeout((function(){return G(r)}))}"hidden"===e&&n!==t&&function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="prevent_recursive_dispatch_maximum_callstack".concat(t);if(e[o])return!0;e[o]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r);e.dispatchEvent(n);e[o]=null}(this,"dialog.toggle")}}},{key:"handleEvent",value:function(e){if(!e.defaultPrevented)if("transitionend"!==e.type||e.target!==this||this.hidden){if("click"===e.type){if(e.target===this.backdrop&&!this.strict)return this.close();var t=R(e.target,"button"),n=t&&t.getAttribute("for");"close"===n&&R(e.target,this.nodeName)===this?this.close():n===this.id&&this.show()}else if("keydown"===e.type&&(9===e.keyCode||27===e.keyCode)&&!this.hidden){if(W("".concat(this.nodeName,":not([hidden])")).sort((function(e,t){return z(e)-z(t)})).pop()!==this)return;9===e.keyCode&&function(e,t){var n=W(B,e).filter(V),r=n[t.shiftKey?0:n.length-1];t.target!==r&&e.contains(t.target)||(t.preventDefault(),n[t.shiftKey?n.length-1:0].focus())}(this,e),27!==e.keyCode||this.strict||(e.preventDefault(),this.close())}}else G(this)}},{key:"close",value:function(){this.hidden=!0}},{key:"show",value:function(){this.hidden=!1}},{key:"open",get:function(){return!this.hidden},set:function(e){this.hidden=!e}},{key:"strict",get:function(){return this.hasAttribute("strict")},set:function(e){L(this,"strict",e)}},{key:"hidden",get:function(){return this.hasAttribute("hidden")},set:function(e){L(this,"hidden",e)}},{key:"backdrop",get:function(){return U(this,this.getAttribute("backdrop"))},set:function(e){this.setAttribute("backdrop",e||"false")}}])&&S(n.prototype,r),o&&S(n,o),t}(T(HTMLElement));function U(e,t){var n=e.nextElementSibling;return!(!e.parentNode||"false"===t)&&(t&&"true"!==t?document.getElementById(t)||!1:n&&"BACKDROP"===n.nodeName?n:(e._autoBackdrop=document.createElement("backdrop"),e.insertAdjacentElement("afterend",e._autoBackdrop)))}function V(e){return e.clientWidth&&e.clientHeight&&"hidden"!==window.getComputedStyle(e).getPropertyValue("visibility")}function z(e){for(var t=e,n=1;t;t=t.offsetParent)n+=Number(window.getComputedStyle(t).getPropertyValue("z-index"))||0;return n}function F(e){setTimeout((function(){try{e.focus()}catch(t){}}))}function G(e){if(!e.contains(document.activeElement)&&V(e)){var t=W("[autofocus]",e).concat(W(B,e)).filter(V)[0];try{t.focus()}catch(n){console.warn(e,'is initialized without focusable elements. Please add [tabindex="-1"] the main element (for instance a <h1>)')}}}var Z=function(){var e="undefined"==typeof window?{}:window.Element.prototype,t=e.matches||e.msMatchesSelector||e.webkitMatchesSelector;return e.closest?function(e,t){return e.closest(t)}:function(e,n){for(;e;e=e.parentElement)if(t.call(e,n))return e;return null}}();var K=function(e,t){void 0===t&&(t={});var n=(t.name||e.name||String(e).match(/function ([^(]+)/)[1]).replace(/.[A-Z]/g,(function(e){return e[0]+"-"+e[1]})),r=t.props||[],o=t.customEvents||[],i=o.reduce((function(e,t){return e[t]="on"+t.replace(/(^|\.)./g,(function(e){return e.slice(-1).toUpperCase()})),e}),{}),a=r.concat("forwardRef",Object.keys(i).map((function(e){return i[e]}))),s=(n+"-"+(t.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(t){function n(e){var n=this;t.call(this,e),this.ref=function(e){return"function"==typeof n.props.forwardRef?n.props.forwardRef(e):n.props.forwardRef&&(n.props.forwardRef.current=e),n.el=e},Object.keys(i).forEach((function(e){var t=i[e];n[e]=function(e){n.props[t]&&Z(e.target,n.el.nodeName)===n.el&&n.props[t](e)}}))}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var t=this;window.customElements.get(s)||window.customElements.define(s,e),r.forEach((function(e){e in t.props&&(t.el[e]=t.props[e])})),o.forEach((function(e){t.el.addEventListener(e,t[e])}))},n.prototype.componentDidUpdate=function(e){var t=this;r.forEach((function(n){e[n]!==t.props[n]&&(t.el[n]=t.props[n])}))},n.prototype.componentWillUnmount=function(){var e=this;o.forEach((function(t){e.el.removeEventListener(t,e[t])}))},n.prototype.render=function(){var e=this;return w.createElement(s,Object.keys(this.props).reduce((function(t,n){return-1===a.indexOf(n)&&("className"===n?t.class=e.props[n]:!0===e.props[n]?t[n]="":!1!==e.props[n]&&(t[n]=e.props[n])),t}),{ref:this.ref}))},n}(w.Component)}(H,{customEvents:["dialog.toggle"],props:["backdrop"],suffix:"3.0.7"}),X=n(4900),q=n(5529),J=n(897),Q=n(8572),Y=function(e){var t=e.name,n=e.label,r=e.children,i=(0,Q.Gc)().register;return o.createElement(o.Fragment,null,o.createElement(q.X,Object.assign({value:"True"},i(t),{className:"jkl-cookie-consent-modal__checkbox"}),n),o.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},r))},$=function(e){var t=e.onAccept,n=E(),r=n.consent,i=n.dispatch,a=n.isOpen,s=n.requirement,c=n.showSettings,u=(0,Q.cI)({defaultValues:m(r)}),l=function(e){t("implicit"===e?h(s):e)};return o.createElement(K,{backdrop:!0,strict:!0,hidden:!a,"aria-label":"Informasjonskapsler",className:"jkl-cookie-consent-modal","data-testautoid":"jkl-cookie-consent-modal"},c?o.createElement(Q.RV,u,o.createElement("h1",{className:"jkl-cookie-consent-modal__header"},"Informasjonskapsler"),o.createElement(X.QI,{className:"jkl-cookie-consent-modal__checklist"},o.createElement(X.O2,null,"Nettsidene skal fungere teknisk")),o.createElement("p",{className:"jkl-cookie-consent-modal__info-text"},"For at nettsidene skal fungere, må vi bruke tekniske informasjonskapsler. Denne kan derfor ikke slås av."),o.createElement("form",{onSubmit:u.handleSubmit((function(e){l(h(e))}))},s.functional&&o.createElement(Y,{name:"functional",label:"Tillat funksjonelle"},"Funksjonelle informasjonskapsler lagrer opplysninger om din bruk av nettsidene og hvilke innstillinger du har gjort, slik at du kan få funksjonalitet tilpasset deg."),s.statistics&&o.createElement(Y,{name:"statistics",label:"Tillat statistikk"},"Informasjonskapslene lagrer statistikk som hjelper oss med å forstå hvordan nettsidene blir brukt, slik at vi kan gjøre dem bedre og enklere å bruke."),s.marketing&&o.createElement(Y,{name:"marketing",label:"Tillat personlig markedsføring"},"Dette gjør at vi kan gi deg mer relevant og tilpasset markedsføring, også gjennom våre samarbeidspartnere, på for eksempel nettsider, annonser og i sosiale medier."),o.createElement("div",{className:"jkl-cookie-consent-modal__button-group"},o.createElement(J.KM,{"data-testid":"jkl-cookie-consent-godta"},"Godta")))):o.createElement(o.Fragment,null,o.createElement("h1",{className:"jkl-cookie-consent-modal__header"},"Vi bruker informasjonskapsler slik at:"),o.createElement(X.QI,{className:"jkl-cookie-consent-modal__checklist"},o.createElement(X.O2,null,"Nettsidene skal fungere teknisk"),s.functional&&o.createElement(X.O2,null,"Nettsidene skal tilpasses din bruk, dine valg og dine innstillinger."),s.statistics&&o.createElement(X.O2,null,"Vi kan samle statistikk på hvordan nettsidene brukes og dermed kunne forbedre tjenestene våre."),s.marketing&&o.createElement(X.O2,null,"Vi kan gi deg personlig tilpasset innhold og relevante annonser, også gjennom våre samarbeidspartnere, på for eksempel nettsider og i sosiale medier.")),o.createElement("div",{className:"jkl-cookie-consent-modal__button-group"},o.createElement(J.KM,{onClick:function(){return l("implicit")},"data-testid":"jkl-cookie-consent-godta"},"Godta"),o.createElement(J.C9,{onClick:function(){i({type:"SET_SHOW_SETTINGS",payload:!0})}},"Innstillinger"))))};function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=function(e){var t=e.blocking,n=e.onAccept,r=E(),i=r.dispatch,a=r.consent,s=(0,c.zP)(a);if((0,o.useEffect)((function(){n&&a!==s&&n(a)}),[n,a,s]),navigator&&!navigator.cookieEnabled)return n&&n({functional:"denied",marketing:"denied",statistics:"denied"}),null;return t?o.createElement($,{onAccept:function(e){var t=Object.fromEntries(Object.entries(e).filter((function(e){return e[0],null!=e[1]}))),n=te(te({},a),t);i({type:"UPDATE_CONSENT",payload:n}),i({type:"SET_SHOW_CONSENT",payload:!1}),function(e,t,n){void 0===t&&(t=10368e3),void 0===n&&(n=f);var r=[];r.push(n+"="+JSON.stringify(e)),r.push("max-age="+t),r.push("SameSite=Lax"),document.cookie=r.join(";")}(n)}}):null},re=function(){var e=function(){var e=o.useContext(g);if(void 0===e)throw new Error("useCookieConsent must be used within a CookieConsentProvider");return{openConsentModalWithSettings:function(){e.dispatch({type:"SET_SHOW_CONSENT",payload:!0}),e.dispatch({type:"SET_SHOW_SETTINGS",payload:!0})}}}().openConsentModalWithSettings;return o.createElement(J.C9,{"data-testid":"trigger-cookie-consent",onClick:e},"Informasjonskapsler")},oe=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),"undefined"==typeof window?null:o.createElement(y,null,o.createElement(re,null),o.createElement(ne,{blocking:!0}))},ie=["components"],ae={},se=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",t)}},ce=se("Ingress"),ue=se("ComponentExample"),le={_frontmatter:ae},fe=a.Z;function de(e){var t=e.components,n=(0,r.Z)(e,ie);return(0,i.mdx)(fe,Object.assign({},le,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(ce,{mdxType:"Ingress"},"Et Cookie Consent informerer en bruker av et nettsted om bruken av informasjonskapsler."),(0,i.mdx)("p",null,"Vi anser det som at cookies kan deles opp i 3 formål, med hver sine hensikter og lovverk:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Funksjonelle"),(0,i.mdx)("li",{parentName:"ul"},"Markedsføring"),(0,i.mdx)("li",{parentName:"ul"},"Statistikk")),(0,i.mdx)("p",null,"Et kjernekonsept i Cookie Consent komponenten er at man ",(0,i.mdx)("strong",{parentName:"p"},"ikke skal spørre om mer enn man har behov for"),". I praksis\nbetyr dette at man eksplisitt setter hvilke formål man vil inhente et consent for, og man blir ikke spurt om andre\nformål enn disse."),(0,i.mdx)("p",null,"Ved aksept vil komponenten lagre en cookie med en utløpstid på 120 dager, hvor det defineres hvorvidt et consent\ner tatt stilling til:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-JSON"},'{\n    "marketing":null,         // ikke tatt stilling til\n    "functional":"accepted",  // godtatt\n    "statistics":"denied"     // avslått\n}\n')),(0,i.mdx)("h2",null,"Blocking"),(0,i.mdx)("p",null,"Foreløpig støtter Cookie Consent kun en blokkerende modal, hvor brukeren må ta et aktivt valg for å komme videre."),(0,i.mdx)(ue,{component:oe,mdxType:"ComponentExample"}))}de.isMDXComponent=!0},6261:function(e,t,n){var r=n(401),o=n(2442),i=n(8663)("toStringTag"),a="Arguments"==o(function(){return arguments}());e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),i))?n:a?o(t):"Object"==(r=o(t))&&"function"==typeof t.callee?"Arguments":r}},1375:function(e,t,n){"use strict";var r=n(5198),o=n(288),i=n(4781);e.exports=function(e,t,n){var a=r(t);a in e?o.f(e,a,i(0,n)):e[a]=n}},6727:function(e,t,n){var r=n(6261),o=n(5494),i=n(8663)("iterator");e.exports=function(e){if(null!=e)return e[i]||e["@@iterator"]||o[r(e)]}},9480:function(e,t,n){var r=n(8663),o=n(5494),i=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||a[i]===e)}},4701:function(e,t,n){var r=n(3136),o=n(9480),i=n(1592),a=n(5290),s=n(6727),c=n(7459),u=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var l,f,d,p,m,h,k,v=n&&n.that,g=!(!n||!n.AS_ENTRIES),b=!(!n||!n.IS_ITERATOR),y=!(!n||!n.INTERRUPTED),E=a(t,v,1+g+y),O=function(e){return l&&c(l),new u(!0,e)},w=function(e){return g?(r(e),y?E(e[0],e[1],O):E(e[0],e[1])):y?E(e,O):E(e)};if(b)l=e;else{if("function"!=typeof(f=s(e)))throw TypeError("Target is not iterable");if(o(f)){for(d=0,p=i(e.length);p>d;d++)if((m=w(e[d]))&&m instanceof u)return m;return new u(!1)}l=f.call(e)}for(h=l.next;!(k=h.call(l)).done;){try{m=w(k.value)}catch(j){throw c(l),j}if("object"==typeof m&&m&&m instanceof u)return m}return new u(!1)}},7459:function(e,t,n){var r=n(3136);e.exports=function(e){var t=e.return;if(void 0!==t)return r(t.call(e)).value}},5494:function(e){e.exports={}},401:function(e,t,n){var r={};r[n(8663)("toStringTag")]="z",e.exports="[object z]"===String(r)},3611:function(e,t,n){var r=n(881),o=n(4701),i=n(1375);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){i(t,e,n)}),{AS_ENTRIES:!0}),t}})}}]);
//# sourceMappingURL=component---packages-cookie-consent-react-documentation-cookie-consent-mdx-d98e5068f3632a511b9f.js.map