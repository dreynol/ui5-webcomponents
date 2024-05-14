import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/mri-scan.js";
import { pathData as pathDatav5 } from "./v5/mri-scan.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "mri-scan";
export { pathData, ltr, accData };