const generateLoginObject = (data) => {

    let loginData = {
        email: data.elements[0].value,
        password: data.elements[1].value

    }    

    return loginData
}

const $loginForm = document.querySelector('#login-form')

$loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const loginData = generateLoginObject($loginForm)
    console.log(loginData)

    const jsonUserData = JSON.stringify(userData)


    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/users/login', true)
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(jsonUserData)

    xhr.onloadend = (e) => {
        const error = JSON.parse(e.target.response)
        if (error.errors) {
            alert(error.errors.email.message)
        } 
        window.location.replace('tasks.html')
    }


})