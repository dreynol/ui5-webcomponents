import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "intranet";
const pathData = "M0 220c0-5 2-8 5-11L244 5c3-3 7-5 12-5 4 0 8 2 11 5l241 205c3 2 4 5 4 9 0 9-7 17-16 17-3 0-7-2-12-5L256 40 28 231c-5 3-9 4-12 4-9 0-16-8-16-15zm64 260V243L256 96l192 147v237c0 19-13 32-32 32H94c-17 0-29-15-30-32zm32-224v224h320V256L256 136zm159-54c69 0 129 57 129 129 0 71-60 127-129 127s-127-58-127-127 56-129 127-129zm-103 90h45c7-27 14-47 31-70-35 11-63 35-76 70zm132-70c17 19 27 45 31 70h45c-13-35-41-59-76-70zm-70 70h84c-8-25-16-56-43-68-27 13-34 41-41 68zm-2 58h88c1-7 1-14 1-21s0-13-1-20h-88c-3 11-3 32 0 41zm152-41h-47c1 7 2 14 2 21s-1 13-2 20h47c2-6 3-13 3-20s-1-14-3-21zm-216 41h47c-3-9-3-30 0-41h-47c-2 7-3 14-3 21s1 14 3 20zm150 18h-84c7 27 16 55 41 68 13-7 24-15 31-34 4-8 8-21 12-34zm-14 69c35-9 64-34 76-69h-45c-4 27-14 50-31 69zm-56 0c-19-21-24-42-31-69h-45c13 35 41 60 76 69z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/intranet";
export { pathData, ltr, accData };