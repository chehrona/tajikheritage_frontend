"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[742,452],{7972:(e,r,a)=>{a.d(r,{Ai:()=>o,Mr:()=>n,N1:()=>s,Pd:()=>c,X4:()=>d,g$:()=>i,jl:()=>l});var t=a(1529);const i=t.Ay.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: var(--text-segment-gap) var(--page-padding);
    padding: ${e=>{let{$reverse:r}=e;return null===r?"var(--text-segment-gap) var(--page-padding)":r?"var(--text-segment-gap) 0rem var(--text-segment-gap) var(--page-padding)":"var(--text-segment-gap) var(--page-padding) var(--text-segment-gap) 0rem"}};

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) var(--page-padding);
    }
`,o=t.Ay.div`
    z-index: 1;
    flex-grow: 1;
    align-items: center;
    display: flex;
`,n=(0,t.Ay)(o)`
    margin-left: -0.25rem;
`,d=(0,t.Ay)(o)`
    margin-right: -0.25rem;
    display: ${e=>{let{$show:r}=e;return r?"flex":"none"}};
`,s=t.Ay.div`
    height: 1px;
    width: 100%;
    background-color: var(--primary-gold-color);
`,l=t.Ay.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--primary-gold-color);
`,c=t.Ay.span`
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
`},1070:(e,r,a)=>{a.d(r,{a:()=>t});const t=a(1529).Ay.div`
    font-size: var(--header-huge);
    font-weight: 500;
    font-style: italic;
    font-family: var(--fancy-font);
    color: var(--regular-black-color);
    text-shadow: 0.0625rem 0.0625rem 0.0875rem var(--primary-black-color);
    text-align: ${e=>{let{$align:r}=e;return r?`${r}`:"unset"}};
    color: ${e=>{let{$color:r}=e;return r?`${r}`:"var(--regular-black-color)"}};

    @media (max-width: 480px) {
        font-size: var(--header-large);
        line-height: var(--header-large-line-height);
        padding: 0rem var(--page-padding);
    }
`},4929:(e,r,a)=>{a.d(r,{n:()=>S});var t=a(5043),i=a(36),o=a(1529),n=a(4127),d=a(8978),s=a(579);const l=(0,o.Ay)((e=>{let{className:r,...a}=e;return(0,s.jsx)(n.A,{...a,classes:{popper:r}})}))((()=>({[`& .${d.A.tooltip}`]:{fontSize:"var(--body-text)",fontWeight:"normal",borderRadius:"0.5rem"},[`& .${d.A.tooltipArrow}`]:{backgroundColor:"var(--primary-shadow-color)"},[`& .${d.A.arrow}`]:{color:"var(--primary-shadow-color)"}}))),c=o.Ay.div`
    padding: 0.5rem;
    font-family: var(--regular-font);
    font-size: var(--body-text);

    @media (max-width: 480px) {
        padding: 0.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding: 0.25rem;
        line-height: 1.5rem;
    }
`,m=o.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 0.5rem;
`,h=o.Ay.img`
    height: auto;
    width: 10rem;
    margin: 0 auto;

    @media (max-width: 1024px) {
        padding-bottom: 0.5rem;
    }
`,p=o.Ay.span`
    border-bottom: 1px dotted var(--primary-shadow-color);

    .termSpan {
        font-weight: bold;
        color: var(--primary-gold-color);
    }
`,g=e=>{let{content:r}=e;const[a,o]=(0,t.useState)(!1);return(0,s.jsx)(l,{open:a,arrow:!0,placement:"top",title:null!==r&&void 0!==r&&r.img?(0,s.jsxs)(m,{children:[(0,s.jsx)(h,{src:"https://api.thetajikheritage.com"+(null===r||void 0===r?void 0:r.img)}),(0,s.jsx)(c,{dangerouslySetInnerHTML:{__html:r.text}})]}):(0,s.jsx)(c,{dangerouslySetInnerHTML:{__html:r.text}}),children:(0,s.jsx)("span",{children:(0,s.jsx)(i.x,{onClickAway:function(){o(!1)},children:(0,s.jsx)(p,{dangerouslySetInnerHTML:{__html:r.word},onClick:function(){o(!0)},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)})})})})};var v=a(215);const u=o.Ay.div`
    position: relative;
    margin: var(--text-segment-gap) 0rem;
    transition: all 0.5s ease-in-out;
    border-radius: var(--small-radius);

    div {
        border-bottom-left-radius: var(--small-radius);
        border-bottom-right-radius: var(--small-radius);
    }

    ${e=>{let{$expanded:r}=e;return r?o.AH`
                  height: 100svh;
                  width: 99.4vh;
                  cursor: zoom-out;
              `:o.AH`
                  height: 45vh;
                  cursor: zoom-in;
                  width: 44.7vh;
              `}};

    @media (max-width: 480px) {
        width: 100%;
        height: auto;

        div {
            bottom: 0.25rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: auto;
        width: ${e=>{let{$expanded:r}=e;return r?"100%":"50%"}};
    }
`,x=o.Ay.img`
    width: 100%;
    height: auto;
    border-radius: var(--small-radius);

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;var y=a(8212);const w=e=>{let{content:r}=e;const{lang:a}=(0,v.Xe)(),[i,o]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{o(!1)}),[a]),(0,s.jsxs)(u,{$expanded:i,onClick:()=>o((e=>!e)),children:[(0,s.jsx)(x,{$expanded:i,src:`https://api.thetajikheritage.com${r.source}`}),r.info.length>0?(0,s.jsx)(y.cb,{dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.info}}):null]})};var b=a(102);const f=o.Ay.div`
    width: '100%';
    height: 30rem;
    justify-content: center;
    align-items: center;
    background-color: red;
    padding: var(--text-segment-gap) 0rem 0rem 0rem;
`,A=(o.Ay.div`
    width: '100%';
    height: 1px;
`,o.Ay.iframe`
    width: auto;
    /* height: 100%; */
    outline: none;
    border: none;
`);var j=a(9657),$=a(7972);const k=e=>{let{content:r}=e;const{lang:a}=(0,v.Xe)(),[i,o]=(0,t.useState)(!1),n=((0,j.Ub)({query:"(max-width: 1024px)"}),(0,t.useRef)(null)),[d,l]=(0,t.useState)(!1);(0,t.useCallback)((()=>{l((e=>!e))}),[]);return r?(0,s.jsxs)(f,{children:[(0,s.jsxs)($.Ai,{children:[(0,s.jsx)($.N1,{}),(0,s.jsx)($.jl,{})]}),(0,s.jsx)(A,{src:`https://www.youtube-nocookie.com/embed/${null===r||void 0===r?void 0:r.link}?autoplay=1&rel=0&modestbranding=1`,allow:"autoplay; encrypted-media",allowFullScreen:!0,ref:n}),(0,s.jsxs)($.Ai,{children:[(0,s.jsx)($.jl,{}),(0,s.jsx)($.N1,{})]})]}):null},_=o.Ay.div``,z=o.Ay.div`
    display: flex;
    align-items: center;
    height: 2.5rem;
    margin-bottom: var(--text-segment-gap);

    &:last-child {
        margin-bottom: 0rem;
    }
`;var I=a(9617);const S=e=>{let{data:r,TextWrapper:a=_}=e;return(0,s.jsxs)(t.Fragment,{children:[(0,s.jsx)(I.A,{}),(0,s.jsx)(a,{children:Object.keys(r).map(((e,a)=>{const t=r[e];switch(!0){case e.startsWith("text"):return(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:t}},a+10);case e.startsWith("tooltip"):return(0,s.jsx)(g,{content:t},a);case e.startsWith("sound"):const r=t;return(0,s.jsxs)(z,{children:[(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:r.text}}),(0,s.jsx)(b.A,{data:r.source})]},e);case e.startsWith("table"):return(0,s.jsx)(w,{content:t},e);case e.startsWith("video"):return(0,s.jsx)(k,{content:t},e);default:return null}}))})]})}},4821:(e,r,a)=>{a.d(r,{A:()=>n});a(5043);var t=a(7131),i=a(1063),o=a(579);const n=e=>{let{disabled:r,movePrev:a}=e;return(0,o.jsx)(i.O,{onClick:a,$disabled:r,children:(0,o.jsx)(i.i,{children:(0,o.jsx)(t.A,{style:{marginLeft:"7px"}})})})}},6390:(e,r,a)=>{a.d(r,{A:()=>n});a(5043);var t=a(9389),i=a(1063),o=a(579);const n=e=>{let{disabled:r,moveNext:a}=e;return(0,o.jsx)(i.O,{onClick:a,$disabled:r,children:(0,o.jsx)(i.i,{children:(0,o.jsx)(t.A,{style:{marginLeft:"1px"}})})})}},1063:(e,r,a)=>{a.d(r,{O:()=>o,i:()=>n});var t=a(1529),i=a(7392);const o=(0,t.Ay)(i.A)`
    width: 4rem;
    height: 4rem;
    color: var(--primary-gold-color);
    ${e=>{let{$disabled:r}=e;return r?t.AH`
                  opacity: 0;
                  pointer-events: none;
              `:t.AH`
                  opacity: 1;
                  pointer-events: all;
              `}};

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`,n=t.Ay.div`
    color: var(--secondary-gold-color);
    height: 100%;
    width: 100%;
    border: 1px solid var(--secondary-gold-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bd9d5266;
    transition: 0.3s box-shadow;

    &:hover {
        box-shadow: var(--primary-box-shadow) var(--secondary-white-color);
    }

    @media (max-device-width: 1024px) {
        &:hover {
            box-shadow: 0rem 0rem 0rem 0rem var(--secondary-white-color);
        }
    }
`},7542:(e,r,a)=>{a.d(r,{J:()=>t});const t=a(1529).Ay.div`
    border-radius: var(--page-radius);
    margin-right: 0.8rem;
    background-image: url(${"/customAssets/noise.webp"});
    background-color: var(--primary-white-color);
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem var(--primary-shadow-color);
    min-height: 55rem;

    @media (max-width: 480px) {
        margin: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }
`},8044:(e,r,a)=>{a.d(r,{A:()=>o});a(5043);var t=a(9932),i=a(579);const o=e=>{let{children:r}=e;return(0,i.jsx)(t.W,{children:r})}},9932:(e,r,a)=>{a.d(r,{W:()=>o,x:()=>n});var t=a(1529);const i=t.i7`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`,o=t.Ay.div`
    position: relative;
    box-sizing: border-box;
    background-color: var(--regular-white-color);
    padding: 2rem var(--page-padding) 4rem var(--page-padding);
    animation: ${i} 1s ease-in-out forwards;
    overflow-x: hidden;
    min-height: 100svh;

    @media (max-width: 480px) {
        padding: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: var(--page-padding);
    }
`,n=t.Ay.div`
    box-sizing: border-box;
    padding: 2rem var(--page-padding) 4rem var(--page-padding);
    background: var(--regular-white-color);
    animation: ${i} 1s ease-in-out forwards;
    overflow-x: hidden;
    min-height: 100svh;

    @media (max-width: 480px) {
        padding: var(--page-padding) var(--page-padding)
            calc(4 * var(--page-padding)) var(--page-padding);
    }
`},2958:(e,r,a)=>{a.d(r,{A:()=>l});var t=a(5043),i=a(215),o=a(4821),n=a(6390),d=a(8212),s=a(579);const l=e=>{let{slides:r=[],width:a,height:l,topLeftRad:c}=e;const{lang:m}=(0,i.Xe)(),[h,p]=(0,t.useState)(0),[g,v]=(0,t.useState)(0),[u,x]=(0,t.useState)([]);(0,t.useEffect)((()=>{x([...r])}),[m]);return(0,s.jsxs)(d.zr,{children:[r.length>1&&(0,s.jsx)(d.fV,{children:null===r||void 0===r?void 0:r.map(((e,r)=>(0,s.jsx)(d.jl,{$selected:r===g},`${null===e||void 0===e?void 0:e.img}_1`)))}),(0,s.jsx)(d.VI,{children:u.length>0?null===u||void 0===u?void 0:u.map((e=>{const r=null!==e&&void 0!==e&&e.img?`https://api.thetajikheritage.com${e.img}`:"/customAssets/loader.png",t=null!==e&&void 0!==e&&e.overlay?`https://api.thetajikheritage.com${e.overlay}`:"";return(0,s.jsx)(d.xW,{$width:a,$height:l,$translate:h,$topLeftRad:c,$src:r,$overlay:t,children:(null===e||void 0===e?void 0:e.info)&&(0,s.jsx)(d.cb,{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.info}})},`${null===e||void 0===e?void 0:e.img}_2`)})):null}),(null===u||void 0===u?void 0:u.length)>1?(0,s.jsxs)(d.eM,{children:[(0,s.jsx)(o.A,{disabled:0===g,movePrev:()=>{g>0&&(v((e=>e-1)),p((e=>e+a)))}}),(0,s.jsx)(n.A,{disabled:g===(null===u||void 0===u?void 0:u.length)-1,moveNext:()=>{g<(null===u||void 0===u?void 0:u.length)-1&&(v((e=>e+1)),p((e=>e-a)))}})]}):null]})}},8212:(e,r,a)=>{a.d(r,{VI:()=>i,cb:()=>s,eM:()=>n,fV:()=>l,jl:()=>c,xW:()=>o,zr:()=>d});var t=a(1529);const i=t.Ay.div`
    position: absolute;
    display: flex;
`,o=t.Ay.div`
    position: relative;
    transition: transform 0.5s;
    background-repeat: no-repeat;
    background-position: center center;
    min-width: ${e=>{let{$width:r}=e;return r&&`${r}px`}};
    max-width: ${e=>{let{$width:r}=e;return r&&`${r}px`}};
    height: ${e=>{let{$width:r,$height:a}=e;return a?`${a}`:r&&1.2049*r+"px"}};
    border-top-left-radius: ${e=>{let{$topLeftRad:r}=e;return r&&`${r}rem`}};
    transform: ${e=>{let{$translate:r}=e;return`translateX(${r}px)`}};
    ${e=>{let{$src:r}=e;return r?t.AH`
                  background-image: url(${r});
                  background-size: cover;
              `:t.AH`
                  background-image: url('/customAssets/loader.png');
              `}}

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-image: ${e=>{let{$overlay:r}=e;return r&&`url(${r})`}};
        filter: drop-shadow(0px 0px 1px var(--secondary-white-color));
        border-top-left-radius: ${e=>{let{$topLeftRad:r}=e;return r&&`${r}rem`}};
    }

    @media (max-width: 480px) {
        border-radius: 0rem;

        &::after {
            border-radius: 0rem;
        }
    }
`,n=t.Ay.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    transform: translateY(-50%);
    justify-content: space-between;
`,d=t.Ay.div`
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
`,s=t.Ay.div`
    position: absolute;
    z-index: 11;
    font-style: italic;
    margin: 0.25rem;
    text-align: left;
    color: var(--regular-white-color);
    background-color: #262626a6;
    width: calc(100% - 0.5rem);
    padding: 0.25rem 0.5rem;
    height: auto;
    bottom: 0rem;
    font-size: var(--info-text);
    line-height: var(--info-text-line-height);
`,l=t.Ay.div`
    display: flex;
    height: 1rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0.25rem;
    z-index: 1;
`,c=t.Ay.div`
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background-color: var(--primary-gold-color);
    ${e=>{let{$selected:r}=e;return r?t.AH`
                  border: 1px solid var(--secondary-gold-color);
                  opacity: 1;
              `:t.AH`
                  border: 1px solid var(--primary-gold-color);
                  opacity: 0.5;
              `}};
    margin-right: 0.25rem;

    &:last-child {
        margin-right: 0rem;
    }

    @media (max-width: 480px) {
        width: 0.5rem;
        height: 0.5rem;
    }
`},102:(e,r,a)=>{a.d(r,{A:()=>l});var t=a(5043),i=a(7139),o=a(1529),n=a(7392);const d=(0,o.Ay)(n.A)`
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -0.1rem;

    &.MuiIconButton-root {
        color: var(--primary-white-color);
        margin-left: 0.3rem;
        border: 1px solid var(--primary-gold-color);
        background-color: var(--primary-shadow-color);
        box-shadow: var(--primary-box-shadow) var(--primary-gold-color);
        transition: 0.45s box-shadow, 0.45s background-color;

        &:hover {
            background-color: var(--primary-gold-color);
            box-shadow: var(--primary-box-shadow) var(--primary-black-color);
        }

        svg {
            filter: drop-shadow(0px 0px 1px var(--primary-black-color));
        }
    }

    @media (max-device-width: 1024px) {
        &.MuiIconButton-root {
            &:hover {
                transition: none;
                background-color: var(--primary-shadow-color);
                box-shadow: var(--primary-box-shadow) var(--primary-gold-color);
            }

            svg {
                filter: drop-shadow(0px 0px 0px var(--primary-black-color));
            }
        }
    }
`;var s=a(579);const l=e=>{let{data:r}=e;return(0,s.jsx)(t.Fragment,{children:r.length>0?(0,s.jsxs)(d,{onClick:e=>(e=>{e.currentTarget.children[0].play()})(e),children:[(0,s.jsx)("audio",{src:"https://api.thetajikheritage.com"+r}),(0,s.jsx)(i.A,{})]}):null})}},4952:(e,r,a)=>{a.d(r,{A:()=>w});var t=a(5043),i=a(215),o=a(2754),n=a(36),d=a(2081),s=a(7392),l=a(1529),c=a(8293),m=a(2101);const h=l.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,p=l.Ay.div`
    width: 17rem;
    height: 2.5rem;
    margin-right: 0rem;
    margin-left: 0.3rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/arrows/source.svg');

    ${e=>{let{$right:r}=e;return!r&&l.AH`
            margin-right: 0.3rem;
            margin-left: 0rem;
            transform: rotateY(180deg);
        `}}

    @media (max-width: 480px) {
        width: 15rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 15rem;
        height: 3rem;
    }
`,g=(0,l.Ay)(c.A)`
    color: var(--primary-shadow-color);
`,v=(0,l.Ay)(m.A)`
    color: var(--primary-shadow-color);
`;var u=a(579);const x=e=>{let{isDropdownOpen:r,setIsDropdownOpen:a}=e;return(0,u.jsxs)(h,{children:[(0,u.jsx)(p,{$right:!0}),(0,u.jsx)(s.A,{onClick:()=>a((e=>!e)),children:r?(0,u.jsx)(v,{}):(0,u.jsx)(g,{})}),(0,u.jsx)(p,{$right:!1})]})};var y=a(355);const w=e=>{let{data:r}=e;const{lang:a}=(0,i.Xe)(),[s,l]=(0,t.useState)(!1);return(0,u.jsx)(y.J3,{children:(0,u.jsx)(n.x,{onClickAway:function(){l(!1)},children:(0,u.jsxs)(y.Tq,{children:[(0,u.jsx)(x,{setIsDropdownOpen:l,isDropdownOpen:s}),(0,u.jsx)(y.Re,{$open:s,children:(0,u.jsxs)(y.Fq,{$open:s,children:[(0,u.jsx)(y.tK,{children:o.Fx[a]}),r.map(((e,r)=>(0,u.jsxs)(y.rY,{children:[(0,u.jsx)(y.EU,{children:(0,u.jsxs)("div",{children:[r+1,"."]})}),(0,u.jsxs)(y.zy,{children:[(0,u.jsx)(y.Or,{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.name}}),null!==e&&void 0!==e&&e.link.length?(0,u.jsx)(y.Av,{href:null===e||void 0===e?void 0:e.link,target:"_blank",children:(0,u.jsx)(d.A,{})}):null]})]},r)))]})})]})})})}},355:(e,r,a)=>{a.d(r,{Av:()=>g,EU:()=>p,Fq:()=>l,J3:()=>n,Or:()=>m,Re:()=>s,Tq:()=>d,Z2:()=>u,rY:()=>h,tK:()=>c,zy:()=>v});var t=a(1529),i=a(8293),o=a(2101);const n=t.Ay.div`
    border-radius: 0rem 0rem var(--page-radius) var(--page-radius);
    background: var(--primary-white-color);
    background-image: url(${"/customAssets/noise.webp"});
    padding: var(--text-segment-gap) var(--page-padding)
        calc(6 * var(--text-segment-gap)) var(--page-padding);

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) var(--page-padding)
            calc(4 * var(--page-padding)) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 2rem 2rem;
    }
