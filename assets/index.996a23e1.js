var we=Object.defineProperty,ve=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var Q=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))ee.call(t,r)&&Q(e,r,t[r]);if(O)for(var r of O(t))te.call(t,r)&&Q(e,r,t[r]);return e},x=(e,t)=>ve(e,$e(t));var I=(e,t)=>{var r={};for(var o in e)ee.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&O)for(var o of O(e))t.indexOf(o)<0&&te.call(e,o)&&(r[o]=e[o]);return r};import{a as Ie,C as j,m as q,r as b,t as D,c as Se,W as U,s as l,A as c,j as m,b as n,F as H,d as C,e as N,f as Te,g as u,v as Le,L as Ce,G as Fe,H as ae,h as le,i as _e,u as ze,k as oe,l as Ee,n as Ae,o as Pe,p as Oe,q as de,w as Re,R as _,x as ce,y as Be,S as re,z as S,B as ne,$ as Ne,D as Me,E as Ue,I as He,T as je,J as De}from"./vendor.f11f8cfa.js";const We=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};We();const Ge="https://task-manager-backend-9wlg.onrender.com/api",f=Ie.create({baseURL:Ge,headers:{"Content-Type":"application/json"}});function Ve(e){f.defaults.headers.common.Authorization=`Bearer ${e}`}const R={login(e){return f.post("/user/login",e)},register(e){return f.post("/user/register",e)},auth(e){return f.get(`/user/${e.userId}`,{headers:{Authorization:`Bearer ${e.token}`}})},update(r){var o=r,{_id:e}=o,t=I(o,["_id"]);return f.put("/user/"+e,t)},delete(e){return f.delete(`/user/login/${e.userId}`)}},W="user_auth";class qe{set(t){j.set(W,JSON.stringify({_id:t._id,token:t.token}))}get(){const t=j.get(W);return t?JSON.parse(t):null}remove(){j.remove(W)}}const T=new qe;class Je{constructor(t){this.user=null,this.token=null,this.rootStore=t,q(this)}async login(t){const r=await R.login(t),{user:o,token:s}=r.data;b(()=>{this.user=o,this.token=s}),T.set({_id:o._id,token:s})}async register(t){const r=await R.register(t),{user:o,token:s}=r.data;b(()=>{this.user=o,this.token=s}),T.set({_id:o._id,token:s})}async update(t){const r=await R.update(t),{user:o}=r.data;b(()=>{this.user=o})}logout(){this.rootStore.setLoading(!0),b(()=>{this.token=null,this.user=null}),T.remove(),this.rootStore.setLoading(!1)}async auth(t){const r=await R.auth(t),{user:o}=r.data,{token:s}=t;b(()=>{this.user=o,this.token=s}),T.set({_id:o._id,token:s})}async checkUserAuth(){const t=T.get();if(!t){this.rootStore.setLoading(!1,1e3);return}try{this.rootStore.setLoading(!0);const{_id:r,token:o}=t;await this.auth({userId:r,token:o})}catch{console.log("Storage auth not found or invalid"),T.remove()}finally{this.rootStore.setLoading(!1,800)}}}const B={create(e){return f.post(`/task/${e.templateId}`,e)},update(e){return f.put(`/task/${e._id}`,e)},delete(e){return f.delete(`/task/${e.taskId}`)}},L={get(){return f.get("/template")},create(e){return f.post("/template",e)},update(e){return f.put(`/template/${e._id}`,e)},updateTasksIndexes(e){return f.put(`/template/tasks/${e.templateId}`,{tasks:e.tasks})},delete(e){return f.delete(`/template/${e.templateId}`)}};class Xe{constructor(t){this.templates=[],this.currentTemplate=null,this.rootStore=t,q(this)}async fetchTemplates(t){Ve(t);const r=await L.get(),{templates:o}=r.data;b(()=>{this.templates=o,console.log("templates fetched",o.length)})}async createTemplate(t){const r=await L.create(t),{template:o}=r.data,s=[...this.templates];s.push(o),b(()=>{this.templates=s})}async updateTemplate(t){const r=await L.update(t),{template:o}=r.data,s=this.templates.findIndex(i=>i._id===o._id);if(s!==-1){const i=[...this.templates];i[s]=p({},o),b(()=>{this.templates=i})}}async deleteTemplate(t){const r=await L.delete(t),{result:o}=r.data;o.ok&&b(()=>{this.templates=this.templates.filter(s=>s._id!==t.templateId)})}async createTask(t){const r=this.templates.findIndex(a=>a._id===t.templateId),o=await B.create(t),{task:s}=o.data,i=[...this.templates];i[r].tasks.push(s),b(()=>{this.templates=[...i]})}async updateTask(t){const r=this.templates.findIndex(s=>s.tasks.some(i=>i._id===t._id)),o=this.templates[r].tasks.findIndex(s=>s._id===t._id);this.templates[r].tasks[o].name=t.name,this.templates[r].tasks[o].status=t.status,await B.update(t)}async updateTasksColumn(t){const{templateIndex:r,templateFound:o}=Ke(this.templates,t.templateId),{taskIndex:s,taskFound:i}=Ye(o.tasks,t.taskId),a=D(x(p({},i),{status:t.status})),d=D(o.tasks);d.splice(s,1),d.splice(d.length,0,a),b(()=>{this.templates[r].tasks=d}),await B.update(a),await L.updateTasksIndexes({templateId:t.templateId,tasks:d})}async updateTasksIndexes(t){const r=this.templates.findIndex(d=>d._id===t.templateId);if(r===-1)throw new Error("Invalid template received");const o=this.templates[r].tasks.findIndex(d=>d._id===t.taskIdFrom),s=this.templates[r].tasks.findIndex(d=>d._id===t.taskIdTo);if(o===-1||s===-1)throw new Error("Invalid tasks received");const i=D(this.templates[r].tasks),[a]=i.splice(o,1);i.splice(s,0,p({},a)),b(()=>{this.templates[r].tasks=i}),await L.updateTasksIndexes({templateId:t.templateId,tasks:i})}async deleteTask(t){const r=this.templates.findIndex(s=>s.tasks.some(i=>i._id===t.taskId)),o=this.templates[r].tasks.findIndex(s=>s._id===t.taskId);this.templates[r].tasks.splice(o,1),await B.delete(t)}setCurrentTemplate(t){this.currentTemplate=t}get tasksSegregated(){return this.currentTemplate?{tasksTodo:this.currentTemplate.tasks.filter(t=>t.status==="to do"),tasksDoing:this.currentTemplate.tasks.filter(t=>t.status==="doing"),tasksDone:this.currentTemplate.tasks.filter(t=>t.status==="done")}:null}get latestTasks(){const t=[];return this.templates.forEach(o=>{o.tasks.forEach(s=>{t.push(x(p({},s),{templateId:o._id}))})}),t.sort((o,s)=>{const i=new Date(o.updatedAt),a=new Date(s.updatedAt);return i>a?-1:i<a?1:0}).slice(0,10)}}function Ye(e,t){let r=-1;const o=e.find((s,i)=>{if(s._id===t)return r=i,!0});if(!o)throw new Error("Task not found, invalid id received");return{taskIndex:r,taskFound:p({},o)}}function Ke(e,t){let r=-1;const o=e.find((s,i)=>{if(s._id===t)return r=i,!0});if(!o)throw new Error("Template not found, invalid id received");return{templateIndex:r,templateFound:p({},o)}}Se({enforceActions:"never"});class Ze{constructor(){this.isLoading=!0,this.userStore=new Je(this),this.templateStore=new Xe(this),q(this)}setLoading(t,r=500){t?this.isLoading=t:setTimeout(()=>this.isLoading=t,r)}}const k=new Ze,P=U`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;U`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;const Qe=U` 
  from {
    transform: translate(-50%, -50%) scale(0.5);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`,w={xs:"576px",sm:"768px",md:"1024px",lg:"1330px"},J=l.div`
  width: 100%;
  height: 100%;
  animation: ${P} 0.8s ease;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 250px;
  max-width: 1600px;
`,me=l.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,et=l.h1`
  font-size: 2.1rem;
  font-family: ${({theme:e})=>e.fontFamily.secondary};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-align: ${({align:e})=>e||"start"};
`;l.p`
  font-size: 1rem;
  font-family: ${({theme:e})=>e.fontFamily.secondary};
  padding-bottom: 0.5rem;
  width: 100%;
`;const tt=l.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  animation: ${P} 0.5s ease;
  transition: background-color 0.3s ease;

  ${({theme:e})=>e.title==="light"?c`
          background-color: ${e.colors.secondary};
        `:c`
          background-color: ${e.colors.background};
        `}

  > main {
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: all ease 0.3s;
  }
