import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "port";
const pathData = "M53 458h406V53H53v405zm432 53H27q-11 0-19-7.5T0 485V26Q0 15 8 7.5T27 0h458q11 0 19 7.5t8 18.5v459q0 11-8 18.5t-19 7.5zM303 381q-11 0-18-8-8-8-8-18.5t8-18.5l87-87-87-88q-8-8-8-18.5t8-18.5q10-8 19-8 10 0 18 8l107 106q8 7 8 18.5t-8 18.5L322 373q-8 8-19 8zm-92 0q-11 0-19-8L87 267q-8-8-8-18.5t8-18.5l105-106q10-8 19-8 11 0 19 8t8 18.5-8 18.5l-87 88 87 87q8 8 8 18.5t-8 18.5-19 8z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/port";
export { pathData, ltr, accData };