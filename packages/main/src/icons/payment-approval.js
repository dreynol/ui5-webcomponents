import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "payment-approval";
const pathData = "M512 33L380 192l-83-84 32-31 50 50L480 0zM384 257v224q0 13-9 22.5t-23 9.5H32q-14 0-23-9.5T0 481V33Q0 19 9 9.5T32 0h256v33H32v448h320V257h32zM180 427v-32q-26-1-47-20t-25-57l41-5q3 14 12 25t19 14v-72q-32-12-51.5-33T109 202q0-12 5-24.5t14.5-23.5 22.5-18.5 29-9.5v-20h25v20q58 6 70 63l-36 6q-2-12-11-20t-23-10v76q42 9 59 31.5t17 42.5q0 32-20.5 54T205 394v33h-25zm25-70q14-4 23.5-14.5T238 320q0-26-33-35v72zm-50-160q0 21 25 31v-64q-11 5-18 14t-7 19z";


registerIcon(name, { pathData });
