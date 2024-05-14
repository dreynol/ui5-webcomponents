import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "subject";
const pathData = "M455 114H57v312q0 12 8.5 20.5T85 455h342q12 0 20-8.5t8-20.5V114zM121 72q0 6 6 6h31q6 0 6-6V41q0-6-6-6h-31q-6 0-6 6v31zm114 0q0 6 6 6h30q7 0 7-6V41q0-6-7-6h-30q-6 0-6 6v31zm113 0q0 6 6 6h31q6 0 6-6V41q0-6-6-6h-31q-6 0-6 6v31zm79-72q35 0 60 25t25 60v341q0 36-25 60.5T427 511H85q-35 0-60-24.5T0 426V85q0-35 25-60T85 0h342z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/subject";
export { pathData, ltr, accData };