/*****practice task1******/

let moneyIHave = 1000;

let orange = 400;
let apple = 300;

let totalPrice = orange + apple;

let shopkeeperReturn = moneyIHave - totalPrice;

console.log("Shopkeeper Return", shopkeeperReturn, "taka");

/*****practice task2******/

let mathematics = 67.56;
let biology = 35;
let chemistry = 50;
let physics = 70;
let bangla = 45;

let totalMarks = mathematics + biology + chemistry + physics + bangla;

let averageNumber = totalMarks / 5;
console.log("Average Number", averageNumber.toFixed(2));

/*****practice task3******/

let num1 = 119;
let num2 = 5;

let remainder = num1 % num2;
console.log("Remainder :", remainder);

/*****practice task4******/
const a = isNaN("11");
console.log(a);

const b = isNaN(2 - 11);
console.log(b);
