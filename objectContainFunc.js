/* Object contain a function */
const bicycle = {
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

/** could be re-written as below */
const tricycle = {
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

tricycle.setGear(5);
console.log("TricycleGears= " + tricycle.gear);
