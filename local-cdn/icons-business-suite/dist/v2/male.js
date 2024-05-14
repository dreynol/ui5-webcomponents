import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "male";
const pathData = "M481.5 45v104c0 14-11 26-25 26s-26-12-26-26v-41l-122 121c21 27 33 61 33 96 0 86-70 155-156 155s-155-69-155-155c0-42 17-81 46-110 53-53 134-60 194-21l123-123h-41c-14 0-26-12-26-26s12-26 26-26h104c14 0 25 12 25 26zm-399 280c0 28 10 53 30 73 40 40 107 40 147 0 20-20 30-45 30-73 0-57-47-104-104-104s-103 47-103 104z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/male";
export { pathData, ltr, accData };