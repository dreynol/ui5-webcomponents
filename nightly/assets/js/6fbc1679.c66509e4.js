"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[4951],{3208:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>j,frontMatter:()=>a,metadata:()=>h,toc:()=>x});var t=i(1085),l=i(1184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-flexible-column-layout id="fcl" class="fcl">\n        <div class="col" slot="startColumn">\n            <ui5-shellbar primary-title="Smart Store, New Yorks" notifications-count="4" show-notifications\n                show-product-switch show-co-pilot>\n                <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" slot="logo" />\n                <ui5-shellbar-item icon="disconnected" text="Disconnect"></ui5-shellbar-item>\n                <ui5-shellbar-item icon="incoming-call" text="Incoming Calls"></ui5-shellbar-item>\n            </ui5-shellbar>\n            <br /><br />\n            <ui5-list id="col1list" header-text="Products (13)" selection-mode="Single">\n                <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch\n                    Portable DVD</ui5-li>\n                <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch\n                    WidescreenPortable DVD Player w MP3</ui5-li>\n                <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro\n                    Laptop 1516</ui5-li>\n                <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro\n                    Phone 6</ui5-li>\n                <ui5-li description="HT-1252" icon="slim-arrow-right" icon-end\n                    additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>\n                <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam\n                    Breaker B-1</ui5-li>\n                <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam\n                    Breaker B-2</ui5-li>\n                <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam\n                    Breaker B-3</ui5-li>\n                <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam\n                    Breaker B-4</ui5-li>\n                <ui5-li description="HT-8001" icon="slim-arrow-right" icon-end\n                    additional-text="1,288.00 EUR">Camcorder View</ui5-li>\n                <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda\n                    Laptop 1408</ui5-li>\n                <ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat\n                    Tablet 10.5</ui5-li>\n                <ui5-li description="HT-1001" icon="slim-arrow-right" icon-end additional-text="87.90 EUR">Gladiator\n                    MX</ui5-li>\n            </ui5-list>\n        </div>\n        <div class="col" slot="midColumn">\n            <div class="colHeader">\n                <ui5-title id="col2title" level="H2" style="min-width: 1px;"></ui5-title>\n                <div class="colSubHeader">\n                    <ui5-button design="Emphasized">Edit</ui5-button>\n                    <ui5-button design="Transparent" icon="add"></ui5-button>\n                    <ui5-button id="fullscreenMidColumn" design="Transparent" icon="full-screen"></ui5-button>\n                    <ui5-button id="closeMidColumn" icon="decline" design="Transparent"></ui5-button>\n                </div>\n            </div>\n            <br />\n            <section style="padding: 1rem 1rem;">\n                <ui5-title level="H3">General Information</ui5-title>\n                <br />\n                <div\n                    style="display:flex; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap">\n                    <div style="display:flex; flex-direction: row; align-items: center;">\n                        <ui5-avatar id="avatar" icon="laptop" color-scheme="Accent5" size="XL"\n                            style="margin: 0 1rem; min-width: 7rem;">\n                        </ui5-avatar>\n                        <div>\n                            <div class="productInfo">\n                                <ui5-title level="H5">Product:</ui5-title>\n                                <ui5-title level="H5" id="lblName"></ui5-title>\n                            </div>\n                            <br />\n                            <div class="productInfo">\n                                <ui5-title level="H5">Description:</ui5-title>\n                                <ui5-title level="H5" id="lblDesc"></ui5-title>\n                            </div>\n                            <br />\n                            <div class="productInfo">\n                                <ui5-title level="H5">Supplier:</ui5-title>\n                                <ui5-title level="H5" id="lblSupplier"><b>Titanium</b></ui5-title>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="productInfo" style="align-self: start">\n                        <ui5-title level="H5">Rating:</ui5-title>\n                        <ui5-rating-indicator id="productRating" accessible-name="Hello World"\n                            value="3.5"></ui5-rating-indicator>\n                    </div>\n                    <span></span>\n                </div>\n                <br /><br /><br />\n                <ui5-title level="H3">Suppliers</ui5-title>\n                <br />\n                <ui5-list id="col2list">\n                    <ui5-li icon="slim-arrow-right" icon-end>Titanium</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>Technocom</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>\n                        Red Point Stores</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>\n                        Very Best Screens</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>Smartcards</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>Alpha Printers</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>Printer for All</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>Oxynum</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>Fasttech</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>Ultrasonic United</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>Speaker Experts</ui5-li>\n                    <ui5-li icon="slim-arrow-right" icon-end>Brainsoft</ui5-li>\n                </ui5-list>\n            </section>\n        </div>\n        <div class="col" slot="endColumn">\n            <div class="colHeader">\n                <ui5-title id="col3title" style="min-width: 1px;"></ui5-title>\n                <div class="colSubHeader">\n                    <ui5-button design="Emphasized">Edit</ui5-button>\n                    <ui5-button design="Transparent" icon="add"></ui5-button>\n                    <ui5-button id="fullscreenEndColumn" design="Transparent" icon="full-screen"></ui5-button>\n                    <ui5-button id="closeEndColumn" icon="decline" design="Transparent"></ui5-button>\n                </div>\n            </div>\n            <br /><br />\n            <ui5-tabcontainer id="tabContainer1" collapsed>\n                <ui5-tab text="Products" additional-text="125"> </ui5-tab>\n                <ui5-tab-separator></ui5-tab-separator>\n                <ui5-tab icon="sap-icon://menu2" text="Laptops" design="Positive" additional-text="25">\n                </ui5-tab>\n                <ui5-tab icon="sap-icon://menu" text="Monitors" selected design="Critical" additional-text="45">\n                </ui5-tab>\n                <ui5-tab icon="sap-icon://menu2" text="Keyboards" design="Negative" additional-text="15">\n                </ui5-tab>\n                <ui5-tab icon="sap-icon://menu2" disabled text="Disabled" design="Negative" additional-text="40">\n                </ui5-tab>\n                <ui5-tab icon="sap-icon://menu2" text="Neutral" design="Neutral" additional-text="40">\n                </ui5-tab>\n                <ui5-tab icon="sap-icon://menu2" text="Default" additional-text="40">\n                </ui5-tab>\n            </ui5-tabcontainer>\n            <section style="padding: 1rem 1rem; background: var(--sapList_Background);">\n                <p>\n                    <ui5-title level="H5">"Lorem ipsum dolor sit amet, consectetur adipiscing\n                        elit, sed do\n                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                        enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n                        reprehenderit in voluptate velit esse cillum dolore eu fugiat\n                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n                        sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    </ui5-title>\n                </p>\n                <p>\n                    <ui5-title level="H5">"Lorem ipsum dolor sit amet, consectetur adipiscing\n                        elit, sed do\n                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                        enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n                        reprehenderit in voluptate velit esse cillum dolore eu fugiat\n                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n                        sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    </ui5-title>\n                </p>\n                <p>\n                    <ui5-title level="H5">"Lorem ipsum dolor sit amet, consectetur adipiscing\n                        elit, sed do\n                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                        enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n                        reprehenderit in voluptate velit esse cillum dolore eu fugiat\n                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n                        sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    </ui5-title>\n                </p>\n            </section>\n        </div>\n    </ui5-flexible-column-layout>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',o='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/StandardListItem.js";\nimport "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/RatingIndicator.js";\nimport "@ui5/webcomponents/dist/Tab.js";\nimport "@ui5/webcomponents/dist/TabContainer.js";\nimport "@ui5/webcomponents/dist/TabSeparator.js";\n\nimport "@ui5/webcomponents-fiori/dist/ShellBar.js";\nimport "@ui5/webcomponents-fiori/dist/ShellBarItem.js";\nimport "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";\n\nimport "@ui5/webcomponents-icons/dist/incoming-call.js";\nimport "@ui5/webcomponents-icons/dist/disconnected.js";\nimport "@ui5/webcomponents-icons/dist/camera.js";\nimport "@ui5/webcomponents-icons/dist/laptop.js";\nimport "@ui5/webcomponents-icons/dist/desktop-mobile.js";\nimport "@ui5/webcomponents-icons/dist/responsive.js";\nimport "@ui5/webcomponents-icons/dist/print.js";\nimport "@ui5/webcomponents-icons/dist/iphone.js";\nimport "@ui5/webcomponents-icons/dist/ipad.js";\nimport "@ui5/webcomponents-icons/dist/menu2.js";\nimport "@ui5/webcomponents-icons/dist/menu.js";\nimport "@ui5/webcomponents-icons/dist/slim-arrow-right.js";\n\nlet midFullScreen = false;\nlet endFullScreen = false;\nlet avatars = [\n    "camera",\n    "laptop",\n    "desktop-mobile",\n    "responsive",\n    "print",\n    "iphone",\n    "ipad",\n];\nlet avatarsBG = [\n    "Accent1",\n    "Accent2",\n    "Accent3",\n    "Accent4",\n    "Accent5",\n    "Accent6",\n    "Accent7",\n    "Accent8",\n    "Accent9",\n    "Accent10",\n];\nlet suppliers = [\n    "Titanium",\n    "Technocom",\n    " Red Point Stores",\n    " Very Best Screens",\n    "Smartcards",\n    "Alpha Printers",\n    "Printer for All",\n    "Oxynum",\n    "Fasttech",\n    "Ultrasonic United",\n    "Speaker Experts",\n    "Brainsoft",\n];\nfunction updateProductInfo(item) {\n    avatar.icon = avatars[getRandomInt(6)];\n    avatar.backgroundColor = avatarsBG[getRandomInt(9) + 1];\n    productRating.value = getRandomInt(4) + 1;\n    col2title.textContent = item.textContent;\n    lblName.innerHTML = "<b>" + item.textContent + "</b>";\n    lblDesc.innerHTML = "<b>" + item.description + "</b>";\n    lblSupplier.innerHTML = "<b>" + suppliers[getRandomInt(11)] + "</b>";\n}\nfunction updateDetailInfo(item) {\n    col3title.textContent = item.textContent;\n}\nfunction nextLayout(target) {\n    let layout = fcl.layout;\n    if (target === "col1") {\n        exitFullScreen();\n        return "TwoColumnsMidExpanded";\n    }\n    if (target === "col2") {\n        if (midFullScreen) {\n            enterFullScreen();\n            return "EndColumnFullScreen";\n        }\n        exitFullScreen();\n        return "ThreeColumnsMidExpanded";\n    }\n    if (target === "col2close") {\n        if (midFullScreen) {\n            enterFullScreen();\n        } else {\n            exitFullScreen();\n        }\n        return "OneColumn";\n    }\n    if (target === "col3close") {\n        if (fcl.media === "phone") {\n            endFullScreen = true;\n        }\n        if (endFullScreen) {\n            enterFullScreen();\n            return "MidColumnFullScreen";\n        }\n        exitFullScreen();\n        return "ThreeColumnsMidExpandedEndHidden";\n    }\n    if (target === "col2fullscreen") {\n        if (!midFullScreen) {\n            enterFullScreen();\n            return "MidColumnFullScreen";\n        }\n        exitFullScreen();\n        return "ThreeColumnsMidExpandedEndHidden";\n    }\n    if (target === "col3fullscreen") {\n        if (!endFullScreen) {\n            enterFullScreen();\n            return "EndColumnFullScreen";\n        }\n        exitFullScreen();\n        return "ThreeColumnsEndExpanded";\n    }\n}\nfunction getRandomInt(max) {\n    return Math.floor(Math.random() * Math.floor(max));\n}\nfunction enterFullScreen() {\n    endFullScreen = true;\n    midFullScreen = true;\n    fullscreenMidColumn.icon = "exit-full-screen";\n    fullscreenEndColumn.icon = "exit-full-screen";\n}\nfunction exitFullScreen() {\n    endFullScreen = false;\n    midFullScreen = false;\n    fullscreenMidColumn.icon = "full-screen";\n    fullscreenEndColumn.icon = "full-screen";\n}\n// Event handlers\ncol1list.addEventListener("item-click", function (e) {\n    updateProductInfo(e.detail.item);\n    fcl.layout = nextLayout("col1");\n});\ncol2list.addEventListener("item-click", function (e) {\n    updateDetailInfo(e.detail.item);\n    fcl.layout = nextLayout("col2");\n});\ncloseMidColumn.addEventListener("click", function (e) {\n    fcl.layout = nextLayout("col2close");\n});\ncloseEndColumn.addEventListener("click", function (e) {\n    fcl.layout = nextLayout("col3close");\n});\nfullscreenMidColumn.addEventListener("click", function (e) {\n    fcl.layout = nextLayout("col2fullscreen");\n});\nfullscreenEndColumn.addEventListener("click", function (e) {\n    fcl.layout = nextLayout("col3fullscreen");\n});',r=".fcl {\n    height: 600px;\n}\n\n.col {\n    height: 100%;\n}\n\n.colHeader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 2.75rem;\n    padding: 0.25rem 1rem 0.25rem 1rem;\n    background: var(--sapList_Background);\n    box-sizing: border-box;\n}\n\n.colSubHeader {\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n}\n\n.productInfo {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: wrap;\n}";function d(e){const{Editor:n}={...(0,l.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(n,{html:s,js:o,css:r})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const a={},u=void 0,h={id:"components/fiori/FlexibleColumnLayout",title:"FlexibleColumnLayout",description:"The FlexibleColumnLayout implements the list-detail-detail paradigm by displaying up to three pages in separate columns.",source:"@site/docs/components/fiori/FlexibleColumnLayout.mdx",sourceDirName:"components/fiori",slug:"/components/fiori/FlexibleColumnLayout",permalink:"/ui5-webcomponents/nightly/components/fiori/FlexibleColumnLayout",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"DynamicSideContent",permalink:"/ui5-webcomponents/nightly/components/fiori/DynamicSideContent"},next:{title:"IllustratedMessage",permalink:"/ui5-webcomponents/nightly/components/fiori/IllustratedMessage"}},m={},x=[{value:"Usage",id:"usage",level:3},{value:"Responsive Behavior",id:"responsive-behavior",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Basic Navigation",id:"basic-navigation",level:4},{value:"Fast Navigation",id:"fast-navigation",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"layout",id:"layout",level:3},{value:"hideArrows",id:"hidearrows",level:3},{value:"accessibilityAttributes",id:"accessibilityattributes",level:3},{value:"columnLayout",id:"columnlayout",level:3},{value:"startColumnVisible",id:"startcolumnvisible",level:3},{value:"midColumnVisible",id:"midcolumnvisible",level:3},{value:"endColumnVisible",id:"endcolumnvisible",level:3},{value:"visibleColumns",id:"visiblecolumns",level:3},{value:"Slots",id:"slots",level:2},{value:"startColumn",id:"startcolumn",level:3},{value:"midColumn",id:"midcolumn",level:3},{value:"endColumn",id:"endcolumn",level:3},{value:"Events",id:"events",level:2},{value:"layout-change",id:"layout-change",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function p(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"FlexibleColumnLayout"})," implements the list-detail-detail paradigm by displaying up to three pages in separate columns.\nThere are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns."]}),"\n",(0,t.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.).\nThe Component is flexible in a sense that the application can focus the user's attention on one particular column."}),"\n",(0,t.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"FlexibleColumnLayout"})," automatically displays the maximum possible number of columns based on ",(0,t.jsx)(n.code,{children:"layout"})," property and the window size.\nThe component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px,\nand 3 columns for sizes bigger than 1023px."]}),"\n",(0,t.jsx)(n.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,t.jsx)(n.h4,{id:"basic-navigation",children:"Basic Navigation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"[Space] / [Enter] or [Return] - If focus is on the layout toggle button (arrow button), once activated, it triggers the associated action (such as expand/collapse the column)."}),"\n",(0,t.jsxs)(n.li,{children:["This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].\nIn order to use this functionality, you need to import the following module:\n",(0,t.jsx)(n.code,{children:'import "@ui5/webcomponents-base/dist/features/F6Navigation.js"'})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"fast-navigation",children:"Fast Navigation"}),"\n",(0,t.jsxs)(n.p,{children:["This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].\nIn order to use this functionality, you need to import the following module:\n",(0,t.jsx)(n.code,{children:'import "@ui5/webcomponents-base/dist/features/F6Navigation.js"'})]}),"\n",(0,t.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";'})}),"\n",(0,t.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"layout",children:"layout"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsxs)(n.td,{children:["Defines the columns layout and their proportion.",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"Note:"})," The layout also depends on the screen size - one column for screens smaller than 599px, two columns between 599px and 1023px and three columns for sizes bigger than 1023px.",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"For example:"})," layout=",(0,t.jsx)(n.code,{children:"TwoColumnsStartExpanded"})," means the layout will display up to two columns in 67%/33% proportion."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"OneColumn" | "TwoColumnsStartExpanded" | "TwoColumnsMidExpanded" | "ThreeColumnsMidExpanded" | "ThreeColumnsEndExpanded" | "ThreeColumnsStartExpandedEndHidden" | "ThreeColumnsMidExpandedEndHidden" | "MidColumnFullScreen" | "EndColumnFullScreen"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Default"}),(0,t.jsx)(n.td,{children:'"OneColumn"'})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"hidearrows",children:"hideArrows"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Defines the visibility of the arrows, used for expanding and shrinking the columns."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Default"}),(0,t.jsx)(n.td,{children:"false"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Since"}),(0,t.jsx)(n.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"accessibilityattributes",children:"accessibilityAttributes"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsxs)(n.td,{children:["Defines additional accessibility attributes on different areas of the component.",(0,t.jsx)("br",{}),"The accessibilityAttributes object has the following fields, where each field is an object supporting one or more accessibility attributes:",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"startColumn"}),": ",(0,t.jsx)(n.code,{children:"startColumn.role"})," and ",(0,t.jsx)(n.code,{children:"startColumn.name"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"midColumn"}),": ",(0,t.jsx)(n.code,{children:"midColumn.role"})," and ",(0,t.jsx)(n.code,{children:"midColumn.name"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"endColumn"}),": ",(0,t.jsx)(n.code,{children:"endColumn.role"})," and ",(0,t.jsx)(n.code,{children:"endColumn.name"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"startArrowContainer"}),": ",(0,t.jsx)(n.code,{children:"startArrowContainer.role"})," and ",(0,t.jsx)(n.code,{children:"startArrowContainer.name"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"endArrowContainer"}),": ",(0,t.jsx)(n.code,{children:"endArrowContainerrole.role"})," and ",(0,t.jsx)(n.code,{children:"endArrowContainer.name"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"startArrowLeft"}),": ",(0,t.jsx)(n.code,{children:"startArrowLeft.name"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"startArrowRight"}),": ",(0,t.jsx)(n.code,{children:"startArrowRight.name"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"endArrowLeft"}),": ",(0,t.jsx)(n.code,{children:"endArrowLeft.name"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"endArrowRight"}),": ",(0,t.jsx)(n.code,{children:"endArrowRight.name"}),".",(0,t.jsx)("br",{}),"The accessibility attributes support the following values:",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"role"}),": Defines the accessible ARIA landmark role of the area. Accepts the following values: ",(0,t.jsx)(n.code,{children:"none"}),", ",(0,t.jsx)(n.code,{children:"complementary"}),", ",(0,t.jsx)(n.code,{children:"contentinfo"}),", ",(0,t.jsx)(n.code,{children:"main"})," or ",(0,t.jsx)(n.code,{children:"region"}),".",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(n.strong,{children:"name"}),": Defines the accessible ARIA name of the area. Accepts any string."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FCLAccessibilityAttributes"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Default"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Since"}),(0,t.jsx)(n.td,{children:"2.0.0"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"columnlayout",children:"columnLayout"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsxs)(n.td,{children:["Returns the current column layout, based on both the ",(0,t.jsx)(n.code,{children:"layout"})," property and the screen size.",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"For example:"}),' ["67%", "33%", 0], ["100%", 0, 0], ["25%", "50%", "25%"], etc, where the numbers represents the width of the start, middle and end columns.']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FlexibleColumnLayoutColumnLayout | undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Default"}),(0,t.jsx)(n.td,{children:"undefined"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"startcolumnvisible",children:"startColumnVisible"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsxs)(n.td,{children:["Returns if the ",(0,t.jsx)(n.code,{children:"start"})," column is visible."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Default"}),(0,t.jsx)(n.td,{children:"true"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"midcolumnvisible",children:"midColumnVisible"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsxs)(n.td,{children:["Returns if the ",(0,t.jsx)(n.code,{children:"middle"})," column is visible."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Default"}),(0,t.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"endcolumnvisible",children:"endColumnVisible"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsxs)(n.td,{children:["Returns if the ",(0,t.jsx)(n.code,{children:"end"})," column is visible."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Default"}),(0,t.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"visiblecolumns",children:"visibleColumns"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Returns the number of currently visible columns."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Default"}),(0,t.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsx)(n.h3,{id:"startcolumn",children:"startColumn"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Defines the content in the start column."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"midcolumn",children:"midColumn"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Defines the content in the middle column."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"endcolumn",children:"endColumn"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Defines the content in the end column."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(n.h3,{id:"layout-change",children:"layout-change"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Fired when the layout changes via user interaction by clicking the arrows or by changing the component size due to resizing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CustomEvent<FlexibleColumnLayoutLayoutChangeEventDetail>"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Parameters"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"layout"}),": ",(0,t.jsx)(n.code,{children:'"OneColumn" | "TwoColumnsStartExpanded" | "TwoColumnsMidExpanded" | "ThreeColumnsMidExpanded" | "ThreeColumnsEndExpanded" | "ThreeColumnsStartExpandedEndHidden" | "ThreeColumnsMidExpandedEndHidden" | "MidColumnFullScreen" | "EndColumnFullScreen"'}),(0,t.jsx)("br",{}),"The current layout",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"columnLayout"}),": ",(0,t.jsx)(n.code,{children:"array"}),(0,t.jsx)("br",{}),"The effective column layout, f.e [67%, 33%, 0]",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"startColumnVisible"}),": ",(0,t.jsx)(n.code,{children:"boolean"}),(0,t.jsx)("br",{}),"Indicates if the start column is currently visible",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"midColumnVisible"}),": ",(0,t.jsx)(n.code,{children:"boolean"}),(0,t.jsx)("br",{}),"Indicates if the middle column is currently visible",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"endColumnVisible"}),": ",(0,t.jsx)(n.code,{children:"boolean"}),(0,t.jsx)("br",{}),"Indicates if the end column is currently visible",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"arrowsUsed"}),": ",(0,t.jsx)(n.code,{children:"boolean"}),(0,t.jsx)("br",{}),"Indicates if the layout is changed via the arrows",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"resize"}),": ",(0,t.jsx)(n.code,{children:"boolean"}),(0,t.jsx)("br",{}),"Indicates if the layout is changed via resizing"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.p,{children:"No methods available for this component."}),"\n",(0,t.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,t.jsx)(n.p,{children:"No CSS parts available for this component."})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1184:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(4041);const l={},s=t.createContext(l);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);