// function cashOut(price) {
//   if (typeof price != "number" || price < 0) {
//     return "Invalid";
//   }
//   let charge = (price * 1.75) / 100;
//   return charge;
// }

// let result = cashOut(999);
// console.log(result);

var twoSum = function (nums, target) {
  let b = [];
  let a = [];
  for (let i of nums) {
    for (let x of a) {
      if (i + x == target) {
        b.push(nums.indexOf(x));
        b.push(nums.lastIndexOf(i));
        return b;
      }
    }
    a.push(i);
  }
};

let num = [2, 7, 11, 15];
let target = 9;
twoSum(num, target);
