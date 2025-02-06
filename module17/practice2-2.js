/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let result = 80;

if (result <= 100 && result >= 90) {
  console.log("Grading: A");
} else if (result <= 89 && result >= 80) {
  console.log("Grading: B");
} else if (result <= 79 && result >= 70) {
  console.log("Grading: C");
} else if (result <= 69 && result >= 60) {
  console.log("Grading: D");
} else if (result <= 59 && result >= 0) {
  console.log("Grading: F");
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let score = 81;
let friendScore = 30;

if (score >= 80) {
  if (friendScore >= 80) {
    console.log("Go for a lunch.");
  } else if (friendScore <= 79 && friendScore >= 60) {
    console.log("Good luck next time.");
  } else if (friendScore <= 59 && friendScore >= 40) {
    console.log("Friend's message unseen.");
  } else if (friendScore <= 40) {
    console.log("Block friend");
  }
} else {
  console.log("Go home and sleep and act sad");
}
