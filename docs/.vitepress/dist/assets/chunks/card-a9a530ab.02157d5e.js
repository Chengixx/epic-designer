import{N as u}from"./index-cc08fc26.fc3bf8bc.js";import"./index.0d7c8eb8.js";import{e as c,g as r,R as i}from"../app.c22c6c8c.js";const g=c({props:{record:{type:Object,required:!0,default:()=>({})}},setup(o,{attrs:f,slots:e}){return()=>{var n,s;var l;const t={...o.record,header:(n=(l=o.record)==null?void 0:l.label)!=null?n:""},a=(s=t.children)!=null?s:[];delete t.children;let d=null;return a.length?d=()=>a.map(p=>r(e,"node",{record:p})):d=()=>[r(e,"default")],i(u,t,{default:()=>r(e,"edit-node",{},d),header:()=>r(e,"header")})}}});export{g as default};