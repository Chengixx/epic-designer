import{T as i}from"./index-a247dabc.7fe89fba.js";import"./index.4abc0d1b.js";import{g as p,R as s,i as n}from"../app.db33cb3d.js";import"./constants-669e1a5f.1c19f570.js";const b=p({props:{record:{type:Object,required:!0,default:()=>({})}},setup(r,{attrs:c,slots:t}){return()=>{var d;var o;const e={...r.record,title:(o=r.record)==null?void 0:o.label},l=(d=e.children)!=null?d:[];return delete e.children,s(i,e,{default:()=>n(t,"edit-node",{},()=>l.map(a=>n(t,"node",{record:a})))})}}});export{b as default};