"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[260],{5260:(e,r,t)=>{t.d(r,{A:()=>he});var i=t(5043),a=t(3216),n=t(215),o=t(1529);const d=o.i7`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`,s=o.i7`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,l=o.Ay.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 8.25rem;
    cursor: pointer;
    position: relative;

    @media (max-width: 480px) {
        width: 2.15rem;
    }
`,c=o.Ay.div`
    color: var(--regular-white-color);
    font-size: var(--body-text);
    padding-right: 0.65rem;
    font-weight: normal;
    font-family: var(--regular-font);
    min-width: 5.5rem;
    max-width: 5.5rem;
    margin-right: 2.5rem;
    text-align: end;
    transition: opacity 0.15s ease;
    ${e=>{let{$triggerFadeOut:r}=e;return r&&o.AH`
            animation: ${d} 0.2s forwards;
        `}}

    ${e=>{let{$triggerFadeIn:r}=e;return r&&o.AH`
            animation: ${s} 0.15s forwards;
        `}};

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }

    // Done
    @media (max-width: 480px) {
        display: none;
    }
`,h=o.Ay.div`
    right: 0rem;
    cursor: pointer;
    position: absolute;
    width: 2.15rem;
    min-width: 2.15rem;
    height: 0.2rem;
    background-color: ${e=>{let{$isMenuShown:r}=e;return r?"transparent":"var(--primary-gold-color)"}};
    transition: background-color 0.3s ease;
    cursor: pointer;

    &::before,
    &::after {
        left: 0;
        content: '';
        width: 2.15rem;
        position: absolute;
        background-color: var(--primary-gold-color);
        transition: 0.4s all cubic-bezier(1, 0, 0, 1);
        height: ${e=>{let{$isMenuShown:r}=e;return r?"0.25rem":"0.2rem"}};
    }

    &::before {
        transform-origin: center;
        transform: ${e=>{let{$isMenuShown:r}=e;return r?"rotate(45deg)":"rotate(0deg)"}};
        top: ${e=>{let{$isMenuShown:r}=e;return r?"0":"-0.5rem"}};
    }

    &::after {
        top: ${e=>{let{$isMenuShown:r}=e;return r?"0":"0.5rem"}};
        transform-origin: center;
        transform: ${e=>{let{$isMenuShown:r}=e;return r?"rotate(-45deg)":"rotate(0deg)"}};
    }

    // Done
    @media (max-width: 480px) {
        height: 0.2rem;

        &::before,
        &::after {
            height: 0.2rem;
        }

        &::before {
            top: ${e=>{let{$isMenuShown:r}=e;return r?"0":"-0.5rem"}};
        }

        &::after {
            top: ${e=>{let{$isMenuShown:r}=e;return r?"0":"0.5rem"}};
        }
    }
