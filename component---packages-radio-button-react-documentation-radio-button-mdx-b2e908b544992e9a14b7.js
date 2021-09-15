"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4794],{7934:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return f},default:function(){return N}});var n=r(808),a=r(7378),l=r(1368),i=r(2803),o=r(382),d=r.n(o),s=r(1107),p=["value","label","onChange","name","inline","checked","invalid","forceCompact","inverted"],m=(0,a.forwardRef)((function(e,t){var r=e.value,l=e.label,i=e.onChange,o=e.name,m=void 0===o?"":o,v=e.inline,u=void 0!==v&&v,k=e.checked,g=e.invalid,c=void 0!==g&&g,f=e.forceCompact,b=e.inverted,h=(0,n.Z)(e,p),x=(0,a.useState)("jkl-radio-button-"+(0,s.x0)(8))[0],j=d()("jkl-radio-button",{"jkl-radio-button--compact":f,"jkl-radio-button--inline":u,"jkl-radio-button--error":c,"jkl-radio-button--inverted":b});return a.createElement("div",{className:j},a.createElement("input",Object.assign({id:x,className:"jkl-radio-button__input",type:"radio",name:m,value:r,onChange:i,checked:k,ref:t},h)),a.createElement("label",{"data-testid":"jkl-radio-button__label-tag",htmlFor:x,className:"jkl-radio-button__label"},a.createElement("span",{"aria-hidden":!0,className:"jkl-radio-button__dot"}),a.createElement("span",{className:"jkl-radio-button__text"},l)))}));m.displayName="RadioButtonOption";var v=r(2520),u=r(6328),k=(0,a.forwardRef)((function(e,t){var r=e.name,n=e.legend,l=e.choices,i=e.selectedValue,o=e.onChange,d=e.inline,s=void 0!==d&&d,p=e.helpLabel,k=e.errorLabel,g=e.variant,c=e.forceCompact,f=e.className,b=e["data-testautoid"],h=e.inverted;return a.createElement(v.N,{legend:n,helpLabel:p,errorLabel:k,variant:g,forceCompact:c,className:f,inverted:h,"data-testautoid":b},l.map(u.YL).map((function(e,n){var l=e.label,d=e.value;return a.createElement(m,{ref:0===n?t:void 0,key:d,name:r,value:d,label:l,inline:s,checked:d===i,onChange:o,invalid:!!k,forceCompact:c,inverted:h})})))}));k.displayName="RadioButtons";var g=function(e){var t=e.boolValues,r=e.choiceValues,n=a.useState("Yes"),l=n[0],i=n[1],o=t&&t["Med feil"]?"Her er det noe feil":void 0,d=r&&r.Variant?r.Variant:"medium";return a.createElement(k,{legend:"Hvordan vil du bli kontaktet?",name:"likesradiobuttons",choices:["Jeg vil at dere skal ringe meg","Nei","Jeg vil at dere sender et brev til meg til min registrerte adresse fra folkeregisteret","Jeg vil at dere skal sende en e-post"],inline:t&&t.Inline,forceCompact:t&&t.Kompakt,selectedValue:l,onChange:function(e){return i(e.target.value)},helpLabel:"Hvis du trenger hjelp, kan du kontakte supporten vår",errorLabel:o,variant:d,inverted:t&&t.Invertert})},c=["components"],f={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",t)}},h=b("Ingress"),x=b("ComponentExample"),j={_frontmatter:f},C=i.Z;function N(e){var t=e.components,r=(0,n.Z)(e,c);return(0,l.mdx)(C,Object.assign({},j,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(h,{mdxType:"Ingress"},"Vi bruker radioknapper når vi vil at brukeren skal velge ett av flere alternativ. Bruk helst radioknapper for inntil fire alternativ. Hvis du trenger å gi brukeren flere muligheter enn det, er det ofte bedre med en nedtrekksliste."),(0,l.mdx)(x,{component:g,knobs:{boolProps:["Kompakt","Inline","Med feil","Invertert"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},mdxType:"ComponentExample"}),(0,l.mdx)("p",null,"Over radioknappene setter vi inn en tydelig overskrift, som forteller hva det er brukeren skal velge mellom. I tillegg skal hver radioknapp ha en kort og tydelig ledetekst til høyre for knappen, som beskriver alternativet."),(0,l.mdx)("h2",null,"Bruk"),(0,l.mdx)("p",null,"En gruppe radioknapper kan enten settes opp under eller ved siden av hverandre. Det er mest brukervennlig å sette dem opp vertikalt."),(0,l.mdx)("p",null,"En av radioknappene bør alltid være valgt på forhånd. Det kan være det alternativet som de fleste vil velge, eller det som har minst følger for brukeren. I noen tilfeller kan det være viktig at brukeren selv velger, uten å bli påvirket av et forhåndsvalg. Da kan vi sette opp radioknapper uten forhåndsvalg. ",(0,l.mdx)("strong",{parentName:"p"},"Vis eksempler på det")),(0,l.mdx)("h2",null,"Tekst og validering"),(0,l.mdx)("p",null,"Bruk prinsippene for skjemadesign når du velger størrelse på overskriften til en gruppe radioknapper. Skriv en kort og tydelig overskrift, som forteller hva brukeren skal velge. Hvis det er behov for det, kan vi legge inn en hjelpetekst under gruppen, for å forklare mer."),(0,l.mdx)("p",null,"Hvis radioknappene ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta det viktigste fra hjelpeteksten."),(0,l.mdx)("p",null,"Eksempel fra helsevurdering:\n",(0,l.mdx)("strong",{parentName:"p"},"Hjelpetekst"),": ",(0,l.mdx)("em",{parentName:"p"},"Velg om du har hatt diagnosen de siste 5, 10 eller 15 årene"),". ",(0,l.mdx)("strong",{parentName:"p"},"Feilmelding"),": ",(0,l.mdx)("em",{parentName:"p"},"Du har ikke valgt hvor lenge du har hatt diagnosen"),"."))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-radio-button-react-documentation-radio-button-mdx-b2e908b544992e9a14b7.js.map