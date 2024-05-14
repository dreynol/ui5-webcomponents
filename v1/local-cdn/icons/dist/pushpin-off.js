import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/pushpin-off.js";
import { pathData as pathDatav5 } from "./v5/pushpin-off.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "pushpin-off";
export { pathData, ltr, accData };