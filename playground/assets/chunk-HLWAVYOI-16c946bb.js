import{_ as l}from"./iframe-ec263bb9.js";import{R as o,a}from"./index-4e9ba9b8.js";import{c as p}from"./client-fb0f3103.js";import{C as h,g as d,H as E,h as R}from"./index-6087c063.js";var n=new Map,f=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},x=async(e,t)=>{let r=await g(t);return new Promise(s=>{r.render(o.createElement(f,{callback:()=>s(null)},e))})},_=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},g=async e=>{let t=n.get(e);return t||(t=p.createRoot(e),n.set(e,t)),t},w={code:h,a:d,...E},D=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},A=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components},c=R;return new Promise((u,m)=>{l(()=>import("./index-5bc1918e.js"),["./index-5bc1918e.js","./index-bd2d4f36.js","./index-4e9ba9b8.js","./_commonjsHelpers-725317a4.js"],import.meta.url).then(({MDXProvider:i})=>x(o.createElement(D,{showException:m,key:Math.random()},o.createElement(i,{components:s},o.createElement(c,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{_(e)}}};export{A as D,w as d};
