/* Understand the difference between import and require */
//works with file string_function.js

import { capitalizeString } from "./stringFunc.mjs";
const cap = capitalizeString("hello!");
console.log(cap);