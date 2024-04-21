var be=Object.defineProperty;var we=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var z=(e,t,n)=>(we(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerPolicy&&(o.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?o.credentials="include":u.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(u){if(u.ep)return;u.ep=!0;const o=n(u);fetch(u.href,o)}})();function F(){}function pe(e){return e()}function oe(){return Object.create(null)}function L(e){e.forEach(pe)}function Q(e){return typeof e=="function"}function _e(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ee(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function he(e,t,n){e.insertBefore(t,n||null)}function X(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function C(){return N(" ")}function U(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function S(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e){return e===""?null:+e}function Ce(e){return Array.from(e.childNodes)}function ie(e,t){t=""+t,e.data!==t&&(e.data=t)}function w(e,t){e.value=t??""}function le(e,t,n){for(let r=0;r<e.options.length;r+=1){const u=e.options[r];if(u.__value===t){u.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Oe(e){const t=e.querySelector(":checked");return t&&t.__value}let P;function R(e){P=e}function Se(){if(!P)throw new Error("Function called outside component initialization");return P}function Ae(e){Se().$$.on_mount.push(e)}const A=[],M=[];let B=[];const V=[],Ue=Promise.resolve();let x=!1;function Be(){x||(x=!0,Ue.then(ge))}function T(e){B.push(e)}function se(e){V.push(e)}const K=new Set;let O=0;function ge(){if(O!==0)return;const e=P;do{try{for(;O<A.length;){const t=A[O];O++,R(t),Le(t.$$)}}catch(t){throw A.length=0,O=0,t}for(R(null),A.length=0,O=0;M.length;)M.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];K.has(n)||(K.add(n),n())}B.length=0}while(A.length);for(;V.length;)V.pop()();x=!1,K.clear(),R(e)}function Le(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}function Ne(e){const t=[],n=[];B.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),B=t}const j=new Set;let Re;function G(e,t){e&&e.i&&(j.delete(e),e.i(t))}function ce(e,t,n,r){if(e&&e.o){if(j.has(e))return;j.add(e),Re.c.push(()=>{j.delete(e)}),e.o(t)}}function ae(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function fe(e){e&&e.c()}function H(e,t,n){const{fragment:r,after_update:u}=e.$$;r&&r.m(t,n),T(()=>{const o=e.$$.on_mount.map(pe).filter(Q);e.$$.on_destroy?e.$$.on_destroy.push(...o):L(o),e.$$.on_mount=[]}),u.forEach(T)}function J(e,t){const n=e.$$;n.fragment!==null&&(Ne(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Fe(e,t){e.$$.dirty[0]===-1&&(A.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(e,t,n,r,u,o,l=null,f=[-1]){const d=P;R(e);const i=e.$$={fragment:null,ctx:[],props:o,update:F,not_equal:u,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:oe(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};l&&l(i.root);let v=!1;if(i.ctx=n?n(e,t.props||{},(a,g,...b)=>{const h=b.length?b[0]:g;return i.ctx&&u(i.ctx[a],i.ctx[a]=h)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](h),v&&Fe(e,a)),g}):[],i.update(),v=!0,L(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const a=Ce(t.target);i.fragment&&i.fragment.l(a),a.forEach(X)}else i.fragment&&i.fragment.c();t.intro&&G(e.$$.fragment),H(e,t.target,t.anchor),ge()}R(d)}class ye{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){J(this,1),this.$destroy=F}$on(t,n){if(!Q(n))return F;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const u=r.indexOf(n);u!==-1&&r.splice(u,1)}}$set(t){this.$$set&&!Ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Pe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Pe);function je(e){let t,n,r,u,o,l;return{c(){t=_("select"),n=_("option"),n.textContent="USD",r=_("option"),r.textContent="EUR",u=_("option"),u.textContent="RUB",n.__value="USD",w(n,n.__value),r.__value="EUR",w(r,r.__value),u.__value="RUB",w(u,u.__value),S(t,"class","selectBtn"),e[0]===void 0&&T(()=>e[2].call(t))},m(f,d){he(f,t,d),c(t,n),c(t,r),c(t,u),le(t,e[0],!0),o||(l=[U(t,"change",e[2]),U(t,"change",function(){Q(e[1])&&e[1].apply(this,arguments)})],o=!0)},p(f,[d]){e=f,d&1&&le(t,e[0])},i:F,o:F,d(f){f&&X(t),o=!1,L(l)}}}function Ie(e,t,n){let{value:r}=t,{onChange:u}=t;function o(){r=Oe(this),n(0,r)}return e.$$set=l=>{"value"in l&&n(0,r=l.value),"onChange"in l&&n(1,u=l.onChange)},[r,u,o]}class de extends ye{constructor(t){super(),me(this,t,Ie,je,_e,{value:0,onChange:1})}}function Me(e){let t,n,r,u,o,l,f,d,i,v,a,g,b,h,p,k,D,Y,m,Z,y,q,E,W,ee;function $e(s){e[8](s)}let te={onChange:e[4]};e[2]!==void 0&&(te.value=e[2]),a=new de({props:te}),M.push(()=>ae(a,"value",$e));function ve(s){e[10](s)}let ne={onChange:e[4]};return e[3]!==void 0&&(ne.value=e[3]),y=new de({props:ne}),M.push(()=>ae(y,"value",ve)),{c(){t=_("main"),n=_("h1"),n.textContent="Конвертер валют",r=C(),u=_("div"),o=_("label"),l=N("Сумма в "),f=N(e[2]),d=C(),i=_("input"),v=C(),fe(a.$$.fragment),b=C(),h=_("div"),p=_("label"),k=N("Сумма в "),D=N(e[3]),Y=C(),m=_("input"),Z=C(),fe(y.$$.fragment),S(n,"class","gradient-text"),S(i,"type","number"),S(u,"class","inputWrapper"),S(m,"type","number"),S(h,"class","inputWrapper")},m(s,$){he(s,t,$),c(t,n),c(t,r),c(t,u),c(u,o),c(o,l),c(o,f),c(o,d),c(o,i),w(i,e[0]),c(u,v),H(a,u,null),c(t,b),c(t,h),c(h,p),c(p,k),c(p,D),c(p,Y),c(p,m),w(m,e[1]),c(h,Z),H(y,h,null),E=!0,W||(ee=[U(i,"input",e[7]),U(i,"input",e[5]),U(m,"input",e[9]),U(m,"input",e[6])],W=!0)},p(s,[$]){(!E||$&4)&&ie(f,s[2]),$&1&&I(i.value)!==s[0]&&w(i,s[0]);const re={};!g&&$&4&&(g=!0,re.value=s[2],se(()=>g=!1)),a.$set(re),(!E||$&8)&&ie(D,s[3]),$&2&&I(m.value)!==s[1]&&w(m,s[1]);const ue={};!q&&$&8&&(q=!0,ue.value=s[3],se(()=>q=!1)),y.$set(ue)},i(s){E||(G(a.$$.fragment,s),G(y.$$.fragment,s),E=!0)},o(s){ce(a.$$.fragment,s),ce(y.$$.fragment,s),E=!1},d(s){s&&X(t),J(a),J(y),W=!1,L(ee)}}}function Te(e,t,n){let r=0,u=0,o="USD",l="RUB",f=0;const d=async()=>{try{f=(await(await fetch(`https://api.exchangerate-api.com/v4/latest/${o}`)).json()).rates[l]}catch(p){console.error("Ошибка загрузки курса валют:",p)}},i=()=>{n(1,u=Math.round(r*f*100)/100)},v=()=>{n(0,r=Math.round(u/f*100)/100)};Ae(d);function a(){r=I(this.value),n(0,r)}function g(p){o=p,n(2,o)}function b(){u=I(this.value),n(1,u)}function h(p){l=p,n(3,l)}return[r,u,o,l,d,i,v,a,g,b,h]}class ke extends ye{constructor(t){super(),me(this,t,Te,Me,_e,{})}}new ke({target:document.getElementById("app")});