`;var m=t(579);const x=e=>{let{menuAnchorEl:r}=e;const{lang:t,isMenuOpen:a,setIsMenuOpen:o}=(0,n.Xe)(),[d,s]=(0,i.useState)(!1),[x,p]=(0,i.useState)(!1),g=(0,i.useCallback)((e=>{r&&(r.current=e.currentTarget),p(!0),o((e=>!e)),setTimeout((()=>{p(!1),s(!0),setTimeout((()=>s(!1)),150)}),150)}),[o,r]);return(0,m.jsxs)(l,{onClick:g,children:[(0,m.jsx)(c,{$triggerFadeIn:d,$triggerFadeOut:x,children:"us"===t?a?"CLOSE":"MENU":"ru"===t?a?"\u0417\u0410\u041a\u0420\u042b\u0422\u042c":"\u041c\u0415\u041d\u042e":"fa"===t?a?"\u067e\u0648\u0634\u06cc\u062f":"\u0645\u0646\u0648":a?"\u041f\u04ee\u0428\u0415\u0414":"\u041c\u0415\u041d\u042e"}),(0,m.jsx)(h,{$isMenuShown:a})]})};var p=t(2835),g=t(1556);const u=[[0,1,2],[1,2,1],[2,1,2]],v=e=>{let{menuAnchorEl:r}=e;const{pathname:t}=(0,a.zy)(),{lang:o,title:d,isMenuOpen:s,setIsMenuOpen:l}=(0,n.Xe)(),[c,h]=(0,i.useState)([0,1,2]),[v,w]=(0,i.useState)(0),f=(0,i.useCallback)((()=>{l(!1)}),[l]);return(0,i.useEffect)((()=>{const e=setInterval((()=>{w((e=>(e+1)%u.length)),h(u[v])}),5e3);return()=>clearInterval(e)}),[v,t,o]),(0,m.jsx)(g.B3,{children:(0,m.jsxs)(g.h_,{children:[(0,m.jsx)(p.A,{handleLogoClick:f}),(0,m.jsx)(g.k3,{children:c.map(((e,r)=>{const t=`title_key_${Math.random()}`;return(0,m.jsxs)(g.aW,{$index:r,children:[(0,m.jsx)(g.xO,{dangerouslySetInnerHTML:{__html:d[o][e][0]}}),d[o][e][1].length?(0,m.jsx)(g.Qq,{children:":"}):null,(0,m.jsx)(g.hc,{children:d[o][e][1]})]},t)}))}),(0,m.jsx)(x,{menuAnchorEl:r})]})})};var w=t(2754),f=t(4836),y=t(5475),j=t(9954);const b=(0,o.Ay)(j.A)`
    & .MuiPopper-root {
        z-index: 100;
    }

    & .MuiPaper-root {
        height: calc(100svh - var(--header-height));
        max-height: calc(100svh - var(--header-height));
        position: static;
        box-shadow: none;
        border-radius: 0rem;
        overflow: hidden;
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        padding: 0rem;
        justify-content: center;
        color: var(--primary-gold-color);
        background: var(--primary-grey-color);
        margin-top: var(--header-height);
    }

    & .MuiList-root {
        display: flex;
        width: 100%;
        padding: 3rem;
        justify-content: center;
        gap: 6%;
        align-items: center;

        // Done
        @media screen and (max-device-width: 480px) {
            padding: 0rem var(--page-padding);
        }

        @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
            padding: 10rem 10rem 15rem 5rem;
            flex-direction: column-reverse;
            gap: 0%;
        }
    }
`,A=o.Ay.div`
    opacity: 0.5;

    // Done
    @media screen and (max-device-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        opacity: 0.3;
        width: 100%;
        position: absolute;
        right: -52.3%;
        top: 50%;
        transform: translateY(-50%);
    }
`,k=o.Ay.img`
    border-radius: 50%;
    height: 35rem;
    width: 35rem;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 60rem;
        width: 60rem;
        transform: rotate(-90deg);
    }
`,$=o.Ay.div`
    width: 40%;
    height: 100%;
    z-index: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    gap: calc(2 * var(--text-segment-gap));

    // Done
    @media (max-width: 480px) {
        gap: calc(2 * var(--text-segment-gap));
        width: 100%;
        justify-content: flex-start;
        padding: 10% 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.5rem;
        width: 100%;
    }
`,z=o.Ay.div`
    width: 100%;
    padding: var(--text-segment-gap);
`,M=o.Ay.div`
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
    font-size: var(--header-big);
    font-family: var(--fancy-font);

    // Done
    @media screen and (max-device-width: 480px) {
        font-size: var(--header-medium);
    }
