/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
// for (let i = 1; i <= 200; i++) {
//   if (i == 100) {
//     break;
//   }
//   console.log(i);
// }

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let sum = 0;
// let i = 1;

// while (i <= 200) {
//   sum = sum + i;
//   if (sum == 100) {
//     break;
//   }
//   i++;
// }

// console.log(sum);

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// not solved

for (let i = 2; i <= 100; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    console.log(i);
  }
}

// for (let i = 2; i <= 100; i++) {
//   let num = i ** 0.5;
//   if (Number.isInteger(num)) {
//     console.log(i);
//   }
// }
