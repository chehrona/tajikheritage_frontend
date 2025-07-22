(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[992],{112:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var i=r(5043),n=r(3216),a=r(215),s=r(4946),o=r(910),d=r(5452),c=r(4952),m=r(5260),l=r(8546),h=r(1529);const p=h.i7`
    0% { 
        -webkit-transform: rotate(0deg); 
        transform: rotate(0deg); 
    } 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform: rotate(360deg); 
    } 
`,u=h.Ay.div`
    top: -2.5rem;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 2;

    @media (max-width: 480px) {
        top: -2.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: -3rem;
    }
`,v=h.Ay.div`
    position: absolute;
    top: 0rem;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
    transition: transform 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
        filter: drop-shadow(0px 0px 0.25px var(--primary-black-color));
        transform: translateZ(1rem) translateX(-50%) scaleX(1.05) scaleY(1.05);
        transition: transform 0.25s ease-in-out;
    }

    @media (max-device-width: 1024px) {
        &:hover {
            filter: none;
            transform: translateX(-50%);
            transition: transform 0.25s ease-in-out;
        }
    }
`,g=h.Ay.img`
    height: 5rem;
    width: 5rem;
    animation: ${p} 10s linear infinite;

    @media (max-width: 480px) {
        height: 5rem;
        width: 5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 6rem;
        width: 6rem;
    }
`,x=h.Ay.img`
    height: 5rem;
    width: 5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 480px) {
        height: 5rem;
        width: 5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 6rem;
        width: 6rem;
    }
`,f=h.Ay.img`
    position: absolute;
    width: 8rem;
    height: 8rem;
    z-index: 2;
    top: -1rem;

    @media (max-width: 480px) {
        height: 7.5rem;
        width: 7.5rem;
        top: -0.65rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 9rem;
        width: 9.5rem;
        top: -0.75rem;
    }
`;var w=r(579);const b=e=>{let{proverb:t}=e;const{lang:r}=(0,a.Xe)();return(0,w.jsxs)(u,{children:[(0,w.jsxs)(v,{onClick:e=>(e=>{e.currentTarget.children[0].play()})(e),$lang:r,children:[(0,w.jsx)("audio",{src:"https://api.thetajikheritage.com"+(null===t||void 0===t?void 0:t.sound)}),(0,w.jsx)(g,{$lang:r,src:"https://api.thetajikheritage.com"+(null===t||void 0===t?void 0:t.logo.outer)}),(0,w.jsx)(x,{src:"https://api.thetajikheritage.com"+(null===t||void 0===t?void 0:t.logo.inner)})]}),(0,w.jsx)(f,{src:`./proverb/${r}.svg`})]})};var y=r(8044),j=r(7542);const A=h.Ay.div`
    height: 8rem;
    top: 2rem;
    z-index: 2;
    position: absolute;
    width: calc(100% - 6.34rem);
    background-color: var(--primary-shadow-color);
    border-radius: var(--page-radius) var(--page-radius) 0rem 0rem;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: 1.5rem;
        left: 1.3rem;
        width: calc(100% - 1.65rem);
    }
`,$=(0,h.Ay)(j.J)`
    position: relative;
    z-index: 3;
    margin-top: 3rem;

    @media (max-width: 480px) {
        margin-top: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-top: 3.5rem;
    }
`,L=h.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-style: italic;
    font-weight: bold;
    font-family: var(--fancy-font);
    font-size: var(--header-large);
    line-height: var(--header-big-line-height);
    padding: calc(6.5 * var(--text-segment-gap)) var(--page-padding)
        calc(1.5 * var(--text-segment-gap)) var(--page-padding);

    @media (max-width: 480px) {
        font-size: var(--header-big);
        padding: calc(1.5 * var(--text-segment-gap)) var(--page-padding)
            var(--text-segment-gap) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 5.5rem 2rem 2rem 2rem;
    }
`;var k=r(355);const O=()=>{const{id:e}=(0,n.g)(),{showToast:t}=(0,s.Y)(),{pathname:r}=(0,n.zy)(),{lang:h}=(0,a.Xe)(),[p,u]=(0,i.useState)(),[v,g]=(0,i.useState)(null);return(0,i.useEffect)((()=>{(async()=>{try{if(!e)return;const t=await(0,o.uu)(e,"language/proverb");u(t)}catch(v){const r=v;404===r.status?g(404):500===r.status&&t("E_500","error","language/proverb")}})()}),[r]),(0,w.jsxs)(i.Fragment,{children:[404===v||null!==p&&void 0!==p&&p.disabled?(0,w.jsx)(d.default,{}):null,(0,w.jsx)(m.A,{children:(0,w.jsxs)(y.A,{children:[(0,w.jsx)(A,{}),(0,w.jsx)($,{children:p?(0,w.jsxs)(i.Fragment,{children:[(0,w.jsx)(b,{proverb:p}),(0,w.jsx)(L,{dangerouslySetInnerHTML:{__html:null===p||void 0===p?void 0:p.quote[h]}}),p.desc[h].map(((e,t)=>{const r=e.slides&&e.slides.length>0;return(0,w.jsx)(l.A,{i:t,reverse:r?t%2>0:null,data:e,topLeftRad:0},`${null===p||void 0===p?void 0:p.quote[h]}_${t}`)})),p.references?(0,w.jsx)(c.A,{data:p.references[h]}):(0,w.jsx)(k.Z2,{})]}):null})]})})]})}},8546:(e,t,r)=>{"use strict";r.d(t,{A:()=>w});var i=r(5043),n=r(2958),a=r(4929),s=r(9657),o=r(7972),d=r(579);const c=e=>{let{subtitle:t,hasSlides:r,reverse:i=null}=e;const n=!!(0,s.Ub)({query:"(max-width: 480px)"})||!r,a=r?i:null;return(0,d.jsxs)(o.g$,{$reverse:a,children:[(0,d.jsxs)(o.X4,{$show:n,children:[(0,d.jsx)(o.N1,{}),(0,d.jsx)(o.jl,{})]}),(0,d.jsx)(o.Pd,{dangerouslySetInnerHTML:{__html:t}}),(0,d.jsxs)(o.Mr,{children:[(0,d.jsx)(o.jl,{}),(0,d.jsx)(o.N1,{})]})]})};var m=r(1070);const l=e=>{let{title:t,color:r,align:i}=e;return(0,d.jsx)(m.a,{$align:i,$color:r,children:t})};var h=r(1529);const p=h.Ay.div`
    width: 100%;
    display: block;
    position: relative;
    padding-bottom: var(--text-segment-gap);

    &::after {
        content: '';
        clear: both;
        display: table;
    }

    @media (max-width: 480px) {
        padding: 0rem 0rem var(--text-segment-gap) 0rem;
        display: flex;
        flex-direction: column;

        &::after {
            content: '';
            clear: none;
            display: none;
        }
    }
`,u=h.Ay.div`
    width: 100%;
`,v=h.Ay.div`
    width: 29rem;
    height: 35rem;
    z-index: 2;
    position: relative;
    float: ${e=>{let{$reverse:t}=e;return t?"right":"left"}};
    border-top-left-radius: ${e=>{let{$topLeftRad:t}=e;return t&&`${t}rem`}};
    margin: ${e=>{let{$i:t,$reverse:r}=e;return 0===t?r?"0rem 0rem 2rem 3rem":"0rem 3rem 2rem 0rem":r?"var(--text-segment-gap) 0rem 2rem 3rem":"var(--text-segment-gap) 3rem 2rem 0rem"}};

    @media (max-width: 480px) {
        margin: 0rem;
        width: 100svw;
        height: 120.49svw;
        border-radius: 0rem;
        margin: ${e=>{let{$i:t}=e;return 0===t?"0rem 0rem var(--text-segment-gap) 0rem":"var(--text-segment-gap) 0rem"}};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 30rem;
        height: 36.15rem;
        margin-bottom: 1rem;
        ${e=>{let{$reverse:t}=e;return t?"margin-left: 2rem":"margin-right: 2rem"}};
    }
`,g=h.Ay.div`
    width: 100%;
    position: relative;
    color: var(--primary-black-color);
    font-size: var(--body-text);
    line-height: var(--body-text-line-height);
    padding: 0rem var(--page-padding);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding: 0.25rem 0rem 0rem 2rem;
    }
`,x=(0,h.Ay)(g)`
    padding: 0rem var(--page-padding);
`,f=(0,h.Ay)(g)`
    padding: 0rem var(--page-padding);
`,w=e=>{let{i:t,data:r,title:s="",reverse:o=null,topLeftRad:m}=e;const h=(0,i.useRef)(null),[w,b]=(0,i.useState)(0),y=!!(r.slides&&r.slides.length>0);return(0,i.useEffect)((()=>{if(h&&h.current){var e;const t=null===h||void 0===h||null===(e=h.current)||void 0===e?void 0:e.getBoundingClientRect().width;b(t)}}),[]),(0,d.jsxs)(p,{children:[y?(0,d.jsx)(v,{$i:t,ref:h,$reverse:o,$topLeftRad:0===t?m:0,children:(0,d.jsx)(n.A,{width:w,slides:null===r||void 0===r?void 0:r.slides,topLeftRad:0===t?m:0})}):null,(0,d.jsx)(u,{children:0===t&&(0,d.jsx)(l,{title:s})}),(0,d.jsx)(c,{hasSlides:y,subtitle:r.subtitle,reverse:o}),(0,d.jsx)(a.n,{data:null===r||void 0===r?void 0:r.body,TextWrapper:y?o?f:x:g})]})}},7131:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var i=r(9662),n=r(579);const a=(0,i.A)((0,n.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos")},9389:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var i=r(9662),n=r(579);const a=(0,i.A)((0,n.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos")},2101:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var i=r(9662),n=r(579);const a=(0,i.A)((0,n.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess")},8293:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var i=r(9662),n=r(579);const a=(0,i.A)((0,n.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},2081:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var i=r(9662),n=r(579);const a=(0,i.A)((0,n.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew")},7139:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var i=r(9662),n=r(579);const a=(0,i.A)((0,n.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"}),"VolumeUp")},1238:(e,t)=>{"use strict";t.Y=function(e,t){return o(e).some((function(e){var r=e.inverse,i="all"===e.type||t.type===e.type;if(i&&r||!i&&!r)return!1;var n=e.expressions.every((function(e){var r=e.feature,i=e.modifier,n=e.value,a=t[r];if(!a)return!1;switch(r){case"orientation":case"scan":return a.toLowerCase()===n.toLowerCase();case"width":case"height":case"device-width":case"device-height":n=m(n),a=m(a);break;case"resolution":n=c(n),a=c(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":n=d(n),a=d(a);break;case"grid":case"color":case"color-index":case"monochrome":n=parseInt(n,10)||1,a=parseInt(a,10)||0}switch(i){case"min":return a>=n;case"max":return a<=n;default:return a===n}}));return n&&!r||!n&&r}))};var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,i=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,n=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function o(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),a=t[1],s=t[2],o=t[3]||"",d={};return d.inverse=!!a&&"not"===a.toLowerCase(),d.type=s?s.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],d.expressions=o.map((function(e){var t=e.match(i),r=t[1].toLowerCase().match(n);return{modifier:r[1],feature:r[2],value:t[2]}})),d}))}function d(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function m(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},1725:(e,t,r)=>{"use strict";var i=r(1238).Y,n="undefined"!==typeof window?window.matchMedia:null;function a(e,t,r){var a,s=this;function o(e){s.matches=e.matches,s.media=e.media}n&&!r&&(a=n.call(window,e)),a?(this.matches=a.matches,this.media=a.media,a.addListener(o)):(this.matches=i(e,t),this.media=e),this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(o)}}e.exports=function(e,t,r){return new a(e,t,r)}},1497:(e,t,r)=>{"use strict";var i=r(3218);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,a,s){if(s!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9657:(e,t,r)=>{"use strict";r.d(t,{Ub:()=>k});var i=r(5043),n=r(1725),a=r.n(n),s=/[A-Z]/g,o=/^ms-/,d={};function c(e){return"-"+e.toLowerCase()}const m=function(e){if(d.hasOwnProperty(e))return d[e];var t=e.replace(s,c);return d[e]=o.test(t)?"-"+t:t};function l(e,t){if(e===t)return!0;if(!e||!t)return!1;const r=Object.keys(e),i=Object.keys(t),n=r.length;if(i.length!==n)return!1;for(let a=0;a<n;a++){const i=r[a];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var h=r(5173),p=r.n(h);const u=p().oneOfType([p().string,p().number]),v={all:p().bool,grid:p().bool,aural:p().bool,braille:p().bool,handheld:p().bool,print:p().bool,projection:p().bool,screen:p().bool,tty:p().bool,tv:p().bool,embossed:p().bool},g={orientation:p().oneOf(["portrait","landscape"]),scan:p().oneOf(["progressive","interlace"]),aspectRatio:p().string,deviceAspectRatio:p().string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:p().bool,colorIndex:p().bool,monochrome:p().bool,resolution:u,type:Object.keys(v)},{type:x,...f}=g,w={minAspectRatio:p().string,maxAspectRatio:p().string,minDeviceAspectRatio:p().string,maxDeviceAspectRatio:p().string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:p().number,maxColor:p().number,minColorIndex:p().number,maxColorIndex:p().number,minMonochrome:p().number,maxMonochrome:p().number,minResolution:u,maxResolution:u,...f};var b={all:{...v,...w},types:v,matchers:g,features:w};const y=e=>{const t=[];return Object.keys(b.all).forEach((r=>{const i=e[r];null!=i&&t.push(((e,t)=>{const r=m(e);return"number"===typeof t&&(t=`${t}px`),!0===t?r:!1===t?`not ${r}`:`(${r}: ${t})`})(r,i))})),t.join(" and ")},j=(0,i.createContext)(void 0),A=e=>{if(!e)return;return Object.keys(e).reduce(((t,r)=>(t[m(r)]=e[r],t)),{})},$=()=>{const e=(0,i.useRef)(!1);return(0,i.useEffect)((()=>{e.current=!0}),[]),e.current},L=e=>{const t=()=>(e=>e.query||y(e))(e),[r,n]=(0,i.useState)(t);return(0,i.useEffect)((()=>{const e=t();r!==e&&n(e)}),[e]),r},k=(e,t,r)=>{const n=(e=>{const t=(0,i.useContext)(j),r=()=>A(e)||A(t),[n,a]=(0,i.useState)(r);return(0,i.useEffect)((()=>{const e=r();l(n,e)||a(e)}),[e,t]),n})(t),s=L(e);if(!s)throw new Error("Invalid or missing MediaQuery!");const o=((e,t)=>{const r=()=>a()(e,t||{},!!t),[n,s]=(0,i.useState)(r),o=$();return(0,i.useEffect)((()=>{if(o){const e=r();return s(e),()=>{e&&e.dispose()}}}),[e,t]),n})(s,n),d=(e=>{const[t,r]=(0,i.useState)(e.matches);return(0,i.useEffect)((()=>{const t=e=>{r(e.matches)};return e.addListener(t),r(e.matches),()=>{e.removeListener(t)}}),[e]),t})(o),c=$();return(0,i.useEffect)((()=>{c&&r&&r(d)}),[d]),(0,i.useEffect)((()=>()=>{o&&o.dispose()}),[]),d}}}]);
//# sourceMappingURL=992.f042eda5.chunk.js.map