`,S=o.Ay.div`
    font-size: var(--header-small);
    cursor: pointer;
    color: var(--secondary-white-color);

    // Done
    @media screen and (max-device-width: 480px) {
        font-size: var(--body-text);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`,C=(0,o.Ay)(y.k2)`
    text-decoration: none;
    color: inherit;
    border-radius: var(--small-radius);
    user-select: none;
    box-shadow: 0.3rem 0.3rem 0.3rem 0.05rem var(--primary-black-color);

    &:hover {
        box-shadow: 0.3rem 0.3rem 0.3rem 0.05rem var(--primary-gold-color);
    }

    &:active {
        box-shadow: 0rem 0rem 0.1rem 0.05rem var(--primary-gold-color);
        transform: translate(1px, 1px);
    }

    // Done
    @media (max-device-width: 480px) {
        &:hover {
            box-shadow: 0.3rem 0.3rem 0.3rem 0.05rem var(--primary-black-color);
        }

        &:active {
            box-shadow: 0rem 0rem 0.1rem 0.05rem var(--primary-black-color);
            transform: translate(1px, 1px);
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 75%;
        box-shadow: 0.3rem 0.3rem 0.3rem 0.05rem var(--primary-black-color);

        &:hover {
            box-shadow: 0.3rem 0.3rem 0.3rem 0.05rem var(--primary-black-color);
        }

        &:active {
            box-shadow: 0rem 0rem 0.1rem 0.05rem var(--primary-black-color);
            transform: translate(1px, 1px);
        }
    }
`,_=e=>{var r;let{menuAnchorEl:t}=e;const{lang:i,isMenuOpen:a,setIsMenuOpen:o}=(0,n.Xe)(),d=w.rZ;return(0,m.jsxs)(b,{open:a,anchorEl:t.current,TransitionComponent:f.A,TransitionProps:{timeout:200},marginThreshold:0,sx:{zIndex:"10"},"aria-hidden":!a,children:[(0,m.jsx)(A,{children:(0,m.jsx)(k,{src:"/logo/logo.svg"})}),(0,m.jsx)($,{children:null===(r=d[i])||void 0===r?void 0:r.map(((e,r)=>(0,m.jsx)(C,{to:e.link,onClick:()=>o(!1),children:(0,m.jsxs)(z,{children:[(0,m.jsx)(M,{children:e.title}),(0,m.jsx)(S,{children:e.desc})]})},r)))})]})};var E=t(1697);const O=()=>{const{lang:e}=(0,n.Xe)();return(0,m.jsxs)("form",{action:"https://www.paypal.com/donate",method:"post",target:"_blank",children:[(0,m.jsx)("input",{type:"hidden",name:"hosted_button_id",value:"6KEPZEN5G8TRU"}),(0,m.jsx)(E.O,{type:"submit",$width:"fit-content",children:w.AJ.yJ[e].list[1]})]})};var T=t(9475),I=t(7392);const D=o.Ay.div`
    width: 100%;
    height: var(--footer-height);
    min-height: var(--footer-height);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-black-color);

    @media (max-width: 480px) {
        justify-content: center;
        align-items: center;
    }
`,J=o.Ay.div`
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: var(--secondary-grey-color);
    justify-content: space-between;

    @media (max-width: 480px) {
        background-size: calc(100vw / 1.5);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        background-size: calc(100vw / 4);
    }
`,B=o.Ay.div`
    width: 100%;
    height: 100%;
    padding: calc(3rem + var(--header-padding));
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    z-index: 2;

    @media (max-width: 480px) {
        padding: var(--page-padding);
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`,X=(0,o.Ay)(T.A)`
    margin-right: 0.25rem;
`,L=o.Ay.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 0rem;
    border-top: 0.5px solid var(--primary-gold-color);
    font-size: var(--info-text);

    @media (max-width: 480px) {
        font-size: 0.75rem;
        margin: 0rem;
    }
`,N=o.Ay.div`
    display: flex;
    flex-direction: column;
    width: 23rem;

    @media (max-width: 480px) {
        margin-bottom: 2rem;
        align-items: center;

        &:last-child {
            margin-bottom: 0rem;
        }
    }
`,q=o.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 14rem;
    height: 100%;
    gap: 1rem;
    font-size: var(--body-text);

    @media (max-width: 480px) {
        font-size: var(--header-small);
        align-items: center;
    }
`,H=(0,o.Ay)(y.N_)`
    text-decoration: none;
    height: 2.5rem;
    display: flex;
    align-items: center;
    color: var(--secondary-grey-color);

    &:hover {
        filter: brightness(150%);
    }
`,R=o.Ay.div`
    font-size: var(--header-normal);
    text-transform: uppercase;
    color: var(--primary-gold-color);
    font-family: var(--fancy-font);
    margin-bottom: 1rem;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-black-color);

    @media (max-width: 480px) {
        margin-bottom: 0.25rem;
    }
`,Y=o.Ay.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.15rem;
    width: 12rem;
    min-width: 12rem;
    justify-content: flex-start;
    margin-left: -0.65rem;

    @media (max-width: 480px) {
        gap: 0rem;
        width: 13rem;
        justify-content: space-between;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 14rem;
        min-width: 14rem;
        margin-right: 0.25rem;
    }
`,F=o.Ay.img`
    width: 1.25rem;
    height: 1.25rem;

    &:hover {
        filter: brightness(150%);
    }

    @media (max-device-width: 1024px) {
        width: 1.5rem;
        height: 1.5rem;

        &:hover {
            filter: brightness(100%);
        }
    }
`,P=(0,o.Ay)(I.A)`
    &.MuiIconButton-root {
        padding: 0.6rem;
    }
`,U=()=>{const{lang:e}=(0,n.Xe)();return(0,m.jsx)(D,{children:(0,m.jsxs)(J,{children:[(0,m.jsxs)(B,{children:[(0,m.jsxs)(N,{children:[(0,m.jsx)(R,{children:w.AJ.yJ[e].title}),(0,m.jsxs)(q,{children:[(0,m.jsx)(H,{to:"mailto:thetajikheritage@gmail.com",rel:"noreferrer",target:"_blank",children:w.AJ.yJ[e].list[0]}),(0,m.jsx)(O,{})]})]}),(0,m.jsxs)(N,{children:[(0,m.jsx)(R,{children:w.AJ.ES[e].title}),(0,m.jsxs)(q,{children:[(0,m.jsx)(H,{to:"#",children:w.AJ.ES[e].list[0]}),(0,m.jsx)(H,{to:"https://farhang.thetajikheritage.com",rel:"noreferrer",target:"_blank",children:w.AJ.ES[e].list[1]})]})]}),(0,m.jsxs)(N,{children:[(0,m.jsx)(R,{children:w.AJ.V$[e]}),(0,m.jsxs)(Y,{children:[(0,m.jsx)(H,{to:"https://www.instagram.com/tajik_heritage/",rel:"noreferrer",target:"_blank",children:(0,m.jsx)(P,{children:(0,m.jsx)(F,{src:"./socials/instagram.svg"})})}),(0,m.jsx)(H,{to:"https://www.pinterest.ca/thetajikheritage/",rel:"noreferrer",target:"_blank",children:(0,m.jsx)(P,{children:(0,m.jsx)(F,{src:"./socials/pinterest.svg"})})}),(0,m.jsx)(H,{to:"https://www.youtube.com/@thetajikheritage",rel:"noreferrer",target:"_blank",children:(0,m.jsx)(P,{children:(0,m.jsx)(F,{src:"./socials/youtube.svg"})})}),(0,m.jsx)(H,{to:"https://www.facebook.com/profile.php?id=61559405503836",rel:"noreferrer",target:"_blank",children:(0,m.jsx)(P,{children:(0,m.jsx)(F,{src:"./socials/facebook.svg"})})})]})]})]}),(0,m.jsxs)(L,{children:[(0,m.jsx)(X,{}),`2023-2025 The Tajik Heritage. ${w.AJ.Cv[e]}.`]})]})})};var W=t(36),Z=t(4127),Q=t(8978);const G=o.Ay.div`
    width: fit-content;
    cursor: pointer;
    pointer-events: auto;
    transition: opacity 0.5s ease, display 0.5s ease;
    ${e=>{let{$show:r}=e;return r?o.AH`
                  display: block;
                  opacity: 1;
              `:o.AH`
                  display: none;
                  opacity: 0;
              `}}

    @media (max-width: 480px) {
        position: fixed;
        bottom: 0.25rem;
        left: 0.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        position: fixed;
        left: 0.75rem;
        bottom: 0.75rem;
    }
`,K=o.Ay.div`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: var(--primary-box-shadow) var(--primary-black-color);
    background-image: ${e=>{let{lang:r}=e;return"kh"===r?"url(/flags/khorasan.png)":"us"===r?"url(/flags/united-states.png)":"ru"===r?"url(/flags/russia.svg)":"url(/flags/tajikistan.svg)"}};

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 2.25rem;
        width: 2.25rem;
    }
`,V=o.Ay.div`
    flex-direction: column;
    display: ${e=>{let{$showLangMenu:r}=e;return r?"flex":"none"}};
`,ee=(0,o.Ay)(I.A)`
    &.MuiIconButton-root {
        height: 2.5rem;
        width: 2.5rem;
        margin-bottom: 0.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiIconButton-root {
            margin-bottom: 1.25rem;
        }
    }
`,re=(0,o.Ay)((e=>{let{className:r,...t}=e;return(0,m.jsx)(Z.A,{...t,classes:{popper:r}})}))((()=>({[`& .${Q.A.tooltip}`]:{fontSize:"inherit",fontFamily:"inherit",fontWeight:"normal",padding:"0.5rem 1rem"},[`& .${Q.A.tooltipArrow}`]:{backgroundColor:"var(--primary-shadow-color)"},[`& .${Q.A.arrow}`]:{color:"var(--primary-shadow-color)"},"@media (max-width: 1024px)":{[`& .${Q.A.tooltip}`]:{display:"none"}}}))),te=()=>{const e=(0,a.zy)(),[r,t]=(0,i.useState)(!1),{lang:o,setLang:d}=(0,n.Xe)(),s=e.pathname.includes("print"),l=(0,i.useCallback)((()=>{t(!0)}),[]),c=(0,i.useCallback)((e=>{const r=e.currentTarget.getAttribute("data");!r||"us"!==r&&"ru"!==r&&"tj"!==r&&"fa"!==r||(d(r),t(!1))}),[d]),h=(0,i.useCallback)((()=>{t(!1)}),[]);return(0,i.useEffect)((()=>{localStorage.setItem("lang",o)}),[o]),(0,m.jsx)(W.x,{onClickAway:h,children:(0,m.jsxs)(G,{$show:!s,children:[(0,m.jsxs)(V,{$showLangMenu:r,children:["us"!==o&&(0,m.jsx)(ee,{data:"us",onClick:c,children:(0,m.jsx)(re,{title:w.gq.us,placement:"right",arrow:!0,children:(0,m.jsx)("span",{children:(0,m.jsx)(K,{lang:"us"})})})}),"tj"!==o&&(0,m.jsx)(ee,{data:"tj",onClick:c,children:(0,m.jsx)(re,{title:w.gq.tj,placement:"right",arrow:!0,children:(0,m.jsx)("span",{children:(0,m.jsx)(K,{lang:"tj"})})})}),"ru"!==o&&(0,m.jsx)(ee,{data:"ru",onClick:c,children:(0,m.jsx)(re,{title:w.gq.ru,placement:"right",arrow:!0,children:(0,m.jsx)("span",{children:(0,m.jsx)(K,{lang:"ru"})})})})]}),(0,m.jsx)(ee,{onMouseEnter:l,children:(0,m.jsx)(re,{title:w.gq[o],placement:"right",arrow:!0,children:(0,m.jsx)("span",{children:(0,m.jsx)(K,{lang:o})})})})]})})},ie=o.Ay.div`
    cursor: pointer;
    height: auto;
    width: var(--page-padding);
    pointer-events: auto;
    justify-content: center;
    align-items: center;
    display: ${e=>{let{$show:r}=e;return r?"flex":"none"}};

    @media (max-width: 1024px) {
        display: none;
    }
`,ae=o.Ay.img`
    height: 100%;
    width: 100%;
    transform: rotateZ(180deg);
`,ne=e=>{let{parentRef:r}=e;const{showScrollUpArrow:t}=(0,n.Xe)(),a=(0,i.useCallback)((()=>{null!==r.current&&r.current.scrollTo({top:0,behavior:"smooth"})}),[r]);return(0,m.jsx)(ie,{onClick:a,$show:t,children:(0,m.jsx)(ae,{src:"./arrows/side.svg"})})},oe=o.i7`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-1rem);} 
    60% {transform: translateY(-0.5rem);} 
`,de=o.Ay.div`
    height: 6rem;
    justify-content: center;
    align-items: center;
    display: ${e=>{let{$show:r}=e;return r?"flex":"none"}};

    @media (max-width: 480px) {
        height: 5rem;
        position: absolute;
        bottom: 4rem;
        right: 0.25rem;
        z-index: 1000;
    }
`,se=o.Ay.div`
    color: var(--primary-gold-color);

    @media (max-width: 480px) {
        display: none;
    }
`,le=o.Ay.img`
    animation: ${oe} 2s infinite;
    height: 100%;
    width: 3rem;
`,ce=()=>{const{pathname:e}=(0,a.zy)(),r=w.wS,{lang:t,showScrollDownArrow:i,isMenuOpen:o}=(0,n.Xe)(),d=i&&"/"===e&&!o;return(0,m.jsxs)(de,{$show:d,children:[(0,m.jsx)(se,{children:r[t]}),(0,m.jsx)(le,{src:"./arrows/side.svg"})]})},he=e=>{let{children:r}=e;const{setShowScrollUpArrow:t}=(0,n.Xe)(),{pathname:o}=(0,a.zy)(),d=(0,i.useRef)(null),[s,l]=(0,i.useState)(0),c=(0,i.useRef)(null),h=o.includes("print")||"/"===o,x=o.includes("print");return(0,m.jsxs)("div",{className:"parent-container",children:[x?null:(0,m.jsx)(v,{menuAnchorEl:c}),(0,m.jsx)(_,{menuAnchorEl:c}),(0,m.jsxs)("div",{ref:d,onScroll:()=>{const e=d.current;if(null==e)return;const r=e.scrollTop,i=e.getBoundingClientRect().height;t(r<s&&r>i/2),l(r)},className:h?"content-container":"content-container has_footer",children:[r,h?null:(0,m.jsx)(U,{})]}),(0,m.jsxs)("div",{className:"fixed-container",children:[(0,m.jsx)(te,{}),(0,m.jsx)(ne,{parentRef:d}),(0,m.jsx)(ce,{})]})]})}},1697:(e,r,t)=>{t.d(r,{O:()=>n});var i=t(1529),a=t(1906);const n=(0,i.Ay)(a.A)`
    &.MuiButton-root {
        background: var(--primary-shadow-color);
        color: var(--primary-white-color);
        height: 100%;
        text-transform: none;
        font-size: var(--body-text);
        font-family: var(--regular-font);
        padding: 0.375rem 1rem;
        box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
        width: ${e=>{let{$width:r}=e;return r}};
    }

    &.MuiButton-root:hover {
        background: var(--primary-shadow-color);
    }

    @media (max-width: 480px) {
        &.MuiButton-root {
            padding: 0.375rem 0.95rem;
            margin: 0rem;
        }
    }
`},1556:(e,r,t)=>{t.d(r,{B3:()=>a,Qq:()=>c,aW:()=>d,h_:()=>n,hc:()=>l,k3:()=>o,xO:()=>s});var i=t(1529);const a=i.Ay.div`
    width: 100%;
    background: var(--primary-black-color);
    height: var(--header-height);
    position: absolute;
    top: 0;
    left: 0;
`,n=i.Ay.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    z-index: 11;
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
    height: 100%;
    justify-content: space-between;
    color: var(--regular-white-color);
    background: var(--primary-black-color);
    padding: 0.5rem calc(1.5 * var(--header-padding)) 0.5rem
        var(--header-padding);

    @media (max-width: 480px) {
        padding: 0.25rem var(--header-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 1.15rem;
    }
`,o=i.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--header-big);
    font-family: var(--fancy-font);
    text-align: center;

    // Done
    @media (max-width: 480px) {
        font-size: var(--header-small);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.2rem;
    }
`,d=i.Ay.div`
    font-style: italic;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: absolute;
    left: var(--header-height);
    top: -5rem;
    width: calc(
        100% - var(--header-height) - 8.25rem - 1.7 * var(--header-padding)
    );
    max-width: calc(
        100% - var(--header-height) - 8.25rem - 1.7 * var(--header-padding)
    );
    transform: ${e=>{let{$index:r}=e;return r&&`translateY(${5*r}rem)`}};
    transition: transform 0.5s ease;
    padding: 0rem 0.5rem;

    // Done
    @media (max-width: 480px) {
        top: -(var(--header-height));
        padding: 0rem 0.25rem;
        left: calc(var(--header-height) + 0.35rem);
        width: calc(
            100% - var(--header-height) - 1.65 * var(--header-padding) - 2.15rem
        );
        max-width: calc(
            100% - var(--header-height) - 1.65 * var(--header-padding) - 2.15rem
        );
        transform: ${e=>{let{$index:r}=e;return r&&`translateY(${4.5*r}rem)`}};
    }
`,s=i.Ay.div`
    flex-shrink: 1;
    font-style: normal;
    font-weight: bold;
    color: var(--primary-gold-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,l=i.Ay.div`
    flex-shrink: 0;
    padding-left: 0.4rem;

    // Done
    @media (max-width: 480px) {
        padding-left: 0.25rem;
    }
`,c=i.Ay.div`
    width: fit-content;
    font-style: normal;
    color: var(--primary-gold-color);
    font-family: var(--fancy-font);
`},2835:(e,r,t)=>{t.d(r,{A:()=>l});t(5043);var i=t(1529),a=t(5475);const n=i.Ay.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--header-height) - 1rem);
    height: calc(var(--header-height) - 1rem);

    @media (max-width: 480px) {
        width: calc(var(--header-height) - 0.5rem);
        height: calc(var(--header-height) - 0.5rem);
    }
`,o=i.Ay.img`
    height: 100%;
    width: 100%;
`,d=(0,i.Ay)(a.k2)`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
`;var s=t(579);const l=e=>{let{handleLogoClick:r,navTo:t="/"}=e;return(0,s.jsx)(n,{children:(0,s.jsx)(d,{to:t,onClick:r,children:(0,s.jsx)(o,{src:"/logo/logo.svg"})})})}}}]);
//# sourceMappingURL=260.bf87301c.chunk.js.map