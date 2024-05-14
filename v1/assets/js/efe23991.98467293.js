"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[9758],{5431:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=s(1085),n=s(1184);const r={},d=void 0,c={id:"components/fiori/ProductSwitch/ProductSwitchItem",title:"ProductSwitchItem",description:"The ui5-product-switch-item web component represents the items displayed in the",source:"@site/docs/components/fiori/ProductSwitch/ProductSwitchItem.mdx",sourceDirName:"components/fiori/ProductSwitch",slug:"/components/fiori/ProductSwitch/ProductSwitchItem",permalink:"/ui5-webcomponents/v1/components/fiori/ProductSwitch/ProductSwitchItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"ProductSwitch",permalink:"/ui5-webcomponents/v1/components/fiori/ProductSwitch/"},next:{title:"ShellBar",permalink:"/ui5-webcomponents/v1/components/fiori/ShellBar/"}},l={},h=[{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"titleText",id:"titletext",level:3},{value:"subtitleText",id:"subtitletext",level:3},{value:"icon",id:"icon",level:3},{value:"target",id:"target",level:3},{value:"targetSrc",id:"targetsrc",level:3},{value:"Slots",id:"slots",level:2},{value:"Events",id:"events",level:2},{value:"click",id:"click",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"ui5-product-switch-item"})," web component represents the items displayed in the\n",(0,i.jsx)(t.code,{children:"ui5-product-switch"})," web component."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," ",(0,i.jsx)(t.code,{children:"ui5-product-switch-item"})," is not supported when used outside of ",(0,i.jsx)(t.code,{children:"ui5-product-switch"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"ui5-product-switch"})," provides advanced keyboard handling.\nWhen focused, the user can use the following keyboard\nshortcuts in order to perform a navigation:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["[Space] / [Enter] or [Return] - Trigger ",(0,i.jsx)(t.code,{children:"ui5-click"})," event"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";'})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"titletext",children:"titleText"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the title of the component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'""'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"subtitletext",children:"subtitleText"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the subtitle of the component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'""'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"icon",children:"icon"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the icon to be displayed as a graphical element within the component.",(0,i.jsx)("br",{}),"Example:",(0,i.jsx)("br",{}),(0,i.jsx)(t.code,{children:'<ui5-product-switch-item icon="palette">'}),(0,i.jsx)("br",{}),"See all the available icons in the ",(0,i.jsx)(t.a,{href:"https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html",children:"Icon Explorer"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"target",children:"target"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines a target where the ",(0,i.jsx)(t.code,{children:"targetSrc"})," content must be open.",(0,i.jsx)("br",{}),"Available options are:",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"_self"}),(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"_top"}),(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"_blank"}),(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"_parent"}),(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"_search"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"_self"'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"targetsrc",children:"targetSrc"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the component target URI. Supports standard hyperlink behavior."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(t.p,{children:"No slots available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.h3,{id:"click",children:"click"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Fired when the ",(0,i.jsx)(t.code,{children:"ui5-product-switch-item"})," is activated either with a click/tap or by using the Enter or Space key."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsx)(t.p,{children:"No CSS parts available for this component."})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1184:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var i=s(4041);const n={},r=i.createContext(n);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);