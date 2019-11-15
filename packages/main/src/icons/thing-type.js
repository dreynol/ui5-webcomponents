import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "thing-type";
const pathData = "M448 192q26 0 45 19t19 45v96q0 27-19 45.5T448 416l-48 1-78 91q-5 4-13 4t-14.5-5.5T288 492v-76q-26 0-45-18.5T224 352v-96q0-26 19-45t45-19h160zM256 352q0 14 9.5 23t22.5 9h32v80l64-79 64-1q14 0 23-9t9-23v-96q0-13-9-22.5t-23-9.5H288q-13 0-22.5 9.5T256 256v96zm-96-159l57-1q-13 14-19 33h-22l-78 91q-5 4-13 4t-14.5-5.5T64 300v-76q-26 0-45-18.5T0 160V64q0-26 19-45T64 0h160q26 0 45 19t19 45v96q-9 0-17.5 2t-16.5 5q2-4 2-7V64q0-13-9.5-22.5T224 32H64q-14 0-23 9.5T32 64v96q0 14 9 23t23 9h32v80z";


registerIcon(name, { pathData });
