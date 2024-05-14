import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "attachment-audio";
const pathData = "M67 201v260h83q11 0 18.5 7t7.5 18-7.5 18.5T150 512H42q-11 0-18.5-7.5T16 486V192q0-10 6-17L165 9q6-9 19-9h190q11 0 18.5 7.5T400 26v108q0 11-7.5 18.5T374 160t-18-7.5-7-18.5V51H196l-20 24v66q0 21-15 36t-36 15H75zm403 55q11 0 18.5 7.5T496 282t-7.5 18-18.5 7h-64q-6 0-6 7v137q0 4-1 5-3 24-20.5 40T336 512q-27 0-45.5-19T272 448t18.5-45 45.5-19h6.5l6.5 1v-71q0-24 17-41t40-17h64z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/attachment-audio";
export { pathData, ltr, accData };