import{e as f,j as p,f as v,o as s,c as n,M as h,X as b,F as P,b as a,D as w,E as g,P as k,d as S,u as r}from"../app.f47f61a8.js";import{F as C,b as E,j as V,C as z}from"./index-9f785207.e6578421.js";const F={class:"epic-attribute-view"},I={key:0},N={class:"attr-item"},j=["title"],B={class:"attr-input"},x=f({__name:"styleView",setup(D){const i=p("designer"),c=p("pageSchema"),d=[{label:"\u5BBD\u5EA6",type:"EInputSize",field:"componentProps.style.width"},{label:"\u9AD8\u5EA6",type:"EInputSize",field:"componentProps.style.height"},{label:"\u5185\u8FB9\u8DDD",type:"EInputSize",field:"componentProps.style.padding"},{label:"\u5916\u8FB9\u8DDD",type:"EInputSize",field:"componentProps.style.margin"},{label:"\u80CC\u666F\u8272",type:"color-picker",field:"componentProps.style.backgroundColor",componentProps:{type:"color",style:{}}},{label:"\u5B57\u4F53\u989C\u8272",type:"color-picker",field:"componentProps.style.color",componentProps:{type:"color",style:{}}}],l=v(()=>i.state.checkedNode);function m(t){var e;var o;return typeof t.show=="boolean"?t.show:(e=(o=t.show)==null?void 0:o.call(t,{values:l.value}))!=null?e:!0}function u(t,o){V(t,o,l.value),z.push(c.schemas,"\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027")}return(t,o)=>(s(),n("aside",F,[l.value?(s(),n("div",I,[(s(),n(h,null,b(d,e=>a("div",{key:e.field+l.value.id},[w(a("div",N,[a("div",{class:"attr-label",title:e.label},k(e.label),9,j),a("div",B,[S(r(E),{record:{...e,componentProps:{...e.componentProps},show:!0,noFormItem:!0},"model-value":r(C)(e.field,l.value),"onUpdate:modelValue":y=>u(y,e.field)},null,8,["record","model-value","onUpdate:modelValue"])])],512),[[g,m(e)]])])),64))])):P("",!0)]))}});export{x as default};