const form = document.querySelector('.login-form')
form.addEventListener('submit',  onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault(); 

    const formElement = event.currentTarget.elements
    const mail = formElement.email.value;
    const password = formElement.password.value;
    const formData = {
        mail,
        password
    }

    if(mail === "") {
        return alert("Всі поля вводу повинні бути заповненні")
    } else if(password === "") {
        return alert("Всі поля вводу повинні бути заповненні")
    } else {
        console.log(formData)
    }

    form.reset()
    
}

