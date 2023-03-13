import{B as ue,$ as ie,h as d,x as $,r as F,F as M,v as pe,a1 as J,Z as be,Y as De,aK as Ye,aL as We,y as re,a4 as Xe,a as we,z as W,o as Y,c as K,a6 as ce,j as i,J as xe,L as U,K as _e,X as Se,aA as je,a0 as Ve,ak as $e,s as q,a8 as Ze,A as Fe,aM as Ke,ad as Ue,e as qe,ah as Ge,al as Je,ae as Qe,O as ke,W as et,i as tt,w as N,aN as at,q as de,u as oe,G as ot,aD as nt,aO as lt,k as st}from"./entry.b253f145.js";import{r as ut,l as it,j as rt,k as me}from"./VList.06e2bc1f.js";import{h as Ie,j as Te,o as Be,r as Ce,w as Me,A as Ee,f as ct,C as Re,b as vt,a as dt,K as mt,Z as ft,u as gt,O as fe,d as ht,V as yt}from"./index.8e1eba9e.js";import{g as pt,m as Q,u as P,e as ne}from"./VProgressCircular.560a4757.js";const G=Symbol.for("vuetify:layout"),Le=Symbol.for("vuetify:layout-item"),ge=1e3,bt=ue({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ne=ue({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function wt(){const e=ie(G);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function He(e){var v;const n=ie(G);if(!n)throw new Error("[Vuetify] Could not find injected layout");const a=(v=e.id)!=null?v:`layout-item-${De()}`,t=pe("useLayoutItem");be(Le,{id:a});const l=$(!1);Ye(()=>l.value=!0),We(()=>l.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:s}=n.register(t,{...e,active:d(()=>l.value?!1:e.active.value),id:a});return re(()=>n.unregister(a)),{layoutItemStyles:o,layoutRect:n.layoutRect,layoutItemScrimStyles:s}}const xt=(e,n,a,t)=>{let l={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...l}}];for(const s of e){const v=n.get(s),b=a.get(s),g=t.get(s);if(!v||!b||!g)continue;const c={...l,[v.value]:parseInt(l[v.value],10)+(g.value?parseInt(b.value,10):0)};o.push({id:s,layer:c}),l=c}return o};function _t(e){const n=ie(G,null),a=d(()=>n?n.rootZIndex.value-100:ge),t=$([]),l=F(new Map),o=F(new Map),s=F(new Map),v=F(new Map),b=F(new Map),{resizeRef:g,contentRect:c}=pt(),w=d(()=>{var r;const u=new Map,m=(r=e.overlaps)!=null?r:[];for(const x of m.filter(f=>f.includes(":"))){const[f,k]=x.split(":");if(!t.value.includes(f)||!t.value.includes(k))continue;const R=l.get(f),A=l.get(k),H=o.get(f),z=o.get(k);!R||!A||!H||!z||(u.set(k,{position:R.value,amount:parseInt(H.value,10)}),u.set(f,{position:A.value,amount:-parseInt(z.value,10)}))}return u}),h=d(()=>{const u=[...new Set([...s.values()].map(r=>r.value))].sort((r,x)=>r-x),m=[];for(const r of u){const x=t.value.filter(f=>{var k;return((k=s.get(f))==null?void 0:k.value)===r});m.push(...x)}return xt(m,l,o,v)}),y=d(()=>!Array.from(b.values()).some(u=>u.value)),_=d(()=>h.value[h.value.length-1].layer),C=d(()=>({"--v-layout-left":M(_.value.left),"--v-layout-right":M(_.value.right),"--v-layout-top":M(_.value.top),"--v-layout-bottom":M(_.value.bottom),...y.value?void 0:{transition:"none"}})),S=d(()=>h.value.slice(1).map((u,m)=>{let{id:r}=u;const{layer:x}=h.value[m],f=o.get(r),k=l.get(r);return{id:r,...x,size:Number(f.value),position:k.value}})),I=u=>S.value.find(m=>m.id===u),T=pe("createLayout"),V=$(!1);J(()=>{V.value=!0}),be(G,{register:(u,m)=>{let{id:r,order:x,position:f,layoutSize:k,elementSize:R,active:A,disableTransitions:H,absolute:z}=m;s.set(r,x),l.set(r,f),o.set(r,k),v.set(r,A),H&&b.set(r,H);const X=Xe(Le,T==null?void 0:T.vnode).indexOf(u);X>-1?t.value.splice(X,0,r):t.value.push(r);const j=d(()=>S.value.findIndex(Z=>Z.id===r)),O=d(()=>a.value+h.value.length*2-j.value*2),ee=d(()=>{const Z=f.value==="left"||f.value==="right",te=f.value==="right",Oe=f.value==="bottom",ve={[f.value]:0,zIndex:O.value,transform:`translate${Z?"X":"Y"}(${(A.value?0:-110)*(te||Oe?-1:1)}%)`,position:z.value||a.value!==ge?"absolute":"fixed",...y.value?void 0:{transition:"none"}};if(!V.value)return ve;const L=S.value[j.value];if(!L)throw new Error(`[Vuetify] Could not find layout item "${r}"`);const ae=w.value.get(r);return ae&&(L[ae.position]+=ae.amount),{...ve,height:Z?`calc(100% - ${L.top}px - ${L.bottom}px)`:R.value?`${R.value}px`:void 0,left:te?void 0:`${L.left}px`,right:te?`${L.right}px`:void 0,top:f.value!=="bottom"?`${L.top}px`:void 0,bottom:f.value!=="top"?`${L.bottom}px`:void 0,width:Z?R.value?`${R.value}px`:void 0:`calc(100% - ${L.left}px - ${L.right}px)`}}),ze=d(()=>({zIndex:O.value-1}));return{layoutItemStyles:ee,layoutItemScrimStyles:ze,zIndex:O}},unregister:u=>{s.delete(u),l.delete(u),o.delete(u),v.delete(u),b.delete(u),t.value=t.value.filter(m=>m!==u)},mainRect:_,mainStyles:C,getLayoutItem:I,items:S,layoutRect:c,rootZIndex:a});const E=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),p=d(()=>({zIndex:a.value,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:E,layoutStyles:p,getLayoutItem:I,items:S,layoutRect:c,layoutRef:g}}const St=we({__name:"Search",emits:["update:search"],setup(e,{emit:n}){const a=$(),t=ut(a,300);return W(t,()=>n("update:search",a.value)),(l,o)=>(Y(),K(it,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),"max-width":"400","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""},null,8,["modelValue"]))}});const le=ce()({name:"VToolbarTitle",props:{text:String,...Q()},setup(e,n){let{slots:a}=n;return P(()=>{var t;const l=!!(a.default||a.text||e.text);return i(e.tag,{class:"v-toolbar-title"},{default:()=>[l&&i("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]})}),{}}}),Vt=[null,"prominent","default","comfortable","compact"],Pe=ue({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Vt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ie(),...Te(),...Be(),...Q({tag:"header"}),...xe()},"v-toolbar"),se=ce()({name:"VToolbar",props:Pe(),setup(e,n){var a;let{slots:t}=n;const{backgroundColorClasses:l,backgroundColorStyles:o}=ne(U(e,"color")),{borderClasses:s}=Ce(e),{elevationClasses:v}=Me(e),{roundedClasses:b}=Ee(e),{themeClasses:g}=_e(e),c=$(!!(e.extended||(a=t.extension)!=null&&a.call(t))),w=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=d(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Se({VBtn:{variant:"text"}}),P(()=>{var y,_,C,S,I;const T=!!(e.title||t.title),V=!!(t.image||e.image),E=(y=t.extension)==null?void 0:y.call(t);return c.value=!!(e.extended||E),i(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,s.value,v.value,b.value,g.value],style:[o.value]},{default:()=>[V&&i("div",{key:"image",class:"v-toolbar__image"},[i(ct,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(_=t.image)==null?void 0:_.call(t):i(Re,null,null)]})]),i("div",{class:"v-toolbar__content",style:{height:M(w.value)}},[t.prepend&&i("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),T&&i(le,{key:"title",text:e.title},{text:t.title}),(S=t.default)==null?void 0:S.call(t),t.append&&i("div",{class:"v-toolbar__append"},[(I=t.append)==null?void 0:I.call(t)])]),i(vt,null,{default:()=>[c.value&&i("div",{class:"v-toolbar__extension",style:{height:M(h.value)}},[E])]})]})}),{contentHeight:w,extensionHeight:h}}});function $t(e){var n;return je(e,Object.keys((n=se==null?void 0:se.props)!=null?n:{}))}const kt=ce()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Pe(),...Ne(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=$(),l=Ve(e,"modelValue"),o=d(()=>{var w,h;var v,b;const g=(w=(v=t.value)==null?void 0:v.contentHeight)!=null?w:0,c=(h=(b=t.value)==null?void 0:b.extensionHeight)!=null?h:0;return g+c}),{layoutItemStyles:s}=He({id:e.name,order:d(()=>parseInt(e.order,10)),position:U(e,"location"),layoutSize:o,elementSize:o,active:l,absolute:U(e,"absolute")});return P(()=>{const[v]=$t(e);return i(se,$e({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...s.value,height:void 0}},v),a)}),{}}}),It=q({name:"VAppBarNavIcon",props:{icon:{type:Ze,default:"$menu"}},setup(e,n){let{slots:a}=n;return P(()=>i(dt,{class:"v-app-bar-nav-icon",icon:e.icon},a)),{}}}),Tt=q({name:"VAppBarTitle",props:{...le.props},setup(e,n){let{slots:a}=n;return P(()=>i(le,{class:"v-app-bar-title"},a)),{}}});function Ae(){const e=$(!1);return J(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:d(()=>e.value?void 0:{transition:"none !important"}),isBooted:Fe(e)}}function Bt(e){let{rootEl:n,isSticky:a,layoutItemStyles:t}=e;const l=$(!1),o=$(0),s=d(()=>{const g=typeof l.value=="boolean"?"top":l.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[g]:M(o.value)}:{top:t.value.top}]});J(()=>{W(a,g=>{g?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),re(()=>{document.removeEventListener("scroll",b)});let v=0;function b(){var _;const g=v>window.scrollY?"up":"down",c=n.value.getBoundingClientRect(),w=parseFloat((_=t.value.top)!=null?_:0),h=window.scrollY-Math.max(0,o.value-w),y=c.height+Math.max(o.value,w)-window.scrollY-window.innerHeight;c.height<window.innerHeight-w?(l.value="top",o.value=w):g==="up"&&l.value==="bottom"||g==="down"&&l.value==="top"?(o.value=window.scrollY+c.top,l.value=!0):g==="down"&&y<=0?(o.value=0,l.value="bottom"):g==="up"&&h<=0&&(o.value=c.top+h,l.value="top"),v=window.scrollY}return{isStuck:l,stickyStyles:s}}const Ct=100,Mt=20;function he(e){const n=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*n}function ye(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let n=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const t=he(n),l=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);n+=(l-t)*Math.abs(l),a===e.length-1&&(n*=.5)}return he(n)*1e3}function Et(){const e={};function n(l){Array.from(l.changedTouches).forEach(o=>{var v;((v=e[o.identifier])!=null?v:e[o.identifier]=new Ke(Mt)).push([l.timeStamp,o])})}function a(l){Array.from(l.changedTouches).forEach(o=>{delete e[o.identifier]})}function t(l){var o;const s=(o=e[l])==null?void 0:o.values().reverse();if(!s)throw new Error(`No samples for touch id ${l}`);const v=s[0],b=[],g=[];for(const c of s){if(v[0]-c[0]>Ct)break;b.push({t:c[0],d:c[1].clientX}),g.push({t:c[0],d:c[1].clientY})}return{x:ye(b),y:ye(g),get direction(){const{x:c,y:w}=this,[h,y]=[Math.abs(c),Math.abs(w)];return h>y&&c>=0?"right":h>y&&c<=0?"left":y>h&&w>=0?"down":y>h&&w<=0?"up":Rt()}}}return{addMovement:n,endTouch:a,getVelocity:t}}function Rt(){throw new Error}function Lt(e){let{isActive:n,isTemporary:a,width:t,touchless:l,position:o}=e;J(()=>{window.addEventListener("touchstart",I,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",V,{passive:!0})}),re(()=>{window.removeEventListener("touchstart",I),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",V)});const s=d(()=>o.value!=="bottom"),{addMovement:v,endTouch:b,getVelocity:g}=Et();let c=!1;const w=$(!1),h=$(0),y=$(0);let _;function C(p,u){return(o.value==="left"?p:o.value==="right"?document.documentElement.clientWidth-p:o.value==="bottom"?document.documentElement.clientHeight-p:D())-(u?t.value:0)}function S(p){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const m=o.value==="left"?(p-y.value)/t.value:o.value==="right"?(document.documentElement.clientWidth-p-y.value)/t.value:o.value==="bottom"?(document.documentElement.clientHeight-p-y.value)/t.value:D();return u?Math.max(0,Math.min(1,m)):m}function I(p){if(l.value)return;const u=p.changedTouches[0].clientX,m=p.changedTouches[0].clientY,r=25,x=o.value==="left"?u<r:o.value==="right"?u>document.documentElement.clientWidth-r:o.value==="bottom"?m>document.documentElement.clientHeight-r:D(),f=n.value&&(o.value==="left"?u<t.value:o.value==="right"?u>document.documentElement.clientWidth-t.value:o.value==="bottom"?m>document.documentElement.clientHeight-t.value:D());(x||f||n.value&&a.value)&&(c=!0,_=[u,m],y.value=C(s.value?u:m,n.value),h.value=S(s.value?u:m),b(p),v(p))}function T(p){const u=p.changedTouches[0].clientX,m=p.changedTouches[0].clientY;if(c){if(!p.cancelable){c=!1;return}const x=Math.abs(u-_[0]),f=Math.abs(m-_[1]);(s.value?x>f&&x>3:f>x&&f>3)?(w.value=!0,c=!1):(s.value?f:x)>3&&(c=!1)}if(!w.value)return;p.preventDefault(),v(p);const r=S(s.value?u:m,!1);h.value=Math.max(0,Math.min(1,r)),r>1?y.value=C(s.value?u:m,!0):r<0&&(y.value=C(s.value?u:m,!1))}function V(p){if(c=!1,!w.value)return;v(p),w.value=!1;const u=g(p.changedTouches[0].identifier),m=Math.abs(u.x),r=Math.abs(u.y);(s.value?m>r&&m>400:r>m&&r>3)?n.value=u.direction===({left:"right",right:"left",bottom:"up"}[o.value]||D()):n.value=h.value>.5}const E=d(()=>w.value?{transform:o.value==="left"?`translateX(calc(-100% + ${h.value*t.value}px))`:o.value==="right"?`translateX(calc(100% - ${h.value*t.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${h.value*t.value}px))`:D(),transition:"none"}:void 0);return{isDragging:w,dragProgress:h,dragStyles:E}}function D(){throw new Error}const Nt=["start","end","left","right","bottom"],Ht=q({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Nt.includes(e)},sticky:Boolean,...Ie(),...Te(),...Ne(),...Be(),...Q({tag:"nav"}),...xe()},emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{isRtl:l}=Ue(),{themeClasses:o}=_e(e),{borderClasses:s}=Ce(e),{backgroundColorClasses:v,backgroundColorStyles:b}=ne(U(e,"color")),{elevationClasses:g}=Me(e),{mobile:c}=qe(),{roundedClasses:w}=Ee(e),h=mt(),y=Ve(e,"modelValue",null,B=>!!B),{ssrBootStyles:_}=Ae(),C=$(),S=$(!1),I=d(()=>e.rail&&e.expandOnHover&&S.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),T=d(()=>ft(e.location,l.value)),V=d(()=>!e.permanent&&(c.value||e.temporary)),E=d(()=>e.sticky&&!V.value&&T.value!=="bottom");e.disableResizeWatcher||W(V,B=>!e.permanent&&Ge(()=>y.value=!B)),!e.disableRouteWatcher&&h&&W(h.currentRoute,()=>V.value&&(y.value=!1)),W(()=>e.permanent,B=>{B&&(y.value=!0)}),Je(()=>{e.modelValue!=null||V.value||(y.value=e.permanent||!c.value)});const{isDragging:p,dragProgress:u,dragStyles:m}=Lt({isActive:y,isTemporary:V,width:I,touchless:U(e,"touchless"),position:T}),r=d(()=>{const B=V.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):I.value;return p.value?B*u.value:B}),{layoutItemStyles:x,layoutRect:f,layoutItemScrimStyles:k}=He({id:e.name,order:d(()=>parseInt(e.order,10)),position:T,layoutSize:r,elementSize:I,active:d(()=>y.value||p.value),disableTransitions:d(()=>p.value),absolute:d(()=>e.absolute||E.value&&typeof R.value!="string")}),{isStuck:R,stickyStyles:A}=Bt({rootEl:C,isSticky:E,layoutItemStyles:x}),H=ne(d(()=>typeof e.scrim=="string"?e.scrim:null)),z=d(()=>({...p.value?{opacity:u.value*.2,transition:"none"}:void 0,...f.value?{left:M(f.value.left),right:M(f.value.right),top:M(f.value.top),bottom:M(f.value.bottom)}:void 0,...k.value}));return Se({VList:{bgColor:"transparent"}}),P(()=>{var B,X,j,O;const ee=t.image||e.image;return i(ke,null,[i(e.tag,$e({ref:C,onMouseenter:()=>S.value=!0,onMouseleave:()=>S.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${T.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":S.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":V.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":E.value},o.value,v.value,s.value,g.value,w.value],style:[b.value,x.value,m.value,_.value,A.value]},a),{default:()=>[ee&&i("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(B=t.image)==null?void 0:B.call(t,{image:e.image}):i("img",{src:e.image,alt:""},null)]),t.prepend&&i("div",{class:"v-navigation-drawer__prepend"},[(X=t.prepend)==null?void 0:X.call(t)]),i("div",{class:"v-navigation-drawer__content"},[(j=t.default)==null?void 0:j.call(t)]),t.append&&i("div",{class:"v-navigation-drawer__append"},[(O=t.append)==null?void 0:O.call(t)])]}),i(Qe,{name:"fade-transition"},{default:()=>[V.value&&(p.value||y.value)&&!!e.scrim&&i("div",{class:["v-navigation-drawer__scrim",H.backgroundColorClasses.value],style:[z.value,H.backgroundColorStyles.value],onClick:()=>y.value=!1},null)]})])}),{isStuck:R}}}),Pt=we({__name:"AppNavigation",setup(e){const{search:n}=gt(),a=et(),t=$(!1),l=$(null);return W(l,()=>{t.value=!1}),(o,s)=>{const v=nt,b=St;return Y(),tt(ke,null,[i(kt,{color:"primary"},{default:N(()=>[i(It,{variant:"text",onClick:s[0]||(s[0]=at(g=>t.value=!t.value,["stop"]))},{default:N(()=>[t.value?t.value?(Y(),K(fe,{key:1,icon:"mdi-window-close"})):de("",!0):(Y(),K(fe,{key:0,icon:"mdi-menu"}))]),_:1}),i(Tt,{class:"ml-0"},{default:N(()=>[i(v,{to:"/"},{default:N(()=>[i(Re,{src:"/logo.png",width:"150"})]),_:1})]),_:1}),["index","episodes"].includes(String(o.$route.name))?(Y(),K(yt,{key:0,justify:"end"},{default:N(()=>[i(ht,{cols:"9",sm:"6",md:"4",lg:"3"},{default:N(()=>[i(b,{search:oe(n),"onUpdate:search":s[1]||(s[1]=g=>ot(n)?n.value=g:null)},null,8,["search"])]),_:1})]),_:1})):de("",!0)]),_:1}),i(Ht,{modelValue:t.value,"onUpdate:modelValue":s[4]||(s[4]=g=>t.value=g),temporary:""},{default:N(()=>[i(rt,{density:"compact",nav:""},{default:N(()=>[i(me,{title:"Characters",value:"characters",onClick:s[2]||(s[2]=g=>oe(a).push("/"))}),i(me,{title:"Episodes",value:"episodes",onClick:s[3]||(s[3]=g=>oe(a).push("/episodes"))})]),_:1})]),_:1},8,["modelValue"])],64)}}});const At=q({name:"VLayout",props:bt(),setup(e,n){let{slots:a}=n;const{layoutClasses:t,layoutStyles:l,getLayoutItem:o,items:s,layoutRef:v}=_t(e);return P(()=>{var b;return i("div",{ref:v,class:t.value,style:l.value},[(b=a.default)==null?void 0:b.call(a)])}),{getLayoutItem:o,items:s}}});const zt=q({name:"VMain",props:{scrollable:Boolean,...Q({tag:"main"})},setup(e,n){let{slots:a}=n;const{mainStyles:t}=wt(),{ssrBootStyles:l}=Ae();return P(()=>{var o,s;return i(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,l.value]},{default:()=>[e.scrollable?i("div",{class:"v-main__scroller"},[(o=a.default)==null?void 0:o.call(a)]):(s=a.default)==null?void 0:s.call(a)]})}),{}}}),Ot={};function Dt(e,n){const a=Pt,t=st("NuxtPage");return Y(),K(At,null,{default:N(()=>[i(a),i(zt,null,{default:N(()=>[i(t)]),_:1})]),_:1})}const Zt=lt(Ot,[["render",Dt]]);export{Zt as default};