(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("gT28"),r=a("mXGw"),i=a.n(r),l=a("Wbzz"),o=a("ZMKu"),s=(a("kr69"),a("VlJN"),a("YjJN"),a("8Jek")),c=a.n(s),p=(a("tfWc"),a("Abof")),m=Object(r.forwardRef)((function(e,t){var a=e.onEnter,n=e.onLeave,i=e.render,l=e.threshold,o=void 0===l?[.7]:l,s=Object(r.useState)(!1),c=s[0],m=s[1],d=Object(r.useRef)(null),u=t||d,f={rootMargin:"0px",threshold:o};return Object(p.c)(u,(function(e){var t=e.some((function(e){return e.isIntersecting}));c&&!t&&n?n(e):c||t||!n?!c&&t&&a&&a(e):n(e),m(t)}),(function(){return console.log("IntersectionObserver not supported")}),f),i(u)}));m.displayName="VisibleDetector";var d=function(e){var t=e.text,a=e.delay,n=e.children,l=Object(r.useState)(-1),o=l[0],s=l[1],p=Object(r.useState)(!0),d=p[0],u=p[1],f=Object(r.useState)(0),g=f[0],h=f[1],v=Object(r.useState)(!1)[0],k=Array.from(new Array(t.length)).map((function(){return 500*Math.random()+250})),_=Object(r.useRef)(),j=Object(r.useMemo)((function(){return t.split("").filter((function(e,t){return t<=o}))}),[o,t]);Object(r.useEffect)((function(){j.length===t.length&&function(){var e=_.current;if(e){var t=e.parentElement,a=e.offsetHeight;a+=parseInt(window.getComputedStyle(e).getPropertyValue("margin-top")),a+=parseInt(window.getComputedStyle(e).getPropertyValue("margin-bottom")),a+=parseInt(window.getComputedStyle(e).getPropertyValue("padding-top")),a+=parseInt(window.getComputedStyle(e).getPropertyValue("margin-bottom"));var n={top:a+=parseInt(window.getComputedStyle(t).getPropertyValue("padding-top")),left:0,behavior:"smooth"};window.setTimeout((function(){window.scrollY>a/2||window.scrollTo(n)}),500)}}()}),[j,t]);var E=Math.random()*a+a/2;!function(e,t){var a=Object(r.useRef)();Object(r.useEffect)((function(){a.current=e})),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){a&&a.current&&a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){o>=t.length?u(!1):s(o+1)}),d?E<50?a:E:null);var S=c()("jkl-portal__delay-text",{"jkl-portal__delay-text--hidden":v}),w=c()("jkl-portal__delay-text__content","jkl-portal__delay-text__underscore",{"jkl-portal__delay-text__underscore--hidden":!d}),b=c()("jkl-portal__delay-text__content-text",{}),y=c()("jkl-portal__delay-text__children");return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{onLeave:function(){},threshold:[0],ref:_,render:function(e){return i.a.createElement("div",{ref:e,className:S},i.a.createElement("div",{className:w},j.map((function(e,t){return i.a.createElement("span",{key:e+t,className:b,style:{transitionDelay:k[t]+"ms"},onTransitionEnd:function(){return h(g+1)}},e)}))))}}),i.a.createElement("div",{className:y},n))},u=(a("WF8n"),a("Zrjq"),a("YIew"),function(e){var t=e.heading,a=e.link,n=e.children,r=a.startsWith("http")?"↗":"→";return i.a.createElement("button",{className:"jkl-portal-card",onClick:function(){return Object(l.navigate)(a)}},i.a.createElement("p",{className:"jkl-portal-card__heading"},t),i.a.createElement("div",{className:"jkl-portal-card__content"},n),i.a.createElement("div",{className:"jkl-portal-card__arrow"},r))}),f=(a("lzD/"),function(e){var t=e.children,a=e.vertical,n=c()("jkl-portal__card-list",{"jkl-portal__card-list--vertical":a});return i.a.createElement("div",{className:n},t)});function g(e){var t=e.className,a=e.width,n=e.height,r=e.contextRef;return i.a.createElement("canvas",{className:t,width:a,height:n,ref:function(e){return e?r(e.getContext("2d")):null}})}var h;a("mGGU");function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}!function(e){e[e.None=0]="None",e[e.Elevated=1]="Elevated",e[e.Movement=2]="Movement",e[e.Clarity=3]="Clarity"}(h||(h={}));var k=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).generateClasses=function(e){var t;return c()(e,((t={})[e+"--elevated"]=1===a.props.principleState,t[e+"--movement"]=2===a.props.principleState,t[e+"--clarity"]=3===a.props.principleState,t))},a.saveContext=a.saveContext.bind(v(a)),a.draw=a.draw.bind(v(a)),a.generateClasses=a.generateClasses.bind(v(a)),a.getScale=a.getScale.bind(v(a)),a.lastMinScale=0,a.lastMaxScale=0,a.updatedScaleAt=0,a.tileSize=0,a.tiles=7,a.ctx=null,a.size=[250,250],a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){this.lastMinScale=this.props.minScale,this.lastMaxScale=this.props.maxScale,this.updatedScaleAt=0},r.componentDidUpdate=function(e){this.props.minScale!==e.minScale&&(this.lastMinScale=this.props.minScale,this.updatedScaleAt=Date.now()),this.props.maxScale!==e.maxScale&&(this.lastMaxScale=this.props.maxScale,this.updatedScaleAt=Date.now()),this.draw()},r.componentWillUnmount=function(){this.animationTimeout&&window.clearTimeout(this.animationTimeout)},r.saveContext=function(e){e&&(this.ctx=e,this.size=[this.ctx.canvas.width,this.ctx.canvas.height],this.tileSize=this.size[0]/this.props.tiles,this.draw())},r.getScale=function(){var e,t=(Date.now()-this.updatedScaleAt)/150;return e=t>1?1:t,[this.lastMinScale+(this.props.minScale-this.lastMinScale)*e,this.lastMaxScale+(this.props.maxScale-this.lastMaxScale)*e]},r.draw=function(){var e=this,t=this.tileSize,a=this.ctx,n=this.size,r=this.props.tiles,i=n[0],l=n[1];a&&(a.clearRect(0,0,i,l),a.fillStyle="black");for(var o=Date.now(),s=this.getScale(),c=0;c<r;c++)for(var p=0;p<r;p++){var m=t,d=(Math.abs(Math.sin(.001*o+50*c+50*p))*(s[1]-s[0])+s[0])*t;a&&a.fillRect(c*m-d/2+t/2,p*m-d/2+t/2,d,d)}this.animationTimeout&&window.clearTimeout(this.animationTimeout),this.animationTimeout=window.setTimeout((function(){window.requestAnimationFrame(e.draw)}),1e3/30)},r.render=function(){return i.a.createElement(g,{className:this.generateClasses("jkl-portal-principle-diamond__"+this.props.type),contextRef:this.saveContext,height:250,width:250})},n}(i.a.Component);k.defaultProps={tiles:7,minScale:.2,maxScale:.8};a("HrjT"),a("r5nU"),a("pxef"),t.default=function(){var e,t,a,s,c,p,g,h=Object(r.useState)(0),v=h[0],_=h[1],j=function(e){_(e)},E=function(e){e===v&&_(0)},S=Object(r.useMemo)((function(){switch(v){case 2:return.2;case 3:return.1;default:return 1.1}}),[v]),w=Object(r.useMemo)((function(){switch(v){case 2:return.8;case 3:return.3;default:return 1.1}}),[v]),b=n.data,y=null==b||null===(e=b.allSitePage)||void 0===e||null===(t=e.edges[0])||void 0===t||null===(a=t.node)||void 0===a||null===(s=a.context)||void 0===s?void 0:s.frontmatter,N=null==b||null===(c=b.allSitePage)||void 0===c||null===(p=c.edges[0])||void 0===p||null===(g=p.node)||void 0===g?void 0:g.path;return i.a.createElement(o.b.main,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.35},className:"jkl-portal__main jkl-portal__main--frontpage",id:"innhold"},i.a.createElement(d,{text:"Jøkul Designsystem",delay:100},i.a.createElement("div",{className:"jkl-portal-frontpage"},i.a.createElement("section",{className:"jkl-portal-frontpage__section-intro"},i.a.createElement("h2",{className:"jkl-title-small","data-testid":"front-page__tagline"},"Velkommen til Jøkul — designsystemet til Fremtind. Her har vi samlet alt du trenger for å lage løsninger i vår profil."),i.a.createElement("div",{className:"jkl-portal-frontpage__section-intro--content"},i.a.createElement("div",{className:"jkl-portal-frontpage__section-intro--image-container"},i.a.createElement("div",{className:"jkl-portal-frontpage__section-intro--image",style:{backgroundImage:"url("+Object(l.withPrefix)("assets/img/frontpage.jpg")+")"}})),i.a.createElement(f,{vertical:!0},i.a.createElement(u,{heading:"For utviklere",link:"/komigang/utvikling"},"Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul."),i.a.createElement(u,{heading:"For designere",link:"/komigang/design"},"Her får du vite det mest grunnlegende før du setter i gang å bruke Jøkul."),i.a.createElement(u,{heading:"Prosessen",link:"/komigang/prosessen"},"Hvordan du kan jobbe med designsystemet."),i.a.createElement(u,{heading:"Blogg: "+y.title,link:N},y.description)))),i.a.createElement("section",{className:"jkl-portal-frontpage__section-principles"},i.a.createElement("h2",{className:"jkl-title-small jkl-portal-frontpage__section-principles--heading"},"Hovedprinsipper du kan tenke på for å designe en løsning til vår profil på best mulig måte:"),i.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__diamond-container"},i.a.createElement("div",{className:"jkl-portal-principle-diamond"},i.a.createElement(k,{principleState:v,minScale:S,maxScale:w,type:"diamond"}),i.a.createElement(k,{principleState:v,minScale:S,maxScale:w,type:"shadow"}))),i.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},i.a.createElement(m,{onEnter:function(){return j(1)},onLeave:function(){return E(1)},render:function(e){return i.a.createElement("div",{ref:e,className:"jkl-portal-frontpage__section-principles__principle"},i.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},i.a.createElement("h1",{className:"jkl-title-large","data-testid":"title-elevasjon"},"Elevasjon"),i.a.createElement("p",{className:"jkl-lead"},"Vi løfter det som er viktig og skaper et naturlig informasjonshierarki.")))}}),i.a.createElement(m,{onEnter:function(){return j(2)},onLeave:function(){return E(2)},render:function(e){return i.a.createElement("div",{ref:e,className:"jkl-portal-frontpage__section-principles__principle"},i.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},i.a.createElement("h1",{className:"jkl-title-large","data-testid":"title-bevegelse"},"Bevegelse"),i.a.createElement("p",{className:"jkl-lead"},"Vi skal utforske, se fremover og være tilpasningsdyktige.")))}}),i.a.createElement(m,{onEnter:function(){return j(3)},onLeave:function(){return E(3)},render:function(e){return i.a.createElement("div",{ref:e,className:"jkl-portal-frontpage__section-principles__principle"},i.a.createElement("div",{className:"jkl-portal-frontpage__section-principles__principle--container"},i.a.createElement("h1",{className:"jkl-title-large","data-testid":"title-klarhet"},"Klarhet"),i.a.createElement("p",{className:"jkl-lead"},"Vi skal fremstå som ærlig og klar, med en tydelig og varm stemme")))}}))),i.a.createElement("section",{className:"jkl-portal-frontpage__section-contribute"},i.a.createElement("div",{className:"jkl-portal-frontpage__section--wrapper"},i.a.createElement("h2",{className:"jkl-title-small"},"Bidra"),i.a.createElement("p",{className:"jkl-lead"},"Jøkul er et levende designsystem. For at vi skal holde det relevant, er det viktig at alle som bruker designsystemet og merkevareprofilen vår hjelper til med å forbedre det vi har. Send oss en mail eller bidra i GitHub."),i.a.createElement("p",{className:"jkl-lead"},"Finn oss i Teams kanalen “Support Designsystem” eller kom på åpent forum hver tirsdag 14 til 14.30. Her informerer vi om hva som skjer og tar imot innspill."))))))}},YIew:function(e,t,a){},gT28:function(e){e.exports=JSON.parse('{"data":{"allSitePage":{"edges":[{"node":{"path":"/blog/framerMotion/framerMotion/","context":{"frontmatter":{"title":"Framer motion i Jøkul","description":"Hvordan lage virkningsfulle bevelgelser på en enkel måte med Jøkul og Framer motion"}}}}]}}}')},"lzD/":function(e,t,a){},mGGU:function(e,t,a){},pxef:function(e,t,a){},r5nU:function(e,t,a){},tfWc:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-117eba5faba954891ac9.js.map