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
