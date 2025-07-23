"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[7],{4007:(t,e,r)=>{r.r(e),r.d(e,{default:()=>D});var i=r(5043),o=r(215),n=r(2754),a=r(5260),d=r(1529),l=r(5475);const m=d.Ay.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
    height: calc(100svh - var(--header-height));

    @media (max-width: 480px) {
        height: 100svh;
    }
`,s=d.Ay.div`
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: var(--primary-gold-color);

    &::before {
        content: '';
        height: 3rem;
        width: 3rem;
        background: var(--primary-black-color);
        position: absolute;
        left: -1.5rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        display: none;
    }
`,h=d.Ay.div`
    font-size: 1.5rem;
    color: var(--regular-white-color);
    font-family: var(--fancy-font);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2rem;
    }
`,c=d.Ay.img`
    height: 6rem;
    margin-left: 0.5%;
    transform: ${t=>{let{$bottom:e}=t;return e&&"rotateZ(180deg)"}};

    @media (max-width: 1024px) {
        height: 8rem;
    }
`,p=d.Ay.div`
    height: 100%;
    width: 100%;
    overflow: scroll;
    padding-left: 6%;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }

    @media (max-width: 480px) {
        padding: calc(2 * var(--page-padding));
        margin: calc(1.5 * var(--page-padding)) 0rem;
        scroll-snap-type: mandatory;
        scroll-snap-type: y mandatory;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding-left: 10%;
        scroll-snap-type: mandatory;
        scroll-snap-type: y mandatory;
    }
`,g=d.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    opacity: ${t=>{let{$opacity:e}=t;return e&&e}};

    @media (max-width: 1024px) {
        scroll-snap-align: start;
        opacity: ${t=>{let{$opacity:e}=t;return e&&e+.5}};
    }
`,$=d.Ay.div`
    font-size: var(--header-small);
    color: var(--secondary-white-color);
    font-family: var(--fancy-font);
    transition: 500ms ease-in-out;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`,u=d.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100svh;

    @media (max-width: 480px) {
        justify-content: flex-start;
        max-height: 90svh;
        margin: 0rem;
        gap: var(--text-segment-gap);
        padding: var(--text-segment-gap) 0rem;
    }
`,x=d.Ay.div`
    font-weight: bold;
    color: #ffffffd4;
    width: 45rem;
    overflow-wrap: break-word;
    text-transform: uppercase;
    font-family: var(--fancy-font);
    text-shadow: 0.7rem 0rem 0rem var(--primary-shadow-color);
    ${t=>{let{$fontSize:e}=t;return e?d.AH`
                  opacity: 1;
                  font-size: calc(${e} * var(--stepper-text));
                  line-height: calc(
                      ${e} * var(--stepper-text) - 0.25rem
                  );
              `:d.AH`
                  opacity: 0;
              `}};

    @media (max-width: 480px) {
        width: 100%;
        text-shadow: 0.25rem 0rem 0rem var(--primary-shadow-color);
    }
`,v=d.Ay.div`
    width: 40%;
    margin-left: 10%;
    position: relative;
    margin-top: 2rem;
    font-size: var(--body-text);
    color: var(--secondary-white-color);
    line-height: var(--body-text-line-height);

    @media (max-width: 480px) {
        margin: 0rem;
        width: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 50%;
        margin-left: 3rem;
        font-size: 1.3rem;
    }
`,b=d.Ay.div`
    gap: 0.25rem;
    width: 3%;
    height: 20%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    ${t=>{let{$bottom:e}=t;return e?"bottom: 0rem":"top: 0rem"}};
    justify-content: ${t=>{let{$bottom:e}=t;return e?"end":"start"}};

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-left: 10%;
    }
