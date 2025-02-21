const btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector("#my-form").style.background = "red";

  const body = document.querySelector("body");
  const listItems = document.querySelectorAll("li");

  if (!body.classList.contains("bg-dark")) {
    body.classList.add("bg-dark");
    listItems.forEach((item) => {
      item.classList.add("bg-dark");
    });
  } else {
    body.classList.remove("bg-dark");
    listItems.forEach((item) => {
      item.classList.remove("bg-dark");
    });
  }

  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>Hello</h1>";
});
