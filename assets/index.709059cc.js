var G=Object.defineProperty,W=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var L=(e,t,o)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))z.call(t,o)&&L(e,o,t[o]);if(I)for(var o of I(t))O.call(t,o)&&L(e,o,t[o]);return e},k=(e,t)=>W(e,Y(t));var S=(e,t)=>{var o={};for(var n in e)z.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&I)for(var n of I(e))t.indexOf(n)<0&&O.call(e,n)&&(o[n]=e[n]);return o};import{g as m,v as J,j as h,b as r,s as g,d as v,e as Q,A as P,U,q as D,x as F,K as X}from"./vendor.f11f8cfa.js";import{s as p,h as ee,i as te,j as re,k as _,b as w,a as oe,g as C,F as q,B as N,M as ae,P as ne,c as se}from"./index.996a23e1.js";import{T as H,M as ie,a as le}from"./index.65faf702.js";import"./index.c1e366ca.js";function ce(e){return e.replace(/^\w/,t=>t.toUpperCase())}async function K(e){var u,l;const{taskIdTo:t,status:o,taskIdFrom:n}=e,c=(u=p.templateStore.currentTemplate)==null?void 0:u.tasks.find(i=>i._id===n),d=(l=p.templateStore.currentTemplate)==null?void 0:l._id;if(!d)throw new Error("Invalid current template");if(!c)throw new Error("Invalid task id received");t&&c.status===o?await p.templateStore.updateTasksIndexes({templateId:d,taskIdFrom:n,taskIdTo:t}):o&&await p.templateStore.updateTasksColumn({templateId:d,status:o,taskId:n})}const R=e=>{const l=e,{options:t,position:o="center",content:n}=l,c=S(l,["options","position","content"]),d=m.exports.useMemo(()=>t.map(()=>J()),[t]);function u(i){document.activeElement instanceof HTMLElement&&document.activeElement.blur(),i()}return h(ee,k(x({tabIndex:1},c),{children:[n,r(te,{position:o,title:"",children:t.map((i,f)=>r(m.exports.Fragment,{children:r("li",{title:i.content,onClick:()=>u(i.onClick),children:i.content})},d[f]))})]}))},de=e=>{const n=e,{icon:t}=n,o=S(n,["icon"]);return r(re,k(x({},o),{children:t}))},me=g.div`
  ${_}
  justify-content:flex-start;

  .icon {
    ${w}

    &:first-of-type {
      margin-left: 1rem;
    }

    &:hover {
      cursor: pointer;
      border-radius: 0.3rem;
      background-color: ${({theme:e})=>e.title==="light"?v(.08,e.colors.background):Q(.15,e.colors.background)};
    }
  }
`,ue=g.p`
  min-height: 3rem;
  margin-bottom: 2rem;
`,pe=g.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 850px) {
    flex-direction: column;
  }

  @media (min-width: ${oe.lg}) {
    gap: 2rem;
  }
`,A=e=>{const l=e,{onDrop:t,className:o,keyDataTransfer:n,children:c}=l,d=S(l,["onDrop","className","keyDataTransfer","children"]);function u(i){i.stopPropagation();const f=i.dataTransfer.getData(n);t(f)}return r("div",k(x({className:`drop-zone ${o}`,onDrop:u,onDragEnter:i=>i.preventDefault(),onDragOver:i=>i.preventDefault()},d),{children:c}))},fe=g(A)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem 1rem;
  padding-bottom: 1.5rem;
  background-color: ${({color:e})=>e};
  border-radius: 0.5rem;

  ${({theme:e})=>e.title==="dark"&&P`
      background-color: #2a2a2a;
      box-shadow: 0 0 3px 0 #fff;
    `}
`,ge=g.header`
  ${_}
  width: 100%;
  margin-bottom: 1rem;
  ${({theme:e})=>e.title==="dark"&&P`
      color: #fff;
    `}
`,he=g.h2`
  flex: 1;
  font-size: 1.4rem;
`,xe=g(de)`
  height: 2rem;
  font-size: 1.7rem;
  margin: 0 0.5rem;
`,ke=g.div`
  ${_}
  width: 2.5rem;
  height: 2rem;
  font-size: 0.9rem;
  color: #333;
  font-family: ${({theme:e})=>e.fontFamily.mono};
  background-color: ${({color:e})=>v(.08,e)};
  border-radius: 9999px;
`,be=g.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  min-height: 80px;
`;g(A)`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 0.5rem 1rem;
  color: ${({theme:e})=>e.colors.text};
  background-color: ${({theme:e})=>e.title==="light"?"#fff":e.colors.gray};
  border-radius: 4px;
  box-shadow: 0 0 2px 0px #333;

  .popover {
    ${w}
    margin-left: 0.3rem;
    font-size: 1.2rem;
    border-radius: 4px;
    padding: 0.25rem;

    &:hover {
      cursor: pointer;

      background-color: ${({theme:e})=>e.title==="light"?v(.1,"#fff"):v(.4,e.colors.gray)};
    }
  }
