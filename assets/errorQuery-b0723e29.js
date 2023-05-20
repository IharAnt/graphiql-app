import{f as J,d as ye,j as C,c as et,e as _t,S as mt,F as bt,L as At}from"./index-d6f19f37.js";var oe=e=>e.type==="checkbox",te=e=>e instanceof Date,O=e=>e==null;const tt=e=>typeof e=="object";var D=e=>!O(e)&&!Array.isArray(e)&&tt(e)&&!te(e),Vt=e=>D(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,pt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,xt=(e,i)=>e.has(pt(i)),wt=e=>{const i=e.constructor&&e.constructor.prototype;return D(i)&&i.hasOwnProperty("isPrototypeOf")},Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function G(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Oe&&(e instanceof Blob||e instanceof FileList))&&(s||D(e)))if(i=s?[]:{},!Array.isArray(e)&&!wt(e))i=e;else for(const r in e)i[r]=G(e[r]);else return e;return i}var ce=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,y=(e,i,s)=>{if(!i||!D(e))return s;const r=ce(i.split(/[,[\].]+?/)).reduce((n,u)=>O(n)?n:n[u],e);return k(r)||r===e?k(e[i])?s:e[i]:r};const $e={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},H={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};J.createContext(null);var Ft=(e,i,s,r=!0)=>{const n={defaultValues:i._defaultValues};for(const u in e)Object.defineProperty(n,u,{get:()=>{const f=u;return i._proxyFormState[f]!==I.all&&(i._proxyFormState[f]=!r||I.all),s&&(s[f]=!0),e[f]}});return n},B=e=>D(e)&&!Object.keys(e).length,kt=(e,i,s,r)=>{s(e);const{name:n,...u}=e;return B(u)||Object.keys(u).length>=Object.keys(i).length||Object.keys(u).find(f=>i[f]===(!r||I.all))},ke=e=>Array.isArray(e)?e:[e];function Dt(e){const i=J.useRef(e);i.current=e,J.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var z=e=>typeof e=="string",Et=(e,i,s,r,n)=>z(e)?(r&&i.watch.add(e),y(s,e,n)):Array.isArray(e)?e.map(u=>(r&&i.watch.add(u),y(s,u))):(r&&(i.watchAll=!0),s),Ne=e=>/^\w*$/.test(e),rt=e=>ce(e.replace(/["|']|\]/g,"").split(/\.|\[/));function V(e,i,s){let r=-1;const n=Ne(i)?[i]:rt(i),u=n.length,f=u-1;for(;++r<u;){const A=n[r];let m=s;if(r!==f){const L=e[A];m=D(L)||Array.isArray(L)?L:isNaN(+n[r+1])?{}:[]}e[A]=m,e=e[A]}return e}var St=(e,i,s,r,n)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[r]:n||!0}}:{};const Le=(e,i,s)=>{for(const r of s||Object.keys(e)){const n=y(e,r);if(n){const{_f:u,...f}=n;if(u&&i(u.name)){if(u.ref.focus){u.ref.focus();break}else if(u.refs&&u.refs[0].focus){u.refs[0].focus();break}}else D(f)&&Le(f,i)}}};var We=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),He=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Tt=(e,i,s)=>{const r=ce(y(e,s));return V(r,"root",i[s]),V(e,s,r),e},re=e=>typeof e=="boolean",Ce=e=>e.type==="file",K=e=>typeof e=="function",he=e=>{if(!Oe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ge=e=>z(e),Me=e=>e.type==="radio",ve=e=>e instanceof RegExp;const je={value:!1,isValid:!1},Ke={value:!0,isValid:!0};var st=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?Ke:{value:e[0].value,isValid:!0}:Ke:je}return je};const Ze={isValid:!1,value:null};var it=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,Ze):Ze;function Qe(e,i,s="validate"){if(ge(e)||Array.isArray(e)&&e.every(ge)||re(e)&&!e)return{type:s,message:ge(e)?e:"",ref:i}}var ee=e=>D(e)&&!ve(e)?e:{value:e,message:""},Ge=async(e,i,s,r,n)=>{const{ref:u,refs:f,required:A,maxLength:m,minLength:L,min:j,max:x,pattern:v,validate:R,name:T,valueAsNumber:be,mount:fe,disabled:Ae}=e._f,h=y(i,T);if(!fe||Ae)return{};const U=f?f[0]:u,$=b=>{r&&U.reportValidity&&(U.setCustomValidity(re(b)?"":b||""),U.reportValidity())},E={},se=Me(u),ie=oe(u),Ve=se||ie,P=(be||Ce(u))&&k(u.value)&&k(h)||he(u)&&u.value===""||h===""||Array.isArray(h)&&!h.length,Z=St.bind(null,T,s,E),W=(b,_,w,N=H.maxLength,M=H.minLength)=>{const q=b?_:w;E[T]={type:b?N:M,message:q,ref:u,...Z(b?N:M,q)}};if(n?!Array.isArray(h)||!h.length:A&&(!Ve&&(P||O(h))||re(h)&&!h||ie&&!st(f).isValid||se&&!it(f).isValid)){const{value:b,message:_}=ge(A)?{value:!!A,message:A}:ee(A);if(b&&(E[T]={type:H.required,message:_,ref:U,...Z(H.required,_)},!s))return $(_),E}if(!P&&(!O(j)||!O(x))){let b,_;const w=ee(x),N=ee(j);if(!O(h)&&!isNaN(h)){const M=u.valueAsNumber||h&&+h;O(w.value)||(b=M>w.value),O(N.value)||(_=M<N.value)}else{const M=u.valueAsDate||new Date(h),q=ae=>new Date(new Date().toDateString()+" "+ae),Q=u.type=="time",ne=u.type=="week";z(w.value)&&h&&(b=Q?q(h)>q(w.value):ne?h>w.value:M>new Date(w.value)),z(N.value)&&h&&(_=Q?q(h)<q(N.value):ne?h<N.value:M<new Date(N.value))}if((b||_)&&(W(!!b,w.message,N.message,H.max,H.min),!s))return $(E[T].message),E}if((m||L)&&!P&&(z(h)||n&&Array.isArray(h))){const b=ee(m),_=ee(L),w=!O(b.value)&&h.length>+b.value,N=!O(_.value)&&h.length<+_.value;if((w||N)&&(W(w,b.message,_.message),!s))return $(E[T].message),E}if(v&&!P&&z(h)){const{value:b,message:_}=ee(v);if(ve(b)&&!h.match(b)&&(E[T]={type:H.pattern,message:_,ref:u,...Z(H.pattern,_)},!s))return $(_),E}if(R){if(K(R)){const b=await R(h,i),_=Qe(b,U);if(_&&(E[T]={..._,...Z(H.validate,_.message)},!s))return $(_.message),E}else if(D(R)){let b={};for(const _ in R){if(!B(b)&&!s)break;const w=Qe(await R[_](h,i),U,_);w&&(b={...w,...Z(_,w.message)},$(w.message),s&&(E[T]=b))}if(!B(b)&&(E[T]={ref:U,...b},!s))return E}}return $(!0),E};function Lt(e,i){const s=i.slice(0,-1).length;let r=0;for(;r<s;)e=k(e)?r++:e[i[r++]];return e}function Ot(e){for(const i in e)if(!k(e[i]))return!1;return!0}function S(e,i){const s=Array.isArray(i)?i:Ne(i)?[i]:rt(i),r=s.length===1?e:Lt(e,s),n=s.length-1,u=s[n];return r&&delete r[u],n!==0&&(D(r)&&B(r)||Array.isArray(r)&&Ot(r))&&S(e,s.slice(0,-1)),e}function De(){let e=[];return{get observers(){return e},next:n=>{for(const u of e)u.next&&u.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(u=>u!==n)}}),unsubscribe:()=>{e=[]}}}var _e=e=>O(e)||!tt(e);function X(e,i){if(_e(e)||_e(i))return e===i;if(te(e)&&te(i))return e.getTime()===i.getTime();const s=Object.keys(e),r=Object.keys(i);if(s.length!==r.length)return!1;for(const n of s){const u=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const f=i[n];if(te(u)&&te(f)||D(u)&&D(f)||Array.isArray(u)&&Array.isArray(f)?!X(u,f):u!==f)return!1}}return!0}var nt=e=>e.type==="select-multiple",Nt=e=>Me(e)||oe(e),Ee=e=>he(e)&&e.isConnected,at=e=>{for(const i in e)if(K(e[i]))return!0;return!1};function me(e,i={}){const s=Array.isArray(e);if(D(e)||s)for(const r in e)Array.isArray(e[r])||D(e[r])&&!at(e[r])?(i[r]=Array.isArray(e[r])?[]:{},me(e[r],i[r])):O(e[r])||(i[r]=!0);return i}function lt(e,i,s){const r=Array.isArray(e);if(D(e)||r)for(const n in e)Array.isArray(e[n])||D(e[n])&&!at(e[n])?k(i)||_e(s[n])?s[n]=Array.isArray(e[n])?me(e[n],[]):{...me(e[n])}:lt(e[n],O(i)?{}:i[n],s[n]):s[n]=!X(e[n],i[n]);return s}var Se=(e,i)=>lt(e,i,me(i)),ut=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:r})=>k(e)?e:i?e===""?NaN:e&&+e:s&&z(e)?new Date(e):r?r(e):e;function Te(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Ce(i)?i.files:Me(i)?it(e.refs).value:nt(i)?[...i.selectedOptions].map(({value:s})=>s):oe(i)?st(e.refs).value:ut(k(i.value)?e.ref.value:i.value,e)}var Ct=(e,i,s,r)=>{const n={};for(const u of e){const f=y(i,u);f&&V(n,u,f._f)}return{criteriaMode:s,names:[...e],fields:n,shouldUseNativeValidation:r}},le=e=>k(e)?e:ve(e)?e.source:D(e)?ve(e.value)?e.value.source:e.value:e,Mt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Je(e,i,s){const r=y(e,s);if(r||Ne(s))return{error:r,name:s};const n=s.split(".");for(;n.length;){const u=n.join("."),f=y(i,u),A=y(e,u);if(f&&!Array.isArray(f)&&s!==u)return{name:s};if(A&&A.type)return{name:u,error:A};n.pop()}return{name:s}}var Bt=(e,i,s,r,n)=>n.isOnAll?!1:!s&&n.isOnTouch?!(i||e):(s?r.isOnBlur:n.isOnBlur)?!e:(s?r.isOnChange:n.isOnChange)?e:!0,Rt=(e,i)=>!ce(y(e,i)).length&&S(e,i);const Ut={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function It(e={},i){let s={...Ut,...e},r={submitCount:0,isDirty:!1,isLoading:K(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},u=D(s.defaultValues)||D(s.values)?G(s.defaultValues||s.values)||{}:{},f=s.shouldUnregister?{}:G(u),A={action:!1,mount:!1,watch:!1},m={mount:new Set,unMount:new Set,array:new Set,watch:new Set},L,j=0;const x={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:De(),array:De(),state:De()},R=e.resetOptions&&e.resetOptions.keepDirtyValues,T=We(s.mode),be=We(s.reValidateMode),fe=s.criteriaMode===I.all,Ae=t=>a=>{clearTimeout(j),j=setTimeout(t,a)},h=async t=>{if(x.isValid||t){const a=s.resolver?B((await P()).errors):await W(n,!0);a!==r.isValid&&v.state.next({isValid:a})}},U=t=>x.isValidating&&v.state.next({isValidating:t}),$=(t,a=[],l,d,c=!0,o=!0)=>{if(d&&l){if(A.action=!0,o&&Array.isArray(y(n,t))){const g=l(y(n,t),d.argA,d.argB);c&&V(n,t,g)}if(o&&Array.isArray(y(r.errors,t))){const g=l(y(r.errors,t),d.argA,d.argB);c&&V(r.errors,t,g),Rt(r.errors,t)}if(x.touchedFields&&o&&Array.isArray(y(r.touchedFields,t))){const g=l(y(r.touchedFields,t),d.argA,d.argB);c&&V(r.touchedFields,t,g)}x.dirtyFields&&(r.dirtyFields=Se(u,f)),v.state.next({name:t,isDirty:_(t,a),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else V(f,t,a)},E=(t,a)=>{V(r.errors,t,a),v.state.next({errors:r.errors})},se=(t,a,l,d)=>{const c=y(n,t);if(c){const o=y(f,t,k(l)?y(u,t):l);k(o)||d&&d.defaultChecked||a?V(f,t,a?o:Te(c._f)):M(t,o),A.mount&&h()}},ie=(t,a,l,d,c)=>{let o=!1,g=!1;const p={name:t};if(!l||d){x.isDirty&&(g=r.isDirty,r.isDirty=p.isDirty=_(),o=g!==p.isDirty);const F=X(y(u,t),a);g=y(r.dirtyFields,t),F?S(r.dirtyFields,t):V(r.dirtyFields,t,!0),p.dirtyFields=r.dirtyFields,o=o||x.dirtyFields&&g!==!F}if(l){const F=y(r.touchedFields,t);F||(V(r.touchedFields,t,l),p.touchedFields=r.touchedFields,o=o||x.touchedFields&&F!==l)}return o&&c&&v.state.next(p),o?p:{}},Ve=(t,a,l,d)=>{const c=y(r.errors,t),o=x.isValid&&re(a)&&r.isValid!==a;if(e.delayError&&l?(L=Ae(()=>E(t,l)),L(e.delayError)):(clearTimeout(j),L=null,l?V(r.errors,t,l):S(r.errors,t)),(l?!X(c,l):c)||!B(d)||o){const g={...d,...o&&re(a)?{isValid:a}:{},errors:r.errors,name:t};r={...r,...g},v.state.next(g)}U(!1)},P=async t=>s.resolver(f,s.context,Ct(t||m.mount,n,s.criteriaMode,s.shouldUseNativeValidation)),Z=async t=>{const{errors:a}=await P();if(t)for(const l of t){const d=y(a,l);d?V(r.errors,l,d):S(r.errors,l)}else r.errors=a;return a},W=async(t,a,l={valid:!0})=>{for(const d in t){const c=t[d];if(c){const{_f:o,...g}=c;if(o){const p=m.array.has(o.name),F=await Ge(c,f,fe,s.shouldUseNativeValidation&&!a,p);if(F[o.name]&&(l.valid=!1,a))break;!a&&(y(F,o.name)?p?Tt(r.errors,F,o.name):V(r.errors,o.name,F[o.name]):S(r.errors,o.name))}g&&await W(g,a,l)}}return l.valid},b=()=>{for(const t of m.unMount){const a=y(n,t);a&&(a._f.refs?a._f.refs.every(l=>!Ee(l)):!Ee(a._f.ref))&&pe(t)}m.unMount=new Set},_=(t,a)=>(t&&a&&V(f,t,a),!X(Be(),u)),w=(t,a,l)=>Et(t,m,{...A.mount?f:k(a)?u:z(t)?{[t]:a}:a},l,a),N=t=>ce(y(A.mount?f:u,t,e.shouldUnregister?y(u,t,[]):[])),M=(t,a,l={})=>{const d=y(n,t);let c=a;if(d){const o=d._f;o&&(!o.disabled&&V(f,t,ut(a,o)),c=he(o.ref)&&O(a)?"":a,nt(o.ref)?[...o.ref.options].forEach(g=>g.selected=c.includes(g.value)):o.refs?oe(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(p=>p===g.value):c===g.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(g=>g.checked=g.value===c):Ce(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:t,values:{...f}})))}(l.shouldDirty||l.shouldTouch)&&ie(t,c,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ae(t)},q=(t,a,l)=>{for(const d in a){const c=a[d],o=`${t}.${d}`,g=y(n,o);(m.array.has(t)||!_e(c)||g&&!g._f)&&!te(c)?q(o,c,l):M(o,c,l)}},Q=(t,a,l={})=>{const d=y(n,t),c=m.array.has(t),o=G(a);V(f,t,o),c?(v.array.next({name:t,values:{...f}}),(x.isDirty||x.dirtyFields)&&l.shouldDirty&&v.state.next({name:t,dirtyFields:Se(u,f),isDirty:_(t,o)})):d&&!d._f&&!O(o)?q(t,o,l):M(t,o,l),He(t,m)&&v.state.next({...r}),v.values.next({name:t,values:{...f}}),!A.mount&&i()},ne=async t=>{const a=t.target;let l=a.name,d=!0;const c=y(n,l),o=()=>a.type?Te(c._f):Vt(t);if(c){let g,p;const F=o(),Y=t.type===$e.BLUR||t.type===$e.FOCUS_OUT,gt=!Mt(c._f)&&!s.resolver&&!y(r.errors,l)&&!c._f.deps||Bt(Y,y(r.touchedFields,l),r.isSubmitted,be,T),we=He(l,m,Y);V(f,l,F),Y?(c._f.onBlur&&c._f.onBlur(t),L&&L(0)):c._f.onChange&&c._f.onChange(t);const Fe=ie(l,F,Y,!1),ht=!B(Fe)||we;if(!Y&&v.values.next({name:l,type:t.type,values:{...f}}),gt)return x.isValid&&h(),ht&&v.state.next({name:l,...we?{}:Fe});if(!Y&&we&&v.state.next({...r}),U(!0),s.resolver){const{errors:qe}=await P([l]),vt=Je(r.errors,n,l),ze=Je(qe,n,vt.name||l);g=ze.error,l=ze.name,p=B(qe)}else g=(await Ge(c,f,fe,s.shouldUseNativeValidation))[l],d=isNaN(F)||F===y(f,l,F),d&&(g?p=!1:x.isValid&&(p=await W(n,!0)));d&&(c._f.deps&&ae(c._f.deps),Ve(l,p,g,Fe))}},ae=async(t,a={})=>{let l,d;const c=ke(t);if(U(!0),s.resolver){const o=await Z(k(t)?t:c);l=B(o),d=t?!c.some(g=>y(o,g)):l}else t?(d=(await Promise.all(c.map(async o=>{const g=y(n,o);return await W(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!d&&!r.isValid)&&h()):d=l=await W(n);return v.state.next({...!z(t)||x.isValid&&l!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:l}:{},errors:r.errors,isValidating:!1}),a.shouldFocus&&!d&&Le(n,o=>o&&y(r.errors,o),t?c:m.mount),d},Be=t=>{const a={...u,...A.mount?f:{}};return k(t)?a:z(t)?y(a,t):t.map(l=>y(a,l))},Re=(t,a)=>({invalid:!!y((a||r).errors,t),isDirty:!!y((a||r).dirtyFields,t),isTouched:!!y((a||r).touchedFields,t),error:y((a||r).errors,t)}),ot=t=>{t&&ke(t).forEach(a=>S(r.errors,a)),v.state.next({errors:t?r.errors:{}})},ct=(t,a,l)=>{const d=(y(n,t,{_f:{}})._f||{}).ref;V(r.errors,t,{...a,ref:d}),v.state.next({name:t,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&d&&d.focus&&d.focus()},ft=(t,a)=>K(t)?v.values.subscribe({next:l=>t(w(void 0,a),l)}):w(t,a,!0),pe=(t,a={})=>{for(const l of t?ke(t):m.mount)m.mount.delete(l),m.array.delete(l),a.keepValue||(S(n,l),S(f,l)),!a.keepError&&S(r.errors,l),!a.keepDirty&&S(r.dirtyFields,l),!a.keepTouched&&S(r.touchedFields,l),!s.shouldUnregister&&!a.keepDefaultValue&&S(u,l);v.values.next({values:{...f}}),v.state.next({...r,...a.keepDirty?{isDirty:_()}:{}}),!a.keepIsValid&&h()},xe=(t,a={})=>{let l=y(n,t);const d=re(a.disabled);return V(n,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...a}}),m.mount.add(t),l?d&&V(f,t,a.disabled?void 0:y(f,t,Te(l._f))):se(t,!0,a.value),{...d?{disabled:a.disabled}:{},...s.shouldUseNativeValidation?{required:!!a.required,min:le(a.min),max:le(a.max),minLength:le(a.minLength),maxLength:le(a.maxLength),pattern:le(a.pattern)}:{},name:t,onChange:ne,onBlur:ne,ref:c=>{if(c){xe(t,a),l=y(n,t);const o=k(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=Nt(o),p=l._f.refs||[];if(g?p.find(F=>F===o):o===l._f.ref)return;V(n,t,{_f:{...l._f,...g?{refs:[...p.filter(Ee),o,...Array.isArray(y(u,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),se(t,!1,void 0,o)}else l=y(n,t,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||a.shouldUnregister)&&!(xt(m.array,t)&&A.action)&&m.unMount.add(t)}}},Ue=()=>s.shouldFocusError&&Le(n,t=>t&&y(r.errors,t),m.mount),dt=(t,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let d=G(f);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:o}=await P();r.errors=c,d=o}else await W(n);S(r.errors,"root"),B(r.errors)?(v.state.next({errors:{}}),await t(d,l)):(a&&await a({...r.errors},l),Ue(),setTimeout(Ue)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(r.errors),submitCount:r.submitCount+1,errors:r.errors})},yt=(t,a={})=>{y(n,t)&&(k(a.defaultValue)?Q(t,y(u,t)):(Q(t,a.defaultValue),V(u,t,a.defaultValue)),a.keepTouched||S(r.touchedFields,t),a.keepDirty||(S(r.dirtyFields,t),r.isDirty=a.defaultValue?_(t,y(u,t)):_()),a.keepError||(S(r.errors,t),x.isValid&&h()),v.state.next({...r}))},Ie=(t,a={})=>{const l=t||u,d=G(l),c=t&&!B(t)?d:u;if(a.keepDefaultValues||(u=l),!a.keepValues){if(a.keepDirtyValues||R)for(const o of m.mount)y(r.dirtyFields,o)?V(c,o,y(f,o)):Q(o,y(c,o));else{if(Oe&&k(t))for(const o of m.mount){const g=y(n,o);if(g&&g._f){const p=Array.isArray(g._f.refs)?g._f.refs[0]:g._f.ref;if(he(p)){const F=p.closest("form");if(F){F.reset();break}}}}n={}}f=e.shouldUnregister?a.keepDefaultValues?G(u):{}:d,v.array.next({values:{...c}}),v.values.next({values:{...c}})}m={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!A.mount&&i(),A.mount=!x.isValid||!!a.keepIsValid,A.watch=!!e.shouldUnregister,v.state.next({submitCount:a.keepSubmitCount?r.submitCount:0,isDirty:a.keepDirty?r.isDirty:!!(a.keepDefaultValues&&!X(t,u)),isSubmitted:a.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:a.keepDirtyValues?r.dirtyFields:a.keepDefaultValues&&t?Se(u,t):{},touchedFields:a.keepTouched?r.touchedFields:{},errors:a.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Pe=(t,a)=>Ie(K(t)?t(f):t,a);return{control:{register:xe,unregister:pe,getFieldState:Re,_executeSchema:P,_getWatch:w,_getDirty:_,_updateValid:h,_removeUnmounted:b,_updateFieldArray:$,_getFieldArray:N,_reset:Ie,_resetDefaultValues:()=>K(s.defaultValues)&&s.defaultValues().then(t=>{Pe(t,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:v,_proxyFormState:x,get _fields(){return n},get _formValues(){return f},get _state(){return A},set _state(t){A=t},get _defaultValues(){return u},get _names(){return m},set _names(t){m=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ae,register:xe,handleSubmit:dt,watch:ft,setValue:Q,getValues:Be,reset:Pe,resetField:yt,clearErrors:ot,unregister:pe,setError:ct,setFocus:(t,a={})=>{const l=y(n,t),d=l&&l._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),a.shouldSelect&&c.select())}},getFieldState:Re}}function Pt(e={}){const i=J.useRef(),[s,r]=J.useState({isDirty:!1,isValidating:!1,isLoading:K(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:K(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...It(e,()=>r(u=>({...u}))),formState:s});const n=i.current.control;return n._options=e,Dt({subject:n._subjects.state,next:u=>{kt(u,n._proxyFormState,n._updateFormState,!0)&&r({...n._formState})}}),J.useEffect(()=>{e.values&&!X(e.values,n._defaultValues)?n._reset(e.values,n._options.resetOptions):n._resetDefaultValues()},[e.values,n]),J.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),i.current.formState=Ft(s,n),i.current}const qt="_form-container_zl83l_1",zt="_form-title_zl83l_12",$t="_form_zl83l_1",Wt="_form-button_zl83l_22",Ht="_redirect-block_zl83l_44",ue={"form-container":"_form-container_zl83l_1",formContainer:qt,"form-title":"_form-title_zl83l_12",formTitle:zt,form:$t,"form-button":"_form-button_zl83l_22",formButton:Wt,"redirect-block":"_redirect-block_zl83l_44",redirectBlock:Ht},jt="_field_6s00l_1",Kt="_text-input_6s00l_7",Zt="_input-error_6s00l_22",Qt="_input-error-message_6s00l_26",de={field:jt,"text-input":"_text-input_6s00l_7",textInput:Kt,"input-error":"_input-error_6s00l_22",inputError:Zt,"input-error-message":"_input-error-message_6s00l_26",inputErrorMessage:Qt},Xe=({id:e,label:i,formRegister:s,error:r,...n})=>ye("div",{className:de.field,children:[C("label",{htmlFor:e,children:i}),C("input",{className:et(de.textInput,{[de.inputError]:!!r}),id:e,...n,...s,autoComplete:"on","data-testid":"text-input-element",role:"text-input"}),C("div",{className:de.inputErrorMessage,children:r==null?void 0:r.message})]}),Gt="_message-error_4l5td_1",Jt={"message-error":"_message-error_4l5td_1",messageError:Gt},Xt=({children:e,className:i,isError:s=!1})=>C("p",{className:et(i,{[Jt.messageError]:s}),children:e}),ir=({handleClick:e,contentContext:i,errorMessage:s,isLoading:r})=>{const{t:n}=_t(),{register:u,handleSubmit:f,formState:{errors:A}}=Pt({mode:"onSubmit"}),m=(R,T)=>{T==null||T.preventDefault(),e&&e({email:R.email,password:R.password})},{title:L,question:j,redirectLink:x,redirectLinkTitle:v}=i;return ye("div",{className:ue.formContainer,children:[C("h2",{className:ue.formTitle,children:L}),ye("form",{className:ue.form,onSubmit:f(m),noValidate:!0,children:[C(Xe,{label:n("email"),id:"email",type:"email","aria-label":"email",formRegister:u("email",{required:{value:!0,message:n("form-validation.enter-email")},minLength:{value:8,message:n("form-validation.8-chars")},pattern:{value:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,message:n("form-validation.email-not-valid")}}),error:A.email}),C(Xe,{label:n("pass"),id:"password",type:"password","aria-label":"password",formRegister:u("password",{required:{value:!0,message:n("form-validation.enter-password")},minLength:{value:8,message:n("form-validation.8-chars")},pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,message:n("form-validation.password-should-contain-letter-number-special")}}),error:A.password}),s&&C(Xt,{isError:!0,children:s}),C("button",{disabled:r,type:"submit",className:ue.formButton,role:"submit-btn",children:r?C(mt,{}):C(bt,{children:L})})]}),ye("div",{className:ue.redirectBlock,children:[C("p",{children:j}),C(At,{to:x,children:v})]})]})},Yt=e=>typeof e=="object"&&e!=null&&"status"in e,Ye=e=>typeof e=="object"&&e!=null&&"message"in e&&typeof e.message=="string",nr=e=>e?Yt(e)?"error"in e?e.error:Ye(e.data)?e.data.message:"unknown error":Ye(e)?e.message:"unknown error":"";export{ir as A,nr as g};
