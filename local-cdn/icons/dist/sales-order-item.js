import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/sales-order-item.js";
import { pathData as pathDatav5 } from "./v5/sales-order-item.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "sales-order-item";
export { pathData, ltr, accData };