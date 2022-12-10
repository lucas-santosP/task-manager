var N=Object.defineProperty,I=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var k=(e,o,t)=>o in e?N(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))P.call(o,t)&&k(e,t,o[t]);if(b)for(var t of b(o))j.call(o,t)&&k(e,t,o[t]);return e},T=(e,o)=>I(e,M(o));import{j as s,b as a,K as D,s as n,A as S,M as F,N as H,O as z,P as E,x as g,Q as U,g as d,u as O,q as R}from"./vendor.f11f8cfa.js";import{A as V,C as G,b as h,a as x,u as A,P as _,c as B,s as y,M as q,F as K,I as Q,g as W}from"./index.996a23e1.js";import{A as Y}from"./index.c1e366ca.js";import{M as J,a as X,T as Z}from"./index.65faf702.js";function L(e){const o=new Date(e),t=o.getDate(),l=o.getMonth()+1,c=o.getFullYear();return`${l}/${t}/${c}`}const ee=e=>{const{onClick:o,text:t}=e;function l(c){c.stopPropagation(),o(c)}return s("div",{children:[a(V,{onClick:l,children:a(D,{size:"2.4rem"})}),a(G,{className:"container-fixed",onClick:l,children:a("span",{className:"text",children:t})})]})},$=n.section`
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`,v=n.h3`
  font-size: 1.7rem;
  margin-bottom: 0.75rem;
  text-align: ${({align:e})=>e};
`,te=n.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,w="#a7a7a7",ae=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`,oe=n.li`
  ${h}
  width: 18rem;
  border-radius: 0.5rem;
  padding: 1rem 1rem 1.5rem 1rem;
  background-color: #fff;
  box-shadow: 0 1px 8px -5px #333;
  border: 1px solid ${({theme:e})=>e.title==="light"?"#dfdfdf":"transparent"};
  cursor: pointer;

  ${({theme:e})=>e.title==="dark"&&S`
      background-color: ${e.colors.gray};
      box-shadow: 0 0 2px 0 #fff;
    `}

  &:hover {
    border-color: ${({theme:e})=>e.title==="light"?"#333":"#dfdfdf"};
    /* transform: scale(1.025); */
  }

  @media (max-width: ${x.xs}) {
    width: 100%;
  }
`,re=n.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;

  .row-icons {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
    font-size: 1.7rem;
    user-select: none;
  }

  .title {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,se=n.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1rem;

  .description {
    display: -webkit-box;
    width: 100%;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    line-height: 1.25;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,ne=n.main`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 1rem;
  color: ${w};

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
  }
`,ie=n(F)`
  ${h}
  cursor: pointer;
  color: ${w};

  &:hover {
    color: #ff8484;
  }
`,le=n(H)`
  ${h}
  cursor: pointer;
  color: ${w};

  &:hover {
    color: #ff8484;
  }
`,ce=n(z)`
  ${h}
`,de=n(E)`
  ${h}
`,me=()=>{const e=A(),[,o]=U(),t=d.exports.useRef(null),l=d.exports.useRef(null),[c,p]=d.exports.useState(null),[i,m]=d.exports.useState(null);return d.exports.useEffect(()=>{var r;c&&((r=l.current)==null||r.setVisibility(!0))},[c]),d.exports.useEffect(()=>{var r;i&&((r=t.current)==null||r.setVisibility(!0))},[i]),e.templateStore.templates.length?s(ae,{children:[e.templateStore.templates.map(r=>s(oe,{onClick:()=>o(`template/${r._id}`),children:[s(re,{children:[s("div",{className:"row-icons",children:[a(le,{title:"Edit project",onClick:f=>{f.stopPropagation(),p(u({},r))}}),a(ie,{title:"Delete project",onClick:f=>{f.stopPropagation(),m(u({},r))}})]}),a("span",{className:"title",title:r.name,children:r.name})]}),a(se,{children:a("p",{className:"description",title:r.description,children:r.description})}),s(ne,{children:[s("span",{className:"tasks-count",children:[a(de,{})," Tasks: ",r.tasks.length]}),s("span",{className:"last-update",children:[a(ce,{})," Last update: ",L(r.updatedAt)]})]})]},r._id)),a(J,{ref:l,template:c,setTemplate:p}),a(X,{ref:t,template:i,setTemplate:m})]}):a("span",{children:"No Templates found."})};var pe=g(me);const fe="#a7a7a7",he=n.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 56px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 2px 0 #333;

  > li {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all ease 0.3s;
    cursor: pointer;
    flex: 1;
    padding: 1rem 1.5rem;
    padding-bottom: 1rem;
    text-align: center;
    color: #333;
    background-color: #fff;
    box-shadow: 0 0 2px 0 #333;

    ${({theme:e})=>e.title==="dark"&&S`
        background-color: ${e.colors.gray};
        box-shadow: 0 0 2px 0px #000;
      `}

    &:hover {
      border-color: #333;
      background-color: ${({theme:e})=>e.title==="dark"?"#333":"#f2f2f2"};
    }

    @media (max-width: ${x.xs}) {
      min-width: 150px;
    }
  }

  .name {
    color: ${({theme:e})=>e.title==="dark"&&"#fff"};
    display: block;
    font-size: 1rem;
    margin-bottom: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: ${x.xs}) {
      white-space: normal;
    }
  }

  .last-update {
    color: ${fe};
    white-space: nowrap;
    @media (max-width: ${x.xs}) {
      white-space: normal;
    }
  }
`,ue=()=>{const e=A(),[,o]=O();return s(he,{children:[!e.templateStore.latestTasks.length&&a("span",{children:"No Tasks added recently."}),e.templateStore.latestTasks.map(t=>s("li",{title:"Ir para a tarefa",onClick:()=>o("/template/"+t.templateId),children:[a("span",{className:"name",title:t.name,children:t.name}),s("small",{className:"last-update",children:["Created at: ",L(t.createdAt)]})]},t._id+t.templateId))]})};var xe=g(ue);const C={name:"",description:""},ge=()=>{var p;const[e,o]=d.exports.useState(C),t=d.exports.useRef(null);function l(i){const{value:m,name:r}=i.target;o(f=>T(u({},f),{[r]:m}))}async function c(){var i;try{await y.templateStore.createTemplate(e),o(C),(i=t.current)==null||i.setVisibility(!1)}catch(m){const r=W(m);R.error(r)}}return s(_,{children:[a(B,{children:"Home"}),s(Y,{children:["Hello ",a("b",{children:(p=y.userStore.user)==null?void 0:p.name}),", here you can access all your projects, edit, delete and create new ones."]}),s(te,{children:[s($,{children:[a(v,{children:"My Projects"}),a(pe,{})]}),s($,{children:[a(v,{align:"center",children:"Latests tasks"}),a(xe,{})]})]}),a(ee,{text:"Create new Project",onClick:()=>{var i;return(i=t.current)==null?void 0:i.setVisibility(!0)}}),a(q,{ref:t,title:"New Project",maxWidth:"500",children:s(K,{onSubmit:c,buttonText:"Create",children:[a(Q,{focused:!0,label:"Name",name:"name",placeholder:"Ex: Daily",value:e.name,onChange:l}),a(Z,{label:"Description",name:"description",placeholder:"Ex: Tasks to do every day",value:e.description,onChange:l})]})})]})};var $e=g(ge);export{$e as default};
