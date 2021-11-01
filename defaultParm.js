// function using default parameters

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
}) ();

console.log(increment(5, 2));
console.log( increment(5));


const sum = ( function()  {
    return function sum( ...args)
    {
        return args.reduce( (a,b) => a + b , 0);
    }
}) ();

console.log(sum(1,2,3 ));
console.log(sum(1,2,3,4));


const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = 'potato'
}) ();
console.log(arr2);

const array1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let array2;
(function() {
    array2 = [...array1];
    array1[0] = 'potato'
}) ();
console.log(array2);