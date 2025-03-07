function sum() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let result = sum();
result();
result();
result();
result();
