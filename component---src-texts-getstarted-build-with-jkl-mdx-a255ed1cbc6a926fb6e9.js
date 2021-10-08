"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4929],{467:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return a},default:function(){return u}});var r,o=t(808),i=(t(7378),t(1368)),l=t(2803),s=["components"],a={},m=(r="InfoMessage",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),d={_frontmatter:a},p=l.Z;function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.mdx)(p,Object.assign({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Bygge prosjekt med Jøkul"),(0,i.mdx)("p",null,"Du kan bruke komponentene i Jøkul som rene stilark eller som React-komponenter. Alle CSS-stilark finnes i både vanlig og minifisert utgave. Vi anbefaler å bruke den minifiserte i produksjon. Vi tilbyr også hjelpefunksjoner for vanlige utfordringer i både Sass og JavaScript."),(0,i.mdx)("p",null,"Dersom du kun bruker stilarkene (f.eks. hvis prosjektet ditt ikke bruker React) må du sørge for å gi komponentene riktig HTML-struktur. Se gjerne på hvordan React-komponentene er implementert, eller sjekk eksemplene i portalen."),(0,i.mdx)("h2",null,"Kom i gang med React-komponenter"),(0,i.mdx)("p",null,"Hvis du vil ta i bruk en Jøkul React-komponent, trenger du å laste inn både stilen og komponenten. Hvis du har satt opp en CSS-loader i pakkesystemet, kan du laste ned stilen direkte i React. Du kan også velge å legge den inn i en av dine ",(0,i.mdx)("inlineCode",{parentName:"p"},".scss"),"- eller ",(0,i.mdx)("inlineCode",{parentName:"p"},".css"),"-filer."),(0,i.mdx)(m,{role:"none presentation",mdxType:"InfoMessage"},"For å normalisere stilen og få tilgang til rotstilen, laster du inn ",(0,i.mdx)("code",null,"core.min.css")," fra"," ",(0,i.mdx)("code",null,"@fremtind/jkl-core"),". Det trenger du bare å gjøre én gang i prosjektet ditt."),(0,i.mdx)("h2",null,(0,i.mdx)("a",{parentName:"h2",href:"#installer-avhengigheter"},"Installer avhengigheter")),(0,i.mdx)("p",null,"Hvis du bruker React-komponenten, installerer du den med ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn add @fremtind/jkl-accordion-react"),". Stilpakken blir automatisk installert som en avhengighet."),(0,i.mdx)("p",null,"Dersom du bare bruker stilpakken, installerer du den med ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn add @fremtind/jkl-accordion"),"."),(0,i.mdx)(m,{role:"none presentation",mdxType:"InfoMessage"},"Vi bruker Yarn for pakkehåndtering i Jøkul. Hvis ditt prosjekt bruker NPM, kan du selvfølgelig installere pakkene med ",(0,i.mdx)("code",null,"npm i")," som vanlig."),(0,i.mdx)("h2",null,"Ta i bruk komponenten"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},'import "@fremtind/jkl-accordion/accordion.min.css";\nimport { Accordion, AccordionItem } from "@fremtind/jkl-accordion";\n\nconst Component = () => (\n    <Accordion>\n        <AccordionItem title="Tittel 1">Innhold i første</AccordionItem>\n        <AccordionItem title="Tittel 2">Innhold i andre</AccordionItem>\n    </Accordion>\n);\n')),(0,i.mdx)("h2",null,"Oppsett"),(0,i.mdx)("p",null,"Om du skal ta i bruk Jøkul i et eksisternde prosjekt eller om du starter helt fra blanke ark er det noen ting du må tenke på for å få best mulig opplevelse av å bruke Jøkul."),(0,i.mdx)("h3",null,"Initialisering"),(0,i.mdx)("p",null,"Jøkul strekker seg så langt vi kan for å være tilgjengelig for så mange som mulig. For at komponentene skal virke riktig trenger de å vite om brukeren navigerer i løsningen med mus, tastatur eller touch. Det gjøres ved å sette opp ",(0,i.mdx)("inlineCode",{parentName:"p"},"initTabListener")," funksjonen. Det trengs bare en gang, så tidlig i din runtime som det lar seg gjøre. Normalt vil det være i entrypointet i applikasjonen din. Denne funksjonen lytter på brukerens oppførsel og setter dynamisk en data-attributt på body-elementet, som vi plukker opp i komponentene og bruker til blant annet å vise enda tydeligere fokus states ved tastaturnavigasjon."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},'import { initTabListener } from "@fremtind/jkl-core";\n\ninitTabListener();\n')),(0,i.mdx)("h3",null,"Polyfills"),(0,i.mdx)("p",null,"Jøkul benytter seg av moderne javascript. Det blir transpilert til ES5, men det kan fortsatt være brukt funksjonalitet som ikke støttes i alle nettlesere. Per nå bruker vi bare funksjonalitet som kan transpileres eller polyfilles, men dette vil sannsynligvis forandre seg på sikt. Når det skjer vil vi tydelig merke de komponentene som ikke kan brukes i legacy-systemer."),(0,i.mdx)(m,{role:"none presentation",mdxType:"InfoMessage"},"Proxy er et eksempel på moderne javascript som ikke kan polyfilles eller transpileres. Det finnes en ponyfill, men den er ikke et fullgodt alternativ. Framer Motion og React Hook Form er bibliotek som benytter seg av denne typen funksjonalitet, og de vil dermed ikke virke i alle nettlesere. Om man må støtte Internet Explorer 11, finnes det work-arounds for begge inntil videre."),(0,i.mdx)("h4",null,(0,i.mdx)("a",{parentName:"h4",href:"https://github.com/webcomponents/webcomponentsjs"},"@webcomponents/webcomponentsjs")),(0,i.mdx)("p",null,"Denne trengs i litt ulike varianter basert på hva du bruker og hva du skal støtte. Moderne nettlesere som ny Chrome, Firefox, Edge og Safari har innebygd støtte, men du skal ikke mer enn tilbake til 2019 før støtten blir mer usikker. Denne må lastes inn så tidlig som overhode mulig i applikasjonen din, gjerne av webpack før ditt entrypoint. Hvis du kun støtter evergreen browsere kan du sløyfe denne."),(0,i.mdx)(m,{role:"none presentation",mdxType:"InfoMessage"},"Selv om ikke alle komponentene våre bruker webcomponents, så anbefaler vi fortsatt å sette opp disse polyfillene med en gang du tar i bruk en eller flere av våre React-pakker."),(0,i.mdx)("h4",null,"@webcomponents/webcomponentsjs/custom-elements-es5-adapter"),(0,i.mdx)("p",null,"Denne bør være med uansett hva du ønsker å støtte, den er bare noen få kB. Den gjør det mulig for de aller fleste nettlesere å forstå syntaxen som NRK Core components bygger på, og trengs også sannsynligvis i testoppsettet ditt for at jsdom skal skjønne koden."),(0,i.mdx)("p",null,"webpack.config.js"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'const polyfills = ["@webcomponents/webcomponentsjs", "@webcomponents/webcomponentsjs/custom-elements-es5-adapter"];\n\nconst config = {\n    entry: [...polyfills, path.resolve("src", "index.js")],\n};\n')),(0,i.mdx)("p",null,"Jest setup fil"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";\n')),(0,i.mdx)("h4",null,"Babel runtime"),(0,i.mdx)("p",null,"Vi trenger også runtime bibliotektet og de vanligste polyfillene der. Bruker du create-react-app har du allerede disse, og har du en eksisterende applikasjon har du dem sannsynligvis også. Du trenger både ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," og ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/regenerator/tree/master/packages/runtime"},"regenerator-runtime"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'import "core-js/stable";\nimport "regenerator-runtime/runtime";\n')),(0,i.mdx)("p",null,"Du trenger også ",(0,i.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime"},"babel runtime")," i ditt babeloppsett. Bruker du et annet transpileringsystem må du sørge for at det er kompatibelt med babel runtime og gjerne oppdatere denne dokumentasjonen."),(0,i.mdx)("h4",null,"Nanoid"),(0,i.mdx)("p",null,"Flere av våre komponenter bruker nanoid for å generere automatiske ID-er på komponenter som har behov for det, feks radiobuttons. Nanoid er mye lettere enn feks UUID og gir mer enn unike nok ID-er for vårt behov. Men i version 3 droppet de support for IE 11, så for at komponentene som bruker dette skal virke ordentlig hos deg trenger du å transpilere Nanoid med samme settings som din øvrige kode, og du må tilgjengeliggjøre crypto for IE 11. Polyfill.js eller hvor du legger crypto overriden bør være så tidlig i din runtime som mulig. Hvis du ikke må støtte IE 11, kan du trygt sløyfe dette steget."),(0,i.mdx)("p",null,"webpack.js"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"}," module: {\n        rules: [\n            {\n                exclude: /node_modules\\/(?!nanoid)/,\n                test: /\\.(js|ts)x?$/,\n                use: ['babel-loader'],\n            },\n        ...\n")),(0,i.mdx)("p",null,"polyfill.js"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"if (!window.crypto) {\n    window.crypto = window.msCrypto;\n}\n")),(0,i.mdx)("h4",null,"Testing library"),(0,i.mdx)("p",null,"Det er en feil i @testing-library sin webcomponent håndtering hvis en test feiler: Det vil kunne vi en evig løkke som skriver ut stack trace til terminalen helt til terminalen tryner."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'import { configure } from "@testing-library/react";\nimport prettier from "prettier";\n\nconfigure({\n    getElementError: (message, container) => {\n        return new Error(\n            [\n                message,\n                prettier.format(container.innerHTML, {\n                    parser: "html",\n                    htmlWhitespaceSensitivity: "ignore",\n                }),\n            ]\n                .filter(Boolean)\n                .join("\\n\\n"),\n        );\n    },\n});\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-getstarted-build-with-jkl-mdx-a255ed1cbc6a926fb6e9.js.map