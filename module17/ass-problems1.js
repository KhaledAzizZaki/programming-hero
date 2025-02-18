// Problem-01
function calculateVAT(price) {
  if (typeof price != "number" || price < 0) {
    return "Invalid";
  }

  let vat = (price * 7.5) / 100;

  return vat;
}

let result = calculateVAT(999);
console.log(result);

// Problem-02
function validContact(contact) {
  if (typeof contact != "string") {
    return "Invalid";
  }

  let num = true;

  for (let i of contact) {
    if (isNaN(i)) {
      num = false;
      break;
    }
  }

  if (
    num &&
    contact.length == 11 &&
    !contact.includes(" ") &&
    contact[0] == 0 &&
    contact[1] == 1
  ) {
    return true;
  } else return false;
}

// Problem-03
function willSuccess(marks) {
  if (!Array.isArray(marks) || marks == false) {
    return "Invalid";
  }

  for (let i of marks) {
    if (typeof i != "number") {
      return "Invalid";
    }
  }

  let passedExam = 0;
  let failedExam = 0;

  for (let i of marks) {
    if (i >= 50) {
      passedExam++;
    } else failedExam++;
  }

  if (marks.length / 2 < passedExam) {
    return true;
  } else {
    return false;
  }
}

// Problem-04
function validProposal(person1, person2) {
  if (Array.isArray(person1) || Array.isArray(person2)) {
    return "Invalid";
  }

  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }

  if (person1.gender.toLowerCase() == person2.gender.toLowerCase()) {
    return false;
  }

  let ageDif = person1.age - person2.age;
  let num = Math.abs(ageDif);
  if (num <= 7) {
    return true;
  } else return false;
}

//Problem-05
function calculateSleepTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }
  for (let i of times) {
    if (typeof i !== "number") {
      return "Invalid";
    }
  }

  let totalTimes = { hour: 0, minute: 0, second: 0 };

  let sum = 0;
  for (let i of times) {
    sum += i;
  }

  let second = sum % 60;
  totalTimes.second = second;

  let minute = (sum - second) / 60;
  let minuteRemain = minute % 60;
  totalTimes.minute = minuteRemain;

  let hour = minute - minuteRemain;
  let hourRemain = hour / 60;
  totalTimes.hour = hourRemain;

  return totalTimes;
}
