"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[4],{9968:(e,r,i)=>{i.d(r,{MJ:()=>o,Ue:()=>d,ZG:()=>n,ch:()=>t});var a=i(1529);a.Ay.div`
    justify-content: center;
    position: relative;
    height: 100svh;
    width: calc(100svw - 4 * var(--page-padding));
    display: flex;
    justify-content: center;
    padding: var(--text-segment-gap) var(--page-padding);
`;const t=a.Ay.svg`
    width: ${e=>{let{$size:r}=e;return r&&`${r}px`}};
    height: ${e=>{let{$size:r}=e;return r&&`${r}px`}};
    position: relative;
    z-index: 10;
    overflow: visible;
    perspective: 1000px;
`,o=a.Ay.g`
    cursor: pointer;
    transition: transform 0.4s ease, filter 0.4s ease;
    transform-origin: ${e=>{let{cx:r,cy:i}=e;return`${r}px ${i}px`}};

    &:hover {
        transform: scale(1.05) translateX(${e=>{let{x:r}=e;return r}}px)
            translateY(${e=>{let{y:r}=e;return r}}px);
        z-index: 100;
        filter: drop-shadow(0rem 0.25rem 0.5rem var(--primary-shadow-color));

        image {
            filter: brightness(120%);
        }
    }
`,n=a.Ay.image`
    border-radius: 50%;
`,d=a.Ay.text`
    fill: var(--primary-white-color);
    font-size: var(--body-text);
    font-weight: bold;
`},7644:(e,r,i)=>{i.d(r,{A:()=>f});var a=i(5043),t=i(8072),o=i(215),n=i(9657),d=i(5234),s=i(7829),l=i(5953),g=i(1529);const c=g.Ay.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: var(--page-padding);
    padding: var(--page-padding);
    background-color: var(--primary-white-color);
    background-image: url(${"/customAssets/noise.png"});

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        overflow: hidden;
    }
`,h=g.Ay.div`
    width: 35%;
    height: 100%;
`,p=g.Ay.div`
    width: 65%;
    max-height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: var(--input-radius);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: var(--input-radius);
    }
`,m=g.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: contain;
    height: 80%;
    width: 100%;
    border-radius: 0.5rem;
    position: relative;
    border: 1px solid var(--primary-shadow-color);
    background-color: var(--primary-black-color);
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 90%;
        width: 90%;
    }
`,v=g.Ay.div`
    color: var(--primary-gold-color);
    font-family: var(--fancy-font);
    font-size: var(--header-big);
    position: absolute;
    top: 0.85rem;
`,u=g.Ay.img`
    width: 80%;
`,x=g.Ay.div`
    width: 100%;
`,y=g.Ay.div`
    width: 100%;
    font-size: var(--header-small);
    text-transform: uppercase;
    font-family: var(--fancy-font);
    font-weight: bold;
`,w=g.Ay.div`
    width: 100%;
    margin-bottom: var(--text-segment-gap);
