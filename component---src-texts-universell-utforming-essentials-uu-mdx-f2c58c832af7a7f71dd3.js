"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5465],{5458:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return p}});var r,l=t(808),i=(t(7378),t(1368)),s=t(2803),a=["components"],m={},d=(r="Ingress",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),o={_frontmatter:m},k=s.Z;function p(e){var n=e.components,t=(0,l.Z)(e,a);return(0,i.mdx)(k,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Universell utforming i Jøkul"),(0,i.mdx)(d,{mdxType:"Ingress"},"Universell utforming handler om at vi skal lage løsninger med tanke på at brukere kan ha ulik funksjonsevne, midlertidig eller varig. Ved å ta hensyn til det, når vi alle målgruppene med én og samme løsning."),(0,i.mdx)("p",null,"Det er fort gjort å tenke at universell utforming kun gjelder en liten gruppe mennesker. Men man regner med at mellom 15% og 20% av befolkningen har en form for funksjonsnedsettelse. Dette kan være for eksempel syn, hørsel, bevegelseshemming eller psykososiale funksjonsnedsettelser."),(0,i.mdx)("p",null,"Men dette er bare de som har permanente nedsettelser. Selv opplever vi alle flere ganger daglig å ha en form for funksjonsnedsettelse. Dette kan være en fysisk nedsettelse ved at du klemmer en finger så du ikke kan bruke ene hånden ordentlig. Eller det kan være en mental nedsettelse som når du står på perrongen og skal kjøpe togbillett mens toget ruller inn på stasjonen."),(0,i.mdx)("p",null,"I alle tilfeller er det viktig at en løsning har tenkt på universell utforming sånn at alle kan bruke tjenesten, uansett om de har permanente, temporærere, fysiske eller mentale nedsettelser."),(0,i.mdx)("p",null,"Lovverket definerer i dag at alle nye tjenester skal være universelt utformet fra 1. juli 2014. Eksisterende tjenester skal være universelt utformet innen 1. januar 2020. I tillegg er en oppdatering av lovverket på vei hvor kravene vil oppgraderes til å omfatte WCAG2.1 samt krav til en tilgjengelighetserklæring.\nI utgangspunktet skulle det komme en lov 1. juli 2020 som innfattet dette, men denne ble forsinket da mange land ønsket en lenger overgangsperiode for innføring av de nye kravene. Dette er derimot ingen grunn til å vente med å utvide støtten. Over tid vil denne siden ta for seg flere krav og kunne gi dokumentasjon for hvordan du kommer i gang med en tilgjengelighetserklæring."),(0,i.mdx)("h2",null,"Språk"),(0,i.mdx)("p",null,"For at opplesende hjelpemidler skal kunne velge riktig stemme må språk være satt i koden. Dette gjør man ved å definere ",(0,i.mdx)("inlineCode",{parentName:"p"},"lang")," attributten på ",(0,i.mdx)("inlineCode",{parentName:"p"},"<html>")," taggen. Språket må angis ved å bruke språkkode definert i ISO 639-1 standarden."),(0,i.mdx)("p",null,"De mest brukte kodene er"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"no"),": norsk"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"nb"),": bokmål"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"nn"),": nynorsk"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"en"),": engelsk")),(0,i.mdx)("p",null,"En annen sideeffekt av å bruke riktig språk er at søkemotorer får hjelp til å gi relevante traff."),(0,i.mdx)("p",null,"I Fremtind har vi en tone of voice som heter Stemmen vår. Den kan du ",(0,i.mdx)("a",{parentName:"p",href:"/profil/stilogtone"},"lese mer om her"),"."),(0,i.mdx)("p",null,'Når det kommer til språk er det lurt å teste med en skjermleser for å få et bilde av hvordan siden faktisk høres ut. Her vil man oppdage at man eksempelvis bør unngå bindestrek: skriv "Fra 1 til 10" i stedet for "Fra 1-10". Det kan også være behov for å gi egne tekster til skjermleseren for å gi kontekst som ikke er enkel å oppfatte uten å se selve siden.'),(0,i.mdx)("h2",null,"Sidetittel"),(0,i.mdx)("p",null,"Sidetittel presenteres øverst i vinduet eller i fanen i nettleseren. Den er et resultat av ",(0,i.mdx)("inlineCode",{parentName:"p"},"<title>")," taggen i ",(0,i.mdx)("inlineCode",{parentName:"p"},"<head>"),". Sidetittelen er det første som leses av hjelpemidler, og skal være beskrivende for hvilke side brukeren er på og navnet på nettstedeieren."),(0,i.mdx)("p",null,"Det er god praksis å innlede sidetittelen med beskrivelse av siden, og deretter nettstedeier. Dette er spesielt med tanke på at det kan være begrenset plass i visningen av navnet. For brukere med for eksempel skjermleser vil det ta kortere tid å få relevant informasjon når sidebeskrivelsen kommer først."),(0,i.mdx)("h2",null,"ARIA"),(0,i.mdx)("p",null,"ARIA, også kjent som WAI-ARIA (Accessibility Initiative – Accessible Rich Internet Applications) er en spesifikasjon som ble laget for å forbedre tilgjengelighet i HTML. Bruken av ARIA attributter er å utvide funksjonalitet for hjelpemidler hvor ikke semantikk er nok."),(0,i.mdx)("p",null,"ARIA-attributter endrer ingenting på nettsiden. Derimot eksponerer de mer informasjon til hjelpemidler, spesielt skjermleser. Eksempelvis er ikke en knapp faktisk disabled ved bare å sette ",(0,i.mdx)("inlineCode",{parentName:"p"},'aria-disabled="true"'),", men man må også bruke ",(0,i.mdx)("inlineCode",{parentName:"p"},"disabled")," attributten på elementet."),(0,i.mdx)("p",null,"Det er viktig å være obs på bruk av ARIA: Det er ikke en offisielt vedtatt spesifikasjon, og støtten kan være forskjellig mellom både operativsystemer, nettlesere og hjelpemidler. En god huskeregel er å kun bruke ARIA når det er nødvendig. Så langt det er mulig skal man forholde seg til standard HTML funksjonalitet. Man kan faktisk gjøre opplevelsen av nettsiden mye dårligere av å bruke ARIA feil. Tidligere har tilgjengelighet og ARIA blitt sett på som samme ting, det er feil. ARIA er viktig for mange, og dermed viktig for oss, men det er en relativt liten komponent i å lage gode opplevelser på nett for alle."),(0,i.mdx)("p",null,"Eksempler på mye brukte ARIA attributter er blant annet ",(0,i.mdx)("inlineCode",{parentName:"p"},"role"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"tabindex")," og ",(0,i.mdx)("inlineCode",{parentName:"p"},"aria-labelledby"),"."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#state_prop_def"},"Her kan du lese mer om de forskjellige attributtene og når de skal brukes.")),(0,i.mdx)("h2",null,"Semantikk"),(0,i.mdx)("p",null,"Når man snakker om semantikk og tilgjengelighet, er det ofte betydningen av HTML man snakker om. For eksempel er ",(0,i.mdx)("inlineCode",{parentName:"p"},"h1")," et semantisk HTML element, som gir innholdet betydningen av å være toppoverskrift på siden. Nettlesere vil ofte legge på en stil på elementet, men man kan stile semantiske elementer akkurat som man vil. Om man stiler et ",(0,i.mdx)("inlineCode",{parentName:"p"},"span")," element til å se ut som en h1, vil det gi samme visuelle betydning, men den faktiske betydningen av elementet er endret."),(0,i.mdx)("p",null,"Semantiske HTML elementer hjelper skjermlesere med navigasjon. De gir landemerker skjermleseren kan forholde seg til, og kan gi kontekst til brukeren. I tillegg gir god semantikk bedre score hos søkemotorer, og det motiverer til god kode. Man vil også enklere få en meningsfull flyt"),(0,i.mdx)("p",null,(0,i.mdx)("img",{parentName:"p",src:"http://html5doctor.com/downloads/h5d-sectioning-flowchart.png",alt:"Flytskjema for hvordan man kan bruke semantiske HTML elementer"})),(0,i.mdx)("p",null,"På Mac kan man få en enkel oversikt over viktige semantiske elementer på siden ved å ta i bruk 'rotor' i VoiceOver. Se ",(0,i.mdx)("a",{parentName:"p",href:"/universell-utforming/skjermleser"},"guide til test av skjermleser"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-universell-utforming-essentials-uu-mdx-f2c58c832af7a7f71dd3.js.map