// Conditional Operator
// codition ? statement-if-true:   statement-if=false;

function checkEqual(a, b)
{
    //return a===b ? true : false 

    return a == b;
}

console.log( checkEqual(1, 2) );

function checkSign(num)
{          //             true:false           True  : false
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log( checkSign(10) );
