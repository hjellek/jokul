"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9525],{6655:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return fe},default:function(){return ye}});var r=n(30808),a=n(27378),o=n(81368),i=n(62803),l=n(76328),d=n(5197),u=n(73804),c=n(62384),s=n(90382),f=n.n(s);n(99467);function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=p(n(27378));function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function k(e,t,n){return k=b()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&y(a,n.prototype),a},k.apply(null,arguments)}function w(e){var t="function"==typeof Map?new Map:void 0;return w=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return k(e,arguments,g(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,e)},w(e)}function E(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var _="undefined"!=typeof window;_&&/(android)/i.test(navigator.userAgent),_&&/iPad|iPhone|iPod/.test(String(navigator.platform)),_||n.g.HTMLElement||(n.g.HTMLElement=function(){return function e(){h(this,e)}}());var D,j,C=(D="undefined"==typeof window?{}:window.Element.prototype,j=D.matches||D.msMatchesSelector||D.webkitMatchesSelector,D.closest?function(e,t){return e.closest(t)}:function(e,t){for(e.correspondingUseElement&&(e=e.correspondingUseElement);e;e=e.parentElement)if(j.call(e,t))return e;return null});function O(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a="prevent_recursive_dispatch_maximum_callstack".concat(t);if(e[a])return!0;e[a]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r);var o=e.dispatchEvent(n);return e[a]=null,o}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(e){if(e.nodeType)return[e];if("string"==typeof e)return[].slice.call(t.querySelectorAll(e));if(e.length)return[].slice.call(e)}return[]}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self&&self;var L,A,M,S,T={exports:{}};T.exports=(L={year:"FullYear",month:"Month",week:"Date",day:"Date",hour:"Hours",minute:"Minutes",second:"Seconds"},A=/([+-]\s*\d+)\s*(second|minute|hour|day|week|month|year)|(mon)|(tue)|(wed)|(thu)|(fri)|(sat)|(sun)/g,M=/([-\dy]+)[-/.]([\dm]+)[-/.]([\dd]+)/,S=/([\dh]+):([\dm]+):?([\ds]+)?/,function(e,t){if(isFinite(e))return new Date(Number(e));var n=String(e).toLowerCase(),r=new Date(isFinite(t)&&-1===n.indexOf("now")?Number(t):Date.now()),a=n.match(M)||[],o=a[1];void 0===o&&(o="y");var i=a[2];void 0===i&&(i="m");var l=a[3];void 0===l&&(l="d");var d=n.match(S)||[],u=d[1];void 0===u&&(u="h");var c=d[2];void 0===c&&(c="m");var s=d[3];void 0===s&&(s="s");var f={year:o,month:i,day:l,hour:u,minute:c,second:s};Object.keys(f).forEach((function(e){var t="month"===e?1:0,n=String(r["get"+L[e]]()+t);f[e]=f[e].replace(/[^-\d]+/g,(function(e,t,r){return t?n.substr(n.length-r.length+t,e.length):n.substr(0,Math.max(0,n.length-r.length+e.length))}))-t}));var p=new Date(f.year,Math.min(12,f.month+1),0).getDate();for(r.setFullYear(f.year,Math.min(11,f.month),Math.max(1,Math.min(p,f.day))),r.setHours(Math.min(24,f.hour),Math.min(59,f.minute),Math.min(59,f.second));null!==(f=A.exec(n));){var m=f[2],h=String(f[1]).replace(/\s/g,"")*("week"===m?7:1),v=f.slice(2).indexOf(f[0]),g=r.getDate();m?r["set"+L[m]](r["get"+L[m]]()+h):r.setDate(r.getDate()-(r.getDay()||7)+v),"month"!==m&&"year"!==m||g===r.getDate()||r.setDate(0)}return r});var N=T.exports,H={month:function(e,t){return e.disabled(t)&&Z(e.parse(t)).filter((function(t){return!e.disabled(t)}))[0]||t},null:function(e,t){return t}},R={month:function(e,t){return Z(e.parse(t)).map((function(t){return e.disabled(t)})).reduce((function(e,t){return e&&t}))},null:function(e,t){return e.disabled(t)}},P={year:"*-m-d",month:"y-*-d",day:"y-m-*",hour:"*:m",minute:"h:*",second:"h:m:*",timestamp:"*",null:"*"},F={33:"-1month",34:"+1month",35:"y-m-99",36:"y-m-1",37:"-1day",38:"-1week",39:"+1day",40:"+1week"},B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,e);var t,n,r,a,o,i=(t=l,n=b(),function(){var e,r=g(t);if(n){var a=g(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return E(this,e)});function l(){return h(this,l),i.apply(this,arguments)}return r=l,a=[{key:"connectedCallback",value:function(){var e,t,n,r,a=this;this._date=this.date,document.addEventListener("click",this),document.addEventListener("change",this),document.addEventListener("keydown",this),setTimeout((function(){return a.attributeChangedCallback()})),e=this.nodeName,t="".concat(this.nodeName,"{display:block}"),n="style-".concat(e.toLowerCase()),r=t.replace(/\/\*[^!][^*]*\*\//g,"").replace(/\s*(^|[:;,{}]|$)\s*/g,"$1"),document.getElementById(n)||document.head.insertAdjacentHTML("afterbegin",'<style id="'.concat(n,'">').concat(r,"</style>"))}},{key:"disconnectedCallback",value:function(){this._date=this._disabled=null,document.removeEventListener("click",this),document.removeEventListener("change",this),document.removeEventListener("keydown",this)}},{key:"attributeChangedCallback",value:function(){if(this._date){if(this.disabled(this.date)&&!this.disabled(this._date))return this.date=this._date;this.diff(this.date)&&O(this,"datepicker.change",this._date=this.date),G("button",this,I),G("select",this,Y),G("input",this,V),G("table",this,K)}}},{key:"handleEvent",value:function(e){if(!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||"keydown"===e.type&&!F[e.keyCode])&&(this.contains(e.target)||W(e.target,'[for="'.concat(this.id,'"]').concat(', [data-for="'.concat(this.id,'"]')))))if("change"===e.type){var t=P[e.target.getAttribute("data-type")].replace("*",e.target.value);this.date=H[e.target.getAttribute("data-fill")](this,t)}else if("click"===e.type){var n=C(e.target,"button[value]"),r=C(e.target,"table");if(n){t=P[n.getAttribute("data-type")].replace("*",n.value);var a=n.value.match(new RegExp(Object.keys(H).filter((function(e){return"null"!==e})).join("|"))),o=a&&a[0];t=H[o](this,t),this.date=t}n&&r&&O(this,"datepicker.click.day")}else"keydown"===e.type&&C(e.target,"table")&&(this.date=F[e.keyCode],this.querySelector("[autofocus]").focus(),e.preventDefault())}},{key:"diff",value:function(e){return this.parse(e).getTime()-this.timestamp}},{key:"parse",value:function(e,t){return N(e,t||this._date)}},{key:"disabled",get:function(){return this._disabled||Function.prototype},set:function(e){var t=this;this._disabled="function"==typeof e?function(n){return e(t.parse(n),t)}:function(){return e},this.attributeChangedCallback()}},{key:"timestamp",get:function(){return String(this._date.getTime())}},{key:"year",get:function(){return String(this._date.getFullYear())}},{key:"month",get:function(){return U(this._date.getMonth()+1)}},{key:"day",get:function(){return U(this._date.getDate())}},{key:"hour",get:function(){return U(this._date.getHours())}},{key:"minute",get:function(){return U(this._date.getMinutes())}},{key:"second",get:function(){return U(this._date.getSeconds())}},{key:"date",get:function(){return N(this.getAttribute("timestamp")||this._date||Date.now())},set:function(e){return this.setAttribute("timestamp",this.parse(e).getTime())}},{key:"months",get:function(){return(this.getAttribute("months")||"januar,februar,mars,april,mai,juni,juli,august,september,oktober,november,desember").split(/\s*,\s*/)},set:function(e){this.setAttribute("months",[].concat(e).join(","))}},{key:"days",get:function(){return(this.getAttribute("days")||"man,tirs,ons,tors,fre,lør,søn").split(/\s*,\s*/)},set:function(e){this.setAttribute("days",[].concat(e).join(","))}}],o=[{key:"observedAttributes",get:function(){return["timestamp","months","days"]}}],a&&v(r.prototype,a),o&&v(r,o),l}(w(HTMLElement)),U=function(e){return"0".concat(e).slice(-2)},G=function(e,t,n){return[].forEach.call(document.getElementsByTagName(e),(function(e){(t.contains(e)||t.id===e.getAttribute(t.external))&&n(t,e)}))};function I(e,t){if(t.value){t.type="button";var n=t.value.match(new RegExp(Object.keys(R).filter((function(e){return"null"!==e})).join("|"))),r=n&&n[0];t.disabled=R[r](e,t.value)}}function V(e,t){var n=t.getAttribute("data-type")||t.getAttribute("type");"radio"===n||"checkbox"===n?(t.disabled=e.disabled(t.value),t.checked=!e.diff(t.value)):P[n]&&(t.setAttribute("type","number"),t.setAttribute("data-type",n),t.value=e[n])}function K(e,t){t.firstElementChild||(t.innerHTML="\n    <caption></caption><thead><tr>".concat(Array(8).join("</th><th>"),"</tr></thead>\n    <tbody>").concat(Array(7).join("<tr>".concat(Array(8).join('<td><button type="button"></button></td>'),"</tr>")),"</tbody>"));var n=new Date,r=e.date.getMonth(),a=e.parse("y-m-1 mon");t.caption.textContent="".concat(e.months[r],", ").concat(e.year),x("th",t).forEach((function(t,n){return t.textContent=e.days[n]})),x("button",t).forEach((function(t){var o=!e.diff(a),i=a.getDate(),l=a.getMonth();t.textContent=i,t.value="".concat(a.getFullYear(),"-").concat(l+1,"-").concat(i),t.disabled=e.disabled(a),t.tabIndex=o-1,t.setAttribute("data-adjacent",r!==l),t.setAttribute("aria-label","".concat(i,". ").concat(e.months[l])),t.setAttribute("aria-current",a.getDate()===n.getDate()&&a.getMonth()===n.getMonth()&&a.getFullYear()===n.getFullYear()&&"date"),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.hasAttribute(t);!n===e.hasAttribute(t)&&e[n?"setAttribute":"removeAttribute"](t,"")}(t,"autofocus",o),a.setDate(i+1)}))}function Y(e,t){t.firstElementChild||(t._autofill=!0,t.setAttribute("data-fill","month"),t.innerHTML=e.months.map((function(e,t){return'<option value="y-'.concat(t+1,'-d"></option>')})).join(""));var n=R[t.getAttribute("data-fill")];x(t.children).forEach((function(r,a){t._autofill&&(r.textContent=e.months[a]),r.disabled=n(e,r.value),r.selected=!e.diff(r.value)}))}function Z(e){var t=new Date(e);t.setDate(1);for(var n=t.getMonth(),r=[];t.getMonth()===n;)r.push(new Date(t)),t.setDate(t.getDate()+1);return r}var W=function(){var e="undefined"==typeof window?{}:window.Element.prototype,t=e.matches||e.msMatchesSelector||e.webkitMatchesSelector;return e.closest?function(e,t){return e.closest(t)}:function(e,n){for(;e;e=e.parentElement)if(t.call(e,n))return e;return null}}();var q=function(e,t){void 0===t&&(t={});var n=((t.name||e.name||String(e).match(/function ([^(]+)/)[1])+"-"+(Date.now().toString(36)+Math.random().toString(36).slice(2,5))).replace(/.[A-Z]/g,(function(e){return e[0]+"-"+e[1]})),r=t.props||[],a=t.customEvents||[],o=a.reduce((function(e,t){return e[t]="on"+t.replace(/(^|\.)./g,(function(e){return e.slice(-1).toUpperCase()})),e}),{}),i=r.concat("forwardRef",Object.keys(o).map((function(e){return o[e]}))),l=(n+"-"+(t.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(t){function n(e){var n=this;t.call(this,e),this.ref=function(e){return"function"==typeof n.props.forwardRef?n.props.forwardRef(e):n.props.forwardRef&&(n.props.forwardRef.current=e),n.el=e},Object.keys(o).forEach((function(e){var t=o[e];n[e]=function(e){n.props[t]&&W(e.target,n.el.nodeName)===n.el&&n.props[t](e)}}))}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var t=this;window.customElements.get(l)||window.customElements.define(l,e),r.forEach((function(e){e in t.props&&(t.el[e]=t.props[e])})),a.forEach((function(e){t.el.addEventListener(e,t[e])}))},n.prototype.componentDidUpdate=function(e){var t=this;r.forEach((function(n){e[n]!==t.props[n]&&(t.el[n]=t.props[n])}))},n.prototype.componentWillUnmount=function(){var e=this;a.forEach((function(t){e.el.removeEventListener(t,e[t])}))},n.prototype.render=function(){var e=this;return m.default.createElement(l,Object.keys(this.props).reduce((function(t,n){return-1===i.indexOf(n)&&("className"===n?t.class=e.props[n]:!0===e.props[n]?t[n]="":!1!==e.props[n]&&(t[n]=e.props[n])),t}),{ref:this.ref}))},n}(m.default.Component)}(B,{props:["disabled"],customEvents:["datepicker.change","datepicker.click.day"],suffix:"3.1.0"}),X=n(62863),$=(0,a.forwardRef)((function(e,t){var n=e.hidden,r=e.extended,o=e.forceCompact,i=e.inverted,l=e.onClickDate,d=e.currentDate,u=e.monthLabel,s=void 0===u?"Måned":u,p=e.yearLabel,m=void 0===p?"År":p,h=e.days,v=e.months,g=e.disableDate,y=f()("jkl-calendar",{"jkl-calendar--hidden":n,"jkl-calendar--extended":r,"jkl-calendar--inverted":i});return a.createElement(q,{timestamp:d?d.getTime():new Date,months:v,days:h,onDatepickerClickDay:l,disabled:g,forwardRef:t,className:y,"data-testid":"jkl-calendar__core-datepicker"},a.createElement("div",{className:"jkl-calendar__padding"},r&&a.createElement("div",{className:"jkl-calendar__navigation"},a.createElement(c.oi,{inverted:i,label:m,type:"year",className:"jkl-calendar__year-selector",width:"5rem",variant:"small",forceCompact:o}),a.createElement(X.p,{inverted:i,className:"jkl-calendar__month-selector",label:s,items:[],variant:"small",forceCompact:o,width:"auto"})),!r&&a.createElement("fieldset",{className:"jkl-calendar__month-navigation"},a.createElement("button",{title:"forrige måned","aria-label":"forrige måned",className:"jkl-calendar__month-button",value:"- 1 month"},"←"),a.createElement("button",{title:"neste måned","aria-label":"neste måned",className:"jkl-calendar__month-button jkl-calendar__month-button--right",value:"+ 1 month"},"→")),a.createElement("table",{"data-testid":"jkl-datepicker-calendar"})))}));$.displayName="Calendar";var J=/^(\d\d)[\.-](\d\d)[\.-](\d{4}|\d{2})$/;function z(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function Q(e){return(""+e.getDate()).padStart(2,"0")+"."+(""+(e.getMonth()+1)).padStart(2,"0")+"."+e.getFullYear()}function ee(e){var t=J.exec(e);if(t){var n=parseInt((new Date).toLocaleString("no-NB",{year:"2-digit"})),r=parseInt(t[1],10),a=parseInt(t[2],10)-1,o=parseInt(t[3],10),i=o>99?o:function(e){return e>n?e+1900:e+2e3}(o),l=new Date(i,a,r,0,0,0);return l.getMonth()===a&&l.getFullYear()===i?l:void 0}}var te=n(11107),ne=function(e,t){return(0,a.useCallback)((function(n){return r=n,a=e,o=t,Boolean(o&&r>o||a&&r<a);var r,a,o}),[e,t])},re=n(64649);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){(0,re.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t){function n(n){if(n){var r=ee(n);return r?e&&r<e?"OUTSIDE_LOWER_BOUND":t&&r>t?"OUTSIDE_UPPER_BOUND":void 0:"WRONG_FORMAT"}}return function(r,a){switch(a.type){case"INPUT_CHANGE":var o=ee(a.payload);return o&&function(e,t){return!e||!z(e,t)}(r.date,o)?oe(oe({},r),{},{date:o,dateString:a.payload,calendarHidden:!0,error:n(a.payload)}):oe(oe({},r),{},{date:void 0,dateString:a.payload,error:n(a.payload)});case"SET_VALUE_ON_BLUR":var i=ee(a.payload);return oe(oe({},r),{},{date:i,dateString:a.payload,error:n(a.payload)});case"TOGGLE":if(r.calendarHidden&&r.date){if(e&&r.date<e)return oe(oe({},r),{},{date:void 0,dateString:"",calendarHidden:!r.calendarHidden,error:void 0});if(t&&r.date>t)return oe(oe({},r),{},{date:void 0,dateString:"",calendarHidden:!r.calendarHidden,error:void 0})}return oe(oe({},r),{},{calendarHidden:!r.calendarHidden});case"SELECT_DATE_IN_CALENDAR":return oe(oe({},r),{},{date:a.payload,dateString:Q(a.payload),calendarHidden:!0,error:void 0});case"VALUE_PROP_CHANGED":if(void 0===r.date&&void 0===a.payload)return r;if(r.date&&a.payload&&z(r.date,a.payload))return r;var l=a.payload?Q(a.payload):"";return oe(oe({},r),{},{date:a.payload,dateString:l,error:n(l)});default:throw new Error}}}var le=["name","label","placeholder","calendarButtonTitle","showCalendarLabel","hideCalendarLabel","initialDate","value","onChange","onBlur","onFocus","onKeyDown","initialShow","className","forceCompact","inverted","disableBeforeDate","disableAfterDate","variant","helpLabel","errorLabel","width","data-testautoid"],de=(0,a.forwardRef)((function(e,t){var n=e.name,o=e.label,i=void 0===o?"Velg dato":o,s=e.placeholder,p=void 0===s?"dd.mm.åååå":s,m=e.calendarButtonTitle,h=e.showCalendarLabel,v=void 0===h?m||"Åpne kalender":h,g=e.hideCalendarLabel,y=void 0===g?m||"Lukk kalender":g,b=e.initialDate,k=e.value,w=e.onChange,E=e.onBlur,_=e.onFocus,D=e.onKeyDown,j=e.initialShow,C=void 0!==j&&j,O=e.className,x=void 0===O?"":O,L=e.forceCompact,A=e.inverted,M=e.disableBeforeDate,S=e.disableAfterDate,T=e.variant,N=e.helpLabel,H=e.errorLabel,R=e.width,P=void 0===R?"11.5rem":R,F=e["data-testautoid"],B=(0,r.Z)(e,le);var U,G=ne(M,S),I=function(){var e=(0,a.useState)("jkl-datepicker-"+(0,te.x0)(8))[0];return[e,e+"-label"]}(),V=I[0],K=I[1],Y=(0,a.useMemo)((function(){return ie(M,S)}),[M,S]),Z=function(e,t,n){return e?n(e)?void 0:e:t?n(t)?void 0:t:void 0}(k,b,G),W=(0,a.useReducer)(Y,{date:Z,calendarHidden:!C,dateString:Z?Q(Z):"",error:void 0}),q=W[0],X=W[1],J=f()("jkl-datepicker",{"jkl-datepicker--open":!q.calendarHidden,"jkl-datepicker--inverted":A},x),z=f()("jkl-datepicker__input-wrapper jkl-text-input__input-wrapper",{"jkl-text-input--compact":L,"jkl-text-input--inverted":A}),ee=(0,a.useRef)(null),re=(0,a.useRef)(null),ae=t||re,oe=(0,u.vD)(!q.calendarHidden)[0],de=(0,a.useRef)(!0),ue=function(e){return function(t){var n=ee.current&&ee.current.contains(t.relatedTarget);e&&!n&&e(q.date,t)}};return(0,u.O8)(ee,(function(){return!q.calendarHidden&&X({type:"TOGGLE"})})),(0,u.Zk)(ee,(function(){return!q.calendarHidden&&X({type:"TOGGLE"})})),(0,u.WJ)(oe,["Escape"],(function(){!q.calendarHidden&&X({type:"TOGGLE"}),ae.current&&ae.current.focus()})),(0,a.useEffect)((function(){!de.current&&w&&w(q.date,void 0,{error:q.error,value:q.dateString})}),[q.date,q.dateString,q.error]),(0,a.useEffect)((function(){de.current||X({type:"VALUE_PROP_CHANGED",payload:k})}),[k]),(0,a.useEffect)((function(){de.current=!1}),[]),a.createElement("div",{className:J},a.createElement(l.__,{standAlone:!0,htmlFor:V,variant:T},i),a.createElement("div",{className:z,ref:ee},a.createElement(c.U7,{id:V,ref:ae,name:n,describedBy:N||H?K:void 0,invalid:!!H,className:"jkl-datepicker__input jkl-text-input__input","data-testid":"jkl-datepicker__input",value:q.dateString,onFocus:ue(_),onBlur:(U=E,function(e){X({type:"SET_VALUE_ON_BLUR",payload:e.target.value}),ue(U)(e)}),onKeyDown:function(e){return function(t){null==e||e(q.date,t)}}(D),onClick:function(){X({type:"TOGGLE"})},onChange:function(e){X({type:"INPUT_CHANGE",payload:e.target.value})},placeholder:p,width:P,type:"text","data-testautoid":F}),a.createElement(d.h,{className:"jkl-text-input__action-button",iconType:"calendar",buttonTitle:q.calendarHidden?v:y,onClick:function(){if(X({type:"TOGGLE"}),q.calendarHidden){var e=oe.current,t=e&&e.querySelector("[autofocus]");t&&setTimeout((function(){return t.focus()}),100)}},onFocus:ue(_),onBlur:ue(E)}),a.createElement("div",{className:"jkl-datepicker__calendar-wrapper"},a.createElement($,Object.assign({currentDate:q.date,onClickDate:function(e){X({type:"SELECT_DATE_IN_CALENDAR",payload:e.target.date}),ae.current&&ae.current.focus()},disableDate:G,hidden:q.calendarHidden,inverted:A,forceCompact:L,ref:oe},B)))),a.createElement(l.Aq,{inverted:A,id:K,helpLabel:N,errorLabel:H}))})),ue=function(e){var t=864e5*(30*e-5);return t<0?12+t:t},ce=function(e){var t=e.boolValues,n=e.choiceValues,r=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,o=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,i=n&&n.Variant,l=(0,a.useState)(void 0),d=l[0],u=l[1];return a.createElement(de,{label:"Velg startdato for forsikringen",extended:t&&t["Utvidet velger"],forceCompact:t&&t.Kompakt,inverted:t&&t.Invertert,variant:i,errorLabel:o,helpLabel:r,disableBeforeDate:new Date(Date.now()-ue(2)),disableAfterDate:new Date(Date.now()+ue(5)),value:d,onFocus:function(e){console.log("hello from onFocus",e),u(e)},onBlur:function(e){console.log("hello from onBlur",e),u(e)},onChange:function(e,t,n){console.log("hello from onChange",e,t,n),u(e)},onKeyDown:function(e,t){console.log("hello from onKeyDown",e,t),u(e)}})},se=["components"],fe={},pe=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},me=pe("Ingress"),he=pe("ComponentExample"),ve={_frontmatter:fe},ge=i.Z;function ye(e){var t=e.components,n=(0,r.Z)(e,se);return(0,o.mdx)(ge,Object.assign({},ve,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(me,{mdxType:"Ingress"},'Vi bruker datovelgeren til å gi brukerne mulighet til å skrive inn eller velge en dato. Ledeteksten beskriver hvilken dato brukeren skal fylle inn, for eksempel: "Oppgi datoen da skaden skjedde".'),(0,o.mdx)(he,{component:ce,knobs:{boolProps:["Utvidet velger","Kompakt","Med feil","Med hjelpetekst","Invertert"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},mdxType:"ComponentExample"}),(0,o.mdx)("h2",null,"Typer og bruk"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Enkel datovelger:")," Når brukeren skal velge en dato, som er nær dagens dato."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Utvidet datovelger:")," Når brukeren skal velge en dato som ligger mer enn ett år frem eller tilbake i tid."),(0,o.mdx)("p",null,'Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato.\nEksempel: "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".'),(0,o.mdx)("h2",null,"Tekst og validering"),(0,o.mdx)("p",null,"Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet."),(0,o.mdx)("p",null,"Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),(0,o.mdx)("p",null,'Eksempel:\nHjelpetekst for første kalender i en periode:\n"Velg datoen da du først ble syk". Feilmelding: "Du må velge datoen da du først ble syk."'))}ye.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-datepicker-react-documentation-datepicker-mdx-66759585ca2c3c82054b.js.map