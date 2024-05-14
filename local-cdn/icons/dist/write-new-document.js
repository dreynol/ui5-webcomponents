import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/write-new-document.js";
import { pathData as pathDatav5 } from "./v5/write-new-document.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "write-new-document";
export { pathData, ltr, accData };