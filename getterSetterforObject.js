/* Use getters and setters to control access to an Object */
class Book 
{
    constructor(author)
    {   //_author is private variable
        this._author = author;
    }

    //getter
    get writer()
    {
        return this._author;
    }
    //setter
    set writer(updatedAuthor)
    {
        this._author = updatedAuthor;
    }
}

function makeClass()
{
    class Thermostat
    {   //temp = farenheight
        constructor(temp)
        {   //celsius calculator
            this._temp = 5/9 * (temp - 32);
        }
        get temperature()
        {  // celsius
            return this._temp;
        }
        set temperature(updatedTemp)
        {   // celsius
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
//thermos.temperature maps to getter temperature();
let temp = thermos.temperature;
console.log("Before=" + temp);
thermos.temperature = 26;
//thermos.temperature maps to setter temperature(26);
temp = thermos.temperature;
console.log("After=" + temp);