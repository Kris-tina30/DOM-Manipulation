// 2- Add a button click event listener using JavaScript that performs the following
// actions when the submit button is clicked:

// Prevent the form from submitting and refreshing the page using e.preventDefault().
// Change the background color of the form (#my-form) to red.
// Add a new class called bg-dark to the <body> element. This class should change
// the background color of the entire webpage to dark (e.g., black or dark gray) and
// change the text color to white.
// Replace the last <li> element in the unordered list (ul.items) with an <h1>
// element that says "Hello".
const btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevents the form from submitting and refreshing the page

  document.querySelector("#my-form").style.background = "red"; // Changes form background to red
  document.querySelector("body").classList.add("bg-dark"); // Adds 'bg-dark' class to body (changes background to dark)
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>Hello</h1>"; // Changes the last <li> to a <h1>Hello</h1>
});
