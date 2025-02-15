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