`,ot=l.img`
  object-fit: cover;
  position: absolute;
  padding: 2rem 0;
  height: 100vh;
  top: 0%;
  left: 0;

  @media (max-width: ${w.sm}) {
    object-fit: contain;
    max-width: 45%;
    top: 50%;
  }
`,rt=l.img`
  object-fit: cover;
  position: absolute;
  padding-bottom: 2rem;
  height: 100vh;
  top: 0%;
  right: 0;

  @media (max-width: ${w.sm}) {
    object-fit: contain;
    max-width: 45%;
    top: 30%;
    transform: rotate(180deg);
  }
`,fo=l.p`
  --border-clr: rgba(95, 95, 95, 0.45);
  font-size: 1rem;
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid var(--border-clr);
  box-shadow: 0 3px 2px 1px var(--border-clr);
  line-height: 1.3;
  max-width: max-content;

  ${({theme:e})=>e.title==="dark"&&c`
      --border-clr: #929292;
      background-color: #575757;
    `};
`,nt=l.div`
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.colors.text};
  border-radius: 0.5rem;
  padding: 2rem;
  margin-top: 0.7rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.205);
  background-color: ${({theme:e})=>e.title==="light"?" #fff":e.colors.primary};

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`,st=l.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    font-size: ${({theme:e})=>e.fontSize.md};
    font-family: ${({theme:e})=>e.fontFamily.secondary};
  }
`,ue=e=>{const{children:t,title:r}=e;return m(nt,{children:[r&&n(st,{children:n("h2",{children:r})}),n("main",{children:t})]})},it=l.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({theme:e})=>e.fontSize.sm};
`,at=l.span`
  width: 100%;
  text-align: center;
