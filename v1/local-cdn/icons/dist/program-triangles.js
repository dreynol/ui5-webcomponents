import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/program-triangles.js";
import { pathData as pathDatav5 } from "./v5/program-triangles.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "program-triangles";
export { pathData, ltr, accData };