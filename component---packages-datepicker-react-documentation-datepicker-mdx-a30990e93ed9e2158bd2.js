(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{KYoB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return A})),n.d(t,"default",(function(){return H}));var r=n("+I+c"),a=n("mXGw"),o=n.n(a),i=n("/FXl"),c=n("7XvJ"),l=n("F5Dj"),d=n("nnXn"),u=n("Abof"),s=n("hRC1"),f=n("8Jek"),p=n.n(f),m=n("Sj89"),h=n("9ILF"),v=Object(a.forwardRef)((function(e,t){var n=e.hidden,r=e.extended,a=e.forceCompact,i=e.inverted,c=e.onClickDate,l=e.currentDate,d=e.monthLabel,u=void 0===d?"Måned":d,f=e.yearLabel,v=void 0===f?"År":f,b=e.days,g=e.months,y=e.disableDate,k=p()("jkl-calendar",{"jkl-calendar--hidden":n,"jkl-calendar--extended":r,"jkl-calendar--inverted":i});return o.a.createElement(m.a,{timestamp:l?l.getTime():new Date,months:g,days:b,onDatepickerClickDay:c,disabled:y,forwardRef:t,className:k,"data-testid":"jkl-calendar__core-datepicker"},o.a.createElement("div",{className:"jkl-calendar__padding"},r&&o.a.createElement("div",{className:"jkl-calendar__navigation"},o.a.createElement(s.c,{inverted:i,label:v,type:"year",className:"jkl-calendar__year-selector",width:"5rem",variant:"small",forceCompact:a}),o.a.createElement(h.a,{inverted:i,className:"jkl-calendar__month-selector",label:u,items:[],variant:"small",forceCompact:a,width:"auto"})),!r&&o.a.createElement("fieldset",{className:"jkl-calendar__month-navigation"},o.a.createElement("button",{title:"forrige måned","aria-label":"forrige måned",className:"jkl-calendar__month-button",value:"- 1 month"},"←"),o.a.createElement("button",{title:"neste måned","aria-label":"neste måned",className:"jkl-calendar__month-button jkl-calendar__month-button--right",value:"+ 1 month"},"→")),o.a.createElement("table",{"data-testid":"jkl-datepicker-calendar"})))}));v.displayName="Calendar";var b=/^(\d\d)[\.-](\d\d)[\.-](\d{4}|\d{2})$/;function g(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function y(e){return(""+e.getDate()).padStart(2,"0")+"."+(""+(e.getMonth()+1)).padStart(2,"0")+"."+e.getFullYear()}function k(e){var t=b.exec(e);if(t){var n=parseInt((new Date).toLocaleString("no-NB",{year:"2-digit"})),r=parseInt(t[1],10),a=parseInt(t[2],10)-1,o=parseInt(t[3],10),i=o>99?o:function(e){return e>n?e+1900:e+2e3}(o);return new Date(i,a,r,0,0,0)}}var j=n("bGYK"),w=n("mK0O");function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){return function(n,r){switch(r.type){case"INPUT_CHANGE":var a=k(r.payload);return a&&function(e,t){return!e||!g(e,t)}(n.date,a)?_(_({},n),{},{date:a,dateString:r.payload}):_(_({},n),{},{date:void 0,dateString:r.payload});case"SET_VALUE_ON_BLUR":var o=k(r.payload);return _(_({},n),{},{date:o,dateString:r.payload});case"TOGGLE":if(n.calendarHidden&&n.date){if(e&&n.date<e)return _(_({},n),{},{date:void 0,dateString:"",calendarHidden:!n.calendarHidden});if(t&&n.date>t)return _(_({},n),{},{date:void 0,dateString:"",calendarHidden:!n.calendarHidden})}return _(_({},n),{},{calendarHidden:!n.calendarHidden});case"SELECT_DATE_IN_CALENDAR":return _(_({},n),{},{date:r.payload,dateString:y(r.payload),calendarHidden:!0});case"VALUE_PROP_CHANGED":return void 0===n.date&&void 0===r.payload||n.date&&r.payload&&g(n.date,r.payload)?n:_(_({},n),{},{date:r.payload,dateString:r.payload?y(r.payload):""});default:throw new Error}}}function D(e){var t=e.label,n=void 0===t?"Velg dato":t,i=e.placeholder,c=void 0===i?"dd.mm.åååå":i,f=e.calendarButtonTitle,m=e.showCalendarLabel,h=void 0===m?f||"Åpne kalender":m,b=e.hideCalendarLabel,g=void 0===b?f||"Lukk kalender":b,k=e.initialDate,w=e.value,E=e.onChange,_=e.onBlur,D=e.onFocus,C=e.initialShow,x=void 0!==C&&C,A=e.className,L=void 0===A?"":A,M=e.forceCompact,S=e.inverted,T=e.disableBeforeDate,N=e.disableAfterDate,H=e.variant,P=e.helpLabel,R=e.errorLabel,F=e.width,B=void 0===F?"11.5rem":F,G=Object(r.a)(e,["label","placeholder","calendarButtonTitle","showCalendarLabel","hideCalendarLabel","initialDate","value","onChange","onBlur","onFocus","initialShow","className","forceCompact","inverted","disableBeforeDate","disableAfterDate","variant","helpLabel","errorLabel","width"]);var I,U=function(e,t){return Object(a.useCallback)((function(n){return r=n,a=e,(o=t)&&r>o||a&&r<a;var r,a,o}),[e,t])}(T,N),V=function(){var e=Object(a.useState)("jkl-datepicker-"+Object(j.a)(8))[0];return[e,e+"-label"]}(),Y=V[0],K=V[1],X=Object(a.useMemo)((function(){return O(T,N)}),[T,N]),J=function(e,t,n){return e?n(e)?void 0:e:t?n(t)?void 0:t:void 0}(w,k,U),q=Object(a.useReducer)(X,{date:J,calendarHidden:!x,dateString:J?y(J):""}),$=q[0],W=q[1],Z=p()("jkl-datepicker",{"jkl-datepicker--open":!$.calendarHidden,"jkl-datepicker--inverted":S},L),z=p()("jkl-datepicker__input-wrapper jkl-text-input__input-wrapper",{"jkl-text-input--compact":M,"jkl-text-input--inverted":S}),Q=Object(a.useRef)(null),ee=Object(a.useRef)(null),te=Object(u.a)(!$.calendarHidden)[0],ne=Object(a.useRef)(!0),re=function(e){return function(t){var n=Q.current&&Q.current.contains(t.relatedTarget);e&&!n&&e($.date,t)}};return Object(u.b)(Q,(function(){return!$.calendarHidden&&W({type:"TOGGLE"})})),Object(u.d)(te,["Escape"],(function(){!$.calendarHidden&&W({type:"TOGGLE"}),ee.current&&ee.current.focus()})),Object(a.useEffect)((function(){!ne.current&&E&&E($.date)}),[$.date]),Object(a.useEffect)((function(){ne.current||W({type:"VALUE_PROP_CHANGED",payload:w})}),[w]),Object(a.useEffect)((function(){ne.current=!1}),[]),o.a.createElement("div",{className:Z,ref:Q},o.a.createElement(l.a,{standAlone:!0,htmlFor:Y,variant:H},n),o.a.createElement("div",{className:z},o.a.createElement(s.a,{ref:ee,id:Y,describedBy:P||R?K:void 0,invalid:!!R,className:"jkl-datepicker__input jkl-text-input__input","data-testid":"jkl-datepicker__input",value:$.dateString,onFocus:re(D),onBlur:(I=_,function(e){W({type:"SET_VALUE_ON_BLUR",payload:e.target.value}),re(I)(e)}),onClick:function(){W({type:"TOGGLE"})},onChange:function(e){W({type:"INPUT_CHANGE",payload:e.target.value})},placeholder:c,width:B,type:"text"}),o.a.createElement(d.a,{className:"jkl-text-input__action-button",iconType:"calendar",buttonTitle:$.calendarHidden?h:g,onClick:function(){if(W({type:"TOGGLE"}),$.calendarHidden){var e=te.current,t=e&&e.querySelector("[autofocus]");t&&setTimeout((function(){return t.focus()}),100)}},onFocus:re(D),onBlur:re(_)}),o.a.createElement("div",{className:"jkl-datepicker__calendar-wrapper"},o.a.createElement(v,Object.assign({currentDate:$.date,onClickDate:function(e){W({type:"SELECT_DATE_IN_CALENDAR",payload:e.target.date}),ee.current&&ee.current.focus()},disableDate:U,hidden:$.calendarHidden,inverted:S,forceCompact:M,ref:te},G)))),o.a.createElement(l.d,{inverted:S,id:K,helpLabel:P,errorLabel:R}))}var C=function(e){var t=864e5*(30*e-5);return t<0?12+t:t},x=function(e){var t=e.boolValues,n=e.choiceValues,r=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,a=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,i=n&&n.Variant,c=function(e){return function(t){return console.log(e,t)}};return o.a.createElement(D,{label:"Velg startdato for forsikringen",extended:t&&t["Utvidet velger"],forceCompact:t&&t.Kompakt,inverted:t&&t.Invertert,variant:i,errorLabel:a,helpLabel:r,disableBeforeDate:new Date(Date.now()-C(2)),disableAfterDate:new Date(Date.now()+C(5)),onFocus:c("hello from onFocus"),onBlur:c("hello from onBlur"),onChange:c("hello from onChange")})},A={},L=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",t)}},M=L("Ingress"),S=L("ComponentExample"),T={_frontmatter:A},N=c.a;function H(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.mdx)(N,Object.assign({},T,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(M,{mdxType:"Ingress"},'Vi bruker datovelgeren til å gi brukerne mulighet til å skrive inn eller velge en dato. Ledeteksten beskriver hvilken dato brukeren skal fylle inn, for eksempel: "Oppgi datoen da skaden skjedde".'),Object(i.mdx)(S,{component:x,knobs:{boolProps:["Utvidet velger","Kompakt","Med feil","Med hjelpetekst","Invertert"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},mdxType:"ComponentExample"}),Object(i.mdx)("h2",null,"Typer og bruk"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Enkel datovelger:")," Når brukeren skal velge en dato, som er nær dagens dato."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Utvidet datovelger:")," Når brukeren skal velge en dato som ligger mer enn ett år frem eller tilbake i tid."),Object(i.mdx)("p",null,'Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato.\nEksempel: "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".'),Object(i.mdx)("h2",null,"Tekst og validering"),Object(i.mdx)("p",null,"Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet."),Object(i.mdx)("p",null,"Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),Object(i.mdx)("p",null,'Eksempel:\nHjelpetekst for første kalender i en periode:\n"Velg datoen da du først ble syk". Feilmelding: "Du må velge datoen da du først ble syk."'))}H.isMDXComponent=!0},Sj89:function(e,t,n){"use strict";(function(e){n("x3Br");var r,a=(r=n("mXGw"))&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,n){return(u=d()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&l(a,n.prototype),a}).apply(null,arguments)}function s(e){var t="function"==typeof Map?new Map:void 0;return(s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return u(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,e)})(e)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p="undefined"!=typeof window;p&&/(android)/i.test(navigator.userAgent),p&&/iPad|iPhone|iPod/.test(String(navigator.platform));p||e.HTMLElement||(e.HTMLElement=function(){return function e(){o(this,e)}}());var m,h,v=(m="undefined"==typeof window?{}:window.Element.prototype,h=m.matches||m.msMatchesSelector||m.webkitMatchesSelector,m.closest?function(e,t){return e.closest(t)}:function(e,t){for(e.correspondingUseElement&&(e=e.correspondingUseElement);e;e=e.parentElement)if(h.call(e,t))return e;return null});function b(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a="prevent_recursive_dispatch_maximum_callstack".concat(t);if(e[a])return!0;e[a]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r);var o=e.dispatchEvent(n);return e[a]=null,o}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(e){if(e.nodeType)return[e];if("string"==typeof e)return[].slice.call(t.querySelectorAll(e));if(e.length)return[].slice.call(e)}return[]}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var y=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var n,r,a,o;e.exports=(n={year:"FullYear",month:"Month",week:"Date",day:"Date",hour:"Hours",minute:"Minutes",second:"Seconds"},r=/([+-]\s*\d+)\s*(second|minute|hour|day|week|month|year)|(mon)|(tue)|(wed)|(thu)|(fri)|(sat)|(sun)/g,a=/([-\dy]+)[-/.]([\dm]+)[-/.]([\dd]+)/,o=/([\dh]+):([\dm]+):?([\ds]+)?/,function(e,t){if(isFinite(e))return new Date(Number(e));var i=String(e).toLowerCase(),c=new Date(isFinite(t)&&-1===i.indexOf("now")?Number(t):Date.now()),l=i.match(a)||[],d=l[1];void 0===d&&(d="y");var u=l[2];void 0===u&&(u="m");var s=l[3];void 0===s&&(s="d");var f=i.match(o)||[],p=f[1];void 0===p&&(p="h");var m=f[2];void 0===m&&(m="m");var h=f[3];void 0===h&&(h="s");var v={year:d,month:u,day:s,hour:p,minute:m,second:h};Object.keys(v).forEach((function(e){var t="month"===e?1:0,r=String(c["get"+n[e]]()+t);v[e]=v[e].replace(/[^-\d]+/g,(function(e,t,n){return t?r.substr(r.length-n.length+t,e.length):r.substr(0,Math.max(0,r.length-n.length+e.length))}))-t}));var b=new Date(v.year,Math.min(12,v.month+1),0).getDate();for(c.setFullYear(v.year,Math.min(11,v.month),Math.max(1,Math.min(b,v.day))),c.setHours(Math.min(24,v.hour),Math.min(59,v.minute),Math.min(59,v.second));null!==(v=r.exec(i));){var g=v[2],y=String(v[1]).replace(/\s/g,"")*("week"===g?7:1),k=v.slice(2).indexOf(v[0]),j=c.getDate();g?c["set"+n[g]](c["get"+n[g]]()+y):c.setDate(c.getDate()-(c.getDay()||7)+k),"month"!==g&&"year"!==g||j===c.getDate()||c.setDate(0)}return c})})),k={month:function(e,t){return e.disabled(t)&&M(e.parse(t)).filter((function(t){return!e.disabled(t)}))[0]||t},null:function(e,t){return t}},j={month:function(e,t){return M(e.parse(t)).map((function(t){return e.disabled(t)})).reduce((function(e,t){return e&&t}))},null:function(e,t){return e.disabled(t)}},w={year:"*-m-d",month:"y-*-d",day:"y-m-*",hour:"*:m",minute:"h:*",second:"h:m:*",timestamp:"*",null:"*"},E={33:"-1month",34:"+1month",35:"y-m-99",36:"y-m-1",37:"-1day",38:"-1week",39:"+1day",40:"+1week"},_=function(e){function t(){return o(this,t),f(this,c(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,a=[{key:"observedAttributes",get:function(){return["timestamp","months","days"]}}],(r=[{key:"connectedCallback",value:function(){var e,t,n,r,a=this;this._date=this.date,document.addEventListener("click",this),document.addEventListener("change",this),document.addEventListener("keydown",this),setTimeout((function(){return a.attributeChangedCallback()})),e=this.nodeName,t="".concat(this.nodeName,"{display:block}"),n="style-".concat(e.toLowerCase()),r=t.replace(/\/\*[^!][^*]*\*\//g,"").replace(/\s*(^|[:;,{}]|$)\s*/g,"$1"),document.getElementById(n)||document.head.insertAdjacentHTML("afterbegin",'<style id="'.concat(n,'">').concat(r,"</style>"))}},{key:"disconnectedCallback",value:function(){this._date=this._disabled=null,document.removeEventListener("click",this),document.removeEventListener("change",this),document.removeEventListener("keydown",this)}},{key:"attributeChangedCallback",value:function(){if(this._date){if(this.disabled(this.date)&&!this.disabled(this._date))return this.date=this._date;this.diff(this.date)&&b(this,"datepicker.change",this._date=this.date),D("button",this,C),D("select",this,L),D("input",this,x),D("table",this,A)}}},{key:"handleEvent",value:function(e){if(!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||"keydown"===e.type&&!E[e.keyCode])&&(this.contains(e.target)||v(e.target,'[for="'.concat(this.id,'"]').concat(', [data-for="'.concat(this.id,'"]')))))if("change"===e.type){var t=w[e.target.getAttribute("data-type")].replace("*",e.target.value);this.date=k[e.target.getAttribute("data-fill")](this,t)}else if("click"===e.type){var n=v(e.target,"button[value]"),r=v(e.target,"table");if(n){t=w[n.getAttribute("data-type")].replace("*",n.value);var a=n.value.match(new RegExp(Object.keys(k).filter((function(e){return"null"!==e})).join("|"))),o=a&&a[0];t=k[o](this,t),this.date=t}n&&r&&b(this,"datepicker.click.day")}else"keydown"===e.type&&v(e.target,"table")&&(this.date=E[e.keyCode],this.querySelector("[autofocus]").focus(),e.preventDefault())}},{key:"diff",value:function(e){return this.parse(e).getTime()-this.timestamp}},{key:"parse",value:function(e,t){return y(e,t||this._date)}},{key:"disabled",get:function(){return this._disabled||Function.prototype},set:function(e){var t=this;this._disabled="function"==typeof e?function(n){return e(t.parse(n),t)}:function(){return e},this.attributeChangedCallback()}},{key:"timestamp",get:function(){return String(this._date.getTime())}},{key:"year",get:function(){return String(this._date.getFullYear())}},{key:"month",get:function(){return O(this._date.getMonth()+1)}},{key:"day",get:function(){return O(this._date.getDate())}},{key:"hour",get:function(){return O(this._date.getHours())}},{key:"minute",get:function(){return O(this._date.getMinutes())}},{key:"second",get:function(){return O(this._date.getSeconds())}},{key:"date",get:function(){return y(this.getAttribute("timestamp")||this._date||Date.now())},set:function(e){return this.setAttribute("timestamp",this.parse(e).getTime())}},{key:"months",set:function(e){this.setAttribute("months",[].concat(e).join(","))},get:function(){return(this.getAttribute("months")||"januar,februar,mars,april,mai,juni,juli,august,september,oktober,november,desember").split(/\s*,\s*/)}},{key:"days",set:function(e){this.setAttribute("days",[].concat(e).join(","))},get:function(){return(this.getAttribute("days")||"man,tirs,ons,tors,fre,lør,søn").split(/\s*,\s*/)}}])&&i(n.prototype,r),a&&i(n,a),t}(s(HTMLElement)),O=function(e){return"0".concat(e).slice(-2)},D=function(e,t,n){return[].forEach.call(document.getElementsByTagName(e),(function(e){(t.contains(e)||t.id===e.getAttribute(t.external))&&n(t,e)}))};function C(e,t){if(t.value){t.type="button";var n=t.value.match(new RegExp(Object.keys(j).filter((function(e){return"null"!==e})).join("|"))),r=n&&n[0];t.disabled=j[r](e,t.value)}}function x(e,t){var n=t.getAttribute("data-type")||t.getAttribute("type");"radio"===n||"checkbox"===n?(t.disabled=e.disabled(t.value),t.checked=!e.diff(t.value)):w[n]&&(t.setAttribute("type","number"),t.setAttribute("data-type",n),t.value=e[n])}function A(e,t){t.firstElementChild||(t.innerHTML="\n    <caption></caption><thead><tr>".concat(Array(8).join("</th><th>"),"</tr></thead>\n    <tbody>").concat(Array(7).join("<tr>".concat(Array(8).join('<td><button type="button"></button></td>'),"</tr>")),"</tbody>"));var n=new Date,r=e.date.getMonth(),a=e.parse("y-m-1 mon");t.caption.textContent="".concat(e.months[r],", ").concat(e.year),g("th",t).forEach((function(t,n){return t.textContent=e.days[n]})),g("button",t).forEach((function(t){var o=!e.diff(a),i=a.getDate(),c=a.getMonth();t.textContent=i,t.value="".concat(a.getFullYear(),"-").concat(c+1,"-").concat(i),t.disabled=e.disabled(a),t.tabIndex=o-1,t.setAttribute("data-adjacent",r!==c),t.setAttribute("aria-label","".concat(i,". ").concat(e.months[c])),t.setAttribute("aria-current",a.getDate()===n.getDate()&&a.getMonth()===n.getMonth()&&a.getFullYear()===n.getFullYear()&&"date"),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.hasAttribute(t);!n===e.hasAttribute(t)&&e[n?"setAttribute":"removeAttribute"](t,"")}(t,"autofocus",o),a.setDate(i+1)}))}function L(e,t){t.firstElementChild||(t._autofill=!0,t.setAttribute("data-fill","month"),t.innerHTML=e.months.map((function(e,t){return'<option value="y-'.concat(t+1,'-d"></option>')})).join(""));var n=j[t.getAttribute("data-fill")];g(t.children).forEach((function(r,a){t._autofill&&(r.textContent=e.months[a]),r.disabled=n(e,r.value),r.selected=!e.diff(r.value)}))}function M(e){var t=new Date(e);t.setDate(1);for(var n=t.getMonth(),r=[];t.getMonth()===n;)r.push(new Date(t)),t.setDate(t.getDate()+1);return r}var S=function(){var e="undefined"==typeof window?{}:window.Element.prototype,t=e.matches||e.msMatchesSelector||e.webkitMatchesSelector;return e.closest?function(e,t){return e.closest(t)}:function(e,n){for(;e;e=e.parentElement)if(t.call(e,n))return e;return null}}();t.a=function(e,t){void 0===t&&(t={});var n=((t.name||e.name||String(e).match(/function ([^(]+)/)[1])+"-"+(Date.now().toString(36)+Math.random().toString(36).slice(2,5))).replace(/.[A-Z]/g,(function(e){return e[0]+"-"+e[1]})),r=t.props||[],o=t.customEvents||[],i=o.reduce((function(e,t){return e[t]="on"+t.replace(/(^|\.)./g,(function(e){return e.slice(-1).toUpperCase()})),e}),{}),c=r.concat("forwardRef",Object.keys(i).map((function(e){return i[e]}))),l=(n+"-"+(t.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(t){function n(e){var n=this;t.call(this,e),this.ref=function(e){return"function"==typeof n.props.forwardRef?n.props.forwardRef(e):n.props.forwardRef&&(n.props.forwardRef.current=e),n.el=e},Object.keys(i).forEach((function(e){var t=i[e];n[e]=function(e){n.props[t]&&S(e.target,n.el.nodeName)===n.el&&n.props[t](e)}}))}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var t=this;window.customElements.get(l)||window.customElements.define(l,e),r.forEach((function(e){e in t.props&&(t.el[e]=t.props[e])})),o.forEach((function(e){t.el.addEventListener(e,t[e])}))},n.prototype.componentDidUpdate=function(e){var t=this;r.forEach((function(n){e[n]!==t.props[n]&&(t.el[n]=t.props[n])}))},n.prototype.componentWillUnmount=function(){var e=this;o.forEach((function(t){e.el.removeEventListener(t,e[t])}))},n.prototype.render=function(){var e=this;return a.createElement(l,Object.keys(this.props).reduce((function(t,n){return-1===c.indexOf(n)&&("className"===n?t.class=e.props[n]:!0===e.props[n]?t[n]="":!1!==e.props[n]&&(t[n]=e.props[n])),t}),{ref:this.ref}))},n}(a.Component)}(_,{name:"CoreDatepicker",props:["disabled"],customEvents:["datepicker.change","datepicker.click.day"],suffix:"3.0.8"})}).call(this,n("pCvA"))}}]);
//# sourceMappingURL=component---packages-datepicker-react-documentation-datepicker-mdx-a30990e93ed9e2158bd2.js.map