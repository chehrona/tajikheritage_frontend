(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[869],{5037:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j});var n=r(5043),a=r(9657),i=r(3216),s=r(215),o=r(7683),d=r(4946),c=r(910),m=r(5260),l=r(5452),u=r(4952),p=r(102),h=r(8546),v=r(8880),g=r(8044),x=r(1529);const f=x.Ay.div`
    font-weight: bold;
    font-size: var(--header-medium);
    padding: calc(2 * var(--text-segment-gap)) var(--page-padding) 0rem
        var(--page-padding);

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) var(--page-padding) 0rem
            var(--page-padding);
        font-size: var(--header-normal);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.75rem;
        padding: 0rem 2rem;
    }
`,w=x.Ay.div`
    display: flex;
    align-items: center;
    padding: var(--text-segment-gap) var(--page-padding);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0.5rem 2rem;
    }
`,y=x.Ay.div`
    color: var(--primary-shadow-color);
    font-size: var(--header-normal);
    padding-right: 0.5rem;

    @media (max-width: 480px) {
        font-size: var(--header-small);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;var b=r(579);const j=e=>{let{page:t}=e;const{id:r}=(0,i.g)(),{pathname:x}=(0,i.zy)(),{showToast:j}=(0,d.Y)(),{lang:A}=(0,s.Xe)(),[$,L]=(0,n.useState)(),[k,O]=(0,n.useState)(null),R=(0,a.Ub)({query:"(min-device-width: 481px) and (max-device-width: 1024px)"})?2.5:4;return(0,o.J)(t,"generic",$),(0,n.useEffect)((()=>{(async()=>{try{if(!r)return;const e=await(0,c.uu)(r,t);L(e)}catch(k){const r=k;404===r.status?O(404):500===r.status&&j("E_500","error",t)}})()}),[x]),(0,b.jsxs)(n.Fragment,{children:[404===k||null!==$&&void 0!==$&&$.disabled?(0,b.jsx)(l.default,{}):null,(0,b.jsx)(m.A,{children:(0,b.jsx)(g.A,{children:(0,b.jsx)(v.A,{children:$?(0,b.jsxs)(n.Fragment,{children:[(0,b.jsx)(f,{children:`${$.title[A]} (${$.syntax[A]})`}),(0,b.jsxs)(w,{children:[(0,b.jsx)(y,{children:$.transcript}),(0,b.jsx)(p.A,{data:$.audio})]}),$.desc[A].map(((e,t)=>(0,b.jsx)(h.A,{i:t,data:e,topLeftRad:R},`${null===$||void 0===$?void 0:$._id}_${t}`))),(0,b.jsx)(u.A,{data:$.references[A]})]}):null})})})]})}},8546:(e,t,r)=>{"use strict";r.d(t,{A:()=>w});var n=r(5043),a=r(2958),i=r(4929),s=r(9657),o=r(7972),d=r(579);const c=e=>{let{subtitle:t,hasSlides:r,reverse:n=null}=e;const a=!!(0,s.Ub)({query:"(max-width: 480px)"})||!r,i=r?n:null;return(0,d.jsxs)(o.g$,{$reverse:i,children:[(0,d.jsxs)(o.X4,{$show:a,children:[(0,d.jsx)(o.N1,{}),(0,d.jsx)(o.jl,{})]}),(0,d.jsx)(o.Pd,{dangerouslySetInnerHTML:{__html:t}}),(0,d.jsxs)(o.Mr,{children:[(0,d.jsx)(o.jl,{}),(0,d.jsx)(o.N1,{})]})]})};var m=r(1070);const l=e=>{let{title:t,color:r,align:n}=e;return(0,d.jsx)(m.a,{$align:n,$color:r,children:t})};var u=r(1529);const p=u.Ay.div`
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
`,h=u.Ay.div`
    width: 100%;
    padding: ${e=>{let{$padding:t}=e;return t?"0rem":"var(--text-segment-gap) 0rem 0rem var(--page-padding)"}};

    @media (max-width: 480px) {
        padding: 0rem;
    }
`,v=u.Ay.div`
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
`,g=u.Ay.div`
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
`,x=(0,u.Ay)(g)`
    padding: 0rem var(--page-padding) 0rem var(--page-padding);
`,f=(0,u.Ay)(g)`
    padding: 0rem var(--page-padding) 0rem var(--page-padding);
