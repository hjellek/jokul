(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8271],{4431:function(e,r,t){"use strict";t.r(r),t.d(r,{_frontmatter:function(){return C},default:function(){return R}});var n=t(120),l=t(7378),i=t(1368),o=t(2803),a=t(5414),s=t(4626),d=t(5259);function m(e,r,t){t.set(e&&r?e/r:0)}var u,k=t(9556),g=t(8432);function p(){return{xOffset:window.pageXOffset,yOffset:window.pageYOffset,xMaxOffset:document.body.clientWidth-window.innerWidth,yMaxOffset:document.body.clientHeight-window.innerHeight}}var f=!1;function v(){if(f=!0,"undefined"!=typeof window){var e,r,t,n=(e=u,r=p,(t=function(){var t=r(),n=t.xOffset,l=t.yOffset,i=t.xMaxOffset,o=t.yMaxOffset;e.scrollX.set(n),e.scrollY.set(l),m(n,i,e.scrollXProgress),m(l,o,e.scrollYProgress)})(),t);(0,k.E)(window,"scroll",n,{passive:!0}),(0,k.E)(window,"resize",n)}}function c(){return u||(u={scrollX:(0,d.B)(0),scrollY:(0,d.B)(0),scrollXProgress:(0,d.B)(0),scrollYProgress:(0,d.B)(0)}),(0,g.L)((function(){!f&&v()}),[]),u}var b=t(3503),x=t(3968),h=function(e){return function(e){return"object"==typeof e&&e.mix}(e)?e.mix:void 0};var j=t(2716),y=t(9525);var B=t(5786);function w(e,r){var t=function(e){var r=(0,y.h)((function(){return(0,d.B)(e)}));if((0,l.useContext)(j._).isStatic){var t=(0,b.CR)((0,l.useState)(e),2)[1];(0,l.useEffect)((function(){return r.onChange(t)}),[])}return r}(r()),n=function(){return t.set(r())};return n(),function(e,r){(0,l.useEffect)((function(){var t=e.map((function(e){return e.onChange(r)}));return function(){return t.forEach((function(e){return e()}))}}))}(e,(function(){return B.ZP.update(n,!1,!0)})),t}function _(e,r,t,n){var l="function"==typeof r?r:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=!Array.isArray(e[0]),n=t?0:-1,l=e[0+n],i=e[1+n],o=e[2+n],a=e[3+n],s=(0,x.s)(i,o,(0,b.pi)({mixer:h(o[0])},a));return t?s(l):s}(r,t,n);return Array.isArray(e)?E(e,l):E([e],(function(e){var r=(0,b.CR)(e,1)[0];return l(r)}))}function E(e,r){var t=(0,y.h)((function(){return[]}));return w(e,(function(){t.length=0;for(var n=e.length,l=0;l<n;l++)t[l]=e[l].get();return r(t)}))}var P=t(7235),F=t(3804),N=t(3704),V=function(e){var r=e.media,t=e.rightAlign,n=e.caption,i=e.children,o=(0,l.useContext)(N.R).prefersReducedMotion,a=(0,l.useState)(0),s=a[0],d=a[1],m=(0,l.useState)(!1),u=m[0],k=m[1],g=(0,l.useRef)(null),p=(0,l.useRef)(null),f=c().scrollY;(0,l.useLayoutEffect)((function(){var e=g.current;e&&d(e.offsetTop)}),[g]),(0,F.S1)(p,(function(e){return k(e.some((function(e){return e.isIntersecting})))}),(function(){}),{rootMargin:"-175px 0px",threshold:[0,1]});var v=_(f,[s,s+1],[0,-.3],{clamp:!1}),b=((null==i?void 0:i.toString())||"").length>90;return l.createElement("div",{ref:g,className:"jkl-portal-media-box "+(t?"jkl-portal-media-box--right":"")},l.createElement(P.E.figure,{ref:p,className:"jkl-portal-media-box__media "+(u?"jkl-portal-media-box__media--in-view":"")},r,n&&l.createElement("figcaption",{className:"jkl-micro jkl-portal-media-box__caption"},n)),l.createElement(P.E.div,{style:{y:o?0:v},className:"jkl-portal-media-box__card "+(b?"jkl-portal-media-box__card--long-text":"")},l.createElement("p",{className:b?"jkl-body":"jkl-heading-2"},i)))},O=["asset","alt"],S=function(e){var r=e.asset,t=e.alt,i=(0,n.Z)(e,O),o=(0,a.useStaticQuery)("1443783579").allImageSharp.nodes.find((function(e){return e.fluid.originalName===r}));return o?l.createElement(V,Object.assign({media:l.createElement(s.G,{image:o.gatsbyImageData,alt:t})},i)):null},T=function(e){var r=e.title,t=e.children,n=(0,a.useStaticQuery)("1916102894");return l.createElement("div",{className:"jkl-portal-fullView"},l.createElement("div",{className:"jkl-portal-hero"},n&&l.createElement(s.G,{image:n.file.childImageSharp.gatsbyImageData,className:"",alt:"Fjellandskap"}),l.createElement("button",{onClick:function(){var e;return null===(e=window)||void 0===e?void 0:e.scrollBy({top:window.innerHeight,behavior:"smooth"})},className:"jkl-portal-hero__card"},l.createElement("h1",{className:"jkl-title jkl-spacing--bottom-2"},r),l.createElement("p",{className:"jkl-body"},t),l.createElement("div",{className:"jkl-portal-hero__card__arrow jkl-title-small jkl-spacing--top-1"},"↓"))))},D=["src","placeholder"],H=function(e){var r=e.src,t=e.placeholder,i=(0,n.Z)(e,D);return l.createElement(V,Object.assign({media:l.createElement("video",{className:"jkl-portal-media-box__video",src:(0,a.withPrefix)(r),poster:(0,a.withPrefix)(t),autoPlay:!0,muted:!0,loop:!0,tabIndex:-1})},i))},I=["components"],C={},M={_frontmatter:C},A=o.Z;function R(e){var r=e.components,t=(0,n.Z)(e,I);return(0,i.mdx)(A,Object.assign({},M,t,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)(T,{title:"Bildebruk",mdxType:"HeroImage"},"Vi bruker bilder som virkemidler til å skape en stemning, understreke et poeng eller hjelpe brukeren med å navigere i våre løsninger. Vi skal bruke bilder fremfor illustrasjoner og ikoner. Bruk bilder fra vår bildebank når du skal bruke bilder i våre løsninger eller i en presentasjon."),(0,i.mdx)("h2",null,"Dette bør du tenke gjennom når du velger et bilde:"),(0,i.mdx)("p",null,"Passer bildet med Fremtinds visjon? Hjelper bildet brukeren å forstå det du kommuniserer? Viser bildet produktet\neller tjenesten på en god måte? Tilfører bildet verdi til innholdet? Hva slags virkning har bildet på\nmottakeren?"),(0,i.mdx)("div",{style:{paddingBottom:"15vh"}}),(0,i.mdx)("h2",null,"Fotostil"),(0,i.mdx)("p",null,"Fremtind har en todelt fotostil. Vi står enten på toppen av tinden, med full oversikt, eller på bakkeplan sammen med menneskene. Fotostilen er ærlig, ekte og upolert. Den er hverdagslig og jordnær, nettopp for å gi brukerne våre noe de kan kjenne seg igjen i. Fordi fargene vi bruker er nøkterne og stilrene, vil fotografier utdype identiteten med varme og følelser. Bruk gjerne bilder som henter farger fra Fremtinds støttefargepallett."),(0,i.mdx)("p",null,"Bildene viser landskap eller situasjoner med mennesker i vante omgivelser. Vi unngår å bruke stockfoto eller oppstilte bilder, og vi bruker bilder av produkter med omhu."),(0,i.mdx)("p",null,"I all hovedsak:"),(0,i.mdx)(S,{alt:"Fugleperspektiv av blåturkis sjø som bryter inn mot sandstrand",asset:"beach.jpg",caption:"Husk å kreditere rettighetseier",mdxType:"PictureBox"},"Bruk bilder tatt rett ovenfra eller rett forfra."),(0,i.mdx)(S,{alt:"Mennesker i retromoderne og industrielt kaféinteriør",asset:"cafe.jpg",rightAlign:!0,mdxType:"PictureBox"},"Velg upolerte og hverdagslige bilder."),(0,i.mdx)(S,{alt:"Sommerfoto. Smilende mørkhåret jente med rosa blomster uskarpt i bakgrunnen.",asset:"kid.jpg",mdxType:"PictureBox"},"Formidle varme og følelser."),(0,i.mdx)(S,{alt:"Fargerike golfballer og golfkølle på grønt gress",asset:"minigolf.jpg",rightAlign:!0,mdxType:"PictureBox"},"Bruk foto fremfor illustrasjoner og ikoner."),(0,i.mdx)(S,{alt:"Mor og baby mot naturbakgrunn ved soloppgang",asset:"mom.jpg",mdxType:"PictureBox"},"Velg landskap eller mennesker i omgivelser folk kan kjenne seg igjen i."),(0,i.mdx)("div",{style:{paddingBottom:"15vh"}}),(0,i.mdx)("h2",null,"Hvordan velge bilde?"),(0,i.mdx)("p",null,"Når vi snakker om et konkret forsikringsprodukt, kan det være vanskelig å finne bilder som passer perfekt. Her er noen tips og retningslinjer for de ulike forsikringene. Felles for kategoribildene er at vi ønsker å fokusere på en situasjon som oppstår rundt eller i samspill med produktet, i stedet for selve produktet."),(0,i.mdx)("div",{style:{paddingBottom:"15vh"}}),(0,i.mdx)(S,{alt:"Interiørfoto av gutt som ser på smarttelefon foran PC og nettbrett",asset:"schoolkid.jpg",mdxType:"PictureBox"},(0,i.mdx)("b",null,"Skadeforsikring"),(0,i.mdx)("br",null),"Vi viser folk og tingene deres i samspill, heller enn å ta bilde av et produkt."),(0,i.mdx)(S,{alt:"Bilinteriør.Kvinne som kjører bil i by. Øynene vises i bakspeilet",asset:"driver.jpg",rightAlign:!0,mdxType:"PictureBox"},(0,i.mdx)("b",null,"Bilforsikring"),(0,i.mdx)("br",null),"Bruk bilder av situasjoner i og rundt bilen. I trafikken, ved av- og pålessing, av folk og ting i nærheten av bilen, eller når de steller bilen sin. Kan hende pakker de til ferie, henter på trening, er på handletur eller vasker bilen. Situasjonen er viktigere enn bilen, bildet skal ikke oppfattes som reklame for en bestemt biltype. Vær oppmerksom på at bilen skal kjøre på norske veier."),(0,i.mdx)(S,{alt:"Kvinne med trillekoffert foran rødt tog på jernbanestasjon",asset:"togpendler.jpg",mdxType:"PictureBox"},(0,i.mdx)("b",null,"Reiseforsikring"),(0,i.mdx)("br",null),"Når det gjelder reiseforsikring kan vi bruke bilder fra utlandet, men da gjerne i typiske situasjoner man havner i som turist. Her kan vi appellere til ulike typer, for eksempel den eventyrlystne, storbyturisten, solslikkeren eller den lokale turisten.",(0,i.mdx)("br",null),(0,i.mdx)("br",null)," Merk: Fremtind er et bærekraftig selskap og vi unngår å bruke bilder av fly, cruiseskip eller aktiviteter som ødelegger natur eller lokalsamfunn."),(0,i.mdx)(S,{alt:"Hundevalp på et pledd i en sofa",asset:"dogs.jpg",rightAlign:!0,mdxType:"PictureBox"},(0,i.mdx)("b",null,"Dyreforsikring"),(0,i.mdx)("br",null),"Dyr har sin egen personlighet og de kan gjerne eie bildet alene, men det er også fint å vise samspillet mellom dyr og mennesker. Dyr egner seg fint til bilder tatt “rett ovenfra”."),(0,i.mdx)("div",{style:{paddingBottom:"15vh"}}),(0,i.mdx)("h2",null,"Lys og farger"),(0,i.mdx)("p",null,"Vi vil at atmosfæren i bildene skal virke inviterende og virkelighetsnær. For å skape det bruker vi dagslys, eller naturlig lyssetting og fargekorrigering. Vi bruker ikke effekter eller filtre på bildene våre. Alle bildene i Fremtinds bildedatabase er redigert og fargekorrigert, slik at de oppfyller kravene til bildestilen. De skal oppleves som like"),(0,i.mdx)("div",{style:{paddingBottom:"15vh"}}),(0,i.mdx)(H,{src:"/assets/video/marius-compressed.mp4",placeholder:"/assets/img/marius.jpg",mdxType:"VideoBox"},(0,i.mdx)("b",null,"Bevegelse"),(0,i.mdx)("br",null)," For å skape ekstra liv kan man legge på enkle effekter som parallakse, uskarphet og elevasjon. Vi kan også bruke animerte bilder, så lenge animasjonen tilfører noe og ikke oppleves som forstyrrende."),(0,i.mdx)("div",{style:{paddingBottom:"15vh"}}),(0,i.mdx)("h2",null,"Responsivitet"),(0,i.mdx)("p",null,"Bildene vil ofte brukes på responsive nettsider. Det betyr at både format og størrelse kan bli endret, og andre elementer kan bytte plass i forhold til bildet. Hvis vi bruker godt med rom rundt hovedmotivet i bildet, blir det lettere å plassere designelementer over bildet. Da får vi også et sikkerhetsrom rundt hovedmotivet, slik at det ikke blir beskåret når vi skalerer."),(0,i.mdx)("h3",null,"Overlappende elementer"),(0,i.mdx)("p",null,"Vi kan legge andre elementer oppå bilder så lenge vi sørger for at kontrasten er ivaretatt. Pass på at det elementet som overlapper bildet ikke dekker over hovedmotivet."),(0,i.mdx)("h2",null,"Bildebank"),(0,i.mdx)("p",null,"I Fremtind har vi en bildebank, den finner du på intranettet. Ikke bruk bilder vi ikke har lisens på og husk fotokreditering der det kreves."))}R.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-profile-picture-mdx-21a40a2b9f1db209a1a8.js.map