`,d=t.Ay.div`
    width: 100%;
`,s=((0,t.Ay)(i.A)`
    color: var(--primary-shadow-color);
`,(0,t.Ay)(o.A)`
    color: var(--primary-shadow-color);
`,t.Ay.div`
    max-width: 100%;
    display: block;
    position: relative;
    border-radius: var(--small-radius);
    margin-top: var(--text-segment-gap);
    color: var(--secondary-white-color);
    background: var(--primary-black-color);
    transition: all 0.5s linear 0s;
    ${e=>{let{$open:r}=e;return r?t.AH`
                  height: 20rem;
                  box-shadow: var(--primary-box-shadow)
                      var(--primary-black-color);
                  padding: var(--input-radius) calc(var(--input-radius) / 2)
                      var(--input-radius) 0rem;
              `:t.AH`
                  height: 0rem;
                  padding: 0rem;
              `}};

    @media (max-width: 480px) {
        ${e=>{let{$open:r}=e;return r?t.AH`
                      height: 30rem;
                  `:t.AH`
                      height: 0rem;
                  `}};
    }
`),l=t.Ay.div`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100%;
    display: ${e=>{let{$open:r}=e;return r?"block":"none"}};
    width: calc(100% - var(--input-radius));
    padding: 0rem calc(var(--page-padding) - 1rem - (var(--input-radius) / 2))
        var(--text-segment-gap) calc(var(--page-padding) - 1rem);

    &::-webkit-scrollbar {
        width: var(--input-radius);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: var(--input-radius);
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 0rem calc(var(--page-padding) - (var(--input-radius) / 2))
            var(--text-segment-gap) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0.75rem 2rem 1rem 1.75rem;
    }