`,pe=e=>{const y=e,{children:t,buttonText:r,buttonIsDisable:o,isLoading:s,bottomText:i,onSubmit:a}=y,d=I(y,["children","buttonText","buttonIsDisable","isLoading","bottomText","onSubmit"]);function h($){$.preventDefault(),a($)}return m(it,x(p({onSubmit:h},d),{children:[t,r&&n(pt,{type:"submit",className:"button",paddingLg:!0,disabled:o,isLoading:s,children:r}),i&&m(H,{children:[n(kt,{maxWidth:"360px",marginY:"1.5rem"}),n(at,{children:i})]})]}))},lt=c`
  &:focus {
    box-shadow: 0 0 1px 2px #59b6ec;
    outline: none;
  }
`,he=c`
  &:focus {
    box-shadow: none;
    outline: none;
  }
`,g=c`
  transition: all ease 0.3s;
`,F=c`
  display: flex;
  align-items: center;
  justify-content: center;
`,fe=c`
  ${lt}
  ${g}
  width:100%;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSize.sm};
  background-color: #f5f5f5;
  box-shadow: 0 0 0 1px rgba(51, 51, 51, 0.3);

  &::placeholder {
    color: #939393;
  }

  ${({theme:e})=>e.title==="dark"&&c`
      background-color: ${e.colors.gray};
      box-shadow: 0 0 0 1px ${e.colors.gray};
      &::placeholder {
        color: #bababa;
      }
    `}
`,dt={red:"#d43d3d",blue:"#005caf",green:"#4caf50",gray:"#727272"},ct=(e,t,r)=>{let o=e.colors.highlight;return t&&(o=dt[t]),c`
    color: #fff;
    background-color: ${o};

    &:hover {
      background-color: ${C(.1,o)};
    }

    &:disabled {
      opacity: 0.6;
      pointer-events: none;
      background-color: ${N(.06,o)};
    }

    &:after {
      content: "";
      border-radius: 50%;
      background: ${N(.3,o)};
      display: block;
      position: absolute;
      z-index: -1;
      padding-top: 150%;
      padding-left: 200%;
      opacity: 0;
      transition: all 0.7s;
    }

    &:active:after {
      transition: 0s;
      opacity: 1;
      z-index: 1;
      padding: 0;
      margin: 0;
    }

    ${r&&c`
      &:disabled,
      &:hover {
        opacity: 1;
        background-color: ${o};
      }
    `}
  `},mt=l.button`
  ${g}
  ${F}
  position: relative;
  width: max-content;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: ${({theme:e})=>e.fontFamily.primary};
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;

  ${({theme:e,isLoading:t,variant:r,paddingLg:o})=>c`
    padding: ${o?"0.3rem 2.75rem":"0.3rem 0.75rem"};

    ${ct(e,r,t)}
  `}
