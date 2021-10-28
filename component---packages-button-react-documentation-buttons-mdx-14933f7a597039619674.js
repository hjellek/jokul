"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5766],{99027:function(e,n,t){t.d(n,{KM:function(){return p},kq:function(){return u},C9:function(){return c}});var o=t(30808),r=t(27378),a=t(90382),l=t.n(a),i=t(33661),s=(0,r.forwardRef)((function(e,n){return r.createElement("button",Object.assign({},e,{ref:n}))}));s.displayName="BaseButton";var d=["children","className","forceCompact","inverted","onClick","onTouchStart","loader"],m=function(e){return(0,r.forwardRef)((function(n,t){var a=n.children,m=n.className,p=void 0===m?"":m,u=n.forceCompact,c=n.inverted,k=n.onClick,g=n.onTouchStart,v=n.loader,h=(0,o.Z)(n,d),x=l()("jkl-button","jkl-button--"+e,p,{"jkl-button--compact":u,"jkl-button--inverted":c});return r.createElement(s,Object.assign({"aria-live":"polite",className:x,disabled:null==v?void 0:v.showLoader,onClick:k,onTouchStart:function(e){g&&g(e);var n=e.target;if(n&&e.targetTouches.length){var t=e.targetTouches[0].clientX-n.getBoundingClientRect().x,o=e.targetTouches[0].clientY-n.getBoundingClientRect().y;n.style.setProperty("--jkl-touch-xcoord",t.toPrecision(4)+"px"),n.style.setProperty("--jkl-touch-ycoord",o.toPrecision(4)+"px"),n.classList.add("jkl-button--pressed"),setTimeout((function(){return n.classList.remove("jkl-button--pressed")}),400)}}},h,{ref:t}),r.createElement("div",{className:l()("jkl-button__content",{"jkl-button__content--compact":u})},r.createElement("div",{className:l()("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==v||!v.showLoader)})},a,v&&r.createElement("div",{className:"jkl-button__loader"},r.createElement(i.a,{textDescription:v.textDescription,"aria-hidden":!!v.showLoader,variant:u?"small":"medium"})))))}))},p=m("primary"),u=m("secondary"),c=m("tertiary")},6856:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return v},default:function(){return L}});var o=t(30808),r=t(27378),a=t(81368),l=t(62803),i=t(99027),s=function(e){var n=e.boolValues,t=(0,r.useState)(!1),o=t[0],a=t[1],l={showLoader:o||!(null==n||!n.isLoading),textDescription:"Laster innhold"};return r.createElement(i.KM,{forceCompact:!(null==n||!n.Kompakt),inverted:!(null==n||!n.Invertert),loader:o||null!=n&&n.withLoader?l:void 0,className:"jkl-spacing-l--right",onClick:function(){console.log("Hello!"),a(!0),setTimeout((function(){a(!1)}),2200)}},"Lagre og send inn")},d=function(e){var n=e.boolValues;return"\n<PrimaryButton\n    forceCompact={"+!(null==n||!n.Kompakt)+"}\n    inverted={"+!(null==n||!n.Invertert)+"}\n    loader={"+(null!=n&&n.withLoader?"{\n        showLoader: "+!(null==n||!n.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n>\n    Lagre og send inn\n</PrimaryButton>\n'},m=function(e){var n=e.boolValues,t=(0,r.useState)(!1),o=t[0],a=t[1],l={showLoader:o||!(null==n||!n.isLoading),textDescription:"Laster innhold"};return r.createElement(i.kq,{forceCompact:n&&n.Kompakt,inverted:n&&n.Invertert,loader:o||null!=n&&n.withLoader?l:void 0,className:"jkl-spacing-l--right",onClick:function(){console.log("Hello!"),a(!0),setTimeout((function(){a(!1)}),2200)}},"Lagre")},p=function(e){var n=e.boolValues;return"\n<SecondaryButton\n    forceCompact={"+!(null==n||!n.Kompakt)+"}\n    inverted={"+!(null==n||!n.Invertert)+"}\n    loader={"+(null!=n&&n.withLoader?"{\n        showLoader: "+!(null==n||!n.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n>\n    Lagre\n</SecondaryButton>\n'},u=function(e){var n=e.boolValues,t=(0,r.useState)(!1),o=t[0],a=t[1],l={showLoader:o||!(null==n||!n.isLoading),textDescription:"Laster innhold"};return r.createElement(i.C9,{forceCompact:n&&n.Kompakt,inverted:n&&n.Invertert,loader:o||null!=n&&n.withLoader?l:void 0,className:"jkl-spacing-l--right",onClick:function(){console.log("Hello!"),a(!0),setTimeout((function(){a(!1)}),2200)}},"Avbryt")},c=function(e){var n=e.boolValues;return"\n<TertiaryButton\n    forceCompact={"+!(null==n||!n.Kompakt)+"}\n    inverted={"+!(null==n||!n.Invertert)+"}\n    loader={"+(null!=n&&n.withLoader?"{\n        showLoader: "+!(null==n||!n.isLoading)+',\n        textDescription: "Laster innhold"\n    }':"false")+'}\n    onClick={simulateLoading}\n    className="jkl-spacing-l--right"\n>\n    Avbryt\n</TertiaryButton>\n'},k=function(){return r.createElement("div",{className:"jkl-button-example"},r.createElement("div",null,r.createElement("a",{className:"jkl-button jkl-button--primary",href:"/komponenter/buttons#knapper-som-er-lenker"},"Send inn")),r.createElement("div",null,r.createElement("a",{className:"jkl-button jkl-button--secondary",href:"/komponenter/buttons#knapper-som-er-lenker"},"Lagre")),r.createElement("div",null,r.createElement("a",{className:"jkl-button jkl-button--tertiary",href:"/komponenter/buttons#knapper-som-er-lenker"},"Avbryt")))},g=["components"],v={},h=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)}},x=h("Ingress"),f=h("ComponentExample"),b=h("DoDontExample"),j={_frontmatter:v},y=l.Z;function L(e){var n=e.components,t=(0,o.Z)(e,g);return(0,a.mdx)(y,Object.assign({},j,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(x,{mdxType:"Ingress"},"Knapper starter en handling. Teksten på knappen forteller hva som vil skje når brukeren klikker på den."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Primærknapp:")," brukes til den viktigste handlingen på en side - hovedhandlingen. En side kan noen ganger ha mer enn en hovedhandling, men ikke mange."),(0,a.mdx)(f,{component:s,knobs:{boolProps:["Kompakt","Invertert","withLoader","isLoading"]},codeExample:d,mdxType:"ComponentExample"}),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Sekundærknapp:")," brukes til handlinger som ikke er like viktige for oss eller brukeren."),(0,a.mdx)(f,{component:m,knobs:{boolProps:["Kompakt","Invertert","withLoader","isLoading"]},codeExample:p,mdxType:"ComponentExample"}),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Tertiærknapp:")," brukes til handlinger som er mindre viktige, eller som kan gi uønskede konsekvenser."),(0,a.mdx)(f,{component:u,knobs:{boolProps:["Kompakt","Invertert","withLoader","isLoading"]},codeExample:c,mdxType:"ComponentExample"}),(0,a.mdx)("h2",null,"Lastemodus"),(0,a.mdx)("p",null,"Hvis du skal bruke lastemodus i knappen må du sørge for at ",(0,a.mdx)("inlineCode",{parentName:"p"},"@fremtind/jkl-loader/loader.min.css")," er lastet inn i klienten."),(0,a.mdx)("h2",null,"Knappetyper"),(0,a.mdx)("p",null,"Disse tre hovedknappetypene har et hierarki. Når brukeren har flere valg samtidig, skal vi kun ha én primærknapp."),(0,a.mdx)(b,{type:"do",description:"Kun én primærknapp",image:"/assets/do-donts/button-do-1.png",mdxType:"DoDontExample"}),(0,a.mdx)(b,{type:"dont",description:"Flere primærknapper",image:"/assets/do-donts/button-dont-1.png",mdxType:"DoDontExample"}),(0,a.mdx)("h2",null,"Tekst på knapper"),(0,a.mdx)("p",null,"Knappetekster skal være så enkle og korte som mulig og skal oppfordre til handling. Bruk helst bare to ord:"),(0,a.mdx)(i.KM,{className:"jkl-spacing-xl--right",mdxType:"PrimaryButton"},"Send inn"),(0,a.mdx)(i.kq,{className:"jkl-spacing-xl--right",mdxType:"SecondaryButton"},"Lagre"),(0,a.mdx)(i.C9,{className:"jkl-spacing-xl--right",mdxType:"TertiaryButton"},"Avbryt"),(0,a.mdx)("h2",null,"Knapper som er lenker"),(0,a.mdx)("p",null,"Avhengig av situasjonen kan det hende en knapp teknisk sett er et ",(0,a.mdx)("inlineCode",{parentName:"p"},"<a />"),"-element. Jøkul støtter å ha knappeklasser på ",(0,a.mdx)("inlineCode",{parentName:"p"},"<a />"),"."),(0,a.mdx)(f,{component:k,codeExample:'\n<div>\n    <a\n        className="jkl-button jkl-button--primary"\n        href="/komponenter/buttons#knapper-som-er-lenker"\n    >\n        Send inn\n    </a>\n</div>\n<div>\n    <a\n        className="jkl-button jkl-button--secondary"\n        href="/komponenter/buttons#knapper-som-er-lenker"\n    >\n        Lagre\n    </a>\n</div>\n<div>\n    <a\n        className="jkl-button jkl-button--tertiary"\n        href="/komponenter/buttons#knapper-som-er-lenker"\n    >\n        Avbryt\n    </a>\n</div>\n',mdxType:"ComponentExample"}))}L.isMDXComponent=!0},33661:function(e,n,t){t.d(n,{a:function(){return p}});var o=t(2398),r=t.n(o),a=t(22666),l=t.n(a),i=t(27378),s=t(90382),d=t.n(s),m=["variant","textDescription","className","dataTestAutoId","politeness"],p=function(e){var n=e.variant,t=void 0===n?"large":n,o=e.textDescription,a=e.className,s=e.dataTestAutoId,p=void 0===s?"jkl-loader":s,u=e.politeness,c=void 0===u?"polite":u,k=l()(e,m),g=d()("jkl-loader",a,{"jkl-loader--medium":"medium"===t,"jkl-loader--small":"small"===t});return i.createElement("span",r()({"aria-busy":"true","aria-label":o,"aria-live":c,className:g,"data-testautoid":p,"data-testid":"jkl-loader",role:"alert",title:o},k),i.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),i.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),i.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-button-react-documentation-buttons-mdx-14933f7a597039619674.js.map