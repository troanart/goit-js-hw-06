const validationInput = document.querySelector('#validation-input')
const validDataLength = document.querySelector('[data-length = "6"]')

validationInput.addEventListener("blur", (event) => {
    const condition = event.currentTarget.value.length == validDataLength.dataset.length;
    validationInput.classList.toggle("valid", condition)
    validationInput.classList.toggle("invalid", !condition)
})