`,ut=l(Te)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2rem;
  transform: translate(-50%, -50%);
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`,pt=e=>{const h=e,{type:t="button",children:r,variant:o,paddingLg:s,isLoading:i,disabled:a}=h,d=I(h,["type","children","variant","paddingLg","isLoading","disabled"]);return m(mt,x(p({type:t,disabled:i||a,variant:o,paddingLg:s},d),{children:[i&&n(ut,{}),n("div",{style:{opacity:i?0:1},children:r})]}))},ht=l.input`
  ${fe}
  height: 2.5rem;
`,ft=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;

  label {
    margin-bottom: ${({theme:e})=>e.spacing.xs};
  }
`,gt=e=>{const i=e,{label:t="",htmlFor:r,children:o}=i,s=I(i,["label","htmlFor","children"]);return m(ft,x(p({},s),{children:[t&&n("label",{htmlFor:r,children:t}),o]}))},A=e=>{const h=e,{type:t="text",label:r="",focused:o=!1,autoComplete:s="off"}=h,i=I(h,["type","label","focused","autoComplete"]),a=u.exports.useRef(null),d=u.exports.useMemo(()=>Le(),[]);return u.exports.useEffect(()=>{var y;o&&((y=a.current)==null||y.focus())},[]),n(gt,{htmlFor:d,label:r,children:n(ht,p({ref:a,type:t,autoComplete:s,id:d},i))})},go=l.textarea`
  ${fe}
  resize: none;

  ${({autoResizeY:e})=>e&&c`
      resize: vertical;
      min-height: 3.5rem;
      max-height: 10rem;

      @media (max-width: ${w.sm}) {
        min-height: 4.7rem;
      }
    `}
`,xt=l(Ce)`
  color: ${({theme:e})=>e.colors.highlight};
`,X=e=>{const{children:t,to:r}=e;return n(xt,{to:r,children:t})},bt=l.div`
  width: 100%;
  height: 20px;
  margin: ${({marginY:e})=>e||"1rem"} 0;

  .content {
    ${g}
    height: 100%;
    width: ${({width:e})=>e||"100%"};
    max-width: ${({maxWidth:e})=>e||"none"};
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }

  .content > .square {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    width: 13px;
    height: 13px;
    background-color: ${({theme:e})=>e.colors.highlight};
    margin: auto auto;
  }

  .content > .line {
    ${g}
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.text};

    &.left {
      left: -20px;
    }
    &.right {
      transform: translate(50%, -50%);
      left: 20px;
    }
  }
`,kt=e=>{const{width:t,maxWidth:r,marginY:o}=e;return n(bt,{width:t,maxWidth:r,marginY:o,children:m("div",{className:"content",children:[n("div",{className:"square"}),n("span",{className:"line left"}),n("span",{className:"line right"})]})})};function yt(e,t){const[r,o]=u.exports.useState(()=>{const s=localStorage.getItem(e);return s?JSON.parse(s):t});return u.exports.useEffect(()=>{localStorage.setItem(e,JSON.stringify(r))},[e,r]),[r,o]}function Y(e=500){return new Promise(t=>setTimeout(t,e))}const M={spacing:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"3rem",xl:"5rem"},fontSize:{xs:".75rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"2.5rem"},fontFamily:{primary:"'Roboto', sans-serif",secondary:"'Inter', sans-serif",mono:"'Roboto Mono', monospace"},colors:{highlight:"#FF8484",blue:"#2374ab",green:"#73d75d",purple:"#5b2a86",gray:"#5c5c5c",yellow:"#f6e75c",red:"#ff5757",lightGray:"#f5f5f5"}},wt=x(p({},M),{title:"light",colors:x(p({},M.colors),{primary:"#FF8484",secondary:"#FFFBEB",background:"#f5f5f5",text:"#333"})}),vt=x(p({},M),{title:"dark",colors:x(p({},M.colors),{primary:"#333",secondary:"#FFFBEB",background:"#222",text:"#f5f5f5"})}),ge=u.exports.createContext({}),$t=({children:e})=>{const[t,r]=yt("theme","light");function o(){r(t==="light"?"dark":"light")}const s=u.exports.useMemo(()=>t==="light"?wt:vt,[t]);return n(ge.Provider,{value:{theme:s,toggleTheme:o},children:n(Fe,{theme:p({},s),children:e})})};function xe(){const e=u.exports.useContext(ge);return p({},e)}const It=l.button`
  position: fixed;
  z-index: 10;
  top: 10px;
  right: 5px;
  transform: translateX(60%);
  display: flex;
  align-items: center;
  width: 100px;
  height: 35px;
  border-radius: 9999px;
  padding: 0 0.9rem;

  ${({theme:e})=>e.title==="light"?c`
          background-color: ${({theme:t})=>t.colors.yellow};
        `:c`
          background-color: ${e.colors.gray};
        `}

  &:hover {
    .light-icon {
      transform: rotate(180deg);
      filter: brightness(105%);
    }
    .dark-icon {
      transform: scaleX(-1);
      filter: brightness(120%);
    }
  }