`;g.span`
  flex: 1;
  font-size: 1.1rem;
  word-break: break-word;
  margin: auto 0;
`;const ye=g(A)`
  width: 100%;
  display: flex;
  color: ${({theme:e})=>e.colors.text};
  background-color: ${({theme:e})=>e.title==="light"?"#fff":e.colors.gray};
  border-radius: 4px;
  box-shadow: 0 0 2px 0px #333;
`,Te=g.li`
  ${w}
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 0.7rem 0.5rem;
  padding-left: 0.25rem;

  .popover {
    ${w}
    margin-left: 0.3rem;
    font-size: 1.3rem;
    border-radius: 4px;
    padding: 0.25rem;

    &:hover {
      cursor: pointer;
      background-color: ${({theme:e})=>e.title==="light"?v(.1,"#fff"):v(.4,e.colors.gray)};
    }
  }
`,ve=g.span`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.3;
  word-break: break-word;
  margin: auto 0;
`,Se=g.div`
  ${w}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: move;
  color: ${({theme:e})=>e.colors.text};
  padding: 0 0.5rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:hover {
    background-color: ${({theme:e})=>e.title=="light"?v(.05,e.colors.background):v(.3,e.colors.gray)};
  }

  .icon {
    width: 0.875rem;
  }
`,De=e=>{const{dataTransfer:t,elementId:o}=e,[n,c]=m.exports.useState(!1),d=m.exports.useRef(null);function u(a){a.dataTransfer.effectAllowed="move",a.dataTransfer.dropEffect="move",a.dataTransfer.setData(t.key,t.data);const s=document.querySelector(`#${o}`);s&&a.dataTransfer.setDragImage(s,0,0)}function l(a){var s;for(const T of a)(s=T.querySelector("ul"))==null||s.setAttribute("style","outline-offset: 6px; outline: dashed 2px #74cce9;")}function i(a){var s;for(const T of a)(s=T.querySelector("ul"))==null||s.setAttribute("style","outline none;")}const f=m.exports.useMemo(()=>({onDragStart(){c(!0);const a=document.querySelector(`#${o}`);a&&a.setAttribute("style","opacity: 0.5;")},onDragEnd(){c(!1);const a=document.querySelector(`#${o}`);a&&a.removeAttribute("style")}}),[]);return m.exports.useEffect(()=>{const a=document.querySelector(`#${o}`),s=document.querySelectorAll(".drop-zone");n?(a==null||a.classList.add("is-dragging"),l(s)):(a==null||a.classList.remove("is-dragging"),i(s))},[n]),m.exports.useEffect(()=>{var a,s;(a=d.current)==null||a.addEventListener("dragstart",f.onDragStart),(s=d.current)==null||s.addEventListener("dragend",f.onDragEnd)},[]),r(Se,{ref:d,draggable:!0,onDragStart:u,onDragOver:a=>{a.dataTransfer.dropEffect="move",a.preventDefault()},children:h("svg",{className:"icon",width:"100%",height:"100%",viewBox:"0 0 175 270",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("g",{filter:"url(#filter0_d)",children:[r("circle",{cx:"32",cy:"28",r:"28",fill:"currentColor"}),r("circle",{cx:"32",cy:"131",r:"28",fill:"currentColor"}),r("circle",{cx:"32",cy:"234",r:"28",fill:"currentColor"}),r("circle",{cx:"143",cy:"28",r:"28",fill:"currentColor"}),r("circle",{cx:"143",cy:"131",r:"28",fill:"currentColor"}),r("circle",{cx:"143",cy:"234",r:"28",fill:"currentColor"})]}),r("defs",{children:h("filter",{id:"filter0_d",x:"0",y:"0",width:"175",height:"270",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[r("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),r("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),r("feOffset",{dy:"4"}),r("feGaussianBlur",{stdDeviation:"2"}),r("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),r("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),r("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]})})]})})},M="task-id",we=e=>{const l=e,{task:t,onDrop:o,onClickEdit:n,onClickDelete:c}=l,d=S(l,["task","onDrop","onClickEdit","onClickDelete"]),u=m.exports.useMemo(()=>`task-item-${t._id}`,[t._id]);return h(ye,k(x({id:u,keyDataTransfer:M,onDrop:i=>o(i,t._id)},d),{children:[r(De,{dataTransfer:{key:M,data:t._id},elementId:u}),h(Te,{children:[r(ve,{children:t.name}),r(R,{className:"popover",position:"left",content:r(U,{}),options:[{content:"Edit",onClick:()=>n(t)},{content:"Delete",onClick:()=>c(t)}]})]})]}))},Ce=e=>{const l=e,{tasks:t,openModalEdit:o,status:n}=l,c=S(l,["tasks","openModalEdit","status"]);async function d(i){try{await p.templateStore.deleteTask({taskId:i._id})}catch(f){const a=C(f);D.error(a)}}async function u(i,f){try{await K({taskIdFrom:i,taskIdTo:f,status:n})}catch(a){const s=C(a);D.error(s)}}return r(be,k(x({},c),{children:t.map(i=>r(we,{task:i,onDrop:u,onClickEdit:o,onClickDelete:d},i._id))}))},Ie=g(q)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;

  .btn-group {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    width: 100%;

    button {
      width: 100%;
    }
  }
