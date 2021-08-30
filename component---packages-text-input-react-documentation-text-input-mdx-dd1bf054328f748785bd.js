"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2844],{7408:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return v}});var l=n(808),r=n(7378),o=n(1368),a=n(2803),s=n(2828);function i(e){var t=e.choiceValues,n=e.boolValues,l=(0,r.useState)(""),o=l[0],a=l[1],i=t&&t.Variant,m=n&&n.Inline,d=n&&n["Med handling"]?{icon:"clear",label:"Nullstill feltet",onClick:function(){return a("")}}:void 0,p=n&&n.Invertert,u=n&&n.Kompakt,f=n&&n["Med hjelpetekst"]?"Help label":void 0,k=n&&n["Med feilmelding"]?"Error label":void 0;return r.createElement(s.oi,{variant:i,inline:m,inverted:p,forceCompact:u,action:d,label:"Skriv noe her",helpLabel:f,errorLabel:k,placeholder:"Placeholder",maxLength:35,value:o,onChange:function(e){return a(e.target.value)},onKeyDown:function(){return console.log("onKeyDown event")}})}function m(e){var t=e.choiceValues,n=e.boolValues,l=(0,r.useState)(""),o=l[0],a=l[1],i=t&&t.Variant,m=n&&n.Invertert,d=n&&n.Kompakt,p=n&&n.Ekspanderende,u=n&&n["Med hjelpetekst"]?"Help label":void 0,f=n&&n["Med feilmelding"]?"Error label":void 0;return r.createElement(s.Kx,{variant:i,inverted:m,forceCompact:d,placeholder:"Placeholder",helpLabel:u,errorLabel:f,className:"jkl-spacing--top-2",label:"Skriv noe her",autoExpand:p,value:o,onChange:function(e){return a(e.target.value)},onKeyDown:function(){return console.log("onKeyDown event")}})}var d=["components"],p={},u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},f=u("Ingress"),k=u("ComponentExample"),g={_frontmatter:p},c=a.Z;function v(e){var t=e.components,n=(0,l.Z)(e,d);return(0,o.mdx)(c,Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(f,{mdxType:"Ingress"},"Vi bruker tekstfelt når vi vil at brukerne skal legge inn informasjon. Ledeteksten skal fortelle hva brukeren skal oppgi i feltet."),(0,o.mdx)(k,{component:i,knobs:{boolProps:["Inline","Kompakt","Invertert","Med handling","Med hjelpetekst","Med feilmelding"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},mdxType:"ComponentExample"}),(0,o.mdx)("p",null,"Tekstfelt godtar data med fast format eller fritekst. Fast format bruker du for eksempel når du vil at brukeren skal angi fødselsnummer eller et postnummer, mens fritekst passer til felt der brukerne skal fortelle noe med egne ord."),(0,o.mdx)("p",null,"Velg størrelse på tekstefelt etter typen data brukerne skal legge inn."),(0,o.mdx)("h2",null,"Typer tekstfelt"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Vanlige tekstfelt:"),"\nFor innhold som ikke overskrider lengden på feltet."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Inline tekstfelt:"),"\nTil spesialtilfeller, hvis vi for eksempel trenger å plassere et tekstfelt i en setning."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Lange tekstfelt:"),"\nNår innholdet blir lengre enn en setning. Høyden på feltet kan justeres."),(0,o.mdx)(k,{component:m,knobs:{boolProps:["Kompakt","Invertert","Ekspanderende","Med hjelpetekst","Med feilmelding"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},mdxType:"ComponentExample"}),(0,o.mdx)("h2",null,"Tekst og validering"),(0,o.mdx)("p",null,"Velg størrelse på ledetekst etter prinsippene for skjemadesign. Skriv en kort og tydelig ledetekst, som forteller brukerne hva de skal oppgi i feltet. Hvis det trengs, kan vi sette inn en hjelpetekst under feltet, som forklarer mer."),(0,o.mdx)("p",null,"Hvis tekstfeltet ikke validerer, vises en feilmelding som forteller hva som er galt. Vær oppmerskom på at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),(0,o.mdx)("p",null,"Eksempel:\nHjelpetekst for et tekstfelt med fast format: ",(0,o.mdx)("em",{parentName:"p"},"Fyll ut fødselsnummer, 11 siffer.")," Feilemeldingstekst: ",(0,o.mdx)("em",{parentName:"p"},"Du må fylle ut fødselsnummer, 11 siffer"),"."))}v.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-text-input-react-documentation-text-input-mdx-dd1bf054328f748785bd.js.map