`,be=c`
  width: 20px;
  height: 20px;
  animation: ${P} 0.5s ease;
  transition: all 0.4s ease;
`,St=l(ae)`
  ${be}
  color: ${({theme:e})=>e.colors.yellow};
  transition-duration: 0.7s;
`,Tt=l(le)`
  ${be}
  color: ${({theme:e})=>e.colors.gray};
`,Lt=()=>{const{toggleTheme:e,theme:t}=xe();return n(It,{onClick:e,title:`Toggle to theme ${t.title==="dark"?"light":"dark"}`,children:t.title==="light"?n(Tt,{className:"dark-icon"}):n(St,{className:"light-icon"})})},xo=l.button.attrs({type:"button"})`
  ${g}
  ${he}
  position: fixed;
  z-index: 10;
  bottom: 0.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.primary};
  color: #fff;
  box-shadow: 0 0 2px 0px #fff;
  font-size: 1.1rem;

  ${({theme:e})=>e.title==="dark"&&c`
      background-color: ${({theme:t})=>t.colors.gray};
      box-shadow: 0 0 2px 0px #000;
    `}

  &:hover ~ .container-fixed {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: ${w.xs}) {
    width: 3.5rem;
    height: 3.5rem;
  }
`,bo=l.div`
  position: fixed;
  z-index: 5;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 130px;
  border-top-left-radius: 0.5rem;
  overflow: hidden;
  background-image: linear-gradient(#bdbdbd, transparent);
  /* visibility */
  opacity: 0;
  pointer-events: none;
  transition: opacity 500ms ease;

  &:hover {
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
  }

  ${({theme:e})=>e.title==="dark"&&c`
      background-image: linear-gradient(#696969, transparent);
    `}

  .text {
    ${g}
    ${F}
    width: 100%;
    padding: 0.5rem 0;
    font-size: 1rem;
    color: #fff;
    ${({theme:e})=>c`
      font-family: ${e.fontFamily.secondary};
      background-color: ${e.colors.primary};
    `}

    &:hover {
      filter: brightness(115%);
    }
  }

  @media (max-width: ${w.xs}) {
    height: 110px;
    width: 160px;

    .text {
      font-size: 0.8rem;
    }
  }
`,Ct=l.div`
  position: fixed;
  z-index: 15;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: ${({theme:e})=>e.title==="light"?"#0000004d":"#00000087"};
  transform: all 0.5s ease;
  animation: ${P} 0.2s ease;
`,Ft=l.div`
  position: fixed;
  z-index: 20;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 0 3px 0 #000;
  border-radius: 4px;
  animation: ${Qe} 0.2s ease;
  color: ${({theme:e})=>e.colors.text};

  ${({theme:e})=>e.title==="dark"&&c`
      background-color: ${e.colors.background};
      box-shadow: 0 0 3px 0 #c1c1c1;
    `}
  @media
    (max-width: ${w.xs}) {
    top: 50%;
    width: calc(100% - 16px);
  }
`,_t=l.header`
  ${F}
  position: relative;
  text-align: center;

  .title {
    font-size: 1.5rem;
  }

  .btn-close {
    ${F}
    ${g}
    position: absolute;
    top: 45%;
    left: 100%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    font-weight: bold;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;

    &:hover {
      border-radius: 25px;
      background-color: ${({theme:e})=>e.title==="light"?C(.15,e.colors.background):N(.15,e.colors.background)};
    }
  }
`,zt=l.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1rem 0.2rem;
  padding-bottom: 0.5rem;
  font-size: 18px;
`,Et=(e,t)=>{const{title:r="Empty title",maxWidth:o=500,onClose:s,children:i}=e,[a,d]=u.exports.useState(!1);function h(v){!v&&s&&s(),d(v)}function y(v){v.stopPropagation(),h(!1)}u.exports.useImperativeHandle(t,()=>({setVisibility:h}));const $=v=>{v.key==="Escape"&&d(!1)};return u.exports.useEffect(()=>(a?window.addEventListener("keydown",$):window.removeEventListener("keydown",$),()=>{window.removeEventListener("keydown",$)}),[a]),a?m(H,{children:[n(Ct,{className:"modal-overlay",onClick:y}),m(Ft,{style:{maxWidth:`${o}px`},className:"modal",onClick:v=>v.stopPropagation(),children:[m(_t,{children:[n("h2",{className:"title",children:r}),n("button",{className:"btn-close",onClick:()=>d(!1),children:n(_e,{})})]}),n(zt,{children:i})]})]}):null};var ko=u.exports.forwardRef(Et);const V="#c3c3c3",At=c`
  &:after,
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    z-index: 15;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid;
  }

  &::after {
    bottom: -13px;
    border-bottom: 10px solid
      ${({theme:e})=>e.title==="light"?e.colors.lightGray:e.colors.gray};
  }

  &::before {
    bottom: -11px;
    border-bottom: 10px solid ${V};
  }
`,yo=l.div`
  ${he}
  position: relative;
  display: flex;
  align-items: center;
  font-size: inherit;
  color: inherit;
  background-color: none;
  pointer-events: none;
  pointer-events: auto;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  * {
    pointer-events: auto;
  }

  ${At}

  &:after,
  &:before ,
  > ul {
    display: none;
    cursor: default;
  }

  &:focus-within {
    > ul {
      display: flex;
    }

    &:after,
    &:before {
      display: block;
    }
  }
`,wo=l.ul`
  ${g}
  position: absolute;
  z-index: 15;
  top: calc(100% + 11px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
  padding-top: 0.35rem;
  border: 1px solid ${V};
  font-size: 0.85rem;
  text-align: center;
  font-weight: 600;
  font-family: ${({theme:e})=>e.fontFamily.secondary};
  color: ${({theme:e})=>e.colors.text};

  ${({theme:e})=>e.title==="light"?c`
          background-color: ${e.colors.lightGray};
          box-shadow: 0 0 2px 0px ${V};
        `:c`
          background-color: ${e.colors.gray};
          box-shadow: 0 0 1px 0px #fff;
        `}

  ${({position:e})=>{if(e=="center")return c`
        left: 50%;
        transform: translateX(-50%);
      `;if(e==="left")return c`
        transform: translateX(-50%);
      `}}

  > li {
    ${g}
    ${F} 
    flex: 1;
    padding: 0.5rem 0.8rem;

    &:hover {
      cursor: pointer;
      background-color: ${({theme:e})=>e.title==="light"?C(.1,e.colors.lightGray):N(.1,e.colors.gray)};
    }

    @media (max-width: ${w.xs}) {
      padding: 0.75rem 0.8rem;
    }
  }
`,vo=l.div`
  ${F}
  ${g}
  padding: 0.2rem;
  user-select: none;
  border-radius: 0.3rem;

  ${({hoverBgColor:e})=>e&&c`
      &:hover {
        cursor: pointer;
        background-color: ${({theme:t})=>t.title==="light"?C(.1,e):C(.1,t.colors.gray)};
      }
    `}

  svg {
    font-size: inherit;
  }
`;var Pt="/task-manager/assets/bg-left.077b3676.png",Ot="/task-manager/assets/bg-right.86ac34a2.png",Rt="/task-manager/assets/logo.ad5c05c1.png";const Bt=({children:e})=>m(tt,{children:[n(Lt,{}),n(ot,{src:Pt,alt:"background texture",draggable:!1}),n(rt,{src:Ot,alt:"background texture",draggable:!1}),n("div",{style:{width:"100%",display:"flex",position:"relative",zIndex:2},children:n("img",{src:Rt,alt:"logo",draggable:!1,style:{objectFit:"cover",maxWidth:"200px",margin:"1rem auto"}})}),n("main",{style:{position:"relative",zIndex:2},children:e})]}),Nt=l.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({theme:e})=>e.colors.background};
  animation: ${P} 0.5s ease;
  transition: background-color 0.3s ease;

  > main {
    flex: 1;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: all ease 0.3s;
  }
