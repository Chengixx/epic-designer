import{k as m,l as p}from"./index.9d9919b5.js";import{i as u,ac as r}from"../app.c1700df1.js";import"./index.52d9511d.js";import"./index.4bf10955.js";import"./use-form-item.9fe0cf20.js";import"./focus-trap.3fd2c406.js";import"./isEqual.82067605.js";import"./hasIn.063dd559.js";import"./debounce.a30e09e6.js";const S=u({emits:["update:modelValue"],setup(n,{emit:a,attrs:e}){function i(t=null){a("update:modelValue",t)}return()=>{const t={...e,key:String(e.multiple),"onUpdate:modelValue":i};return r(p,t,{default:()=>{var o;return[(o=t.options)==null?void 0:o.map(l=>r(m,{label:l.label,value:l.value}))]}})}}});export{S as default};