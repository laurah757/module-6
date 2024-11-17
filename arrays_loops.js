// includes

// let names = ["Anna", "Ben", "Clara"];

// function containsElement(array, element) {
//   return array.includes(element);
// }

// function initArrays() {
//   console.log(containsElement(names, "Daniel"));
// }

// indexof

// let numbers = [10, 20, 30, 40];

// function containsElement(array, element) {
//   return array.indexOf(element);
// }

// function initArrays() {
//   console.log(containsElement(numbers, 50));

// }

// shift

// let numbers = [10, 20, 30, 40];

// function removeFirstElement(array) {
//   array.shift();
//   return array;
// }

// function initArrays() {
//   console.log(removeFirstElement(numbers))
// }

// let letters = ["a", "b", "c", "d"];

// function removeFirstElement(array) {
//   array.shift();
//   return array;
// }

// function initArrays() {
//   console.log(removeFirstElement(letters));
// }

// Aufgabenstellung 4: unshift
// Aufgabe:

// Implementiere eine Funktion namens addElementToStart(array, element), die das element am Anfang des array hinzufügt und das neue Array zurückgibt.
// Test:

// console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]

// console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']

// let numbers = [2, 3, 4];

// function addElementToStart(array, element) {
//   array.unshift(element);
//   return array;
// }

// function initArrays() {
//   console.log(addElementToStart(numbers, 1));
// }

// let letters = ["b", "c", "d"];

// function addElementToStart(array, element) {
//   array.unshift(element);
//   return array;
// }

// function initArrays() {
//   console.log(addElementToStart(letters, "a"));
// }

// Aufgabenstellung 5: slice
// Aufgabe:

// Implementiere eine Funktion namens getSubArray(array, start, end), die ein neues Array zurückgibt, das die Elemente von start bis end (nicht eingeschlossen) enthält.
// Test:

// console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]

// console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c']

// let numbers = [1, 2, 3, 4, 5];

// function getSubArray(array, start, end) {
//   return array.slice(start, end);
// }

// function initArrays() {
//   console.log(getSubArray(numbers, 1, 4));
// }

// let letters = ["a", "b", "c", "d", "e"];

// function getSubArray(array, start, end) {
//   return array.slice(start, end);
// }

// function initArrays() {
//   console.log(getSubArray(letters, 0, 3));

// }

// Aufgabenstellung 6: join
// Aufgabe:

// Implementiere eine Funktion namens joinArray(array, separator), die eine Zeichenkette zurückgibt, die aus den Elementen des array besteht, getrennt durch den separator.
// Test:

// console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"

// console.log(joinArray([1, 2, 3, 4], ' - ')); // "1 - 2 - 3 - 4"

// let fruits = ["apple", "banana", "cherry"]

// function joinArray(array, separator) {
//   return array.join(separator)
// }

// function initArrays() {
//   console.log(joinArray(fruits, ", "));
// }

/* let numbers = [1, 2, 3, 4];

function joinArray(array, separator) {
  return array.join(separator)
}

function initArrays() {
  console.log(joinArray(numbers, " - "));
  
} */

// For Loops

/* let fruits = ["Banana", "Orange", "Apple", "Mango"];

function initArrays() {
  let contentRef = document.getElementById("my_content");
  contentRef.innerHTML = "";
  for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
    contentRef.innerHTML += fruits[indexFruits] + ", "; 
  }
}
*/

// Aufgabenstellung 1: Summe der Elemente eines Arrays
// Aufgabe:

// Implementiere eine for-Schleife, um die Summe der Elemente in einem Array zu berechnen 
// und zurückzugeben.


// Test:
/*
function sumArray(arr) {
  
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    
  }
  
  return sum;
}

//  console.log(sumArray([3, 7, 1, 4])); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)

 console.log(sumArray([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)

*/ 

function printNumbers(5) {
  
  for (let index = 1; index <= 5; index++) {
    console.log(index);
    
    
  }
}

console.log(printNumbers([1, 2, 3, 4, 5]));
