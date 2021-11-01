/* Write Concise Object Literals Declarateion Using Simple Fields */
// fuction takes in 3 variables and returns an object with
//key value pairs (name, value)
/*
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log( createPerson("Zodiac Hasbro", 59 , "male") );
*/

//Replace with simplier code below -gets same output
const createPerson = (name, age, gender ) => ({name, age, gender});
console.log( createPerson("Zodiac Hasbro", 59 , "male") );