import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "equipment";
const pathData = "M51 508V326h57v26h69l32-28h22v-47h-22v-69h-31V36c0-21 45-38 96-38s96 17 96 38v172h-31v69h-22v47h22l32 28h68v-26h57v182h-57v-26h-68l-32 28H209l-32-28h-69v26H51zm208-343h30V73h-30v92zm54-92v92h29V73h-29zm-109 92h29V73h-29v92zm235 187v130h34V352h-34zm-364 0v130h33V352H75z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/equipment";
export { pathData, ltr, accData };