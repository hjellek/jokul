"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8790],{7167:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return b},default:function(){return g}});var n=a(7077),r=a(7378),l=a(1368),i=a(2803),s=a(897),c=a(382),o=a.n(c),d=function(e){var t=e.title,a=e.children,n=e.className,l=e.media,i=e.action,c=e.dark,d=e.clickable,m=o()("jkl-card",n,{"jkl-card--dark":c,"jkl-card--clickable":d}),k=s.KM;if(i)switch(i.type){case"secondary":k=s.kq;break;case"tertiary":k=s.C9}return r.createElement("div",{"data-testid":"jkl-card",className:m},l&&r.createElement("img",{className:"jkl-card__media",src:l.src,alt:l.alt}),t&&r.createElement("div",{"data-testid":"jkl-card__title",className:"jkl-card__title jkl-h3"},d?r.createElement("a",{className:"jkl-card__link",href:d.href,onClick:d.onClick},t):t),r.createElement("div",{className:"jkl-card__children"},a),i&&r.createElement("div",{className:"jkl-card__action"},r.createElement(k,{onClick:i.onClick},i.name)))},m=a.p+"static/car-5cb795972244238d973aa7bf95ce5f3e.jpg",k=a.p+"static/grass-6227eee4b0b9ffa36f78951a5c65d297.jpg";function u(){console.log("This is working")}var v=function(){return r.createElement("section",{className:"jkl-spacing--top-3 jkl-spacing--bottom-3"},r.createElement(d,{className:"test-class"},r.createElement("p",{className:"jkl-body"},"Empty card")),r.createElement("br",null),r.createElement(d,{title:"Basic Card",clickable:{href:"https://fremtind.github.io/jokul/"},className:"test-class"},r.createElement("h2",{className:"jkl-h4"},"Clickable"),r.createElement("p",{className:"jkl-body"},"Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag. Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.")),r.createElement("br",null),r.createElement(d,{title:"Kjøp bilforsikring",media:{src:m,alt:"Driving"}}),r.createElement("br",null),r.createElement(d,{title:"Meld skade av mobil eller nettbrett",action:{type:"primary",name:"Logg inn og meld skade",onClick:u},media:{src:k,alt:"Grass"}},r.createElement("h2",null,"Slik behandler vi saken din"),r.createElement("ul",{className:"jkl-body list"},r.createElement("li",null,"Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag."),r.createElement("li",null,"Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager."),r.createElement("li",null,"Hvis vi dekker skaden, reparerer vi telefonen eller nettbrettet."))),r.createElement("br",null),r.createElement(d,{title:"Card darkmode",dark:!0},r.createElement("p",{className:"jkl-body"},"Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag. Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager.")),r.createElement("br",null),r.createElement(d,{title:"Meld skade av mobil eller nettbrett",action:{type:"secondary",name:"Logg inn og meld skade",onClick:u},dark:!0,media:{src:k,alt:"Grass"}},r.createElement("h2",null,"Slik behandler vi saken din"),r.createElement("ul",{className:"jkl-body list"},r.createElement("li",null,"Først ser vi om vi kan behandle saken din automatisk. Da får du svar samme dag."),r.createElement("li",null,"Hvis den ikke kan behandles automatisk, vurderer vi saken og kontakter deg innen 8 arbeidsdager."),r.createElement("li",null,"Hvis vi dekker skaden, reparerer vi telefonen eller nettbrettet."))))},p=["components"],b={},f={_frontmatter:b},j=i.Z;function g(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.mdx)(j,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(v,{mdxType:"Example"}))}g.isMDXComponent=!0},897:function(e,t,a){a.d(t,{KM:function(){return v},kq:function(){return p},C9:function(){return b}});var n=a(8340),r=a.n(n),l=a(3464),i=a.n(l),s=a(7378),c=a(382),o=a.n(c),d=a(3661),m=(0,s.forwardRef)((function(e,t){return s.createElement("button",r()({},e,{ref:t}))}));m.displayName="BaseButton";var k=["children","className","forceCompact","inverted","onClick","onTouchStart","loader"],u=function(e){return(0,s.forwardRef)((function(t,a){var n=t.children,l=t.className,c=void 0===l?"":l,u=t.forceCompact,v=t.inverted,p=t.onClick,b=t.onTouchStart,f=t.loader,j=i()(t,k),g=o()("jkl-button","jkl-button--"+e,{"jkl-button--compact":u,"jkl-button--inverted":v}),h=function(e){b&&b(e);var t=e.target;if(t&&e.targetTouches.length){var a=e.targetTouches[0].clientX-t.getBoundingClientRect().x,n=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",a.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",n.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((function(){return t.classList.remove("jkl-button--pressed")}),400)}};return f?s.createElement("div",{className:o()("jkl-button-wrapper",c,{"jkl-button-wrapper--compact":u})},s.createElement("div",{className:o()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!f.showLoader})},s.createElement(m,r()({className:g,onClick:p,onTouchStart:h,disabled:null==f?void 0:f.showLoader},j,{ref:a}),n),(null==f?void 0:f.showLoader)&&s.createElement("div",{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top"},s.createElement(d.a,{textDescription:f.textDescription,negative:v,"aria-hidden":!!f.showLoader,inline:!0})))):s.createElement(m,r()({className:o()(g,c),onClick:p,onTouchStart:h},j,{ref:a}),n)}))},v=u("primary"),p=u("secondary"),b=u("tertiary")},3661:function(e,t,a){a.d(t,{a:function(){return i}});var n=a(7378),r=a(382),l=a.n(r),i=function(e){var t=e.textDescription,a=e.negative,r=void 0!==a&&a,i=e.inline,s=void 0!==i&&i,c=e.className,o=e.dataTestAutoId,d=void 0===o?"jkl-loader":o,m=e.politeness,k=void 0===m?"polite":m,u=l()("jkl-loader",c,{"jkl-loader--negative":r,"jkl-loader--inline":s});return n.createElement("span",{className:u,"data-testid":"jkl-loader","data-testautoid":d,title:t,"aria-label":t,role:"alert","aria-busy":"true","aria-live":k},n.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),n.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),n.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-card-react-documentation-card-mdx-8492c3a61f4603644b79.js.map