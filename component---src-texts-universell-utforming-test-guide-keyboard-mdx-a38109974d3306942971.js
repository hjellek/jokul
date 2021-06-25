(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7480],{3865:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return d}});var l=t(120),r=(t(7378),t(1368)),a=t(2803),s=["components"],i={},k={_frontmatter:i},m=a.Z;function d(e){var n=e.components,t=(0,l.Z)(e,s);return(0,r.mdx)(m,Object.assign({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",null,"Tastaturnavigasjon"),(0,r.mdx)("p",null,"Vi anbefaler å teste tastaturnavigasjon med nettleseren du selv bruker mest. Dette fordi tastaturnavigasjon i stor grad enten fungerer eller ikke. Det er veldig marginale eller ingen forskjeller på hvordan tastaturnavigasjon fungerer på tvers av nettlesere og operativsystemer, med unntak av MacOS hvor standardinnstilling er at Tab ikke setter fokus på lenker."),(0,r.mdx)("p",null,"Bruk tastaturet til å navigere gjennom alle elementer på siden."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Bruk Tab og Shift+Tab for å navigere deg mellom elementer både forover og bakover")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Bruk piltastene for å navigere deg inne i valgte elementer, for eksempel i en nedtrekksliste eller mellom radioknapper")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Bruk Space til å ta et valg")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Bruk Enter for å aktivere et element"))),(0,r.mdx)("p",null,"Hvis du blir stående fast grunnet at du havner i en tastaturfelle: Klikk deg ut av fellen med musen og fortsett tastaturtesting fra neste element."),(0,r.mdx)("p",null,"Hvis du kommer til en knapp som viser/skjuler innhold (for eksempel en hamburgermeny): Åpne elementet med tastaturet og naviger deg gjennom innholdet på samme måte. Når du åpner et slik element skal de neste elementene i fokusrekkefølgen være innholdet inne i hovedelementet. Lukk så elementet og sjekk at du fortsatt er på riktig plassering på siden. Godkjent avvik her er at man må trykke Tab/Shift+Tab eller en piltast én gang for å komme tilbake til elementet som åpnet menyen."),(0,r.mdx)("h2",null,"Tastaturfeller"),(0,r.mdx)("p",null,"Bruk metoden beskrevet over for å navigere deg gjennom siden. Hvis du ikke kan fjerne fokus ved hjelp av piltaster eller Tab så er du i en tastaturfelle. En tastaturfelle et sted på siden, uansett hvor lite tilfelle, resulterer i feil på krav 2.1.2."),(0,r.mdx)("h2",null,"Fokushåndtering"),(0,r.mdx)("p",null,"Bekreft at elementer som er i fokus har en synlig fokustilstand. Synlig fokustilstand kan være en ramme, understreking, endring i bakgrunnsfarge eller annen form for utheving. Merk at farge aldri skal være eneste virkemiddel for å formidle informasjon. Ved bruk av Jøkul komponenter er det viktig å sørge for å kalle ",(0,r.mdx)("inlineCode",{parentName:"p"},"initTabListner")," ved oppstart av nettsiden, den setter Jøkul komponentene i riktig modus."),(0,r.mdx)("p",null,"Når man flytter fokus til et element skal det aldri resultere i overraskende oppførsel, for eksempel:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Automatisk innsending av skjema")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Åpne et nytt vindu")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Flytte fokus uten at bruker har trykket noe"))),(0,r.mdx)("h2",null,"Fokusrekkefølge"),(0,r.mdx)("p",null,"Fokusrekkefølgen skal ivareta betydning og betjening av siden. Dette er noe vagt, men kan tradisjonelt sees på som at elementer skal være fokuserbare fra venstre til høyre og fra topp til bunn."),(0,r.mdx)("p",null,"Et eksempel fra jøkul-portalen ser slik ut:"),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"/assets/uu/portal-taborder.png",alt:null})),(0,r.mdx)("p",null,"Merk at et usynlig element har fokusrekkefølge 1. Mer om dette elementet i avsnittet under."),(0,r.mdx)("h2",null,"Hoppe over blokker"),(0,r.mdx)("p",null,'Det skal være funksjonalitet som muliggjør å hoppe over store blokker av innhold. Spesielt viktig er det med en visuelt skjult knapp i header. Denne knappen skal være mulig å navigere til ved tastatur og skal kunne flytte fokus til hovedinnholdet på siden. Åpne siden i en ny fane for å være helt sikker på at fokus er nullstilt og naviger deg til denne "Hopp til innhold"-knappen. Den skal være blant de første tre Tab-stegene på siden.'),(0,r.mdx)("h2",null,"Skjema"),(0,r.mdx)("p",null,"Bruk metoden beskrevet under tastaturnavigasjon og test hele skjemaflyten. Alle elementer må testes enkeltvis. Er det mulig å ta et valg i datovelgeren kun ved hjelp av tastatur? Er det mulig å laste opp et vedlegg i filopplaster kun ved hjelp av tastatur? Fungerer knapper som de skal?"),(0,r.mdx)("h2",null,"Lenker"),(0,r.mdx)("p",null,"Lenker skal være en del av fokusrekkefølgen."),(0,r.mdx)("p",null,"Merk at her er det forskjeller på operativsystemer. Mac har som standardinnstilling at Tab ikke setter fokus på lenker. Dette resulterer i at Firefox og Safari oppfører seg annerledes enn forventet. Chrome ignorerer MacOS sin standardinnstilling og oppfører seg likt som på Windows."),(0,r.mdx)("h2",null,"Modal"),(0,r.mdx)("p",null,"En modal er et element som legger seg i forgrunn og skal ta alt fokus, slik at elementer i bakgrunnen ikke skal være mulig å navigere til. Det skal heller ikke gå å klikke på disse elementene med musen. Test at verken mus eller tastaturnavigasjon gjør at du kan bruke elementer i bakgrunn av modalen."),(0,r.mdx)("p",null,"Test så videre at alle elementene i modalen er navigerbare med tastatur. Vær obs på om det kan være en tastaturfelle, det må være mulig å lukke modalen i alle tilfeller."),(0,r.mdx)("h2",null,"Dialog"),(0,r.mdx)("p",null,"En dialog skiller seg fra en modal ved at innholdet i bakgrunnen ikke blir deaktivert, men det er like så viktig å sjekke at elementene i dialogen fungerer som de skal samt at det ikke skaper en tastaturfelle. Dialogen skal få fokus når den blir synlig."),(0,r.mdx)("p",null,"Helst skal dialogen lukkes hvis man flytter fokus utenfor, dersom dette ikke lar seg gjøre skal man i verste tilfelle kunne navigere seg på elementene utenfor dialogen også."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-universell-utforming-test-guide-keyboard-mdx-a38109974d3306942971.js.map