`,y=d.Ay.div`
    height: fit-content;
    font-weight: 500;
    padding-bottom: 0.25rem;
    margin-top: var(--text-segment-gap);
    color: var(--primary-gold-color);
    width: ${t=>{let{$length:e}=t;return`calc(${e} * 0.85rem)`}};

    &::before {
        content: '';
        position: absolute;
        height: 0.1rem;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        background-color: var(--regular-white-color);
        transform-origin: bottom right;
        transition: transform 0.3s ease-in-out;
        width: ${t=>{let{$length:e}=t;return`calc(${e} * 0.85rem)`}};
    }

    &:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    &:hover {
        border-right: 0.1rem solid var(--regular-white-color);
    }

    @media (max-width: 480px) {
        border-right: 0.1rem solid var(--regular-white-color);
        border-bottom: 0.1rem solid var(--regular-white-color);

        &::before {
            display: none;
        }

        &:hover {
            border-right: 0.1rem solid var(--regular-white-color);
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-right: 0.1rem solid var(--regular-white-color);
        border-bottom: 0.1rem solid var(--regular-white-color);

        &::before {
            display: none;
        }

        &:hover {
            border-right: 0.1rem solid var(--regular-white-color);
        }
    }
`,f=(0,d.Ay)(l.k2)`
    text-decoration: none;
`,w=d.Ay.img`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        position: absolute;
        bottom: -3.25rem;
        right: -2rem;
        border-radius: 50%;
        width: 100svw;
        height: auto;
        padding: 0.5rem;
        z-index: -1;
        opacity: 0.3;
        border: 1px solid var(--primary-gold-color);
    }
