import{h as n,j as c,v as i,U as p,P as m}from"./index.0d7c8eb8.js";import{e as d,o as r,c as o,n as t,u as s,g as l,P as y,t as u,G as h,b as v,v as f}from"../app.c22c6c8c.js";const S=n({header:{type:String,default:""},bodyStyle:{type:c([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=d({name:"ElCard"}),w=d({...b,props:S,setup(k){const a=i("card");return(e,C)=>(r(),o("div",{class:t([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),o("div",{key:0,class:t(s(a).e("header"))},[l(e.$slots,"header",{},()=>[y(u(e.header),1)])],2)):h("v-if",!0),v("div",{class:t(s(a).e("body")),style:f(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var g=m(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const B=p(g);export{B as N,S};
