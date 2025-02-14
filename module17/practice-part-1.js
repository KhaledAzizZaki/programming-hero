// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

/*
function convert(a) {
  fahrenheit = (a - 32) * (5 / 9);
  console.log(fahrenheit);
}

convert(105);
convert(83);
convert(100);
convert(78);
*/

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

/*
function count(a, b) {
  let sum = 0;
  for (let i of a) {
    if (i == b) {
      sum++;
    }
  }
  console.log(sum);
}

let numbers = [5, 6, 11, 12, 98, 5, 11, 5];
count(numbers, 5);
count(numbers, 25);
count(numbers, 11);
*/

// Task-3:
// Write a function to count the number of vowels in a string.

/*
function vowels(a) {
  let sum = 0;
  for (let i of a) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      sum++;
    }
  }
  console.log(sum);
}

vowels("I am learning Programming to become a programmer");
vowels("I am learning Programming to become a");
vowels("I am learning Programming to become");
*/

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

/*
function word(a) {
  let newWord = a.split(" ");
  let bigWord = "";
  let wordLength = 0;
  for (let i of newWord) {
    if (i.length > bigWord.length) {
      bigWord = i;
      wordLength = bigWord.length;
    }
  }
  console.log(bigWord);
  console.log(wordLength);
}

let str = "I am learning Programming to become a programmer";

word(str);
*/

// Task-5:
// Generate a random number between 10 to 20.

num = Math.round(Math.random() * 10 + 10);
console.log(num);
