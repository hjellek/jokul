(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9403],{762:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return C},default:function(){return F}});var a=n(120),r=n(7378),l=n(1368),o=n(2803),s=n(9158),i=n(6328),c=function(e){var t=e.element;return r.createElement("svg",{"aria-hidden":!0,className:"jkl-feedback-icon jkl-feedback-icon--"+t,fill:"currentColor",viewBox:"0 0 57 57"},r.createElement("circle",{cx:"28.5",cy:"28.5",r:"27.5"}),r.createElement("circle",{cx:"19",cy:"24",r:"2",className:"jkl-feedback-icon__eyes"}),r.createElement("circle",{cx:"38",cy:"24",r:"2",className:"jkl-feedback-icon__eyes"}),function(e){switch(e){case 1:return r.createElement("path",{d:"M40 42C40 36.4772 35.0751 32 29 32C22.9249 32 18 36.4772 18 42"});case 2:return r.createElement("path",{d:"M40 39C37.5556 35.4353 33.8529 33 29 33C24.1471 33 20.4444 35.4353 18 39"});case 3:return r.createElement("line",{x1:"20",y1:"37",x2:"36",y2:"37"});case 4:return r.createElement("path",{d:"M18 35C20.4444 38.5647 24.1471 41 29 41C33.8529 41 37.5556 38.5647 40 35"});case 5:return r.createElement("path",{d:"M29 45C36.5429 45 40.1429 38.3333 41 35L17 35C17.5714 38.3333 21.4571 45 29 45Z"})}}(t))},d=n(382),u=n.n(d),m=n(2384),k=n(897),f=n(3804);function p(e){return void 0!==e.prompt}function v(e){return e.map((function(e){return"number"==typeof e?e:e.value}))}var b=(0,r.createContext)({options:[],setValue:function(){}}),g=function(e){var t=e.label,n=e.onSubmit,a=e.description,l=e.renderCustomSuccess,o=e.successMessage,i=void 0===o?"Det hjelper oss i arbeidet med å forbedre våre løsninger":o,c=e.successTitle,d=void 0===c?"Takk for tilbakemeldingen!":c,v=e.callToActionText,g=void 0===v?"Send inn tilbakemelding":v,j=e.showTextArea,E=void 0===j||j,h=e.textAreaLabel,x=void 0===h?"Tips oss gjerne om hva vi kan forbedre":h,_=e.textAreaHelpLabel,y=void 0===_?"":_,N=e.className,C=void 0===N?"":N,w=e.feedbackOptions,T=void 0===w?[1,2,3,4,5]:w,S=e.headingLevel,D=void 0===S?"h3":S,L=e.content,F=(0,r.useState)(),V=F[0],M=F[1],A=(0,r.useState)(x),P=A[0],B=A[1],I=(0,r.useState)(""),O=I[0],U=I[1],H=(0,r.useState)(!1),K=H[0],R=H[1],X=(0,r.useState)(!1),Z=X[0],q=X[1],G=(0,f.vD)(void 0!==V)[0],Y=(0,r.useCallback)((function(){!K&&V&&n({feedbackValue:V,message:O})}),[V,K,O,n]);(0,r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("beforeunload",Y),function(){window.removeEventListener("beforeunload",Y)}}),[Y]),(0,r.useEffect)((function(){var e=T.filter((function(e){return p(e)&&e.value===V}))[0];B(e&&p(e)?e.prompt:x)}),[T,V,x]);var z=D;return r.createElement("div",{className:u()("jkl-feedback",C)},r.createElement(b.Provider,{value:{options:T,setValue:M,value:V}},K&&r.createElement("section",{className:"jkl-feedback__success","data-testid":"feedback-success"},l&&l({value:V,message:O}),!l&&r.createElement(s.kk,{title:d},i)),!K&&r.createElement("form",{className:u()("jkl-feedback__form",{"jkl-feedback__form--hidden":Z}),onSubmit:function(e){e.preventDefault(),Y(),q(!0),setTimeout((function(){return R(!0)}),250)}},r.createElement("div",{className:"jkl-feedback__heading"},r.createElement(z,{className:"jkl-heading-large"},t),a&&r.createElement("p",{className:"jkl-lead"},a)),r.createElement("fieldset",{className:"jkl-feedback__fieldset"},L),r.createElement("section",{ref:G,className:u()("jkl-feedback__submit-wrapper",{"jkl-feedback__submit-wrapper--hidden jkl-layout-spacing--medium-top":void 0===V})},r.createElement("div",{className:"jkl-feedback__submit-content"},E&&r.createElement(m.Kx,{className:"jkl-feedback__message-input","data-testid":"feedback-text",name:"feedback-text",label:P,variant:"small",rows:3,helpLabel:y,value:O,onChange:function(e){return U(e.currentTarget.value)}}),r.createElement(k.kq,{"data-testid":"submit-button",className:"jkl-layout-spacing--medium-top",type:"submit"},g))))))},j=n(1107),E=function(){var e,t=(0,r.useContext)(b),n=t.options,a=t.value,l=t.setValue,o=(0,r.useState)((0,j.x0)(8))[0];return r.createElement(r.Fragment,null,null===(e=v(n))||void 0===e?void 0:e.map((function(e){return r.createElement(r.Fragment,{key:e},r.createElement("input",{className:"jkl-feedback__answer-input",type:"radio",name:"feedback",id:o+"-feedback--"+e,value:e,onChange:function(){return l(e)},checked:a===e}),r.createElement("label",{"data-testid":"feedback-"+e,className:"jkl-feedback__answer-label",htmlFor:o+"-feedback--"+e},r.createElement(c,{element:e}),r.createElement(i.uy,null,e)))})))},h=function(e){return r.createElement(g,Object.assign({},e,{content:r.createElement(E,null)}))},x=n(6058),_=function(e){var t=e.legend,n=(0,r.useContext)(b),a=n.options,l=n.value,o=n.setValue;return r.createElement(x.G,{legend:t,name:"feedback",choices:v(a).map((function(e,t){return(t+1).toString()})),inline:!0,onChange:function(e){return o(parseInt(e.target.value,10))},selectedValue:null==l?void 0:l.toString()})},y=function(e){var t=e.description,n=(0,a.Z)(e,["description"]);return r.createElement(g,Object.assign({},n,{content:r.createElement(_,{legend:t})}))},N=function(e){var t=e.boolValues,n=null!=t&&t["Uten smilefjes"]?y:h;return r.createElement(r.Fragment,null,r.createElement(n,{label:"Gi oss tilbakemelding!",description:"Hvor fornøyd er du med denne siden for å følge saken?",onSubmit:console.info,showTextArea:!(null!=t&&t["Uten tekst"]),renderCustomSuccess:function(e){return r.createElement("div",null,r.createElement(s.kk,{title:"Tilbakemelding sendt!"},1===e.value&&r.createElement(r.Fragment,null,"Det var trist!"),2===e.value&&r.createElement(r.Fragment,null,"Vi ser på alle tilbakemeldinger, håper vi kan gjøre deg mer fornøyd en annen gang!"),3===e.value&&r.createElement(r.Fragment,null,"Vi vil gjerne ha fornøyde kunder, så vi skal se på tilbakemeldingen din!"),4===e.value&&r.createElement(r.Fragment,null,"Takk skal du ha!"),5===e.value&&r.createElement(r.Fragment,null,"Det var stas du var fornøyd, vi prøver hele tiden å bli bedre! Takk for tilbakemeldingen!")),e.message&&r.createElement("div",{className:"jkl-layout-spacing--small-top"},r.createElement("span",null,"Kopi av din melding"),r.createElement("pre",null,e.message)))}}),r.createElement(n,{label:"Bare to valg",description:"Hvor fornøyd er du med denne siden for å følge saken?",onSubmit:console.info,showTextArea:!(null!=t&&t["Uten tekst"]),feedbackOptions:[1,5],className:"jkl-layout-spacing--large-top"}))},C={},w=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",t)}},T=w("Ingress"),S=w("ComponentExample"),D={_frontmatter:C},L=o.Z;function F(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.mdx)(L,Object.assign({},D,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(T,{mdxType:"Ingress"},"Feedback-komponenten lar oss få tilbakemelding fra brukerene våre. Det kan gi oss viktig innsikt om brukeropplevelsen, og avdekke ønsker om funksjonalitet."),(0,l.mdx)(S,{knobs:{boolProps:["Uten smilefjes","Uten tekst"]},component:N,mdxType:"ComponentExample"}),(0,l.mdx)("p",null,"Komponenten kommer i to grunnvarianter: Feedback har smilefjes basert på valgene brukeren kan ta, mens SimplifiedFeedback viser vanlige radioknapper. Du kan bestemme hvilke valg brukeren skal få ved å sende inn noen eller alle tall fra 1 til 5:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"1 - Surt fjes"),(0,l.mdx)("li",{parentName:"ul"},"2 - Litt surt fjes"),(0,l.mdx)("li",{parentName:"ul"},"3 - Nøytralt fjes"),(0,l.mdx)("li",{parentName:"ul"},"4 - Smilefjes"),(0,l.mdx)("li",{parentName:"ul"},"5 - Happy smilefjes")),(0,l.mdx)("p",null,"I tillegg til en score kan man la brukeren legge igjen en skriftlig tilbakemelding. Etiketten på tekstfeltet kan spesifiseres generelt og/eller defineres spesifikt basert på hvilken score brukeren har gitt."),(0,l.mdx)("h2",null,"Innsending av data"),(0,l.mdx)("p",null,"Du må selv sende inn en funksjon for å håndtere innsending av data, men komponenten sørger selv for at den blir kalt på riktig tidspunkt; når brukeren trykker send inn, eller når de forlater siden etter å ha tatt et valg i skjemaet."),(0,l.mdx)("p",null,"Funksjonen du sender inn må ta imot et objekt på formen"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"{ feedbackValue: 1 | 2 | 3 | 4 | 5, message?: string }\n")),(0,l.mdx)("p",null,"og du må selv koble opp mot ditt ønskede feedback-endepunkt med eventuell vasking og/eller transformering av data."))}F.isMDXComponent=!0},897:function(e,t,n){"use strict";n.d(t,{KM:function(){return k},kq:function(){return f},C9:function(){return p}});var a=n(2398),r=n.n(a),l=n(2666),o=n.n(l),s=n(7378),i=n(382),c=n.n(i),d=n(3661),u=(0,s.forwardRef)((function(e,t){return s.createElement("button",r()({},e,{ref:t}))}));u.displayName="BaseButton";var m=function(e){return(0,s.forwardRef)((function(t,n){var a=t.children,l=t.className,i=void 0===l?"":l,m=t.forceCompact,k=t.inverted,f=t.onClick,p=t.onTouchStart,v=t.loader,b=o()(t,["children","className","forceCompact","inverted","onClick","onTouchStart","loader"]),g=c()("jkl-button","jkl-button--"+e,{"jkl-button--compact":m,"jkl-button--inverted":k}),j=function(e){p&&p(e);var t=e.target;if(t&&e.targetTouches.length){var n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,a=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",a.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((function(){return t.classList.remove("jkl-button--pressed")}),400)}};return v?s.createElement("div",{className:c()("jkl-button-wrapper",i,{"jkl-button-wrapper--compact":m})},s.createElement("div",{className:c()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!v.showLoader})},s.createElement(u,r()({className:g,onClick:f,onTouchStart:j,disabled:null==v?void 0:v.showLoader},b,{ref:n}),a),s.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},s.createElement(d.a,{textDescription:v.textDescription,negative:k,"aria-hidden":!!v.showLoader,inline:!0})))):s.createElement(u,r()({className:c()(g,i),onClick:f,onTouchStart:j},b,{ref:n}),a)}))},k=m("primary"),f=m("secondary"),p=m("tertiary")},3661:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var a=n(7378),r=n(382),l=n.n(r),o=function(e){var t=e.textDescription,n=e.negative,r=void 0!==n&&n,o=e.inline,s=void 0!==o&&o,i=e.className,c=e.dataTestAutoId,d=void 0===c?"jkl-loader":c,u=l()("jkl-loader",i,{"jkl-loader--negative":r,"jkl-loader--inline":s});return a.createElement("span",{className:u,"data-testid":"jkl-loader","data-testautoid":d,title:t,"aria-label":t,role:"alert","aria-busy":"true"},a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-feedback-react-documentation-feedback-mdx-1a16f9a4650997b34d57.js.map