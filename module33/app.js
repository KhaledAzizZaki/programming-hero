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

// const lodeData = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// const lodeData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       displayUser(data);
//     });
// };

// const displayUser = (users) => {
//   console.log(users[0].name);
// };

// const lodeData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       displayUser(data);
//     });
// };

// const displayUser = (data) => {
//   const usersContainer = document.getElementById("users");

//   for (let i of data) {
//     const li = document.createElement("li");
//     li.innerText = i.name;
//     usersContainer.appendChild(li);
//   }
// };

const lodeData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  displayUser(data);
};

const displayUser = (post) => {
  const postContainer = document.getElementById("postContainer");
  //
  for (let i of post) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h1>${i.title}</h1>
      <p>${i.body}</p>
      <button>Details</button>
    `;
    postContainer.appendChild(div);
  }
};
