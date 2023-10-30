const changeSpane = document.querySelector("#name-output")
const input = document.querySelector('#name-input')



input.addEventListener("input", (event) => {
   changeSpane.textContent = input.value !== ""
    ? event.currentTarget.value
    : "Anonymous"
})
console.log(input)