`;var b=i(579);const f=e=>{let{signInfo:r,showSignInfo:i,setShowSignInfo:g,calendar:f,index:A}=e;const{lang:$}=(0,o.X)(),j=(0,n.Ub)({query:"(max-width: 1024px)"}),k=(0,a.useCallback)((()=>{g(!1)}),[g]);return r?(console.log(r,"sign info ******"),(0,b.jsx)(d.A,{width:"1050px",open:i,background:"light",height:j?"100%":"90%",handleClose:k,children:(0,b.jsx)(s.A,{children:(0,b.jsxs)(c,{children:[(0,b.jsx)(h,{children:(0,b.jsxs)(m,{children:[(0,b.jsx)(v,{children:null===r||void 0===r?void 0:r.info.title}),(0,b.jsx)(u,{src:"https://api.thetajikheritage.com"+t[f][A].img.src})]})}),(0,b.jsx)(p,{children:r.info.desc.map(((e,r)=>(0,b.jsxs)(x,{children:[(0,b.jsx)(y,{children:e.subtitle}),(0,b.jsx)(l.n,{data:e.body,TextWrapper:w})]},`sign_dialog_${r}`)))})]})})})):null}},4414:(e,r,i)=>{i.d(r,{A:()=>k});var a=i(5043),t=i(2958),o=i(5953),n=i(9657),d=i(1529);const s=d.Ay.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: var(--text-segment-gap) var(--page-padding);
    padding: ${e=>{let{$reverse:r}=e;return null===r?"var(--text-segment-gap) var(--page-padding)":r?"var(--text-segment-gap) 0rem var(--text-segment-gap) var(--page-padding)":"var(--text-segment-gap) var(--page-padding) var(--text-segment-gap) 0rem"}};
`,l=d.Ay.div`
    z-index: 1;
    flex-grow: 1;
    align-items: center;
    display: flex;
`,g=(0,d.Ay)(l)`
    margin-left: -0.25rem;
`,c=(0,d.Ay)(l)`
    margin-right: -0.25rem;
    display: ${e=>{let{$show:r}=e;return r?"flex":"none"}};
`,h=d.Ay.div`
    height: 1px;
    width: 100%;
    background-color: var(--primary-gold-color);
`,p=d.Ay.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--primary-gold-color);
`,m=d.Ay.span`
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
`;var v=i(579);const u=e=>{let{subtitle:r,hasSlides:i,reverse:a=null}=e;const t=!!(0,n.Ub)({query:"(max-width: 480px)"})||!i,o=i?a:null;return(0,v.jsxs)(s,{$reverse:o,children:[(0,v.jsxs)(c,{$show:t,children:[(0,v.jsx)(h,{}),(0,v.jsx)(p,{})]}),(0,v.jsx)(m,{dangerouslySetInnerHTML:{__html:r}}),(0,v.jsxs)(g,{children:[(0,v.jsx)(p,{}),(0,v.jsx)(h,{})]})]})};var x=i(1070);const y=e=>{let{title:r,color:i,align:a}=e;return(0,v.jsx)(x.a,{$align:a,$color:i,children:r})},w=d.Ay.div`
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
`,b=d.Ay.div`
    width: 100%;
    padding: ${e=>{let{$padding:r}=e;return r?"0rem":"var(--text-segment-gap) 0rem 0rem var(--page-padding)"}};
`,f=d.Ay.div`
    width: 29rem;
    height: 35rem;
    z-index: 2;
    position: relative;
    float: ${e=>{let{$reverse:r}=e;return r?"right":"left"}};
    border-top-left-radius: ${e=>{let{$topLeftRad:r}=e;return r&&`${r}rem`}};
    margin: ${e=>{let{$i:r,$reverse:i}=e;return 0===r?i?"0rem 0rem 2rem 3rem":"0rem 3rem 2rem 0rem":i?"var(--text-segment-gap) 0rem 2rem 3rem":"var(--text-segment-gap) 3rem 2rem 0rem"}};

    @media (max-width: 480px) {
        margin: 0rem;
        width: 100svw;
        height: 120.49svw;
        border-radius: 0rem;
        margin: ${e=>{let{$i:r}=e;return 0===r?"0rem 0rem var(--text-segment-gap) 0rem":"var(--text-segment-gap) 0rem"}};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 30rem;
        height: 36.15rem;
        margin-bottom: 1rem;
        ${e=>{let{$reverse:r}=e;return r?"margin-left: 2rem":"margin-right: 2rem"}};
    }
`,A=d.Ay.div`
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
`,$=(0,d.Ay)(A)`
    padding: 0rem var(--page-padding) 0rem var(--page-padding);
`,j=(0,d.Ay)(A)`
    padding: 0rem var(--page-padding) 0rem var(--page-padding);
