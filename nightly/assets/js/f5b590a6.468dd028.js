"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[982],{7277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>b});var s=t(1085),i=t(1184);const d='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <style>\n        body {\n            height: 300px;\n        }\n\n        .popover-content {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n\n        .popover-footer {\n            display: flex;\n            justify-content: flex-end;\n            width: 100%;\n            align-items: center;\n            padding: 0.5rem 0;\n        }\n    </style>\n\n  \x3c!-- playground-fold-end --\x3e\n\n\n    <ui5-button id="btn">Open Popover</ui5-button>\n\n    <ui5-popover opener="btn" header-text="Newsletter subscription">\n \n        <div class="popover-content">\n            <ui5-label for="emailInput" required show-colon>Email</ui5-label>\n            <ui5-input id="emailInput" style="min-width: 150px;" placeholder="Enter Email"></ui5-input>\n            <ui5-label>Note: If you open the page in mobile, a dialog would be displayed.</ui5-label>\n        </div>\n\n        <div slot="footer" class="popover-footer">\n            <ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>\n        </div>\n\n    </ui5-popover>\n\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents/dist/Popover.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Input.js";\n\nconst btn = [...document.getElementsByTagName("ui5-button")][0];\nconst popover = [...document.getElementsByTagName("ui5-popover")][0];\n\nbtn.addEventListener("click", () => {\n\tpopover.open = !popover.open;\n});';function l(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(n,{html:d,js:r})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <style>\n        body {\n            height: 400px;\n        }\n\n        .popover-content {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n\n        .popover-footer {\n            display: flex;\n            justify-content: flex-end;\n            width: 100%;\n            align-items: center;\n            padding: 0.5rem 0;\n        }\n\n        .center {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100%;\n            width: 100%;\n        }\n    </style>\n\n  \x3c!-- playground-fold-end --\x3e\n\n\n    <div class="center">\n        <ui5-button id="btn1">Open Popover to Bottom</ui5-button>\n        <ui5-button id="btn2">Open Popover to Left</ui5-button>\n    </div>\n   \n    <ui5-popover id="popover1" opener="btn1" header-text="Newsletter subscription" placement="Bottom">\n        <div class="popover-content">\n            <ui5-label for="emailInput" required show-colon>Email</ui5-label>\n            <ui5-input id="emailInput" style="min-width: 150px;" placeholder="Enter Email"></ui5-input>\n            <ui5-label>Note: If you open the page in mobile, a dialog would be displayed.</ui5-label>\n        </div>\n\n        <div slot="footer" class="popover-footer">\n            <ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>\n        </div>\n    </ui5-popover>\n\n    <ui5-popover id="popover2" opener="btn2" header-text="Newsletter subscription" placement="Start">\n        <div class="popover-content">\n            <ui5-label for="emailInput" required show-colon>Email</ui5-label>\n            <ui5-input id="emailInput" style="min-width: 150px;" placeholder="Enter Email"></ui5-input>\n            <ui5-label>Note: If you open the page in mobile, a dialog would be displayed.</ui5-label>\n        </div>\n        <div slot="footer" class="popover-footer">\n            <ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>\n        </div>\n    </ui5-popover>\n\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',h='import "@ui5/webcomponents/dist/Popover.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Input.js";\n\nconst btn1 = document.getElementById("btn1");\nconst popover1 = document.getElementById("popover1");\nconst btn2 = document.getElementById("btn2");\nconst popover2 = document.getElementById("popover2");\n\nbtn1.addEventListener("click", () => {\n\tpopover1.open = !popover1.open;\n});\nbtn2.addEventListener("click", () => {\n\tpopover2.open = !popover2.open;\n});';function x(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(n,{html:c,js:h})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}const a={slug:"../Popover"},p=void 0,u={id:"components/main/Popover",title:"Popover",description:"The ui5-popover component displays additional information for an object",source:"@site/docs/components/main/Popover.mdx",sourceDirName:"components/main",slug:"/components/Popover",permalink:"/ui5-webcomponents/nightly/components/Popover",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../Popover"},sidebar:"componentsSidebar",previous:{title:"Panel",permalink:"/ui5-webcomponents/nightly/components/Panel"},next:{title:"ProgressIndicator",permalink:"/ui5-webcomponents/nightly/components/ProgressIndicator"}},m={},b=[{value:"Structure",id:"structure",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"headerText",id:"headertext",level:3},{value:"placement",id:"placement",level:3},{value:"horizontalAlign",id:"horizontalalign",level:3},{value:"verticalAlign",id:"verticalalign",level:3},{value:"modal",id:"modal",level:3},{value:"hideArrow",id:"hidearrow",level:3},{value:"allowTargetOverlap",id:"allowtargetoverlap",level:3},{value:"opener",id:"opener",level:3},{value:"initialFocus",id:"initialfocus",level:3},{value:"preventFocusRestore",id:"preventfocusrestore",level:3},{value:"accessibleName",id:"accessiblename",level:3},{value:"accessibleNameRef",id:"accessiblenameref",level:3},{value:"accessibleRole",id:"accessiblerole",level:3},{value:"preventInitialFocus",id:"preventinitialfocus",level:3},{value:"open",id:"open",level:3},{value:"Slots",id:"slots",level:2},{value:"header",id:"header",level:3},{value:"footer",id:"footer",level:3},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"before-open",id:"before-open",level:3},{value:"open",id:"open-1",level:3},{value:"before-close",id:"before-close",level:3},{value:"close",id:"close",level:3},{value:"Methods",id:"methods",level:2},{value:"applyFocus",id:"applyfocus",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Placement",id:"placement-1",level:3}];function v(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ui5-popover"})," component displays additional information for an object\nin a compact way and without leaving the page.\nThe Popover can contain various UI elements, such as fields, tables, images, and charts.\nIt can also include actions in the footer."]}),"\n",(0,s.jsx)(n.h3,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(n.p,{children:"The popover has three main areas:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Header (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Content"}),"\n",(0,s.jsx)(n.li,{children:"Footer (optional)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The ",(0,s.jsx)(n.code,{children:"ui5-popover"})," is closed when the user clicks\nor taps outside the popover\nor selects an action within the popover. You can prevent this with the\n",(0,s.jsx)(n.code,{children:"modal"})," property."]}),"\n",(0,s.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/Popover.js";'})}),"\n",(0,s.jsxs)(n.p,{children:["**Note: ** We recommend placing popup-like components (",(0,s.jsx)(n.code,{children:"ui5-dialog"})," and ",(0,s.jsx)(n.code,{children:"ui5-popover"}),")\noutside any other components. Preferably, the popup-like components should be placed\nin an upper level HTML element. Otherwise, in some cases the parent HTML elements can break\nthe position and/or z-index management of the popup-like components."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," We don't recommend nesting popup-like components (",(0,s.jsx)(n.code,{children:"ui5-dialog"}),", ",(0,s.jsx)(n.code,{children:"ui5-popover"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"headertext",children:"headerText"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Defines the header text.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," If ",(0,s.jsx)(n.code,{children:"header"})," slot is provided, the ",(0,s.jsx)(n.code,{children:"headerText"})," is ignored."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"placement",children:"placement"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Determines on which side the component is placed at."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"Start" | "End" | "Top" | "Bottom"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'"End"'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"horizontalalign",children:"horizontalAlign"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Determines the horizontal alignment of the component."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"Center" | "Start" | "End" | "Stretch"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'"Center"'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"verticalalign",children:"verticalAlign"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Determines the vertical alignment of the component."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"Center" | "Top" | "Bottom" | "Stretch"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'"Center"'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"modal",children:"modal"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines whether the component should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"hidearrow",children:"hideArrow"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Determines whether the component arrow is hidden."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"allowtargetoverlap",children:"allowTargetOverlap"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Determines if there is no enough space, the component can be placed over the target."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"opener",children:"opener"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the ID or DOM Reference of the element that the popover is shown at"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"HTMLElement | undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"undefined"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"1.2.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"initialfocus",children:"initialFocus"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the ID of the HTML Element, which will get the initial focus."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"preventfocusrestore",children:"preventFocusRestore"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines if the focus should be returned to the previously focused element, when the popup closes."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"1.0.0-rc.8"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the accessible name of the component."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string | undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"undefined"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"accessiblenameref",children:"accessibleNameRef"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the IDs of the elements that label the component."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'""'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"1.1.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"accessiblerole",children:"accessibleRole"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Allows setting a custom role."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"None" | "Dialog" | "AlertDialog"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'"Dialog"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"1.10.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"preventinitialfocus",children:"preventInitialFocus"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Indicates whether initial focus should be prevented."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"2.0"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"open",children:"open"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Indicates if the element is open"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"1.2.0"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(n.h3,{id:"header",children:"header"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the header HTML Element."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"footer",children:"footer"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the footer HTML Element."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"default",children:"default"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the content of the Popup."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(n.h3,{id:"before-open",children:"before-open"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. ",(0,s.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"open-1",children:"open"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Fired after the component is opened. ",(0,s.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"before-close",children:"before-close"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. ",(0,s.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CustomEvent<PopupBeforeCloseEventDetail>"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Parameters"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"escPressed"}),": ",(0,s.jsx)(n.code,{children:"boolean"}),(0,s.jsx)("br",{}),"Indicates that ",(0,s.jsx)(n.code,{children:"ESC"})," key has triggered the event."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"close",children:"close"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Fired after the component is closed. ",(0,s.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"applyfocus",children:"applyFocus"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Focuses the element denoted by ",(0,s.jsx)(n.code,{children:"initialFocus"}),", if provided, or the first focusable element otherwise."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Return type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Promise<void>"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"Used to style the header of the component"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"content"}),(0,s.jsx)(n.td,{children:"Used to style the content of the component"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"footer"}),(0,s.jsx)(n.td,{children:"Used to style the footer of the component"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,s.jsx)(n.h3,{id:"placement-1",children:"Placement"}),"\n",(0,s.jsx)(n.p,{children:"You can influence the placement of the popup.\nNote: if there is not enough space for the popup on the defined side, it will open on the side with enough space."}),"\n",(0,s.jsx)(j,{})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(4041);const i={},d=s.createContext(i);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);