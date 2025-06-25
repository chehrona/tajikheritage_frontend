"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[115,452],{844:(e,r,a)=>{a.d(r,{A:()=>c});a(5043);var t=a(1529),i=a(5475);const n=t.i7`
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
`,d=(0,t.Ay)(i.k2)`
    text-decoration: none;
    border-radius: var(--small-radius);
    animation: ${n} 1s ease-in-out forwards;
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
`;var o=a(4946),s=a(579);const c=e=>{let{page:r,disabled:a=!1,children:t,type:i}=e;const{showToast:n}=(0,o.Y)();return(0,s.jsx)(d,{$type:i,$disabled:a,to:a?"#":r,onClick:()=>{a&&n("ARTICLE_UNAVAILABLE","info",r)},children:t})}},6331:(e,r,a)=>{a.d(r,{A:()=>n});a(5043);var t=a(9932),i=a(579);const n=e=>{let{children:r}=e;return(0,i.jsx)(t.x,{children:r})}},9932:(e,r,a)=>{a.d(r,{W:()=>n,x:()=>d});var t=a(1529);const i=t.i7`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`,n=t.Ay.div`
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
`,d=t.Ay.div`
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
`},5452:(e,r,a)=>{a.r(r),a.d(r,{default:()=>p});a(5043);var t=a(215),i=a(7683),n=a(4330),d=a(5260),o=a(1529);const s=o.Ay.div`
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
`,c=o.Ay.div`
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
`,l=o.Ay.div`
    font-size: 5rem;
    font-family: var(--blocky-font);
    color: var(--primary-red-color);

    @media (max-width: 480px) {
        font-size: var(--header-large);
    }
`,h=o.Ay.div`
    font-size: 1.5rem;
    font-family: var(--fancy-font);
    color: var(--primary-white-color);

    @media (max-width: 480px) {
        font-size: var(--header-normal);
    }
`;var u=a(579);const p=()=>{const{lang:e}=(0,t.Xe)();return(0,i.J)("reset"),(0,u.jsx)(d.A,{children:(0,u.jsx)(s,{children:(0,u.jsxs)(c,{children:[(0,u.jsx)(l,{children:"404"}),(0,u.jsx)(h,{children:n.PAGE_NOT_FOUND[e]})]})})})}},7683:(e,r,a)=>{a.d(r,{J:()=>o});var t=a(5043),i=a(215),n=a(910),d=a(2754);const o=(e,r,a)=>{const{title:o,setTitle:s}=(0,i.Xe)(),c="landing"===r?e:e.substring(0,e.indexOf("/")),l="middle"===r?e.substring(e.indexOf("_")+1):e.substring(e.indexOf("/")+1,e.length-1);(0,t.useEffect)((()=>{"reset"===e?s(d.El):(async()=>{try{const e=await(0,n.DL)(c);let a={...o};"landing"===r?h(a,e):u(a,e),s(a)}catch(e){s(d.El)}})()}),[e,a]);const h=(e,r)=>{const{header:a}=r;for(const t in o){const r=t;let i=[...o[r]];const n=[`${a[r].toUpperCase()}`,""];i[1]=n,e[r]=i}},u=(e,t)=>{const{header:i,sections:n}=t;null===n||void 0===n||n.forEach((t=>{const{link:n,cardTitle:d}=t;if(n===l)for(const s in o){const t=s;let n=[...o[t]],c=[];c="middle"===r?[`${i[t].toUpperCase()}`,`${void 0!==d[t]?d[t]:""}`]:[`${d[t].toUpperCase()}`,`${void 0!==(null===a||void 0===a?void 0:a.name[t])?null===a||void 0===a?void 0:a.name[t]:""}`],n[1]=c,e[t]=n}}))}}},4946:(e,r,a)=>{a.d(r,{Y:()=>s});var t=a(5043),i=a(1036),n=a(215),d=a(3216),o=a(4330);const s=()=>{const{lang:e}=(0,n.Xe)(),{pathname:r}=(0,d.zy)(),a=(0,t.useRef)({});return(0,t.useEffect)((()=>{Object.keys(a.current).forEach((r=>{const{key:t}=a.current[r],n=o[t][e];i.oR.update(r,{render:n,autoClose:2e3})}))}),[e]),(0,t.useEffect)((()=>{i.oR.dismiss()}),[r]),{showToast:(r,t,n)=>{const d=o[r][e];switch(a.current[n]={key:r},t){case"info":return i.oR.info(d,{toastId:n});case"success":return i.oR.success(d,{toastId:n});case"error":return i.oR.error(d,{toastId:n})}}}}},3115:(e,r,a)=>{a.r(r),a.d(r,{default:()=>b});var t=a(5043),i=a(215),n=a(3216),d=a(7683),o=a(4946),s=a(910),c=a(5260),l=a(844),h=a(1529);const u=h.Ay.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--primary-white-color);
    background: var(--primary-black-color);

    @media (max-width: 480px) {
        padding: 0.25rem 0.25rem 0.5rem 0.25rem;
    }
`,p=h.Ay.div`
    font-weight: 500;
    font-style: italic;
    text-align: center;
    font-family: var(--fancy-font);
    font-size: var(--header-big);

    @media (max-width: 480px) {
        width: 100%;
        font-size: var(--header-small);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.2rem;
    }
`,m=h.Ay.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/customAssets/border.svg') center no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    filter: drop-shadow(0px 0px 2.5px var(--primary-gold-color));

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 90%;
        width: 90%;
    }
