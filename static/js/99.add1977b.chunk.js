"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[99],{5599:(e,r,i)=>{i.r(r),i.d(r,{default:()=>Mi});var t=i(5043),a=i(3216),d=i(215),o=i(7683),n=i(4946),l=i(910),s=i(4929),m=i(1529);const h=m.Ay.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem var(--page-padding) calc(2 * var(--text-segment-gap))
        var(--page-padding);
    color: var(--primary-black-color);
    gap: var(--page-padding);
    position: relative;
    width: 100%;

    @media (max-width: 480px) {
        flex-wrap: wrap;
        gap: var(--text-segment-gap);
        padding: 0rem 0rem calc(2 * var(--text-segment-gap)) 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 1rem 2rem;
    }
`,c=m.Ay.div`
    width: 50%;
    height: 30rem;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        padding: 0rem var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 100%;
        height: 38rem;
    }
`,p=m.Ay.img`
    width: 100%;
    height: auto;
`,g=m.Ay.div`
    width: 100%;
    text-align: left;
    font-style: italic;
    color: var(--primary-black-color);
    padding: 0.25rem 0.5rem;

    @media (max-width: 480px) {
        font-size: var(--info-text);
        line-height: var(--body-text-line-height);
        padding: 0rem var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.25rem;
        line-height: 1.3rem;
    }
`;var v=i(1070);const x=m.Ay.div`
    background-image: url(${"/customAssets/noise.webp"});
    min-height: 20rem;
    padding-bottom: calc(2 * var(--text-segment-gap));
    background-color: var(--primary-white-color);
    font-size: var(--body-text);
    color: var(--primary-black-color);

    @media (max-width: 480px) {
        position: relative;
        padding-bottom: 0rem;
        font-size: var(--body-text);

        &::after {
            content: '';
            padding: 2rem;
            width: 100%;
            background: var(--primary-black-color);
            background-image: url(${"/customAssets/noise.webp"});
            -webkit-clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            position: absolute;
            bottom: 1rem;
            box-sizing: border-box;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding-bottom: 0rem;
        position: relative;

        &::after {
            content: '';
            padding: 3rem;
            width: 100%;
            background: var(--primary-black-color);
            background-image: url(${"/customAssets/noise.webp"});
            -webkit-clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            position: absolute;
            bottom: 1.01rem;
            box-sizing: border-box;
        }
    }
`,u=(0,m.Ay)(v.a)`
    font-style: normal;
    font-weight: normal;
    text-shadow: none;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-bottom: ${e=>{let{$align:r}=e;return r&&"0rem"}};
    }
`,w=m.Ay.div`
    @media (max-width: 480px) {
        line-height: var(--body-text-line-height);
        padding: var(--text-segment-gap) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 0rem 1rem 0rem;
    }
`,y=m.Ay.div`
    width: 100%;
    display: flex;
    min-height: 20rem;
    padding: var(--text-segment-gap) 0rem;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
    }
`,b=m.Ay.div`
    width: 50%;
    position: relative;
    height: 100%;

    @media (max-width: 1024px) {
        width: 100%;
        height: auto;
    }
`,f=m.Ay.div`
    width: 50%;
    height: 30rem;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;

    @media (max-width: 480px) {
        width: 100%;
        height: var(--slideshow-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 100%;
        height: 40rem;
    }
`;var j=i(579);const k=e=>{var r,i,t;let{bioOne:a}=e;return(0,j.jsxs)(h,{children:[(0,j.jsxs)(b,{children:[(0,j.jsx)(u,{$color:"var(--regular-black-color)",children:null===a||void 0===a?void 0:a.year}),(0,j.jsx)(s.n,{data:null===a||void 0===a?void 0:a.desc,TextWrapper:w})]}),(0,j.jsx)(c,{children:(0,j.jsxs)("div",{children:[(0,j.jsx)(p,{src:"https://api.thetajikheritage.com"+(null===(i=a.slides[0])||void 0===i?void 0:i.img)},null===(r=a.slides[0])||void 0===r?void 0:r.id),(0,j.jsx)(g,{dangerouslySetInnerHTML:{__html:null===(t=a.slides[0])||void 0===t?void 0:t.info}})]})})]})};var A=i(4821),$=i(6390);const z=13,S=18,I=m.i7`
    0% {
        transform: translateX(${6.5}rem);
    }
    50% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(0);
    }
`,C=m.Ay.div`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    margin: var(--text-segment-gap) 0rem;
    color: var(--primary-white-color);
    height: calc(38rem + ${S}rem);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-black-color);

    @media (max-width: 480px) {
        flex-direction: column;
        height: 35.5rem;
    }
`,M=m.Ay.div`
    background: var(--primary-grey-color);
    margin: ${"9rem"} 0rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);
    height: 38rem;

    @media (max-width: 480px) {
        height: 100%;
        margin: ${"6.5rem"} 0rem 0rem 0rem;
    }
`,X=m.Ay.div`
    height: 100%;
    width: 100%;
    opacity: 0.2;
    filter: grayscale(1);
    background-size: cover;
    background-position: center;
    background-image: ${e=>{let{$backdrop:r}=e;return`url(${r})`}};

    @media (max-width: 480px) {
        opacity: 0.12;
    }
`,T=m.Ay.div`
    left: 10%;
    top: 0rem;
    z-index: 1;
    position: absolute;
    pointer-events: none;

    @media (max-width: 480px) {
        left: auto;
        height: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        left: 2rem;
    }
`,B=m.Ay.img`
    width: ${S}rem;
    min-width: ${S}rem;
    min-height: ${S}rem;
    background: var(--primary-black-color) url('/customAssets/loader.png')
        center no-repeat;
    background-size: 50% auto;
    display: block;
    filter: grayscale(1)
        ${e=>{let{$show:r}=e;return r?"brightness(100%)":"brightness(50%)"}};
    box-shadow: ${e=>{let{$show:r}=e;return r?"var(--primary-box-shadow) var(--secondary-white-color);":"var(--primary-box-shadow) var(--primary-shadow-color)"}};

    @media (max-width: 480px) {
        width: ${z}rem;
        min-width: ${z}rem;
        min-height: ${z}rem;
        display: ${e=>{let{$show:r}=e;return r?"block":"none"}};
        animation: ${I} 0.25s ease-in-out forwards;
        object-fit: cover;
    }
`,_=m.Ay.div`
    height: 0.0625rem;
    width: 6rem;
    background: var(--primary-gold-color);
    margin: -0.5rem;

    @media (max-width: 480px) {
        display: none;
    }
`,D=m.Ay.div`
    position: absolute;
    top: ${9}rem;
    width: calc(100% - ${S}rem - 10%);
    left: calc(${S}rem + 10%);
    height: 38rem;
    padding: 3rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
        position: absolute;
        top: 31.5rem;
        left: 0rem;
        width: 100%;
        height: 4rem;
        padding: 0rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`,E=m.Ay.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 4rem;
    position: relative;
    transform: ${e=>{let{$top:r}=e;return r?"rotateZ(-90deg)":"rotateZ(90deg)"}};

    > button {
        transform: ${e=>{let{$top:r}=e;return r?"rotateZ(180deg)":"rotateZ(0deg)"}};
    }

    @media (max-width: 480px) {
        width: 4rem;
        transform: ${e=>{let{$top:r}=e;return"rotateZ(0deg)"}};

        > button {
            transform: ${e=>{let{$top:r}=e;return"rotateZ(0deg)"}};
        }
    }
`,F=m.Ay.div`
    display: flex;
    height: 20rem;
    width: 100%;
    transition: ease 1000ms;
    align-items: center;
    color: var(--secondary-white-color);

    @media (max-width: 480px) {
        flex-direction: column;
        position: relative;
    }
`,L=m.Ay.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    height: 19rem;
    padding: 0rem calc(1.5 * var(--page-padding));

    @media (max-width: 480px) {
        height: 18.5rem;
        padding: 0.5rem var(--mobile-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem;
    }
`,H=m.Ay.div`
    text-align: justify;
    word-wrap: break-word;
    word-break: break-word;
    line-height: var(--body-text-line-height);
    font-size: var(--body-text);

    &::-webkit-scrollbar {
        width: var(--input-radius);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: var(--input-radius);
    }

    @media (max-width: 480px) {
        max-height: calc(
            100svh - ${21.45}rem - var(--header-big) -
                var(--text-segment-gap)
        );
        overflow-y: auto;
        margin-right: calc(var(--input-radius) / 2);
        padding: 0rem calc(var(--page-padding) - (var(--input-radius) / 2))
            var(--text-segment-gap) var(--page-padding);
    }
`,W=e=>{var r,i,a;let{bioData:o}=e;const{lang:n}=(0,d.Xe)(),[l,m]=(0,t.useState)([...null===o||void 0===o?void 0:o.two[n]]);(0,t.useEffect)((()=>{m([...null===o||void 0===o?void 0:o.two[n]])}),[n]);return(0,j.jsxs)(C,{children:[(0,j.jsx)(M,{children:(0,j.jsx)(X,{$backdrop:"https://api.thetajikheritage.com"+(null===o||void 0===o?void 0:o.backdrops[0])})}),(0,j.jsxs)(T,{children:[(0,j.jsx)(B,{src:"https://api.thetajikheritage.com"+l[(null===o||void 0===o?void 0:o.two[n].length)-1].img},l[(null===o||void 0===o?void 0:o.two[n].length)-1].img),(0,j.jsxs)(F,{children:[(0,j.jsx)(B,{src:"https://api.thetajikheritage.com"+(null===(r=l[0])||void 0===r?void 0:r.img),$show:!0},l[0].img),(0,j.jsxs)(L,{children:[(0,j.jsx)(u,{$color:"var(--primary-white-color)",$align:"center",children:null===(i=l[0])||void 0===i?void 0:i.year}),(0,j.jsx)(s.n,{data:null===(a=l[0])||void 0===a?void 0:a.desc,TextWrapper:H})]})]}),(0,j.jsx)(B,{src:"https://api.thetajikheritage.com"+l[1].img},l[1].img)]}),(0,j.jsxs)(D,{children:[(0,j.jsxs)(E,{$top:!0,children:[(0,j.jsx)(A.A,{disabled:!1,movePrev:()=>{if(l.length>1){const e=l.pop();l.unshift(e),m([...l])}}}),(0,j.jsx)(_,{})]}),(0,j.jsxs)(E,{$top:!1,children:[(0,j.jsx)($.A,{disabled:!1,moveNext:()=>{if(l.length>1){const e=l.shift();l.push(e),m([...l])}}}),(0,j.jsx)(_,{})]})]})]})},R=m.Ay.div`
    width: 100%;
    position: relative;
    padding: var(--text-segment-gap) var(--page-padding);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 2rem 2rem;
    }
