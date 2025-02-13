// Task-1
// Take four parameters. Multiply the four numbers and then return the result

/*
function add(a, b, c, d) {
  sum = a + b + c + d;
  console.log(sum);
}

add(3, 5, 2, 5);
add("Hello ", "khaled ", "aziz ", "zaki");
add(29, 17, 48, 74);
*/

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

/*
function number(a) {
  if (a % 2 != 0) {
    let num1 = a * 2;
    return num1;
  } else if (a % 2 == 0) {
    let num2 = a / 2;
    return num2;
  }
}

let number1 = number(1361);
console.log(number1);
let number2 = number(1360);
console.log(number2);
let number3 = number(1932);
console.log(number3);
*/

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

/*
function make_avg(num) {
  let sum = 0;
  let result = 0;
  for (let i of num) {
    sum = sum + i;
    result = sum / num.length;
  }
  return result;
}

let avg = make_avg([23, 25, 36, 57]);
console.log(avg);
let avg1 = make_avg([39, 27, 95, 93, 73, 93, 763]);
console.log(avg1);
let avg2 = make_avg([72, 64, 565, 92, 71, 894]);
console.log(avg2);
*/

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

/*
function count_zero(a) {
  let sum = 0;
  for (let i of a) {
    if (i == 0) {
      sum++;
    }
  }
  console.log(sum);
}

count_zero("0101010101001011101001");
count_zero("011111");
count_zero("1110011110101010100011");
*/

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(a) {
  let result = "";
  if (a % 2 == 0) {
    result = "Even";
  } else {
    result = "Odd";
  }
  return result;
}

let str = odd_even(24);
console.log(str);
let str1 = odd_even(23);
console.log(str1);
let str2 = odd_even(282376348349);
console.log(str2);
