// Problem-01
function calculateVAT(price) {
  if (typeof price != "number" || price < 0) {
    return "Invalid";
  }

  let vat = (price * 7.5) / 100;

  return vat;
}
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
