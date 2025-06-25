"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[704,452],{844:(e,r,a)=>{a.d(r,{A:()=>c});a(5043);var t=a(1529),i=a(5475);const d=t.i7`
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
`,o=(0,t.Ay)(i.k2)`
    text-decoration: none;
    border-radius: var(--small-radius);
    animation: ${d} 1s ease-in-out forwards;
    transition: border-radius 250ms, box-shadow 400ms;
    height: ${e=>{let{$type:r}=e;return"long"===r?"35rem":"25rem"}};
    width: ${e=>{let{$type:r}=e;return"long"===r?"23rem":"25rem"}};

    ${e=>{let{$disabled:r}=e;return r?t.AH`
                  filter: brightness(0.5);
                  cursor: default;

                  &:hover {
                      border-radius: initial;
                      box-shadow: initial;
                  }

                  > * {
                      border-radius: var(--small-radius);
                  }
              `:t.AH`
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
        height: ${e=>{let{$type:r}=e;return"16rem"}};
        width: ${e=>{let{$type:r}=e;return"long"===r?"10.3rem":"16rem"}};

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
        ${e=>{let{$type:r}=e;return"long"===r?t.AH`
                      border-radius: var(--big-radius);
                      height: 35rem;

                      > * {
                          border-radius: var(--big-radius);
                      }
                  `:t.AH`
                      border-radius: var(--small-radius);
                      height: 25rem;

                      > * {
                          border-radius: var(--small-radius);
                      }
                  `}}
    }
`;var n=a(4946),s=a(579);const c=e=>{let{page:r,disabled:a=!1,children:t,type:i}=e;const{showToast:d}=(0,n.Y)();return(0,s.jsx)(o,{$type:i,$disabled:a,to:a?"#":r,onClick:()=>{a&&d("ARTICLE_UNAVAILABLE","info",r)},children:t})}},6331:(e,r,a)=>{a.d(r,{A:()=>d});a(5043);var t=a(9932),i=a(579);const d=e=>{let{children:r}=e;return(0,i.jsx)(t.x,{children:r})}},9932:(e,r,a)=>{a.d(r,{W:()=>d,x:()=>o});var t=a(1529);const i=t.i7`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`,d=t.Ay.div`
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
`,o=t.Ay.div`
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
`},2192:(e,r,a)=>{a.d(r,{A:()=>b});var t=a(5043),i=a(6213);var d=a(215),o=a(4330),n=a(2754),s=a(1529),c=a(9662),m=a(579);const h=(0,c.A)((0,m.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var l=a(3438),p=a(7392);const u=s.Ay.div`
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
`,g=s.Ay.div`
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
`,v=s.Ay.input`
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
`,x=(0,s.Ay)(h)`
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
`,w=(0,s.Ay)(l.A)`
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
`,y=(0,s.Ay)(p.A)`
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
`,f=s.Ay.div`
    margin-top: 0.5rem;
    color: var(--primary-red-color);
    font-size: var(--body-text);

    @media (max-width: 480px) {
        margin-top: 0.25rem;
    }
`,b=e=>{let{setItems:r,externalValue:a="",page:s}=e;const{lang:c}=(0,d.Xe)(),[h,l]=(0,t.useState)(!1),[p,b]=(0,t.useState)(a),A=(0,t.useRef)(null);(0,t.useEffect)((()=>{if(p.length>=1){const e=setTimeout((()=>{(async(e,r)=>{try{return(await i.A.get(`https://api.thetajikheritage.com/${r}/search/`,{params:{q:encodeURIComponent(e)}})).data}catch(a){throw a}})(p,s).then((e=>{r(e)}))}),450);return()=>clearTimeout(e)}}),[p]);return(0,m.jsxs)(u,{children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(x,{}),(0,m.jsx)(v,{name:"search_bar",id:"search_bar",ref:A,placeholder:n.f1[c],value:p,onChange:e=>(async e=>{const r=e.currentTarget.value;l(!1),b(r)})(e)}),p.length?(0,m.jsx)(y,{onClick:()=>{b(""),l(!1),r([]),A.current&&A.current.focus()},children:(0,m.jsx)(w,{})}):null]}),h&&(0,m.jsx)(f,{children:o.SEARCH_NOT_FOUND[c]})]})}},993:(e,r,a)=>{a.d(r,{A:()=>n});a(5043);var t=a(215),i=a(844);const d=a(1529).Ay.img`
    height: 100%;
    width: 100%;
`;var o=a(579);const n=e=>{let{data:r}=e;const{lang:a}=(0,t.Xe)();return(0,o.jsx)(i.A,{disabled:r.disabled,page:null===r||void 0===r?void 0:r.id,type:"square",children:(0,o.jsx)(d,{src:"https://api.thetajikheritage.com"+(null===r||void 0===r?void 0:r.cardImg[a])})})}},5452:(e,r,a)=>{a.r(r),a.d(r,{default:()=>p});a(5043);var t=a(215),i=a(7683),d=a(4330),o=a(5260),n=a(1529);const s=n.Ay.div`
    width: 100%;
    height: calc(100svh - var(--header-height));
    background-image: url('/customAssets/footer_grid.webp');
    background-size: calc(100vw / 4);
    background-repeat: repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        background-size: 100vw;
    }
`,c=n.Ay.div`
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
`,m=n.Ay.div`
    font-size: 5rem;
    font-family: var(--blocky-font);
    color: var(--primary-red-color);

    @media (max-width: 480px) {
        font-size: var(--header-large);
    }
`,h=n.Ay.div`
    font-size: 1.5rem;
    font-family: var(--fancy-font);
    color: var(--primary-white-color);

    @media (max-width: 480px) {
        font-size: var(--header-normal);
    }
`;var l=a(579);const p=()=>{const{lang:e}=(0,t.Xe)();return(0,i.J)("reset"),(0,l.jsx)(o.A,{children:(0,l.jsx)(s,{children:(0,l.jsxs)(c,{children:[(0,l.jsx)(m,{children:"404"}),(0,l.jsx)(h,{children:d.PAGE_NOT_FOUND[e]})]})})})}},7683:(e,r,a)=>{a.d(r,{J:()=>n});var t=a(5043),i=a(215),d=a(910),o=a(2754);const n=(e,r,a)=>{const{title:n,setTitle:s}=(0,i.Xe)(),c="landing"===r?e:e.substring(0,e.indexOf("/")),m="middle"===r?e.substring(e.indexOf("_")+1):e.substring(e.indexOf("/")+1,e.length-1);(0,t.useEffect)((()=>{"reset"===e?s(o.El):(async()=>{try{const e=await(0,d.DL)(c);let a={...n};"landing"===r?h(a,e):l(a,e),s(a)}catch(e){s(o.El)}})()}),[e,a]);const h=(e,r)=>{const{header:a}=r;for(const t in n){const r=t;let i=[...n[r]];const d=[`${a[r].toUpperCase()}`,""];i[1]=d,e[r]=i}},l=(e,t)=>{const{header:i,sections:d}=t;null===d||void 0===d||d.forEach((t=>{const{link:d,cardTitle:o}=t;if(d===m)for(const s in n){const t=s;let d=[...n[t]],c=[];c="middle"===r?[`${i[t].toUpperCase()}`,`${void 0!==o[t]?o[t]:""}`]:[`${o[t].toUpperCase()}`,`${void 0!==(null===a||void 0===a?void 0:a.name[t])?null===a||void 0===a?void 0:a.name[t]:""}`],d[1]=c,e[t]=d}}))}}},4946:(e,r,a)=>{a.d(r,{Y:()=>s});var t=a(5043),i=a(1036),d=a(215),o=a(3216),n=a(4330);const s=()=>{const{lang:e}=(0,d.Xe)(),{pathname:r}=(0,o.zy)(),a=(0,t.useRef)({});return(0,t.useEffect)((()=>{Object.keys(a.current).forEach((r=>{const{key:t}=a.current[r],d=n[t][e];i.oR.update(r,{render:d,autoClose:2e3})}))}),[e]),(0,t.useEffect)((()=>{i.oR.dismiss()}),[r]),{showToast:(r,t,d)=>{const o=n[r][e];switch(a.current[d]={key:r},t){case"info":return i.oR.info(o,{toastId:d});case"success":return i.oR.success(o,{toastId:d});case"error":return i.oR.error(o,{toastId:d})}}}}},4704:(e,r,a)=>{a.r(r),a.d(r,{default:()=>I});var t=a(5043),i=a(3216),d=a(7683),o=a(4946),n=a(910),s=a(5260),c=a(215),m=a(844),h=a(1529);const l=h.Ay.div`
    width: 100%;
    height: 100%;
    color: var(--primary-white-color);
    background: var(--primary-black-color);
    position: relative;
    padding: 2rem;

    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem;
    }
`,p=h.Ay.div`
    height: 20rem;
    width: 15rem;
    border-radius: 9rem;
    border: 2px solid var(--primary-gold-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0rem 0rem 3rem var(--primary-shadow-color);

    @media (max-width: 480px) {
        height: 10.8rem;
        width: 8.25rem;
        border-radius: 4rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 23.5rem;
        width: 17.5rem;
    }
`,u=h.Ay.img`
    border-radius: 9rem;
    height: 18.5rem;
    width: 13.5rem;
    margin: 0.3rem;
    box-shadow: var(--primary-box-shadow) var(--primary-gold-color);
    background: var(--primary-black-color) url('/customAssets/loader.png')
        center no-repeat;
    background-size: 50% auto;

    @media (max-width: 480px) {
        height: 10.05rem;
        width: 7.5rem;
        border-radius: 4.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 22rem;
        width: 16rem;
    }
`,g=h.Ay.div`
    position: absolute;
    top: 17.5rem;
    left: 2rem;

    @media (max-width: 480px) {
        top: 9.5rem;
        left: 1rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: 17rem;
        left: 1.5rem;
    }
`,v=h.Ay.div`
    font-size: var(--header-large);
    line-height: var(--header-large);
    font-style: italic;
    font-family: var(--fancy-font);
    text-shadow: 0rem 0rem 0.25rem black;

    @media (max-width: 480px) {
        font-size: var(--header-medium);
        line-height: var(--header-medium);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 3rem;
    }
`,x=h.Ay.div`
    font-size: var(--header-small);
    font-family: var(--regular-font);
    padding-top: calc(var(--text-segment-gap) / 2);

    @media (max-width: 480px) {
        font-size: var(--body-text);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
        margin-top: 0.5rem;
    }
`,w=h.Ay.div`
    position: absolute;
    padding: 0rem 2rem 2rem 2rem;
    left: 0rem;
    bottom: 0rem;
    width: 100%;
    color: var(--secondary-white-color);
    font-size: var(--body-text);

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.15rem;
        max-height: 8.75rem;
        max-width: 25rem;
        height: 8.75rem;
        padding: 0rem 1.5rem 1.5rem 1.5rem;
        overflow: hidden;
    }
`;var y=a(579);const f=e=>{let{poet:r}=e;const{lang:a}=(0,c.Xe)(),t=null===r||void 0===r?void 0:r.name[a].split(" ");return(0,y.jsx)(m.A,{type:"long",disabled:r.disabled,page:null===r||void 0===r?void 0:r.id,children:(0,y.jsxs)(l,{children:[(0,y.jsx)(p,{children:(0,y.jsx)(u,{src:"https://api.thetajikheritage.com"+(null===r||void 0===r?void 0:r.img)})}),(0,y.jsxs)(g,{children:[(0,y.jsx)(v,{children:t[0]}),(0,y.jsx)(v,{children:t[1]}),(0,y.jsxs)(x,{children:[null===r||void 0===r?void 0:r.years[0],"-",null===r||void 0===r?void 0:r.years[1]]})]}),(0,y.jsx)(w,{dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.desc[a]}})]})})};var b=a(993),A=a(2192),j=a(6331),$=a(5452),k=a(5749);const I=e=>{let{page:r}=e;const{pathname:a}=(0,i.zy)(),{showToast:c}=(0,o.Y)(),[m,h]=(0,t.useState)([]),[l,p]=(0,t.useState)(null);return(0,d.J)(r,"middle"),(0,t.useEffect)((()=>{(async()=>{try{const e=await(0,n.Gg)(r);h(e)}catch(l){const a=l;404===a.status?p(404):500===a.status&&c("E_500","error",r)}})()}),[a]),(0,y.jsxs)(t.Fragment,{children:[404===l?(0,y.jsx)($.default,{}):null,(0,y.jsx)(s.A,{children:(0,y.jsx)(j.A,{children:m.length>0?(0,y.jsxs)(t.Fragment,{children:[(0,y.jsx)(A.A,{setItems:h,page:r}),(0,y.jsx)(k.j,{$center:m.length%3===0,children:m.map((e=>r.includes("poets")?(0,y.jsx)(f,{poet:e},e.id):(0,y.jsx)(b.A,{data:e},e.id)))})]}):null})})]})}},5749:(e,r,a)=>{a.d(r,{j:()=>t});const t=a(1529).Ay.div`
    gap: var(--square-card-gap);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: var(--page-height);
`},910:(e,r,a)=>{a.d(r,{AN:()=>h,_r:()=>s,uu:()=>c,Gg:()=>n,DL:()=>o,c1:()=>m});var t=a(6213);const i=e=>{let r=null;return localStorage.getItem("th_Id")?r=localStorage.getItem("th_Id"):(r=e+"_"+Math.random().toString(36).substring(2,9),localStorage.setItem("th_Id",r)),r},d="https://api.thetajikheritage.com",o=async e=>{e||(e="");try{const r=i(e);return(await t.A.get(`${d}/${e}`,{params:{page:e,userId:r}})).data}catch(r){throw r}},n=async e=>{try{const r=i(e);return(await t.A.get(`${d}/${e}`,{params:{userId:r,page:e}})).data}catch(r){throw r}},s=async(e,r)=>{try{const a=i(e);return(await t.A.get(`${d}/${e}`,{params:{userId:a,page:e,value:r}})).data}catch(a){throw a}},c=async(e,r)=>{try{const a=i(`${r}${e}`);return(await t.A.get(`${d}/${r}`,{params:{id:e,page:`${r}/${e}`,userId:a}})).data}catch(a){throw a}},m=async e=>{try{const r=await t.A.get(`${d+e}`,{responseType:"arraybuffer"}),a=new Blob([r.data],{type:"application/pdf"});return URL.createObjectURL(a)}catch(r){throw r}},h=async e=>{try{return await t.A.post(`${d}/email`,{info:e})}catch(r){throw r}}},3438:(e,r,a)=>{a.d(r,{A:()=>d});var t=a(9662),i=a(579);const d=(0,t.A)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},4330:e=>{e.exports=JSON.parse('{"SEARCH_NOT_FOUND":{"us":"No items match your search","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0627\u0632 \u0631\u0648\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u06cc \u0634\u0645\u0627 \u0686\u06cc\u0632\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"ARTICLE_UNAVAILABLE":{"us":"Article is not available yet","ru":"\u0421\u0442\u0430\u0442\u044c\u044f \u0435\u0449\u0435 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430","tj":"\u041c\u0430\u049b\u043e\u043b\u0430 \u04b3\u0430\u043d\u04ef\u0437 \u0432\u0443\u04b7\u0443\u0434 \u043d\u0430\u0434\u043e\u0440\u0430\u0434","fa":"\u0645\u0642\u0627\u0644\u0647 \u0647\u0646\u0648\u0632 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f"},"PAGE_NOT_FOUND":{"us":"Page not found","ru":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","tj":"\u0421\u0430\u04b3\u0438\u0444\u0430 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0635\u062d\u06cc\u0641\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"E_500":{"us":"Internal server error","ru":"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430","tj":"\u0425\u0430\u0442\u043e\u0433\u04e3 \u0431\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0438 \u0434\u043e\u0445\u0438\u043b\u04e3","fa":"\u062e\u0637\u0627\u06af\u06cc \u0628\u0627 \u0633\u0631\u0648\u0631\u06cc \u062f\u0627\u062e\u0644\u06cc"},"E_204":{"us":"No data match your request","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":""}}')}}]);
//# sourceMappingURL=704.166cd22e.chunk.js.map