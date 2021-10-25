"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8899],{49503:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return y},default:function(){return M}});var a=n(30808),l=n(27378),o=n(81368),r=n(62803),i=n(71127),m=n(70897),s=n(5844),c=n(76139),p=n(62384),u=n(76328),g=function(e){var t=e.onSubmit,n=(0,l.useState)(!0),a=n[0],o=n[1],r=(0,l.useContext)(s.Ui),i=r.darkMode,g=r.isCompact,d=(0,c.cI)(),f=d.register,b=d.handleSubmit,k=d.formState,v=function(){o(!0),t(!1)},E=f("fornavn",{required:!0}),x=f("etternavn",{required:!0}),j=f("personnummer",{required:!0,maxLength:11,minLength:11,pattern:/^[0-9]*$/});return l.createElement("form",{onSubmit:b((function(){o(!1),t(!0)}))},l.createElement(u.__,{standAlone:!0,variant:"large",className:g?"jkl-spacing-l--bottom":"jkl-spacing-xl--bottom"},"Første steg"),l.createElement(p.oi,Object.assign({className:g?"jkl-spacing-l--bottom":"jkl-spacing-xl--bottom",label:"Fornavn",errorLabel:k.errors.fornavn?"Du må fylle inn fornavn":"",inverted:i,forceCompact:g},E,{onChange:function(e){E.onChange(e),v()},variant:"small"})),l.createElement(p.oi,Object.assign({className:g?"jkl-spacing-l--bottom":"jkl-spacing-xl--bottom",label:"Etternavn",errorLabel:k.errors.etternavn?"Du må fylle inn etternavn":"",inverted:i,forceCompact:g},x,{onChange:function(e){x.onChange(e),v()},variant:"small"})),l.createElement(p.oi,Object.assign({className:g?"jkl-spacing-l--bottom":"jkl-spacing-xl--bottom",label:"Personnummer",errorLabel:k.errors.personnummer?"Du må fylle inn personnummer":"",helpLabel:"Vi lagrer ikke ditt personnummer",inverted:i,forceCompact:g,maxLength:11,type:"tel",placeholder:"11 siffer"},j,{onChange:function(e){j.onChange(e),v()},variant:"small"})),a&&l.createElement(m.KM,{forceCompact:g,inverted:i,className:g?"jkl-spacing-l--bottom":"jkl-spacing-xl--bottom"},"Gå videre"))},d=n(17235),f=n(73804),b=n(89158),k=n(62863),v=function(e){var t=e.onSubmit,n=(0,l.useState)(!0),a=n[0],o=n[1],r=(0,l.useContext)(s.Ui),u=r.darkMode,g=r.isCompact,v=(0,c.cI)(),E=v.register,x=v.handleSubmit,j=v.formState,h=v.watch,y=(0,l.useRef)(null),C=(0,l.useRef)(null);(0,f.gE)({ref:y});var S=h("postnummer"),N=function(){o(!0),t(!1)},_=E("postnummer",{required:!0,maxLength:4,minLength:4,pattern:/^[0-9]*$/}),L=E("streetName",{required:!0});return l.createElement(d.E.form,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onSubmit:x((function(){o(!1),t(!0)})),style:{position:"relative"}},l.createElement("aside",{style:{position:"absolute",top:"-150px"},ref:y}),l.createElement(b.$J,{title:"Fant ikke addresse",fullWidth:!0,className:"jkl-spacing-"+(g?"2xl":"3xl")+"--top jkl-spacing-l--bottom"},"Vi fant ikke addressen din i vår database. Fortell oss hvor du bor."),l.createElement("div",{className:"jkl-simple-form__postal-group"},l.createElement(p.oi,Object.assign({variant:"large",label:"Postnummer",className:g?"jkl-spacing-l--bottom":"jkl-spacing-xl--bottom",errorLabel:j.errors.postnummer?"Du må fylle inn postnummer":"",inverted:u,forceCompact:g,maxLength:6,placeholder:"4 siffer",type:"tel"},_,{onChange:function(e){_.onChange(e),N()}})),l.createElement(i.M,null,4===(null==S?void 0:S.toString().length)&&l.createElement(d.E.p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"jkl-simple-form__postal-group__area "+(g?"jkl-spacing-l--bottom":"jkl-spacingls--bottom")},"Geilo"))),l.createElement(i.M,null,4===(null==S?void 0:S.toString().length)&&l.createElement(d.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},l.createElement(p.oi,Object.assign({variant:"medium",label:"Gatenavn",className:g?"jkl-spacing-l--bottom":"jkl-spacing-xl--bottom",errorLabel:j.errors.streetName?"Du må fylle inn gateadresse":"",inverted:u,forceCompact:g,type:"text"},L,{onChange:function(e){L.onChange(e),N()}})))),l.createElement(i.M,null,4===(null==S?void 0:S.toString().length)&&l.createElement(d.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},ref:C},l.createElement(k.P,{className:"jkl-simple-form__postal-group__house-number "+(g?"jkl-spacing-l--bottom":"jkl-spacingls--bottom"),items:["1","3","5","7","9"],label:"Nummer"}))),a&&l.createElement(m.KM,{forceCompact:g,inverted:u,className:g?"jkl-spacing-l--bottom":"jkl-spacing-xl--bottom"},"Gå videre"))},E=n(56058),x=function(e){var t=e.onSubmit,n=(0,l.useContext)(s.Ui),a=n.darkMode,o=n.isCompact,r=(0,l.useState)(),c=r[0],p=r[1],u=(0,l.useRef)(null);return(0,f.gE)({ref:u}),l.createElement(d.E.form,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onSubmit:function(e){e.preventDefault(),t()},style:{position:"relative"}},l.createElement("aside",{style:{position:"absolute",top:"-150px"},ref:u}),l.createElement(E.G,{choices:["Enebolig","Tomannsbolig","Rekkehus","Leilighet"],legend:"Hvilken boligtype?",name:"housetype",onChange:function(e){return p(e.target.value)},selectedValue:c,className:o?"jkl-spacing-l--bottom jkl-spacing-xl--top":"jkl-spacing-xl--bottom jkl-spacing-2xl--top",variant:"large"}),l.createElement(i.M,null,"Enebolig"===c&&l.createElement(d.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:o?"jkl-spacing-l--bottom":"jkl-spacing-xl--bottom"},l.createElement(b.Bc,{title:"Vi forsikrer ikke eneboliger"},"Fordi vi ville vise en alternativ sti her så har vi lagt inn denne tulleregelen. Kontakt nærmeste person for å få vite mer om dette."))),"Enebolig"!==c&&l.createElement(m.KM,{forceCompact:o,inverted:a,className:o?"jkl-spacing-l--bottom":"jkl-spacing-xl--bottom"},"Gå videre"))},j=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1],a=(0,l.useState)(!1),o=a[0],r=a[1],c=(0,l.useContext)(s.Ui).registerKnobs;return(0,l.useEffect)((function(){c&&c([l.createElement(m.C9,{onClick:function(){return location.reload()},key:"reset"},"Reset")])}),[c]),l.createElement("section",null,l.createElement("h1",{className:"jkl-title jkl-spacing-2xl--top jkl-spacing-xl--bottom"},"Liksomskjema"),l.createElement("p",{className:"jkl-heading-2 jkl-spacing-xl--bottom"},"Har du husforsikring får du erstatning slik at du kan reparere eller bygge nytt hvis noe skjer med boligen din."),l.createElement(g,{onSubmit:n}),l.createElement(i.M,null,t&&l.createElement(v,{onSubmit:r})),l.createElement(i.M,null,o&&l.createElement(x,{onSubmit:function(){return console.log("yeah")}})))},h=["components"],y={},C=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},S=C("Ingress"),N=C("FlowExample"),_={_frontmatter:y},L=r.Z;function M(e){var t=e.components,n=(0,a.Z)(e,h);return(0,o.mdx)(L,Object.assign({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",null,"Eksempler"),(0,o.mdx)(S,{mdxType:"Ingress"},"Her finner du eksempler på hvordan du kan bruke Jøkul"),(0,o.mdx)("h2",null,"Enkelt skjema"),(0,o.mdx)(N,{mdxType:"FlowExample"},(0,o.mdx)(j,{mdxType:"SimpleForm"})))}M.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-getstarted-examples-mdx-ce7da6379659d7b856df.js.map