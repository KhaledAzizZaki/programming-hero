// Task-1
// Access the golden rod color value in output.

/** 
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

let color = Object.values(colors);
console.log(color);

console.log(colors["golden rod"]);
**/

// Task-2
// For this object below add a property named passenger capacity with value 5

/*
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// car.passenger = 5;
car["passenger"] = 5;

console.log(car);
*/

// Display the physics marks as output.

/*
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};

// delete student.physics.marks;
console.log(student.physics.marks);
*/

// Task-4
// Count the number of properties.

/*
let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

console.log(Object.keys(student).length);
*/

// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types
// Output:
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

// for (let i in myObject) {
//   console.log("key:", i, "|", "type:", typeof myObject[i]);
// }

for (let i = 0; i < Object.keys(myObject).length; i++) {
  console.log(
    "key:",
    Object.keys(myObject)[i],
    "|",
    "type:",
    typeof Object.values(myObject)[i]
  );
}
