"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9770],{805:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return L},default:function(){return T}});var r=n(7077),l=n(7378),a=n(1368),o=n(2803),s=n(7554),i=n(5342),c=n(1107),u=n(6328),d=n(3804);function m(e,t){var n=t.event,r=t.list,l=t.currentFocus;n.preventDefault(),function(e,t,n){var r=n.parentElement;switch(e){case"prev":var l=r&&r.previousElementSibling;if(l){var a=l.querySelector('[role="option"]');a&&a.focus()}break;case"next":var o=r&&r.nextElementSibling;if(o){var s=o.querySelector('[role="option"]');s&&s.focus()}break;case"first":var i=t.querySelector('[role="option"]');i&&i.focus();break;case"last":var c=t.querySelectorAll('[role="option"]');c.length&&c[c.length-1].focus()}}(e,r,l)}function v(e,t){var n=e.list,r=e.event,l=e.search,a=e.searchResetTimer;void 0===t&&(t=m);var o=r.key,s={event:r,list:n,currentFocus:r.target};switch(o){case"ArrowUp":t("prev",s);break;case"ArrowDown":t("next",s);break;case"Home":t("first",s);break;case"End":t("last",s);break;case"Tab":r.preventDefault();break;case"Enter":break;default:if(void 0!==l){var i=function(e){var t=e.list,n=e.key,r=e.search,l=e.searchResetTimer,a=t.querySelectorAll('[role="option"]');if(!a.length)return null;if(r){r.keys=r.keys.concat(n),function(e,t){t&&(clearTimeout(t),t=void 0);t=setTimeout((function(){e?e.keys="":e={keys:""},t=void 0}),500,e,t)}(r,l);for(var o=0;o<a.length;o++){var s=a[o].innerText;if(s&&0===s.toLowerCase().indexOf(r.keys))return a[o]}}return null}({list:n,key:o,search:l,searchResetTimer:a});i&&i.focus()}}}var p=n(382),f=n.n(p);function k(e){var t=e.expanded,n=void 0!==t&&t,r=e.className,a=f()({"jkl-expand-arrow":!0,"jkl-expand-arrow--expanded":n},r);return l.createElement("span",{className:a},l.createElement("svg",{className:"jkl-expand-arrow__down",viewBox:"0 0 13 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M6.90762 13.8828L11.9272 8.86326L12.7093 9.64537L6.35463 16L-1.68645e-06 9.64536L0.782101 8.86326L5.80156 13.8827L5.80156 1.01438e-06L6.90762 1.20777e-06L6.90762 13.8828Z",fill:"currentColor"})),l.createElement("svg",{className:"jkl-expand-arrow__up",viewBox:"0 0 13 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M5.80163 2.1172L0.78209 7.13674L-1.29938e-05 6.35464L6.35462 5.14415e-08L12.7093 6.35464L11.9272 7.13674L6.90769 2.11728L6.9077 16L5.80163 16L5.80163 2.1172Z",fill:"currentColor"})))}var g=["id","name","items","value","label","onChange","onBlur","onFocus","className","helpLabel","errorLabel","searchable","inline","defaultPrompt","variant","forceCompact","inverted","width"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){return void 0===e&&(e=""),e.toLowerCase().replace(/[\W_]+/g,"")}var E=(0,l.forwardRef)((function(e,t){var n,a=e.id,o=e.name,s=e.items,m=e.value,p=e.label,b=e.onChange,E=e.onBlur,_=e.onFocus,w=e.className,y=e.helpLabel,L=e.errorLabel,x=e.searchable,N=void 0!==x&&x,C=e.inline,O=void 0!==C&&C,S=e.defaultPrompt,T=void 0===S?"Velg":S,R=e.variant,D=e.forceCompact,F=e.inverted,B=e.width,V=(0,r.Z)(e,g),P=(0,l.useState)(""),M=P[0],A=P[1],q=void 0!==m&&""!==m,H=s.map(u.YL).map((function(e){var t=!N||""===M||e.label.toLowerCase().indexOf(M.toLowerCase())>-1;return h(h({},e),{},{visible:t})})),Z=(null===(n=H.find((function(e){return e.value===m})))||void 0===n?void 0:n.label)||T,I=(0,l.useRef)(!1),K=(0,l.useState)(!1),X=K[0],Y=K[1],G=(0,l.useState)(a||"jkl-select-"+(0,c.x0)(8))[0],U=G+"_search-input",W=N&&X,z=(0,l.useRef)(null),J=(0,l.useRef)(null),Q=t&&"function"!=typeof t?t:J,$=(0,l.useRef)(null),ee=(0,l.useRef)(null),te=(0,d.vD)(X)[0],ne=function(e){void 0===e&&(e=!0);var t,n,r=(0,l.useRef)(null);return e&&(t={keys:""}),(0,l.useEffect)((function(){var e=r.current;return e&&e.addEventListener("keydown",(function(r){return v({list:e,event:r,search:t,searchResetTimer:n})})),function(){e&&e.removeEventListener("keydown",(function(r){return v({list:e,event:r,search:t,searchResetTimer:n})}))}}),[t,n]),r}(),re=f()("jkl-select",w,{"jkl-select--inline":O,"jkl-select--compact":D,"jkl-select--inverted":F,"jkl-select--open":X,"jkl-select--no-value":!q,"jkl-select--invalid":!!L});function le(e){var t=z.current;!(t&&t.contains(e.relatedTarget))&&E&&(E(m),Q.current&&Q.current.dispatchEvent(new Event("focusout",{bubbles:!0})),I.current=!1)}function ae(){_&&!I.current&&(_(m),I.current=!0)}return(0,l.useEffect)((function(){var e=Q.current,n=ee.current,r=$.current,l=z.current;return e&&"function"==typeof t&&t(e),null==e||e.addEventListener("focus",(function(){W?null==n||n.focus():null==r||r.focus()})),null==e||e.addEventListener("blur",(function(e){l&&l.contains(e.relatedTarget)&&e.preventDefault()})),function(){null==e||e.removeEventListener("focus",(function(){W?null==n||n.focus():null==r||r.focus()})),null==e||e.removeEventListener("blur",(function(e){l&&l.contains(e.relatedTarget)&&e.preventDefault()}))}}),[t,Q,W]),l.createElement("div",Object.assign({"data-testid":"jkl-select",className:re,ref:z},V),l.createElement(u.__,{standAlone:N,htmlFor:N?U:void 0,variant:R,forceCompact:D,srOnly:O},p),l.createElement("select",{name:o,tabIndex:-1,className:"jkl-sr-only","aria-hidden":!0,ref:Q,defaultValue:m},l.createElement("option",{value:m},m)),l.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:B}},N&&l.createElement("input",{id:U,hidden:!W,ref:ee,placeholder:"Søk",value:M,onChange:function(e){return A(e.target.value)},className:"jkl-select__search-input",onBlur:le,onFocus:ae}),l.createElement("button",{ref:$,hidden:W,type:"button",className:"jkl-select__button","data-testid":"jkl-select__button","aria-haspopup":"listbox",onBlur:le,onFocus:ae,onKeyUp:function(e){var t;"ArrowDown"!==e.key||X||null===(t=$.current)||void 0===t||t.click()}},Z),l.createElement(i.Z,{id:G,ref:te,role:"listbox",className:"jkl-select__options-menu",popup:p,hidden:!X,onToggle:function(){var e=!X;if(Y(!X),e&&!N){var t=ne.current;t&&function(e,t,n){var r;(r=void 0!==n?e.querySelector("#"+t+"__"+j(n)):e.querySelector('[role="option"]'))&&r.focus()}(t,G,m)}else e&&ee.current&&ee.current.focus()},onToggleSelect:function(e){e.target.value=e.detail;var t=e.detail.value;A(""),b&&b(t),Q.current&&Q.current.dispatchEvent(new Event("change",{bubbles:!0})),e.target.hidden=!0,e.target.button.focus()},"aria-activedescendant":q&&G+"__"+j(m)},l.createElement("ul",{className:"jkl-select__option-wrapper","data-testid":"jkl-select__option-wrapper",tabIndex:-1,ref:ne},H.map((function(e,t){return l.createElement("li",{key:e.value,hidden:!e.visible},l.createElement("button",{type:"button",id:G+"__"+j(e.value),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===m,role:"option",value:e.value,"data-testautoid":"jkl-select__option-"+t,onBlur:le,onFocus:ae},l.createElement("span",{className:"jkl-select__option-label"},e.label)))})))),l.createElement(k,{className:"jkl-select__arrow",expanded:X})),l.createElement(u.Aq,{inverted:F,helpLabel:y,errorLabel:L,forceCompact:D}))})),_=(0,l.forwardRef)((function(e,t){var n=e.id,r=e.name,a=e.label,o=e.items,s=e.className,i=void 0===s?"":s,d=e.inline,m=void 0!==d&&d,v=e.helpLabel,p=e.errorLabel,g=e.variant,b=e.placeholder,h=e.value,j=e.forceCompact,E=e.inverted,_=e.width,w=e.onChange,y=e.onBlur,L=e.onFocus;h||!b&&o.length&&(h=(0,u.YL)(o[0]).value);var x=f()("jkl-select",i,{"jkl-select--inline":m,"jkl-select--compact":j,"jkl-select--inverted":E,"jkl-select--invalid":!!p}),N=h?void 0:"",C=(0,l.useState)(n||"jkl-select-"+(0,c.x0)(8))[0];return l.createElement("div",{"data-testid":"jkl-select",className:x},l.createElement(u.__,{standAlone:!0,htmlFor:C,variant:g,forceCompact:j},a),l.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:_}},l.createElement("select",{ref:t,id:C,name:r,value:h,defaultValue:N,className:"jkl-select__button",onChange:w,onBlur:y||w,onFocus:L},b&&!h&&l.createElement("option",{disabled:!0,value:""},b),o.map(u.YL).map((function(e){return l.createElement("option",{"data-testid":"jkl-select__option",className:"jkl-select__option",key:e.value,value:e.value},e.label)}))),l.createElement(k,{className:"jkl-select__arrow"})),l.createElement(u.Aq,{helpLabel:v,errorLabel:p,forceCompact:j}))})),w=function(e){var t=e.boolValues,n=e.choiceValues,r=t&&t.Native?_:E,a=(0,l.useState)(),o=a[0],s=a[1],i=t&&t["Med feil"]?"Beskrivende feilmelding":void 0,c=t&&t["Med hjelpetekst"]?"Hjelpsom beskjed":void 0,u=n&&n.Etikettvariant,d=t&&t["Med søk"],m=(0,l.useRef)(null);(0,l.useEffect)((function(){var e=m.current;return null==e||e.addEventListener("change",(function(e){return console.log("Verdi fra selectRef:",e.target.value)})),function(){null==e||e.removeEventListener("change",(function(e){return console.log("Verdi fra selectRef:",e.target.value)}))}}),[m]);return l.createElement(r,{ref:m,name:"produsent",forceCompact:t&&t.Kompakt,inverted:t&&t.Invertert,variant:u,label:"Hvilket merke er telefonen?",items:[{value:"apple",label:"Apple"},{value:"samsung",label:"Samsung"},{value:"huawei",label:"Huawei"},{value:"LG",label:"LG"}],value:o,helpLabel:c,errorLabel:i,onChange:function(e){var t;"string"==typeof e?t=e:e&&(t=e.target.value),s(t),console.log("Change: ",t)},searchable:d,onFocus:function(e){console.log("Focus: ",e)},onBlur:function(e){console.log("Blur: ",e)}})},y=["components"],L={},x=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",t)}},N=x("Ingress"),C=x("ComponentExample"),O={_frontmatter:L},S=o.Z;function T(e){var t=e.components,n=(0,r.Z)(e,y);return(0,a.mdx)(S,Object.assign({},O,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(N,{mdxType:"Ingress"},"Vi bruker nedtrekkslister til å gi brukeren en liste med alternativ. Nedtrekkslister passer i de tilfellene det er for mange valg til å bruke radioknapper. Nedtrekkslisten må ha en overskrift, som forteller hva det er brukerne kan velge mellom i listen."),(0,a.mdx)(C,{component:w,knobs:{boolProps:["Native","Kompakt","Invertert","Med hjelpetekst","Med feil","Med søk"],choiceProps:[{name:"Etikettvariant",values:["small","medium","large"],defaultValue:0}]},mdxType:"ComponentExample"}),(0,a.mdx)("p",null,"Hvis du trenger en nedtrekksliste med mange valg, kan du også legge inn en søke- eller filtreringsfunksjon."),(0,a.mdx)("h2",null,"Tekst og validering"),(0,a.mdx)("p",null,"Bruk prinsippene for skjemadesign til å velge størrelse på overskriften til listen. Lag en kort og tydelig tekst, som forteller hva det er brukeren skal gjøre i nedtrekkslisten. Eksempel: ",(0,a.mdx)("em",{parentName:"p"},"Velg land"),". Hvis det trengs, kan du legge en hjelpetekst under listen for å forklare mer."),(0,a.mdx)("p",null,"Hvis nedtrekkslisten ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta informasjonen fra hjelpeteksten."),(0,a.mdx)("p",null,"Eksempel:\n",(0,a.mdx)("strong",{parentName:"p"},"Hjelpetekst"),": ",(0,a.mdx)("em",{parentName:"p"},"Velg landet du var på ferie i da du ble syk"),". ",(0,a.mdx)("strong",{parentName:"p"},"Feilmelding"),": ",(0,a.mdx)("em",{parentName:"p"},"Du må velge hvor du var på ferie"),"."),(0,a.mdx)("h2",null,"Bruk"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Velg årsak eller skadetype (gjerne mange valg)"),(0,a.mdx)("li",{parentName:"ul"},"Velg diagnose (for dyre- eller helseforsikring, gjerne med søkemulighet)"),(0,a.mdx)("li",{parentName:"ul"},"Velg stilling (gjerne med søkemulighet)")))}T.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-select-react-documentation-select-mdx-8f0bf68bf0af9681c812.js.map