import{B as ue,$ as ie,h as d,x as $,r as F,F as E,v as pe,a1 as J,Z as be,Y as Ye,aL as De,aM as We,y as re,a4 as Xe,a as we,z as W,o as D,c as U,a6 as ce,j as i,J as _e,L as q,K as xe,X as Se,aA as je,a0 as Ve,ak as $e,s as K,a8 as Ze,A as Fe,aN as Ue,ad as qe,e as Ke,ah as Ge,al as Je,ae as Qe,O as ke,W as et,i as tt,w as N,aO as at,q as de,p as ot,u as oe,G as nt,aE as lt,aP as st,k as ut}from"./entry.aea79283.js";import{r as it,l as rt,j as ct,k as me}from"./VList.1a028da5.js";import{h as Be,j as Ie,o as Te,r as Ce,w as Ee,A as Me,f as vt,C as Re,b as dt,a as mt,K as ft,Z as gt,u as ht,O as fe,d as yt,V as pt}from"./index.2667daba.js";import{g as bt,m as Q,u as P,e as ne}from"./VProgressCircular.c771e30f.js";const G=Symbol.for("vuetify:layout"),Le=Symbol.for("vuetify:layout-item"),ge=1e3,wt=ue({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ne=ue({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function _t(){const e=ie(G);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function He(e){var v;const n=ie(G);if(!n)throw new Error("[Vuetify] Could not find injected layout");const a=(v=e.id)!=null?v:`layout-item-${Ye()}`,t=pe("useLayoutItem");be(Le,{id:a});const l=$(!1);De(()=>l.value=!0),We(()=>l.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:s}=n.register(t,{...e,active:d(()=>l.value?!1:e.active.value),id:a});return re(()=>n.unregister(a)),{layoutItemStyles:o,layoutRect:n.layoutRect,layoutItemScrimStyles:s}}const xt=(e,n,a,t)=>{let l={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...l}}];for(const s of e){const v=n.get(s),b=a.get(s),g=t.get(s);if(!v||!b||!g)continue;const c={...l,[v.value]:parseInt(l[v.value],10)+(g.value?parseInt(b.value,10):0)};o.push({id:s,layer:c}),l=c}return o};function St(e){const n=ie(G,null),a=d(()=>n?n.rootZIndex.value-100:ge),t=$([]),l=F(new Map),o=F(new Map),s=F(new Map),v=F(new Map),b=F(new Map),{resizeRef:g,contentRect:c}=bt(),w=d(()=>{var r;const u=new Map,m=(r=e.overlaps)!=null?r:[];for(const _ of m.filter(f=>f.includes(":"))){const[f,k]=_.split(":");if(!t.value.includes(f)||!t.value.includes(k))continue;const R=l.get(f),A=l.get(k),H=o.get(f),z=o.get(k);!R||!A||!H||!z||(u.set(k,{position:R.value,amount:parseInt(H.value,10)}),u.set(f,{position:A.value,amount:-parseInt(z.value,10)}))}return u}),h=d(()=>{const u=[...new Set([...s.values()].map(r=>r.value))].sort((r,_)=>r-_),m=[];for(const r of u){const _=t.value.filter(f=>{var k;return((k=s.get(f))==null?void 0:k.value)===r});m.push(..._)}return xt(m,l,o,v)}),y=d(()=>!Array.from(b.values()).some(u=>u.value)),x=d(()=>h.value[h.value.length-1].layer),C=d(()=>({"--v-layout-left":E(x.value.left),"--v-layout-right":E(x.value.right),"--v-layout-top":E(x.value.top),"--v-layout-bottom":E(x.value.bottom),...y.value?void 0:{transition:"none"}})),S=d(()=>h.value.slice(1).map((u,m)=>{let{id:r}=u;const{layer:_}=h.value[m],f=o.get(r),k=l.get(r);return{id:r,..._,size:Number(f.value),position:k.value}})),B=u=>S.value.find(m=>m.id===u),I=pe("createLayout"),V=$(!1);J(()=>{V.value=!0}),be(G,{register:(u,m)=>{let{id:r,order:_,position:f,layoutSize:k,elementSize:R,active:A,disableTransitions:H,absolute:z}=m;s.set(r,_),l.set(r,f),o.set(r,k),v.set(r,A),H&&b.set(r,H);const X=Xe(Le,I==null?void 0:I.vnode).indexOf(u);X>-1?t.value.splice(X,0,r):t.value.push(r);const j=d(()=>S.value.findIndex(Z=>Z.id===r)),O=d(()=>a.value+h.value.length*2-j.value*2),ee=d(()=>{const Z=f.value==="left"||f.value==="right",te=f.value==="right",Oe=f.value==="bottom",ve={[f.value]:0,zIndex:O.value,transform:`translate${Z?"X":"Y"}(${(A.value?0:-110)*(te||Oe?-1:1)}%)`,position:z.value||a.value!==ge?"absolute":"fixed",...y.value?void 0:{transition:"none"}};if(!V.value)return ve;const L=S.value[j.value];if(!L)throw new Error(`[Vuetify] Could not find layout item "${r}"`);const ae=w.value.get(r);return ae&&(L[ae.position]+=ae.amount),{...ve,height:Z?`calc(100% - ${L.top}px - ${L.bottom}px)`:R.value?`${R.value}px`:void 0,left:te?void 0:`${L.left}px`,right:te?`${L.right}px`:void 0,top:f.value!=="bottom"?`${L.top}px`:void 0,bottom:f.value!=="top"?`${L.bottom}px`:void 0,width:Z?R.value?`${R.value}px`:void 0:`calc(100% - ${L.left}px - ${L.right}px)`}}),ze=d(()=>({zIndex:O.value-1}));return{layoutItemStyles:ee,layoutItemScrimStyles:ze,zIndex:O}},unregister:u=>{s.delete(u),l.delete(u),o.delete(u),v.delete(u),b.delete(u),t.value=t.value.filter(m=>m!==u)},mainRect:x,mainStyles:C,getLayoutItem:B,items:S,layoutRect:c,rootZIndex:a});const M=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),p=d(()=>({zIndex:a.value,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:M,layoutStyles:p,getLayoutItem:B,items:S,layoutRect:c,layoutRef:g}}const Vt=we({__name:"Search",emits:["update:search"],setup(e,{emit:n}){const a=$(),t=it(a,300);return W(t,()=>n("update:search",a.value)),(l,o)=>(D(),U(rt,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),"max-width":"400","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""},null,8,["modelValue"]))}});const le=ce()({name:"VToolbarTitle",props:{text:String,...Q()},setup(e,n){let{slots:a}=n;return P(()=>{var t;const l=!!(a.default||a.text||e.text);return i(e.tag,{class:"v-toolbar-title"},{default:()=>[l&&i("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]})}),{}}}),$t=[null,"prominent","default","comfortable","compact"],Pe=ue({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>$t.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Be(),...Ie(),...Te(),...Q({tag:"header"}),..._e()},"v-toolbar"),se=ce()({name:"VToolbar",props:Pe(),setup(e,n){var a;let{slots:t}=n;const{backgroundColorClasses:l,backgroundColorStyles:o}=ne(q(e,"color")),{borderClasses:s}=Ce(e),{elevationClasses:v}=Ee(e),{roundedClasses:b}=Me(e),{themeClasses:g}=xe(e),c=$(!!(e.extended||(a=t.extension)!=null&&a.call(t))),w=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=d(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Se({VBtn:{variant:"text"}}),P(()=>{var y,x,C,S,B;const I=!!(e.title||t.title),V=!!(t.image||e.image),M=(y=t.extension)==null?void 0:y.call(t);return c.value=!!(e.extended||M),i(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,s.value,v.value,b.value,g.value],style:[o.value]},{default:()=>[V&&i("div",{key:"image",class:"v-toolbar__image"},[i(vt,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(x=t.image)==null?void 0:x.call(t):i(Re,null,null)]})]),i("div",{class:"v-toolbar__content",style:{height:E(w.value)}},[t.prepend&&i("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),I&&i(le,{key:"title",text:e.title},{text:t.title}),(S=t.default)==null?void 0:S.call(t),t.append&&i("div",{class:"v-toolbar__append"},[(B=t.append)==null?void 0:B.call(t)])]),i(dt,null,{default:()=>[c.value&&i("div",{class:"v-toolbar__extension",style:{height:E(h.value)}},[M])]})]})}),{contentHeight:w,extensionHeight:h}}});function kt(e){var n;return je(e,Object.keys((n=se==null?void 0:se.props)!=null?n:{}))}const Bt=ce()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Pe(),...Ne(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=$(),l=Ve(e,"modelValue"),o=d(()=>{var w,h;var v,b;const g=(w=(v=t.value)==null?void 0:v.contentHeight)!=null?w:0,c=(h=(b=t.value)==null?void 0:b.extensionHeight)!=null?h:0;return g+c}),{layoutItemStyles:s}=He({id:e.name,order:d(()=>parseInt(e.order,10)),position:q(e,"location"),layoutSize:o,elementSize:o,active:l,absolute:q(e,"absolute")});return P(()=>{const[v]=kt(e);return i(se,$e({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...s.value,height:void 0}},v),a)}),{}}}),It=K({name:"VAppBarNavIcon",props:{icon:{type:Ze,default:"$menu"}},setup(e,n){let{slots:a}=n;return P(()=>i(mt,{class:"v-app-bar-nav-icon",icon:e.icon},a)),{}}}),Tt=K({name:"VAppBarTitle",props:{...le.props},setup(e,n){let{slots:a}=n;return P(()=>i(le,{class:"v-app-bar-title"},a)),{}}});function Ae(){const e=$(!1);return J(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:d(()=>e.value?void 0:{transition:"none !important"}),isBooted:Fe(e)}}function Ct(e){let{rootEl:n,isSticky:a,layoutItemStyles:t}=e;const l=$(!1),o=$(0),s=d(()=>{const g=typeof l.value=="boolean"?"top":l.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[g]:E(o.value)}:{top:t.value.top}]});J(()=>{W(a,g=>{g?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),re(()=>{document.removeEventListener("scroll",b)});let v=0;function b(){var x;const g=v>window.scrollY?"up":"down",c=n.value.getBoundingClientRect(),w=parseFloat((x=t.value.top)!=null?x:0),h=window.scrollY-Math.max(0,o.value-w),y=c.height+Math.max(o.value,w)-window.scrollY-window.innerHeight;c.height<window.innerHeight-w?(l.value="top",o.value=w):g==="up"&&l.value==="bottom"||g==="down"&&l.value==="top"?(o.value=window.scrollY+c.top,l.value=!0):g==="down"&&y<=0?(o.value=0,l.value="bottom"):g==="up"&&h<=0&&(o.value=c.top+h,l.value="top"),v=window.scrollY}return{isStuck:l,stickyStyles:s}}const Et=100,Mt=20;function he(e){const n=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*n}function ye(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let n=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const t=he(n),l=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);n+=(l-t)*Math.abs(l),a===e.length-1&&(n*=.5)}return he(n)*1e3}function Rt(){const e={};function n(l){Array.from(l.changedTouches).forEach(o=>{var v;((v=e[o.identifier])!=null?v:e[o.identifier]=new Ue(Mt)).push([l.timeStamp,o])})}function a(l){Array.from(l.changedTouches).forEach(o=>{delete e[o.identifier]})}function t(l){var o;const s=(o=e[l])==null?void 0:o.values().reverse();if(!s)throw new Error(`No samples for touch id ${l}`);const v=s[0],b=[],g=[];for(const c of s){if(v[0]-c[0]>Et)break;b.push({t:c[0],d:c[1].clientX}),g.push({t:c[0],d:c[1].clientY})}return{x:ye(b),y:ye(g),get direction(){const{x:c,y:w}=this,[h,y]=[Math.abs(c),Math.abs(w)];return h>y&&c>=0?"right":h>y&&c<=0?"left":y>h&&w>=0?"down":y>h&&w<=0?"up":Lt()}}}return{addMovement:n,endTouch:a,getVelocity:t}}function Lt(){throw new Error}function Nt(e){let{isActive:n,isTemporary:a,width:t,touchless:l,position:o}=e;J(()=>{window.addEventListener("touchstart",B,{passive:!0}),window.addEventListener("touchmove",I,{passive:!1}),window.addEventListener("touchend",V,{passive:!0})}),re(()=>{window.removeEventListener("touchstart",B),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",V)});const s=d(()=>o.value!=="bottom"),{addMovement:v,endTouch:b,getVelocity:g}=Rt();let c=!1;const w=$(!1),h=$(0),y=$(0);let x;function C(p,u){return(o.value==="left"?p:o.value==="right"?document.documentElement.clientWidth-p:o.value==="bottom"?document.documentElement.clientHeight-p:Y())-(u?t.value:0)}function S(p){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const m=o.value==="left"?(p-y.value)/t.value:o.value==="right"?(document.documentElement.clientWidth-p-y.value)/t.value:o.value==="bottom"?(document.documentElement.clientHeight-p-y.value)/t.value:Y();return u?Math.max(0,Math.min(1,m)):m}function B(p){if(l.value)return;const u=p.changedTouches[0].clientX,m=p.changedTouches[0].clientY,r=25,_=o.value==="left"?u<r:o.value==="right"?u>document.documentElement.clientWidth-r:o.value==="bottom"?m>document.documentElement.clientHeight-r:Y(),f=n.value&&(o.value==="left"?u<t.value:o.value==="right"?u>document.documentElement.clientWidth-t.value:o.value==="bottom"?m>document.documentElement.clientHeight-t.value:Y());(_||f||n.value&&a.value)&&(c=!0,x=[u,m],y.value=C(s.value?u:m,n.value),h.value=S(s.value?u:m),b(p),v(p))}function I(p){const u=p.changedTouches[0].clientX,m=p.changedTouches[0].clientY;if(c){if(!p.cancelable){c=!1;return}const _=Math.abs(u-x[0]),f=Math.abs(m-x[1]);(s.value?_>f&&_>3:f>_&&f>3)?(w.value=!0,c=!1):(s.value?f:_)>3&&(c=!1)}if(!w.value)return;p.preventDefault(),v(p);const r=S(s.value?u:m,!1);h.value=Math.max(0,Math.min(1,r)),r>1?y.value=C(s.value?u:m,!0):r<0&&(y.value=C(s.value?u:m,!1))}function V(p){if(c=!1,!w.value)return;v(p),w.value=!1;const u=g(p.changedTouches[0].identifier),m=Math.abs(u.x),r=Math.abs(u.y);(s.value?m>r&&m>400:r>m&&r>3)?n.value=u.direction===({left:"right",right:"left",bottom:"up"}[o.value]||Y()):n.value=h.value>.5}const M=d(()=>w.value?{transform:o.value==="left"?`translateX(calc(-100% + ${h.value*t.value}px))`:o.value==="right"?`translateX(calc(100% - ${h.value*t.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${h.value*t.value}px))`:Y(),transition:"none"}:void 0);return{isDragging:w,dragProgress:h,dragStyles:M}}function Y(){throw new Error}const Ht=["start","end","left","right","bottom"],Pt=K({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ht.includes(e)},sticky:Boolean,...Be(),...Ie(),...Ne(),...Te(),...Q({tag:"nav"}),..._e()},emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{isRtl:l}=qe(),{themeClasses:o}=xe(e),{borderClasses:s}=Ce(e),{backgroundColorClasses:v,backgroundColorStyles:b}=ne(q(e,"color")),{elevationClasses:g}=Ee(e),{mobile:c}=Ke(),{roundedClasses:w}=Me(e),h=ft(),y=Ve(e,"modelValue",null,T=>!!T),{ssrBootStyles:x}=Ae(),C=$(),S=$(!1),B=d(()=>e.rail&&e.expandOnHover&&S.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),I=d(()=>gt(e.location,l.value)),V=d(()=>!e.permanent&&(c.value||e.temporary)),M=d(()=>e.sticky&&!V.value&&I.value!=="bottom");e.disableResizeWatcher||W(V,T=>!e.permanent&&Ge(()=>y.value=!T)),!e.disableRouteWatcher&&h&&W(h.currentRoute,()=>V.value&&(y.value=!1)),W(()=>e.permanent,T=>{T&&(y.value=!0)}),Je(()=>{e.modelValue!=null||V.value||(y.value=e.permanent||!c.value)});const{isDragging:p,dragProgress:u,dragStyles:m}=Nt({isActive:y,isTemporary:V,width:B,touchless:q(e,"touchless"),position:I}),r=d(()=>{const T=V.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):B.value;return p.value?T*u.value:T}),{layoutItemStyles:_,layoutRect:f,layoutItemScrimStyles:k}=He({id:e.name,order:d(()=>parseInt(e.order,10)),position:I,layoutSize:r,elementSize:B,active:d(()=>y.value||p.value),disableTransitions:d(()=>p.value),absolute:d(()=>e.absolute||M.value&&typeof R.value!="string")}),{isStuck:R,stickyStyles:A}=Ct({rootEl:C,isSticky:M,layoutItemStyles:_}),H=ne(d(()=>typeof e.scrim=="string"?e.scrim:null)),z=d(()=>({...p.value?{opacity:u.value*.2,transition:"none"}:void 0,...f.value?{left:E(f.value.left),right:E(f.value.right),top:E(f.value.top),bottom:E(f.value.bottom)}:void 0,...k.value}));return Se({VList:{bgColor:"transparent"}}),P(()=>{var T,X,j,O;const ee=t.image||e.image;return i(ke,null,[i(e.tag,$e({ref:C,onMouseenter:()=>S.value=!0,onMouseleave:()=>S.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${I.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":S.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":V.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":M.value},o.value,v.value,s.value,g.value,w.value],style:[b.value,_.value,m.value,x.value,A.value]},a),{default:()=>[ee&&i("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(T=t.image)==null?void 0:T.call(t,{image:e.image}):i("img",{src:e.image,alt:""},null)]),t.prepend&&i("div",{class:"v-navigation-drawer__prepend"},[(X=t.prepend)==null?void 0:X.call(t)]),i("div",{class:"v-navigation-drawer__content"},[(j=t.default)==null?void 0:j.call(t)]),t.append&&i("div",{class:"v-navigation-drawer__append"},[(O=t.append)==null?void 0:O.call(t)])]}),i(Qe,{name:"fade-transition"},{default:()=>[V.value&&(p.value||y.value)&&!!e.scrim&&i("div",{class:["v-navigation-drawer__scrim",H.backgroundColorClasses.value],style:[z.value,H.backgroundColorStyles.value],onClick:()=>y.value=!1},null)]})])}),{isStuck:R}}}),At={class:"w-28"},zt=we({__name:"AppNavigation",setup(e){const{search:n}=ht(),a=et(),t=$(!1),l=$(null);return W(l,()=>{t.value=!1}),(o,s)=>{const v=lt,b=Vt;return D(),tt(ke,null,[i(Bt,{color:"primary"},{default:N(()=>[i(It,{variant:"text",onClick:s[0]||(s[0]=at(g=>t.value=!t.value,["stop"]))},{default:N(()=>[t.value?t.value?(D(),U(fe,{key:1,icon:"mdi-window-close"})):de("",!0):(D(),U(fe,{key:0,icon:"mdi-menu"}))]),_:1}),i(Tt,{class:"ml-0"},{default:N(()=>[ot("div",At,[i(v,{to:"/"},{default:N(()=>[i(Re,{src:"/logo.png"})]),_:1})])]),_:1}),["index","episodes"].includes(String(o.$route.name))?(D(),U(pt,{key:0,justify:"end"},{default:N(()=>[i(yt,{cols:"9",sm:"6",md:"4",lg:"3"},{default:N(()=>[i(b,{search:oe(n),"onUpdate:search":s[1]||(s[1]=g=>nt(n)?n.value=g:null)},null,8,["search"])]),_:1})]),_:1})):de("",!0)]),_:1}),i(Pt,{modelValue:t.value,"onUpdate:modelValue":s[4]||(s[4]=g=>t.value=g),temporary:""},{default:N(()=>[i(ct,{density:"compact",nav:""},{default:N(()=>[i(me,{title:"Characters",value:"characters",onClick:s[2]||(s[2]=g=>oe(a).push("/"))}),i(me,{title:"Episodes",value:"episodes",onClick:s[3]||(s[3]=g=>oe(a).push("/episodes"))})]),_:1})]),_:1},8,["modelValue"])],64)}}});const Ot=K({name:"VLayout",props:wt(),setup(e,n){let{slots:a}=n;const{layoutClasses:t,layoutStyles:l,getLayoutItem:o,items:s,layoutRef:v}=St(e);return P(()=>{var b;return i("div",{ref:v,class:t.value,style:l.value},[(b=a.default)==null?void 0:b.call(a)])}),{getLayoutItem:o,items:s}}});const Yt=K({name:"VMain",props:{scrollable:Boolean,...Q({tag:"main"})},setup(e,n){let{slots:a}=n;const{mainStyles:t}=_t(),{ssrBootStyles:l}=Ae();return P(()=>{var o,s;return i(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,l.value]},{default:()=>[e.scrollable?i("div",{class:"v-main__scroller"},[(o=a.default)==null?void 0:o.call(a)]):(s=a.default)==null?void 0:s.call(a)]})}),{}}}),Dt={};function Wt(e,n){const a=zt,t=ut("NuxtPage");return D(),U(Ot,null,{default:N(()=>[i(a),i(Yt,null,{default:N(()=>[i(t)]),_:1})]),_:1})}const Ut=st(Dt,[["render",Wt]]);export{Ut as default};
