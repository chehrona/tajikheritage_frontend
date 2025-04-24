"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[408],{3408:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var r=i(5043),n=i(9657),a=i(3216),s=i(215),l=i(7683),o=i(4946),d=i(910),h=i(5452),c=i(5260),g=i(4414),m=i(4952),x=i(8044),u=i(8880),p=i(8072),f=i(9968),v=i(579);const j=e=>{let{signs:t,setIndex:i,setShowSignInfo:n}=e;const[a,s]=(0,r.useState)(window.innerHeight/1.15);(0,r.useEffect)((()=>{const e=()=>s(window.innerHeight/1.15);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const l=a/2,o=a/2,d=a/2,h=.35*d,c=.9*d,g=c-1,m=.48*d,x=m-1,u=e=>e*Math.PI/180,j=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d;const r=t-e<=180?"0":"1";return{x1:l+i*Math.cos(u(e)),y1:o+i*Math.sin(u(e)),x2:l+i*Math.cos(u(t)),y2:o+i*Math.sin(u(t)),largeArcFlag:r}},y=(e,t,i,r)=>{const{x1:n,y1:a,x2:s,y2:l,largeArcFlag:o}=j(e,t,i),{x1:d,y1:h,x2:c,y2:g}=j(e,t,r);return[`M ${n} ${a}`,`A ${i} ${i} 0 ${o} 1 ${s} ${l}`,`L ${c} ${g}`,`A ${r} ${r} 0 ${o} 0 ${d} ${h}`,"Z"].join(" ")};return(0,v.jsxs)(f.ch,{viewBox:`0 0 ${a} ${a}`,$size:a,children:[(0,v.jsx)(f.ZG,{href:"/customAssets/calendar/zodiac.png",x:l-h,y:o-h,width:2*h,height:2*h,transform:`rotate(90, ${l}, ${o})`}),(0,v.jsx)("defs",{children:t.map(((e,t)=>{const i=30*t+.125,r=30*(t+1)-.125,n=`clip-${t}`;return(0,v.jsx)("clipPath",{id:n,children:(0,v.jsx)("path",{d:y(i,r,d,h)})},n)}))}),p.ZODIAC_CHART_IMGS.map(((e,r)=>{const s=30*r,p=30*(r+1),j=s+.125,w=p-.125,$=u((j+w)/2),A=15*Math.cos($),b=15*Math.sin($),M=a/6.5,k=(h+d)/2,S=l+k*Math.cos($),I=o+k*Math.sin($),_=S-M/2,z=I-M/1.5,C=a/21,H=l+k/1.575*Math.cos($),E=o+k/1.575*Math.sin($),F=H-C/2,L=E-C/3,R=d-17,Z=l+R*Math.cos(u(s)),G=o+R*Math.sin(u(s)),P=l+R*Math.cos(u(p)),T=o+R*Math.sin(u(p)),Y=`textPath-${r}`;return(0,v.jsxs)(f.MJ,{onClick:()=>(e=>{i(e),n(!0)})(r),x:A,y:b,cx:l,cy:o,children:[(0,v.jsx)("path",{d:y(s,p,d,h),fill:"var(--primary-gold-color)"}),(0,v.jsx)("path",{d:y(j,w,x,h),fill:"var(--primary-blue-color)"}),(0,v.jsx)("path",{d:y(j,w,g,m),fill:"var(--primary-blue-color)"}),(0,v.jsx)("path",{d:y(j,w,g,m),fill:"var(--primary-blue-color)"}),(0,v.jsx)("path",{d:y(j,w,d,c),fill:"var(--primary-blue-color)"}),(0,v.jsx)("image",{href:"https://api.thetajikheritage.com"+e.img.src,x:_,y:z,width:M,height:M,transform:`rotate(${e.img.angle}, ${S}, ${I})`}),(0,v.jsx)("image",{href:"https://api.thetajikheritage.com"+e.img.icon,x:F,y:L,width:C,height:C,transform:`rotate(${105+30*r}, ${H}, ${E})`}),(0,v.jsx)("defs",{children:(0,v.jsx)("path",{id:Y,d:`\n                        M ${Z} ${G} \n                        A ${R} ${R} 0 0 1 ${P} ${T}\n                    `,fill:"none"})}),(0,v.jsx)(f.Ue,{fill:"var(--primary-gold-color)",textAnchor:"middle",children:(0,v.jsx)("textPath",{href:`#${Y}`,startOffset:"50%",dominantBaseline:"middle",children:t[r].info.title})})]},r)}))]})};var y=i(7644),w=i(1529),$=i(8564);const A=w.Ay.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: var(--text-segment-gap);
`,b=w.Ay.div`
    height: 3.5rem;
    width: 20rem;
    background: url('/customAssets/mulchar.png') center no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: var(--text-segment-gap);

    @media (max-width: 480px) {
        /* width: 100%;
        height: 3rem; */
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        /* width: 35rem;
        height: 4rem; */
    }
