import{e as d,m as l,r as n,j as t,i,g as m,h,S as p}from"./index-d6f19f37.js";import{A as f,g as A}from"./errorQuery-b0723e29.js";const E=()=>{const{t:e}=d(),[s,,a,r]=l(i),o=({email:g,password:u})=>{s(g,u)},c=n.useMemo(()=>({title:e("sign-up"),question:e("have-acc"),redirectLink:"/login",redirectLinkTitle:e("sign-in")}),[e]);return t(f,{contentContext:c,handleClick:o,isLoading:a,errorMessage:r&&A(r)})},v=()=>{const e=m(),[s,a]=h(i);return n.useEffect(()=>{s&&e("/main")},[e,s]),a?t(p,{}):s?null:t("div",{className:"wrapper",children:t(E,{})})};export{v as default};
