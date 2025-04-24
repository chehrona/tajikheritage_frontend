(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[992],{112:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z});var i=r(5043),a=r(3216),n=r(215),s=r(4946),o=r(910),d=r(5452),c=r(4952),m=r(5260),l=r(4414),p=r(1529);const h=p.i7`
    0% { 
        -webkit-transform: rotate(0deg); 
        transform: rotate(0deg); 
    } 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform: rotate(360deg); 
    } 
`,u=p.Ay.div`
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
`,g=p.Ay.div`
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
`,v=p.Ay.img`
    height: 5rem;
    width: 5rem;
    animation: ${h} 10s linear infinite;

    @media (max-width: 480px) {
        height: 5rem;
        width: 5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 6rem;
        width: 6rem;
    }
`,x=p.Ay.img`
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
`,f=p.Ay.svg`
    position: absolute;
    width: 7rem;
    height: 7rem;
    z-index: 2;
    top: -0.75rem;

    @media (max-width: 480px) {
        height: 7rem;
        width: 7rem;
        top: -0.75rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 9rem;
        width: 9.5rem;
        top: -1.65rem;
    }
`,w=p.Ay.text`
    font-size: var(--header-medium);
    text-anchor: middle;
    transform: rotateZ(180deg);
    transform-origin: center;
    fill: var(--primary-red-color);
    font-weight: bold;
    letter-spacing: 2.5px;

    @media (max-width: 480px) {
        font-size: var(--header-medium);
        letter-spacing: 3px;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.85rem;
        letter-spacing: 3px;
    }
`;var y=r(579);const b=e=>{let{proverb:t}=e;const{lang:r}=(0,n.Xe)();return(0,y.jsxs)(u,{children:[(0,y.jsxs)(g,{onClick:e=>(e=>{e.currentTarget.children[0].play()})(e),$lang:r,children:[(0,y.jsx)("audio",{src:"https://api.thetajikheritage.com"+(null===t||void 0===t?void 0:t.sound)}),(0,y.jsx)(v,{$lang:r,src:"https://api.thetajikheritage.com"+(null===t||void 0===t?void 0:t.logo.outer)}),(0,y.jsx)(x,{src:"https://api.thetajikheritage.com"+(null===t||void 0===t?void 0:t.logo.inner)})]}),(0,y.jsxs)(f,{viewBox:"0 0 200 200",children:[(0,y.jsx)("path",{id:"text-path",stroke:"none",fill:"none",d:"M 100, 200 C 155.23, 200 200, 155.23 200, 100 C 200, 44.77 155.23, 0 100, 0 C 44.77, 0 0, 44.77 0, 100 C 0, 155.23 44.77, 200 100, 200 Z"}),(0,y.jsx)(w,{children:(0,y.jsx)("textPath",{href:"#text-path",startOffset:"50%",textAnchor:"middle",children:"us"===r?"\u2022 CLICK TO HEAR \u2022":"ru"===r?"\u2022 \u041f\u041e\u0421\u041b\u0423\u0428\u0410\u0422\u042c \u2022":"fa"===r?"\u2022 \u06af\u0648\u0634 \u06a9\u0646\u06cc\u062f \u2022":"\u2022 \u0413\u04ee\u0428 \u041a\u0423\u041d\u0415\u0414 \u2022"})})]})]})};var j=r(8044),A=r(7542);const $=p.Ay.div`
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
`,k=(0,p.Ay)(A.J)`
    position: relative;
    z-index: 3;
    margin-top: 3rem;

    @media (max-width: 480px) {
        margin-top: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-top: 3.5rem;
    }
`,L=p.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-style: italic;
    font-weight: bold;
    font-family: var(--fancy-font);
    font-size: var(--header-large);
    line-height: var(--header-big-line-height);
    padding: 4.5rem var(--page-padding) calc(2 * var(--text-segment-gap))
        var(--page-padding);

    @media (max-width: 480px) {
        font-size: var(--header-big);
        padding: 4.5rem var(--page-padding) var(--text-segment-gap)
            var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 5.5rem 2rem 2rem 2rem;
    }
