let counterValue = 0;
const value = document.querySelector('#value')

const minusButton = document.querySelector('[data-action="decrement"]')

minusButton.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
})

const plusButton = document.querySelector('[data-action="increment"]')

plusButton.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
})