`;var A=r(579);const j=t=>{var e,r,a,d,l;let{containerRef:j,divRefs:k,opacities:z}=t;const H=n.l0,{lang:R}=(0,o.Xe)(),[_,S]=(0,i.useState)(0);return(0,i.useEffect)((()=>{const t=new IntersectionObserver((t=>{t.forEach(((t,e)=>{t.isIntersecting&&S(e)}))}),{root:null,rootMargin:"0px",threshold:.7});if(j&&j.current){return Array.from(j.current.children).forEach((e=>{t.observe(e)})),()=>{t.disconnect()}}}),[k]),(0,A.jsxs)(m,{children:[(0,A.jsx)(s,{}),(0,A.jsxs)(b,{$bottom:!1,children:[(0,A.jsx)(c,{src:"./arrows/home.svg"}),(0,A.jsx)($,{children:(null===(e=H[_-1])||void 0===e?void 0:e.num)||(null===(r=H[H.length-1])||void 0===r?void 0:r.num)})]}),(0,A.jsxs)(p,{ref:j,children:[H.map(((t,e)=>(0,A.jsxs)(g,{ref:k[e],$opacity:z[e],children:[(0,A.jsx)(h,{children:null===t||void 0===t?void 0:t.num}),(0,A.jsxs)(u,{children:[(0,A.jsx)(x,{$fontSize:t.title[R].font,children:null===t||void 0===t?void 0:t.title[R].text}),(0,A.jsxs)(v,{children:[(0,A.jsx)("div",{dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.desc.text[R]}}),(0,A.jsx)(f,{to:null===t||void 0===t?void 0:t.desc.link,children:(0,A.jsx)(y,{$length:n.Ye[R].length,children:n.Ye[R]})})]})]})]},e))),(0,A.jsx)(w,{src:null===(a=H[_])||void 0===a?void 0:a.inner.big.img})]}),(0,A.jsxs)(b,{$bottom:!0,children:[(0,A.jsx)($,{children:(null===(d=H[_+1])||void 0===d?void 0:d.num)||(null===(l=H[0])||void 0===l?void 0:l.num)}),(0,A.jsx)(c,{src:"./arrows/home.svg",$bottom:!0})]})]})},k=d.Ay.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
    pointer-events: none;

    @media (max-width: 480px) {
        display: none;
    }
`,z=(d.Ay.div`
    position: relative;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
`,d.Ay.div`
    z-index: 1;
    border-radius: 50%;
    position: absolute;
    will-change: transform;
    border: 1px solid var(--primary-gold-color);
`),H=(0,d.Ay)(z)`
    width: 30rem;
    height: 30rem;
    opacity: ${t=>{let{$opacity:e}=t;return e&&e}};
    transform: scale(${t=>{let{$opacity:e}=t;return e&&e}});
    ${t=>{let{$bottom:e,$top:r,$right:i}=t;return d.AH`
        bottom: ${e&&e.d};
        top: ${r&&r.d};
        right: ${i&&i.d};
    `}}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${t=>{let{$bottom:e,$top:r,$right:i}=t;return d.AH`
            bottom: ${e&&e.t};
            top: ${r&&r.t};
            right: ${i&&i.t};
        `}}
    }
`,R=(0,d.Ay)(z)`
    width: 16rem;
    height: 16rem;
    opacity: ${t=>{let{$opacity:e}=t;return e&&e}};
    transform: scale(${t=>{let{$opacity:e}=t;return e&&e}});
    ${t=>{let{$bottom:e,$top:r,$right:i}=t;return d.AH`
        bottom: ${e&&e.d};
        top: ${r&&r.d};
        right: ${i&&i.d};
    `}}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${t=>{let{$bottom:e,$top:r,$right:i}=t;return d.AH`
            bottom: ${e&&e.t};
            top: ${r&&r.t};
            right: ${i&&i.t};
        `}}
    }
`,_=(0,d.Ay)(z)`
    width: 11rem;
    height: 11rem;
    opacity: ${t=>{let{$opacity:e}=t;return e&&e}};
    transform: scale(${t=>{let{$opacity:e}=t;return e&&e}});
    ${t=>{let{$bottom:e,$top:r,$right:i}=t;return d.AH`
        bottom: ${e&&e.d};
        top: ${r&&r.d};
        right: ${i&&i.d};
    `}}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${t=>{let{$bottom:e,$top:r,$right:i}=t;return d.AH`
            bottom: ${e&&e.t};
            top: ${r&&r.t};
            right: ${i&&i.t};
        `}}
    }
`,S=d.Ay.img`
    position: absolute;
    object-fit: contain;
    border-radius: 50%;
    will-change: transform;
    z-index: 0;
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
`,E=(0,d.Ay)(S)`
    width: 29rem;
    height: 29rem;
    transform: scale(${t=>{let{$opacity:e}=t;return e&&e}});
    opacity: ${t=>{let{$opacity:e}=t;return e&&e}};

    ${t=>{let{$top:e,$bottom:r,$right:i}=t;return d.AH`
        top: ${e&&e.d};
        bottom: ${r&&r.d};
        right: ${i&&i.d};
    `}}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${t=>{let{$top:e,$bottom:r,$right:i}=t;return d.AH`
            top: ${e&&e.t};
            bottom: ${r&&r.t};
            right: ${i&&i.t};
        `}}
    }
`,C=(0,d.Ay)(S)`
    width: 15rem;
    height: 15rem;
    transform: scale(${t=>{let{$opacity:e}=t;return e&&e}});
    opacity: ${t=>{let{$opacity:e}=t;return e&&e}};

    ${t=>{let{$top:e,$bottom:r,$right:i}=t;return d.AH`
        top: ${e&&e.d};
        bottom: ${r&&r.d};
        right: ${i&&i.d};
    `}}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${t=>{let{$top:e,$bottom:r,$right:i}=t;return d.AH`
            top: ${e&&e.t};
            bottom: ${r&&r.t};
            right: ${i&&i.t};
        `}}
    }
`,X=(0,d.Ay)(S)`
    width: 10rem;
    height: 10rem;
    transform: scale(${t=>{let{$opacity:e}=t;return e&&e}});
    opacity: ${t=>{let{$opacity:e}=t;return e&&e}};

    ${t=>{let{$top:e,$bottom:r,$right:i}=t;return d.AH`
        top: ${e&&e.d};
        bottom: ${r&&r.d};
        right: ${i&&i.d};
    `}}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${t=>{let{$top:e,$bottom:r,$right:i}=t;return d.AH`
            top: ${e&&e.t};
            bottom: ${r&&r.t};
            right: ${i&&i.t};
        `}}
    }
`,Y=t=>{let{entry:e,opacities:r,index:i}=t;return(0,A.jsxs)(k,{children:[(0,A.jsx)(H,{$opacity:r[i],$bottom:e.outer.big.bottom,$right:e.outer.big.right,$top:e.outer.big.top}),(0,A.jsx)(E,{src:e.inner.big.img,$opacity:r[i],$bottom:e.inner.big.bottom,$right:e.inner.big.right,$top:e.inner.big.top})]})},I=t=>{let{entry:e,opacities:r,index:i}=t;return(0,A.jsxs)(k,{children:[(0,A.jsx)(R,{$opacity:r[i],$bottom:e.outer.medium.bottom,$right:e.outer.medium.right,$top:e.outer.medium.top},`medium_outer_${i}`),(0,A.jsx)(C,{src:e.inner.medium.img,$opacity:r[i],$bottom:e.inner.medium.bottom,$right:e.inner.medium.right,$top:e.inner.medium.top},e.inner.medium.img)]})},L=t=>{let{entry:e,opacities:r,index:i}=t;return(0,A.jsxs)(k,{children:[(0,A.jsx)(_,{$opacity:r[i],$bottom:e.outer.small.bottom,$right:e.outer.small.right,$top:e.outer.small.top},`small_outer_${i}`),(0,A.jsx)(X,{src:e.inner.small.img,$opacity:r[i],$bottom:e.inner.small.bottom,$right:e.inner.small.right,$top:e.inner.small.top},e.inner.small.img)]})},M=d.Ay.div`
    box-sizing: border-box;
    background-color: var(--primary-black-color);
    overflow: hidden;
    min-height: calc(100svh - var(--header-height));

    @media (max-width: 480px) {
        min-height: calc(100svh - var(--header-height));
    }
`,B=d.Ay.div`
    height: 100%;
    display: flex;
    background: linear-gradient(
        90deg,
        rgba(189, 157, 82, 0.05),
        rgba(189, 157, 82, 0.07),
        rgba(189, 157, 82, 0.09),
        rgba(189, 157, 82, 0.11)
    );
    position: relative;
`,T=d.Ay.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
`,D=()=>{const t=n.wS,e=n.l0,r=(0,i.useRef)(null),{lang:d,setTitle:l,setShowScrollDownArrow:m}=(0,o.Xe)(),s=[(0,i.useRef)(null),(0,i.useRef)(null),(0,i.useRef)(null),(0,i.useRef)(null),(0,i.useRef)(null)],[h,c]=(0,i.useState)([1,0,0,0,0]);return(0,i.useEffect)((()=>{l(n.El);const t=()=>{const t=r.current;if(null===t)return;const e=t.getBoundingClientRect(),i=e.top,o=e.bottom,n=s.map((t=>{const r=t.current;if(null===r)return 0;const n=r.getBoundingClientRect(),a=n.top;if(n.bottom<i||a>o)return 0;m(!1);return 1-Math.abs(i-a)/(.8*e.height)}));c(n)},e=r.current;return e&&e.addEventListener("scroll",t),()=>{e&&e.removeEventListener("scroll",t)}}),[]),(0,A.jsx)(a.A,{children:(0,A.jsx)(M,{children:(0,A.jsxs)(B,{children:[(0,A.jsx)(j,{containerRef:r,divRefs:s,opacities:h}),null===e||void 0===e?void 0:e.map(((e,r)=>(0,A.jsxs)(T,{children:[(0,A.jsx)(Y,{opacities:h,index:r,entry:e}),(0,A.jsx)(I,{opacities:h,index:r,entry:e}),(0,A.jsx)(L,{opacities:h,index:r,entry:e})]},`${t[d]}_${r}`)))]})})})}}}]);
//# sourceMappingURL=7.af1e0f92.chunk.js.map