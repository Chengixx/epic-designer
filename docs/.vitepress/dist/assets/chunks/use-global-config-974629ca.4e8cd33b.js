import{v as z,ax as x,aG as I,aq as g,bG as d}from"./index.0d7c8eb8.js";import{K as y,Y as b,I as k,F as C,N as E}from"./index-bbbf8f32.66a4d34d.js";import{r as G,C as m,k as S,f as a,u as i,p as j}from"../app.c22c6c8c.js";const f=Symbol(),t=G();function p(u,l=void 0){const n=m()?S(f,t):t;return u?a(()=>{var o,r;return(r=(o=n.value)==null?void 0:o[u])!=null?r:l}):n}function N(u,l){const n=p(),o=z(u,a(()=>{var e;return((e=n.value)==null?void 0:e.namespace)||x})),r=y(a(()=>{var e;return(e=n.value)==null?void 0:e.locale})),v=b(a(()=>{var e;return((e=n.value)==null?void 0:e.zIndex)||k})),s=a(()=>{var e;return i(l)||((e=n.value)==null?void 0:e.size)||""});return q(a(()=>i(n)||{})),{ns:o,locale:r,zIndex:v,size:s}}const q=(u,l,n=!1)=>{var o;const r=!!m(),v=r?p():void 0,s=(o=l==null?void 0:l.provide)!=null?o:r?j:void 0;if(!s)return;const e=a(()=>{const c=i(u);return v!=null&&v.value?w(v.value,c):c});return s(f,e),s(C,a(()=>e.value.locale)),s(I,a(()=>e.value.namespace)),s(E,a(()=>e.value.zIndex)),s(g,{size:a(()=>e.value.size||"")}),(n||!t.value)&&(t.value=e.value),e},w=(u,l)=>{var n;const o=[...new Set([...d(u),...d(l)])],r={};for(const v of o)r[v]=(n=l[v])!=null?n:u[v];return r};export{N as D,p as g,q as k,f as p};
