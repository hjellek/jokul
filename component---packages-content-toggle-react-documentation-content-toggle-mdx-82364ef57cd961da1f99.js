"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2762],{3319:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return b}});var r=t(7077),o=t(7378),a=t(1368),l=t(2803),s=t(382),m=t.n(s),i=function(e){var n=e.showSecondary,t=e.secondary,r=e.children,a=e.className,l=void 0===a?"":a,s=e.variant,i=void 0===s?"flip":s,d=(0,o.useState)(n)[0],p=(0,o.useState)(!0),c=p[0],u=p[1];return(0,o.useEffect)((function(){n!==d&&u(!1)}),[n,d]),o.createElement("span",{className:m()("jkl-content-toggle","jkl-content-toggle--"+i,l)},o.createElement("span",{className:"jkl-content-toggle__slider","data-show":n?"second":"first","data-initial":c},o.createElement("span",{className:"jkl-content-toggle__first","aria-hidden":n},r),o.createElement("span",{className:"jkl-content-toggle__second","aria-hidden":!n},t)))},d=function(e){var n=e.boolValues,t=e.choiceValues;return o.createElement("div",{className:"jkl-body"},o.createElement(i,{variant:null==t?void 0:t.Variant,showSecondary:!(null==n||!n["Bytt verdi"]),secondary:"World!"},"Hello"))},p=["components"],c={},u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)}},g=u("Ingress"),k=u("ComponentExample"),f={_frontmatter:c},v=l.Z;function b(e){var n=e.components,t=(0,r.Z)(e,p);return(0,a.mdx)(v,Object.assign({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(g,{mdxType:"Ingress"},"Content-toggle er en komponent for som representerer en av Jøkuls kjerneanimasjoner. Du ser denne bevelgesen på pilene i select eller accordion, men det kan brukes til mye mer. Hver gang du har behov for to states som man toggler mellom, så er content-toggle en måte å løse det på en elegant måte."),(0,a.mdx)(k,{knobs:{boolProps:["Bytt verdi"],choiceProps:[{name:"Variant",values:["flip","fade"],defaultValue:0}]},component:d,mdxType:"ComponentExample"}),(0,a.mdx)("p",null,"Content-toggle komponenten tar inn to ReactNoder, det kan være strenger eller sammensatte komponenter, men bør ikke være store element."),(0,a.mdx)("h2",null,"I bruk"),(0,a.mdx)("p",null,"Content-toggle komponenten gjør sitt beste gjett på hvor store elementene inni er, så den animerer riktig avstand. Det er basert på font-størrelsen fra foreldrekomponenten. Så om du animerer ",(0,a.mdx)("inlineCode",{parentName:"p"},"jkl-lead"),", sørg for at den klassen er satt over content-toggle komponenten. Men i noen tilfellet så treffer den ikke helt. For å fortelle content-toggle at den skal bevege seg mer eller mindre, så kan du sette ",(0,a.mdx)("inlineCode",{parentName:"p"},"font-size")," på content-toggle elementet via ",(0,a.mdx)("inlineCode",{parentName:"p"},"className"),"."),(0,a.mdx)("h2",null,"Tilgjengelighet"),(0,a.mdx)("p",null,"Husk at du må skru av interaktive elementer når de ikke vises. Så om du en knapp er en av togglestatene, må du disable den når den ikke syntes, ellers vil det fortsatt være mulig å tabbe til den og trykke."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Aria-hidden settes på komponenten som ikke vises"),(0,a.mdx)("li",{parentName:"ul"},"Komponenten hånterer redusert bevegelse på egenhånd")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-content-toggle-react-documentation-content-toggle-mdx-82364ef57cd961da1f99.js.map