/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burger = 600;

if (burger > 500) {
  console.log("Free coke");
} else {
  console.log("Coke: 30tk");
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 64;
let height = 1.6;

let bmi = weight / height ** 2;
console.log("BMI:", bmi.toFixed(2));

if (bmi < 18.5) {
  console.log("You are under weight.");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("You are normal.");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are over weight.");
} else {
  console.log("You are obese");
}
