import{cq as b,cr as h}from"./index.448dc4fe.js";import{m as k}from"./icon.vue_vue_type_script_setup_true_lang-3f9e4127.c7ab9899.js";import{i as y,m as g,o,c as n,S as N,a8 as U,d as u,e as s,u as m,C as B}from"../app.40ba1749.js";const E={key:0,class:"del-btn"},_=["onClick"],A=y({__name:"index",props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(i,{emit:r}){const c=b.getComponent("input"),p=i,v=r,l=g({get(){return p.modelValue},set(e){v("update:modelValue",e)}});function f(){const e={label:"\u6807\u7B7E\u9875",type:"tab-pane",children:[],id:h()};l.value.push(e)}function V(e){l.value=l.value.filter((C,a)=>e!==a)}return(e,C)=>(o(),n("div",null,[(o(!0),n(N,null,U(l.value,(a,d)=>(o(),n("div",{key:d,class:"EColEditor-item"},[s(m(c),{value:a.label,"onUpdate:value":t=>a.label=t,modelValue:a.label,"onUpdate:modelValue":t=>a.label=t,style:{width:"100%"}},null,8,["value","onUpdate:value","modelValue","onUpdate:modelValue"]),l.value.length>1?(o(),n("div",E,[u("span",{onClick:t=>V(d)},[s(m(k),{name:"icon-shanchu"})],8,_)])):B("",!0)]))),128)),u("div",{class:"add-btn",onClick:f}," \u6DFB\u52A0 ")]))}});export{A as default};
