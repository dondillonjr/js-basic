var voxel = {x: 3.6, y: 7.4, z: 6.54 };

/* old way
var x = voxel.x; // x= 3.6
var y = voxel.y; // y=7.4
var z = voxel.z; // z=6.54
*/

//destructuring syntax below:
//a = 3.6,  b= 7.4,  c=6.54
const { x: a,  y: b,  z: c } = voxel; 

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) 
{
    "use strict";
    //const tempOfTomorrow = undefined;

    //get tomorrow field from AVG_TEMPERATURES const passed in parm
    //assign its value to "tempOfTomorrow variable"
    const { tomorrow: tempOfTomorrow} = avgTemperatures;

    return tempOfTomorrow;
}

console.log( "TEMP: =" + getTempOfTmrw(AVG_TEMPERATURES));

/******************************************************************* */

const LOCAL_FORECAST = {
    today: {min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTomow(forecast) 
{
    "use strict";
    const { tomorrow : { max: maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}

console.log( "MaxTemp= " + getMaxOfTomow(LOCAL_FORECAST));
 /**************************************************************************
  * 
  */
//destructuring from array
const [z, x, ,y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);   // should see 1, 2, 4


let aa = 8, bb = 6;
console.log("ORI_aa=" + aa + " ORI+bb=" + bb);
(() => {
     "use strict";
     [aa, bb] = [bb, aa]
})();
console.log("AA now = " + aa);
console.log("BB now = " + bb);

/****************************************************************** */
const source = [ 1,2,3,4,5,6,7,8,9,10];  
function removefirstThreeElements(list)
{
    const [,,,... arr] = list;
    return arr;
}

const arr = removefirstThreeElements(source);
console.log("ARRAY-BEFORE: " + source); 
console.log("SKIP 3-Elements: " + arr);