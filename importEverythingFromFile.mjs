/* Use * to import everything from a file */
// create an object to store everything in
//             object_name               file
import * as capStrings from "./exportReuseCode.mjs";

const cap = capStrings.capitalizeString("president Dillon");
console.log(cap);
console.log("FOO=" + capStrings.foo );
console.log("BAR=" + capStrings.bar);