// Problem-01
function calculateVAT(price) {
  if (typeof price != "number" || price < 0) {
    return "Invalid";
  }

  let vat = (price * 7.5) / 100;

  return vat;
}
