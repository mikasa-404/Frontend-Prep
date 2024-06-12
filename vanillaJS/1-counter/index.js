//persist count on reload
let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 0;

var counter = document.querySelector("#count");
var button = document.querySelector("#counterButton");

//initial config
counter.textContent = count;

//increment and updates counter textContent
function increment() {
  count = count + 1;
  counter.textContent = count;
  localStorage.setItem("count", count);
}

//add event listener on button not span
button.addEventListener("click", increment);
