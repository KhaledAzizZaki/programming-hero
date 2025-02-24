function green() {
  document.body.style.backgroundColor = "limegreen";
}
function red() {
  document.body.style.backgroundColor = "red";
}
let makeBlue = document.getElementById("make-blue");
makeBlue.onclick = function blue() {
  document.body.style.backgroundColor = "blue";
};
const makePurple = document.getElementById("make-purple");
makePurple.onclick = purple;
function purple() {
  document.body.style.backgroundColor = "darkgray";
}
