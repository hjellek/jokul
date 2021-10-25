"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1417],{65138:function(e,r,t){t.d(r,{j:function(){return l}});var l=function(e,r){var t,l;return e&&(null===(t=window)||void 0===t||null===(l=t.getComputedStyle(e))||void 0===l?void 0:l.getPropertyValue(r))||"N/A"}},99389:function(e,r,t){t.r(r),t.d(r,{_frontmatter:function(){return E},default:function(){return V}});var l,a=t(30808),n=t(27378),o=t(81368),i=t(62803),s=t(73804),m=t(90382),c=t.n(m),d=t(65138),k=function(e){var r=e.toString(16).toUpperCase();return 1===r.length?"0"+r:r},g=function(e){return k(e[0])+k(e[1])+k(e[2])},u=function(e){var r=e.colorVariable,t=e.className,l=e.setColor,a=c()({"jkl-portal-color-swatch":!0,"jkl-portal-color-swatch--snohvit":"snohvit"===r,"jkl-portal-color-swatch--granitt":"granitt"===r},t),o=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e=(0,d.j)(o.current,"color").split(",");"function"==typeof l&&l(e.map((function(e){return parseInt(e.replace(/[^0-9]/g,""),10)})))}),[l]),n.createElement("svg",{ref:o,role:"img","aria-label":"Fargeprøve av fargen "+r,className:a+" jkl-color-"+r,viewBox:"0 0 20 20",fill:"none"},n.createElement("title",null,"Fargeprøve av fargen "+r),n.createElement("path",{className:"jkl-portal-color-swatch__diamond",d:"M0.0707109 10L10 0.0707109L19.9293 10L10 19.9293L0.0707109 10Z"}))},p=function(e){var r=e.colorVariable,t=e.cmyk,l=e.pantone,a=e.vertical,o=e.className,i=c()({"jkl-portal-color-info":!0,"jkl-portal-color-info--vertical":a},o),s=(0,n.useState)(),m=s[0],d=s[1];return n.createElement("article",{className:i},n.createElement(u,{setColor:d,className:"jkl-portal-color-info__swatch",colorVariable:r}),n.createElement("p",{className:"jkl-portal-color-info__values jkl-small"},m&&3===m.length&&n.createElement(n.Fragment,null,"RGB: "+m[0]+" "+m[1]+" "+m[2]," ",n.createElement("br",null),"HEX: "+g(m)),t&&n.createElement("br",null),t&&"CMYK: "+t,l&&n.createElement("br",null),l))},f=["title","children"],v=function(e){var r=e.title,t=e.children,l=(0,a.Z)(e,f);return n.createElement("article",{className:"jkl-portal-color-description"},n.createElement("h3",{className:"jkl-portal-color-description__title jkl-sub-heading-large"},r),n.createElement(p,Object.assign({className:"jkl-portal-color-description__swatch"},l)),n.createElement("p",{className:"jkl-portal-color-description__text jkl-body jkl-portal-paragraph"},t))},b=function(e){var r=e.title,t=e.color,l=e.darkColor,a=e.className,o=e.children,i=(0,s.EV)();return n.createElement("article",{className:"jkl-portal-two-tone-description "+(a||"")},n.createElement("div",{className:"jkl-portal-two-tone-description__info-wrapper"},n.createElement("h3",{className:"jkl-portal-two-tone-description__title jkl-sub-heading-large"},r),n.createElement("p",{className:"jkl-portal-two-tone-description__info jkl-body"},o)),n.createElement("div",{className:"jkl-portal-two-tone-description__light-color"},n.createElement(p,Object.assign({vertical:!i.isSmallDevice},t))),n.createElement("div",{className:"jkl-portal-two-tone-description__dark-color"},n.createElement(p,Object.assign({vertical:!i.isSmallDevice},l))))},h=function(e){var r=e.colorVariable,t=(0,n.useState)(),l=t[0],a=t[1],o=(0,n.useState)("N/A"),i=o[0],s=o[1],m=(0,n.useState)("N/A"),c=m[0],d=m[1];return(0,n.useEffect)((function(){l&&3===l.length&&(s(g(l)),d(l[0]+", "+l[1]+", "+l[2]))}),[l]),n.createElement("tr",{className:"jkl-portal-color-table__row"},n.createElement("td",{className:"jkl-portal-color-table__data","data-header":"Valør:"},n.createElement(u,{setColor:a,className:"jkl-portal-color-table__swatch",colorVariable:r})),n.createElement("td",{className:"jkl-portal-color-table__data","data-header":"Variabelnavn:"},r),n.createElement("td",{className:"jkl-portal-color-table__data","data-header":"Hex:"},i),n.createElement("td",{className:"jkl-portal-color-table__data","data-header":"RGB:"},c))},j=function(e){var r=e.colorVariables;return n.createElement("table",{className:"jkl-portal-color-table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"jkl-portal-color-table__header"},"Valør"),n.createElement("th",{className:"jkl-portal-color-table__header"},"Variabelnavn i Figma"),n.createElement("th",{className:"jkl-portal-color-table__header"},"Hex"),n.createElement("th",{className:"jkl-portal-color-table__header"},"RGB"))),n.createElement("tbody",null,r.map((function(e){return n.createElement(h,{key:e,colorVariable:e})}))))},x=["hvit","snohvit","sand","dis","varde","svaberg","stein","fjellgra","skifer","granitt","svart"],_=function(){return n.createElement(j,{colorVariables:x})},y=["components"],E={},N=(l="Ingress",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),w={_frontmatter:E},C=i.Z;function V(e){var r=e.components,t=(0,a.Z)(e,y);return(0,o.mdx)(C,Object.assign({},w,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h1",null,"Farger"),(0,o.mdx)(N,{mdxType:"Ingress"},"Farger er en viktig del av Fremtinds identitet. Det etterlatte inntrykket av våre løsninger skal være snøhvit med granitt som profilbærende farger. Profilen støttes av funksjonelle farger, som er inspirert av norsk natur."),(0,o.mdx)("h2",null,"Primærfargene"),(0,o.mdx)("p",null,"Disse fargene bruker vi både på trykk og i digitale flater. Disse bærer profilen vår og er de mest gjenkjennelige fargene i vårt uttrykk. Primærfargene våre er:"),(0,o.mdx)(v,{title:"Snøhvit",colorVariable:"snohvit",cmyk:"0 0 0 0",mdxType:"ColorDescription"},"Snøhvit bruker vi mest som bakgrunnsfarge, og som tekstfarge der vi har mørke flater. I tillegg er den fokusfarge, for eksempel på kort som er opphøyd over annet innhold, eller på inndataelementer som brukeren har valgt, for eksempel et felt i et skjema."),(0,o.mdx)(v,{title:"Granitt",colorVariable:"granitt",cmyk:"15 15 15 100",pantone:"Pantone Black U",mdxType:"ColorDescription"},"Granitt bruker vi gjerne i elementer vi vil fremheve. Et godt eksempel er primærknappen. Vi kan bruke store flater med granitt, men de bør ha lite innhold i forhold til størrelsen. Unngå å sette granitt flater nær bakgrunner med fargen varde."),(0,o.mdx)(v,{title:"Varde",colorVariable:"varde",cmyk:"12 13 19 0",mdxType:"ColorDescription"},"Varde bruker vi som bakgrunnsfarge eller på elementer for å fremheve innhold. Når vi velger å bruke den på en flate, unngår vi å ha mye innhold på den, i forhold til størrelsen. Bruk svart på teksten, for å sikre god kontrast. Ikke bruke varde på flater som står nærme grå bakgrunner og elementer, eller svarte flater."),(0,o.mdx)("h2",null,"Fargespektrumet vårt"),(0,o.mdx)("p",null,"Vi har et sett av valører som fungerer godt med hverandre. Disse kan vi bruke til å skape nyanser og nivåer i løsningene våre. Vi bruker disse i hovedsak bare på digitale flater."),(0,o.mdx)("p",null,"For Varde og lavere skal man bruke granitt tekst, og for Fjellgra og høyere skal man bruke snøhvit tekst. Bruk Svaberg og Stein med omhu."),(0,o.mdx)("h3",null,"Farger"),(0,o.mdx)(_,{mdxType:"ColTable"}),(0,o.mdx)("h2",null,"Meldingsfargene"),(0,o.mdx)("p",null,"Meldingsfargene bruker vi på digitale flater, for eksempel når vi trenger å gi informasjon fra systemet. Feil, advarsler, informasjonsmeldinger, grafer og fokusringer ved tastaturnavigasjon er eksempler på hva vi bruker meldingsfargene til. Meldingsfargene skal bare brukes funksjonelt, det vil si ikke som rene dekorelementer."),(0,o.mdx)("p",null,"Meldingsfargene finnes for mørk og lys bakgrunn."),(0,o.mdx)(b,{className:"jkl-spacing-2xl--top",title:"Suksessfarge",color:{colorVariable:"suksess"},darkColor:{colorVariable:"suksess--darkbg"},mdxType:"TwoToneColorDescription"},"En grønnfarge som vi bruker til å vise at en handling er vellykket, for eksempel at brukeren er ferdig med noe."),(0,o.mdx)(b,{title:"Infofarge",color:{colorVariable:"info"},darkColor:{colorVariable:"info--darkbg"},mdxType:"TwoToneColorDescription"},"Blåfargen bruker vi til informasjonsmeldinger og fokustilstander."),(0,o.mdx)(b,{title:"Advarselsfarge",color:{colorVariable:"advarsel"},darkColor:{colorVariable:"advarsel--darkbg"},mdxType:"TwoToneColorDescription"},"Denne gulfargen er til advarsler. Denne oppfyller ikke kontrastkravet mot hvit så den kan ikke være funksjonsbærende mot hvite flater uten andre virkemiddler (e.g. tekst)."),(0,o.mdx)(b,{title:"Feilfarge",color:{colorVariable:"feil"},darkColor:{colorVariable:"feil--darkbg"},mdxType:"TwoToneColorDescription"},"En rødfarge som vi bruker til feilmeldinger eller andre viktige varsler."),(0,o.mdx)("h2",null,"Tilgjengelighet"),(0,o.mdx)("p",null,"Tilgjengelighet er noe av det viktigste å tenke på når vi bruker farger i digitale løsninger. Vi skal alltid følge kravene til universell utforming. For farger betyr det AA-kravet for kontrast. Kontrastkravet gjelder ikke bare tekst på bakgrunn, men også komponentenes kontrast mot sin egen bakgrunn, når det har betydning for å forstå funksjonaliteten."),(0,o.mdx)("p",null,"I tillegg til å tenke på tekst mot knappebakgrunnen, må vi også tenke på knappebakgrunnen mot sidens bakgrunnsfarge dersom det er viktig for å forstå funksjonen til komponenten."),(0,o.mdx)("p",null,"Tekstfargene våre er snøhvit eller granitt. Se fargebeskrivelsene for å finne ut hvilken farge du skal bruke mot hvilken bakgrunn, for å overholde kontrastkravet."),(0,o.mdx)("h3",null,"Plugins til Figma"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.figma.com/community/plugin/733159460536249875/A11y---Color-Contrast-Checker"},"A11y - Color Contrast Checker")),(0,o.mdx)("li",{parentName:"ul"},"Se også ",(0,o.mdx)("a",{parentName:"li",href:"https://www.figma.com/blog/design-for-everyone-with-these-accessibility-focused-plugins/"},"denne listen")," over nyttige plugins.")),(0,o.mdx)("h3",null,"Andre verktøy"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://webaim.org/resources/contrastchecker/"},"WebAIM Contrast Checker")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://developer.paciellogroup.com/resources/contrastanalyser/"},"Colour Contrast Analyzer"))))}V.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-profile-colors-mdx-1bf20be0910ce6bd2582.js.map