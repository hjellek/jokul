"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9403],{2295:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return ke},default:function(){return xe}});var r=n(808),l=n(7378),a=n(1368),o=n(2803),i=n(897),u=n(126),s=n(4649);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=(0,l.createContext)(void 0),v=function(){return(0,l.useContext)(m)},f=function(e){var t=e.state,n=e.children;return l.createElement(m.Provider,{value:t},n)},p=n(2520),b=n(5529),g=(0,l.createContext)(void 0),k=function(){return(0,l.useContext)(g)},h=function(e){var t=e.state,n=e.children;return l.createElement(g.Provider,{value:t},n)},j=function(e){var t=e.label,n=e.name,r=e.options,a=e.helpLabel,o=e.autoFocus,i=void 0!==o&&o,s=v(),d=k(),c=s||d,m=(0,l.useRef)(null);(0,l.useEffect)((function(){i&&m.current&&m.current.focus()}),[i,m]);var f=function(e){var t=e.target.value,n=null==r?void 0:r.find((function(e){return e.value.toString()===t}));if(n)if(null!=c&&c.currentValue){if(Array.isArray(null==c?void 0:c.currentValue)){var l=c.currentValue.find((function(e){return e===n}));l?c.setCurrentValue((function(e){return e.filter((function(e){return e!==l}))})):c.setCurrentValue((function(e){return[].concat((0,u.Z)(e),[n])}))}}else null==c||c.setCurrentValue([n])};return c?l.createElement(p.N,{variant:"large",legend:t,helpLabel:a},null==r?void 0:r.map((function(e,r){return l.createElement(b.X,{key:t+"-"+e.value,name:n||t,value:e.value.toString(),onChange:f,ref:0===r?m:void 0},e.label)}))):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)},y=n(6058),E=function(e){var t=e.label,n=e.name,r=e.options,a=e.helpLabel,o=e.autoFocus,i=void 0!==o&&o,u=v(),s=k(),d=u||s,c=(null==r?void 0:r.length)||0,m=(0,l.useRef)(null);(0,l.useEffect)((function(){i&&m.current&&m.current.focus()}),[i,m]);var f=(0,l.useMemo)((function(){var e;return Array.isArray(null==d?void 0:d.currentValue)?null==d?void 0:d.currentValue[0].value.toString():null==d||null===(e=d.currentValue)||void 0===e?void 0:e.value.toString()}),[null==d?void 0:d.currentValue]);return d?l.createElement(y.G,{ref:m,variant:"large",inline:c<3,legend:t,name:n||t,choices:(null==r?void 0:r.map((function(e){return{label:e.label,value:e.value.toString()}})))||[],selectedValue:f,onChange:function(e){var t=null==r?void 0:r.find((function(t){return t.value.toString()===e.target.value}));null==d||d.setCurrentValue(t)},helpLabel:a}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)},S=n(2384),x=function(e){var t=e.label,n=e.name,r=e.helpLabel,a=void 0===r?"Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.":r,o=e.autoFocus,i=void 0!==o&&o,u=v(),s=k(),d=u||s,c=(0,l.useRef)(null);(0,l.useEffect)((function(){i&&c.current&&c.current.focus()}),[i,c]);var m=(0,l.useMemo)((function(){var e;return Array.isArray(null==d?void 0:d.currentValue)?null==d?void 0:d.currentValue[0].value.toString():null==d||null===(e=d.currentValue)||void 0===e?void 0:e.value.toString()}),[null==d?void 0:d.currentValue]);return d?l.createElement(S.Kx,{ref:c,variant:"large",label:t,name:n||t,startOpen:!0,rows:5,value:m,onChange:function(e){var r={label:t,name:n||t,type:"text",value:e.target.value};null==d||d.setCurrentValue(r)},helpLabel:a}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)},w=n(2398),N=n.n(w),C=n(7613),_=n.n(C),V=n(6292),O=n.n(V),L=n(2666),A=n.n(L),F=n(1107),D=n(382),P=n.n(D),M=n(6328),T=["className","label","helpLabel","errorLabel","variant","id","from","to","value"],Q=(0,l.forwardRef)((function(e,t){var n=e.className,r=e.label,a=e.helpLabel,o=e.errorLabel,i=e.variant,u=void 0===i?"medium":i,s=e.id,d=e.from,c=void 0===d?1:d,m=e.to,v=void 0===m?5:m,f=e.value,p=A()(e,T),b=v-(c-1),g=O()(Array(b).keys()),k=(0,l.useState)(s||"jkl-slider-".concat((0,F.x0)(8))),h=_()(k,1)[0],j=(0,l.useState)(),y=_()(j,2),E=y[0],S=y[1],x=(0,l.useRef)(null);return(0,l.useEffect)((function(){var e,t=v-c,n=(null===(e=x.current)||void 0===e?void 0:e.clientWidth)||0;S(n/t*((f||c)-c))}),[f,x,c,v]),(0,l.useEffect)((function(){t&&("function"==typeof t?t(x.current):t.current=x.current)}),[t,x]),l.createElement("div",{className:P()("jkl-slider",n,{"jkl-slider--invalid":!!o})},l.createElement(M.__,{standAlone:!0,htmlFor:h,variant:u},r),l.createElement("input",N()({ref:x,className:"jkl-slider__slider",type:"range",list:"jkl-slider__values",min:c,max:v,id:h,value:f},p,{style:{"--progress-width":"".concat(E,"px")}})),l.createElement("div",{id:"jkl-slider__values",className:"jkl-slider__values"},g.map((function(e){return l.createElement("span",{key:e,className:P()({"jkl-slider__value":!0,"jkl-slider__value--current":f===e+c})},e+c)}))),l.createElement(M.Aq,{className:"jkl-layout-spacing--xs-top",helpLabel:a,errorLabel:o}))}));Q.displayName="Slider";var R=function(e,t){return e<t?e:t},q=function(e,t){return e>t?e:t},H=function(e){var t=e.label,n=e.name,r=e.options,a=e.autoFocus,o=void 0!==a&&a,i=null==r?void 0:r.map((function(e){return parseInt(e.value.toString())})),u=null==i?void 0:i.reduce(R),s=null==i?void 0:i.reduce(q),d=v(),c=k(),m=d||c,f=(0,l.useState)(),p=f[0],b=f[1],g=(0,l.useRef)(null);return(0,l.useEffect)((function(){o&&g.current&&g.current.focus()}),[o,g]),(0,l.useEffect)((function(){var e=Array.isArray(null==m?void 0:m.currentValue)?null==m?void 0:m.currentValue[0]:null==m?void 0:m.currentValue,t=e&&parseInt(e.value.toString());b(t)}),[null==m?void 0:m.currentValue]),m?l.createElement(Q,{variant:"large",label:t,name:n||t,value:p,from:u,to:s,ref:g,onChange:function(e){var t=null==r?void 0:r.find((function(t){return e.target.value===t.value.toString()}));null==m||m.setCurrentValue(t)}}):(console.error("Questions must be used inside a Followup or Feedback context provider"),null)};H.displayName="SliderQuestion";var Z=function(e){var t=e.label,n=e.helpLabel,r=void 0===n?"Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.":n,a=k(),o=(0,l.useState)(t),i=o[0],u=o[1];if((0,l.useEffect)((function(){var e,n,r,l=Array.isArray(null==a?void 0:a.currentValue)?null==a||null===(e=a.currentValue[0].textAreaLabel)||void 0===e?void 0:e.toString():null==a||null===(n=a.currentValue)||void 0===n||null===(r=n.textAreaLabel)||void 0===r?void 0:r.toString();u(l||t)}),[null==a?void 0:a.currentValue,t]),!a)return console.error("Addon question must be used inside a MainQuestion context provider"),null;var s=a.message,d=a.setMessage;return l.createElement(S.Kx,{inline:!0,startOpen:!0,rows:4,"data-testid":"jkl-feedback__open-question",className:"jkl-layout-spacing--medium-bottom jkl-layout-spacing--medium-top",label:i,placeholder:i,helpLabel:r,value:s||"",onChange:function(e){return d(e.target.value)}})},I=/^[a-zA-ZæøåÆØÅ0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,K=/^\d{8}$/,B={feedbackSubmitted:!1,followupStarted:!1,followupSubmitted:!1,contactSubmitted:!1,setFeedbackSubmitted:function(){return null},setFollowupStarted:function(){return null},setFollowupSubmitted:function(){return null},setContactSubmitted:function(){return null}},X=(0,l.createContext)(B),z=function(){return(0,l.useContext)(X)},G=function(e){var t=e.value,n=e.children;return l.createElement(X.Provider,{value:t},n)},J=n(9158),$=["children","className"],W=function(e){var t=e.children,n=e.className,a=(0,r.Z)(e,$);return l.createElement(J.kk,Object.assign({className:P()("jkl-feedback__fade-in",n)},a),t)},Y=function(e){return e&&""!==e?(t=e,I.test(t)?void 0:"Skriv inn en gyldig e-postadresse"):"Du må oppgi e-postadresse for at vi kan kontakte deg";var t},U=function(e){return e&&""!==e?(t=e,K.test(t)?void 0:"Skriv inn et gyldig telefonnummer"):"Du må oppgi telefonnummer for at vi kan kontakte deg";var t},ee={title:"Takk for tiden din!",children:"Neste gang vi gjennomfører intervjuer og tester kan det hende vi tar kontakt med deg. Dine innspill hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem."},te=function(e){var t=e.label,n=void 0===t?"Kan vi kontakte deg for flere innspill?":t,r=e.sendButtonLabel,a=void 0===r?"Sett meg på lista!":r,o=e.withPhone,u=void 0!==o&&o,s=e.onSubmit,d=e.successMessage,c=void 0===d?ee:d,m=e.children,v=(0,l.useState)(""),f=v[0],p=v[1],b=(0,l.useState)(""),g=b[0],k=b[1],h=(0,l.useState)({}),j=h[0],y=h[1],E=(0,l.useRef)(null),x=(0,l.useRef)(null),w=(0,l.useState)(!1),N=w[0],C=w[1],_=(0,l.useState)(!1),V=_[0],O=_[1],L=z(),A=L.contactSubmitted,F=L.setContactSubmitted,D="string"==typeof m?"p":"div",P=function(e,t){var n=Y(e),r=U(t);return y({email:n,phone:r}),{emailError:n,phoneError:r}};(0,l.useEffect)((function(){if(N){var e=P(f,g),t=e.emailError,n=e.phoneError;t||u&&n||C(!1)}}),[f,g,N,u]);var M=function(e){return function(t){return e(t.target.value)}};return V?null:A?l.createElement(W,c):l.createElement("form",{className:"jkl-layout-spacing--medium-top",onSubmit:function(e){e.preventDefault();var t,n,r=P(f,g),l=r.emailError,a=r.phoneError;return l?(C(!0),void(null===(t=E.current)||void 0===t||t.focus())):u&&a?(C(!0),void(null===(n=x.current)||void 0===n||n.focus())):(s({email:f,phone:u?g:void 0}),void F(!0))},"aria-live":"off"},l.createElement("p",{className:"jkl-heading-4 jkl-component-spacing--small-bottom"},n),m&&l.createElement(D,{className:"jkl-body"},m),l.createElement(S.oi,{ref:E,className:"jkl-layout-spacing--small-top",variant:"small",label:"E-post",autoComplete:"email",name:"email",value:f,onChange:M(p),errorLabel:j.email}),u&&l.createElement(S.oi,{ref:x,className:"jkl-layout-spacing--small-top",variant:"small",label:"Telefonnummer",autoComplete:"tel",name:"phone",value:g,onChange:M(k),errorLabel:j.phone}),l.createElement("div",{className:"jkl-layout-spacing--medium-top"},l.createElement(i.KM,{type:"submit",className:"jkl-layout-spacing--medium-right"},a),l.createElement(i.C9,{onClick:function(){return O(!0)}},"Nei takk")))};var ne=function(e){switch(e){case"radio":return E;case"checkbox":return j;case"text":return x;case"slider":return H;default:return E}},re={title:"Takk, igjen!",children:"Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem."},le=function(e){var t=e.questions,n=e.successMessage,r=void 0===n?re:n,a=e.onSubmit,o=(0,l.useState)(!1),s=o[0],d=o[1],m=(0,l.useRef)(null),v=function(e,t){var n=(0,l.useState)(),r=n[0],a=n[1],o=(0,l.useState)({number:0,question:e[0],isLast:1===e.length}),i=o[0],s=o[1],d=(0,l.useState)(!1),m=d[0],v=d[1],f=(0,l.useState)(!1),p=f[0],b=f[1],g=(0,l.useState)(),k=g[0],h=g[1],j=(0,l.useRef)({values:r,submitted:p,onSubmit:t});(0,l.useEffect)((function(){j.current=c(c({},j.current),{},{values:r,submitted:p})}),[r,p]);var y=(0,l.useCallback)((function(){j.current.submitted||void 0===j.current.values||j.current.onSubmit(j.current.values)}),[]);return(0,l.useEffect)((function(){m&&(y(),b(!0))}),[m,y]),(0,l.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("beforeunload",y),function(){y(),window.removeEventListener("beforeunload",y)}}),[y]),{questions:e,values:r,step:i,currentValue:k,setCurrentValue:h,submitted:p,handleNext:function(t){null==t||t.preventDefault();var n=Array.isArray(k)?k.map((function(e){return e.value.toString()})):null==k?void 0:k.value,r=c(c({},i.question),{},{name:i.question.name||i.question.label,value:n});a((function(e){var t=(null==e?void 0:e.filter((function(e){return e.name!==r.name})))||[];return[].concat((0,u.Z)(t),[r])})),h(void 0),i.isLast?v(!0):s((function(t){var n=t.number+1;return{number:n,question:e[n],isLast:n+1>=e.length}}))},handleAbort:function(){a(void 0),h(void 0),s({number:0,question:e[0],isLast:1===e.length}),b(!0)}}}(t,a),p=v.handleAbort,b=v.handleNext,g=v.step,k=v.submitted,h=z(),j=h.followupStarted,y=h.setFollowupStarted,E=h.setFollowupSubmitted,S=h.contactSubmitted;(0,l.useEffect)((function(){0!==g.number&&m.current&&m.current.focus()}),[g]),(0,l.useEffect)((function(){E(k)}),[k,E]);var x=ne(t[g.number].type),w=g.isLast?i.KM:i.kq;return s?null:l.createElement(f,{state:v},!j&&l.createElement("div",{className:"jkl-feedback__fade-in"},l.createElement("p",{className:"jkl-heading-4 jkl-layout-spacing--medium-top jkl-component-spacing--small-bottom"},"Har du tid til å svare på noen flere spørsmål?"),l.createElement("p",{className:"jkl-body jkl-layout-spacing--medium-bottom"},"Det tar kun et minutt, og hjelper oss å lage bedre løsninger for deg."),l.createElement(i.KM,{onClick:function(){return y(!0)},className:"jkl-layout-spacing--medium-right"},"Jeg har tid!"),l.createElement(i.C9,{onClick:function(){return d(!0)}},"Nei takk")),!k&&j&&l.createElement("form",{onSubmit:b,className:"jkl-feedback__fade-in"},l.createElement("p",{className:"jkl-feedback__step-counter",ref:m},"Steg ",g.number+1," av ",t.length),l.createElement(x,Object.assign({},t[g.number],{autoFocus:!0})),l.createElement("div",{className:"jkl-layout-spacing--medium-top","aria-live":"off"},l.createElement(w,{type:"submit"},g.isLast?"Send inn":"Neste"),l.createElement(i.C9,{onClick:p,className:"jkl-layout-spacing--medium-left"},"Avbryt"))),k&&!S&&l.createElement(W,r))},ae=n(3804);function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue={title:"Takk for tilbakemeldingen!",children:"Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem."},se=function(e){var t=e.label,n=e.options,r=e.type,a=e.addOnQuestion,o=e.successMessage,u=void 0===o?ue:o,s=function(e){var t=(0,l.useState)(),n=t[0],r=t[1],a=(0,l.useState)(),o=a[0],i=a[1],u=(0,l.useState)(!1),s=u[0],d=u[1],c=(0,l.useRef)({onSubmit:e,currentValue:n,message:o,submitted:s});(0,l.useEffect)((function(){c.current=ie(ie({},c.current),{},{onSubmit:e,currentValue:n,message:o,submitted:s})}),[e,n,o,s]);var m=(0,l.useCallback)((function(){var e=c.current;if(!e.submitted&&void 0!==e.currentValue){var t,n=Array.isArray(e.currentValue)?e.currentValue.map((function(e){return e.value})):null===(t=e.currentValue)||void 0===t?void 0:t.value;c.current.onSubmit({feedbackValue:n,message:c.current.message})}}),[]);return(0,l.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("beforeunload",m),function(){m(),window.removeEventListener("beforeunload",m)}}),[m]),{currentValue:n,setCurrentValue:r,message:o,setMessage:i,submitted:s,handleSubmit:function(){m(),d(!0)}}}(e.onSubmit),d=z(),c=d.setFeedbackSubmitted,m=d.contactSubmitted,v=s.handleSubmit,f=s.currentValue,p=s.setCurrentValue,b=s.submitted,g=(0,ae.vD)(void 0!==f)[0];(0,l.useEffect)((function(){c(b)}),[b,c]);var k=ne(r);return l.createElement(l.Fragment,null,!b&&l.createElement(h,{state:s},l.createElement(k,{label:t,options:n}),l.createElement("div",{ref:g,className:P()({"jkl-feedback__submit-wrapper":!0,"jkl-feedback__submit-wrapper--hidden":void 0===f})},a&&l.createElement(Z,a),l.createElement("div",{className:"jkl-layout-spacing--medium-top"},l.createElement(i.KM,{onClick:v,className:"jkl-layout-spacing--medium-right"},"Send"),l.createElement(i.C9,{onClick:function(){return p(void 0)}},"Avbryt")))),b&&!m&&l.createElement(W,u))},de=["className","followup","contactQuestion"],ce=function(e){var t=e.className,n=e.followup,a=e.contactQuestion,o=(0,r.Z)(e,de),i=(0,l.useState)(!1),u=i[0],s=i[1],d=(0,l.useState)(!1),c=d[0],m=d[1],v=(0,l.useState)(!1),f=v[0],p=v[1],b=(0,l.useState)(!1),g=b[0],k=b[1];return l.createElement("div",{className:"jkl-feedback "+(t||""),"aria-live":"polite"},l.createElement(G,{value:{feedbackSubmitted:u,followupStarted:c,followupSubmitted:f,contactSubmitted:g,setFeedbackSubmitted:s,setFollowupStarted:m,setFollowupSubmitted:p,setContactSubmitted:k}},!c&&l.createElement(se,o),u&&!g&&n&&l.createElement(le,n),(!n&&u||f)&&a&&l.createElement(te,a)))},me={"Fant du":{type:"radio",label:"Fant du det du lette etter?",options:[{label:"Ja",value:"ja",textAreaLabel:"Så bra! Har du noen tilbakemeldinger kan du skrive dem her."},{label:"Nei",value:"nei",textAreaLabel:"Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."}],addOnQuestion:{label:"Vil du legge til noe mer?"}},"Fikk du gjort":{type:"radio",label:"Fikk du gjort det du skulle?",options:[{label:"Ja",value:"ja",textAreaLabel:"Så bra! Har du noen tilbakemeldinger kan du skrive dem her."},{label:"Nei",value:"nei",textAreaLabel:"Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."}],addOnQuestion:{label:"Vil du legge til noe mer?"}},"Hvor fornøyd 5":{type:"slider",label:"På en skala fra 1 til 5, hvor fornøyd er du med løsningen?",options:[{label:"Kjempefornøyd!",value:5,textAreaLabel:"Så bra! Har du noen tilbakemeldinger kan du skrive dem her."},{label:"Ganske fornøyd",value:4,textAreaLabel:"Så bra! Har du noen tilbakemeldinger kan du skrive dem her."},{label:"Hverken eller",value:3,textAreaLabel:"Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Litt misfornøyd",value:2,textAreaLabel:"Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."},{label:"Veldig misfornøyd!",value:1,textAreaLabel:"Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre."}],addOnQuestion:{label:"Vil du legge til noe mer?"}}},ve=[{type:"radio",label:"Hvordan opplevde du å bestille forsikring på nett?",name:"opplevelse",options:[{label:"Enkelt og greit",value:"enkelt"},{label:"Midt på treet",value:"ok"},{label:"Tungvindt",value:"tungvindt"}]},{type:"checkbox",label:"Hva er viktig for deg?",name:"viktig",options:[{label:"At det går raskt å bestille",value:"hurtighet"},{label:"God informasjon",value:"info"},{label:"At det ser fint ut",value:"utseende"},{label:"At forsikringen er billig",value:"pris"}]},{type:"text",label:"Er det noe mer du vil legge til?",name:"annet"}],fe={withPhone:!0,label:"Vil du være med å teste sidene våre?",children:"Vi gjennomfører jevnlig tester og intervjuer for å forbedre løsningene våre (ca. 30 minutter). Som takk for hjelpen får du et gavekort. Legg igjen din e-postadresse hvis du er interessert.",sendButtonLabel:"Skriv meg opp!",onSubmit:console.info},pe=function(e){var t=e.boolValues,n=e.choiceValues,r=null!=t&&t["Med oppfølgings-spørsmål"]?{onSubmit:console.log,questions:ve}:void 0,a=null!=t&&t["Med kontakt-spørsmål"]?fe:void 0,o=null!=n&&n["Forhåndsvalg"]?me[n["Forhåndsvalg"]]:me["Hvor fornøyd 5"];return l.createElement(ce,{type:o.type,options:o.options,label:o.label,addOnQuestion:o.addOnQuestion,onSubmit:console.log,followup:r,contactQuestion:a})},be={boolProps:["Med oppfølgings-spørsmål","Med kontakt-spørsmål"],choiceProps:[{name:"Forhåndsvalg",values:Object.keys(me),defaultValue:0}]},ge=["components"],ke={},he=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",t)}},je=he("Ingress"),ye=he("ComponentExample"),Ee={_frontmatter:ke},Se=o.Z;function xe(e){var t=e.components,n=(0,r.Z)(e,ge);return(0,a.mdx)(Se,Object.assign({},Ee,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(je,{mdxType:"Ingress"},"Feedback-komponenten lar oss få tilbakemelding fra brukerene våre. Det kan gi oss viktig innsikt om brukeropplevelsen, og avdekke ønsker om funksjonalitet."),(0,a.mdx)(ye,{knobs:be,component:pe,mdxType:"ComponentExample"}),(0,a.mdx)("p",null,"Bruk spørsmål med to til fem alternativer når du ber om tilbake","­","melding. For hvert alternativ kan du spesifisere både teksten som vises og verdien som blir sendt inn, slik at det lett kan integreres med side","­","statistikk. Vi tilbyr noen standard","­","spørsmål med alternativer, som dekker de vanligste tilbake","­","meldings","­","behovene."),(0,a.mdx)("p",null,"I tillegg til hovedspørsmålet kan man la brukeren legge igjen en skriftlig tilbakemelding. Du kan endre etiketten på tilbake","­","meldings","­","feltet på bakgrunn av alternativet brukeren valgte i hovedspørmålet, eller vise en generell etikett."),(0,a.mdx)("h2",null,"Oppfølgingsspørsmål"),(0,a.mdx)("p",null,"Noen ganger kan det være nyttig med mer inngående tilbakemeldinger, for eksempel under utrulling av ny funksjonalitet. Det er derfor mulig å be brukeren svare på et eller flere oppfølgings","­","spørsmål etter at den vanlige tilbakemeldingen er sendt inn. Brukeren blir først spurt om å delta, og tas deretter videre til første spørmål."),(0,a.mdx)("p",null,"Spørmålene kan være en blanding av flervalgsspørsmål med ett eller flere mulige valg, og åpne tekstspørsmål. De presenteres ett og ett, med knapp for å gå videre etter hvert spørmål. Dersom brukeren navigerer vekk fra siden for alle spørsmålene er besvart blir kun de besvarte spørsmålene sendt inn."),(0,a.mdx)("h2",null,"Innsending av data"),(0,a.mdx)("p",null,"Du må selv sende inn funksjoner for å håndtere innsending av data, men komponenten sørger selv for at de blir kalt på riktig tidspunkt; når brukeren trykker send inn, eller når de forlater siden etter å ha tatt valg i skjemaet."),(0,a.mdx)("p",null,"Du må selv koble opp mot ditt ønskede feedback-endepunkt med eventuell vasking og/eller transformering av data."),(0,a.mdx)("h3",null,"Hovedspørsmål"),(0,a.mdx)("p",null,"Funksjonen for håndtering av hovedspørmålet får inn et objekt med verdien fra hovedspørsmålet, samt den eventuelle skriftlige tilbake","­","meldingen:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},"{ value: string | number; message?: string }\n")),(0,a.mdx)("h3",null,"Oppfølgingsspørsmål"),(0,a.mdx)("p",null,"Funksjonen for håndtering av oppfølgings","­","spørmål får inn en liste med objekter etter hvor mange spørsmål som er besvart. Objektene inneholder informasjon om feltet, og verdien eller verdiene som er valgt:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},'[{ label: string: name: string; type: "single" | "multi" | "text"; value: string | string[] }]\n')))}xe.isMDXComponent=!0},897:function(e,t,n){n.d(t,{KM:function(){return f},kq:function(){return p},C9:function(){return b}});var r=n(2398),l=n.n(r),a=n(2666),o=n.n(a),i=n(7378),u=n(382),s=n.n(u),d=n(3661),c=(0,i.forwardRef)((function(e,t){return i.createElement("button",l()({},e,{ref:t}))}));c.displayName="BaseButton";var m=["children","className","forceCompact","inverted","onClick","onTouchStart","loader"],v=function(e){return(0,i.forwardRef)((function(t,n){var r=t.children,a=t.className,u=void 0===a?"":a,v=t.forceCompact,f=t.inverted,p=t.onClick,b=t.onTouchStart,g=t.loader,k=o()(t,m),h=s()("jkl-button","jkl-button--"+e,{"jkl-button--compact":v,"jkl-button--inverted":f}),j=function(e){b&&b(e);var t=e.target;if(t&&e.targetTouches.length){var n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,r=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",r.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((function(){return t.classList.remove("jkl-button--pressed")}),400)}};return g?i.createElement("div",{className:s()("jkl-button-wrapper",u,{"jkl-button-wrapper--compact":v})},i.createElement("div",{className:s()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!g.showLoader})},i.createElement(c,l()({className:h,onClick:p,onTouchStart:j,disabled:null==g?void 0:g.showLoader},k,{ref:n}),r),(null==g?void 0:g.showLoader)&&i.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},i.createElement(d.a,{textDescription:g.textDescription,negative:f,"aria-hidden":!!g.showLoader,inline:!0})))):i.createElement(c,l()({className:s()(h,u),onClick:p,onTouchStart:j},k,{ref:n}),r)}))},f=v("primary"),p=v("secondary"),b=v("tertiary")},3661:function(e,t,n){n.d(t,{a:function(){return o}});var r=n(7378),l=n(382),a=n.n(l),o=function(e){var t=e.textDescription,n=e.negative,l=void 0!==n&&n,o=e.inline,i=void 0!==o&&o,u=e.className,s=e.dataTestAutoId,d=void 0===s?"jkl-loader":s,c=e.politeness,m=void 0===c?"polite":c,v=a()("jkl-loader",u,{"jkl-loader--negative":l,"jkl-loader--inline":i});return r.createElement("span",{className:v,"data-testid":"jkl-loader","data-testautoid":d,title:t,"aria-label":t,role:"alert","aria-busy":"true","aria-live":m},r.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),r.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),r.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-feedback-react-documentation-feedback-mdx-45a91ab736cefe4a6330.js.map