import{l as ce,J as we,q as ke,a5 as _e,w as J,e as Y,d as V,g as C,R as Se,k as se,f as L,o as D,c as U,b as H,n as w,u as s,t as xe,s as E,x as K,Q as Ie,G,v as de,C as Re,r as B,O as Me,j as Ee,p as Be,E as Ae,m as Fe,a4 as $e,F as De,z as Le,ag as Te,a3 as ze}from"../app.c22c6c8c.js";import{ad as Oe,v as te,ab as fe,ah as ne,ag as Pe,bH as Ne,Q as X,h as oe,j as W,bI as Q,D as Ve,R as pe,H as Ye,aQ as le,ax as He,a7 as Z,a6 as ae,U as Xe,bJ as je,P as me,b3 as re,a9 as ve,z as qe}from"./index.0d7c8eb8.js";import{P as Ue,K as Qe,Y as Je,L as Ke}from"./index-bbbf8f32.66a4d34d.js";import{S as Ge,l as We,C as Ze}from"./focus-trap-c5574809.e676d9cf.js";import{g as et}from"./use-global-config-974629ca.4e8cd33b.js";const tt=(...e)=>t=>{e.forEach(o=>{ve(o)?o(t):o.value=t})},ot=(e,t,o)=>{let n={offsetX:0,offsetY:0};const l=a=>{const c=a.clientX,m=a.clientY,{offsetX:f,offsetY:p}=n,r=e.value.getBoundingClientRect(),g=r.left,_=r.top,T=r.width,z=r.height,O=document.documentElement.clientWidth,A=document.documentElement.clientHeight,F=-g+f,S=-_+p,x=O-g-T+f,P=A-_-z+p,I=$=>{const u=Math.min(Math.max(f+$.clientX-c,F),x),y=Math.min(Math.max(p+$.clientY-m,S),P);n={offsetX:u,offsetY:y},e.value.style.transform=`translate(${Z(u)}, ${Z(y)})`},v=()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",v)},i=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",l)},d=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",l)};ce(()=>{we(()=>{o.value?i():d()})}),ke(()=>{d()})};let st;function nt(e,t=st){t&&t.active&&t.effects.push(e)}const lt=e=>{const t=new Set(e);return t.w=0,t.n=0,t},he=e=>(e.w&k)>0,ye=e=>(e.n&k)>0,at=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=k},rt=e=>{const{deps:t}=e;if(t.length){let o=0;for(let n=0;n<t.length;n++){const l=t[n];he(l)&&!ye(l)?l.delete(e):t[o++]=l,l.w&=~k,l.n&=~k}t.length=o}};let N=0,k=1;const ee=30;let b;class ut{constructor(t,o=null,n){this.fn=t,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,nt(this,n)}run(){if(!this.active)return this.fn();let t=b,o=j;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=b,b=this,j=!0,k=1<<++N,N<=ee?at(this):ue(this),this.fn()}finally{N<=ee&&rt(this),k=1<<--N,b=this.parent,j=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b===this?this.deferStop=!0:this.active&&(ue(this),this.onStop&&this.onStop(),this.active=!1)}}function ue(e){const{deps:t}=e;if(t.length){for(let o=0;o<t.length;o++)t[o].delete(e);t.length=0}}let j=!0;function it(e,t){let o=!1;N<=ee?ye(e)||(e.n|=k,o=!he(e)):o=!e.has(b),o&&(e.add(b),b.deps.push(e))}function ct(e,t){const o=qe(e)?e:[...e];for(const n of o)n.computed&&ie(n);for(const n of o)n.computed||ie(n)}function ie(e,t){(e!==b||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function dt(e){j&&b&&(e=q(e),it(e.dep||(e.dep=lt())))}function ft(e,t){e=q(e);const o=e.dep;o&&ct(o)}class pt{constructor(t,o,n,l){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ut(t,()=>{this._dirty||(this._dirty=!0,ft(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=n}get value(){const t=q(this);return dt(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function mt(e,t,o=!1){let n,l;const i=ve(e);return i?(n=e,l=X):(n=e.get,l=e.set),new pt(n,l,i||!l,o)}const vt=(e,t={})=>{_e(e)||Oe("[useLockscreen]","You need to pass a ref param to this function");const o=t.ns||te("popup"),n=mt(()=>o.bm("parent","hidden"));if(!fe||ne(document.body,n.value))return;let l=0,i=!1,d="0";const a=()=>{setTimeout(()=>{je(document==null?void 0:document.body,n.value),i&&document&&(document.body.style.width=d)},200)};J(e,c=>{if(!c){a();return}i=!ne(document.body,n.value),i&&(d=document.body.style.width),l=Ge(o.namespace.value);const m=document.documentElement.clientHeight<document.body.scrollHeight,f=Pe(document.body,"overflowY");l>0&&(m||f==="scroll")&&i&&(document.body.style.width=`calc(100% - ${l}px)`),Ne(document.body,n.value)}),ze(()=>a())},ge=e=>{if(!e)return{onClick:X,onMousedown:X,onMouseup:X};let t=!1,o=!1;return{onClick:n=>{t&&o&&e(n),t=o=!1},onMousedown:n=>{t=n.target===n.currentTarget},onMouseup:n=>{o=n.target===n.currentTarget}}},ht=oe({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:W([String,Array,Object])},zIndex:{type:W([String,Number])}}),yt={click:e=>e instanceof MouseEvent},gt="overlay";var bt=Y({name:"ElOverlay",props:ht,emits:yt,setup(e,{slots:t,emit:o}){const n=te(gt),l=c=>{o("click",c)},{onClick:i,onMousedown:d,onMouseup:a}=ge(e.customMaskEvent?void 0:l);return()=>e.mask?V("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:i,onMousedown:d,onMouseup:a},[C(t,"default")],Q.STYLE|Q.CLASS|Q.PROPS,["onClick","onMouseup","onMousedown"]):Se("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[C(t,"default")])}});const Ct=bt,be=Symbol("dialogInjectionKey"),Ce=oe({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Ue},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),wt={close:()=>!0},kt=["aria-label"],_t=["id"],St=Y({name:"ElDialogContent"}),xt=Y({...St,props:Ce,emits:wt,setup(e){const t=e,{t:o}=Qe(),{Close:n}=Ke,{dialogRef:l,headerRef:i,bodyId:d,ns:a,style:c}=se(be),{focusTrapRef:m}=se(We),f=tt(m,l),p=L(()=>t.draggable);return ot(l,i,p),(r,g)=>(D(),U("div",{ref:s(f),class:w([s(a).b(),s(a).is("fullscreen",r.fullscreen),s(a).is("draggable",s(p)),s(a).is("align-center",r.alignCenter),{[s(a).m("center")]:r.center},r.customClass]),style:de(s(c)),tabindex:"-1"},[H("header",{ref_key:"headerRef",ref:i,class:w(s(a).e("header"))},[C(r.$slots,"header",{},()=>[H("span",{role:"heading",class:w(s(a).e("title"))},xe(r.title),3)]),r.showClose?(D(),U("button",{key:0,"aria-label":s(o)("el.dialog.close"),class:w(s(a).e("headerbtn")),type:"button",onClick:g[0]||(g[0]=_=>r.$emit("close"))},[V(s(Ve),{class:w(s(a).e("close"))},{default:E(()=>[(D(),K(Ie(r.closeIcon||s(n))))]),_:1},8,["class"])],10,kt)):G("v-if",!0)],2),H("div",{id:s(d),class:w(s(a).e("body"))},[C(r.$slots,"default")],10,_t),r.$slots.footer?(D(),U("footer",{key:0,class:w(s(a).e("footer"))},[C(r.$slots,"footer")],2)):G("v-if",!0)],6))}});var It=me(xt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Rt=oe({...Ce,appendToBody:{type:Boolean,default:!1},beforeClose:{type:W(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Mt={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[pe]:e=>Ye(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Et=(e,t)=>{const o=Re().emit,{nextZIndex:n}=Je();let l="";const i=le(),d=le(),a=B(!1),c=B(!1),m=B(!1),f=B(e.zIndex||n());let p,r;const g=et("namespace",He),_=L(()=>{const h={},M=`--${g.value}-dialog`;return e.fullscreen||(e.top&&(h[`${M}-margin-top`]=e.top),e.width&&(h[`${M}-width`]=Z(e.width))),h}),T=L(()=>e.alignCenter?{display:"flex"}:{});function z(){o("opened")}function O(){o("closed"),o(pe,!1),e.destroyOnClose&&(m.value=!1)}function A(){o("close")}function F(){r==null||r(),p==null||p(),e.openDelay&&e.openDelay>0?{stop:p}=re(()=>I(),e.openDelay):I()}function S(){p==null||p(),r==null||r(),e.closeDelay&&e.closeDelay>0?{stop:r}=re(()=>v(),e.closeDelay):v()}function x(){function h(M){M||(c.value=!0,a.value=!1)}e.beforeClose?e.beforeClose(h):S()}function P(){e.closeOnClickModal&&x()}function I(){fe&&(a.value=!0)}function v(){a.value=!1}function $(){o("openAutoFocus")}function u(){o("closeAutoFocus")}function y(h){var M;((M=h.detail)==null?void 0:M.focusReason)==="pointer"&&h.preventDefault()}e.lockScroll&&vt(a);function R(){e.closeOnPressEscape&&x()}return J(()=>e.modelValue,h=>{h?(c.value=!1,F(),m.value=!0,f.value=e.zIndex?f.value++:n(),Me(()=>{o("open"),t.value&&(t.value.scrollTop=0)})):a.value&&S()}),J(()=>e.fullscreen,h=>{t.value&&(h?(l=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=l)}),ce(()=>{e.modelValue&&(a.value=!0,m.value=!0,F())}),{afterEnter:z,afterLeave:O,beforeLeave:A,handleClose:x,onModalClick:P,close:S,doClose:v,onOpenAutoFocus:$,onCloseAutoFocus:u,onCloseRequested:R,onFocusoutPrevented:y,titleId:i,bodyId:d,closed:c,style:_,overlayDialogStyle:T,rendered:m,visible:a,zIndex:f}},Bt=["aria-label","aria-labelledby","aria-describedby"],At=Y({name:"ElDialog",inheritAttrs:!1}),Ft=Y({...At,props:Rt,emits:Mt,setup(e,{expose:t}){const o=e,n=Ee();ae({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},L(()=>!!n.title)),ae({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},L(()=>!!o.customClass));const l=te("dialog"),i=B(),d=B(),a=B(),{visible:c,titleId:m,bodyId:f,style:p,overlayDialogStyle:r,rendered:g,zIndex:_,afterEnter:T,afterLeave:z,beforeLeave:O,handleClose:A,onModalClick:F,onOpenAutoFocus:S,onCloseAutoFocus:x,onCloseRequested:P,onFocusoutPrevented:I}=Et(o,i);Be(be,{dialogRef:i,headerRef:d,bodyId:f,ns:l,rendered:g,style:p});const v=ge(F),$=L(()=>o.draggable&&!o.fullscreen);return t({visible:c,dialogContentRef:a}),(u,y)=>(D(),K(Te,{to:"body",disabled:!u.appendToBody},[V(Le,{name:"dialog-fade",onAfterEnter:s(T),onAfterLeave:s(z),onBeforeLeave:s(O),persisted:""},{default:E(()=>[Ae(V(s(Ct),{"custom-mask-event":"",mask:u.modal,"overlay-class":u.modalClass,"z-index":s(_)},{default:E(()=>[H("div",{role:"dialog","aria-modal":"true","aria-label":u.title||void 0,"aria-labelledby":u.title?void 0:s(m),"aria-describedby":s(f),class:w(`${s(l).namespace.value}-overlay-dialog`),style:de(s(r)),onClick:y[0]||(y[0]=(...R)=>s(v).onClick&&s(v).onClick(...R)),onMousedown:y[1]||(y[1]=(...R)=>s(v).onMousedown&&s(v).onMousedown(...R)),onMouseup:y[2]||(y[2]=(...R)=>s(v).onMouseup&&s(v).onMouseup(...R))},[V(s(Ze),{loop:"",trapped:s(c),"focus-start-el":"container",onFocusAfterTrapped:s(S),onFocusAfterReleased:s(x),onFocusoutPrevented:s(I),onReleaseRequested:s(P)},{default:E(()=>[s(g)?(D(),K(It,Fe({key:0,ref_key:"dialogContentRef",ref:a},u.$attrs,{"custom-class":u.customClass,center:u.center,"align-center":u.alignCenter,"close-icon":u.closeIcon,draggable:s($),fullscreen:u.fullscreen,"show-close":u.showClose,title:u.title,onClose:s(A)}),$e({header:E(()=>[u.$slots.title?C(u.$slots,"title",{key:1}):C(u.$slots,"header",{key:0,close:s(A),titleId:s(m),titleClass:s(l).e("title")})]),default:E(()=>[C(u.$slots,"default")]),_:2},[u.$slots.footer?{name:"footer",fn:E(()=>[C(u.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):G("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Bt)]),_:3},8,["mask","overlay-class","z-index"]),[[De,s(c)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var $t=me(Ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const Pt=Xe($t);export{Rt as B,yt as C,Et as F,Pt as H,Mt as I,be as a,ht as b,vt as g,ge as k,ot as r,Ct as w};