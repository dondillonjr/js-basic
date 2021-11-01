/** Use class syntax to define a constructor function */
/****************** Constructor function */
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
// create object using new keyWord
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);
/***************************************************** */
/*** NEW WAY using Class syntax with constructor ******/
class MartaTrain {
    constructor(targetCity) {
    this.targetCity = targetCity;
    }
}
// create object using new keyWord
var zeus = new MartaTrain('Atlanta');

console.log(zeus.targetCity);
/**********************************************************/
function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);