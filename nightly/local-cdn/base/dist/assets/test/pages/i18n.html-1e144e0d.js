import"../../Icons-8ade2d69.js";import"../../bundle.esm-2debe69a.js";const s=async()=>{["de","es","fr","en"].forEach(e=>window["sap-ui-webcomponents-bundle"].registerI18nLoader("myApp",e,()=>`./assets/messagebundle_${e}.properties`));const n=(await window["sap-ui-webcomponents-bundle"].getI18nBundle("myApp")).getText("PLEASE_WAIT");console.log("Please wait in the current language is: ",n)};s();
