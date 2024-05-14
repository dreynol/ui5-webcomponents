import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "satellite";
const pathData = "M385.5 91l-194 193 36 37 194-194zm-158 281q-22 0-36-15l-36-36q-15-15-15-37 0-20 15-35l194-195q14-14 36-14 10 0 19.5 3t16.5 11l36 37q15 13 15 36 0 19-15 36l-194 194q-13 15-36 15zm214 132l-145-144 71-71 145 144zm-289-289L7.5 71l71-71 145 144zm3 217q-7 0-13-3-18-11-33-26.5t-27-32.5q-5-9-2.5-19.5T91.5 335q3-2 7-3t7-1q15 0 21 12 16 24 43 42 9 6 11 16.5t-3 19.5q-6 11-22 11zm-31 77q-6 0-12-3-34-19-61.5-46T5.5 400q-5-10-1.5-20t12.5-15q6-3 12-3 15 0 23 13 29 56 85 85 10 5 13 15.5t-2 19.5q-8 14-23 14z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/satellite";
export { pathData, ltr, accData };