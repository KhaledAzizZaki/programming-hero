function cashOut(price) {
  if (typeof price != "number" || price < 0) {
    return "Invalid";
  }
  let charge = (price * 1.75) / 100;
  return charge;
}

let result = cashOut(999);
console.log(result);
