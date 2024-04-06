"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),E=require("./index-fd05cfbe.cjs"),x=require("./icon.vue_vue_type_script_setup_true_lang-5a70b817.cjs"),S=require("./vuedraggable.umd-50dcd280.cjs"),$=require("./tree.vue_vue_type_script_setup_true_lang-3feb8acf.cjs");require("./_commonjsHelpers-6763f629.cjs");require("./_vue_commonjs-external-0743e21a.cjs");const w={class:"event-info"},M=["title"],O={class:"event-btn"},A={class:"epic-action-editor-main"},j={class:"epic-editor-item"},D={class:"w-36px text-lg"},U={class:"flex-1"},L={key:0},q={key:1},K={key:2},R={class:"opr-box"},z=["onClick"],F=["onClick"],T=e.defineComponent({__name:"EActionEditorItem",props:{itemEvents:{type:Array,default:()=>[]},allEvents:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>[]},events:{type:Object,default:()=>({})}},emits:["add","edit","update:modelValue"],setup(C,{emit:N}){const m=C,_=N,f=e.inject("pageSchema");function k(d){_("add",d)}function h(d){return E.findSchemaById(f.schemas,d).label}function p(d,v){var s;const n=l(v);n[v]=m.events[v].filter((t,I)=>d!==I),(s=n[v])!=null&&s.length||delete n[v],_("update:modelValue",n)}function r(d,v,n){_("edit",d,v,n)}function l(d){const v={};return m.allEvents.forEach(n=>{if(!m.events[n.type].length||n.type===d)return!1;v[n.type]=m.events[n.type]}),v}return(d,v)=>(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(C.itemEvents,n=>(e.openBlock(),e.createElementBlock("div",{key:n.type,class:"event-item"},[e.createElementVNode("div",w,[e.createElementVNode("div",{class:"event-label",title:n.describe},e.toDisplayString(n.describe),9,M),e.createElementVNode("div",O,[e.createVNode(e.unref(x._sfc_main),{name:"icon-tianjia1",onClick:s=>k(n.type)},null,8,["onClick"])])]),e.createElementVNode("div",A,[e.createVNode(e.unref(S.draggable),{modelValue:m.events[n.type],"onUpdate:modelValue":s=>m.events[n.type]=s,"item-key":"id","component-data":{type:"transition-group"},group:"option-list",handle:".handle",animation:200},{item:e.withCtx(({element:s,index:t})=>[e.createElementVNode("div",j,[e.createElementVNode("div",D,[e.createVNode(e.unref(x._sfc_main),{class:"mr-2 text-lg cursor-move handle",name:"icon-tuozhuai"})]),e.createElementVNode("div",U,[s.type==="component"?(e.openBlock(),e.createElementBlock("div",L,e.toDisplayString(h(s.componentId)),1)):s.type==="custom"?(e.openBlock(),e.createElementBlock("div",q," 自定义函数 ")):s.type==="public"?(e.openBlock(),e.createElementBlock("div",K," 公共函数 ")):e.createCommentVNode("",!0),e.createTextVNode(" "+e.toDisplayString(s.methodName),1)]),e.createElementVNode("div",R,[e.createElementVNode("div",{class:"edit-btn",onClick:I=>r(t,n.type,s)},[e.createVNode(e.unref(x._sfc_main),{name:"icon-tiaozheng"})],8,z),e.createElementVNode("div",{class:"del-btn",onClick:I=>p(t,n.type)},[e.createVNode(e.unref(x._sfc_main),{name:"icon-shanchu1"})],8,F)])])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128))}}),J={class:"h-full flex flex-col"},P=e.createElementVNode("div",{class:"pb-2"}," 自定义函数编辑 ",-1),G=e.defineComponent({__name:"EScriptEdit",setup(C){const N=E.pluginManager.getComponent("monacoEditor"),m={theme:"vs-light",selectOnLineNumbers:!0,minimap:{enabled:!1}},_=e.ref(null),f=e.inject("pageSchema");return(k,h)=>(e.openBlock(),e.createElementBlock("div",J,[P,e.createVNode(e.unref(N),{ref_key:"monacoEditorRef",ref:_,modelValue:e.unref(f).script,"onUpdate:modelValue":h[0]||(h[0]=p=>e.unref(f).script=p),class:"editor flex-1",config:m,language:"javascript"},null,8,["modelValue"])]))}}),H={class:"epic-attribute-view"},Q=["title"],W={class:"attr-input"},X=e.defineComponent({__name:"EArgsEditor",props:{modelValue:{},actionArgsConfigs:{}},emits:["update:modelValue"],setup(C,{emit:N}){const m=C,_=N,f=e.computed(()=>m.modelValue?JSON.parse(m.modelValue):[]);function k(p){var r;return typeof p.show=="boolean"?p.show:typeof p.show=="function"?(r=p.show)==null?void 0:r.call(p,{values:f.value}):!0}function h(p,r){const l=[...JSON.parse(m.modelValue??"[]")];l[r]=p,_("update:modelValue",JSON.stringify(l))}return(p,r)=>(e.openBlock(),e.createElementBlock("aside",H,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.actionArgsConfigs,l=>(e.openBlock(),e.createElementBlock("div",{key:l.field+l.type},[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["attr-item",l.layout])},[e.createElementVNode("div",{class:"attr-label",title:l.label},e.toDisplayString(l.label),9,Q),e.createElementVNode("div",W,[e.createVNode(e.unref(E._sfc_main$1),{componentSchema:{...l,componentProps:{...l.componentProps,input:!1,field:void 0,hidden:!1},show:!0,noFormItem:!0},"model-value":f.value[l.field],"onUpdate:modelValue":d=>h(d,l.field)},null,8,["componentSchema","model-value","onUpdate:modelValue"])])],2),[[e.vShow,k(l)]])]))),128))]))}}),Y={class:"rounded bg-white epic-modal-action-main"},Z={class:"epic-modal-left-panel h-full flex flex-col"},ee={class:"flex flex-1 h-0 flex-col"},te={class:"flex-1 h-0"},ne={class:"epic-action-select h-30/100 flex flex-col"},oe=e.createElementVNode("div",{class:"mb-2"},"动作选择",-1),le={class:"flex-1 overflow-auto pr-8px"},ae=["onClick"],ce={class:"text-center pt-42px text-gray-400"},se={class:"epic-modal-right-panel"},ie={key:1,class:"text-center pt-42px text-gray-400"},de=e.defineComponent({__name:"EActionModal",emits:["add","edit"],setup(C,{expose:N,emit:m}){const _=E.pluginManager.getComponent("modal"),f=e.ref(!0),k=e.inject("pageSchema"),h=e.inject("pageManager",{}),p=e.inject("designer"),r=e.ref(!1),l=e.ref([]),d=e.ref(null),v=m,n=e.computed(()=>{var i;return t.actionItem.type==="component"?d.value?(i=E.pluginManager.getComponentConfings()[d.value.type].config.action)==null?void 0:i.map(o=>({label:o.describe,value:o.type})):[]:t.actionItem.type==="custom"?Object.entries(h.funcs.value).filter(([o,V])=>typeof V=="function").map(([o])=>({label:o,value:o})):t.actionItem.type==="public"?Object.entries(E.pluginManager.publicMethods).map(([o])=>({label:o,value:o})):[]}),s=e.computed(()=>{if(t.actionItem.type==="component"&&d.value){const i=E.pluginManager.getComponentConfings()[d.value.type].config.action,o=i==null?void 0:i.find(V=>V.type===t.actionItem.methodName);if(o!=null&&o.argsConfigs){const V=o.argsConfigs.findIndex(g=>g.label==="设置数据");V!==-1&&(o.argsConfigs[V]={...p.state.checkedNode,label:"设置数据",field:"0"})}return(o==null?void 0:o.argsConfigs)??[]}return[]}),t=e.reactive({actionItem:{type:"custom",methodName:"test",componentId:null},cacheData:{}});function I(){var i;r.value=!0,f.value=!0,t.actionItem.type="custom",t.actionItem.componentId=null,(i=n.value)!=null&&i.length&&y(n.value[0].value)}function b(i){if(r.value=!0,f.value=!1,d.value=null,i.componentId){const o=E.findSchemaById(k.schemas,i.componentId);d.value=o,l.value=[i.componentId]}e.nextTick(()=>{t.actionItem.componentId=i.componentId,t.actionItem.methodName=i.methodName,t.actionItem.type=i.type,t.actionItem.args=i.args})}function B(){if(!t.actionItem.methodName){alert("请先选择动作方法");return}v(f.value?"add":"edit",E.deepClone(e.toRaw(t.actionItem))),c()}function c(){r.value=!1,l.value=[],t.cacheData={}}function a(i){var o;t.actionItem.componentId=null,t.actionItem.type=i,d.value=null,t.actionItem.methodName=null,l.value=[],(o=n.value)!=null&&o.length&&y(n.value[0].value)}function u(i){var o;t.actionItem.args&&(t.cacheData[t.actionItem.componentId+t.actionItem.methodName]=t.actionItem.args),t.actionItem.componentId=i.id,t.actionItem.type="component",t.actionItem.methodName=null,d.value=i.componentSchema,(o=n.value)!=null&&o.length&&y(n.value[0].value)}function y(i){t.actionItem.methodName=i,t.actionItem.args=t.cacheData[t.actionItem.componentId+t.actionItem.methodName]}return N({handleOpen:I,handleOpenEdit:b}),(i,o)=>(e.openBlock(),e.createBlock(e.unref(_),{modelValue:r.value,"onUpdate:modelValue":o[4]||(o[4]=V=>r.value=V),class:"w-1200px",width:"1200px",onClose:c,onOk:B,title:"动作配置"},{default:e.withCtx(()=>{var V;return[e.createElementVNode("div",Y,[e.createElementVNode("div",Z,[e.createElementVNode("div",ee,[e.createElementVNode("div",{class:e.normalizeClass(["fun-btn",{checked:t.actionItem.type==="custom"}]),onClick:o[0]||(o[0]=g=>a("custom"))}," 自定义函数 ",2),e.createElementVNode("div",{class:e.normalizeClass(["fun-btn",{checked:t.actionItem.type==="public"}]),onClick:o[1]||(o[1]=g=>a("public"))}," 公共函数 ",2),e.createTextVNode(" 组件 "),e.createElementVNode("div",te,[e.createVNode(e.unref($._sfc_main),{selectedKeys:l.value,"onUpdate:selectedKeys":o[2]||(o[2]=g=>l.value=g),options:e.unref(k).schemas,onNodeClick:u},null,8,["selectedKeys","options"])])]),e.createElementVNode("div",ne,[oe,e.createElementVNode("div",le,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.value,g=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([{checked:g.value===t.actionItem.methodName},"action-item"]),onClick:ue=>y(g.value),key:g.value},[e.createElementVNode("span",null,e.toDisplayString(g.label),1)],10,ae))),128)),e.withDirectives(e.createElementVNode("div",ce,"当前组件暂无动作",512),[[e.vShow,!((V=n.value)!=null&&V.length)]])])])]),e.createElementVNode("div",se,[t.actionItem.type==="custom"?(e.openBlock(),e.createBlock(G,{key:0})):s.value.length===0?(e.openBlock(),e.createElementBlock("div",ie,"暂无配置")):(e.openBlock(),e.createBlock(X,{key:2,modelValue:t.actionItem.args,"onUpdate:modelValue":o[3]||(o[3]=g=>t.actionItem.args=g),actionArgsConfigs:s.value},null,8,["modelValue","actionArgsConfigs"]))])])]}),_:1},8,["modelValue"]))}}),re=e.defineComponent({__name:"index",props:{eventList:{type:Array,default:()=>[]},modelValue:{type:Object}},emits:["update:modelValue"],setup(C,{emit:N}){const m=E.pluginManager.getComponent("Collapse"),_=E.pluginManager.getComponent("CollapseItem"),f=e.ref(null);let k=0;const h=C,p=N,r=e.computed({get(){return h.modelValue},set(c){p("update:modelValue",c)}}),l=e.ref([]),d=e.computed(()=>h.eventList.filter(c=>c.events.length)),v=e.computed(()=>h.eventList.map(c=>c.events).flat()),n=e.ref({});v.value.forEach(c=>{n.value[c.type]=e.computed({get(){var a;return((a=r.value)==null?void 0:a[c.type])??[]},set(a){a&&a.length?r.value[c.type]=a.map(u=>e.toRaw(u)):delete r.value[c.type]}})}),e.watch(()=>d.value,c=>{c.length&&(l.value=c.filter(a=>{for(let u=0;u<a.events.length;u++){const y=a.events[u].type;if(n.value[y].length)return!0}return!1}).map(a=>a.title))},{immediate:!0});let s="";function t(c){var a;(a=f.value)==null||a.handleOpen(),s=c}function I(c,a,u){var y;(y=f.value)==null||y.handleOpenEdit(u),k=c,s=a}function b(c){n.value[s][k]=c,r.value[s]=[...n.value[s]??[]]}function B(c){if(!r.value){r.value={[s]:[...n.value[s]??[],c]};return}r.value[s]=[...n.value[s]??[],c]}return(c,a)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(e.unref(m),{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=u=>l.value=u),activeKey:l.value,"onUpdate:activeKey":a[2]||(a[2]=u=>l.value=u),"expanded-names":l.value,"onUpdate:expandedNames":a[3]||(a[3]=u=>l.value=u)},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(d.value,u=>(e.openBlock(),e.createBlock(e.unref(_),{key:u.title,title:u.title,header:u.title,name:u.title},{default:e.withCtx(()=>[e.createVNode(T,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=y=>r.value=y),"item-events":u.events,"all-events":v.value,events:n.value,onAdd:t,onEdit:I},null,8,["modelValue","item-events","all-events","events"])]),_:2},1032,["title","header","name"]))),128))]),_:1},8,["modelValue","activeKey","expanded-names"]),e.createVNode(de,{ref_key:"EActionModalRef",ref:f,onAdd:B,onEdit:b},null,512)],64))}});exports.default=re;