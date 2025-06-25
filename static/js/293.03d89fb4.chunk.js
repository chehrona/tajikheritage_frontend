"use strict";(self.webpackChunktajikheritage_frontend_ts=self.webpackChunktajikheritage_frontend_ts||[]).push([[293],{4293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var i=n(5043),r=n(9657),a=n(3216),s=n(215),l=n(7683),o=n(4946),d=n(910),c=n(5452),h=n(5260),g=n(8546),m=n(4952),x=n(8044),u=n(8880),p=n(8072),f=n(9968),v=n(579);const j=e=>{let{signs:t,setIndex:n,setShowSignInfo:r}=e;const[a,s]=(0,i.useState)(window.innerHeight/1.15);(0,i.useEffect)((()=>{const e=()=>s(window.innerHeight/1.15);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const l=a/2,o=a/2,d=a/2,c=.35*d,h=.9*d,g=h-1,m=e=>e*Math.PI/180,x=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d;const i=t-e<=180?"0":"1";return{x1:l+n*Math.cos(m(e)),y1:o+n*Math.sin(m(e)),x2:l+n*Math.cos(m(t)),y2:o+n*Math.sin(m(t)),largeArcFlag:i}},u=(e,t,n,i)=>{const{x1:r,y1:a,x2:s,y2:l,largeArcFlag:o}=x(e,t,n),{x1:d,y1:c,x2:h,y2:g}=x(e,t,i);return[`M ${r} ${a}`,`A ${n} ${n} 0 ${o} 1 ${s} ${l}`,`L ${h} ${g}`,`A ${i} ${i} 0 ${o} 0 ${d} ${c}`,"Z"].join(" ")};return(0,v.jsxs)(f.ch,{viewBox:`0 0 ${a} ${a}`,$size:a,children:[(0,v.jsx)(f.ZG,{href:"/customAssets/calendar/m\u016bljar.png",x:l-c,y:o-c,width:2*c,height:2*c,transform:`rotate(90, ${l}, ${o})`}),(0,v.jsx)("defs",{children:t.map(((e,t)=>{const n=30*t+.125,i=30*(t+1)-.125,r=`clip-${t}`;return(0,v.jsx)("clipPath",{id:r,children:(0,v.jsx)("path",{d:u(n,i,d,c)})},r)}))}),p.MULCHAR_CHART_IMGS.map(((e,i)=>{const s=30*i,x=30*(i+1),p=s+.125,j=x-.125,y=m((p+j)/2),w=15*Math.cos(y),$=15*Math.sin(y),A=a/6.5,M=(c+d)/2.05,b=l+M*Math.cos(y),k=o+M*Math.sin(y),S=b-A/2,_=k-A/1.5,C=a/21,I=(Math.cos(y),Math.sin(y),d-17),L=l+I*Math.cos(m(s)),H=o+I*Math.sin(m(s)),R=l+I*Math.cos(m(x)),z=o+I*Math.sin(m(x)),E=`textPath-${i}`;return(0,v.jsxs)(f.MJ,{onClick:()=>(e=>{n(e),r(!0)})(i),x:w,y:$,cx:l,cy:o,children:[(0,v.jsx)("path",{d:u(s,x,d,c),fill:"var(--primary-gold-color)"}),(0,v.jsx)("path",{d:u(p,j,g,c),fill:"var(--primary-black-color)"}),(0,v.jsx)("path",{d:u(p,j,h,d),fill:"var(--primary-black-color)"}),(0,v.jsx)("image",{href:"https://api.thetajikheritage.com"+e.img.src,x:S,y:_,width:A,height:A,transform:`rotate(${e.img.angle}, ${b}, ${k})`}),(0,v.jsx)("defs",{children:(0,v.jsx)("path",{id:E,d:`\n                        M ${L} ${H} \n                        A ${I} ${I} 0 0 1 ${R} ${z}\n                    `,fill:"none"})}),(0,v.jsx)(f.Ue,{fill:"var(--primary-gold-color)",textAnchor:"middle",children:(0,v.jsx)("textPath",{href:`#${E}`,startOffset:"50%",dominantBaseline:"middle",children:t[i].info.title})})]},i)}))]})};var y=n(7644),w=n(1529),$=n(8564);const A=w.Ay.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: var(--text-segment-gap);
`,M=w.Ay.div`
    height: 3.5rem;
    width: 20rem;
    background: url('/customAssets/mulchar.svg') center no-repeat;
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
`,b=w.Ay.input`
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
`,_=(0,w.Ay)($.Y7)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${"/customAssets/noise.webp"});
    background-color: var(--primary-black-color);
    padding: var(--text-segment-gap);
`,C=w.Ay.div`
    width: 100%;
    padding-bottom: var(--text-segment-gap);
    font-size: var(--header-normal);
    color: var(--primary-white-color);
    font-weight: 500;
`,I=w.Ay.div`
    font-size: 5rem;
    color: var(--primary-white-color);
`,L=w.Ay.img`
    width: 100%;
    height: 100%;
`,H=e=>{var t,n,r;let{signs:a}=e;const{lang:l}=(0,s.Xe)(),[o,d]=(0,i.useState)(""),[c,h]=(0,i.useState)(null);return(0,v.jsxs)(A,{children:[(0,v.jsx)(M,{children:(0,v.jsx)(b,{name:"muljar_year",id:"muljar_year",value:o,onChange:e=>{const t=e.target.value;if(!/^\d{4}$/.test(t))return d(t),void h(null);const n=(parseInt(t)-16)%12;d(t),h(n)},placeholder:p.MULCHAR_CALC_PLACEHOLDER[l]})}),(0,v.jsx)(k,{children:(0,v.jsxs)(S,{$flip:null!==c&&c>=0&&c<a.length&&o.length>0,children:[(0,v.jsx)(_,{$back:!0,children:null!==c&&c>=0&&c<a.length&&o.length>0?(0,v.jsxs)(i.Fragment,{children:[(0,v.jsx)(C,{children:a[c].info.title}),(0,v.jsx)(L,{src:`https://api.thetajikheritage.com${null===(t=p.MULCHAR_CHART_IMGS[c])||void 0===t||null===(n=t.img)||void 0===n?void 0:n.src}`,alt:null===(r=a[c])||void 0===r?void 0:r.id})]}):null}),(0,v.jsx)(_,{$back:!1,children:(0,v.jsx)(I,{children:"?"})})]})})]})},R=w.Ay.div`
    position: relative;
    height: 98svh;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: var(--text-segment-gap) 0rem;
`,z=w.Ay.div`
    transform: rotateZ(-90deg);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,E=e=>{let{page:t}=e;const{pathname:n}=(0,a.zy)(),{showToast:p}=(0,o.Y)(),{lang:f}=(0,s.Xe)(),[w,$]=(0,i.useState)(),[A,M]=(0,i.useState)(null),[b,k]=(0,i.useState)(!1),[S,_]=(0,i.useState)(0),C=(0,r.Ub)({query:"(min-device-width: 481px) and (max-device-width: 1024px)"})?2.5:4;return(0,l.J)(t,"generic",w),(0,i.useEffect)((()=>{(async()=>{try{const e=await(0,d.uu)("m\u016bljar",t);$(e)}catch(A){const n=A;404===n.status?M(404):500===n.status&&p("E_500","error",t)}})()}),[n]),(0,v.jsxs)(i.Fragment,{children:[404===A?(0,v.jsx)(c.default,{}):null,(0,v.jsx)(h.A,{children:(0,v.jsx)(x.A,{children:w?(0,v.jsxs)(u.A,{children:[w.desc[f].map(((e,t)=>(0,v.jsxs)(i.Fragment,{children:[(0,v.jsx)(g.A,{i:t,reverse:t%2>0,data:e,title:w.name[f],topLeftRad:C},`${null===w||void 0===w?void 0:w.name[f]}_${t}`),e.signs?(0,v.jsxs)(R,{children:[(0,v.jsx)(z,{children:(0,v.jsx)(j,{signs:e.signs,setIndex:_,setShowSignInfo:k})}),(0,v.jsx)(y.A,{signInfo:e.signs[S],setShowSignInfo:k,calendar:"MULCHAR_CHART_IMGS",showSignInfo:b,index:S})]}):null,e.predict?(0,v.jsx)(H,{signs:w.desc[f][1].signs}):null]},t))),(0,v.jsx)(m.A,{data:w.references[f]})]}):null})})]})}}}]);
//# sourceMappingURL=293.03d89fb4.chunk.js.map