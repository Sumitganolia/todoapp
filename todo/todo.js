/** @format */
let input = document.querySelector("input");
let button = document.querySelector(".add-to-list");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

button.addEventListener("click", () => {
  let value = input.value;
  if (value.trim() === "") {
    alert("Input is empty!");
    return;
  } else {
    let item = document.createElement("li");
    let dltbutton = document.createElement("BUTTON");
    item.innerText = value;
    dltbutton.innerText = "delete";
    dltbutton.classList.add("delete");
    item.appendChild(dltbutton);
    ul.appendChild(item);
    input.value = "";
  }
});
ul.addEventListener("click", () => {
  if (event.target.nodeName == "BUTTON") {
    let item = event.target.parentElement;
    item.remove();
  } else {
    return;
  }
});