`,Y=m.Ay.div`
    display: flex;
    justify-content: center;
`,q=m.Ay.div`
    border: 0.125rem solid var(--primary-gold-color);
    border-radius: 50%;
    width: 5.25rem;
    height: 5.25rem;

    @media (max-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`,N=m.Ay.div`
    height: 100%;
    width: 100%;
    color: var(--primary-gold-color);
    transform: rotateZ(180deg);
    background-image: url('/customAssets/quotation.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60%;
`,P=m.Ay.div`
    font-size: var(--header-big);
    font-family: var(--fancy-font);
    font-style: bold;
    text-align: center;
    padding: var(--text-segment-gap) 0rem;
    line-height: var(--header-big-line-height);

    @media (max-width: 480px) {
        font-size: var(--header-medium);
        line-height: var(--header-medium-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        line-height: 2.4rem;
    }
`,Z=m.Ay.div`
    column-count: 2;
    column-gap: var(--page-padding);
    overflow: hidden;

    @media (max-width: 480px) {
        column-count: 1;
        line-height: var(--body-text-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        column-gap: 2rem;
    }
`,O=e=>{let{bioThree:r}=e;return(0,j.jsxs)(R,{children:[(0,j.jsx)(Y,{children:(0,j.jsx)(q,{children:(0,j.jsx)(N,{})})}),(0,j.jsx)(P,{dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.quote}}),(0,j.jsx)(s.n,{data:null===r||void 0===r?void 0:r.desc,TextWrapper:Z})]})};var U=i(2958);const V=m.Ay.div`
    width: 100%;
    height: 30rem;
    padding: 0rem 2.8rem 3rem 3rem;
    border-bottom: 0.0625rem solid var(--primary-gold-color);
    border-top: 0.0625rem solid var(--primary-gold-color);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }

    @media (max-width: 480px) {
        padding: 0rem 0rem var(--text-segment-gap) 0rem;
        height: auto;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 2rem 2rem;
        height: auto;
    }
`,J=(m.Ay.div`
    position: absolute;
    display: flex;
`,m.Ay.div`
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
`,e=>{let{bioFour:r}=e;const i=(0,t.useRef)(null),[a,d]=(0,t.useState)(0);return(0,t.useEffect)((()=>{var e;const r=null===i||void 0===i||null===(e=i.current)||void 0===e?void 0:e.getBoundingClientRect().width;r&&d(r)}),[]),(0,j.jsxs)(y,{children:[(0,j.jsx)(b,{children:(0,j.jsxs)(V,{children:[(0,j.jsx)(u,{$align:"center",$color:"var(--regular-black-color)",children:null===r||void 0===r?void 0:r.year}),(0,j.jsx)(s.n,{data:null===r||void 0===r?void 0:r.desc,TextWrapper:w})]})}),(0,j.jsx)(f,{ref:i,children:(0,j.jsx)(U.A,{width:a,height:"var(--slideshow-height)",slides:null===r||void 0===r?void 0:r.slides})})]})}),Q=m.Ay.div`
    width: 100%;
    text-align: center;
    color: var(--primary-black-color);
    padding: var(--text-segment-gap) var(--page-padding);

    @media (max-width: 480px) {
        padding: 0rem var(--page-padding) var(--text-segment-gap)
            var(--page-padding);
        line-height: var(--body-text-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 2rem 2rem 2.5rem 2rem;
    }
`,K=m.Ay.div`
    padding-bottom: var(--text-segment-gap);

    @media (max-width: 480px) {
        padding-bottom: 0rem;
    }
`,G=e=>{let{bioFive:r}=e;return(0,j.jsxs)(Q,{children:[(0,j.jsx)(u,{$color:"var(--primary-gold-color)",$align:"center",children:null===r||void 0===r?void 0:r.year}),(0,j.jsx)(s.n,{data:r.desc,TextWrapper:K})]})},ee=m.Ay.div`
    background: var(--primary-grey-color);
    height: 30rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);

    @media (max-width: 480px) {
        height: calc(var(--slideshow-height) + 1rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 40rem;
    }
`,re=m.Ay.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0.2;
    filter: grayscale(1);
    background-image: ${e=>{let{$src:r}=e;return`url(${r})`}};

    @media (max-width: 480px) {
        margin-top: -3rem;
    }
`,ie=m.Ay.div`
    position: absolute;
    text-align: center;
    width: 100%;
    left: 50%;
    top: 50%;
    color: var(--primary-gold-color);
    font-size: 2.2rem;
    font-style: italic;
    padding: 0% 10%;
    font-family: var(--fancy-font);
    transform: translate(-50%, -50%);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-black-color);

    @media (max-width: 480px) {
        font-size: var(--header-big);
        line-height: var(--header-big-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        line-height: 2.4rem;
    }
`,te=m.Ay.div`
    margin-top: 0.5rem;
    color: var(--primary-white-color);
    font-size: var(--body-text);
    font-style: normal;
    font-family: var(--regular-font);
    text-align: end;

    @media (max-width: 480px) {
        margin-top: var(--text-segment-gap);
        font-size: var(--body-text);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: var(--body-text);
    }
`,ae=e=>{let{poet:r}=e;const{lang:i}=(0,d.Xe)(),a=(0,t.useRef)(null),[o,n]=(0,t.useState)(0);return(0,t.useEffect)((()=>{var e;if(!a.current)return;const r=null===a||void 0===a||null===(e=a.current)||void 0===e?void 0:e.getBoundingClientRect().width;n(r)}),[]),(0,j.jsxs)(y,{children:[(0,j.jsxs)(b,{children:[(0,j.jsx)(ee,{children:(0,j.jsx)(re,{$src:"https://api.thetajikheritage.com"+r.backdrops[2]})}),(0,j.jsxs)(ie,{children:[(0,j.jsx)(s.n,{data:null===r||void 0===r?void 0:r.six[i].desc}),(0,j.jsx)(te,{dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.six[i].author}})]})]}),(0,j.jsx)(f,{ref:a,children:(0,j.jsx)(U.A,{height:"var(--slideshow-height)",width:o,slides:null===r||void 0===r?void 0:r.six[i].slides})})]})},de=e=>{let{bioData:r}=e;const{lang:i}=(0,d.Xe)();return(0,j.jsxs)(x,{id:"Biography",children:[(0,j.jsx)(k,{bioOne:r.one[i]}),(0,j.jsx)(W,{bioData:r}),(0,j.jsx)(O,{bioThree:r.three[i]}),(0,j.jsx)(J,{bioFour:r.four[i]}),(0,j.jsx)(G,{bioFive:r.five[i]}),(0,j.jsx)(ae,{poet:r})]})},oe=m.i7`
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
`,ne=(m.i7`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    
    }
`,m.Ay.div`
    background: var(--primary-black-color);
    display: flex;
    justify-content: space-between;
    position: relative;
    border-radius: var(--page-radius) var(--page-radius) 0rem 0rem;
    overflow: hidden;

    &:after {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        -webkit-clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        bottom: -0.01rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        flex-direction: column-reverse;

        &:after {
            content: '';
            padding: 2rem;
            width: 100%;
            background: var(--primary-white-color);
            -webkit-clip-path: polygon(
                -10px 0px,
                100% 100%,
                100% 100%,
                0% 100%
            );
            clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
            position: absolute;
            bottom: 0rem;
            box-sizing: border-box;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem 2.5rem 0rem 0rem;
    }
`),le=m.Ay.div`
    position: absolute;
    top: 0rem;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: url(${"/customAssets/noise.webp"});
    border-radius: var(--page-radius) var(--page-radius) 0rem 0rem;
`,se=m.Ay.img`
    width: 47rem;
    min-height: 50rem;
    height: auto;
    background: var(--primary-black-color);
    transform-origin: center;
    border-radius: 5rem var(--page-radius) 0rem 5rem;

    @media (max-width: 480px) {
        width: 100%;
        min-height: 25rem;
        margin-left: -12%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem 2.5rem 0rem 2.5rem;
        min-height: 40rem;
        width: 40rem;
    }
`,me=m.Ay.div`
    opacity: 0;
    font-size: 7.25rem;
    font-weight: bold;
    font-style: italic;
    animation-delay: 0.1s;
    text-shadow: 0rem 0rem 5rem black;
    animation: ${oe} 1s ease-in-out forwards;

    ${e=>{let{$color:r}=e;return r?m.AH`
                  animation-delay: 0s;
                  margin-right: 2rem;
                  color: transparent;
                  -webkit-text-stroke-width: 0.22rem;
                  -webkit-text-stroke-color: var(--primary-gold-color);
              `:m.AH`
                  color: var(--secondary-white-color);
                  -webkit-text-stroke-color: transparent;
              `}}

    @media (max-width: 480px) {
        font-size: calc(1.35 * var(--header-large));
        line-height: calc(1.4 * var(--header-large));
        text-align: left;
        text-shadow: 0rem 0rem 2rem black;

        ${e=>{let{$color:r}=e;return r?m.AH`
                      margin: 0rem;
                      -webkit-text-stroke-width: 0.15rem;
                  `:m.AH`
                      -webkit-text-stroke-color: transparent;
                  `}}
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 6.5rem;
    }
`,he=m.Ay.div`
    position: absolute;
    left: var(--page-padding);
    bottom: 6rem;
    display: flex;
    z-index: 2;

    @media (max-width: 480px) {
        top: 11.25rem;
        display: block;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        left: 3rem;
        bottom: 7rem;
    }
`,ce=m.Ay.div`
    color: var(--secondary-white-color);
    font-size: 10rem;
    min-height: 24rem;
    position: absolute;
    top: 4rem;
    left: 14rem;
    opacity: 0.25;
    font-weight: bold;
    z-index: 10;

    @media (max-width: 480px) {
        font-size: var(--header-large);
        min-height: 8rem;
        position: absolute;
        top: var(--page-padding);
        right: var(--page-padding);
        text-align: right;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 8rem;
        left: 8rem;
    }
`,pe=m.Ay.div`
    margin-left: 9rem;

    @media (max-width: 480px) {
        margin: 0rem var(--page-padding) 0rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-bottom: 1rem;
    }
`,ge=m.Ay.span`
    opacity: 0;
    display: inline-block;
    animation: ${oe} 1s ease-in-out forwards;
    animation-delay: ${e=>{let{$delay:r}=e;return r||"0s"}};
`,ve=m.Ay.div`
    height: 20rem;

    @media (max-width: 480px) {
        display: flex;
        min-height: fit-content;
        background-color: var(--primary-black-color);
        position: relative;
        height: 17rem;

        &:before {
            content: '';
            padding: 2rem;
            width: 100%;
            background: var(--primary-black-color);
            -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
            position: absolute;
            top: -5rem;
            box-sizing: border-box;
        }
    }
`,xe=m.Ay.div`
    font-size: var(--header-normal);
    padding: 0rem var(--page-padding);
    width: 50%;
    gap: 1rem;
    z-index: 10;
    position: absolute;
    top: 5rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 480px) {
        top: -2.45rem;
        width: 100%;
        gap: 0rem;
    }
`,ue=m.Ay.div`
    color: var(--secondary-white-color);

    @media (max-width: 480px) {
        line-height: var(--header-large);
        color: var(--secondary-white-color);
        text-decoration: none;
        display: block;
        overflow: hidden;
    }
`,we=m.Ay.span`
    display: block;
    cursor: pointer;
    transition: text-shadow 0.25s ease-in-out;

    &:hover {
        text-shadow: 0rem 0rem 1.5rem var(--secondary-white-color);
    }

    @media (max-width: 480px) {
        text-shadow: 0rem 0.35rem 1.5rem var(--secondary-white-color);

        &:hover {
            text-shadow: 0rem 0.35rem 1.5rem var(--secondary-white-color);
        }
    }
`,ye=e=>{let{sections:r,scrollToView:i}=e;const{lang:t}=(0,d.Xe)();return(0,j.jsx)(ve,{children:(0,j.jsx)(xe,{children:r[t].map(((e,t)=>(0,j.jsx)(ue,{children:(0,j.jsx)(we,{"data-id":`#${r.us[t]}`,onClick:e=>i(e),children:e})},t)))})})},be=e=>{var r;let{poet:i,scrollToView:t}=e;const{lang:a}=(0,d.Xe)(),o=null===i||void 0===i?void 0:i.years[0].split(""),n=null===i||void 0===i?void 0:i.years[1].split(""),l=null===i||void 0===i?void 0:i.name[a].split(" ");return(0,j.jsxs)(ne,{children:[(0,j.jsx)(le,{}),(0,j.jsxs)("div",{children:[(0,j.jsx)(ye,{sections:i.sections,scrollToView:t}),(0,j.jsxs)(ce,{children:[(0,j.jsx)(pe,{children:null===o||void 0===o?void 0:o.map(((e,r)=>(0,j.jsx)(ge,{$delay:.08*r+"s",children:e},r)))}),(0,j.jsx)("div",{children:null===n||void 0===n?void 0:n.map(((e,r)=>(0,j.jsx)(ge,{$delay:.09*r+"s",children:e},r)))})]})]}),(0,j.jsx)(se,{src:"https://api.thetajikheritage.com"+(null===i||void 0===i||null===(r=i.img)||void 0===r?void 0:r.main)}),(0,j.jsxs)(he,{children:[(0,j.jsx)(me,{$color:!0,children:l[0]}),(0,j.jsx)(me,{$color:!1,children:l[1]})]})]})};var fe=i(9657),je=i(2008),ke=i(2835),Ae=i(3768),$e=i(9355),ze=i(7806),Se=(i(6601),i(1975),i(5452)),Ie=i(1485),Ce=i(6584),Me=i(1556);const Xe=(0,m.Ay)(Ie.A)`
    height: 100%;
    width: 100%;

    & .MuiPaper-root {
        background-color: var(--primary-black-color);
    }
`,Te=(0,m.Ay)(Me.aW)`
    font-size: var(--header-normal);
    font-family: var(--fancy-font);
    max-height: var(--header-height);
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Be=m.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (max-width: 480px) {
        margin-right: -0.35rem;
    }
`,_e=m.Ay.div`
    padding-top: var(--header-height);
    max-height: 100svh;
    overflow-y: scroll;
    overflow-x: hidden;
`,De=(0,m.Ay)(Ce.A)`
    margin-bottom: var(--text-segment-gap);
    width: 100%;

    &:last-child {
        margin-bottom: 0rem;
    }
`;$e.EA.workerSrc=new URL(i(749),i.b).toString();const Ee=e=>{let{pdfUrl:r}=e;const[i,a]=(0,t.useState)(null),d=(0,t.useRef)(null),[o,n]=(0,t.useState)(350);(0,t.useEffect)((()=>{const e=()=>{if(d.current){const e=d.current.offsetWidth-8;n(e)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);return(0,j.jsx)(_e,{ref:d,children:(0,j.jsx)(ze.A,{file:r,onLoadSuccess:e=>{let{numPages:r}=e;a(r)},error:(0,j.jsx)(Se.default,{}),noData:(0,j.jsx)(Se.default,{}),children:Array.from(new Array(i),((e,r)=>(0,j.jsx)(De,{pageNumber:r+1,width:o,renderTextLayer:!1},`page_${r+1}`)))})})},Fe=e=>{var r,i;let{book:a,setBookIndex:d}=e;const[o,n]=(0,t.useState)("");(0,t.useEffect)((()=>{(async()=>{try{if(!a.source)return;const e=await(0,l.c1)(a.source);n(e)}catch(e){console.error("Error fetching PDF file:",e)}})()}),[null===a||void 0===a?void 0:a.source]);const s=(0,t.useCallback)((()=>{d(-1),n("")}),[d]);return(0,j.jsxs)(Xe,{open:(null!==(r=null===(i=a.source)||void 0===i?void 0:i.length)&&void 0!==r?r:0)>0,fullScreen:!0,TransitionComponent:je.A,TransitionProps:{timeout:200},children:[(0,j.jsx)(Me.B3,{children:(0,j.jsxs)(Me.h_,{children:[(0,j.jsx)(ke.A,{handleLogoClick:s,navTo:"#"}),(0,j.jsx)(Te,{$index:0,children:null===a||void 0===a?void 0:a.title}),(0,j.jsx)(Be,{children:(0,j.jsx)(Ae.A,{handleClose:()=>{d(-1)}})})]})}),(0,j.jsx)(Ee,{pdfUrl:o})]})};var Le=i(2754),He=i(5234),We=i(7829),Re=i(1697);const Ye=e=>{let{text:r,handleClick:i,width:t}=e;return(0,j.jsx)(Re.O,{$width:t,onClick:i,children:r})},qe=m.Ay.div`
    height: 100%;
    width: 100%;
    font-size: var(--body-text);

    @media (max-width: 480px) {
        line-height: var(--body-text-line-height);
    }
`,Ne=m.Ay.div`
    color: ${e=>{let{$textColor:r}=e;return"light"===r?"var(--regular-white-color)":"var(--regular-black-color)"}};
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: var(--header-large);
    line-height: var(--header-large-line-height);
    font-family: var(--fancy-font);
    padding: var(--text-segment-gap) var(--page-padding);
    margin-right: var(--page-padding);

    @media (max-width: 480px) {
        margin-right: calc(2 * var(--page-padding));
        text-align: center;
        font-size: var(--header-big);
        line-height: var(--header-big-line-height);
    }
`,Pe=m.Ay.div`
    padding: 0rem calc(var(--page-padding) / 2)
        calc(2.5 * var(--text-segment-gap)) calc(var(--page-padding) / 2);

    @media (max-width: 480px) {
        padding: 0rem var(--page-padding) calc(2.5 * var(--text-segment-gap))
            var(--page-padding);
    }
`,Ze=m.Ay.div`
    width: 100%;
    height: 100%;
    color: var(--primary-black-color);
    text-align: center;
`,Oe=m.Ay.div`
    display: flex;
    margin: var(--text-segment-gap) 0rem 0rem 0rem;
    align-items: center;
    justify-content: center;
    gap: var(--text-segment-gap);
`,Ue=m.Ay.input`
    background: transparent;
    border: 1px solid var(--primary-black-color);
    outline: none;
    width: 100%;
    font-size: var(--body-text);
    border-radius: var(--input-radius);
    font-family: var(--regular-font);
    padding: 0.5rem;
`,Ve=m.Ay.div`
    font-size: var(--info-text);
    line-height: var(--body-text-line-height);
    color: ${e=>{let{$error:r,$success:i}=e;return r?"var(--primary-red-color)":i&&"#297309"}};
    height: 1.75rem;
`,Je=e=>{var r,i;let{book:a,setBookIndex:o}=e;const{lang:n}=(0,d.Xe)(),[s,m]=(0,t.useState)(""),[h,c]=(0,t.useState)(!1),[p,g]=(0,t.useState)(!1),v=(0,t.useCallback)((e=>{c(!1);const r=e.target.value.toLowerCase();m(r)}),[]),x=(0,t.useCallback)((()=>{o(-1),m(""),c(!1),g(!1)}),[o,m,c,g]),u=async()=>{if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(s)){const e={title:null===a||void 0===a?void 0:a.title,email:s};await(0,l.AN)(e).then((e=>200===e.status&&g(!0))).finally((()=>{setTimeout((()=>{x()}),1500)}))}else c(!0)};return(0,j.jsx)(He.A,{open:(null!==(r=null===(i=a.msg)||void 0===i?void 0:i.length)&&void 0!==r?r:0)>0,background:"light",width:"500px",height:"auto",handleClose:x,children:(0,j.jsx)(We.A,{children:(0,j.jsxs)(qe,{children:[(0,j.jsx)(Ne,{$textColor:"dark",children:Le.Dw.DD[n]}),(0,j.jsxs)(Pe,{children:[(0,j.jsx)(Ze,{children:null===a||void 0===a?void 0:a.msg}),(null===a||void 0===a?void 0:a.email)&&(0,j.jsxs)(Oe,{children:[(0,j.jsx)(Ue,{name:"email-for-books",id:"email-for-books",placeholder:Le.Dw.hF[n],value:s,onChange:e=>v(e),onKeyDown:e=>(e=>{"Enter"===e.key&&u()})(e)}),(0,j.jsx)(Ye,{width:"fit-content",text:Le.Dw.x6[n],handleClick:u})]}),(0,j.jsx)(Ve,{$error:h,$success:p,children:h?Le.Dw.z3[n]:p?Le.Dw.kX[n]:null})]})]})})})};var Qe=i(4127),Ke=i(8978);const Ge=m.Ay.div`
    width: 100%;
    height: var(--small-card-height);
    perspective: 40rem;
    overflow: hidden;
    position: absolute;
`,er=m.Ay.div`
    position: relative;
    width: 100%;
    height: var(--small-card-height);
    transform-style: preserve-3d;
`,rr=m.Ay.div`
    width: 100%;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px 0 var(--secondary-white-color),
        0 1px 2px -1px var(--secondary-white-color),
        0rem 0rem 2rem 0.5rem inset var(--regular-black-color);
    transform: translateZ(calc(var(--small-card-height) * -0.5))
        translateY(calc(var(--small-card-height) * 0.5)) rotateX(-90deg);
    background: var(--secondary-white-color);
    height: var(--small-card-height);
`,ir=m.Ay.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: calc(2 * var(--square-card-gap));
    position: relative;
    height: var(--small-card-height);
    padding-bottom: var(--text-segment-gap);
    box-sizing: border-box;
    cursor: pointer;
    position: relative;

    @media (max-width: 480px) {
        margin-top: var(--text-segment-gap);
    }
`,tr=m.Ay.div`
    box-shadow: -1px -4px 0.3rem -0.3rem var(--secondary-white-color),
        1px -2px 0.3rem -1px var(--secondary-white-color),
        0px 0.3rem 0.3rem var(--regular-black-color);
    border-radius: calc(var(--small-radius) / 1.5);
    height: calc(var(--small-card-height) / 1.25);
    width: calc(var(--small-card-width) / 1.025);
    position: relative;
    overflow: hidden;

    @media (max-width: 480px) {
        height: calc(var(--small-card-height) / 1.15);
        width: calc(var(--small-card-width) / 1.15);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
    }
`,ar=m.Ay.img`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: calc(var(--small-radius) / 1.5);
    object-fit: cover;
    background: var(--primary-black-color) url('/customAssets/loader.png')
        center no-repeat;
    background-size: 50% auto;
    filter: ${e=>{let{$grey:r}=e;return r&&"grayscale(0.5)"}};
    opacity: ${e=>{let{$grey:r}=e;return r&&.5}};
`,dr=m.Ay.div`
    height: 1rem;
    width: 100%;
    background: var(--secondary-grey-color);
    position: relative;
    z-index: 1;
    border-radius: var(--small-radius);
    box-shadow: 0rem 0rem 0.5rem 0.1rem inset black;
`,or=(0,m.Ay)((e=>{let{className:r,...i}=e;return(0,j.jsx)(Qe.A,{...i,classes:{popper:r}})}))((()=>({[`& .${Ke.A.tooltip}`]:{fontSize:"inherit",fontFamily:"inherit",fontWeight:"normal",padding:"0.5rem 1rem"},[`& .${Ke.A.tooltipArrow}`]:{backgroundColor:"var(--primary-shadow-color)"},[`& .${Ke.A.arrow}`]:{color:"var(--primary-shadow-color)"},"@media (max-width: 1024px)":{[`& .${Ke.A.tooltip}`]:{display:"none"}}}))),nr=e=>{let{shelfNum:r,work:i,poet:a}=e;const[d,o]=(0,t.useState)(-1);return(0,j.jsxs)("div",{children:[(0,j.jsx)(Ge,{children:(0,j.jsx)(er,{children:(0,j.jsx)(rr,{})})}),(0,j.jsx)(ir,{children:null===i||void 0===i?void 0:i.map(((e,i)=>(0,j.jsx)(or,{title:null===e||void 0===e?void 0:e.title,placement:"top",arrow:!0,children:(0,j.jsx)(tr,{"data-id":r+i,onClick:e=>function(e){const r=e.currentTarget.getAttribute("data-id");if(null===r||isNaN(parseInt(r)))return;const i=parseInt(r);o(i)}(e),children:(0,j.jsx)(ar,{$grey:!e.source,src:"https://api.thetajikheritage.com"+(null===e||void 0===e?void 0:e.cover)})})},i)))}),(0,j.jsx)(dr,{}),d>=0&&(0,j.jsxs)(t.Fragment,{children:[(0,j.jsx)(Je,{book:a[d],setBookIndex:o}),(0,j.jsx)(Fe,{book:a[d],setBookIndex:o})]})]})},lr=m.Ay.div`
    background: var(--primary-black-color);
    color: var(--regular-white-color);
    position: relative;
    background-image: url(${"/customAssets/noise.webp"});
    padding: calc(3rem + 2 * var(--text-segment-gap)) 0rem
        calc(3rem + 6 * var(--text-segment-gap)) 0rem;

    &:before {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        background-image: url(${"/customAssets/noise.webp"});
        -webkit-clip-path: polygon(-10px 0px, 100% 0%, 100% 0%, 0% 100%);
        clip-path: polygon(-10px 0px, 100% 0%, 100% 0%, 0% 100%);
        position: absolute;
        top: -0.01rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        padding: 0rem 0rem calc(4.2rem + var(--text-segment-gap)) 0rem;
        margin-top: calc((-2.3) * var(--text-segment-gap));

        &:before {
            display: none;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding-top: 1rem;
        margin-top: -1rem;

        &:before {
            display: none;
        }
    }
`,sr=e=>{let{works:r}=e;const i=(0,fe.Ub)({query:"(max-width: 480px)"}),t=r.length;let a=0;return a=i?Math.ceil(t/2):Math.ceil(t/4),(0,j.jsx)(lr,{id:"Works",children:function(e){let t=[];if(i)for(let i=0;i<e;i++)t.push((0,j.jsx)(nr,{shelfNum:2*i,poet:r,work:r.slice(2*i,2*(i+1))},i));else for(let i=0;i<e;i++)t.push((0,j.jsx)(nr,{shelfNum:4*i,poet:r,work:r.slice(4*i,4*(i+1))},i));return t}(a)})};var mr=i(9389),hr=i(7392),cr=i(3438),pr=i(862);const gr=m.Ay.div`
    display: flex;
    position: absolute;
    z-index: 11;
    font-style: italic;
    margin: 0.25rem;
    text-align: left;
    color: var(--primary-white-color);
    bottom: 0rem;
    background-color: #262626a6;
    width: calc(100% - 0.5rem);
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    height: auto;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.25rem;
        line-height: 1.4rem;
    }
`,vr=(0,m.Ay)(hr.A)`
    width: 1.5rem;
    height: 1.75rem;
    top: 0rem;
    right: 0rem;
    z-index: 10;

    &.MuiIconButton-root {
        position: absolute;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: 0.25rem;
        right: 0.25rem;
    }
`,xr=(0,m.Ay)(cr.A)`
    color: var(--primary-gold-color);

    &.MuiSvgIcon-root {
        width: 1.5rem;
        height: 1.5rem;
    }

    @media (max-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 3rem;
            height: 2.5rem;
        }
    }
`,ur=(0,m.Ay)(hr.A)`
    width: 1.5rem;
    height: 1.75rem;
    bottom: 0rem;
    right: 0rem;
    z-index: 10;

    &.MuiIconButton-root {
        position: absolute;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        bottom: 0.45rem;
        right: 0.65rem;
    }
`,wr=(0,m.Ay)(pr.A)`
    color: var(--primary-gold-color);
    transform: rotateZ(90deg);

    &.MuiSvgIcon-root {
        width: 1.25rem;
        height: 1.25rem;
    }

    @media (max-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 3rem;
            height: 2.5rem;
        }
    }
`,yr=m.Ay.div`
    width: calc(100% - 1rem);
`,br=e=>{let{text:r}=e;const{lang:i}=(0,d.Xe)(),[a,o]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{o(!0)}),[i]),a?(0,j.jsxs)(gr,{children:[(0,j.jsx)(yr,{dangerouslySetInnerHTML:{__html:r}}),(0,j.jsx)(vr,{onClick:()=>o(!1),children:(0,j.jsx)(xr,{})})]}):(0,j.jsx)(ur,{onClick:()=>o(!0),children:(0,j.jsx)(wr,{})})},fr=m.Ay.div`
    background: var(--primary-black-color);
    position: relative;
    background-image: url(${"/customAssets/noise.webp"});
    padding: calc(3rem + (3.75 * var(--text-segment-gap))) 0rem;

    &:before {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        background-image: url(${"/customAssets/noise.webp"});
        -webkit-clip-path: polygon(-10px 0px, 100% 0%, 100% 0%, 0% 100%);
        clip-path: polygon(-10px 0px, 100% 0%, 100% 0%, 0% 100%);
        position: absolute;
        top: -0.03rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        padding: calc(2rem + (2.75 * var(--text-segment-gap))) 0rem;

        &:before {
            padding: 2rem;
            top: 0rem;
        }
    }
`,jr=m.Ay.div`
    padding: calc(2 * var(--text-segment-gap)) var(--page-padding);
    height: 75svh;

    @media (max-width: 480px) {
        height: 80svh;
        padding: var(--text-segment-gap) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 34rem;
        padding: var(--text-segment-gap) 2rem var(--text-segment-gap) 2rem;
    }
`,kr=m.Ay.div`
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    color: var(--primary-white-color);
`,Ar=m.Ay.div`
    z-index: 1;
    position: relative;
    width: 0rem;
    height: 0rem;
    border-radius: var(--big-radius);
    background: var(--primary-black-color);
    border: 0.45rem solid var(--primary-gold-color);

    ${e=>{let{$size:r}=e;return r&&"\n        padding: 0.25rem 0.5rem;\n        width: fit-content;\n        height: fit-content;\n        border: 1px solid var(--primary-gold-color);\n        box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);\n    "}}

    @media (max-width: 480px) {
        border: var(--input-radius) solid var(--primary-gold-color);

        ${e=>{let{$size:r}=e;return r&&"\n        padding: 0.25rem 0.5rem;\n        width: fit-content;\n        height: fit-content;\n        border: 1px solid var(--primary-gold-color);\n    "}}
    }
`,$r=m.Ay.div`
    display: ${e=>{let{$show:r}=e;return r&&"none"}};
    margin: 0.25rem 0.75rem;
    font-size: var(--header-normal);

    @media (max-width: 480px) {
        margin: 0rem;
        font-size: var(--body-text);
    }
`,zr=m.Ay.div`
    background: var(--primary-gold-color);
    height: 2px;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`,Sr=m.Ay.div`
    display: flex;
    overflow: hidden;
    position: relative;
    height: 29rem;
    padding-top: calc(2 * var(--text-segment-gap));

    @media (max-width: 480px) {
        flex-direction: column;
        margin-top: var(--text-segment-gap);
        height: calc(100% - var(--header-height));
    }
`,Ir=m.Ay.div`
    position: absolute;
    display: flex;
    gap: 50px;
    transition: all 0.5s;
    transform: translateX(${e=>{let{$translate:r}=e;return`${r}px`}});

    @media (max-width: 480px) {
        position: relative;
        gap: calc(2 * var(--page-padding));
    }
`,Cr=m.Ay.div`
    height: 26rem;
    min-width: 810px;
    max-width: 810px;
    background: var(--primary-black-color);
    border-radius: var(--big-radius);
    display: flex;
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);

    @media (max-width: 480px) {
        border-radius: var(--big-radius) var(--big-radius) 0rem 0rem;
        height: calc(80svh - 2.5 * var(--header-height));
        min-width: calc(100vw - 3rem);
        max-width: calc(100vw - 3rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        min-width: calc(100vw - 2rem - 100px);
        max-width: calc(100vw - 2rem - 100px);
    }
`,Mr=m.Ay.div`
    height: 100%;
    position: relative;
    border-radius: 0rem var(--big-radius) var(--big-radius) 0rem;
    background: var(--primary-white-color);
    padding-top: var(--text-segment-gap);

    @media (max-width: 480px) {
        border-radius: var(--big-radius) var(--big-radius) 0rem 0rem;
        width: 100%;
    }
`,Xr=m.Ay.div`
    font-size: var(--body-text);
    line-height: var(--body-text-line-height);
    height: 22rem;
    text-align: justify;
    overflow-y: scroll;
    padding: 0rem calc(var(--page-padding) - 1rem - var(--input-radius))
        var(--text-segment-gap) calc(var(--page-padding) - 1rem);
    margin: calc(var(--input-radius) / 2) calc(var(--input-radius) / 2)
        calc(var(--input-radius) / 2) 0rem;

    &::-webkit-scrollbar {
        width: var(--input-radius);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: var(--input-radius);
    }

    @media (max-width: 480px) {
        padding: 0rem calc(var(--page-padding) - var(--input-radius))
            var(--text-segment-gap) var(--page-padding);
        min-height: 100%;
        height: 100%;
        max-height: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        height: 23rem;
        margin: 0.5rem 0.25rem;
        padding: 1rem 1.75rem 2rem 1.5rem;
    }
`,Tr=m.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: var(--primary-white-color);
    border-radius: 0rem 0rem var(--big-radius) var(--big-radius);
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    z-index: 10;
    height: 3rem;

    @media (max-width: 480px) {
        display: none;
        visibility: hidden;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        bottom: 0rem;
    }
`,Br=m.Ay.div`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        height: var(--header-height);
        justify-content: center;
        align-items: center;
        background: var(--primary-white-color);
        border-radius: 0rem 0rem var(--big-radius) var(--big-radius);
        position: absolute;
        bottom: 0rem;
        right: 0rem;
        z-index: 1000;
        width: calc(100% - var(--page-padding));
        margin: 0rem calc(var(--page-padding) / 2);
    }
`,_r=m.Ay.div`
    min-width: 5rem;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--header-medium);
    font-family: var(--fancy-font);

    @media (max-width: 480px) {
        font-size: var(--header-normal);
    }
`,Dr=(0,m.Ay)(hr.A)`
    transform: ${e=>{let{$left:r}=e;return r&&"rotate(180deg)"}};

    svg {
        fill: var(--primary-gold-color);
        font-size: var(--header-big);
    }

    &:disabled {
        svg {
            fill: lightgray;
        }
    }

    @media (max-width: 480px) {
        height: 4rem;
        width: 4rem;

        svg {
            font-size: 2rem;
        }
    }
`,Er=m.Ay.div`
    transition: 100ms ease-in-out;

    > * > * {
        border-bottom-left-radius: calc(var(--big-radius) - 0.25rem);
    }

    > * {
        border-top-left-radius: var(--big-radius);
        border-bottom-left-radius: var(--big-radius);
    }

    @media (max-width: 480px) {
        display: none;
    }
`,Fr=m.Ay.div`
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    height: 26rem;
    min-width: ${e=>{let{$width:r}=e;return r&&`${r}px`}};
    max-width: ${e=>{let{$width:r}=e;return r&&`${r}px`}};
    background: ${e=>{let{$src:r}=e;return r&&`url(${r})`}};
    transform: translateX(${e=>{let{translate:r}=e;return`${r}px`}});
    background-size: ${e=>{let{$src:r}=e;return r&&"contain"}};

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        background-size: ${e=>{let{$src:r}=e;return r&&"cover"}};
    }
`,Lr=e=>{var r,i;let{points:a}=e;const{lang:o}=(0,d.Xe)(),n=(0,t.useRef)(null),l=(0,t.useRef)(null),[m,h]=(0,t.useState)(0),[c,p]=(0,t.useState)(0),[g,v]=(0,t.useState)(0);let x=(0,fe.Ub)({query:"(max-width: 480px)"})?32:50;(0,t.useEffect)((()=>{var e,r;const i=null===n||void 0===n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect().width,t=null===l||void 0===l||null===(r=l.current)||void 0===r?void 0:r.getBoundingClientRect().width;if(!t||!i)return;p(-(t-(i/2-(t/2+x)))),v(t),h(0)}),[o]);const u=(0,t.useCallback)((()=>{var e;m<(null===a||void 0===a||null===(e=a.years)||void 0===e?void 0:e.length)-1&&(h((e=>e+1)),p((e=>e-g-x)))}),[m,a,g,x]),w=(0,t.useCallback)((()=>{m>0&&(h((e=>e-1)),p((e=>e+g+x)))}),[m,g,x]);return(0,j.jsx)(fr,{id:"Career",children:(0,j.jsxs)(jr,{children:[(0,j.jsxs)(kr,{children:[(0,j.jsx)(zr,{}),null===a||void 0===a||null===(r=a.years)||void 0===r?void 0:r.map(((e,r)=>(0,j.jsx)(Ar,{$size:r===m,children:(0,j.jsx)($r,{$show:r!==m,children:e})},`${e}.year`)))]}),(0,j.jsxs)(Sr,{ref:n,children:[(0,j.jsx)(Ir,{$translate:c,children:a.desc[o].map(((e,r)=>{var i,t,d,o;return(0,j.jsxs)(Cr,{ref:l,children:[e.slides?(0,j.jsx)(Er,{children:(0,j.jsx)(Fr,{$src:"https://api.thetajikheritage.com"+(null===(i=e.slides[0])||void 0===i?void 0:i.img),$width:.36*g,children:(null===(t=e.slides[0])||void 0===t?void 0:t.info)&&(0,j.jsx)(br,{text:null===(d=e.slides[0])||void 0===d?void 0:d.info})})}):null,(0,j.jsxs)(Mr,{children:[(0,j.jsx)(s.n,{data:e.body,TextWrapper:Xr}),(0,j.jsxs)(Tr,{children:[(0,j.jsx)(Dr,{$left:!0,onClick:w,disabled:1===r,children:(0,j.jsx)(mr.A,{})}),(0,j.jsx)(_r,{children:`${m+1}/${null===a||void 0===a?void 0:a.years.length}`}),(0,j.jsx)(Dr,{$left:!1,onClick:u,disabled:r===(null===a||void 0===a||null===(o=a.years)||void 0===o?void 0:o.length),children:(0,j.jsx)(mr.A,{})})]})]})]},"a"+r)}))}),(0,j.jsxs)(Br,{children:[(0,j.jsx)(Dr,{$left:!0,onClick:w,disabled:0===m,children:(0,j.jsx)(mr.A,{})}),(0,j.jsx)(_r,{children:`${m+1}/${null===a||void 0===a?void 0:a.years.length}`}),(0,j.jsx)(Dr,{$left:!1,onClick:u,disabled:m===(null===a||void 0===a||null===(i=a.years)||void 0===i?void 0:i.length)-1,children:(0,j.jsx)(mr.A,{})})]})]})]})})},Hr=m.Ay.div`
    display: flex;
    overflow-y: scroll;
    min-height: var(--small-card-height);
    padding: var(--text-segment-gap)
        calc(var(--page-padding) / 2 - var(--input-radius))
        var(--text-segment-gap) calc(var(--page-padding) / 2);
    margin: 0rem calc(var(--input-radius) / 2) var(--text-segment-gap) 0rem;

    &::-webkit-scrollbar {
        width: var(--input-radius);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: var(--input-radius);
    }

    @media (max-width: 480px) {
        display: block;
        max-height: 65vh;
        padding: var(--text-segment-gap)
            calc(var(--page-padding) - var(--input-radius))
            var(--text-segment-gap) var(--page-padding);
        margin: 0rem calc(var(--input-radius) / 2) var(--text-segment-gap) 0rem;
    }
`,Wr=m.Ay.div`
    width: 100%;
    height: 100%;
    color: var(--secondary-white-color);
    overflow-wrap: break-word;

    @media (max-width: 480px) {
        display: inline;
        height: 20rem;
    }
`,Rr=m.Ay.div`
    height: 100%;
    width: ${e=>{let{$first:r}=e;return r?"25%":"75%"}};

    @media (max-width: 480px) {
        width: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: ${e=>{let{$first:r}=e;return r?"24.5%":"76.5%"}};
    }
`,Yr=m.Ay.img`
    border-radius: var(--small-radius);
    width: calc(var(--small-card-width) + 2 * var(--text-segment-gap));
    background: var(--primary-black-color);
    padding: var(--text-segment-gap);
    background-image: url(${"/customAssets/noise.webp"});
    box-shadow: var(--primary-box-shadow) var(--primary-gold-color);

    @media (max-width: 480px) {
        display: inline;
        float: left;
        height: calc(
            (var(--small-card-height) / 1.05) + var(--text-segment-gap)
        );
        width: calc((var(--small-card-width) / 1.05) + var(--text-segment-gap));
        margin: 0rem var(--text-segment-gap) var(--text-segment-gap) 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-left: 1rem;
    }
`,qr=e=>{let{awardInfo:r,showAwardInfo:i,setShowAwardInfo:a}=e;const d=(0,t.useCallback)((()=>{a(!1)}),[a]);return r?(0,j.jsx)(He.A,{width:"850px",open:i,handleClose:d,background:"dark",children:(0,j.jsx)(We.A,{children:(0,j.jsxs)(qe,{children:[(0,j.jsx)(Ne,{$textColor:"light",children:null===r||void 0===r?void 0:r.title}),(0,j.jsxs)(Hr,{children:[(0,j.jsx)(Rr,{$first:!0,children:(0,j.jsx)(Yr,{src:"https://api.thetajikheritage.com"+(null===r||void 0===r?void 0:r.img)})}),(0,j.jsx)(Rr,{$first:!1,children:(0,j.jsx)(Wr,{dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.desc}})})]})]})})}):null};var Nr=i(8564);const Pr=e=>{let{awards:r}=e;const[i,a]=(0,t.useState)(),[d,o]=(0,t.useState)(!1);return(0,j.jsxs)(Nr.J3,{id:"Awards",children:[(0,j.jsx)(Nr.TP,{children:r.map(((e,r)=>(0,j.jsx)(Nr.QB,{$delay:.05*r+"s",children:(0,j.jsxs)(Nr.wO,{children:[(0,j.jsx)(Nr.Y7,{$back:!1,children:(0,j.jsx)(Nr._V,{src:"https://api.thetajikheritage.com"+e.img})}),(0,j.jsxs)(Nr.Y7,{$back:!0,children:[(0,j.jsx)(Nr.hE,{children:e.title}),(0,j.jsx)(Nr.Mn,{children:e.year}),(0,j.jsx)(Nr.Bj,{onClick:r=>function(e,r){o(!0),a(r)}(0,e),children:(0,j.jsx)(Nr.bu,{})})]})]})},r)))}),(0,j.jsx)(qr,{awardInfo:i,showAwardInfo:d,setShowAwardInfo:o})]})};var Zr=i(4593);const Or=m.i7`
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(0.5rem);
    }
    60% {
        transform: translateX(0.7rem);
    }
`,Ur=m.Ay.div`
    height: 100%;
    width: 100%;
    background-color: var(--primary-black-color);

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        overflow: hidden;
    }
`,Vr=m.Ay.div`
    width: 65%;
    height: 100%;
    background: var(--primary-white-color);
    position: relative;
    padding: calc(var(--page-padding) / 2);

    ${e=>{let{$width:r}=e;return r&&"\n        background: var(--primary-black-color);\n        position: relative;\n    "}}

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 2;
        padding: var(--page-padding);
        border-radius: var(--big-radius);
        overflow-x: hidden;
        position: absolute;
        display: ${e=>{let{$width:r}=e;return r&&"none"}};
        overflow: hidden;
        scrollbar-width: none;
        overflow-y: ${e=>{let{$expand:r}=e;return r?"scroll":"hidden"}};
        top: ${e=>{let{$expand:r}=e;return r?"0rem":"40%"}};
        transition: all 0.5s;
        box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);

        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 50%;
        top: 55%;
        width: 100%;
        z-index: 2;
        position: absolute;
    }
`,Jr=m.Ay.div`
    display: flex;
    width: 100%;
    height: 4.5rem;

    @media (max-width: 480px) {
        height: 3rem;
    }
`,Qr=m.Ay.img`
    height: 100%;
`,Kr=m.Ay.div`
    width: 100%;
    overflow-wrap: break-word;
    font-style: bold;
    font-size: calc(var(--header-huge) / 1.15);
    line-height: calc(var(--header-huge) / 1.15);
    text-transform: uppercase;
    font-family: var(--fancy-font);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-shadow-color);

    @media (max-width: 480px) {
        font-size: var(--header-big);
        line-height: var(--header-big-line-height);
    }
`,Gr=m.Ay.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: var(--text-segment-gap);
    margin: var(--text-segment-gap) 0rem;
    color: var(--primary-shadow-color);

    @media (max-width: 480px) {
        gap: 0rem;
        justify-content: space-between;
        padding: var(--text-segment-gap) 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 3rem;
    }
`,ei=m.Ay.div`
    width: 100%;
    text-align: justify;

    @media (max-width: 480px) {
        line-height: var(--body-text-line-height);
        position: relative;

        ${e=>{let{$expand:r}=e;return!r&&'\n            &:after {\n                content: "";\n                height: 20rem;\n                width: 100%;\n                left: 0;\n                position: absolute;\n                bottom: 0;\n                background: linear-gradient(to bottom, rgba(252, 246, 233, 0), rgba(252, 246, 233, 1));\n            }\n        '}}
    }
`,ri=(0,m.Ay)(hr.A)`
    width: 5.5rem;
    height: 5.5rem;

    &.MuiIconButton-root {
        background: #70654ad9;
        box-shadow: var(--primary-box-shadow) var(--primary-black-color);

        &:hover {
            background: var(--primary-shadow-color);
        }
    }

    @media (max-width: 480px) {
        width: 5.5rem;
        height: 5.5rem;

        &.MuiIconButton-root {
            box-shadow: var(--primary-box-shadow) var(--primary-black-color);
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 12rem;
        height: 12rem;
    }
`,ii=(0,m.Ay)(hr.A)`
    &.MuiIconButton-root {
        display: none;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            display: block;
            width: 2.5rem;
            height: 2.5rem;
            position: absolute;
            top: -1rem;
            left: calc(50% - var(--page-padding));
            transform: rotate(-90deg) translateX(-50%);
        }
    }
`,ti=m.Ay.div`
    width: 100%;
    padding-right: 27%;
    margin-top: var(--text-segment-gap);

    @media (max-width: 1024px) {
        margin: 0rem 0rem var(--text-segment-gap) 0rem;
        padding-right: 0%;
    }
`,ai=(0,m.Ay)(Zr.A)`
    color: var(--primary-white-color);

    &.MuiSvgIcon-root {
        width: 3rem;
        height: 3rem;
    }

    @media (max-width: 480px) {
        &.MuiSvgIcon-root {
            width: 4rem;
            height: 4rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 8rem;
            height: 8rem;
        }
    }
`,di=m.Ay.img`
    height: 85%;
    width: auto;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(0%, -50%);
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);

    @media (max-width: 1024px) {
        top: 0rem;
        left: auto;
        transform: none;
        width: 100%;
        height: auto;
        border-radius: var(--big-radius);
    }
`,oi=m.Ay.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: var(--text-segment-gap);

    @media (max-width: 480px) {
        padding: 0rem;
        width: fit-content;
        flex-shrink: 0;
    }
`,ni=m.Ay.div`
    width: 100%;
    text-transform: uppercase;
    font-size: var(--header-medium);
    font-family: var(--fancy-font);
    padding: calc(2 * var(--text-segment-gap)) 0rem;

    @media (max-width: 1024px) {
        padding: calc(2 * var(--text-segment-gap)) 0rem var(--text-segment-gap)
            0rem;
        line-height: var(--header-medium-line-height);
    }
`,li=m.Ay.div`
    text-transform: none;
    font-size: var(--body-text);
    line-height: var(--header-normal-line-height);
    font-family: var(--regular-font);
`,si=m.Ay.div`
    display: flex;
    align-items: center;
    justify-content: start;
    position: absolute;
    right: 5rem;
    top: 15%;
    width: 17.5rem;
    margin-right: var(--text-segment-gap);

    @media (max-width: 1024px) {
        left: 50%;
        right: auto;
        justify-content: center;
        transform: translateX(-50%);
    }
`,mi=m.Ay.div`
    width: 5rem;
    background: var(--primary-gold-color);
    height: 1px;
    z-index: 10;
    margin-right: var(--text-segment-gap);

    @media (max-width: 1024px) {
        display: none;
    }
`,hi=m.Ay.div`
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--primary-white-color);
    font-family: var(--fancy-font);

    @media (max-width: 1024px) {
        display: none;
    }
`,ci=m.Ay.iframe`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: var(--big-radius);
`,pi=(0,m.Ay)(mr.A)`
    transform: rotate(-90deg);
    animation: ${Or} 2s infinite;
`,gi=(0,m.Ay)(mr.A)`
    transform: rotate(-180deg);
`,vi=e=>{let{movieInfo:r,showMovieInfo:i,setShowMovieInfo:a}=e;const[o,n]=(0,t.useState)(!1),l=(0,fe.Ub)({query:"(max-width: 1024px)"}),s=(0,t.useRef)(null),{lang:m}=(0,d.Xe)(),[h,c]=(0,t.useState)(!1),p=(0,t.useCallback)((()=>{a(!1),c(!1),n(!1)}),[a]),g=(0,t.useCallback)((()=>{c((e=>!e))}),[]);return r?(0,j.jsx)(He.A,{width:"1350px",open:i,background:"light",height:l?"100%":"80%",handleClose:p,children:(0,j.jsx)(We.A,{children:(0,j.jsx)(Ur,{children:o?(0,j.jsx)(ci,{src:`https://www.youtube-nocookie.com/embed/${null===r||void 0===r?void 0:r.link}?autoplay=1&rel=0&modestbranding=1`,allow:"autoplay; encrypted-media",allowFullScreen:!0,ref:s}):(0,j.jsxs)(t.Fragment,{children:[(0,j.jsxs)(Vr,{$expand:h,$width:!1,children:[(0,j.jsx)(ii,{onClick:g,children:h?(0,j.jsx)(gi,{}):(0,j.jsx)(pi,{})}),(0,j.jsx)(Jr,{children:(0,j.jsx)(Qr,{src:"https://api.thetajikheritage.com"+(null===r||void 0===r?void 0:r.studio)})}),(0,j.jsxs)(ti,{children:[(0,j.jsx)(Kr,{children:null===r||void 0===r?void 0:r.title}),(0,j.jsx)(Gr,{children:Object.keys(r.releaseInfo).map((e=>(0,j.jsx)(oi,{children:null===r||void 0===r?void 0:r.releaseInfo[e]},r.releaseInfo.title)))}),(0,j.jsx)(ei,{$expand:h,dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.desc}}),(0,j.jsxs)(ni,{children:["us"===m?"Director":"tj"===m?"\u041e\u0444\u0430\u0440\u0430\u043d\u0434\u0430":"\u0420\u0435\u0436\u0438\u0441\u0441\u0451\u0440",(0,j.jsx)(li,{children:null===r||void 0===r?void 0:r.director})]})]})]}),(0,j.jsx)(di,{src:"https://api.thetajikheritage.com"+(null===r||void 0===r?void 0:r.img)}),(0,j.jsxs)(si,{children:[(0,j.jsx)(ri,{onClick:()=>n(!0),children:(0,j.jsx)(ai,{})}),(0,j.jsx)(mi,{}),(0,j.jsx)(hi,{children:"ru"===m?"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c":"tj"===m?"\u0422\u0430\u043c\u043e\u0448\u043e":"Watch now"})]})]})})})}):null};var xi=i(6772);const ui=m.i7`
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(0.5rem);
    }
    60% {
        transform: translateX(0.7rem);
    }
`,wi=m.i7`
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
`,yi=m.Ay.div`
    background: var(--primary-white-color);
    color: var(--regular-white-color);
    position: relative;
    padding: calc(var(--page-padding) / 1.5) 0rem;
    background-image: url(${"/customAssets/noise.webp"});

    &:before {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        background-image: url(${"/customAssets/noise.webp"});
        -webkit-clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: -5.98rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        padding: var(--page-padding) 0rem;

        &:before {
            padding: 2rem;
            top: -3.98rem;
        }
    }
`,bi=m.Ay.div`
    padding: 0rem var(--page-padding);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: calc(2 * var(--square-card-gap));

    @media (max-width: 480px) {
        margin: 0rem var(--page-padding);
        padding: 0rem;
        justify-content: start;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        gap: 2rem;
        padding: 0rem 3.2rem 0rem 2rem;
    }
`,fi=m.Ay.div`
    height: 21.15rem;
    width: 14.95rem;
    cursor: pointer;
    position: relative;
    border-radius: var(--small-radius);
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
    opacity: 0;
    animation: ${wi} 2s ease-in-out forwards;
    animation-delay: ${e=>{let{$delay:r}=e;return r||"0s"}};

    @media (max-width: 480px) {
        width: var(--small-card-width);
        height: var(--small-card-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 23rem;
        width: 16.25rem;
    }
`,ji=m.Ay.img`
    width: 100%;
    height: 100%;
    border-radius: var(--small-radius);
    background: url('/customAssets/loader.png') center no-repeat;
    background-size: 50% auto;
`,ki=(0,m.Ay)(hr.A)`
    bottom: 1rem;
    right: -4rem;
    transform: translateX(-50%);
    box-shadow: var(--primary-box-shadow) var(--regular-black-color);

    &.MuiIconButton-root {
        width: 4rem;
        height: 4rem;
        position: absolute;
        background: var(--primary-black-color);

        &:hover {
            background: var(--primary-black-color);
        }
    }

    @media (max-width: 480px) {
        right: -3rem;

        &.MuiIconButton-root {
            width: 3rem;
            height: 3rem;
            position: absolute;
            background: var(--primary-black-color);
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4rem;
        height: 4rem;
        bottom: 1.5rem;
        right: -4rem;
    }
`,Ai=(0,m.Ay)(xi.A)`
    color: var(--secondary-white-color);
    animation: ${ui} 2s infinite;

    &.MuiSvgIcon-root {
        height: 3rem;
        width: 3rem;
    }

    @media (max-width: 480px) {
        &.MuiSvgIcon-root {
            height: 2rem;
            width: 2rem;
        }
    }
`,$i=e=>{let{movies:r}=e;const[i,a]=(0,t.useState)(!1),[d,o]=(0,t.useState)(),n=(0,t.useCallback)(((e,r)=>{a(!0),o(r)}),[]);return(0,j.jsxs)(yi,{id:"Films",children:[(0,j.jsx)(bi,{children:r.map(((e,r)=>(0,j.jsxs)(fi,{$delay:.1*r+"s",children:[(0,j.jsx)(ji,{src:"https://api.thetajikheritage.com"+e.img}),(0,j.jsx)(ki,{onClick:r=>n(r,e),children:(0,j.jsx)(Ai,{})})]},r)))}),(0,j.jsx)(vi,{movieInfo:d,showMovieInfo:i,setShowMovieInfo:a})]})};var zi=i(4952),Si=i(8044),Ii=i(8880),Ci=i(5260);const Mi=e=>{let{page:r}=e;const{id:i}=(0,a.g)(),{showToast:s}=(0,n.Y)(),{pathname:m}=(0,a.zy)(),{lang:h}=(0,d.Xe)(),[c,p]=(0,t.useState)(null),[g,v]=(0,t.useState)();(0,o.J)(r,"generic",g),(0,t.useEffect)((()=>{(async()=>{try{if(!i)return;const e=await(0,l.uu)(i,"language/poet");v(e)}catch(c){const r=c;404===r.status?p(404):500===r.status&&s("E_500","error","language/poet")}})()}),[m]);return(0,j.jsxs)(t.Fragment,{children:[404===c?(0,j.jsx)(Se.default,{}):null,(0,j.jsx)(Ci.A,{children:(0,j.jsx)(Si.A,{children:(0,j.jsx)(Ii.A,{children:g?(0,j.jsxs)(t.Fragment,{children:[(0,j.jsx)(be,{poet:g,scrollToView:e=>{e.preventDefault();const r=e.currentTarget.getAttribute("data-id"),i=document.querySelector(".content-container");if(i&&r){const e=document.querySelector(r);e&&i.scrollTo({top:e.offsetTop,behavior:"smooth"})}}}),(0,j.jsx)(de,{bioData:null===g||void 0===g?void 0:g.bio}),(0,j.jsx)(sr,{works:null===g||void 0===g?void 0:g.works[h]}),(0,j.jsx)($i,{movies:null===g||void 0===g?void 0:g.movies[h]}),(0,j.jsx)(Lr,{points:null===g||void 0===g?void 0:g.career}),(0,j.jsx)(Pr,{awards:null===g||void 0===g?void 0:g.awards[h]}),(0,j.jsx)(zi.A,{data:null===g||void 0===g?void 0:g.references[h]})]}):null})})})]})}},3768:(e,r,i)=>{i.d(r,{A:()=>s});i(5043);var t=i(1529),a=i(7392),d=i(3438);const o=(0,t.Ay)(a.A)`
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
`,n=(0,t.Ay)(d.A)`
    color: var(--primary-gold-color);

    &.MuiSvgIcon-root {
        height: 100%;
        width: 100%;
    }
`;var l=i(579);const s=e=>{let{handleClose:r}=e;return(0,l.jsx)(o,{onClick:r,children:(0,l.jsx)(n,{})})}},5234:(e,r,i)=>{i.d(r,{A:()=>m});i(5043);var t=i(2008),a=i(3768),d=i(1529),o=i(1485);const n=(0,d.Ay)(o.A)`
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
`,l=d.Ay.div`
    position: absolute;
    right: 0rem;
`;var s=i(579);const m=e=>{let{handleClose:r,open:i,children:d,width:o,background:m="",height:h="auto",hideBackdrop:c=!1}=e;return(0,s.jsxs)(n,{open:i,fullWidth:!0,$width:o,$height:h,$background:m,TransitionComponent:t.A,TransitionProps:{timeout:200},hideBackdrop:c,children:[(0,s.jsx)(l,{children:(0,s.jsx)(a.A,{handleClose:r})}),d]})}},7829:(e,r,i)=>{i.d(r,{A:()=>n});i(5043);var t=i(1529),a=i(1503);const d=(0,t.Ay)(a.A)`
    position: relative;
    font-size: var(--body-text);
    line-height: var(--body-text-height);

    &.MuiDialogContent-root {
        padding: 0rem;
        overflow: hidden;
    }
`;var o=i(579);const n=e=>{let{children:r}=e;return(0,o.jsx)(d,{children:r})}},8880:(e,r,i)=>{i.d(r,{A:()=>d});i(5043);var t=i(7542),a=i(579);const d=e=>{let{children:r}=e;return(0,a.jsx)(t.J,{children:r})}},8564:(e,r,i)=>{i.d(r,{Bj:()=>v,J3:()=>n,Mn:()=>g,QB:()=>s,TP:()=>l,Y7:()=>h,_V:()=>p,bu:()=>x,hE:()=>c,wO:()=>m});var t=i(1529),a=i(5456),d=i(7392);const o=t.i7`
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
`,n=t.Ay.div`
    background: var(--primary-white-color);
    background-image: url(${"/customAssets/noise.webp"});
    color: var(--regular-white-color);
    position: relative;
    padding: calc(var(--page-padding) / 2) 0rem;

    &:before {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        background-image: url(${"/customAssets/noise.webp"});
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
`,l=t.Ay.div`
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
`,s=t.Ay.div`
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
    animation: ${o} 2s ease-in-out forwards;
    animation-delay: ${e=>{let{$delay:r}=e;return r||"0s"}};

    @media (max-width: 480px) {
        width: var(--small-card-width);
        height: var(--small-card-height);
    }
`,m=t.Ay.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    ${s}:hover & {
        transform: rotateY(180deg);
    }
`,h=t.Ay.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: var(--small-radius);
    padding: var(--text-segment-gap);

    ${e=>{let{$back:r}=e;return r?t.AH`
                  transform: rotateY(180deg);
                  background: var(--primary-shadow-color);
                  padding: calc(1.25 * var(--input-radius));
              `:t.AH`
                  background: var(--primary-black-color);
                  padding: var(--text-segment-gap);
              `}}
`,c=t.Ay.div`
    text-align: center;
    font-size: var(--header-small);
`,p=t.Ay.img`
    width: 100%;
    height: 100%;
`,g=t.Ay.div`
    font-size: var(--header-large);
    padding-top: var(--input-radius);
    font-family: var(--fancy-font);

    @media (max-width: 480px) {
        line-height: var(--header-big-line-height);
    }
`,v=(0,t.Ay)(d.A)`
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
`,x=(0,t.Ay)(a.A)`
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
`}}]);
//# sourceMappingURL=99.add1977b.chunk.js.map