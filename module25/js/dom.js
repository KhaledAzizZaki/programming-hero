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

// let sections = document.querySelectorAll(".first");
// for (let i of sections) {
//   console.log(i.innerText);
// }

// let att = document.getElementById("title1");

// console.log(att.getAttribute("class"));
// console.log(att.classList);
// att.classList.add("color");
// console.log(att.classList);
// att.classList.remove("color");
// console.log(att.classList);
// att.setAttribute("title", "name asd");

// let section = document.getElementsByClassName("name")[0].innerHTML;
// console.log("section");

let section = document.querySelectorAll("section");
for (let i of section) {
  i.style.border = "2px solid black";
  i.style.backgroundColor = "lightGreen";
  i.style.margin = "10px";
  i.style.padding = "10px";
  i.style.borderRadius = "8px";
}

let threeName = document.getElementById("name3");
let listUl = document.getElementById("list");

let li = document.createElement("li");
li.innerText = "new name";
listUl.appendChild(li);
