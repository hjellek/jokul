"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7824],{7087:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return k},default:function(){return y}});var t=n(808),l=n(7378),r=n(1368),s=n(2803);var i,o=["component-spacing--xxs","component-spacing--xs","component-spacing--small","component-spacing--medium","component-spacing--large","component-spacing--xl","component-spacing--xxl","component-spacing--giant"],p=["layout-spacing--xs","layout-spacing--small","layout-spacing--medium","layout-spacing--large","layout-spacing--xl","layout-spacing--xxl"],m=function(e){var a=e.spacing,n=(0,l.useState)("N/A"),t=n[0],r=n[1],s="N/A"!==t?parseInt(t)/16:t;return l.createElement("tr",{className:"jkl-portal-spacing-example-table__row"},l.createElement("td",{"data-header":"Spacing:",className:"jkl-portal-spacing-example-table__data"},l.createElement("div",{className:"jkl-"+a+"-top",style:{display:"none"},ref:function(e){r(function(e,a){var n,t;return e&&(null===(n=window)||void 0===n||null===(t=n.getComputedStyle(e))||void 0===t?void 0:t.getPropertyValue(a))||"N/A"}(e,"margin-top"))}}),l.createElement("div",{"aria-label":a+",  "+t,style:{backgroundColor:"currentColor",width:s+"rem",height:s+"rem"},title:t})),l.createElement("td",{"data-header":"Variabel:",className:"jkl-portal-spacing-example-table__data"},l.createElement("code",{className:"jkl-portal-inline-code"},"$",a)),l.createElement("td",{"data-header":"Klasse:",className:"jkl-portal-spacing-example-table__data"},l.createElement("code",{className:"jkl-portal-inline-code"},".jkl-"+a+"-<top|right|bottom|left|all>")))},c=function(e){var a=e.values;return l.createElement("table",{className:"jkl-portal-spacing-example-table"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Spacing"),l.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Variabel"),l.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Klasse"))),l.createElement("tbody",null,a.map((function(e,a){return l.createElement(m,{key:a,spacing:e})}))))},d=function(){return l.createElement(c,{values:o})},u=function(){return l.createElement(c,{values:p})},g=["components"],k={},x=(i="Ingress",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),b={_frontmatter:k},f=s.Z;function y(e){var a=e.components,n=(0,t.Z)(e,g);return(0,r.mdx)(f,Object.assign({},b,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(x,{mdxType:"Ingress"},"Vi tilbyr Sass-variabler og utility-klasser for verdiene i spacing-skalaene til Jøkul."),(0,r.mdx)("h2",null,"Bruk"),(0,r.mdx)("p",null,"Det er to spacing-skalaer i Jøkul; en til bruk innad i komponenter og en til bruk i layout og flyt. Du kan bruke skalaene ved hjelp av Sass-variabler du kan sette inn i ditt eget stilark, eller bruke hjelpeklassene direkte på elementer i koden."),(0,r.mdx)("p",null,"Variablene importerer du fra ",(0,r.mdx)("inlineCode",{parentName:"p"},"@fremtind/jkl-core/variables/_spacing.scss"),". Husk å bruke riktig importsyntaks for byggverktøyet ditt når du importerer. De kan da brukes slik:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},'@import "~@fremtind/jkl-core/variables/_spacing.scss";\n\n.jkl-your-component {\n    padding-left: $component-spacing--medium;\n}\n')),(0,r.mdx)("p",null,"Utility-klassene setter en verdi fra spacingskalaene som margin på elementet som har klassen. Det finnes varianter for å sette margin på ",(0,r.mdx)("inlineCode",{parentName:"p"},"top"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"right"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"bottom")," og ",(0,r.mdx)("inlineCode",{parentName:"p"},"left"),", samt for ",(0,r.mdx)("inlineCode",{parentName:"p"},"all"),"e sider. Klassene kan brukes slik:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},'<div class="jkl-layout-spacing--xl-all">\n    <span class="jkl-layout-spacing--small-right">Hallo</span>\n    verden\n</div>\n')),(0,r.mdx)("div",{className:"jkl-layout-spacing--xl-top"}),(0,r.mdx)("h3",null,"Komponentskala"),(0,r.mdx)(d,{mdxType:"ComponentSpacingTable"}),(0,r.mdx)("h3",null,"Layoutskala"),(0,r.mdx)(u,{mdxType:"LayoutSpacingTable"}))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-core-documentation-spacing-mdx-f58274c0d4e58eff7c3d.js.map