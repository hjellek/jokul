"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5671],{6396:function(e,r,t){t.r(r),t.d(r,{_frontmatter:function(){return m},default:function(){return s}});var n=t(7077),l=(t(7378),t(1368)),i=t(2803),a=["components"],m={},d={_frontmatter:m},o=i.Z;function s(e){var r=e.components,t=(0,n.Z)(e,a);return(0,l.mdx)(o,Object.assign({},d,t,{components:r,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Dette er første oppdateringspost fra Jøkul. Planen er at det kommer flere av disse med jevne mellomrom, så blir det forhåpentligvis lettere å følge med på hva som skjer med Jøkul."),(0,l.mdx)("h2",null,"📰 Oppdateringer"),(0,l.mdx)("p",null,"Før fellesferien tok oss ut til Prekestolen, Loen og Lofoten med bil, hadde vi en sprint med fokus på portalen. Målet var å få på plass dokumentasjon av alle nøkkelverdier som ikke var dokumentert tidligere. Bildebruk, bevegelse, spacing og typografi har fått både bruk og variabler dokumentert. Både for utviklere og designere. "),(0,l.mdx)("p",null,"For pakkene våre har det ikke skjedd de største endringene, men det er gjort en del forbedringer og optimaliseringer. Eneste breaking change iløpet av siste periode er at det er lagt til forwardRef for checkbox, gitt at man ikke har gjort noe spesielt med checkbox komponenten, så innebærer det ingen endring. Men det betyr at man nå kan sette referanse på checkbox, og det vil peke på det riktige input-elementet. "),(0,l.mdx)("h2",null,"🌱 Releaser"),(0,l.mdx)("h3",null,"Pakker"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1140"},"💡 Mindre pakkestørrelser"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Simen gjorde et grundig stykke arbeid graving i byggingen av både portal og pakkene våre. Ved å optimalisere byggprosessen ble pakkestørrelsen redusert med 15-40%. Også portalens bundle ble redusert med ca 30%."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1103"},"✏️ Støtte for ref i checkbox"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Er breaking change fordi checkbox komponenten nå blir pakket inn i en forwardRef, for de fleste vil det fortsatt virke som normalt."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1093"},"✏️ Farger som utility klasser"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Både spacing og farger er nå tilgjengelige som utilityklasser, så de enkleste stilene kan nå oppnåes uten å måtte skrive egen css.")))),(0,l.mdx)("h3",null,"Portalen"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1078"},"🧪 Itegrasjonstester i portalen")),(0,l.mdx)("li",{parentName:"ul"},"📚 Dokumentasjon av farger"),(0,l.mdx)("li",{parentName:"ul"},"📚 Dokumentasjon av spacing"),(0,l.mdx)("li",{parentName:"ul"},"📚 Dokumentasjon av typografi"),(0,l.mdx)("li",{parentName:"ul"},"📚 Ny bildebruk side"),(0,l.mdx)("li",{parentName:"ul"},"💅 Responsiv meny"),(0,l.mdx)("li",{parentName:"ul"},"💅 Sideoverganger og animasjoner")),(0,l.mdx)("h2",null,"🔮 Kommende"),(0,l.mdx)("p",null,"I perioden fremover ligger det enkelte forbedringer i pakkene, oppdatering av design til nyeste stilen og bugfixer. Det jobbes også med en mer robust hosting løsning via Vercel som feks også vil vi preview av PR, som vil gjøre det mye enklere for designere å verifisere endringer i kode."),(0,l.mdx)("h3",null,"Pakker"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1139"},"🦽 Hook for reduced motion"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Løser bug ved reduced motion for komponenter som bruker useAnimation hooken, og tilgjengeliggjør reduced motion OS-settingen for oss i js-kontekst. Brukes feks til å fjerne paralax effekt og andre større animasjoner for brukere som ikke ønsker det. Blir viktig for kundefacing applikasjoner som benytter seg av animasjoner og fortsatt bevare god brukeropplevelse for alle brukere."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1153"},"⚰️ Fjerne divider line"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Divider line fant seg aldri plass i Figma, så dermed ble den aldri ordentlig tatt i bruk heller. Så for nå blir den fjernet.  "))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1154"},"💅 Oppdatert design Accordion"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Accordion med tidlig utgave av designet får et løft og darkmode støtte"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/issues/1167"},"💅 Oppdatert design på lenker"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Lenker med tidlig utgave av designet får et løft og darkmode støtte")))),(0,l.mdx)("h3",null,"Portalen"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul/pull/1142"},"Grupering i sidemenyen"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Nå som både utilityklasser, hooks og valideringsregler dokumenteres under komponentersiden, så begynner det bli vanskelig å holde oversikten.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-blog-updates-august-2020-mdx-bd7f09e323466ec4e5de.js.map