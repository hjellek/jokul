"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6714],{920:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return d},default:function(){return u}});var t,a=r(7077),m=(r(7378),r(1368)),l=r(2803),s=["components"],d={},o=(t="Ingress",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),i={_frontmatter:d},k=l.Z;function u(e){var n=e.components,r=(0,a.Z)(e,s);return(0,m.mdx)(k,Object.assign({},i,r,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)(o,{mdxType:"Ingress"},"Automatisk dark mode bytter tema på løsninger bygget med Jøkul, basert på inn­stillingene på brukerens mobil eller data­maskin. Her er noen tips for å gjøre din løsning klar for dette."),(0,m.mdx)("h2",null,"Hjelp! Jeg vil ikke!"),(0,m.mdx)("p",null,"Aller først: Hvis du vil oppgradere til siste versjon av Jøkul, men ikke ennå er klar for å aktivere automatisk dark mode, lar det seg likevel gjøre! Bare sørg for at løsningen din rendres inne i et element med følgende attributter satt:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'<div class="jkl" data-theme="light" />\n')),(0,m.mdx)("p",null,"Da vil applikasjonen ",(0,m.mdx)("em",{parentName:"p"},"alltid")," vises i lyst tema. Du kan selvfølgelig også spesifisere ",(0,m.mdx)("em",{parentName:"p"},"mørkt")," tema på denne måten om du heller vil det. Merk at du også kan sette tema på enkeltdeler av løsningen din med ",(0,m.mdx)("inlineCode",{parentName:"p"},"data-theme"),"-attributten."),(0,m.mdx)("h2",null,"Ting å huske på når du designer for dark mode"),(0,m.mdx)("p",null,"Dark mode setter Granitt som bakgrunnsfarge og Snøhvit som tekstfarge på løsningen. Det blir imidlertid ",(0,m.mdx)("em",{parentName:"p"},"ikke")," automatisk byttet bakgrunnsfarge på seksjoner der man har aktivt satt en bakgrunnsfarge (f.eks. felter som er uthevet med mørkere toner). For disse må man finne en passende bakgrunnsfarge for dark mode, som sørger for å gi tilsvarende kontrast mot Granitt bakgrunn."),(0,m.mdx)("p",null,"Husk også på at skygger ikke vil synes mot mørke bakgrunner, og at felter som er utheves med skygge derfor bør utheves på annen måte i dark mode. For eksempel kan man bruke omriss eller endring i bakgrunnsfarge."),(0,m.mdx)("p",null,"Hvis det er deler av løsningen din som ",(0,m.mdx)("em",{parentName:"p"},"alltid")," skal vises i mørkt tema må du sørge for at bakgrunnen har ønsket kontrast mot Granitt bakgrunnsfarge, så den ikke går i ett med resten av løsningen i dark mode."),(0,m.mdx)("h2",null,"Verktøy for å utvikle med dark mode"),(0,m.mdx)("p",null,"Vi har forsøkt å gjøre det så enkelt som mulig å utvikle løsninger med tanke på dark mode. Som standard vil alle Jøkul-komponentene automatisk bytte mellom lyst og mørkt tema basert på brukerens preferanser. For helt enkle løsninger er det dermed ikke sikkert man må gjøre noe ekstra arbeid!"),(0,m.mdx)("h3",null,"Overstyre automatisk bytte"),(0,m.mdx)("p",null,"Du kan overstyre det automatiske byttet ved å sette attributten ",(0,m.mdx)("inlineCode",{parentName:"p"},"data-theme")," på elementer i DOMet. Det er også mulig å nøste seksjoner med forskjellig tema inne i hverandre."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-tsx"},'<div className="jkl din-app">\n    // Dette innholdet bytter automatisk tema\n    <div data-theme="dark">\n        // Dette innholdet er alltid i mørkt tema\n        <div data-theme="light">/* Dette innholdet er alltid lyst, selv om det er inne i en div med mørkt tema */</div>\n    </div>\n</div>\n')),(0,m.mdx)("h3",null,"Gjøre spesifikke endringer for dark mode"),(0,m.mdx)("p",null,"I noen tilfeller holder det ikke med de automatiske endringene av bakgrunns- og tekstfarge, for eksempel når man har felter med en annen bakgrunnsfarge enn standard. For å gjøre det enklere å løse disse tilfellene har vi laget mixins som er tilgjengelige fra ",(0,m.mdx)("inlineCode",{parentName:"p"},"jkl-core"),":"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},'@import "@fremtind/jkl-core/jkl";\n\n@include jkl.helper-light-mode-variables {\n    --my-custom-background-color: #{jkl.$color-varde};\n}\n@include jkl.helper-dark-mode-variables {\n    --my-custom-background-color: #{jkl.$color-skifer};\n}\n\n.my-fancy-component {\n    background-color: var(--my-custom-background-color);\n    background-color: jkl.$color-varde; // Husk å ta høyde for IE om du må støtte det\n}\n')),(0,m.mdx)("h3",null,"Håndtere elementer som alltid skal ha mørkt tema"),(0,m.mdx)("p",null,"Noen løsninger har elementer som alltid skal vises med mørkt tema, også når resten av applikasjonen er i lyst tema. For disse må du huske å sette bakgrunns- og tekstfarge spesifikt, samt å markere at den er låst til mørkt tema:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},"// MyDarkComponent.scss\n\n.my-dark-component {\n    background-color: jkl.$color-granitt;\n    color: jkl.$color-snohvit;\n}\n")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-tsx"},'// MyDarkComponent.tsx\n\n<div className="my-dark-component" data-theme="dark">\n    Sammendrag\n    <SummaryTable />\n    <PrimaryButton>Kjøp forsikring</PrimaryButton>\n</div>\n')),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"NB!"),": Dersom du skal støtte Internet Explorer er du nødt til å bruke prop-en ",(0,m.mdx)("inlineCode",{parentName:"p"},"inverted")," på komponenter inne i elementer med mørkt tema, siden den automatiske løsningen benytter seg av CSS custom properties"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-blog-auto-dark-mode-mdx-3352862f1e4b54d5af40.js.map