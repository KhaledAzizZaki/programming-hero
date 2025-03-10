// const person = {
//   name: "khaled aziz",
//   age: 28,
//   friends: ["hero alom", "korim"],
//   status: true,
// };

// let newPerson = JSON.stringify(person);

// console.log(person);
// console.log(newPerson);

// let newPerson2 = JSON.parse(newPerson);
// console.log(newPerson2);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const lodeData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
