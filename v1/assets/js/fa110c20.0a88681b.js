"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[4883],{8400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var r=n(1085),i=n(1184),c=n(3492);const s={title:"Interfaces"},o=void 0,a={id:"components/main/interfaces/README",title:"Interfaces",description:"",source:"@site/docs/components/main/interfaces/README.mdx",sourceDirName:"components/main/interfaces",slug:"/components/main/interfaces/",permalink:"/ui5-webcomponents/v1/components/main/interfaces/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Interfaces"},sidebar:"componentsSidebar",previous:{title:"WrappingType",permalink:"/ui5-webcomponents/v1/components/enums/WrappingType"},next:{title:"IAvatarGroupItem",permalink:"/ui5-webcomponents/v1/components/interfaces/IAvatarGroupItem"}},l={},m=[];function u(e){return(0,r.jsx)(c.A,{})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},3492:(e,t,n)=>{n.d(t,{A:()=>b});n(4041);var r=n(4357),i=n(5096),c=n(2436),s=n(5436),o=n(9082),a=n(4441);const l={cardContainer:"cardContainer_Shn5",cardTitle:"cardTitle_h48N",cardDescription:"cardDescription_CytT"};var m=n(1085);function u(e){let{href:t,children:n}=e;return(0,m.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",l.cardContainer),children:n})}function d(e){let{href:t,icon:n,title:i,description:c}=e;return(0,m.jsxs)(u,{href:t,children:[(0,m.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),c&&(0,m.jsx)("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:c,children:c})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t);return n?(0,m.jsx)(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,m.jsx)(d,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(f,{item:t});case"category":return(0,m.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,m.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,m.jsx)(x,{...e});const c=(0,i.d1)(t);return(0,m.jsx)("section",{className:(0,r.A)("row",n),children:c.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(h,{item:e})},t)))})}},1184:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(4041);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);