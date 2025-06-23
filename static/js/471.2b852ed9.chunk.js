"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[471],{8471:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var n=a(5043),r=a(215),s=a(7683),i=a(2754),o=a(4649),c=a(1529);const d=c.Ay.div`
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
`);var h=a(579);const g=t=>{let{page:e}=t;const{lang:a}=(0,r.Xe)();return(0,s.J)(e,"landing",""),(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(o.A,{inProp:!0}),(0,h.jsx)(d,{children:(0,h.jsx)(l,{children:i.UV[a]})})]})}},7683:(t,e,a)=>{a.d(e,{J:()=>o});var n=a(5043),r=a(215),s=a(910),i=a(2754);const o=(t,e,a)=>{const{title:o,setTitle:c}=(0,r.Xe)(),d="landing"===e?t:t.substring(0,t.indexOf("/")),l="middle"===e?t.substring(t.indexOf("_")+1):t.substring(t.indexOf("/")+1,t.length-1);(0,n.useEffect)((()=>{"reset"===t?c(i.El):(async()=>{try{const t=await(0,s.DL)(d);let a={...o};"landing"===e?h(a,t):g(a,t),c(a)}catch(t){c(i.El)}})()}),[t,a]);const h=(t,e)=>{const{header:a}=e;for(const n in o){const e=n;let r=[...o[e]];const s=[`${a[e].toUpperCase()}`,""];r[1]=s,t[e]=r}},g=(t,n)=>{const{header:r,sections:s}=n;null===s||void 0===s||s.forEach((n=>{const{link:s,cardTitle:i}=n;if(s===l)for(const c in o){const n=c;let s=[...o[n]],d=[];d="middle"===e?[`${r[n].toUpperCase()}`,`${void 0!==i[n]?i[n]:""}`]:[`${i[n].toUpperCase()}`,`${void 0!==(null===a||void 0===a?void 0:a.name[n])?null===a||void 0===a?void 0:a.name[n]:""}`],s[1]=d,t[n]=s}}))}}},910:(t,e,a)=>{a.d(e,{AN:()=>h,_r:()=>c,uu:()=>d,Gg:()=>o,DL:()=>i,c1:()=>l});var n=a(6213);const r=t=>{let e=null;return localStorage.getItem("th_Id")?e=localStorage.getItem("th_Id"):(e=t+"_"+Math.random().toString(36).substring(2,9),localStorage.setItem("th_Id",e)),e},s="https://api.thetajikheritage.com",i=async t=>{t||(t="");try{const e=r(t);return(await n.A.get(`${s}/${t}`,{params:{page:t,userId:e}})).data}catch(e){throw e}},o=async t=>{try{const e=r(t);return(await n.A.get(`${s}/${t}`,{params:{userId:e,page:t}})).data}catch(e){throw e}},c=async(t,e)=>{try{const a=r(t);return(await n.A.get(`${s}/${t}`,{params:{userId:a,page:t,value:e}})).data}catch(a){throw a}},d=async(t,e)=>{try{const a=r(`${e}${t}`);return(await n.A.get(`${s}/${e}`,{params:{id:t,page:`${e}/${t}`,userId:a}})).data}catch(a){throw a}},l=async t=>{try{const e=await n.A.get(`${s+t}`,{responseType:"arraybuffer"}),a=new Blob([e.data],{type:"application/pdf"});return URL.createObjectURL(a)}catch(e){throw e}},h=async t=>{try{return await n.A.post(`${s}/email`,{info:t})}catch(e){throw e}}}}]);
//# sourceMappingURL=471.2b852ed9.chunk.js.map