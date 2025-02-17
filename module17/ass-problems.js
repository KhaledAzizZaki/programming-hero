function calculateTex(a, b) {
  if (typeof a != "number" || typeof b != "number" || a < 0 || b < 0 || a < b) {
    return "invalid input";
  }
  let profit = a - b;
  let tex = (profit * 20) / 100;
  return tex;
}

let result = calculateTex(10000, 3000);
console.log(result);
