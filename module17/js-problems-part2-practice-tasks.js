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

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

let shortName = heights2[0];

for (let i of heights2) {
  if (i.length < shortName.length) {
    shortName = i;
  }
}

console.log(shortName);
