import{b as Te,g as Su,m as yi,a as Iu,c as Au,d as xu,e as Tu}from"./getColorTheme-232e60bb.js";import{_ as Yi}from"./index-ecb150f1.js";import{c as kn,g as Ou}from"./config-08cc2f6c.js";/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function As(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const me={},vn=[],ot=()=>{},Ra=()=>!1,zr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xs=e=>e.startsWith("onUpdate:"),Le=Object.assign,Ts=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Lu=Object.prototype.hasOwnProperty,he=(e,t)=>Lu.call(e,t),X=Array.isArray,gn=e=>Kr(e)==="[object Map]",Fa=e=>Kr(e)==="[object Set]",Q=e=>typeof e=="function",Ce=e=>typeof e=="string",Ut=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",ka=e=>(_e(e)||Q(e))&&Q(e.then)&&Q(e.catch),Pa=Object.prototype.toString,Kr=e=>Pa.call(e),Nu=e=>Kr(e).slice(8,-1),Da=e=>Kr(e)==="[object Object]",Os=e=>Ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hn=As(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Mu=/-\w/g,it=Xr(e=>e.replace(Mu,t=>t.slice(1).toUpperCase())),Ru=/\B([A-Z])/g,Bt=Xr(e=>e.replace(Ru,"-$1").toLowerCase()),qr=Xr(e=>e.charAt(0).toUpperCase()+e.slice(1)),_i=Xr(e=>e?`on${qr(e)}`:""),Dt=(e,t)=>!Object.is(e,t),Nr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ha=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ls=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Fu=e=>{const t=Ce(e)?Number(e):NaN;return isNaN(t)?e:t};let to;const Zr=()=>to||(to=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nn(e){if(X(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Ce(r)?Hu(r):nn(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(Ce(e)||_e(e))return e}const ku=/;(?![^(]*\))/g,Pu=/:([^]+)/,Du=/\/\*[^]*?\*\//g;function Hu(e){const t={};return e.replace(Du,"").split(ku).forEach(n=>{if(n){const r=n.split(Pu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function rn(e){let t="";if(Ce(e))t=e;else if(X(e))for(let n=0;n<e.length;n++){const r=rn(e[n]);r&&(t+=r+" ")}else if(_e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Uu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bu=As(Uu);function Ua(e){return!!e||e===""}const Ba=e=>!!(e&&e.__v_isRef===!0),te=e=>Ce(e)?e:e==null?"":X(e)||_e(e)&&(e.toString===Pa||!Q(e.toString))?Ba(e)?te(e.value):JSON.stringify(e,Ga,2):String(e),Ga=(e,t)=>Ba(t)?Ga(e,t.value):gn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[bi(r,s)+" =>"]=i,n),{})}:Fa(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>bi(n))}:Ut(t)?bi(t):_e(t)&&!X(t)&&!Da(t)?String(t):t,bi=(e,t="")=>{var n;return Ut(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ze;class Gu{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ze,!t&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ze;try{return ze=this,t()}finally{ze=n}}}on(){++this._on===1&&(this.prevScope=ze,ze=this)}off(){this._on>0&&--this._on===0&&(ze=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Vu(){return ze}let ye;const $i=new WeakSet;class Va{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ze&&ze.active&&ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$i.has(this)&&($i.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ja(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,no(this),za(this);const t=ye,n=at;ye=this,at=!0;try{return this.fn()}finally{Ka(this),ye=t,at=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Rs(t);this.deps=this.depsTail=void 0,no(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$i.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ji(this)&&this.run()}get dirty(){return Ji(this)}}let Wa=0,Un,Bn;function ja(e,t=!1){if(e.flags|=8,t){e.next=Bn,Bn=e;return}e.next=Un,Un=e}function Ns(){Wa++}function Ms(){if(--Wa>0)return;if(Bn){let t=Bn;for(Bn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Un;){let t=Un;for(Un=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function za(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ka(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Rs(r),Wu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Ji(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Xa(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Xa(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===zn)||(e.globalVersion=zn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ji(e))))return;e.flags|=2;const t=e.dep,n=ye,r=at;ye=e,at=!0;try{za(e);const i=e.fn(e._value);(t.version===0||Dt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ye=n,at=r,Ka(e),e.flags&=-3}}function Rs(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Rs(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let at=!0;const qa=[];function St(){qa.push(at),at=!1}function It(){const e=qa.pop();at=e===void 0?!0:e}function no(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ye;ye=void 0;try{t()}finally{ye=n}}}let zn=0;class ju{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ye||!at||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new ju(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,Za(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=r)}return n}trigger(t){this.version++,zn++,this.notify(t)}notify(t){Ns();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ms()}}}function Za(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Za(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const es=new WeakMap,Yt=Symbol(""),ts=Symbol(""),Kn=Symbol("");function Pe(e,t,n){if(at&&ye){let r=es.get(e);r||es.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new Fs),i.map=r,i.key=n),i.track()}}function Et(e,t,n,r,i,s){const o=es.get(e);if(!o){zn++;return}const a=l=>{l&&l.trigger()};if(Ns(),t==="clear")o.forEach(a);else{const l=X(e),c=l&&Os(n);if(l&&n==="length"){const u=Number(r);o.forEach((d,p)=>{(p==="length"||p===Kn||!Ut(p)&&p>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Kn)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Yt)),gn(e)&&a(o.get(ts)));break;case"delete":l||(a(o.get(Yt)),gn(e)&&a(o.get(ts)));break;case"set":gn(e)&&a(o.get(Yt));break}}Ms()}function un(e){const t=ce(e);return t===e?t:(Pe(t,"iterate",Kn),rt(e)?t:t.map(lt))}function Qr(e){return Pe(e=ce(e),"iterate",Kn),e}function Rt(e,t){return At(e)?Jt(e)?bn(lt(t)):bn(t):lt(t)}const zu={__proto__:null,[Symbol.iterator](){return wi(this,Symbol.iterator,e=>Rt(this,e))},concat(...e){return un(this).concat(...e.map(t=>X(t)?un(t):t))},entries(){return wi(this,"entries",e=>(e[1]=Rt(this,e[1]),e))},every(e,t){return vt(this,"every",e,t,void 0,arguments)},filter(e,t){return vt(this,"filter",e,t,n=>n.map(r=>Rt(this,r)),arguments)},find(e,t){return vt(this,"find",e,t,n=>Rt(this,n),arguments)},findIndex(e,t){return vt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return vt(this,"findLast",e,t,n=>Rt(this,n),arguments)},findLastIndex(e,t){return vt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return vt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ei(this,"includes",e)},indexOf(...e){return Ei(this,"indexOf",e)},join(e){return un(this).join(e)},lastIndexOf(...e){return Ei(this,"lastIndexOf",e)},map(e,t){return vt(this,"map",e,t,void 0,arguments)},pop(){return In(this,"pop")},push(...e){return In(this,"push",e)},reduce(e,...t){return ro(this,"reduce",e,t)},reduceRight(e,...t){return ro(this,"reduceRight",e,t)},shift(){return In(this,"shift")},some(e,t){return vt(this,"some",e,t,void 0,arguments)},splice(...e){return In(this,"splice",e)},toReversed(){return un(this).toReversed()},toSorted(e){return un(this).toSorted(e)},toSpliced(...e){return un(this).toSpliced(...e)},unshift(...e){return In(this,"unshift",e)},values(){return wi(this,"values",e=>Rt(this,e))}};function wi(e,t,n){const r=Qr(e),i=r[t]();return r!==e&&!rt(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const Ku=Array.prototype;function vt(e,t,n,r,i,s){const o=Qr(e),a=o!==e&&!rt(e),l=o[t];if(l!==Ku[t]){const d=l.apply(e,s);return a?lt(d):d}let c=n;o!==e&&(a?c=function(d,p){return n.call(this,Rt(e,d),p,e)}:n.length>2&&(c=function(d,p){return n.call(this,d,p,e)}));const u=l.call(o,c,r);return a&&i?i(u):u}function ro(e,t,n,r){const i=Qr(e);let s=n;return i!==e&&(rt(e)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,e)}):s=function(o,a,l){return n.call(this,o,Rt(e,a),l,e)}),i[t](s,...r)}function Ei(e,t,n){const r=ce(e);Pe(r,"iterate",Kn);const i=r[t](...n);return(i===-1||i===!1)&&Ds(n[0])?(n[0]=ce(n[0]),r[t](...n)):i}function In(e,t,n=[]){St(),Ns();const r=ce(e)[t].apply(e,n);return Ms(),It(),r}const Xu=As("__proto__,__v_isRef,__isVue"),Qa=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ut));function qu(e){Ut(e)||(e=String(e));const t=ce(this);return Pe(t,"has",e),t.hasOwnProperty(e)}class Ya{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?sc:nl:s?tl:el).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=X(t);if(!i){let l;if(o&&(l=zu[n]))return l;if(n==="hasOwnProperty")return qu}const a=Reflect.get(t,n,He(t)?t:r);if((Ut(n)?Qa.has(n):Xu(n))||(i||Pe(t,"get",n),s))return a;if(He(a)){const l=o&&Os(n)?a:a.value;return i&&_e(l)?rs(l):l}return _e(a)?i?rs(a):_n(a):a}}class Ja extends Ya{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];const o=X(t)&&Os(n);if(!this._isShallow){const c=At(s);if(!rt(r)&&!At(r)&&(s=ce(s),r=ce(r)),!o&&He(s)&&!He(r))return c||(s.value=r),!0}const a=o?Number(n)<t.length:he(t,n),l=Reflect.set(t,n,r,He(t)?t:i);return t===ce(i)&&(a?Dt(r,s)&&Et(t,"set",n,r):Et(t,"add",n,r)),l}deleteProperty(t,n){const r=he(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Et(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Ut(n)||!Qa.has(n))&&Pe(t,"has",n),r}ownKeys(t){return Pe(t,"iterate",X(t)?"length":Yt),Reflect.ownKeys(t)}}class Zu extends Ya{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Qu=new Ja,Yu=new Zu,Ju=new Ja(!0);const ns=e=>e,cr=e=>Reflect.getPrototypeOf(e);function ec(e,t,n){return function(...r){const i=this.__v_raw,s=ce(i),o=gn(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),u=n?ns:t?bn:lt;return!t&&Pe(s,"iterate",l?ts:Yt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function fr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function tc(e,t){const n={get(i){const s=this.__v_raw,o=ce(s),a=ce(i);e||(Dt(i,a)&&Pe(o,"get",i),Pe(o,"get",a));const{has:l}=cr(o),c=t?ns:e?bn:lt;if(l.call(o,i))return c(s.get(i));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Pe(ce(i),"iterate",Yt),i.size},has(i){const s=this.__v_raw,o=ce(s),a=ce(i);return e||(Dt(i,a)&&Pe(o,"has",i),Pe(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=ce(a),c=t?ns:e?bn:lt;return!e&&Pe(l,"iterate",Yt),a.forEach((u,d)=>i.call(s,c(u),c(d),o))}};return Le(n,e?{add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear")}:{add(i){!t&&!rt(i)&&!At(i)&&(i=ce(i));const s=ce(this);return cr(s).has.call(s,i)||(s.add(i),Et(s,"add",i,i)),this},set(i,s){!t&&!rt(s)&&!At(s)&&(s=ce(s));const o=ce(this),{has:a,get:l}=cr(o);let c=a.call(o,i);c||(i=ce(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,s),c?Dt(s,u)&&Et(o,"set",i,s):Et(o,"add",i,s),this},delete(i){const s=ce(this),{has:o,get:a}=cr(s);let l=o.call(s,i);l||(i=ce(i),l=o.call(s,i)),a&&a.call(s,i);const c=s.delete(i);return l&&Et(s,"delete",i,void 0),c},clear(){const i=ce(this),s=i.size!==0,o=i.clear();return s&&Et(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ec(i,e,t)}),n}function ks(e,t){const n=tc(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(he(n,i)&&i in r?n:r,i,s)}const nc={get:ks(!1,!1)},rc={get:ks(!1,!0)},ic={get:ks(!0,!1)};const el=new WeakMap,tl=new WeakMap,nl=new WeakMap,sc=new WeakMap;function oc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ac(e){return e.__v_skip||!Object.isExtensible(e)?0:oc(Nu(e))}function _n(e){return At(e)?e:Ps(e,!1,Qu,nc,el)}function lc(e){return Ps(e,!1,Ju,rc,tl)}function rs(e){return Ps(e,!0,Yu,ic,nl)}function Ps(e,t,n,r,i){if(!_e(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=ac(e);if(s===0)return e;const o=i.get(e);if(o)return o;const a=new Proxy(e,s===2?r:n);return i.set(e,a),a}function Jt(e){return At(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function At(e){return!!(e&&e.__v_isReadonly)}function rt(e){return!!(e&&e.__v_isShallow)}function Ds(e){return e?!!e.__v_raw:!1}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function uc(e){return!he(e,"__v_skip")&&Object.isExtensible(e)&&Ha(e,"__v_skip",!0),e}const lt=e=>_e(e)?_n(e):e,bn=e=>_e(e)?rs(e):e;function He(e){return e?e.__v_isRef===!0:!1}function ue(e){return cc(e,!1)}function cc(e,t){return He(e)?e:new fc(e,t)}class fc{constructor(t,n){this.dep=new Fs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ce(t),this._value=n?t:lt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||rt(t)||At(t);t=r?t:ce(t),Dt(t,n)&&(this._rawValue=t,this._value=r?t:lt(t),this.dep.trigger())}}function Ie(e){return He(e)?e.value:e}const dc={get:(e,t,n)=>t==="__v_raw"?e:Ie(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return He(i)&&!He(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function rl(e){return Jt(e)?e:new Proxy(e,dc)}class hc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Fs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return ja(this,!0),!0}get value(){const t=this.dep.track();return Xa(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function pc(e,t,n=!1){let r,i;return Q(e)?r=e:(r=e.get,i=e.set),new hc(r,i,n)}const dr={},Dr=new WeakMap;let qt;function vc(e,t=!1,n=qt){if(n){let r=Dr.get(n);r||Dr.set(n,r=[]),r.push(e)}}function gc(e,t,n=me){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,c=G=>i?G:rt(G)||i===!1||i===0?Ct(G,1):Ct(G);let u,d,p,g,R=!1,D=!1;if(He(e)?(d=()=>e.value,R=rt(e)):Jt(e)?(d=()=>c(e),R=!0):X(e)?(D=!0,R=e.some(G=>Jt(G)||rt(G)),d=()=>e.map(G=>{if(He(G))return G.value;if(Jt(G))return c(G);if(Q(G))return l?l(G,2):G()})):Q(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){St();try{p()}finally{It()}}const G=qt;qt=u;try{return l?l(e,3,[g]):e(g)}finally{qt=G}}:d=ot,t&&i){const G=d,J=i===!0?1/0:i;d=()=>Ct(G(),J)}const F=Vu(),b=()=>{u.stop(),F&&F.active&&Ts(F.effects,u)};if(s&&t){const G=t;t=(...J)=>{G(...J),b()}}let B=D?new Array(e.length).fill(dr):dr;const q=G=>{if(!(!(u.flags&1)||!u.dirty&&!G))if(t){const J=u.run();if(i||R||(D?J.some((ee,ae)=>Dt(ee,B[ae])):Dt(J,B))){p&&p();const ee=qt;qt=u;try{const ae=[J,B===dr?void 0:D&&B[0]===dr?[]:B,g];B=J,l?l(t,3,ae):t(...ae)}finally{qt=ee}}}else u.run()};return a&&a(q),u=new Va(d),u.scheduler=o?()=>o(q,!1):q,g=G=>vc(G,!1,u),p=u.onStop=()=>{const G=Dr.get(u);if(G){if(l)l(G,4);else for(const J of G)J();Dr.delete(u)}},t?r?q(!0):B=u.run():o?o(q.bind(null,!0),!0):u.run(),b.pause=u.pause.bind(u),b.resume=u.resume.bind(u),b.stop=b,b}function Ct(e,t=1/0,n){if(t<=0||!_e(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,He(e))Ct(e.value,t,n);else if(X(e))for(let r=0;r<e.length;r++)Ct(e[r],t,n);else if(Fa(e)||gn(e))e.forEach(r=>{Ct(r,t,n)});else if(Da(e)){for(const r in e)Ct(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ct(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function er(e,t,n,r){try{return r?e(...r):e()}catch(i){Yr(i,t,n)}}function ut(e,t,n,r){if(Q(e)){const i=er(e,t,n,r);return i&&ka(i)&&i.catch(s=>{Yr(s,t,n)}),i}if(X(e)){const i=[];for(let s=0;s<e.length;s++)i.push(ut(e[s],t,n,r));return i}}function Yr(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||me;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,c)===!1)return}a=a.parent}if(s){St(),er(s,null,10,[e,l,c]),It();return}}mc(e,n,i,r,o)}function mc(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const Ve=[];let ft=-1;const mn=[];let Ft=null,dn=0;const il=Promise.resolve();let Hr=null;function yc(e){const t=Hr||il;return e?t.then(this?e.bind(this):e):t}function _c(e){let t=ft+1,n=Ve.length;for(;t<n;){const r=t+n>>>1,i=Ve[r],s=Xn(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function Hs(e){if(!(e.flags&1)){const t=Xn(e),n=Ve[Ve.length-1];!n||!(e.flags&2)&&t>=Xn(n)?Ve.push(e):Ve.splice(_c(t),0,e),e.flags|=1,sl()}}function sl(){Hr||(Hr=il.then(al))}function bc(e){X(e)?mn.push(...e):Ft&&e.id===-1?Ft.splice(dn+1,0,e):e.flags&1||(mn.push(e),e.flags|=1),sl()}function io(e,t,n=ft+1){for(;n<Ve.length;n++){const r=Ve[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ve.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ol(e){if(mn.length){const t=[...new Set(mn)].sort((n,r)=>Xn(n)-Xn(r));if(mn.length=0,Ft){Ft.push(...t);return}for(Ft=t,dn=0;dn<Ft.length;dn++){const n=Ft[dn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ft=null,dn=0}}const Xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function al(e){const t=ot;try{for(ft=0;ft<Ve.length;ft++){const n=Ve[ft];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),er(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;ft<Ve.length;ft++){const n=Ve[ft];n&&(n.flags&=-2)}ft=-1,Ve.length=0,ol(),Hr=null,(Ve.length||mn.length)&&al()}}let Ye=null,ll=null;function Ur(e){const t=Ye;return Ye=e,ll=e&&e.type.__scopeId||null,t}function Mr(e,t=Ye,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Vr(-1);const s=Ur(t);let o;try{o=e(...i)}finally{Ur(s),r._d&&Vr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function so(e,t){if(Ye===null)return e;const n=ri(Ye),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,a,l=me]=t[i];s&&(Q(s)&&(s={mounted:s,updated:s}),s.deep&&Ct(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Vt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(St(),ut(l,n,8,[e.el,a,e,t]),It())}}function $c(e,t){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[e]=t}}function Rr(e,t,n=!1){const r=Dl();if(r||yn){let i=yn?yn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Q(t)?t.call(r&&r.proxy):t}}const wc=Symbol.for("v-scx"),Ec=()=>Rr(wc);function en(e,t,n){return ul(e,t,n)}function ul(e,t,n=me){const{immediate:r,deep:i,flush:s,once:o}=n,a=Le({},n),l=t&&r||!t&&s!=="post";let c;if(Qn){if(s==="sync"){const g=Ec();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=ot,g.resume=ot,g.pause=ot,g}}const u=De;a.call=(g,R,D)=>ut(g,u,R,D);let d=!1;s==="post"?a.scheduler=g=>{Ze(g,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(g,R)=>{R?g():Hs(g)}),a.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=gc(e,t,a);return Qn&&(c?c.push(p):l&&p()),p}function Cc(e,t,n){const r=this.proxy,i=Ce(e)?e.includes(".")?cl(r,e):()=>r[e]:e.bind(r,r);let s;Q(t)?s=t:(s=t.handler,n=t);const o=nr(this),a=ul(i,s.bind(r),n);return o(),a}function cl(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Sc=Symbol("_vte"),fl=e=>e.__isTeleport,wt=Symbol("_leaveCb"),hr=Symbol("_enterCb");function Ic(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Us(()=>{e.isMounted=!0}),tr(()=>{e.isUnmounting=!0}),e}const tt=[Function,Array],dl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tt,onEnter:tt,onAfterEnter:tt,onEnterCancelled:tt,onBeforeLeave:tt,onLeave:tt,onAfterLeave:tt,onLeaveCancelled:tt,onBeforeAppear:tt,onAppear:tt,onAfterAppear:tt,onAppearCancelled:tt},hl=e=>{const t=e.subTree;return t.component?hl(t.component):t},Ac={name:"BaseTransition",props:dl,setup(e,{slots:t}){const n=Dl(),r=Ic();return()=>{const i=t.default&&gl(t.default(),!0);if(!i||!i.length)return;const s=pl(i),o=ce(e),{mode:a}=o;if(r.isLeaving)return Ci(s);const l=oo(s);if(!l)return Ci(s);let c=is(l,o,r,n,d=>c=d);l.type!==We&&qn(l,c);let u=n.subTree&&oo(n.subTree);if(u&&u.type!==We&&!Zt(u,l)&&hl(n).type!==We){let d=is(u,o,r,n);if(qn(u,d),a==="out-in"&&l.type!==We)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Ci(s);a==="in-out"&&l.type!==We?d.delayLeave=(p,g,R)=>{const D=vl(r,u);D[String(u.key)]=u,p[wt]=()=>{g(),p[wt]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{R(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function pl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==We){t=n;break}}return t}const xc=Ac;function vl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function is(e,t,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:R,onLeaveCancelled:D,onBeforeAppear:F,onAppear:b,onAfterAppear:B,onAppearCancelled:q}=t,G=String(e.key),J=vl(n,e),ee=(z,A)=>{z&&ut(z,r,9,A)},ae=(z,A)=>{const H=A[1];ee(z,A),X(z)?z.every(I=>I.length<=1)&&H():z.length<=1&&H()},fe={mode:o,persisted:a,beforeEnter(z){let A=l;if(!n.isMounted)if(s)A=F||l;else return;z[wt]&&z[wt](!0);const H=J[G];H&&Zt(e,H)&&H.el[wt]&&H.el[wt](),ee(A,[z])},enter(z){let A=c,H=u,I=d;if(!n.isMounted)if(s)A=b||c,H=B||u,I=q||d;else return;let U=!1;const ne=z[hr]=se=>{U||(U=!0,se?ee(I,[z]):ee(H,[z]),fe.delayedLeave&&fe.delayedLeave(),z[hr]=void 0)};A?ae(A,[z,ne]):ne()},leave(z,A){const H=String(e.key);if(z[hr]&&z[hr](!0),n.isUnmounting)return A();ee(p,[z]);let I=!1;const U=z[wt]=ne=>{I||(I=!0,A(),ne?ee(D,[z]):ee(R,[z]),z[wt]=void 0,J[H]===e&&delete J[H])};J[H]=e,g?ae(g,[z,U]):U()},clone(z){const A=is(z,t,n,r,i);return i&&i(A),A}};return fe}function Ci(e){if(Jr(e))return e=Ht(e),e.children=null,e}function oo(e){if(!Jr(e))return fl(e.type)&&e.children?pl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Q(n.default))return n.default()}}function qn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,qn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function gl(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ne?(o.patchFlag&128&&i++,r=r.concat(gl(o.children,t,a))):(t||o.type!==We)&&r.push(a!=null?Ht(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ml(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Br=new WeakMap;function Gn(e,t,n,r,i=!1){if(X(e)){e.forEach((R,D)=>Gn(R,t&&(X(t)?t[D]:t),n,r,i));return}if(Vn(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?ri(r.component):r.el,o=i?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===me?a.refs={}:a.refs,d=a.setupState,p=ce(d),g=d===me?Ra:R=>he(p,R);if(c!=null&&c!==l){if(ao(t),Ce(c))u[c]=null,g(c)&&(d[c]=null);else if(He(c)){c.value=null;const R=t;R.k&&(u[R.k]=null)}}if(Q(l))er(l,a,12,[o,u]);else{const R=Ce(l),D=He(l);if(R||D){const F=()=>{if(e.f){const b=R?g(l)?d[l]:u[l]:l.value;if(i)X(b)&&Ts(b,s);else if(X(b))b.includes(s)||b.push(s);else if(R)u[l]=[s],g(l)&&(d[l]=u[l]);else{const B=[s];l.value=B,e.k&&(u[e.k]=B)}}else R?(u[l]=o,g(l)&&(d[l]=o)):D&&(l.value=o,e.k&&(u[e.k]=o))};if(o){const b=()=>{F(),Br.delete(e)};b.id=-1,Br.set(e,b),Ze(b,n)}else ao(e),F()}}}function ao(e){const t=Br.get(e);t&&(t.flags|=8,Br.delete(e))}Zr().requestIdleCallback;Zr().cancelIdleCallback;const Vn=e=>!!e.type.__asyncLoader,Jr=e=>e.type.__isKeepAlive;function Tc(e,t){yl(e,"a",t)}function Oc(e,t){yl(e,"da",t)}function yl(e,t,n=De){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ei(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Jr(i.parent.vnode)&&Lc(r,t,n,i),i=i.parent}}function Lc(e,t,n,r){const i=ei(t,e,r,!0);bl(()=>{Ts(r[t],i)},n)}function ei(e,t,n=De,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{St();const a=nr(n),l=ut(t,n,e,o);return a(),It(),l});return r?i.unshift(s):i.push(s),s}}const xt=e=>(t,n=De)=>{(!Qn||e==="sp")&&ei(e,(...r)=>t(...r),n)},_l=xt("bm"),Us=xt("m"),Nc=xt("bu"),Mc=xt("u"),tr=xt("bum"),bl=xt("um"),Rc=xt("sp"),Fc=xt("rtg"),kc=xt("rtc");function Pc(e,t=De){ei("ec",e,t)}const Dc="components",Hc="directives",Uc=Symbol.for("v-ndc");function Bc(e){return Gc(Hc,e)}function Gc(e,t,n=!0,r=!1){const i=Ye||De;if(i){const s=i.type;if(e===Dc){const a=xf(s,!1);if(a&&(a===t||a===it(t)||a===qr(it(t))))return s}const o=lo(i[e]||s[e],t)||lo(i.appContext[e],t);return!o&&r?s:o}}function lo(e,t){return e&&(e[t]||e[it(t)]||e[qr(it(t))])}function sn(e,t,n,r){let i;const s=n&&n[r],o=X(e);if(o||Ce(e)){const a=o&&Jt(e);let l=!1,c=!1;a&&(l=!rt(e),c=At(e),e=Qr(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(l?c?bn(lt(e[u])):lt(e[u]):e[u],u,void 0,s&&s[u])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(_e(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,s&&s[l]));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=t(e[u],u,l,s&&s[l])}}else i=[];return n&&(n[r]=i),i}const ss=e=>e?Hl(e)?ri(e):ss(e.parent):null,Wn=Le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ss(e.parent),$root:e=>ss(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Bs(e),$forceUpdate:e=>e.f||(e.f=()=>{Hs(e.update)}),$nextTick:e=>e.n||(e.n=yc.bind(e.proxy)),$watch:e=>Cc.bind(e)}),Si=(e,t)=>e!==me&&!e.__isScriptSetup&&he(e,t),Vc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Si(r,t))return o[t]=1,r[t];if(i!==me&&he(i,t))return o[t]=2,i[t];if(he(s,t))return o[t]=3,s[t];if(n!==me&&he(n,t))return o[t]=4,n[t];os&&(o[t]=0)}}const c=Wn[t];let u,d;if(c)return t==="$attrs"&&Pe(e.attrs,"get",""),c(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==me&&he(n,t))return o[t]=4,n[t];if(d=l.config.globalProperties,he(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Si(i,t)?(i[t]=n,!0):r!==me&&he(r,t)?(r[t]=n,!0):he(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:s,type:o}},a){let l;return!!(n[a]||e!==me&&a[0]!=="$"&&he(e,a)||Si(t,a)||he(s,a)||he(r,a)||he(Wn,a)||he(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:he(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function uo(e){return X(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let os=!0;function Wc(e){const t=Bs(e),n=e.proxy,r=e.ctx;os=!1,t.beforeCreate&&co(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:R,activated:D,deactivated:F,beforeDestroy:b,beforeUnmount:B,destroyed:q,unmounted:G,render:J,renderTracked:ee,renderTriggered:ae,errorCaptured:fe,serverPrefetch:z,expose:A,inheritAttrs:H,components:I,directives:U,filters:ne}=t;if(c&&jc(c,r,null),o)for(const re in o){const le=o[re];Q(le)&&(r[re]=le.bind(n))}if(i){const re=i.call(n,n);_e(re)&&(e.data=_n(re))}if(os=!0,s)for(const re in s){const le=s[re],Ke=Q(le)?le.bind(n,n):Q(le.get)?le.get.bind(n,n):ot,Ae=!Q(le)&&Q(le.set)?le.set.bind(n):ot,Fe=Qe({get:Ke,set:Ae});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:ke=>Fe.value=ke})}if(a)for(const re in a)$l(a[re],r,n,re);if(l){const re=Q(l)?l.call(n):l;Reflect.ownKeys(re).forEach(le=>{$c(le,re[le])})}u&&co(u,e,"c");function Y(re,le){X(le)?le.forEach(Ke=>re(Ke.bind(n))):le&&re(le.bind(n))}if(Y(_l,d),Y(Us,p),Y(Nc,g),Y(Mc,R),Y(Tc,D),Y(Oc,F),Y(Pc,fe),Y(kc,ee),Y(Fc,ae),Y(tr,B),Y(bl,G),Y(Rc,z),X(A))if(A.length){const re=e.exposed||(e.exposed={});A.forEach(le=>{Object.defineProperty(re,le,{get:()=>n[le],set:Ke=>n[le]=Ke,enumerable:!0})})}else e.exposed||(e.exposed={});J&&e.render===ot&&(e.render=J),H!=null&&(e.inheritAttrs=H),I&&(e.components=I),U&&(e.directives=U),z&&ml(e)}function jc(e,t,n=ot){X(e)&&(e=as(e));for(const r in e){const i=e[r];let s;_e(i)?"default"in i?s=Rr(i.from||r,i.default,!0):s=Rr(i.from||r):s=Rr(i),He(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function co(e,t,n){ut(X(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function $l(e,t,n,r){let i=r.includes(".")?cl(n,r):()=>n[r];if(Ce(e)){const s=t[e];Q(s)&&en(i,s)}else if(Q(e))en(i,e.bind(n));else if(_e(e))if(X(e))e.forEach(s=>$l(s,t,n,r));else{const s=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(s)&&en(i,s,e)}}function Bs(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Gr(l,c,o,!0)),Gr(l,t,o)),_e(t)&&s.set(t,l),l}function Gr(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Gr(e,s,n,!0),i&&i.forEach(o=>Gr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=zc[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const zc={data:fo,props:ho,emits:ho,methods:Pn,computed:Pn,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Pn,directives:Pn,watch:Xc,provide:fo,inject:Kc};function fo(e,t){return t?e?function(){return Le(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function Kc(e,t){return Pn(as(e),as(t))}function as(e){if(X(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ge(e,t){return e?[...new Set([].concat(e,t))]:t}function Pn(e,t){return e?Le(Object.create(null),e,t):t}function ho(e,t){return e?X(e)&&X(t)?[...new Set([...e,...t])]:Le(Object.create(null),uo(e),uo(t??{})):t}function Xc(e,t){if(!e)return t;if(!t)return e;const n=Le(Object.create(null),e);for(const r in t)n[r]=Ge(e[r],t[r]);return n}function wl(){return{app:null,config:{isNativeTag:Ra,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qc=0;function Zc(e,t){return function(r,i=null){Q(r)||(r=Le({},r)),i!=null&&!_e(i)&&(i=null);const s=wl(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:qc++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Lf,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&Q(u.install)?(o.add(u),u.install(c,...d)):Q(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,p){if(!l){const g=c._ceVNode||Oe(r,i);return g.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(g,u):e(g,u,p),l=!0,c._container=u,u.__vue_app__=c,ri(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ut(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=yn;yn=c;try{return u()}finally{yn=d}}};return c}}let yn=null;const Qc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${it(t)}Modifiers`]||e[`${Bt(t)}Modifiers`];function Yc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||me;let i=n;const s=t.startsWith("update:"),o=s&&Qc(r,t.slice(7));o&&(o.trim&&(i=n.map(u=>Ce(u)?u.trim():u)),o.number&&(i=n.map(Ls)));let a,l=r[a=_i(t)]||r[a=_i(it(t))];!l&&s&&(l=r[a=_i(Bt(t))]),l&&ut(l,e,6,i);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ut(c,e,6,i)}}const Jc=new WeakMap;function El(e,t,n=!1){const r=n?Jc:t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!Q(e)){const l=c=>{const u=El(c,t,!0);u&&(a=!0,Le(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(_e(e)&&r.set(e,null),null):(X(s)?s.forEach(l=>o[l]=null):Le(o,s),_e(e)&&r.set(e,o),o)}function ti(e,t){return!e||!zr(t)?!1:(t=t.slice(2).replace(/Once$/,""),he(e,t[0].toLowerCase()+t.slice(1))||he(e,Bt(t))||he(e,t))}function Ii(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:p,setupState:g,ctx:R,inheritAttrs:D}=e,F=Ur(e);let b,B;try{if(n.shapeFlag&4){const G=i||r,J=G;b=dt(c.call(J,G,u,d,g,p,R)),B=a}else{const G=t;b=dt(G.length>1?G(d,{attrs:a,slots:o,emit:l}):G(d,null)),B=t.props?a:ef(a)}}catch(G){jn.length=0,Yr(G,e,1),b=Oe(We)}let q=b;if(B&&D!==!1){const G=Object.keys(B),{shapeFlag:J}=q;G.length&&J&7&&(s&&G.some(xs)&&(B=tf(B,s)),q=Ht(q,B,!1,!0))}return n.dirs&&(q=Ht(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&qn(q,n.transition),b=q,Ur(F),b}const ef=e=>{let t;for(const n in e)(n==="class"||n==="style"||zr(n))&&((t||(t={}))[n]=e[n]);return t},tf=(e,t)=>{const n={};for(const r in e)(!xs(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function nf(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?po(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!ti(c,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?po(r,o,c):!0:!!o;return!1}function po(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!ti(n,s))return!0}return!1}function rf({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Cl={},Sl=()=>Object.create(Cl),Il=e=>Object.getPrototypeOf(e)===Cl;function sf(e,t,n,r=!1){const i={},s=Sl();e.propsDefaults=Object.create(null),Al(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:lc(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function of(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=ce(i),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(ti(e.emitsOptions,p))continue;const g=t[p];if(l)if(he(s,p))g!==s[p]&&(s[p]=g,c=!0);else{const R=it(p);i[R]=ls(l,a,R,g,e,!1)}else g!==s[p]&&(s[p]=g,c=!0)}}}else{Al(e,t,i,s)&&(c=!0);let u;for(const d in a)(!t||!he(t,d)&&((u=Bt(d))===d||!he(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ls(l,a,d,void 0,e,!0)):delete i[d]);if(s!==a)for(const d in s)(!t||!he(t,d))&&(delete s[d],c=!0)}c&&Et(e.attrs,"set","")}function Al(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Hn(l))continue;const c=t[l];let u;i&&he(i,u=it(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ti(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=ce(n),c=a||me;for(let u=0;u<s.length;u++){const d=s[u];n[d]=ls(i,l,d,c[d],e,!he(c,d))}}return o}function ls(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=he(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Q(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=nr(i);r=c[n]=l.call(null,t),u()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}const af=new WeakMap;function xl(e,t,n=!1){const r=n?af:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!Q(e)){const u=d=>{l=!0;const[p,g]=xl(d,t,!0);Le(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return _e(e)&&r.set(e,vn),vn;if(X(s))for(let u=0;u<s.length;u++){const d=it(s[u]);vo(d)&&(o[d]=me)}else if(s)for(const u in s){const d=it(u);if(vo(d)){const p=s[u],g=o[d]=X(p)||Q(p)?{type:p}:Le({},p),R=g.type;let D=!1,F=!0;if(X(R))for(let b=0;b<R.length;++b){const B=R[b],q=Q(B)&&B.name;if(q==="Boolean"){D=!0;break}else q==="String"&&(F=!1)}else D=Q(R)&&R.name==="Boolean";g[0]=D,g[1]=F,(D||he(g,"default"))&&a.push(d)}}const c=[o,a];return _e(e)&&r.set(e,c),c}function vo(e){return e[0]!=="$"&&!Hn(e)}const Gs=e=>e==="_"||e==="_ctx"||e==="$stable",Vs=e=>X(e)?e.map(dt):[dt(e)],lf=(e,t,n)=>{if(t._n)return t;const r=Mr((...i)=>Vs(t(...i)),n);return r._c=!1,r},Tl=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Gs(i))continue;const s=e[i];if(Q(s))t[i]=lf(i,s,r);else if(s!=null){const o=Vs(s);t[i]=()=>o}}},Ol=(e,t)=>{const n=Vs(t);e.slots.default=()=>n},Ll=(e,t,n)=>{for(const r in t)(n||!Gs(r))&&(e[r]=t[r])},uf=(e,t,n)=>{const r=e.slots=Sl();if(e.vnode.shapeFlag&32){const i=t._;i?(Ll(r,t,n),n&&Ha(r,"_",i,!0)):Tl(t,r)}else t&&Ol(e,t)},cf=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=me;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:Ll(i,t,n):(s=!t.$stable,Tl(t,i)),o=t}else t&&(Ol(e,t),o={default:1});if(s)for(const a in i)!Gs(a)&&o[a]==null&&delete i[a]},Ze=vf;function ff(e){return df(e)}function df(e,t){const n=Zr();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=ot,insertStaticContent:R}=e,D=(f,h,m,C=null,$=null,w=null,M=void 0,O=null,T=!!h.dynamicChildren)=>{if(f===h)return;f&&!Zt(f,h)&&(C=Gt(f),ke(f,$,w,!0),f=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:E,ref:j,shapeFlag:k}=h;switch(E){case ni:F(f,h,m,C);break;case We:b(f,h,m,C);break;case Fr:f==null&&B(h,m,C,M);break;case Ne:I(f,h,m,C,$,w,M,O,T);break;default:k&1?J(f,h,m,C,$,w,M,O,T):k&6?U(f,h,m,C,$,w,M,O,T):(k&64||k&128)&&E.process(f,h,m,C,$,w,M,O,T,Ot)}j!=null&&$?Gn(j,f&&f.ref,w,h||f,!h):j==null&&f&&f.ref!=null&&Gn(f.ref,null,w,f,!0)},F=(f,h,m,C)=>{if(f==null)r(h.el=a(h.children),m,C);else{const $=h.el=f.el;h.children!==f.children&&c($,h.children)}},b=(f,h,m,C)=>{f==null?r(h.el=l(h.children||""),m,C):h.el=f.el},B=(f,h,m,C)=>{[f.el,f.anchor]=R(f.children,h,m,C,f.el,f.anchor)},q=({el:f,anchor:h},m,C)=>{let $;for(;f&&f!==h;)$=p(f),r(f,m,C),f=$;r(h,m,C)},G=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),i(f),f=m;i(h)},J=(f,h,m,C,$,w,M,O,T)=>{if(h.type==="svg"?M="svg":h.type==="math"&&(M="mathml"),f==null)ee(h,m,C,$,w,M,O,T);else{const E=f.el&&f.el._isVueCE?f.el:null;try{E&&E._beginPatch(),z(f,h,$,w,M,O,T)}finally{E&&E._endPatch()}}},ee=(f,h,m,C,$,w,M,O)=>{let T,E;const{props:j,shapeFlag:k,transition:W,dirs:K}=f;if(T=f.el=o(f.type,w,j&&j.is,j),k&8?u(T,f.children):k&16&&fe(f.children,T,null,C,$,Ai(f,w),M,O),K&&Vt(f,null,C,"created"),ae(T,f,f.scopeId,M,C),j){for(const pe in j)pe!=="value"&&!Hn(pe)&&s(T,pe,null,j[pe],w,C);"value"in j&&s(T,"value",null,j.value,w),(E=j.onVnodeBeforeMount)&&ct(E,C,f)}K&&Vt(f,null,C,"beforeMount");const ie=hf($,W);ie&&W.beforeEnter(T),r(T,h,m),((E=j&&j.onVnodeMounted)||ie||K)&&Ze(()=>{E&&ct(E,C,f),ie&&W.enter(T),K&&Vt(f,null,C,"mounted")},$)},ae=(f,h,m,C,$)=>{if(m&&g(f,m),C)for(let w=0;w<C.length;w++)g(f,C[w]);if($){let w=$.subTree;if(h===w||Fl(w.type)&&(w.ssContent===h||w.ssFallback===h)){const M=$.vnode;ae(f,M,M.scopeId,M.slotScopeIds,$.parent)}}},fe=(f,h,m,C,$,w,M,O,T=0)=>{for(let E=T;E<f.length;E++){const j=f[E]=O?Pt(f[E]):dt(f[E]);D(null,j,h,m,C,$,w,M,O)}},z=(f,h,m,C,$,w,M)=>{const O=h.el=f.el;let{patchFlag:T,dynamicChildren:E,dirs:j}=h;T|=f.patchFlag&16;const k=f.props||me,W=h.props||me;let K;if(m&&Wt(m,!1),(K=W.onVnodeBeforeUpdate)&&ct(K,m,h,f),j&&Vt(h,f,m,"beforeUpdate"),m&&Wt(m,!0),(k.innerHTML&&W.innerHTML==null||k.textContent&&W.textContent==null)&&u(O,""),E?A(f.dynamicChildren,E,O,m,C,Ai(h,$),w):M||le(f,h,O,null,m,C,Ai(h,$),w,!1),T>0){if(T&16)H(O,k,W,m,$);else if(T&2&&k.class!==W.class&&s(O,"class",null,W.class,$),T&4&&s(O,"style",k.style,W.style,$),T&8){const ie=h.dynamicProps;for(let pe=0;pe<ie.length;pe++){const de=ie[pe],Me=k[de],xe=W[de];(xe!==Me||de==="value")&&s(O,de,Me,xe,$,m)}}T&1&&f.children!==h.children&&u(O,h.children)}else!M&&E==null&&H(O,k,W,m,$);((K=W.onVnodeUpdated)||j)&&Ze(()=>{K&&ct(K,m,h,f),j&&Vt(h,f,m,"updated")},C)},A=(f,h,m,C,$,w,M)=>{for(let O=0;O<h.length;O++){const T=f[O],E=h[O],j=T.el&&(T.type===Ne||!Zt(T,E)||T.shapeFlag&198)?d(T.el):m;D(T,E,j,null,C,$,w,M,!0)}},H=(f,h,m,C,$)=>{if(h!==m){if(h!==me)for(const w in h)!Hn(w)&&!(w in m)&&s(f,w,h[w],null,$,C);for(const w in m){if(Hn(w))continue;const M=m[w],O=h[w];M!==O&&w!=="value"&&s(f,w,O,M,$,C)}"value"in m&&s(f,"value",h.value,m.value,$)}},I=(f,h,m,C,$,w,M,O,T)=>{const E=h.el=f?f.el:a(""),j=h.anchor=f?f.anchor:a("");let{patchFlag:k,dynamicChildren:W,slotScopeIds:K}=h;K&&(O=O?O.concat(K):K),f==null?(r(E,m,C),r(j,m,C),fe(h.children||[],m,j,$,w,M,O,T)):k>0&&k&64&&W&&f.dynamicChildren&&f.dynamicChildren.length===W.length?(A(f.dynamicChildren,W,m,$,w,M,O),(h.key!=null||$&&h===$.subTree)&&Nl(f,h,!0)):le(f,h,m,j,$,w,M,O,T)},U=(f,h,m,C,$,w,M,O,T)=>{h.slotScopeIds=O,f==null?h.shapeFlag&512?$.ctx.activate(h,m,C,M,T):ne(h,m,C,$,w,M,T):se(f,h,T)},ne=(f,h,m,C,$,w,M)=>{const O=f.component=Ef(f,C,$);if(Jr(f)&&(O.ctx.renderer=Ot),Cf(O,!1,M),O.asyncDep){if($&&$.registerDep(O,Y,M),!f.el){const T=O.subTree=Oe(We);b(null,T,h,m),f.placeholder=T.el}}else Y(O,f,h,m,$,w,M)},se=(f,h,m)=>{const C=h.component=f.component;if(nf(f,h,m))if(C.asyncDep&&!C.asyncResolved){re(C,h,m);return}else C.next=h,C.update();else h.el=f.el,C.vnode=h},Y=(f,h,m,C,$,w,M)=>{const O=()=>{if(f.isMounted){let{next:k,bu:W,u:K,parent:ie,vnode:pe}=f;{const Ue=Ml(f);if(Ue){k&&(k.el=pe.el,re(f,k,M)),Ue.asyncDep.then(()=>{f.isUnmounted||O()});return}}let de=k,Me;Wt(f,!1),k?(k.el=pe.el,re(f,k,M)):k=pe,W&&Nr(W),(Me=k.props&&k.props.onVnodeBeforeUpdate)&&ct(Me,ie,k,pe),Wt(f,!0);const xe=Ii(f),je=f.subTree;f.subTree=xe,D(je,xe,d(je.el),Gt(je),f,$,w),k.el=xe.el,de===null&&rf(f,xe.el),K&&Ze(K,$),(Me=k.props&&k.props.onVnodeUpdated)&&Ze(()=>ct(Me,ie,k,pe),$)}else{let k;const{el:W,props:K}=h,{bm:ie,m:pe,parent:de,root:Me,type:xe}=f,je=Vn(h);if(Wt(f,!1),ie&&Nr(ie),!je&&(k=K&&K.onVnodeBeforeMount)&&ct(k,de,h),Wt(f,!0),W&&Cn){const Ue=()=>{f.subTree=Ii(f),Cn(W,f.subTree,f,$,null)};je&&xe.__asyncHydrate?xe.__asyncHydrate(W,f,Ue):Ue()}else{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(xe);const Ue=f.subTree=Ii(f);D(null,Ue,m,C,f,$,w),h.el=Ue.el}if(pe&&Ze(pe,$),!je&&(k=K&&K.onVnodeMounted)){const Ue=h;Ze(()=>ct(k,de,Ue),$)}(h.shapeFlag&256||de&&Vn(de.vnode)&&de.vnode.shapeFlag&256)&&f.a&&Ze(f.a,$),f.isMounted=!0,h=m=C=null}};f.scope.on();const T=f.effect=new Va(O);f.scope.off();const E=f.update=T.run.bind(T),j=f.job=T.runIfDirty.bind(T);j.i=f,j.id=f.uid,T.scheduler=()=>Hs(j),Wt(f,!0),E()},re=(f,h,m)=>{h.component=f;const C=f.vnode.props;f.vnode=h,f.next=null,of(f,h.props,C,m),cf(f,h.children,m),St(),io(f),It()},le=(f,h,m,C,$,w,M,O,T=!1)=>{const E=f&&f.children,j=f?f.shapeFlag:0,k=h.children,{patchFlag:W,shapeFlag:K}=h;if(W>0){if(W&128){Ae(E,k,m,C,$,w,M,O,T);return}else if(W&256){Ke(E,k,m,C,$,w,M,O,T);return}}K&8?(j&16&&Tt(E,$,w),k!==E&&u(m,k)):j&16?K&16?Ae(E,k,m,C,$,w,M,O,T):Tt(E,$,w,!0):(j&8&&u(m,""),K&16&&fe(k,m,C,$,w,M,O,T))},Ke=(f,h,m,C,$,w,M,O,T)=>{f=f||vn,h=h||vn;const E=f.length,j=h.length,k=Math.min(E,j);let W;for(W=0;W<k;W++){const K=h[W]=T?Pt(h[W]):dt(h[W]);D(f[W],K,m,null,$,w,M,O,T)}E>j?Tt(f,$,w,!0,!1,k):fe(h,m,C,$,w,M,O,T,k)},Ae=(f,h,m,C,$,w,M,O,T)=>{let E=0;const j=h.length;let k=f.length-1,W=j-1;for(;E<=k&&E<=W;){const K=f[E],ie=h[E]=T?Pt(h[E]):dt(h[E]);if(Zt(K,ie))D(K,ie,m,null,$,w,M,O,T);else break;E++}for(;E<=k&&E<=W;){const K=f[k],ie=h[W]=T?Pt(h[W]):dt(h[W]);if(Zt(K,ie))D(K,ie,m,null,$,w,M,O,T);else break;k--,W--}if(E>k){if(E<=W){const K=W+1,ie=K<j?h[K].el:C;for(;E<=W;)D(null,h[E]=T?Pt(h[E]):dt(h[E]),m,ie,$,w,M,O,T),E++}}else if(E>W)for(;E<=k;)ke(f[E],$,w,!0),E++;else{const K=E,ie=E,pe=new Map;for(E=ie;E<=W;E++){const Be=h[E]=T?Pt(h[E]):dt(h[E]);Be.key!=null&&pe.set(Be.key,E)}let de,Me=0;const xe=W-ie+1;let je=!1,Ue=0;const Lt=new Array(xe);for(E=0;E<xe;E++)Lt[E]=0;for(E=K;E<=k;E++){const Be=f[E];if(Me>=xe){ke(Be,$,w,!0);continue}let et;if(Be.key!=null)et=pe.get(Be.key);else for(de=ie;de<=W;de++)if(Lt[de-ie]===0&&Zt(Be,h[de])){et=de;break}et===void 0?ke(Be,$,w,!0):(Lt[et-ie]=E+1,et>=Ue?Ue=et:je=!0,D(Be,h[et],m,null,$,w,M,O,T),Me++)}const Sn=je?pf(Lt):vn;for(de=Sn.length-1,E=xe-1;E>=0;E--){const Be=ie+E,et=h[Be],ar=h[Be+1],lr=Be+1<j?ar.el||Rl(ar):C;Lt[E]===0?D(null,et,m,lr,$,w,M,O,T):je&&(de<0||E!==Sn[de]?Fe(et,m,lr,2):de--)}}},Fe=(f,h,m,C,$=null)=>{const{el:w,type:M,transition:O,children:T,shapeFlag:E}=f;if(E&6){Fe(f.component.subTree,h,m,C);return}if(E&128){f.suspense.move(h,m,C);return}if(E&64){M.move(f,h,m,Ot);return}if(M===Ne){r(w,h,m);for(let k=0;k<T.length;k++)Fe(T[k],h,m,C);r(f.anchor,h,m);return}if(M===Fr){q(f,h,m);return}if(C!==2&&E&1&&O)if(C===0)O.beforeEnter(w),r(w,h,m),Ze(()=>O.enter(w),$);else{const{leave:k,delayLeave:W,afterLeave:K}=O,ie=()=>{f.ctx.isUnmounted?i(w):r(w,h,m)},pe=()=>{w._isLeaving&&w[wt](!0),k(w,()=>{ie(),K&&K()})};W?W(w,ie,pe):pe()}else r(w,h,m)},ke=(f,h,m,C=!1,$=!1)=>{const{type:w,props:M,ref:O,children:T,dynamicChildren:E,shapeFlag:j,patchFlag:k,dirs:W,cacheIndex:K}=f;if(k===-2&&($=!1),O!=null&&(St(),Gn(O,null,m,f,!0),It()),K!=null&&(h.renderCache[K]=void 0),j&256){h.ctx.deactivate(f);return}const ie=j&1&&W,pe=!Vn(f);let de;if(pe&&(de=M&&M.onVnodeBeforeUnmount)&&ct(de,h,f),j&6)mi(f.component,m,C);else{if(j&128){f.suspense.unmount(m,C);return}ie&&Vt(f,null,h,"beforeUnmount"),j&64?f.type.remove(f,h,m,Ot,C):E&&!E.hasOnce&&(w!==Ne||k>0&&k&64)?Tt(E,h,m,!1,!0):(w===Ne&&k&384||!$&&j&16)&&Tt(T,h,m),C&&sr(f)}(pe&&(de=M&&M.onVnodeUnmounted)||ie)&&Ze(()=>{de&&ct(de,h,f),ie&&Vt(f,null,h,"unmounted")},m)},sr=f=>{const{type:h,el:m,anchor:C,transition:$}=f;if(h===Ne){gi(m,C);return}if(h===Fr){G(f);return}const w=()=>{i(m),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(f.shapeFlag&1&&$&&!$.persisted){const{leave:M,delayLeave:O}=$,T=()=>M(m,w);O?O(f.el,w,T):T()}else w()},gi=(f,h)=>{let m;for(;f!==h;)m=p(f),i(f),f=m;i(h)},mi=(f,h,m)=>{const{bum:C,scope:$,job:w,subTree:M,um:O,m:T,a:E}=f;go(T),go(E),C&&Nr(C),$.stop(),w&&(w.flags|=8,ke(M,f,h,m)),O&&Ze(O,h),Ze(()=>{f.isUnmounted=!0},h)},Tt=(f,h,m,C=!1,$=!1,w=0)=>{for(let M=w;M<f.length;M++)ke(f[M],h,m,C,$)},Gt=f=>{if(f.shapeFlag&6)return Gt(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),m=h&&h[Sc];return m?p(m):h};let ln=!1;const or=(f,h,m)=>{let C;f==null?h._vnode&&(ke(h._vnode,null,null,!0),C=h._vnode.component):D(h._vnode||null,f,h,null,null,null,m),h._vnode=f,ln||(ln=!0,io(C),ol(),ln=!1)},Ot={p:D,um:ke,m:Fe,r:sr,mt:ne,mc:fe,pc:le,pbc:A,n:Gt,o:e};let En,Cn;return t&&([En,Cn]=t(Ot)),{render:or,hydrate:En,createApp:Zc(or,En)}}function Ai({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Wt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function hf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Nl(e,t,n=!1){const r=e.children,i=t.children;if(X(r)&&X(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Pt(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Nl(o,a)),a.type===ni&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(e.type===Ne?1:0)),a.type===We&&!a.el&&(a.el=o.el)}}function pf(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function Ml(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ml(t)}function go(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Rl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Rl(t.subTree):null}const Fl=e=>e.__isSuspense;function vf(e,t){t&&t.pendingBranch?X(e)?t.effects.push(...e):t.effects.push(e):bc(e)}const Ne=Symbol.for("v-fgt"),ni=Symbol.for("v-txt"),We=Symbol.for("v-cmt"),Fr=Symbol.for("v-stc"),jn=[];let Je=null;function x(e=!1){jn.push(Je=e?null:[])}function gf(){jn.pop(),Je=jn[jn.length-1]||null}let Zn=1;function Vr(e,t=!1){Zn+=e,e<0&&Je&&t&&(Je.hasOnce=!0)}function kl(e){return e.dynamicChildren=Zn>0?Je||vn:null,gf(),Zn>0&&Je&&Je.push(e),e}function N(e,t,n,r,i,s){return kl(_(e,t,n,r,i,s,!0))}function kt(e,t,n,r,i){return kl(Oe(e,t,n,r,i,!0))}function Wr(e){return e?e.__v_isVNode===!0:!1}function Zt(e,t){return e.type===t.type&&e.key===t.key}const Pl=({key:e})=>e??null,kr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ce(e)||He(e)||Q(e)?{i:Ye,r:e,k:t,f:!!n}:e:null);function _(e,t=null,n=null,r=0,i=null,s=e===Ne?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Pl(t),ref:t&&kr(t),scopeId:ll,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ye};return a?(Ws(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),Zn>0&&!o&&Je&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Je.push(l),l}const Oe=mf;function mf(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Uc)&&(e=We),Wr(e)){const a=Ht(e,t,!0);return n&&Ws(a,n),Zn>0&&!s&&Je&&(a.shapeFlag&6?Je[Je.indexOf(e)]=a:Je.push(a)),a.patchFlag=-2,a}if(Tf(e)&&(e=e.__vccOpts),t){t=yf(t);let{class:a,style:l}=t;a&&!Ce(a)&&(t.class=rn(a)),_e(l)&&(Ds(l)&&!X(l)&&(l=Le({},l)),t.style=nn(l))}const o=Ce(e)?1:Fl(e)?128:fl(e)?64:_e(e)?4:Q(e)?2:0;return _(e,t,n,r,i,o,s,!0)}function yf(e){return e?Ds(e)||Il(e)?Le({},e):e:null}function Ht(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=e,c=t?bf(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Pl(c),ref:t&&t.ref?n&&s?X(s)?s.concat(kr(t)):[s,kr(t)]:kr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&qn(u,l.clone(u)),u}function Ee(e=" ",t=0){return Oe(ni,null,e,t)}function _f(e,t){const n=Oe(Fr,null,e);return n.staticCount=t,n}function Z(e="",t=!1){return t?(x(),kt(We,null,e)):Oe(We,null,e)}function dt(e){return e==null||typeof e=="boolean"?Oe(We):X(e)?Oe(Ne,null,e.slice()):Wr(e)?Pt(e):Oe(ni,null,String(e))}function Pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function Ws(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(X(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Ws(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Il(t)?t._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),r&64?(n=16,t=[Ee(t)]):n=8);e.children=t,e.shapeFlag|=n}function bf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=rn([t.class,r.class]));else if(i==="style")t.style=nn([t.style,r.style]);else if(zr(i)){const s=t[i],o=r[i];o&&s!==o&&!(X(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function ct(e,t,n,r=null){ut(e,t,7,[n,r])}const $f=wl();let wf=0;function Ef(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||$f,s={uid:wf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xl(r,i),emitsOptions:El(r,i),emit:null,emitted:null,propsDefaults:me,inheritAttrs:r.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Yc.bind(null,s),e.ce&&e.ce(s),s}let De=null;const Dl=()=>De||Ye;let jr,us;{const e=Zr(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};jr=t("__VUE_INSTANCE_SETTERS__",n=>De=n),us=t("__VUE_SSR_SETTERS__",n=>Qn=n)}const nr=e=>{const t=De;return jr(e),e.scope.on(),()=>{e.scope.off(),jr(t)}},mo=()=>{De&&De.scope.off(),jr(null)};function Hl(e){return e.vnode.shapeFlag&4}let Qn=!1;function Cf(e,t=!1,n=!1){t&&us(t);const{props:r,children:i}=e.vnode,s=Hl(e);sf(e,r,s,t),uf(e,i,n||t);const o=s?Sf(e,t):void 0;return t&&us(!1),o}function Sf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Vc);const{setup:r}=n;if(r){St();const i=e.setupContext=r.length>1?Af(e):null,s=nr(e),o=er(r,e,0,[e.props,i]),a=ka(o);if(It(),s(),(a||e.sp)&&!Vn(e)&&ml(e),a){if(o.then(mo,mo),t)return o.then(l=>{yo(e,l,t)}).catch(l=>{Yr(l,e,0)});e.asyncDep=o}else yo(e,o,t)}else Ul(e,t)}function yo(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_e(t)&&(e.setupState=rl(t)),Ul(e,n)}let _o;function Ul(e,t,n){const r=e.type;if(!e.render){if(!t&&_o&&!r.render){const i=r.template||Bs(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Le(Le({isCustomElement:s,delimiters:a},o),l);r.render=_o(i,c)}}e.render=r.render||ot}{const i=nr(e);St();try{Wc(e)}finally{It(),i()}}}const If={get(e,t){return Pe(e,"get",""),e[t]}};function Af(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,If),slots:e.slots,emit:e.emit,expose:t}}function ri(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(rl(uc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wn)return Wn[n](e)},has(t,n){return n in t||n in Wn}})):e.proxy}function xf(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function Tf(e){return Q(e)&&"__vccOpts"in e}const Qe=(e,t)=>pc(e,t,Qn);function Of(e,t,n){try{Vr(-1);const r=arguments.length;return r===2?_e(t)&&!X(t)?Wr(t)?Oe(e,null,[t]):Oe(e,t):Oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wr(n)&&(n=[n]),Oe(e,t,n))}finally{Vr(1)}}const Lf="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cs;const bo=typeof window<"u"&&window.trustedTypes;if(bo)try{cs=bo.createPolicy("vue",{createHTML:e=>e})}catch{}const Bl=cs?e=>cs.createHTML(e):e=>e,Nf="http://www.w3.org/2000/svg",Mf="http://www.w3.org/1998/Math/MathML",$t=typeof document<"u"?document:null,$o=$t&&$t.createElement("template"),Rf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?$t.createElementNS(Nf,e):t==="mathml"?$t.createElementNS(Mf,e):n?$t.createElement(e,{is:n}):$t.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>$t.createTextNode(e),createComment:e=>$t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{$o.innerHTML=Bl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=$o.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Nt="transition",An="animation",Yn=Symbol("_vtc"),Gl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ff=Le({},dl,Gl),kf=e=>(e.displayName="Transition",e.props=Ff,e),xi=kf((e,{slots:t})=>Of(xc,Pf(e),t)),jt=(e,t=[])=>{X(e)?e.forEach(n=>n(...t)):e&&e(...t)},wo=e=>e?X(e)?e.some(t=>t.length>1):e.length>1:!1;function Pf(e){const t={};for(const I in e)I in Gl||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,R=Df(i),D=R&&R[0],F=R&&R[1],{onBeforeEnter:b,onEnter:B,onEnterCancelled:q,onLeave:G,onLeaveCancelled:J,onBeforeAppear:ee=b,onAppear:ae=B,onAppearCancelled:fe=q}=t,z=(I,U,ne,se)=>{I._enterCancelled=se,zt(I,U?u:a),zt(I,U?c:o),ne&&ne()},A=(I,U)=>{I._isLeaving=!1,zt(I,d),zt(I,g),zt(I,p),U&&U()},H=I=>(U,ne)=>{const se=I?ae:B,Y=()=>z(U,I,ne);jt(se,[U,Y]),Eo(()=>{zt(U,I?l:s),gt(U,I?u:a),wo(se)||Co(U,r,D,Y)})};return Le(t,{onBeforeEnter(I){jt(b,[I]),gt(I,s),gt(I,o)},onBeforeAppear(I){jt(ee,[I]),gt(I,l),gt(I,c)},onEnter:H(!1),onAppear:H(!0),onLeave(I,U){I._isLeaving=!0;const ne=()=>A(I,U);gt(I,d),I._enterCancelled?(gt(I,p),Ao(I)):(Ao(I),gt(I,p)),Eo(()=>{I._isLeaving&&(zt(I,d),gt(I,g),wo(G)||Co(I,r,F,ne))}),jt(G,[I,ne])},onEnterCancelled(I){z(I,!1,void 0,!0),jt(q,[I])},onAppearCancelled(I){z(I,!0,void 0,!0),jt(fe,[I])},onLeaveCancelled(I){A(I),jt(J,[I])}})}function Df(e){if(e==null)return null;if(_e(e))return[Ti(e.enter),Ti(e.leave)];{const t=Ti(e);return[t,t]}}function Ti(e){return Fu(e)}function gt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Yn]||(e[Yn]=new Set)).add(t)}function zt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Yn];n&&(n.delete(t),n.size||(e[Yn]=void 0))}function Eo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Hf=0;function Co(e,t,n,r){const i=e._endId=++Hf,s=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Uf(e,t);if(!o)return r();const c=o+"end";let u=0;const d=()=>{e.removeEventListener(c,p),s()},p=g=>{g.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),e.addEventListener(c,p)}function Uf(e,t){const n=window.getComputedStyle(e),r=R=>(n[R]||"").split(", "),i=r(`${Nt}Delay`),s=r(`${Nt}Duration`),o=So(i,s),a=r(`${An}Delay`),l=r(`${An}Duration`),c=So(a,l);let u=null,d=0,p=0;t===Nt?o>0&&(u=Nt,d=o,p=s.length):t===An?c>0&&(u=An,d=c,p=l.length):(d=Math.max(o,c),u=d>0?o>c?Nt:An:null,p=u?u===Nt?s.length:l.length:0);const g=u===Nt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Nt}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:g}}function So(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Io(n)+Io(e[r])))}function Io(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ao(e){return(e?e.ownerDocument:document).body.offsetHeight}function Bf(e,t,n){const r=e[Yn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const xo=Symbol("_vod"),Gf=Symbol("_vsh"),Vf=Symbol(""),Wf=/(?:^|;)\s*display\s*:/;function jf(e,t,n){const r=e.style,i=Ce(n);let s=!1;if(n&&!i){if(t)if(Ce(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Pr(r,a,"")}else for(const o in t)n[o]==null&&Pr(r,o,"");for(const o in n)o==="display"&&(s=!0),Pr(r,o,n[o])}else if(i){if(t!==n){const o=r[Vf];o&&(n+=";"+o),r.cssText=n,s=Wf.test(n)}}else t&&e.removeAttribute("style");xo in e&&(e[xo]=s?r.display:"",e[Gf]&&(r.display="none"))}const To=/\s*!important$/;function Pr(e,t,n){if(X(n))n.forEach(r=>Pr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=zf(e,t);To.test(n)?e.setProperty(Bt(r),n.replace(To,""),"important"):e[r]=n}}const Oo=["Webkit","Moz","ms"],Oi={};function zf(e,t){const n=Oi[t];if(n)return n;let r=it(t);if(r!=="filter"&&r in e)return Oi[t]=r;r=qr(r);for(let i=0;i<Oo.length;i++){const s=Oo[i]+r;if(s in e)return Oi[t]=s}return t}const Lo="http://www.w3.org/1999/xlink";function No(e,t,n,r,i,s=Bu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Lo,t.slice(6,t.length)):e.setAttributeNS(Lo,t,n):n==null||s&&!Ua(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ut(n)?String(n):n)}function Mo(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Bl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ua(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function hn(e,t,n,r){e.addEventListener(t,n,r)}function Kf(e,t,n,r){e.removeEventListener(t,n,r)}const Ro=Symbol("_vei");function Xf(e,t,n,r,i=null){const s=e[Ro]||(e[Ro]={}),o=s[t];if(r&&o)o.value=r;else{const[a,l]=qf(t);if(r){const c=s[t]=Yf(r,i);hn(e,a,c,l)}else o&&(Kf(e,a,o,l),s[t]=void 0)}}const Fo=/(?:Once|Passive|Capture)$/;function qf(e){let t;if(Fo.test(e)){t={};let r;for(;r=e.match(Fo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Bt(e.slice(2)),t]}let Li=0;const Zf=Promise.resolve(),Qf=()=>Li||(Zf.then(()=>Li=0),Li=Date.now());function Yf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ut(Jf(r,n.value),t,5,[r])};return n.value=e,n.attached=Qf(),n}function Jf(e,t){if(X(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const ko=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ed=(e,t,n,r,i,s)=>{const o=i==="svg";t==="class"?Bf(e,r,o):t==="style"?jf(e,n,r):zr(t)?xs(t)||Xf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):td(e,t,r,o))?(Mo(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&No(e,t,r,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ce(r))?Mo(e,it(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),No(e,t,r,o))};function td(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ko(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ko(t)&&Ce(n)?!1:t in e}const Po=e=>{const t=e.props["onUpdate:modelValue"]||!1;return X(t)?n=>Nr(t,n):t};function nd(e){e.target.composing=!0}function Do(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ni=Symbol("_assign");function Ho(e,t,n){return t&&(e=e.trim()),n&&(e=Ls(e)),e}const rd={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Ni]=Po(i);const s=r||i.props&&i.props.type==="number";hn(e,t?"change":"input",o=>{o.target.composing||e[Ni](Ho(e.value,n,s))}),(n||s)&&hn(e,"change",()=>{e.value=Ho(e.value,n,s)}),t||(hn(e,"compositionstart",nd),hn(e,"compositionend",Do),hn(e,"change",Do))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(e[Ni]=Po(o),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?Ls(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||i&&e.value.trim()===l)||(e.value=l))}},id=["ctrl","shift","alt","meta"],sd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>id.some(n=>e[`${n}Key`]&&!t.includes(n))},ve=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<t.length;o++){const a=sd[t[o]];if(a&&a(i,t))return}return e(i,...s)})},od={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ad=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=Bt(i.key);if(t.some(o=>o===s||od[o]===s))return e(i)})},ld=Le({patchProp:ed},Rf);let Uo;function ud(){return Uo||(Uo=ff(ld))}const cd=(...e)=>{const t=ud().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=dd(r);if(!i)return;const s=t._component;!Q(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,fd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function fd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function dd(e){return Ce(e)?document.querySelector(e):e}const pn=[],nt="@@clickoutsideContext";let ii,hd=0;document.addEventListener("mousedown",e=>ii=e);document.addEventListener("mouseup",e=>{pn.forEach(t=>t[nt].documentHandler(e,ii))});document.addEventListener("touchstart",e=>{ii=e});document.addEventListener("touchend",e=>{pn.forEach(t=>t[nt].documentHandler(e,ii))});function Bo(e,t,n){return function(r={},i={}){if(!n||!n.context||!r.target||!i.target||e.contains(r.target)||e.contains(i.target)||e===r.target||n.context.popperElm&&(n.context.popperElm.contains(r.target)||n.context.popperElm.contains(i.target)))return;const s=e[nt].methodName;t.expression&&s&&n.context[s]?n.context[s]():e[nt].bindingFn&&e[nt].bindingFn()}}const pd={bind(e,t,n){pn.push(e);const r=hd++;e[nt]={id:r,documentHandler:Bo(e,t,n),methodName:t.expression,bindingFn:t.value}},update(e,t,n){e[nt].documentHandler=Bo(e,t,n),e[nt].methodName=t.expression,e[nt].bindingFn=t.value},unbind(e){let t=pn.length;for(let n=0;n<t;n++)if(pn[n][nt].id===e[nt].id){pn.splice(n,1);break}delete e[nt]}};let Mi,xn,fs="",Vl="";async function vd(e,t,n){xn||(xn=await Yi(()=>import("./marked.esm-e95f72c8.js"),[],import.meta.url),gd(xn)),Mi||(Mi=(await Yi(()=>import("./purify.es-ce17b1ad.js"),[],import.meta.url)).default),fs="https://github.com/"+t,Vl="https://raw.githubusercontent.com/"+t+"/"+n,xn.setOptions({baseUrl:`https://github.com/${t}/blob/${n}/`});let r=xn.parse(e);return Mi.sanitize(r)}function gd(e){const t=new e.Renderer;t.link=function(r,i,s){return r.startsWith("#")&&(r=fs+r),r.startsWith("./")&&(r=fs+r.slice(2)),e.Renderer.prototype.link.call(this,r,i,s)},t.image=function(r,i,s){return e.Renderer.prototype.image.call(this,n(r),i,s)},t.html=function(r){const i=/<img.*?src="(.*?)".*?>/g;return r=r.replace(i,(s,o)=>(o=n(o),s.replace(/src="(.*?)"/,`src="${o}"`))),e.Renderer.prototype.html.call(this,r)};function n(r){return!(r.startsWith("http")||r.startsWith("data:")||r.startsWith("blob:")||r.startsWith("ftp:"))&&(r=Vl+"/"+r),r}e.use({renderer:t})}const md=["README.md","README.markdown","README.rst","README.txt","README","README.mkd","readme.md"],yd="https://raw.githubusercontent.com/",Jn={Accept:"application/vnd.github.v3+json"};let Dn,Ri=new Map;document.cookie.includes("github_token")&&(Jn.Authorization="Bearer "+document.cookie.split("github_token=")[1].split(";")[0]);function _d(e){Jn.Authorization="Bearer "+e,document.cookie="github_token="+e,Te.fire("auth-changed")}async function ds(){if(Dn)return Dn;if(!Jn.Authorization)return;const e=await fetch("https://api.github.com/user",{headers:Jn});if(e.ok)return Dn=await e.json(),Dn}function Go(){return Dn}async function Wl(e){var s,o;if(Ri.has(e))return Ri.get(e);const t=await fetch(`https://api.github.com/repos/${e}`,{headers:Jn});if(!t.ok)if(t.headers.get("x-ratelimit-remaining")==="0"){let a=new Date(t.headers.get("x-ratelimit-reset")*1e3);return{state:"RATE_LIMIT_EXCEEDED",name:e,retryIn:a.toLocaleDateString()+" "+a.toLocaleTimeString()}}else{if(t.status===404)return{state:"NOT_FOUND",name:e};if(t.status===451)return{state:"ERROR",error:"Repository is unavailable due to legal reasons (http status code 451)."};{const a=["HTTP error"];try{const l=await t.json();l!=null&&l.message&&a.push("Message: "+l.message)}catch{}return a.push("Status: "+t.status),{state:"ERROR",error:a.join(". ")}}}const n=await t.json(),r=t.headers.get("x-ratelimit-remaining"),i={state:"LOADED",name:n.name,description:n.description,language:n.language,stars:Vo(n.stargazers_count),forks:Vo(n.forks_count),watchers:n.watchers_count,default_branch:n.default_branch,topics:n.topics,license:((s=n.license)==null?void 0:s.spdx_id)||((o=n.license)==null?void 0:o.key),updated_at:new Date(n.updated_at).toLocaleDateString(),remainingRequests:r};return Ri.set(e,i),i}async function bd(e,t){t||(t=["master","main"]),Array.isArray(t)||(t=[t]);for(const n of t)for(const r of md){const i=await fetch(`${yd}${e}/${n}/${r}`);if(i.ok){let s=await i.text();return{state:"LOADED",content:await vd(s,e,n)}}}}function Vo(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const ht=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},$d={directives:{ClickOutside:pd},props:{placeholder:{default:"Type here"},showClearButton:{default:!1},query:{default:""},multiInputResetToken:{default:0},delay:{default:80}},mounted(){this.updateCurrentUser(),Te.on("auth-changed",this.updateCurrentUser)},beforeUnmount(){Te.off("auth-changed",this.updateCurrentUser)},data(){return{currentSelected:-1,showSuggestions:!1,showLoading:!1,showMultiInput:!1,loadingError:null,suggestions:[],currentQuery:this.query,multiInputText:"",currentUser:null}},computed:{searchInputStyle(){return{paddingRight:this.currentQuery||this.showClearButton?"96px":"48px"}}},watch:{query(e){this.currentQuery=e},multiInputResetToken(){this.multiInputText=""}},methods:{updateCurrentUser(){ds().then(e=>{this.currentUser=e})},refresh(){this.showSuggestions&&this.getSuggestionsInternal()},menuClicked(){this.$emit("menuClicked")},hideSuggestions(){this.showSuggestions=!1,this.showLoading=!1,this.showMultiInput=!1,this.pendingKeyToShow=!0},showIfNeeded(e){this.pendingKeyToShow||(this.showSuggestions=e)},focus(){this.$refs.input.focus()},pickSuggestion(e){this.currentQuery=e.text,this.hideSuggestions(),this.$emit("selected",e)},clearSearch(){let e={shouldProceed:!0};this.$emit("beforeClear",e),e.shouldProceed&&(this.currentQuery="",this.getSuggestionsInternal(),this.$emit("cleared"))},toggleMultiInput(){const e=!this.showMultiInput;this.showSuggestions=!1,this.showLoading=!1,this.showMultiInput=e,e&&this.$nextTick(()=>{var t;(t=this.$refs.multiInput)==null||t.focus()})},closeMultiInput(){this.showMultiInput=!1},applyMultiInput(){this.$emit("multiSelected",this.multiInputText),this.closeMultiInput()},downloadMultiInputEnrichment(){this.$emit("multiDownloadEnrichment",this.multiInputText)},clearMultiInput(){this.multiInputText="",this.$emit("multiCleared"),this.$nextTick(()=>{var e;(e=this.$refs.multiInput)==null||e.focus()})},handleInput(e){this.currentQuery=e.target.value,this.$emit("inputChanged"),this.getSuggestionsInternal()},getSuggestionsInternal(){var e=this;if(e.previous&&(window.clearTimeout(e.previous),e.previous=null),!e.currentQuery){this.showSuggestions=!1;return}e.previous=window.setTimeout(function(){var t=window.fuzzySearcher.find(e.currentQuery.toLowerCase());if(Array.isArray(t))e.suggestions=t.map(Wo),e.currentSelected=t.length>0?0:-1,t.length>0&&(e.suggestions[0].selected=!0),e.showIfNeeded(t&&t.length>0);else if(t)e.loadingError=null,e.showLoading=!0,t.then(function(n){n!==void 0&&(e.showLoading=!1,n=n||[],e.suggestions=n.map(Wo),e.currentSelected=n.length>0?0:-1,n.length>0&&(e.suggestions[0].selected=!0),e.showIfNeeded(n&&n.length>0))},function(n){e.loadingError=n});else throw new Error("Could not parse suggestions response")},e.delay)},cycleTheList(e){var t=this.suggestions,n=this.currentSelected;this.pendingKeyToShow=!1;let r;if(e.which===38)r=-1;else if(e.which===40)r=1;else if(e.which===13){t[n]?this.pickSuggestion(t[n]):this.pickSuggestion({text:this.currentQuery}),e.preventDefault();return}else e.which===27&&this.hideSuggestions();!r||t.length===0||(e.preventDefault(),n>=0&&(this.suggestions[n].selected=!1),n+=r,n<0&&(n=t.length-1),n>=t.length&&(n=0),this.suggestions[n].selected=!0,this.currentSelected=n)}}};function Wo(e){return{selected:!1,text:e.text,html:e.html,lon:e.lon,lat:e.lat}}const wd={class:"ak-typeahead"},Ed=["src"],Cd={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-info"},Sd=["value","placeholder"],Id={key:1,class:"suggestions"},Ad=["onClick","innerHTML"],xd={key:2,class:"suggestions"},Td={class:"searching"},Od={key:0},Ld={key:1,class:"loading-error"},Nd={key:3,class:"multi-input-popover"},Md={class:"multi-input-actions"};function Rd(e,t,n,r,i,s){const o=Bc("click-outside");return so((x(),N("div",wd,[_("a",{href:"#",class:"menu-opener",onClick:t[0]||(t[0]=ve((...a)=>s.menuClicked&&s.menuClicked(...a),["prevent"]))},[i.currentUser?(x(),N("img",{key:0,src:i.currentUser.avatar_url,class:"avatar"},null,8,Ed)):(x(),N("svg",Cd,[...t[11]||(t[11]=[_("circle",{cx:"12",cy:"12",r:"10"},null,-1),_("line",{x1:"12",y1:"16",x2:"12",y2:"12"},null,-1),_("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"},null,-1)])]))]),_("input",{ref:"input",autofocus:"",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",value:i.currentQuery,placeholder:n.placeholder,style:nn(s.searchInputStyle),onInput:t[1]||(t[1]=(...a)=>s.handleInput&&s.handleInput(...a)),onKeydown:t[2]||(t[2]=(...a)=>s.cycleTheList&&s.cycleTheList(...a))},null,44,Sd),_("a",{href:"#",class:rn(["multi-input-toggle",{"with-clear":i.currentQuery||n.showClearButton}]),onClick:t[3]||(t[3]=ve((...a)=>s.toggleMultiInput&&s.toggleMultiInput(...a),["prevent"])),title:"Bulk select genes","aria-label":"Bulk select genes"}," ☰ ",2),i.currentQuery||n.showClearButton?(x(),N("a",{key:0,type:"submit",class:"search-submit",href:"#",onClick:t[4]||(t[4]=ve((...a)=>s.clearSearch&&s.clearSearch(...a),["prevent"]))},[...t[12]||(t[12]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle"},[_("circle",{cx:"12",cy:"12",r:"10"}),_("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),_("line",{x1:"9",y1:"9",x2:"15",y2:"15"})],-1)])])):Z("",!0),i.showSuggestions?(x(),N("ul",Id,[(x(!0),N(Ne,null,sn(i.suggestions,(a,l)=>(x(),N("li",{key:l},[_("a",{onClick:ve(c=>s.pickSuggestion(a),["prevent"]),class:rn(["suggestion",{selected:a.selected}]),href:"#",innerHTML:a.html},null,10,Ad)]))),128))])):Z("",!0),i.showLoading?(x(),N("ul",xd,[_("li",Td,[i.loadingError?Z("",!0):(x(),N("span",Od,[t[13]||(t[13]=Ee("Downloading search index for letter ",-1)),_("b",null,te(i.currentQuery[0]),1),t[14]||(t[14]=Ee("...",-1))])),i.loadingError?(x(),N("div",Ld,[t[15]||(t[15]=_("div",null,"Failed to get project completions:",-1)),_("pre",null,te(i.loadingError),1)])):Z("",!0)])])):Z("",!0),i.showMultiInput?(x(),N("div",Nd,[t[16]||(t[16]=_("div",{class:"multi-input-title"},"Paste genes/proteins",-1)),so(_("textarea",{ref:"multiInput",class:"multi-input-textarea","onUpdate:modelValue":t[5]||(t[5]=a=>i.multiInputText=a),placeholder:"Separate names by spaces, commas, semicolons, or line breaks.",onKeydown:t[6]||(t[6]=ad(ve((...a)=>s.closeMultiInput&&s.closeMultiInput(...a),["prevent"]),["esc"]))},null,544),[[rd,i.multiInputText]]),_("div",Md,[_("a",{href:"#",class:"multi-input-action",onClick:t[7]||(t[7]=ve((...a)=>s.applyMultiInput&&s.applyMultiInput(...a),["prevent"]))},"Mark on map"),_("a",{href:"#",class:"multi-input-action",onClick:t[8]||(t[8]=ve((...a)=>s.downloadMultiInputEnrichment&&s.downloadMultiInputEnrichment(...a),["prevent"]))},"Enrichment CSV"),_("a",{href:"#",class:"multi-input-action",onClick:t[9]||(t[9]=ve((...a)=>s.clearMultiInput&&s.clearMultiInput(...a),["prevent"]))},"Clear"),_("a",{href:"#",class:"multi-input-action",onClick:t[10]||(t[10]=ve((...a)=>s.closeMultiInput&&s.closeMultiInput(...a),["prevent"]))},"Cancel")])])):Z("",!0)])),[[o,s.hideSuggestions]])}const Fd=ht($d,[["render",Rd]]);const kd={class:"repo-viewer"},Pd=["href"],Dd={key:0},Hd={class:"repo-description"},Ud={class:"byline"},Bd={class:"language"},Gd={class:"stars"},Vd={class:"forks"},Wd={key:0,class:"tags"},jd=["href"],zd={class:"actions row"},Kd={key:1,class:"loading"},Xd={key:2,class:"not-found"},qd={key:3,class:"not-found"},Zd={key:4,class:"sign-in-container"},Qd=["href"],Yd={key:0},Jd={key:5,class:"rate-limit"},e0={key:6,class:"readme-content"},t0=["innerHTML"],n0={__name:"GithubRepository",props:{name:{type:String,required:!0}},emits:["listConnections"],setup(e,{emit:t}){const n=e,r=t,i=Qe(()=>"https://github.com/"+n.name);let s=ue(!1);ds().then(F=>{s.value=!F});let o=_n({state:"LOADING",name:"",description:"",language:"",stars:0,forks:0,watchers:0,branch:"",topics:[],license:"",updated_at:"",remainingRequests:0});const a=_n({state:"UNAVAILABLE",content:""});let l=null,c=null;en(()=>n.name,(F,b,B)=>{F!==b&&(l=d(),B(()=>l==null?void 0:l.cancel()))}),en(()=>o.name,(F,b,B)=>{F!==b&&(c=u(),B(()=>c==null?void 0:c.cancel()))});function u(){a.state="LOADING",c==null||c.cancel();let F=bd(n.name,o.default_branch),b=!1;F.cancel=()=>{b=!0},F.then(B=>{b||Object.assign(a,B)}).catch(B=>{console.error(B)}),c=F}function d(){l==null||l.cancel(),o.state="LOADING",a.state="UNAVAILABLE";let F=Wl(n.name),b=!1;F.cancel=()=>{b=!0},F.then(B=>{b||Object.assign(o,B)}).catch(B=>{o.state="ERROR",console.error(B),o.name=n.name}),l=F}d();function p(){let F=window.location.hostname!=="leonfrench.github.io",B=`https://github.com/login/oauth/authorize?client_id=${F?"244bf05034e7cf9158cc":"5f5bbe0c2623f5a7e738"}`;if(F){const q=`http://localhost:${window.location.port}/oauth.html`;B+=`&redirect_uri=${encodeURIComponent(q)}`}return B}function g(F){F.preventDefault();const b="width=800,height=600,resizable=yes,scrollbars=yes,status=yes";window.open(p(),"GitHub OAuth",b)}function R(F){if(F.origin!==window.location.origin)return;const b=F.data;b.source==="gh_auth"&&b.access_token&&(console.log("Received data:",b),_d(b.access_token),ds().then(B=>{s.value=!B}))}window.addEventListener("message",R),tr(()=>{window.removeEventListener("message",R)});function D(){r("listConnections")}return(F,b)=>{var B;return x(),N("div",kd,[_("div",null,[_("h2",null,[_("a",{href:i.value,target:"_blank"},te(e.name),9,Pd)]),Ie(o).state==="LOADED"?(x(),N("div",Dd,[_("div",Hd,te(Ie(o).description),1),_("div",Ud,[_("span",Bd,te(Ie(o).language),1),_("span",Gd,[b[1]||(b[1]=_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-star",viewBox:"0 0 16 16"},[_("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})],-1)),Ee(" "+te(Ie(o).stars),1)]),_("span",Vd,[b[2]||(b[2]=_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-diagram-2",viewBox:"0 0 16 16"},[_("path",{"fill-rule":"evenodd",d:"M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"})],-1)),Ee(" "+te(Ie(o).forks),1)])]),(B=Ie(o).topics)!=null&&B.length?(x(),N("div",Wd,[(x(!0),N(Ne,null,sn(Ie(o).topics,q=>(x(),N("a",{key:q,class:"tag",href:"https://github.com/topics/"+q,target:"_blank"},te(q),9,jd))),128))])):Z("",!0)])):Z("",!0),_("div",zd,[_("a",{href:"#",onClick:b[0]||(b[0]=ve(q=>D(),["prevent"]))},"List connections")]),Ie(o).state==="LOADING"?(x(),N("div",Kd," Loading description... ")):Z("",!0),Ie(o).state==="NOT_FOUND"?(x(),N("div",Xd," Repository not found. ")):Z("",!0),Ie(o).state==="ERROR"?(x(),N("div",qd,te(Ie(o).error),1)):Z("",!0),Ie(s)&&Ie(o).state!=="LOADING"?(x(),N("div",Zd,[_("a",{href:p(),onClick:g,class:"sign-in"},"Sign in with Github",8,Qd),b[4]||(b[4]=Ee(" to get higher rate limits and more information about this repository. ",-1)),Ie(o)&&Ie(o).remainingRequests!==void 0?(x(),N("span",Yd,[b[3]||(b[3]=Ee(" Remaining requests: ",-1)),_("code",null,te(Ie(o).remainingRequests),1)])):Z("",!0)])):Z("",!0),Ie(o).state==="RATE_LIMIT_EXCEEDED"?(x(),N("div",Jd,[b[5]||(b[5]=_("p",null,"Could not fetch repository information. Rate limit exceeded.",-1)),_("p",null," Please try again at "+te(Ie(o).retryIn)+". ",1)])):Z("",!0),a.state==="LOADED"?(x(),N("div",e0,[_("div",{innerHTML:a.content},null,8,t0)])):Z("",!0)])])}}},r0=ht(n0,[["__scopeId","data-v-74bd52fe"]]);const i0={class:"repo-viewer"},s0={key:0,class:"gene-full-name"},o0={class:"cluster-info"},a0={class:"cluster-line"},l0={class:"cluster-enriched-go"},u0={class:"actions row"},c0={class:"actions row"},f0=["value"],d0={key:0,class:"actions row secondary-actions"},h0={key:1,class:"loading"},p0={key:2,class:"not-found"},v0={key:3,class:"not-found"},g0={key:4,class:"summary"},m0={class:"summary-title"},y0={class:"summary-text"},_0=["href"],b0={__name:"GeneRepository",props:{name:{type:String,required:!0},clusterId:{type:[String,Number],default:null},clusterName:{type:String,default:""},clusterEnrichedGo:{type:String,default:""},metadata:{type:Object,default:null},loading:{type:Boolean,default:!1},error:{type:String,default:""},highlightColor:{type:String,default:""}},emits:["listConnections","setHighlightColor","clearHighlight"],setup(e,{emit:t}){const n=e,r=t,i=ue(null),s=ue("#8f4f2a"),o=Qe(()=>n.metadata?n.metadata[n.name]:null),a=Qe(()=>"UniProtKB/Swiss-Prot Summary"),l=Qe(()=>{if(!o.value)return"";const ee=o.value.description;return ee||"No summary available."}),c=Qe(()=>{var ae,fe;const ee=((ae=o.value)==null?void 0:ae.uniprot)||((fe=o.value)==null?void 0:fe.uniprot_entry);return ee?`https://www.uniprot.org/uniprotkb/${ee}/entry`:""}),u=Qe(()=>n.clusterName||"Unknown cluster"),d=Qe(()=>n.clusterId===null||n.clusterId===void 0?"Unknown":n.clusterId),p=Qe(()=>n.clusterEnrichedGo||"Unknown"),g=Qe(()=>n.highlightColor||s.value),R=Qe(()=>n.highlightColor?"Change highlight color":"Highlight protein");function D(){r("listConnections")}function F(){var ee;b(g.value),(ee=i.value)==null||ee.click()}function b(ee){r("setHighlightColor",ee)}function B(){r("clearHighlight")}en(()=>n.name,()=>{s.value=q()},{immediate:!0});function q(){const ee=Math.floor(Math.random()*360),ae=50+Math.floor(Math.random()*26),fe=28+Math.floor(Math.random()*15);return G(ee,ae,fe)}function G(ee,ae,fe){const z=ae/100,A=fe/100,H=(1-Math.abs(2*A-1))*z,I=ee/60,U=H*(1-Math.abs(I%2-1)),ne=A-H/2;let se=0,Y=0,re=0;return I>=0&&I<1?(se=H,Y=U):I<2?(se=U,Y=H):I<3?(Y=H,re=U):I<4?(Y=U,re=H):I<5?(se=U,re=H):(se=H,re=U),`#${J(se+ne)}${J(Y+ne)}${J(re+ne)}`}function J(ee){return Math.round(ee*255).toString(16).padStart(2,"0")}return(ee,ae)=>{var fe;return x(),N("div",i0,[_("div",null,[_("h2",null,te(e.name),1),(fe=o.value)!=null&&fe.name?(x(),N("div",s0,te(o.value.name),1)):Z("",!0),_("div",o0,[_("div",a0," Cluster: "+te(u.value)+" (ID: "+te(d.value)+") ",1),_("div",l0,"Enriched GO: "+te(p.value),1),_("div",u0,[_("a",{href:"#",class:"action-link",onClick:ae[0]||(ae[0]=ve(z=>D(),["prevent"]))},"List connections")]),_("div",c0,[_("button",{type:"button",class:"action-link action-button",onClick:ae[1]||(ae[1]=z=>F())},[_("span",null,te(R.value),1),_("span",{class:"highlight-swatch",style:nn({backgroundColor:g.value})},null,4)]),_("input",{ref_key:"colorInput",ref:i,class:"color-picker-input",type:"color",value:g.value,onInput:ae[2]||(ae[2]=z=>b(z.target.value))},null,40,f0)]),e.highlightColor?(x(),N("div",d0,[_("a",{href:"#",class:"secondary-action-link",onClick:ae[3]||(ae[3]=ve(z=>B(),["prevent"]))},"Remove highlight")])):Z("",!0)]),e.loading?(x(),N("div",h0," Loading gene metadata... ")):e.error?(x(),N("div",p0,te(e.error),1)):o.value?(x(),N("div",g0,[_("div",m0,te(a.value),1),_("div",y0,te(l.value),1),c.value?(x(),N("a",{key:0,class:"summary-link",href:c.value,target:"_blank",rel:"noopener"}," View on UniProt ",8,_0)):Z("",!0)])):(x(),N("div",v0," No metadata found for this gene. "))])])}}},$0=ht(b0,[["__scopeId","data-v-c0942dc2"]]),w0={},E0={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"24",height:"24",fill:"white",class:"loader"};function C0(e,t){return x(),N("svg",E0,[...t[0]||(t[0]=[_("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"},null,-1),_("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"},[_("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"0.8s",repeatCount:"indefinite"})],-1)])])}const S0=ht(w0,[["render",C0]]);const I0={class:"header"},A0={key:1,class:"byline"},x0={class:"language"},T0={class:"stars"},O0={class:"forks"},L0={key:0,class:"info"},N0={key:1,class:"error"},M0={__name:"SmallPreview",props:{name:{type:String,required:!0}},emits:["show-full-preview"],setup(e,{emit:t}){const n=e,r=t,i=_n({state:"LOADING",name:"",description:"",language:"",stars:0,forks:0,watchers:0,branch:"",topics:[],license:"",updated_at:"",remainingRequests:0}),s=ue(null);let o=null;en(()=>n.name,(c,u,d)=>{c!==u&&(o=a(),d(()=>o==null?void 0:o.cancel()))});function a(){o==null||o.cancel(),i.state="LOADING";let c=Wl(n.name),u=!1;c.cancel=()=>{u=!0},s.value=null,c.then(d=>{if(!u){if((d==null?void 0:d.state)==="RATE_LIMIT_EXCEEDED"){i.state="ERROR",s.value="Rate limit exceeded. Please sign in to increase your rate limit.";return}else if((d==null?void 0:d.state)==="NOT_FOUND"){i.state="ERROR",s.value="Repository not found.";return}else if((d==null?void 0:d.state)==="ERROR"){i.state="ERROR",s.value=d.error;return}Object.assign(i,d),c.state="LOADED"}}).catch(d=>{u||(console.error(d),c.state="ERROR",s.value=d)}),o=c}function l(){r("show-full-preview",n.name)}return a(),(c,u)=>(x(),N("a",{href:"#",onClick:ve(l,["prevent"]),class:"small-preview-container"},[_("div",I0,[_("span",null,te(n.name),1),i.state==="LOADING"?(x(),kt(S0,{key:0})):Z("",!0),i.state==="LOADED"?(x(),N("div",A0,[_("span",x0,te(i.language),1),_("span",T0,[u[0]||(u[0]=_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-star",viewBox:"0 0 16 16"},[_("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})],-1)),Ee(" "+te(i.stars),1)]),_("span",O0,[u[1]||(u[1]=_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-diagram-2",viewBox:"0 0 16 16"},[_("path",{"fill-rule":"evenodd",d:"M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"})],-1)),Ee(" "+te(i.forks),1)])])):Z("",!0)]),i.state==="LOADED"?(x(),N("div",L0,te(i.description),1)):Z("",!0),i.state==="ERROR"?(x(),N("div",N0,te(s.value),1)):Z("",!0)]))}},R0=ht(M0,[["__scopeId","data-v-2696d127"]]);const F0={class:"row"},k0={__name:"About",emits:["close"],setup(e,{emit:t}){const n=ue(Go()),r=t;function i(){r("close")}function s(){n.value=Go()}return Us(()=>{Te.on("auth-changed",s)}),tr(()=>{Te.off("auth-changed",s)}),(o,a)=>(x(),N("div",null,[_("div",F0,[a[1]||(a[1]=_("h2",null,"Protein Neighborhoods",-1)),_("a",{href:"#",onClick:ve(i,["prevent"]),class:"close-btn"},[...a[0]||(a[0]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle"},[_("circle",{cx:"12",cy:"12",r:"10"}),_("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),_("line",{x1:"9",y1:"9",x2:"15",y2:"15"})],-1)])])]),a[2]||(a[2]=_f('<div class="container" data-v-4efff41a><p data-v-4efff41a> The map contains <b data-v-4efff41a>17,890</b> proteins organized into <b data-v-4efff41a>458</b> neighborhood clusters. </p><p data-v-4efff41a> This data-driven map is built by combining embeddings from <a href="https://pubmed.ncbi.nlm.nih.gov/34232869/" target="_blank" rel="noopener noreferrer" data-v-4efff41a>ProtT5 by Elnaggar et al.</a>, <a href="https://www.nature.com/articles/s41592-024-02201-0" target="_blank" rel="noopener noreferrer" data-v-4efff41a>scGPT by Cui et al.</a>, and <a href="https://philechka.com/science/orthrus" target="_blank" rel="noopener noreferrer" data-v-4efff41a>Orthrus by Fradkin et al.</a> Together, these models have seen roughly 2 billion protein sequences, gene expression profiles from ~30 million cells, and compared RNA transcripts spanning hundreds of species. The 100 shared dimensions identified by Canonical Correlation Analysis (CCA) were reduced to two UMAP coordinates; proteins were then clustered into regions in this 2D space, and the resulting clusters were named with ChatGPT 5.2. </p><p data-v-4efff41a> Use the <b data-v-4efff41a>☰</b> button in the search bar to open multi-gene input and mark a batch of genes/proteins at once. You can test for multi-gene patterns in the same 100D space using a separate probe tool: <a href="https://cca-100-embed-tool.streamlit.app/" target="_blank" rel="noopener noreferrer" class="normal" data-v-4efff41a>CCA 100D embed probe</a>. </p><p data-v-4efff41a> The source code is on <a href="https://github.com/leonfrench/protein-neighborhoods" class="normal" data-v-4efff41a>Github</a>. Inspired by, and originally forked from, <a href="https://github.com/anvaka/map-of-github" target="_blank" class="normal" data-v-4efff41a>Map of GitHub</a> by @anvaka. </p></div>',1))]))}},P0=ht(k0,[["__scopeId","data-v-4efff41a"]]);const D0={__name:"UnsavedChanges",emits:["close"],setup(e,{emit:t}){const n=t,r=window.mapOwner.getPlacesGeoJSON(),i=ue(!1);function s(){n("close")}function o(){navigator.clipboard.writeText(JSON.stringify(r,null,2)),i.value=!0,setTimeout(()=>{i.value=!1},1e3)}return(a,l)=>(x(),N("div",null,[l[7]||(l[7]=_("h3",null,"Local changes",-1)),_("a",{href:"#",onClick:l[0]||(l[0]=ve(c=>s(),["prevent"])),class:"close-btn"},[...l[2]||(l[2]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle"},[_("circle",{cx:"12",cy:"12",r:"10"}),_("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),_("line",{x1:"9",y1:"9",x2:"15",y2:"15"})],-1)])]),l[8]||(l[8]=_("p",null," You have added labels for the countries, but they are not available to everyone yet. Please send a pull request to make them available to everyone 🙏. ",-1)),_("p",null,[l[3]||(l[3]=Ee(" Here is the content of the `places.geojson` with your changes. ",-1)),_("a",{href:"#",class:rn(["critical",{"copy-notification":i.value}]),onClick:l[1]||(l[1]=ve(c=>o(),["prevent"]))},te(i.value?"Copied!":"Copy"),3),l[4]||(l[4]=Ee(" them to clipboard and paste them in ",-1)),l[5]||(l[5]=_("a",{href:"https://github.com/anvaka/map-of-github-data/blob/main/v1/places.geojson",target:"_blank",class:"normal"},"the remote file",-1)),l[6]||(l[6]=Ee(". ",-1))]),_("pre",null,""+te(Ie(r))+`
`,1)]))}},H0=ht(D0,[["__scopeId","data-v-e1e3be47"]]);const U0={class:"tree-view"},B0={key:0},G0={class:"node-item"},V0={key:0,title:"External country"},W0={class:"node-item"},j0=["onClick"],z0={key:1,class:"toggle-placeholder"},K0=["onClick"],X0={key:2,title:"External country"},q0={key:0},Z0={class:"node-item"},Q0=["onClick"],Y0={key:0,title:"External country"},J0={__name:"TreeView",props:{tree:{type:Object,required:!0}},emits:["nodeSelected"],setup(e,{emit:t}){const n=t;function r(l,c=""){return`${c}_${l}`}const i=ue(new Set);function s(l,c){n("nodeSelected",l,c)}function o(l,c=""){const u=r(l,c);i.value.has(u)?i.value.delete(u):i.value.add(u)}function a(l,c=""){const u=r(l,c);return i.value.has(u)}return(l,c)=>(x(),N("div",U0,[_("ul",null,[!e.tree.children||e.tree.children.length===0?(x(),N("li",B0,[_("div",G0,[_("a",{href:"#",onClick:c[0]||(c[0]=ve(u=>s(e.tree.node,u),["prevent"]))},te(e.tree.node.name),1),e.tree.node.isExternal?(x(),N("span",V0,"E")):Z("",!0)])])):(x(!0),N(Ne,{key:1},sn(e.tree.children,u=>(x(),N("li",{key:u.node.id},[_("div",W0,[u.children&&u.children.length?(x(),N("span",{key:0,class:"toggle",onClick:d=>o(u.node.id,e.tree.node.id)},te(a(u.node.id,e.tree.node.id)?"▼":"▶"),9,j0)):(x(),N("span",z0)),_("a",{href:"#",onClick:ve(d=>s(u.node,d),["prevent"])},te(u.node.name),9,K0),u.node.isExternal?(x(),N("span",X0,"E")):Z("",!0)]),a(u.node.id,e.tree.node.id)&&u.children&&u.children.length>0?(x(),N("ul",q0,[(x(!0),N(Ne,null,sn(u.children,d=>(x(),N("li",{key:d.node.id},[_("div",Z0,[c[1]||(c[1]=_("span",{class:"toggle-placeholder"},null,-1)),_("a",{href:"#",onClick:ve(p=>s(d.node,p),["prevent"])},te(d.node.name),9,Q0),d.node.isExternal?(x(),N("span",Y0,"E")):Z("",!0)])]))),128))])):Z("",!0)]))),128))])]))}},eh=ht(J0,[["__scopeId","data-v-ccf97bf4"]]);const th={class:"neighbors-container"},nh={class:"names-container"},rh={class:"header-container"},ih={class:"header"},sh=["href"],oh={key:0,class:"minimal-header"},ah={key:1,class:"minimal-header"},lh={key:0,class:"layout-status"},uh={key:1,class:"layout-status"},ch={key:2,class:"minimal-header"},fh={key:0},dh={key:0,class:"repo-list-container"},hh={key:0},ph=["href","onClick"],vh={key:0,title:"External country"},gh={key:1,class:"loading"},mh={class:"loading-logs"},yh={key:0,class:"current-log"},_h={key:1,class:"log-messages"},bh={key:1,class:"tree-view-container"},$h={__name:"FocusRepository",props:{vm:{type:Object,required:!0}},emits:["selected","close"],setup(e,{emit:t}){const n=e,r=t;function i(l,c){r("selected",{text:l.name,lon:l.lngLat[1],lat:l.lngLat[0],skipAnimation:c.altKey})}function s(){r("close")}function o(l){return"https://github.com/"+l.name}function a(l,c){i({name:l.name||l.id,lngLat:l.lngLat||n.vm.lngLat},c)}return(l,c)=>(x(),N("div",th,[_("div",nh,[_("div",rh,[_("div",ih,[_("h2",null,[_("a",{href:o(e.vm.name),onClick:c[0]||(c[0]=ve(u=>i(e.vm,u),["prevent"])),class:"normal"},te(e.vm.name),9,sh)]),e.vm.graphData?(x(),N("div",oh,[c[6]||(c[6]=_("span",null,"Graph view active.",-1)),_("a",{href:"#",onClick:c[1]||(c[1]=ve(u=>e.vm.goBackToDirectConnections(),["prevent"])),class:rn(["inline-action-link",{disabled:e.vm.expandingGraph}])}," Exit ",2)])):Z("",!0),e.vm.graphData?(x(),N("div",ah,[e.vm.layoutRunning?(x(),N("span",lh,[c[7]||(c[7]=Ee(" Layout is running. ",-1)),_("a",{href:"#",onClick:c[2]||(c[2]=ve(u=>e.vm.setLayout(!1),["prevent"])),class:"inline-action-link"},"Stop")])):(x(),N("span",uh,[c[8]||(c[8]=Ee(" Layout is stopped. ",-1)),_("a",{href:"#",onClick:c[3]||(c[3]=ve(u=>e.vm.setLayout(!0),["prevent"])),class:"inline-action-link"},"Resume")]))])):(x(),N("div",ch,[e.vm.loading?Z("",!0):(x(),N("span",fh,[Ee(te(e.vm.repos.length)+" direct connections shown. ",1),e.vm.expandingGraph?Z("",!0):(x(),N("a",{key:0,href:"#",onClick:c[4]||(c[4]=ve(u=>e.vm.expandGraph(),["prevent"])),class:"inline-action-link"}," Expand to graph view "))]))]))]),_("a",{class:"close-btn",href:"#",onClick:c[5]||(c[5]=ve(u=>s(),["prevent"]))},[...c[9]||(c[9]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle"},[_("circle",{cx:"12",cy:"12",r:"10"}),_("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),_("line",{x1:"9",y1:"9",x2:"15",y2:"15"})],-1)])])]),e.vm.graphData?(x(),N("div",bh,[Oe(eh,{tree:e.vm.graphData,onNodeSelected:a},null,8,["tree"])])):(x(),N("div",dh,[e.vm.repos&&!e.vm.expandingGraph?(x(),N("ul",hh,[(x(!0),N(Ne,null,sn(e.vm.repos,u=>(x(),N("li",{key:u.name},[_("a",{href:o(u),onClick:ve(d=>i(u,d),["prevent"]),target:"_blank"},[Ee(te(u.name)+" ",1),u.isExternal?(x(),N("span",vh,"(external cluster)")):Z("",!0)],8,ph)]))),128))])):Z("",!0),c[11]||(c[11]=Ee()),e.vm.expandingGraph?(x(),N("div",gh,[_("div",mh,[c[10]||(c[10]=_("div",{class:"log-header"},"Loading expanded graph view...",-1)),e.vm.currentLog?(x(),N("div",yh,te(e.vm.currentLog),1)):Z("",!0),e.vm.logMessages.length>0?(x(),N("div",_h,[(x(!0),N(Ne,null,sn(e.vm.logMessages,(u,d)=>(x(),N("div",{key:d,class:"log-message"},te(u),1))),128))])):Z("",!0)])])):Z("",!0)]))])]))}},wh=ht($h,[["__scopeId","data-v-67ff9338"]]),tn=Iu(),Eh={version:8,glyphs:kn.glyphsSource,sources:{},layers:[{id:"background",type:"background",paint:{"background-color":tn.background}}]},Tn={default:"#EAEDEF",selected:"#bf2072",neighbor:"#e56aaa",textColor:tn.circleLabelsColor,textHaloColor:tn.circleLabelsHaloColor,textHaloWidth:tn.circleLabelsHaloWidth},jo=100;function cn(e){return{lng:e.x/jo,lat:e.y/jo}}function Ch(e){const t=document.querySelector(".subgraph-viewer");if(!t)throw new Error("Subgraph viewer container not found");for(t.classList.add("active");t.firstChild;)t.removeChild(t.firstChild);const n=document.createElement("div");n.style.width="100%",n.style.height="100%",t.appendChild(n);const r=Su(tn.background),i=new yi.Map({container:n,style:Eh,center:[0,0],dragRotate:!1,touchZoomRotate:{around:"center"},preserveDrawingBuffer:!0});i.dragRotate.disable(),i.touchZoomRotate.disableRotation();let s=null,o=e.graph,a=!1,l=400,c=null,u=null,d=Sh(),p=null,g=!0;return i.on("load",()=>{i.addSource("nodes",{type:"geojson",data:d}),i.addSource("selected-nodes",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),i.addLayer({id:"nodes",type:"circle",source:"nodes",paint:{"circle-color":tn.circleColor,"circle-opacity":["interpolate",["linear"],["zoom"],5,.1,15,.9],"circle-stroke-color":tn.circleStrokeColor,"circle-stroke-width":1,"circle-stroke-opacity":["interpolate",["linear"],["zoom"],8,0,15,.9],"circle-radius":["interpolate",["linear"],["zoom"],5,["*",["get","size"],.15],23,["*",["get","size"],2]]}}),i.addLayer({id:"nodes-touch-target",type:"circle",source:"nodes",paint:{"circle-color":"transparent","circle-radius":["interpolate",["linear"],["zoom"],5,12,23,24]}}),i.addLayer({id:"selected-nodes-layer",type:"circle",source:"selected-nodes",paint:{"circle-color":["get","color"]}}),i.addLayer({id:"node-labels",type:"symbol",source:"nodes",layout:{"text-field":["get","label"],"text-font":["Roboto Condensed Regular"],"text-anchor":"top","text-max-width":10,"symbol-sort-key":["-",0,["get","size"]],"symbol-spacing":500,"text-offset":[0,.5],"text-size":["interpolate",["linear"],["zoom"],8,["/",["get","size"],4],10,["+",["get","size"],8]]},paint:{"text-color":Tn.textColor,"text-halo-color":Tn.textHaloColor,"text-halo-width":Tn.textHaloWidth}}),i.addLayer({id:"selected-nodes-labels-layer",type:"symbol",source:"selected-nodes",layout:{"text-field":["get","name"],"text-font":["Roboto Condensed Regular"],"text-anchor":"top","text-max-width":10,"symbol-sort-key":["-",0,["get","textSize"]],"symbol-spacing":500,"text-offset":[0,.5],"text-size":["interpolate",["linear"],["zoom"],8,["/",["get","size"],4],10,["+",["get","size"],8]]},paint:{"text-color":"#fff","text-halo-color":["get","color"],"text-halo-width":2}}),p=Au("graph-links"),i.addLayer(p,"nodes"),i.on("click","nodes-touch-target",q),i.on("mouseenter","nodes-touch-target",()=>{i.getCanvas().style.cursor="pointer"}),i.on("mouseleave","nodes-touch-target",()=>{i.getCanvas().style.cursor=""}),R()}),Te.on("current-project",z),{dispose(){fe()},stopLayout(){l=0,e.onLayoutStatusChange&&e.onLayoutStatusChange(!1)},resumeLayout(){l=400,!a&&s&&(e.onLayoutStatusChange&&e.onLayoutStatusChange(!0),c||(c=requestAnimationFrame(D)))}};function R(){Yi(()=>import("./index-a474343a.js").then(A=>A.i),["./index-a474343a.js","./config-08cc2f6c.js","./getColorTheme-232e60bb.js","./index-ecb150f1.js","./index-a0add515.css"],import.meta.url).then(A=>{if(a)return;s=A.default(o,{timeStep:.5,springLength:10,springCoefficient:.8,gravity:-12,dragCoefficient:.9});const H=o.getNode(e.nodeId);H&&s.pinNode(H,!0),s.step(),b(),a||(c=requestAnimationFrame(D),J(e.nodeId))})}function D(){if(a||!s)return;const A=l<=1;l>0&&(l--,s.step(),b()),A?(e.onLayoutStatusChange&&e.onLayoutStatusChange(!1),g&&(g=!1,setTimeout(()=>{J(e.nodeId,!0)},200)),c=null):c=requestAnimationFrame(D)}function F(A,H,I){if(!s.getBody(A)||!s.getBody(H))return null;const U=s.getNodePosition(A),ne=s.getNodePosition(H),se=cn(U),Y=cn(ne),re=yi.MercatorCoordinate.fromLngLat(se),le=yi.MercatorCoordinate.fromLngLat(Y);return{from:[re.x,re.y],to:[le.x,le.y],color:I}}function b(){if(!s||!i.isStyleLoaded())return;const A=[];p.clear();const H={};o.forEachNode(U=>{var se;let ne=((se=U.links)==null?void 0:se.size)||0;H[U.id]=Math.max(3,Math.min(10,3+ne/5))}),o.forEachNode(U=>{if(!s.getBody(U.id))return;const ne=s.getNodePosition(U.id),se=cn(ne);A.push({type:"Feature",geometry:{type:"Point",coordinates:[se.lng,se.lat]},properties:{id:U.id,label:B(U.id),size:H[U.id]||5,originalPos:{x:ne.x,y:ne.y}}})});const I=[];o.forEachLink(U=>{const ne=u&&(U.fromId===u||U.toId===u),se=F(U.fromId,U.toId,ne?4294967295:r);se&&(ne?I.push(se):p.addLine(se))}),I.forEach(U=>p.addLine(U)),d.features=A,i.getSource("nodes").setData(d),A.length>0&&!u&&ee()}function B(A){const H=A.split("/");return H.length>1?H[H.length-1]:A}function q(A){if(!A.features||A.features.length===0)return;const H=A.features[0].properties.id;J(H,!1)}function G(A,H={}){if(!s.getBody(A))return null;const I=s.getNodePosition(A),U=cn(I);return{type:"Feature",geometry:{type:"Point",coordinates:[U.lng,U.lat]},properties:{...H,id:A,name:A}}}function J(A,H=!0){var re,le,Ke;if(!i.isStyleLoaded()||!s||A===u)return;const I={type:"FeatureCollection",features:[]},U=(re=s.getBody(A))==null?void 0:re.pos;if(!U)return;const ne=G(A,{color:Tn.selected,textSize:1.2,size:8});ne&&I.features.push(ne),p.clear();const se=[];o.forEachLinkedNode(A,Ae=>{if(!s.getBody(Ae.id))return;const Fe=G(Ae.id,{color:Tn.neighbor,textSize:1,size:6});Fe&&I.features.push(Fe);const ke=F(A,Ae.id,4294967295);ke&&se.push(ke)}),o.forEachLink(Ae=>{if(!s.getBody(Ae.fromId)||!s.getBody(Ae.toId)||Ae.fromId===A||Ae.toId===A)return;const Fe=F(Ae.fromId,Ae.toId,r);Fe&&p.addLine(Fe)}),i.getSource("selected-nodes").setData(I),se.forEach(Ae=>p.addLine(Ae)),u=A;const Y=cn(U);H&&i.flyTo({center:[Y.lng,Y.lat]}),Te.fire("repo-selected",{text:A,lat:Y.lat,lon:Y.lng,groupId:(Ke=(le=o.getNode(A))==null?void 0:le.data)==null?void 0:Ke.c})}function ee(){if(!s||a)return;const A=ae();A&&i.fitBounds(A,{padding:20,duration:500})}function ae(){if(!s||a)return null;let A=1/0,H=1/0,I=-1/0,U=-1/0;return o.forEachNode(ne=>{if(!s.getBody(ne.id))return;const se=s.getNodePosition(ne.id),Y=cn(se);Y.lng<A&&(A=Y.lng),Y.lat<H&&(H=Y.lat),Y.lng>I&&(I=Y.lng),Y.lat>U&&(U=Y.lat)}),A===1/0||H===1/0||I===-1/0||U===-1/0?null:[[A,H],[I,U]]}function fe(){for(a=!0,c&&(cancelAnimationFrame(c),c=null),Te.off("current-project",z),i&&i.remove();t.firstChild;)t.removeChild(t.firstChild);t.classList.remove("active")}function z(A){A===u||!s||s.getBody(A)&&J(A)}}function Sh(){return{type:"FeatureCollection",features:[]}}let Kt=null;class zo{constructor(t,n){this.name=t,this.groupId=n,this.repos=ue([]),this.lngLat=ue(null),this.loading=ue(!0),this.expandingGraph=ue(!1),this.graphData=ue(null),this.layoutRunning=ue(!1),this.logMessages=ue([]),this.currentLog=ue(""),xu(n).then(r=>{var o;this.loading.value=!1;let i=[];this.lngLat.value=(o=r.getNode(t))==null?void 0:o.data.l;let s=new Set;r.forEachLinkedNode(t,(a,l)=>{var c;s.has(a.id)||(s.add(a.id),i.push({name:a.id,lngLat:a.data.l,isExternal:!!((c=l.data)!=null&&c.e)}))}),i.sort((a,l)=>a.isExternal&&!l.isExternal?1:!a.isExternal&&l.isExternal?-1:0),this.repos.value=i})}goBackToDirectConnections(){this.graphData=null,this.disposeSubgraphViewer()}disposeSubgraphViewer(){Kt&&(Kt.dispose(),Kt=null)}dispose(){this.disposeSubgraphViewer()}setLayout(t){Kt&&(t?Kt.resumeLayout():Kt.stopLayout(),this.layoutRunning=t)}async expandGraph(){if(!this.expandingGraph){this.expandingGraph=!0,this.logMessages=[],this.currentLog="";try{const t=this.name,n=this.groupId,r=2,i=o=>{const l=`[${new Date().toISOString().substring(11,19)}] ${o}`;this.currentLog=l,this.logMessages=[...this.logMessages,l].slice(-50)};i("Starting graph expansion...");const s=await Tu(n,t,r,i);i("Graph data received, building tree view..."),this.graphData=Ih(s,t,r),this.disposeSubgraphViewer(),Kt=Ch({graph:s,nodeId:t,groupId:n,onLayoutStatusChange:o=>{this.layoutRunning=o}}),this.layoutRunning=!0}catch(t){console.error("Failed to expand graph:",t)}finally{this.expandingGraph=!1}}}}function Ih(e,t,n=2){var l,c,u;const r=e.getNode(t);if(!r)return{node:{id:t,name:t+" (not found)",isExternal:!1,lngLat:null},children:[]};const i={id:r.id,name:((l=r.data)==null?void 0:l.name)||r.id,isExternal:((c=r.data)==null?void 0:c.isExternal)||!1,lngLat:(u=r.data)==null?void 0:u.l};function s(d,p,g){if(p>=n)return[];const R=[];return e.forEachLinkedNode(d,D=>{var q,G,J;if(g.has(D.id))return;const F={id:D.id,name:((q=D.data)==null?void 0:q.name)||D.id,isExternal:((G=D.data)==null?void 0:G.isExternal)||!1,lngLat:(J=D.data)==null?void 0:J.l},b=new Set(g);b.add(D.id);const B=s(D.id,p+1,b);R.push({node:F,children:B})}),R}const o=new Set;o.add(t);const a=s(t,0,o);return{node:i,children:a}}/**
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
*/var Ah=typeof Object.defineProperty=="function"?Object.defineProperty:null,xh=Ah;/**
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
*/var Th=xh;function Oh(){try{return Th({},"x",{}),!0}catch{return!1}}var Lh=Oh;/**
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
*/var Nh=Object.defineProperty,Mh=Nh;/**
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
*/function Rh(e){return typeof e=="number"}var jl=Rh;/**
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
*/function Fh(e){return e[0]==="-"}function Ko(e){var t="",n;for(n=0;n<e;n++)t+="0";return t}function kh(e,t,n){var r=!1,i=t-e.length;return i<0||(Fh(e)&&(r=!0,e=e.substr(1)),e=n?e+Ko(i):Ko(i)+e,r&&(e="-"+e)),e}var zl=kh;/**
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
*/var Ph=jl,Xo=zl,Dh=String.prototype.toLowerCase,qo=String.prototype.toUpperCase;function Hh(e){var t,n,r;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;case"d":case"i":case"u":default:t=10;break}if(n=e.arg,r=parseInt(n,10),!isFinite(r)){if(!Ph(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&(e.specifier==="u"||t!==10)&&(r=4294967295+r+1),r<0?(n=(-r).toString(t),e.precision&&(n=Xo(n,e.precision,e.padRight)),n="-"+n):(n=r.toString(t),!r&&!e.precision?n="":e.precision&&(n=Xo(n,e.precision,e.padRight)),e.sign&&(n=e.sign+n)),t===16&&(e.alternate&&(n="0x"+n),n=e.specifier===qo.call(e.specifier)?qo.call(n):Dh.call(n)),t===8&&e.alternate&&n.charAt(0)!=="0"&&(n="0"+n),n}var Uh=Hh;/**
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
*/function Bh(e){return typeof e=="string"}var Gh=Bh;/**
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
*/var Vh=Math.abs,Wh=String.prototype.toLowerCase,Zo=String.prototype.toUpperCase,Xt=String.prototype.replace,jh=/e\+(\d)$/,zh=/e-(\d)$/,Kh=/^(\d+)$/,Xh=/^(\d+)e/,qh=/\.0$/,Zh=/\.0*e/,Qh=/(\..*[^0])0*e/;function Yh(e,t){var n,r;switch(t.specifier){case"e":case"E":r=e.toExponential(t.precision);break;case"f":case"F":r=e.toFixed(t.precision);break;case"g":case"G":Vh(e)<1e-4?(n=t.precision,n>0&&(n-=1),r=e.toExponential(n)):r=e.toPrecision(t.precision),t.alternate||(r=Xt.call(r,Qh,"$1e"),r=Xt.call(r,Zh,"e"),r=Xt.call(r,qh,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=Xt.call(r,jh,"e+0$1"),r=Xt.call(r,zh,"e-0$1"),t.alternate&&(r=Xt.call(r,Kh,"$1."),r=Xt.call(r,Xh,"$1.e")),e>=0&&t.sign&&(r=t.sign+r),r=t.specifier===Zo.call(t.specifier)?Zo.call(r):Wh.call(r),r}var Jh=Yh;/**
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
*/function Qo(e){var t="",n;for(n=0;n<e;n++)t+=" ";return t}function ep(e,t,n){var r=t-e.length;return r<0||(e=n?e+Qo(r):Qo(r)+e),e}var tp=ep;/**
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
*/var np=Uh,rp=Gh,ip=jl,sp=Jh,op=tp,ap=zl,lp=String.fromCharCode,up=Array.isArray;function pr(e){return e!==e}function cp(e){var t={};return t.specifier=e.specifier,t.precision=e.precision===void 0?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function fp(e){var t,n,r,i,s,o,a,l,c,u;if(!up(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",a=1,c=0;c<e.length;c++)if(r=e[c],rp(r))o+=r;else{if(t=r.precision!==void 0,r=cp(r),!r.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),n=r.flags,u=0;u<n.length;u++)switch(i=n.charAt(u),i){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if(r.width==="*"){if(r.width=parseInt(arguments[a],10),a+=1,pr(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&r.precision==="*"){if(r.precision=parseInt(arguments[a],10),a+=1,pr(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=np(r);break;case"s":r.maxWidth=t?r.precision:-1,r.arg=String(r.arg);break;case"c":if(!pr(r.arg)){if(s=parseInt(r.arg,10),s<0||s>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=pr(s)?String(r.arg):lp(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(t||(r.precision=6),l=parseFloat(r.arg),!isFinite(l)){if(!ip(r.arg))throw new Error("invalid floating-point number. Value: "+o);l=r.arg,r.padZeros=!1}r.arg=sp(l,r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=ap(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=op(r.arg,r.width,r.padRight)),o+=r.arg||"",a+=1}return o}var dp=fp;/**
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
*/var hp=dp,pp=hp;/**
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
*/var vr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function vp(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return e[4]==="."&&e[5]===void 0&&(t.precision="1"),t}function gp(e){var t,n,r,i;for(n=[],i=0,r=vr.exec(e);r;)t=e.slice(i,vr.lastIndex-r[0].length),t.length&&n.push(t),r[6]==="%"?n.push("%"):n.push(vp(r)),i=vr.lastIndex,r=vr.exec(e);return t=e.slice(i),t.length&&n.push(t),n}var mp=gp;/**
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
*/var yp=mp,_p=yp;/**
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
*/function bp(e){return typeof e=="string"}var $p=bp;/**
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
*/var wp=pp,Ep=_p,Cp=$p;function Kl(e){var t,n;if(!Cp(e))throw new TypeError(Kl("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[Ep(e)],n=1;n<arguments.length;n++)t.push(arguments[n]);return wp.apply(null,t)}var Sp=Kl;/**
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
*/var Ip=Sp,Ap=Ip;/**
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
*/var Yo=Ap,$n=Object.prototype,Jo=$n.toString,ea=$n.__defineGetter__,ta=$n.__defineSetter__,xp=$n.__lookupGetter__,Tp=$n.__lookupSetter__;function Op(e,t,n){var r,i,s,o;if(typeof e!="object"||e===null||Jo.call(e)==="[object Array]")throw new TypeError(Yo("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||Jo.call(n)==="[object Array]")throw new TypeError(Yo("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(xp.call(e,t)||Tp.call(e,t)?(r=e.__proto__,e.__proto__=$n,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),s="get"in n,o="set"in n,i&&(s||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&ea&&ea.call(e,t,n.get),o&&ta&&ta.call(e,t,n.set),e}var Lp=Op;/**
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
*/var Np=Lh,Mp=Mh,Rp=Lp,hs;Np()?hs=Mp:hs=Rp;var Fp=hs;/**
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
*/var kp=Fp;function Pp(e,t,n){kp(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Dp=Pp;/**
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
*/var Hp=Dp,si=Hp;/**
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
*/var Up=Math.floor,Bp=Up;/**
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
*/var Gp=Bp,oi=Gp;/**
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
*/var Vp=oi;function Wp(e){return Vp(e)===e&&e>=0}var jp=Wp;/**
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
*/var zp=jp,ai=zp;/**
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
*/function Kp(e){return e!==e}var Xp=Kp;/**
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
*/var qp=Xp,st=qp;/**
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
*/var Zp=Math.ceil,Qp=Zp;/**
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
*/var ev=oi,tv=Jp;function nv(e){return e<0?tv(e):ev(e)}var rv=nv;/**
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
*/var iv=rv,li=iv;/**
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
*/var sv=Number.POSITIVE_INFINITY,pt=sv;/**
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
*/var ov=pt;function av(e){return e===0&&1/e===ov}var lv=av;/**
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
*/var uv=lv,cv=uv;/**
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
*/var fv=cv,na=st,Fi=pt;function dv(e,t){return na(e)||na(t)?NaN:e===Fi||t===Fi?Fi:e===t&&e===0?fv(e)?e:t:e>t?e:t}var hv=dv;/**
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
*/var pv=hv,ui=pv;/**
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
*/var vv=Number;/**
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
*/var gv=vv,mv=gv;/**
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
*/var yv=mv,_v=yv.NEGATIVE_INFINITY,wn=_v;/**
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
*/var bv=wn;function $v(e){return e===0&&1/e===bv}var wv=$v;/**
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
*/var Ev=wv,Cv=Ev;/**
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
*/var Sv=Cv,ra=st,ki=wn;function Iv(e,t){return ra(e)||ra(t)?NaN:e===ki||t===ki?ki:e===t&&e===0?Sv(e)?e:t:e<t?e:t}var Av=Iv;/**
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
*/var xv=Av,ci=xv;/**
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
*/var Tv=1023,js=Tv;/**
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
*/var Ov=1023,Lv=Ov;/**
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
*/var Nv=-1023,Mv=Nv;/**
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
*/var Rv=-1074,Fv=Rv;/**
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
*/var kv=pt,Pv=wn;function Dv(e){return e===kv||e===Pv}var Hv=Dv;/**
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
*/var Uv=Hv,fi=Uv;/**
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
*/var Bv=2147483648,Gv=Bv;/**
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
*/var Vv=2147483647,di=Vv;/**
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
*/function Wv(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var jv=Wv;/**
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
*/var zv=jv,Kv=zv;/**
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
*/var Xv=Kv,qv=Xv();function Zv(){return qv&&typeof Symbol.toStringTag=="symbol"}var Qv=Zv;/**
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
*/var Yv=Qv,Jv=Yv;/**
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
*/var eg=Object.prototype.toString,Xl=eg;/**
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
*/var tg=Xl;function ng(e){return tg.call(e)}var rg=ng;/**
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
*/var ig=Object.prototype.hasOwnProperty;function sg(e,t){return e==null?!1:ig.call(e,t)}var og=sg;/**
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
*/var ag=og,lg=ag;/**
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
*/var ug=typeof Symbol=="function"?Symbol:void 0,cg=ug;/**
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
*/var ia=dg,hg=typeof ia=="function"?ia.toStringTag:"",pg=hg;/**
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
*/var vg=lg,On=pg,Pi=Xl;function gg(e){var t,n,r;if(e==null)return Pi.call(e);n=e[On],t=vg(e,On);try{e[On]=void 0}catch{return Pi.call(e)}return r=Pi.call(e),t?e[On]=n:delete e[On],r}var mg=gg;/**
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
*/var yg=Jv,_g=rg,bg=mg,ps;yg()?ps=bg:ps=_g;var hi=ps;/**
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
*/var $g=hi,wg=typeof Uint32Array=="function";function Eg(e){return wg&&e instanceof Uint32Array||$g(e)==="[object Uint32Array]"}var Cg=Eg;/**
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
*/var Sg=Cg,Ig=Sg;/**
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
*/var Ag=4294967295,xg=Ag;/**
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
*/var Tg=typeof Uint32Array=="function"?Uint32Array:null,Og=Tg;/**
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
*/var Lg=Ig,Di=xg,sa=Og;function Ng(){var e,t;if(typeof sa!="function")return!1;try{t=[1,3.14,-3.14,Di+1,Di+2],t=new sa(t),e=Lg(t)&&t[0]===1&&t[1]===3&&t[2]===Di-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var Mg=Ng;/**
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
*/var Rg=Mg,Fg=Rg;/**
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
*/var kg=typeof Uint32Array=="function"?Uint32Array:void 0,Pg=kg;/**
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
*/var Ug=Fg,Bg=Pg,Gg=Hg,vs;Ug()?vs=Bg:vs=Gg;var rr=vs;/**
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
*/var Vg=hi,Wg=typeof Float64Array=="function";function jg(e){return Wg&&e instanceof Float64Array||Vg(e)==="[object Float64Array]"}var zg=jg;/**
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
*/var Kg=zg,Xg=Kg;/**
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
*/var qg=typeof Float64Array=="function"?Float64Array:null,Zg=qg;/**
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
*/var Qg=Xg,oa=Zg;function Yg(){var e,t;if(typeof oa!="function")return!1;try{t=new oa([1,3.14,-3.14,NaN]),e=Qg(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var Jg=Yg;/**
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
*/var e1=Jg,t1=e1;/**
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
*/var n1=typeof Float64Array=="function"?Float64Array:void 0,r1=n1;/**
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
*/function i1(){throw new Error("not implemented")}var s1=i1;/**
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
*/var o1=t1,a1=r1,l1=s1,gs;o1()?gs=a1:gs=l1;var on=gs;/**
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
*/var u1=hi,c1=typeof Uint8Array=="function";function f1(e){return c1&&e instanceof Uint8Array||u1(e)==="[object Uint8Array]"}var d1=f1;/**
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
*/var h1=d1,p1=h1;/**
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
*/var v1=255,g1=v1;/**
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
*/var m1=typeof Uint8Array=="function"?Uint8Array:null,y1=m1;/**
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
*/var _1=p1,Hi=g1,aa=y1;function b1(){var e,t;if(typeof aa!="function")return!1;try{t=[1,3.14,-3.14,Hi+1,Hi+2],t=new aa(t),e=_1(t)&&t[0]===1&&t[1]===3&&t[2]===Hi-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var $1=b1;/**
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
*/var w1=$1,E1=w1;/**
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
*/var C1=typeof Uint8Array=="function"?Uint8Array:void 0,S1=C1;/**
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
*/function I1(){throw new Error("not implemented")}var A1=I1;/**
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
*/var x1=E1,T1=S1,O1=A1,ms;x1()?ms=T1:ms=O1;var L1=ms;/**
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
*/var N1=hi,M1=typeof Uint16Array=="function";function R1(e){return M1&&e instanceof Uint16Array||N1(e)==="[object Uint16Array]"}var F1=R1;/**
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
*/var D1=65535,H1=D1;/**
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
*/var U1=typeof Uint16Array=="function"?Uint16Array:null,B1=U1;/**
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
*/var G1=P1,Ui=H1,la=B1;function V1(){var e,t;if(typeof la!="function")return!1;try{t=[1,3.14,-3.14,Ui+1,Ui+2],t=new la(t),e=G1(t)&&t[0]===1&&t[1]===3&&t[2]===Ui-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var W1=V1;/**
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
*/var j1=W1,z1=j1;/**
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
*/var K1=typeof Uint16Array=="function"?Uint16Array:void 0,X1=K1;/**
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
*/function q1(){throw new Error("not implemented")}var Z1=q1;/**
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
*/var Q1=z1,Y1=X1,J1=Z1,ys;Q1()?ys=Y1:ys=J1;var em=ys;/**
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
*/var tm=L1,nm=em,rm={uint16:nm,uint8:tm},im=rm;/**
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
*/var ua=im,ql;function sm(){var e,t;return e=new ua.uint16(1),e[0]=4660,t=new ua.uint8(e.buffer),t[0]===52}ql=sm();var om=ql;/**
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
*/var am=om,ir=am;/**
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
*/var lm=ir,Zl,_s,bs;lm===!0?(_s=1,bs=0):(_s=0,bs=1);Zl={HIGH:_s,LOW:bs};var um=Zl;/**
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
*/var cm=rr,fm=on,Ql=um,Yl=new fm(1),ca=new cm(Yl.buffer),dm=Ql.HIGH,hm=Ql.LOW;function pm(e,t,n,r){return Yl[0]=e,t[r]=ca[dm],t[r+n]=ca[hm],t}var Jl=pm;/**
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
*/var vm=Jl;function gm(e){return vm(e,[0,0],1,0)}var mm=gm;/**
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
*/var ym=si,eu=mm,_m=Jl;ym(eu,"assign",_m);var tu=eu;/**
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
*/var bm=ir,$s;bm===!0?$s=1:$s=0;var $m=$s;/**
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
*/var wm=rr,Em=on,Cm=$m,nu=new Em(1),Sm=new wm(nu.buffer);function Im(e){return nu[0]=e,Sm[Cm]}var Am=Im;/**
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
*/var xm=Am,an=xm;/**
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
*/var Tm=ir,ru,ws,Es;Tm===!0?(ws=1,Es=0):(ws=0,Es=1);ru={HIGH:ws,LOW:Es};var Om=ru;/**
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
*/var Lm=rr,Nm=on,iu=Om,su=new Nm(1),fa=new Lm(su.buffer),Mm=iu.HIGH,Rm=iu.LOW;function Fm(e,t){return fa[Mm]=e,fa[Rm]=t,su[0]}var km=Fm;/**
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
*/var Pm=km,zs=Pm;/**
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
*/var Dm=Gv,Hm=di,Um=tu,Bm=an,Gm=zs,Bi=[0,0];function Vm(e,t){var n,r;return Um.assign(e,Bi,1,0),n=Bi[0],n&=Hm,r=Bm(t),r&=Dm,n|=r,Gm(n,Bi[1])}var Wm=Vm;/**
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
*/var jm=Wm,ou=jm;/**
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
*/var zm=22250738585072014e-324,Km=zm;/**
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
*/function Xm(e){return Math.abs(e)}var qm=Xm;/**
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
*/var Zm=qm,Ks=Zm;/**
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
*/var Qm=Km,Ym=fi,Jm=st,ey=Ks,ty=4503599627370496;function ny(e,t,n,r){return Jm(e)||Ym(e)?(t[r]=e,t[r+n]=0,t):e!==0&&ey(e)<Qm?(t[r]=e*ty,t[r+n]=-52,t):(t[r]=e,t[r+n]=0,t)}var au=ny;/**
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
*/var ry=au;function iy(e){return ry(e,[0,0],1,0)}var sy=iy;/**
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
*/var oy=si,lu=sy,ay=au;oy(lu,"assign",ay);var ly=lu;/**
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
*/var uy=2146435072,pi=uy;/**
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
*/var cy=an,fy=pi,dy=js;function hy(e){var t=cy(e);return t=(t&fy)>>>20,t-dy|0}var py=hy;/**
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
*/var vy=py,gy=vy;/**
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
*/var my=pt,yy=wn,_y=js,by=Lv,$y=Mv,wy=Fv,Ey=st,Cy=fi,Sy=ou,Iy=ly.assign,Ay=gy,xy=tu,Ty=zs,Oy=2220446049250313e-31,Ly=2148532223,Gi=[0,0],Vi=[0,0];function Ny(e,t){var n,r;return t===0||e===0||Ey(e)||Cy(e)?e:(Iy(e,Gi,1,0),e=Gi[0],t+=Gi[1],t+=Ay(e),t<wy?Sy(0,e):t>by?e<0?yy:my:(t<=$y?(t+=52,r=Oy):r=1,xy.assign(e,Vi,1,0),n=Vi[0],n&=Ly,n|=t+_y<<20,r*Ty(n,Vi[1])))}var My=Ny;/**
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
*/var Ry=My,uu=Ry;/**
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
*/function Fy(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var ky=Fy;/**
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
*/var Py=uu,Dy=ky;function Hy(e,t,n){var r,i,s,o;return r=e-t,i=r*r,s=r-i*Dy(i),o=1-(t-r*s/(2-s)-e),Py(o,n)}var Uy=Hy;/**
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
*/var By=st,da=li,Gy=wn,ha=pt,Vy=Uy,Wy=.6931471803691238,jy=19082149292705877e-26,pa=1.4426950408889634,zy=709.782712893384,Ky=-745.1332191019411,cu=1/(1<<28),Xy=-cu;function qy(e){var t,n,r;return By(e)||e===ha?e:e===Gy?0:e>zy?ha:e<Ky?0:e>Xy&&e<cu?1+e:(e<0?r=da(pa*e-.5):r=da(pa*e+.5),t=e-r*Wy,n=r*jy,Vy(t,n,r))}var Zy=qy;/**
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
*/var Qy=Zy,fu=Qy;/**
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
*/var Yy=oi;function Jy(e){return Yy(e)===e&&e<0}var e_=Jy;/**
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
*/var t_=e_,n_=t_;/**
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
*/var r_=ir,Cs;r_===!0?Cs=1:Cs=0;var i_=Cs;/**
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
*/var s_=rr,o_=on,a_=i_,Ss=new o_(1),l_=new s_(Ss.buffer);function u_(e,t){return Ss[0]=e,l_[a_]=t>>>0,Ss[0]}var c_=u_;/**
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
*/var f_=c_,d_=f_;/**
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
*/function h_(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var p_=h_;/**
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
*/function v_(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var g_=v_;/**
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
*/var va=an,m_=d_,y_=st,__=js,b_=wn,$_=p_,w_=g_,gr=.6931471803691238,mr=19082149292705877e-26,E_=0x40000000000000,C_=.3333333333333333,ga=1048575,S_=2146435072,I_=1048576,A_=1072693248;function x_(e){var t,n,r,i,s,o,a,l,c,u,d,p;return e===0?b_:y_(e)||e<0?NaN:(n=va(e),s=0,n<I_&&(s-=54,e*=E_,n=va(e)),n>=S_?e+e:(s+=(n>>20)-__|0,n&=ga,l=n+614244&1048576|0,e=m_(e,n|l^A_),s+=l>>20|0,a=e-1,(ga&2+n)<3?a===0?s===0?0:s*gr+s*mr:(o=a*a*(.5-C_*a),s===0?a-o:s*gr-(o-s*mr-a)):(u=a/(2+a),p=u*u,l=n-398458|0,d=p*p,c=440401-n|0,i=d*$_(d),r=p*w_(d),l|=c,o=r+i,l>0?(t=.5*a*a,s===0?a-(t-u*(t+o)):s*gr-(t-(u*(t+o)+s*mr)-a)):s===0?a-u*(a-o):s*gr-(u*(a-o)-s*mr-a))))}var T_=x_;/**
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
*/var O_=T_,L_=O_;/**
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
*/function N_(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var M_=N_;/**
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
*/function R_(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var F_=R_;/**
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
*/var k_=M_,P_=F_;function D_(e,t){var n,r,i,s;return s=e*e,i=s*s,r=s*k_(s),r+=i*i*P_(s),n=.5*s,i=1-n,i+(1-i-n+(s*r-e*t))}var H_=D_;/**
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
*/var U_=H_,du=U_;/**
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
*/var ma=-.16666666666666632,B_=.00833333333332249,G_=-.0001984126982985795,V_=27557313707070068e-22,W_=-25050760253406863e-24,j_=158969099521155e-24;function z_(e,t){var n,r,i,s;return s=e*e,i=s*s,n=B_+s*(G_+s*V_)+s*i*(W_+s*j_),r=s*e,t===0?e+r*(ma+s*n):e-(s*(.5*t-r*n)-t-r*ma)}var K_=z_;/**
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
*/var X_=K_,hu=X_;/**
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
*/var q_=1048575,Z_=q_;/**
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
*/var Q_=ir,Is;Q_===!0?Is=0:Is=1;var Y_=Is;/**
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
*/var J_=rr,e2=on,t2=Y_,pu=new e2(1),n2=new J_(pu.buffer);function r2(e){return pu[0]=e,n2[t2]}var i2=r2;/**
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
*/var s2=i2,o2=s2;/**
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
*/function a2(e,t){var n,r;for(n=[],r=0;r<t;r++)n.push(e);return n}var l2=a2;/**
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
*/var u2=l2,c2=u2;/**
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
*/var f2=c2;function d2(e){return f2(0,e)}var h2=d2;/**
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
*/var p2=h2,v2=p2;/**
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
*/var g2=oi,yr=uu,vi=v2,vu=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],m2=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Wi=16777216,ji=5960464477539063e-23,_r=vi(20),ya=vi(20),br=vi(20),Re=vi(20);function gu(e,t,n,r,i,s,o,a,l){var c,u,d,p,g,R,D,F,b;for(p=s,b=r[n],F=n,g=0;F>0;g++)u=ji*b|0,Re[g]=b-Wi*u|0,b=r[F-1]+u,F-=1;if(b=yr(b,i),b-=8*g2(b*.125),D=b|0,b-=D,d=0,i>0?(g=Re[n-1]>>24-i,D+=g,Re[n-1]-=g<<24-i,d=Re[n-1]>>23-i):i===0?d=Re[n-1]>>23:b>=.5&&(d=2),d>0){for(D+=1,c=0,g=0;g<n;g++)F=Re[g],c===0?F!==0&&(c=1,Re[g]=16777216-F):Re[g]=16777215-F;if(i>0)switch(i){case 1:Re[n-1]&=8388607;break;case 2:Re[n-1]&=4194303;break}d===2&&(b=1-b,c!==0&&(b-=yr(1,i)))}if(b===0){for(F=0,g=n-1;g>=s;g--)F|=Re[g];if(F===0){for(R=1;Re[s-R]===0;R++);for(g=n+1;g<=n+R;g++){for(l[a+g]=vu[o+g],u=0,F=0;F<=a;F++)u+=e[F]*l[a+(g-F)];r[g]=u}return n+=R,gu(e,t,n,r,i,s,o,a,l)}for(n-=1,i-=24;Re[n]===0;)n-=1,i-=24}else b=yr(b,-i),b>=Wi?(u=ji*b|0,Re[n]=b-Wi*u|0,n+=1,i+=24,Re[n]=u):Re[n]=b|0;for(u=yr(1,i),g=n;g>=0;g--)r[g]=u*Re[g],u*=ji;for(g=n;g>=0;g--){for(u=0,R=0;R<=p&&R<=n-g;R++)u+=m2[R]*r[g+R];br[n-g]=u}for(u=0,g=n;g>=0;g--)u+=br[g];for(d===0?t[0]=u:t[0]=-u,u=br[0]-u,g=1;g<=n;g++)u+=br[g];return d===0?t[1]=u:t[1]=-u,D&7}function y2(e,t,n,r){var i,s,o,a,l,c,u,d,p;for(s=4,a=r-1,o=(n-3)/24|0,o<0&&(o=0),c=n-24*(o+1),d=o-a,p=a+s,u=0;u<=p;u++)d<0?_r[u]=0:_r[u]=vu[d],d+=1;for(u=0;u<=s;u++){for(i=0,d=0;d<=a;d++)i+=e[d]*_r[a+(u-d)];ya[u]=i}return l=s,gu(e,t,l,ya,c,s,o,a,_r)}var _2=y2;/**
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
*/var b2=Math.round,$2=b2;/**
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
*/var w2=$2,E2=w2;/**
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
*/var C2=E2,_a=an,S2=.6366197723675814,I2=1.5707963267341256,A2=6077100506506192e-26,x2=6077100506303966e-26,T2=20222662487959506e-37,O2=20222662487111665e-37,L2=84784276603689e-45,ba=2047;function N2(e,t,n){var r,i,s,o,a,l,c;return i=C2(e*S2),o=e-i*I2,a=i*A2,c=t>>20|0,n[0]=o-a,r=_a(n[0]),l=c-(r>>20&ba),l>16&&(s=o,a=i*x2,o=s-a,a=i*T2-(s-o-a),n[0]=o-a,r=_a(n[0]),l=c-(r>>20&ba),l>49&&(s=o,a=i*O2,o=s-a,a=i*L2-(s-o-a),n[0]=o-a)),n[1]=o-n[0]-a,i}var M2=N2;/**
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
*/var R2=di,F2=pi,k2=Z_,P2=an,D2=o2,H2=zs,U2=_2,$r=M2,B2=0,G2=16777216,Mt=1.5707963267341256,Qt=6077100506506192e-26,wr=2*Qt,Er=3*Qt,Cr=4*Qt,V2=598523,W2=1072243195,j2=1073928572,z2=1074752122,K2=1074977148,X2=1075183036,q2=1075388923,Z2=1075594811,Q2=1094263291,Ln=[0,0,0],Nn=[0,0];function Y2(e,t){var n,r,i,s,o,a,l,c;if(i=P2(e)|0,s=i&R2|0,s<=W2)return t[0]=e,t[1]=0,0;if(s<=z2)return(s&k2)===V2?$r(e,s,t):s<=j2?i>0?(c=e-Mt,t[0]=c-Qt,t[1]=c-t[0]-Qt,1):(c=e+Mt,t[0]=c+Qt,t[1]=c-t[0]+Qt,-1):i>0?(c=e-2*Mt,t[0]=c-wr,t[1]=c-t[0]-wr,2):(c=e+2*Mt,t[0]=c+wr,t[1]=c-t[0]+wr,-2);if(s<=Z2)return s<=X2?s===K2?$r(e,s,t):i>0?(c=e-3*Mt,t[0]=c-Er,t[1]=c-t[0]-Er,3):(c=e+3*Mt,t[0]=c+Er,t[1]=c-t[0]+Er,-3):s===q2?$r(e,s,t):i>0?(c=e-4*Mt,t[0]=c-Cr,t[1]=c-t[0]-Cr,4):(c=e+4*Mt,t[0]=c+Cr,t[1]=c-t[0]+Cr,-4);if(s<Q2)return $r(e,s,t);if(s>=F2)return t[0]=NaN,t[1]=NaN,0;for(n=D2(e),r=(s>>20)-1046,c=H2(s-(r<<20|0),n),a=0;a<2;a++)Ln[a]=c|0,c=(c-Ln[a])*G2;for(Ln[2]=c,o=3;Ln[o-1]===B2;)o-=1;return l=U2(Ln,Nn,r,o),i<0?(t[0]=-Nn[0],t[1]=-Nn[1],-l):(t[0]=Nn[0],t[1]=Nn[1],l)}var J2=Y2;/**
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
*/var e5=J2,mu=e5;/**
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
*/var t5=an,zi=du,$a=hu,n5=mu,r5=di,i5=pi,mt=[0,0],s5=1072243195,o5=1044381696;function a5(e){var t,n;if(t=t5(e),t&=r5,t<=s5)return t<o5?1:zi(e,0);if(t>=i5)return NaN;switch(n=n5(e,mt),n&3){case 0:return zi(mt[0],mt[1]);case 1:return-$a(mt[0],mt[1]);case 2:return-zi(mt[0],mt[1]);default:return $a(mt[0],mt[1])}}var l5=a5;/**
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
*/var u5=l5,c5=u5;/**
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
*/var f5=di,d5=pi,h5=an,wa=du,Ki=hu,p5=mu,v5=1072243195,g5=1045430272,yt=[0,0];function m5(e){var t,n;if(t=h5(e),t&=f5,t<=v5)return t<g5?e:Ki(e,0);if(t>=d5)return NaN;switch(n=p5(e,yt),n&3){case 0:return Ki(yt[0],yt[1]);case 1:return wa(yt[0],yt[1]);case 2:return-Ki(yt[0],yt[1]);default:return-wa(yt[0],yt[1])}}var y5=m5;/**
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
*/var _5=y5,b5=_5;/**
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
*/var $5=3.141592653589793,yu=$5;/**
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
*/var w5=st,E5=fi,Ea=c5,Xi=b5,C5=Ks,Mn=ou,Rn=yu;function S5(e){var t,n;return w5(e)?NaN:E5(e)?NaN:(n=e%2,t=C5(n),t===0||t===1?Mn(0,n):t<.25?Xi(Rn*n):t<.75?(t=.5-t,Mn(Ea(Rn*t),n)):t<1.25?(n=Mn(1,n)-n,Xi(Rn*n)):t<1.75?(t-=1.5,-Mn(Ea(Rn*t),n)):(n-=Mn(2,n),Xi(Rn*n)))}var I5=S5;/**
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
*/var A5=I5,x5=A5;/**
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
*/function T5(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var O5=T5;/**
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
*/function L5(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var N5=L5;/**
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
*/function M5(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var R5=M5;/**
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
*/function F5(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var k5=F5;/**
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
*/function P5(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var D5=P5;/**
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
*/function H5(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var U5=H5;/**
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
*/function B5(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var G5=B5;/**
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
*/function V5(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var W5=V5;/**
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
*/function j5(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var z5=j5;/**
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
*/function K5(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var X5=K5;/**
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
*/var q5=st,Z5=fi,Q5=Ks,fn=L_,Y5=li,J5=x5,eb=yu,qi=pt,tb=O5,nb=N5,rb=R5,ib=k5,sb=D5,ob=U5,ab=G5,lb=W5,ub=z5,cb=X5,fb=.07721566490153287,db=.3224670334241136,hb=1,pb=-.07721566490153287,vb=.48383612272381005,gb=-.1475877229945939,mb=.06462494023913339,yb=-.07721566490153287,_b=1,bb=.4189385332046727,Sr=1.4616321449683622,$b=4503599627370496,wb=72057594037927940,Eb=13877787807814457e-33,Ca=1.4616321449683622,Cb=-.12148629053584961,Sb=-3638676997039505e-33;function Ib(e){var t,n,r,i,s,o,a,l,c,u,d,p,g;if(q5(e)||Z5(e))return e;if(e===0)return qi;if(e<0?(t=!0,e=-e):t=!1,e<Eb)return-fn(e);if(t){if(e>=$b||(c=J5(e),c===0))return qi;n=fn(eb/Q5(c*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(g=-fn(e),e>=Sr-1+.27?(d=1-e,r=0):e>=Sr-1-.27?(d=e-(Ca-1),r=1):(d=e,r=2)):(g=0,e>=Sr+.27?(d=2-e,r=0):e>=Sr-.27?(d=e-Ca,r=1):(d=e-1,r=2)),r){case 0:p=d*d,o=fb+p*tb(p),s=p*(db+p*nb(p)),a=d*o+s,g+=a-.5*d;break;case 1:p=d*d,u=p*d,o=vb+u*sb(u),s=gb+u*ob(u),i=mb+u*ab(u),a=p*o-(Sb-u*(s+d*i)),g+=Cb+a;break;case 2:o=d*(yb+d*lb(d)),s=_b+d*ub(d),g+=-.5*d+o/s;break}else if(e<8)switch(r=Y5(e),d=e-r,a=d*(pb+d*ib(d)),l=hb+d*rb(d),g=.5*d+a/l,p=1,r){case 7:p*=d+6;case 6:p*=d+5;case 5:p*=d+4;case 4:p*=d+3;case 3:p*=d+2,g+=fn(p)}else e<wb?(c=fn(e),p=1/e,d=p*p,u=bb+p*cb(d),g=(e-.5)*(c-1)+u):g=e*(fn(e)-1);return t&&(g=n-g),g}var Ab=Ib;/**
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
*/var xb=Ab,Tb=xb;/**
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
*/var Ob=n_,Lb=Tb;function Nb(e){return Ob(e)?NaN:Lb(e+1)}var Mb=Nb;/**
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
*/var Rb=Mb,_u=Rb;/**
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
*/var Ir=ai,Ar=st,Fb=fu,_t=_u,kb=ui,Pb=ci,Sa=pt;function Db(e,t,n,r){var i,s,o,a,l;return Ar(e)||Ar(t)||Ar(n)||Ar(r)||!Ir(t)||!Ir(n)||!Ir(r)||t===Sa||n===Sa||n>t||r>t?NaN:(l=kb(0,r+n-t),a=Pb(n,r),Ir(e)&&l<=e&&e<=a?(s=_t(r)+_t(n)+_t(t-r)+_t(t-n),i=_t(t)+_t(e)+_t(r-e),i+=_t(n-e)+_t(t-n+e-r),o=s-i,Fb(o)):0)}var Hb=Db;/**
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
*/function Ub(e){return t;function t(){return e}}var Bb=Ub;/**
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
*/var Gb=Bb,bu=Gb;/**
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
*/var xr=ai,Tr=st,Vb=bu,Wb=fu,bt=_u,jb=ui,zb=ci,Ia=pt;function Kb(e,t,n){var r,i;if(Tr(e)||Tr(t)||Tr(n)||!xr(e)||!xr(t)||!xr(n)||e===Ia||t===Ia||t>e||n>e)return Vb(NaN);return i=jb(0,n+t-e),r=zb(t,n),s;function s(o){var a,l,c;return Tr(o)?NaN:xr(o)&&i<=o&&o<=r?(l=bt(n)+bt(t)+bt(e-n)+bt(e-t),a=bt(e)+bt(o)+bt(n-o),a+=bt(t-o)+bt(e-t+o-n),c=l-a,Wb(c)):0}}var Xb=Kb;/**
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
*/var qb=si,$u=Hb,Zb=Xb;qb($u,"factory",Zb);var wu=$u;/**
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
*/function Qb(e){var t,n,r;for(t=e.length,n=0,r=0;r<t;r++)n+=e[r];return n}var Eu=Qb;/**
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
*/var Zi=ai,Or=st,Yb=li,Jb=ui,Aa=ci,e$=wu,xa=pt,t$=on,n$=Eu;function r$(e,t,n,r){var i,s,o,a,l;if(Or(e)||Or(t)||Or(n)||Or(r)||!Zi(t)||!Zi(n)||!Zi(r)||t===xa||n===xa||n>t||r>t)return NaN;if(e=Yb(e),e<Jb(0,r+n-t))return 0;if(e>=Aa(r,n))return 1;for(s=new t$(e+1),s[e]=e$(e,t,n,r),l=e-1;l>=0;l--)o=(l+1)*(t-n-(r-l-1)),i=(n-l)*(r-l),s[l]=o/i*s[l+1];return a=n$(s),Aa(a,1)}var i$=r$;/**
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
*/var Qi=ai,Lr=st,s$=bu,o$=li,a$=ui,Ta=ci,l$=wu,Oa=pt,u$=on,c$=Eu;function f$(e,t,n){if(Lr(e)||Lr(t)||Lr(n)||!Qi(e)||!Qi(t)||!Qi(n)||e===Oa||t===Oa||t>e||n>e)return s$(NaN);return r;function r(i){var s,o,a,l,c;if(Lr(i))return NaN;if(i=o$(i),i<a$(0,n+t-e))return 0;if(i>=Ta(n,t))return 1;for(o=new u$(i+1),o[i]=l$(i,e,t,n),c=i-1;c>=0;c--)a=(c+1)*(e-t-(n-c-1)),s=(t-c)*(n-c),o[c]=a/s*o[c+1];return l=c$(o),Ta(l,1)}}var d$=f$;/**
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
*/var h$=si,Cu=i$,p$=d$;h$(Cu,"factory",p$);var v$=Cu;const g$=Ou(v$);const m$={key:0,class:"unsaved-changes"},y$=["onClick"],La=600,Na=8,Ma=30,_$=40,Fn=.05,b$={__name:"App",setup(e){const t=kn.showRepoInfo!==!1,n=ue(!1),r=ue(""),i=ue(""),s=ue(null),o=ue(null),a=ue(!1),l=ue(null),c=ue(!1),u=ue(!1),d=ue(window.innerWidth<La);let p;const g=ue(null),R=ue(""),D=ue(!1),F=ue(null),b=ue(""),B=ue(""),q=ue(!1),G=ue(0);let J=0;const ee=/[,\s;]+/,ae="abcdefghijklmnopqrstuvwxyz0123456789".split(""),fe=new Map;let z=0,A=null;const H=ue([]);function I(){}function U(){}const ne=Qe(()=>{var y;const v=r.value;return v&&((y=Fe(v))==null?void 0:y.color)||""});function se(v=""){return v.trim().toLowerCase()}function Y(v=""){const y=v.lastIndexOf("/");return y<0?v:v.slice(y+1)}function re(v=""){const y=[],S=new Set;return v.split(ee).forEach(V=>{const P=V.trim();if(!P)return;const L=se(P);S.has(L)||(S.add(L),y.push(P))}),y}async function le(v){if(fe.has(v))return fe.get(v);const y=fetch(`${kn.namesEndpoint}/${encodeURIComponent(v)}.json`).then(S=>{if(!S.ok){if(S.status===404)return[];throw new Error(`Failed to load names bucket "${v}": ${S.status} ${S.statusText}`)}return S.json()}).then(S=>Array.isArray(S)?S:[]).catch(S=>(console.error(S),[]));return fe.set(v,y),y}function Ke(v){if(!Array.isArray(v)||v.length<3)return null;const[y,S,V]=v,P=Number(S),L=Number(V);return!Number.isFinite(P)||!Number.isFinite(L)?null:{name:y,coordinates:[P,L]}}function Ae(v={}){const y=Array.isArray(v.coordinates)?v.coordinates:[v.lat,v.lon];if(!Array.isArray(y)||y.length!==2)return null;const S=Number(y[0]),V=Number(y[1]);return!Number.isFinite(S)||!Number.isFinite(V)?null:[S,V]}function Fe(v=""){return H.value.find(y=>y.text===v)||null}function ke(){var v,y;(y=(v=window.mapOwner)==null?void 0:v.setSessionHighlights)==null||y.call(v,H.value)}function sr(){const v=r.value||(p==null?void 0:p.text);if(!v)return null;const y=Fe(v);return y||((p==null?void 0:p.text)!==v||(p==null?void 0:p.lat)===void 0||(p==null?void 0:p.lon)===void 0?null:{text:v,coordinates:[p.lat,p.lon],size:Ma})}function gi(v){if(!v)return;const y=sr();if(!y)return;const S=H.value.filter(V=>V.text!==y.text).concat({...y,color:v});for(;S.length>_$;)S.shift();H.value=S,ke()}function mi(){const v=r.value||(p==null?void 0:p.text);v&&(H.value=H.value.filter(y=>y.text!==v),ke())}async function Tt(v=[]){var S;const y=v.map(Ae).filter(Boolean);return y.length?(S=window.mapOwner)!=null&&S.getGroupIdsAtCoordinates?window.mapOwner.getGroupIdsAtCoordinates(y):Promise.all(y.map(([V,P])=>{var L;return(L=window.mapOwner)==null?void 0:L.getGroupIdAt(V,P)})):[]}function Gt(v=[]){const y=new Map;return v.forEach(S=>{if(S==null)return;const V=String(S);y.set(V,(y.get(V)||0)+1)}),y}function ln(v=new Map){let y=0;return v.forEach(S=>{y+=S}),y}function or(v,y,S,V){const P=Math.max(0,Math.trunc(y)),L=Math.max(0,Math.trunc(S)),oe=Math.max(0,Math.trunc(V)),be=Math.max(0,Math.trunc(v));if(!P||!oe||!L||be<=0)return 1;const we=Math.min(L,oe);if(be>we)return 0;const $e=1-g$(be-1,P,L,oe);return Math.min(1,Math.max(0,$e))}function Ot(v=[]){const y=v.length;if(!y)return[];const S=v.map((L,oe)=>({index:oe,pValue:L})).sort((L,oe)=>L.pValue-oe.pValue),V=new Array(y);let P=1;for(let L=y;L>=1;L-=1){const oe=S[L-1],be=Math.min(1,Math.max(0,oe.pValue)),we=Math.min(P,be*y/L);P=we,V[oe.index]=we}return V}async function En(){return A||(A=Promise.all(ae.map(le)).then(async v=>{const y=new Set,S=[];v.forEach(L=>{L.forEach(oe=>{const be=Ke(oe);if(!be)return;const[we,Xe]=be.coordinates,$e=`${be.name}:${we}:${Xe}`;y.has($e)||(y.add($e),S.push({text:be.name,coordinates:[we,Xe]}))})});const V=await Tt(S),P=Gt(V);return{totalGenes:S.length,assignedGenes:ln(P),regionCounts:P}}).catch(v=>{throw A=null,v}),A)}function Cn(){var V,P;const v=new Map,y=(P=(V=window.mapOwner)==null?void 0:V.getPlacesGeoJSON)==null?void 0:P.call(V);return(Array.isArray(y==null?void 0:y.features)?y.features:[]).forEach(L=>{var we,Xe;const oe=(we=L==null?void 0:L.properties)==null?void 0:we.ownerId;if(oe==null)return;const be=String(oe);v.has(be)||v.set(be,((Xe=L==null?void 0:L.properties)==null?void 0:Xe.name)||"")}),v}async function f(v=[]){if(!v.length)return{rows:[],enrichedRegionIds:[],n:0,N:0,selectedAssignedCount:0,universeAssignedCount:0,fdrThreshold:Fn};const[y,S]=await Promise.all([En(),Tt(v)]),V=Gt(S),P=ln(V),L=S.length,oe=y.totalGenes;if(!oe||!L)return{rows:[],enrichedRegionIds:[],n:L,N:oe,selectedAssignedCount:P,universeAssignedCount:y.assignedGenes||0,fdrThreshold:Fn};const be=Cn(),we=[];if(y.regionCounts.forEach((ge,Se)=>{const qe=V.get(Se)||0,ur=qe>0?or(qe,oe,ge,L):1;we.push({groupId:Se,k:qe,K:ge,pValue:ur})}),!we.length)return{rows:[],enrichedRegionIds:[],n:L,N:oe,selectedAssignedCount:P,universeAssignedCount:y.assignedGenes||0,fdrThreshold:Fn};const Xe=Ot(we.map(ge=>ge.pValue)),$e=we.map((ge,Se)=>{const qe=Xe[Se];return{groupId:String(ge.groupId),regionName:be.get(String(ge.groupId))||"",k:ge.k,n:L,K:ge.K,N:oe,pValue:ge.pValue,qValue:qe,significant:ge.k>0&&qe<Fn}}).sort((ge,Se)=>ge.qValue-Se.qValue||Se.k-ge.k||ge.groupId.localeCompare(Se.groupId));return{rows:$e,enrichedRegionIds:$e.filter(ge=>ge.significant).map(ge=>ge.groupId),n:L,N:oe,selectedAssignedCount:P,universeAssignedCount:y.assignedGenes||0,fdrThreshold:Fn}}function h(v=[]){return v.map(y=>{const S=y==null?"":String(y);return/["\n,]/.test(S)?`"${S.replace(/"/g,'""')}"`:S}).join(",")}function m(v){return Number.isFinite(v)?v===0?"0":Math.abs(v)<1e-4||Math.abs(v)>=1e6?v.toExponential(6):v.toFixed(8).replace(/0+$/,"").replace(/\.$/,""):""}function C({inputGenes:v=[],missingGenes:y=[],matchedNodes:S=[],report:V}){const P=[];return P.push(h(["metric","value"])),P.push(h(["input_gene_count",v.length])),P.push(h(["matched_node_count",S.length])),P.push(h(["missing_gene_count",y.length])),P.push(h(["draws_n",V.n])),P.push(h(["selected_assigned_in_regions",V.selectedAssignedCount])),P.push(h(["universe_genes_N",V.N])),P.push(h(["universe_assigned_in_regions",V.universeAssignedCount])),P.push(h(["fdr_threshold",V.fdrThreshold])),P.push(h(["enriched_region_count",V.enrichedRegionIds.length])),P.push(""),P.push(h(["input_gene"])),v.forEach(L=>{P.push(h([L]))}),y.length&&(P.push(""),P.push(h(["missing_gene"])),y.forEach(L=>{P.push(h([L]))})),P.push(""),P.push(h(["group_id","region_name","k","n","K","N","p_value","q_value","significant"])),V.rows.forEach(L=>{P.push(h([L.groupId,L.regionName,L.k,L.n,L.K,L.N,m(L.pValue),m(L.qValue),L.significant?"1":"0"]))}),P.join(`
`)}function $(v,y,S="text/csv;charset=utf-8"){const V=new Blob([y],{type:S}),P=window.URL.createObjectURL(V),L=document.createElement("a");L.href=P,L.download=v,document.body.appendChild(L),L.click(),document.body.removeChild(L),window.URL.revokeObjectURL(P)}async function w(v){const y=re(v);if(y.length)try{const{matches:S,missing:V}=await O(y),P=await f(S),L=C({inputGenes:y,missingGenes:V,matchedNodes:S,report:P}),oe=new Date().toISOString().replace(/[:.]/g,"-");$(`enrichment-debug-${oe}.csv`,L)}catch(S){console.error(S)}}async function M(v=[]){var S,V,P,L,oe,be;const y=++z;if((V=(S=window.mapOwner)==null?void 0:S.clearRegionHighlights)==null||V.call(S),!!v.length)try{const we=await f(v);if(y!==z)return;(L=(P=window.mapOwner)==null?void 0:P.highlightRegions)==null||L.call(P,we.enrichedRegionIds)}catch(we){if(y!==z)return;console.error(we),(be=(oe=window.mapOwner)==null?void 0:oe.clearRegionHighlights)==null||be.call(oe)}}async function O(v){const y=v.map($e=>{const ge=typeof $e=="string"?$e.trim():"",Se=se(ge);return{original:ge,normalized:Se}}).filter($e=>$e.normalized),S=y.map($e=>$e.normalized);if(!y.length)return{matches:[],missing:[]};const V=new Set(S),P=new Set,L=[],oe=new Set,be=[...new Set(S.map($e=>$e[0]))];(await Promise.all(be.map(le))).forEach($e=>{$e.forEach(ge=>{const Se=Ke(ge);if(!Se)return;const qe=se(Se.name),ur=Y(qe),Zs=V.has(qe),Qs=V.has(ur);if(!Zs&&!Qs)return;Zs&&P.add(qe),Qs&&P.add(ur);const[Ys,Js]=Se.coordinates,eo=`${Se.name}:${Ys}:${Js}`;oe.has(eo)||(oe.add(eo),L.push({text:Se.name,coordinates:[Ys,Js],size:Ma}))})});const Xe=y.filter($e=>!P.has($e.normalized)).map($e=>$e.original);return{matches:L,missing:Xe}}async function T(v){var V,P,L;const y=re(v);if(!y.length){j();return}const{matches:S}=await O(y);if(!S.length){j();return}q.value=!0,(V=window.mapOwner)==null||V.highlightNodes(S),M(S),S.length>1&&((L=(P=window.mapOwner)==null?void 0:P.focusOnNodes)==null||L.call(P,S,{padding:d.value?48:96,maxZoom:Na}))}function E(){K(),j()}function j(v=!1){var y,S,V,P;z+=1,(S=(y=window.mapOwner)==null?void 0:y.clearPersistentHighlights)==null||S.call(y),(P=(V=window.mapOwner)==null?void 0:V.clearRegionHighlights)==null||P.call(V),q.value=!1,v&&(G.value+=1)}function k(v){if(r.value){v.shouldProceed=!1,K();return}q.value&&(v.shouldProceed=!1,j(!0))}function W(){K()}function K(){var v,y;n.value=!1,r.value="",i.value="",F.value=null,b.value="",B.value="",(y=(v=window.mapOwner)==null?void 0:v.clearSelectionHighlights)==null||y.call(v)}function ie(v){var S;v.lat===void 0&&p&&v.text===p.text?v=p:p=v;const y={center:[v.lat,v.lon],zoom:Na};(S=window.mapOwner)==null||S.makeVisible(v.text,y,v.skipAnimation),r.value=v.text,Te.fire("current-project",v.text),Xs(v)}function pe(v){p=v;{i.value="",r.value=v.text,Xs(v);return}}function de(){}function Me(v){s.value=v}function xe(v){o.value=v}tr(()=>{var v;(v=window.mapOwner)==null||v.dispose(),Te.off("repo-selected",pe),Te.off("show-tooltip",Me),Te.off("show-context-menu",xe),Te.off("focus-on-repo",Lt),Te.off("unsaved-changes-detected",Sn),window.removeEventListener("resize",je)}),_l(()=>{Te.on("repo-selected",pe),Te.on("show-context-menu",xe),Te.on("show-tooltip",Me),Te.on("focus-on-repo",Lt),Te.on("unsaved-changes-detected",Sn),window.addEventListener("resize",je),lr()});function je(){d.value=window.innerWidth<La}function Ue(v){o.value=null,v.click()}function Lt(v,y){const S=new zo(v,y);l.value=S}function Sn(v){u.value=v}function Be(){l.value&&(l.value.dispose(),l.value=null)}const et=Qe(()=>!0);function ar(){c.value=!0}async function lr(){if(kn.geneMetadataEndpoint){D.value=!0,R.value="";try{const v=await fetch(kn.geneMetadataEndpoint);if(!v.ok)throw new Error(`Failed to load gene metadata: ${v.status} ${v.statusText}`);g.value=await v.json()}catch(v){console.error(v),R.value=v.message||"Failed to load gene metadata."}finally{D.value=!1}}}async function Xs(v){var oe,be,we,Xe,$e,ge;if(!v)return;const y=++J;F.value=null,b.value="",B.value="";let S=v.groupId;if(S===void 0&&v.lat!==void 0&&v.lon!==void 0&&(S=await((oe=window.mapOwner)==null?void 0:oe.getGroupIdAt(v.lat,v.lon))),y!==J||S===void 0)return;F.value=S;const V=(we=(be=window.mapOwner)==null?void 0:be.getPlacesGeoJSON)==null?void 0:we.call(be);if(!((Xe=V==null?void 0:V.features)!=null&&Xe.length))return;const P=String(S),L=V.features.find(Se=>{var qe;return String((qe=Se==null?void 0:Se.properties)==null?void 0:qe.ownerId)===P});($e=L==null?void 0:L.properties)!=null&&$e.name&&(b.value=L.properties.name),(ge=L==null?void 0:L.properties)!=null&&ge.enriched_GO&&(B.value=L.properties.enriched_GO)}async function qs(){var y;l.value&&l.value.disposeSubgraphViewer(),o.value&&(o.value=null);const v=p.groupId??await((y=window.mapOwner)==null?void 0:y.getGroupIdAt(p.lat,p.lon));if(v!==void 0){const S=new zo(p.text,v);l.value=S}}return(v,y)=>(x(),N("div",null,[u.value?(x(),N("div",m$,[y[8]||(y[8]=Ee(" You have unsaved labels in local storage. ",-1)),_("a",{href:"#",onClick:y[0]||(y[0]=ve(S=>ar(),["prevent"])),class:"normal"},"Click here"),y[9]||(y[9]=Ee(" to see them. ",-1))])):Z("",!0),y[10]||(y[10]=_("div",{class:"made-by"},[Ee(" Map: "),_("a",{class:"normal","aria-label":"Map by @leonfrench",target:"_blank",href:"https://github.com/leonfrench"}," @leonfrench "),Ee(" • Based on "),_("a",{class:"normal","aria-label":"Based on @anvaka's web app",target:"_blank",href:"https://github.com/sponsors/anvaka"}," @anvaka "),Ee(" 's web app ")],-1)),l.value?(x(),kt(wh,{key:1,vm:l.value,class:"right-panel",onSelected:ie,onClose:y[1]||(y[1]=S=>Be())},null,8,["vm"])):Z("",!0),r.value&&t?(x(),kt(r0,{key:2,name:r.value,onListConnections:y[2]||(y[2]=S=>qs())},null,8,["name"])):Z("",!0),r.value&&!t?(x(),kt($0,{key:3,name:r.value,metadata:g.value,loading:D.value,error:R.value,"cluster-id":F.value,"cluster-name":b.value,"cluster-enriched-go":B.value,"highlight-color":ne.value,onListConnections:y[3]||(y[3]=S=>qs()),onSetHighlightColor:gi,onClearHighlight:mi},null,8,["name","metadata","loading","error","cluster-id","cluster-name","cluster-enriched-go","highlight-color"])):Z("",!0),et.value?(x(),N("form",{key:4,onSubmit:ve(U,["prevent"]),class:"search-box"},[Oe(Fd,{placeholder:"Find Protein",onMenuClicked:y[4]||(y[4]=S=>a.value=!0),onSelected:ie,onBeforeClear:k,onCleared:W,onInputChanged:I,onMultiSelected:T,onMultiDownloadEnrichment:w,onMultiCleared:E,showClearButton:!!(r.value||q.value),query:r.value,multiInputResetToken:G.value},null,8,["showClearButton","query","multiInputResetToken"])],32)):Z("",!0),Oe(xi,{name:"slide-bottom"},{default:Mr(()=>[i.value&&t?(x(),kt(R0,{key:0,name:i.value,class:"small-preview",onShowFullPreview:y[5]||(y[5]=S=>void 0)},null,8,["name"])):Z("",!0)]),_:1}),s.value?(x(),N("div",{key:5,class:"tooltip",style:nn({left:s.value.left,top:s.value.top,background:s.value.background})},te(s.value.text),5)):Z("",!0),o.value?(x(),N("div",{key:6,class:"context-menu",style:nn({left:o.value.left,top:o.value.top})},[(x(!0),N(Ne,null,sn(o.value.items,(S,V)=>(x(),N("a",{href:"#",key:V,onClick:ve(P=>Ue(S),["prevent"])},te(S.text),9,y$))),128))],4)):Z("",!0),Oe(xi,{name:"slide-top"},{default:Mr(()=>[c.value?(x(),kt(H0,{key:0,onClose:y[6]||(y[6]=S=>c.value=!1),class:"changes-window"})):Z("",!0)]),_:1}),Oe(xi,{name:"slide-left"},{default:Mr(()=>[a.value?(x(),kt(P0,{key:0,onClose:y[7]||(y[7]=S=>a.value=!1),class:"about"})):Z("",!0)]),_:1})]))}},$$=ht(b$,[["__scopeId","data-v-f12de979"]]);function S$(){const e=cd($$);e.directive("focus",{mounted(t){t.focus()}}),e.mount("#app")}export{S$ as default};
//# sourceMappingURL=startVue-37f41c47.js.map
