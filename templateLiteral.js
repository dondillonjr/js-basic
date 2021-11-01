//Template literal with multi-line and string interpolation
// use backticks ` `

person = {
    name: "Don Dillon",
    age: 56
};
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

console.log(greeting);

/******************************************************** */
const result = {
    success: ["max-length", "no-amd", "perfer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr)
{
    const resultDisplayArray = [];
    for (let i =0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}

//makeList(result.failure)
//should return:
//  [`<li class="text-warning">no-var</li>`
//   `<li class="text-warning">var-no-top</li>`
//   `<li class="text-warning">linebreak</li>`]

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);