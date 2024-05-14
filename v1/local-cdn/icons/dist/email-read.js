import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/email-read.js";
import { pathData as pathDatav5 } from "./v5/email-read.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "email-read";
export { pathData, ltr, accData };