import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sub-process-marker";
const pathData = "M53 458h406V53H53v405zm432 53H27q-11 0-19-7.5T0 485V26Q0 15 8 7.5T27 0h458q11 0 19 7.5t8 18.5v459q0 11-8 18.5t-19 7.5zM256 364q-11 0-19-8t-8-19v-53h-53q-11 0-18.5-7.5T150 258t7.5-18.5T176 232h53v-53q0-11 8-19t19-8 18.5 8 7.5 19v53h54q11 0 18.5 7.5T362 258t-7.5 18.5T336 284h-54v53q0 11-7.5 19t-18.5 8z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/sub-process-marker";
export { pathData, ltr, accData };