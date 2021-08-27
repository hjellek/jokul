"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1567],{9312:function(e,t,l){l.r(t),l.d(t,{_frontmatter:function(){return y},default:function(){return u}});var a,n=l(7077),r=l(7378),s=l(1368),m=l(2803),i=function(e){var t=e.text,l=e.style,a=e.type;return r.createElement("tr",{className:"jkl-typography-example-table__row "+(a?"force-"+a:"")},r.createElement("td",{className:"jkl-typography-example-table__data"},r.createElement("p",{className:"jkl-"+l},t)),r.createElement("td",{"data-header":"Mixin:",className:"jkl-typography-example-table__data"},r.createElement("p",{className:"jkl-small"},r.createElement("code",{className:"jkl-portal-inline-code"},'@include jkl.text-style("'+l+(a?"/"+a:"")+'")'))),!a&&r.createElement("td",{"data-header":"Klasse:",className:"jkl-typography-example-table__data"},r.createElement("p",{className:"jkl-small"},r.createElement("code",{className:"jkl-portal-inline-code"},".jkl-",l))))},d=function(){return r.createElement("table",{className:"jkl-typography-example-table"},r.createElement("tr",null,r.createElement("th",{className:"jkl-typography-example-table__header"},"Stilnavn"),r.createElement("th",{className:"jkl-typography-example-table__header"},"Mixin"),r.createElement("th",{className:"jkl-typography-example-table__header"},"Utility-klasse")),r.createElement(i,{text:"Title",style:"title"}),r.createElement(i,{text:"Heading 1",style:"heading-1"}),r.createElement(i,{text:"Heading 2",style:"heading-2"}),r.createElement(i,{text:"Heading 3",style:"heading-3"}),r.createElement(i,{text:"Heading 4",style:"heading-4"}),r.createElement(i,{text:"Heading 5",style:"heading-5"}),r.createElement(i,{text:"Body",style:"body"}),r.createElement(i,{text:"Small",style:"small"}))},p=function(){return r.createElement("table",{className:"jkl-typography-example-table","data-compactlayout":!0},r.createElement("tr",null,r.createElement("th",{className:"jkl-typography-example-table__header"},"Stilnavn"),r.createElement("th",{className:"jkl-typography-example-table__header"},"Mixin")),r.createElement(i,{text:"Title",style:"title",type:"small-screen"}),r.createElement(i,{text:"Heading 1",style:"heading-1",type:"small-screen"}),r.createElement(i,{text:"Heading 2",style:"heading-2",type:"small-screen"}),r.createElement(i,{text:"Heading 3",style:"heading-3",type:"small-screen"}),r.createElement(i,{text:"Heading 4",style:"heading-4",type:"small-screen"}),r.createElement(i,{text:"Heading 5",style:"heading-5",type:"small-screen"}),r.createElement(i,{text:"Body",style:"body",type:"small-screen"}),r.createElement(i,{text:"Small",style:"small",type:"small-screen"}))},o=function(){return r.createElement("table",{className:"jkl-typography-example-table","data-compactlayout":!0},r.createElement("tr",null,r.createElement("th",{className:"jkl-typography-example-table__header"},"Stilnavn"),r.createElement("th",{className:"jkl-typography-example-table__header"},"Mixin")),r.createElement(i,{text:"Title",style:"title",type:"large-screen"}),r.createElement(i,{text:"Heading 1",style:"heading-1",type:"large-screen"}),r.createElement(i,{text:"Heading 2",style:"heading-2",type:"large-screen"}),r.createElement(i,{text:"Heading 3",style:"heading-3",type:"large-screen"}),r.createElement(i,{text:"Heading 4",style:"heading-4",type:"large-screen"}),r.createElement(i,{text:"Heading 5",style:"heading-5",type:"large-screen"}),r.createElement(i,{text:"Body",style:"body",type:"large-screen"}),r.createElement(i,{text:"Small",style:"small",type:"large-screen"}))},c=["components"],y={},g=(a="Ingress",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),k={_frontmatter:y},x=m.Z;function u(e){var t=e.components,l=(0,n.Z)(e,c);return(0,s.mdx)(x,Object.assign({},k,l,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)(g,{mdxType:"Ingress"},"Vi tilbyr Sass-mixins og utility-klasser for alle de typografiske stilene i Jøkul."),(0,s.mdx)("h2",null,"Bruk"),(0,s.mdx)("p",null,"For å bruke typografistilene kan du velge mellom å bruke utility-klassene direkte, eller å lage din egen klasse hvor du bruker Sass-mixins for å hente inn riktig stil. Vi anbefaler at du bruker mixins til å lage egne klasser når du lager komponenter til løsningen din, og at du bare bruker utility-klassene til løpende tekst og overskrifter."),(0,s.mdx)("p",null,"For å bruke mixin-ene må du ha satt opp støtte for Sass i prosjektet ditt, og importere Jøkul der du skal bruke dem, f.eks. slik: ",(0,s.mdx)("inlineCode",{parentName:"p"},'@use "~@fremtind/jkl-core/jkl";'),". Nøyaktig syntaks kan variere ut fra byggoppsettet ditt."),(0,s.mdx)("p",null,"Les mer om regler for typografi ",(0,s.mdx)("a",{parentName:"p",href:"/profil/typografi"},"under Profilen vår"),"."),(0,s.mdx)("h3",null,"Fontskala"),(0,s.mdx)("p",null,"Dette er tekststilene som tilbys i Jøkul, og hvordan du bruker dem ved hjelp av mixins eller nytteklasser. Stilene tilpasses automatisk på små skjermer."),(0,s.mdx)(d,{mdxType:"NormalExample"}),(0,s.mdx)("h3",null,"Manuell styring av variant"),(0,s.mdx)("p",null,"I de aller fleste tilfeller skal tekststilene brukes som de er, slik at tekststørrelsen tilpasses brukerens skjerm. I noen tilfeller kan det likevel være riktig å spesifisere varianten av en stil, som for eksempel når man lager en versjon av en komponent for informasjonstette løsninger."),(0,s.mdx)("p",null,"For å velge variant må du bruke Sass-mixins, og spesifisere om du vil ha varianten for ",(0,s.mdx)("inlineCode",{parentName:"p"},"small-screen")," eller ",(0,s.mdx)("inlineCode",{parentName:"p"},"large-screen"),": ",(0,s.mdx)("inlineCode",{parentName:"p"},'@include jkl.text-style("body/small-screen");')),(0,s.mdx)("h4",null,"Fontskala for små skjermer"),(0,s.mdx)(p,{mdxType:"SmallExample"}),(0,s.mdx)("h4",null,"Fontskala for store skjermer"),(0,s.mdx)(o,{mdxType:"LargeExample"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-core-documentation-typography-mdx-121dae220b32ceb76fe8.js.map