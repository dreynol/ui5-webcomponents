import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "add-outside";
const pathData = "M506.5 240v2c0 3 0 4-2 7v1c-1 3-4 4-5 7v1l-72 71c-4 4-9 7-16 7s-13-3-17-7c-10-9-10-24 0-33l30-31h-38c-66 0-119 53-119 119v72c0 13-11 24-24 24-14 0-24-11-24-24v-72c0-92 74-167 167-167h38l-30-31c-10-9-10-24 0-33 9-9 24-9 33 0l72 71c3 2 3 5 4 8 0 1 1 0 1 1 2 1 2 4 2 7zm-166-71c0 13-11 24-24 24h-120v120c0 13-11 24-24 24s-24-11-24-24V193h-119c-13 0-24-11-24-24s11-24 24-24h119V26c0-13 11-24 24-24s24 11 24 24v119h120c13 0 24 11 24 24z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/add-outside";
export { pathData, ltr, accData };