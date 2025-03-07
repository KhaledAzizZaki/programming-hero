document.getElementById("btn-update").addEventListener("click", function () {
  document.getElementById("title").innerText = "Handle updated";
});

document.getElementById("btn-update2").addEventListener("click", function () {
  let inputName = document.getElementById("input-name");
  let name = inputName.value;
  document.getElementById("name-id").innerText = name;
});
