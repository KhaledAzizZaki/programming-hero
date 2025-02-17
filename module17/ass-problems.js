/*
 ******Tex Calculate*********
 */

// function calculateTex(a, b) {
//   if (
//     typeof a !== "number" ||
//     typeof b !== "number" ||
//     a < 0 ||
//     b < 0 ||
//     a < b
//   ) {
//     return "invalid input";
//   }
//   let profit = a - b;
//   let tex = (profit * 20) / 100;
//   return tex;
// }

// let result = calculateTex(5000, 1500);
// console.log(result);

/*
 **********Send Notification***********
 */

// function sendNotification(a) {
//   if (typeof a !== "string" || a == false || !a.includes("@")) {
//     return "Invalid Input";
//   }
//   let str = a.split("@");
//   let notification = `${str[0]} send You an email from ${str[1]}`;
//   return notification;
// }

// let result1 = sendNotification("khaledazizzaki@gmail.com");
// console.log(result1);

/*
 *************Check Digits In Name*************
 */
function checkDigitsInName(str) {
  if (typeof str !== "string" || str == false /* || str.includes(" ") */) {
    return "Invalid Input";
  }
  let name = false;
  for (let i of str) {
    if (i == " ") {
      name = false;
      break;
    } else if (!isNaN(i)) {
      name = true;
    }
  }
  return name;
}

let result2 = checkDigitsInName("Khaled456");
console.log(result2);
