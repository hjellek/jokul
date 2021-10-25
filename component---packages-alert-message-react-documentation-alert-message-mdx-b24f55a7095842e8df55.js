"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2484],{83038:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return j},default:function(){return D}});var r=t(30808),l=t(27378),s=t(81368),a=t(62803),i=t(76328),o=t(64649),d=t(90382),m=t.n(d),u=function(e){switch(e.messageType){case"error":return l.createElement("svg",{className:"jkl-alert-message__icon","aria-hidden":!0,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24C18.8503 24 24 18.6274 24 12C24 5.37258 18.8503 0 12 0C5.59548 0 0 5.37258 0 12C0 18.6274 5.59548 24 12 24ZM17.43 8.41421L13.6371 12.2071L17.43 16L16.0158 17.4142L12 13.6213L8.43001 17.4142L7.01579 16L10.8087 12.2071L7.01579 8.41421L8.43001 7L12 10.7929L16.0158 7L17.43 8.41421Z",fill:"currentColor"}));case"info":return l.createElement("svg",{className:"jkl-alert-message__icon","aria-hidden":!0,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 12C24 18.6274 18.8503 24 12 24C5.59548 24 0 18.6274 0 12C0 5.37258 5.59548 0 12 0C18.8503 0 24 5.37258 24 12ZM11 17.4142V10H13.2229V17.4142H11.2229ZM12 8.5C12.9133 8.5 13.4729 7.94036 13.4729 7.25C13.4729 6.55964 12.9133 6 12 6C11.5325 6 10.9729 6.55964 10.9729 7.25C10.9729 7.94036 11.5325 8.5 12 8.5Z",fill:"currentColor"}));case"success":return l.createElement("svg",{className:"jkl-alert-message__icon","aria-hidden":!0,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24C18.8503 24 24 18.6274 24 12C24 5.37258 18.8503 0 12 0C5.59548 0 0 5.37258 0 12C0 18.6274 5.59548 24 12 24ZM11.5503 16.7071L19.0503 9.20711L17.6361 7.79289L10.8432 14.5858L7.26909 11.0116L5.85486 12.4258L10.1361 16.7071L10.8432 17.4142L11.5503 16.7071Z",fill:"currentColor"}));case"warning":return l.createElement("svg",{className:"jkl-alert-message__icon","aria-hidden":!0,viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.8058 23L3.19424 23C0.885265 23 -0.558162 20.5008 0.595683 18.5008L10.4015 1.50415C11.5559 -0.496963 14.4441 -0.496963 15.5986 1.50415L25.4043 18.5008C26.5582 20.5008 25.1148 23 22.8058 23ZM14 8.00001L14 15.4142L12 15.4142L12 8.00001L14 8.00001ZM13 17C12.3096 17 11.75 17.5597 11.75 18.25C11.75 18.9404 12.3096 19.5 13 19.5C13.6904 19.5 14.25 18.9404 14.25 18.25C14.25 17.5597 13.6904 17 13 17Z",fill:"currentColor"}));default:return null}},c=t(5197);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e){return function(n){var t=n.className,r=void 0===t?"":t,s=n.inverted,a=n.maxContentWidth,i=n.paddingLeft,o=n.role,d=void 0===o?"status":o,g=n.dismissed,f=n.dismissAction,k=n.children,v=m()("jkl-alert-message","jkl-alert-message--"+e,r,{"jkl-alert-message--dark":s,"jkl-alert-message--dismissed":g}),b={maxWidth:a,paddingLeft:i};return l.createElement("div",{className:v,role:d,"data-theme":"light"},l.createElement("div",{className:"jkl-alert-message__content","data-testid":"alert-message-content",style:p({},b)},l.createElement("div",{"aria-hidden":!0,className:"jkl-alert-message__icon"},l.createElement(u,{messageType:e})),l.createElement("span",{className:"jkl-alert-message__message jkl-body"},k),(null==f?void 0:f.handleDismiss)&&l.createElement(c.h,{className:"jkl-alert-message__dismiss-button",iconType:"clear",buttonTitle:f.buttonTitle||"Lukk",onClick:f.handleDismiss})))}}var k=f("info"),v=f("error"),b=f("warning"),h=f("success"),x=function(e){var n=e.boolValues,t=e.choiceValues,r=function(e){switch(e){default:return k;case"Suksessmelding":return h;case"Advarselmelding":return b;case"Feilmelding":return v}}(t?t.Type:""),s=(0,l.useState)(!1),a=s[0],o=s[1],d=n&&n.Avvisbar?{handleDismiss:function(){return o(!0)},buttonTitle:"Merk som lest"}:void 0;return l.createElement(r,{dismissed:a,dismissAction:d},"Hei, jeg er en varslingsmelding av typen ",t?t.Type:"ᕙ(⇀‸↼‶)ᕗ"," med"," ",l.createElement(i.OL,{href:"/"},"en navlink"))},C=["components"],j={},w=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",n)}},y=w("Ingress"),L=w("ComponentExample"),E=w("DoDontExample"),_={_frontmatter:j},O=a.Z;function D(e){var n=e.components,t=(0,r.Z)(e,C);return(0,s.mdx)(O,Object.assign({},_,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)(y,{mdxType:"Ingress"},"En varsel melding er en beskjed til brukeren. Det kan være et varsel om at noe er feil, global informasjon eller lignende. En melding består av en beskrivende tekst."),(0,s.mdx)(L,{component:x,knobs:{boolProps:["Avvisbar"],choiceProps:[{name:"Type",values:["Infomelding","Suksessmelding","Advarselmelding","Feilmelding"],defaultValue:0}]},mdxType:"ComponentExample"}),(0,s.mdx)("h2",null,"Bruk"),(0,s.mdx)(E,{fullWidth:!0,type:"do",description:"En global melding plassert øverst på siden",image:"/assets/do-donts/alert-message-do-1.png",mdxType:"DoDontExample"}),(0,s.mdx)(E,{fullWidth:!0,type:"dont",description:"En lokal melding relatert til en komponent. I slike tilfeller skal man bruke Message Box",image:"/assets/do-donts/alert-message-dont-1.png",mdxType:"DoDontExample"}),(0,s.mdx)("h2",null,"Alvorlighetsgrad"),(0,s.mdx)("p",null,"Vi har fire ulike meldinger, med fargene blå, rød, gul og grønn."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Blå:")," gir informasjon til brukeren."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Gul:")," gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Rød:")," gir brukeren en feilmelding, for eksempel hvis det oppstår en systemfeil eller brukeren avbryter en handling."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Grønn:")," forteller at en handling var vellykket."),(0,s.mdx)("h3",null,"Tilgjengelighet"),(0,s.mdx)("p",null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende tekst, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."),(0,s.mdx)("h2",null,"Avvisbare meldinger"),(0,s.mdx)("p",null,"Dersom meldingen ikke er koblet til en tilstand på siden (som f.eks. en feil i et skjema) kan man la brukeren lukke den. For global informasjon som driftsmeldinger bør man huske valget om å lukke meldingen, så brukeren slipper å se den på nytt."))}D.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-alert-message-react-documentation-alert-message-mdx-b24f55a7095842e8df55.js.map