`;var C=r(355);const z=()=>{const{id:e}=(0,a.g)(),{showToast:t}=(0,s.Y)(),{pathname:r}=(0,a.zy)(),{lang:p}=(0,n.Xe)(),[h,u]=(0,i.useState)(),[g,v]=(0,i.useState)(null);return(0,i.useEffect)((()=>{(async()=>{try{if(!e)return;const t=await(0,o.uu)(e,"language/proverb");u(t)}catch(g){const r=g;404===r.status?v(404):500===r.status&&t("E_500","error","language/proverb")}})()}),[r]),(0,y.jsxs)(i.Fragment,{children:[404===g||null!==h&&void 0!==h&&h.disabled?(0,y.jsx)(d.default,{}):null,(0,y.jsx)(m.A,{children:(0,y.jsxs)(j.A,{children:[(0,y.jsx)($,{}),(0,y.jsx)(k,{children:h?(0,y.jsxs)(i.Fragment,{children:[(0,y.jsx)(b,{proverb:h}),(0,y.jsx)(L,{dangerouslySetInnerHTML:{__html:null===h||void 0===h?void 0:h.quote[p]}}),h.desc[p].map(((e,t)=>{const r=e.slides&&e.slides.length>0;return(0,y.jsx)(l.A,{i:t,reverse:r?t%2>0:null,data:e,topLeftRad:0},`${null===h||void 0===h?void 0:h.quote[p]}_${t}`)})),h.references?(0,y.jsx)(c.A,{data:h.references[p]}):(0,y.jsx)(C.Z2,{})]}):null})]})})]})}},4414:(e,t,r)=>{"use strict";r.d(t,{A:()=>k});var i=r(5043),a=r(2958),n=r(5953),s=r(9657),o=r(1529);const d=o.Ay.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: var(--text-segment-gap) var(--page-padding);
    padding: ${e=>{let{$reverse:t}=e;return null===t?"var(--text-segment-gap) var(--page-padding)":t?"var(--text-segment-gap) 0rem var(--text-segment-gap) var(--page-padding)":"var(--text-segment-gap) var(--page-padding) var(--text-segment-gap) 0rem"}};
`,c=o.Ay.div`
    z-index: 1;
    flex-grow: 1;
    align-items: center;
    display: flex;
`,m=(0,o.Ay)(c)`
    margin-left: -0.25rem;
`,l=(0,o.Ay)(c)`
    margin-right: -0.25rem;
    display: ${e=>{let{$show:t}=e;return t?"flex":"none"}};
`,p=o.Ay.div`
    height: 1px;
    width: 100%;
    background-color: var(--primary-gold-color);
`,h=o.Ay.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--primary-gold-color);
`,u=o.Ay.span`
    display: flex;
    font-weight: 500;
    width: fit-content;
    padding: 0.25rem 1rem;
    text-transform: uppercase;
    font-size: var(--header-small);
    border-radius: var(--big-radius);
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;var g=r(579);const v=e=>{let{subtitle:t,hasSlides:r,reverse:i=null}=e;const a=!!(0,s.Ub)({query:"(max-width: 480px)"})||!r,n=r?i:null;return(0,g.jsxs)(d,{$reverse:n,children:[(0,g.jsxs)(l,{$show:a,children:[(0,g.jsx)(p,{}),(0,g.jsx)(h,{})]}),(0,g.jsx)(u,{dangerouslySetInnerHTML:{__html:t}}),(0,g.jsxs)(m,{children:[(0,g.jsx)(h,{}),(0,g.jsx)(p,{})]})]})};var x=r(1070);const f=e=>{let{title:t,color:r,align:i}=e;return(0,g.jsx)(x.a,{$align:i,$color:r,children:t})},w=o.Ay.div`
    width: 100%;
    display: block;
    position: relative;

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
`,y=o.Ay.div`
    width: 100%;
    padding: ${e=>{let{$padding:t}=e;return t?"0rem":"var(--text-segment-gap) 0rem 0rem var(--page-padding)"}};
`,b=o.Ay.div`
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
`,j=o.Ay.div`
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
`,A=(0,o.Ay)(j)`
    padding: 0rem var(--page-padding) 0rem var(--page-padding);
`,$=(0,o.Ay)(j)`
    padding: 0rem var(--page-padding) 0rem var(--page-padding);
`,k=e=>{let{i:t,data:r,title:s="",reverse:o=null,topLeftRad:d}=e;const c=(0,i.useRef)(null),[m,l]=(0,i.useState)(0),p=!!(r.slides&&r.slides.length>0);return(0,i.useEffect)((()=>{if(c&&c.current){var e;const t=null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.getBoundingClientRect().width;l(t)}}),[]),(0,g.jsxs)(w,{children:[p?(0,g.jsx)(b,{$i:t,ref:c,$reverse:o,$topLeftRad:0===t?d:0,children:(0,g.jsx)(a.A,{width:m,slides:null===r||void 0===r?void 0:r.slides,topLeftRad:0===t?d:0})}):null,(0,g.jsx)(y,{$padding:p,children:0===t&&(0,g.jsx)(f,{title:s})}),(0,g.jsx)(v,{hasSlides:p,subtitle:r.subtitle,reverse:o}),(0,g.jsx)(n.n,{data:null===r||void 0===r?void 0:r.body,TextWrapper:p?o?$:A:j})]})}},7131:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var i=r(9662),a=r(579);const n=(0,i.A)((0,a.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos")},9389:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var i=r(9662),a=r(579);const n=(0,i.A)((0,a.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos")},2101:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var i=r(9662),a=r(579);const n=(0,i.A)((0,a.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess")},8293:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var i=r(9662),a=r(579);const n=(0,i.A)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},2081:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var i=r(9662),a=r(579);const n=(0,i.A)((0,a.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew")},7139:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var i=r(9662),a=r(579);const n=(0,i.A)((0,a.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"}),"VolumeUp")},1238:(e,t)=>{"use strict";t.Y=function(e,t){return o(e).some((function(e){var r=e.inverse,i="all"===e.type||t.type===e.type;if(i&&r||!i&&!r)return!1;var a=e.expressions.every((function(e){var r=e.feature,i=e.modifier,a=e.value,n=t[r];if(!n)return!1;switch(r){case"orientation":case"scan":return n.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=m(a),n=m(n);break;case"resolution":a=c(a),n=c(n);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=d(a),n=d(n);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,n=parseInt(n,10)||0}switch(i){case"min":return n>=a;case"max":return n<=a;default:return n===a}}));return a&&!r||!a&&r}))};var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,i=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,n=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function o(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),n=t[1],s=t[2],o=t[3]||"",d={};return d.inverse=!!n&&"not"===n.toLowerCase(),d.type=s?s.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],d.expressions=o.map((function(e){var t=e.match(i),r=t[1].toLowerCase().match(a);return{modifier:r[1],feature:r[2],value:t[2]}})),d}))}function d(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function m(e){var t=parseFloat(e);switch(String(e).match(n)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},1725:(e,t,r)=>{"use strict";var i=r(1238).Y,a="undefined"!==typeof window?window.matchMedia:null;function n(e,t,r){var n,s=this;function o(e){s.matches=e.matches,s.media=e.media}a&&!r&&(n=a.call(window,e)),n?(this.matches=n.matches,this.media=n.media,n.addListener(o)):(this.matches=i(e,t),this.media=e),this.addListener=function(e){n&&n.addListener(e)},this.removeListener=function(e){n&&n.removeListener(e)},this.dispose=function(){n&&n.removeListener(o)}}e.exports=function(e,t,r){return new n(e,t,r)}},1497:(e,t,r)=>{"use strict";var i=r(3218);function a(){}function n(){}n.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,n,s){if(s!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:a};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9657:(e,t,r)=>{"use strict";r.d(t,{Ub:()=>L});var i=r(5043),a=r(1725),n=r.n(a),s=/[A-Z]/g,o=/^ms-/,d={};function c(e){return"-"+e.toLowerCase()}const m=function(e){if(d.hasOwnProperty(e))return d[e];var t=e.replace(s,c);return d[e]=o.test(t)?"-"+t:t};function l(e,t){if(e===t)return!0;if(!e||!t)return!1;const r=Object.keys(e),i=Object.keys(t),a=r.length;if(i.length!==a)return!1;for(let n=0;n<a;n++){const i=r[n];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var p=r(5173),h=r.n(p);const u=h().oneOfType([h().string,h().number]),g={all:h().bool,grid:h().bool,aural:h().bool,braille:h().bool,handheld:h().bool,print:h().bool,projection:h().bool,screen:h().bool,tty:h().bool,tv:h().bool,embossed:h().bool},v={orientation:h().oneOf(["portrait","landscape"]),scan:h().oneOf(["progressive","interlace"]),aspectRatio:h().string,deviceAspectRatio:h().string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:h().bool,colorIndex:h().bool,monochrome:h().bool,resolution:u,type:Object.keys(g)},{type:x,...f}=v,w={minAspectRatio:h().string,maxAspectRatio:h().string,minDeviceAspectRatio:h().string,maxDeviceAspectRatio:h().string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:h().number,maxColor:h().number,minColorIndex:h().number,maxColorIndex:h().number,minMonochrome:h().number,maxMonochrome:h().number,minResolution:u,maxResolution:u,...f};var y={all:{...g,...w},types:g,matchers:v,features:w};const b=e=>{const t=[];return Object.keys(y.all).forEach((r=>{const i=e[r];null!=i&&t.push(((e,t)=>{const r=m(e);return"number"===typeof t&&(t=`${t}px`),!0===t?r:!1===t?`not ${r}`:`(${r}: ${t})`})(r,i))})),t.join(" and ")},j=(0,i.createContext)(void 0),A=e=>{if(!e)return;return Object.keys(e).reduce(((t,r)=>(t[m(r)]=e[r],t)),{})},$=()=>{const e=(0,i.useRef)(!1);return(0,i.useEffect)((()=>{e.current=!0}),[]),e.current},k=e=>{const t=()=>(e=>e.query||b(e))(e),[r,a]=(0,i.useState)(t);return(0,i.useEffect)((()=>{const e=t();r!==e&&a(e)}),[e]),r},L=(e,t,r)=>{const a=(e=>{const t=(0,i.useContext)(j),r=()=>A(e)||A(t),[a,n]=(0,i.useState)(r);return(0,i.useEffect)((()=>{const e=r();l(a,e)||n(e)}),[e,t]),a})(t),s=k(e);if(!s)throw new Error("Invalid or missing MediaQuery!");const o=((e,t)=>{const r=()=>n()(e,t||{},!!t),[a,s]=(0,i.useState)(r),o=$();return(0,i.useEffect)((()=>{if(o){const e=r();return s(e),()=>{e&&e.dispose()}}}),[e,t]),a})(s,a),d=(e=>{const[t,r]=(0,i.useState)(e.matches);return(0,i.useEffect)((()=>{const t=e=>{r(e.matches)};return e.addListener(t),r(e.matches),()=>{e.removeListener(t)}}),[e]),t})(o),c=$();return(0,i.useEffect)((()=>{c&&r&&r(d)}),[d]),(0,i.useEffect)((()=>()=>{o&&o.dispose()}),[]),d}}}]);
//# sourceMappingURL=992.955fb21b.chunk.js.map