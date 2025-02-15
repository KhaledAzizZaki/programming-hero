// Task -1:
// Find the lowest number in the array below.

/*
const heights2 = [167, 190, 120, 165, 137];
let lowest = heights2[0];

for (let i of heights2) {
  if (i < lowest) {
    lowest = i;
  }
}

console.log(lowest);
*/

// Task -2:
// Find the friend with the smallest name.

/*
const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

let shortName = heights2[0];

for (let i of heights2) {
  if (i.length < shortName.length) {
    shortName = i;
  }
}

console.log(shortName);
*/

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

/*
function totalMoney(a, b, c) {
  let laptop = 35000;
  let tablet = 15000;
  let mobile = 20000;

  let totalLaptopPrice = laptop * a;
  let totalTabletPrice = tablet * b;
  let totalMobilePrice = mobile * c;

  let totalPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
  console.log(totalPrice);
}

totalMoney(1, 1, 1);
totalMoney(2, 4, 5);
totalMoney(6, 1, 2);
*/

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function average(a) {
  let total = 0;
  for (let i of a) {
    total = total + i.price;
  }
  let avg = total / a.length;
  console.log(Math.round(avg));
}

average(phones);