`,se=e=>{const t=e.title=="dark"?.3:.15;return C(t,e.colors.primary)},Mt=c`
  &::before {
    content: "";
    position: absolute;
    background-color: ${({theme:e})=>e.colors.secondary};
    height: 100%;
    width: 4px;
  }
`,Ut=l.aside`
  ${g}
  display: flex;
  flex-direction: column;
  width: ${({isExpanded:e})=>e?"220px":"60px"};
  height: 100vh;
  background-color: ${({theme:e})=>e.colors.primary};

  nav {
    flex: 1;
  }

  @media (max-width: ${w.xs}) {
    width: ${({isExpanded:e})=>e?"70%":"50px"};
    padding-bottom: 2.5rem;
    padding-top: 1rem;
  }
`,Ht=l.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
`,z=l.li`
  ${g}
  position: relative;
  height: 42px;
  margin: 0.2rem 0;
  color: ${({theme:e})=>e.colors.secondary};
  cursor: pointer;

  &:hover {
    background-color: ${({theme:e})=>se(e)};
  }

  ${({theme:e,isSelected:t})=>t&&c`
      cursor: default;
      background-color: none;
      background-color: ${se(e)};
      ${Mt};
    `}

  svg,
  img {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;

    @media (max-width: ${w.xs}) {
      left: 25px;
      width: 20px;
      height: 20px;
    }
  }
`,E=l.span`
  ${g}
  position: absolute;
  top: 50%;
  left: 60px;
  transform: translateY(-50%);
  font-size: 1rem;
  font-family: ${({theme:e})=>e.fontFamily.secondary};
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;

  ${({isExpanded:e})=>e&&c`
      opacity: 1;
      transition-delay: 200ms;
    `};

  @media (max-width: ${w.xs}) {
    left: 55px;
  }
`,jt=()=>{const[,e]=ze(),[t]=oe("/home"),[r]=oe("/profile"),{theme:o,toggleTheme:s}=xe(),[i,a]=u.exports.useState(!1);return n(Ut,{isExpanded:i,children:n("nav",{children:m(Ht,{children:[m(z,{title:"Menu",onClick:()=>a(!i),children:[n(Ee,{}),n(E,{isExpanded:i,children:"Menu"})]}),m(z,{title:"Home",isSelected:t,onClick:()=>e("/home"),children:[n(Ae,{}),n(E,{isExpanded:i,children:"Home"})]}),m(z,{title:"Profile",isSelected:r,onClick:()=>e("/profile"),children:[n(Pe,{}),n(E,{isExpanded:i,children:"Profile"})]}),m("div",{style:{marginTop:"auto"},children:[m(z,{title:"Toggle theme",onClick:s,children:[o.title==="light"?n(le,{}):n(ae,{}),n(E,{isExpanded:i,children:"Toggle theme"})]}),m(z,{title:"Logout",onClick:()=>k.userStore.logout(),children:[n(Oe,{}),n(E,{isExpanded:i,children:"Logout"})]})]})]})})})},Dt=U`
  from {
    width:0%; 
  }
  100%{
    width:100%; 
  }
`,Wt=l.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 7px;
  width: 100%;
  height: 7px;
  background-color: ${({theme:e})=>e.colors.blue};
  animation: ${Dt} 500ms linear forwards;