`,c=t.Ay.div`
    font-size: var(--header-big);
    font-family: var(--fancy-font);
    font-style: italic;
    font-weight: 500;
    margin: var(--text-segment-gap) 0rem;
    color: var(--primary-white-color);

    @media (max-width: 1024px) {
        font-size: var(--header-medium);
        margin: 0rem 0rem var(--text-segment-gap) 0rem;
    }
`,m=t.Ay.span`
    font-size: var(--body-text);
    line-height: var(--body-text-line-height);
`,h=t.Ay.div`
    display: flex;
    align-items: start;
    position: relative;
    font-size: var(--body-text);
`,p=t.Ay.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`,g=t.Ay.a`
    color: var(--primary-gold-color);
    position: absolute;
    margin-left: 5px;
    bottom: 0px;

    &:link &:active {
        color: var(--primary-gold-color);
    }

    @media (max-width: 1024px) {
        bottom: 2px;
        margin-left: 3px;

        > svg {
            font-size: 1.3rem;
        }
    }
`,v=t.Ay.div`
    display: inline-block;
    padding: 0rem var(--input-radius) var(--input-radius) var(--input-radius);

    @media (max-width: 480px) {
        padding: 0rem var(--input-radius) var(--input-radius)
            var(--input-radius);
    }
`,u=t.Ay.div`
    height: calc(10 * var(--text-segment-gap));
    min-height: calc(10 * var(--text-segment-gap));

    @media (max-width: 480px) {
        height: calc(5 * var(--text-segment-gap));
        min-height: calc(5 * var(--text-segment-gap));
    }
`},5452:(e,r,a)=>{a.r(r),a.d(r,{default:()=>p});a(5043);var t=a(215),i=a(7683),o=a(4330),n=a(5260),d=a(1529);const s=d.Ay.div`
    width: 100%;
    height: calc(100svh - var(--header-height));
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        background-size: 100vw;
    }
`,l=d.Ay.div`
    height: 15rem;
    width: 25rem;
    border-radius: var(--small-radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--text-segment-gap);
    background-color: var(--regular-black-color);
    box-shadow: var(--primary-box-shadow) var(--primary-white-color);

    @media (max-width: 480px) {
        height: 10rem;
        width: 20rem;
    }
`,c=d.Ay.div`
    font-size: calc(2.75 * var(--header-large));
    font-weight: bold;
    font-family: var(--fancy-font);
    color: var(--primary-red-color);
    line-height: calc(2 * var(--header-large));

    @media (max-width: 480px) {
        font-size: var(--header-large);
    }
`,m=d.Ay.div`
    font-size: var(--header-small);
    color: var(--primary-white-color);

    @media (max-width: 480px) {
        font-size: var(--header-normal);
    }
`;var h=a(579);const p=()=>{const{lang:e}=(0,t.Xe)();return(0,i.J)("reset"),(0,h.jsx)(n.A,{children:(0,h.jsx)(s,{children:(0,h.jsxs)(l,{children:[(0,h.jsx)(c,{children:"404"}),(0,h.jsx)(m,{children:o.PAGE_NOT_FOUND[e]})]})})})}},7683:(e,r,a)=>{a.d(r,{J:()=>d});var t=a(5043),i=a(215),o=a(910),n=a(2754);const d=(e,r,a)=>{const{title:d,setTitle:s}=(0,i.Xe)(),l="landing"===r?e:e.substring(0,e.indexOf("/")),c="middle"===r?e.substring(e.indexOf("_")+1):e.substring(e.indexOf("/")+1,e.length-1);(0,t.useEffect)((()=>{"reset"===e?s(n.El):(async()=>{try{const e=await(0,o.DL)(l);let a={...d};"landing"===r?m(a,e):h(a,e),s(a)}catch(e){s(n.El)}})()}),[e,a]);const m=(e,r)=>{const{header:a}=r;for(const t in d){const r=t;let i=[...d[r]];const o=[`${a[r].toUpperCase()}`,""];i[1]=o,e[r]=i}},h=(e,t)=>{const{header:i,sections:o}=t;null===o||void 0===o||o.forEach((t=>{const{link:o,cardTitle:n}=t;if(o===c)for(const s in d){const t=s;let o=[...d[t]],l=[];l="middle"===r?[`${i[t].toUpperCase()}`,`${void 0!==n[t]?n[t]:""}`]:[`${n[t].toUpperCase()}`,`${void 0!==(null===a||void 0===a?void 0:a.name[t])?null===a||void 0===a?void 0:a.name[t]:""}`],o[1]=l,e[t]=o}}))}}},4946:(e,r,a)=>{a.d(r,{Y:()=>s});var t=a(5043),i=a(1036),o=a(215),n=a(3216),d=a(4330);const s=()=>{const{lang:e}=(0,o.Xe)(),{pathname:r}=(0,n.zy)(),a=(0,t.useRef)({});return(0,t.useEffect)((()=>{Object.keys(a.current).forEach((r=>{const{key:t}=a.current[r],o=d[t][e];i.oR.update(r,{render:o,autoClose:2e3})}))}),[e]),(0,t.useEffect)((()=>{i.oR.dismiss()}),[r]),{showToast:(r,t,o)=>{const n=d[r][e];switch(a.current[o]={key:r},t){case"info":return i.oR.info(n,{toastId:o});case"success":return i.oR.success(n,{toastId:o});case"error":return i.oR.error(n,{toastId:o})}}}}},910:(e,r,a)=>{a.d(r,{AN:()=>m,_r:()=>s,uu:()=>l,Gg:()=>d,DL:()=>n,c1:()=>c});var t=a(6213);const i=e=>{let r=null;return localStorage.getItem("th_Id")?r=localStorage.getItem("th_Id"):(r=e+"_"+Math.random().toString(36).substring(2,9),localStorage.setItem("th_Id",r)),r},o="https://api.thetajikheritage.com",n=async e=>{e||(e="");try{const r=i(e);return(await t.A.get(`${o}/${e}`,{params:{page:e,userId:r}})).data}catch(r){throw r}},d=async e=>{try{const r=i(e);return(await t.A.get(`${o}/${e}`,{params:{userId:r,page:e}})).data}catch(r){throw r}},s=async(e,r)=>{try{const a=i(e);return(await t.A.get(`${o}/${e}`,{params:{userId:a,page:e,value:r}})).data}catch(a){throw a}},l=async(e,r)=>{try{const a=i(`${r}${e}`);return(await t.A.get(`${o}/${r}`,{params:{id:e,page:`${r}/${e}`,userId:a}})).data}catch(a){throw a}},c=async e=>{try{const r=await t.A.get(`${o+e}`,{responseType:"arraybuffer"}),a=new Blob([r.data],{type:"application/pdf"});return URL.createObjectURL(a)}catch(r){throw r}},m=async e=>{try{return await t.A.post(`${o}/email`,{info:e})}catch(r){throw r}}},4330:e=>{e.exports=JSON.parse('{"SEARCH_NOT_FOUND":{"us":"No items match your search","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0627\u0632 \u0631\u0648\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u06cc \u0634\u0645\u0627 \u0686\u06cc\u0632\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"ARTICLE_UNAVAILABLE":{"us":"Article is not available yet","ru":"\u0421\u0442\u0430\u0442\u044c\u044f \u0435\u0449\u0435 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430","tj":"\u041c\u0430\u049b\u043e\u043b\u0430 \u04b3\u0430\u043d\u04ef\u0437 \u0432\u0443\u04b7\u0443\u0434 \u043d\u0430\u0434\u043e\u0440\u0430\u0434","fa":"\u0645\u0642\u0627\u0644\u0647 \u0647\u0646\u0648\u0632 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f"},"PAGE_NOT_FOUND":{"us":"Page not found","ru":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","tj":"\u0421\u0430\u04b3\u0438\u0444\u0430 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0635\u062d\u06cc\u0641\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"E_500":{"us":"Internal server error","ru":"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430","tj":"\u0425\u0430\u0442\u043e\u0433\u04e3 \u0431\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0438 \u0434\u043e\u0445\u0438\u043b\u04e3","fa":"\u062e\u0637\u0627\u06af\u06cc \u0628\u0627 \u0633\u0631\u0648\u0631\u06cc \u062f\u0627\u062e\u0644\u06cc"},"E_204":{"us":"No data match your request","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":""}}')}}]);
//# sourceMappingURL=742.2c73744c.chunk.js.map