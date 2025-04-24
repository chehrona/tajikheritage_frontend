"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[452],{5452:(t,e,r)=>{r.r(e),r.d(e,{default:()=>g});r(5043);var a=r(215),n=r(7683),o=r(4330),i=r(4319),s=r(1529);const c=s.Ay.div`
    width: 100%;
    height: calc(100svh - var(--header-height));
    background-image: url('/customAssets/error-grid-1.png');
    background-size: calc(100vw / 4);
    background-repeat: repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        background-size: calc(100vw / 3);
    }
`,d=s.Ay.div`
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
`,l=s.Ay.div`
    font-size: 5rem;
    font-family: var(--blocky-font);
    color: var(--primary-red-color);

    @media (max-width: 480px) {
        font-size: var(--header-large);
    }
`,h=s.Ay.div`
    font-size: 1.5rem;
    font-family: var(--fancy-font);
    color: var(--primary-white-color);

    @media (max-width: 480px) {
        font-size: var(--header-normal);
    }
`;var u=r(579);const g=()=>{const{lang:t}=(0,a.X)();return(0,n.J)("reset"),(0,u.jsx)(i.A,{children:(0,u.jsx)(c,{children:(0,u.jsxs)(d,{children:[(0,u.jsx)(l,{children:"404"}),(0,u.jsx)(h,{children:o.PAGE_NOT_FOUND[t]})]})})})}},7683:(t,e,r)=>{r.d(e,{J:()=>s});var a=r(5043),n=r(215),o=r(910),i=r(2754);const s=(t,e,r)=>{const{title:s,setTitle:c}=(0,n.X)(),d="landing"===e?t:t.substring(0,t.indexOf("/")),l="middle"===e?t.substring(t.indexOf("_")+1):t.substring(t.indexOf("/")+1,t.length-1);(0,a.useEffect)((()=>{"reset"===t?c(i.El):(async()=>{try{const t=await(0,o.DL)(d);let r={...s};"landing"===e?h(r,t):u(r,t),c(r)}catch(t){c(i.El)}})()}),[t,r]);const h=(t,e)=>{const{header:r}=e;for(const a in s){const e=a;let n=[...s[e]];const o=[`${r[e].toUpperCase()}`,""];n[1]=o,t[e]=n}},u=(t,a)=>{const{header:n,sections:o}=a;null===o||void 0===o||o.forEach((a=>{const{link:o,cardTitle:i}=a;if(o===l)for(const c in s){const a=c;let o=[...s[a]],d=[];d="middle"===e?[`${n[a].toUpperCase()}`,`${void 0!==i[a]?i[a]:""}`]:[`${i[a].toUpperCase()}`,`${void 0!==(null===r||void 0===r?void 0:r.name[a])?null===r||void 0===r?void 0:r.name[a]:""}`],o[1]=d,t[a]=o}}))}}},910:(t,e,r)=>{r.d(e,{AN:()=>l,uu:()=>c,Gg:()=>s,DL:()=>i,c1:()=>d});var a=r(6213);const n=t=>{let e=null;return localStorage.getItem("th_Id")?e=localStorage.getItem("th_Id"):(e=t+"_"+Math.random().toString(36).substring(2,9),localStorage.setItem("th_Id",e)),e},o="https://api.thetajikheritage.com",i=async t=>{t||(t="");try{const e=n(t);return(await a.A.get(`${o}/${t}`,{params:{page:t,userId:e}})).data}catch(e){throw e}},s=async t=>{try{const e=n(t);return(await a.A.get(`${o}/${t}`,{params:{userId:e,page:t}})).data}catch(e){throw e}},c=async(t,e)=>{try{const r=n(`${e}${t}`);return(await a.A.get(`${o}/${e}`,{params:{id:t,page:`${e}/${t}`,userId:r}})).data}catch(r){throw r}},d=async t=>{try{const e=await a.A.get(`${o+t}`,{responseType:"arraybuffer"}),r=new Blob([e.data],{type:"application/pdf"});return URL.createObjectURL(r)}catch(e){throw e}},l=async t=>{try{return await a.A.post(`${o}/email`,{info:t})}catch(e){throw e}}},4330:t=>{t.exports=JSON.parse('{"WORDS_NOT_FOUND":{"tj":"\u042f\u0433\u043e\u043d \u043a\u0430\u043b\u0438\u043c\u0430 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","ru":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","us":"No words found","fa":"\u06cc\u06af\u0627\u0646 \u06a9\u0644\u0645\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"SEARCH_NOT_FOUND":{"us":"No items match your search","ru":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","tj":"\u0410\u0437 \u0440\u04ef\u0438 \u0434\u0430\u0440\u0445\u043e\u0441\u0442\u0438 \u0448\u0443\u043c\u043e \u0447\u0438\u0437\u0435 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0627\u0632 \u0631\u0648\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u06cc \u0634\u0645\u0627 \u0686\u06cc\u0632\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"ARTICLE_UNAVAILABLE":{"us":"Article is not available yet","ru":"\u0421\u0442\u0430\u0442\u044c\u044f \u0435\u0449\u0435 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430","tj":"\u041c\u0430\u049b\u043e\u043b\u0430 \u04b3\u0430\u043d\u04ef\u0437 \u0432\u0443\u04b7\u0443\u0434 \u043d\u0430\u0434\u043e\u0440\u0430\u0434","fa":"\u0645\u0642\u0627\u0644\u0647 \u0647\u0646\u0648\u0632 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f"},"PAGE_NOT_FOUND":{"us":"Page not found","ru":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430","tj":"\u0421\u0430\u04b3\u0438\u0444\u0430 \u0451\u0444\u0442 \u043d\u0430\u0448\u0443\u0434","fa":"\u0635\u062d\u06cc\u0641\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},"E_500":{"us":"Internal server error","ru":"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430","tj":"\u0425\u0430\u0442\u043e\u0433\u04e3 \u0431\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0438 \u0434\u043e\u0445\u0438\u043b\u04e3","fa":"\u062e\u0637\u0627\u06af\u06cc \u0628\u0627 \u0633\u0631\u0648\u0631\u06cc \u062f\u0627\u062e\u0644\u06cc"}}')}}]);
//# sourceMappingURL=452.fe4f06c5.chunk.js.map