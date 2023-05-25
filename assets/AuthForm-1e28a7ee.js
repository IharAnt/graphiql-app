import{R as Q,a as ye,j as M,c as gt,b as vt,M as _t,S as mt,F as bt,L as At}from"./index-3f17ecc5.js";var oe=e=>e.type==="checkbox",te=e=>e instanceof Date,O=e=>e==null;const Ye=e=>typeof e=="object";var k=e=>!O(e)&&!Array.isArray(e)&&Ye(e)&&!te(e),Vt=e=>k(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,xt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,pt=(e,i)=>e.has(xt(i)),Ft=e=>{const i=e.constructor&&e.constructor.prototype;return k(i)&&i.hasOwnProperty("isPrototypeOf")},Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function J(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Oe&&(e instanceof Blob||e instanceof FileList))&&(s||k(e)))if(i=s?[]:{},!Array.isArray(e)&&!Ft(e))i=e;else for(const r in e)i[r]=J(e[r]);else return e;return i}var ce=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,y=(e,i,s)=>{if(!i||!k(e))return s;const r=ce(i.split(/[,[\].]+?/)).reduce((n,u)=>O(n)?n:n[u],e);return D(r)||r===e?D(e[i])?s:e[i]:r};const $e={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Q.createContext(null);var wt=(e,i,s,r=!0)=>{const n={defaultValues:i._defaultValues};for(const u in e)Object.defineProperty(n,u,{get:()=>{const f=u;return i._proxyFormState[f]!==I.all&&(i._proxyFormState[f]=!r||I.all),s&&(s[f]=!0),e[f]}});return n},R=e=>k(e)&&!Object.keys(e).length,Dt=(e,i,s,r)=>{s(e);const{name:n,...u}=e;return R(u)||Object.keys(u).length>=Object.keys(i).length||Object.keys(u).find(f=>i[f]===(!r||I.all))},De=e=>Array.isArray(e)?e:[e];function kt(e){const i=Q.useRef(e);i.current=e,Q.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var z=e=>typeof e=="string",St=(e,i,s,r,n)=>z(e)?(r&&i.watch.add(e),y(s,e,n)):Array.isArray(e)?e.map(u=>(r&&i.watch.add(u),y(s,u))):(r&&(i.watchAll=!0),s),Ce=e=>/^\w*$/.test(e),et=e=>ce(e.replace(/["|']|\]/g,"").split(/\.|\[/));function V(e,i,s){let r=-1;const n=Ce(i)?[i]:et(i),u=n.length,f=u-1;for(;++r<u;){const A=n[r];let m=s;if(r!==f){const L=e[A];m=k(L)||Array.isArray(L)?L:isNaN(+n[r+1])?{}:[]}e[A]=m,e=e[A]}return e}var Et=(e,i,s,r,n)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[r]:n||!0}}:{};const Le=(e,i,s)=>{for(const r of s||Object.keys(e)){const n=y(e,r);if(n){const{_f:u,...f}=n;if(u&&i(u.name)){if(u.ref.focus){u.ref.focus();break}else if(u.refs&&u.refs[0].focus){u.refs[0].focus();break}}else k(f)&&Le(f,i)}}};var He=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),We=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Tt=(e,i,s)=>{const r=ce(y(e,s));return V(r,"root",i[s]),V(e,s,r),e},re=e=>typeof e=="boolean",Ne=e=>e.type==="file",K=e=>typeof e=="function",ge=e=>{if(!Oe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},he=e=>z(e),Me=e=>e.type==="radio",ve=e=>e instanceof RegExp;const je={value:!1,isValid:!1},Ke={value:!0,isValid:!0};var tt=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?Ke:{value:e[0].value,isValid:!0}:Ke:je}return je};const Ze={isValid:!1,value:null};var rt=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,Ze):Ze;function Ge(e,i,s="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||re(e)&&!e)return{type:s,message:he(e)?e:"",ref:i}}var ee=e=>k(e)&&!ve(e)?e:{value:e,message:""},Je=async(e,i,s,r,n)=>{const{ref:u,refs:f,required:A,maxLength:m,minLength:L,min:j,max:p,pattern:v,validate:B,name:T,valueAsNumber:be,mount:fe,disabled:Ae}=e._f,g=y(i,T);if(!fe||Ae)return{};const U=f?f[0]:u,$=b=>{r&&U.reportValidity&&(U.setCustomValidity(re(b)?"":b||""),U.reportValidity())},S={},se=Me(u),ie=oe(u),Ve=se||ie,P=(be||Ne(u))&&D(u.value)&&D(g)||ge(u)&&u.value===""||g===""||Array.isArray(g)&&!g.length,Z=Et.bind(null,T,s,S),H=(b,_,F,C=W.maxLength,N=W.minLength)=>{const q=b?_:F;S[T]={type:b?C:N,message:q,ref:u,...Z(b?C:N,q)}};if(n?!Array.isArray(g)||!g.length:A&&(!Ve&&(P||O(g))||re(g)&&!g||ie&&!tt(f).isValid||se&&!rt(f).isValid)){const{value:b,message:_}=he(A)?{value:!!A,message:A}:ee(A);if(b&&(S[T]={type:W.required,message:_,ref:U,...Z(W.required,_)},!s))return $(_),S}if(!P&&(!O(j)||!O(p))){let b,_;const F=ee(p),C=ee(j);if(!O(g)&&!isNaN(g)){const N=u.valueAsNumber||g&&+g;O(F.value)||(b=N>F.value),O(C.value)||(_=N<C.value)}else{const N=u.valueAsDate||new Date(g),q=le=>new Date(new Date().toDateString()+" "+le),G=u.type=="time",ne=u.type=="week";z(F.value)&&g&&(b=G?q(g)>q(F.value):ne?g>F.value:N>new Date(F.value)),z(C.value)&&g&&(_=G?q(g)<q(C.value):ne?g<C.value:N<new Date(C.value))}if((b||_)&&(H(!!b,F.message,C.message,W.max,W.min),!s))return $(S[T].message),S}if((m||L)&&!P&&(z(g)||n&&Array.isArray(g))){const b=ee(m),_=ee(L),F=!O(b.value)&&g.length>+b.value,C=!O(_.value)&&g.length<+_.value;if((F||C)&&(H(F,b.message,_.message),!s))return $(S[T].message),S}if(v&&!P&&z(g)){const{value:b,message:_}=ee(v);if(ve(b)&&!g.match(b)&&(S[T]={type:W.pattern,message:_,ref:u,...Z(W.pattern,_)},!s))return $(_),S}if(B){if(K(B)){const b=await B(g,i),_=Ge(b,U);if(_&&(S[T]={..._,...Z(W.validate,_.message)},!s))return $(_.message),S}else if(k(B)){let b={};for(const _ in B){if(!R(b)&&!s)break;const F=Ge(await B[_](g,i),U,_);F&&(b={...F,...Z(_,F.message)},$(F.message),s&&(S[T]=b))}if(!R(b)&&(S[T]={ref:U,...b},!s))return S}}return $(!0),S};function Lt(e,i){const s=i.slice(0,-1).length;let r=0;for(;r<s;)e=D(e)?r++:e[i[r++]];return e}function Ot(e){for(const i in e)if(!D(e[i]))return!1;return!0}function E(e,i){const s=Array.isArray(i)?i:Ce(i)?[i]:et(i),r=s.length===1?e:Lt(e,s),n=s.length-1,u=s[n];return r&&delete r[u],n!==0&&(k(r)&&R(r)||Array.isArray(r)&&Ot(r))&&E(e,s.slice(0,-1)),e}function ke(){let e=[];return{get observers(){return e},next:n=>{for(const u of e)u.next&&u.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(u=>u!==n)}}),unsubscribe:()=>{e=[]}}}var _e=e=>O(e)||!Ye(e);function X(e,i){if(_e(e)||_e(i))return e===i;if(te(e)&&te(i))return e.getTime()===i.getTime();const s=Object.keys(e),r=Object.keys(i);if(s.length!==r.length)return!1;for(const n of s){const u=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const f=i[n];if(te(u)&&te(f)||k(u)&&k(f)||Array.isArray(u)&&Array.isArray(f)?!X(u,f):u!==f)return!1}}return!0}var st=e=>e.type==="select-multiple",Ct=e=>Me(e)||oe(e),Se=e=>ge(e)&&e.isConnected,it=e=>{for(const i in e)if(K(e[i]))return!0;return!1};function me(e,i={}){const s=Array.isArray(e);if(k(e)||s)for(const r in e)Array.isArray(e[r])||k(e[r])&&!it(e[r])?(i[r]=Array.isArray(e[r])?[]:{},me(e[r],i[r])):O(e[r])||(i[r]=!0);return i}function nt(e,i,s){const r=Array.isArray(e);if(k(e)||r)for(const n in e)Array.isArray(e[n])||k(e[n])&&!it(e[n])?D(i)||_e(s[n])?s[n]=Array.isArray(e[n])?me(e[n],[]):{...me(e[n])}:nt(e[n],O(i)?{}:i[n],s[n]):s[n]=!X(e[n],i[n]);return s}var Ee=(e,i)=>nt(e,i,me(i)),lt=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:r})=>D(e)?e:i?e===""?NaN:e&&+e:s&&z(e)?new Date(e):r?r(e):e;function Te(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Ne(i)?i.files:Me(i)?rt(e.refs).value:st(i)?[...i.selectedOptions].map(({value:s})=>s):oe(i)?tt(e.refs).value:lt(D(i.value)?e.ref.value:i.value,e)}var Nt=(e,i,s,r)=>{const n={};for(const u of e){const f=y(i,u);f&&V(n,u,f._f)}return{criteriaMode:s,names:[...e],fields:n,shouldUseNativeValidation:r}},ae=e=>D(e)?e:ve(e)?e.source:k(e)?ve(e.value)?e.value.source:e.value:e,Mt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Qe(e,i,s){const r=y(e,s);if(r||Ce(s))return{error:r,name:s};const n=s.split(".");for(;n.length;){const u=n.join("."),f=y(i,u),A=y(e,u);if(f&&!Array.isArray(f)&&s!==u)return{name:s};if(A&&A.type)return{name:u,error:A};n.pop()}return{name:s}}var Rt=(e,i,s,r,n)=>n.isOnAll?!1:!s&&n.isOnTouch?!(i||e):(s?r.isOnBlur:n.isOnBlur)?!e:(s?r.isOnChange:n.isOnChange)?e:!0,Bt=(e,i)=>!ce(y(e,i)).length&&E(e,i);const Ut={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function It(e={},i){let s={...Ut,...e},r={submitCount:0,isDirty:!1,isLoading:K(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},u=k(s.defaultValues)||k(s.values)?J(s.defaultValues||s.values)||{}:{},f=s.shouldUnregister?{}:J(u),A={action:!1,mount:!1,watch:!1},m={mount:new Set,unMount:new Set,array:new Set,watch:new Set},L,j=0;const p={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:ke(),array:ke(),state:ke()},B=e.resetOptions&&e.resetOptions.keepDirtyValues,T=He(s.mode),be=He(s.reValidateMode),fe=s.criteriaMode===I.all,Ae=t=>l=>{clearTimeout(j),j=setTimeout(t,l)},g=async t=>{if(p.isValid||t){const l=s.resolver?R((await P()).errors):await H(n,!0);l!==r.isValid&&v.state.next({isValid:l})}},U=t=>p.isValidating&&v.state.next({isValidating:t}),$=(t,l=[],a,d,c=!0,o=!0)=>{if(d&&a){if(A.action=!0,o&&Array.isArray(y(n,t))){const h=a(y(n,t),d.argA,d.argB);c&&V(n,t,h)}if(o&&Array.isArray(y(r.errors,t))){const h=a(y(r.errors,t),d.argA,d.argB);c&&V(r.errors,t,h),Bt(r.errors,t)}if(p.touchedFields&&o&&Array.isArray(y(r.touchedFields,t))){const h=a(y(r.touchedFields,t),d.argA,d.argB);c&&V(r.touchedFields,t,h)}p.dirtyFields&&(r.dirtyFields=Ee(u,f)),v.state.next({name:t,isDirty:_(t,l),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else V(f,t,l)},S=(t,l)=>{V(r.errors,t,l),v.state.next({errors:r.errors})},se=(t,l,a,d)=>{const c=y(n,t);if(c){const o=y(f,t,D(a)?y(u,t):a);D(o)||d&&d.defaultChecked||l?V(f,t,l?o:Te(c._f)):N(t,o),A.mount&&g()}},ie=(t,l,a,d,c)=>{let o=!1,h=!1;const x={name:t};if(!a||d){p.isDirty&&(h=r.isDirty,r.isDirty=x.isDirty=_(),o=h!==x.isDirty);const w=X(y(u,t),l);h=y(r.dirtyFields,t),w?E(r.dirtyFields,t):V(r.dirtyFields,t,!0),x.dirtyFields=r.dirtyFields,o=o||p.dirtyFields&&h!==!w}if(a){const w=y(r.touchedFields,t);w||(V(r.touchedFields,t,a),x.touchedFields=r.touchedFields,o=o||p.touchedFields&&w!==a)}return o&&c&&v.state.next(x),o?x:{}},Ve=(t,l,a,d)=>{const c=y(r.errors,t),o=p.isValid&&re(l)&&r.isValid!==l;if(e.delayError&&a?(L=Ae(()=>S(t,a)),L(e.delayError)):(clearTimeout(j),L=null,a?V(r.errors,t,a):E(r.errors,t)),(a?!X(c,a):c)||!R(d)||o){const h={...d,...o&&re(l)?{isValid:l}:{},errors:r.errors,name:t};r={...r,...h},v.state.next(h)}U(!1)},P=async t=>s.resolver(f,s.context,Nt(t||m.mount,n,s.criteriaMode,s.shouldUseNativeValidation)),Z=async t=>{const{errors:l}=await P();if(t)for(const a of t){const d=y(l,a);d?V(r.errors,a,d):E(r.errors,a)}else r.errors=l;return l},H=async(t,l,a={valid:!0})=>{for(const d in t){const c=t[d];if(c){const{_f:o,...h}=c;if(o){const x=m.array.has(o.name),w=await Je(c,f,fe,s.shouldUseNativeValidation&&!l,x);if(w[o.name]&&(a.valid=!1,l))break;!l&&(y(w,o.name)?x?Tt(r.errors,w,o.name):V(r.errors,o.name,w[o.name]):E(r.errors,o.name))}h&&await H(h,l,a)}}return a.valid},b=()=>{for(const t of m.unMount){const l=y(n,t);l&&(l._f.refs?l._f.refs.every(a=>!Se(a)):!Se(l._f.ref))&&xe(t)}m.unMount=new Set},_=(t,l)=>(t&&l&&V(f,t,l),!X(Re(),u)),F=(t,l,a)=>St(t,m,{...A.mount?f:D(l)?u:z(t)?{[t]:l}:l},a,l),C=t=>ce(y(A.mount?f:u,t,e.shouldUnregister?y(u,t,[]):[])),N=(t,l,a={})=>{const d=y(n,t);let c=l;if(d){const o=d._f;o&&(!o.disabled&&V(f,t,lt(l,o)),c=ge(o.ref)&&O(l)?"":l,st(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?oe(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(x=>x===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):Ne(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:t,values:{...f}})))}(a.shouldDirty||a.shouldTouch)&&ie(t,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&le(t)},q=(t,l,a)=>{for(const d in l){const c=l[d],o=`${t}.${d}`,h=y(n,o);(m.array.has(t)||!_e(c)||h&&!h._f)&&!te(c)?q(o,c,a):N(o,c,a)}},G=(t,l,a={})=>{const d=y(n,t),c=m.array.has(t),o=J(l);V(f,t,o),c?(v.array.next({name:t,values:{...f}}),(p.isDirty||p.dirtyFields)&&a.shouldDirty&&v.state.next({name:t,dirtyFields:Ee(u,f),isDirty:_(t,o)})):d&&!d._f&&!O(o)?q(t,o,a):N(t,o,a),We(t,m)&&v.state.next({...r}),v.values.next({name:t,values:{...f}}),!A.mount&&i()},ne=async t=>{const l=t.target;let a=l.name,d=!0;const c=y(n,a),o=()=>l.type?Te(c._f):Vt(t);if(c){let h,x;const w=o(),Y=t.type===$e.BLUR||t.type===$e.FOCUS_OUT,dt=!Mt(c._f)&&!s.resolver&&!y(r.errors,a)&&!c._f.deps||Rt(Y,y(r.touchedFields,a),r.isSubmitted,be,T),Fe=We(a,m,Y);V(f,a,w),Y?(c._f.onBlur&&c._f.onBlur(t),L&&L(0)):c._f.onChange&&c._f.onChange(t);const we=ie(a,w,Y,!1),yt=!R(we)||Fe;if(!Y&&v.values.next({name:a,type:t.type,values:{...f}}),dt)return p.isValid&&g(),yt&&v.state.next({name:a,...Fe?{}:we});if(!Y&&Fe&&v.state.next({...r}),U(!0),s.resolver){const{errors:qe}=await P([a]),ht=Qe(r.errors,n,a),ze=Qe(qe,n,ht.name||a);h=ze.error,a=ze.name,x=R(qe)}else h=(await Je(c,f,fe,s.shouldUseNativeValidation))[a],d=isNaN(w)||w===y(f,a,w),d&&(h?x=!1:p.isValid&&(x=await H(n,!0)));d&&(c._f.deps&&le(c._f.deps),Ve(a,x,h,we))}},le=async(t,l={})=>{let a,d;const c=De(t);if(U(!0),s.resolver){const o=await Z(D(t)?t:c);a=R(o),d=t?!c.some(h=>y(o,h)):a}else t?(d=(await Promise.all(c.map(async o=>{const h=y(n,o);return await H(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!d&&!r.isValid)&&g()):d=a=await H(n);return v.state.next({...!z(t)||p.isValid&&a!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:a}:{},errors:r.errors,isValidating:!1}),l.shouldFocus&&!d&&Le(n,o=>o&&y(r.errors,o),t?c:m.mount),d},Re=t=>{const l={...u,...A.mount?f:{}};return D(t)?l:z(t)?y(l,t):t.map(a=>y(l,a))},Be=(t,l)=>({invalid:!!y((l||r).errors,t),isDirty:!!y((l||r).dirtyFields,t),isTouched:!!y((l||r).touchedFields,t),error:y((l||r).errors,t)}),at=t=>{t&&De(t).forEach(l=>E(r.errors,l)),v.state.next({errors:t?r.errors:{}})},ut=(t,l,a)=>{const d=(y(n,t,{_f:{}})._f||{}).ref;V(r.errors,t,{...l,ref:d}),v.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&d&&d.focus&&d.focus()},ot=(t,l)=>K(t)?v.values.subscribe({next:a=>t(F(void 0,l),a)}):F(t,l,!0),xe=(t,l={})=>{for(const a of t?De(t):m.mount)m.mount.delete(a),m.array.delete(a),l.keepValue||(E(n,a),E(f,a)),!l.keepError&&E(r.errors,a),!l.keepDirty&&E(r.dirtyFields,a),!l.keepTouched&&E(r.touchedFields,a),!s.shouldUnregister&&!l.keepDefaultValue&&E(u,a);v.values.next({values:{...f}}),v.state.next({...r,...l.keepDirty?{isDirty:_()}:{}}),!l.keepIsValid&&g()},pe=(t,l={})=>{let a=y(n,t);const d=re(l.disabled);return V(n,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...l}}),m.mount.add(t),a?d&&V(f,t,l.disabled?void 0:y(f,t,Te(a._f))):se(t,!0,l.value),{...d?{disabled:l.disabled}:{},...s.shouldUseNativeValidation?{required:!!l.required,min:ae(l.min),max:ae(l.max),minLength:ae(l.minLength),maxLength:ae(l.maxLength),pattern:ae(l.pattern)}:{},name:t,onChange:ne,onBlur:ne,ref:c=>{if(c){pe(t,l),a=y(n,t);const o=D(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Ct(o),x=a._f.refs||[];if(h?x.find(w=>w===o):o===a._f.ref)return;V(n,t,{_f:{...a._f,...h?{refs:[...x.filter(Se),o,...Array.isArray(y(u,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),se(t,!1,void 0,o)}else a=y(n,t,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||l.shouldUnregister)&&!(pt(m.array,t)&&A.action)&&m.unMount.add(t)}}},Ue=()=>s.shouldFocusError&&Le(n,t=>t&&y(r.errors,t),m.mount),ct=(t,l)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let d=J(f);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:o}=await P();r.errors=c,d=o}else await H(n);E(r.errors,"root"),R(r.errors)?(v.state.next({errors:{}}),await t(d,a)):(l&&await l({...r.errors},a),Ue(),setTimeout(Ue)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ft=(t,l={})=>{y(n,t)&&(D(l.defaultValue)?G(t,y(u,t)):(G(t,l.defaultValue),V(u,t,l.defaultValue)),l.keepTouched||E(r.touchedFields,t),l.keepDirty||(E(r.dirtyFields,t),r.isDirty=l.defaultValue?_(t,y(u,t)):_()),l.keepError||(E(r.errors,t),p.isValid&&g()),v.state.next({...r}))},Ie=(t,l={})=>{const a=t||u,d=J(a),c=t&&!R(t)?d:u;if(l.keepDefaultValues||(u=a),!l.keepValues){if(l.keepDirtyValues||B)for(const o of m.mount)y(r.dirtyFields,o)?V(c,o,y(f,o)):G(o,y(c,o));else{if(Oe&&D(t))for(const o of m.mount){const h=y(n,o);if(h&&h._f){const x=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(ge(x)){const w=x.closest("form");if(w){w.reset();break}}}}n={}}f=e.shouldUnregister?l.keepDefaultValues?J(u):{}:d,v.array.next({values:{...c}}),v.values.next({values:{...c}})}m={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!A.mount&&i(),A.mount=!p.isValid||!!l.keepIsValid,A.watch=!!e.shouldUnregister,v.state.next({submitCount:l.keepSubmitCount?r.submitCount:0,isDirty:l.keepDirty?r.isDirty:!!(l.keepDefaultValues&&!X(t,u)),isSubmitted:l.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:l.keepDirtyValues?r.dirtyFields:l.keepDefaultValues&&t?Ee(u,t):{},touchedFields:l.keepTouched?r.touchedFields:{},errors:l.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Pe=(t,l)=>Ie(K(t)?t(f):t,l);return{control:{register:pe,unregister:xe,getFieldState:Be,_executeSchema:P,_getWatch:F,_getDirty:_,_updateValid:g,_removeUnmounted:b,_updateFieldArray:$,_getFieldArray:C,_reset:Ie,_resetDefaultValues:()=>K(s.defaultValues)&&s.defaultValues().then(t=>{Pe(t,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:v,_proxyFormState:p,get _fields(){return n},get _formValues(){return f},get _state(){return A},set _state(t){A=t},get _defaultValues(){return u},get _names(){return m},set _names(t){m=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:le,register:pe,handleSubmit:ct,watch:ot,setValue:G,getValues:Re,reset:Pe,resetField:ft,clearErrors:at,unregister:xe,setError:ut,setFocus:(t,l={})=>{const a=y(n,t),d=a&&a._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),l.shouldSelect&&c.select())}},getFieldState:Be}}function Pt(e={}){const i=Q.useRef(),[s,r]=Q.useState({isDirty:!1,isValidating:!1,isLoading:K(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:K(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...It(e,()=>r(u=>({...u}))),formState:s});const n=i.current.control;return n._options=e,kt({subject:n._subjects.state,next:u=>{Dt(u,n._proxyFormState,n._updateFormState,!0)&&r({...n._formState})}}),Q.useEffect(()=>{e.values&&!X(e.values,n._defaultValues)?n._reset(e.values,n._options.resetOptions):n._resetDefaultValues()},[e.values,n]),Q.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),i.current.formState=wt(s,n),i.current}const qt="_form-container_zl83l_1",zt="_form-title_zl83l_12",$t="_form_zl83l_1",Ht="_form-button_zl83l_22",Wt="_redirect-block_zl83l_44",ue={"form-container":"_form-container_zl83l_1",formContainer:qt,"form-title":"_form-title_zl83l_12",formTitle:zt,form:$t,"form-button":"_form-button_zl83l_22",formButton:Ht,"redirect-block":"_redirect-block_zl83l_44",redirectBlock:Wt},jt="_field_6s00l_1",Kt="_text-input_6s00l_7",Zt="_input-error_6s00l_22",Gt="_input-error-message_6s00l_26",de={field:jt,"text-input":"_text-input_6s00l_7",textInput:Kt,"input-error":"_input-error_6s00l_22",inputError:Zt,"input-error-message":"_input-error-message_6s00l_26",inputErrorMessage:Gt},Xe=({id:e,label:i,formRegister:s,error:r,...n})=>ye("div",{className:de.field,children:[M("label",{htmlFor:e,children:i}),M("input",{className:gt(de.textInput,{[de.inputError]:!!r}),id:e,...n,...s,autoComplete:"on","data-testid":"text-input-element",role:"text-input"}),M("div",{className:de.inputErrorMessage,children:r==null?void 0:r.message})]}),er=({handleClick:e,contentContext:i,errorMessage:s,isLoading:r})=>{const{t:n}=vt(),{register:u,handleSubmit:f,formState:{errors:A}}=Pt({mode:"onSubmit"}),m=(B,T)=>{T==null||T.preventDefault(),e&&e({email:B.email,password:B.password})},{title:L,question:j,redirectLink:p,redirectLinkTitle:v}=i;return ye("div",{className:ue.formContainer,children:[M("h2",{className:ue.formTitle,children:L}),ye("form",{className:ue.form,onSubmit:f(m),noValidate:!0,children:[M(Xe,{label:n("email"),id:"email",type:"email","aria-label":"email",formRegister:u("email",{required:{value:!0,message:n("form-validation.enter-email")},minLength:{value:8,message:n("form-validation.8-chars")},pattern:{value:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,message:n("form-validation.email-not-valid")}}),error:A.email}),M(Xe,{label:n("pass"),id:"password",type:"password","aria-label":"password",formRegister:u("password",{required:{value:!0,message:n("form-validation.enter-password")},minLength:{value:8,message:n("form-validation.8-chars")},pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,message:n("form-validation.password-should-contain-letter-number-special")}}),error:A.password}),s&&M(_t,{isError:!0,children:s}),M("button",{disabled:r,type:"submit",className:ue.formButton,role:"submit-btn",children:r?M(mt,{}):M(bt,{children:L})})]}),ye("div",{className:ue.redirectBlock,children:[M("p",{children:j}),M(At,{to:p,children:v})]})]})};export{er as A};
