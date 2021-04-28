(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2258],{4394:function(e,n,r){"use strict";r.r(n),r.d(n,{_frontmatter:function(){return f},default:function(){return j}});var t=r(120),l=r(7378),s=r(1368),i=r(2803),a=r(382),o=r.n(a),m=r(5197);function d(e){return function(n){var r=n.title,t=n.fullWidth,s=n.className,i=void 0===s?"":s,a=n.inverted,d=n.dismissed,c=n.dismissAction,u=n.children,g=o()("jkl-message-box","jkl-message-box--"+e,i,{"jkl-message-box--full":t,"jkl-message-box--dark":a,"jkl-message-box--dismissed":d});return l.createElement("div",{className:g,role:"alert"},function(e){switch(e){case"error":return l.createElement("svg",{"aria-hidden":!0,className:"jkl-message-box__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("circle",{cx:"12",cy:"12",r:"11.5",stroke:"currentColor"}),l.createElement("rect",{x:"4",y:"4.22168",width:"1",height:"22",transform:"rotate(-45 4 4.22168)",fill:"currentColor"}));case"info":return l.createElement("svg",{"aria-hidden":!0,className:"jkl-message-box__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("circle",{cx:"12",cy:"12",r:"11.5",stroke:"currentColor"}),l.createElement("path",{d:"M11.952 7.328C12.384 7.328 12.688 7.072 12.688 6.624C12.688 6.192 12.384 5.92 11.952 5.92C11.536 5.92 11.248 6.192 11.248 6.624C11.248 7.072 11.536 7.328 11.952 7.328ZM11.504 18H12.512V9.408H11.504V18Z",fill:"currentColor"}));case"success":return l.createElement("svg",{"aria-hidden":!0,className:"jkl-message-box__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("circle",{cx:"12",cy:"12",r:"11.5",stroke:"currentColor"}),l.createElement("path",{d:"M7 13.5L10 16.5L19.5 7",stroke:"currentColor"}));case"warning":return l.createElement("svg",{"aria-hidden":!0,className:"jkl-message-box__icon",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("circle",{cx:"12",cy:"12",r:"11.5",stroke:"currentColor"}),l.createElement("path",{className:"jkl-icon-exclamation",d:"M11.112 14.624H11.688L11.896 11.36V6H10.904V11.36L11.112 14.624ZM11.4 18.24C11.784 18.24 12.136 17.952 12.136 17.504C12.136 17.072 11.784 16.784 11.4 16.784C11.016 16.784 10.664 17.072 10.664 17.504C10.664 17.952 11.016 18.24 11.4 18.24Z",fill:"currentColor"}));default:return null}}(e),l.createElement("div",{className:"jkl-message-box__content"},void 0!==r&&l.createElement("p",{className:"jkl-heading-small"},r),l.createElement("p",{className:"jkl-body"},u)),(null==c?void 0:c.handleDismiss)&&l.createElement(m.h,{className:"jkl-message-box__dismiss-button",iconType:"clear",buttonTitle:c.buttonTitle||"Lukk",onClick:c.handleDismiss}))}}var c=d("info"),u=d("error"),g=d("warning"),k=d("success"),p=function(e){var n=e.boolValues,r=e.choiceValues,t=(0,l.useState)(!1),s=t[0],i=t[1],a=function(e){switch(e){case"Infomelding":return c;case"Suksessmelding":return k;case"Advarselsmelding":return g;case"Feilmelding":return u;default:return c}}(r?r.Type:""),o=n&&n.Avvisbar?{handleDismiss:function(){return i(!0)},buttonTitle:"Merk som lest"}:void 0;return l.createElement(a,{fullWidth:n&&n["Full bredde"],title:r&&r.Type,inverted:n&&n.Invertert,dismissed:s,dismissAction:o},"Hei, jeg er en melding av typen ",r?r.Type:"ʕ•ᴥ•ʔ")},f={},v=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",n)}},h=v("Ingress"),b=v("ComponentExample"),x={_frontmatter:f},w=i.Z;function j(e){var n=e.components,r=(0,t.Z)(e,["components"]);return(0,s.mdx)(w,Object.assign({},x,r,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)(h,{mdxType:"Ingress"},"En melding er en beskjed til brukeren. Det kan være et varsel om at noe er feil, informasjon om at noe mangler i et skjema, eller en bekreftelse på at noe har blitt oppdatert. Meldingene består av en overskrift og en meldingstekst."),(0,s.mdx)(b,{component:p,knobs:{boolProps:["Full bredde","Invertert","Avvisbar"],choiceProps:[{name:"Type",values:["Infomelding","Suksessmelding","Advarselsmelding","Feilmelding"],defaultValue:0}]},mdxType:"ComponentExample"}),(0,s.mdx)("h2",null,"Meldingstyper"),(0,s.mdx)("p",null,"Vi har fire ulike meldinger, med fargene blå, rød, gul og grønn."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Blå:")," gir informasjon til brukeren."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Gul:")," gir brukeren en advarsel, for eksempel at en funksjonalitet er i beta og derfor er ustabil."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Rød:")," gir brukeren en feilmelding, for eksempel hvis det oppstår en systemfeil eller brukeren avbryter en handling."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Grønn:")," forteller at en handling var vellykket."),(0,s.mdx)("h3",null,"Tilgjengelighet"),(0,s.mdx)("p",null,"Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende overskrift, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først."),(0,s.mdx)("h2",null,"Avvisbare meldinger"),(0,s.mdx)("p",null,"Dersom meldingen ikke er koblet til en tilstand på siden (som f.eks. en feil i et skjema) kan man la brukeren lukke den. For global informasjon som driftsmeldinger bør man huske valget om å lukke meldingen, så brukeren slipper å se den på nytt."))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-message-box-react-documentation-message-box-mdx-9a14ad29c7c2093d515b.js.map