import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "asterisk";
const pathData = "M298.74 241l147 107c11 8 14 22 6 33-6 7-11 9-19 9-5 0-11-1-15-4l-136-98v168c0 13-11 24-24 24-14 0-24-11-24-24V288l-137 98c-4 3-8 6-13 6-8 0-16-3-20-10-8-10-5-25 5-33l149-108-149-107c-10-8-13-23-5-34 8-10 23-13 33-5l137 99V26c0-14 10-25 24-25 13 0 24 11 24 25v168l136-99c11-8 26-7 34 4s5 25-6 33z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/asterisk";
export { pathData, ltr, accData };