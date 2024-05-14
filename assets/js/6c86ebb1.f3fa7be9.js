"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[3354],{4474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(1085),s=n(1184);const i={},a="Custom Fonts",c={id:"docs/customizing/fonts",title:"Custom Fonts",description:"The data-ui5-font-face style tag",source:"@site/docs/docs/3-customizing/04-fonts.md",sourceDirName:"docs/3-customizing",slug:"/docs/customizing/fonts",permalink:"/ui5-webcomponents/docs/customizing/fonts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Manually Building a Custom Theme",permalink:"/ui5-webcomponents/docs/customizing/theme_part2"},next:{title:"Usage with Frameworks",permalink:"/ui5-webcomponents/docs/frameworks/"}},r={},d=[{value:"The data-ui5-font-face style tag",id:"the-data-ui5-font-face-style-tag",level:2},{value:"Customizing Fonts",id:"customizing-fonts",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"custom-fonts",children:"Custom Fonts"}),"\n",(0,o.jsx)(t.h2,{id:"the-data-ui5-font-face-style-tag",children:"The data-ui5-font-face style tag"}),"\n",(0,o.jsxs)(t.p,{children:["Upon ",(0,o.jsx)(t.code,{children:"boot"}),", the UI5 Web Components framework creates a ",(0,o.jsx)(t.code,{children:"<style data-ui5-font-face>"})," tag in the ",(0,o.jsx)(t.code,{children:"<head>"})," in order to load the necessary fonts."]}),"\n",(0,o.jsx)(t.p,{children:"For example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<style type="text/css" data-ui5-font-face="">\n\t@font-face {\n\t\tfont-family: "72";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tsrc: local("72"),\n\t\t\turl(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2");\n\t}\n\t\n\t................\n</style>\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Important:"})," Notice the ",(0,o.jsx)(t.code,{children:"data-ui5-font-face"})," attribute. It is unique and recognized by UI5 Web Components."]}),"\n",(0,o.jsx)(t.h2,{id:"customizing-fonts",children:"Customizing Fonts"}),"\n",(0,o.jsx)(t.p,{children:"You might need to customize fonts for several reasons:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"To provide different paths for the fonts (e.g. no public internet connection on the server)."}),"\n",(0,o.jsxs)(t.li,{children:["To provide additional declarations inside ",(0,o.jsx)(t.code,{children:"@font-face"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["To download additional fonts, such as e.g. ",(0,o.jsx)(t.code,{children:"72-Light"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Not to download any of the default fonts."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To do that, just create a ",(0,o.jsx)(t.code,{children:'<style type="text/css" data-ui5-font-face="">'})," tag in the ",(0,o.jsx)(t.code,{children:"head"})," of your HTML page and\nprovide arbitrary content for it."]}),"\n",(0,o.jsxs)(t.p,{children:["Then, when the UI5 Web Components framework boots, it will detect the existence of this tag by the ",(0,o.jsx)(t.code,{children:"data-ui5-font-face"}),"\nattribute, and will not create it. The one you provided will be used instead."]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(t.p,{children:["In order to use the ",(0,o.jsx)(t.code,{children:"72-Light"})," font in your app and have an additional setting (",(0,o.jsx)(t.code,{children:"font-display"}),"), you could add the following markup in the ",(0,o.jsx)(t.code,{children:"<head>"})," of your HTML page:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'    <style type="text/css" data-ui5-font-face="">\n        @font-face {\n            font-family: "72";\n            font-style: normal;\n            font-weight: 200;\n            font-display: swap;\n            src: local("72-Light"),\n            url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Light.woff2?ui5-webcomponents) format("woff2");\n        }\n    </style>\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1184:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(4041);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);