(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode('.read-the-docs[data-v-a96fa91f]{color:#888}.keen-slider:not([data-keen-slider-disabled]){-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;align-content:flex-start;display:flex;overflow:hidden;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;user-select:none;-khtml-user-select:none;width:100%}.keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide{min-height:100%;overflow:hidden;position:relative;width:100%}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-reverse]{flex-direction:row-reverse}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-v]{flex-wrap:wrap}.arrow{position:absolute;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);fill:#fff;cursor:pointer}.arrow--left{left:-1.5rem}.arrow--right{left:auto;right:-1.5rem}.arrow--disabled{cursor:not-allowed;--tw-text-opacity: 1;color:rgb(244 244 245 / var(--tw-text-opacity))}.dots{padding:10px 0;justify-content:center}.dot{border:none;width:10px;height:10px;background:#c5c5c5;border-radius:50%;margin:0 5px;padding:5px;cursor:pointer}.dot:focus{outline:none}.dot.active{background:#000}#testimonialslider:before{content:"";display:flex;height:1px;width:25%;--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}#testimonialslider:after{content:"";float:right;display:block;height:1px;width:25%;--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function pa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function ha(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=be(r)?Vs(r):ha(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(be(e))return e;if(ue(e))return e}}const Ks=/;(?![^(]*\))/g,qs=/:([^]+)/,Xs=/\/\*.*?\*\//gs;function Vs(e){const t={};return e.replace(Xs,"").split(Ks).forEach(n=>{if(n){const r=n.split(qs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ut(e){let t="";if(be(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const r=Ut(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Js=pa(Qs);function go(e){return!!e||e===""}const ti=e=>be(e)?e:e==null?"":V(e)||ue(e)&&(e.toString===wo||!G(e.toString))?JSON.stringify(e,bo,2):String(e),bo=(e,t)=>t&&t.__v_isRef?bo(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:yo(t)?{[`Set(${t.size})`]:[...t.values()]}:ue(t)&&!V(t)&&!_o(t)?String(t):t,ce={},Wt=[],Xe=()=>{},Gs=()=>!1,Zs=/^on[^a-z]/,cr=e=>Zs.test(e),va=e=>e.startsWith("onUpdate:"),Pe=Object.assign,ga=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},el=Object.prototype.hasOwnProperty,te=(e,t)=>el.call(e,t),V=Array.isArray,Yt=e=>ur(e)==="[object Map]",yo=e=>ur(e)==="[object Set]",G=e=>typeof e=="function",be=e=>typeof e=="string",ba=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",xo=e=>ue(e)&&G(e.then)&&G(e.catch),wo=Object.prototype.toString,ur=e=>wo.call(e),tl=e=>ur(e).slice(8,-1),_o=e=>ur(e)==="[object Object]",ya=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qn=pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},nl=/-(\w)/g,tt=dr(e=>e.replace(nl,(t,n)=>n?n.toUpperCase():"")),rl=/\B([A-Z])/g,Zt=dr(e=>e.replace(rl,"-$1").toLowerCase()),mr=dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=dr(e=>e?`on${mr(e)}`:""),bn=(e,t)=>!Object.is(e,t),Ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},er=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ko=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ni;const al=()=>ni||(ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class il{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function ol(e,t=Me){t&&t.active&&t.effects.push(e)}function sl(){return Me}function ll(e){Me&&Me.cleanups.push(e)}const xa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Oo=e=>(e.w&yt)>0,Ao=e=>(e.n&yt)>0,fl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=yt},cl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Oo(a)&&!Ao(a)?a.delete(e):t[n++]=a,a.w&=~yt,a.n&=~yt}t.length=n}},$r=new WeakMap;let cn=0,yt=1;const Hr=30;let Be;const St=Symbol(""),Br=Symbol("");class wa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ol(this,r)}run(){if(!this.active)return this.fn();let t=Be,n=gt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Be,Be=this,gt=!0,yt=1<<++cn,cn<=Hr?fl(this):ri(this),this.fn()}finally{cn<=Hr&&cl(this),yt=1<<--cn,Be=this.parent,gt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(ri(this),this.onStop&&this.onStop(),this.active=!1)}}function ri(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let gt=!0;const Eo=[];function en(){Eo.push(gt),gt=!1}function tn(){const e=Eo.pop();gt=e===void 0?!0:e}function Ne(e,t,n){if(gt&&Be){let r=$r.get(e);r||$r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=xa()),Po(a)}}function Po(e,t){let n=!1;cn<=Hr?Ao(e)||(e.n|=yt,n=!Oo(e)):n=!e.has(Be),n&&(e.add(Be),Be.deps.push(e))}function lt(e,t,n,r,a,i){const o=$r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&V(e)){const l=ko(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":V(e)?ya(n)&&s.push(o.get("length")):(s.push(o.get(St)),Yt(e)&&s.push(o.get(Br)));break;case"delete":V(e)||(s.push(o.get(St)),Yt(e)&&s.push(o.get(Br)));break;case"set":Yt(e)&&s.push(o.get(St));break}if(s.length===1)s[0]&&Ur(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Ur(xa(l))}}function Ur(e,t){const n=V(e)?e:[...e];for(const r of n)r.computed&&ai(r);for(const r of n)r.computed||ai(r)}function ai(e,t){(e!==Be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ul=pa("__proto__,__v_isRef,__isVue"),Co=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ba)),dl=_a(),ml=_a(!1,!0),pl=_a(!0),ii=hl();function hl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ne(this);for(let i=0,o=this.length;i<o;i++)Ne(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(ne)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){en();const r=ne(this)[t].apply(this,n);return tn(),r}}),e}function _a(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Sl:No:t?Mo:So).get(r))return r;const o=V(r);if(!e&&o&&te(ii,a))return Reflect.get(ii,a,i);const s=Reflect.get(r,a,i);return(ba(a)?Co.has(a):ul(a))||(e||Ne(r,"get",a),t)?s:ge(s)?o&&ya(a)?s:s.value:ue(s)?e?Fo(s):Aa(s):s}}const vl=To(),gl=To(!0);function To(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&ge(o)&&!ge(a))return!1;if(!e&&(!tr(a)&&!Vt(a)&&(o=ne(o),a=ne(a)),!V(n)&&ge(o)&&!ge(a)))return o.value=a,!0;const s=V(n)&&ya(r)?Number(r)<n.length:te(n,r),l=Reflect.set(n,r,a,i);return n===ne(i)&&(s?bn(a,o)&&lt(n,"set",r,a):lt(n,"add",r,a)),l}}function bl(e,t){const n=te(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&lt(e,"delete",t,void 0),r}function yl(e,t){const n=Reflect.has(e,t);return(!ba(t)||!Co.has(t))&&Ne(e,"has",t),n}function xl(e){return Ne(e,"iterate",V(e)?"length":St),Reflect.ownKeys(e)}const Io={get:dl,set:vl,deleteProperty:bl,has:yl,ownKeys:xl},wl={get:pl,set(e,t){return!0},deleteProperty(e,t){return!0}},_l=Pe({},Io,{get:ml,set:gl}),ka=e=>e,pr=e=>Reflect.getPrototypeOf(e);function Mn(e,t,n=!1,r=!1){e=e.__v_raw;const a=ne(e),i=ne(t);n||(t!==i&&Ne(a,"get",t),Ne(a,"get",i));const{has:o}=pr(a),s=r?ka:n?Pa:yn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Nn(e,t=!1){const n=this.__v_raw,r=ne(n),a=ne(e);return t||(e!==a&&Ne(r,"has",e),Ne(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Fn(e,t=!1){return e=e.__v_raw,!t&&Ne(ne(e),"iterate",St),Reflect.get(e,"size",e)}function oi(e){e=ne(e);const t=ne(this);return pr(t).has.call(t,e)||(t.add(e),lt(t,"add",e,e)),this}function si(e,t){t=ne(t);const n=ne(this),{has:r,get:a}=pr(n);let i=r.call(n,e);i||(e=ne(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?bn(t,o)&&lt(n,"set",e,t):lt(n,"add",e,t),this}function li(e){const t=ne(this),{has:n,get:r}=pr(t);let a=n.call(t,e);a||(e=ne(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&lt(t,"delete",e,void 0),i}function fi(){const e=ne(this),t=e.size!==0,n=e.clear();return t&&lt(e,"clear",void 0,void 0),n}function Ln(e,t){return function(r,a){const i=this,o=i.__v_raw,s=ne(o),l=t?ka:e?Pa:yn;return!e&&Ne(s,"iterate",St),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Rn(e,t,n){return function(...r){const a=this.__v_raw,i=ne(a),o=Yt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?ka:t?Pa:yn;return!t&&Ne(i,"iterate",l?Br:St),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[c(m[0]),c(m[1])]:c(m),done:p}},[Symbol.iterator](){return this}}}}function pt(e){return function(...t){return e==="delete"?!1:this}}function kl(){const e={get(i){return Mn(this,i)},get size(){return Fn(this)},has:Nn,add:oi,set:si,delete:li,clear:fi,forEach:Ln(!1,!1)},t={get(i){return Mn(this,i,!1,!0)},get size(){return Fn(this)},has:Nn,add:oi,set:si,delete:li,clear:fi,forEach:Ln(!1,!0)},n={get(i){return Mn(this,i,!0)},get size(){return Fn(this,!0)},has(i){return Nn.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Ln(!0,!1)},r={get(i){return Mn(this,i,!0,!0)},get size(){return Fn(this,!0)},has(i){return Nn.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Rn(i,!1,!1),n[i]=Rn(i,!0,!1),t[i]=Rn(i,!1,!0),r[i]=Rn(i,!0,!0)}),[e,n,t,r]}const[Ol,Al,El,Pl]=kl();function Oa(e,t){const n=t?e?Pl:El:e?Al:Ol;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(te(n,a)&&a in r?n:r,a,i)}const Cl={get:Oa(!1,!1)},Tl={get:Oa(!1,!0)},Il={get:Oa(!0,!1)},So=new WeakMap,Mo=new WeakMap,No=new WeakMap,Sl=new WeakMap;function Ml(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ml(tl(e))}function Aa(e){return Vt(e)?e:Ea(e,!1,Io,Cl,So)}function Fl(e){return Ea(e,!1,_l,Tl,Mo)}function Fo(e){return Ea(e,!0,wl,Il,No)}function Ea(e,t,n,r,a){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Nl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Kt(e){return Vt(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function tr(e){return!!(e&&e.__v_isShallow)}function Lo(e){return Kt(e)||Vt(e)}function ne(e){const t=e&&e.__v_raw;return t?ne(t):e}function Ro(e){return er(e,"__v_skip",!0),e}const yn=e=>ue(e)?Aa(e):e,Pa=e=>ue(e)?Fo(e):e;function jo(e){gt&&Be&&(e=ne(e),Po(e.dep||(e.dep=xa())))}function zo(e,t){e=ne(e),e.dep&&Ur(e.dep)}function ge(e){return!!(e&&e.__v_isRef===!0)}function We(e){return Do(e,!1)}function Er(e){return Do(e,!0)}function Do(e,t){return ge(e)?e:new Ll(e,t)}class Ll{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ne(t),this._value=n?t:yn(t)}get value(){return jo(this),this._value}set value(t){const n=this.__v_isShallow||tr(t)||Vt(t);t=n?t:ne(t),bn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:yn(t),zo(this))}}function Re(e){return ge(e)?e.value:e}const Rl={get:(e,t,n)=>Re(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ge(a)&&!ge(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function $o(e){return Kt(e)?e:new Proxy(e,Rl)}var Ho;class jl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ho]=!1,this._dirty=!0,this.effect=new wa(t,()=>{this._dirty||(this._dirty=!0,zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=ne(this);return jo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ho="__v_isReadonly";function zl(e,t,n=!1){let r,a;const i=G(e);return i?(r=e,a=Xe):(r=e.get,a=e.set),new jl(r,a,i||!a,n)}function bt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){hr(i,t,n)}return a}function Ve(e,t,n,r){if(G(e)){const i=bt(e,t,n,r);return i&&xo(i)&&i.catch(o=>{hr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ve(e[i],t,n,r));return a}function hr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){bt(l,null,10,[e,o,s]);return}}Dl(e,n,a,r)}function Dl(e,t,n,r=!0){console.error(e)}let xn=!1,Wr=!1;const ke=[];let Ze=0;const qt=[];let it=null,Et=0;const Bo=Promise.resolve();let Ca=null;function $l(e){const t=Ca||Bo;return e?t.then(this?e.bind(this):e):t}function Hl(e){let t=Ze+1,n=ke.length;for(;t<n;){const r=t+n>>>1;wn(ke[r])<e?t=r+1:n=r}return t}function Ta(e){(!ke.length||!ke.includes(e,xn&&e.allowRecurse?Ze+1:Ze))&&(e.id==null?ke.push(e):ke.splice(Hl(e.id),0,e),Uo())}function Uo(){!xn&&!Wr&&(Wr=!0,Ca=Bo.then(Yo))}function Bl(e){const t=ke.indexOf(e);t>Ze&&ke.splice(t,1)}function Ul(e){V(e)?qt.push(...e):(!it||!it.includes(e,e.allowRecurse?Et+1:Et))&&qt.push(e),Uo()}function ci(e,t=xn?Ze+1:0){for(;t<ke.length;t++){const n=ke[t];n&&n.pre&&(ke.splice(t,1),t--,n())}}function Wo(e){if(qt.length){const t=[...new Set(qt)];if(qt.length=0,it){it.push(...t);return}for(it=t,it.sort((n,r)=>wn(n)-wn(r)),Et=0;Et<it.length;Et++)it[Et]();it=null,Et=0}}const wn=e=>e.id==null?1/0:e.id,Wl=(e,t)=>{const n=wn(e)-wn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Yo(e){Wr=!1,xn=!0,ke.sort(Wl);const t=Xe;try{for(Ze=0;Ze<ke.length;Ze++){const n=ke[Ze];n&&n.active!==!1&&bt(n,null,14)}}finally{Ze=0,ke.length=0,Wo(),xn=!1,Ca=null,(ke.length||qt.length)&&Yo()}}function Yl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ce;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[c]||ce;p&&(a=n.map(b=>be(b)?b.trim():b)),m&&(a=n.map(ko))}let s,l=r[s=Or(t)]||r[s=Or(tt(t))];!l&&i&&(l=r[s=Or(Zt(t))]),l&&Ve(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ve(f,e,6,a)}}function Ko(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!G(e)){const l=f=>{const c=Ko(f,t,!0);c&&(s=!0,Pe(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ue(e)&&r.set(e,null),null):(V(i)?i.forEach(l=>o[l]=null):Pe(o,i),ue(e)&&r.set(e,o),o)}function vr(e,t){return!e||!cr(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(e,t[0].toLowerCase()+t.slice(1))||te(e,Zt(t))||te(e,t))}let Ye=null,qo=null;function nr(e){const t=Ye;return Ye=e,qo=e&&e.type.__scopeId||null,t}function Kl(e,t=Ye,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&xi(-1);const i=nr(t);let o;try{o=e(...a)}finally{nr(i),r._d&&xi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Pr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:m,data:p,setupState:b,ctx:x,inheritAttrs:O}=e;let I,h;const y=nr(e);try{if(n.shapeFlag&4){const N=a||r;I=Ge(c.call(N,N,m,i,b,p,x)),h=l}else{const N=t;I=Ge(N.length>1?N(i,{attrs:l,slots:s,emit:f}):N(i,null)),h=t.props?l:ql(l)}}catch(N){mn.length=0,hr(N,e,1),I=Ee(Nt)}let v=I;if(h&&O!==!1){const N=Object.keys(h),{shapeFlag:F}=v;N.length&&F&7&&(o&&N.some(va)&&(h=Xl(h,o)),v=Qt(v,h))}return n.dirs&&(v=Qt(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),I=v,nr(y),I}const ql=e=>{let t;for(const n in e)(n==="class"||n==="style"||cr(n))&&((t||(t={}))[n]=e[n]);return t},Xl=(e,t)=>{const n={};for(const r in e)(!va(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Vl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ui(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const p=c[m];if(o[p]!==r[p]&&!vr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ui(r,o,f):!0:!!o;return!1}function ui(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!vr(n,i))return!0}return!1}function Ql({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Jl=e=>e.__isSuspense;function Gl(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):Ul(e)}function Zl(e,t){if(xe){let n=xe.provides;const r=xe.parent&&xe.parent.provides;r===n&&(n=xe.provides=Object.create(r)),n[e]=t}}function Xn(e,t,n=!1){const r=xe||Ye;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&G(t)?t.call(r.proxy):t}}const jn={};function st(e,t,n){return Xo(e,t,n)}function Xo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ce){const s=xe;let l,f=!1,c=!1;if(ge(e)?(l=()=>e.value,f=tr(e)):Kt(e)?(l=()=>e,r=!0):V(e)?(c=!0,f=e.some(v=>Kt(v)||tr(v)),l=()=>e.map(v=>{if(ge(v))return v.value;if(Kt(v))return Dt(v);if(G(v))return bt(v,s,2)})):G(e)?t?l=()=>bt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ve(e,s,3,[p])}:l=Xe,t&&r){const v=l;l=()=>Dt(v())}let m,p=v=>{m=h.onStop=()=>{bt(v,s,4)}},b;if(kn)if(p=Xe,t?n&&Ve(t,s,3,[l(),c?[]:void 0,p]):l(),a==="sync"){const v=qf();b=v.__watcherHandles||(v.__watcherHandles=[])}else return Xe;let x=c?new Array(e.length).fill(jn):jn;const O=()=>{if(h.active)if(t){const v=h.run();(r||f||(c?v.some((N,F)=>bn(N,x[F])):bn(v,x)))&&(m&&m(),Ve(t,s,3,[v,x===jn?void 0:c&&x[0]===jn?[]:x,p]),x=v)}else h.run()};O.allowRecurse=!!t;let I;a==="sync"?I=O:a==="post"?I=()=>Ie(O,s&&s.suspense):(O.pre=!0,s&&(O.id=s.uid),I=()=>Ta(O));const h=new wa(l,I);t?n?O():x=h.run():a==="post"?Ie(h.run.bind(h),s&&s.suspense):h.run();const y=()=>{h.stop(),s&&s.scope&&ga(s.scope.effects,h)};return b&&b.push(y),y}function ef(e,t,n){const r=this.proxy,a=be(e)?e.includes(".")?Vo(r,e):()=>r[e]:e.bind(r,r);let i;G(t)?i=t:(i=t.handler,n=t);const o=xe;Jt(this);const s=Xo(a,i.bind(r),n);return o?Jt(o):Mt(),s}function Vo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Dt(e,t){if(!ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))Dt(e.value,t);else if(V(e))for(let n=0;n<e.length;n++)Dt(e[n],t);else if(yo(e)||Yt(e))e.forEach(n=>{Dt(n,t)});else if(_o(e))for(const n in e)Dt(e[n],t);return e}function Ia(e){return G(e)?{setup:e,name:e.name}:e}const Vn=e=>!!e.type.__asyncLoader,Qo=e=>e.type.__isKeepAlive;function tf(e,t){Jo(e,"a",t)}function nf(e,t){Jo(e,"da",t)}function Jo(e,t,n=xe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(gr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Qo(a.parent.vnode)&&rf(r,t,n,a),a=a.parent}}function rf(e,t,n,r){const a=gr(t,e,r,!0);Ma(()=>{ga(r[t],a)},n)}function gr(e,t,n=xe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;en(),Jt(n);const s=Ve(t,n,e,o);return Mt(),tn(),s});return r?a.unshift(i):a.push(i),i}}const dt=e=>(t,n=xe)=>(!kn||e==="sp")&&gr(e,(...r)=>t(...r),n),af=dt("bm"),Sa=dt("m"),of=dt("bu"),sf=dt("u"),lf=dt("bum"),Ma=dt("um"),ff=dt("sp"),cf=dt("rtg"),uf=dt("rtc");function df(e,t=xe){gr("ec",e,t)}function kt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(en(),Ve(l,n,8,[e.el,s,e,t]),tn())}}const Go="components";function Zo(e,t){return pf(Go,e,!0,t)||e}const mf=Symbol();function pf(e,t,n=!0,r=!1){const a=Ye||xe;if(a){const i=a.type;if(e===Go){const s=Wf(i,!1);if(s&&(s===t||s===tt(t)||s===mr(tt(t))))return i}const o=di(a[e]||i[e],t)||di(a.appContext[e],t);return!o&&r?i:o}}function di(e,t){return e&&(e[t]||e[tt(t)]||e[mr(tt(t))])}function mi(e,t,n,r){let a;const i=n&&n[r];if(V(e)||be(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ue(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Yr=e=>e?cs(e)?Ra(e)||e.proxy:Yr(e.parent):null,dn=Pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yr(e.parent),$root:e=>Yr(e.root),$emit:e=>e.emit,$options:e=>Na(e),$forceUpdate:e=>e.f||(e.f=()=>Ta(e.update)),$nextTick:e=>e.n||(e.n=$l.bind(e.proxy)),$watch:e=>ef.bind(e)}),Cr=(e,t)=>e!==ce&&!e.__isScriptSetup&&te(e,t),hf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const b=o[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Cr(r,t))return o[t]=1,r[t];if(a!==ce&&te(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&te(f,t))return o[t]=3,i[t];if(n!==ce&&te(n,t))return o[t]=4,n[t];Kr&&(o[t]=0)}}const c=dn[t];let m,p;if(c)return t==="$attrs"&&Ne(e,"get",t),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==ce&&te(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,te(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Cr(a,t)?(a[t]=n,!0):r!==ce&&te(r,t)?(r[t]=n,!0):te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ce&&te(e,o)||Cr(t,o)||(s=i[0])&&te(s,o)||te(r,o)||te(dn,o)||te(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Kr=!0;function vf(e){const t=Na(e),n=e.proxy,r=e.ctx;Kr=!1,t.beforeCreate&&pi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:m,mounted:p,beforeUpdate:b,updated:x,activated:O,deactivated:I,beforeDestroy:h,beforeUnmount:y,destroyed:v,unmounted:N,render:F,renderTracked:K,renderTriggered:M,errorCaptured:B,serverPrefetch:Q,expose:se,inheritAttrs:ie,components:re,directives:U,filters:z}=t;if(f&&gf(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const C in o){const E=o[C];G(E)&&(r[C]=E.bind(n))}if(a){const C=a.call(n,n);ue(C)&&(e.data=Aa(C))}if(Kr=!0,i)for(const C in i){const E=i[C],D=G(E)?E.bind(n,n):G(E.get)?E.get.bind(n,n):Xe,q=!G(E)&&G(E.set)?E.set.bind(n):Xe,J=_e({get:D,set:q});Object.defineProperty(r,C,{enumerable:!0,configurable:!0,get:()=>J.value,set:Z=>J.value=Z})}if(s)for(const C in s)es(s[C],r,n,C);if(l){const C=G(l)?l.call(n):l;Reflect.ownKeys(C).forEach(E=>{Zl(E,C[E])})}c&&pi(c,e,"c");function _(C,E){V(E)?E.forEach(D=>C(D.bind(n))):E&&C(E.bind(n))}if(_(af,m),_(Sa,p),_(of,b),_(sf,x),_(tf,O),_(nf,I),_(df,B),_(uf,K),_(cf,M),_(lf,y),_(Ma,N),_(ff,Q),V(se))if(se.length){const C=e.exposed||(e.exposed={});se.forEach(E=>{Object.defineProperty(C,E,{get:()=>n[E],set:D=>n[E]=D})})}else e.exposed||(e.exposed={});F&&e.render===Xe&&(e.render=F),ie!=null&&(e.inheritAttrs=ie),re&&(e.components=re),U&&(e.directives=U)}function gf(e,t,n=Xe,r=!1){V(e)&&(e=qr(e));for(const a in e){const i=e[a];let o;ue(i)?"default"in i?o=Xn(i.from||a,i.default,!0):o=Xn(i.from||a):o=Xn(i),ge(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function pi(e,t,n){Ve(V(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function es(e,t,n,r){const a=r.includes(".")?Vo(n,r):()=>n[r];if(be(e)){const i=t[e];G(i)&&st(a,i)}else if(G(e))st(a,e.bind(n));else if(ue(e))if(V(e))e.forEach(i=>es(i,t,n,r));else{const i=G(e.handler)?e.handler.bind(n):t[e.handler];G(i)&&st(a,i,e)}}function Na(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>rr(l,f,o,!0)),rr(l,t,o)),ue(t)&&i.set(t,l),l}function rr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&rr(e,i,n,!0),a&&a.forEach(o=>rr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=bf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const bf={data:hi,props:At,emits:At,methods:At,computed:At,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:At,directives:At,watch:xf,provide:hi,inject:yf};function hi(e,t){return t?e?function(){return Pe(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function yf(e,t){return At(qr(e),qr(t))}function qr(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function At(e,t){return e?Pe(Pe(Object.create(null),e),t):t}function xf(e,t){if(!e)return t;if(!t)return e;const n=Pe(Object.create(null),e);for(const r in t)n[r]=Oe(e[r],t[r]);return n}function wf(e,t,n,r=!1){const a={},i={};er(i,yr,1),e.propsDefaults=Object.create(null),ts(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Fl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function _f(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=ne(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let p=c[m];if(vr(e.emitsOptions,p))continue;const b=t[p];if(l)if(te(i,p))b!==i[p]&&(i[p]=b,f=!0);else{const x=tt(p);a[x]=Xr(l,s,x,b,e,!1)}else b!==i[p]&&(i[p]=b,f=!0)}}}else{ts(e,t,a,i)&&(f=!0);let c;for(const m in s)(!t||!te(t,m)&&((c=Zt(m))===m||!te(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(a[m]=Xr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!te(t,m))&&(delete i[m],f=!0)}f&&lt(e,"set","$attrs")}function ts(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(qn(l))continue;const f=t[l];let c;a&&te(a,c=tt(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:vr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=ne(n),f=s||ce;for(let c=0;c<i.length;c++){const m=i[c];n[m]=Xr(a,l,m,f[m],e,!te(f,m))}}return o}function Xr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=te(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&G(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Jt(a),r=f[n]=l.call(null,t),Mt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Zt(n))&&(r=!0))}return r}function ns(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!G(e)){const c=m=>{l=!0;const[p,b]=ns(m,t,!0);Pe(o,p),b&&s.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ue(e)&&r.set(e,Wt),Wt;if(V(i))for(let c=0;c<i.length;c++){const m=tt(i[c]);vi(m)&&(o[m]=ce)}else if(i)for(const c in i){const m=tt(c);if(vi(m)){const p=i[c],b=o[m]=V(p)||G(p)?{type:p}:Object.assign({},p);if(b){const x=yi(Boolean,b.type),O=yi(String,b.type);b[0]=x>-1,b[1]=O<0||x<O,(x>-1||te(b,"default"))&&s.push(m)}}}const f=[o,s];return ue(e)&&r.set(e,f),f}function vi(e){return e[0]!=="$"}function gi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function bi(e,t){return gi(e)===gi(t)}function yi(e,t){return V(t)?t.findIndex(n=>bi(n,e)):G(t)&&bi(t,e)?0:-1}const rs=e=>e[0]==="_"||e==="$stable",Fa=e=>V(e)?e.map(Ge):[Ge(e)],kf=(e,t,n)=>{if(t._n)return t;const r=Kl((...a)=>Fa(t(...a)),n);return r._c=!1,r},as=(e,t,n)=>{const r=e._ctx;for(const a in e){if(rs(a))continue;const i=e[a];if(G(i))t[a]=kf(a,i,r);else if(i!=null){const o=Fa(i);t[a]=()=>o}}},is=(e,t)=>{const n=Fa(t);e.slots.default=()=>n},Of=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ne(t),er(t,"_",n)):as(t,e.slots={})}else e.slots={},t&&is(e,t);er(e.slots,yr,1)},Af=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ce;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(Pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,as(t,a)),o=t}else t&&(is(e,t),o={default:1});if(i)for(const s in a)!rs(s)&&!(s in o)&&delete a[s]};function os(){return{app:null,config:{isNativeTag:Gs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ef=0;function Pf(e,t){return function(r,a=null){G(r)||(r=Object.assign({},r)),a!=null&&!ue(a)&&(a=null);const i=os(),o=new Set;let s=!1;const l=i.app={_uid:Ef++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Xf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&G(f.install)?(o.add(f),f.install(l,...c)):G(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,m){if(!s){const p=Ee(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,Ra(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function Vr(e,t,n,r,a=!1){if(V(e)){e.forEach((p,b)=>Vr(p,t&&(V(t)?t[b]:t),n,r,a));return}if(Vn(r)&&!a)return;const i=r.shapeFlag&4?Ra(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===ce?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(be(f)?(c[f]=null,te(m,f)&&(m[f]=null)):ge(f)&&(f.value=null)),G(l))bt(l,s,12,[o,c]);else{const p=be(l),b=ge(l);if(p||b){const x=()=>{if(e.f){const O=p?te(m,l)?m[l]:c[l]:l.value;a?V(O)&&ga(O,i):V(O)?O.includes(i)||O.push(i):p?(c[l]=[i],te(m,l)&&(m[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,te(m,l)&&(m[l]=o)):b&&(l.value=o,e.k&&(c[e.k]=o))};o?(x.id=-1,Ie(x,n)):x()}}}const Ie=Gl;function Cf(e){return Tf(e)}function Tf(e,t){const n=al();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:m,nextSibling:p,setScopeId:b=Xe,insertStaticContent:x}=e,O=(u,d,g,k=null,w=null,T=null,R=!1,P=null,S=!!d.dynamicChildren)=>{if(u===d)return;u&&!on(u,d)&&(k=Rt(u),Z(u,w,T,!0),u=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:A,ref:W,shapeFlag:$}=d;switch(A){case br:I(u,d,g,k);break;case Nt:h(u,d,g,k);break;case Tr:u==null&&y(d,g,k,R);break;case $e:re(u,d,g,k,w,T,R,P,S);break;default:$&1?F(u,d,g,k,w,T,R,P,S):$&6?U(u,d,g,k,w,T,R,P,S):($&64||$&128)&&A.process(u,d,g,k,w,T,R,P,S,rt)}W!=null&&w&&Vr(W,u&&u.ref,T,d||u,!d)},I=(u,d,g,k)=>{if(u==null)r(d.el=s(d.children),g,k);else{const w=d.el=u.el;d.children!==u.children&&f(w,d.children)}},h=(u,d,g,k)=>{u==null?r(d.el=l(d.children||""),g,k):d.el=u.el},y=(u,d,g,k)=>{[u.el,u.anchor]=x(u.children,d,g,k,u.el,u.anchor)},v=({el:u,anchor:d},g,k)=>{let w;for(;u&&u!==d;)w=p(u),r(u,g,k),u=w;r(d,g,k)},N=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),a(u),u=g;a(d)},F=(u,d,g,k,w,T,R,P,S)=>{R=R||d.type==="svg",u==null?K(d,g,k,w,T,R,P,S):Q(u,d,w,T,R,P,S)},K=(u,d,g,k,w,T,R,P)=>{let S,A;const{type:W,props:$,shapeFlag:Y,transition:X,dirs:ee}=u;if(S=u.el=o(u.type,T,$&&$.is,$),Y&8?c(S,u.children):Y&16&&B(u.children,S,null,k,w,T&&W!=="foreignObject",R,P),ee&&kt(u,null,k,"created"),$){for(const ae in $)ae!=="value"&&!qn(ae)&&i(S,ae,null,$[ae],T,u.children,k,w,pe);"value"in $&&i(S,"value",null,$.value),(A=$.onVnodeBeforeMount)&&Je(A,k,u)}M(S,u,u.scopeId,R,k),ee&&kt(u,null,k,"beforeMount");const oe=(!w||w&&!w.pendingBranch)&&X&&!X.persisted;oe&&X.beforeEnter(S),r(S,d,g),((A=$&&$.onVnodeMounted)||oe||ee)&&Ie(()=>{A&&Je(A,k,u),oe&&X.enter(S),ee&&kt(u,null,k,"mounted")},w)},M=(u,d,g,k,w)=>{if(g&&b(u,g),k)for(let T=0;T<k.length;T++)b(u,k[T]);if(w){let T=w.subTree;if(d===T){const R=w.vnode;M(u,R,R.scopeId,R.slotScopeIds,w.parent)}}},B=(u,d,g,k,w,T,R,P,S=0)=>{for(let A=S;A<u.length;A++){const W=u[A]=P?vt(u[A]):Ge(u[A]);O(null,W,d,g,k,w,T,R,P)}},Q=(u,d,g,k,w,T,R)=>{const P=d.el=u.el;let{patchFlag:S,dynamicChildren:A,dirs:W}=d;S|=u.patchFlag&16;const $=u.props||ce,Y=d.props||ce;let X;g&&Ot(g,!1),(X=Y.onVnodeBeforeUpdate)&&Je(X,g,d,u),W&&kt(d,u,g,"beforeUpdate"),g&&Ot(g,!0);const ee=w&&d.type!=="foreignObject";if(A?se(u.dynamicChildren,A,P,g,k,ee,T):R||E(u,d,P,null,g,k,ee,T,!1),S>0){if(S&16)ie(P,d,$,Y,g,k,w);else if(S&2&&$.class!==Y.class&&i(P,"class",null,Y.class,w),S&4&&i(P,"style",$.style,Y.style,w),S&8){const oe=d.dynamicProps;for(let ae=0;ae<oe.length;ae++){const ve=oe[ae],ze=$[ve],zt=Y[ve];(zt!==ze||ve==="value")&&i(P,ve,ze,zt,w,u.children,g,k,pe)}}S&1&&u.children!==d.children&&c(P,d.children)}else!R&&A==null&&ie(P,d,$,Y,g,k,w);((X=Y.onVnodeUpdated)||W)&&Ie(()=>{X&&Je(X,g,d,u),W&&kt(d,u,g,"updated")},k)},se=(u,d,g,k,w,T,R)=>{for(let P=0;P<d.length;P++){const S=u[P],A=d[P],W=S.el&&(S.type===$e||!on(S,A)||S.shapeFlag&70)?m(S.el):g;O(S,A,W,null,k,w,T,R,!0)}},ie=(u,d,g,k,w,T,R)=>{if(g!==k){if(g!==ce)for(const P in g)!qn(P)&&!(P in k)&&i(u,P,g[P],null,R,d.children,w,T,pe);for(const P in k){if(qn(P))continue;const S=k[P],A=g[P];S!==A&&P!=="value"&&i(u,P,A,S,R,d.children,w,T,pe)}"value"in k&&i(u,"value",g.value,k.value)}},re=(u,d,g,k,w,T,R,P,S)=>{const A=d.el=u?u.el:s(""),W=d.anchor=u?u.anchor:s("");let{patchFlag:$,dynamicChildren:Y,slotScopeIds:X}=d;X&&(P=P?P.concat(X):X),u==null?(r(A,g,k),r(W,g,k),B(d.children,g,W,w,T,R,P,S)):$>0&&$&64&&Y&&u.dynamicChildren?(se(u.dynamicChildren,Y,g,w,T,R,P),(d.key!=null||w&&d===w.subTree)&&ss(u,d,!0)):E(u,d,g,W,w,T,R,P,S)},U=(u,d,g,k,w,T,R,P,S)=>{d.slotScopeIds=P,u==null?d.shapeFlag&512?w.ctx.activate(d,g,k,R,S):z(d,g,k,w,T,R,S):L(u,d,S)},z=(u,d,g,k,w,T,R)=>{const P=u.component=Df(u,k,w);if(Qo(u)&&(P.ctx.renderer=rt),$f(P),P.asyncDep){if(w&&w.registerDep(P,_),!u.el){const S=P.subTree=Ee(Nt);h(null,S,d,g)}return}_(P,u,d,g,w,T,R)},L=(u,d,g)=>{const k=d.component=u.component;if(Vl(u,d,g))if(k.asyncDep&&!k.asyncResolved){C(k,d,g);return}else k.next=d,Bl(k.update),k.update();else d.el=u.el,k.vnode=d},_=(u,d,g,k,w,T,R)=>{const P=()=>{if(u.isMounted){let{next:W,bu:$,u:Y,parent:X,vnode:ee}=u,oe=W,ae;Ot(u,!1),W?(W.el=ee.el,C(u,W,R)):W=ee,$&&Ar($),(ae=W.props&&W.props.onVnodeBeforeUpdate)&&Je(ae,X,W,ee),Ot(u,!0);const ve=Pr(u),ze=u.subTree;u.subTree=ve,O(ze,ve,m(ze.el),Rt(ze),u,w,T),W.el=ve.el,oe===null&&Ql(u,ve.el),Y&&Ie(Y,w),(ae=W.props&&W.props.onVnodeUpdated)&&Ie(()=>Je(ae,X,W,ee),w)}else{let W;const{el:$,props:Y}=d,{bm:X,m:ee,parent:oe}=u,ae=Vn(d);if(Ot(u,!1),X&&Ar(X),!ae&&(W=Y&&Y.onVnodeBeforeMount)&&Je(W,oe,d),Ot(u,!0),$&&at){const ve=()=>{u.subTree=Pr(u),at($,u.subTree,u,w,null)};ae?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ve()):ve()}else{const ve=u.subTree=Pr(u);O(null,ve,g,k,u,w,T),d.el=ve.el}if(ee&&Ie(ee,w),!ae&&(W=Y&&Y.onVnodeMounted)){const ve=d;Ie(()=>Je(W,oe,ve),w)}(d.shapeFlag&256||oe&&Vn(oe.vnode)&&oe.vnode.shapeFlag&256)&&u.a&&Ie(u.a,w),u.isMounted=!0,d=g=k=null}},S=u.effect=new wa(P,()=>Ta(A),u.scope),A=u.update=()=>S.run();A.id=u.uid,Ot(u,!0),A()},C=(u,d,g)=>{d.component=u;const k=u.vnode.props;u.vnode=d,u.next=null,_f(u,d.props,k,g),Af(u,d.children,g),en(),ci(),tn()},E=(u,d,g,k,w,T,R,P,S=!1)=>{const A=u&&u.children,W=u?u.shapeFlag:0,$=d.children,{patchFlag:Y,shapeFlag:X}=d;if(Y>0){if(Y&128){q(A,$,g,k,w,T,R,P,S);return}else if(Y&256){D(A,$,g,k,w,T,R,P,S);return}}X&8?(W&16&&pe(A,w,T),$!==A&&c(g,$)):W&16?X&16?q(A,$,g,k,w,T,R,P,S):pe(A,w,T,!0):(W&8&&c(g,""),X&16&&B($,g,k,w,T,R,P,S))},D=(u,d,g,k,w,T,R,P,S)=>{u=u||Wt,d=d||Wt;const A=u.length,W=d.length,$=Math.min(A,W);let Y;for(Y=0;Y<$;Y++){const X=d[Y]=S?vt(d[Y]):Ge(d[Y]);O(u[Y],X,g,null,w,T,R,P,S)}A>W?pe(u,w,T,!0,!1,$):B(d,g,k,w,T,R,P,S,$)},q=(u,d,g,k,w,T,R,P,S)=>{let A=0;const W=d.length;let $=u.length-1,Y=W-1;for(;A<=$&&A<=Y;){const X=u[A],ee=d[A]=S?vt(d[A]):Ge(d[A]);if(on(X,ee))O(X,ee,g,null,w,T,R,P,S);else break;A++}for(;A<=$&&A<=Y;){const X=u[$],ee=d[Y]=S?vt(d[Y]):Ge(d[Y]);if(on(X,ee))O(X,ee,g,null,w,T,R,P,S);else break;$--,Y--}if(A>$){if(A<=Y){const X=Y+1,ee=X<W?d[X].el:k;for(;A<=Y;)O(null,d[A]=S?vt(d[A]):Ge(d[A]),g,ee,w,T,R,P,S),A++}}else if(A>Y)for(;A<=$;)Z(u[A],w,T,!0),A++;else{const X=A,ee=A,oe=new Map;for(A=ee;A<=Y;A++){const Se=d[A]=S?vt(d[A]):Ge(d[A]);Se.key!=null&&oe.set(Se.key,A)}let ae,ve=0;const ze=Y-ee+1;let zt=!1,Ga=0;const an=new Array(ze);for(A=0;A<ze;A++)an[A]=0;for(A=X;A<=$;A++){const Se=u[A];if(ve>=ze){Z(Se,w,T,!0);continue}let Qe;if(Se.key!=null)Qe=oe.get(Se.key);else for(ae=ee;ae<=Y;ae++)if(an[ae-ee]===0&&on(Se,d[ae])){Qe=ae;break}Qe===void 0?Z(Se,w,T,!0):(an[Qe-ee]=A+1,Qe>=Ga?Ga=Qe:zt=!0,O(Se,d[Qe],g,null,w,T,R,P,S),ve++)}const Za=zt?If(an):Wt;for(ae=Za.length-1,A=ze-1;A>=0;A--){const Se=ee+A,Qe=d[Se],ei=Se+1<W?d[Se+1].el:k;an[A]===0?O(null,Qe,g,ei,w,T,R,P,S):zt&&(ae<0||A!==Za[ae]?J(Qe,g,ei,2):ae--)}}},J=(u,d,g,k,w=null)=>{const{el:T,type:R,transition:P,children:S,shapeFlag:A}=u;if(A&6){J(u.component.subTree,d,g,k);return}if(A&128){u.suspense.move(d,g,k);return}if(A&64){R.move(u,d,g,rt);return}if(R===$e){r(T,d,g);for(let $=0;$<S.length;$++)J(S[$],d,g,k);r(u.anchor,d,g);return}if(R===Tr){v(u,d,g);return}if(k!==2&&A&1&&P)if(k===0)P.beforeEnter(T),r(T,d,g),Ie(()=>P.enter(T),w);else{const{leave:$,delayLeave:Y,afterLeave:X}=P,ee=()=>r(T,d,g),oe=()=>{$(T,()=>{ee(),X&&X()})};Y?Y(T,ee,oe):oe()}else r(T,d,g)},Z=(u,d,g,k=!1,w=!1)=>{const{type:T,props:R,ref:P,children:S,dynamicChildren:A,shapeFlag:W,patchFlag:$,dirs:Y}=u;if(P!=null&&Vr(P,null,g,u,!0),W&256){d.ctx.deactivate(u);return}const X=W&1&&Y,ee=!Vn(u);let oe;if(ee&&(oe=R&&R.onVnodeBeforeUnmount)&&Je(oe,d,u),W&6)nt(u.component,g,k);else{if(W&128){u.suspense.unmount(g,k);return}X&&kt(u,null,d,"beforeUnmount"),W&64?u.type.remove(u,d,g,w,rt,k):A&&(T!==$e||$>0&&$&64)?pe(A,d,g,!1,!0):(T===$e&&$&384||!w&&W&16)&&pe(S,d,g),k&&we(u)}(ee&&(oe=R&&R.onVnodeUnmounted)||X)&&Ie(()=>{oe&&Je(oe,d,u),X&&kt(u,null,d,"unmounted")},g)},we=u=>{const{type:d,el:g,anchor:k,transition:w}=u;if(d===$e){me(g,k);return}if(d===Tr){N(u);return}const T=()=>{a(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(u.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:P}=w,S=()=>R(g,T);P?P(u.el,T,S):S()}else T()},me=(u,d)=>{let g;for(;u!==d;)g=p(u),a(u),u=g;a(d)},nt=(u,d,g)=>{const{bum:k,scope:w,update:T,subTree:R,um:P}=u;k&&Ar(k),w.stop(),T&&(T.active=!1,Z(R,u,d,g)),P&&Ie(P,d),Ie(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},pe=(u,d,g,k=!1,w=!1,T=0)=>{for(let R=T;R<u.length;R++)Z(u[R],d,g,k,w)},Rt=u=>u.shapeFlag&6?Rt(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),he=(u,d,g)=>{u==null?d._vnode&&Z(d._vnode,null,null,!0):O(d._vnode||null,u,d,null,null,null,g),ci(),Wo(),d._vnode=u},rt={p:O,um:Z,m:J,r:we,mt:z,mc:B,pc:E,pbc:se,n:Rt,o:e};let jt,at;return t&&([jt,at]=t(rt)),{render:he,hydrate:jt,createApp:Pf(he,jt)}}function Ot({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ss(e,t,n=!1){const r=e.children,a=t.children;if(V(r)&&V(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=vt(a[i]),s.el=o.el),n||ss(o,s)),s.type===br&&(s.el=o.el)}}function If(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Sf=e=>e.__isTeleport,$e=Symbol(void 0),br=Symbol(void 0),Nt=Symbol(void 0),Tr=Symbol(void 0),mn=[];let Ke=null;function je(e=!1){mn.push(Ke=e?null:[])}function Mf(){mn.pop(),Ke=mn[mn.length-1]||null}let _n=1;function xi(e){_n+=e}function ls(e){return e.dynamicChildren=_n>0?Ke||Wt:null,Mf(),_n>0&&Ke&&Ke.push(e),e}function Pt(e,t,n,r,a,i){return ls(De(e,t,n,r,a,i,!0))}function pn(e,t,n,r,a){return ls(Ee(e,t,n,r,a,!0))}function Qr(e){return e?e.__v_isVNode===!0:!1}function on(e,t){return e.type===t.type&&e.key===t.key}const yr="__vInternal",fs=({key:e})=>e??null,Qn=({ref:e,ref_key:t,ref_for:n})=>e!=null?be(e)||ge(e)||G(e)?{i:Ye,r:e,k:t,f:!!n}:e:null;function De(e,t=null,n=null,r=0,a=null,i=e===$e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fs(t),ref:t&&Qn(t),scopeId:qo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ye};return s?(La(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),_n>0&&!o&&Ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ke.push(l),l}const Ee=Nf;function Nf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===mf)&&(e=Nt),Qr(e)){const s=Qt(e,t,!0);return n&&La(s,n),_n>0&&!i&&Ke&&(s.shapeFlag&6?Ke[Ke.indexOf(e)]=s:Ke.push(s)),s.patchFlag|=-2,s}if(Yf(e)&&(e=e.__vccOpts),t){t=Ff(t);let{class:s,style:l}=t;s&&!be(s)&&(t.class=Ut(s)),ue(l)&&(Lo(l)&&!V(l)&&(l=Pe({},l)),t.style=ha(l))}const o=be(e)?1:Jl(e)?128:Sf(e)?64:ue(e)?4:G(e)?2:0;return De(e,t,n,r,a,o,i,!0)}function Ff(e){return e?Lo(e)||yr in e?Pe({},e):e:null}function Qt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Rf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&fs(s),ref:t&&t.ref?n&&a?V(a)?a.concat(Qn(t)):[a,Qn(t)]:Qn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Lf(e=" ",t=0){return Ee(br,null,e,t)}function Jn(e="",t=!1){return t?(je(),pn(Nt,null,e)):Ee(Nt,null,e)}function Ge(e){return e==null||typeof e=="boolean"?Ee(Nt):V(e)?Ee($e,null,e.slice()):typeof e=="object"?vt(e):Ee(br,null,String(e))}function vt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qt(e)}function La(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),La(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(yr in t)?t._ctx=Ye:a===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),r&64?(n=16,t=[Lf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ut([t.class,r.class]));else if(a==="style")t.style=ha([t.style,r.style]);else if(cr(a)){const i=t[a],o=r[a];o&&i!==o&&!(V(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Je(e,t,n,r=null){Ve(e,t,7,[n,r])}const jf=os();let zf=0;function Df(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||jf,i={uid:zf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new il(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ns(r,a),emitsOptions:Ko(r,a),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Yl.bind(null,i),e.ce&&e.ce(i),i}let xe=null;const Jt=e=>{xe=e,e.scope.on()},Mt=()=>{xe&&xe.scope.off(),xe=null};function cs(e){return e.vnode.shapeFlag&4}let kn=!1;function $f(e,t=!1){kn=t;const{props:n,children:r}=e.vnode,a=cs(e);wf(e,n,a,t),Of(e,r);const i=a?Hf(e,t):void 0;return kn=!1,i}function Hf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ro(new Proxy(e.ctx,hf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Uf(e):null;Jt(e),en();const i=bt(r,e,0,[e.props,a]);if(tn(),Mt(),xo(i)){if(i.then(Mt,Mt),t)return i.then(o=>{wi(e,o,t)}).catch(o=>{hr(o,e,0)});e.asyncDep=i}else wi(e,i,t)}else us(e,t)}function wi(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=$o(t)),us(e,n)}let _i;function us(e,t,n){const r=e.type;if(!e.render){if(!t&&_i&&!r.render){const a=r.template||Na(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=Pe(Pe({isCustomElement:i,delimiters:s},o),l);r.render=_i(a,f)}}e.render=r.render||Xe}Jt(e),en(),vf(e),tn(),Mt()}function Bf(e){return new Proxy(e.attrs,{get(t,n){return Ne(e,"get","$attrs"),t[n]}})}function Uf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Bf(e))},slots:e.slots,emit:e.emit,expose:t}}function Ra(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($o(Ro(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)},has(t,n){return n in t||n in dn}}))}function Wf(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function Yf(e){return G(e)&&"__vccOpts"in e}const _e=(e,t)=>zl(e,t,kn);function ds(e,t,n){const r=arguments.length;return r===2?ue(t)&&!V(t)?Qr(t)?Ee(e,null,[t]):Ee(e,t):Ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qr(n)&&(n=[n]),Ee(e,t,n))}const Kf=Symbol(""),qf=()=>Xn(Kf),Xf="3.2.45",Vf="http://www.w3.org/2000/svg",Ct=typeof document<"u"?document:null,ki=Ct&&Ct.createElement("template"),Qf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Ct.createElementNS(Vf,e):Ct.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ct.createTextNode(e),createComment:e=>Ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ki.innerHTML=r?`<svg>${e}</svg>`:e;const s=ki.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Jf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Gf(e,t,n){const r=e.style,a=be(n);if(n&&!a){for(const i in n)Jr(r,i,n[i]);if(t&&!be(t))for(const i in t)n[i]==null&&Jr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Oi=/\s*!important$/;function Jr(e,t,n){if(V(n))n.forEach(r=>Jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Zf(e,t);Oi.test(n)?e.setProperty(Zt(r),n.replace(Oi,""),"important"):e[r]=n}}const Ai=["Webkit","Moz","ms"],Ir={};function Zf(e,t){const n=Ir[t];if(n)return n;let r=tt(t);if(r!=="filter"&&r in e)return Ir[t]=r;r=mr(r);for(let a=0;a<Ai.length;a++){const i=Ai[a]+r;if(i in e)return Ir[t]=i}return t}const Ei="http://www.w3.org/1999/xlink";function ec(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ei,t.slice(6,t.length)):e.setAttributeNS(Ei,t,n);else{const i=Js(t);n==null||i&&!go(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function tc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=go(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function nc(e,t,n,r){e.addEventListener(t,n,r)}function rc(e,t,n,r){e.removeEventListener(t,n,r)}function ac(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=ic(t);if(r){const f=i[t]=lc(r,a);nc(e,s,f,l)}else o&&(rc(e,s,o,l),i[t]=void 0)}}const Pi=/(?:Once|Passive|Capture)$/;function ic(e){let t;if(Pi.test(e)){t={};let r;for(;r=e.match(Pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zt(e.slice(2)),t]}let Sr=0;const oc=Promise.resolve(),sc=()=>Sr||(oc.then(()=>Sr=0),Sr=Date.now());function lc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(fc(r,n.value),t,5,[r])};return n.value=e,n.attached=sc(),n}function fc(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ci=/^on[a-z]/,cc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Jf(e,r,a):t==="style"?Gf(e,n,r):cr(t)?va(t)||ac(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):uc(e,t,r,a))?tc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ec(e,t,r,a))};function uc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ci.test(t)&&G(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ci.test(t)&&be(n)?!1:t in e}const dc=Pe({patchProp:cc},Qf);let Ti;function mc(){return Ti||(Ti=Cf(dc))}const pc=(...e)=>{const t=mc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=hc(r);if(!a)return;const i=t._component;!G(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function hc(e){return be(e)?document.querySelector(e):e}var $t=function(){return $t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},$t.apply(this,arguments)};function ms(e,t,n){if(n||arguments.length===2)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function Ii(e){return Array.prototype.slice.call(e)}function Si(e,t){var n=Math.floor(e);return n===t||n+1===t?e:t}function Mi(){return Date.now()}function Mr(e,t,n){if(t="data-keen-slider-"+t,n===null)return e.removeAttribute(t);e.setAttribute(t,n||"")}function ar(e,t){return t=t||document,typeof e=="function"&&(e=e(t)),Array.isArray(e)?e:typeof e=="string"?Ii(t.querySelectorAll(e)):e instanceof HTMLElement?[e]:e instanceof NodeList?Ii(e):[]}function sn(e){e.raw&&(e=e.raw),e.cancelable&&!e.defaultPrevented&&e.preventDefault()}function ln(e){e.raw&&(e=e.raw),e.stopPropagation&&e.stopPropagation()}function ps(){var e=[];return{add:function(t,n,r,a){t.addListener?t.addListener(r):t.addEventListener(n,r,a),e.push([t,n,r,a])},input:function(t,n,r,a){this.add(t,n,function(i){return function(o){o.nativeEvent&&(o=o.nativeEvent);var s=o.changedTouches||[],l=o.targetTouches||[],f=o.detail&&o.detail.x?o.detail:null;return i({id:f?f.identifier?f.identifier:"i":l[0]?l[0]?l[0].identifier:"e":"d",idChanged:f?f.identifier?f.identifier:"i":s[0]?s[0]?s[0].identifier:"e":"d",raw:o,x:f&&f.x?f.x:l[0]?l[0].screenX:f?f.x:o.pageX,y:f&&f.y?f.y:l[0]?l[0].screenY:f?f.y:o.pageY})}}(r),a)},purge:function(){e.forEach(function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])}),e=[]}}}function ja(e,t,n){return Math.min(Math.max(e,t),n)}function He(e){return(e>0?1:0)-(e<0?1:0)||+e}function Ni(e){var t=e.getBoundingClientRect();return{height:Si(t.height,e.offsetHeight),width:Si(t.width,e.offsetWidth)}}function Ae(e,t,n,r){var a=e&&e[t];return a==null?n:r&&typeof a=="function"?a():a}function Le(e){return Math.round(1e6*e)/1e6}function vc(e){var t,n,r,a,i,o;function s(p){o||(o=p),l(!0);var b=p-o;b>r&&(b=r);var x=a[n];if(x[3]<b)return n++,s(p);var O=x[2],I=x[4],h=x[0],y=x[1]*(0,x[5])(I===0?1:(b-O)/I);if(y&&e.track.to(h+y),b<r)return c();o=null,l(!1),f(null),e.emit("animationEnded")}function l(p){t.active=p}function f(p){t.targetIdx=p}function c(){var p;p=s,i=window.requestAnimationFrame(p)}function m(){var p;p=i,window.cancelAnimationFrame(p),l(!1),f(null),o&&e.emit("animationStopped"),o=null}return t={active:!1,start:function(p){if(m(),e.track.details){var b=0,x=e.track.details.position;n=0,r=0,a=p.map(function(O){var I,h=Number(x),y=(I=O.earlyExit)!==null&&I!==void 0?I:O.duration,v=O.easing,N=O.distance*v(y/O.duration)||0;x+=N;var F=r;return r+=y,b+=N,[h,O.distance,F,r,O.duration,v]}),f(e.track.distToIdx(b)),c(),e.emit("animationStarted")}},stop:m,targetIdx:null}}function gc(e){var t,n,r,a,i,o,s,l,f,c,m,p,b,x,O=1/0,I=[],h=null,y=0;function v(z){re(y+z)}function N(z){var L=F(y+z).abs;return B(L)?L:null}function F(z){var L=Math.floor(Math.abs(Le(z/n))),_=Le((z%n+n)%n);_===n&&(_=0);var C=He(z),E=s.indexOf(ms([],s,!0).reduce(function(q,J){return Math.abs(J-_)<Math.abs(q-_)?J:q})),D=E;return C<0&&L++,E===o&&(D=0,L+=C>0?1:-1),{abs:D+L*o*C,origin:E,rel:D}}function K(z,L,_){var C;if(L||!se())return M(z,_);if(!B(z))return null;var E=F(_??y),D=E.abs,q=z-E.rel,J=D+q;C=M(J);var Z=M(J-o*He(q));return(Z!==null&&Math.abs(Z)<Math.abs(C)||C===null)&&(C=Z),Le(C)}function M(z,L){if(L==null&&(L=Le(y)),!B(z)||z===null)return null;z=Math.round(z);var _=F(L),C=_.abs,E=_.rel,D=_.origin,q=ie(z),J=(L%n+n)%n,Z=s[D],we=Math.floor((z-(C-E))/o)*n;return Le(Z-J-Z+s[q]+we+(D===o?n:0))}function B(z){return Q(z)===z}function Q(z){return ja(z,f,c)}function se(){return a.loop}function ie(z){return(z%o+o)%o}function re(z){var L;L=z-y,I.push({distance:L,timestamp:Mi()}),I.length>6&&(I=I.slice(-6)),y=Le(z);var _=U().abs;if(_!==h){var C=h!==null;h=_,C&&e.emit("slideChanged")}}function U(z){var L=z?null:function(){if(o){var _=se(),C=_?(y%n+n)%n:y,E=(_?y%n:y)-i[0][2],D=0-(E<0&&_?n-Math.abs(E):E),q=0,J=F(y),Z=J.abs,we=J.rel,me=i[we][2],nt=i.map(function(pe,Rt){var he=D+q;(he<0-pe[0]||he>1)&&(he+=(Math.abs(he)>n-1&&_?n:0)*He(-he));var rt=Rt-we,jt=He(rt),at=rt+Z;_&&(jt===-1&&he>me&&(at+=o),jt===1&&he<me&&(at-=o),m!==null&&at<m&&(he+=n),p!==null&&at>p&&(he-=n));var u=he+pe[0]+pe[1],d=Math.max(he>=0&&u<=1?1:u<0||he>1?0:he<0?Math.min(1,(pe[0]+he)/pe[0]):(1-he)/pe[0],0);return q+=pe[0]+pe[1],{abs:at,distance:a.rtl?-1*he+1-pe[0]:he,portion:d,size:pe[0]}});return Z=Q(Z),we=ie(Z),{abs:Q(Z),length:r,max:x,maxIdx:c,min:b,minIdx:f,position:y,progress:_?C/n:y/r,rel:we,slides:nt,slidesLength:n}}}();return t.details=L,e.emit("detailsChanged"),L}return t={absToRel:ie,add:v,details:null,distToIdx:N,idxToDist:K,init:function(z){if(function(){if(a=e.options,i=(a.trackConfig||[]).map(function(E){return[Ae(E,"size",1),Ae(E,"spacing",0),Ae(E,"origin",0)]}),o=i.length){n=Le(i.reduce(function(E,D){return E+D[0]+D[1]},0));var _,C=o-1;r=Le(n+i[0][2]-i[C][0]-i[C][2]-i[C][1]),s=i.reduce(function(E,D){if(!E)return[0];var q=i[E.length-1],J=E[E.length-1]+(q[0]+q[2])+q[1];return J-=D[2],E[E.length-1]>J&&(J=E[E.length-1]),J=Le(J),E.push(J),(!_||_<J)&&(l=E.length-1),_=J,E},null),r===0&&(l=0),s.push(Le(n))}}(),!o)return U(!0);var L;(function(){var _=e.options.range,C=e.options.loop;m=f=C?Ae(C,"min",-1/0):0,p=c=C?Ae(C,"max",O):l;var E=Ae(_,"min",null),D=Ae(_,"max",null);E&&(f=E),D&&(c=D),b=f===-1/0?f:e.track.idxToDist(f||0,!0,0),x=c===O?c:K(c,!0,0),D===null&&(p=c),Ae(_,"align",!1)&&c!==O&&i[ie(c)][2]===0&&(x-=1-i[ie(c)][0],c=N(x-y)),b=Le(b),x=Le(x)})(),L=z,Number(L)===L?v(M(Q(z))):U()},to:re,velocity:function(){var z=Mi(),L=I.reduce(function(_,C){var E=C.distance,D=C.timestamp;return z-D>200||(He(E)!==He(_.distance)&&_.distance&&(_={distance:0,lastTimestamp:0,time:0}),_.time&&(_.distance+=E),_.lastTimestamp&&(_.time+=D-_.lastTimestamp),_.lastTimestamp=D),_},{distance:0,lastTimestamp:0,time:0});return L.distance/L.time||0}}}function bc(e){var t,n,r,a,i,o,s,l;function f(h){return 2*h}function c(h){return ja(h,s,l)}function m(h){return 1-Math.pow(1-h,3)}function p(){return r?e.track.velocity():0}function b(){I();var h=e.options.mode==="free-snap",y=e.track,v=p();a=He(v);var N=e.track.details,F=[];if(v||!h){var K=x(v),M=K.dist,B=K.dur;if(B=f(B),M*=a,h){var Q=y.idxToDist(y.distToIdx(M),!0);Q&&(M=Q)}F.push({distance:M,duration:B,easing:m});var se=N.position,ie=se+M;if(ie<i||ie>o){var re=ie<i?i-se:o-se,U=0,z=v;if(He(re)===a){var L=Math.min(Math.abs(re)/Math.abs(M),1),_=function(D){return 1-Math.pow(1-D,1/3)}(L)*B;F[0].earlyExit=_,z=v*(1-L)}else F[0].earlyExit=0,U+=re;var C=x(z,100),E=C.dist*a;e.options.rubberband&&(F.push({distance:E,duration:f(C.dur),easing:m}),F.push({distance:-E+U,duration:500,easing:m}))}e.animator.start(F)}else e.moveToIdx(c(N.abs),!0,{duration:500,easing:function(D){return 1+--D*D*D*D*D}})}function x(h,y){y===void 0&&(y=1e3);var v=147e-9+(h=Math.abs(h))/y;return{dist:Math.pow(h,2)/v,dur:h/v}}function O(){var h=e.track.details;h&&(i=h.min,o=h.max,s=h.minIdx,l=h.maxIdx)}function I(){e.animator.stop()}e.on("updated",O),e.on("optionsChanged",O),e.on("created",O),e.on("dragStarted",function(){r=!1,I(),t=n=e.track.details.abs}),e.on("dragChecked",function(){r=!0}),e.on("dragEnded",function(){var h=e.options.mode;h==="snap"&&function(){var y=e.track,v=e.track.details,N=v.position,F=He(p());(N>o||N<i)&&(F=0);var K=t+F;v.slides[y.absToRel(K)].portion===0&&(K-=F),t!==n&&(K=n),He(y.idxToDist(K,!0))!==F&&(K+=F),K=c(K);var M=y.idxToDist(K,!0);e.animator.start([{distance:M,duration:500,easing:function(B){return 1+--B*B*B*B*B}}])}(),h!=="free"&&h!=="free-snap"||b()}),e.on("dragged",function(){n=e.track.details.abs})}function yc(e){var t,n,r,a,i,o,s,l,f,c,m,p,b,x,O,I,h,y,v=ps();function N(U){if(o&&l===U.id){var z=B(U);if(f){if(!M(U))return K(U);c=z,f=!1,e.emit("dragChecked")}if(I)return c=z;sn(U);var L=function(C){if(h===-1/0&&y===1/0)return C;var E=e.track.details,D=E.length,q=E.position,J=ja(C,h-q,y-q);if(D===0)return 0;if(!e.options.rubberband)return J;if(q<=y&&q>=h||q<h&&n>0||q>y&&n<0)return C;var Z=(q<h?q-h:q-y)/D,we=a*D,me=Math.abs(Z*we),nt=Math.max(0,1-me/i*2);return nt*nt*C}(s(c-z)/a*r);n=He(L);var _=e.track.details.position;(_>h&&_<y||_===h&&n>0||_===y&&n<0)&&ln(U),m+=L,!p&&Math.abs(m*a)>5&&(p=!0),e.track.add(L),c=z,e.emit("dragged")}}function F(U){!o&&e.track.details&&e.track.details.length&&(m=0,o=!0,p=!1,f=!0,l=U.id,M(U),c=B(U),e.emit("dragStarted"))}function K(U){o&&l===U.idChanged&&(o=!1,e.emit("dragEnded"))}function M(U){var z=Q(),L=z?U.y:U.x,_=z?U.x:U.y,C=b!==void 0&&x!==void 0&&Math.abs(x-_)<=Math.abs(b-L);return b=L,x=_,C}function B(U){return Q()?U.y:U.x}function Q(){return e.options.vertical}function se(){a=e.size,i=Q()?window.innerHeight:window.innerWidth;var U=e.track.details;U&&(h=U.min,y=U.max)}function ie(U){p&&(ln(U),sn(U))}function re(){if(v.purge(),e.options.drag&&!e.options.disabled){var U;U=e.options.dragSpeed||1,s=typeof U=="function"?U:function(L){return L*U},r=e.options.rtl?-1:1,se(),t=e.container,function(){var L="data-keen-slider-clickable";ar("[".concat(L,"]:not([").concat(L,"=false])"),t).map(function(_){v.add(_,"dragstart",ln),v.add(_,"mousedown",ln),v.add(_,"touchstart",ln)})}(),v.add(t,"dragstart",function(L){sn(L)}),v.add(t,"click",ie,{capture:!0}),v.input(t,"ksDragStart",F),v.input(t,"ksDrag",N),v.input(t,"ksDragEnd",K),v.input(t,"mousedown",F),v.input(t,"mousemove",N),v.input(t,"mouseleave",K),v.input(t,"mouseup",K),v.input(t,"touchstart",F,{passive:!0}),v.input(t,"touchmove",N,{passive:!1}),v.input(t,"touchend",K),v.input(t,"touchcancel",K),v.add(window,"wheel",function(L){o&&sn(L)});var z="data-keen-slider-scrollable";ar("[".concat(z,"]:not([").concat(z,"=false])"),e.container).map(function(L){return function(_){var C;v.input(_,"touchstart",function(E){C=B(E),I=!0,O=!0},{passive:!0}),v.input(_,"touchmove",function(E){var D=Q(),q=D?_.scrollHeight-_.clientHeight:_.scrollWidth-_.clientWidth,J=C-B(E),Z=D?_.scrollTop:_.scrollLeft,we=D&&_.style.overflowY==="scroll"||!D&&_.style.overflowX==="scroll";if(C=B(E),(J<0&&Z>0||J>0&&Z<q)&&O&&we)return I=!0;O=!1,sn(E),I=!1}),v.input(_,"touchend",function(){I=!1})}(L)})}}e.on("updated",se),e.on("optionsChanged",re),e.on("created",re),e.on("destroyed",v.purge)}function xc(e){var t,n,r=null;function a(b,x,O){e.animator.active?o(b,x,O):requestAnimationFrame(function(){return o(b,x,O)})}function i(){a(!1,!1,n)}function o(b,x,O){var I=0,h=e.size,y=e.track.details;if(y&&t){var v=y.slides;t.forEach(function(N,F){if(b)!r&&x&&l(N,null,O),f(N,null,O);else{if(!v[F])return;var K=v[F].size*h;!r&&x&&l(N,K,O),f(N,v[F].distance*h-I,O),I+=K}})}}function s(b){return e.options.renderMode==="performance"?Math.round(b):b}function l(b,x,O){var I=O?"height":"width";x!==null&&(x=s(x)+"px"),b.style["min-"+I]=x,b.style["max-"+I]=x}function f(b,x,O){if(x!==null){x=s(x);var I=O?x:0;x="translate3d(".concat(O?0:x,"px, ").concat(I,"px, 0)")}b.style.transform=x,b.style["-webkit-transform"]=x}function c(){t&&(o(!0,!0,n),t=null),e.on("detailsChanged",i,!0)}function m(){a(!1,!0,n)}function p(){c(),n=e.options.vertical,e.options.disabled||e.options.renderMode==="custom"||(r=Ae(e.options.slides,"perView",null)==="auto",e.on("detailsChanged",i),(t=e.slides).length&&m())}e.on("created",p),e.on("optionsChanged",p),e.on("beforeOptionsChanged",function(){c()}),e.on("updated",m),e.on("destroyed",c)}function wc(e,t){return function(n){var r,a,i,o,s,l=ps();function f(M){var B;Mr(n.container,"reverse",(B=n.container,window.getComputedStyle(B,null).getPropertyValue("direction")!=="rtl"||M?null:"")),Mr(n.container,"v",n.options.vertical&&!M?"":null),Mr(n.container,"disabled",n.options.disabled&&!M?"":null)}function c(){m()&&I()}function m(){var M=null;if(o.forEach(function(Q){Q.matches&&(M=Q.__media)}),M===r)return!1;r||n.emit("beforeOptionsChanged"),r=M;var B=M?i.breakpoints[M]:i;return n.options=$t($t({},i),B),f(),F(),K(),y(),!0}function p(M){var B=Ni(M);return(n.options.vertical?B.height:B.width)/n.size||1}function b(){return n.options.trackConfig.length}function x(M){for(var B in r=!1,i=$t($t({},t),M),l.purge(),a=n.size,o=[],i.breakpoints||[]){var Q=window.matchMedia(B);Q.__media=B,o.push(Q),l.add(Q,"change",c)}l.add(window,"orientationchange",N),l.add(window,"resize",v),m()}function O(M){n.animator.stop();var B=n.track.details;n.track.init(M??(B?B.abs:0))}function I(M){O(M),n.emit("optionsChanged")}function h(M,B){if(M)return x(M),void I(B);F(),K();var Q=b();y(),b()!==Q?I(B):O(B),n.emit("updated")}function y(){var M=n.options.slides;if(typeof M=="function")return n.options.trackConfig=M(n.size,n.slides);for(var B=n.slides,Q=B.length,se=typeof M=="number"?M:Ae(M,"number",Q,!0),ie=[],re=Ae(M,"perView",1,!0),U=Ae(M,"spacing",0,!0)/n.size||0,z=re==="auto"?U:U/re,L=Ae(M,"origin","auto"),_=0,C=0;C<se;C++){var E=re==="auto"?p(B[C]):1/re-U+z,D=L==="center"?.5-E/2:L==="auto"?0:L;ie.push({origin:D,size:E,spacing:U}),_+=E}if(_+=U*(se-1),L==="auto"&&!n.options.loop&&re!==1){var q=0;ie.map(function(J){var Z=_-q;return q+=J.size+U,Z>=1||(J.origin=1-Z-(_>1?0:1-_)),J})}n.options.trackConfig=ie}function v(){F();var M=n.size;n.options.disabled||M===a||(a=M,h())}function N(){v(),setTimeout(v,500),setTimeout(v,2e3)}function F(){var M=Ni(n.container);n.size=(n.options.vertical?M.height:M.width)||1}function K(){n.slides=ar(n.options.selector,n.container)}n.container=(s=ar(e,document)).length?s[0]:null,n.destroy=function(){l.purge(),n.emit("destroyed"),f(!0)},n.prev=function(){n.moveToIdx(n.track.details.abs-1,!0)},n.next=function(){n.moveToIdx(n.track.details.abs+1,!0)},n.update=h,x(n.options)}}var _c=function(e,t,n){try{return function(r,a){var i,o={};return i={emit:function(s){o[s]&&o[s].forEach(function(f){f(i)});var l=i.options&&i.options[s];l&&l(i)},moveToIdx:function(s,l,f){var c=i.track.idxToDist(s,l);if(c){var m=i.options.defaultAnimation;i.animator.start([{distance:c,duration:Ae(f||m,"duration",500),easing:Ae(f||m,"easing",function(p){return 1+--p*p*p*p*p})}])}},on:function(s,l,f){f===void 0&&(f=!1),o[s]||(o[s]=[]);var c=o[s].indexOf(l);c>-1?f&&delete o[s][c]:f||o[s].push(l)},options:r},function(){if(i.track=gc(i),i.animator=vc(i),a)for(var s=0,l=a;s<l.length;s++)(0,l[s])(i);i.track.init(i.options.initial||0),i.emit("created")}(),i}(t,ms([wc(e,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),xc,yc,bc],n||[],!0))}catch(r){console.error(r)}};function kc(e,t){var n=We(),r=We();return ge(e)&&st(e,function(a,i){r.value&&r.value.update(a)}),Sa(function(){n.value&&(r.value=new _c(n.value,ge(e)?e.value:e,t))}),Ma(function(){r.value&&r.value.destroy()}),[n,r]}const Oc={class:"keen-slider__slide flex flex-col align-center justify-center px-10"},Ac={class:"text-left w-full flex flex-col"},Ec=["innerHTML"],Pc={class:"flex items-end justify-end"},Cc={class:"text-center mt-20 flex flex-col space-y-2"},Tc={class:"font-title font-bold text-base text-zinc-700 tracking-[2px]"},Ic={class:"font-body tracking-[3px] uppercase text-xs font-light text-zinc-500"},Sc={__name:"Slide",props:["data"],setup(e){return(t,n)=>{const r=Zo("font-awesome-icon");return je(),Pt("div",Oc,[De("div",Ac,[De("div",null,[Ee(r,{icon:"fa-sharp fa-quote-left",class:"text-zinc-300",size:"2x"})]),De("div",{class:"text-zinc-700 font-light text-lg my-4",innerHTML:e.data.content},null,8,Ec),De("div",Pc,[Ee(r,{icon:"fa-sharp fa-quote-right",class:"text-zinc-300",size:"2x"})])]),De("div",Cc,[De("p",Tc,ti(e.data.initials),1),De("p",Ic,ti(e.data.caption),1)])])}}};const Mc={class:"py-10 relative"},Nc=De("p",{class:"uppercase text-2xl mb-8 text-zinc-700 tracking-wider"}," Patient Testimonials ",-1),Fc={key:2,class:"dots flex md:hidden mt-10"},Lc=["onClick"],Rc={__name:"Slider",props:["slides"],setup(e){const t=We(1),n=_e(()=>a.value?[...Array(a.value.track.details.slides.length).keys()]:[]),[r,a]=kc({initial:t.value,slideChanged:i=>{t.value=i.track.details.rel}});return(i,o)=>{const s=Zo("font-awesome-icon");return je(),Pt("div",Mc,[Nc,De("div",{ref_key:"container",ref:r,class:"keen-slider"},[(je(!0),Pt($e,null,mi(e.slides,l=>(je(),pn(Sc,{data:l},null,8,["data"]))),256))],512),Re(a)?(je(),pn(s,{key:0,icon:"fa-thin fa-angle-left",class:Ut(["text-zinc-500 hidden md:block",{arrow:!0,"arrow--left":!0,"arrow--disabled":t.value===0}]),size:"3x",onClick:o[0]||(o[0]=l=>Re(a).prev())},null,8,["class"])):Jn("",!0),Re(a)?(je(),pn(s,{key:1,icon:"fa-thin fa-angle-right",class:Ut(["text-zinc-500 hidden md:block",{arrow:!0,"arrow--right":!0,"arrow--disabled":t.value===Re(a).track.details.slides.length-1}]),size:"3x",onClick:o[1]||(o[1]=l=>Re(a).next())},null,8,["class"])):Jn("",!0),Re(a)?(je(),Pt("div",Fc,[(je(!0),Pt($e,null,mi(Re(n),(l,f)=>(je(),Pt("button",{onClick:c=>Re(a).moveToIdx(f),class:Ut({dot:!0,active:t.value===f}),key:f},null,10,Lc))),128))])):Jn("",!0)])}}};var Fi;const nn=typeof window<"u";nn&&((Fi=window==null?void 0:window.navigator)!=null&&Fi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ot(e){return typeof e=="function"?e():Re(e)}function Li(e,t=!1,n="Timeout"){return new Promise((r,a)=>{setTimeout(t?()=>a(n):r,e)})}function jc(e){return e}function zc(e,...t){return t.some(n=>n in e)}function hs(e){return sl()?(ll(e),!0):!1}function Nr(){const e=[],t=a=>{const i=e.indexOf(a);i!==-1&&e.splice(i,1)};return{on:a=>{e.push(a);const i=()=>t(a);return hs(i),{off:i}},off:t,trigger:a=>{e.forEach(i=>i(a))}}}function Fr(e){return typeof e=="function"?_e(e):We(e)}function Gr(e,t=!1){function n(m,{flush:p="sync",deep:b=!1,timeout:x,throwOnTimeout:O}={}){let I=null;const y=[new Promise(v=>{I=st(e,N=>{m(N)!==t&&(I==null||I(),v(N))},{flush:p,deep:b,immediate:!0})})];return x!=null&&y.push(Li(x,O).then(()=>ot(e)).finally(()=>I==null?void 0:I())),Promise.race(y)}function r(m,p){if(!ge(m))return n(N=>N===m,p);const{flush:b="sync",deep:x=!1,timeout:O,throwOnTimeout:I}=p??{};let h=null;const v=[new Promise(N=>{h=st([e,m],([F,K])=>{t!==(F===K)&&(h==null||h(),N(F))},{flush:b,deep:x,immediate:!0})})];return O!=null&&v.push(Li(O,I).then(()=>ot(e)).finally(()=>(h==null||h(),ot(e)))),Promise.race(v)}function a(m){return n(p=>Boolean(p),m)}function i(m){return r(null,m)}function o(m){return r(void 0,m)}function s(m){return n(Number.isNaN,m)}function l(m,p){return n(b=>{const x=Array.from(b);return x.includes(m)||x.includes(ot(m))},p)}function f(m){return c(1,m)}function c(m=1,p){let b=-1;return n(()=>(b+=1,b>=m),p)}return Array.isArray(ot(e))?{toMatch:n,toContains:l,changed:f,changedTimes:c,get not(){return Gr(e,!t)}}:{toMatch:n,toBe:r,toBeTruthy:a,toBeNull:i,toBeNaN:s,toBeUndefined:o,changed:f,changedTimes:c,get not(){return Gr(e,!t)}}}function Dc(e){return Gr(e)}function $c(e,t,n={}){const{immediate:r=!0}=n,a=We(!1);let i=null;function o(){i&&(clearTimeout(i),i=null)}function s(){a.value=!1,o()}function l(...f){o(),a.value=!0,i=setTimeout(()=>{a.value=!1,i=null,e(...f)},ot(t))}return r&&(a.value=!0,nn&&l()),hs(s),{isPending:a,start:l,stop:s}}const Hc=nn?window:void 0;nn&&window.document;nn&&window.navigator;nn&&window.location;const Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ea="__vueuse_ssr_handlers__";Zr[ea]=Zr[ea]||{};Zr[ea];var Bc=Object.defineProperty,Uc=Object.defineProperties,Wc=Object.getOwnPropertyDescriptors,Ri=Object.getOwnPropertySymbols,Yc=Object.prototype.hasOwnProperty,Kc=Object.prototype.propertyIsEnumerable,ji=(e,t,n)=>t in e?Bc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t)=>{for(var n in t||(t={}))Yc.call(t,n)&&ji(e,n,t[n]);if(Ri)for(var n of Ri(t))Kc.call(t,n)&&ji(e,n,t[n]);return e},fn=(e,t)=>Uc(e,Wc(t));const qc={json:"application/json",text:"text/plain",formData:"multipart/form-data"};function zi(e){return zc(e,"immediate","refetch","initialData","timeout","beforeFetch","afterFetch","onFetchError","fetch")}function Lr(e){return typeof Headers<"u"&&e instanceof Headers?Object.fromEntries([...e.entries()]):e}function Xc(e,...t){var n;const r=typeof AbortController=="function";let a={},i={immediate:!0,refetch:!1,timeout:0};const o={method:"GET",type:"text",payload:void 0};t.length>0&&(zi(t[0])?i=Ce(Ce({},i),t[0]):a=t[0]),t.length>1&&zi(t[1])&&(i=Ce(Ce({},i),t[1]));const{fetch:s=(n=Hc)==null?void 0:n.fetch,initialData:l,timeout:f}=i,c=Nr(),m=Nr(),p=Nr(),b=We(!1),x=We(!1),O=We(!1),I=We(null),h=Er(null),y=Er(null),v=Er(l),N=_e(()=>r&&x.value);let F,K;const M=()=>{r&&F&&F.abort()},B=L=>{x.value=L,b.value=!L};f&&(K=$c(M,f,{immediate:!1}));const Q=async(L=!1)=>{var _;B(!0),y.value=null,I.value=null,O.value=!1,F=void 0,r&&(F=new AbortController,F.signal.onabort=()=>O.value=!0,a=fn(Ce({},a),{signal:F.signal}));const C={method:o.method,headers:{}};if(o.payload){const J=Lr(C.headers);o.payloadType&&(J["Content-Type"]=(_=qc[o.payloadType])!=null?_:o.payloadType);const Z=ot(o.payload);C.body=o.payloadType==="json"?JSON.stringify(Z):Z}let E=!1;const D={url:ot(e),options:Ce(Ce({},C),a),cancel:()=>{E=!0}};if(i.beforeFetch&&Object.assign(D,await i.beforeFetch(D)),E||!s)return B(!1),Promise.resolve(null);let q=null;return K&&K.start(),new Promise((J,Z)=>{var we;s(D.url,fn(Ce(Ce({},C),D.options),{headers:Ce(Ce({},Lr(C.headers)),Lr((we=D.options)==null?void 0:we.headers))})).then(async me=>{if(h.value=me,I.value=me.status,q=await me[o.type](),i.afterFetch&&I.value>=200&&I.value<300&&({data:q}=await i.afterFetch({data:q,response:me})),v.value=q,!me.ok)throw new Error(me.statusText);return c.trigger(me),J(me)}).catch(async me=>{let nt=me.message||me.name;return i.onFetchError&&({data:q,error:nt}=await i.onFetchError({data:q,error:me,response:h.value})),v.value=q,y.value=nt,m.trigger(me),L?Z(me):J(null)}).finally(()=>{B(!1),K&&K.stop(),p.trigger(null)})})},se=Fr(i.refetch);st([se,Fr(e)],([L])=>L&&Q(),{deep:!0});const ie={isFinished:b,statusCode:I,response:h,error:y,data:v,isFetching:x,canAbort:N,aborted:O,abort:M,execute:Q,onFetchResponse:c.on,onFetchError:m.on,onFetchFinally:p.on,get:re("GET"),put:re("PUT"),post:re("POST"),delete:re("DELETE"),patch:re("PATCH"),head:re("HEAD"),options:re("OPTIONS"),json:z("json"),text:z("text"),blob:z("blob"),arrayBuffer:z("arrayBuffer"),formData:z("formData")};function re(L){return(_,C)=>{if(!x.value){o.method=L,o.payload=_,o.payloadType=C,ge(o.payload)&&st([se,Fr(o.payload)],([D])=>D&&Q(),{deep:!0});const E=ot(o.payload);return!C&&E&&Object.getPrototypeOf(E)===Object.prototype&&(o.payloadType="json"),fn(Ce({},ie),{then(D,q){return U().then(D,q)}})}}}function U(){return new Promise((L,_)=>{Dc(b).toBe(!0).then(()=>L(ie)).catch(C=>_(C))})}function z(L){return()=>{if(!x.value)return o.type=L,fn(Ce({},ie),{then(_,C){return U().then(_,C)}})}}return i.immediate&&setTimeout(Q,0),fn(Ce({},ie),{then(L,_){return U().then(L,_)}})}var Di;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Di||(Di={}));var Vc=Object.defineProperty,$i=Object.getOwnPropertySymbols,Qc=Object.prototype.hasOwnProperty,Jc=Object.prototype.propertyIsEnumerable,Hi=(e,t,n)=>t in e?Vc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gc=(e,t)=>{for(var n in t||(t={}))Qc.call(t,n)&&Hi(e,n,t[n]);if($i)for(var n of $i(t))Jc.call(t,n)&&Hi(e,n,t[n]);return e};const Zc={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Gc({linear:jc},Zc);function Bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bi(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ir(e){return ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ir(e)}function eu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ui(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function tu(e,t,n){return t&&Ui(e.prototype,t),n&&Ui(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function za(e,t){return ru(e)||iu(e,t)||vs(e,t)||su()}function Tn(e){return nu(e)||au(e)||vs(e)||ou()}function nu(e){if(Array.isArray(e))return ta(e)}function ru(e){if(Array.isArray(e))return e}function au(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function iu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function vs(e,t){if(e){if(typeof e=="string")return ta(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ta(e,t)}}function ta(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ou(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function su(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wi=function(){},Da={},gs={},bs=null,ys={mark:Wi,measure:Wi};try{typeof window<"u"&&(Da=window),typeof document<"u"&&(gs=document),typeof MutationObserver<"u"&&(bs=MutationObserver),typeof performance<"u"&&(ys=performance)}catch{}var lu=Da.navigator||{},Yi=lu.userAgent,Ki=Yi===void 0?"":Yi,xt=Da,fe=gs,qi=bs,zn=ys;xt.document;var mt=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",xs=~Ki.indexOf("MSIE")||~Ki.indexOf("Trident/"),Dn,$n,Hn,Bn,Un,ft="___FONT_AWESOME___",na=16,ws="fa",_s="svg-inline--fa",Ft="data-fa-i2svg",ra="data-fa-pseudo-element",fu="data-fa-pseudo-element-pending",$a="data-prefix",Ha="data-icon",Xi="fontawesome-i2svg",cu="async",uu=["HTML","HEAD","STYLE","SCRIPT"],ks=function(){try{return!0}catch{return!1}}(),le="classic",de="sharp",Ba=[le,de];function In(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[le]}})}var On=In((Dn={},ye(Dn,le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ye(Dn,de,{fa:"solid",fass:"solid","fa-solid":"solid"}),Dn)),An=In(($n={},ye($n,le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ye($n,de,{solid:"fass"}),$n)),En=In((Hn={},ye(Hn,le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ye(Hn,de,{fass:"fa-solid"}),Hn)),du=In((Bn={},ye(Bn,le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ye(Bn,de,{"fa-solid":"fass"}),Bn)),mu=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Os="fa-layers-text",pu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,hu=In((Un={},ye(Un,le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ye(Un,de,{900:"fass"}),Un)),As=[1,2,3,4,5,6,7,8,9,10],vu=As.concat([11,12,13,14,15,16,17,18,19,20]),gu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pn=new Set;Object.keys(An[le]).map(Pn.add.bind(Pn));Object.keys(An[de]).map(Pn.add.bind(Pn));var bu=[].concat(Ba,Tn(Pn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Tt.GROUP,Tt.SWAP_OPACITY,Tt.PRIMARY,Tt.SECONDARY]).concat(As.map(function(e){return"".concat(e,"x")})).concat(vu.map(function(e){return"w-".concat(e)})),hn=xt.FontAwesomeConfig||{};function yu(e){var t=fe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function xu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(fe&&typeof fe.querySelector=="function"){var wu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wu.forEach(function(e){var t=za(e,2),n=t[0],r=t[1],a=xu(yu(n));a!=null&&(hn[r]=a)})}var Es={styleDefault:"solid",familyDefault:"classic",cssPrefix:ws,replacementClass:_s,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};hn.familyPrefix&&(hn.cssPrefix=hn.familyPrefix);var Gt=j(j({},Es),hn);Gt.autoReplaceSvg||(Gt.observeMutations=!1);var H={};Object.keys(Es).forEach(function(e){Object.defineProperty(H,e,{enumerable:!0,set:function(n){Gt[e]=n,vn.forEach(function(r){return r(H)})},get:function(){return Gt[e]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(t){Gt.cssPrefix=t,vn.forEach(function(n){return n(H)})},get:function(){return Gt.cssPrefix}});xt.FontAwesomeConfig=H;var vn=[];function _u(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var ht=na,et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ku(e){if(!(!e||!mt)){var t=fe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=fe.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return fe.head.insertBefore(t,r),e}}var Ou="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Cn(){for(var e=12,t="";e-- >0;)t+=Ou[Math.random()*62|0];return t}function rn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ua(e){return e.classList?rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ps(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Au(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ps(e[n]),'" ')},"").trim()}function xr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Wa(e){return e.size!==et.size||e.x!==et.x||e.y!==et.y||e.rotate!==et.rotate||e.flipX||e.flipY}function Eu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Pu(e){var t=e.transform,n=e.width,r=n===void 0?na:n,a=e.height,i=a===void 0?na:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&xs?l+="translate(".concat(t.x/ht-r/2,"em, ").concat(t.y/ht-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ht,"em), calc(-50% + ").concat(t.y/ht,"em)) "):l+="translate(".concat(t.x/ht,"em, ").concat(t.y/ht,"em) "),l+="scale(".concat(t.size/ht*(t.flipX?-1:1),", ").concat(t.size/ht*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Cu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Cs(){var e=ws,t=_s,n=H.cssPrefix,r=H.replacementClass,a=Cu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Vi=!1;function Rr(){H.autoAddCss&&!Vi&&(ku(Cs()),Vi=!0)}var Tu={mixout:function(){return{dom:{css:Cs,insertCss:Rr}}},hooks:function(){return{beforeDOMElementCreation:function(){Rr()},beforeI2svg:function(){Rr()}}}},ct=xt||{};ct[ft]||(ct[ft]={});ct[ft].styles||(ct[ft].styles={});ct[ft].hooks||(ct[ft].hooks={});ct[ft].shims||(ct[ft].shims=[]);var qe=ct[ft],Ts=[],Iu=function e(){fe.removeEventListener("DOMContentLoaded",e),or=1,Ts.map(function(t){return t()})},or=!1;mt&&(or=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),or||fe.addEventListener("DOMContentLoaded",Iu));function Su(e){mt&&(or?setTimeout(e,0):Ts.push(e))}function Sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ps(e):"<".concat(t," ").concat(Au(r),">").concat(i.map(Sn).join(""),"</").concat(t,">")}function Qi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Mu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},jr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Mu(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Nu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function aa(e){var t=Nu(e);return t.length===1?t[0].toString(16):null}function Fu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ji(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ia(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ji(t);typeof qe.hooks.addPack=="function"&&!a?qe.hooks.addPack(e,Ji(t)):qe.styles[e]=j(j({},qe.styles[e]||{}),i),e==="fas"&&ia("fa",t)}var Wn,Yn,Kn,Ht=qe.styles,Lu=qe.shims,Ru=(Wn={},ye(Wn,le,Object.values(En[le])),ye(Wn,de,Object.values(En[de])),Wn),Ya=null,Is={},Ss={},Ms={},Ns={},Fs={},ju=(Yn={},ye(Yn,le,Object.keys(On[le])),ye(Yn,de,Object.keys(On[de])),Yn);function zu(e){return~bu.indexOf(e)}function Du(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!zu(a)?a:null}var Ls=function(){var t=function(i){return jr(Ht,function(o,s,l){return o[l]=jr(s,i,{}),o},{})};Is=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ss=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Fs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ht||H.autoFetchSvg,r=jr(Lu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ms=r.names,Ns=r.unicodes,Ya=wr(H.styleDefault,{family:H.familyDefault})};_u(function(e){Ya=wr(e.styleDefault,{family:H.familyDefault})});Ls();function Ka(e,t){return(Is[e]||{})[t]}function $u(e,t){return(Ss[e]||{})[t]}function It(e,t){return(Fs[e]||{})[t]}function Rs(e){return Ms[e]||{prefix:null,iconName:null}}function Hu(e){var t=Ns[e],n=Ka("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wt(){return Ya}var qa=function(){return{prefix:null,iconName:null,rest:[]}};function wr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?le:n,a=On[r][e],i=An[r][e]||An[r][a],o=e in qe.styles?e:null;return i||o||null}var Gi=(Kn={},ye(Kn,le,Object.keys(En[le])),ye(Kn,de,Object.keys(En[de])),Kn);function _r(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ye(t,le,"".concat(H.cssPrefix,"-").concat(le)),ye(t,de,"".concat(H.cssPrefix,"-").concat(de)),t),o=null,s=le;(e.includes(i[le])||e.some(function(f){return Gi[le].includes(f)}))&&(s=le),(e.includes(i[de])||e.some(function(f){return Gi[de].includes(f)}))&&(s=de);var l=e.reduce(function(f,c){var m=Du(H.cssPrefix,c);if(Ht[c]?(c=Ru[s].includes(c)?du[s][c]:c,o=c,f.prefix=c):ju[s].indexOf(c)>-1?(o=c,f.prefix=wr(c,{family:s})):m?f.iconName=m:c!==H.replacementClass&&c!==i[le]&&c!==i[de]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?Rs(f.iconName):{},b=It(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||b||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Ht.far&&Ht.fas&&!H.autoFetchSvg&&(f.prefix="fas")}return f},qa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===de&&(Ht.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=It(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=wt()||"fas"),l}var Bu=function(){function e(){eu(this,e),this.definitions={}}return tu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=j(j({},n.definitions[s]||{}),o[s]),ia(s,o[s]);var l=En[le][s];l&&ia(l,o[s]),Ls()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Zi=[],Bt={},Xt={},Uu=Object.keys(Xt);function Wu(e,t){var n=t.mixoutsTo;return Zi=e,Bt={},Object.keys(Xt).forEach(function(r){Uu.indexOf(r)===-1&&delete Xt[r]}),Zi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ir(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Bt[o]||(Bt[o]=[]),Bt[o].push(i[o])})}r.provides&&r.provides(Xt)}),n}function oa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ut(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Xt[e]?Xt[e].apply(null,t):void 0}function sa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||wt();if(t)return t=It(n,t)||t,Qi(js.definitions,n,t)||Qi(qe.styles,n,t)}var js=new Bu,Yu=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Lt("noAuto")},Ku={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mt?(Lt("beforeI2svg",t),ut("pseudoElements2svg",t),ut("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,Su(function(){Xu({autoReplaceSvgRoot:n}),Lt("watch",t)})}},qu={icon:function(t){if(t===null)return null;if(ir(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:It(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=wr(t[0]);return{prefix:r,iconName:It(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(H.cssPrefix,"-"))>-1||t.match(mu))){var a=_r(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||wt(),iconName:It(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=wt();return{prefix:i,iconName:It(i,t)||t}}}},Fe={noAuto:Yu,config:H,dom:Ku,parse:qu,library:js,findIconDefinition:sa,toHtml:Sn},Xu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(qe.styles).length>0||H.autoFetchSvg)&&mt&&H.autoReplaceSvg&&Fe.dom.i2svg({node:r})};function kr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(mt){var r=fe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Vu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Wa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=xr(j(j({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Qu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(H.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},a),{},{id:o}),children:r}]}]}function Xa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,p=e.watchable,b=p===void 0?!1:p,x=r.found?r:n,O=x.width,I=x.height,h=a==="fak",y=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(function(Q){return m.classes.indexOf(Q)===-1}).filter(function(Q){return Q!==""||!!Q}).concat(m.classes).join(" "),v={children:[],attributes:j(j({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:y,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(I)})},N=h&&!~m.classes.indexOf("fa-fw")?{width:"".concat(O/I*16*.0625,"em")}:{};b&&(v.attributes[Ft]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||Cn())},children:[l]}),delete v.attributes.title);var F=j(j({},v),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:j(j({},N),m.styles)}),K=r.found&&n.found?ut("generateAbstractMask",F)||{children:[],attributes:{}}:ut("generateAbstractIcon",F)||{children:[],attributes:{}},M=K.children,B=K.attributes;return F.children=M,F.attributes=B,s?Qu(F):Vu(F)}function eo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=j(j(j({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ft]="");var c=j({},o.styles);Wa(a)&&(c.transform=Pu({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=xr(c);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ju(e){var t=e.content,n=e.title,r=e.extra,a=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=xr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zr=qe.styles;function la(e){var t=e[0],n=e[1],r=e.slice(4),a=za(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(Tt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Tt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Tt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Gu={found:!1,width:512,height:512};function Zu(e,t){!ks&&!H.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function fa(e,t){var n=t;return t==="fa"&&H.styleDefault!==null&&(t=wt()),new Promise(function(r,a){if(ut("missingIconAbstract"),n==="fa"){var i=Rs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&zr[t]&&zr[t][e]){var o=zr[t][e];return r(la(o))}Zu(e,t),r(j(j({},Gu),{},{icon:H.showMissingIcons&&e?ut("missingIconAbstract")||{}:{}}))})}var to=function(){},ca=H.measurePerformance&&zn&&zn.mark&&zn.measure?zn:{mark:to,measure:to},un='FA "6.2.1"',ed=function(t){return ca.mark("".concat(un," ").concat(t," begins")),function(){return zs(t)}},zs=function(t){ca.mark("".concat(un," ").concat(t," ends")),ca.measure("".concat(un," ").concat(t),"".concat(un," ").concat(t," begins"),"".concat(un," ").concat(t," ends"))},Va={begin:ed,end:zs},Gn=function(){};function no(e){var t=e.getAttribute?e.getAttribute(Ft):null;return typeof t=="string"}function td(e){var t=e.getAttribute?e.getAttribute($a):null,n=e.getAttribute?e.getAttribute(Ha):null;return t&&n}function nd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(H.replacementClass)}function rd(){if(H.autoReplaceSvg===!0)return Zn.replace;var e=Zn[H.autoReplaceSvg];return e||Zn.replace}function ad(e){return fe.createElementNS("http://www.w3.org/2000/svg",e)}function id(e){return fe.createElement(e)}function Ds(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ad:id:n;if(typeof e=="string")return fe.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ds(o,{ceFn:r}))}),a}function od(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Zn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ds(a),n)}),n.getAttribute(Ft)===null&&H.keepOriginalSource){var r=fe.createComment(od(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ua(n).indexOf(H.replacementClass))return Zn.replace(t);var a=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===H.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Sn(s)}).join(`
`);n.setAttribute(Ft,""),n.innerHTML=o}};function ro(e){e()}function $s(e,t){var n=typeof t=="function"?t:Gn;if(e.length===0)n();else{var r=ro;H.mutateApproach===cu&&(r=xt.requestAnimationFrame||ro),r(function(){var a=rd(),i=Va.begin("mutate");e.map(a),i(),n()})}}var Qa=!1;function Hs(){Qa=!0}function ua(){Qa=!1}var sr=null;function ao(e){if(qi&&H.observeMutations){var t=e.treeCallback,n=t===void 0?Gn:t,r=e.nodeCallback,a=r===void 0?Gn:r,i=e.pseudoElementsCallback,o=i===void 0?Gn:i,s=e.observeMutationsRoot,l=s===void 0?fe:s;sr=new qi(function(f){if(!Qa){var c=wt();rn(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!no(m.addedNodes[0])&&(H.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&H.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&no(m.target)&&~gu.indexOf(m.attributeName))if(m.attributeName==="class"&&td(m.target)){var p=_r(Ua(m.target)),b=p.prefix,x=p.iconName;m.target.setAttribute($a,b||c),x&&m.target.setAttribute(Ha,x)}else nd(m.target)&&a(m.target)})}}),mt&&sr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sd(){sr&&sr.disconnect()}function ld(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function fd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=_r(Ua(e));return a.prefix||(a.prefix=wt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=$u(a.prefix,e.innerText)||Ka(a.prefix,aa(e.innerText))),!a.iconName&&H.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function cd(e){var t=rn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return H.autoA11y&&(n?t["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||Cn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ud(){return{iconName:null,title:null,titleId:null,prefix:null,transform:et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function io(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fd(e),r=n.iconName,a=n.prefix,i=n.rest,o=cd(e),s=oa("parseNodeAttributes",{},e),l=t.styleParser?ld(e):[];return j({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var dd=qe.styles;function Bs(e){var t=H.autoReplaceSvg==="nest"?io(e,{styleParser:!1}):io(e);return~t.extra.classes.indexOf(Os)?ut("generateLayersText",e,t):ut("generateSvgReplacementMutation",e,t)}var _t=new Set;Ba.map(function(e){_t.add("fa-".concat(e))});Object.keys(On[le]).map(_t.add.bind(_t));Object.keys(On[de]).map(_t.add.bind(_t));_t=Tn(_t);function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mt)return Promise.resolve();var n=fe.documentElement.classList,r=function(m){return n.add("".concat(Xi,"-").concat(m))},a=function(m){return n.remove("".concat(Xi,"-").concat(m))},i=H.autoFetchSvg?_t:Ba.map(function(c){return"fa-".concat(c)}).concat(Object.keys(dd));i.includes("fa")||i.push("fa");var o=[".".concat(Os,":not([").concat(Ft,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Ft,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Va.begin("onTree"),f=s.reduce(function(c,m){try{var p=Bs(m);p&&c.push(p)}catch(b){ks||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(p){$s(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),m(p)})})}function md(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bs(e).then(function(n){n&&$s([n],t)})}function pd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:sa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:sa(a||{})),e(r,j(j({},n),{},{mask:a}))}}var hd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?et:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,p=m===void 0?null:m,b=n.titleId,x=b===void 0?null:b,O=n.classes,I=O===void 0?[]:O,h=n.attributes,y=h===void 0?{}:h,v=n.styles,N=v===void 0?{}:v;if(t){var F=t.prefix,K=t.iconName,M=t.icon;return kr(j({type:"icon"},t),function(){return Lt("beforeDOMElementCreation",{iconDefinition:t,params:n}),H.autoA11y&&(p?y["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(x||Cn()):(y["aria-hidden"]="true",y.focusable="false")),Xa({icons:{main:la(M),mask:l?la(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:K,transform:j(j({},et),a),symbol:o,title:p,maskId:c,titleId:x,extra:{attributes:y,styles:N,classes:I}})})}},vd={mixout:function(){return{icon:pd(hd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=oo,n.nodeCallback=md,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?fe:r,i=n.callback,o=i===void 0?function(){}:i;return oo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,m=r.maskId,p=r.extra;return new Promise(function(b,x){Promise.all([fa(a,s),c.iconName?fa(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var I=za(O,2),h=I[0],y=I[1];b([n,Xa({icons:{main:h,mask:y},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=xr(s);l.length>0&&(a.style=l);var f;return Wa(o)&&(f=ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},gd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return kr({type:"layer"},function(){Lt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(Tn(i)).join(" ")},children:o}]})}}}},bd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return kr({type:"counter",content:n},function(){return Lt("beforeDOMElementCreation",{content:n,params:r}),Ju({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(Tn(s))}})})}}}},yd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?et:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,p=r.styles,b=p===void 0?{}:p;return kr({type:"text",content:n},function(){return Lt("beforeDOMElementCreation",{content:n,params:r}),eo({content:n,transform:j(j({},et),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(H.cssPrefix,"-layers-text")].concat(Tn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(xs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return H.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,eo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},xd=new RegExp('"',"ug"),so=[1105920,1112319];function wd(e){var t=e.replace(xd,""),n=Fu(t,0),r=n>=so[0]&&n<=so[1],a=t.length===2?t[0]===t[1]:!1;return{value:aa(a?t[0]:t),isSecondary:r||a}}function lo(e,t){var n="".concat(fu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=rn(e.children),o=i.filter(function(M){return M.getAttribute(ra)===t})[0],s=xt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(pu),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?de:le,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?An[p][l[2].toLowerCase()]:hu[p][f],x=wd(m),O=x.value,I=x.isSecondary,h=l[0].startsWith("FontAwesome"),y=Ka(b,O),v=y;if(h){var N=Hu(O);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!I&&(!o||o.getAttribute($a)!==b||o.getAttribute(Ha)!==v)){e.setAttribute(n,v),o&&e.removeChild(o);var F=ud(),K=F.extra;K.attributes[ra]=t,fa(y,b).then(function(M){var B=Xa(j(j({},F),{},{icons:{main:M,mask:qa()},prefix:b,iconName:v,extra:K,watchable:!0})),Q=fe.createElement("svg");t==="::before"?e.insertBefore(Q,e.firstChild):e.appendChild(Q),Q.outerHTML=B.map(function(se){return Sn(se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function _d(e){return Promise.all([lo(e,"::before"),lo(e,"::after")])}function kd(e){return e.parentNode!==document.head&&!~uu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ra)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function fo(e){if(mt)return new Promise(function(t,n){var r=rn(e.querySelectorAll("*")).filter(kd).map(_d),a=Va.begin("searchPseudoElements");Hs(),Promise.all(r).then(function(){a(),ua(),t()}).catch(function(){a(),ua(),n()})})}var Od={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?fe:r;H.searchPseudoElements&&fo(a)}}},co=!1,Ad={mixout:function(){return{dom:{unwatch:function(){Hs(),co=!0}}}},hooks:function(){return{bootstrap:function(){ao(oa("mutationObserverCallbacks",{}))},noAuto:function(){sd()},watch:function(n){var r=n.observeMutationsRoot;co?ua():ao(oa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},uo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Ed={mixout:function(){return{parse:{transform:function(n){return uo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=uo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:p};return{tag:"g",attributes:j({},b.outer),children:[{tag:"g",attributes:j({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),b.path)}]}]}}}},Dr={x:0,y:0,width:"100%",height:"100%"};function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Pd(e){return e.tag==="g"?e.children:[e]}var Cd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?_r(a.split(" ").map(function(o){return o.trim()})):qa();return i.prefix||(i.prefix=wt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,m=o.width,p=o.icon,b=Eu({transform:l,containerWidth:m,iconWidth:f}),x={tag:"rect",attributes:j(j({},Dr),{},{fill:"white"})},O=c.children?{children:c.children.map(mo)}:{},I={tag:"g",attributes:j({},b.inner),children:[mo(j({tag:c.tag,attributes:j(j({},c.attributes),b.path)},O))]},h={tag:"g",attributes:j({},b.outer),children:[I]},y="mask-".concat(s||Cn()),v="clip-".concat(s||Cn()),N={tag:"mask",attributes:j(j({},Dr),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,h]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Pd(p)},N]};return r.push(F,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},Dr)}),{children:r,attributes:a}}}},Td={provides:function(t){var n=!1;xt.matchMedia&&(n=xt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=j(j({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:j(j({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:j(j({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:j(j({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Id={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Sd=[Tu,vd,gd,bd,yd,Od,Ad,Ed,Cd,Td,Id];Wu(Sd,{mixoutsTo:Fe});Fe.noAuto;var Us=Fe.config,po=Fe.library,Md=Fe.dom,lr=Fe.parse;Fe.findIconDefinition;Fe.toHtml;var Nd=Fe.icon;Fe.layer;var Fd=Fe.text;Fe.counter;var Ld={prefix:"fass",iconName:"quote-right",icon:[448,512,[8221,"quote-right-alt"],"f10e","M192 296c0 66.3-53.7 120-120 120H64 32l0-64H64h8c30.9 0 56-25.1 56-56v-8L0 288V96H192l0 96v96 8zm256 0c0 66.3-53.7 120-120 120h-8H288V352h32 8c30.9 0 56-25.1 56-56v-8l-128 0 0-192H448v96l0 96v8z"]},Rd={prefix:"fass",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96h8 32v64H128h-8c-30.9 0-56 25.1-56 56v8H192V416H0V320 224v-8zm256 0c0-66.3 53.7-120 120-120h8 32v64H384h-8c-30.9 0-56 25.1-56 56v8H448V416H256V320 224v-8z"]},jd={prefix:"fat",iconName:"angle-right",icon:[256,512,[8250],"f105","M224 256c0 1.1-.7344 3.969-2.219 5.531l-144 151.1c-3.047 3.187-8.125 3.312-11.31 .25c-3.188-3.094-3.281-8.156-.25-11.31l138.7-146.5L66.21 109.5C63.18 106.3 63.27 101.3 66.46 98.22c3.188-3.062 8.266-2.937 11.31 .25l144 151.1C223.3 252 224 254 224 256z"]},zd={prefix:"fat",iconName:"angle-left",icon:[256,512,[8249],"f104","M32 255.1c0-1.1 .7344-3.969 2.219-5.531l144-151.1c3.047-3.187 8.125-3.312 11.31-.25c3.188 3.094 3.281 8.156 .25 11.31L51.08 255.1l138.7 146.5c3.031 3.219 2.938 8.281-.25 11.31c-3.188 3.062-8.266 2.937-11.31-.25L34.22 261.5C32.73 259.1 32 257.1 32 255.1z"]};po&&po.add(Rd,Ld,zd,jd);const Dd=()=>{Md.watch()};const $d={class:"font-body py-10 px-6 md:px-0 container m-auto max-w-2xl border-none",id:"testimonialslider"},Hd={__name:"TestimonialSlider",setup(e){const t=We("https://admin.drflora.kim/api/sliders"),n=We(!1),{data:r,error:a,abort:i,statusCode:o,isFetching:s,isFinished:l,canAbort:f,execute:c}=Xc(t,{refetch:n}).get(),m=_e(()=>{if(r.value)return JSON.parse(r.value).data[0].slides});return Sa(()=>{Dd(),c()}),(p,b)=>(je(),Pt("div",$d,[Re(l)?(je(),pn(Rc,{key:0,slides:Re(m)},null,8,["slides"])):Jn("",!0)]))}};function ho(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ho(Object(n),!0).forEach(function(r){Te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ho(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ud(e,t){if(e==null)return{};var n=Bd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function da(e){return Wd(e)||Yd(e)||Kd(e)||qd()}function Wd(e){if(Array.isArray(e))return ma(e)}function Yd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Kd(e,t){if(e){if(typeof e=="string")return ma(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ma(e,t)}}function ma(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ws={exports:{}};(function(e){(function(t){var n=function(h,y,v){if(!f(y)||m(y)||p(y)||b(y)||l(y))return y;var N,F=0,K=0;if(c(y))for(N=[],K=y.length;F<K;F++)N.push(n(h,y[F],v));else{N={};for(var M in y)Object.prototype.hasOwnProperty.call(y,M)&&(N[h(M,v)]=n(h,y[M],v))}return N},r=function(h,y){y=y||{};var v=y.separator||"_",N=y.split||/(?=[A-Z])/;return h.split(N).join(v)},a=function(h){return x(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(y,v){return v?v.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},i=function(h){var y=a(h);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(h,y){return r(h,y).toLowerCase()},s=Object.prototype.toString,l=function(h){return typeof h=="function"},f=function(h){return h===Object(h)},c=function(h){return s.call(h)=="[object Array]"},m=function(h){return s.call(h)=="[object Date]"},p=function(h){return s.call(h)=="[object RegExp]"},b=function(h){return s.call(h)=="[object Boolean]"},x=function(h){return h=h-0,h===h},O=function(h,y){var v=y&&"process"in y?y.process:y;return typeof v!="function"?h:function(N,F){return v(N,h,F)}},I={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(h,y){return n(O(a,y),h)},decamelizeKeys:function(h,y){return n(O(o,y),h,y)},pascalizeKeys:function(h,y){return n(O(i,y),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=I:t.humps=I})(Xd)})(Ws);var Vd=Ws.exports,Qd=["class","style"];function Jd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Vd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Gd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ja(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Gd(c);break;case"style":l.style=Jd(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ud(n,Qd);return ds(e.tag,Ue(Ue(Ue({},t),{},{class:a.class,style:Ue(Ue({},a.style),o)},a.attrs),s),r)}var Ys=!1;try{Ys=!0}catch{}function Zd(){if(!Ys&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function gn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Te({},e,t):{}}function em(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Te(t,"fa-".concat(e.size),e.size!==null),Te(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Te(t,"fa-pull-".concat(e.pull),e.pull!==null),Te(t,"fa-swap-opacity",e.swapOpacity),Te(t,"fa-bounce",e.bounce),Te(t,"fa-shake",e.shake),Te(t,"fa-beat",e.beat),Te(t,"fa-fade",e.fade),Te(t,"fa-beat-fade",e.beatFade),Te(t,"fa-flash",e.flash),Te(t,"fa-spin-pulse",e.spinPulse),Te(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function vo(e){if(e&&fr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(lr.icon)return lr.icon(e);if(e===null)return null;if(fr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var tm=Ia({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=_e(function(){return vo(t.icon)}),i=_e(function(){return gn("classes",em(t))}),o=_e(function(){return gn("transform",typeof t.transform=="string"?lr.transform(t.transform):t.transform)}),s=_e(function(){return gn("mask",vo(t.mask))}),l=_e(function(){return Nd(a.value,Ue(Ue(Ue(Ue({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});st(l,function(c){if(!c)return Zd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=_e(function(){return l.value?Ja(l.value.abstract[0],{},r):null});return function(){return f.value}}}),nm=Ia({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Us.familyPrefix,i=_e(function(){return["".concat(a,"-layers")].concat(da(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ds("div",{class:i.value},r.default?r.default():[])}}});Ia({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Us.familyPrefix,i=_e(function(){return gn("classes",[].concat(da(t.counter?["".concat(a,"-layers-counter")]:[]),da(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=_e(function(){return gn("transform",typeof t.transform=="string"?lr.transform(t.transform):t.transform)}),s=_e(function(){var f=Fd(t.value.toString(),Ue(Ue({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=_e(function(){return Ja(s.value,{},r)});return function(){return l.value}}});pc(Hd).component("FontAwesomeIcon",tm).component("FontAwesomeLayers",nm).mount("#testimonial-slider");document.addEventListener("DOMContentLoaded",e=>{});