`,Ee=e=>{const{hideForm:t,status:o,visibility:n}=e,[c,d]=m.exports.useState(i()),[u,l]=m.exports.useState(!1);function i(){return p.templateStore.currentTemplate?{name:"",status:o,templateId:p.templateStore.currentTemplate._id}:{name:"",status:o,templateId:""}}async function f(){if(!!c.templateId)try{l(!0),await p.templateStore.createTask(c),d(a=>k(x({},a),{name:""}))}catch(a){const s=C(a);D.error(s)}finally{setTimeout(()=>{l(!1)},500)}}return h(Ie,{onSubmit:f,style:{display:n?"unset":"none"},children:[r(H,{rows:2,marginBottom:.5,placeholder:"Enter a task",autoResizeY:!0,focused:!0,onChange:a=>d(s=>k(x({},s),{name:a.target.value})),value:c.name}),h("div",{className:"btn-group",children:[r(N,{variant:"gray",onClick:t,children:"Cancel"}),r(N,{isLoading:u,type:"submit",disabled:!c.name,children:"Add"})]})]})};var $e=F(Ee);const Me={red:"#fbc2bf",blue:"#bfe9e9",green:"#ddebd8"},$=e=>{const B=e,{title:t,status:o,variant:n="blue",tasks:c}=B,d=S(B,["title","status","variant","tasks"]),[u,l]=m.exports.useState(!1),i={_id:"",name:"",status:o},[f,a]=m.exports.useState(i),s=m.exports.useMemo(()=>Me[n],[n]),T=m.exports.useRef(null);function j(b){var y;a(b),(y=T.current)==null||y.setVisibility(!0)}async function V(){var b;if(!!f._id)try{await p.templateStore.updateTask(f),a(y=>k(x({},y),{name:"",_id:""})),(b=T.current)==null||b.setVisibility(!1)}catch(y){const E=C(y);D.error(E)}}async function Z(b){try{await K({taskIdFrom:b,status:o})}catch(y){const E=C(y);D.error(E)}}return h(fe,k(x({keyDataTransfer:M,onDrop:Z,color:s},d),{children:[h(ge,{children:[r(he,{children:t||ce(o)}),r(xe,{icon:r(X,{}),hoverBgColor:s,onClick:()=>l(b=>!b)}),r(ke,{color:s,children:c.length})]}),r($e,{visibility:u,status:o,hideForm:()=>l(!1)}),r(Ce,{tasks:c,status:o,color:s,openModalEdit:j}),r(ae,{ref:T,title:"Edit Task",children:r(q,{onSubmit:V,buttonText:"Update",buttonIsDisable:!f.name,children:r(H,{label:"Name",name:"name",value:f.name,onChange:b=>a(y=>k(x({},y),{name:b.target.value}))})})})]}))},Fe=()=>p.templateStore.tasksSegregated?h(pe,{children:[r($,{variant:"red",status:"to do",tasks:p.templateStore.tasksSegregated.tasksTodo}),r($,{variant:"green",status:"doing",tasks:p.templateStore.tasksSegregated.tasksDoing}),r($,{variant:"blue",status:"done",tasks:p.templateStore.tasksSegregated.tasksDone})]}):null;var _e=F(Fe);const Ae=e=>{const{templateId:t}=e,[o,n]=m.exports.useState(!0),c=m.exports.useRef(null),d=m.exports.useRef(null),[u,l]=m.exports.useState(null),[i,f]=m.exports.useState(null);m.exports.useEffect(()=>{const s=p.templateStore.templates.find(T=>T._id===t);s&&p.templateStore.setCurrentTemplate(s),n(!1)},[p.templateStore.templates]),m.exports.useEffect(()=>{var s;u&&((s=c.current)==null||s.setVisibility(!0))},[u]),m.exports.useEffect(()=>{var s;i&&((s=d.current)==null||s.setVisibility(!0))},[i]);const a=[{content:"Edit",onClick:()=>l(p.templateStore.currentTemplate)},{content:"Delete",onClick:()=>f(p.templateStore.currentTemplate)}];return o?null:p.templateStore.currentTemplate?h(ne,{children:[r(se,{children:h(me,{children:[p.templateStore.currentTemplate.name,r(R,{className:"icon",title:"Delete Template",content:r(U,{}),options:a})]})}),h(ue,{children:[" ",p.templateStore.currentTemplate.description]}),r(_e,{}),r(ie,{ref:c,template:u,setTemplate:l}),r(le,{ref:d,template:i,setTemplate:f,redirectOnDelete:!0})]}):r("span",{children:"Template not found"})};var Pe=F(Ae);export{Pe as default};
