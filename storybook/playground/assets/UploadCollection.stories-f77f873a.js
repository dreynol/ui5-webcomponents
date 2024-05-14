import{x as r}from"./lit-element-c5a2b594.js";import{l as d}from"./if-defined-c29cffe1.js";import{o as v}from"./unsafe-html-0ddd83da.js";import{U as P,a as t,L as c}from"./ListItemType-88e6a78c.js";const k={selectionMode:{control:"select",options:["None","Single","SingleStart","SingleEnd","SingleAuto","Multiple"]},default:{control:{type:"text"},table:{type:{summary:"Array<UploadCollectionItem>"}}},header:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},"item-delete":{description:"Fired when the delete button of any item is pressed.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The `ui5-upload-collection-item` which was deleted."}]}},"selection-change":{description:"Fired when selection is changed by user interaction\nin `Single` and `Multiple` modes.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"Array"},name:"selectedItems",_ui5privacy:"public",description:"An array of the selected items."}]}}},ne={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.7",tagName:"ui5-upload-collection"};var b=Object.freeze,J=Object.defineProperty,s=(e,m)=>b(J(e,"raw",{value:b(m||e.slice())})),$,y,D,C,S;const V={title:"Fiori/Upload Collection",component:"UploadCollection",argTypes:k},n=(e,m,B,F,f,g,h,z,R,K,q)=>`<ui5-upload-collection-item file-name="${e}" upload-state="${B}" ${g?`type="${g}"`:""} ${h?`progress="${h}"`:""} ${m?"file-name-clickable":""} ${z?"disable-delete-button=":""} ${R?"hide-delete-button":""} ${K?"hide-retry-button":""} ${q?"hide-terminate-button":""}>
    ${F}
    ${f||""}
</ui5-upload-collection-item>`,u=e=>r`
<ui5-upload-collection
    id="${d(e.id)}"
    selection-mode="${d(e.selectionMode)}"
    no-data-description="${d(e.noDataDescription)}"
    no-data-text="${d(e.noDataText)}"
    ?hide-drag-overlay="${d(e.hideDragOverlay)}"
    accessible-name="${d(e.accessibleName)}"
>
    ${v(e.header)}
    ${v(e.default)}
</ui5-upload-collection>`,p=e=>r($||($=s(["",`

<script>
	var uploadCollection = document.querySelector("ui5-upload-collection");
	uploadCollection.addEventListener("ui5-item-delete", e => {
		uploadCollection.removeChild(e.detail.item);
	});
<\/script>`])),e()),A=e=>r`<style>
    .header {
        display: flex;
        align-items: center;
        overflow: hidden;
        flex-wrap: wrap;
    }

    .spacer {
        flex: 1 1 auto;
    }

    .header > * {
        margin: 0.25rem;
    }
</style>

${e()}`,j=e=>r(y||(y=s(["",`

<script>
	var uploadCollection = document.querySelector("ui5-upload-collection");
	var fileUploader = document.getElementById("fileUploader");
	var startUploading = document.getElementById("startUploading");

	fileUploader.addEventListener("change", e => {
		var files = e.detail.files;
		for (var i = 0; i < files.length; i++) {
			uploadCollection.appendChild(createUCI(files[i]));
		}
	});

	function createUCI(file) {
		var uci = document.createElement("ui5-upload-collection-item");
		var description = document.createTextNode("Last modified: " + file.lastModifiedDate + ", size: " + file.size);

		uci.appendChild(createThumbnail(file.name));
		uci.appendChild(description);
		uci.file = file;
		uci.fileName = file.name;
		return uci;
	}

	function createThumbnail(fileName) {
		var icon = document.createElement("ui5-icon");
		icon.name = "document";
		icon.slot = "thumbnail";
		return icon;
	}

	startUploading.addEventListener("click", e => {
		uploadCollection.items
			.filter(item => item.uploadState === "Ready" && item.file)
			.forEach(item => {
				item.uploadState = "Uploading";

				fetch("/upload", {
					method: "POST",
					body: item.file
				}).then(res => {
					item.uploadState = res.status === 200 ? "Complete" : "Error";
				});
			});
	});
<\/script>`])),e()),a=u.bind({});a.args={selectionMode:P.None,id:"uploadCollection",accessibleName:"Uploaded (2)",header:`<div slot="header" class="header">
    <ui5-title>Uploaded (2)</ui5-title>
    <ui5-label show-colon>Add new files and press to start uploading pending files</ui5-label>
    <ui5-button id="startUploading">Start</ui5-button>
    <div class="spacer"></div>
    <ui5-file-uploader id="fileUploader" hide-input multiple>
        <ui5-button icon="add" design="Transparent"></ui5-button>
    </ui5-file-uploader>
</div>`,default:`${n("LaptopHT-1000.jpg",!0,t.Complete,"Uploaded By: David Keane · Uploaded On: 2014-07-26 · File Size: 35 KB",'<img src="../assets/images/HT-1000.jpg" slot="thumbnail">')}
${n("Notes.txt",!1,t.Complete,"Uploaded By: John Smith · Uploaded On: 2014-09-02 · File Size: 226.6 KB",'<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>')}`};a.parameters={docs:{story:{iframeHeight:"500px"}}};a.decorators=[A,j,p];const G=e=>r(D||(D=s(["",`

<script>
	var uploadCollection = document.querySelector("ui5-upload-collection");
	uploadCollection.addEventListener("rename", e => {
		alert("Rename event: " + e.target.fileName);
	});
<\/script>`])),e()),l=u.bind({});l.args={header:`<div slot="header" class="header">
    <ui5-title>Attachments (2)</ui5-title>
</div>`,default:`${n("LaptopHT-1000.jpg",!0,t.Complete,"Uploaded By: David Keane · Uploaded On: 2014-07-26 · File Size: 35 KB",'<img src="../assets/images/HT-1000.jpg" slot="thumbnail">',c.Detail)}
${n("Notes.txt",!1,t.Complete,"Uploaded By: John Smith · Uploaded On: 2014-09-02 · File Size: 226.6 KB",'<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>',c.Detail)}`};l.decorators=[G,p];const Q=e=>r(C||(C=s(["",`

<script>
	var uploadCollection = document.querySelector("ui5-upload-collection");
	uploadCollection.addEventListener("retry", e => {
		alert("Retry uploading: " + e.target.fileName);
	});
	uploadCollection.addEventListener("terminate", e => {
		alert("Terminate uploading of: " + e.target.fileName);
	});
<\/script>`])),e()),i=u.bind({});i.args={header:`<div class="header" slot="header">
    <ui5-title>Upload States</ui5-title>
</div>`,default:`
${n("LaptopHT-1000.jpg",!1,t.Complete,'uploadState="Complete"','<img src="../assets/images/HT-1000.jpg" slot="thumbnail">')}
${n("Laptop.jpg",!1,t.Uploading,'uploadState="Uploading"','<img src="../assets/images/HT-1000.jpg" slot="thumbnail">',c.Active,"37")}
${n("latest-reports.pdf",!1,t.Error,'uploadState="Error"','<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>',c.Active,"59")}
${n("Notes.txt",!1,t.Ready,'uploadState="Ready" (default)','<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>')}`};i.parameters={docs:{story:{iframeHeight:"400px"}}};i.decorators=[Q,p];const W=e=>r(S||(S=s(["",`

<script>
	var uploadCollection = document.querySelector("ui5-upload-collection");
	uploadCollection.addEventListener("drop", e => {
		e.preventDefault();

		var files = e.dataTransfer.files;
		// Take the files from the drop event and create <ui5-upload-collection-item> from them
		for (var i = 0; i < files.length; i++) {
			uploadCollection.appendChild(createUCI(files[i]));
		}
	});

	function createUCI(file) {
		var uci = document.createElement("ui5-upload-collection-item");
		var description = document.createTextNode("Last modified: " + file.lastModifiedDate + ", size: " + file.size);

		uci.appendChild(createThumbnail(file.name));
		uci.appendChild(description);
		uci.file = file;
		uci.fileName = file.name;
		return uci;
	}

	function createThumbnail(fileName) {
		var icon = document.createElement("ui5-icon");
		icon.name = "document";
		icon.slot = "thumbnail";
		return icon;
	}
<\/script>`])),e()),o=u.bind({});o.args={header:`<div slot="header" class="header">
    <ui5-title>Attachments</ui5-title>
    <ui5-label show-colon>Add new files and press to start uploading pending files</ui5-label>
    <ui5-button id="startUploading">Start</ui5-button>
    <div class="spacer"></div>
    <ui5-file-uploader id="fileUploader" hide-input multiple>
        <ui5-button icon="add" design="Transparent"></ui5-button>
    </ui5-file-uploader>
</div>`};o.parameters={docs:{story:{iframeHeight:"500px"}}};o.decorators=[A,j,W,p];var T,U,x;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    selection-mode="\${ifDefined(args.selectionMode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(x=(U=a.parameters)==null?void 0:U.docs)==null?void 0:x.source}}};var L,E,M;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    selection-mode="\${ifDefined(args.selectionMode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var H,N,_;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    selection-mode="\${ifDefined(args.selectionMode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var O,I,w;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    selection-mode="\${ifDefined(args.selectionMode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const X=["Basic","RenamingFiles","VariousUploadStates","DragAndDrop"],ae=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,DragAndDrop:o,RenamingFiles:l,VariousUploadStates:i,__namedExportsOrder:X,default:V},Symbol.toStringTag,{value:"Module"}));export{ae as C,ne as c};
