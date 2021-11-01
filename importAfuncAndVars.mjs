/*** import a function and two varables */

import { capitalizeString } from "./exportReuseCode.mjs";
const cap = capitalizeString("american President");
import { foo, bar } from "./exportReuseCode.mjs";
console.log(cap);
console.log("FOO=" + foo );
console.log("BAR=" + bar);