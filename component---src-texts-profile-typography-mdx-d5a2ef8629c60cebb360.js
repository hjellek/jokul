"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1989],{5138:function(e,t,r){r.d(t,{j:function(){return n}});var n=function(e,t){var r,n;return e&&(null===(r=window)||void 0===r||null===(n=r.getComputedStyle(e))||void 0===n?void 0:n.getPropertyValue(t))||"N/A"}},8489:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return b},default:function(){return _}});var n,l=r(808),a=r(7378),s=r(1368),i=r(2803),o=r(6328),m=r(382),d=r.n(m),k=(r(7613),function(e){var t=e.children,r=e.pressed,n=e.onClick,l=e.className,s=e.disabled,i=e.inverted,m=e.helpLabel,k=d()("jkl-toggle-switch",l,{"jkl-toggle-switch--inverted":i});return a.createElement(a.Fragment,null,a.createElement("button",{type:"button","aria-pressed":!!r,disabled:s,className:k,onClick:n},a.createElement("span",{className:"jkl-toggle-switch__slider"},a.createElement("span",{className:"jkl-toggle-switch__expanding-pill"})),t),m&&a.createElement(o.Aq,{className:"jkl-toggle-switch__help-label",helpLabel:m}))}),g=function(){return a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{className:"jkl-typography-table__header"},"Stilnavn"),a.createElement("th",{className:"jkl-typography-table__header"},"Vekt"),a.createElement("th",{className:"jkl-typography-table__header"},"Størrelse"),a.createElement("th",{className:"jkl-typography-table__header"},"Linjeavstand")))},u=function(e){var t=e.title,r=e.children;return a.createElement("td",{className:"jkl-typography-table__data","data-rowtitle":t},a.createElement("p",{className:"jkl-small"},r))},p=r(5138),c=function(e){var t=e.level,r=(0,a.useState)("N/A"),n=r[0],l=r[1],s=(0,a.useState)("N/A"),i=s[0],o=s[1],m=(0,a.useState)("N/A"),d=m[0],k=m[1];return a.createElement("tr",{className:"jkl-typography-table__row"},a.createElement("td",{className:"jkl-typography-table__data"},a.createElement("p",{className:"jkl-"+t.toLowerCase().replace(/ /g,"-"),ref:function(e){l((0,p.j)(e,"font-weight")),o((0,p.j)(e,"font-size")),k((0,p.j)(e,"line-height"))}},t)),a.createElement(u,{title:"Vekt"},n),a.createElement(u,{title:"Størrelse"},i),a.createElement(u,{title:"Linjeavstand"},d))},f=["Title","Heading 1","Heading 2","Heading 3","Heading 4","Heading 5","Body","Small"],v=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];return a.createElement(a.Fragment,null,a.createElement("table",Object.assign({className:"jkl-typography-table jkl-spacing-xl--top"},t?{"data-compactlayout":!0}:{}),a.createElement(g,null),a.createElement("tbody",null,f.map((function(e){return a.createElement(c,{key:e,level:e})})))),a.createElement(k,{className:"jkl-spacing-2xl--top",pressed:t,onClick:function(){return r(!t)}},"Kompakt"))},h=["components"],b={},y=(n="Ingress",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),j={_frontmatter:b},E=i.Z;function _(e){var t=e.components,r=(0,l.Z)(e,h);return(0,s.mdx)(E,Object.assign({},j,r,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",null,"Typografi"),(0,s.mdx)(y,{mdxType:"Ingress"},"Typografi er et profilbærende element i løsningene vi lager. Vi bruker stor og tydelig typografi som grafisk element, i stedet for illustrasjoner og ikoner. Vær modig når du bruker typografi som virkemiddel i våre løsninger."),(0,s.mdx)("h2",null,"Skrifttype"),(0,s.mdx)("p",null,"Vi har vår egen skrifttype: Fremtind Grotesk. Den finnes i snittene Regular, Bold, Display og Mono. Vi bruker\nhovedsakelig Regular og Bold. Som erstatningsfont bruker vi Calibri Light. Ikke bruk andre skrifttyper når du designer løsninger\nfor Fremtind."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://github.com/fremtind/jokul/tree/main/packages/webfonts/fonts"},"Last ned Fremtind Grotesk ↓")),(0,s.mdx)("h2",null,"Typografisk skala"),(0,s.mdx)("p",null,"Vi har to typografiske skalaer. En som er ment for desktop-visning\nog en som er egnet for kompakte og mobile løsninger. I samme grensesnitt skal man ikke blande, men bruke bare stiler fra\nen skala."),(0,s.mdx)(v,{mdxType:"Example"}),(0,s.mdx)("h2",null,"Overskrifter"),(0,s.mdx)("p",null,"De ulike overskriftsnivåene skaper et informasjonshierarki. Mindre overskrifter er underordnet de som er større. Bruk de store overskriftene så ofte som mulig, og unngå flere enn tre overskriftsstiler på samme side. Når du lager en overskrift, må du også tenke på at den skal være enkel å skanne. Bruk godt og enkelt språk. En god overskrift er en kort setning, uten komma, punktum, bindestrek eller semikolon."),(0,s.mdx)("h2",null,"Mengdetekst"),(0,s.mdx)("p",null,"Vi har fire stiler for mengdetekst: Lead er til kortere tekster. Den bruker vi som ingress eller når innholdet er kort og vi vil gi det fokus. Når vi setter Lead sammen med en overskrift, bør vi bruke H1 eller H2, for å sikre god kontrast. Body er hovedstilen for brødtekst. Den bruker vi alltid, så sant det ikke finnes spesielle grunner til å velge noe annet. Body Small er en alternativ brødtekst. Den kan vi bruke hvis vi må ha en mer kompakt stil. Small er den minste skriftstilen vår. Den bruker vi når vi vil spare plass, for eksempel i tabeller eller interne applikasjoner. Vi kan også bruke den i bilde- og figurtekster."),(0,s.mdx)("h2",null,"Linjelengde"),(0,s.mdx)("p",null,"Innhold blir lettest å lese hvis linjelengden er mellom 45 og 75 tegn. Unngå å ha over 80 tegn per linje. For korte linjer skaper også problemer, for da må blikket skifte linje for ofte og det bryter leserytmen."))}_.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-profile-typography-mdx-d5a2ef8629c60cebb360.js.map