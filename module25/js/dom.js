console.log("khaled aziz zaki");
console.log(document);

// let liCollection = document.getElementsByTagName("li");
// for (let i of liCollection) {
//   console.log(i.innerText);
// }

// let sections = document.getElementsByClassName("first");
// for (let i of sections) {
//   console.log(i.innerText);
// }

let sections = document.querySelectorAll(".first");
for (let i of sections) {
  console.log(i.innerText);
}
