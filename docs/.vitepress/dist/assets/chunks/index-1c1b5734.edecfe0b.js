import{e as D,k,r as C,f as y,o as d,c as m,b as t,d as r,s as V,u as n,N as E,Y as F,t as w,m as L,E as M,F as P,n as j}from"../app.c22c6c8c.js";import{R as q}from"./vuedraggable.umd-6a5b6da9.404cbac1.js";import{M as N,t as B,r as z,I as G}from"./index.0d7c8eb8.js";import{p as _}from"./icon.vue_vue_type_script_setup_true_lang-cc078b52.fc49277e.js";import"./commonjsHelpers-c5d32002.490f5bf3.js";const H={class:"epic-component-view flex flex-col"},J={class:"search-box px-10px py-6px"},K={class:"flex flex-1 overflow-auto"},O={class:"tabs-box"},Q=["title","onClick"],T={class:"h-full flex-1 overflow-auto py-2 box-border"},Y=["onClick"],$={class:"text-center pt-42px text-gray-400"},ae=D({__name:"index",setup(A){const I=N.getComponent("input"),p=k("pageSchema"),v=k("designer"),f=N.getSchemaByGroup(),o=C(""),h={title:"\u5168\u90E8",list:[]},c=C(h),S=y(()=>[h,...f.value]),u=y(()=>{let a=c.value.list;if(c.value.title==="\u5168\u90E8"){const l=f.value.map(e=>e.list);a=[].concat(...l)}return o.value?a.filter(l=>{var e;return(e=l.label)==null?void 0:e.includes(o.value)}):a});function R(a){c.value=a}function U(a){var b;var l;const e=z(p.schemas,(b=(l=v.state.checkedNode)==null?void 0:l.id)!=null?b:"root");if(!e)return!1;let{list:s,schema:i,index:x}=e;i.children&&!i.childImmovable&&(s=i.children,x=i.children.length-1);const g=B(a);s.splice(x+1,0,g),v.setCheckedNode(g),G.push(p.schemas,"\u63D2\u5165\u7EC4\u4EF6")}return(a,l)=>(d(),m("div",H,[t("div",J,[r(n(I),{placeholder:"\u641C\u7D22\u7EC4\u4EF6",modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e),clearable:"",allowClear:"",value:o.value,"onUpdate:value":l[1]||(l[1]=e=>o.value=e)},{prefix:V(()=>[r(n(_),{name:"icon-chaxun"})]),_:1},8,["modelValue","value"])]),t("div",K,[t("div",O,[(d(!0),m(E,null,F(S.value,(e,s)=>(d(),m("div",{class:j(["tab cursor-pointer truncate",{checked:c.value.title===e.title}]),key:s,title:e.title,onClick:i=>R(e)},w(e.title),11,Q))),128))]),t("div",T,[r(n(q),L({modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=e=>u.value=e)},{group:{name:"edit-draggable",pull:"clone",put:!1},sort:!1,animation:180,ghostClass:"moving"},{clone:n(B),"item-key":"id",class:"grid grid-cols-[auto_auto] px-10px gap-2"}),{item:V(({element:e})=>[t("div",{class:"source-componet-item flex items-center truncate",onClick:s=>U(e)},[r(n(_),{name:e.icon},null,8,["name"]),t("div",null,w(e.label),1)],8,Y)]),_:1},16,["modelValue","clone"]),M(t("div",$,"\u6CA1\u6709\u67E5\u8BE2\u5230\u7684\u7EC4\u4EF6",512),[[P,!u.value.length]])])])]))}});export{ae as default};
