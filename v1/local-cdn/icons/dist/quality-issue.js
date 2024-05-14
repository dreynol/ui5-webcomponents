import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/quality-issue.js";
import { pathData as pathDatav5 } from "./v5/quality-issue.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "quality-issue";
export { pathData, ltr, accData };