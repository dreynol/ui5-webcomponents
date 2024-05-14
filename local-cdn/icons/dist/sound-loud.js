import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/sound-loud.js";
import { pathData as pathDatav5 } from "./v5/sound-loud.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "sound-loud";
export { pathData, ltr, accData };