`,Gt=()=>n(Wt,{}),Vt=({children:e})=>m(Nt,{children:[n(jt,{}),n("main",{children:n(u.exports.Suspense,{fallback:n(Gt,{}),children:e})})]}),qt=l.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  cursor: wait;

  .loader {
    position: relative;
    width: 40px;
    height: 40px;
  }

  .loader::before,
  .loader::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.blue};
    animation: sk-bounce 2s infinite ease-in-out;
  }

  .loader::after {
    animation-delay: -1s;
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }

    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`,Jt=()=>n(qt,{children:n("div",{className:"loader"})}),Xt="modulepreload",ie={},Yt="/task-manager/",K=function(t,r){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=`${Yt}${o}`,o in ie)return;ie[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":Xt,s||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),s)return new Promise((d,h)=>{a.addEventListener("load",d),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function ke(e){let t="Ops, an error occurred... try later";return e&&e.response&&e.response.data&&(typeof e.response.data=="string"?t=e.response.data:e.response.data.message&&typeof e.response.data.message=="string"&&(t=e.response.data.message)),t}const Kt=()=>{const[e,t]=u.exports.useState({email:"",password:""}),[r,o]=u.exports.useState(!1);function s(a){const{value:d,name:h}=a.target;t(y=>x(p({},y),{[h]:d}))}async function i(){try{o(!0),await k.userStore.login(e)}catch(a){const d=ke(a);de.error(d),o(!1)}}return n(J,{children:n(me,{style:{position:"relative",zIndex:5},children:n(ue,{title:"Login",children:m(pe,{onSubmit:i,isLoading:r,buttonText:"Login",bottomText:m(H,{children:["Don","'","t have account yet ? ",n(X,{to:"/register",children:"Register here."})]}),children:[n(A,{focused:!0,label:"Email",type:"email",name:"email",value:e.email,autoComplete:"on",onChange:s}),n(A,{label:"Password",type:"password",name:"password",value:e.password,onChange:s})]})})})})},Zt={name:"",email:"",password:""},Qt=()=>{const[e,t]=u.exports.useState(Zt),[r,o]=u.exports.useState(!1);function s(a){const{value:d,name:h}=a.target;t(y=>x(p({},y),{[h]:d}))}async function i(){try{o(!0),await k.userStore.register(e)}catch(a){const d=ke(a);de.error(d),o(!1)}}return n(J,{children:n(me,{children:n(ue,{title:"Register",children:m(pe,{onSubmit:i,isLoading:r,buttonText:"Register",bottomText:m(H,{children:["Already have an account ? ",n(X,{to:"/login",children:"Login here."})]}),children:[n(A,{focused:!0,label:"Name",name:"name",value:e.name,onChange:s}),n(A,{label:"Email",type:"email",name:"email",value:e.email,onChange:s}),n(A,{label:"Password",type:"password",name:"password",value:e.password,onChange:s})]})})})})},eo=()=>m(J,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[n(et,{children:"Page not found"}),m("p",{children:["Oops, we couldn't find that page. Try going ",n(X,{to:"/home",children:"home"}),"."]}),n(Re,{size:"7rem"})]}),Z=500,to=_.lazy(async()=>(await Y(Z),K(()=>import("./index.46876c44.js"),["assets/index.46876c44.js","assets/vendor.f11f8cfa.js","assets/index.c1e366ca.js","assets/index.65faf702.js"]))),oo=_.lazy(async()=>(await Y(Z),K(()=>import("./index.da021391.js"),["assets/index.da021391.js","assets/vendor.f11f8cfa.js","assets/index.c1e366ca.js"]))),ro=_.lazy(async()=>(await Y(Z),K(()=>import("./index.709059cc.js"),["assets/index.709059cc.js","assets/vendor.f11f8cfa.js","assets/index.65faf702.js","assets/index.c1e366ca.js"]))),G="/task-manager/",no=G.endsWith("/")?G.slice(0,-1):G,so=()=>n(Be,{base:no,children:k.userStore.user?n(Vt,{children:m(re,{children:[n(S,{path:"/home",component:to}),n(S,{path:"/profile",component:oo}),n(S,{path:"/template/:id",children:e=>n(ro,{templateId:e.id})}),n(ne,{to:"/home"}),n(S,{component:eo})]})}):n(Bt,{children:m(re,{children:[n(S,{path:"/login",component:Kt}),n(S,{path:"/register",component:Qt}),n(ne,{to:"/login"})]})})});var io=ce(so);const ao=()=>(u.exports.useEffect(()=>{k.userStore.checkUserAuth()},[]),u.exports.useEffect(()=>{k.userStore.token&&k.templateStore.fetchTemplates(k.userStore.token)},[k.userStore.token]),k.isLoading?n(Jt,{}):n(io,{}));var lo=ce(ao),co=Ne`
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    list-style: none;
    border: 0; 
    box-sizing: border-box;
    text-decoration: none; 
  }
  
  *:focus { 
    box-shadow: 0 0 1px 2px #59b6ec;
    outline: none;
  }

  body {
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.text};
    background-color: ${({theme:e})=>e.colors.background};
    font-family: ${({theme:e})=>e.fontFamily.primary};
    transition: all ease .2s;
    overflow: hidden;
  }

  button {
    cursor:pointer;
    color:inherit;
  }

  input,
  select,
  textarea {
    font-family: ${({theme:e})=>e.fontFamily.secondary};
    font-size: inherit;
    color:inherit;
  }
  
  a {
    color: ${e=>e.theme.colors.highlight};
    
    &:hover{
      text-decoration: underline;
    }
  }

  @media (max-width: ${w.xs}) {
    html {
      font-size: 13px;
    }
  }
`;const mo=({children:e})=>n($t,{children:e}),ye=_.createContext(k),uo=({children:e})=>n(ye.Provider,{value:k,children:e}),$o=()=>_.useContext(ye);Me.exports.polyfill({dragImageTranslateOverride:Ue.exports.scrollBehaviourDragImageTranslateOverride});He.render(n(_.StrictMode,{children:m(mo,{children:[n(co,{}),m(uo,{children:[n(lo,{}),n(je,{draggable:!1,autoClose:3e3,limit:3,position:"bottom-center",transition:De})]})]})}),document.getElementById("root"));export{xo as A,pt as B,bo as C,pe as F,A as I,X as L,ko as M,J as P,fo as S,w as a,g as b,et as c,gt as d,go as e,Ot as f,ke as g,yo as h,wo as i,vo as j,F as k,k as s,$o as u};
