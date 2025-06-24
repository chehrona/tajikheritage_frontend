(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[566],{844:(t,e,i)=>{"use strict";i.d(e,{A:()=>c});i(5043);var a=i(1529),r=i(5475);const o=a.i7`
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
`,l=(0,a.Ay)(r.k2)`
    text-decoration: none;
    border-radius: var(--small-radius);
    animation: ${o} 1s ease-in-out forwards;
    transition: border-radius 250ms, box-shadow 400ms;
    height: ${t=>{let{$type:e}=t;return"long"===e?"35rem":"25rem"}};
    width: ${t=>{let{$type:e}=t;return"long"===e?"23rem":"25rem"}};

    ${t=>{let{$disabled:e}=t;return e?a.AH`
                  filter: brightness(0.5);
                  cursor: default;

                  &:hover {
                      border-radius: initial;
                      box-shadow: initial;
                  }

                  > * {
                      border-radius: var(--small-radius);
                  }
              `:a.AH`
                  pointer-events: all;
                  filter: brightness(1);
                  cursor: pointer;

                  &:hover {
                      border-radius: var(--big-radius);
                      box-shadow: var(--primary-box-shadow)
                          var(--primary-shadow-color);
                  }

                  > * {
                      border-radius: var(--small-radius);
                      transition: border-radius 250ms;

                      &:hover {
                          border-radius: var(--big-radius);
                      }
                  }
              `}}

    @media (max-width: 480px) {
        box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
        height: ${t=>{let{$type:e}=t;return"16rem"}};
        width: ${t=>{let{$type:e}=t;return"long"===e?"10.3rem":"16rem"}};

        &:hover {
            border-radius: var(--small-radius);
            transition: initial;

            > * {
                border-radius: var(--small-radius);

                &:hover {
                    border-radius: var(--small-radius);
                }
            }
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
        width: 25rem;
        ${t=>{let{$type:e}=t;return"long"===e?a.AH`
                      border-radius: var(--big-radius);
                      height: 35rem;

                      > * {
                          border-radius: var(--big-radius);
                      }
                  `:a.AH`
                      border-radius: var(--small-radius);
                      height: 25rem;

                      > * {
                          border-radius: var(--small-radius);
                      }
                  `}}
    }
`;var s=i(4946),n=i(579);const c=t=>{let{page:e,disabled:i=!1,children:a,type:r}=t;const{showToast:o}=(0,s.Y)();return(0,n.jsx)(l,{$type:r,$disabled:i,to:i?"#":e,onClick:()=>{i&&o("ARTICLE_UNAVAILABLE","info",e)},children:a})}},6331:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});i(5043);var a=i(9932),r=i(579);const o=t=>{let{children:e}=t;return(0,r.jsx)(a.x,{children:e})}},9932:(t,e,i)=>{"use strict";i.d(e,{W:()=>o,x:()=>l});var a=i(1529);const r=a.i7`
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
    animation: ${r} 1s ease-in-out forwards;
    overflow-x: hidden;
    min-height: 100svh;

    @media (max-width: 480px) {
        padding: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: var(--page-padding);
    }
`,l=a.Ay.div`
    box-sizing: border-box;
    padding: 2rem var(--page-padding) 4rem var(--page-padding);
    background: var(--regular-white-color);
    animation: ${r} 1s ease-in-out forwards;
    overflow-x: hidden;
    min-height: 100svh;

    @media (max-width: 480px) {
        padding: var(--page-padding) var(--page-padding)
            calc(4 * var(--page-padding)) var(--page-padding);
    }
`},2192:(t,e,i)=>{"use strict";i.d(e,{A:()=>x});var a=i(5043),r=i(6213);var o=i(215),l=i(4330),s=i(2754),n=i(1529),c=i(9662),d=i(579);const h=(0,c.A)((0,d.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var p=i(3438),y=i(7392);const m=n.Ay.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 7rem;

    @media (max-width: 480px) {
        height: 5.5rem;
    }
`,u=n.Ay.div`
    height: 3.5rem;
    width: 30rem;
    background: url('/customAssets/search.svg') center no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 480px) {
        width: 100%;
        height: 3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 35rem;
        height: 4rem;
    }
`,f=n.Ay.input`
    outline: none;
    border: none;
    width: 24.5rem;
    margin-left: 1.5rem;
    padding-left: 0.45rem;
    height: 3.4rem;
    font-size: var(--header-small);
    background-color: transparent;
    font-family: var(--regular-font);

    &::placeholder {
        color: var(--secondary-grey-color);
    }

    @media (max-width: 480px) {
        font-size: var(--body-text);
        height: 100%;
        margin: 0rem 1.25rem;
        padding-left: 2.15rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin: 0rem 2.25rem;
        font-size: 1.35rem;
        width: 26rem;
    }
`,g=(0,n.Ay)(h)`
    color: var(--secondary-grey-color);
    position: absolute;
    left: 1.75rem;

    &.MuiSvgIcon-root {
        width: 1.8rem;
        height: 1.8rem;
    }

    @media (max-width: 480px) {
        left: 1.5rem;

        &.MuiSvgIcon-root {
            width: 1.75rem;
            height: 1.75rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        left: 2rem;

        &.MuiSvgIcon-root {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`,w=(0,n.Ay)(p.A)`
    color: var(--secondary-grey-color);

    &.MuiSvgIcon-root {
        width: 1.8rem;
        height: 1.8rem;
    }

    @media (max-width: 480px) {
        &.MuiSvgIcon-root {
            width: 1.75rem;
            height: 1.75rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`,v=(0,n.Ay)(y.A)`
    width: 2.5rem;
    height: 2.5rem;

    &.MuiIconButton-root {
        position: absolute;
        right: 1.75rem;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            position: absolute;
            right: 1.05rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 3.5rem;
        height: 3.5rem;
    }
`,b=n.Ay.div`
    margin-top: 0.5rem;
    color: var(--primary-red-color);
    font-size: var(--body-text);

    @media (max-width: 480px) {
        margin-top: 0.25rem;
    }
`,x=t=>{let{setItems:e,externalValue:i="",page:n}=t;const{lang:c}=(0,o.Xe)(),[h,p]=(0,a.useState)(!1),[y,x]=(0,a.useState)(i),$=(0,a.useRef)(null);(0,a.useEffect)((()=>{if(y.length>=1){const t=setTimeout((()=>{(async(t,e)=>{try{return(await r.A.get(`https://api.thetajikheritage.com/${e}/search/`,{params:{q:encodeURIComponent(t)}})).data}catch(i){throw i}})(y,n).then((t=>{e(t)}))}),450);return()=>clearTimeout(t)}}),[y]);return(0,d.jsxs)(m,{children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(g,{}),(0,d.jsx)(f,{name:"search_bar",id:"search_bar",ref:$,placeholder:s.f1[c],value:y,onChange:t=>(async t=>{const e=t.currentTarget.value;p(!1),x(e)})(t)}),y.length?(0,d.jsx)(v,{onClick:()=>{x(""),p(!1),e([]),$.current&&$.current.focus()},children:(0,d.jsx)(w,{})}):null]}),h&&(0,d.jsx)(b,{children:l.SEARCH_NOT_FOUND[c]})]})}},993:(t,e,i)=>{"use strict";i.d(e,{A:()=>s});i(5043);var a=i(215),r=i(844);const o=i(1529).Ay.img`
    height: 100%;
    width: 100%;
`;var l=i(579);const s=t=>{let{data:e}=t;const{lang:i}=(0,a.Xe)();return(0,l.jsx)(r.A,{disabled:e.disabled,page:null===e||void 0===e?void 0:e.id,type:"square",children:(0,l.jsx)(o,{src:"https://api.thetajikheritage.com"+(null===e||void 0===e?void 0:e.cardImg[i])})})}},7683:(t,e,i)=>{"use strict";i.d(e,{J:()=>s});var a=i(5043),r=i(215),o=i(910),l=i(2754);const s=(t,e,i)=>{const{title:s,setTitle:n}=(0,r.Xe)(),c="landing"===e?t:t.substring(0,t.indexOf("/")),d="middle"===e?t.substring(t.indexOf("_")+1):t.substring(t.indexOf("/")+1,t.length-1);(0,a.useEffect)((()=>{"reset"===t?n(l.El):(async()=>{try{const t=await(0,o.DL)(c);let i={...s};"landing"===e?h(i,t):p(i,t),n(i)}catch(t){n(l.El)}})()}),[t,i]);const h=(t,e)=>{const{header:i}=e;for(const a in s){const e=a;let r=[...s[e]];const o=[`${i[e].toUpperCase()}`,""];r[1]=o,t[e]=r}},p=(t,a)=>{const{header:r,sections:o}=a;null===o||void 0===o||o.forEach((a=>{const{link:o,cardTitle:l}=a;if(o===d)for(const n in s){const a=n;let o=[...s[a]],c=[];c="middle"===e?[`${r[a].toUpperCase()}`,`${void 0!==l[a]?l[a]:""}`]:[`${l[a].toUpperCase()}`,`${void 0!==(null===i||void 0===i?void 0:i.name[a])?null===i||void 0===i?void 0:i.name[a]:""}`],o[1]=c,t[a]=o}}))}}},4946:(t,e,i)=>{"use strict";i.d(e,{Y:()=>n});var a=i(5043),r=i(1036),o=i(215),l=i(3216),s=i(4330);const n=()=>{const{lang:t}=(0,o.Xe)(),{pathname:e}=(0,l.zy)(),i=(0,a.useRef)({});return(0,a.useEffect)((()=>{Object.keys(i.current).forEach((e=>{const{key:a}=i.current[e],o=s[a][t];r.oR.update(e,{render:o,autoClose:2e3})}))}),[t]),(0,a.useEffect)((()=>{r.oR.dismiss()}),[e]),{showToast:(e,a,o)=>{const l=s[e][t];switch(i.current[o]={key:e},a){case"info":return r.oR.info(l,{toastId:o});case"success":return r.oR.success(l,{toastId:o});case"error":return r.oR.error(l,{toastId:o})}}}}},5749:(t,e,i)=>{"use strict";i.d(e,{j:()=>a});const a=i(1529).Ay.div`
    gap: var(--square-card-gap);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: var(--page-height);
`},1566:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>L});var a=i(5043),r=i(215),o=i(7683);const l=JSON.parse('{"IX":{"tj":"\u041a\u0430\u0434\u043e\u043c \u043a\u0430\u043b\u0438\u043c\u0430\u0440\u043e \u043e\u043c\u04ef\u0445\u0442\u0430\u043d \u043c\u0435\u0445\u043e\u04b3\u0435\u0434?","fa":"\u06a9\u062f\u0627\u0645 \u06a9\u0644\u0645\u0647\u200c \u0631\u0627 \u0622\u0645\u0648\u062e\u062a\u0646 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u062f\u061f","ru":"\u041a\u0430\u043a\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u0438\u0437\u0443\u0447\u0438\u0442\u044c?","us":"Which Word Would You Like to Explore?"},"CK":{"d":{"tj":[{"char":"\u0413","position":{"t":0,"l":4},"delay":0.62},{"char":"\u0414","position":{"t":0,"l":7},"delay":0.45},{"char":"\u0417","position":{"t":1,"l":2},"delay":0.61},{"char":"/filler/flowers/img-2.webp","position":{"t":1,"l":9},"delay":0.92},{"char":"\u0419","position":{"t":2,"l":1},"delay":0.28},{"char":"\u041b","position":{"t":2,"l":6},"delay":0.58},{"char":"\u0424","position":{"t":3,"l":8},"delay":0.63},{"char":"/filler/flowers/img-6.webp","position":{"t":4,"l":1},"delay":0.93},{"char":"\u0428","position":{"t":4,"l":5},"delay":0.89}],"ru":[{"char":"\u0413","position":{"t":0,"l":4},"delay":0.29},{"char":"\u0415","position":{"t":0,"l":7},"delay":0.17},{"char":"\u0418","position":{"t":1,"l":2},"delay":0.53},{"char":"\u041b","position":{"t":1,"l":9},"delay":0.57},{"char":"\u041c","position":{"t":2,"l":1},"delay":0.24},{"char":"\u041f","position":{"t":2,"l":6},"delay":0.24},{"char":"/filler/flowers/img-2.webp","position":{"t":3,"l":8},"delay":0.87}],"us":[{"char":"D","position":{"t":0,"l":4},"delay":0.61},{"char":"E","position":{"t":0,"l":7},"delay":0.49},{"char":"I","position":{"t":1,"l":2},"delay":0.56},{"char":"/filler/flowers/img-2.webp","position":{"t":1,"l":9},"delay":0.87},{"char":"L","position":{"t":2,"l":1},"delay":0.25},{"char":"O","position":{"t":2,"l":6},"delay":0.16},{"char":"/filler/flowers/img-6.webp","position":{"t":3,"l":8},"delay":0.65}],"fa":[{"char":"\u062a","position":{"t":0,"l":4},"delay":0.29},{"char":"\u062c","position":{"t":0,"l":7},"delay":0.17},{"char":"\u062f","position":{"t":1,"l":2},"delay":0.53},{"char":"\u0632","position":{"t":1,"l":9},"delay":0.57},{"char":"\u0698","position":{"t":2,"l":1},"delay":0.24},{"char":"\u0635","position":{"t":2,"l":6},"delay":0.24},{"char":"/filler/flowers/img-2.webp","position":{"t":3,"l":8},"delay":0.87}]},"m":{"tj":[{"char":"\u0414","position":{"t":2,"l":1},"delay":0.42},{"char":"/filler/flowers/img-2.webp","position":{"t":4,"l":1},"delay":0.64},{"char":"\u041e","position":{"t":5,"l":3},"delay":0.11},{"char":"\u041f","position":{"t":6,"l":0},"delay":0.26},{"char":"\u04ee","position":{"t":7,"l":2},"delay":0.33},{"char":"\u042d","position":{"t":9,"l":1},"delay":0.83}],"ru":[{"char":"\u0415","position":{"t":2,"l":1},"delay":0.64},{"char":"/filler/flowers/img-2.webp","position":{"t":4,"l":1},"delay":0.23},{"char":"\u0420","position":{"t":5,"l":3},"delay":0.52},{"char":"/filler/flowers/img-6.webp","position":{"t":6,"l":0},"delay":0.83},{"char":"\u0425","position":{"t":7,"l":2},"delay":0.59}],"us":[{"char":"F","position":{"t":2,"l":1},"delay":0.64},{"char":"/filler/flowers/img-2.webp","position":{"t":4,"l":1},"delay":0.56},{"char":"S","position":{"t":5,"l":3},"delay":0.37},{"char":"T","position":{"t":6,"l":0},"delay":0.31},{"char":"Y","position":{"t":7,"l":2},"delay":0.91}],"fa":[{"char":"\u0415","position":{"t":2,"l":1},"delay":0.64},{"char":"/filler/flowers/img-2.webp","position":{"t":4,"l":1},"delay":0.23},{"char":"\u0420","position":{"t":5,"l":3},"delay":0.52},{"char":"/filler/flowers/img-6.webp","position":{"t":6,"l":0},"delay":0.83},{"char":"\u0425","position":{"t":7,"l":2},"delay":0.59}]}},"AJ":{"d":{"tj":[{"char":"\u0411","position":{"t":0,"l":1},"delay":0.74},{"char":"/filler/flowers/img-1.webp","position":{"t":0,"l":2},"delay":0.39},{"char":"\u0412","position":{"t":0,"l":3},"delay":0.27},{"char":"\u0492","position":{"t":0,"l":6},"delay":0.14},{"char":"\u0415","position":{"t":0,"l":9},"delay":0.88},{"char":"\u0401","position":{"t":0,"l":10},"delay":0.53},{"char":"\u0416","position":{"t":1,"l":1},"delay":0.19},{"char":"\u0418","position":{"t":1,"l":7},"delay":0.36},{"char":"i","shape":"i","position":{"t":1,"l":4},"delay":0.17},{"char":"\u04e2","position":{"t":1,"l":8},"delay":0.23},{"char":"/filler/flowers/img-3.webp","position":{"t":2,"l":0},"delay":0.72},{"char":"\u041a","position":{"t":2,"l":3},"delay":0.81},{"char":"\u049a","position":{"t":2,"l":5},"delay":0.75},{"char":"\u041c","position":{"t":2,"l":8},"delay":0.37},{"char":"\u041d","position":{"t":2,"l":9},"delay":0.84},{"char":"\u041e","position":{"t":2,"l":10},"delay":0.15},{"char":"\u041f","position":{"t":3,"l":0},"delay":0.32},{"char":"\u0420","position":{"t":3,"l":1},"delay":0.77},{"char":"\u0421","position":{"t":3,"l":2},"delay":0.95},{"char":"\u0422","position":{"t":3,"l":3},"delay":0.26},{"char":"\u0423","position":{"t":3,"l":5},"delay":0.66},{"char":"\u04ee ","position":{"t":3,"l":6},"delay":0.31},{"char":"/filler/flowers/img-5.webp","position":{"t":3,"l":7},"delay":0},{"char":"\u04b2","position":{"t":4,"l":0},"delay":0.18},{"char":"\u0427","position":{"t":4,"l":3},"delay":0.55},{"char":"\u04b6","position":{"t":4,"l":4},"delay":0.78},{"char":"\u042d","position":{"t":4,"l":7},"delay":0.49},{"char":"\u042e","position":{"t":4,"l":8},"delay":0.69},{"char":"\u042f","position":{"t":4,"l":9},"delay":0.34}],"ru":[{"char":"\u0411","position":{"t":0,"l":1},"delay":0.68},{"char":"/filler/flowers/img-1.webp","position":{"t":0,"l":2},"delay":0.55},{"char":"\u0412","position":{"t":0,"l":3},"delay":0.33},{"char":"\u0414","position":{"t":0,"l":6},"delay":0.94},{"char":"\u0401","position":{"t":0,"l":9},"delay":0.81},{"char":"\u0416","position":{"t":0,"l":10},"delay":0.71},{"char":"\u0417","position":{"t":1,"l":1},"delay":0.43},{"char":"\u0419","position":{"t":1,"l":7},"delay":0.32},{"char":"\u041a","position":{"t":1,"l":8},"delay":0.96},{"char":"/filler/flowers/img-3.webp","position":{"t":2,"l":0},"delay":0.79},{"char":"\u041d","position":{"t":2,"l":3},"delay":0.49},{"char":"\u041e","position":{"t":2,"l":5},"delay":0.65},{"char":"\u0420","position":{"t":2,"l":8},"delay":0.58},{"char":"\u0421","position":{"t":2,"l":9},"delay":0.88},{"char":"\u0422","position":{"t":2,"l":10},"delay":0.42},{"char":"\u0423","position":{"t":3,"l":0},"delay":0.51},{"char":"\u0424","position":{"t":3,"l":1},"delay":0.39},{"char":"\u0425","position":{"t":3,"l":2},"delay":0.62},{"char":"\u0427","position":{"t":3,"l":3},"delay":0.77},{"char":"\u0428","position":{"t":3,"l":5},"delay":0.46},{"char":"\u042d","position":{"t":3,"l":6},"delay":0.93},{"char":"\u042e","position":{"t":3,"l":7},"delay":0.13},{"char":"\u042f","position":{"t":3,"l":10},"delay":0.38}],"us":[{"char":"B","position":{"t":0,"l":1},"delay":0.95},{"char":"/filler/flowers/img-1.webp","position":{"t":0,"l":2},"delay":0.41},{"char":"C","position":{"t":0,"l":3},"delay":0.79},{"char":"/filler/flowers/img-3.webp","position":{"t":0,"l":6},"delay":0.17},{"char":"F","position":{"t":0,"l":9},"delay":0.23},{"char":"G","position":{"t":0,"l":10},"delay":0.37},{"char":"H","position":{"t":1,"l":1},"delay":0.57},{"char":"J","position":{"t":1,"l":7},"delay":0.64},{"char":"K","position":{"t":1,"l":8},"delay":0.78},{"char":"/filler/flowers/img-5.webp","position":{"t":2,"l":0},"delay":0.33},{"char":"M","position":{"t":2,"l":3},"delay":0.68},{"char":"N","position":{"t":2,"l":5},"delay":0.73},{"char":"P","position":{"t":2,"l":8},"delay":0.12},{"char":"R","position":{"t":2,"l":9},"delay":0.35},{"char":"S","position":{"t":2,"l":10},"delay":0.71},{"char":"T","position":{"t":3,"l":0},"delay":0.87},{"char":"U","position":{"t":3,"l":1},"delay":0.52},{"char":"/filler/flowers/img-7.webp","position":{"t":3,"l":2},"delay":0.43},{"char":"V","position":{"t":3,"l":3},"delay":0.19},{"char":"W","position":{"t":3,"l":5},"delay":0.81},{"char":"X","position":{"t":3,"l":6},"delay":0.94},{"char":"Y","position":{"t":3,"l":7},"delay":0.56},{"char":"Z","position":{"t":3,"l":10},"delay":0.82}],"fa":[{"char":"\u0628","position":{"t":0,"l":1},"delay":0.68},{"char":"/filler/flowers/img-1.webp","position":{"t":0,"l":2},"delay":0.55},{"char":"\u067e","position":{"t":0,"l":3},"delay":0.33},{"char":"\u062b","position":{"t":0,"l":6},"delay":0.94},{"char":"\u0686","position":{"t":0,"l":9},"delay":0.81},{"char":"\u062d","position":{"t":0,"l":10},"delay":0.71},{"char":"\u062e","position":{"t":1,"l":1},"delay":0.43},{"char":"\u0630","position":{"t":1,"l":7},"delay":0.32},{"char":"\u0631","position":{"t":1,"l":8},"delay":0.96},{"char":"/filler/flowers/img-3.webp","position":{"t":2,"l":0},"delay":0.79},{"char":"\u0633","position":{"t":2,"l":3},"delay":0.49},{"char":"\u0634","position":{"t":2,"l":5},"delay":0.65},{"char":"\u0636","position":{"t":2,"l":8},"delay":0.58},{"char":"\u0637","position":{"t":2,"l":9},"delay":0.88},{"char":"\u0638","position":{"t":2,"l":10},"delay":0.42},{"char":"\u0639","position":{"t":3,"l":0},"delay":0.51},{"char":"\u063a","position":{"t":3,"l":1},"delay":0.39},{"char":"\u0641","position":{"t":3,"l":2},"delay":0.62},{"char":"\u0642","position":{"t":3,"l":3},"delay":0.77},{"char":"\u06a9","position":{"t":3,"l":5},"delay":0.46},{"char":"\u06af","position":{"t":3,"l":6},"delay":0.93},{"char":"\u0644","position":{"t":3,"l":7},"delay":0.13},{"char":"\u0645","position":{"t":3,"l":10},"delay":0.38}]},"m":{"tj":[{"char":"\u0411","position":{"t":0,"l":1},"delay":0.77},{"char":"/filler/flowers/img-1.webp","position":{"t":0,"l":2},"delay":0.62},{"char":"\u0412","position":{"t":0,"l":3},"delay":0.89},{"char":"\u0413","position":{"t":0,"l":4},"delay":0.36},{"char":"\u0492","position":{"t":1,"l":1},"delay":0.69},{"char":"/filler/flowers/img-3.webp","position":{"t":2,"l":0},"delay":0.95},{"char":"\u0415","position":{"t":2,"l":3},"delay":0.27},{"char":"\u0401","position":{"t":3,"l":0},"delay":0.12},{"char":"\u0416","position":{"t":3,"l":1},"delay":0.35},{"char":"\u0417","position":{"t":3,"l":2},"delay":0.82},{"char":"\u0418","position":{"t":3,"l":3},"delay":0.97},{"char":"\u04e2","position":{"t":4,"l":0},"delay":0.47},{"char":"\u0419","position":{"t":4,"l":3},"delay":0.58},{"char":"\u041a","position":{"t":4,"l":4},"delay":0.32},{"char":"\u041b","position":{"t":5,"l":0},"delay":0.86},{"char":"\u041c","position":{"t":5,"l":1},"delay":0.93},{"char":"\u041d","position":{"t":5,"l":2},"delay":0.22},{"char":"\u0420","position":{"t":6,"l":2},"delay":0.49},{"char":"/filler/flowers/img-5.webp","position":{"t":6,"l":3},"delay":0.44},{"char":"\u0421","position":{"t":6,"l":4},"delay":0.92},{"char":"\u0422","position":{"t":7,"l":0},"delay":0.57},{"char":"\u0423","position":{"t":7,"l":1},"delay":0.74},{"char":"\u0424","position":{"t":7,"l":4},"delay":0.39},{"char":"\u0425","position":{"t":8,"l":0},"delay":0.52},{"char":"/filler/flowers/img-7.webp","position":{"t":8,"l":1},"delay":0.88},{"char":"\u04b2","position":{"t":8,"l":2},"delay":0.76},{"char":"\u0427","position":{"t":8,"l":3},"delay":0.83},{"char":"\u04b6","position":{"t":8,"l":4},"delay":0.47},{"char":"\u0428","position":{"t":9,"l":0},"delay":0.69},{"char":"\u042e","position":{"t":9,"l":3},"delay":0.98},{"char":"\u042f","position":{"t":9,"l":4},"delay":0.91}],"ru":[{"char":"\u0411","position":{"t":0,"l":1},"delay":0.97},{"char":"/filler/flowers/img-1.webp","position":{"t":0,"l":2},"delay":0.31},{"char":"\u0412","position":{"t":0,"l":3},"delay":0.25},{"char":"\u0413","position":{"t":0,"l":4},"delay":0.41},{"char":"\u0414","position":{"t":1,"l":1},"delay":0.58},{"char":"/filler/flowers/img-3.webp","position":{"t":2,"l":0},"delay":0.12},{"char":"\u0401","position":{"t":2,"l":3},"delay":0.78},{"char":"\u0416","position":{"t":3,"l":0},"delay":0.86},{"char":"\u0417","position":{"t":3,"l":1},"delay":0.46},{"char":"\u0418","position":{"t":3,"l":2},"delay":0.35},{"char":"\u0419","position":{"t":3,"l":3},"delay":0.62},{"char":"\u041a","position":{"t":4,"l":0},"delay":0.98},{"char":"\u041b","position":{"t":4,"l":3},"delay":0.47},{"char":"\u041c","position":{"t":4,"l":4},"delay":0.64},{"char":"\u041d","position":{"t":5,"l":0},"delay":0.92},{"char":"\u041e","position":{"t":5,"l":1},"delay":0.11},{"char":"\u041f","position":{"t":5,"l":2},"delay":0.58},{"char":"\u0421","position":{"t":6,"l":2},"delay":0.17},{"char":"/filler/flowers/img-5.webp","position":{"t":6,"l":3},"delay":0.64},{"char":"\u0422","position":{"t":6,"l":4},"delay":0.31},{"char":"\u0423","position":{"t":7,"l":0},"delay":0.42},{"char":"\u0424","position":{"t":7,"l":1},"delay":0.79},{"char":"\u0427","position":{"t":7,"l":4},"delay":0.72},{"char":"\u0428","position":{"t":8,"l":0},"delay":0.84},{"char":"/filler/flowers/img-7.webp","position":{"t":8,"l":1},"delay":0.14},{"char":"\u042d","position":{"t":8,"l":2},"delay":0.95},{"char":"\u042e","position":{"t":8,"l":3},"delay":0.23},{"char":"\u042f","position":{"t":8,"l":4},"delay":0.63}],"us":[{"char":"B","position":{"t":0,"l":1},"delay":0.19},{"char":"/filler/flowers/img-1.webp","position":{"t":0,"l":2},"delay":0.73},{"char":"C","position":{"t":0,"l":3},"delay":0.46},{"char":"D","position":{"t":0,"l":4},"delay":0.91},{"char":"E","position":{"t":1,"l":1},"delay":0.25},{"char":"/filler/flowers/img-3.webp","position":{"t":2,"l":0},"delay":0.48},{"char":"G","position":{"t":2,"l":3},"delay":0.97},{"char":"H","position":{"t":3,"l":0},"delay":0.22},{"char":"I","position":{"t":3,"l":1},"delay":0.42},{"char":"J","position":{"t":3,"l":2},"delay":0.77},{"char":"K","position":{"t":3,"l":3},"delay":0.93},{"char":"L","position":{"t":4,"l":0},"delay":0.22},{"char":"M","position":{"t":4,"l":3},"delay":0.89},{"char":"N","position":{"t":4,"l":4},"delay":0.28},{"char":"O","position":{"t":5,"l":0},"delay":0.45},{"char":"P","position":{"t":5,"l":1},"delay":0.51},{"char":"R","position":{"t":5,"l":2},"delay":0.72},{"char":"U","position":{"t":6,"l":2},"delay":0.63},{"char":"/filler/flowers/img-5.webp","position":{"t":6,"l":3},"delay":0.52},{"char":"V","position":{"t":6,"l":4},"delay":0.16},{"char":"W","position":{"t":7,"l":0},"delay":0.81},{"char":"X","position":{"t":7,"l":1},"delay":0.34},{"char":"Z","position":{"t":7,"l":4},"delay":0.38}],"fa":[{"char":"\u0628","position":{"t":0,"l":1},"delay":0.97},{"char":"/filler/flowers/img-1.webp","position":{"t":0,"l":2},"delay":0.31},{"char":"\u067e","position":{"t":0,"l":3},"delay":0.25},{"char":"\u062a","position":{"t":0,"l":4},"delay":0.41},{"char":"\u0414","position":{"t":1,"l":1},"delay":0.58},{"char":"/filler/flowers/img-3.webp","position":{"t":2,"l":0},"delay":0.12},{"char":"\u0401","position":{"t":2,"l":3},"delay":0.78},{"char":"\u0416","position":{"t":3,"l":0},"delay":0.86},{"char":"\u0417","position":{"t":3,"l":1},"delay":0.46},{"char":"\u0418","position":{"t":3,"l":2},"delay":0.35},{"char":"\u0419","position":{"t":3,"l":3},"delay":0.62},{"char":"\u041a","position":{"t":4,"l":0},"delay":0.98},{"char":"\u041b","position":{"t":4,"l":3},"delay":0.47},{"char":"\u041c","position":{"t":4,"l":4},"delay":0.64},{"char":"\u041d","position":{"t":5,"l":0},"delay":0.92},{"char":"\u041e","position":{"t":5,"l":1},"delay":0.11},{"char":"\u041f","position":{"t":5,"l":2},"delay":0.58},{"char":"\u0421","position":{"t":6,"l":2},"delay":0.17},{"char":"/filler/flowers/img-5.webp","position":{"t":6,"l":3},"delay":0.64},{"char":"\u0422","position":{"t":6,"l":4},"delay":0.31},{"char":"\u0423","position":{"t":7,"l":0},"delay":0.42},{"char":"\u0424","position":{"t":7,"l":1},"delay":0.79},{"char":"\u0427","position":{"t":7,"l":4},"delay":0.72},{"char":"\u0428","position":{"t":8,"l":0},"delay":0.84},{"char":"/filler/flowers/img-7.webp","position":{"t":8,"l":1},"delay":0.14},{"char":"\u042d","position":{"t":8,"l":2},"delay":0.95},{"char":"\u042e","position":{"t":8,"l":3},"delay":0.23},{"char":"\u042f","position":{"t":8,"l":4},"delay":0.63}]}},"UA":{"d":{"tj":[{"char":"\u0410","position":{"t":0.5,"l":-0.5},"delay":0.56},{"char":"/filler/flowers/img-4.webp","position":{"t":2.5,"l":3.5},"delay":0.43},{"char":"\u0425","position":{"t":3.5,"l":9.5},"delay":0.41}],"ru":[{"char":"\u0410","position":{"t":0.5,"l":-0.5},"delay":0.45},{"char":"/filler/flowers/img-4.webp","position":{"t":2.5,"l":3.5},"delay":0.27}],"fa":[{"char":"\u0622","position":{"t":0.5,"l":-0.5},"delay":0.45},{"char":"/filler/flowers/img-4.webp","position":{"t":2.5,"l":3.5},"delay":0.27}],"us":[{"char":"A","position":{"t":0.5,"l":-0.5},"delay":0.31},{"char":"/filler/flowers/img-4.webp","position":{"t":2.5,"l":3.5},"delay":0.89}]},"m":{"tj":[{"char":"\u0410","position":{"t":0.5,"l":-0.5},"delay":0.21},{"char":"/filler/flowers/img-4.webp","position":{"t":2.5,"l":3.5},"delay":0.78}],"fa":[{"char":"\u0622","position":{"t":0.5,"l":-0.5},"delay":0.16},{"char":"/filler/flowers/img-4.webp","position":{"t":2.5,"l":3.5},"delay":0.53}],"ru":[{"char":"\u0410","position":{"t":0.5,"l":-0.5},"delay":0.16},{"char":"/filler/flowers/img-4.webp","position":{"t":2.5,"l":3.5},"delay":0.53}],"us":[{"char":"A","position":{"t":0.5,"l":-0.5},"delay":0.67},{"char":"/filler/flowers/img-4.webp","position":{"t":2.5,"l":3.5},"delay":0.81}]}},"pO":{"d":{"tj":[{"char":"i","position":{"t":1,"l":4}}],"fa":[{"char":"i","position":{"t":1,"l":4}}],"ru":[{"char":"i","position":{"t":1,"l":4}}],"us":[{"char":"i","position":{"t":1,"l":4}}]},"m":{"tj":[{"char":"i","position":{"t":1,"l":2}}],"fa":[{"char":"i","position":{"t":1,"l":2}}],"ru":[{"char":"i","position":{"t":1,"l":2}}],"us":[{"char":"i","position":{"t":1,"l":2}}]}}}');var s=i(5260),n=i(993),c=i(4946),d=i(910),h=i(9657),p=i(1529);const y=p.i7`
    0% {
        opacity: 0;
    }
    15% {
        opacity: 0;
    }
    25% {
        opacity: 0.5;
    }
    50% {
        opacity: 0.75;
    }
    75% {
        opacity: 0.9;
    }
    100% {
        opacity: 1;
    }
`,m=(p.i7`
    100% {
        opacity: 0;
    }
    75% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    25% {
        opacity: 0.75;
    }
    15% {
        opacity: 0.9;
    }
    0% {
        opacity: 1;
    }
`,p.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
`),u=p.Ay.div`
    position: relative;
    height: calc(6 * var(--circle-letter-size));
    width: calc(11 * var(--circle-letter-size));

    @media (max-width: 480px) {
        height: calc(10 * var(--circle-letter-size));
        width: calc(5 * var(--circle-letter-size));
    }
`,f=t=>{let{$empty:e}=t;return!e&&p.AH`
        cursor: pointer;
        transform: translateZ(1rem) translateX(0rem) scale(1.05);
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
            opacity 0.5s ease-in-out;
        box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);

        @media (max-width: 480px) {
            transform: translateZ(0rem) translateX(0rem) scale(1);
            box-shadow: none;
        }
    `},g=t=>{let{$empty:e}=t;return e&&p.AH`
        pointer-events: none;
        background-image: url('/customAssets/noise.png');
    `},w=p.Ay.div`
    height: var(--circle-letter-size);
    width: var(--circle-letter-size);
    position: absolute;
    background-color: var(--primary-black-color);
    border-radius: var(--circle-letter-size);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-gold-color);
    font-size: var(--header-large);
    will-change: transform;
    font-family: var(--fancy-font);
    opacity: 0;
    transition: opacity 150ms;
    animation: ${y} 300ms forwards;
    animation-delay: ${t=>{let{$delay:e}=t;return e?`${e}s`:"0s"}};
    left: ${t=>{let{$left:e}=t;return e&&`calc(${e} * var(--circle-letter-size))`}};
    top: ${t=>{let{$top:e}=t;return e&&`calc(${e} * var(--circle-letter-size))`}};

    ${g}

    &:hover {
        color: var(--primary-white-color);
        ${f}
    }

    span {
        will-change: color;
    }

    @media (max-width: 480px) {
        font-size: var(--header-big);
    }
`,v=(0,p.Ay)(w)`
    width: calc(var(--circle-letter-size) * 2);
    ${g}

    img {
        height: 100%;
    }

    &:hover {
        ${f}
    }
`,b=(0,p.Ay)(w)`
    width: calc(var(--circle-letter-size) * 2);
    transform: rotateZ(90deg);

    span {
        transform: rotateZ(-90deg);
    }

    img {
        transform: rotateZ(-90deg);
        width: calc(var(--circle-letter-size) - 0.5rem);
        height: auto;
    }

    &:hover {
        ${f}
        transform: rotateZ(90deg) translateZ(1rem) translateX(0rem) scale(1.05);

        @media (max-width: 480px) {
            transform: rotateZ(90deg) translateZ(0rem) translateX(0rem) scale(1);
        }
    }
`,x=(0,p.Ay)(w)`
    width: var(--circle-letter-size);

    img {
        width: 80%;
        height: 80%;
    }

    &:hover {
        ${f}
    }
`,$=(0,p.Ay)(w)`
    font-size: calc(var(--header-small) * 1.25);
    font-weight: normal;
    padding: 0.5rem;
    width: calc(var(--circle-letter-size) * 3);
    pointer-events: none;
    background-image: url('/customAssets/noise.png');
`;var j=i(579);const A=t=>{let{handleClick:e}=t;const{lang:i}=(0,r.Xe)(),o=(0,h.Ub)({query:"(max-width: 480px)"})?l.UA.m[i]:l.UA.d[i];return(0,j.jsx)(a.Fragment,{children:null===o||void 0===o?void 0:o.map(((t,a)=>{const{char:r,delay:o}=t,l=t.position.t,s=t.position.l;return(0,j.jsx)(b,{$top:l,$left:s,$delay:o,$empty:r.startsWith("/filler"),onClick:()=>e(r),children:r.startsWith("/filler")?(0,j.jsx)("img",{alt:"flower",src:""+r.substring(7)}):(0,j.jsx)("span",{children:r})},`${[i]}_${r}_${a}`)}))})},k=t=>{let{handleClick:e}=t;const{lang:i}=(0,r.Xe)(),o=(0,h.Ub)({query:"(max-width: 480px)"})?l.CK.m[i]:l.CK.d[i];return(0,j.jsx)(a.Fragment,{children:o.map(((t,a)=>{const{char:r,delay:o}=t,l=t.position.t,s=t.position.l;return(0,j.jsx)(v,{$top:l,$left:s,$delay:o,$empty:r.startsWith("/filler"),onClick:()=>e(r),children:r.startsWith("/filler")?(0,j.jsx)("img",{alt:"flower",src:""+r.substring(7)}):(0,j.jsx)("span",{children:r})},`${[i]}_${r}_${a}`)}))})},C=t=>{let{handleClick:e}=t;const{lang:i}=(0,r.Xe)(),o=(0,h.Ub)({query:"(max-width: 480px)"})?l.AJ.m[i]:l.AJ.d[i];return(0,j.jsx)(a.Fragment,{children:o.map(((t,a)=>{const{char:r,delay:o}=t,l=null===t||void 0===t?void 0:t.position.t,s=null===t||void 0===t?void 0:t.position.l;return(0,j.jsx)(x,{$top:l,$left:s,$delay:o,$empty:r.startsWith("/filler"),onClick:()=>e(r),children:r.startsWith("/filler")?(0,j.jsx)("img",{alt:"flower",src:""+r.substring(7)}):(0,j.jsx)("span",{children:r})},`${[i]}_${r}_${a}`)}))})},I=()=>{const{lang:t}=(0,r.Xe)(),e=(0,h.Ub)({query:"(max-width: 480px)"})?l.pO.m[t]:l.pO.d[t];return(0,j.jsx)(a.Fragment,{children:null===e||void 0===e?void 0:e.map(((e,i)=>{const{char:a}=e,r=e.position.t,o=e.position.l;return(0,j.jsx)($,{$top:r,$left:o,children:(0,j.jsx)("span",{children:"us"===t?"Click on a letter":"ru"===t?"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0431\u0443\u043a\u0432\u0443":"tj"===t?"\u04b2\u0430\u0440\u0444\u0435\u0440\u043e \u0437\u0435\u0440 \u043a\u0443\u043d\u0435\u0434":"\u062d\u0631\u0641\u06cc \u0631\u0627 \u0632\u06cc\u0631 \u06a9\u0646\u06cc\u062f"})},`${[t]}_${a}_${i}`)}))})},_=t=>{let{page:e,setValue:i,setItems:a}=t;const{showToast:r}=(0,c.Y)(),o=async t=>{try{const i=await(0,d._r)(e,t);i.length||r("E_204","info",e),a(i)}catch(o){500===o.status&&r("E_500","error",e)}i(t)};return(0,j.jsx)(m,{children:(0,j.jsxs)(u,{children:[(0,j.jsx)(k,{handleClick:o}),(0,j.jsx)(A,{handleClick:o}),(0,j.jsx)(C,{handleClick:o}),(0,j.jsx)(I,{})]})})};var O=i(6331),E=i(2192);const S=p.Ay.div`
    font-weight: bold;
    color: var(--primary-black-color);
    font-family: var(--fancy-font);
    margin-bottom: 1rem;
    text-align: center;
    font-size: var(--header-medium);
    line-height: var(--header-medium);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.25rem;
    }
`;var z=i(5749);const L=t=>{let{page:e}=t;const{lang:i}=(0,r.Xe)(),[c,d]=(0,a.useState)(""),[h,p]=(0,a.useState)([]);return(0,o.J)(e,"middle",h),(0,j.jsx)(s.A,{children:(0,j.jsxs)(O.A,{children:[(0,j.jsx)(S,{children:l.IX[i]}),(0,j.jsx)(E.A,{externalValue:c,setItems:p,page:e}),(0,j.jsx)(a.Fragment,{children:h.length>0?(0,j.jsx)(z.j,{$center:h.length%3===0,children:h.map((t=>(0,j.jsx)(n.A,{data:t},t.id)))}):(0,j.jsx)(_,{page:e,setValue:d,setItems:p})})]})})}},910:(t,e,i)=>{"use strict";i.d(e,{AN:()=>h,_r:()=>n,uu:()=>c,Gg:()=>s,DL:()=>l,c1:()=>d});var a=i(6213);const r=t=>{let e=null;return localStorage.getItem("th_Id")?e=localStorage.getItem("th_Id"):(e=t+"_"+Math.random().toString(36).substring(2,9),localStorage.setItem("th_Id",e)),e},o="https://api.thetajikheritage.com",l=async t=>{t||(t="");try{const e=r(t);return(await a.A.get(`${o}/${t}`,{params:{page:t,userId:e}})).data}catch(e){throw e}},s=async t=>{try{const e=r(t);return(await a.A.get(`${o}/${t}`,{params:{userId:e,page:t}})).data}catch(e){throw e}},n=async(t,e)=>{try{const i=r(t);return(await a.A.get(`${o}/${t}`,{params:{userId:i,page:t,value:e}})).data}catch(i){throw i}},c=async(t,e)=>{try{const i=r(`${e}${t}`);return(await a.A.get(`${o}/${e}`,{params:{id:t,page:`${e}/${t}`,userId:i}})).data}catch(i){throw i}},d=async t=>{try{const e=await a.A.get(`${o+t}`,{responseType:"arraybuffer"}),i=new Blob([e.data],{type:"application/pdf"});return URL.createObjectURL(i)}catch(e){throw e}},h=async t=>{try{return await a.A.post(`${o}/email`,{info:t})}catch(e){throw e}}},3438:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var a=i(9662),r=i(579);const o=(0,a.A)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},1238:(t,e)=>{"use strict";e.Y=function(t,e){return s(t).some((function(t){var i=t.inverse,a="all"===t.type||e.type===t.type;if(a&&i||!a&&!i)return!1;var r=t.expressions.every((function(t){var i=t.feature,a=t.modifier,r=t.value,o=e[i];if(!o)return!1;switch(i){case"orientation":case"scan":return o.toLowerCase()===r.toLowerCase();case"width":case"height":case"device-width":case"device-height":r=d(r),o=d(o);break;case"resolution":r=c(r),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":r=n(r),o=n(o);break;case"grid":case"color":case"color-index":case"monochrome":r=parseInt(r,10)||1,o=parseInt(o,10)||0}switch(a){case"min":return o>=r;case"max":return o<=r;default:return o===r}}));return r&&!i||!r&&i}))};var i=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,a=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,r=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,l=/(dpi|dpcm|dppx)?$/;function s(t){return t.split(",").map((function(t){var e=(t=t.trim()).match(i),o=e[1],l=e[2],s=e[3]||"",n={};return n.inverse=!!o&&"not"===o.toLowerCase(),n.type=l?l.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],n.expressions=s.map((function(t){var e=t.match(a),i=e[1].toLowerCase().match(r);return{modifier:i[1],feature:i[2],value:e[2]}})),n}))}function n(t){var e,i=Number(t);return i||(i=(e=t.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/e[2]),i}function c(t){var e=parseFloat(t);switch(String(t).match(l)[1]){case"dpcm":return e/2.54;case"dppx":return 96*e;default:return e}}function d(t){var e=parseFloat(t);switch(String(t).match(o)[1]){case"em":case"rem":return 16*e;case"cm":return 96*e/2.54;case"mm":return 96*e/2.54/10;case"in":return 96*e;case"pt":return 72*e;case"pc":return 72*e/12;default:return e}}},1725:(t,e,i)=>{"use strict";var a=i(1238).Y,r="undefined"!==typeof window?window.matchMedia:null;function o(t,e,i){var o,l=this;function s(t){l.matches=t.matches,l.media=t.media}r&&!i&&(o=r.call(window,t)),o?(this.matches=o.matches,this.media=o.media,o.addListener(s)):(this.matches=a(t,e),this.media=t),this.addListener=function(t){o&&o.addListener(t)},this.removeListener=function(t){o&&o.removeListener(t)},this.dispose=function(){o&&o.removeListener(s)}}t.exports=function(t,e,i){return new o(t,e,i)}},1497:(t,e,i)=>{"use strict";var a=i(3218);function r(){}function o(){}o.resetWarningCache=r,t.exports=function(){function t(t,e,i,r,o,l){if(l!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:r};return i.PropTypes=i,i}},5173:(t,e,i)=>{t.exports=i(1497)()},3218:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9657:(t,e,i)=>{"use strict";i.d(e,{Ub:()=>C});var a=i(5043),r=i(1725),o=i.n(r),l=/[A-Z]/g,s=/^ms-/,n={};function c(t){return"-"+t.toLowerCase()}const d=function(t){if(n.hasOwnProperty(t))return n[t];var e=t.replace(l,c);return n[t]=s.test(e)?"-"+e:e};function h(t,e){if(t===e)return!0;if(!t||!e)return!1;const i=Object.keys(t),a=Object.keys(e),r=i.length;if(a.length!==r)return!1;for(let o=0;o<r;o++){const a=i[o];if(t[a]!==e[a]||!Object.prototype.hasOwnProperty.call(e,a))return!1}return!0}var p=i(5173),y=i.n(p);const m=y().oneOfType([y().string,y().number]),u={all:y().bool,grid:y().bool,aural:y().bool,braille:y().bool,handheld:y().bool,print:y().bool,projection:y().bool,screen:y().bool,tty:y().bool,tv:y().bool,embossed:y().bool},f={orientation:y().oneOf(["portrait","landscape"]),scan:y().oneOf(["progressive","interlace"]),aspectRatio:y().string,deviceAspectRatio:y().string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:y().bool,colorIndex:y().bool,monochrome:y().bool,resolution:m,type:Object.keys(u)},{type:g,...w}=f,v={minAspectRatio:y().string,maxAspectRatio:y().string,minDeviceAspectRatio:y().string,maxDeviceAspectRatio:y().string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:y().number,maxColor:y().number,minColorIndex:y().number,maxColorIndex:y().number,minMonochrome:y().number,maxMonochrome:y().number,minResolution:m,maxResolution:m,...w};var b={all:{...u,...v},types:u,matchers:f,features:v};const x=t=>{const e=[];return Object.keys(b.all).forEach((i=>{const a=t[i];null!=a&&e.push(((t,e)=>{const i=d(t);return"number"===typeof e&&(e=`${e}px`),!0===e?i:!1===e?`not ${i}`:`(${i}: ${e})`})(i,a))})),e.join(" and ")},$=(0,a.createContext)(void 0),j=t=>{if(!t)return;return Object.keys(t).reduce(((e,i)=>(e[d(i)]=t[i],e)),{})},A=()=>{const t=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{t.current=!0}),[]),t.current},k=t=>{const e=()=>(t=>t.query||x(t))(t),[i,r]=(0,a.useState)(e);return(0,a.useEffect)((()=>{const t=e();i!==t&&r(t)}),[t]),i},C=(t,e,i)=>{const r=(t=>{const e=(0,a.useContext)($),i=()=>j(t)||j(e),[r,o]=(0,a.useState)(i);return(0,a.useEffect)((()=>{const t=i();h(r,t)||o(t)}),[t,e]),r})(e),l=k(t);if(!l)throw new Error("Invalid or missing MediaQuery!");const s=((t,e)=>{const i=()=>o()(t,e||{},!!e),[r,l]=(0,a.useState)(i),s=A();return(0,a.useEffect)((()=>{if(s){const t=i();return l(t),()=>{t&&t.dispose()}}}),[t,e]),r})(l,r),n=(t=>{const[e,i]=(0,a.useState)(t.matches);return(0,a.useEffect)((()=>{const e=t=>{i(t.matches)};return t.addListener(e),i(t.matches),()=>{t.removeListener(e)}}),[t]),e})(s),c=A();return(0,a.useEffect)((()=>{c&&i&&i(n)}),[n]),(0,a.useEffect)((()=>()=>{s&&s.dispose()}),[]),n}},4330:t=>{"use strict";t.exports=JSON.parse('{"SEARCH_NOT_FOUND":{"us":"No items match your search","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0627\u0632 \u0631\u0648\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u06cc \u0634\u0645\u0627 \u0686\u06cc\u0632\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"ARTICLE_UNAVAILABLE":{"us":"Article is not available yet","ru":"\u0421\u0442\u0430\u0442\u044c\u044f \u0435\u0449\u0435 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430","tj":"\u041c\u0430\u049b\u043e\u043b\u0430 \u04b3\u0430\u043d\u04ef\u0437 \u0432\u0443\u04b7\u0443\u0434 \u043d\u0430\u0434\u043e\u0440\u0430\u0434","fa":"\u0645\u0642\u0627\u0644\u0647 \u0647\u0646\u0648\u0632 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f"},"PAGE_NOT_FOUND":{"us":"Page not found","ru":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","tj":"\u0421\u0430\u04b3\u0438\u0444\u0430 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0635\u062d\u06cc\u0641\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"E_500":{"us":"Internal server error","ru":"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430","tj":"\u0425\u0430\u0442\u043e\u0433\u04e3 \u0431\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0438 \u0434\u043e\u0445\u0438\u043b\u04e3","fa":"\u062e\u0637\u0627\u06af\u06cc \u0628\u0627 \u0633\u0631\u0648\u0631\u06cc \u062f\u0627\u062e\u0644\u06cc"},"E_204":{"us":"No data match your request","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":""}}')}}]);
//# sourceMappingURL=566.8e133617.chunk.js.map