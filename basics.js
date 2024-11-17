// variables

// let = veränderlich und neu definierbar, wird von oben nach unten 
// gelesem (wie jeglicher Code)
let myVariable = 27;
myVariable = 29; 
myVariable = 32;

console.log(myVariable) 

// const

const myAge = 28;

console.log(myAge)



// data types 
let myString = 'this is a text'; // strings are text '' + ""
let myNumber = 32;        // numbers, duh
let myFloat = 32.0;       // number with comma
let myInt = 32;           // Integer (ganze Zahl)

let myBoolean = true;     // true or false

let myArray = [2,5,'asda']// a list

let myObject = {age: 32, height: 177 } // list with key/value pairs

// Booleans

let myCondition = (4 >= 4) && (8 < 15) && (3 == 3);

// console.log (myCondition) 

if (4 >= 4 && 8 < 15 && 3 == 3) {
  console.log("a");
} else {
  console.log("b");
}