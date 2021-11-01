function first()
{
    console.log('Hello Donnie Dillon');
    console.log(address);
    console.log(isApproved);
    console.log(interestRate);
}

function second()
{
    console.log(person);
    //Dot Notation
    person.name = "Dillon";
    console.log(person.name);
}

function third()
{
    // Bracket Notation
    //index is field attribute
    person['age'] = 10;
    console.log(person.age);

    let select = 'name';
    person[select] = 'Jr';
    console.log(person.name);

    let colors = ['red','brown'];
    console.log(colors[0]);
    colors[2] = 'green';
    console.log(colors);
    colors[2] = 3;
    console.log(colors);
}

function four(name)
{
    let selectedColors = ['red', 'blue'];
    selectedColors[2] = 1;
    console.log(selectedColors.length + " is my length " + name);
    console.log(selectedColors);
}

function square(number)
{
        return number * number;
}

//This is my first JavaScript code!
var mynumber = 6;
let address = '340 Millhaven';   //String literal
let isApproved = false;          //boolean literal
let number = 5;                  // Number literal
const interestRate = 4.5;  // constant
let firstName = undefined;
let selectedColor = null;

//create Person Record/object
let person = {
    name: 'Don',
    age:30
};

first();
second();
third();
four(person.name);
console.log( square( 5 )) ;
console.log(mynumber);