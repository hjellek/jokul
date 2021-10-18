"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4476],{5485:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return p}});var i,r=t(808),l=(t(7378),t(1368)),s=t(2803),a=["components"],o={},d=(i="Ingress",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),m={_frontmatter:o},g=s.Z;function p(e){var n=e.components,t=(0,r.Z)(e,a);return(0,l.mdx)(g,Object.assign({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(d,{mdxType:"Ingress"},"Internet Explorer (IE) har vært med oss i mange år, men nå kan vi endelig si ha det bra! I denne artikkelen vi jeg komme med et forslag til en implementasjon av en sperre du kan bruke i din applikasjon slik at vi kan fjerne støtten i Jøkul."),(0,l.mdx)("p",null,"Med mindre du har levd under en stein har du sikkert fått med deg at ",(0,l.mdx)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666"},"støtte for IE sakte men sikkert forsvinner"),".\nEdge har vært basert på Chromium fra mars 2021 så derfor kan du også legge inn en melding om dette. Teamene må selv bestemme hva de ønsker å gjøre med Edge, men vi anbefaler alle å legge inn melding om IE. Meldingen for IE vil bli seende slik ut:"),(0,l.mdx)("p",null,(0,l.mdx)("img",{parentName:"p",src:"/assets/blog/bye-ie.png",alt:"Bilde av IE-sperre"})),(0,l.mdx)("p",null,"Microsoft ",(0,l.mdx)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoft-edge/web-platform/ie-to-microsoft-edge-redirection"},"tilbyr funksjonalitet")," for automatisk videresending av brukere fra IE til Edge dersom nettstedet er registrert hos Microsoft som inkompatibelt med IE.\nVi i kundeklienter for privatmarkedet har tatt dette i bruk, men det ser av en eller annen grunn ikke ut som det fungerer. Du kan søke om å komme med på den listen, men jeg kan ikke love at det fungerer bra."),(0,l.mdx)("p",null,"Under kan du se implementasjonen av begge sperrene. Ta gjerne kontakt med meg dersom det er noe du lurer på, så skal jeg prøve å hjelpe :) Jeg kan også sende deg logo av typen SVG av Chrome, Firefox, Edge og Fremtind dersom du trenger det."),(0,l.mdx)("h2",null,"Oppskrift"),(0,l.mdx)("p",null,"Først legger du inn referanse til CSS- og JS-filene som en del av ",(0,l.mdx)("inlineCode",{parentName:"p"},"<head>")," i ",(0,l.mdx)("inlineCode",{parentName:"p"},"index_template.html")," eller tilsvarende:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<html lang="no">\n    <head>\n        {...}\n\n        <link rel="stylesheet" href="/styles/ie-melding.css" />\n        <script src="/scripts/ie-melding.js"><\/script>\n    </head>\n    <body>\n        <div id="root" class="jkl root-container">\n            {...}\n        </div>\n    </body>\n</html>\n')),(0,l.mdx)("p",null,"Og så oppretter du en JS-fil som heter ",(0,l.mdx)("inlineCode",{parentName:"p"},"ie-melding.js"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const isIe = window.navigator.userAgent.match(/(MSIE|Trident)/);\n\nconst ieMelding = `\n    <header>\n        <img alt="" src="/images/fremtind.svg" />\n    </header>\n    <main>\n        <h1\n            class="jkl-title-small title-text"\n        >\n            Vennligst benytt en annen nettleser\n        </h1>\n        <p class="jkl-lead lead-text">\n            Denne løsningen støtter ikke lenger Internet Explorer av hensyn til sikkerhet.\n            Hvis du ikke har en annen nettleser installert, kan du laste ned en av disse:\n        </p>\n        <ul class="browser-list">\n            <li class="browser-list__item">\n                <a href="https://www.google.com/chrome/" title="Google Chrome">\n                    <img alt="" src="/images/chrome.svg" />\n                    <span class="jkl-link">Google Chrome</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.mozilla.org/firefox/new/" title="Mozilla Firefox">\n                    <img alt="" src="/images/firefox.svg" />\n                    <span class="jkl-link">Mozilla Firefox</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.microsoft.com/nb-no/edge/" class="Microsoft Edge">\n                    <img alt="" src="/images/edge.svg" />\n                    <span class="jkl-link">Microsoft Edge</span>\n                </a>\n            </li>\n        </ul>\n    </main>\n    <footer>\n        <a\n            target="_blank"\n            href="https://kundeforsikring.sparebank1.no/privat/forsikring/open/selskapsinformasjon"\n            class="jkl-link jkl-link--negative jkl-desktop-small footer-link"\n            >© Fremtind Forsikring</a\n        >\n        <a\n            target="_blank"\n            href="https://www.fremtind.no/personvern/"\n            class="jkl-link jkl-link--negative jkl-desktop-small footer-link"\n            >Personvern og vilkår for bruk av nettsiden</a\n        >\n    </footer>\n`;\n\nconst isOldEdge = window.navigator.userAgent.toLowerCase().indexOf(\'edge\') > -1; // old MS edge\n\nconst oldEdgeMelding = `\n    <header>\n        <img alt="" src="/images/fremtind.svg" />\n    </header>\n    <main>\n        <h1 class="jkl-title-small title-text">\n            Vi ser at du bruker en utdatert nettleser\n        </h1>\n        <p class="jkl-lead lead-text">\n            Nettleseren er dataprogrammet du bruker når du besøker denne siden. Du bruker en\n            versjon av nettleseren Edge som er utdatert, og ikke lenger anses å være sikker. Denne siden vil derfor\n            ikke fungere i denne nettleseren. Vi anbefaler at du oppdaterer den eller bytter til en annen, som\n            Google Chrome eller Mozilla Firefox. Du kan laste ned siste versjon av disse nettleserne her:\n        </p>\n        <ul class="browser-list">\n            <li class="browser-list__item">\n                <a href="https://www.microsoft.com/nb-no/edge/" class="Microsoft Edge">\n                    <img alt="" src="/images/edge.svg" />\n                    <span class="jkl-link">Microsoft Edge</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.google.com/chrome/" title="Google Chrome">\n                    <img alt="" src="/images/chrome.svg" />\n                    <span class="jkl-link">Google Chrome</span>\n                </a>\n            </li>\n            <li class="browser-list__item">\n                <a href="https://www.mozilla.org/firefox/new/" title="Mozilla Firefox">\n                    <img alt="" src="/images/firefox.svg" />\n                    <span class="jkl-link">Mozilla Firefox</span>\n                </a>\n            </li>\n        </ul>\n    </main>\n\n`;\n\nconst callback = function () {\n    if (isIe || isOldEdge) {\n        const appRoot = document.getElementById(\'root\');\n        appRoot.classList.add(\'hide-app\');\n\n        const ieRoot = document.getElementById(\'ie-melding\');\n        if (isIe) {\n            ieRoot.innerHTML += ieMelding;\n        }\n        if (isOldEdge) {\n            ieRoot.innerHTML += oldEdgeMelding;\n        }\n        ieRoot.classList.add(\'vis-ie\');\n    }\n};\n\nif (\n    document.readyState === \'complete\' ||\n    (document.readyState !== \'loading\' && !document.documentElement.doScroll)\n) {\n    callback();\n} else {\n    document.addEventListener(\'DOMContentLoaded\', callback);\n}\n')),(0,l.mdx)("p",null,"og en CSS fil som heter ",(0,l.mdx)("inlineCode",{parentName:"p"},"ie-melding.css"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-css"},"body {\n    margin: 0;\n}\n\n#root.hide-app {\n    display: none !important;\n}\n\n#ie-melding {\n    height: 100vh;\n    flex-direction: column;\n}\n\n#ie-melding.vis-ie {\n    display: flex !important;\n}\n\n#ie-melding header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 81px;\n}\n\n#ie-melding.ie-melding--dnb header,\n#ie-melding.ie-melding--sb1 header {\n    border-bottom: 1px solid #b8b8b8;\n}\n\n#ie-melding main {\n    flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    max-width: 92ch;\n    min-height: 500px;\n    padding-left: 104px;\n}\n\n#ie-melding footer {\n    background-color: black;\n    min-height: 152px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#ie-melding footer .footer-link {\n    margin-right: 24px;\n    color: white;\n}\n\n#ie-melding .title-text {\n    padding-bottom: 24px;\n    padding-top: 64px;\n}\n\n#ie-melding .lead-text {\n    padding-bottom: 40px;\n}\n\n#ie-melding .browser-list {\n    padding-inline-start: 0;\n    display: flex;\n    list-style: none;\n    width: 100%;\n}\n\n#ie-melding .browser-list__item {\n    padding-right: 64px;\n}\n\n#ie-melding .browser-list__item a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: inherit;\n    text-decoration: inherit;\n}\n\n#ie-melding .browser-list__item img {\n    height: 80px;\n    width: 80px;\n    margin-bottom: 21px;\n}\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-blog-bye-ie-mdx-8511ac6352de5ef491a2.js.map