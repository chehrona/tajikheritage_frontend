"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[742,452],{7972:(e,r,t)=>{t.d(r,{Ai:()=>o,Mr:()=>n,N1:()=>s,Pd:()=>c,X4:()=>d,g$:()=>i,jl:()=>l});var a=t(1529);const i=a.Ay.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: var(--text-segment-gap) var(--page-padding);
    padding: ${e=>{let{$reverse:r}=e;return null===r?"var(--text-segment-gap) var(--page-padding)":r?"var(--text-segment-gap) 0rem var(--text-segment-gap) var(--page-padding)":"var(--text-segment-gap) var(--page-padding) var(--text-segment-gap) 0rem"}};

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) var(--page-padding);
    }
`,o=a.Ay.div`
    z-index: 1;
    flex-grow: 1;
    align-items: center;
    display: flex;
`,n=(0,a.Ay)(o)`
    margin-left: -0.25rem;
`,d=(0,a.Ay)(o)`
    margin-right: -0.25rem;
    display: ${e=>{let{$show:r}=e;return r?"flex":"none"}};
`,s=a.Ay.div`
    height: 1px;
    width: 100%;
    background-color: var(--primary-gold-color);
`,l=a.Ay.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--primary-gold-color);
`,c=a.Ay.span`
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
`},1070:(e,r,t)=>{t.d(r,{a:()=>a});const a=t(1529).Ay.div`
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
`},4929:(e,r,t)=>{t.d(r,{n:()=>S});var a=t(5043),i=t(36),o=t(1529),n=t(4127),d=t(8978),s=t(579);const l=(0,o.Ay)((e=>{let{className:r,...t}=e;return(0,s.jsx)(n.A,{...t,classes:{popper:r}})}))((()=>({[`& .${d.A.tooltip}`]:{fontSize:"var(--body-text)",fontWeight:"normal",borderRadius:"0.5rem"},[`& .${d.A.tooltipArrow}`]:{backgroundColor:"var(--primary-shadow-color)"},[`& .${d.A.arrow}`]:{color:"var(--primary-shadow-color)"}}))),c=o.Ay.div`
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
`,g=o.Ay.span`
    border-bottom: 1px dotted var(--primary-shadow-color);

    .termSpan {
        font-weight: bold;
        color: var(--primary-gold-color);
    }
`,p=e=>{let{content:r}=e;const[t,o]=(0,a.useState)(!1);return(0,s.jsx)(l,{open:t,arrow:!0,placement:"top",title:null!==r&&void 0!==r&&r.img?(0,s.jsxs)(m,{children:[(0,s.jsx)(h,{src:"https://api.thetajikheritage.com"+(null===r||void 0===r?void 0:r.img)}),(0,s.jsx)(c,{dangerouslySetInnerHTML:{__html:r.text}})]}):(0,s.jsx)(c,{dangerouslySetInnerHTML:{__html:r.text}}),children:(0,s.jsx)("span",{children:(0,s.jsx)(i.x,{onClickAway:function(){o(!1)},children:(0,s.jsx)(g,{dangerouslySetInnerHTML:{__html:r.word},onClick:function(){o(!0)},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)})})})})};var v=t(215);const u=o.Ay.div`
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
`;var y=t(8212);const w=e=>{let{content:r}=e;const{lang:t}=(0,v.Xe)(),[i,o]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{o(!1)}),[t]),(0,s.jsxs)(u,{$expanded:i,onClick:()=>o((e=>!e)),children:[(0,s.jsx)(x,{$expanded:i,src:`https://api.thetajikheritage.com${r.source}`}),r.info.length>0?(0,s.jsx)(y.cb,{dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.info}}):null]})};var f=t(7505);const b=o.Ay.div`
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
`);var $=t(9657),j=t(7972);const k=e=>{let{content:r}=e;const{lang:t}=(0,v.Xe)(),[i,o]=(0,a.useState)(!1),n=((0,$.Ub)({query:"(max-width: 1024px)"}),(0,a.useRef)(null)),[d,l]=(0,a.useState)(!1);(0,a.useCallback)((()=>{l((e=>!e))}),[]);return r?(0,s.jsxs)(b,{children:[(0,s.jsxs)(j.Ai,{children:[(0,s.jsx)(j.N1,{}),(0,s.jsx)(j.jl,{})]}),(0,s.jsx)(A,{src:`https://www.youtube-nocookie.com/embed/${null===r||void 0===r?void 0:r.link}?autoplay=1&rel=0&modestbranding=1`,allow:"autoplay; encrypted-media",allowFullScreen:!0,ref:n}),(0,s.jsxs)(j.Ai,{children:[(0,s.jsx)(j.jl,{}),(0,s.jsx)(j.N1,{})]})]}):null},_=o.Ay.div``,z=o.Ay.div`
    display: flex;
    align-items: center;
    height: 2.5rem;
    margin-bottom: var(--text-segment-gap);

    &:last-child {
        margin-bottom: 0rem;
    }
`;var I=t(9617);const S=e=>{let{data:r,TextWrapper:t=_}=e;return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(I.A,{}),(0,s.jsx)(t,{children:Object.keys(r).map(((e,t)=>{const a=r[e];switch(!0){case e.startsWith("text"):return(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:a}},t+10);case e.startsWith("tooltip"):return(0,s.jsx)(p,{content:a},t);case e.startsWith("sound"):const r=a;return(0,s.jsxs)(z,{children:[(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:r.text}}),(0,s.jsx)(f.A,{data:r.source})]},e);case e.startsWith("table"):return(0,s.jsx)(w,{content:a},e);case e.startsWith("video"):return(0,s.jsx)(k,{content:a},e);default:return null}}))})]})}},4821:(e,r,t)=>{t.d(r,{A:()=>n});t(5043);var a=t(7131),i=t(1063),o=t(579);const n=e=>{let{disabled:r,movePrev:t}=e;return(0,o.jsx)(i.O,{onClick:t,$disabled:r,children:(0,o.jsx)(i.i,{children:(0,o.jsx)(a.A,{style:{marginLeft:"7px"}})})})}},6390:(e,r,t)=>{t.d(r,{A:()=>n});t(5043);var a=t(9389),i=t(1063),o=t(579);const n=e=>{let{disabled:r,moveNext:t}=e;return(0,o.jsx)(i.O,{onClick:t,$disabled:r,children:(0,o.jsx)(i.i,{children:(0,o.jsx)(a.A,{style:{marginLeft:"1px"}})})})}},1063:(e,r,t)=>{t.d(r,{O:()=>o,i:()=>n});var a=t(1529),i=t(7392);const o=(0,a.Ay)(i.A)`
    width: 4rem;
    height: 4rem;
    color: var(--primary-gold-color);
    ${e=>{let{$disabled:r}=e;return r?a.AH`
                  opacity: 0;
                  pointer-events: none;
              `:a.AH`
                  opacity: 1;
                  pointer-events: all;
              `}};

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`,n=a.Ay.div`
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
`},7542:(e,r,t)=>{t.d(r,{J:()=>a});const a=t(1529).Ay.div`
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
`},8044:(e,r,t)=>{t.d(r,{A:()=>o});t(5043);var a=t(9932),i=t(579);const o=e=>{let{children:r}=e;return(0,i.jsx)(a.W,{children:r})}},9932:(e,r,t)=>{t.d(r,{W:()=>o,x:()=>n});var a=t(1529);const i=a.i7`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`,o=a.Ay.div`
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
`,n=a.Ay.div`
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
`},2958:(e,r,t)=>{t.d(r,{A:()=>l});var a=t(5043),i=t(215),o=t(4821),n=t(6390),d=t(8212),s=t(579);const l=e=>{let{slides:r=[],width:t,height:l,topLeftRad:c}=e;const{lang:m}=(0,i.Xe)(),[h,g]=(0,a.useState)(0),[p,v]=(0,a.useState)(0),[u,x]=(0,a.useState)([]);(0,a.useEffect)((()=>{x([...r])}),[m]);return(0,s.jsxs)(d.zr,{children:[r.length>1&&(0,s.jsx)(d.fV,{children:null===r||void 0===r?void 0:r.map(((e,r)=>(0,s.jsx)(d.jl,{$selected:r===p},`${null===e||void 0===e?void 0:e.img}_1`)))}),(0,s.jsx)(d.VI,{children:u.length>0?null===u||void 0===u?void 0:u.map((e=>{const r=null!==e&&void 0!==e&&e.img?`https://api.thetajikheritage.com${e.img}`:"/customAssets/loader.png",a=null!==e&&void 0!==e&&e.overlay?`https://api.thetajikheritage.com${e.overlay}`:"";return(0,s.jsx)(d.xW,{$width:t,$height:l,$translate:h,$topLeftRad:c,$src:r,$overlay:a,children:(null===e||void 0===e?void 0:e.info)&&(0,s.jsx)(d.cb,{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.info}})},`${null===e||void 0===e?void 0:e.img}_2`)})):null}),(null===u||void 0===u?void 0:u.length)>1?(0,s.jsxs)(d.eM,{children:[(0,s.jsx)(o.A,{disabled:0===p,movePrev:()=>{p>0&&(v((e=>e-1)),g((e=>e+t)))}}),(0,s.jsx)(n.A,{disabled:p===(null===u||void 0===u?void 0:u.length)-1,moveNext:()=>{p<(null===u||void 0===u?void 0:u.length)-1&&(v((e=>e+1)),g((e=>e-t)))}})]}):null]})}},8212:(e,r,t)=>{t.d(r,{VI:()=>i,cb:()=>s,eM:()=>n,fV:()=>l,jl:()=>c,xW:()=>o,zr:()=>d});var a=t(1529);const i=a.Ay.div`
    position: absolute;
    display: flex;
`,o=a.Ay.div`
    position: relative;
    transition: transform 0.5s;
    background-repeat: no-repeat;
    background-position: center center;
    min-width: ${e=>{let{$width:r}=e;return r&&`${r}px`}};
    max-width: ${e=>{let{$width:r}=e;return r&&`${r}px`}};
    height: ${e=>{let{$width:r,$height:t}=e;return t?`${t}`:r&&1.2049*r+"px"}};
    border-top-left-radius: ${e=>{let{$topLeftRad:r}=e;return r&&`${r}rem`}};
    transform: ${e=>{let{$translate:r}=e;return`translateX(${r}px)`}};
    ${e=>{let{$src:r}=e;return r?a.AH`
                  background-image: url(${r});
                  background-size: cover;
              `:a.AH`
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
`,n=a.Ay.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    transform: translateY(-50%);
    justify-content: space-between;
`,d=a.Ay.div`
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
`,s=a.Ay.div`
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
`,l=a.Ay.div`
    display: flex;
    height: 1rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0.25rem;
    z-index: 1;
`,c=a.Ay.div`
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background-color: var(--primary-gold-color);
    ${e=>{let{$selected:r}=e;return r?a.AH`
                  border: 1px solid var(--secondary-gold-color);
                  opacity: 1;
              `:a.AH`
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
`},7505:(e,r,t)=>{t.d(r,{A:()=>l});var a=t(5043),i=t(579);const o=e=>{let{icon:r,size:t=22}=e;switch(r){case"speaker":return(0,i.jsx)("img",{src:"/icons/actions/speaker.svg",height:`${t}rem`,width:`${t}rem`,alt:"icon"});case"ru":return(0,i.jsx)("img",{src:"/icons/flags/ru.svg",height:`${t}rem`,width:`${t}rem`,alt:"icon"});case"us":return(0,i.jsx)("img",{src:"/icons/flags/us.svg",height:`${t}rem`,width:`${t}rem`,alt:"icon"});case"twitter":return(0,i.jsx)("img",{src:"./icons/socials/twitter.svg",height:`${t}rem`,width:`${t}rem`,alt:"icon"});case"tiktok":return(0,i.jsx)("img",{src:"./icons/socials/tiktok.svg",height:`${t}rem`,width:`${t}rem`,alt:"icon"});case"menu":return(0,i.jsx)("img",{src:"./icons/action/menu.svg",height:`${t}rem`,width:`${t}rem`,alt:"icon"});case"copyright":return(0,i.jsx)("img",{src:"./icons/copyright.svg",height:`${t}rem`,width:`${t}rem`,alt:"icon"});case"tj":return(0,i.jsx)("img",{src:"./icons/flags/tj.svg",height:`${t}rem`,width:`${t}rem`,alt:"icon"});case"ru":return(0,i.jsx)("img",{src:"./icons/flags/ru.svg",height:`${t}rem`,width:`${t}rem`,alt:"icon"});case"en":return(0,i.jsx)("img",{src:"./icons/flags/en.svg",height:`${t}rem`,width:`${t}rem`,alt:"icon"});default:return null}};var n=t(1529),d=t(7392);const s=(0,n.Ay)(d.A)`
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
`,l=e=>{let{data:r}=e;return(0,i.jsx)(a.Fragment,{children:r.length>0?(0,i.jsxs)(s,{onClick:e=>(e=>{e.currentTarget.children[0].play()})(e),children:[(0,i.jsx)("audio",{src:"https://api.thetajikheritage.com"+r}),(0,i.jsx)(o,{icon:"speaker",size:18})]}):null})}},4952:(e,r,t)=>{t.d(r,{A:()=>w});var a=t(5043),i=t(215),o=t(2754),n=t(36),d=t(2081),s=t(7392),l=t(1529),c=t(8293),m=t(2101);const h=l.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,g=l.Ay.div`
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
`,p=(0,l.Ay)(c.A)`
    color: var(--primary-shadow-color);
`,v=(0,l.Ay)(m.A)`
    color: var(--primary-shadow-color);
`;var u=t(579);const x=e=>{let{isDropdownOpen:r,setIsDropdownOpen:t}=e;return(0,u.jsxs)(h,{children:[(0,u.jsx)(g,{$right:!0}),(0,u.jsx)(s.A,{onClick:()=>t((e=>!e)),children:r?(0,u.jsx)(v,{}):(0,u.jsx)(p,{})}),(0,u.jsx)(g,{$right:!1})]})};var y=t(355);const w=e=>{let{data:r}=e;const{lang:t}=(0,i.Xe)(),[s,l]=(0,a.useState)(!1);return(0,u.jsx)(y.J3,{children:(0,u.jsx)(n.x,{onClickAway:function(){l(!1)},children:(0,u.jsxs)(y.Tq,{children:[(0,u.jsx)(x,{setIsDropdownOpen:l,isDropdownOpen:s}),(0,u.jsx)(y.Re,{$open:s,children:(0,u.jsxs)(y.Fq,{$open:s,children:[(0,u.jsx)(y.tK,{children:o.Fx[t]}),r.map(((e,r)=>(0,u.jsxs)(y.rY,{children:[(0,u.jsx)(y.EU,{children:(0,u.jsxs)("div",{children:[r+1,"."]})}),(0,u.jsxs)(y.zy,{children:[(0,u.jsx)(y.Or,{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.name}}),null!==e&&void 0!==e&&e.link.length?(0,u.jsx)(y.Av,{href:null===e||void 0===e?void 0:e.link,target:"_blank",children:(0,u.jsx)(d.A,{})}):null]})]},r)))]})})]})})})}},355:(e,r,t)=>{t.d(r,{Av:()=>p,EU:()=>g,Fq:()=>l,J3:()=>n,Or:()=>m,Re:()=>s,Tq:()=>d,Z2:()=>u,rY:()=>h,tK:()=>c,zy:()=>v});var a=t(1529),i=t(8293),o=t(2101);const n=a.Ay.div`
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
`,d=a.Ay.div`
    width: 100%;
`,s=((0,a.Ay)(i.A)`
    color: var(--primary-shadow-color);
`,(0,a.Ay)(o.A)`
    color: var(--primary-shadow-color);
`,a.Ay.div`
    max-width: 100%;
    display: block;
    position: relative;
    border-radius: var(--small-radius);
    margin-top: var(--text-segment-gap);
    color: var(--secondary-white-color);
    background: var(--primary-black-color);
    transition: all 0.5s linear 0s;
    ${e=>{let{$open:r}=e;return r?a.AH`
                  height: 20rem;
                  box-shadow: var(--primary-box-shadow)
                      var(--primary-black-color);
                  padding: var(--input-radius) calc(var(--input-radius) / 2)
                      var(--input-radius) 0rem;
              `:a.AH`
                  height: 0rem;
                  padding: 0rem;
              `}};

    @media (max-width: 480px) {
        ${e=>{let{$open:r}=e;return r?a.AH`
                      height: 30rem;
                  `:a.AH`
                      height: 0rem;
                  `}};
    }
`),l=a.Ay.div`
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
`,c=a.Ay.div`
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
`,m=a.Ay.span`
    font-size: var(--body-text);
    line-height: var(--body-text-line-height);
`,h=a.Ay.div`
    display: flex;
    align-items: start;
    position: relative;
    font-size: var(--body-text);
`,g=a.Ay.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`,p=a.Ay.a`
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
`,v=a.Ay.div`
    display: inline-block;
    padding: 0rem var(--input-radius) var(--input-radius) var(--input-radius);

    @media (max-width: 480px) {
        padding: 0rem var(--input-radius) var(--input-radius)
            var(--input-radius);
    }
`,u=a.Ay.div`
    height: calc(10 * var(--text-segment-gap));
    min-height: calc(10 * var(--text-segment-gap));

    @media (max-width: 480px) {
        height: calc(5 * var(--text-segment-gap));
        min-height: calc(5 * var(--text-segment-gap));
    }
`},5452:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});t(5043);var a=t(215),i=t(7683),o=t(4330),n=t(5260),d=t(1529);const s=d.Ay.div`
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
`;var h=t(579);const g=()=>{const{lang:e}=(0,a.Xe)();return(0,i.J)("reset"),(0,h.jsx)(n.A,{children:(0,h.jsx)(s,{children:(0,h.jsxs)(l,{children:[(0,h.jsx)(c,{children:"404"}),(0,h.jsx)(m,{children:o.PAGE_NOT_FOUND[e]})]})})})}},7683:(e,r,t)=>{t.d(r,{J:()=>d});var a=t(5043),i=t(215),o=t(910),n=t(2754);const d=(e,r,t)=>{const{title:d,setTitle:s}=(0,i.Xe)(),l="landing"===r?e:e.substring(0,e.indexOf("/")),c="middle"===r?e.substring(e.indexOf("_")+1):e.substring(e.indexOf("/")+1,e.length-1);(0,a.useEffect)((()=>{"reset"===e?s(n.El):(async()=>{try{const e=await(0,o.DL)(l);let t={...d};"landing"===r?m(t,e):h(t,e),s(t)}catch(e){s(n.El)}})()}),[e,t]);const m=(e,r)=>{const{header:t}=r;for(const a in d){const r=a;let i=[...d[r]];const o=[`${t[r].toUpperCase()}`,""];i[1]=o,e[r]=i}},h=(e,a)=>{const{header:i,sections:o}=a;null===o||void 0===o||o.forEach((a=>{const{link:o,cardTitle:n}=a;if(o===c)for(const s in d){const a=s;let o=[...d[a]],l=[];l="middle"===r?[`${i[a].toUpperCase()}`,`${void 0!==n[a]?n[a]:""}`]:[`${n[a].toUpperCase()}`,`${void 0!==(null===t||void 0===t?void 0:t.name[a])?null===t||void 0===t?void 0:t.name[a]:""}`],o[1]=l,e[a]=o}}))}}},4946:(e,r,t)=>{t.d(r,{Y:()=>s});var a=t(5043),i=t(1036),o=t(215),n=t(3216),d=t(4330);const s=()=>{const{lang:e}=(0,o.Xe)(),{pathname:r}=(0,n.zy)(),t=(0,a.useRef)({});return(0,a.useEffect)((()=>{Object.keys(t.current).forEach((r=>{const{key:a}=t.current[r],o=d[a][e];i.oR.update(r,{render:o,autoClose:2e3})}))}),[e]),(0,a.useEffect)((()=>{i.oR.dismiss()}),[r]),{showToast:(r,a,o)=>{const n=d[r][e];switch(t.current[o]={key:r},a){case"info":return i.oR.info(n,{toastId:o});case"success":return i.oR.success(n,{toastId:o});case"error":return i.oR.error(n,{toastId:o})}}}}},910:(e,r,t)=>{t.d(r,{AN:()=>m,_r:()=>s,uu:()=>l,Gg:()=>d,DL:()=>n,c1:()=>c});var a=t(6213);const i=e=>{let r=null;return localStorage.getItem("th_Id")?r=localStorage.getItem("th_Id"):(r=e+"_"+Math.random().toString(36).substring(2,9),localStorage.setItem("th_Id",r)),r},o="https://api.thetajikheritage.com",n=async e=>{e||(e="");try{const r=i(e);return(await a.A.get(`${o}/${e}`,{params:{page:e,userId:r}})).data}catch(r){throw r}},d=async e=>{try{const r=i(e);return(await a.A.get(`${o}/${e}`,{params:{userId:r,page:e}})).data}catch(r){throw r}},s=async(e,r)=>{try{const t=i(e);return(await a.A.get(`${o}/${e}`,{params:{userId:t,page:e,value:r}})).data}catch(t){throw t}},l=async(e,r)=>{try{const t=i(`${r}${e}`);return(await a.A.get(`${o}/${r}`,{params:{id:e,page:`${r}/${e}`,userId:t}})).data}catch(t){throw t}},c=async e=>{try{const r=await a.A.get(`${o+e}`,{responseType:"arraybuffer"}),t=new Blob([r.data],{type:"application/pdf"});return URL.createObjectURL(t)}catch(r){throw r}},m=async e=>{try{return await a.A.post(`${o}/email`,{info:e})}catch(r){throw r}}},4330:e=>{e.exports=JSON.parse('{"SEARCH_NOT_FOUND":{"us":"No items match your search","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0627\u0632 \u0631\u0648\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u06cc \u0634\u0645\u0627 \u0686\u06cc\u0632\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"ARTICLE_UNAVAILABLE":{"us":"Article is not available yet","ru":"\u0421\u0442\u0430\u0442\u044c\u044f \u0435\u0449\u0435 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430","tj":"\u041c\u0430\u049b\u043e\u043b\u0430 \u04b3\u0430\u043d\u04ef\u0437 \u0432\u0443\u04b7\u0443\u0434 \u043d\u0430\u0434\u043e\u0440\u0430\u0434","fa":"\u0645\u0642\u0627\u0644\u0647 \u0647\u0646\u0648\u0632 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f"},"PAGE_NOT_FOUND":{"us":"Page not found","ru":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","tj":"\u0421\u0430\u04b3\u0438\u0444\u0430 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0635\u062d\u06cc\u0641\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"E_500":{"us":"Internal server error","ru":"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430","tj":"\u0425\u0430\u0442\u043e\u0433\u04e3 \u0431\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0438 \u0434\u043e\u0445\u0438\u043b\u04e3","fa":"\u062e\u0637\u0627\u06af\u06cc \u0628\u0627 \u0633\u0631\u0648\u0631\u06cc \u062f\u0627\u062e\u0644\u06cc"},"E_204":{"us":"No data match your request","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":""}}')}}]);
//# sourceMappingURL=742.19b4d965.chunk.js.map