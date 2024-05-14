"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[6106],{809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>C,contentTitle:()=>T,default:()=>D,frontMatter:()=>k,metadata:()=>S,toc:()=>E});var o=t(1085),i=t(1184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-label>Simple Label</ui5-label><br>\n\n    <ui5-label for="myInputSimple" show-colon>Label</ui5-label>\n    <ui5-input id="myInputSimple" placeholder="Type message"></ui5-input>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Input.js";';function l(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,o.jsx)(n,{html:s,js:r})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-label for="myInputWrapping" class="w200">Label that demonstrates truncation, the long labels till truncate.</ui5-label>\n    <br><br>\n    <ui5-label for="myInputWrapping" wrapping-type="Normal" class="w200">Label that demonstrates how, if set to wrapping-type="Normal", the long labels could be wrapped. To test the truncation, use \'wrapping-type="None"</ui5-label>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Input.js";\n',p=".w200 {\n    width: 200px;\n}";function h(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,o.jsx)(n,{html:c,js:a,css:p})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}const x='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <div class="f">\n        <ui5-label for="myInput" required show-colon>First name</ui5-label>\n        <ui5-input id="myInput" required placeholder="Enter your name"></ui5-input>\n        <ui5-label for="myDatePicker" required show-colon>Date of birth</ui5-label>\n        <ui5-date-picker id="myDatePicker" required></ui5-date-picker>\n        <ui5-label for="mySelect" required show-colon>Job</ui5-label>\n        <ui5-select id="mySelect" required>\n            <ui5-option>Manager</ui5-option>\n            <ui5-option>Sales</ui5-option>\n            <ui5-option selected>Developer</ui5-option>\n        </ui5-select>\n        <ui5-label for="myTextArea" required show-colon>Description</ui5-label>\n        <ui5-textarea id="myTextArea" required placeholder="Type as much text as you wish"></ui5-textarea>\n        <div style="display: flex; align-items: center;">\n            <ui5-label for="myCheckBox" required show-colon>Accept terms of use</ui5-label>\n            <ui5-checkbox id="myCheckBox" required></ui5-checkbox>\n        </div>\n    </div>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',m='import "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Input.js";\nimport "@ui5/webcomponents/dist/DatePicker.js";\nimport "@ui5/webcomponents/dist/Select.js";\nimport "@ui5/webcomponents/dist/Option.js";\nimport "@ui5/webcomponents/dist/TextArea.js";\nimport "@ui5/webcomponents/dist/CheckBox.js";',j=".f {\n    display: flex;\n    flex-direction: column;\n}\n.f > :nth-child(2n) {\n    margin-bottom: 1.5rem;\n}";function b(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,o.jsx)(n,{html:x,js:m,css:j})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}const y='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-label style="color: var(--sapPositiveColor); font-size: 1.25rem;">Styled Label</ui5-label>\n    <ui5-label style="color: var(--sapNegativeColor); font-size: 1rem; font-style: italic;">Styled Label</ui5-label>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',w='import "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Input.js";';function g(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,o.jsx)(n,{html:y,js:w})}function v(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}const k={slug:"../Label"},T=void 0,S={id:"components/main/Label",title:"Label",description:"The ui5-label is a component used to represent a label for elements like input, textarea, select.",source:"@site/docs/components/main/Label.mdx",sourceDirName:"components/main",slug:"/components/Label",permalink:"/ui5-webcomponents/v1/components/Label",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../Label"},sidebar:"componentsSidebar",previous:{title:"SuggestionItem",permalink:"/ui5-webcomponents/v1/components/SuggestionItem"},next:{title:"Link",permalink:"/ui5-webcomponents/v1/components/Link"}},C={},E=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"for",id:"for",level:3},{value:"showColon",id:"showcolon",level:3},{value:"required",id:"required",level:3},{value:"wrappingType",id:"wrappingtype",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Text Truncation and Wrapping",id:"text-truncation-and-wrapping",level:3},{value:"Label with Input",id:"label-with-input",level:3},{value:"Custom Styling",id:"custom-styling",level:3}];function L(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ui5-label"})," is a component used to represent a label for elements like input, textarea, select.\nThe ",(0,o.jsx)(n.code,{children:"for"})," property of the ",(0,o.jsx)(n.code,{children:"ui5-label"})," must be the same as the id attribute of the related input element.\nScreen readers read out the label, when the user focuses the labelled control."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ui5-label"})," appearance can be influenced by properties,\nsuch as ",(0,o.jsx)(n.code,{children:"required"})," and ",(0,o.jsx)(n.code,{children:"wrappingType"}),".\nThe appearance of the Label can be configured in a limited way by using the design property.\nFor a broader choice of designs, you can use custom styles."]}),"\n",(0,o.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/Label";'})}),"\n",(0,o.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,o.jsx)(d,{}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h3,{id:"for",children:"for"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Description"}),(0,o.jsxs)(n.td,{children:["Defines the labeled input by providing its ID.",(0,o.jsx)("br",{}),(0,o.jsx)(n.strong,{children:"Note:"})," Can be used with both ",(0,o.jsx)(n.code,{children:"ui5-input"})," and native input."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Type"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Default"}),(0,o.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"showcolon",children:"showColon"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Description"}),(0,o.jsxs)(n.td,{children:["Defines whether colon is added to the component text.",(0,o.jsx)("br",{}),(0,o.jsx)(n.strong,{children:"Note:"})," Usually used in forms."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Type"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Default"}),(0,o.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"required",children:"required"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Description"}),(0,o.jsxs)(n.td,{children:["Defines whether an asterisk character is added to the component text.",(0,o.jsx)("br",{}),(0,o.jsx)(n.strong,{children:"Note:"})," Usually indicates that user input (bound with the ",(0,o.jsx)(n.code,{children:"for"})," property) is required. In that case the ",(0,o.jsx)(n.code,{children:"required"})," property of the corresponding input should also be set."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Type"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Default"}),(0,o.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"wrappingtype",children:"wrappingType"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Description"}),(0,o.jsxs)(n.td,{children:["Defines how the text of a component will be displayed when there is not enough space.",(0,o.jsx)("br",{}),(0,o.jsx)(n.strong,{children:"Note:"}),' for option "Normal" the text will wrap and the words will not be broken based on hyphenation.']})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Type"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'"None" | "Normal"'})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Default"}),(0,o.jsx)(n.td,{children:'"None"'})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,o.jsx)(n.h3,{id:"default",children:"default"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Description"}),(0,o.jsxs)(n.td,{children:["Defines the text of the component.",(0,o.jsx)("br",{}),(0,o.jsx)(n.strong,{children:"Note:"})," Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Type"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Array<Node>"})})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,o.jsx)(n.p,{children:"No events available for this component."}),"\n",(0,o.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(n.p,{children:"No methods available for this component."}),"\n",(0,o.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,o.jsx)(n.p,{children:"No CSS parts available for this component."}),"\n",(0,o.jsx)(n.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,o.jsx)(n.h3,{id:"text-truncation-and-wrapping",children:"Text Truncation and Wrapping"}),"\n",(0,o.jsxs)(n.p,{children:["The Label truncates by default. To make it wrap - set ",(0,o.jsx)("b",{children:'wrapping-type="Normal"'}),"."]}),"\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(n.h3,{id:"label-with-input",children:"Label with Input"}),"\n",(0,o.jsxs)(n.p,{children:["The Labes' ",(0,o.jsx)("b",{children:"for"}),", ",(0,o.jsx)("b",{children:"required"})," and ",(0,o.jsx)("b",{children:"showColon"})," properties can be used to reference inputs."]}),"\n",(0,o.jsx)(f,{}),"\n",(0,o.jsx)(n.h3,{id:"custom-styling",children:"Custom Styling"}),"\n",(0,o.jsx)(n.p,{children:"The Labes can be customized with pure CSS, applied on the tag."}),"\n",(0,o.jsx)(v,{})]})}function D(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(L,{...e})}):L(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var o=t(4041);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);