`,k=e=>{let{i:r,data:i,title:n="",reverse:d=null,topLeftRad:s}=e;const l=(0,a.useRef)(null),[g,c]=(0,a.useState)(0),h=!!(i.slides&&i.slides.length>0);return(0,a.useEffect)((()=>{if(l&&l.current){var e;const r=null===l||void 0===l||null===(e=l.current)||void 0===e?void 0:e.getBoundingClientRect().width;c(r)}}),[]),(0,v.jsxs)(w,{children:[h?(0,v.jsx)(f,{$i:r,ref:l,$reverse:d,$topLeftRad:0===r?s:0,children:(0,v.jsx)(t.A,{width:g,slides:null===i||void 0===i?void 0:i.slides,topLeftRad:0===r?s:0})}):null,(0,v.jsx)(b,{$padding:h,children:0===r&&(0,v.jsx)(y,{title:n})}),(0,v.jsx)(u,{hasSlides:h,subtitle:i.subtitle,reverse:d}),(0,v.jsx)(o.n,{data:null===i||void 0===i?void 0:i.body,TextWrapper:h?d?j:$:A})]})}},3768:(e,r,i)=>{i.d(r,{A:()=>l});i(5043);var a=i(1529),t=i(7392),o=i(3438);const n=(0,a.Ay)(t.A)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // Don't delete or else can't click
    position: absolute;
    z-index: 10;

    &.MuiIconButton-root {
        width: calc(var(--header-height) - 2rem);
        height: calc(var(--header-height) - 2rem);
        padding: 0.15rem;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            width: calc(var(--header-height) - 0.75rem);
            height: calc(var(--header-height) - 0.75rem);
        }
    }
`,d=(0,a.Ay)(o.A)`
    color: var(--primary-gold-color);

    &.MuiSvgIcon-root {
        height: 100%;
        width: 100%;
    }
`;var s=i(579);const l=e=>{let{handleClose:r}=e;return(0,s.jsx)(n,{onClick:r,children:(0,s.jsx)(d,{})})}},5234:(e,r,i)=>{i.d(r,{A:()=>g});i(5043);var a=i(2008),t=i(3768),o=i(1529),n=i(1485);const d=(0,o.Ay)(n.A)`
    ${e=>{let{hideBackdrop:r}=e;return r?"pointer-events: none;":""}}

    & .MuiPaper-root {
        /* overflow: hidden; */
        font-size: var(--body-text);
        border-radius: var(--big-radius);
        width: ${e=>{let{$width:r}=e;return r&&r}};
        max-width: ${e=>{let{$width:r}=e;return r&&r}};
        height: ${e=>{let{$height:r}=e;return r&&r}};
        background-color: ${e=>{let{$background:r}=e;return"dark"===r?"var(--primary-black-color)":"var(--primary-white-color)"}};
        box-shadow: ${e=>{let{$background:r}=e;return"dark"===r?"var(--primary-box-shadow) var(--primary-black-color)":"var(--primary-box-shadow) var(--primary-shadow-color)"}};

        @media (max-width: 480px) {
            font-size: var(--body-text);
            margin: 0rem;
            width: calc(100vw - (2 * var(--page-padding)));
            max-width: calc(100vw - (2 * var(--page-padding)));
            height: ${e=>{let{$height:r}=e;return r||"fit-content"}};
        }
    }

    & .MuiModal-backdrop {
        background-color: ${e=>{let{$background:r}=e;return"dark"===r?"rgba(252 246 233 / 30%)":"rgba(15 10 0 / 30%)"}};
    }
`,s=o.Ay.div`
    position: absolute;
    right: 0rem;
`;var l=i(579);const g=e=>{let{handleClose:r,open:i,children:o,width:n,background:g="",height:c="auto",hideBackdrop:h=!1}=e;return(0,l.jsxs)(d,{open:i,fullWidth:!0,$width:n,$height:c,$background:g,TransitionComponent:a.A,TransitionProps:{timeout:200},hideBackdrop:h,children:[(0,l.jsx)(s,{children:(0,l.jsx)(t.A,{handleClose:r})}),o]})}},7829:(e,r,i)=>{i.d(r,{A:()=>d});i(5043);var a=i(1529),t=i(1503);const o=(0,a.Ay)(t.A)`
    position: relative;
    font-size: var(--body-text);
    line-height: var(--body-text-height);

    &.MuiDialogContent-root {
        padding: 0rem;
        overflow: hidden;
    }
`;var n=i(579);const d=e=>{let{children:r}=e;return(0,n.jsx)(o,{children:r})}},8880:(e,r,i)=>{i.d(r,{A:()=>o});i(5043);var a=i(7542),t=i(579);const o=e=>{let{children:r}=e;return(0,t.jsx)(a.J,{children:r})}},8564:(e,r,i)=>{i.d(r,{Bj:()=>v,J3:()=>d,Mn:()=>m,QB:()=>l,TP:()=>s,Y7:()=>c,_V:()=>p,bu:()=>u,hE:()=>h,wO:()=>g});var a=i(1529),t=i(5456),o=i(7392);const n=a.i7`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`,d=a.Ay.div`
    background: var(--primary-white-color);
    background-image: url(${"/customAssets/noise.png"});
    color: var(--regular-white-color);
    position: relative;
    padding: calc(var(--page-padding) / 2) 0rem;

    &:before {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        background-image: url(${"/customAssets/noise.png"});
        -webkit-clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: -5.98rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        &:before {
            padding: 2rem;
            top: -4rem;
        }
    }
`,s=a.Ay.div`
    padding: 0rem var(--page-padding);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--square-card-gap);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem;
        justify-content: flex-start;
        gap: 1.5rem;
    }
`,l=a.Ay.div`
    opacity: 0;
    width: 10rem;
    height: 14.1rem;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: transparent;
    perspective: 62.5rem;
    border-radius: var(--small-radius);
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
    animation: ${n} 2s ease-in-out forwards;
    animation-delay: ${e=>{let{$delay:r}=e;return r||"0s"}};

    @media (max-width: 480px) {
        width: var(--small-card-width);
        height: var(--small-card-height);
    }
`,g=a.Ay.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    ${l}:hover & {
        transform: rotateY(180deg);
    }
`,c=a.Ay.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: var(--small-radius);
    padding: var(--text-segment-gap);

    ${e=>{let{$back:r}=e;return r?a.AH`
                  transform: rotateY(180deg);
                  background: var(--primary-shadow-color);
                  padding: calc(1.25 * var(--input-radius));
              `:a.AH`
                  background: var(--primary-black-color);
                  padding: var(--text-segment-gap);
              `}}
`,h=a.Ay.div`
    text-align: center;
    font-size: var(--header-small);
`,p=a.Ay.img`
    width: 100%;
    height: 100%;
`,m=a.Ay.div`
    font-size: var(--header-large);
    padding-top: var(--input-radius);
    font-family: var(--fancy-font);

    @media (max-width: 480px) {
        line-height: var(--header-big-line-height);
    }
`,v=(0,a.Ay)(o.A)`
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);

    &.MuiIconButton-root {
        position: absolute;
        width: 3.5rem;
        height: 3.5rem;
    }

    @media (max-width: 480px) {
        bottom: 0.25rem;

        &.MuiIconButton-root {
            width: 3rem;
            height: 3rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        bottom: 0.3rem;
    }
`,u=(0,a.Ay)(t.A)`
    color: var(--regular-white-color);

    &.MuiSvgIcon-root {
        height: 3rem;
        width: 3rem;
    }

    @media (max-width: 480px) {
        &.MuiSvgIcon-root {
            height: 2.5rem;
            width: 2.5rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            height: 2.8rem;
            width: 2.8rem;
        }
    }
`},8072:e=>{e.exports=JSON.parse('{"MULCHAR_CHART_IMGS":[{"id":"mouse","img":{"src":"/storage/history/calendars/m\u016bljar/slides/mouse.png","angle":100}},{"id":"ox","img":{"src":"/storage/history/calendars/m\u016bljar/slides/ox.png","angle":150}},{"id":"tiger","img":{"src":"/storage/history/calendars/m\u016bljar/slides/tiger.png","angle":165}},{"id":"rabbit","img":{"src":"/storage/history/calendars/m\u016bljar/slides/rabbit.png","angle":190}},{"id":"whale","img":{"src":"/storage/history/calendars/m\u016bljar/slides/whale.png","angle":230}},{"id":"snake","img":{"src":"/storage/history/calendars/m\u016bljar/slides/snake.png","angle":-105}},{"id":"horse","img":{"src":"/storage/history/calendars/m\u016bljar/slides/horse.png","angle":-60}},{"id":"sheep","img":{"src":"/storage/history/calendars/m\u016bljar/slides/sheep.png","angle":-45}},{"id":"monkey","img":{"src":"/storage/history/calendars/m\u016bljar/slides/monkey.png","angle":350}},{"id":"rooster","img":{"src":"/storage/history/calendars/m\u016bljar/slides/rooster.png","angle":20}},{"id":"dog","img":{"src":"/storage/history/calendars/m\u016bljar/slides/dog.png","angle":40}},{"id":"pig","img":{"src":"/storage/history/calendars/m\u016bljar/slides/pig.png","angle":75}}],"MULCHAR_CALC_PLACEHOLDER":{"us":"Year","ru":"\u0413\u043e\u0434","tj":"\u0421\u043e\u043b","fa":"\u0633\u0627\u0644"},"ZODIAC_CHART_IMGS":[{"id":"aries","img":{"src":"/storage/history/calendars/zodiac/slides/aries.png","icon":"/storage/history/calendars/zodiac/icons/aries.png","angle":185}},{"id":"taurus","img":{"src":"/storage/history/calendars/zodiac/slides/taurus.png","icon":"/storage/history/calendars/zodiac/icons/taurus.png","angle":215}},{"id":"gemini","img":{"src":"/storage/history/calendars/zodiac/slides/gemini.png","icon":"/storage/history/calendars/zodiac/icons/gemini.png","angle":205}},{"id":"cancer","img":{"src":"/storage/history/calendars/zodiac/slides/cancer.png","icon":"/storage/history/calendars/zodiac/icons/cancer.png","angle":220}},{"id":"leo","img":{"src":"/storage/history/calendars/zodiac/slides/leo.png","icon":"/storage/history/calendars/zodiac/icons/leo.png","angle":-60}},{"id":"virgo","img":{"src":"/storage/history/calendars/zodiac/slides/virgo.png","icon":"/storage/history/calendars/zodiac/icons/virgo.png","angle":270}},{"id":"libra","img":{"src":"/storage/history/calendars/zodiac/slides/libra.png","icon":"/storage/history/calendars/zodiac/icons/libra.png","angle":-60}},{"id":"scorpio","img":{"src":"/storage/history/calendars/zodiac/slides/scorpio.png","icon":"/storage/history/calendars/zodiac/icons/scorpio.png","angle":-40}},{"id":"sagittarius","img":{"src":"/storage/history/calendars/zodiac/slides/sagittarius.png","icon":"/storage/history/calendars/zodiac/icons/sagittarius.png","angle":15}},{"id":"capricorn","img":{"src":"/storage/history/calendars/zodiac/slides/capricorn.png","icon":"/storage/history/calendars/zodiac/icons/capricorn.png","angle":25}},{"id":"aquarius","img":{"src":"/storage/history/calendars/zodiac/slides/aquarius.png","icon":"/storage/history/calendars/zodiac/icons/aquarius.png","angle":40}},{"id":"pisces","img":{"src":"/storage/history/calendars/zodiac/slides/pisces.png","icon":"/storage/history/calendars/zodiac/icons/pisces.png","angle":30}}]}')}}]);
//# sourceMappingURL=4.852b6fcc.chunk.js.map