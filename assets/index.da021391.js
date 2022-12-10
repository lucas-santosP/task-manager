var C=Object.defineProperty,S=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var g=(e,a,r)=>a in e?C(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,u=(e,a)=>{for(var r in a||(a={}))F.call(a,r)&&g(e,r,a[r]);if(p)for(var r of p(a))j.call(a,r)&&g(e,r,a[r]);return e},c=(e,a)=>S(e,k(a));import{s as b,j as s,b as t,w as I,x as E,g as f,q as w}from"./vendor.f11f8cfa.js";import{a as L,P as y,c as x,L as q,s as n,F as A,I as d,f as N,g as R}from"./index.996a23e1.js";import{A as U}from"./index.c1e366ca.js";const z=b.div`
  width: 100%;
  max-width: 700px;
  position: relative;
  z-index: 2;

  small {
    width: 100%;
    text-align: left;
    margin-bottom: 1rem;
    color: #757575;
    padding: 0 0.1rem;
  }
`,H=b.img`
  object-fit: cover;
  position: absolute;
  padding-bottom: 2rem;
  height: 100vh;
  top: 0;
  right: 0;

  @media (max-width: ${L.md}) {
    display: none;
  }
`,M=({message:e})=>s(y,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[s(x,{children:[" ",e]}),s("p",{children:["Go back to the ",t(q,{to:"/home",children:"home"}),"."]}),t(I,{size:"7rem"})]}),O=()=>{if(!n.userStore.user)return t(M,{message:"You are not authenticated!"});const[e,a]=f.exports.useState({name:n.userStore.user.name,email:n.userStore.user.email,password:"",newPassword:""}),[r,h]=f.exports.useState(!1);function i(l){const{value:o,name:m}=l.target;a(v=>c(u({},v),{[m]:o}))}async function P(){var l;try{h(!0);const o=c(u({},e),{_id:((l=n.userStore.user)==null?void 0:l._id)||""});await n.userStore.update(o),w.success("Profile updated successfully!")}catch(o){const m=R(o);w.error(m)}finally{h(!1)}}return s(y,{children:[t(x,{children:"Profile"}),s(z,{children:[s(U,{children:["Here you can update your profile information.",t("br",{})," ",t("b",{children:"Note:"})," the required fields are marked with an asterisk (*)."]}),s(A,{onSubmit:P,isLoading:r,buttonText:"Update",children:[t(d,{focused:!0,label:"Name *",name:"name",value:e.name,onChange:i}),t(d,{label:"Email *",type:"email",name:"email",value:e.email,onChange:i}),t(d,{label:"Password *",type:"password",name:"password",value:e.password,onChange:i}),t(d,{label:"New Password ",type:"password",name:"newPassword",value:e.newPassword,onChange:i}),t("small",{children:"- Only required if you want to change it."})]})]}),t(H,{src:N,alt:"background texture"})]})};var Y=E(O);export{Y as default};
