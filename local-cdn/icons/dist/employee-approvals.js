import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/employee-approvals.js";
import { pathData as pathDatav5 } from "./v5/employee-approvals.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "employee-approvals";
export { pathData, ltr, accData };