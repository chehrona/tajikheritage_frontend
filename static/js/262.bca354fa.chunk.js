"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[262,452],{1070:(r,e,a)=>{a.d(e,{a:()=>t});const t=a(1529).Ay.div`
    font-size: var(--header-huge);
    font-weight: 500;
    font-style: italic;
    font-family: var(--fancy-font);
    color: var(--regular-black-color);
    text-shadow: 0.0625rem 0.0625rem 0.0875rem var(--primary-black-color);
    text-align: ${r=>{let{$align:e}=r;return e?`${e}`:"unset"}};
    color: ${r=>{let{$color:e}=r;return e?`${e}`:"var(--regular-black-color)"}};

    @media (max-width: 480px) {
        font-size: var(--header-large);
        line-height: var(--header-large-line-height);
        padding: 0rem var(--page-padding);
    }
`},5953:(r,e,a)=>{a.d(e,{n:()=>$});var t=a(5043),i=a(36),o=a(1529),n=a(4127),d=a(8978),s=a(579);const l=(0,o.Ay)((r=>{let{className:e,...a}=r;return(0,s.jsx)(n.A,{...a,classes:{popper:e}})}))((()=>({[`& .${d.A.tooltip}`]:{fontSize:"var(--body-text)",fontWeight:"normal",borderRadius:"0.5rem"},[`& .${d.A.tooltipArrow}`]:{backgroundColor:"var(--primary-shadow-color)"},[`& .${d.A.arrow}`]:{color:"var(--primary-shadow-color)"}}))),c=o.Ay.div`
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
`,g=r=>{let{content:e}=r;const[a,o]=(0,t.useState)(!1);return(0,s.jsx)(l,{open:a,arrow:!0,placement:"top",title:null!==e&&void 0!==e&&e.img?(0,s.jsxs)(m,{children:[(0,s.jsx)(h,{src:"https://api.thetajikheritage.com"+(null===e||void 0===e?void 0:e.img)}),(0,s.jsx)(c,{dangerouslySetInnerHTML:{__html:e.text}})]}):(0,s.jsx)(c,{dangerouslySetInnerHTML:{__html:e.text}}),children:(0,s.jsx)("span",{children:(0,s.jsx)(i.x,{onClickAway:function(){o(!1)},children:(0,s.jsx)(p,{dangerouslySetInnerHTML:{__html:e.word},onClick:function(){o(!0)},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)})})})})};var v=a(215);const u=o.Ay.div`
    position: relative;
    margin: var(--text-segment-gap) 0rem;
    transition: all 0.5s ease-in-out;
    border-radius: var(--small-radius);

    div {
        border-bottom-left-radius: var(--small-radius);
        border-bottom-right-radius: var(--small-radius);
    }

    ${r=>{let{$expanded:e}=r;return e?o.AH`
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
        width: ${r=>{let{$expanded:e}=r;return e?"100%":"50%"}};
    }
`,x=o.Ay.img`
    width: 100%;
    height: auto;
    border-radius: var(--small-radius);

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;var y=a(8212);const w=r=>{let{content:e}=r;const{lang:a}=(0,v.Xe)(),[i,o]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{o(!1)}),[a]),(0,s.jsxs)(u,{$expanded:i,onClick:()=>o((r=>!r)),children:[(0,s.jsx)(x,{$expanded:i,src:`https://api.thetajikheritage.com${e.source}`}),e.info.length>0?(0,s.jsx)(y.cb,{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.info}}):null]})};var b=a(102);const f=o.Ay.div``,A=o.Ay.div`
    display: flex;
    align-items: center;
    height: 2.5rem;
    margin-bottom: var(--text-segment-gap);

    &:last-child {
        margin-bottom: 0rem;
    }
`;var j=a(9617);const $=r=>{let{data:e,TextWrapper:a=f}=r;return(0,s.jsxs)(t.Fragment,{children:[(0,s.jsx)(j.A,{}),(0,s.jsx)(a,{children:Object.keys(e).map(((r,a)=>{const t=e[r];switch(!0){case r.startsWith("text"):return(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:t}},a+10);case r.startsWith("tooltip"):return(0,s.jsx)(g,{content:t},a);case r.startsWith("sound"):const e=t;return(0,s.jsxs)(A,{children:[(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text}}),(0,s.jsx)(b.A,{data:e.source})]},r);case r.startsWith("table"):return(0,s.jsx)(w,{content:t},r);default:return null}}))})]})}},4821:(r,e,a)=>{a.d(e,{A:()=>n});a(5043);var t=a(7131),i=a(1063),o=a(579);const n=r=>{let{disabled:e,movePrev:a}=r;return(0,o.jsx)(i.O,{onClick:a,$disabled:e,children:(0,o.jsx)(i.i,{children:(0,o.jsx)(t.A,{style:{marginLeft:"7px"}})})})}},6390:(r,e,a)=>{a.d(e,{A:()=>n});a(5043);var t=a(9389),i=a(1063),o=a(579);const n=r=>{let{disabled:e,moveNext:a}=r;return(0,o.jsx)(i.O,{onClick:a,$disabled:e,children:(0,o.jsx)(i.i,{children:(0,o.jsx)(t.A,{style:{marginLeft:"1px"}})})})}},1063:(r,e,a)=>{a.d(e,{O:()=>o,i:()=>n});var t=a(1529),i=a(7392);const o=(0,t.Ay)(i.A)`
    width: 4rem;
    height: 4rem;
    color: var(--primary-gold-color);
    ${r=>{let{$disabled:e}=r;return e?t.AH`
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
`},7542:(r,e,a)=>{a.d(e,{J:()=>t});const t=a(1529).Ay.div`
    border-radius: var(--page-radius);
    margin-right: 0.8rem;
    background-image: url(${"/customAssets/noise.png"});
    background-color: var(--primary-white-color);
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem var(--primary-shadow-color);
    min-height: 55rem;

    @media (max-width: 480px) {
        margin: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }
`},8044:(r,e,a)=>{a.d(e,{A:()=>o});a(5043);var t=a(9932),i=a(579);const o=r=>{let{children:e}=r;return(0,i.jsx)(t.W,{children:e})}},9932:(r,e,a)=>{a.d(e,{W:()=>o,x:()=>n});var t=a(1529);const i=t.i7`
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
`},2958:(r,e,a)=>{a.d(e,{A:()=>l});var t=a(5043),i=a(215),o=a(4821),n=a(6390),d=a(8212),s=a(579);const l=r=>{let{slides:e=[],width:a,height:l,topLeftRad:c}=r;const{lang:m}=(0,i.Xe)(),[h,p]=(0,t.useState)(0),[g,v]=(0,t.useState)(0),[u,x]=(0,t.useState)([]);(0,t.useEffect)((()=>{x([...e])}),[m]);return(0,s.jsxs)(d.zr,{children:[e.length>1&&(0,s.jsx)(d.fV,{children:null===e||void 0===e?void 0:e.map(((r,e)=>(0,s.jsx)(d.jl,{$selected:e===g},`${null===r||void 0===r?void 0:r.img}_1`)))}),(0,s.jsx)(d.VI,{children:u.length>0?null===u||void 0===u?void 0:u.map((r=>{const e=null!==r&&void 0!==r&&r.img?`https://api.thetajikheritage.com${r.img}`:"/customAssets/loader.png",t=null!==r&&void 0!==r&&r.overlay?`https://api.thetajikheritage.com${r.overlay}`:"";return(0,s.jsx)(d.xW,{$width:a,$height:l,$translate:h,$topLeftRad:c,$src:e,$overlay:t,children:(null===r||void 0===r?void 0:r.info)&&(0,s.jsx)(d.cb,{dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.info}})},`${null===r||void 0===r?void 0:r.img}_2`)})):null}),(null===u||void 0===u?void 0:u.length)>1?(0,s.jsxs)(d.eM,{children:[(0,s.jsx)(o.A,{disabled:0===g,movePrev:()=>{g>0&&(v((r=>r-1)),p((r=>r+a)))}}),(0,s.jsx)(n.A,{disabled:g===(null===u||void 0===u?void 0:u.length)-1,moveNext:()=>{g<(null===u||void 0===u?void 0:u.length)-1&&(v((r=>r+1)),p((r=>r-a)))}})]}):null]})}},8212:(r,e,a)=>{a.d(e,{VI:()=>i,cb:()=>s,eM:()=>n,fV:()=>l,jl:()=>c,xW:()=>o,zr:()=>d});var t=a(1529);const i=t.Ay.div`
    position: absolute;
    display: flex;
`,o=t.Ay.div`
    position: relative;
    transition: transform 0.5s;
    background-repeat: no-repeat;
    background-position: center center;
    min-width: ${r=>{let{$width:e}=r;return e&&`${e}px`}};
    max-width: ${r=>{let{$width:e}=r;return e&&`${e}px`}};
    height: ${r=>{let{$width:e,$height:a}=r;return a?`${a}`:e&&1.2049*e+"px"}};
    border-top-left-radius: ${r=>{let{$topLeftRad:e}=r;return e&&`${e}rem`}};
    transform: ${r=>{let{$translate:e}=r;return`translateX(${e}px)`}};
    ${r=>{let{$src:e}=r;return e?t.AH`
                  background-image: url(${e});
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
        background-image: ${r=>{let{$overlay:e}=r;return e&&`url(${e})`}};
        filter: drop-shadow(0px 0px 1px var(--secondary-white-color));
        border-top-left-radius: ${r=>{let{$topLeftRad:e}=r;return e&&`${e}rem`}};
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
    ${r=>{let{$selected:e}=r;return e?t.AH`
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
`},102:(r,e,a)=>{a.d(e,{A:()=>l});var t=a(5043),i=a(7139),o=a(1529),n=a(7392);const d=(0,o.Ay)(n.A)`
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
`;var s=a(579);const l=r=>{let{data:e}=r;return(0,s.jsx)(t.Fragment,{children:e.length>0?(0,s.jsxs)(d,{onClick:r=>(r=>{r.currentTarget.children[0].play()})(r),children:[(0,s.jsx)("audio",{src:"https://api.thetajikheritage.com"+e}),(0,s.jsx)(i.A,{})]}):null})}},4952:(r,e,a)=>{a.d(e,{A:()=>w});var t=a(5043),i=a(215),o=a(2754),n=a(36),d=a(2081),s=a(7392),l=a(1529),c=a(8293),m=a(2101);const h=l.Ay.div`
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
    background-image: url('/customAssets/end_arrow.png');

    ${r=>{let{$right:e}=r;return!e&&l.AH`
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
`;var u=a(579);const x=r=>{let{isDropdownOpen:e,setIsDropdownOpen:a}=r;return(0,u.jsxs)(h,{children:[(0,u.jsx)(p,{$right:!0}),(0,u.jsx)(s.A,{onClick:()=>a((r=>!r)),children:e?(0,u.jsx)(v,{}):(0,u.jsx)(g,{})}),(0,u.jsx)(p,{$right:!1})]})};var y=a(355);const w=r=>{let{data:e}=r;const{lang:a}=(0,i.Xe)(),[s,l]=(0,t.useState)(!1);return(0,u.jsx)(y.J3,{children:(0,u.jsx)(n.x,{onClickAway:function(){l(!1)},children:(0,u.jsxs)(y.Tq,{children:[(0,u.jsx)(x,{setIsDropdownOpen:l,isDropdownOpen:s}),(0,u.jsx)(y.Re,{$open:s,children:(0,u.jsxs)(y.Fq,{$open:s,children:[(0,u.jsx)(y.tK,{children:o.Fx[a]}),e.map(((r,e)=>(0,u.jsxs)(y.rY,{children:[(0,u.jsx)(y.EU,{children:(0,u.jsxs)("div",{children:[e+1,"."]})}),(0,u.jsxs)(y.zy,{children:[(0,u.jsx)(y.Or,{dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.name}}),null!==r&&void 0!==r&&r.link.length?(0,u.jsx)(y.Av,{href:null===r||void 0===r?void 0:r.link,target:"_blank",children:(0,u.jsx)(d.A,{})}):null]})]},e)))]})})]})})})}},355:(r,e,a)=>{a.d(e,{Av:()=>g,EU:()=>p,Fq:()=>l,J3:()=>n,Or:()=>m,Re:()=>s,Tq:()=>d,Z2:()=>u,rY:()=>h,tK:()=>c,zy:()=>v});var t=a(1529),i=a(8293),o=a(2101);const n=t.Ay.div`
    border-radius: 0rem 0rem var(--page-radius) var(--page-radius);
    background: var(--primary-white-color);
    background-image: url(${"/customAssets/noise.png"});
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
    ${r=>{let{$open:e}=r;return e?t.AH`
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
        ${r=>{let{$open:e}=r;return e?t.AH`
                      height: 30rem;
                  `:t.AH`
                      height: 0rem;
                  `}};
    }
`),l=t.Ay.div`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100%;
    display: ${r=>{let{$open:e}=r;return e?"block":"none"}};
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
`},5452:(r,e,a)=>{a.r(e),a.d(e,{default:()=>p});a(5043);var t=a(215),i=a(7683),o=a(4330),n=a(5260),d=a(1529);const s=d.Ay.div`
    width: 100%;
    height: calc(100svh - var(--header-height));
    background-image: url('/customAssets/error-grid-1.png');
    background-size: calc(100vw / 4);
    background-repeat: repeat;
    background-position: center;
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
    background-color: var(--regular-black-color);
    box-shadow: var(--primary-box-shadow) var(--primary-white-color);

    @media (max-width: 480px) {
        height: 10rem;
        width: 20rem;
    }
`,c=d.Ay.div`
    font-size: 5rem;
    font-family: var(--blocky-font);
    color: var(--primary-red-color);

    @media (max-width: 480px) {
        font-size: var(--header-large);
    }
`,m=d.Ay.div`
    font-size: 1.5rem;
    font-family: var(--fancy-font);
    color: var(--primary-white-color);

    @media (max-width: 480px) {
        font-size: var(--header-normal);
    }
`;var h=a(579);const p=()=>{const{lang:r}=(0,t.Xe)();return(0,i.J)("reset"),(0,h.jsx)(n.A,{children:(0,h.jsx)(s,{children:(0,h.jsxs)(l,{children:[(0,h.jsx)(c,{children:"404"}),(0,h.jsx)(m,{children:o.PAGE_NOT_FOUND[r]})]})})})}},7683:(r,e,a)=>{a.d(e,{J:()=>d});var t=a(5043),i=a(215),o=a(910),n=a(2754);const d=(r,e,a)=>{const{title:d,setTitle:s}=(0,i.Xe)(),l="landing"===e?r:r.substring(0,r.indexOf("/")),c="middle"===e?r.substring(r.indexOf("_")+1):r.substring(r.indexOf("/")+1,r.length-1);(0,t.useEffect)((()=>{"reset"===r?s(n.El):(async()=>{try{const r=await(0,o.DL)(l);let a={...d};"landing"===e?m(a,r):h(a,r),s(a)}catch(r){s(n.El)}})()}),[r,a]);const m=(r,e)=>{const{header:a}=e;for(const t in d){const e=t;let i=[...d[e]];const o=[`${a[e].toUpperCase()}`,""];i[1]=o,r[e]=i}},h=(r,t)=>{const{header:i,sections:o}=t;null===o||void 0===o||o.forEach((t=>{const{link:o,cardTitle:n}=t;if(o===c)for(const s in d){const t=s;let o=[...d[t]],l=[];l="middle"===e?[`${i[t].toUpperCase()}`,`${void 0!==n[t]?n[t]:""}`]:[`${n[t].toUpperCase()}`,`${void 0!==(null===a||void 0===a?void 0:a.name[t])?null===a||void 0===a?void 0:a.name[t]:""}`],o[1]=l,r[t]=o}}))}}},4946:(r,e,a)=>{a.d(e,{Y:()=>s});var t=a(5043),i=a(1036),o=a(215),n=a(4330),d=a(3216);const s=()=>{const{lang:r}=(0,o.Xe)(),{pathname:e}=(0,d.zy)(),a=(0,t.useRef)({});return(0,t.useEffect)((()=>{Object.keys(a.current).forEach((e=>{const{key:t}=a.current[e],o=n[t][r];i.oR.update(e,{render:o,autoClose:2e3})}))}),[r]),(0,t.useEffect)((()=>{i.oR.dismiss()}),[e]),{showToast:(e,t,o)=>{const d=n[e][r];switch(a.current[o]={key:e},t){case"info":return i.oR.info(d,{toastId:o});case"success":return i.oR.success(d,{toastId:o});case"error":return i.oR.error(d,{toastId:o})}}}}},910:(r,e,a)=>{a.d(e,{AN:()=>c,uu:()=>s,Gg:()=>d,DL:()=>n,c1:()=>l});var t=a(6213);const i=r=>{let e=null;return localStorage.getItem("th_Id")?e=localStorage.getItem("th_Id"):(e=r+"_"+Math.random().toString(36).substring(2,9),localStorage.setItem("th_Id",e)),e},o="https://api.thetajikheritage.com",n=async r=>{r||(r="");try{const e=i(r);return(await t.A.get(`${o}/${r}`,{params:{page:r,userId:e}})).data}catch(e){throw e}},d=async r=>{try{const e=i(r);return(await t.A.get(`${o}/${r}`,{params:{userId:e,page:r}})).data}catch(e){throw e}},s=async(r,e)=>{try{const a=i(`${e}${r}`);return(await t.A.get(`${o}/${e}`,{params:{id:r,page:`${e}/${r}`,userId:a}})).data}catch(a){throw a}},l=async r=>{try{const e=await t.A.get(`${o+r}`,{responseType:"arraybuffer"}),a=new Blob([e.data],{type:"application/pdf"});return URL.createObjectURL(a)}catch(e){throw e}},c=async r=>{try{return await t.A.post(`${o}/email`,{info:r})}catch(e){throw e}}},4330:r=>{r.exports=JSON.parse('{"WORDS_NOT_FOUND":{"tj":"\u042f\u0433\u043e\u043d \u043a\u0430\u043b\u0438\u043c\u0430 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","ru":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","us":"No words found","fa":"\u06cc\u06af\u0627\u0646 \u06a9\u0644\u0645\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"SEARCH_NOT_FOUND":{"us":"No items match your search","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0627\u0632 \u0631\u0648\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u06cc \u0634\u0645\u0627 \u0686\u06cc\u0632\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"ARTICLE_UNAVAILABLE":{"us":"Article is not available yet","ru":"\u0421\u0442\u0430\u0442\u044c\u044f \u0435\u0449\u0435 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430","tj":"\u041c\u0430\u049b\u043e\u043b\u0430 \u04b3\u0430\u043d\u04ef\u0437 \u0432\u0443\u04b7\u0443\u0434 \u043d\u0430\u0434\u043e\u0440\u0430\u0434","fa":"\u0645\u0642\u0627\u0644\u0647 \u0647\u0646\u0648\u0632 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f"},"PAGE_NOT_FOUND":{"us":"Page not found","ru":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","tj":"\u0421\u0430\u04b3\u0438\u0444\u0430 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0635\u062d\u06cc\u0641\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"E_500":{"us":"Internal server error","ru":"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430","tj":"\u0425\u0430\u0442\u043e\u0433\u04e3 \u0431\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0438 \u0434\u043e\u0445\u0438\u043b\u04e3","fa":"\u062e\u0637\u0627\u06af\u06cc \u0628\u0627 \u0633\u0631\u0648\u0631\u06cc \u062f\u0627\u062e\u0644\u06cc"}}')}}]);
//# sourceMappingURL=262.bca354fa.chunk.js.map