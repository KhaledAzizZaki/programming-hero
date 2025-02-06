/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 5;
let num2 = 3;

let result = 0;

num1 > num2 ? console.log(num1 ** 2) : console.log(num1 + num2);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 61;
let student = false;
let ticket = 800;

if (age <= 10) {
  console.log("Free");
} else if (student) {
  let discount = (ticket * 50) / 100;
  let discountPrice = ticket - discount;
  console.log("For students:", discountPrice);
} else if (age >= 60) {
  let discount = (ticket * 15) / 100;
  let discountPrice = ticket - discount;
  console.log("For senior citizens:", discountPrice);
} else {
  console.log("Regular ticket:", ticket);
}
