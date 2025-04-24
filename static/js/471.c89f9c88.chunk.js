"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[471],{8471:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var n=a(5043),r=a(215),i=a(7683),s=a(2754),o=a(4649),c=a(1529);const d=c.Ay.div`
    min-height: 100svh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,l=(c.Ay.img`
    height: 20rem;
`,c.Ay.div`
    color: var(--primary-white-color);
    margin: 0% 0% 5% 0%;
    font-size: var(--header-medium);
    position: absolute;
    top: 10%;
    z-index: 10;
    font-family: var(--fancy-font);
`);var h=a(579);const g=t=>{let{page:e}=t;const{lang:a}=(0,r.Xe)();return(0,i.J)(e,"landing",""),(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(o.A,{inProp:!0}),(0,h.jsx)(d,{children:(0,h.jsx)(l,{children:s.UV[a]})})]})}},7683:(t,e,a)=>{a.d(e,{J:()=>o});var n=a(5043),r=a(215),i=a(910),s=a(2754);const o=(t,e,a)=>{const{title:o,setTitle:c}=(0,r.Xe)(),d="landing"===e?t:t.substring(0,t.indexOf("/")),l="middle"===e?t.substring(t.indexOf("_")+1):t.substring(t.indexOf("/")+1,t.length-1);(0,n.useEffect)((()=>{"reset"===t?c(s.El):(async()=>{try{const t=await(0,i.DL)(d);let a={...o};"landing"===e?h(a,t):g(a,t),c(a)}catch(t){c(s.El)}})()}),[t,a]);const h=(t,e)=>{const{header:a}=e;for(const n in o){const e=n;let r=[...o[e]];const i=[`${a[e].toUpperCase()}`,""];r[1]=i,t[e]=r}},g=(t,n)=>{const{header:r,sections:i}=n;null===i||void 0===i||i.forEach((n=>{const{link:i,cardTitle:s}=n;if(i===l)for(const c in o){const n=c;let i=[...o[n]],d=[];d="middle"===e?[`${r[n].toUpperCase()}`,`${void 0!==s[n]?s[n]:""}`]:[`${s[n].toUpperCase()}`,`${void 0!==(null===a||void 0===a?void 0:a.name[n])?null===a||void 0===a?void 0:a.name[n]:""}`],i[1]=d,t[n]=i}}))}}},910:(t,e,a)=>{a.d(e,{AN:()=>l,uu:()=>c,Gg:()=>o,DL:()=>s,c1:()=>d});var n=a(6213);const r=t=>{let e=null;return localStorage.getItem("th_Id")?e=localStorage.getItem("th_Id"):(e=t+"_"+Math.random().toString(36).substring(2,9),localStorage.setItem("th_Id",e)),e},i="https://api.thetajikheritage.com",s=async t=>{t||(t="");try{const e=r(t);return(await n.A.get(`${i}/${t}`,{params:{page:t,userId:e}})).data}catch(e){throw e}},o=async t=>{try{const e=r(t);return(await n.A.get(`${i}/${t}`,{params:{userId:e,page:t}})).data}catch(e){throw e}},c=async(t,e)=>{try{const a=r(`${e}${t}`);return(await n.A.get(`${i}/${e}`,{params:{id:t,page:`${e}/${t}`,userId:a}})).data}catch(a){throw a}},d=async t=>{try{const e=await n.A.get(`${i+t}`,{responseType:"arraybuffer"}),a=new Blob([e.data],{type:"application/pdf"});return URL.createObjectURL(a)}catch(e){throw e}},l=async t=>{try{return await n.A.post(`${i}/email`,{info:t})}catch(e){throw e}}}}]);
//# sourceMappingURL=471.c89f9c88.chunk.js.map