function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const body = document.querySelector("body");
const span = document.querySelector("span");
const button = document.querySelector("button");

button.addEventListener("click", chengeColor)

function chengeColor() {
  span.textContent = body.style.backgroundColor = getRandomHexColor()
}