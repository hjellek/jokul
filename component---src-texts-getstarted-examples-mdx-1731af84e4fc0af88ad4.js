/*! For license information please see component---src-texts-getstarted-examples-mdx-1731af84e4fc0af88ad4.js.LICENSE.txt */
(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8899],{9580:function(e,r,t){"use strict";t.r(r),t.d(r,{_frontmatter:function(){return rr},default:function(){return cr}});var n=t(120),a=t(7378),i=t(1368),u=t(2803),c=t(1127),s=t(897),o=t(3340);var l=t(4152);function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,i=[],u=!0,c=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);u=!0);}catch(s){c=!0,a=s}finally{try{u||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,r)||(0,l.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=t(1476),m=t(3450),v=t(6250),p=t(7135),b=t.n(p);function g(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw i}}}}function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var h=function(e){return e instanceof HTMLElement},k="blur",j="change",x="input",E="onBlur",O="onChange",C="onSubmit",A="onTouched",S="all",w="select",V="undefined",R="max",D="min",N="maxLength",F="minLength",_="pattern",L="required",M="validate";function T(e,r,t){var n=e.ref;h(n)&&t&&(n.addEventListener(r?j:x,t),n.addEventListener(k,t))}var Z=function(e){return null==e},B=function(e){return"object"==typeof e},P=function(e){return!Z(e)&&!Array.isArray(e)&&B(e)&&!(e instanceof Date)},W=function(e){return/^\w*$/.test(e)},I=function(e){return e.filter(Boolean)},q=function(e){return I(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."))};function U(e,r,t){for(var n=-1,a=W(r)?[r]:q(r),i=a.length,u=i-1;++n<i;){var c=a[n],s=t;if(n!==u){var o=e[c];s=P(o)||Array.isArray(o)?o:isNaN(+a[n+1])?{}:[]}e[c]=s,e=e[c]}return e}var G=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var t in e)W(t)?r[t]=e[t]:U(r,t,e[t]);return r},H=function(e){return void 0===e},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,n=I(r.split(/[,[\].]+?/)).reduce((function(e,r){return Z(e)?e:e[r]}),e);return H(n)||n===e?H(e[r])?t:e[r]:n},$=function(e,r){for(var t in e)if(K(r,t)){var n=e[t];if(n){if(n.ref.focus&&H(n.ref.focus()))break;if(n.options){n.options[0].ref.focus();break}}}},X=function(e,r){h(e)&&e.removeEventListener&&(e.removeEventListener(x,r),e.removeEventListener(j,r),e.removeEventListener(k,r))},J={isValid:!1,value:null},z=function(e){return Array.isArray(e)?e.reduce((function(e,r){return r&&r.ref.checked?{isValid:!0,value:r.ref.value}:e}),J):J},Y=function(e){return"radio"===e.type},Q=function(e){return"file"===e.type},ee=function(e){return"checkbox"===e.type},re=function(e){return e.type==="".concat(w,"-multiple")},te={value:!1,isValid:!1},ne={value:!0,isValid:!0},ae=function(e){if(Array.isArray(e)){if(e.length>1){var r=e.filter((function(e){return e&&e.ref.checked})).map((function(e){return e.ref.value}));return{value:r,isValid:!!r.length}}var t=e[0].ref,n=t.checked,a=t.value,i=t.attributes;return n?i&&!H(i.value)?H(a)||""===a?ne:{value:a,isValid:!0}:ne:te}return te};function ie(e,r,t,n,a){var i,u=e.current[r];if(u){var c=u.ref,s=c.value,o=c.disabled,l=u.ref,f=u.valueAsNumber,d=u.valueAsDate,m=u.setValueAs;if(o&&n)return;return Q(l)?l.files:Y(l)?z(u.options).value:re(l)?(i=l.options,(0,v.Z)(i).filter((function(e){return e.selected})).map((function(e){return e.value}))):ee(l)?ae(u.options).value:a?s:f?""===s?NaN:+s:d?l.valueAsDate:m?m(s):s}if(t)return K(t.current,r)}function ue(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&ue(e.parentNode)}var ce=function(e){return P(e)&&!Object.keys(e).length},se=function(e){return"boolean"==typeof e};function oe(e,r){var t,n=W(r)?[r]:q(r),a=1==n.length?e:function(e,r){for(var t=r.slice(0,-1).length,n=0;n<t;)e=H(e)?n++:e[r[n++]];return e}(e,n),i=n[n.length-1];a&&delete a[i];for(var u=0;u<n.slice(0,-1).length;u++){var c=-1,s=void 0,o=n.slice(0,-(u+1)),l=o.length-1;for(u>0&&(t=e);++c<o.length;){var f=o[c];s=s?s[f]:e[f],l===c&&(P(s)&&ce(s)||Array.isArray(s)&&!s.filter((function(e){return P(e)&&!ce(e)||se(e)})).length)&&(t?delete t[f]:delete e[f]),t=s}}return e}var le=function(e,r){return e&&e.ref===r};function fe(e,r,t,n,a,i){var u=t.ref,c=t.ref.name,s=e.current[c];if(!a){var o=ie(e,c,n);!H(o)&&U(n.current,c,o)}u.type&&s?Y(u)||ee(u)?Array.isArray(s.options)&&s.options.length?(I(s.options).forEach((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;(ue(e.ref)&&le(e,e.ref)||i)&&(X(e.ref,r),oe(s.options,"[".concat(t,"]")))})),s.options&&!I(s.options).length&&delete e.current[c]):delete e.current[c]:(ue(u)&&le(s,u)||i)&&(X(u,r),delete e.current[c]):delete e.current[c]}var de=function(e){return Z(e)||!B(e)};function me(e,r){if(de(e)||de(r))return r;for(var t in r){var n=e[t],a=r[t];try{e[t]=P(n)&&P(a)||Array.isArray(n)&&Array.isArray(a)?me(n,a):a}catch(i){}}return e}function ve(e,r,t){if(de(e)||de(r)||e instanceof Date||r instanceof Date)return e===r;if(!(0,a.isValidElement)(e)){var n=Object.keys(e),i=Object.keys(r);if(n.length!==i.length)return!1;for(var u=0,c=n;u<c.length;u++){var s=c[u],o=e[s];if(!t||"ref"!==s){var l=r[s];if((P(o)||Array.isArray(o))&&(P(l)||Array.isArray(l))?!ve(o,l,t):o!==l)return!1}}}return!0}function pe(e,r,t,n,a){for(var i=-1;++i<e.length;){for(var u in e[i])Array.isArray(e[i][u])?(!t[i]&&(t[i]={}),t[i][u]=[],pe(e[i][u],K(r[i]||{},u,[]),t[i][u],t[i],u)):ve(K(r[i]||{},u),e[i][u])?U(t[i]||{},u):t[i]=Object.assign(Object.assign({},t[i]),(0,m.Z)({},u,!0));n&&!t.length&&delete n[a]}return t}var be=function(e,r,t){return me(pe(e,r,t.slice(0,e.length)),pe(r,e,t.slice(0,e.length)))},ge=function(e){return"string"==typeof e},ye=function(e,r,t,n,a){var i={},u=function(r){(H(a)||(ge(a)?r.startsWith(a):Array.isArray(a)&&a.find((function(e){return r.startsWith(e)}))))&&(i[r]=ie(e,r,void 0,n))};for(var c in e.current)u(c);return t?G(i):me(r,G(i))},he=function(e){var r=e.errors,t=e.name,n=e.error,a=e.validFields,i=e.fieldsWithValidation,u=H(n),c=K(r,t);return u&&!!c||!u&&!ve(c,n,!0)||u&&K(i,t)&&!K(a,t)},ke=function(e){return e instanceof RegExp},je=function(e){return P(e)&&!ke(e)?e:{value:e,message:""}},xe=function(e){return"function"==typeof e},Ee=function(e){return ge(e)||(0,a.isValidElement)(e)};function Oe(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"validate";if(Ee(e)||se(e)&&!e)return{type:t,message:Ee(e)?e:"",ref:r}}var Ce=function(e,r,t,n,a){return r?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),(0,m.Z)({},n,a||!0))}):{}},Ae=function(){var e=(0,d.Z)(b().mark((function e(r,t,n,a){var i,u,c,s,o,l,d,m,v,p,g,y,h,k,j,x,E,O,C,A,S,w,V,T,B,W,I,q,U,G,H,K,$,X,J,Q,re,te,ne,ue,oe,le,fe,de,me,ve;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.ref,u=n.ref.value,c=n.options,s=n.required,o=n.maxLength,l=n.minLength,d=n.min,m=n.max,v=n.pattern,p=n.validate,g=i.name,y={},h=Y(i),k=ee(i),j=h||k,x=""===u,E=Ce.bind(null,g,t,y),O=function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:N,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:F,u=e?r:t;y[g]=Object.assign({type:e?n:a,message:u,ref:i},E(e?n:a,u))},!s||!(!h&&!k&&(x||Z(u))||se(u)&&!u||k&&!ae(c).isValid||h&&!z(c).isValid)){e.next=15;break}if(C=Ee(s)?{value:!!s,message:s}:je(s),A=C.value,S=C.message,!A){e.next=15;break}if(y[g]=Object.assign({type:L,message:S,ref:j?((r.current[g].options||[])[0]||{}).ref:i},E(L,S)),t){e.next=15;break}return e.abrupt("return",y);case 15:if(Z(d)&&Z(m)||""===u){e.next=23;break}if(T=je(m),B=je(d),isNaN(u)?(I=i.valueAsDate||new Date(u),ge(T.value)&&(w=I>new Date(T.value)),ge(B.value)&&(V=I<new Date(B.value))):(W=i.valueAsNumber||parseFloat(u),Z(T.value)||(w=W>T.value),Z(B.value)||(V=W<B.value)),!w&&!V){e.next=23;break}if(O(!!w,T.message,B.message,R,D),t){e.next=23;break}return e.abrupt("return",y);case 23:if(!ge(u)||x||!o&&!l){e.next=32;break}if(q=je(o),U=je(l),G=!Z(q.value)&&u.length>q.value,H=!Z(U.value)&&u.length<U.value,!G&&!H){e.next=32;break}if(O(G,q.message,U.message),t){e.next=32;break}return e.abrupt("return",y);case 32:if(!ge(u)||!v||x){e.next=38;break}if(K=je(v),$=K.value,X=K.message,!ke($)||$.test(u)){e.next=38;break}if(y[g]=Object.assign({type:_,message:X,ref:i},E(_,X)),t){e.next=38;break}return e.abrupt("return",y);case 38:if(!p){e.next=71;break}if(J=ie(r,g,a,!1,!0),Q=j&&c?c[0].ref:i,!xe(p)){e.next=52;break}return e.next=44,p(J);case 44:if(re=e.sent,!(te=Oe(re,Q))){e.next=50;break}if(y[g]=Object.assign(Object.assign({},te),E(M,te.message)),t){e.next=50;break}return e.abrupt("return",y);case 50:e.next=71;break;case 52:if(!P(p)){e.next=71;break}ne={},ue=0,oe=Object.entries(p);case 55:if(!(ue<oe.length)){e.next=67;break}if(le=f(oe[ue],2),fe=le[0],de=le[1],ce(ne)||t){e.next=59;break}return e.abrupt("break",67);case 59:return e.next=61,de(J);case 61:me=e.sent,(ve=Oe(me,Q,fe))&&(ne=Object.assign(Object.assign({},ve),E(fe,ve.message)),t&&(y[g]=ne));case 64:ue++,e.next=55;break;case 67:if(ce(ne)){e.next=71;break}if(y[g]=Object.assign({ref:Q},ne),t){e.next=71;break}return e.abrupt("return",y);case 71:return e.abrupt("return",y);case 72:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),Se=function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(var a in t){var i=r+(P(t)?".".concat(a):"[".concat(a,"]"));de(t[a])?n.push(i):e(i,t[a],n)}return n},we=function(e,r,t,n,a){var i=void 0;return t.add(r),ce(e)||(i=K(e,r),(P(i)||Array.isArray(i))&&Se(r,i).forEach((function(e){return t.add(e)}))),H(i)?a?n:K(n,r):i},Ve=function(e){var r=e.isOnBlur,t=e.isOnChange,n=e.isOnTouch,a=e.isTouched,i=e.isReValidateOnBlur,u=e.isReValidateOnChange,c=e.isBlurEvent,s=e.isSubmitted;return!e.isOnAll&&(!s&&n?!(a||c):(s?i:r)?!c:!(s?u:t)||c)},Re=function(e){return e.substring(0,e.indexOf("["))},De=function(e,r){return RegExp("^".concat(r,"([|.)\\d+").replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e)},Ne=function(e,r){return(0,v.Z)(e).some((function(e){return De(r,e)}))},Fe=function(e){return e.type==="".concat(w,"-one")};function _e(e,r){var t=new MutationObserver((function(){for(var t=0,n=Object.values(e.current);t<n.length;t++){var a=n[t];if(a&&a.options){var i,u=g(a.options);try{for(u.s();!(i=u.n()).done;){var c=i.value;c&&c.ref&&ue(c.ref)&&r(a)}}catch(s){u.e(s)}finally{u.f()}}else a&&ue(a.ref)&&r(a)}}));return t.observe(window.document,{childList:!0,subtree:!0}),t}var Le=typeof window!==V&&typeof document!==V;function Me(e){var r,t;if(de(e)||Le&&(e instanceof File||h(e)))return e;if(!["Set","Map","Object","Date","Array"].includes(null===(r=e.constructor)||void 0===r?void 0:r.name))return e;if(e instanceof Date)return t=new Date(e.getTime());if(e instanceof Set){t=new Set;var n,a=g(e);try{for(a.s();!(n=a.n()).done;){var i=n.value;t.add(i)}}catch(l){a.e(l)}finally{a.f()}return t}if(e instanceof Map){t=new Map;var u,c=g(e.keys());try{for(c.s();!(u=c.n()).done;){var s=u.value;t.set(s,Me(e.get(s)))}}catch(l){c.e(l)}finally{c.f()}return t}for(var o in t=Array.isArray(e)?[]:{},e)t[o]=Me(e[o]);return t}var Te=function(e){return{isOnSubmit:!e||e===C,isOnBlur:e===E,isOnChange:e===O,isOnAll:e===S,isOnTouch:e===A}},Ze=function(e){return Y(e)||ee(e)},Be=typeof window===V,Pe=Le?"Proxy"in window:typeof Proxy!==V;function We(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.mode,t=void 0===r?C:r,n=e.reValidateMode,i=void 0===n?O:n,u=e.resolver,c=e.context,s=e.defaultValues,o=void 0===s?{}:s,l=e.shouldFocusError,p=void 0===l||l,y=e.shouldUnregister,j=void 0===y||y,x=e.criteriaMode,E=(0,a.useRef)({}),A=(0,a.useRef)({}),w=(0,a.useRef)({}),V=(0,a.useRef)(new Set),R=(0,a.useRef)({}),D=(0,a.useRef)({}),N=(0,a.useRef)({}),F=(0,a.useRef)({}),_=(0,a.useRef)(o),L=(0,a.useRef)(!1),M=(0,a.useRef)(!1),B=(0,a.useRef)(),q=(0,a.useRef)({}),X=(0,a.useRef)({}),J=(0,a.useRef)(c),z=(0,a.useRef)(u),te=(0,a.useRef)(new Set),ne=(0,a.useRef)(Te(t)),ae=ne.current,ue=ae.isOnSubmit,se=ae.isOnTouch,le=x===S,me=(0,a.useState)({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!ue,errors:{}}),pe=f(me,2),ke=pe[0],je=pe[1],Ee=(0,a.useRef)({isDirty:!Pe,dirtyFields:!Pe,touched:!Pe||se,isValidating:!Pe,isSubmitting:!Pe,isValid:!Pe}),Oe=(0,a.useRef)(ke),Ce=(0,a.useRef)(),De=(0,a.useRef)(Te(i)).current,We=De.isOnBlur,Ie=De.isOnChange;J.current=c,z.current=u,Oe.current=ke,q.current=j?{}:ce(q.current)?Me(o):q.current;var qe=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};L.current||(Oe.current=Object.assign(Object.assign({},Oe.current),e),je(Oe.current))}),[]),Ue=function(){return Ee.current.isValidating&&qe({isValidating:!0})},Ge=(0,a.useCallback)((function(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4?arguments[4]:void 0,i=t||he({errors:Oe.current.errors,error:r,name:e,validFields:F.current,fieldsWithValidation:N.current}),u=K(Oe.current.errors,e);r?(oe(F.current,e),i=i||!u||!ve(u,r,!0),U(Oe.current.errors,e,r)):((K(N.current,e)||z.current)&&(U(F.current,e,!0),i=i||u),oe(Oe.current.errors,e)),(i&&!Z(t)||!ce(n)||Ee.current.isValidating)&&qe(Object.assign(Object.assign(Object.assign({},n),z.current?{isValid:!!a}:{}),{isValidating:!1}))}),[]),He=(0,a.useCallback)((function(e,r){var t=E.current[e],n=t.ref,a=t.options,i=Le&&h(n)&&Z(r)?"":r;Y(n)?(a||[]).forEach((function(e){var r=e.ref;return r.checked=r.value===i})):Q(n)&&!ge(i)?n.files=i:re(n)?(0,v.Z)(n.options).forEach((function(e){return e.selected=i.includes(e.value)})):ee(n)&&a?a.length>1?a.forEach((function(e){var r=e.ref;return r.checked=Array.isArray(i)?!!i.find((function(e){return e===r.value})):i===r.value})):a[0].ref.checked=!!i:n.value=i}),[]),Ke=(0,a.useCallback)((function(e,r){if(Ee.current.isDirty){var t=ar();return e&&r&&U(t,e,r),!ve(t,_.current)}return!1}),[]),$e=(0,a.useCallback)((function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(Ee.current.isDirty||Ee.current.dirtyFields){var t=!ve(K(_.current,e),ie(E,e,q)),n=K(Oe.current.dirtyFields,e),a=Oe.current.isDirty;t?U(Oe.current.dirtyFields,e,!0):oe(Oe.current.dirtyFields,e);var i={isDirty:Ke(),dirtyFields:Oe.current.dirtyFields},u=Ee.current.isDirty&&a!==i.isDirty||Ee.current.dirtyFields&&n!==K(Oe.current.dirtyFields,e);return u&&r&&qe(i),u?i:{}}return{}}),[]),Xe=(0,a.useCallback)(function(){var e=(0,d.Z)(b().mark((function e(r,t){var n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=4;break;case 4:return e.next=6,Ae(E,le,E.current[r],q);case 6:return e.t0=r,n=e.sent[e.t0],Ge(r,n,t),e.abrupt("return",H(n));case 10:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),[Ge,le]),Je=(0,a.useCallback)(function(){var e=(0,d.Z)(b().mark((function e(r){var t,n,a,i,u;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.current(ar(),J.current,le);case 2:if(t=e.sent,n=t.errors,a=Oe.current.isValid,!Array.isArray(r)){e.next=11;break}return i=r.map((function(e){var r=K(n,e);return r?U(Oe.current.errors,e,r):oe(Oe.current.errors,e),!r})).every(Boolean),qe({isValid:ce(n),isValidating:!1}),e.abrupt("return",i);case 11:return u=K(n,r),Ge(r,u,a!==ce(n),{},ce(n)),e.abrupt("return",!u);case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[Ge,le]),ze=(0,a.useCallback)(function(){var e=(0,d.Z)(b().mark((function e(r){var t,n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r||Object.keys(E.current),Ue(),!z.current){e.next=4;break}return e.abrupt("return",Je(t));case 4:if(!Array.isArray(t)){e.next=11;break}return!r&&(Oe.current.errors={}),e.next=8,Promise.all(t.map(function(){var e=(0,d.Z)(b().mark((function e(r){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xe(r,null);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 8:return n=e.sent,qe({isValidating:!1}),e.abrupt("return",n.every(Boolean));case 11:return e.next=13,Xe(t);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[Je,Xe]),Ye=(0,a.useCallback)((function(e,r,t){var n=t.shouldDirty,a=t.shouldValidate,i={};U(i,e,r);var u,c=g(Se(e,r));try{for(c.s();!(u=c.n()).done;){var s=u.value;E.current[s]&&(He(s,K(i,s)),n&&$e(s),a&&ze(s))}}catch(o){c.e(o)}finally{c.f()}}),[ze,He,$e]),Qe=(0,a.useCallback)((function(e,r,t){if(!j&&!de(r)&&U(q.current,e,Array.isArray(r)?(0,v.Z)(r):Object.assign({},r)),E.current[e])He(e,r),t.shouldDirty&&$e(e),t.shouldValidate&&ze(e);else if(!de(r)&&(Ye(e,r,t),te.current.has(e))){var n=Re(e)||e;U(A.current,e,r),X.current[n]((0,m.Z)({},n,K(A.current,n))),(Ee.current.isDirty||Ee.current.dirtyFields)&&t.shouldDirty&&(U(Oe.current.dirtyFields,e,be(r,K(_.current,e,[]),K(Oe.current.dirtyFields,e,[]))),qe({isDirty:!ve(Object.assign(Object.assign({},ar()),(0,m.Z)({},e,r)),_.current)}))}!j&&U(q.current,e,r)}),[$e,He,Ye]),er=function(e){return M.current||V.current.has(e)||V.current.has((e.match(/\w+/)||[])[0])},rr=function(e){var r=!0;if(!ce(R.current))for(var t in R.current)e&&R.current[t].size&&!R.current[t].has(e)&&!R.current[t].has(Re(e))||(D.current[t](),r=!1);return r};function tr(e,r,t){Qe(e,r,t||{}),er(e)&&qe(),rr(e)}function nr(e){if(!j){var r,t=Me(e),n=g(te.current);try{for(n.s();!(r=n.n()).done;){var a=r.value;W(a)&&!t[a]&&(t=Object.assign(Object.assign({},t),(0,m.Z)({},a,[])))}}catch(i){n.e(i)}finally{n.f()}return t}return e}function ar(e){if(ge(e))return ie(E,e,q);if(Array.isArray(e)){var r,t={},n=g(e);try{for(n.s();!(r=n.n()).done;){var a=r.value;U(t,a,ie(E,a,q))}}catch(i){n.e(i)}finally{n.f()}return t}return nr(ye(E,Me(q.current),j))}B.current=B.current?B.current:function(){var e=(0,d.Z)(b().mark((function e(r){var t,n,a,i,u,c,s,o,l,f,d,m,v,p,g;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.type,n=r.target,a=n.name,!(i=E.current[a])){e.next=32;break}if(s=t===k,o=Ve(Object.assign({isBlurEvent:s,isReValidateOnChange:Ie,isReValidateOnBlur:We,isTouched:!!K(Oe.current.touched,a),isSubmitted:Oe.current.isSubmitted},ne.current)),l=$e(a,!1),f=!ce(l)||!s&&er(a),s&&!K(Oe.current.touched,a)&&Ee.current.touched&&(U(Oe.current.touched,a,!0),l=Object.assign(Object.assign({},l),{touched:Oe.current.touched})),!j&&ee(n)&&U(q.current,a,ie(E,a)),!o){e.next=13;break}return!s&&rr(a),e.abrupt("return",(!ce(l)||f&&ce(l))&&qe(l));case 13:if(Ue(),!z.current){e.next=26;break}return e.next=17,z.current(ar(),J.current,le);case 17:d=e.sent,m=d.errors,v=Oe.current.isValid,u=K(m,a),ee(n)&&!u&&z.current&&(p=Re(a),(g=K(m,p,{})).type&&g.message&&(u=g),p&&(g||K(Oe.current.errors,p))&&(a=p)),c=ce(m),v!==c&&(f=!0),e.next=30;break;case 26:return e.next=28,Ae(E,le,i,q);case 28:e.t0=a,u=e.sent[e.t0];case 30:!s&&rr(a),Ge(a,u,f,l,c);case 32:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();var ir=(0,a.useCallback)((0,d.Z)(b().mark((function e(){var r,t,n,a,i,u=arguments;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>0&&void 0!==u[0]?u[0]:{},t=ce(E.current)?_.current:{},e.next=4,z.current(Object.assign(Object.assign(Object.assign({},t),ar()),r),J.current,le);case 4:if(e.t0=e.sent,e.t0){e.next=7;break}e.t0={};case 7:n=e.t0,a=n.errors,i=ce(a),Oe.current.isValid!==i&&qe({isValid:i});case 11:case"end":return e.stop()}}),e)}))),[le]),ur=(0,a.useCallback)((function(e,r){fe(E,B.current,e,q,j,r),j&&(oe(F.current,e.ref.name),oe(N.current,e.ref.name))}),[j]),cr=(0,a.useCallback)((function(e){if(M.current)qe();else{var r,t=g(V.current);try{for(t.s();!(r=t.n()).done;){if(r.value.startsWith(e)){qe();break}}}catch(n){t.e(n)}finally{t.f()}rr(e)}}),[]),sr=(0,a.useCallback)((function(e,r){e&&(ur(e,r),j&&!I(e.options||[]).length&&(oe(Oe.current.errors,e.ref.name),U(Oe.current.dirtyFields,e.ref.name,!0),qe({isDirty:Ke()}),Ee.current.isValid&&z.current&&ir(),cr(e.ref.name)))}),[ir,ur]);function or(e){e&&(Array.isArray(e)?e:[e]).forEach((function(e){return E.current[e]&&W(e)?delete Oe.current.errors[e]:oe(Oe.current.errors,e)})),qe({errors:e?Oe.current.errors:{}})}function lr(e,r){var t=(E.current[e]||{}).ref;U(Oe.current.errors,e,Object.assign(Object.assign({},r),{ref:t})),qe({isValid:!1}),r.shouldFocus&&t&&t.focus&&t.focus()}var fr=(0,a.useCallback)((function(e,r,t){var n=t?R.current[t]:V.current,a=ye(E,Me(q.current),j,!1,e);if(ge(e)){var i=Re(e)||e;return te.current.has(i)&&(a=Object.assign(Object.assign({},w.current),a)),we(a,e,n,H(K(_.current,e))?r:K(_.current,e),!0)}var u=H(r)?_.current:r;return Array.isArray(e)?e.reduce((function(e,r){return Object.assign(Object.assign({},e),(0,m.Z)({},r,we(a,r,n,u)))}),{}):(M.current=H(t),G(!ce(a)&&a||u))}),[]);function dr(e,r){return fr(e,r)}function mr(e){var r,t=g(Array.isArray(e)?e:[e]);try{for(t.s();!(r=t.n()).done;){var n=r.value;sr(E.current[n],!0)}}catch(a){t.e(a)}finally{t.f()}}function vr(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var t,n=e.name,a=e.type,i=e.value,u=Object.assign({ref:e},r),c=E.current,s=Ze(e),o=Ne(te.current,n),l=function(r){return Le&&(!h(e)||r===e)},f=c[n],d=!0;if(f&&(s?Array.isArray(f.options)&&I(f.options).find((function(e){return i===e.ref.value&&l(e.ref)})):l(f.ref)))c[n]=Object.assign(Object.assign({},f),r);else{f=a?s?Object.assign({options:[].concat((0,v.Z)(I(f&&f.options||[])),[{ref:e}]),ref:{type:a,name:n}},r):Object.assign({},u):u,c[n]=f;var m=H(K(q.current,n));ce(_.current)&&m||(t=K(m?_.current:q.current,n),(d=H(t))||o||He(n,t)),ce(r)||(U(N.current,n,!0),!ue&&Ee.current.isValid&&Ae(E,le,f,q).then((function(e){var r=Oe.current.isValid;ce(e)?U(F.current,n,!0):oe(F.current,n),r!==ce(e)&&qe()}))),!j||o&&d||!o&&oe(Oe.current.dirtyFields,n),a&&T(s&&f.options?f.options[f.options.length-1]:f,s||Fe(e),B.current)}}function pr(e,r){if(!Be)if(ge(e))vr({name:e},r);else{if(!P(e)||!("name"in e))return function(r){return r&&vr(r,e)};vr(e,r)}}var br=(0,a.useCallback)((function(e,r){return function(){var t=(0,d.Z)(b().mark((function t(n){var a,i,u,c,s,o,l,f,d,m;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n&&n.preventDefault&&(n.preventDefault(),n.persist()),a={},i=nr(ye(E,Me(q.current),j,!0)),Ee.current.isSubmitting&&qe({isSubmitting:!0}),t.prev=4,!z.current){t.next=15;break}return t.next=8,z.current(i,J.current,le);case 8:u=t.sent,c=u.errors,s=u.values,Oe.current.errors=a=c,i=s,t.next=27;break;case 15:o=0,l=Object.values(E.current);case 16:if(!(o<l.length)){t.next=27;break}if(!(f=l[o])){t.next=24;break}return d=f.ref.name,t.next=22,Ae(E,le,f,q);case 22:(m=t.sent)[d]?(U(a,d,m[d]),oe(F.current,d)):K(N.current,d)&&(oe(Oe.current.errors,d),U(F.current,d,!0));case 24:o++,t.next=16;break;case 27:if(!ce(a)||!Object.keys(Oe.current.errors).every((function(e){return e in E.current}))){t.next=33;break}return qe({errors:{},isSubmitting:!0}),t.next=31,e(i,n);case 31:t.next=39;break;case 33:if(Oe.current.errors=Object.assign(Object.assign({},Oe.current.errors),a),t.t0=r,!t.t0){t.next=38;break}return t.next=38,r(Oe.current.errors,n);case 38:p&&$(E.current,Oe.current.errors);case 39:return t.prev=39,Oe.current.isSubmitting=!1,qe({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ce(Oe.current.errors),submitCount:Oe.current.submitCount+1}),t.finish(39);case 43:case"end":return t.stop()}}),t,null,[[4,,39,43]])})));return function(e){return t.apply(this,arguments)}}()}),[p,le]),gr=function(e){var r=e.errors,t=e.isDirty,n=e.isSubmitted,a=e.touched,i=e.isValid,u=e.submitCount,c=e.dirtyFields;i||(F.current={},N.current={}),A.current={},V.current=new Set,M.current=!1,qe({submitCount:u?Oe.current.submitCount:0,isDirty:!!t&&Oe.current.isDirty,isSubmitted:!!n&&Oe.current.isSubmitted,isValid:!!i&&Oe.current.isValid,dirtyFields:c?Oe.current.dirtyFields:{},touched:a?Oe.current.touched:{},errors:r?Oe.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},yr=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Le)for(var t=0,n=Object.values(E.current);t<n.length;t++){var a=n[t];if(a){var i=a.ref,u=a.options,c=Ze(i)&&Array.isArray(u)?u[0].ref:i;if(h(c))try{c.closest("form").reset();break}catch(s){}}}E.current={},_.current=Object.assign({},e||_.current),e&&rr(""),Object.values(X.current).forEach((function(e){return xe(e)&&e()})),q.current=j?{}:Me(e||_.current),gr(r)};(0,a.useEffect)((function(){u&&Ee.current.isValid&&ir(),Ce.current=Ce.current||!Le?Ce.current:_e(E,sr)}),[sr,_.current]),(0,a.useEffect)((function(){return function(){Ce.current&&Ce.current.disconnect(),L.current=!0,Object.values(E.current).forEach((function(e){return sr(e,!0)}))}}),[]),!u&&Ee.current.isValid&&(ke.isValid=ve(F.current,N.current)&&ce(Oe.current.errors));var hr={trigger:ze,setValue:(0,a.useCallback)(tr,[Qe,ze]),getValues:(0,a.useCallback)(ar,[]),register:(0,a.useCallback)(pr,[_.current]),unregister:(0,a.useCallback)(mr,[]),formState:Pe?new Proxy(ke,{get:function(e,r){if(r in e)return Ee.current[r]=!0,e[r]}}):ke},kr=(0,a.useMemo)((function(){return Object.assign({isFormDirty:Ke,updateWatchedValue:cr,shouldUnregister:j,updateFormState:qe,removeFieldEventListener:ur,watchInternal:fr,mode:ne.current,reValidateMode:{isReValidateOnBlur:We,isReValidateOnChange:Ie},validateResolver:u?ir:void 0,fieldsRef:E,resetFieldArrayFunctionRef:X,useWatchFieldsRef:R,useWatchRenderFunctionsRef:D,fieldArrayDefaultValuesRef:A,validFieldsRef:F,fieldsWithValidationRef:N,fieldArrayNamesRef:te,readFormStateRef:Ee,formStateRef:Oe,defaultValuesRef:_,shallowFieldsStateRef:q,fieldArrayValuesRef:w},hr)}),[_.current,cr,j,ur,fr]);return Object.assign({watch:dr,control:kr,handleSubmit:br,reset:(0,a.useCallback)(yr,[]),clearErrors:(0,a.useCallback)(or,[]),setError:(0,a.useCallback)(lr,[]),errors:ke.errors},hr)}var Ie=(0,a.createContext)(null);Ie.displayName="RHFContext";var qe=t(2384),Ue=t(6328),Ge=function(e){var r=e.onSubmit,t=(0,a.useState)(!0),n=t[0],i=t[1],u=(0,a.useContext)(o.Ui),c=u.darkMode,l=u.isCompact,f=We(),d=f.register,m=f.handleSubmit,v=f.errors,p=function(){i(!0),r(!1)};return a.createElement("form",{onSubmit:m((function(){i(!1),r(!0)}))},a.createElement(Ue.__,{standAlone:!0,variant:"large",className:l?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"},"Første steg"),a.createElement(qe.oi,{name:"fornavn",className:l?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2",label:"Fornavn",errorLabel:v.fornavn?"Du må fylle inn fornavn":"",inverted:c,forceCompact:l,ref:d({required:!0}),onChange:p,variant:"small"}),a.createElement(qe.oi,{name:"etternavn",className:l?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2",label:"Etternavn",errorLabel:v.etternavn?"Du må fylle inn etternavn":"",inverted:c,forceCompact:l,ref:d({required:!0}),onChange:p,variant:"small"}),a.createElement(qe.oi,{name:"personnummer",className:l?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2",label:"Personnummer",errorLabel:v.personnummer?"Du må fylle inn personnummer":"",helpLabel:"Vi lagrer ikke ditt personnummer",inverted:c,forceCompact:l,maxLength:11,type:"tel",placeholder:"11 siffer",ref:d({required:!0,maxLength:11,minLength:11,pattern:/^[0-9]*$/}),onChange:p,variant:"small"}),n&&a.createElement(s.KM,{forceCompact:l,inverted:c,className:l?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"},"Gå videre"))},He=t(7235),Ke=t(3804),$e=t(9158),Xe=t(2863),Je=function(e){var r=e.onSubmit,t=(0,a.useState)(!0),n=t[0],i=t[1],u=(0,a.useContext)(o.Ui),l=u.darkMode,f=u.isCompact,d=We(),m=d.register,v=d.handleSubmit,p=d.errors,b=d.watch,g=(0,a.useRef)(null),y=(0,a.useRef)(null),h=(0,a.useRef)(null),k=(0,a.useRef)(null);(0,Ke.gE)({ref:g}),(0,a.useEffect)((function(){var e;return null==y||null===(e=y.current)||void 0===e?void 0:e.focus()}),[]),(0,a.useEffect)((function(){var e;return null==h||null===(e=h.current)||void 0===e?void 0:e.focus()}),[]),(0,a.useEffect)((function(){var e;return null==k||null===(e=k.current)||void 0===e?void 0:e.focus()}),[]);var j=b("postnummer"),x=function(){i(!0),r(!1)};return a.createElement(He.E.form,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onSubmit:v((function(){i(!1),r(!0)})),style:{position:"relative"}},a.createElement("aside",{style:{position:"absolute",top:"-150px"},ref:g}),a.createElement($e.$J,{title:"Fant ikke addresse",fullWidth:!0,className:"jkl-spacing--top-"+(f?"3":"4")+" jkl-spacing--bottom-1"},"Vi fant ikke addressen din i vår database. Fortell oss hvor du bor."),a.createElement("div",{className:"jkl-simple-form__postal-group"},a.createElement(qe.oi,{variant:"large",label:"Postnummer",name:"postnummer",className:f?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2",errorLabel:p.postnummer?"Du må fylle inn postnummer":"",inverted:l,forceCompact:f,maxLength:6,placeholder:"4 siffer",type:"tel",onChange:x,ref:function(e){m(e,{required:!0,maxLength:4,minLength:4,pattern:/^[0-9]*$/}),y.current=e}}),a.createElement(c.M,null,4===(null==j?void 0:j.toString().length)&&a.createElement(He.E.p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"jkl-simple-form__postal-group__area "+(f?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2")},"Geilo"))),a.createElement(c.M,null,4===(null==j?void 0:j.toString().length)&&a.createElement(He.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},a.createElement(qe.oi,{variant:"medium",label:"Gatenavn",name:"streetName",className:f?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2",errorLabel:p.streetName?"Du må fylle inn gateadresse":"",inverted:l,forceCompact:f,type:"text",onChange:x,ref:function(e){m(e,{required:!0}),h.current=e}}))),a.createElement(c.M,null,4===(null==j?void 0:j.toString().length)&&a.createElement(He.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},ref:k},a.createElement(Xe.P,{className:"jkl-simple-form__postal-group__house-number "+(f?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"),items:["1","3","5","7","9"],onChange:x,label:"Nummer"}))),n&&a.createElement(s.KM,{forceCompact:f,inverted:l,className:f?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"},"Gå videre"))},ze=t(6058),Ye=function(e){var r=e.onSubmit,t=(0,a.useContext)(o.Ui),n=t.darkMode,i=t.isCompact,u=(0,a.useState)(),l=u[0],f=u[1],d=(0,a.useRef)(null);return(0,Ke.gE)({ref:d}),a.createElement(He.E.form,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onSubmit:function(e){e.preventDefault(),r()},style:{position:"relative"}},a.createElement("aside",{style:{position:"absolute",top:"-150px"},ref:d}),a.createElement(ze.G,{choices:["Enebolig","Tomannsbolig","Rekkehus","Leilighet"],legend:"Hvilken boligtype?",name:"housetype",onChange:function(e){return f(e.target.value)},selectedValue:l,className:i?"jkl-spacing--bottom-1 jkl-spacing--top-2":"jkl-spacing--bottom-2 jkl-spacing--top-3",variant:"large"}),a.createElement(c.M,null,"Enebolig"===l&&a.createElement(He.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:i?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"},a.createElement($e.Bc,{title:"Vi forsikrer ikke eneboliger"},"Fordi vi ville vise en alternativ sti her så har vi lagt inn denne tulleregelen. Kontakt nærmeste person for å få vite mer om dette."))),"Enebolig"!==l&&a.createElement(s.KM,{forceCompact:i,inverted:n,className:i?"jkl-spacing--bottom-1":"jkl-spacing--bottom-2"},"Gå videre"))},Qe=function(){var e=(0,a.useState)(!1),r=e[0],t=e[1],n=(0,a.useState)(!1),i=n[0],u=n[1],l=(0,a.useContext)(o.Ui).registerKnobs;return(0,a.useLayoutEffect)((function(){l&&l([a.createElement(s.C9,{onClick:function(){return location.reload()},key:"reset"},"Reset")])}),[l]),a.createElement("section",null,a.createElement("h1",{className:"jkl-title-large jkl-spacing--top-3 jkl-spacing--bottom-2"},"Liksomskjema"),a.createElement("p",{className:"jkl-lead jkl-spacing--bottom-2"},"Har du husforsikring får du erstatning slik at du kan reparere eller bygge nytt hvis noe skjer med boligen din."),a.createElement(Ge,{onSubmit:t}),a.createElement(c.M,null,r&&a.createElement(Je,{onSubmit:u})),a.createElement(c.M,null,i&&a.createElement(Ye,{onSubmit:function(){return console.log("yeah")}})))},er=["components"],rr={},tr=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",r)}},nr=tr("Ingress"),ar=tr("FlowExample"),ir={_frontmatter:rr},ur=u.Z;function cr(e){var r=e.components,t=(0,n.Z)(e,er);return(0,i.mdx)(ur,Object.assign({},ir,t,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Eksempler"),(0,i.mdx)(nr,{mdxType:"Ingress"},"Her finner du eksempler på hvordan du kan bruke Jøkul"),(0,i.mdx)("h2",null,"Enkelt skjema"),(0,i.mdx)(ar,{mdxType:"FlowExample"},(0,i.mdx)(Qe,{mdxType:"SimpleForm"})))}cr.isMDXComponent=!0},897:function(e,r,t){"use strict";t.d(r,{KM:function(){return v},kq:function(){return p},C9:function(){return b}});var n=t(2398),a=t.n(n),i=t(2666),u=t.n(i),c=t(7378),s=t(382),o=t.n(s),l=t(3661),f=(0,c.forwardRef)((function(e,r){return c.createElement("button",a()({},e,{ref:r}))}));f.displayName="BaseButton";var d=["children","className","forceCompact","inverted","onClick","onTouchStart","loader"],m=function(e){return(0,c.forwardRef)((function(r,t){var n=r.children,i=r.className,s=void 0===i?"":i,m=r.forceCompact,v=r.inverted,p=r.onClick,b=r.onTouchStart,g=r.loader,y=u()(r,d),h=o()("jkl-button","jkl-button--"+e,{"jkl-button--compact":m,"jkl-button--inverted":v}),k=function(e){b&&b(e);var r=e.target;if(r&&e.targetTouches.length){var t=e.targetTouches[0].clientX-r.getBoundingClientRect().x,n=e.targetTouches[0].clientY-r.getBoundingClientRect().y;r.style.setProperty("--jkl-touch-xcoord",t.toPrecision(4)+"px"),r.style.setProperty("--jkl-touch-ycoord",n.toPrecision(4)+"px"),r.classList.add("jkl-button--pressed"),setTimeout((function(){return r.classList.remove("jkl-button--pressed")}),400)}};return g?c.createElement("div",{className:o()("jkl-button-wrapper",s,{"jkl-button-wrapper--compact":m})},c.createElement("div",{className:o()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!g.showLoader})},c.createElement(f,a()({className:h,onClick:p,onTouchStart:k,disabled:null==g?void 0:g.showLoader},y,{ref:t}),n),c.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},c.createElement(l.a,{textDescription:g.textDescription,negative:v,"aria-hidden":!!g.showLoader,inline:!0})))):c.createElement(f,a()({className:o()(h,s),onClick:p,onTouchStart:k},y,{ref:t}),n)}))},v=m("primary"),p=m("secondary"),b=m("tertiary")},3661:function(e,r,t){"use strict";t.d(r,{a:function(){return u}});var n=t(7378),a=t(382),i=t.n(a),u=function(e){var r=e.textDescription,t=e.negative,a=void 0!==t&&t,u=e.inline,c=void 0!==u&&u,s=e.className,o=e.dataTestAutoId,l=void 0===o?"jkl-loader":o,f=i()("jkl-loader",s,{"jkl-loader--negative":a,"jkl-loader--inline":c});return n.createElement("span",{className:f,"data-testid":"jkl-loader","data-testautoid":l,title:r,"aria-label":r,role:"alert","aria-busy":"true"},n.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),n.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),n.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---src-texts-getstarted-examples-mdx-1731af84e4fc0af88ad4.js.map