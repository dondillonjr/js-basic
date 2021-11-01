/* Loops in Java Script */

var myArray=[];
var i=0;
while ( i < 5)
{
    myArray.push(i);
    i++;
}
console.log(myArray);

var thisArray = [3 ,4 ,2, 5, 1];
var total=0;
for (var j =0 ; j < thisArray.length ; j++)
{
    total =+ j;
}
console.log("Total:= " + total);


function randomFraction()
{
    return Math.random();
}

console.log(randomFraction());

var randomNumBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumBetween0and19);

function randomWholeNum()
{
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}
console.log(randomRange(1, 9));