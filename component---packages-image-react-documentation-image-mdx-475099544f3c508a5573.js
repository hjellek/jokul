"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5090],{6479:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return b},default:function(){return B}});var n=a(808),l=a(7378),r=a(1368),i=a(2803),o=a(3804),m=a(382),s=a.n(m),d=function(e){var t=e.thumbnail,a=e.defaultSize,n=e.objectPosition,r=void 0===n?"initial":n,i=e.largeSize,m=e.alt,d=e.isSmallDevice,u=e.className,c=void 0===u?"":u,A=e.inverted,p=void 0!==A&&A,g=e.backgroundColor,k=(0,o.WT)({lowQualitySrc:null!=t?t:"",highQualitySrc:i&&!d?i:a}),b=k.src,j=k.isBlurred;return l.createElement("div",{className:c},l.createElement("picture",{className:s()("jkl-image__container",{"jkl-image--inverted":p})},l.createElement("img",{"data-testid":"jkl-image-blurred",style:{objectPosition:r,backgroundColor:g},alt:"",src:t,className:s()("jkl-image","jkl-image__blur-container",{"jkl-image__blur-container--blur":j,"jkl-image__blur-container--blur-out":!j,"jkl-image__blur-container--no-thumbnail":!t})}),l.createElement("img",{"data-testid":"jkl-image",style:{objectPosition:r,backgroundColor:g},src:b,alt:m,className:s()("jkl-image",{"jkl-image--empty":""===b})})))},u=a.p+"static/defaultSize-bca5acb8f180ed7f930f8126b4bf8c6f.jpg",c=a.p+"static/largeSize-fcc10cb43f064398afd8e14281793aec.jpg",A=function(e){var t=e.boolValues,a=e.choiceValues,n=(0,o.EV)().isSmallDevice,r=(0,l.useState)(!1),i=r[0],m=r[1],s=!(!t||!t.Invertert),A=t&&t.Bakgrunn,p=t&&t.Thumbnail,g=t&&t.LargeSize,k=a?a.Farge:"Default";return l.createElement("div",{className:"example-img-wrapper"},l.createElement("p",{className:"jkl-body jkl-spacing-xl--bottom"},"Denne komponenten er til for å optimalisere innlasting av bilder, det gjør den litt vanskelig å visualisere, siden den prøver å huske så godt den kan. For å se effekten ordentlig, skru ned hastigheten i nettverksloggen din. For å se effekten på nytt, gjør en hard refresh (ctrl+shift+r), still inn komponenten og trykk på last bilde."),l.createElement("button",{className:"jkl-spacing-xl--bottom",onClick:function(){return i?window.location.reload():m(!0)}},i?"Last siden på nytt":"Last bilde"),i&&l.createElement("div",{className:"jkl-spacing-xl--bottom"},l.createElement("p",{className:"jkl-body"},"With largeSize"),l.createElement(d,{className:"example-class",defaultSize:u,alt:"dog",largeSize:g?c:void 0,thumbnail:p?"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAA4ACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDrgaXNRA07NAEgNOBqENTg1AEuaKZuooAzdRv49NsZbqXlUHAHVj2FcL/bWpXUrTtczKm7IWNiFWu9uIUuFRZM4R1cY9QciuAv/It9XuIVgxGsjKEGcYxQwQ0+Ib5Ztv2m4IBx/rDk1op4g1OyCXDSefF0eNx29QawxYDbv3HOPueo9Aa0IIoLq4itYspFLKFIB6KevXvikFj0Cyu476ziuYTlJFyPb2oqlpOn/wBmvcxx/LbM4MSZzjuT+uPwoqhFjdzXF+K41g1ZpeP3yA4zjnoR+g/OuvZ9uT6VjXVrFqtjIkoKlnLBjyVPai1xXscwkjhOMFquaJIJNbtPLXLKckHt0H5jrWbNBNZTLHcxsCG+92b3B71v+EtMkS4bUJFG0r+6HU89/wAqlLUpy0OyJ5oqKGTzolcoyE9m60VZJQvneKznkUfMsbEZHGccVBausYmEmFAIbJ9CP8QaKKTdk2CV5JFfU41mtEZlSSD7+HBIHHXirNtH9lkR4ctFIg3ID37Giiqirszk7L5l+0maSa4jYABGBTH90j/EGiiihlR2P//Z":void 0,isSmallDevice:n,inverted:s,backgroundColor:A&&"Default"!==k?k:void 0})))},p=["Invertert","Thumbnail","LargeSize","Bakgrunn"],g=[{name:"Farge",values:["Default","MediumSlateBlue","lime","deeppink","rebeccapurple"],defaultValue:0}],k=["components"],b={},j=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}},f=j("Experimental"),N=j("Ingress"),x=j("ComponentExample"),E={_frontmatter:b},v=i.Z;function B(e){var t=e.components,a=(0,n.Z)(e,k);return(0,r.mdx)(v,Object.assign({},E,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(f,{mdxType:"Experimental"},"Bildekomponent er ikke 100% ferdigstilt, den kan brukes, men forvent at APIet kan forandre seg."),(0,r.mdx)(N,{mdxType:"Ingress"},"Bildekomponent med blur up. Den støtter to størrelser på bilder og thumbnail. Nyttig for å laste mindre bilder på små dingser, og høyere oppløsning på større. Hvis man legger ved en thumbnail, så vil den vises blurret ut først, og byttes ut med det ekte bilde når det er lastet. Hvis man ikke legger ved thumbnail, så blurrer vi opp fra grå 20 eller 80, i light og dark-mode respektivt. Hvis du ønsker kan du sette bakgrunnsfarge isteden for thumbnail. Feks plukk ut en av de fremtredene fargene i bildet og bruk det som default staten."),(0,r.mdx)(x,{component:A,knobs:{boolProps:p,choiceProps:g},mdxType:"ComponentExample"}),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Thumbnail",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Ca 40px i bredde"),(0,r.mdx)("li",{parentName:"ul"},"Max 5 kB"))),(0,r.mdx)("li",{parentName:"ul"},"DefaultSize",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Brukes for mobil"),(0,r.mdx)("li",{parentName:"ul"},"Max 800px i bredde"),(0,r.mdx)("li",{parentName:"ul"},"Under 500 kB"))),(0,r.mdx)("li",{parentName:"ul"},"LargeSize",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Brukes for større skjermer"),(0,r.mdx)("li",{parentName:"ul"},"Bruk fornuft")))))}B.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-image-react-documentation-image-mdx-475099544f3c508a5573.js.map