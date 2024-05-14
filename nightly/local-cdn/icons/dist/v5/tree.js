import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "tree";
const pathData = "M486 352q11 0 18.5 7.5T512 378v76q0 11-7.5 18.5T486 480h-76q-11 0-18.5-7.5T384 454v-76q0-11 7.5-18.5T410 352h19v-38q0-7-7-7H282v45h12q11 0 18.5 7.5T320 378v76q0 11-7.5 18.5T294 480h-76q-11 0-18.5-7.5T192 454v-76q0-11 7.5-18.5T218 352h12v-45H90q-7 0-7 7v38h19q11 0 18.5 7.5T128 378v76q0 11-7.5 18.5T102 480H26q-11 0-18.5-7.5T0 454v-76q0-11 7.5-18.5T26 352h6v-38q0-24 17-41t41-17h140v-64h-76q-11 0-18.5-7.5T128 166V58q0-11 7.5-18.5T154 32h204q11 0 18.5 7.5T384 58v108q0 11-7.5 18.5T358 192h-76v64h140q24 0 41 17t17 41v38h6zM179 141h154V83H179v58zM77 403H51v26h26v-26zm192 0h-26v26h26v-26zm192 0h-26v26h26v-26z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/tree";
export { pathData, ltr, accData };