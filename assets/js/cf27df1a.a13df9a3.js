"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[9053],{7340:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var t=o(1085),r=o(1184);const s={},l="Get Started with UI5 Web Components & Angular",a={id:"docs/frameworks/Angular",title:"Get Started with UI5 Web Components & Angular",description:"In this tutorial, you will learn how to use UI5 Web Components in an Angular application. In the second part, we will introduce UI5 Web Components for Angular - wrapper library for UI5 Web Components, improving their integration with Angular.",source:"@site/docs/docs/4-frameworks/02-Angular.md",sourceDirName:"docs/4-frameworks",slug:"/docs/frameworks/Angular",permalink:"/ui5-webcomponents/docs/frameworks/Angular",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Get Started with UI5 Web Components & React",permalink:"/ui5-webcomponents/docs/frameworks/React"},next:{title:"Get Started with UI5 Web Components & Vue.js",permalink:"/ui5-webcomponents/docs/frameworks/Vue"}},i={},p=[{value:"UI5 Web Components",id:"ui5-web-components",level:2},{value:"Step 1. Install Angular CLI.",id:"step-1-install-angular-cli",level:3},{value:"Step 2. Create a new Angular application.",id:"step-2-create-a-new-angular-application",level:3},{value:"Step 3. Install UI5 Web Components.",id:"step-3-install-ui5-web-components",level:3},{value:"Step 4. Allow Custom Elements in Angular.",id:"step-4-allow-custom-elements-in-angular",level:3},{value:"Step 5. Import UI5 Web Components.",id:"step-5-import-ui5-web-components",level:3},{value:"Step 6. Use UI5 Web Components.",id:"step-6-use-ui5-web-components",level:3},{value:"Step 7. Launch the application.",id:"step-7-launch-the-application",level:3},{value:"UI5 Web Components For Angular",id:"ui5-web-components-for-angular",level:2},{value:"Angular Form with <code>NgModel</code>",id:"angular-form-with-ngmodel",level:3},{value:"Step 1. Setup Angular project",id:"step-1-setup-angular-project",level:3},{value:"Step 2. Install UI5 Web Components for Angular.",id:"step-2-install-ui5-web-components-for-angular",level:3},{value:"Step 3. Build Angular form.",id:"step-3-build-angular-form",level:3},{value:"Step 4. Define a Data Model.",id:"step-4-define-a-data-model",level:3},{value:"Step 5. Create the Form UI.",id:"step-5-create-the-form-ui",level:3},{value:"Step 5. Launch the application.",id:"step-5-launch-the-application",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"get-started-with-ui5-web-components--angular",children:"Get Started with UI5 Web Components & Angular"}),"\n",(0,t.jsxs)(n.p,{children:["In this tutorial, you will learn how to use ",(0,t.jsx)(n.code,{children:"UI5 Web Components"})," in an Angular application. In the second part, we will introduce ",(0,t.jsx)(n.code,{children:"UI5 Web Components for Angular"})," - wrapper library for UI5 Web Components, improving their integration with Angular."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," To get the best development experience, we recommend using the ",(0,t.jsx)(n.a,{href:"https://ui5-webcomponents-ngx.netlify.app",children:"UI5 Web Components for Angular"}),". The library removes the need for ",(0,t.jsx)(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," and ",(0,t.jsx)(n.code,{children:"NO_ERRORS_SCHEMA"})," schemas, and supports all Angular-specific features out-of-the-box."]}),"\n",(0,t.jsx)(n.h2,{id:"ui5-web-components",children:"UI5 Web Components"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-install-angular-cli",children:"Step 1. Install Angular CLI."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -g @angular/cli\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-create-a-new-angular-application",children:"Step 2. Create a new Angular application."}),"\n",(0,t.jsx)(n.p,{children:"Use the standard path to setup a new Angular app."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ng new ui5-web-components-application\ncd ui5-web-components-application\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-install-ui5-web-components",children:"Step 3. Install UI5 Web Components."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @ui5/webcomponents\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-4-allow-custom-elements-in-angular",children:"Step 4. Allow Custom Elements in Angular."}),"\n",(0,t.jsxs)(n.p,{children:["Before using UI5 Web Components, you have to allow the use of custom elements via the ",(0,t.jsx)(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),". This allows an NgModule to contain Non-Angular elements named with dash."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Import ",(0,t.jsx)(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," in ",(0,t.jsx)(n.code,{children:"app.module.ts"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { ..., CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," to the schemas array:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"imports: [\n    ...\n],\nschemas: [\n    CUSTOM_ELEMENTS_SCHEMA\n]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-5-import-ui5-web-components",children:"Step 5. Import UI5 Web Components."}),"\n",(0,t.jsx)(n.p,{children:"Import the components you are going to use."}),"\n",(0,t.jsxs)(n.p,{children:["Let's import the Button in ",(0,t.jsx)(n.code,{children:"app.component.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { Component } from '@angular/core';\n\nimport '@ui5/webcomponents/dist/Button.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-6-use-ui5-web-components",children:"Step 6. Use UI5 Web Components."}),"\n",(0,t.jsx)(n.p,{children:"Use the imported components in your application by their tag names - as any other HTML element."}),"\n",(0,t.jsxs)(n.p,{children:["Let's add the button into the ",(0,t.jsx)(n.code,{children:"app.component.html"})," template:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<ui5-button>Hello world!</ui5-button>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-7-launch-the-application",children:"Step 7. Launch the application."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ng serve -o\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the development server starts, the UI5 Web Components Button will be rendered in the test page. Now that you've seen how easy it is to use the UI5 Web Components, you can continue with adding more components in the same manner."}),"\n",(0,t.jsx)(n.h2,{id:"ui5-web-components-for-angular",children:"UI5 Web Components For Angular"}),"\n",(0,t.jsx)(n.p,{children:"UI5 Web Components for Angular is a wrapper library for UI5 Web Components. This means that for every UI5 Web Component, there is a corresponding Angular wrapper component available."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"For Example:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The native Button web component"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import '@ui5/webcomponents/dist/Button.js';\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'The "ngx" Button wrapper component'}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { ButtonComponent } from '@ui5/webcomponents-ngx/main/button';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["These wrappers supports all Angular-specific features out-of-the-box, f.e. two-way data binding with ",(0,t.jsx)(n.code,{children:"NgModel"}),", as they are native to Angular."]}),"\n",(0,t.jsxs)(n.h3,{id:"angular-form-with-ngmodel",children:["Angular Form with ",(0,t.jsx)(n.code,{children:"NgModel"})]}),"\n",(0,t.jsxs)(n.p,{children:["The following section demonstrates how to build template-driven Angular form (following the oficial ",(0,t.jsx)(n.a,{href:"https://angular.io/guide/forms",children:"Angular documentation"}),") with UI5 Web Components For Angular. It illustrates the usage of two-way data binding to update the data model in the component as changes are made in the template and vice versa."]}),"\n",(0,t.jsx)(n.h3,{id:"step-1-setup-angular-project",children:"Step 1. Setup Angular project"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -g @angular/cli\nng new ui5-web-components-ngx-application\ncd ui5-web-components-ngx-application\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-install-ui5-web-components-for-angular",children:"Step 2. Install UI5 Web Components for Angular."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @ui5/webcomponents-ngx\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-build-angular-form",children:"Step 3. Build Angular form."}),"\n",(0,t.jsxs)(n.p,{children:["To build an Angular Form, we will include the required infrastructure such as the ",(0,t.jsx)(n.code,{children:"FormsModule"}),", track input validity and status using ",(0,t.jsx)(n.code,{children:"ngModel"})," and make use of some form components from ",(0,t.jsx)(n.code,{children:"@ui5/webcomponents-ngx"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Import ",(0,t.jsx)(n.code,{children:"FormsModule"})," in ",(0,t.jsx)(n.code,{children:"app.module.ts"})," and add it to the imports array."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { NgModule } from '@angular/core';\nimport { FormsModule } from '@angular/forms';\nimport { BrowserModule } from '@angular/platform-browser';\n\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    FormsModule,\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Import ",(0,t.jsx)(n.code,{children:"Label"}),", ",(0,t.jsx)(n.code,{children:"Input"})," and ",(0,t.jsx)(n.code,{children:"Button"})," components from ",(0,t.jsx)(n.code,{children:"@ui5/webcomponents-ngx"})," in ",(0,t.jsx)(n.code,{children:"app.module.ts"})," and add them to the imports array."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { NgModule } from '@angular/core';\nimport { FormsModule } from '@angular/forms';\nimport { BrowserModule } from '@angular/platform-browser';\n\nimport { AppComponent } from './app.component';\n\n// UI5 Web Components For Angular\nimport { LabelComponent } from '@ui5/webcomponents-ngx/main/label';\nimport { ButtonComponent } from '@ui5/webcomponents-ngx/main/button';\nimport { InputComponent } from '@ui5/webcomponents-ngx/main/input';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    FormsModule,\n    LabelComponent,\n    InputComponent,\n    ButtonComponent\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-4-define-a-data-model",children:"Step 4. Define a Data Model."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add the following object, that will serve as a data model, to the ",(0,t.jsx)(n.code,{children:"AppComponent"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// app.component.ts\nimport { Component } from \'@angular/core\';\n\nexport class AppComponent {\n  model = {\n    firstName: "",\n    lastName: ""\n  };\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-5-create-the-form-ui",children:"Step 5. Create the Form UI."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add the following inline template to the ",(0,t.jsx)(n.code,{children:"AppComponent"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Bind form components to data properties using the ",(0,t.jsx)(n.code,{children:"ngModel"})," directive and two-way data-binding syntax."]}),"\n",(0,t.jsxs)(n.li,{children:["Name form controls (e.g. add ",(0,t.jsx)(n.code,{children:"name"})," attribute) to make them accessible to ",(0,t.jsx)(n.code,{children:"ngModel"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// app.component.ts\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-root\',\n  template: `<h1>Form Works!</h1>\n\n  <form #heroForm="ngForm">\n    <div>\n      <ui5-label for="inp1">First Name:</ui5-label>\n      <ui5-input id="inp1" [(ngModel)]="model.firstName" name="firstName" [required]="true"></ui5-input>\n    </div>\n\n    <div>\n      <ui5-label for="inp2">Last Name:</ui5-label>\n      <input id="inp2" type="text" [(ngModel)]="model.lastName" name="lastName" required/>\n    </div>\n    \n    <ui5-button [submits]="true">Submit</ui5-button> \n\n    Form Value: {{heroForm.value | json}}\n    Form Status: {{heroForm.status}}\n  </form>`,\n})\nexport class AppComponent {\n  model = {\n    firstName: "",\n    lastName: ""\n  };\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-5-launch-the-application",children:"Step 5. Launch the application."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ng serve -o\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the development server starts, a simple form will be rendered in the test page."}),"\n",(0,t.jsx)(n.p,{children:"Initially, the model is empty and the form is invalid:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// Form Value: { "firstName": "", "lastName": "" }\n// Form Status: "Invalid"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Start typing in the input fields and you will notice how the form model and form status are updated."}),"\n",(0,t.jsx)(n.p,{children:"Good job, the Form works!"}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.p,{children:["Angular provides good support of web components and ",(0,t.jsx)(n.code,{children:"UI5 Web Components"})," are working perfectly in the majority of use-cases. However, for an enhanced development experience and better support for both template-driven and Reactive forms,  the ",(0,t.jsx)(n.code,{children:"UI5 Web Components for Angular"})," is the recommended choice."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1184:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>a});var t=o(4041);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);