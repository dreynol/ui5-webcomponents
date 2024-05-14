import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "journey-depart";
const pathData = "M423 387q12 0 18.5 7.5T448 414q0 14-9 26t-22.5 21-29 14-29.5 5H90q-38 0-64-26T0 390V122q0-38 26-64t64-26h268q14 0 29.5 5t29 14T439 72.5t9 26.5q0 26-23 26-9 0-16.5-5t-9.5-13q-4-11-15.5-17.5T358 83H90q-17 0-28 11t-11 28v268q0 17 11 28t28 11h268q14 0 25.5-7.5T399 403q2-8 9-12t15-4zm82-149q7 9 7 18t-7 18l-77 77q-7 7-18 7t-18.5-7-7.5-18q0-10 8-18l39-40H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 224h264l-26-27q-8-8-8-18 0-11 7.5-18t18.5-7 18 7z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/journey-depart";
export { pathData, ltr, accData };