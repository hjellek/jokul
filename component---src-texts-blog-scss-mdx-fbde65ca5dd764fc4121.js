"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[513],{6650:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return g}});var r,s=t(808),a=(t(7378),t(1368)),i=t(2803),m=["components"],d={},l=(r="Ingress",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),o={_frontmatter:d},p=i.Z;function g(e){var n=e.components,t=(0,s.Z)(e,m);return(0,a.mdx)(p,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(l,{mdxType:"Ingress"},"Med Jøkul prøver vi å holde oss oppdatert, både kodemessig, depdencecier, design og med andre ting og trender som beveger seg rundt oss. Nå har Sass-teamet kommet med noen oppdatering, som påvirker hvordan man skal bruke sass filene fra Jøkul."),(0,a.mdx)("p",null,"La meg starte med en viktig poeng, dette er nytt, vi har ikke dårlig tid på oss å få fikset dette, men er greit å ta tak i det når det passer. Det er ikke alle implementasjoner av Sass som har full støtte for dette enda, men om du bruker ",(0,a.mdx)("inlineCode",{parentName:"p"},"sass")," eller ",(0,a.mdx)("inlineCode",{parentName:"p"},"dart-sass")," kan du migrere nå. ",(0,a.mdx)("inlineCode",{parentName:"p"},"node-sass")," har ikke støtte per i dag, men om du bruker den bør du vurdere å migrere til referanse implementasjonen ",(0,a.mdx)("inlineCode",{parentName:"p"},"sass"),". Det viktige endringen for oss er at ",(0,a.mdx)("inlineCode",{parentName:"p"},"@import")," syntaxen gies tilbake til CSS. Per i dag er det måten vi har hentet funksjonalitet og stiler mellom ulike filer, det erstattes nå av ",(0,a.mdx)("inlineCode",{parentName:"p"},"@use")," og ",(0,a.mdx)("inlineCode",{parentName:"p"},"@forward"),". Dette gjelder kun ved importer av ",(0,a.mdx)("inlineCode",{parentName:"p"},".scss")," filer i ",(0,a.mdx)("inlineCode",{parentName:"p"},".scss")," filer, det påvirker ikke importen til JavaScript eller import av våre bydge ",(0,a.mdx)("inlineCode",{parentName:"p"},".css")," filer."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '~@fremtind/jkl-core/_functions.scss';\n\n.my-class {\n    height: rem(300px);\n}\n\n")),(0,a.mdx)("p",null,"Dette blir nå:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},"@use '~@fremtind/jkl-core/_functions.scss';\n\n.my-class {\n    height: functions.rem(300px);\n}\n\n")),(0,a.mdx)("p",null,"Import blir byttet ut med use, men importen er nå scopet til et namespace, så for å finne funksjonen må den kalles fra namespace. Du kan også sette det namespacet selv om du ønsker."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},"@use '~@fremtind/jkl-core/mixins/_all.scss' as mix;\n\n.my-class {\n    @include mix.small-device {\n        display: none;\n    }\n}\n\n")),(0,a.mdx)("p",null,"Med nye syntaxen har ikke lengre den importete filen tilgang til variablene satt i fila den blir importert til. Det treffer oss for å sette opp fonten vår. For å fikse det må man gi den importerende fila tilgang via ",(0,a.mdx)("inlineCode",{parentName:"p"},"with")," syntaxen."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},'$webfonts-dir: "/relative/path/to/font/files";\n@import "~@fremtind/jkl-webfonts/webfonts.scss";\n')),(0,a.mdx)("p",null,"blir til"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},"@use '~@fremtind/jkl-webfonts/webfonts.scss' with (\n    $webfonts-dir: \"/privat/forsikring/open/fonts\"\n);\n")),(0,a.mdx)("p",null,"Dette er litt kjipt å fikse, men heldigvis har sass-teamet lagd et migrasjonsverktøy som kan fikse de fleste importen (ikke webfonts). ",(0,a.mdx)("a",{parentName:"p",href:"https://sass-lang.com/documentation/cli/migrator"},"https://sass-lang.com/documentation/cli/migrator"),"."),(0,a.mdx)("p",null,"For å ta alle scss filene i samme slengen kan du gjøre noe ala dette på linux:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ find . -type f -name '*.scss' | xargs npx sass-migrator module --verbose --migrate-deps\n")),(0,a.mdx)("p",null,"Vi har ikke migrert Jøkul enda, vi vil gi beskjed før vi gjør det. Vi anbefaler klienter å gjøre denne oppgraderingen ved første tilgjengelige anledning, så trenger man ikke bry seg den dagen det kommer en breaking change på dette."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-blog-scss-mdx-fbde65ca5dd764fc4121.js.map