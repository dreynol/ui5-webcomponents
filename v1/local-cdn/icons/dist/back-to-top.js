import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/back-to-top.js";
import { pathData as pathDatav5 } from "./v5/back-to-top.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "back-to-top";
export { pathData, ltr, accData };