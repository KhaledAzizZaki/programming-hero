// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

/**
const colors = ["red", "blue", "green", "yellow", "orange"];

let revColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  let color = colors[i];
  revColors.push(color);
}

console.log(revColors);
**/

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 78, 46]

/**
const numbers = [12, 98, 5, 41, 23, 78, 46];

let numbers2 = [];

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (num % 2 == 0) {
    numbers2.push(num);
  }
}

console.log(numbers2);
**/

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

/**
var numbers = ["Tom", "Tim", "Tin", "Tik"];

let string = "";

for (let i = 0; i < numbers.length; i++) {
  let str = numbers[i];
  string += str;
}

console.log(string);
**/

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = "I am a hard working person";

let string = statement.split(" ");

let str = "";

for (let i = string.length - 1; i >= 0; i--) {
  let string1 = string[i];
  str = str + " " + string1;
}

console.log(str);