`,w=e=>{let{i:t,data:r,title:s="",reverse:o=null,topLeftRad:m}=e;const u=(0,n.useRef)(null),[w,y]=(0,n.useState)(0),b=!!(r.slides&&r.slides.length>0);return(0,n.useEffect)((()=>{if(u&&u.current){var e;const t=null===u||void 0===u||null===(e=u.current)||void 0===e?void 0:e.getBoundingClientRect().width;y(t)}}),[]),(0,d.jsxs)(p,{children:[b?(0,d.jsx)(v,{$i:t,ref:u,$reverse:o,$topLeftRad:0===t?m:0,children:(0,d.jsx)(a.A,{width:w,slides:null===r||void 0===r?void 0:r.slides,topLeftRad:0===t?m:0})}):null,(0,d.jsx)(h,{$padding:b,children:0===t&&(0,d.jsx)(l,{title:s})}),(0,d.jsx)(c,{hasSlides:b,subtitle:r.subtitle,reverse:o}),(0,d.jsx)(i.n,{data:null===r||void 0===r?void 0:r.body,TextWrapper:b?o?f:x:g})]})}},8880:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});r(5043);var n=r(7542),a=r(579);const i=e=>{let{children:t}=e;return(0,a.jsx)(n.J,{children:t})}},7131:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(9662),a=r(579);const i=(0,n.A)((0,a.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos")},9389:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(9662),a=r(579);const i=(0,n.A)((0,a.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos")},2101:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(9662),a=r(579);const i=(0,n.A)((0,a.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess")},8293:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(9662),a=r(579);const i=(0,n.A)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},2081:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(9662),a=r(579);const i=(0,n.A)((0,a.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew")},7139:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(9662),a=r(579);const i=(0,n.A)((0,a.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"}),"VolumeUp")},1238:(e,t)=>{"use strict";t.Y=function(e,t){return o(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var a=e.expressions.every((function(e){var r=e.feature,n=e.modifier,a=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=m(a),i=m(i);break;case"resolution":a=c(a),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=d(a),i=d(i);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=a;case"max":return i<=a;default:return i===a}}));return a&&!r||!a&&r}))};var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function o(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],s=t[2],o=t[3]||"",d={};return d.inverse=!!i&&"not"===i.toLowerCase(),d.type=s?s.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],d.expressions=o.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(a);return{modifier:r[1],feature:r[2],value:t[2]}})),d}))}function d(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function m(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},1725:(e,t,r)=>{"use strict";var n=r(1238).Y,a="undefined"!==typeof window?window.matchMedia:null;function i(e,t,r){var i,s=this;function o(e){s.matches=e.matches,s.media=e.media}a&&!r&&(i=a.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(o)):(this.matches=n(e,t),this.media=e),this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)},this.dispose=function(){i&&i.removeListener(o)}}e.exports=function(e,t,r){return new i(e,t,r)}},1497:(e,t,r)=>{"use strict";var n=r(3218);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9657:(e,t,r)=>{"use strict";r.d(t,{Ub:()=>k});var n=r(5043),a=r(1725),i=r.n(a),s=/[A-Z]/g,o=/^ms-/,d={};function c(e){return"-"+e.toLowerCase()}const m=function(e){if(d.hasOwnProperty(e))return d[e];var t=e.replace(s,c);return d[e]=o.test(t)?"-"+t:t};function l(e,t){if(e===t)return!0;if(!e||!t)return!1;const r=Object.keys(e),n=Object.keys(t),a=r.length;if(n.length!==a)return!1;for(let i=0;i<a;i++){const n=r[i];if(e[n]!==t[n]||!Object.prototype.hasOwnProperty.call(t,n))return!1}return!0}var u=r(5173),p=r.n(u);const h=p().oneOfType([p().string,p().number]),v={all:p().bool,grid:p().bool,aural:p().bool,braille:p().bool,handheld:p().bool,print:p().bool,projection:p().bool,screen:p().bool,tty:p().bool,tv:p().bool,embossed:p().bool},g={orientation:p().oneOf(["portrait","landscape"]),scan:p().oneOf(["progressive","interlace"]),aspectRatio:p().string,deviceAspectRatio:p().string,height:h,deviceHeight:h,width:h,deviceWidth:h,color:p().bool,colorIndex:p().bool,monochrome:p().bool,resolution:h,type:Object.keys(v)},{type:x,...f}=g,w={minAspectRatio:p().string,maxAspectRatio:p().string,minDeviceAspectRatio:p().string,maxDeviceAspectRatio:p().string,minHeight:h,maxHeight:h,minDeviceHeight:h,maxDeviceHeight:h,minWidth:h,maxWidth:h,minDeviceWidth:h,maxDeviceWidth:h,minColor:p().number,maxColor:p().number,minColorIndex:p().number,maxColorIndex:p().number,minMonochrome:p().number,maxMonochrome:p().number,minResolution:h,maxResolution:h,...f};var y={all:{...v,...w},types:v,matchers:g,features:w};const b=e=>{const t=[];return Object.keys(y.all).forEach((r=>{const n=e[r];null!=n&&t.push(((e,t)=>{const r=m(e);return"number"===typeof t&&(t=`${t}px`),!0===t?r:!1===t?`not ${r}`:`(${r}: ${t})`})(r,n))})),t.join(" and ")},j=(0,n.createContext)(void 0),A=e=>{if(!e)return;return Object.keys(e).reduce(((t,r)=>(t[m(r)]=e[r],t)),{})},$=()=>{const e=(0,n.useRef)(!1);return(0,n.useEffect)((()=>{e.current=!0}),[]),e.current},L=e=>{const t=()=>(e=>e.query||b(e))(e),[r,a]=(0,n.useState)(t);return(0,n.useEffect)((()=>{const e=t();r!==e&&a(e)}),[e]),r},k=(e,t,r)=>{const a=(e=>{const t=(0,n.useContext)(j),r=()=>A(e)||A(t),[a,i]=(0,n.useState)(r);return(0,n.useEffect)((()=>{const e=r();l(a,e)||i(e)}),[e,t]),a})(t),s=L(e);if(!s)throw new Error("Invalid or missing MediaQuery!");const o=((e,t)=>{const r=()=>i()(e,t||{},!!t),[a,s]=(0,n.useState)(r),o=$();return(0,n.useEffect)((()=>{if(o){const e=r();return s(e),()=>{e&&e.dispose()}}}),[e,t]),a})(s,a),d=(e=>{const[t,r]=(0,n.useState)(e.matches);return(0,n.useEffect)((()=>{const t=e=>{r(e.matches)};return e.addListener(t),r(e.matches),()=>{e.removeListener(t)}}),[e]),t})(o),c=$();return(0,n.useEffect)((()=>{c&&r&&r(d)}),[d]),(0,n.useEffect)((()=>()=>{o&&o.dispose()}),[]),d}}}]);
//# sourceMappingURL=869.453a8564.chunk.js.map