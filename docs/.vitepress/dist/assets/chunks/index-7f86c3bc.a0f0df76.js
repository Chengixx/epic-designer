import{M as k,X as C}from"./index.0d7c8eb8.js";import{p as h}from"./icon.vue_vue_type_script_setup_true_lang-cc078b52.fc49277e.js";import{e as y,f as b,o as t,c as l,N as P,Y as g,b as p,d,u as m,G as B}from"../app.c22c6c8c.js";const E={key:0,class:"del-btn"},N=["onClick"],M=y({__name:"index",props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(u,{emit:r}){const c=u,i=k.getComponent("number"),a=b({get(){return c.modelValue},set(e){r("update:modelValue",e)}});function v(){const e={type:"col",children:[],componentProps:{span:12},id:C()};a.value.push(e)}function f(e){a.value=a.value.filter((V,o)=>e!==o)}return(e,V)=>(t(),l("div",null,[(t(!0),l(P,null,g(a.value,(o,s)=>(t(),l("div",{key:s,class:"EColEditor-item"},[d(m(i),{value:o.componentProps.span,"onUpdate:value":n=>o.componentProps.span=n,modelValue:o.componentProps.span,"onUpdate:modelValue":n=>o.componentProps.span=n,style:{width:"100%"},min:1,max:24},null,8,["value","onUpdate:value","modelValue","onUpdate:modelValue"]),a.value.length>1?(t(),l("div",E,[p("span",{onClick:n=>f(s)},[d(m(h),{name:"icon-shanchu"})],8,N)])):B("",!0)]))),128)),p("div",{class:"add-btn",onClick:v}," \u6DFB\u52A0 ")]))}});export{M as default};
