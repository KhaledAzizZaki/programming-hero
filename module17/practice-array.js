//  Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

const fruits = ["apple", "mango", "ban", "a", "b"];

console.log(fruits[3]);

fruits[2] = "jambura";
console.log(fruits);

// Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const tourist = ["a", "b", "c"];

tourist.push("d");
console.log(tourist);

tourist.push("e", "f");
console.log(tourist);

tourist.pop();
console.log(tourist);

// Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

const book = ["a", "b", "c", "d"];

if (book.includes("e")) {
  console.log("Have");
} else {
  console.log("Don't have");
}

// Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

const letter = ["a", "b", "c"];

const letter1 = [];

const letter2 = "abc";

console.log(Array.isArray(letter));
console.log(Array.isArray(letter1));
console.log(Array.isArray(letter2));

// Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

console.log(num1);
console.log(num2);

let num = num1.concat(num2);
console.log(num);