`,g=h.Ay.div`
    background-size: contain;
    width: 70%;
    height: 70%;
    background-position: center;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 0px 1px var(--secondary-white-color));
    background-image: ${e=>{let{$src:r}=e;return r&&`url(${r})`}};
`;var v=a(579);const x=e=>{let{section:r}=e;const{lang:a}=(0,i.Xe)();return(0,v.jsx)(l.A,{page:r.link,type:"long",disabled:r.disabled,children:(0,v.jsxs)(u,{children:[(0,v.jsx)(m,{children:(0,v.jsx)(g,{$src:null===r||void 0===r?void 0:r.cardImg[a]})}),(0,v.jsx)(p,{$length:null===r||void 0===r?void 0:r.cardTitle[a].length,children:null===r||void 0===r?void 0:r.cardTitle[a]})]})})};var w=a(6331),f=a(5452);const y=h.Ay.div`
    gap: var(--long-card-gap);
    padding: 0rem 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${e=>{let{$center:r}=e;return r&&r?"space-between":"flex-start"}};

    @media (max-width: 480px) {
        padding: 0rem;
        gap: var(--long-card-gap);
        justify-content: space-between;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        justify-content: space-between;
    }
`,b=e=>{let{page:r}=e;const{pathname:a}=(0,n.zy)(),{showToast:l}=(0,o.Y)(),{lang:h}=(0,i.Xe)(),[u,p]=(0,t.useState)([]),[m,g]=(0,t.useState)(null);return(0,d.J)(r,"landing",u),(0,t.useEffect)((()=>{(async()=>{try{const e=await(0,s.DL)(r);p(e.sections)}catch(m){const a=m;404===a.status?g(404):500===a.status&&l("E_500","error",r)}})()}),[a]),(0,v.jsxs)(t.Fragment,{children:[404===m?(0,v.jsx)(f.default,{}):null,(0,v.jsx)(c.A,{children:(0,v.jsx)(w.A,{children:u.length>0?(0,v.jsx)(y,{$center:u.length%3===0,children:null===u||void 0===u?void 0:u.map(((e,r)=>(0,v.jsx)(x,{section:e},e.cardTitle[h])))}):null})})]})}},910:(e,r,a)=>{a.d(r,{AN:()=>h,_r:()=>s,uu:()=>c,Gg:()=>o,DL:()=>d,c1:()=>l});var t=a(6213);const i=e=>{let r=null;return localStorage.getItem("th_Id")?r=localStorage.getItem("th_Id"):(r=e+"_"+Math.random().toString(36).substring(2,9),localStorage.setItem("th_Id",r)),r},n="https://api.thetajikheritage.com",d=async e=>{e||(e="");try{const r=i(e);return(await t.A.get(`${n}/${e}`,{params:{page:e,userId:r}})).data}catch(r){throw r}},o=async e=>{try{const r=i(e);return(await t.A.get(`${n}/${e}`,{params:{userId:r,page:e}})).data}catch(r){throw r}},s=async(e,r)=>{try{const a=i(e);return(await t.A.get(`${n}/${e}`,{params:{userId:a,page:e,value:r}})).data}catch(a){throw a}},c=async(e,r)=>{try{const a=i(`${r}${e}`);return(await t.A.get(`${n}/${r}`,{params:{id:e,page:`${r}/${e}`,userId:a}})).data}catch(a){throw a}},l=async e=>{try{const r=await t.A.get(`${n+e}`,{responseType:"arraybuffer"}),a=new Blob([r.data],{type:"application/pdf"});return URL.createObjectURL(a)}catch(r){throw r}},h=async e=>{try{return await t.A.post(`${n}/email`,{info:e})}catch(r){throw r}}},4330:e=>{e.exports=JSON.parse('{"SEARCH_NOT_FOUND":{"us":"No items match your search","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0627\u0632 \u0631\u0648\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u06cc \u0634\u0645\u0627 \u0686\u06cc\u0632\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"ARTICLE_UNAVAILABLE":{"us":"Article is not available yet","ru":"\u0421\u0442\u0430\u0442\u044c\u044f \u0435\u0449\u0435 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430","tj":"\u041c\u0430\u049b\u043e\u043b\u0430 \u04b3\u0430\u043d\u04ef\u0437 \u0432\u0443\u04b7\u0443\u0434 \u043d\u0430\u0434\u043e\u0440\u0430\u0434","fa":"\u0645\u0642\u0627\u0644\u0647 \u0647\u0646\u0648\u0632 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f"},"PAGE_NOT_FOUND":{"us":"Page not found","ru":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","tj":"\u0421\u0430\u04b3\u0438\u0444\u0430 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0635\u062d\u06cc\u0641\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"E_500":{"us":"Internal server error","ru":"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430","tj":"\u0425\u0430\u0442\u043e\u0433\u04e3 \u0431\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0438 \u0434\u043e\u0445\u0438\u043b\u04e3","fa":"\u062e\u0637\u0627\u06af\u06cc \u0628\u0627 \u0633\u0631\u0648\u0631\u06cc \u062f\u0627\u062e\u0644\u06cc"},"E_204":{"us":"No data match your request","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":""}}')}}]);
//# sourceMappingURL=115.7054ec93.chunk.js.map