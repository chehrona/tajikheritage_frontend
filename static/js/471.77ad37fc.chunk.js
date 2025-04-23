"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[471],{8471:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var n=a(5043),r=a(215),o=a(7683),s=a(2754),i=a(4649),c=a(1529);const l=c.Ay.div`
    min-height: 100svh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,d=(c.Ay.img`
    height: 20rem;
`,c.Ay.div`
    color: var(--primary-white-color);
    margin: 0% 0% 5% 0%;
    font-size: var(--header-medium);
    position: absolute;
    top: 10%;
    z-index: 10;
    font-family: var(--fancy-font);
`);var h=a(579);const g=t=>{let{page:e}=t;const{lang:a}=(0,r.X)();return(0,o.J)(e,"landing",""),(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(i.A,{inProp:!0}),(0,h.jsx)(l,{children:(0,h.jsx)(d,{children:s.UV[a]})})]})}},7683:(t,e,a)=>{a.d(e,{J:()=>i});var n=a(5043),r=a(215),o=a(910),s=a(2754);const i=(t,e,a)=>{const{title:i,setTitle:c}=(0,r.X)(),l="landing"===e?t:t.substring(0,t.indexOf("/")),d="middle"===e?t.substring(t.indexOf("_")+1):t.substring(t.indexOf("/")+1,t.length-1);(0,n.useEffect)((()=>{"reset"===t?c(s.El):(async()=>{try{const t=await(0,o.DL)(l);let a={...i};"landing"===e?h(a,t):g(a,t),c(a)}catch(t){c(s.El)}})()}),[t,a]);const h=(t,e)=>{const{header:a}=e;for(const n in i){const e=n;let r=[...i[e]];const o=[`${a[e].toUpperCase()}`,""];r[1]=o,t[e]=r}},g=(t,n)=>{const{header:r,sections:o}=n;null===o||void 0===o||o.forEach((n=>{const{link:o,cardTitle:s}=n;if(o===d)for(const c in i){const n=c;let o=[...i[n]],l=[];l="middle"===e?[`${r[n].toUpperCase()}`,`${void 0!==s[n]?s[n]:""}`]:[`${s[n].toUpperCase()}`,`${void 0!==(null===a||void 0===a?void 0:a.name[n])?null===a||void 0===a?void 0:a.name[n]:""}`],o[1]=l,t[n]=o}}))}}},910:(t,e,a)=>{a.d(e,{AN:()=>h,uu:()=>c,Gg:()=>i,DL:()=>s,c1:()=>d,X6:()=>l});var n=a(6213);const r=t=>{let e=null;return localStorage.getItem("th_Id")?e=localStorage.getItem("th_Id"):(e=t+"_"+Math.random().toString(36).substring(2,9),localStorage.setItem("th_Id",e)),e},o="https://api.thetajikheritage.com",s=async t=>{t||(t="");try{const e=r(t);return(await n.A.get(`${o}/${t}`,{params:{page:t,userId:e}})).data}catch(e){throw e}},i=async t=>{try{const e=r(t);return(await n.A.get(`${o}/${t}`,{params:{userId:e,page:t}})).data}catch(e){throw e}},c=async(t,e)=>{try{const a=r(`${e}${t}`);return(await n.A.get(`${o}/${e}`,{params:{id:t,page:`${e}/${t}`,userId:a}})).data}catch(a){throw a}},l=async t=>{console.log(t,"value");try{return(await n.A.get(`${o}/language/all_etymology`,{params:{value:t}})).data}catch(e){throw e}},d=async t=>{try{const e=await n.A.get(`${o+t}`,{responseType:"arraybuffer"}),a=new Blob([e.data],{type:"application/pdf"});return URL.createObjectURL(a)}catch(e){throw e}},h=async t=>{try{return await n.A.post(`${o}/email`,{info:t})}catch(e){throw e}}}}]);
//# sourceMappingURL=471.77ad37fc.chunk.js.map