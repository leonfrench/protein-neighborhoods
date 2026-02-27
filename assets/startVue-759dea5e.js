import{b as Te,g as mu,m as hi,a as yu,c as _u,d as bu,e as $u}from"./getColorTheme-3ad3fafe.js";import{_ as Ki}from"./index-55e7bd22.js";import{c as Rn,g as wu}from"./config-08cc2f6c.js";/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ws(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const pe={},fn=[],it=()=>{},Aa=()=>!1,Br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Es=e=>e.startsWith("onUpdate:"),Le=Object.assign,Ss=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Eu=Object.prototype.hasOwnProperty,ue=(e,t)=>Eu.call(e,t),K=Array.isArray,dn=e=>Gr(e)==="[object Map]",Ia=e=>Gr(e)==="[object Set]",Q=e=>typeof e=="function",Ee=e=>typeof e=="string",Ht=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",xa=e=>(ge(e)||Q(e))&&Q(e.then)&&Q(e.catch),Ta=Object.prototype.toString,Gr=e=>Ta.call(e),Su=e=>Gr(e).slice(8,-1),Oa=e=>Gr(e)==="[object Object]",Cs=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kn=ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Cu=/-\w/g,nt=Vr(e=>e.replace(Cu,t=>t.slice(1).toUpperCase())),Au=/\B([A-Z])/g,Ut=Vr(e=>e.replace(Au,"-$1").toLowerCase()),Wr=Vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),pi=Vr(e=>e?`on${Wr(e)}`:""),Pt=(e,t)=>!Object.is(e,t),Ir=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},La=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},As=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Iu=e=>{const t=Ee(e)?Number(e):NaN;return isNaN(t)?e:t};let Xs;const jr=()=>Xs||(Xs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gn(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Ee(r)?Lu(r):gn(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(Ee(e)||ge(e))return e}const xu=/;(?![^(]*\))/g,Tu=/:([^]+)/,Ou=/\/\*[^]*?\*\//g;function Lu(e){const t={};return e.replace(Ou,"").split(xu).forEach(n=>{if(n){const r=n.split(Tu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Jt(e){let t="";if(Ee(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=Jt(e[n]);r&&(t+=r+" ")}else if(ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Nu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ru=ws(Nu);function Na(e){return!!e||e===""}const Ra=e=>!!(e&&e.__v_isRef===!0),Y=e=>Ee(e)?e:e==null?"":K(e)||ge(e)&&(e.toString===Ta||!Q(e.toString))?Ra(e)?Y(e.value):JSON.stringify(e,Ma,2):String(e),Ma=(e,t)=>Ra(t)?Ma(e,t.value):dn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[vi(r,s)+" =>"]=i,n),{})}:Ia(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>vi(n))}:Ht(t)?vi(t):ge(t)&&!K(t)&&!Oa(t)?String(t):t,vi=(e,t="")=>{var n;return Ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class Mu{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Fu(){return je}let ve;const gi=new WeakSet;class Fa{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gi.has(this)&&(gi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qs(this),Da(this);const t=ve,n=st;ve=this,st=!0;try{return this.fn()}finally{Ha(this),ve=t,st=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ts(t);this.deps=this.depsTail=void 0,qs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xi(this)&&this.run()}get dirty(){return Xi(this)}}let ka=0,Pn,Dn;function Pa(e,t=!1){if(e.flags|=8,t){e.next=Dn,Dn=e;return}e.next=Pn,Pn=e}function Is(){ka++}function xs(){if(--ka>0)return;if(Dn){let t=Dn;for(Dn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Pn;){let t=Pn;for(Pn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Da(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ha(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Ts(r),ku(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Xi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ua(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ua(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Vn)||(e.globalVersion=Vn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Xi(e))))return;e.flags|=2;const t=e.dep,n=ve,r=st;ve=e,st=!0;try{Da(e);const i=e.fn(e._value);(t.version===0||Pt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ve=n,st=r,Ha(e),e.flags&=-3}}function Ts(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Ts(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ku(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let st=!0;const Ba=[];function St(){Ba.push(st),st=!1}function Ct(){const e=Ba.pop();st=e===void 0?!0:e}function qs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ve;ve=void 0;try{t()}finally{ve=n}}}let Vn=0;class Pu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Os{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ve||!st||ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ve)n=this.activeLink=new Pu(ve,this),ve.deps?(n.prevDep=ve.depsTail,ve.depsTail.nextDep=n,ve.depsTail=n):ve.deps=ve.depsTail=n,Ga(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ve.depsTail,n.nextDep=void 0,ve.depsTail.nextDep=n,ve.depsTail=n,ve.deps===n&&(ve.deps=r)}return n}trigger(t){this.version++,Vn++,this.notify(t)}notify(t){Is();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xs()}}}function Ga(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Ga(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qi=new WeakMap,Zt=Symbol(""),Zi=Symbol(""),Wn=Symbol("");function De(e,t,n){if(st&&ve){let r=qi.get(e);r||qi.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new Os),i.map=r,i.key=n),i.track()}}function wt(e,t,n,r,i,s){const o=qi.get(e);if(!o){Vn++;return}const a=l=>{l&&l.trigger()};if(Is(),t==="clear")o.forEach(a);else{const l=K(e),c=l&&Cs(n);if(l&&n==="length"){const u=Number(r);o.forEach((d,p)=>{(p==="length"||p===Wn||!Ht(p)&&p>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Wn)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Zt)),dn(e)&&a(o.get(Zi)));break;case"delete":l||(a(o.get(Zt)),dn(e)&&a(o.get(Zi)));break;case"set":dn(e)&&a(o.get(Zt));break}}xs()}function sn(e){const t=le(e);return t===e?t:(De(t,"iterate",Wn),tt(e)?t:t.map(ot))}function zr(e){return De(e=le(e),"iterate",Wn),e}function Rt(e,t){return At(e)?Qt(e)?yn(ot(t)):yn(t):ot(t)}const Du={__proto__:null,[Symbol.iterator](){return mi(this,Symbol.iterator,e=>Rt(this,e))},concat(...e){return sn(this).concat(...e.map(t=>K(t)?sn(t):t))},entries(){return mi(this,"entries",e=>(e[1]=Rt(this,e[1]),e))},every(e,t){return pt(this,"every",e,t,void 0,arguments)},filter(e,t){return pt(this,"filter",e,t,n=>n.map(r=>Rt(this,r)),arguments)},find(e,t){return pt(this,"find",e,t,n=>Rt(this,n),arguments)},findIndex(e,t){return pt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return pt(this,"findLast",e,t,n=>Rt(this,n),arguments)},findLastIndex(e,t){return pt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return pt(this,"forEach",e,t,void 0,arguments)},includes(...e){return yi(this,"includes",e)},indexOf(...e){return yi(this,"indexOf",e)},join(e){return sn(this).join(e)},lastIndexOf(...e){return yi(this,"lastIndexOf",e)},map(e,t){return pt(this,"map",e,t,void 0,arguments)},pop(){return En(this,"pop")},push(...e){return En(this,"push",e)},reduce(e,...t){return Zs(this,"reduce",e,t)},reduceRight(e,...t){return Zs(this,"reduceRight",e,t)},shift(){return En(this,"shift")},some(e,t){return pt(this,"some",e,t,void 0,arguments)},splice(...e){return En(this,"splice",e)},toReversed(){return sn(this).toReversed()},toSorted(e){return sn(this).toSorted(e)},toSpliced(...e){return sn(this).toSpliced(...e)},unshift(...e){return En(this,"unshift",e)},values(){return mi(this,"values",e=>Rt(this,e))}};function mi(e,t,n){const r=zr(e),i=r[t]();return r!==e&&!tt(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const Hu=Array.prototype;function pt(e,t,n,r,i,s){const o=zr(e),a=o!==e&&!tt(e),l=o[t];if(l!==Hu[t]){const d=l.apply(e,s);return a?ot(d):d}let c=n;o!==e&&(a?c=function(d,p){return n.call(this,Rt(e,d),p,e)}:n.length>2&&(c=function(d,p){return n.call(this,d,p,e)}));const u=l.call(o,c,r);return a&&i?i(u):u}function Zs(e,t,n,r){const i=zr(e);let s=n;return i!==e&&(tt(e)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,e)}):s=function(o,a,l){return n.call(this,o,Rt(e,a),l,e)}),i[t](s,...r)}function yi(e,t,n){const r=le(e);De(r,"iterate",Wn);const i=r[t](...n);return(i===-1||i===!1)&&Rs(n[0])?(n[0]=le(n[0]),r[t](...n)):i}function En(e,t,n=[]){St(),Is();const r=le(e)[t].apply(e,n);return xs(),Ct(),r}const Uu=ws("__proto__,__v_isRef,__isVue"),Va=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ht));function Bu(e){Ht(e)||(e=String(e));const t=le(this);return De(t,"has",e),t.hasOwnProperty(e)}class Wa{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Qu:Xa:s?Ka:za).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=K(t);if(!i){let l;if(o&&(l=Du[n]))return l;if(n==="hasOwnProperty")return Bu}const a=Reflect.get(t,n,Ue(t)?t:r);if((Ht(n)?Va.has(n):Uu(n))||(i||De(t,"get",n),s))return a;if(Ue(a)){const l=o&&Cs(n)?a:a.value;return i&&ge(l)?Yi(l):l}return ge(a)?i?Yi(a):mn(a):a}}class ja extends Wa{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];const o=K(t)&&Cs(n);if(!this._isShallow){const c=At(s);if(!tt(r)&&!At(r)&&(s=le(s),r=le(r)),!o&&Ue(s)&&!Ue(r))return c||(s.value=r),!0}const a=o?Number(n)<t.length:ue(t,n),l=Reflect.set(t,n,r,Ue(t)?t:i);return t===le(i)&&(a?Pt(r,s)&&wt(t,"set",n,r):wt(t,"add",n,r)),l}deleteProperty(t,n){const r=ue(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&wt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Ht(n)||!Va.has(n))&&De(t,"has",n),r}ownKeys(t){return De(t,"iterate",K(t)?"length":Zt),Reflect.ownKeys(t)}}class Gu extends Wa{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Vu=new ja,Wu=new Gu,ju=new ja(!0);const Qi=e=>e,sr=e=>Reflect.getPrototypeOf(e);function zu(e,t,n){return function(...r){const i=this.__v_raw,s=le(i),o=dn(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),u=n?Qi:t?yn:ot;return!t&&De(s,"iterate",l?Zi:Zt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function or(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ku(e,t){const n={get(i){const s=this.__v_raw,o=le(s),a=le(i);e||(Pt(i,a)&&De(o,"get",i),De(o,"get",a));const{has:l}=sr(o),c=t?Qi:e?yn:ot;if(l.call(o,i))return c(s.get(i));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!e&&De(le(i),"iterate",Zt),i.size},has(i){const s=this.__v_raw,o=le(s),a=le(i);return e||(Pt(i,a)&&De(o,"has",i),De(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=le(a),c=t?Qi:e?yn:ot;return!e&&De(l,"iterate",Zt),a.forEach((u,d)=>i.call(s,c(u),c(d),o))}};return Le(n,e?{add:or("add"),set:or("set"),delete:or("delete"),clear:or("clear")}:{add(i){!t&&!tt(i)&&!At(i)&&(i=le(i));const s=le(this);return sr(s).has.call(s,i)||(s.add(i),wt(s,"add",i,i)),this},set(i,s){!t&&!tt(s)&&!At(s)&&(s=le(s));const o=le(this),{has:a,get:l}=sr(o);let c=a.call(o,i);c||(i=le(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,s),c?Pt(s,u)&&wt(o,"set",i,s):wt(o,"add",i,s),this},delete(i){const s=le(this),{has:o,get:a}=sr(s);let l=o.call(s,i);l||(i=le(i),l=o.call(s,i)),a&&a.call(s,i);const c=s.delete(i);return l&&wt(s,"delete",i,void 0),c},clear(){const i=le(this),s=i.size!==0,o=i.clear();return s&&wt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=zu(i,e,t)}),n}function Ls(e,t){const n=Ku(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ue(n,i)&&i in r?n:r,i,s)}const Xu={get:Ls(!1,!1)},qu={get:Ls(!1,!0)},Zu={get:Ls(!0,!1)};const za=new WeakMap,Ka=new WeakMap,Xa=new WeakMap,Qu=new WeakMap;function Yu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ju(e){return e.__v_skip||!Object.isExtensible(e)?0:Yu(Su(e))}function mn(e){return At(e)?e:Ns(e,!1,Vu,Xu,za)}function ec(e){return Ns(e,!1,ju,qu,Ka)}function Yi(e){return Ns(e,!0,Wu,Zu,Xa)}function Ns(e,t,n,r,i){if(!ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=Ju(e);if(s===0)return e;const o=i.get(e);if(o)return o;const a=new Proxy(e,s===2?r:n);return i.set(e,a),a}function Qt(e){return At(e)?Qt(e.__v_raw):!!(e&&e.__v_isReactive)}function At(e){return!!(e&&e.__v_isReadonly)}function tt(e){return!!(e&&e.__v_isShallow)}function Rs(e){return e?!!e.__v_raw:!1}function le(e){const t=e&&e.__v_raw;return t?le(t):e}function tc(e){return!ue(e,"__v_skip")&&Object.isExtensible(e)&&La(e,"__v_skip",!0),e}const ot=e=>ge(e)?mn(e):e,yn=e=>ge(e)?Yi(e):e;function Ue(e){return e?e.__v_isRef===!0:!1}function ae(e){return nc(e,!1)}function nc(e,t){return Ue(e)?e:new rc(e,t)}class rc{constructor(t,n){this.dep=new Os,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:le(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||tt(t)||At(t);t=r?t:le(t),Pt(t,n)&&(this._rawValue=t,this._value=r?t:ot(t),this.dep.trigger())}}function Ie(e){return Ue(e)?e.value:e}const ic={get:(e,t,n)=>t==="__v_raw"?e:Ie(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ue(i)&&!Ue(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qa(e){return Qt(e)?e:new Proxy(e,ic)}class sc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Os(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return Pa(this,!0),!0}get value(){const t=this.dep.track();return Ua(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function oc(e,t,n=!1){let r,i;return Q(e)?r=e:(r=e.get,i=e.set),new sc(r,i,n)}const ar={},Rr=new WeakMap;let Kt;function ac(e,t=!1,n=Kt){if(n){let r=Rr.get(n);r||Rr.set(n,r=[]),r.push(e)}}function lc(e,t,n=pe){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,c=B=>i?B:tt(B)||i===!1||i===0?Et(B,1):Et(B);let u,d,p,v,R=!1,D=!1;if(Ue(e)?(d=()=>e.value,R=tt(e)):Qt(e)?(d=()=>c(e),R=!0):K(e)?(D=!0,R=e.some(B=>Qt(B)||tt(B)),d=()=>e.map(B=>{if(Ue(B))return B.value;if(Qt(B))return c(B);if(Q(B))return l?l(B,2):B()})):Q(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){St();try{p()}finally{Ct()}}const B=Kt;Kt=u;try{return l?l(e,3,[v]):e(v)}finally{Kt=B}}:d=it,t&&i){const B=d,J=i===!0?1/0:i;d=()=>Et(B(),J)}const P=Fu(),w=()=>{u.stop(),P&&P.active&&Ss(P.effects,u)};if(s&&t){const B=t;t=(...J)=>{B(...J),w()}}let U=D?new Array(e.length).fill(ar):ar;const q=B=>{if(!(!(u.flags&1)||!u.dirty&&!B))if(t){const J=u.run();if(i||R||(D?J.some((be,xe)=>Pt(be,U[xe])):Pt(J,U))){p&&p();const be=Kt;Kt=u;try{const xe=[J,U===ar?void 0:D&&U[0]===ar?[]:U,v];U=J,l?l(t,3,xe):t(...xe)}finally{Kt=be}}}else u.run()};return a&&a(q),u=new Fa(d),u.scheduler=o?()=>o(q,!1):q,v=B=>ac(B,!1,u),p=u.onStop=()=>{const B=Rr.get(u);if(B){if(l)l(B,4);else for(const J of B)J();Rr.delete(u)}},t?r?q(!0):U=u.run():o?o(q.bind(null,!0),!0):u.run(),w.pause=u.pause.bind(u),w.resume=u.resume.bind(u),w.stop=w,w}function Et(e,t=1/0,n){if(t<=0||!ge(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ue(e))Et(e.value,t,n);else if(K(e))for(let r=0;r<e.length;r++)Et(e[r],t,n);else if(Ia(e)||dn(e))e.forEach(r=>{Et(r,t,n)});else if(Oa(e)){for(const r in e)Et(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Et(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qn(e,t,n,r){try{return r?e(...r):e()}catch(i){Kr(i,t,n)}}function at(e,t,n,r){if(Q(e)){const i=Qn(e,t,n,r);return i&&xa(i)&&i.catch(s=>{Kr(s,t,n)}),i}if(K(e)){const i=[];for(let s=0;s<e.length;s++)i.push(at(e[s],t,n,r));return i}}function Kr(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||pe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,c)===!1)return}a=a.parent}if(s){St(),Qn(s,null,10,[e,l,c]),Ct();return}}uc(e,n,i,r,o)}function uc(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const Ve=[];let ut=-1;const hn=[];let Mt=null,ln=0;const Za=Promise.resolve();let Mr=null;function cc(e){const t=Mr||Za;return e?t.then(this?e.bind(this):e):t}function fc(e){let t=ut+1,n=Ve.length;for(;t<n;){const r=t+n>>>1,i=Ve[r],s=jn(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function Ms(e){if(!(e.flags&1)){const t=jn(e),n=Ve[Ve.length-1];!n||!(e.flags&2)&&t>=jn(n)?Ve.push(e):Ve.splice(fc(t),0,e),e.flags|=1,Qa()}}function Qa(){Mr||(Mr=Za.then(Ja))}function dc(e){K(e)?hn.push(...e):Mt&&e.id===-1?Mt.splice(ln+1,0,e):e.flags&1||(hn.push(e),e.flags|=1),Qa()}function Qs(e,t,n=ut+1){for(;n<Ve.length;n++){const r=Ve[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ve.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ya(e){if(hn.length){const t=[...new Set(hn)].sort((n,r)=>jn(n)-jn(r));if(hn.length=0,Mt){Mt.push(...t);return}for(Mt=t,ln=0;ln<Mt.length;ln++){const n=Mt[ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mt=null,ln=0}}const jn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ja(e){const t=it;try{for(ut=0;ut<Ve.length;ut++){const n=Ve[ut];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Qn(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;ut<Ve.length;ut++){const n=Ve[ut];n&&(n.flags&=-2)}ut=-1,Ve.length=0,Ya(),Mr=null,(Ve.length||hn.length)&&Ja()}}let Qe=null,el=null;function Fr(e){const t=Qe;return Qe=e,el=e&&e.type.__scopeId||null,t}function xr(e,t=Qe,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Dr(-1);const s=Fr(t);let o;try{o=e(...i)}finally{Fr(s),r._d&&Dr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ys(e,t){if(Qe===null)return e;const n=Yr(Qe),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,a,l=pe]=t[i];s&&(Q(s)&&(s={mounted:s,updated:s}),s.deep&&Et(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Bt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(St(),at(l,n,8,[e.el,a,e,t]),Ct())}}function hc(e,t){if(He){let n=He.provides;const r=He.parent&&He.parent.provides;r===n&&(n=He.provides=Object.create(r)),n[e]=t}}function Tr(e,t,n=!1){const r=Ol();if(r||vn){let i=vn?vn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Q(t)?t.call(r&&r.proxy):t}}const pc=Symbol.for("v-scx"),vc=()=>Tr(pc);function pn(e,t,n){return tl(e,t,n)}function tl(e,t,n=pe){const{immediate:r,deep:i,flush:s,once:o}=n,a=Le({},n),l=t&&r||!t&&s!=="post";let c;if(Xn){if(s==="sync"){const v=vc();c=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=it,v.resume=it,v.pause=it,v}}const u=He;a.call=(v,R,D)=>at(v,u,R,D);let d=!1;s==="post"?a.scheduler=v=>{Ze(v,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(v,R)=>{R?v():Ms(v)}),a.augmentJob=v=>{t&&(v.flags|=4),d&&(v.flags|=2,u&&(v.id=u.uid,v.i=u))};const p=lc(e,t,a);return Xn&&(c?c.push(p):l&&p()),p}function gc(e,t,n){const r=this.proxy,i=Ee(e)?e.includes(".")?nl(r,e):()=>r[e]:e.bind(r,r);let s;Q(t)?s=t:(s=t.handler,n=t);const o=Jn(this),a=tl(i,s.bind(r),n);return o(),a}function nl(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const mc=Symbol("_vte"),rl=e=>e.__isTeleport,$t=Symbol("_leaveCb"),lr=Symbol("_enterCb");function yc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fs(()=>{e.isMounted=!0}),Yn(()=>{e.isUnmounting=!0}),e}const Je=[Function,Array],il={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Je,onEnter:Je,onAfterEnter:Je,onEnterCancelled:Je,onBeforeLeave:Je,onLeave:Je,onAfterLeave:Je,onLeaveCancelled:Je,onBeforeAppear:Je,onAppear:Je,onAfterAppear:Je,onAppearCancelled:Je},sl=e=>{const t=e.subTree;return t.component?sl(t.component):t},_c={name:"BaseTransition",props:il,setup(e,{slots:t}){const n=Ol(),r=yc();return()=>{const i=t.default&&ll(t.default(),!0);if(!i||!i.length)return;const s=ol(i),o=le(e),{mode:a}=o;if(r.isLeaving)return _i(s);const l=Js(s);if(!l)return _i(s);let c=Ji(l,o,r,n,d=>c=d);l.type!==We&&zn(l,c);let u=n.subTree&&Js(n.subTree);if(u&&u.type!==We&&!Xt(u,l)&&sl(n).type!==We){let d=Ji(u,o,r,n);if(zn(u,d),a==="out-in"&&l.type!==We)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},_i(s);a==="in-out"&&l.type!==We?d.delayLeave=(p,v,R)=>{const D=al(r,u);D[String(u.key)]=u,p[$t]=()=>{v(),p[$t]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{R(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function ol(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==We){t=n;break}}return t}const bc=_c;function al(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ji(e,t,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:v,onAfterLeave:R,onLeaveCancelled:D,onBeforeAppear:P,onAppear:w,onAfterAppear:U,onAppearCancelled:q}=t,B=String(e.key),J=al(n,e),be=(X,x)=>{X&&at(X,r,9,x)},xe=(X,x)=>{const j=x[1];be(X,x),K(X)?X.every(O=>O.length<=1)&&j():X.length<=1&&j()},Se={mode:o,persisted:a,beforeEnter(X){let x=l;if(!n.isMounted)if(s)x=P||l;else return;X[$t]&&X[$t](!0);const j=J[B];j&&Xt(e,j)&&j.el[$t]&&j.el[$t](),be(x,[X])},enter(X){let x=c,j=u,O=d;if(!n.isMounted)if(s)x=w||c,j=U||u,O=q||d;else return;let V=!1;const re=X[lr]=ce=>{V||(V=!0,ce?be(O,[X]):be(j,[X]),Se.delayedLeave&&Se.delayedLeave(),X[lr]=void 0)};x?xe(x,[X,re]):re()},leave(X,x){const j=String(e.key);if(X[lr]&&X[lr](!0),n.isUnmounting)return x();be(p,[X]);let O=!1;const V=X[$t]=re=>{O||(O=!0,x(),re?be(D,[X]):be(R,[X]),X[$t]=void 0,J[j]===e&&delete J[j])};J[j]=e,v?xe(v,[X,V]):V()},clone(X){const x=Ji(X,t,n,r,i);return i&&i(x),x}};return Se}function _i(e){if(Xr(e))return e=Dt(e),e.children=null,e}function Js(e){if(!Xr(e))return rl(e.type)&&e.children?ol(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Q(n.default))return n.default()}}function zn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,zn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ll(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Re?(o.patchFlag&128&&i++,r=r.concat(ll(o.children,t,a))):(t||o.type!==We)&&r.push(a!=null?Dt(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ul(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const kr=new WeakMap;function Hn(e,t,n,r,i=!1){if(K(e)){e.forEach((R,D)=>Hn(R,t&&(K(t)?t[D]:t),n,r,i));return}if(Un(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Hn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?Yr(r.component):r.el,o=i?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===pe?a.refs={}:a.refs,d=a.setupState,p=le(d),v=d===pe?Aa:R=>ue(p,R);if(c!=null&&c!==l){if(eo(t),Ee(c))u[c]=null,v(c)&&(d[c]=null);else if(Ue(c)){c.value=null;const R=t;R.k&&(u[R.k]=null)}}if(Q(l))Qn(l,a,12,[o,u]);else{const R=Ee(l),D=Ue(l);if(R||D){const P=()=>{if(e.f){const w=R?v(l)?d[l]:u[l]:l.value;if(i)K(w)&&Ss(w,s);else if(K(w))w.includes(s)||w.push(s);else if(R)u[l]=[s],v(l)&&(d[l]=u[l]);else{const U=[s];l.value=U,e.k&&(u[e.k]=U)}}else R?(u[l]=o,v(l)&&(d[l]=o)):D&&(l.value=o,e.k&&(u[e.k]=o))};if(o){const w=()=>{P(),kr.delete(e)};w.id=-1,kr.set(e,w),Ze(w,n)}else eo(e),P()}}}function eo(e){const t=kr.get(e);t&&(t.flags|=8,kr.delete(e))}jr().requestIdleCallback;jr().cancelIdleCallback;const Un=e=>!!e.type.__asyncLoader,Xr=e=>e.type.__isKeepAlive;function $c(e,t){cl(e,"a",t)}function wc(e,t){cl(e,"da",t)}function cl(e,t,n=He){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(qr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Xr(i.parent.vnode)&&Ec(r,t,n,i),i=i.parent}}function Ec(e,t,n,r){const i=qr(t,e,r,!0);dl(()=>{Ss(r[t],i)},n)}function qr(e,t,n=He,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{St();const a=Jn(n),l=at(t,n,e,o);return a(),Ct(),l});return r?i.unshift(s):i.push(s),s}}const It=e=>(t,n=He)=>{(!Xn||e==="sp")&&qr(e,(...r)=>t(...r),n)},fl=It("bm"),Fs=It("m"),Sc=It("bu"),Cc=It("u"),Yn=It("bum"),dl=It("um"),Ac=It("sp"),Ic=It("rtg"),xc=It("rtc");function Tc(e,t=He){qr("ec",e,t)}const Oc="components",Lc="directives",Nc=Symbol.for("v-ndc");function Rc(e){return Mc(Lc,e)}function Mc(e,t,n=!0,r=!1){const i=Qe||He;if(i){const s=i.type;if(e===Oc){const a=bf(s,!1);if(a&&(a===t||a===nt(t)||a===Wr(nt(t))))return s}const o=to(i[e]||s[e],t)||to(i.appContext[e],t);return!o&&r?s:o}}function to(e,t){return e&&(e[t]||e[nt(t)]||e[Wr(nt(t))])}function en(e,t,n,r){let i;const s=n&&n[r],o=K(e);if(o||Ee(e)){const a=o&&Qt(e);let l=!1,c=!1;a&&(l=!tt(e),c=At(e),e=zr(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(l?c?yn(ot(e[u])):ot(e[u]):e[u],u,void 0,s&&s[u])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(ge(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,s&&s[l]));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=t(e[u],u,l,s&&s[l])}}else i=[];return n&&(n[r]=i),i}const es=e=>e?Ll(e)?Yr(e):es(e.parent):null,Bn=Le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>es(e.parent),$root:e=>es(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ks(e),$forceUpdate:e=>e.f||(e.f=()=>{Ms(e.update)}),$nextTick:e=>e.n||(e.n=cc.bind(e.proxy)),$watch:e=>gc.bind(e)}),bi=(e,t)=>e!==pe&&!e.__isScriptSetup&&ue(e,t),Fc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(bi(r,t))return o[t]=1,r[t];if(i!==pe&&ue(i,t))return o[t]=2,i[t];if(ue(s,t))return o[t]=3,s[t];if(n!==pe&&ue(n,t))return o[t]=4,n[t];ts&&(o[t]=0)}}const c=Bn[t];let u,d;if(c)return t==="$attrs"&&De(e.attrs,"get",""),c(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==pe&&ue(n,t))return o[t]=4,n[t];if(d=l.config.globalProperties,ue(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return bi(i,t)?(i[t]=n,!0):r!==pe&&ue(r,t)?(r[t]=n,!0):ue(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:s,type:o}},a){let l;return!!(n[a]||e!==pe&&a[0]!=="$"&&ue(e,a)||bi(t,a)||ue(s,a)||ue(r,a)||ue(Bn,a)||ue(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ue(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function no(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ts=!0;function kc(e){const t=ks(e),n=e.proxy,r=e.ctx;ts=!1,t.beforeCreate&&ro(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:v,updated:R,activated:D,deactivated:P,beforeDestroy:w,beforeUnmount:U,destroyed:q,unmounted:B,render:J,renderTracked:be,renderTriggered:xe,errorCaptured:Se,serverPrefetch:X,expose:x,inheritAttrs:j,components:O,directives:V,filters:re}=t;if(c&&Pc(c,r,null),o)for(const se in o){const ie=o[se];Q(ie)&&(r[se]=ie.bind(n))}if(i){const se=i.call(n,n);ge(se)&&(e.data=mn(se))}if(ts=!0,s)for(const se in s){const ie=s[se],ze=Q(ie)?ie.bind(n,n):Q(ie.get)?ie.get.bind(n,n):it,Ce=!Q(ie)&&Q(ie.set)?ie.set.bind(n):it,Fe=ct({get:ze,set:Ce});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:Be=>Fe.value=Be})}if(a)for(const se in a)hl(a[se],r,n,se);if(l){const se=Q(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ie=>{hc(ie,se[ie])})}u&&ro(u,e,"c");function ee(se,ie){K(ie)?ie.forEach(ze=>se(ze.bind(n))):ie&&se(ie.bind(n))}if(ee(fl,d),ee(Fs,p),ee(Sc,v),ee(Cc,R),ee($c,D),ee(wc,P),ee(Tc,Se),ee(xc,be),ee(Ic,xe),ee(Yn,U),ee(dl,B),ee(Ac,X),K(x))if(x.length){const se=e.exposed||(e.exposed={});x.forEach(ie=>{Object.defineProperty(se,ie,{get:()=>n[ie],set:ze=>n[ie]=ze,enumerable:!0})})}else e.exposed||(e.exposed={});J&&e.render===it&&(e.render=J),j!=null&&(e.inheritAttrs=j),O&&(e.components=O),V&&(e.directives=V),X&&ul(e)}function Pc(e,t,n=it){K(e)&&(e=ns(e));for(const r in e){const i=e[r];let s;ge(i)?"default"in i?s=Tr(i.from||r,i.default,!0):s=Tr(i.from||r):s=Tr(i),Ue(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function ro(e,t,n){at(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function hl(e,t,n,r){let i=r.includes(".")?nl(n,r):()=>n[r];if(Ee(e)){const s=t[e];Q(s)&&pn(i,s)}else if(Q(e))pn(i,e.bind(n));else if(ge(e))if(K(e))e.forEach(s=>hl(s,t,n,r));else{const s=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(s)&&pn(i,s,e)}}function ks(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Pr(l,c,o,!0)),Pr(l,t,o)),ge(t)&&s.set(t,l),l}function Pr(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Pr(e,s,n,!0),i&&i.forEach(o=>Pr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Dc[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Dc={data:io,props:so,emits:so,methods:Mn,computed:Mn,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Mn,directives:Mn,watch:Uc,provide:io,inject:Hc};function io(e,t){return t?e?function(){return Le(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function Hc(e,t){return Mn(ns(e),ns(t))}function ns(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ge(e,t){return e?[...new Set([].concat(e,t))]:t}function Mn(e,t){return e?Le(Object.create(null),e,t):t}function so(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Le(Object.create(null),no(e),no(t??{})):t}function Uc(e,t){if(!e)return t;if(!t)return e;const n=Le(Object.create(null),e);for(const r in t)n[r]=Ge(e[r],t[r]);return n}function pl(){return{app:null,config:{isNativeTag:Aa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bc=0;function Gc(e,t){return function(r,i=null){Q(r)||(r=Le({},r)),i!=null&&!ge(i)&&(i=null);const s=pl(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Bc++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Ef,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&Q(u.install)?(o.add(u),u.install(c,...d)):Q(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,p){if(!l){const v=c._ceVNode||Oe(r,i);return v.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(v,u):e(v,u,p),l=!0,c._container=u,u.__vue_app__=c,Yr(v.component)}},onUnmount(u){a.push(u)},unmount(){l&&(at(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=vn;vn=c;try{return u()}finally{vn=d}}};return c}}let vn=null;const Vc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${nt(t)}Modifiers`]||e[`${Ut(t)}Modifiers`];function Wc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||pe;let i=n;const s=t.startsWith("update:"),o=s&&Vc(r,t.slice(7));o&&(o.trim&&(i=n.map(u=>Ee(u)?u.trim():u)),o.number&&(i=n.map(As)));let a,l=r[a=pi(t)]||r[a=pi(nt(t))];!l&&s&&(l=r[a=pi(Ut(t))]),l&&at(l,e,6,i);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,at(c,e,6,i)}}const jc=new WeakMap;function vl(e,t,n=!1){const r=n?jc:t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!Q(e)){const l=c=>{const u=vl(c,t,!0);u&&(a=!0,Le(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(ge(e)&&r.set(e,null),null):(K(s)?s.forEach(l=>o[l]=null):Le(o,s),ge(e)&&r.set(e,o),o)}function Zr(e,t){return!e||!Br(t)?!1:(t=t.slice(2).replace(/Once$/,""),ue(e,t[0].toLowerCase()+t.slice(1))||ue(e,Ut(t))||ue(e,t))}function $i(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:p,setupState:v,ctx:R,inheritAttrs:D}=e,P=Fr(e);let w,U;try{if(n.shapeFlag&4){const B=i||r,J=B;w=ft(c.call(J,B,u,d,v,p,R)),U=a}else{const B=t;w=ft(B.length>1?B(d,{attrs:a,slots:o,emit:l}):B(d,null)),U=t.props?a:zc(a)}}catch(B){Gn.length=0,Kr(B,e,1),w=Oe(We)}let q=w;if(U&&D!==!1){const B=Object.keys(U),{shapeFlag:J}=q;B.length&&J&7&&(s&&B.some(Es)&&(U=Kc(U,s)),q=Dt(q,U,!1,!0))}return n.dirs&&(q=Dt(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&zn(q,n.transition),w=q,Fr(P),w}const zc=e=>{let t;for(const n in e)(n==="class"||n==="style"||Br(n))&&((t||(t={}))[n]=e[n]);return t},Kc=(e,t)=>{const n={};for(const r in e)(!Es(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Xc(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?oo(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Zr(c,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?oo(r,o,c):!0:!!o;return!1}function oo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Zr(n,s))return!0}return!1}function qc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const gl={},ml=()=>Object.create(gl),yl=e=>Object.getPrototypeOf(e)===gl;function Zc(e,t,n,r=!1){const i={},s=ml();e.propsDefaults=Object.create(null),_l(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:ec(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Qc(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=le(i),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Zr(e.emitsOptions,p))continue;const v=t[p];if(l)if(ue(s,p))v!==s[p]&&(s[p]=v,c=!0);else{const R=nt(p);i[R]=rs(l,a,R,v,e,!1)}else v!==s[p]&&(s[p]=v,c=!0)}}}else{_l(e,t,i,s)&&(c=!0);let u;for(const d in a)(!t||!ue(t,d)&&((u=Ut(d))===d||!ue(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=rs(l,a,d,void 0,e,!0)):delete i[d]);if(s!==a)for(const d in s)(!t||!ue(t,d))&&(delete s[d],c=!0)}c&&wt(e.attrs,"set","")}function _l(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(kn(l))continue;const c=t[l];let u;i&&ue(i,u=nt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Zr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=le(n),c=a||pe;for(let u=0;u<s.length;u++){const d=s[u];n[d]=rs(i,l,d,c[d],e,!ue(c,d))}}return o}function rs(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Q(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=Jn(i);r=c[n]=l.call(null,t),u()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Ut(n))&&(r=!0))}return r}const Yc=new WeakMap;function bl(e,t,n=!1){const r=n?Yc:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!Q(e)){const u=d=>{l=!0;const[p,v]=bl(d,t,!0);Le(o,p),v&&a.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return ge(e)&&r.set(e,fn),fn;if(K(s))for(let u=0;u<s.length;u++){const d=nt(s[u]);ao(d)&&(o[d]=pe)}else if(s)for(const u in s){const d=nt(u);if(ao(d)){const p=s[u],v=o[d]=K(p)||Q(p)?{type:p}:Le({},p),R=v.type;let D=!1,P=!0;if(K(R))for(let w=0;w<R.length;++w){const U=R[w],q=Q(U)&&U.name;if(q==="Boolean"){D=!0;break}else q==="String"&&(P=!1)}else D=Q(R)&&R.name==="Boolean";v[0]=D,v[1]=P,(D||ue(v,"default"))&&a.push(d)}}const c=[o,a];return ge(e)&&r.set(e,c),c}function ao(e){return e[0]!=="$"&&!kn(e)}const Ps=e=>e==="_"||e==="_ctx"||e==="$stable",Ds=e=>K(e)?e.map(ft):[ft(e)],Jc=(e,t,n)=>{if(t._n)return t;const r=xr((...i)=>Ds(t(...i)),n);return r._c=!1,r},$l=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Ps(i))continue;const s=e[i];if(Q(s))t[i]=Jc(i,s,r);else if(s!=null){const o=Ds(s);t[i]=()=>o}}},wl=(e,t)=>{const n=Ds(t);e.slots.default=()=>n},El=(e,t,n)=>{for(const r in t)(n||!Ps(r))&&(e[r]=t[r])},ef=(e,t,n)=>{const r=e.slots=ml();if(e.vnode.shapeFlag&32){const i=t._;i?(El(r,t,n),n&&La(r,"_",i,!0)):$l(t,r)}else t&&wl(e,t)},tf=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=pe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:El(i,t,n):(s=!t.$stable,$l(t,i)),o=t}else t&&(wl(e,t),o={default:1});if(s)for(const a in i)!Ps(a)&&o[a]==null&&delete i[a]},Ze=af;function nf(e){return rf(e)}function rf(e,t){const n=jr();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:v=it,insertStaticContent:R}=e,D=(f,h,m,E=null,$=null,S=null,L=void 0,T=null,A=!!h.dynamicChildren)=>{if(f===h)return;f&&!Xt(f,h)&&(E=we(f),Be(f,$,S,!0),f=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:C,ref:W,shapeFlag:k}=h;switch(C){case Qr:P(f,h,m,E);break;case We:w(f,h,m,E);break;case Or:f==null&&U(h,m,E,L);break;case Re:O(f,h,m,E,$,S,L,T,A);break;default:k&1?J(f,h,m,E,$,S,L,T,A):k&6?V(f,h,m,E,$,S,L,T,A):(k&64||k&128)&&C.process(f,h,m,E,$,S,L,T,A,Tt)}W!=null&&$?Hn(W,f&&f.ref,S,h||f,!h):W==null&&f&&f.ref!=null&&Hn(f.ref,null,S,f,!0)},P=(f,h,m,E)=>{if(f==null)r(h.el=a(h.children),m,E);else{const $=h.el=f.el;h.children!==f.children&&c($,h.children)}},w=(f,h,m,E)=>{f==null?r(h.el=l(h.children||""),m,E):h.el=f.el},U=(f,h,m,E)=>{[f.el,f.anchor]=R(f.children,h,m,E,f.el,f.anchor)},q=({el:f,anchor:h},m,E)=>{let $;for(;f&&f!==h;)$=p(f),r(f,m,E),f=$;r(h,m,E)},B=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),i(f),f=m;i(h)},J=(f,h,m,E,$,S,L,T,A)=>{if(h.type==="svg"?L="svg":h.type==="math"&&(L="mathml"),f==null)be(h,m,E,$,S,L,T,A);else{const C=f.el&&f.el._isVueCE?f.el:null;try{C&&C._beginPatch(),X(f,h,$,S,L,T,A)}finally{C&&C._endPatch()}}},be=(f,h,m,E,$,S,L,T)=>{let A,C;const{props:W,shapeFlag:k,transition:G,dirs:z}=f;if(A=f.el=o(f.type,S,W&&W.is,W),k&8?u(A,f.children):k&16&&Se(f.children,A,null,E,$,wi(f,S),L,T),z&&Bt(f,null,E,"created"),xe(A,f,f.scopeId,L,E),W){for(const fe in W)fe!=="value"&&!kn(fe)&&s(A,fe,null,W[fe],S,E);"value"in W&&s(A,"value",null,W.value,S),(C=W.onVnodeBeforeMount)&&lt(C,E,f)}z&&Bt(f,null,E,"beforeMount");const te=sf($,G);te&&G.beforeEnter(A),r(A,h,m),((C=W&&W.onVnodeMounted)||te||z)&&Ze(()=>{C&&lt(C,E,f),te&&G.enter(A),z&&Bt(f,null,E,"mounted")},$)},xe=(f,h,m,E,$)=>{if(m&&v(f,m),E)for(let S=0;S<E.length;S++)v(f,E[S]);if($){let S=$.subTree;if(h===S||Il(S.type)&&(S.ssContent===h||S.ssFallback===h)){const L=$.vnode;xe(f,L,L.scopeId,L.slotScopeIds,$.parent)}}},Se=(f,h,m,E,$,S,L,T,A=0)=>{for(let C=A;C<f.length;C++){const W=f[C]=T?kt(f[C]):ft(f[C]);D(null,W,h,m,E,$,S,L,T)}},X=(f,h,m,E,$,S,L)=>{const T=h.el=f.el;let{patchFlag:A,dynamicChildren:C,dirs:W}=h;A|=f.patchFlag&16;const k=f.props||pe,G=h.props||pe;let z;if(m&&Gt(m,!1),(z=G.onVnodeBeforeUpdate)&&lt(z,m,h,f),W&&Bt(h,f,m,"beforeUpdate"),m&&Gt(m,!0),(k.innerHTML&&G.innerHTML==null||k.textContent&&G.textContent==null)&&u(T,""),C?x(f.dynamicChildren,C,T,m,E,wi(h,$),S):L||ie(f,h,T,null,m,E,wi(h,$),S,!1),A>0){if(A&16)j(T,k,G,m,$);else if(A&2&&k.class!==G.class&&s(T,"class",null,G.class,$),A&4&&s(T,"style",k.style,G.style,$),A&8){const te=h.dynamicProps;for(let fe=0;fe<te.length;fe++){const oe=te[fe],ke=k[oe],Ne=G[oe];(Ne!==ke||oe==="value")&&s(T,oe,ke,Ne,$,m)}}A&1&&f.children!==h.children&&u(T,h.children)}else!L&&C==null&&j(T,k,G,m,$);((z=G.onVnodeUpdated)||W)&&Ze(()=>{z&&lt(z,m,h,f),W&&Bt(h,f,m,"updated")},E)},x=(f,h,m,E,$,S,L)=>{for(let T=0;T<h.length;T++){const A=f[T],C=h[T],W=A.el&&(A.type===Re||!Xt(A,C)||A.shapeFlag&198)?d(A.el):m;D(A,C,W,null,E,$,S,L,!0)}},j=(f,h,m,E,$)=>{if(h!==m){if(h!==pe)for(const S in h)!kn(S)&&!(S in m)&&s(f,S,h[S],null,$,E);for(const S in m){if(kn(S))continue;const L=m[S],T=h[S];L!==T&&S!=="value"&&s(f,S,T,L,$,E)}"value"in m&&s(f,"value",h.value,m.value,$)}},O=(f,h,m,E,$,S,L,T,A)=>{const C=h.el=f?f.el:a(""),W=h.anchor=f?f.anchor:a("");let{patchFlag:k,dynamicChildren:G,slotScopeIds:z}=h;z&&(T=T?T.concat(z):z),f==null?(r(C,m,E),r(W,m,E),Se(h.children||[],m,W,$,S,L,T,A)):k>0&&k&64&&G&&f.dynamicChildren&&f.dynamicChildren.length===G.length?(x(f.dynamicChildren,G,m,$,S,L,T),(h.key!=null||$&&h===$.subTree)&&Sl(f,h,!0)):ie(f,h,m,W,$,S,L,T,A)},V=(f,h,m,E,$,S,L,T,A)=>{h.slotScopeIds=T,f==null?h.shapeFlag&512?$.ctx.activate(h,m,E,L,A):re(h,m,E,$,S,L,A):ce(f,h,A)},re=(f,h,m,E,$,S,L)=>{const T=f.component=vf(f,E,$);if(Xr(f)&&(T.ctx.renderer=Tt),gf(T,!1,L),T.asyncDep){if($&&$.registerDep(T,ee,L),!f.el){const A=T.subTree=Oe(We);w(null,A,h,m),f.placeholder=A.el}}else ee(T,f,h,m,$,S,L)},ce=(f,h,m)=>{const E=h.component=f.component;if(Xc(f,h,m))if(E.asyncDep&&!E.asyncResolved){se(E,h,m);return}else E.next=h,E.update();else h.el=f.el,E.vnode=h},ee=(f,h,m,E,$,S,L)=>{const T=()=>{if(f.isMounted){let{next:k,bu:G,u:z,parent:te,vnode:fe}=f;{const Pe=Cl(f);if(Pe){k&&(k.el=fe.el,se(f,k,L)),Pe.asyncDep.then(()=>{f.isUnmounted||T()});return}}let oe=k,ke;Gt(f,!1),k?(k.el=fe.el,se(f,k,L)):k=fe,G&&Ir(G),(ke=k.props&&k.props.onVnodeBeforeUpdate)&&lt(ke,te,k,fe),Gt(f,!0);const Ne=$i(f),Ke=f.subTree;f.subTree=Ne,D(Ke,Ne,d(Ke.el),we(Ke),f,$,S),k.el=Ne.el,oe===null&&qc(f,Ne.el),z&&Ze(z,$),(ke=k.props&&k.props.onVnodeUpdated)&&Ze(()=>lt(ke,te,k,fe),$)}else{let k;const{el:G,props:z}=h,{bm:te,m:fe,parent:oe,root:ke,type:Ne}=f,Ke=Un(h);if(Gt(f,!1),te&&Ir(te),!Ke&&(k=z&&z.onVnodeBeforeMount)&&lt(k,oe,h),Gt(f,!0),G&&wn){const Pe=()=>{f.subTree=$i(f),wn(G,f.subTree,f,$,null)};Ke&&Ne.__asyncHydrate?Ne.__asyncHydrate(G,f,Pe):Pe()}else{ke.ce&&ke.ce._def.shadowRoot!==!1&&ke.ce._injectChildStyle(Ne);const Pe=f.subTree=$i(f);D(null,Pe,m,E,f,$,S),h.el=Pe.el}if(fe&&Ze(fe,$),!Ke&&(k=z&&z.onVnodeMounted)){const Pe=h;Ze(()=>lt(k,oe,Pe),$)}(h.shapeFlag&256||oe&&Un(oe.vnode)&&oe.vnode.shapeFlag&256)&&f.a&&Ze(f.a,$),f.isMounted=!0,h=m=E=null}};f.scope.on();const A=f.effect=new Fa(T);f.scope.off();const C=f.update=A.run.bind(A),W=f.job=A.runIfDirty.bind(A);W.i=f,W.id=f.uid,A.scheduler=()=>Ms(W),Gt(f,!0),C()},se=(f,h,m)=>{h.component=f;const E=f.vnode.props;f.vnode=h,f.next=null,Qc(f,h.props,E,m),tf(f,h.children,m),St(),Qs(f),Ct()},ie=(f,h,m,E,$,S,L,T,A=!1)=>{const C=f&&f.children,W=f?f.shapeFlag:0,k=h.children,{patchFlag:G,shapeFlag:z}=h;if(G>0){if(G&128){Ce(C,k,m,E,$,S,L,T,A);return}else if(G&256){ze(C,k,m,E,$,S,L,T,A);return}}z&8?(W&16&&xt(C,$,S),k!==C&&u(m,k)):W&16?z&16?Ce(C,k,m,E,$,S,L,T,A):xt(C,$,S,!0):(W&8&&u(m,""),z&16&&Se(k,m,E,$,S,L,T,A))},ze=(f,h,m,E,$,S,L,T,A)=>{f=f||fn,h=h||fn;const C=f.length,W=h.length,k=Math.min(C,W);let G;for(G=0;G<k;G++){const z=h[G]=A?kt(h[G]):ft(h[G]);D(f[G],z,m,null,$,S,L,T,A)}C>W?xt(f,$,S,!0,!1,k):Se(h,m,E,$,S,L,T,A,k)},Ce=(f,h,m,E,$,S,L,T,A)=>{let C=0;const W=h.length;let k=f.length-1,G=W-1;for(;C<=k&&C<=G;){const z=f[C],te=h[C]=A?kt(h[C]):ft(h[C]);if(Xt(z,te))D(z,te,m,null,$,S,L,T,A);else break;C++}for(;C<=k&&C<=G;){const z=f[k],te=h[G]=A?kt(h[G]):ft(h[G]);if(Xt(z,te))D(z,te,m,null,$,S,L,T,A);else break;k--,G--}if(C>k){if(C<=G){const z=G+1,te=z<W?h[z].el:E;for(;C<=G;)D(null,h[C]=A?kt(h[C]):ft(h[C]),m,te,$,S,L,T,A),C++}}else if(C>G)for(;C<=k;)Be(f[C],$,S,!0),C++;else{const z=C,te=C,fe=new Map;for(C=te;C<=G;C++){const y=h[C]=A?kt(h[C]):ft(h[C]);y.key!=null&&fe.set(y.key,C)}let oe,ke=0;const Ne=G-te+1;let Ke=!1,Pe=0;const Ot=new Array(Ne);for(C=0;C<Ne;C++)Ot[C]=0;for(C=z;C<=k;C++){const y=f[C];if(ke>=Ne){Be(y,$,S,!0);continue}let b;if(y.key!=null)b=fe.get(y.key);else for(oe=te;oe<=G;oe++)if(Ot[oe-te]===0&&Xt(y,h[oe])){b=oe;break}b===void 0?Be(y,$,S,!0):(Ot[b-te]=C+1,b>=Pe?Pe=b:Ke=!0,D(y,h[b],m,null,$,S,L,T,A),ke++)}const g=Ke?of(Ot):fn;for(oe=g.length-1,C=Ne-1;C>=0;C--){const y=te+C,b=h[y],H=h[y+1],F=y+1<W?H.el||Al(H):E;Ot[C]===0?D(null,b,m,F,$,S,L,T,A):Ke&&(oe<0||C!==g[oe]?Fe(b,m,F,2):oe--)}}},Fe=(f,h,m,E,$=null)=>{const{el:S,type:L,transition:T,children:A,shapeFlag:C}=f;if(C&6){Fe(f.component.subTree,h,m,E);return}if(C&128){f.suspense.move(h,m,E);return}if(C&64){L.move(f,h,m,Tt);return}if(L===Re){r(S,h,m);for(let k=0;k<A.length;k++)Fe(A[k],h,m,E);r(f.anchor,h,m);return}if(L===Or){q(f,h,m);return}if(E!==2&&C&1&&T)if(E===0)T.beforeEnter(S),r(S,h,m),Ze(()=>T.enter(S),$);else{const{leave:k,delayLeave:G,afterLeave:z}=T,te=()=>{f.ctx.isUnmounted?i(S):r(S,h,m)},fe=()=>{S._isLeaving&&S[$t](!0),k(S,()=>{te(),z&&z()})};G?G(S,te,fe):fe()}else r(S,h,m)},Be=(f,h,m,E=!1,$=!1)=>{const{type:S,props:L,ref:T,children:A,dynamicChildren:C,shapeFlag:W,patchFlag:k,dirs:G,cacheIndex:z}=f;if(k===-2&&($=!1),T!=null&&(St(),Hn(T,null,m,f,!0),Ct()),z!=null&&(h.renderCache[z]=void 0),W&256){h.ctx.deactivate(f);return}const te=W&1&&G,fe=!Un(f);let oe;if(fe&&(oe=L&&L.onVnodeBeforeUnmount)&&lt(oe,h,f),W&6)di(f.component,m,E);else{if(W&128){f.suspense.unmount(m,E);return}te&&Bt(f,null,h,"beforeUnmount"),W&64?f.type.remove(f,h,m,Tt,E):C&&!C.hasOnce&&(S!==Re||k>0&&k&64)?xt(C,h,m,!1,!0):(S===Re&&k&384||!$&&W&16)&&xt(A,h,m),E&&nr(f)}(fe&&(oe=L&&L.onVnodeUnmounted)||te)&&Ze(()=>{oe&&lt(oe,h,f),te&&Bt(f,null,h,"unmounted")},m)},nr=f=>{const{type:h,el:m,anchor:E,transition:$}=f;if(h===Re){fi(m,E);return}if(h===Or){B(f);return}const S=()=>{i(m),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(f.shapeFlag&1&&$&&!$.persisted){const{leave:L,delayLeave:T}=$,A=()=>L(m,S);T?T(f.el,S,A):A()}else S()},fi=(f,h)=>{let m;for(;f!==h;)m=p(f),i(f),f=m;i(h)},di=(f,h,m)=>{const{bum:E,scope:$,job:S,subTree:L,um:T,m:A,a:C}=f;lo(A),lo(C),E&&Ir(E),$.stop(),S&&(S.flags|=8,Be(L,f,h,m)),T&&Ze(T,h),Ze(()=>{f.isUnmounted=!0},h)},xt=(f,h,m,E=!1,$=!1,S=0)=>{for(let L=S;L<f.length;L++)Be(f[L],h,m,E,$)},we=f=>{if(f.shapeFlag&6)return we(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),m=h&&h[mc];return m?p(m):h};let rn=!1;const rr=(f,h,m)=>{let E;f==null?h._vnode&&(Be(h._vnode,null,null,!0),E=h._vnode.component):D(h._vnode||null,f,h,null,null,null,m),h._vnode=f,rn||(rn=!0,Qs(E),Ya(),rn=!1)},Tt={p:D,um:Be,m:Fe,r:nr,mt:re,mc:Se,pc:ie,pbc:x,n:we,o:e};let $n,wn;return t&&([$n,wn]=t(Tt)),{render:rr,hydrate:$n,createApp:Gc(rr,$n)}}function wi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Gt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function sf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Sl(e,t,n=!1){const r=e.children,i=t.children;if(K(r)&&K(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=kt(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Sl(o,a)),a.type===Qr&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(e.type===Re?1:0)),a.type===We&&!a.el&&(a.el=o.el)}}function of(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function Cl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Cl(t)}function lo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Al(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Al(t.subTree):null}const Il=e=>e.__isSuspense;function af(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):dc(e)}const Re=Symbol.for("v-fgt"),Qr=Symbol.for("v-txt"),We=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),Gn=[];let Ye=null;function I(e=!1){Gn.push(Ye=e?null:[])}function lf(){Gn.pop(),Ye=Gn[Gn.length-1]||null}let Kn=1;function Dr(e,t=!1){Kn+=e,e<0&&Ye&&t&&(Ye.hasOnce=!0)}function xl(e){return e.dynamicChildren=Kn>0?Ye||fn:null,lf(),Kn>0&&Ye&&Ye.push(e),e}function M(e,t,n,r,i,s){return xl(_(e,t,n,r,i,s,!0))}function Ft(e,t,n,r,i){return xl(Oe(e,t,n,r,i,!0))}function Hr(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const Tl=({key:e})=>e??null,Lr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ee(e)||Ue(e)||Q(e)?{i:Qe,r:e,k:t,f:!!n}:e:null);function _(e,t=null,n=null,r=0,i=null,s=e===Re?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Tl(t),ref:t&&Lr(t),scopeId:el,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return a?(Hs(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Ee(n)?8:16),Kn>0&&!o&&Ye&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ye.push(l),l}const Oe=uf;function uf(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Nc)&&(e=We),Hr(e)){const a=Dt(e,t,!0);return n&&Hs(a,n),Kn>0&&!s&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(e)]=a:Ye.push(a)),a.patchFlag=-2,a}if($f(e)&&(e=e.__vccOpts),t){t=cf(t);let{class:a,style:l}=t;a&&!Ee(a)&&(t.class=Jt(a)),ge(l)&&(Rs(l)&&!K(l)&&(l=Le({},l)),t.style=gn(l))}const o=Ee(e)?1:Il(e)?128:rl(e)?64:ge(e)?4:Q(e)?2:0;return _(e,t,n,r,i,o,s,!0)}function cf(e){return e?Rs(e)||yl(e)?Le({},e):e:null}function Dt(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=e,c=t?df(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Tl(c),ref:t&&t.ref?n&&s?K(s)?s.concat(Lr(t)):[s,Lr(t)]:Lr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&zn(u,l.clone(u)),u}function $e(e=" ",t=0){return Oe(Qr,null,e,t)}function ff(e,t){const n=Oe(Or,null,e);return n.staticCount=t,n}function Z(e="",t=!1){return t?(I(),Ft(We,null,e)):Oe(We,null,e)}function ft(e){return e==null||typeof e=="boolean"?Oe(We):K(e)?Oe(Re,null,e.slice()):Hr(e)?kt(e):Oe(Qr,null,String(e))}function kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function Hs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Hs(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!yl(t)?t._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Qe},n=32):(t=String(t),r&64?(n=16,t=[$e(t)]):n=8);e.children=t,e.shapeFlag|=n}function df(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Jt([t.class,r.class]));else if(i==="style")t.style=gn([t.style,r.style]);else if(Br(i)){const s=t[i],o=r[i];o&&s!==o&&!(K(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function lt(e,t,n,r=null){at(e,t,7,[n,r])}const hf=pl();let pf=0;function vf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||hf,s={uid:pf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bl(r,i),emitsOptions:vl(r,i),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:r.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Wc.bind(null,s),e.ce&&e.ce(s),s}let He=null;const Ol=()=>He||Qe;let Ur,is;{const e=jr(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Ur=t("__VUE_INSTANCE_SETTERS__",n=>He=n),is=t("__VUE_SSR_SETTERS__",n=>Xn=n)}const Jn=e=>{const t=He;return Ur(e),e.scope.on(),()=>{e.scope.off(),Ur(t)}},uo=()=>{He&&He.scope.off(),Ur(null)};function Ll(e){return e.vnode.shapeFlag&4}let Xn=!1;function gf(e,t=!1,n=!1){t&&is(t);const{props:r,children:i}=e.vnode,s=Ll(e);Zc(e,r,s,t),ef(e,i,n||t);const o=s?mf(e,t):void 0;return t&&is(!1),o}function mf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Fc);const{setup:r}=n;if(r){St();const i=e.setupContext=r.length>1?_f(e):null,s=Jn(e),o=Qn(r,e,0,[e.props,i]),a=xa(o);if(Ct(),s(),(a||e.sp)&&!Un(e)&&ul(e),a){if(o.then(uo,uo),t)return o.then(l=>{co(e,l,t)}).catch(l=>{Kr(l,e,0)});e.asyncDep=o}else co(e,o,t)}else Nl(e,t)}function co(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ge(t)&&(e.setupState=qa(t)),Nl(e,n)}let fo;function Nl(e,t,n){const r=e.type;if(!e.render){if(!t&&fo&&!r.render){const i=r.template||ks(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Le(Le({isCustomElement:s,delimiters:a},o),l);r.render=fo(i,c)}}e.render=r.render||it}{const i=Jn(e);St();try{kc(e)}finally{Ct(),i()}}}const yf={get(e,t){return De(e,"get",""),e[t]}};function _f(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,yf),slots:e.slots,emit:e.emit,expose:t}}function Yr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(qa(tc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bn)return Bn[n](e)},has(t,n){return n in t||n in Bn}})):e.proxy}function bf(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function $f(e){return Q(e)&&"__vccOpts"in e}const ct=(e,t)=>oc(e,t,Xn);function wf(e,t,n){try{Dr(-1);const r=arguments.length;return r===2?ge(t)&&!K(t)?Hr(t)?Oe(e,null,[t]):Oe(e,t):Oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hr(n)&&(n=[n]),Oe(e,t,n))}finally{Dr(1)}}const Ef="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ss;const ho=typeof window<"u"&&window.trustedTypes;if(ho)try{ss=ho.createPolicy("vue",{createHTML:e=>e})}catch{}const Rl=ss?e=>ss.createHTML(e):e=>e,Sf="http://www.w3.org/2000/svg",Cf="http://www.w3.org/1998/Math/MathML",bt=typeof document<"u"?document:null,po=bt&&bt.createElement("template"),Af={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?bt.createElementNS(Sf,e):t==="mathml"?bt.createElementNS(Cf,e):n?bt.createElement(e,{is:n}):bt.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>bt.createTextNode(e),createComment:e=>bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{po.innerHTML=Rl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=po.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lt="transition",Sn="animation",qn=Symbol("_vtc"),Ml={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},If=Le({},il,Ml),xf=e=>(e.displayName="Transition",e.props=If,e),Ei=xf((e,{slots:t})=>wf(bc,Tf(e),t)),Vt=(e,t=[])=>{K(e)?e.forEach(n=>n(...t)):e&&e(...t)},vo=e=>e?K(e)?e.some(t=>t.length>1):e.length>1:!1;function Tf(e){const t={};for(const O in e)O in Ml||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,R=Of(i),D=R&&R[0],P=R&&R[1],{onBeforeEnter:w,onEnter:U,onEnterCancelled:q,onLeave:B,onLeaveCancelled:J,onBeforeAppear:be=w,onAppear:xe=U,onAppearCancelled:Se=q}=t,X=(O,V,re,ce)=>{O._enterCancelled=ce,Wt(O,V?u:a),Wt(O,V?c:o),re&&re()},x=(O,V)=>{O._isLeaving=!1,Wt(O,d),Wt(O,v),Wt(O,p),V&&V()},j=O=>(V,re)=>{const ce=O?xe:U,ee=()=>X(V,O,re);Vt(ce,[V,ee]),go(()=>{Wt(V,O?l:s),vt(V,O?u:a),vo(ce)||mo(V,r,D,ee)})};return Le(t,{onBeforeEnter(O){Vt(w,[O]),vt(O,s),vt(O,o)},onBeforeAppear(O){Vt(be,[O]),vt(O,l),vt(O,c)},onEnter:j(!1),onAppear:j(!0),onLeave(O,V){O._isLeaving=!0;const re=()=>x(O,V);vt(O,d),O._enterCancelled?(vt(O,p),bo(O)):(bo(O),vt(O,p)),go(()=>{O._isLeaving&&(Wt(O,d),vt(O,v),vo(B)||mo(O,r,P,re))}),Vt(B,[O,re])},onEnterCancelled(O){X(O,!1,void 0,!0),Vt(q,[O])},onAppearCancelled(O){X(O,!0,void 0,!0),Vt(Se,[O])},onLeaveCancelled(O){x(O),Vt(J,[O])}})}function Of(e){if(e==null)return null;if(ge(e))return[Si(e.enter),Si(e.leave)];{const t=Si(e);return[t,t]}}function Si(e){return Iu(e)}function vt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[qn]||(e[qn]=new Set)).add(t)}function Wt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[qn];n&&(n.delete(t),n.size||(e[qn]=void 0))}function go(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Lf=0;function mo(e,t,n,r){const i=e._endId=++Lf,s=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Nf(e,t);if(!o)return r();const c=o+"end";let u=0;const d=()=>{e.removeEventListener(c,p),s()},p=v=>{v.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),e.addEventListener(c,p)}function Nf(e,t){const n=window.getComputedStyle(e),r=R=>(n[R]||"").split(", "),i=r(`${Lt}Delay`),s=r(`${Lt}Duration`),o=yo(i,s),a=r(`${Sn}Delay`),l=r(`${Sn}Duration`),c=yo(a,l);let u=null,d=0,p=0;t===Lt?o>0&&(u=Lt,d=o,p=s.length):t===Sn?c>0&&(u=Sn,d=c,p=l.length):(d=Math.max(o,c),u=d>0?o>c?Lt:Sn:null,p=u?u===Lt?s.length:l.length:0);const v=u===Lt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Lt}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:v}}function yo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>_o(n)+_o(e[r])))}function _o(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function bo(e){return(e?e.ownerDocument:document).body.offsetHeight}function Rf(e,t,n){const r=e[qn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const $o=Symbol("_vod"),Mf=Symbol("_vsh"),Ff=Symbol(""),kf=/(?:^|;)\s*display\s*:/;function Pf(e,t,n){const r=e.style,i=Ee(n);let s=!1;if(n&&!i){if(t)if(Ee(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Nr(r,a,"")}else for(const o in t)n[o]==null&&Nr(r,o,"");for(const o in n)o==="display"&&(s=!0),Nr(r,o,n[o])}else if(i){if(t!==n){const o=r[Ff];o&&(n+=";"+o),r.cssText=n,s=kf.test(n)}}else t&&e.removeAttribute("style");$o in e&&(e[$o]=s?r.display:"",e[Mf]&&(r.display="none"))}const wo=/\s*!important$/;function Nr(e,t,n){if(K(n))n.forEach(r=>Nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Df(e,t);wo.test(n)?e.setProperty(Ut(r),n.replace(wo,""),"important"):e[r]=n}}const Eo=["Webkit","Moz","ms"],Ci={};function Df(e,t){const n=Ci[t];if(n)return n;let r=nt(t);if(r!=="filter"&&r in e)return Ci[t]=r;r=Wr(r);for(let i=0;i<Eo.length;i++){const s=Eo[i]+r;if(s in e)return Ci[t]=s}return t}const So="http://www.w3.org/1999/xlink";function Co(e,t,n,r,i,s=Ru(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(So,t.slice(6,t.length)):e.setAttributeNS(So,t,n):n==null||s&&!Na(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ht(n)?String(n):n)}function Ao(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Rl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Na(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function un(e,t,n,r){e.addEventListener(t,n,r)}function Hf(e,t,n,r){e.removeEventListener(t,n,r)}const Io=Symbol("_vei");function Uf(e,t,n,r,i=null){const s=e[Io]||(e[Io]={}),o=s[t];if(r&&o)o.value=r;else{const[a,l]=Bf(t);if(r){const c=s[t]=Wf(r,i);un(e,a,c,l)}else o&&(Hf(e,a,o,l),s[t]=void 0)}}const xo=/(?:Once|Passive|Capture)$/;function Bf(e){let t;if(xo.test(e)){t={};let r;for(;r=e.match(xo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ut(e.slice(2)),t]}let Ai=0;const Gf=Promise.resolve(),Vf=()=>Ai||(Gf.then(()=>Ai=0),Ai=Date.now());function Wf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;at(jf(r,n.value),t,5,[r])};return n.value=e,n.attached=Vf(),n}function jf(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const To=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zf=(e,t,n,r,i,s)=>{const o=i==="svg";t==="class"?Rf(e,r,o):t==="style"?Pf(e,n,r):Br(t)?Es(t)||Uf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Kf(e,t,r,o))?(Ao(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Co(e,t,r,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ee(r))?Ao(e,nt(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Co(e,t,r,o))};function Kf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&To(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return To(t)&&Ee(n)?!1:t in e}const Oo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>Ir(t,n):t};function Xf(e){e.target.composing=!0}function Lo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ii=Symbol("_assign");function No(e,t,n){return t&&(e=e.trim()),n&&(e=As(e)),e}const qf={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Ii]=Oo(i);const s=r||i.props&&i.props.type==="number";un(e,t?"change":"input",o=>{o.target.composing||e[Ii](No(e.value,n,s))}),(n||s)&&un(e,"change",()=>{e.value=No(e.value,n,s)}),t||(un(e,"compositionstart",Xf),un(e,"compositionend",Lo),un(e,"change",Lo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(e[Ii]=Oo(o),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?As(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||i&&e.value.trim()===l)||(e.value=l))}},Zf=["ctrl","shift","alt","meta"],Qf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Zf.some(n=>e[`${n}Key`]&&!t.includes(n))},de=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<t.length;o++){const a=Qf[t[o]];if(a&&a(i,t))return}return e(i,...s)})},Yf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Jf=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=Ut(i.key);if(t.some(o=>o===s||Yf[o]===s))return e(i)})},ed=Le({patchProp:zf},Af);let Ro;function td(){return Ro||(Ro=nf(ed))}const nd=(...e)=>{const t=td().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=id(r);if(!i)return;const s=t._component;!Q(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,rd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function rd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function id(e){return Ee(e)?document.querySelector(e):e}const cn=[],et="@@clickoutsideContext";let Jr,sd=0;document.addEventListener("mousedown",e=>Jr=e);document.addEventListener("mouseup",e=>{cn.forEach(t=>t[et].documentHandler(e,Jr))});document.addEventListener("touchstart",e=>{Jr=e});document.addEventListener("touchend",e=>{cn.forEach(t=>t[et].documentHandler(e,Jr))});function Mo(e,t,n){return function(r={},i={}){if(!n||!n.context||!r.target||!i.target||e.contains(r.target)||e.contains(i.target)||e===r.target||n.context.popperElm&&(n.context.popperElm.contains(r.target)||n.context.popperElm.contains(i.target)))return;const s=e[et].methodName;t.expression&&s&&n.context[s]?n.context[s]():e[et].bindingFn&&e[et].bindingFn()}}const od={bind(e,t,n){cn.push(e);const r=sd++;e[et]={id:r,documentHandler:Mo(e,t,n),methodName:t.expression,bindingFn:t.value}},update(e,t,n){e[et].documentHandler=Mo(e,t,n),e[et].methodName=t.expression,e[et].bindingFn=t.value},unbind(e){let t=cn.length;for(let n=0;n<t;n++)if(cn[n][et].id===e[et].id){cn.splice(n,1);break}delete e[et]}};let xi,Cn,os="",Fl="";async function ad(e,t,n){Cn||(Cn=await Ki(()=>import("./marked.esm-e95f72c8.js"),[],import.meta.url),ld(Cn)),xi||(xi=(await Ki(()=>import("./purify.es-ce17b1ad.js"),[],import.meta.url)).default),os="https://github.com/"+t,Fl="https://raw.githubusercontent.com/"+t+"/"+n,Cn.setOptions({baseUrl:`https://github.com/${t}/blob/${n}/`});let r=Cn.parse(e);return xi.sanitize(r)}function ld(e){const t=new e.Renderer;t.link=function(r,i,s){return r.startsWith("#")&&(r=os+r),r.startsWith("./")&&(r=os+r.slice(2)),e.Renderer.prototype.link.call(this,r,i,s)},t.image=function(r,i,s){return e.Renderer.prototype.image.call(this,n(r),i,s)},t.html=function(r){const i=/<img.*?src="(.*?)".*?>/g;return r=r.replace(i,(s,o)=>(o=n(o),s.replace(/src="(.*?)"/,`src="${o}"`))),e.Renderer.prototype.html.call(this,r)};function n(r){return!(r.startsWith("http")||r.startsWith("data:")||r.startsWith("blob:")||r.startsWith("ftp:"))&&(r=Fl+"/"+r),r}e.use({renderer:t})}const ud=["README.md","README.markdown","README.rst","README.txt","README","README.mkd","readme.md"],cd="https://raw.githubusercontent.com/",Zn={Accept:"application/vnd.github.v3+json"};let Fn,Ti=new Map;document.cookie.includes("github_token")&&(Zn.Authorization="Bearer "+document.cookie.split("github_token=")[1].split(";")[0]);function fd(e){Zn.Authorization="Bearer "+e,document.cookie="github_token="+e,Te.fire("auth-changed")}async function as(){if(Fn)return Fn;if(!Zn.Authorization)return;const e=await fetch("https://api.github.com/user",{headers:Zn});if(e.ok)return Fn=await e.json(),Fn}function Fo(){return Fn}async function kl(e){var s,o;if(Ti.has(e))return Ti.get(e);const t=await fetch(`https://api.github.com/repos/${e}`,{headers:Zn});if(!t.ok)if(t.headers.get("x-ratelimit-remaining")==="0"){let a=new Date(t.headers.get("x-ratelimit-reset")*1e3);return{state:"RATE_LIMIT_EXCEEDED",name:e,retryIn:a.toLocaleDateString()+" "+a.toLocaleTimeString()}}else{if(t.status===404)return{state:"NOT_FOUND",name:e};if(t.status===451)return{state:"ERROR",error:"Repository is unavailable due to legal reasons (http status code 451)."};{const a=["HTTP error"];try{const l=await t.json();l!=null&&l.message&&a.push("Message: "+l.message)}catch{}return a.push("Status: "+t.status),{state:"ERROR",error:a.join(". ")}}}const n=await t.json(),r=t.headers.get("x-ratelimit-remaining"),i={state:"LOADED",name:n.name,description:n.description,language:n.language,stars:ko(n.stargazers_count),forks:ko(n.forks_count),watchers:n.watchers_count,default_branch:n.default_branch,topics:n.topics,license:((s=n.license)==null?void 0:s.spdx_id)||((o=n.license)==null?void 0:o.key),updated_at:new Date(n.updated_at).toLocaleDateString(),remainingRequests:r};return Ti.set(e,i),i}async function dd(e,t){t||(t=["master","main"]),Array.isArray(t)||(t=[t]);for(const n of t)for(const r of ud){const i=await fetch(`${cd}${e}/${n}/${r}`);if(i.ok){let s=await i.text();return{state:"LOADED",content:await ad(s,e,n)}}}}function ko(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const dt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},hd={directives:{ClickOutside:od},props:{placeholder:{default:"Type here"},showClearButton:{default:!1},query:{default:""},multiInputResetToken:{default:0},delay:{default:80}},mounted(){this.updateCurrentUser(),Te.on("auth-changed",this.updateCurrentUser)},beforeUnmount(){Te.off("auth-changed",this.updateCurrentUser)},data(){return{currentSelected:-1,showSuggestions:!1,showLoading:!1,showMultiInput:!1,loadingError:null,suggestions:[],currentQuery:this.query,multiInputText:"",currentUser:null}},computed:{searchInputStyle(){return{paddingRight:this.currentQuery||this.showClearButton?"96px":"48px"}}},watch:{query(e){this.currentQuery=e},multiInputResetToken(){this.multiInputText=""}},methods:{updateCurrentUser(){as().then(e=>{this.currentUser=e})},refresh(){this.showSuggestions&&this.getSuggestionsInternal()},menuClicked(){this.$emit("menuClicked")},hideSuggestions(){this.showSuggestions=!1,this.showLoading=!1,this.showMultiInput=!1,this.pendingKeyToShow=!0},showIfNeeded(e){this.pendingKeyToShow||(this.showSuggestions=e)},focus(){this.$refs.input.focus()},pickSuggestion(e){this.currentQuery=e.text,this.hideSuggestions(),this.$emit("selected",e)},clearSearch(){let e={shouldProceed:!0};this.$emit("beforeClear",e),e.shouldProceed&&(this.currentQuery="",this.getSuggestionsInternal(),this.$emit("cleared"))},toggleMultiInput(){const e=!this.showMultiInput;this.showSuggestions=!1,this.showLoading=!1,this.showMultiInput=e,e&&this.$nextTick(()=>{var t;(t=this.$refs.multiInput)==null||t.focus()})},closeMultiInput(){this.showMultiInput=!1},applyMultiInput(){this.$emit("multiSelected",this.multiInputText),this.closeMultiInput()},downloadMultiInputEnrichment(){this.$emit("multiDownloadEnrichment",this.multiInputText)},clearMultiInput(){this.multiInputText="",this.$emit("multiCleared"),this.$nextTick(()=>{var e;(e=this.$refs.multiInput)==null||e.focus()})},handleInput(e){this.currentQuery=e.target.value,this.$emit("inputChanged"),this.getSuggestionsInternal()},getSuggestionsInternal(){var e=this;if(e.previous&&(window.clearTimeout(e.previous),e.previous=null),!e.currentQuery){this.showSuggestions=!1;return}e.previous=window.setTimeout(function(){var t=window.fuzzySearcher.find(e.currentQuery.toLowerCase());if(Array.isArray(t))e.suggestions=t.map(Po),e.currentSelected=t.length>0?0:-1,t.length>0&&(e.suggestions[0].selected=!0),e.showIfNeeded(t&&t.length>0);else if(t)e.loadingError=null,e.showLoading=!0,t.then(function(n){n!==void 0&&(e.showLoading=!1,n=n||[],e.suggestions=n.map(Po),e.currentSelected=n.length>0?0:-1,n.length>0&&(e.suggestions[0].selected=!0),e.showIfNeeded(n&&n.length>0))},function(n){e.loadingError=n});else throw new Error("Could not parse suggestions response")},e.delay)},cycleTheList(e){var t=this.suggestions,n=this.currentSelected;this.pendingKeyToShow=!1;let r;if(e.which===38)r=-1;else if(e.which===40)r=1;else if(e.which===13){t[n]?this.pickSuggestion(t[n]):this.pickSuggestion({text:this.currentQuery}),e.preventDefault();return}else e.which===27&&this.hideSuggestions();!r||t.length===0||(e.preventDefault(),n>=0&&(this.suggestions[n].selected=!1),n+=r,n<0&&(n=t.length-1),n>=t.length&&(n=0),this.suggestions[n].selected=!0,this.currentSelected=n)}}};function Po(e){return{selected:!1,text:e.text,html:e.html,lon:e.lon,lat:e.lat}}const pd={class:"ak-typeahead"},vd=["src"],gd={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-info"},md=["value","placeholder"],yd={key:1,class:"suggestions"},_d=["onClick","innerHTML"],bd={key:2,class:"suggestions"},$d={class:"searching"},wd={key:0},Ed={key:1,class:"loading-error"},Sd={key:3,class:"multi-input-popover"},Cd={class:"multi-input-actions"};function Ad(e,t,n,r,i,s){const o=Rc("click-outside");return Ys((I(),M("div",pd,[_("a",{href:"#",class:"menu-opener",onClick:t[0]||(t[0]=de((...a)=>s.menuClicked&&s.menuClicked(...a),["prevent"]))},[i.currentUser?(I(),M("img",{key:0,src:i.currentUser.avatar_url,class:"avatar"},null,8,vd)):(I(),M("svg",gd,[...t[11]||(t[11]=[_("circle",{cx:"12",cy:"12",r:"10"},null,-1),_("line",{x1:"12",y1:"16",x2:"12",y2:"12"},null,-1),_("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"},null,-1)])]))]),_("input",{ref:"input",autofocus:"",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",value:i.currentQuery,placeholder:n.placeholder,style:gn(s.searchInputStyle),onInput:t[1]||(t[1]=(...a)=>s.handleInput&&s.handleInput(...a)),onKeydown:t[2]||(t[2]=(...a)=>s.cycleTheList&&s.cycleTheList(...a))},null,44,md),_("a",{href:"#",class:Jt(["multi-input-toggle",{"with-clear":i.currentQuery||n.showClearButton}]),onClick:t[3]||(t[3]=de((...a)=>s.toggleMultiInput&&s.toggleMultiInput(...a),["prevent"])),title:"Bulk select genes","aria-label":"Bulk select genes"}," ☰ ",2),i.currentQuery||n.showClearButton?(I(),M("a",{key:0,type:"submit",class:"search-submit",href:"#",onClick:t[4]||(t[4]=de((...a)=>s.clearSearch&&s.clearSearch(...a),["prevent"]))},[...t[12]||(t[12]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle"},[_("circle",{cx:"12",cy:"12",r:"10"}),_("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),_("line",{x1:"9",y1:"9",x2:"15",y2:"15"})],-1)])])):Z("",!0),i.showSuggestions?(I(),M("ul",yd,[(I(!0),M(Re,null,en(i.suggestions,(a,l)=>(I(),M("li",{key:l},[_("a",{onClick:de(c=>s.pickSuggestion(a),["prevent"]),class:Jt(["suggestion",{selected:a.selected}]),href:"#",innerHTML:a.html},null,10,_d)]))),128))])):Z("",!0),i.showLoading?(I(),M("ul",bd,[_("li",$d,[i.loadingError?Z("",!0):(I(),M("span",wd,[t[13]||(t[13]=$e("Downloading search index for letter ",-1)),_("b",null,Y(i.currentQuery[0]),1),t[14]||(t[14]=$e("...",-1))])),i.loadingError?(I(),M("div",Ed,[t[15]||(t[15]=_("div",null,"Failed to get project completions:",-1)),_("pre",null,Y(i.loadingError),1)])):Z("",!0)])])):Z("",!0),i.showMultiInput?(I(),M("div",Sd,[t[16]||(t[16]=_("div",{class:"multi-input-title"},"Paste genes/proteins",-1)),Ys(_("textarea",{ref:"multiInput",class:"multi-input-textarea","onUpdate:modelValue":t[5]||(t[5]=a=>i.multiInputText=a),placeholder:"Separate names by spaces, commas, semicolons, or line breaks.",onKeydown:t[6]||(t[6]=Jf(de((...a)=>s.closeMultiInput&&s.closeMultiInput(...a),["prevent"]),["esc"]))},null,544),[[qf,i.multiInputText]]),_("div",Cd,[_("a",{href:"#",class:"multi-input-action",onClick:t[7]||(t[7]=de((...a)=>s.applyMultiInput&&s.applyMultiInput(...a),["prevent"]))},"Mark on map"),_("a",{href:"#",class:"multi-input-action",onClick:t[8]||(t[8]=de((...a)=>s.downloadMultiInputEnrichment&&s.downloadMultiInputEnrichment(...a),["prevent"]))},"Enrichment CSV"),_("a",{href:"#",class:"multi-input-action",onClick:t[9]||(t[9]=de((...a)=>s.clearMultiInput&&s.clearMultiInput(...a),["prevent"]))},"Clear"),_("a",{href:"#",class:"multi-input-action",onClick:t[10]||(t[10]=de((...a)=>s.closeMultiInput&&s.closeMultiInput(...a),["prevent"]))},"Cancel")])])):Z("",!0)])),[[o,s.hideSuggestions]])}const Id=dt(hd,[["render",Ad]]);const xd={class:"repo-viewer"},Td=["href"],Od={key:0},Ld={class:"repo-description"},Nd={class:"byline"},Rd={class:"language"},Md={class:"stars"},Fd={class:"forks"},kd={key:0,class:"tags"},Pd=["href"],Dd={class:"actions row"},Hd={key:1,class:"loading"},Ud={key:2,class:"not-found"},Bd={key:3,class:"not-found"},Gd={key:4,class:"sign-in-container"},Vd=["href"],Wd={key:0},jd={key:5,class:"rate-limit"},zd={key:6,class:"readme-content"},Kd=["innerHTML"],Xd={__name:"GithubRepository",props:{name:{type:String,required:!0}},emits:["listConnections"],setup(e,{emit:t}){const n=e,r=t,i=ct(()=>"https://github.com/"+n.name);let s=ae(!1);as().then(P=>{s.value=!P});let o=mn({state:"LOADING",name:"",description:"",language:"",stars:0,forks:0,watchers:0,branch:"",topics:[],license:"",updated_at:"",remainingRequests:0});const a=mn({state:"UNAVAILABLE",content:""});let l=null,c=null;pn(()=>n.name,(P,w,U)=>{P!==w&&(l=d(),U(()=>l==null?void 0:l.cancel()))}),pn(()=>o.name,(P,w,U)=>{P!==w&&(c=u(),U(()=>c==null?void 0:c.cancel()))});function u(){a.state="LOADING",c==null||c.cancel();let P=dd(n.name,o.default_branch),w=!1;P.cancel=()=>{w=!0},P.then(U=>{w||Object.assign(a,U)}).catch(U=>{console.error(U)}),c=P}function d(){l==null||l.cancel(),o.state="LOADING",a.state="UNAVAILABLE";let P=kl(n.name),w=!1;P.cancel=()=>{w=!0},P.then(U=>{w||Object.assign(o,U)}).catch(U=>{o.state="ERROR",console.error(U),o.name=n.name}),l=P}d();function p(){let P=window.location.hostname!=="leonfrench.github.io",U=`https://github.com/login/oauth/authorize?client_id=${P?"244bf05034e7cf9158cc":"5f5bbe0c2623f5a7e738"}`;if(P){const q=`http://localhost:${window.location.port}/oauth.html`;U+=`&redirect_uri=${encodeURIComponent(q)}`}return U}function v(P){P.preventDefault();const w="width=800,height=600,resizable=yes,scrollbars=yes,status=yes";window.open(p(),"GitHub OAuth",w)}function R(P){if(P.origin!==window.location.origin)return;const w=P.data;w.source==="gh_auth"&&w.access_token&&(console.log("Received data:",w),fd(w.access_token),as().then(U=>{s.value=!U}))}window.addEventListener("message",R),Yn(()=>{window.removeEventListener("message",R)});function D(){r("listConnections")}return(P,w)=>{var U;return I(),M("div",xd,[_("div",null,[_("h2",null,[_("a",{href:i.value,target:"_blank"},Y(e.name),9,Td)]),Ie(o).state==="LOADED"?(I(),M("div",Od,[_("div",Ld,Y(Ie(o).description),1),_("div",Nd,[_("span",Rd,Y(Ie(o).language),1),_("span",Md,[w[1]||(w[1]=_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-star",viewBox:"0 0 16 16"},[_("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})],-1)),$e(" "+Y(Ie(o).stars),1)]),_("span",Fd,[w[2]||(w[2]=_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-diagram-2",viewBox:"0 0 16 16"},[_("path",{"fill-rule":"evenodd",d:"M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"})],-1)),$e(" "+Y(Ie(o).forks),1)])]),(U=Ie(o).topics)!=null&&U.length?(I(),M("div",kd,[(I(!0),M(Re,null,en(Ie(o).topics,q=>(I(),M("a",{key:q,class:"tag",href:"https://github.com/topics/"+q,target:"_blank"},Y(q),9,Pd))),128))])):Z("",!0)])):Z("",!0),_("div",Dd,[_("a",{href:"#",onClick:w[0]||(w[0]=de(q=>D(),["prevent"]))},"List connections")]),Ie(o).state==="LOADING"?(I(),M("div",Hd," Loading description... ")):Z("",!0),Ie(o).state==="NOT_FOUND"?(I(),M("div",Ud," Repository not found. ")):Z("",!0),Ie(o).state==="ERROR"?(I(),M("div",Bd,Y(Ie(o).error),1)):Z("",!0),Ie(s)&&Ie(o).state!=="LOADING"?(I(),M("div",Gd,[_("a",{href:p(),onClick:v,class:"sign-in"},"Sign in with Github",8,Vd),w[4]||(w[4]=$e(" to get higher rate limits and more information about this repository. ",-1)),Ie(o)&&Ie(o).remainingRequests!==void 0?(I(),M("span",Wd,[w[3]||(w[3]=$e(" Remaining requests: ",-1)),_("code",null,Y(Ie(o).remainingRequests),1)])):Z("",!0)])):Z("",!0),Ie(o).state==="RATE_LIMIT_EXCEEDED"?(I(),M("div",jd,[w[5]||(w[5]=_("p",null,"Could not fetch repository information. Rate limit exceeded.",-1)),_("p",null," Please try again at "+Y(Ie(o).retryIn)+". ",1)])):Z("",!0),a.state==="LOADED"?(I(),M("div",zd,[_("div",{innerHTML:a.content},null,8,Kd)])):Z("",!0)])])}}},qd=dt(Xd,[["__scopeId","data-v-74bd52fe"]]);const Zd={class:"repo-viewer"},Qd={key:0,class:"gene-full-name"},Yd={class:"cluster-info"},Jd={class:"cluster-line"},e0={class:"cluster-enriched-go"},t0={class:"actions row"},n0={key:1,class:"loading"},r0={key:2,class:"not-found"},i0={key:3,class:"not-found"},s0={key:4,class:"summary"},o0={class:"summary-title"},a0={class:"summary-text"},l0=["href"],u0={__name:"GeneRepository",props:{name:{type:String,required:!0},clusterId:{type:[String,Number],default:null},clusterName:{type:String,default:""},clusterEnrichedGo:{type:String,default:""},metadata:{type:Object,default:null},loading:{type:Boolean,default:!1},error:{type:String,default:""}},emits:["listConnections"],setup(e,{emit:t}){const n=e,r=t,i=ct(()=>n.metadata?n.metadata[n.name]:null),s=ct(()=>"UniProtKB/Swiss-Prot Summary"),o=ct(()=>{if(!i.value)return"";const p=i.value.description;return p||"No summary available."}),a=ct(()=>{var v,R;const p=((v=i.value)==null?void 0:v.uniprot)||((R=i.value)==null?void 0:R.uniprot_entry);return p?`https://www.uniprot.org/uniprotkb/${p}/entry`:""}),l=ct(()=>n.clusterName||"Unknown cluster"),c=ct(()=>n.clusterId===null||n.clusterId===void 0?"Unknown":n.clusterId),u=ct(()=>n.clusterEnrichedGo||"Unknown");function d(){r("listConnections")}return(p,v)=>{var R;return I(),M("div",Zd,[_("div",null,[_("h2",null,Y(e.name),1),(R=i.value)!=null&&R.name?(I(),M("div",Qd,Y(i.value.name),1)):Z("",!0),_("div",Yd,[_("div",Jd," Cluster: "+Y(l.value)+" (ID: "+Y(c.value)+") ",1),_("div",e0,"Enriched GO: "+Y(u.value),1),_("div",t0,[_("a",{href:"#",class:"action-link",onClick:v[0]||(v[0]=de(D=>d(),["prevent"]))},"List connections")])]),e.loading?(I(),M("div",n0," Loading gene metadata... ")):e.error?(I(),M("div",r0,Y(e.error),1)):i.value?(I(),M("div",s0,[_("div",o0,Y(s.value),1),_("div",a0,Y(o.value),1),a.value?(I(),M("a",{key:0,class:"summary-link",href:a.value,target:"_blank",rel:"noopener"}," View on UniProt ",8,l0)):Z("",!0)])):(I(),M("div",i0," No metadata found for this gene. "))])])}}},c0=dt(u0,[["__scopeId","data-v-f881a1eb"]]),f0={},d0={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"24",height:"24",fill:"white",class:"loader"};function h0(e,t){return I(),M("svg",d0,[...t[0]||(t[0]=[_("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"},null,-1),_("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"},[_("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"0.8s",repeatCount:"indefinite"})],-1)])])}const p0=dt(f0,[["render",h0]]);const v0={class:"header"},g0={key:1,class:"byline"},m0={class:"language"},y0={class:"stars"},_0={class:"forks"},b0={key:0,class:"info"},$0={key:1,class:"error"},w0={__name:"SmallPreview",props:{name:{type:String,required:!0}},emits:["show-full-preview"],setup(e,{emit:t}){const n=e,r=t,i=mn({state:"LOADING",name:"",description:"",language:"",stars:0,forks:0,watchers:0,branch:"",topics:[],license:"",updated_at:"",remainingRequests:0}),s=ae(null);let o=null;pn(()=>n.name,(c,u,d)=>{c!==u&&(o=a(),d(()=>o==null?void 0:o.cancel()))});function a(){o==null||o.cancel(),i.state="LOADING";let c=kl(n.name),u=!1;c.cancel=()=>{u=!0},s.value=null,c.then(d=>{if(!u){if((d==null?void 0:d.state)==="RATE_LIMIT_EXCEEDED"){i.state="ERROR",s.value="Rate limit exceeded. Please sign in to increase your rate limit.";return}else if((d==null?void 0:d.state)==="NOT_FOUND"){i.state="ERROR",s.value="Repository not found.";return}else if((d==null?void 0:d.state)==="ERROR"){i.state="ERROR",s.value=d.error;return}Object.assign(i,d),c.state="LOADED"}}).catch(d=>{u||(console.error(d),c.state="ERROR",s.value=d)}),o=c}function l(){r("show-full-preview",n.name)}return a(),(c,u)=>(I(),M("a",{href:"#",onClick:de(l,["prevent"]),class:"small-preview-container"},[_("div",v0,[_("span",null,Y(n.name),1),i.state==="LOADING"?(I(),Ft(p0,{key:0})):Z("",!0),i.state==="LOADED"?(I(),M("div",g0,[_("span",m0,Y(i.language),1),_("span",y0,[u[0]||(u[0]=_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-star",viewBox:"0 0 16 16"},[_("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})],-1)),$e(" "+Y(i.stars),1)]),_("span",_0,[u[1]||(u[1]=_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-diagram-2",viewBox:"0 0 16 16"},[_("path",{"fill-rule":"evenodd",d:"M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"})],-1)),$e(" "+Y(i.forks),1)])])):Z("",!0)]),i.state==="LOADED"?(I(),M("div",b0,Y(i.description),1)):Z("",!0),i.state==="ERROR"?(I(),M("div",$0,Y(s.value),1)):Z("",!0)]))}},E0=dt(w0,[["__scopeId","data-v-2696d127"]]);const S0={class:"row"},C0={__name:"About",emits:["close"],setup(e,{emit:t}){const n=ae(Fo()),r=t;function i(){r("close")}function s(){n.value=Fo()}return Fs(()=>{Te.on("auth-changed",s)}),Yn(()=>{Te.off("auth-changed",s)}),(o,a)=>(I(),M("div",null,[_("div",S0,[a[1]||(a[1]=_("h2",null,"Protein Neighborhoods",-1)),_("a",{href:"#",onClick:de(i,["prevent"]),class:"close-btn"},[...a[0]||(a[0]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle"},[_("circle",{cx:"12",cy:"12",r:"10"}),_("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),_("line",{x1:"9",y1:"9",x2:"15",y2:"15"})],-1)])])]),a[2]||(a[2]=ff('<div class="container" data-v-4efff41a><p data-v-4efff41a> The map contains <b data-v-4efff41a>17,890</b> proteins organized into <b data-v-4efff41a>458</b> neighborhood clusters. </p><p data-v-4efff41a> This data-driven map is built by combining embeddings from <a href="https://pubmed.ncbi.nlm.nih.gov/34232869/" target="_blank" rel="noopener noreferrer" data-v-4efff41a>ProtT5 by Elnaggar et al.</a>, <a href="https://www.nature.com/articles/s41592-024-02201-0" target="_blank" rel="noopener noreferrer" data-v-4efff41a>scGPT by Cui et al.</a>, and <a href="https://philechka.com/science/orthrus" target="_blank" rel="noopener noreferrer" data-v-4efff41a>Orthrus by Fradkin et al.</a> Together, these models have seen roughly 2 billion protein sequences, gene expression profiles from ~30 million cells, and compared RNA transcripts spanning hundreds of species. The 100 shared dimensions identified by Canonical Correlation Analysis (CCA) were reduced to two UMAP coordinates; proteins were then clustered into regions in this 2D space, and the resulting clusters were named with ChatGPT 5.2. </p><p data-v-4efff41a> Use the <b data-v-4efff41a>☰</b> button in the search bar to open multi-gene input and mark a batch of genes/proteins at once. You can test for multi-gene patterns in the same 100D space using a separate probe tool: <a href="https://cca-100-embed-tool.streamlit.app/" target="_blank" rel="noopener noreferrer" class="normal" data-v-4efff41a>CCA 100D embed probe</a>. </p><p data-v-4efff41a> The source code is on <a href="https://github.com/leonfrench/protein-neighborhoods" class="normal" data-v-4efff41a>Github</a>. Inspired by, and originally forked from, <a href="https://github.com/anvaka/map-of-github" target="_blank" class="normal" data-v-4efff41a>Map of GitHub</a> by @anvaka. </p></div>',1))]))}},A0=dt(C0,[["__scopeId","data-v-4efff41a"]]);const I0={__name:"UnsavedChanges",emits:["close"],setup(e,{emit:t}){const n=t,r=window.mapOwner.getPlacesGeoJSON(),i=ae(!1);function s(){n("close")}function o(){navigator.clipboard.writeText(JSON.stringify(r,null,2)),i.value=!0,setTimeout(()=>{i.value=!1},1e3)}return(a,l)=>(I(),M("div",null,[l[7]||(l[7]=_("h3",null,"Local changes",-1)),_("a",{href:"#",onClick:l[0]||(l[0]=de(c=>s(),["prevent"])),class:"close-btn"},[...l[2]||(l[2]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle"},[_("circle",{cx:"12",cy:"12",r:"10"}),_("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),_("line",{x1:"9",y1:"9",x2:"15",y2:"15"})],-1)])]),l[8]||(l[8]=_("p",null," You have added labels for the countries, but they are not available to everyone yet. Please send a pull request to make them available to everyone 🙏. ",-1)),_("p",null,[l[3]||(l[3]=$e(" Here is the content of the `places.geojson` with your changes. ",-1)),_("a",{href:"#",class:Jt(["critical",{"copy-notification":i.value}]),onClick:l[1]||(l[1]=de(c=>o(),["prevent"]))},Y(i.value?"Copied!":"Copy"),3),l[4]||(l[4]=$e(" them to clipboard and paste them in ",-1)),l[5]||(l[5]=_("a",{href:"https://github.com/anvaka/map-of-github-data/blob/main/v1/places.geojson",target:"_blank",class:"normal"},"the remote file",-1)),l[6]||(l[6]=$e(". ",-1))]),_("pre",null,""+Y(Ie(r))+`
`,1)]))}},x0=dt(I0,[["__scopeId","data-v-e1e3be47"]]);const T0={class:"tree-view"},O0={key:0},L0={class:"node-item"},N0={key:0,title:"External country"},R0={class:"node-item"},M0=["onClick"],F0={key:1,class:"toggle-placeholder"},k0=["onClick"],P0={key:2,title:"External country"},D0={key:0},H0={class:"node-item"},U0=["onClick"],B0={key:0,title:"External country"},G0={__name:"TreeView",props:{tree:{type:Object,required:!0}},emits:["nodeSelected"],setup(e,{emit:t}){const n=t;function r(l,c=""){return`${c}_${l}`}const i=ae(new Set);function s(l,c){n("nodeSelected",l,c)}function o(l,c=""){const u=r(l,c);i.value.has(u)?i.value.delete(u):i.value.add(u)}function a(l,c=""){const u=r(l,c);return i.value.has(u)}return(l,c)=>(I(),M("div",T0,[_("ul",null,[!e.tree.children||e.tree.children.length===0?(I(),M("li",O0,[_("div",L0,[_("a",{href:"#",onClick:c[0]||(c[0]=de(u=>s(e.tree.node,u),["prevent"]))},Y(e.tree.node.name),1),e.tree.node.isExternal?(I(),M("span",N0,"E")):Z("",!0)])])):(I(!0),M(Re,{key:1},en(e.tree.children,u=>(I(),M("li",{key:u.node.id},[_("div",R0,[u.children&&u.children.length?(I(),M("span",{key:0,class:"toggle",onClick:d=>o(u.node.id,e.tree.node.id)},Y(a(u.node.id,e.tree.node.id)?"▼":"▶"),9,M0)):(I(),M("span",F0)),_("a",{href:"#",onClick:de(d=>s(u.node,d),["prevent"])},Y(u.node.name),9,k0),u.node.isExternal?(I(),M("span",P0,"E")):Z("",!0)]),a(u.node.id,e.tree.node.id)&&u.children&&u.children.length>0?(I(),M("ul",D0,[(I(!0),M(Re,null,en(u.children,d=>(I(),M("li",{key:d.node.id},[_("div",H0,[c[1]||(c[1]=_("span",{class:"toggle-placeholder"},null,-1)),_("a",{href:"#",onClick:de(p=>s(d.node,p),["prevent"])},Y(d.node.name),9,U0),d.node.isExternal?(I(),M("span",B0,"E")):Z("",!0)])]))),128))])):Z("",!0)]))),128))])]))}},V0=dt(G0,[["__scopeId","data-v-ccf97bf4"]]);const W0={class:"neighbors-container"},j0={class:"names-container"},z0={class:"header-container"},K0={class:"header"},X0=["href"],q0={key:0,class:"minimal-header"},Z0={key:1,class:"minimal-header"},Q0={key:0,class:"layout-status"},Y0={key:1,class:"layout-status"},J0={key:2,class:"minimal-header"},eh={key:0},th={key:0,class:"repo-list-container"},nh={key:0},rh=["href","onClick"],ih={key:0,title:"External country"},sh={key:1,class:"loading"},oh={class:"loading-logs"},ah={key:0,class:"current-log"},lh={key:1,class:"log-messages"},uh={key:1,class:"tree-view-container"},ch={__name:"FocusRepository",props:{vm:{type:Object,required:!0}},emits:["selected","close"],setup(e,{emit:t}){const n=e,r=t;function i(l,c){r("selected",{text:l.name,lon:l.lngLat[1],lat:l.lngLat[0],skipAnimation:c.altKey})}function s(){r("close")}function o(l){return"https://github.com/"+l.name}function a(l,c){i({name:l.name||l.id,lngLat:l.lngLat||n.vm.lngLat},c)}return(l,c)=>(I(),M("div",W0,[_("div",j0,[_("div",z0,[_("div",K0,[_("h2",null,[_("a",{href:o(e.vm.name),onClick:c[0]||(c[0]=de(u=>i(e.vm,u),["prevent"])),class:"normal"},Y(e.vm.name),9,X0)]),e.vm.graphData?(I(),M("div",q0,[c[6]||(c[6]=_("span",null,"Graph view active.",-1)),_("a",{href:"#",onClick:c[1]||(c[1]=de(u=>e.vm.goBackToDirectConnections(),["prevent"])),class:Jt(["inline-action-link",{disabled:e.vm.expandingGraph}])}," Exit ",2)])):Z("",!0),e.vm.graphData?(I(),M("div",Z0,[e.vm.layoutRunning?(I(),M("span",Q0,[c[7]||(c[7]=$e(" Layout is running. ",-1)),_("a",{href:"#",onClick:c[2]||(c[2]=de(u=>e.vm.setLayout(!1),["prevent"])),class:"inline-action-link"},"Stop")])):(I(),M("span",Y0,[c[8]||(c[8]=$e(" Layout is stopped. ",-1)),_("a",{href:"#",onClick:c[3]||(c[3]=de(u=>e.vm.setLayout(!0),["prevent"])),class:"inline-action-link"},"Resume")]))])):(I(),M("div",J0,[e.vm.loading?Z("",!0):(I(),M("span",eh,[$e(Y(e.vm.repos.length)+" direct connections shown. ",1),e.vm.expandingGraph?Z("",!0):(I(),M("a",{key:0,href:"#",onClick:c[4]||(c[4]=de(u=>e.vm.expandGraph(),["prevent"])),class:"inline-action-link"}," Expand to graph view "))]))]))]),_("a",{class:"close-btn",href:"#",onClick:c[5]||(c[5]=de(u=>s(),["prevent"]))},[...c[9]||(c[9]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle"},[_("circle",{cx:"12",cy:"12",r:"10"}),_("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),_("line",{x1:"9",y1:"9",x2:"15",y2:"15"})],-1)])])]),e.vm.graphData?(I(),M("div",uh,[Oe(V0,{tree:e.vm.graphData,onNodeSelected:a},null,8,["tree"])])):(I(),M("div",th,[e.vm.repos&&!e.vm.expandingGraph?(I(),M("ul",nh,[(I(!0),M(Re,null,en(e.vm.repos,u=>(I(),M("li",{key:u.name},[_("a",{href:o(u),onClick:de(d=>i(u,d),["prevent"]),target:"_blank"},[$e(Y(u.name)+" ",1),u.isExternal?(I(),M("span",ih,"(external cluster)")):Z("",!0)],8,rh)]))),128))])):Z("",!0),c[11]||(c[11]=$e()),e.vm.expandingGraph?(I(),M("div",sh,[_("div",oh,[c[10]||(c[10]=_("div",{class:"log-header"},"Loading expanded graph view...",-1)),e.vm.currentLog?(I(),M("div",ah,Y(e.vm.currentLog),1)):Z("",!0),e.vm.logMessages.length>0?(I(),M("div",lh,[(I(!0),M(Re,null,en(e.vm.logMessages,(u,d)=>(I(),M("div",{key:d,class:"log-message"},Y(u),1))),128))])):Z("",!0)])])):Z("",!0)]))])]))}},fh=dt(ch,[["__scopeId","data-v-67ff9338"]]),Yt=yu(),dh={version:8,glyphs:Rn.glyphsSource,sources:{},layers:[{id:"background",type:"background",paint:{"background-color":Yt.background}}]},An={default:"#EAEDEF",selected:"#bf2072",neighbor:"#e56aaa",textColor:Yt.circleLabelsColor,textHaloColor:Yt.circleLabelsHaloColor,textHaloWidth:Yt.circleLabelsHaloWidth},Do=100;function on(e){return{lng:e.x/Do,lat:e.y/Do}}function hh(e){const t=document.querySelector(".subgraph-viewer");if(!t)throw new Error("Subgraph viewer container not found");for(t.classList.add("active");t.firstChild;)t.removeChild(t.firstChild);const n=document.createElement("div");n.style.width="100%",n.style.height="100%",t.appendChild(n);const r=mu(Yt.background),i=new hi.Map({container:n,style:dh,center:[0,0],dragRotate:!1,touchZoomRotate:{around:"center"},preserveDrawingBuffer:!0});i.dragRotate.disable(),i.touchZoomRotate.disableRotation();let s=null,o=e.graph,a=!1,l=400,c=null,u=null,d=ph(),p=null,v=!0;return i.on("load",()=>{i.addSource("nodes",{type:"geojson",data:d}),i.addSource("selected-nodes",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),i.addLayer({id:"nodes",type:"circle",source:"nodes",paint:{"circle-color":Yt.circleColor,"circle-opacity":["interpolate",["linear"],["zoom"],5,.1,15,.9],"circle-stroke-color":Yt.circleStrokeColor,"circle-stroke-width":1,"circle-stroke-opacity":["interpolate",["linear"],["zoom"],8,0,15,.9],"circle-radius":["interpolate",["linear"],["zoom"],5,["*",["get","size"],.15],23,["*",["get","size"],2]]}}),i.addLayer({id:"nodes-touch-target",type:"circle",source:"nodes",paint:{"circle-color":"transparent","circle-radius":["interpolate",["linear"],["zoom"],5,12,23,24]}}),i.addLayer({id:"selected-nodes-layer",type:"circle",source:"selected-nodes",paint:{"circle-color":["get","color"]}}),i.addLayer({id:"node-labels",type:"symbol",source:"nodes",layout:{"text-field":["get","label"],"text-font":["Roboto Condensed Regular"],"text-anchor":"top","text-max-width":10,"symbol-sort-key":["-",0,["get","size"]],"symbol-spacing":500,"text-offset":[0,.5],"text-size":["interpolate",["linear"],["zoom"],8,["/",["get","size"],4],10,["+",["get","size"],8]]},paint:{"text-color":An.textColor,"text-halo-color":An.textHaloColor,"text-halo-width":An.textHaloWidth}}),i.addLayer({id:"selected-nodes-labels-layer",type:"symbol",source:"selected-nodes",layout:{"text-field":["get","name"],"text-font":["Roboto Condensed Regular"],"text-anchor":"top","text-max-width":10,"symbol-sort-key":["-",0,["get","textSize"]],"symbol-spacing":500,"text-offset":[0,.5],"text-size":["interpolate",["linear"],["zoom"],8,["/",["get","size"],4],10,["+",["get","size"],8]]},paint:{"text-color":"#fff","text-halo-color":["get","color"],"text-halo-width":2}}),p=_u("graph-links"),i.addLayer(p,"nodes"),i.on("click","nodes-touch-target",q),i.on("mouseenter","nodes-touch-target",()=>{i.getCanvas().style.cursor="pointer"}),i.on("mouseleave","nodes-touch-target",()=>{i.getCanvas().style.cursor=""}),R()}),Te.on("current-project",X),{dispose(){Se()},stopLayout(){l=0,e.onLayoutStatusChange&&e.onLayoutStatusChange(!1)},resumeLayout(){l=400,!a&&s&&(e.onLayoutStatusChange&&e.onLayoutStatusChange(!0),c||(c=requestAnimationFrame(D)))}};function R(){Ki(()=>import("./index-c2dacc00.js").then(x=>x.i),["./index-c2dacc00.js","./config-08cc2f6c.js","./getColorTheme-3ad3fafe.js","./index-55e7bd22.js","./index-a0add515.css"],import.meta.url).then(x=>{if(a)return;s=x.default(o,{timeStep:.5,springLength:10,springCoefficient:.8,gravity:-12,dragCoefficient:.9});const j=o.getNode(e.nodeId);j&&s.pinNode(j,!0),s.step(),w(),a||(c=requestAnimationFrame(D),J(e.nodeId))})}function D(){if(a||!s)return;const x=l<=1;l>0&&(l--,s.step(),w()),x?(e.onLayoutStatusChange&&e.onLayoutStatusChange(!1),v&&(v=!1,setTimeout(()=>{J(e.nodeId,!0)},200)),c=null):c=requestAnimationFrame(D)}function P(x,j,O){if(!s.getBody(x)||!s.getBody(j))return null;const V=s.getNodePosition(x),re=s.getNodePosition(j),ce=on(V),ee=on(re),se=hi.MercatorCoordinate.fromLngLat(ce),ie=hi.MercatorCoordinate.fromLngLat(ee);return{from:[se.x,se.y],to:[ie.x,ie.y],color:O}}function w(){if(!s||!i.isStyleLoaded())return;const x=[];p.clear();const j={};o.forEachNode(V=>{var ce;let re=((ce=V.links)==null?void 0:ce.size)||0;j[V.id]=Math.max(3,Math.min(10,3+re/5))}),o.forEachNode(V=>{if(!s.getBody(V.id))return;const re=s.getNodePosition(V.id),ce=on(re);x.push({type:"Feature",geometry:{type:"Point",coordinates:[ce.lng,ce.lat]},properties:{id:V.id,label:U(V.id),size:j[V.id]||5,originalPos:{x:re.x,y:re.y}}})});const O=[];o.forEachLink(V=>{const re=u&&(V.fromId===u||V.toId===u),ce=P(V.fromId,V.toId,re?4294967295:r);ce&&(re?O.push(ce):p.addLine(ce))}),O.forEach(V=>p.addLine(V)),d.features=x,i.getSource("nodes").setData(d),x.length>0&&!u&&be()}function U(x){const j=x.split("/");return j.length>1?j[j.length-1]:x}function q(x){if(!x.features||x.features.length===0)return;const j=x.features[0].properties.id;J(j,!1)}function B(x,j={}){if(!s.getBody(x))return null;const O=s.getNodePosition(x),V=on(O);return{type:"Feature",geometry:{type:"Point",coordinates:[V.lng,V.lat]},properties:{...j,id:x,name:x}}}function J(x,j=!0){var se,ie,ze;if(!i.isStyleLoaded()||!s||x===u)return;const O={type:"FeatureCollection",features:[]},V=(se=s.getBody(x))==null?void 0:se.pos;if(!V)return;const re=B(x,{color:An.selected,textSize:1.2,size:8});re&&O.features.push(re),p.clear();const ce=[];o.forEachLinkedNode(x,Ce=>{if(!s.getBody(Ce.id))return;const Fe=B(Ce.id,{color:An.neighbor,textSize:1,size:6});Fe&&O.features.push(Fe);const Be=P(x,Ce.id,4294967295);Be&&ce.push(Be)}),o.forEachLink(Ce=>{if(!s.getBody(Ce.fromId)||!s.getBody(Ce.toId)||Ce.fromId===x||Ce.toId===x)return;const Fe=P(Ce.fromId,Ce.toId,r);Fe&&p.addLine(Fe)}),i.getSource("selected-nodes").setData(O),ce.forEach(Ce=>p.addLine(Ce)),u=x;const ee=on(V);j&&i.flyTo({center:[ee.lng,ee.lat]}),Te.fire("repo-selected",{text:x,lat:ee.lat,lon:ee.lng,groupId:(ze=(ie=o.getNode(x))==null?void 0:ie.data)==null?void 0:ze.c})}function be(){if(!s||a)return;const x=xe();x&&i.fitBounds(x,{padding:20,duration:500})}function xe(){if(!s||a)return null;let x=1/0,j=1/0,O=-1/0,V=-1/0;return o.forEachNode(re=>{if(!s.getBody(re.id))return;const ce=s.getNodePosition(re.id),ee=on(ce);ee.lng<x&&(x=ee.lng),ee.lat<j&&(j=ee.lat),ee.lng>O&&(O=ee.lng),ee.lat>V&&(V=ee.lat)}),x===1/0||j===1/0||O===-1/0||V===-1/0?null:[[x,j],[O,V]]}function Se(){for(a=!0,c&&(cancelAnimationFrame(c),c=null),Te.off("current-project",X),i&&i.remove();t.firstChild;)t.removeChild(t.firstChild);t.classList.remove("active")}function X(x){x===u||!s||s.getBody(x)&&J(x)}}function ph(){return{type:"FeatureCollection",features:[]}}let jt=null;class Ho{constructor(t,n){this.name=t,this.groupId=n,this.repos=ae([]),this.lngLat=ae(null),this.loading=ae(!0),this.expandingGraph=ae(!1),this.graphData=ae(null),this.layoutRunning=ae(!1),this.logMessages=ae([]),this.currentLog=ae(""),bu(n).then(r=>{var o;this.loading.value=!1;let i=[];this.lngLat.value=(o=r.getNode(t))==null?void 0:o.data.l;let s=new Set;r.forEachLinkedNode(t,(a,l)=>{var c;s.has(a.id)||(s.add(a.id),i.push({name:a.id,lngLat:a.data.l,isExternal:!!((c=l.data)!=null&&c.e)}))}),i.sort((a,l)=>a.isExternal&&!l.isExternal?1:!a.isExternal&&l.isExternal?-1:0),this.repos.value=i})}goBackToDirectConnections(){this.graphData=null,this.disposeSubgraphViewer()}disposeSubgraphViewer(){jt&&(jt.dispose(),jt=null)}dispose(){this.disposeSubgraphViewer()}setLayout(t){jt&&(t?jt.resumeLayout():jt.stopLayout(),this.layoutRunning=t)}async expandGraph(){if(!this.expandingGraph){this.expandingGraph=!0,this.logMessages=[],this.currentLog="";try{const t=this.name,n=this.groupId,r=2,i=o=>{const l=`[${new Date().toISOString().substring(11,19)}] ${o}`;this.currentLog=l,this.logMessages=[...this.logMessages,l].slice(-50)};i("Starting graph expansion...");const s=await $u(n,t,r,i);i("Graph data received, building tree view..."),this.graphData=vh(s,t,r),this.disposeSubgraphViewer(),jt=hh({graph:s,nodeId:t,groupId:n,onLayoutStatusChange:o=>{this.layoutRunning=o}}),this.layoutRunning=!0}catch(t){console.error("Failed to expand graph:",t)}finally{this.expandingGraph=!1}}}}function vh(e,t,n=2){var l,c,u;const r=e.getNode(t);if(!r)return{node:{id:t,name:t+" (not found)",isExternal:!1,lngLat:null},children:[]};const i={id:r.id,name:((l=r.data)==null?void 0:l.name)||r.id,isExternal:((c=r.data)==null?void 0:c.isExternal)||!1,lngLat:(u=r.data)==null?void 0:u.l};function s(d,p,v){if(p>=n)return[];const R=[];return e.forEachLinkedNode(d,D=>{var q,B,J;if(v.has(D.id))return;const P={id:D.id,name:((q=D.data)==null?void 0:q.name)||D.id,isExternal:((B=D.data)==null?void 0:B.isExternal)||!1,lngLat:(J=D.data)==null?void 0:J.l},w=new Set(v);w.add(D.id);const U=s(D.id,p+1,w);R.push({node:P,children:U})}),R}const o=new Set;o.add(t);const a=s(t,0,o);return{node:i,children:a}}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gh=typeof Object.defineProperty=="function"?Object.defineProperty:null,mh=gh;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yh=mh;function _h(){try{return yh({},"x",{}),!0}catch{return!1}}var bh=_h;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $h=Object.defineProperty,wh=$h;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Eh(e){return typeof e=="number"}var Pl=Eh;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Sh(e){return e[0]==="-"}function Uo(e){var t="",n;for(n=0;n<e;n++)t+="0";return t}function Ch(e,t,n){var r=!1,i=t-e.length;return i<0||(Sh(e)&&(r=!0,e=e.substr(1)),e=n?e+Uo(i):Uo(i)+e,r&&(e="-"+e)),e}var Dl=Ch;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ah=Pl,Bo=Dl,Ih=String.prototype.toLowerCase,Go=String.prototype.toUpperCase;function xh(e){var t,n,r;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;case"d":case"i":case"u":default:t=10;break}if(n=e.arg,r=parseInt(n,10),!isFinite(r)){if(!Ah(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&(e.specifier==="u"||t!==10)&&(r=4294967295+r+1),r<0?(n=(-r).toString(t),e.precision&&(n=Bo(n,e.precision,e.padRight)),n="-"+n):(n=r.toString(t),!r&&!e.precision?n="":e.precision&&(n=Bo(n,e.precision,e.padRight)),e.sign&&(n=e.sign+n)),t===16&&(e.alternate&&(n="0x"+n),n=e.specifier===Go.call(e.specifier)?Go.call(n):Ih.call(n)),t===8&&e.alternate&&n.charAt(0)!=="0"&&(n="0"+n),n}var Th=xh;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Oh(e){return typeof e=="string"}var Lh=Oh;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nh=Math.abs,Rh=String.prototype.toLowerCase,Vo=String.prototype.toUpperCase,zt=String.prototype.replace,Mh=/e\+(\d)$/,Fh=/e-(\d)$/,kh=/^(\d+)$/,Ph=/^(\d+)e/,Dh=/\.0$/,Hh=/\.0*e/,Uh=/(\..*[^0])0*e/;function Bh(e,t){var n,r;switch(t.specifier){case"e":case"E":r=e.toExponential(t.precision);break;case"f":case"F":r=e.toFixed(t.precision);break;case"g":case"G":Nh(e)<1e-4?(n=t.precision,n>0&&(n-=1),r=e.toExponential(n)):r=e.toPrecision(t.precision),t.alternate||(r=zt.call(r,Uh,"$1e"),r=zt.call(r,Hh,"e"),r=zt.call(r,Dh,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=zt.call(r,Mh,"e+0$1"),r=zt.call(r,Fh,"e-0$1"),t.alternate&&(r=zt.call(r,kh,"$1."),r=zt.call(r,Ph,"$1.e")),e>=0&&t.sign&&(r=t.sign+r),r=t.specifier===Vo.call(t.specifier)?Vo.call(r):Rh.call(r),r}var Gh=Bh;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wo(e){var t="",n;for(n=0;n<e;n++)t+=" ";return t}function Vh(e,t,n){var r=t-e.length;return r<0||(e=n?e+Wo(r):Wo(r)+e),e}var Wh=Vh;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jh=Th,zh=Lh,Kh=Pl,Xh=Gh,qh=Wh,Zh=Dl,Qh=String.fromCharCode,Yh=Array.isArray;function ur(e){return e!==e}function Jh(e){var t={};return t.specifier=e.specifier,t.precision=e.precision===void 0?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function ep(e){var t,n,r,i,s,o,a,l,c,u;if(!Yh(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",a=1,c=0;c<e.length;c++)if(r=e[c],zh(r))o+=r;else{if(t=r.precision!==void 0,r=Jh(r),!r.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),n=r.flags,u=0;u<n.length;u++)switch(i=n.charAt(u),i){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if(r.width==="*"){if(r.width=parseInt(arguments[a],10),a+=1,ur(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&r.precision==="*"){if(r.precision=parseInt(arguments[a],10),a+=1,ur(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=jh(r);break;case"s":r.maxWidth=t?r.precision:-1,r.arg=String(r.arg);break;case"c":if(!ur(r.arg)){if(s=parseInt(r.arg,10),s<0||s>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=ur(s)?String(r.arg):Qh(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(t||(r.precision=6),l=parseFloat(r.arg),!isFinite(l)){if(!Kh(r.arg))throw new Error("invalid floating-point number. Value: "+o);l=r.arg,r.padZeros=!1}r.arg=Xh(l,r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=Zh(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=qh(r.arg,r.width,r.padRight)),o+=r.arg||"",a+=1}return o}var tp=ep;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var np=tp,rp=np;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ip(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return e[4]==="."&&e[5]===void 0&&(t.precision="1"),t}function sp(e){var t,n,r,i;for(n=[],i=0,r=cr.exec(e);r;)t=e.slice(i,cr.lastIndex-r[0].length),t.length&&n.push(t),r[6]==="%"?n.push("%"):n.push(ip(r)),i=cr.lastIndex,r=cr.exec(e);return t=e.slice(i),t.length&&n.push(t),n}var op=sp;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ap=op,lp=ap;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function up(e){return typeof e=="string"}var cp=up;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fp=rp,dp=lp,hp=cp;function Hl(e){var t,n;if(!hp(e))throw new TypeError(Hl("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[dp(e)],n=1;n<arguments.length;n++)t.push(arguments[n]);return fp.apply(null,t)}var pp=Hl;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vp=pp,gp=vp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jo=gp,_n=Object.prototype,zo=_n.toString,Ko=_n.__defineGetter__,Xo=_n.__defineSetter__,mp=_n.__lookupGetter__,yp=_n.__lookupSetter__;function _p(e,t,n){var r,i,s,o;if(typeof e!="object"||e===null||zo.call(e)==="[object Array]")throw new TypeError(jo("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||zo.call(n)==="[object Array]")throw new TypeError(jo("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(mp.call(e,t)||yp.call(e,t)?(r=e.__proto__,e.__proto__=_n,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),s="get"in n,o="set"in n,i&&(s||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&Ko&&Ko.call(e,t,n.get),o&&Xo&&Xo.call(e,t,n.set),e}var bp=_p;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $p=bh,wp=wh,Ep=bp,ls;$p()?ls=wp:ls=Ep;var Sp=ls;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cp=Sp;function Ap(e,t,n){Cp(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Ip=Ap;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xp=Ip,ei=xp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tp=Math.floor,Op=Tp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lp=Op,ti=Lp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Np=ti;function Rp(e){return Np(e)===e&&e>=0}var Mp=Rp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fp=Mp,ni=Fp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kp(e){return e!==e}var Pp=kp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dp=Pp,rt=Dp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hp=Math.ceil,Up=Hp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bp=Up,Gp=Bp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vp=ti,Wp=Gp;function jp(e){return e<0?Wp(e):Vp(e)}var zp=jp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kp=zp,ri=Kp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xp=Number.POSITIVE_INFINITY,ht=Xp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qp=ht;function Zp(e){return e===0&&1/e===qp}var Qp=Zp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yp=Qp,Jp=Yp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ev=Jp,qo=rt,Oi=ht;function tv(e,t){return qo(e)||qo(t)?NaN:e===Oi||t===Oi?Oi:e===t&&e===0?ev(e)?e:t:e>t?e:t}var nv=tv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rv=nv,ii=rv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iv=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sv=iv,ov=sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var av=ov,lv=av.NEGATIVE_INFINITY,bn=lv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uv=bn;function cv(e){return e===0&&1/e===uv}var fv=cv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dv=fv,hv=dv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pv=hv,Zo=rt,Li=bn;function vv(e,t){return Zo(e)||Zo(t)?NaN:e===Li||t===Li?Li:e===t&&e===0?pv(e)?e:t:e<t?e:t}var gv=vv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv=gv,si=mv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yv=1023,Us=yv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _v=1023,bv=_v;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $v=-1023,wv=$v;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev=-1074,Sv=Ev;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cv=ht,Av=bn;function Iv(e){return e===Cv||e===Av}var xv=Iv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv=xv,oi=Tv;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ov=2147483648,Lv=Ov;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nv=2147483647,ai=Nv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rv(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var Mv=Rv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv=Mv,kv=Fv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv=kv,Dv=Pv();function Hv(){return Dv&&typeof Symbol.toStringTag=="symbol"}var Uv=Hv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv=Uv,Gv=Bv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv=Object.prototype.toString,Ul=Vv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv=Ul;function jv(e){return Wv.call(e)}var zv=jv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kv=Object.prototype.hasOwnProperty;function Xv(e,t){return e==null?!1:Kv.call(e,t)}var qv=Xv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv=qv,Qv=Zv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv=typeof Symbol=="function"?Symbol:void 0,Jv=Yv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1=Jv,t1=e1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qo=t1,n1=typeof Qo=="function"?Qo.toStringTag:"",r1=n1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1=Qv,In=r1,Ni=Ul;function s1(e){var t,n,r;if(e==null)return Ni.call(e);n=e[In],t=i1(e,In);try{e[In]=void 0}catch{return Ni.call(e)}return r=Ni.call(e),t?e[In]=n:delete e[In],r}var o1=s1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1=Gv,l1=zv,u1=o1,us;a1()?us=u1:us=l1;var li=us;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1=li,f1=typeof Uint32Array=="function";function d1(e){return f1&&e instanceof Uint32Array||c1(e)==="[object Uint32Array]"}var h1=d1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1=h1,v1=p1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1=4294967295,m1=g1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1=typeof Uint32Array=="function"?Uint32Array:null,_1=y1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1=v1,Ri=m1,Yo=_1;function $1(){var e,t;if(typeof Yo!="function")return!1;try{t=[1,3.14,-3.14,Ri+1,Ri+2],t=new Yo(t),e=b1(t)&&t[0]===1&&t[1]===3&&t[2]===Ri-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var w1=$1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1=w1,S1=E1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1=typeof Uint32Array=="function"?Uint32Array:void 0,A1=C1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function I1(){throw new Error("not implemented")}var x1=I1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1=S1,O1=A1,L1=x1,cs;T1()?cs=O1:cs=L1;var er=cs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1=li,R1=typeof Float64Array=="function";function M1(e){return R1&&e instanceof Float64Array||N1(e)==="[object Float64Array]"}var F1=M1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1=F1,P1=k1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1=typeof Float64Array=="function"?Float64Array:null,H1=D1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1=P1,Jo=H1;function B1(){var e,t;if(typeof Jo!="function")return!1;try{t=new Jo([1,3.14,-3.14,NaN]),e=U1(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var G1=B1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1=G1,W1=V1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1=typeof Float64Array=="function"?Float64Array:void 0,z1=j1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function K1(){throw new Error("not implemented")}var X1=K1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1=W1,Z1=z1,Q1=X1,fs;q1()?fs=Z1:fs=Q1;var tn=fs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1=li,J1=typeof Uint8Array=="function";function eg(e){return J1&&e instanceof Uint8Array||Y1(e)==="[object Uint8Array]"}var tg=eg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ng=tg,rg=ng;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ig=255,sg=ig;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var og=typeof Uint8Array=="function"?Uint8Array:null,ag=og;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lg=rg,Mi=sg,ea=ag;function ug(){var e,t;if(typeof ea!="function")return!1;try{t=[1,3.14,-3.14,Mi+1,Mi+2],t=new ea(t),e=lg(t)&&t[0]===1&&t[1]===3&&t[2]===Mi-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var cg=ug;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fg=cg,dg=fg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hg=typeof Uint8Array=="function"?Uint8Array:void 0,pg=hg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vg(){throw new Error("not implemented")}var gg=vg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mg=dg,yg=pg,_g=gg,ds;mg()?ds=yg:ds=_g;var bg=ds;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $g=li,wg=typeof Uint16Array=="function";function Eg(e){return wg&&e instanceof Uint16Array||$g(e)==="[object Uint16Array]"}var Sg=Eg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cg=Sg,Ag=Cg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ig=65535,xg=Ig;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tg=typeof Uint16Array=="function"?Uint16Array:null,Og=Tg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lg=Ag,Fi=xg,ta=Og;function Ng(){var e,t;if(typeof ta!="function")return!1;try{t=[1,3.14,-3.14,Fi+1,Fi+2],t=new ta(t),e=Lg(t)&&t[0]===1&&t[1]===3&&t[2]===Fi-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var Rg=Ng;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mg=Rg,Fg=Mg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kg=typeof Uint16Array=="function"?Uint16Array:void 0,Pg=kg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Dg(){throw new Error("not implemented")}var Hg=Dg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ug=Fg,Bg=Pg,Gg=Hg,hs;Ug()?hs=Bg:hs=Gg;var Vg=hs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wg=bg,jg=Vg,zg={uint16:jg,uint8:Wg},Kg=zg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var na=Kg,Bl;function Xg(){var e,t;return e=new na.uint16(1),e[0]=4660,t=new na.uint8(e.buffer),t[0]===52}Bl=Xg();var qg=Bl;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zg=qg,tr=Zg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qg=tr,Gl,ps,vs;Qg===!0?(ps=1,vs=0):(ps=0,vs=1);Gl={HIGH:ps,LOW:vs};var Yg=Gl;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jg=er,em=tn,Vl=Yg,Wl=new em(1),ra=new Jg(Wl.buffer),tm=Vl.HIGH,nm=Vl.LOW;function rm(e,t,n,r){return Wl[0]=e,t[r]=ra[tm],t[r+n]=ra[nm],t}var jl=rm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var im=jl;function sm(e){return im(e,[0,0],1,0)}var om=sm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var am=ei,zl=om,lm=jl;am(zl,"assign",lm);var Kl=zl;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var um=tr,gs;um===!0?gs=1:gs=0;var cm=gs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fm=er,dm=tn,hm=cm,Xl=new dm(1),pm=new fm(Xl.buffer);function vm(e){return Xl[0]=e,pm[hm]}var gm=vm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mm=gm,nn=mm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ym=tr,ql,ms,ys;ym===!0?(ms=1,ys=0):(ms=0,ys=1);ql={HIGH:ms,LOW:ys};var _m=ql;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bm=er,$m=tn,Zl=_m,Ql=new $m(1),ia=new bm(Ql.buffer),wm=Zl.HIGH,Em=Zl.LOW;function Sm(e,t){return ia[wm]=e,ia[Em]=t,Ql[0]}var Cm=Sm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Am=Cm,Bs=Am;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Im=Lv,xm=ai,Tm=Kl,Om=nn,Lm=Bs,ki=[0,0];function Nm(e,t){var n,r;return Tm.assign(e,ki,1,0),n=ki[0],n&=xm,r=Om(t),r&=Im,n|=r,Lm(n,ki[1])}var Rm=Nm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mm=Rm,Yl=Mm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fm=22250738585072014e-324,km=Fm;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Pm(e){return Math.abs(e)}var Dm=Pm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hm=Dm,Gs=Hm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Um=km,Bm=oi,Gm=rt,Vm=Gs,Wm=4503599627370496;function jm(e,t,n,r){return Gm(e)||Bm(e)?(t[r]=e,t[r+n]=0,t):e!==0&&Vm(e)<Um?(t[r]=e*Wm,t[r+n]=-52,t):(t[r]=e,t[r+n]=0,t)}var Jl=jm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zm=Jl;function Km(e){return zm(e,[0,0],1,0)}var Xm=Km;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qm=ei,eu=Xm,Zm=Jl;qm(eu,"assign",Zm);var Qm=eu;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ym=2146435072,ui=Ym;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jm=nn,ey=ui,ty=Us;function ny(e){var t=Jm(e);return t=(t&ey)>>>20,t-ty|0}var ry=ny;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iy=ry,sy=iy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oy=ht,ay=bn,ly=Us,uy=bv,cy=wv,fy=Sv,dy=rt,hy=oi,py=Yl,vy=Qm.assign,gy=sy,my=Kl,yy=Bs,_y=2220446049250313e-31,by=2148532223,Pi=[0,0],Di=[0,0];function $y(e,t){var n,r;return t===0||e===0||dy(e)||hy(e)?e:(vy(e,Pi,1,0),e=Pi[0],t+=Pi[1],t+=gy(e),t<fy?py(0,e):t>uy?e<0?ay:oy:(t<=cy?(t+=52,r=_y):r=1,my.assign(e,Di,1,0),n=Di[0],n&=by,n|=t+ly<<20,r*yy(n,Di[1])))}var wy=$y;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ey=wy,tu=Ey;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Sy(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var Cy=Sy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Ay=tu,Iy=Cy;function xy(e,t,n){var r,i,s,o;return r=e-t,i=r*r,s=r-i*Iy(i),o=1-(t-r*s/(2-s)-e),Ay(o,n)}var Ty=xy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Oy=rt,sa=ri,Ly=bn,oa=ht,Ny=Ty,Ry=.6931471803691238,My=19082149292705877e-26,aa=1.4426950408889634,Fy=709.782712893384,ky=-745.1332191019411,nu=1/(1<<28),Py=-nu;function Dy(e){var t,n,r;return Oy(e)||e===oa?e:e===Ly?0:e>Fy?oa:e<ky?0:e>Py&&e<nu?1+e:(e<0?r=sa(aa*e-.5):r=sa(aa*e+.5),t=e-r*Ry,n=r*My,Ny(t,n,r))}var Hy=Dy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uy=Hy,ru=Uy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var By=ti;function Gy(e){return By(e)===e&&e<0}var Vy=Gy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wy=Vy,jy=Wy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zy=tr,_s;zy===!0?_s=1:_s=0;var Ky=_s;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xy=er,qy=tn,Zy=Ky,bs=new qy(1),Qy=new Xy(bs.buffer);function Yy(e,t){return bs[0]=e,Qy[Zy]=t>>>0,bs[0]}var Jy=Yy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e_=Jy,t_=e_;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function n_(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var r_=n_;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function i_(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var s_=i_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var la=nn,o_=t_,a_=rt,l_=Us,u_=bn,c_=r_,f_=s_,fr=.6931471803691238,dr=19082149292705877e-26,d_=0x40000000000000,h_=.3333333333333333,ua=1048575,p_=2146435072,v_=1048576,g_=1072693248;function m_(e){var t,n,r,i,s,o,a,l,c,u,d,p;return e===0?u_:a_(e)||e<0?NaN:(n=la(e),s=0,n<v_&&(s-=54,e*=d_,n=la(e)),n>=p_?e+e:(s+=(n>>20)-l_|0,n&=ua,l=n+614244&1048576|0,e=o_(e,n|l^g_),s+=l>>20|0,a=e-1,(ua&2+n)<3?a===0?s===0?0:s*fr+s*dr:(o=a*a*(.5-h_*a),s===0?a-o:s*fr-(o-s*dr-a)):(u=a/(2+a),p=u*u,l=n-398458|0,d=p*p,c=440401-n|0,i=d*c_(d),r=p*f_(d),l|=c,o=r+i,l>0?(t=.5*a*a,s===0?a-(t-u*(t+o)):s*fr-(t-(u*(t+o)+s*dr)-a)):s===0?a-u*(a-o):s*fr-(u*(a-o)-s*dr-a))))}var y_=m_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var __=y_,b_=__;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $_(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var w_=$_;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function E_(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var S_=E_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var C_=w_,A_=S_;function I_(e,t){var n,r,i,s;return s=e*e,i=s*s,r=s*C_(s),r+=i*i*A_(s),n=.5*s,i=1-n,i+(1-i-n+(s*r-e*t))}var x_=I_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T_=x_,iu=T_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var ca=-.16666666666666632,O_=.00833333333332249,L_=-.0001984126982985795,N_=27557313707070068e-22,R_=-25050760253406863e-24,M_=158969099521155e-24;function F_(e,t){var n,r,i,s;return s=e*e,i=s*s,n=O_+s*(L_+s*N_)+s*i*(R_+s*M_),r=s*e,t===0?e+r*(ca+s*n):e-(s*(.5*t-r*n)-t-r*ca)}var k_=F_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P_=k_,su=P_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D_=1048575,H_=D_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U_=tr,$s;U_===!0?$s=0:$s=1;var B_=$s;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G_=er,V_=tn,W_=B_,ou=new V_(1),j_=new G_(ou.buffer);function z_(e){return ou[0]=e,j_[W_]}var K_=z_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X_=K_,q_=X_;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Z_(e,t){var n,r;for(n=[],r=0;r<t;r++)n.push(e);return n}var Q_=Z_;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y_=Q_,J_=Y_;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e2=J_;function t2(e){return e2(0,e)}var n2=t2;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r2=n2,i2=r2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var s2=ti,hr=tu,ci=i2,au=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],o2=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Hi=16777216,Ui=5960464477539063e-23,pr=ci(20),fa=ci(20),vr=ci(20),Me=ci(20);function lu(e,t,n,r,i,s,o,a,l){var c,u,d,p,v,R,D,P,w;for(p=s,w=r[n],P=n,v=0;P>0;v++)u=Ui*w|0,Me[v]=w-Hi*u|0,w=r[P-1]+u,P-=1;if(w=hr(w,i),w-=8*s2(w*.125),D=w|0,w-=D,d=0,i>0?(v=Me[n-1]>>24-i,D+=v,Me[n-1]-=v<<24-i,d=Me[n-1]>>23-i):i===0?d=Me[n-1]>>23:w>=.5&&(d=2),d>0){for(D+=1,c=0,v=0;v<n;v++)P=Me[v],c===0?P!==0&&(c=1,Me[v]=16777216-P):Me[v]=16777215-P;if(i>0)switch(i){case 1:Me[n-1]&=8388607;break;case 2:Me[n-1]&=4194303;break}d===2&&(w=1-w,c!==0&&(w-=hr(1,i)))}if(w===0){for(P=0,v=n-1;v>=s;v--)P|=Me[v];if(P===0){for(R=1;Me[s-R]===0;R++);for(v=n+1;v<=n+R;v++){for(l[a+v]=au[o+v],u=0,P=0;P<=a;P++)u+=e[P]*l[a+(v-P)];r[v]=u}return n+=R,lu(e,t,n,r,i,s,o,a,l)}for(n-=1,i-=24;Me[n]===0;)n-=1,i-=24}else w=hr(w,-i),w>=Hi?(u=Ui*w|0,Me[n]=w-Hi*u|0,n+=1,i+=24,Me[n]=u):Me[n]=w|0;for(u=hr(1,i),v=n;v>=0;v--)r[v]=u*Me[v],u*=Ui;for(v=n;v>=0;v--){for(u=0,R=0;R<=p&&R<=n-v;R++)u+=o2[R]*r[v+R];vr[n-v]=u}for(u=0,v=n;v>=0;v--)u+=vr[v];for(d===0?t[0]=u:t[0]=-u,u=vr[0]-u,v=1;v<=n;v++)u+=vr[v];return d===0?t[1]=u:t[1]=-u,D&7}function a2(e,t,n,r){var i,s,o,a,l,c,u,d,p;for(s=4,a=r-1,o=(n-3)/24|0,o<0&&(o=0),c=n-24*(o+1),d=o-a,p=a+s,u=0;u<=p;u++)d<0?pr[u]=0:pr[u]=au[d],d+=1;for(u=0;u<=s;u++){for(i=0,d=0;d<=a;d++)i+=e[d]*pr[a+(u-d)];fa[u]=i}return l=s,lu(e,t,l,fa,c,s,o,a,pr)}var l2=a2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u2=Math.round,c2=u2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f2=c2,d2=f2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var h2=d2,da=nn,p2=.6366197723675814,v2=1.5707963267341256,g2=6077100506506192e-26,m2=6077100506303966e-26,y2=20222662487959506e-37,_2=20222662487111665e-37,b2=84784276603689e-45,ha=2047;function $2(e,t,n){var r,i,s,o,a,l,c;return i=h2(e*p2),o=e-i*v2,a=i*g2,c=t>>20|0,n[0]=o-a,r=da(n[0]),l=c-(r>>20&ha),l>16&&(s=o,a=i*m2,o=s-a,a=i*y2-(s-o-a),n[0]=o-a,r=da(n[0]),l=c-(r>>20&ha),l>49&&(s=o,a=i*_2,o=s-a,a=i*b2-(s-o-a),n[0]=o-a)),n[1]=o-n[0]-a,i}var w2=$2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/var E2=ai,S2=ui,C2=H_,A2=nn,I2=q_,x2=Bs,T2=l2,gr=w2,O2=0,L2=16777216,Nt=1.5707963267341256,qt=6077100506506192e-26,mr=2*qt,yr=3*qt,_r=4*qt,N2=598523,R2=1072243195,M2=1073928572,F2=1074752122,k2=1074977148,P2=1075183036,D2=1075388923,H2=1075594811,U2=1094263291,xn=[0,0,0],Tn=[0,0];function B2(e,t){var n,r,i,s,o,a,l,c;if(i=A2(e)|0,s=i&E2|0,s<=R2)return t[0]=e,t[1]=0,0;if(s<=F2)return(s&C2)===N2?gr(e,s,t):s<=M2?i>0?(c=e-Nt,t[0]=c-qt,t[1]=c-t[0]-qt,1):(c=e+Nt,t[0]=c+qt,t[1]=c-t[0]+qt,-1):i>0?(c=e-2*Nt,t[0]=c-mr,t[1]=c-t[0]-mr,2):(c=e+2*Nt,t[0]=c+mr,t[1]=c-t[0]+mr,-2);if(s<=H2)return s<=P2?s===k2?gr(e,s,t):i>0?(c=e-3*Nt,t[0]=c-yr,t[1]=c-t[0]-yr,3):(c=e+3*Nt,t[0]=c+yr,t[1]=c-t[0]+yr,-3):s===D2?gr(e,s,t):i>0?(c=e-4*Nt,t[0]=c-_r,t[1]=c-t[0]-_r,4):(c=e+4*Nt,t[0]=c+_r,t[1]=c-t[0]+_r,-4);if(s<U2)return gr(e,s,t);if(s>=S2)return t[0]=NaN,t[1]=NaN,0;for(n=I2(e),r=(s>>20)-1046,c=x2(s-(r<<20|0),n),a=0;a<2;a++)xn[a]=c|0,c=(c-xn[a])*L2;for(xn[2]=c,o=3;xn[o-1]===O2;)o-=1;return l=T2(xn,Tn,r,o),i<0?(t[0]=-Tn[0],t[1]=-Tn[1],-l):(t[0]=Tn[0],t[1]=Tn[1],l)}var G2=B2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V2=G2,uu=V2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var W2=nn,Bi=iu,pa=su,j2=uu,z2=ai,K2=ui,gt=[0,0],X2=1072243195,q2=1044381696;function Z2(e){var t,n;if(t=W2(e),t&=z2,t<=X2)return t<q2?1:Bi(e,0);if(t>=K2)return NaN;switch(n=j2(e,gt),n&3){case 0:return Bi(gt[0],gt[1]);case 1:return-pa(gt[0],gt[1]);case 2:return-Bi(gt[0],gt[1]);default:return pa(gt[0],gt[1])}}var Q2=Z2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y2=Q2,J2=Y2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var e5=ai,t5=ui,n5=nn,va=iu,Gi=su,r5=uu,i5=1072243195,s5=1045430272,mt=[0,0];function o5(e){var t,n;if(t=n5(e),t&=e5,t<=i5)return t<s5?e:Gi(e,0);if(t>=t5)return NaN;switch(n=r5(e,mt),n&3){case 0:return Gi(mt[0],mt[1]);case 1:return va(mt[0],mt[1]);case 2:return-Gi(mt[0],mt[1]);default:return-va(mt[0],mt[1])}}var a5=o5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l5=a5,u5=l5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c5=3.141592653589793,cu=c5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f5=rt,d5=oi,ga=J2,Vi=u5,h5=Gs,On=Yl,Ln=cu;function p5(e){var t,n;return f5(e)?NaN:d5(e)?NaN:(n=e%2,t=h5(n),t===0||t===1?On(0,n):t<.25?Vi(Ln*n):t<.75?(t=.5-t,On(ga(Ln*t),n)):t<1.25?(n=On(1,n)-n,Vi(Ln*n)):t<1.75?(t-=1.5,-On(ga(Ln*t),n)):(n-=On(2,n),Vi(Ln*n)))}var v5=p5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g5=v5,m5=g5;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function y5(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var _5=y5;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function b5(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var $5=b5;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function w5(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var E5=w5;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function S5(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var C5=S5;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function A5(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var I5=A5;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function x5(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var T5=x5;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function O5(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var L5=O5;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function N5(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var R5=N5;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function M5(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var F5=M5;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function k5(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var P5=k5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var D5=rt,H5=oi,U5=Gs,an=b_,B5=ri,G5=m5,V5=cu,Wi=ht,W5=_5,j5=$5,z5=E5,K5=C5,X5=I5,q5=T5,Z5=L5,Q5=R5,Y5=F5,J5=P5,eb=.07721566490153287,tb=.3224670334241136,nb=1,rb=-.07721566490153287,ib=.48383612272381005,sb=-.1475877229945939,ob=.06462494023913339,ab=-.07721566490153287,lb=1,ub=.4189385332046727,br=1.4616321449683622,cb=4503599627370496,fb=72057594037927940,db=13877787807814457e-33,ma=1.4616321449683622,hb=-.12148629053584961,pb=-3638676997039505e-33;function vb(e){var t,n,r,i,s,o,a,l,c,u,d,p,v;if(D5(e)||H5(e))return e;if(e===0)return Wi;if(e<0?(t=!0,e=-e):t=!1,e<db)return-an(e);if(t){if(e>=cb||(c=G5(e),c===0))return Wi;n=an(V5/U5(c*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(v=-an(e),e>=br-1+.27?(d=1-e,r=0):e>=br-1-.27?(d=e-(ma-1),r=1):(d=e,r=2)):(v=0,e>=br+.27?(d=2-e,r=0):e>=br-.27?(d=e-ma,r=1):(d=e-1,r=2)),r){case 0:p=d*d,o=eb+p*W5(p),s=p*(tb+p*j5(p)),a=d*o+s,v+=a-.5*d;break;case 1:p=d*d,u=p*d,o=ib+u*X5(u),s=sb+u*q5(u),i=ob+u*Z5(u),a=p*o-(pb-u*(s+d*i)),v+=hb+a;break;case 2:o=d*(ab+d*Q5(d)),s=lb+d*Y5(d),v+=-.5*d+o/s;break}else if(e<8)switch(r=B5(e),d=e-r,a=d*(rb+d*K5(d)),l=nb+d*z5(d),v=.5*d+a/l,p=1,r){case 7:p*=d+6;case 6:p*=d+5;case 5:p*=d+4;case 4:p*=d+3;case 3:p*=d+2,v+=an(p)}else e<fb?(c=an(e),p=1/e,d=p*p,u=ub+p*J5(d),v=(e-.5)*(c-1)+u):v=e*(an(e)-1);return t&&(v=n-v),v}var gb=vb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mb=gb,yb=mb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _b=jy,bb=yb;function $b(e){return _b(e)?NaN:bb(e+1)}var wb=$b;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eb=wb,fu=Eb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $r=ni,wr=rt,Sb=ru,yt=fu,Cb=ii,Ab=si,ya=ht;function Ib(e,t,n,r){var i,s,o,a,l;return wr(e)||wr(t)||wr(n)||wr(r)||!$r(t)||!$r(n)||!$r(r)||t===ya||n===ya||n>t||r>t?NaN:(l=Cb(0,r+n-t),a=Ab(n,r),$r(e)&&l<=e&&e<=a?(s=yt(r)+yt(n)+yt(t-r)+yt(t-n),i=yt(t)+yt(e)+yt(r-e),i+=yt(n-e)+yt(t-n+e-r),o=s-i,Sb(o)):0)}var xb=Ib;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Tb(e){return t;function t(){return e}}var Ob=Tb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lb=Ob,du=Lb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Er=ni,Sr=rt,Nb=du,Rb=ru,_t=fu,Mb=ii,Fb=si,_a=ht;function kb(e,t,n){var r,i;if(Sr(e)||Sr(t)||Sr(n)||!Er(e)||!Er(t)||!Er(n)||e===_a||t===_a||t>e||n>e)return Nb(NaN);return i=Mb(0,n+t-e),r=Fb(t,n),s;function s(o){var a,l,c;return Sr(o)?NaN:Er(o)&&i<=o&&o<=r?(l=_t(n)+_t(t)+_t(e-n)+_t(e-t),a=_t(e)+_t(o)+_t(n-o),a+=_t(t-o)+_t(e-t+o-n),c=l-a,Rb(c)):0}}var Pb=kb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Db=ei,hu=xb,Hb=Pb;Db(hu,"factory",Hb);var pu=hu;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ub(e){var t,n,r;for(t=e.length,n=0,r=0;r<t;r++)n+=e[r];return n}var vu=Ub;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ji=ni,Cr=rt,Bb=ri,Gb=ii,ba=si,Vb=pu,$a=ht,Wb=tn,jb=vu;function zb(e,t,n,r){var i,s,o,a,l;if(Cr(e)||Cr(t)||Cr(n)||Cr(r)||!ji(t)||!ji(n)||!ji(r)||t===$a||n===$a||n>t||r>t)return NaN;if(e=Bb(e),e<Gb(0,r+n-t))return 0;if(e>=ba(r,n))return 1;for(s=new Wb(e+1),s[e]=Vb(e,t,n,r),l=e-1;l>=0;l--)o=(l+1)*(t-n-(r-l-1)),i=(n-l)*(r-l),s[l]=o/i*s[l+1];return a=jb(s),ba(a,1)}var Kb=zb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zi=ni,Ar=rt,Xb=du,qb=ri,Zb=ii,wa=si,Qb=pu,Ea=ht,Yb=tn,Jb=vu;function e3(e,t,n){if(Ar(e)||Ar(t)||Ar(n)||!zi(e)||!zi(t)||!zi(n)||e===Ea||t===Ea||t>e||n>e)return Xb(NaN);return r;function r(i){var s,o,a,l,c;if(Ar(i))return NaN;if(i=qb(i),i<Zb(0,n+t-e))return 0;if(i>=wa(n,t))return 1;for(o=new Yb(i+1),o[i]=Qb(i,e,t,n),c=i-1;c>=0;c--)a=(c+1)*(e-t-(n-c-1)),s=(t-c)*(n-c),o[c]=a/s*o[c+1];return l=Jb(o),wa(l,1)}}var t3=e3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n3=ei,gu=Kb,r3=t3;n3(gu,"factory",r3);var i3=gu;const s3=wu(i3);const o3={key:0,class:"unsaved-changes"},a3=["onClick"],Sa=600,Ca=8,l3=30,Nn=.05,u3={__name:"App",setup(e){const t=Rn.showRepoInfo!==!1,n=ae(!1),r=ae(""),i=ae(""),s=ae(null),o=ae(null),a=ae(!1),l=ae(null),c=ae(!1),u=ae(!1),d=ae(window.innerWidth<Sa);let p;const v=ae(null),R=ae(""),D=ae(!1),P=ae(null),w=ae(""),U=ae(""),q=ae(!1),B=ae(0);let J=0;const be=/[,\s;]+/,xe="abcdefghijklmnopqrstuvwxyz0123456789".split(""),Se=new Map;let X=0,x=null;function j(){}function O(){}function V(g=""){return g.trim().toLowerCase()}function re(g=""){const y=g.lastIndexOf("/");return y<0?g:g.slice(y+1)}function ce(g=""){const y=[],b=new Set;return g.split(be).forEach(H=>{const F=H.trim();if(!F)return;const N=V(F);b.has(N)||(b.add(N),y.push(F))}),y}async function ee(g){if(Se.has(g))return Se.get(g);const y=fetch(`${Rn.namesEndpoint}/${encodeURIComponent(g)}.json`).then(b=>{if(!b.ok){if(b.status===404)return[];throw new Error(`Failed to load names bucket "${g}": ${b.status} ${b.statusText}`)}return b.json()}).then(b=>Array.isArray(b)?b:[]).catch(b=>(console.error(b),[]));return Se.set(g,y),y}function se(g){if(!Array.isArray(g)||g.length<3)return null;const[y,b,H]=g,F=Number(b),N=Number(H);return!Number.isFinite(F)||!Number.isFinite(N)?null:{name:y,coordinates:[F,N]}}function ie(g={}){const y=Array.isArray(g.coordinates)?g.coordinates:[g.lat,g.lon];if(!Array.isArray(y)||y.length!==2)return null;const b=Number(y[0]),H=Number(y[1]);return!Number.isFinite(b)||!Number.isFinite(H)?null:[b,H]}async function ze(g=[]){var b;const y=g.map(ie).filter(Boolean);return y.length?(b=window.mapOwner)!=null&&b.getGroupIdsAtCoordinates?window.mapOwner.getGroupIdsAtCoordinates(y):Promise.all(y.map(([H,F])=>{var N;return(N=window.mapOwner)==null?void 0:N.getGroupIdAt(H,F)})):[]}function Ce(g=[]){const y=new Map;return g.forEach(b=>{if(b==null)return;const H=String(b);y.set(H,(y.get(H)||0)+1)}),y}function Fe(g=new Map){let y=0;return g.forEach(b=>{y+=b}),y}function Be(g,y,b,H){const F=Math.max(0,Math.trunc(y)),N=Math.max(0,Math.trunc(b)),ne=Math.max(0,Math.trunc(H)),me=Math.max(0,Math.trunc(g));if(!F||!ne||!N||me<=0)return 1;const _e=Math.min(N,ne);if(me>_e)return 0;const ye=1-s3(me-1,F,N,ne);return Math.min(1,Math.max(0,ye))}function nr(g=[]){const y=g.length;if(!y)return[];const b=g.map((N,ne)=>({index:ne,pValue:N})).sort((N,ne)=>N.pValue-ne.pValue),H=new Array(y);let F=1;for(let N=y;N>=1;N-=1){const ne=b[N-1],me=Math.min(1,Math.max(0,ne.pValue)),_e=Math.min(F,me*y/N);F=_e,H[ne.index]=_e}return H}async function fi(){return x||(x=Promise.all(xe.map(ee)).then(async g=>{const y=new Set,b=[];g.forEach(N=>{N.forEach(ne=>{const me=se(ne);if(!me)return;const[_e,Xe]=me.coordinates,ye=`${me.name}:${_e}:${Xe}`;y.has(ye)||(y.add(ye),b.push({text:me.name,coordinates:[_e,Xe]}))})});const H=await ze(b),F=Ce(H);return{totalGenes:b.length,assignedGenes:Fe(F),regionCounts:F}}).catch(g=>{throw x=null,g}),x)}function di(){var H,F;const g=new Map,y=(F=(H=window.mapOwner)==null?void 0:H.getPlacesGeoJSON)==null?void 0:F.call(H);return(Array.isArray(y==null?void 0:y.features)?y.features:[]).forEach(N=>{var _e,Xe;const ne=(_e=N==null?void 0:N.properties)==null?void 0:_e.ownerId;if(ne==null)return;const me=String(ne);g.has(me)||g.set(me,((Xe=N==null?void 0:N.properties)==null?void 0:Xe.name)||"")}),g}async function xt(g=[]){if(!g.length)return{rows:[],enrichedRegionIds:[],n:0,N:0,selectedAssignedCount:0,universeAssignedCount:0,fdrThreshold:Nn};const[y,b]=await Promise.all([fi(),ze(g)]),H=Ce(b),F=Fe(H),N=b.length,ne=y.totalGenes;if(!ne||!N)return{rows:[],enrichedRegionIds:[],n:N,N:ne,selectedAssignedCount:F,universeAssignedCount:y.assignedGenes||0,fdrThreshold:Nn};const me=di(),_e=[];if(y.regionCounts.forEach((he,Ae)=>{const qe=H.get(Ae)||0,ir=qe>0?Be(qe,ne,he,N):1;_e.push({groupId:Ae,k:qe,K:he,pValue:ir})}),!_e.length)return{rows:[],enrichedRegionIds:[],n:N,N:ne,selectedAssignedCount:F,universeAssignedCount:y.assignedGenes||0,fdrThreshold:Nn};const Xe=nr(_e.map(he=>he.pValue)),ye=_e.map((he,Ae)=>{const qe=Xe[Ae];return{groupId:String(he.groupId),regionName:me.get(String(he.groupId))||"",k:he.k,n:N,K:he.K,N:ne,pValue:he.pValue,qValue:qe,significant:he.k>0&&qe<Nn}}).sort((he,Ae)=>he.qValue-Ae.qValue||Ae.k-he.k||he.groupId.localeCompare(Ae.groupId));return{rows:ye,enrichedRegionIds:ye.filter(he=>he.significant).map(he=>he.groupId),n:N,N:ne,selectedAssignedCount:F,universeAssignedCount:y.assignedGenes||0,fdrThreshold:Nn}}function we(g=[]){return g.map(y=>{const b=y==null?"":String(y);return/["\n,]/.test(b)?`"${b.replace(/"/g,'""')}"`:b}).join(",")}function rn(g){return Number.isFinite(g)?g===0?"0":Math.abs(g)<1e-4||Math.abs(g)>=1e6?g.toExponential(6):g.toFixed(8).replace(/0+$/,"").replace(/\.$/,""):""}function rr({inputGenes:g=[],missingGenes:y=[],matchedNodes:b=[],report:H}){const F=[];return F.push(we(["metric","value"])),F.push(we(["input_gene_count",g.length])),F.push(we(["matched_node_count",b.length])),F.push(we(["missing_gene_count",y.length])),F.push(we(["draws_n",H.n])),F.push(we(["selected_assigned_in_regions",H.selectedAssignedCount])),F.push(we(["universe_genes_N",H.N])),F.push(we(["universe_assigned_in_regions",H.universeAssignedCount])),F.push(we(["fdr_threshold",H.fdrThreshold])),F.push(we(["enriched_region_count",H.enrichedRegionIds.length])),F.push(""),F.push(we(["input_gene"])),g.forEach(N=>{F.push(we([N]))}),y.length&&(F.push(""),F.push(we(["missing_gene"])),y.forEach(N=>{F.push(we([N]))})),F.push(""),F.push(we(["group_id","region_name","k","n","K","N","p_value","q_value","significant"])),H.rows.forEach(N=>{F.push(we([N.groupId,N.regionName,N.k,N.n,N.K,N.N,rn(N.pValue),rn(N.qValue),N.significant?"1":"0"]))}),F.join(`
`)}function Tt(g,y,b="text/csv;charset=utf-8"){const H=new Blob([y],{type:b}),F=window.URL.createObjectURL(H),N=document.createElement("a");N.href=F,N.download=g,document.body.appendChild(N),N.click(),document.body.removeChild(N),window.URL.revokeObjectURL(F)}async function $n(g){const y=ce(g);if(y.length)try{const{matches:b,missing:H}=await f(y),F=await xt(b),N=rr({inputGenes:y,missingGenes:H,matchedNodes:b,report:F}),ne=new Date().toISOString().replace(/[:.]/g,"-");Tt(`enrichment-debug-${ne}.csv`,N)}catch(b){console.error(b)}}async function wn(g=[]){var b,H,F,N,ne,me;const y=++X;if((H=(b=window.mapOwner)==null?void 0:b.clearRegionHighlights)==null||H.call(b),!!g.length)try{const _e=await xt(g);if(y!==X)return;(N=(F=window.mapOwner)==null?void 0:F.highlightRegions)==null||N.call(F,_e.enrichedRegionIds)}catch(_e){if(y!==X)return;console.error(_e),(me=(ne=window.mapOwner)==null?void 0:ne.clearRegionHighlights)==null||me.call(ne)}}async function f(g){const y=g.map(ye=>{const he=typeof ye=="string"?ye.trim():"",Ae=V(he);return{original:he,normalized:Ae}}).filter(ye=>ye.normalized),b=y.map(ye=>ye.normalized);if(!y.length)return{matches:[],missing:[]};const H=new Set(b),F=new Set,N=[],ne=new Set,me=[...new Set(b.map(ye=>ye[0]))];(await Promise.all(me.map(ee))).forEach(ye=>{ye.forEach(he=>{const Ae=se(he);if(!Ae)return;const qe=V(Ae.name),ir=re(qe),Vs=H.has(qe),Ws=H.has(ir);if(!Vs&&!Ws)return;Vs&&F.add(qe),Ws&&F.add(ir);const[js,zs]=Ae.coordinates,Ks=`${Ae.name}:${js}:${zs}`;ne.has(Ks)||(ne.add(Ks),N.push({text:Ae.name,coordinates:[js,zs],size:l3}))})});const Xe=y.filter(ye=>!F.has(ye.normalized)).map(ye=>ye.original);return{matches:N,missing:Xe}}async function h(g){var H,F,N;const y=ce(g);if(!y.length){E();return}const{matches:b}=await f(y);if(!b.length){E();return}q.value=!0,(H=window.mapOwner)==null||H.highlightNodes(b),wn(b),b.length>1&&((N=(F=window.mapOwner)==null?void 0:F.focusOnNodes)==null||N.call(F,b,{padding:d.value?48:96,maxZoom:Ca}))}function m(){L(),E()}function E(g=!1){var y,b,H,F;X+=1,(b=(y=window.mapOwner)==null?void 0:y.clearPersistentHighlights)==null||b.call(y),(F=(H=window.mapOwner)==null?void 0:H.clearRegionHighlights)==null||F.call(H),q.value=!1,g&&(B.value+=1)}function $(g){if(r.value){g.shouldProceed=!1,L();return}q.value&&(g.shouldProceed=!1,E(!0))}function S(){L()}function L(){var g,y;n.value=!1,r.value="",i.value="",P.value=null,w.value="",U.value="",(y=(g=window.mapOwner)==null?void 0:g.clearSelectionHighlights)==null||y.call(g)}function T(g){var b;g.lat===void 0&&p&&g.text===p.text?g=p:p=g;const y={center:[g.lat,g.lon],zoom:Ca};(b=window.mapOwner)==null||b.makeVisible(g.text,y,g.skipAnimation),r.value=g.text,Te.fire("current-project",g.text),Pe(g)}function A(g){p=g;{i.value="",r.value=g.text,Pe(g);return}}function C(){}function W(g){s.value=g}function k(g){o.value=g}Yn(()=>{var g;(g=window.mapOwner)==null||g.dispose(),Te.off("repo-selected",A),Te.off("show-tooltip",W),Te.off("show-context-menu",k),Te.off("focus-on-repo",te),Te.off("unsaved-changes-detected",fe),window.removeEventListener("resize",G)}),fl(()=>{Te.on("repo-selected",A),Te.on("show-context-menu",k),Te.on("show-tooltip",W),Te.on("focus-on-repo",te),Te.on("unsaved-changes-detected",fe),window.addEventListener("resize",G),Ke()});function G(){d.value=window.innerWidth<Sa}function z(g){o.value=null,g.click()}function te(g,y){const b=new Ho(g,y);l.value=b}function fe(g){u.value=g}function oe(){l.value&&(l.value.dispose(),l.value=null)}const ke=ct(()=>!0);function Ne(){c.value=!0}async function Ke(){if(Rn.geneMetadataEndpoint){D.value=!0,R.value="";try{const g=await fetch(Rn.geneMetadataEndpoint);if(!g.ok)throw new Error(`Failed to load gene metadata: ${g.status} ${g.statusText}`);v.value=await g.json()}catch(g){console.error(g),R.value=g.message||"Failed to load gene metadata."}finally{D.value=!1}}}async function Pe(g){var ne,me,_e,Xe,ye,he;if(!g)return;const y=++J;P.value=null,w.value="",U.value="";let b=g.groupId;if(b===void 0&&g.lat!==void 0&&g.lon!==void 0&&(b=await((ne=window.mapOwner)==null?void 0:ne.getGroupIdAt(g.lat,g.lon))),y!==J||b===void 0)return;P.value=b;const H=(_e=(me=window.mapOwner)==null?void 0:me.getPlacesGeoJSON)==null?void 0:_e.call(me);if(!((Xe=H==null?void 0:H.features)!=null&&Xe.length))return;const F=String(b),N=H.features.find(Ae=>{var qe;return String((qe=Ae==null?void 0:Ae.properties)==null?void 0:qe.ownerId)===F});(ye=N==null?void 0:N.properties)!=null&&ye.name&&(w.value=N.properties.name),(he=N==null?void 0:N.properties)!=null&&he.enriched_GO&&(U.value=N.properties.enriched_GO)}async function Ot(){var y;l.value&&l.value.disposeSubgraphViewer(),o.value&&(o.value=null);const g=p.groupId??await((y=window.mapOwner)==null?void 0:y.getGroupIdAt(p.lat,p.lon));if(g!==void 0){const b=new Ho(p.text,g);l.value=b}}return(g,y)=>(I(),M("div",null,[u.value?(I(),M("div",o3,[y[8]||(y[8]=$e(" You have unsaved labels in local storage. ",-1)),_("a",{href:"#",onClick:y[0]||(y[0]=de(b=>Ne(),["prevent"])),class:"normal"},"Click here"),y[9]||(y[9]=$e(" to see them. ",-1))])):Z("",!0),y[10]||(y[10]=_("div",{class:"made-by"},[$e(" Map: "),_("a",{class:"normal","aria-label":"Map by @leonfrench",target:"_blank",href:"https://github.com/leonfrench"}," @leonfrench "),$e(" • Based on "),_("a",{class:"normal","aria-label":"Based on @anvaka's web app",target:"_blank",href:"https://github.com/sponsors/anvaka"}," @anvaka "),$e(" 's web app ")],-1)),l.value?(I(),Ft(fh,{key:1,vm:l.value,class:"right-panel",onSelected:T,onClose:y[1]||(y[1]=b=>oe())},null,8,["vm"])):Z("",!0),r.value&&t?(I(),Ft(qd,{key:2,name:r.value,onListConnections:y[2]||(y[2]=b=>Ot())},null,8,["name"])):Z("",!0),r.value&&!t?(I(),Ft(c0,{key:3,name:r.value,metadata:v.value,loading:D.value,error:R.value,"cluster-id":P.value,"cluster-name":w.value,"cluster-enriched-go":U.value,onListConnections:y[3]||(y[3]=b=>Ot())},null,8,["name","metadata","loading","error","cluster-id","cluster-name","cluster-enriched-go"])):Z("",!0),ke.value?(I(),M("form",{key:4,onSubmit:de(O,["prevent"]),class:"search-box"},[Oe(Id,{placeholder:"Find Protein",onMenuClicked:y[4]||(y[4]=b=>a.value=!0),onSelected:T,onBeforeClear:$,onCleared:S,onInputChanged:j,onMultiSelected:h,onMultiDownloadEnrichment:$n,onMultiCleared:m,showClearButton:!!(r.value||q.value),query:r.value,multiInputResetToken:B.value},null,8,["showClearButton","query","multiInputResetToken"])],32)):Z("",!0),Oe(Ei,{name:"slide-bottom"},{default:xr(()=>[i.value&&t?(I(),Ft(E0,{key:0,name:i.value,class:"small-preview",onShowFullPreview:y[5]||(y[5]=b=>void 0)},null,8,["name"])):Z("",!0)]),_:1}),s.value?(I(),M("div",{key:5,class:"tooltip",style:gn({left:s.value.left,top:s.value.top,background:s.value.background})},Y(s.value.text),5)):Z("",!0),o.value?(I(),M("div",{key:6,class:"context-menu",style:gn({left:o.value.left,top:o.value.top})},[(I(!0),M(Re,null,en(o.value.items,(b,H)=>(I(),M("a",{href:"#",key:H,onClick:de(F=>z(b),["prevent"])},Y(b.text),9,a3))),128))],4)):Z("",!0),Oe(Ei,{name:"slide-top"},{default:xr(()=>[c.value?(I(),Ft(x0,{key:0,onClose:y[6]||(y[6]=b=>c.value=!1),class:"changes-window"})):Z("",!0)]),_:1}),Oe(Ei,{name:"slide-left"},{default:xr(()=>[a.value?(I(),Ft(A0,{key:0,onClose:y[7]||(y[7]=b=>a.value=!1),class:"about"})):Z("",!0)]),_:1})]))}},c3=dt(u3,[["__scopeId","data-v-34791920"]]);function p3(){const e=nd(c3);e.directive("focus",{mounted(t){t.focus()}}),e.mount("#app")}export{p3 as default};
//# sourceMappingURL=startVue-759dea5e.js.map
