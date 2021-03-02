/*! For license information please see component---src-texts-getstarted-examples-mdx-b83cca8d3b220629bbb0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{PJJj:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return v})),t.d(r,"c",(function(){return p}));var n=t("aF/D"),a=t.n(n),i=t("nVCu"),u=t.n(i),c=t("mXGw"),s=t.n(c),o=t("8Jek"),l=t.n(o),f=t("kFFI"),d=Object(c.forwardRef)((function(e,r){return s.a.createElement("button",a()({},e,{ref:r}))}));d.displayName="BaseButton";var b=function(e){return Object(c.forwardRef)((function(r,t){var n=r.children,i=r.className,c=void 0===i?"":i,o=r.forceCompact,b=r.inverted,m=r.onClick,v=r.onTouchStart,p=r.loader,g=u()(r,["children","className","forceCompact","inverted","onClick","onTouchStart","loader"]),y=l()("jkl-button","jkl-button--"+e,{"jkl-button--compact":o,"jkl-button--inverted":b}),j=function(e){v&&v(e);var r=e.target;if(r&&e.targetTouches.length){var t=e.targetTouches[0].clientX-r.getBoundingClientRect().x,n=e.targetTouches[0].clientY-r.getBoundingClientRect().y;r.style.setProperty("--jkl-touch-xcoord",t.toPrecision(4)+"px"),r.style.setProperty("--jkl-touch-ycoord",n.toPrecision(4)+"px"),r.classList.add("jkl-button--pressed"),setTimeout((function(){return r.classList.remove("jkl-button--pressed")}),400)}};return p?s.a.createElement("div",{className:l()("jkl-button-wrapper",c,{"jkl-button-wrapper--compact":o})},s.a.createElement("div",{className:l()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!p.showLoader})},s.a.createElement(d,a()({className:y,onClick:m,onTouchStart:j,disabled:null==p?void 0:p.showLoader},g,{ref:t}),n),s.a.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},s.a.createElement(f.a,{textDescription:p.textDescription,negative:b,"aria-hidden":!!p.showLoader,inline:!0})))):s.a.createElement(d,a()({className:l()(y,c),onClick:m,onTouchStart:j},g,{ref:t}),n)}))},m=b("primary"),v=b("secondary"),p=b("tertiary")},Xcxe:function(e,r,t){},hsnf:function(e,r,t){"use strict";t.r(r),t.d(r,"_frontmatter",(function(){return Ye})),t.d(r,"default",(function(){return ar}));var n=t("+I+c"),a=t("mXGw"),i=t.n(a),u=t("/FXl"),c=t("7XvJ"),s=t("2peb"),o=t("PJJj"),l=t("TUzA"),f=(t("x3Br"),t("NthX")),d=t.n(f);var b=t("hQoZ");function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(a)throw i}}return t}}(e,r)||Object(b.a)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t("wcNg");var v=t("eijD"),p=t("mK0O"),g=t("6CzD");function y(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw i}}}}function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var h=function(e){return e instanceof HTMLElement},k="blur",O="change",x="input",E="onBlur",C="onChange",w="onSubmit",S="onTouched",A="all",V="max",R="min",F="maxLength",D="minLength",N="pattern",L="required",_="validate";function T(e,r,t){var n=e.ref;h(n)&&t&&(n.addEventListener(r?O:x,t),n.addEventListener(k,t))}var B=function(e){return null==e},M=function(e){return"object"==typeof e},I=function(e){return!B(e)&&!Array.isArray(e)&&M(e)&&!(e instanceof Date)},P=function(e){return/^\w*$/.test(e)},X=function(e){return e.filter(Boolean)},J=function(e){return X(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."))};function W(e,r,t){for(var n=-1,a=P(r)?[r]:J(r),i=a.length,u=i-1;++n<i;){var c=a[n],s=t;if(n!==u){var o=e[c];s=I(o)||Array.isArray(o)?o:isNaN(+a[n+1])?{}:[]}e[c]=s,e=e[c]}return e}var q=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var t in e)P(t)?r[t]=e[t]:W(r,t,e[t]);return r},G=function(e){return void 0===e},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,n=X(r.split(/[,[\].]+?/)).reduce((function(e,r){return B(e)?e:e[r]}),e);return G(n)||n===e?G(e[r])?t:e[r]:n},U=function(e,r){for(var t in e)if(H(r,t)){var n=e[t];if(n){if(n.ref.focus&&G(n.ref.focus()))break;if(n.options){n.options[0].ref.focus();break}}}},$=function(e,r){h(e)&&e.removeEventListener&&(e.removeEventListener(x,r),e.removeEventListener(O,r),e.removeEventListener(k,r))},z={isValid:!1,value:null},K=function(e){return Array.isArray(e)?e.reduce((function(e,r){return r&&r.ref.checked?{isValid:!0,value:r.ref.value}:e}),z):z},Q=function(e){return"radio"===e.type},Y=function(e){return"file"===e.type},Z=function(e){return"checkbox"===e.type},ee=function(e){return e.type==="".concat("select","-multiple")},re={value:!1,isValid:!1},te={value:!0,isValid:!0},ne=function(e){if(Array.isArray(e)){if(e.length>1){var r=e.filter((function(e){return e&&e.ref.checked})).map((function(e){return e.ref.value}));return{value:r,isValid:!!r.length}}var t=e[0].ref,n=t.checked,a=t.value,i=t.attributes;return n?i&&!G(i.value)?G(a)||""===a?te:{value:a,isValid:!0}:te:re}return re};function ae(e,r,t,n,a){var i,u=e.current[r];if(u){var c=u.ref,s=c.value,o=c.disabled,l=u.ref,f=u.valueAsNumber,d=u.valueAsDate,b=u.setValueAs;if(o&&n)return;return Y(l)?l.files:Q(l)?K(u.options).value:ee(l)?(i=l.options,Object(g.a)(i).filter((function(e){return e.selected})).map((function(e){return e.value}))):Z(l)?ne(u.options).value:a?s:f?""===s?NaN:+s:d?l.valueAsDate:b?b(s):s}if(t)return H(t.current,r)}function ie(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&ie(e.parentNode)}var ue=function(e){return I(e)&&!Object.keys(e).length},ce=function(e){return"boolean"==typeof e};function se(e,r){var t,n=P(r)?[r]:J(r),a=1==n.length?e:function(e,r){for(var t=r.slice(0,-1).length,n=0;n<t;)e=G(e)?n++:e[r[n++]];return e}(e,n),i=n[n.length-1];a&&delete a[i];for(var u=0;u<n.slice(0,-1).length;u++){var c=-1,s=void 0,o=n.slice(0,-(u+1)),l=o.length-1;for(u>0&&(t=e);++c<o.length;){var f=o[c];s=s?s[f]:e[f],l===c&&(I(s)&&ue(s)||Array.isArray(s)&&!s.filter((function(e){return I(e)&&!ue(e)||ce(e)})).length)&&(t?delete t[f]:delete e[f]),t=s}}return e}var oe=function(e,r){return e&&e.ref===r};function le(e,r,t,n,a,i){var u=t.ref,c=t.ref.name,s=e.current[c];if(!a){var o=ae(e,c,n);!G(o)&&W(n.current,c,o)}u.type&&s?Q(u)||Z(u)?Array.isArray(s.options)&&s.options.length?(X(s.options).forEach((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;(ie(e.ref)&&oe(e,e.ref)||i)&&($(e.ref,r),se(s.options,"[".concat(t,"]")))})),s.options&&!X(s.options).length&&delete e.current[c]):delete e.current[c]:(ie(u)&&oe(s,u)||i)&&($(u,r),delete e.current[c]):delete e.current[c]}var fe=function(e){return B(e)||!M(e)};function de(e,r){if(fe(e)||fe(r))return r;for(var t in r){var n=e[t],a=r[t];try{e[t]=I(n)&&I(a)||Array.isArray(n)&&Array.isArray(a)?de(n,a):a}catch(i){}}return e}function be(e,r,t){if(fe(e)||fe(r)||e instanceof Date||r instanceof Date)return e===r;if(!Object(a.isValidElement)(e)){var n=Object.keys(e),i=Object.keys(r);if(n.length!==i.length)return!1;for(var u=0,c=n;u<c.length;u++){var s=c[u],o=e[s];if(!t||"ref"!==s){var l=r[s];if((I(o)||Array.isArray(o))&&(I(l)||Array.isArray(l))?!be(o,l,t):o!==l)return!1}}}return!0}function me(e,r,t,n,a){for(var i=-1;++i<e.length;){for(var u in e[i])Array.isArray(e[i][u])?(!t[i]&&(t[i]={}),t[i][u]=[],me(e[i][u],H(r[i]||{},u,[]),t[i][u],t[i],u)):be(H(r[i]||{},u),e[i][u])?W(t[i]||{},u):t[i]=Object.assign(Object.assign({},t[i]),Object(p.a)({},u,!0));n&&!t.length&&delete n[a]}return t}var ve=function(e,r,t){return de(me(e,r,t.slice(0,e.length)),me(r,e,t.slice(0,e.length)))},pe=function(e){return"string"==typeof e},ge=function(e,r,t,n,a){var i={},u=function(r){(G(a)||(pe(a)?r.startsWith(a):Array.isArray(a)&&a.find((function(e){return r.startsWith(e)}))))&&(i[r]=ae(e,r,void 0,n))};for(var c in e.current)u(c);return t?q(i):de(r,q(i))},ye=function(e){var r=e.errors,t=e.name,n=e.error,a=e.validFields,i=e.fieldsWithValidation,u=G(n),c=H(r,t);return u&&!!c||!u&&!be(c,n,!0)||u&&H(i,t)&&!H(a,t)},je=function(e){return e instanceof RegExp},he=function(e){return I(e)&&!je(e)?e:{value:e,message:""}},ke=function(e){return"function"==typeof e},Oe=function(e){return pe(e)||Object(a.isValidElement)(e)};function xe(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"validate";if(Oe(e)||ce(e)&&!e)return{type:t,message:Oe(e)?e:"",ref:r}}var Ee=function(e,r,t,n,a){return r?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),Object(p.a)({},n,a||!0))}):{}},Ce=function(){var e=Object(v.a)(d.a.mark((function e(r,t,n,a){var i,u,c,s,o,l,f,b,v,p,g,y,j,h,k,O,x,E,C,w,S,A,T,M,P,X,J,W,q,G,H,U,$,z,Y,ee,re,te,ie,se,oe,le,fe,de,be,me;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.ref,u=n.ref.value,c=n.options,s=n.required,o=n.maxLength,l=n.minLength,f=n.min,b=n.max,v=n.pattern,p=n.validate,g=i.name,y={},j=Q(i),h=Z(i),k=j||h,O=""===u,x=Ee.bind(null,g,t,y),E=function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:F,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:D,u=e?r:t;y[g]=Object.assign({type:e?n:a,message:u,ref:i},x(e?n:a,u))},!s||!(!j&&!h&&(O||B(u))||ce(u)&&!u||h&&!ne(c).isValid||j&&!K(c).isValid)){e.next=15;break}if(C=Oe(s)?{value:!!s,message:s}:he(s),w=C.value,S=C.message,!w){e.next=15;break}if(y[g]=Object.assign({type:L,message:S,ref:k?((r.current[g].options||[])[0]||{}).ref:i},x(L,S)),t){e.next=15;break}return e.abrupt("return",y);case 15:if(B(f)&&B(b)||""===u){e.next=23;break}if(M=he(b),P=he(f),isNaN(u)?(J=i.valueAsDate||new Date(u),pe(M.value)&&(A=J>new Date(M.value)),pe(P.value)&&(T=J<new Date(P.value))):(X=i.valueAsNumber||parseFloat(u),B(M.value)||(A=X>M.value),B(P.value)||(T=X<P.value)),!A&&!T){e.next=23;break}if(E(!!A,M.message,P.message,V,R),t){e.next=23;break}return e.abrupt("return",y);case 23:if(!pe(u)||O||!o&&!l){e.next=32;break}if(W=he(o),q=he(l),G=!B(W.value)&&u.length>W.value,H=!B(q.value)&&u.length<q.value,!G&&!H){e.next=32;break}if(E(G,W.message,q.message),t){e.next=32;break}return e.abrupt("return",y);case 32:if(!pe(u)||!v||O){e.next=38;break}if(U=he(v),$=U.value,z=U.message,!je($)||$.test(u)){e.next=38;break}if(y[g]=Object.assign({type:N,message:z,ref:i},x(N,z)),t){e.next=38;break}return e.abrupt("return",y);case 38:if(!p){e.next=71;break}if(Y=ae(r,g,a,!1,!0),ee=k&&c?c[0].ref:i,!ke(p)){e.next=52;break}return e.next=44,p(Y);case 44:if(re=e.sent,!(te=xe(re,ee))){e.next=50;break}if(y[g]=Object.assign(Object.assign({},te),x(_,te.message)),t){e.next=50;break}return e.abrupt("return",y);case 50:e.next=71;break;case 52:if(!I(p)){e.next=71;break}ie={},se=0,oe=Object.entries(p);case 55:if(!(se<oe.length)){e.next=67;break}if(le=m(oe[se],2),fe=le[0],de=le[1],ue(ie)||t){e.next=59;break}return e.abrupt("break",67);case 59:return e.next=61,de(Y);case 61:be=e.sent,(me=xe(be,ee,fe))&&(ie=Object.assign(Object.assign({},me),x(fe,me.message)),t&&(y[g]=ie));case 64:se++,e.next=55;break;case 67:if(ue(ie)){e.next=71;break}if(y[g]=Object.assign({ref:ee},ie),t){e.next=71;break}return e.abrupt("return",y);case 71:return e.abrupt("return",y);case 72:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),we=function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(var a in t){var i=r+(I(t)?".".concat(a):"[".concat(a,"]"));fe(t[a])?n.push(i):e(i,t[a],n)}return n},Se=function(e,r,t,n,a){var i=void 0;return t.add(r),ue(e)||(i=H(e,r),(I(i)||Array.isArray(i))&&we(r,i).forEach((function(e){return t.add(e)}))),G(i)?a?n:H(n,r):i},Ae=function(e){var r=e.isOnBlur,t=e.isOnChange,n=e.isOnTouch,a=e.isTouched,i=e.isReValidateOnBlur,u=e.isReValidateOnChange,c=e.isBlurEvent,s=e.isSubmitted;return!e.isOnAll&&(!s&&n?!(a||c):(s?i:r)?!c:!(s?u:t)||c)},Ve=function(e){return e.substring(0,e.indexOf("["))},Re=function(e,r){return RegExp("^".concat(r,"([|.)\\d+").replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e)},Fe=function(e,r){return Object(g.a)(e).some((function(e){return Re(r,e)}))},De=function(e){return e.type==="".concat("select","-one")};function Ne(e,r){var t=new MutationObserver((function(){for(var t=0,n=Object.values(e.current);t<n.length;t++){var a=n[t];if(a&&a.options){var i,u=y(a.options);try{for(u.s();!(i=u.n()).done;){var c=i.value;c&&c.ref&&ie(c.ref)&&r(a)}}catch(s){u.e(s)}finally{u.f()}}else a&&ie(a.ref)&&r(a)}}));return t.observe(window.document,{childList:!0,subtree:!0}),t}var Le="undefined"!=typeof window&&"undefined"!=typeof document;function _e(e){var r;if(fe(e)||Le&&(e instanceof File||h(e)))return e;if(e instanceof Date)return r=new Date(e.getTime());if(e instanceof Set){r=new Set;var t,n=y(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;r.add(a)}}catch(o){n.e(o)}finally{n.f()}return r}if(e instanceof Map){r=new Map;var i,u=y(e.keys());try{for(u.s();!(i=u.n()).done;){var c=i.value;r.set(c,_e(e.get(c)))}}catch(o){u.e(o)}finally{u.f()}return r}for(var s in r=Array.isArray(e)?[]:{},e)r[s]=_e(e[s]);return r}var Te=function(e){return{isOnSubmit:!e||e===w,isOnBlur:e===E,isOnChange:e===C,isOnAll:e===A,isOnTouch:e===S}},Be=function(e){return Q(e)||Z(e)},Me="undefined"==typeof window,Ie=Le?"Proxy"in window:"undefined"!=typeof Proxy;function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.mode,t=void 0===r?w:r,n=e.reValidateMode,i=void 0===n?C:n,u=e.resolver,c=e.context,s=e.defaultValues,o=void 0===s?{}:s,l=e.shouldFocusError,f=void 0===l||l,b=e.shouldUnregister,j=void 0===b||b,O=e.criteriaMode,x=Object(a.useRef)({}),E=Object(a.useRef)({}),S=Object(a.useRef)({}),V=Object(a.useRef)(new Set),R=Object(a.useRef)({}),F=Object(a.useRef)({}),D=Object(a.useRef)({}),N=Object(a.useRef)({}),L=Object(a.useRef)(o),_=Object(a.useRef)(!1),M=Object(a.useRef)(!1),J=Object(a.useRef)(),$=Object(a.useRef)({}),z=Object(a.useRef)({}),K=Object(a.useRef)(c),re=Object(a.useRef)(u),te=Object(a.useRef)(new Set),ne=Object(a.useRef)(Te(t)),ie=ne.current,ce=ie.isOnSubmit,oe=ie.isOnTouch,de=O===A,me=Object(a.useState)({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!ce,errors:{}}),je=m(me,2),he=je[0],Oe=je[1],xe=Object(a.useRef)({isDirty:!Ie,dirtyFields:!Ie,touched:!Ie||oe,isValidating:!Ie,isSubmitting:!Ie,isValid:!Ie}),Ee=Object(a.useRef)(he),Re=Object(a.useRef)(),Pe=Object(a.useRef)(Te(i)).current,Xe=Pe.isOnBlur,Je=Pe.isOnChange;K.current=c,re.current=u,Ee.current=he,$.current=j?{}:ue($.current)?_e(o):$.current;var We=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_.current||(Ee.current=Object.assign(Object.assign({},Ee.current),e),Oe(Ee.current))}),[]),qe=function(){return xe.current.isValidating&&We({isValidating:!0})},Ge=Object(a.useCallback)((function(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4?arguments[4]:void 0,i=t||ye({errors:Ee.current.errors,error:r,name:e,validFields:N.current,fieldsWithValidation:D.current}),u=H(Ee.current.errors,e);r?(se(N.current,e),i=i||!u||!be(u,r,!0),W(Ee.current.errors,e,r)):((H(D.current,e)||re.current)&&(W(N.current,e,!0),i=i||u),se(Ee.current.errors,e)),(i&&!B(t)||!ue(n)||xe.current.isValidating)&&We(Object.assign(Object.assign(Object.assign({},n),re.current?{isValid:!!a}:{}),{isValidating:!1}))}),[]),He=Object(a.useCallback)((function(e,r){var t=x.current[e],n=t.ref,a=t.options,i=Le&&h(n)&&B(r)?"":r;Q(n)?(a||[]).forEach((function(e){var r=e.ref;return r.checked=r.value===i})):Y(n)&&!pe(i)?n.files=i:ee(n)?Object(g.a)(n.options).forEach((function(e){return e.selected=i.includes(e.value)})):Z(n)&&a?a.length>1?a.forEach((function(e){var r=e.ref;return r.checked=Array.isArray(i)?!!i.find((function(e){return e===r.value})):i===r.value})):a[0].ref.checked=!!i:n.value=i}),[]),Ue=Object(a.useCallback)((function(e,r){if(xe.current.isDirty){var t=ar();return e&&r&&W(t,e,r),!be(t,L.current)}return!1}),[]),$e=Object(a.useCallback)((function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(xe.current.isDirty||xe.current.dirtyFields){var t=!be(H(L.current,e),ae(x,e,$)),n=H(Ee.current.dirtyFields,e),a=Ee.current.isDirty;t?W(Ee.current.dirtyFields,e,!0):se(Ee.current.dirtyFields,e);var i={isDirty:Ue(),dirtyFields:Ee.current.dirtyFields},u=xe.current.isDirty&&a!==i.isDirty||xe.current.dirtyFields&&n!==H(Ee.current.dirtyFields,e);return u&&r&&We(i),u?i:{}}return{}}),[]),ze=Object(a.useCallback)(function(){var e=Object(v.a)(d.a.mark((function e(r,t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=4;break;case 4:return e.next=6,Ce(x,de,x.current[r],$);case 6:return e.t0=r,n=e.sent[e.t0],Ge(r,n,t),e.abrupt("return",G(n));case 10:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),[Ge,de]),Ke=Object(a.useCallback)(function(){var e=Object(v.a)(d.a.mark((function e(r){var t,n,a,i,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.current(ar(),K.current,de);case 2:if(t=e.sent,n=t.errors,a=Ee.current.isValid,!Array.isArray(r)){e.next=11;break}return i=r.map((function(e){var r=H(n,e);return r?W(Ee.current.errors,e,r):se(Ee.current.errors,e),!r})).every(Boolean),We({isValid:ue(n),isValidating:!1}),e.abrupt("return",i);case 11:return u=H(n,r),Ge(r,u,a!==ue(n),{},ue(n)),e.abrupt("return",!u);case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[Ge,de]),Qe=Object(a.useCallback)(function(){var e=Object(v.a)(d.a.mark((function e(r){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r||Object.keys(x.current),qe(),!re.current){e.next=4;break}return e.abrupt("return",Ke(t));case 4:if(!Array.isArray(t)){e.next=11;break}return!r&&(Ee.current.errors={}),e.next=8,Promise.all(t.map(function(){var e=Object(v.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ze(r,null);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 8:return n=e.sent,We({isValidating:!1}),e.abrupt("return",n.every(Boolean));case 11:return e.next=13,ze(t);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[Ke,ze]),Ye=Object(a.useCallback)((function(e,r,t){var n=t.shouldDirty,a=t.shouldValidate,i={};W(i,e,r);var u,c=y(we(e,r));try{for(c.s();!(u=c.n()).done;){var s=u.value;x.current[s]&&(He(s,H(i,s)),n&&$e(s),a&&Qe(s))}}catch(o){c.e(o)}finally{c.f()}}),[Qe,He,$e]),Ze=Object(a.useCallback)((function(e,r,t){if(!j&&!fe(r)&&W($.current,e,Object.assign({},r)),x.current[e])He(e,r),t.shouldDirty&&$e(e),t.shouldValidate&&Qe(e);else if(!fe(r)&&(Ye(e,r,t),te.current.has(e))){var n=Ve(e)||e;W(E.current,e,r),z.current[n](Object(p.a)({},n,H(E.current,n))),(xe.current.isDirty||xe.current.dirtyFields)&&t.shouldDirty&&(W(Ee.current.dirtyFields,e,ve(r,H(L.current,e,[]),H(Ee.current.dirtyFields,e,[]))),We({isDirty:!be(Object.assign(Object.assign({},ar()),Object(p.a)({},e,r)),L.current)}))}!j&&W($.current,e,r)}),[$e,He,Ye]),er=function(e){return M.current||V.current.has(e)||V.current.has((e.match(/\w+/)||[])[0])},rr=function(e){var r=!0;if(!ue(R.current))for(var t in R.current)e&&R.current[t].size&&!R.current[t].has(e)&&!R.current[t].has(Ve(e))||(F.current[t](),r=!1);return r};function tr(e,r,t){Ze(e,r,t||{}),er(e)&&We(),rr(e)}function nr(e){if(!j){var r,t=_e(e),n=y(te.current);try{for(n.s();!(r=n.n()).done;){var a=r.value;P(a)&&!t[a]&&(t=Object.assign(Object.assign({},t),Object(p.a)({},a,[])))}}catch(i){n.e(i)}finally{n.f()}return t}return e}function ar(e){if(pe(e))return ae(x,e,$);if(Array.isArray(e)){var r,t={},n=y(e);try{for(n.s();!(r=n.n()).done;){var a=r.value;W(t,a,ae(x,a,$))}}catch(i){n.e(i)}finally{n.f()}return t}return nr(ge(x,_e($.current),j))}J.current=J.current?J.current:function(){var e=Object(v.a)(d.a.mark((function e(r){var t,n,a,i,u,c,s,o,l,f,b,m,v,p,g;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.type,n=r.target,a=n.name,!(i=x.current[a])){e.next=32;break}if(s=t===k,o=Ae(Object.assign({isBlurEvent:s,isReValidateOnChange:Je,isReValidateOnBlur:Xe,isTouched:!!H(Ee.current.touched,a),isSubmitted:Ee.current.isSubmitted},ne.current)),l=$e(a,!1),f=!ue(l)||!s&&er(a),s&&!H(Ee.current.touched,a)&&xe.current.touched&&(W(Ee.current.touched,a,!0),l=Object.assign(Object.assign({},l),{touched:Ee.current.touched})),!j&&Z(n)&&W($.current,a,ae(x,a)),!o){e.next=13;break}return!s&&rr(a),e.abrupt("return",(!ue(l)||f&&ue(l))&&We(l));case 13:if(qe(),!re.current){e.next=26;break}return e.next=17,re.current(ar(),K.current,de);case 17:b=e.sent,m=b.errors,v=Ee.current.isValid,u=H(m,a),Z(n)&&!u&&re.current&&(p=Ve(a),(g=H(m,p,{})).type&&g.message&&(u=g),p&&(g||H(Ee.current.errors,p))&&(a=p)),c=ue(m),v!==c&&(f=!0),e.next=30;break;case 26:return e.next=28,Ce(x,de,i,$);case 28:e.t0=a,u=e.sent[e.t0];case 30:!s&&rr(a),Ge(a,u,f,l,c);case 32:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();var ir=Object(a.useCallback)(Object(v.a)(d.a.mark((function e(){var r,t,n,a,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:{},e.next=3,re.current(Object.assign(Object.assign({},ar()),r),K.current,de);case 3:t=e.sent,n=t.errors,a=ue(n),Ee.current.isValid!==a&&We({isValid:a});case 7:case"end":return e.stop()}}),e)}))),[de]),ur=Object(a.useCallback)((function(e,r){return le(x,J.current,e,$,j,r)}),[j]),cr=Object(a.useCallback)((function(e){if(M.current)We();else{var r,t=y(V.current);try{for(t.s();!(r=t.n()).done;){if(r.value.startsWith(e)){We();break}}}catch(n){t.e(n)}finally{t.f()}rr(e)}}),[]),sr=Object(a.useCallback)((function(e,r){e&&(ur(e,r),j&&!X(e.options||[]).length&&(se(N.current,e.ref.name),se(D.current,e.ref.name),se(Ee.current.errors,e.ref.name),W(Ee.current.dirtyFields,e.ref.name,!0),We({isDirty:Ue()}),xe.current.isValid&&re.current&&ir(),cr(e.ref.name)))}),[ir,ur]);function or(e){e&&(Array.isArray(e)?e:[e]).forEach((function(e){return x.current[e]&&P(e)?delete Ee.current.errors[e]:se(Ee.current.errors,e)})),We({errors:e?Ee.current.errors:{}})}function lr(e,r){var t=(x.current[e]||{}).ref;W(Ee.current.errors,e,Object.assign(Object.assign({},r),{ref:t})),We({isValid:!1}),r.shouldFocus&&t&&t.focus&&t.focus()}var fr=Object(a.useCallback)((function(e,r,t){var n=t?R.current[t]:V.current,a=ge(x,_e($.current),j,!1,e);if(pe(e)){var i=Ve(e)||e;return te.current.has(i)&&(a=Object.assign(Object.assign({},S.current),a)),Se(a,e,n,G(H(L.current,e))?r:H(L.current,e),!0)}var u=G(r)?L.current:r;return Array.isArray(e)?e.reduce((function(e,r){return Object.assign(Object.assign({},e),Object(p.a)({},r,Se(a,r,n,u)))}),{}):(M.current=G(t),q(!ue(a)&&a||u))}),[]);function dr(e,r){return fr(e,r)}function br(e){var r,t=y(Array.isArray(e)?e:[e]);try{for(t.s();!(r=t.n()).done;){var n=r.value;sr(x.current[n],!0)}}catch(a){t.e(a)}finally{t.f()}}function mr(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var t,n=e.name,a=e.type,i=e.value,u=Object.assign({ref:e},r),c=x.current,s=Be(e),o=Fe(te.current,n),l=function(r){return Le&&(!h(e)||r===e)},f=c[n],d=!0;if(f&&(s?Array.isArray(f.options)&&X(f.options).find((function(e){return i===e.ref.value&&l(e.ref)})):l(f.ref)))c[n]=Object.assign(Object.assign({},f),r);else{f=a?s?Object.assign({options:[].concat(Object(g.a)(X(f&&f.options||[])),[{ref:e}]),ref:{type:a,name:n}},r):Object.assign({},u):u,c[n]=f;var b=G(H($.current,n));ue(L.current)&&b||(t=H(b?L.current:$.current,n),(d=G(t))||o||He(n,t)),ue(r)||(W(D.current,n,!0),!ce&&xe.current.isValid&&Ce(x,de,f,$).then((function(e){var r=Ee.current.isValid;ue(e)?W(N.current,n,!0):se(N.current,n),r!==ue(e)&&We()}))),!j||o&&d||!o&&se(Ee.current.dirtyFields,n),a&&T(s&&f.options?f.options[f.options.length-1]:f,s||De(e),J.current)}}function vr(e,r){if(!Me)if(pe(e))mr({name:e},r);else{if(!I(e)||!("name"in e))return function(r){return r&&mr(r,e)};mr(e,r)}}var pr=Object(a.useCallback)((function(e,r){return function(){var t=Object(v.a)(d.a.mark((function t(n){var a,i,u,c,s,o,l,b,m,v;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n&&n.preventDefault&&(n.preventDefault(),n.persist()),a={},i=nr(ge(x,_e($.current),j,!0)),xe.current.isSubmitting&&We({isSubmitting:!0}),t.prev=4,!re.current){t.next=15;break}return t.next=8,re.current(i,K.current,de);case 8:u=t.sent,c=u.errors,s=u.values,Ee.current.errors=a=c,i=s,t.next=27;break;case 15:o=0,l=Object.values(x.current);case 16:if(!(o<l.length)){t.next=27;break}if(!(b=l[o])){t.next=24;break}return m=b.ref.name,t.next=22,Ce(x,de,b,$);case 22:(v=t.sent)[m]?(W(a,m,v[m]),se(N.current,m)):H(D.current,m)&&(se(Ee.current.errors,m),W(N.current,m,!0));case 24:o++,t.next=16;break;case 27:if(!ue(a)||!Object.keys(Ee.current.errors).every((function(e){return e in x.current}))){t.next=33;break}return We({errors:{},isSubmitting:!0}),t.next=31,e(i,n);case 31:t.next=39;break;case 33:if(Ee.current.errors=Object.assign(Object.assign({},Ee.current.errors),a),t.t0=r,!t.t0){t.next=38;break}return t.next=38,r(Ee.current.errors,n);case 38:f&&U(x.current,Ee.current.errors);case 39:return t.prev=39,Ee.current.isSubmitting=!1,We({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ue(Ee.current.errors),submitCount:Ee.current.submitCount+1}),t.finish(39);case 43:case"end":return t.stop()}}),t,null,[[4,,39,43]])})));return function(e){return t.apply(this,arguments)}}()}),[f,de]),gr=function(e){var r=e.errors,t=e.isDirty,n=e.isSubmitted,a=e.touched,i=e.isValid,u=e.submitCount,c=e.dirtyFields;i||(N.current={},D.current={}),E.current={},V.current=new Set,M.current=!1,We({submitCount:u?Ee.current.submitCount:0,isDirty:!!t&&Ee.current.isDirty,isSubmitted:!!n&&Ee.current.isSubmitted,isValid:!!i&&Ee.current.isValid,dirtyFields:c?Ee.current.dirtyFields:{},touched:a?Ee.current.touched:{},errors:r?Ee.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},yr=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Le)for(var t=0,n=Object.values(x.current);t<n.length;t++){var a=n[t];if(a){var i=a.ref,u=a.options,c=Be(i)&&Array.isArray(u)?u[0].ref:i;if(h(c))try{c.closest("form").reset();break}catch(s){}}}x.current={},L.current=Object.assign({},e||L.current),e&&rr(""),Object.values(z.current).forEach((function(e){return ke(e)&&e()})),$.current=j?{}:_e(e||L.current),gr(r)};Object(a.useEffect)((function(){u&&xe.current.isValid&&ir(),Re.current=Re.current||!Le?Re.current:Ne(x,sr)}),[sr,L.current]),Object(a.useEffect)((function(){return function(){Re.current&&Re.current.disconnect(),_.current=!0,Object.values(x.current).forEach((function(e){return sr(e,!0)}))}}),[]),!u&&xe.current.isValid&&(he.isValid=be(N.current,D.current)&&ue(Ee.current.errors));var jr={trigger:Qe,setValue:Object(a.useCallback)(tr,[Ze,Qe]),getValues:Object(a.useCallback)(ar,[]),register:Object(a.useCallback)(vr,[L.current]),unregister:Object(a.useCallback)(br,[]),formState:Ie?new Proxy(he,{get:function(e,r){if(r in e)return xe.current[r]=!0,e[r]}}):he},hr=Object(a.useMemo)((function(){return Object.assign({isFormDirty:Ue,updateWatchedValue:cr,shouldUnregister:j,updateFormState:We,removeFieldEventListener:ur,watchInternal:fr,mode:ne.current,reValidateMode:{isReValidateOnBlur:Xe,isReValidateOnChange:Je},validateResolver:u?ir:void 0,fieldsRef:x,resetFieldArrayFunctionRef:z,useWatchFieldsRef:R,useWatchRenderFunctionsRef:F,fieldArrayDefaultValuesRef:E,validFieldsRef:N,fieldsWithValidationRef:D,fieldArrayNamesRef:te,readFormStateRef:xe,formStateRef:Ee,defaultValuesRef:L,shallowFieldsStateRef:$,fieldArrayValuesRef:S},jr)}),[L.current,cr,j,ur,fr]);return Object.assign({watch:dr,control:hr,handleSubmit:pr,reset:Object(a.useCallback)(yr,[]),clearErrors:Object(a.useCallback)(or,[]),setError:Object(a.useCallback)(lr,[]),errors:he.errors},jr)}var Xe=Object(a.createContext)(null);Xe.displayName="RHFContext";var Je=t("hRC1"),We=t("F5Dj"),qe=function(e){var r=e.onSubmit,t=Object(a.useState)(!0),n=t[0],u=t[1],c=Object(a.useContext)(l.b),s=c.darkMode,f=c.isCompact,d=Pe(),b=d.register,m=d.handleSubmit,v=d.errors,p=function(){u(!0),r(!1)};return i.a.createElement("form",{onSubmit:m((function(){u(!1),r(!0)}))},i.a.createElement(We.a,{standAlone:!0,variant:"large",className:f?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"},"Første steg"),i.a.createElement(Je.c,{name:"fornavn",className:f?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2",label:"Fornavn",errorLabel:v.fornavn?"Du må fylle inn fornavn":"",inverted:s,forceCompact:f,ref:b({required:!0}),onChange:p,variant:"small"}),i.a.createElement(Je.c,{name:"etternavn",className:f?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2",label:"Etternavn",errorLabel:v.etternavn?"Du må fylle inn etternavn":"",inverted:s,forceCompact:f,ref:b({required:!0}),onChange:p,variant:"small"}),i.a.createElement(Je.c,{name:"personnummer",className:f?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2",label:"Personnummer",errorLabel:v.personnummer?"Du må fylle inn personnummer":"",helpLabel:"Vi lagrer ikke ditt personnummer",inverted:s,forceCompact:f,maxLength:11,type:"tel",placeholder:"11 siffer",ref:b({required:!0,maxLength:11,minLength:11,pattern:/^[0-9]*$/}),onChange:p,variant:"small"}),n&&i.a.createElement(o.a,{forceCompact:f,inverted:s,className:f?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"},"Gå videre"))},Ge=t("Abof"),He=t("Iq98"),Ue=(t("Xcxe"),t("9ILF")),$e=function(e){var r=e.onSubmit,t=Object(a.useState)(!0),n=t[0],u=t[1],c=Object(a.useContext)(l.b),f=c.darkMode,d=c.isCompact,b=Pe(),m=b.register,v=b.handleSubmit,p=b.errors,g=b.watch,y=Object(a.useRef)(null),j=Object(a.useRef)(null),h=Object(a.useRef)(null),k=Object(a.useRef)(null);Object(Ge.h)({ref:y}),Object(a.useEffect)((function(){var e;return null==j||null===(e=j.current)||void 0===e?void 0:e.focus()}),[]),Object(a.useEffect)((function(){var e;return null==h||null===(e=h.current)||void 0===e?void 0:e.focus()}),[]),Object(a.useEffect)((function(){var e;return null==k||null===(e=k.current)||void 0===e?void 0:e.focus()}),[]);var O=g("postnummer"),x=function(){u(!0),r(!1)};return i.a.createElement(s.b.form,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onSubmit:v((function(){u(!1),r(!0)})),style:{position:"relative"}},i.a.createElement("aside",{style:{position:"absolute",top:"-150px"},ref:y}),i.a.createElement(He.b,{title:"Fant ikke addresse",fullWidth:!0,className:"jkl-spacing--top-"+(d?"3":"4")+" jkl-spacing--bottom-1"},"Vi fant ikke addressen din i vår database. Fortell oss hvor du bor."),i.a.createElement("div",{className:"jkl-simple-form__postal-group"},i.a.createElement(Je.c,{variant:"large",label:"Postnummer",name:"postnummer",className:d?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2",errorLabel:p.postnummer?"Du må fylle inn postnummer":"",inverted:f,forceCompact:d,maxLength:6,placeholder:"4 siffer",type:"tel",onChange:x,ref:function(e){m(e,{required:!0,maxLength:4,minLength:4,pattern:/^[0-9]*$/}),j.current=e}}),i.a.createElement(s.a,null,4===(null==O?void 0:O.toString().length)&&i.a.createElement(s.b.p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"jkl-simple-form__postal-group__area "+(d?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2")},"Geilo"))),i.a.createElement(s.a,null,4===(null==O?void 0:O.toString().length)&&i.a.createElement(s.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},i.a.createElement(Je.c,{variant:"medium",label:"Gatenavn",name:"streetName",className:d?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2",errorLabel:p.streetName?"Du må fylle inn gateadresse":"",inverted:f,forceCompact:d,type:"text",onChange:x,ref:function(e){m(e,{required:!0}),h.current=e}}))),i.a.createElement(s.a,null,4===(null==O?void 0:O.toString().length)&&i.a.createElement(s.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},ref:k},i.a.createElement(Ue.b,{className:"jkl-simple-form__postal-group__house-number "+(d?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"),items:["1","3","5","7","9"],onChange:x,label:"Nummer"}))),n&&i.a.createElement(o.a,{forceCompact:d,inverted:f,className:d?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"},"Gå videre"))},ze=t("a27F"),Ke=function(e){var r=e.onSubmit,t=Object(a.useContext)(l.b),n=t.darkMode,u=t.isCompact,c=Object(a.useState)(),f=c[0],d=c[1],b=Object(a.useRef)(null);return Object(Ge.h)({ref:b}),i.a.createElement(s.b.form,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onSubmit:function(e){e.preventDefault(),r()},style:{position:"relative"}},i.a.createElement("aside",{style:{position:"absolute",top:"-150px"},ref:b}),i.a.createElement(ze.a,{choices:["Enebolig","Tomannsbolig","Rekkehus","Leilighet"],legend:"Hvilken boligtype?",name:"housetype",onChange:function(e){return d(e.target.value)},selectedValue:f,className:u?"jkl-spacing--bottom-1 jkl-spacing--top-2":"jkl-spacing--bottom-2 jkl-spacing--top-3",variant:"large"}),i.a.createElement(s.a,null,"Enebolig"===f&&i.a.createElement(s.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:u?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"},i.a.createElement(He.a,{title:"Vi forsikrer ikke eneboliger"},"Fordi vi ville vise en alternativ sti her så har vi lagt inn denne tulleregelen. Kontakt nærmeste person for å få vite mer om dette."))),"Enebolig"!==f&&i.a.createElement(o.a,{forceCompact:u,inverted:n,className:u?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"},"Gå videre"))},Qe=function(){var e=Object(a.useState)(!1),r=e[0],t=e[1],n=Object(a.useState)(!1),u=n[0],c=n[1],f=Object(a.useContext)(l.b).registerKnobs;return Object(a.useLayoutEffect)((function(){f&&f([i.a.createElement(o.c,{onClick:function(){return location.reload()},key:"reset"},"Reset")])}),[f]),i.a.createElement("section",null,i.a.createElement("h1",{className:"jkl-title-large jkl-spacing--top-3 jkl-spacing--bottom-2"},"Liksomskjema"),i.a.createElement("p",{className:"jkl-lead jkl-spacing--bottom-2"},"Har du husforsikring får du erstatning slik at du kan reparere eller bygge nytt hvis noe skjer med boligen din."),i.a.createElement(qe,{onSubmit:t}),i.a.createElement(s.a,null,r&&i.a.createElement($e,{onSubmit:c})),i.a.createElement(s.a,null,u&&i.a.createElement(Ke,{onSubmit:function(){return console.log("yeah")}})))},Ye={},Ze=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(u.mdx)("div",r)}},er=Ze("Ingress"),rr=Ze("FlowExample"),tr={_frontmatter:Ye},nr=c.a;function ar(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(u.mdx)(nr,Object.assign({},tr,t,{components:r,mdxType:"MDXLayout"}),Object(u.mdx)("h1",null,"Eksempler"),Object(u.mdx)(er,{mdxType:"Ingress"},"Her finner du eksempler på hvordan du kan bruke Jøkul"),Object(u.mdx)("h2",null,"Enkelt skjema"),Object(u.mdx)(rr,{mdxType:"FlowExample"},Object(u.mdx)(Qe,{mdxType:"SimpleForm"})))}ar.isMDXComponent=!0},kFFI:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t("mXGw"),a=t.n(n),i=t("8Jek"),u=t.n(i),c=function(e){var r=e.textDescription,t=e.negative,n=void 0!==t&&t,i=e.inline,c=void 0!==i&&i,s=e.className,o=e.dataTestAutoId,l=void 0===o?"jkl-loader":o,f=u()("jkl-loader",s,{"jkl-loader--negative":n,"jkl-loader--inline":c});return a.a.createElement("span",{className:f,"data-testid":"jkl-loader","data-testautoid":l,title:r,"aria-label":r,role:"alert","aria-busy":"true"},a.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),a.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),a.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---src-texts-getstarted-examples-mdx-b83cca8d3b220629bbb0.js.map