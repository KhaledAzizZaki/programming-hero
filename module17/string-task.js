// let str = "my name is Khaled Aziz Zaki";
// let sum = 0;
// let num = 1;

// for (let i of str) {
//   if (i == "a") {
//     sum = sum + num;
//   }
// }

// console.log(sum);

// for (let i of str) {
//   if (i == "a" || i == "A") {
//     sum = sum + num;
//   }
// }

// console.log(sum);
// let a = false;
// let e = false;
// let I = false;
// let o = false;
// let u = false;

// for (let i of str) {
//   if (i == "a") {
//     var a = true;
//   } else if (i == "e") {
//     var e = true;
//   } else if (i == "i") {
//     var I = true;
//   } else if (i == "o") {
//     var o = true;
//   } else if (i == "u") {
//     var u = true;
//   }
// }

// if (a == true) {
//   console.log("a");
// }
// if (e == true) {
//   console.log("e");
// }
// if (I == true) {
//   console.log("i");
// }
// if (o == true) {
//   console.log("o");
// }
// if (u == true) {
//   console.log("u");
// }

// for (let i of str) {
//   if (str.includes("a")) {
//     console.log("a");
//   }
// }

let str = "my name is Khaled Aziz Zaki";
let sum = 0;
let num = 1;

// let string = str.split(" ");
// let newString = "";
// for (let i of string) {
//   newString = newString + " " + i[0].toUpperCase() + i.slice(1);
// }
// console.log(newString);

let string = str.split(" ");
let newString = "";
for (let i of string) {
  newString = newString + " " + i[0].toUpperCase() + i.slice(1);
}
console.log(newString);