`,M=w.Ay.input`
    outline: none;
    border: none;
    width: 12rem;
    height: 3.4rem;
    font-size: var(--header-small);
    background-color: transparent;
    font-family: var(--regular-font);
`,k=w.Ay.div`
    width: 15rem;
    height: 18rem;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: transparent;
    perspective: 62.5rem;
    border-radius: var(--small-radius);
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
    margin-top: var(--text-segment-gap);

    @media (max-width: 480px) {
        width: var(--small-card-width);
        height: var(--small-card-height);
    }
`,S=w.Ay.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: ${e=>{let{$flip:t}=e;return t?"rotateY(180deg)":"rotateY(0deg)"}};
    transition: transform 0.8s;
    transform-style: preserve-3d;
`,I=(0,w.Ay)($.Y7)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${"/customAssets/noise.png"});
    background-color: var(--primary-black-color);
    padding: var(--text-segment-gap);
`,_=w.Ay.div`
    width: 100%;
    padding-bottom: var(--text-segment-gap);
    font-size: var(--header-normal);
    color: var(--primary-white-color);
    font-weight: 500;
`,z=w.Ay.div`
    font-size: 5rem;
    color: var(--primary-white-color);
`,C=w.Ay.img`
    width: 100%;
    height: 100%;
`,H=e=>{var t,i,n;let{signs:a}=e;const[s,l]=(0,r.useState)(""),[o,d]=(0,r.useState)(null);return(0,v.jsxs)(A,{children:[(0,v.jsx)(b,{children:(0,v.jsx)(M,{name:"muljar_year",id:"muljar_year",value:s,onChange:e=>{const t=e.target.value;if(!/^\d{4}$/.test(t))return l(t),void d(null);const i=(parseInt(t)-16)%12;l(t),d(i)}})}),(0,v.jsx)(k,{children:(0,v.jsxs)(S,{$flip:null!==o&&o>=0&&o<a.length&&s.length>0,children:[(0,v.jsx)(I,{$back:!0,children:null!==o&&o>=0&&o<a.length&&s.length>0?(0,v.jsxs)(r.Fragment,{children:[(0,v.jsx)(_,{children:a[o].info.title}),(0,v.jsx)(C,{src:`https://api.thetajikheritage.com${null===(t=p.MULCHAR_CHART_IMGS[o])||void 0===t||null===(i=t.img)||void 0===i?void 0:i.src}`,alt:null===(n=a[o])||void 0===n?void 0:n.id})]}):null}),(0,v.jsx)(I,{$back:!1,children:(0,v.jsx)(z,{children:"?"})})]})})]})},E=w.Ay.div`
    position: relative;
    height: 100svh;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: calc(2 * var(--text-segment-gap)) 0rem var(--text-segment-gap) 0rem;
`,F=w.Ay.div`
    transform: rotateZ(-90deg);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,L=e=>{let{page:t}=e;const{pathname:i}=(0,a.zy)(),{showToast:p}=(0,o.Y)(),{lang:f}=(0,s.Xe)(),[w,$]=(0,r.useState)(),[A,b]=(0,r.useState)(null),[M,k]=(0,r.useState)(!1),[S,I]=(0,r.useState)(0),_=(0,n.Ub)({query:"(min-device-width: 481px) and (max-device-width: 1024px)"})?2.5:4;return(0,l.J)(t,"generic",w),(0,r.useEffect)((()=>{(async()=>{try{const e=await(0,d.uu)("burj-i duv\u0101zdahg\u0101na",t);$(e)}catch(A){const i=A;404===i.status?b(404):500===i.status&&p("E_500","error",t)}})()}),[i]),(0,v.jsxs)(r.Fragment,{children:[404===A?(0,v.jsx)(h.default,{}):null,(0,v.jsx)(c.A,{children:(0,v.jsx)(x.A,{children:w?(0,v.jsxs)(u.A,{children:[w.desc[f].map(((e,t)=>(0,v.jsxs)(r.Fragment,{children:[(0,v.jsx)(g.A,{i:t,reverse:t%2>0,data:e,title:w.name[f],topLeftRad:_},`${null===w||void 0===w?void 0:w.name[f]}_${t}`),e.signs?(0,v.jsxs)(E,{children:[(0,v.jsx)(F,{children:(0,v.jsx)(j,{signs:e.signs,setIndex:I,setShowSignInfo:k})}),(0,v.jsx)(y.A,{signInfo:e.signs[S],setShowSignInfo:k,calendar:"ZODIAC_CHART_IMGS",showSignInfo:M,index:S})]}):null,e.predict?(0,v.jsx)(H,{signs:w.desc[f][1].signs}):null]},t))),(0,v.jsx)(m.A,{data:w.references[f]})]}):null})})]})}}}]);
//# sourceMappingURL=408.10683eef.chunk.js.map