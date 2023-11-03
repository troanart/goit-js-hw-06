const validationInput = document.querySelector('#validation-input')
const validDataLength = document.querySelector('[data-length = "6"]')

validationInput.addEventListener("blur", (event) => {
    if(event.currentTarget.value.length <= validDataLength.dataset.length) {
        validationInput.classList.add("valid")
    } else {
        validationInput.classList.add("invalid")
    }
})

