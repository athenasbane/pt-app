import generateFormObject from ('utils')

// Sign up elements
const $signupForm = document.querySelector('#signup-form')

// login Elements
const $loginForm = document.querySelector('#login-form')

// const generateFormObject = (type, data) => {
//    if(type === 'signup') {
//     let userData = {
//             firstName: data.elements[0].value,
//             lastName: data.elements[1].value,
//             email: data.elements[2].value,
//             password: data.elements[3].value,
//             passwordRepeat: data.elements[4].value
//         }
//         return userData
//     }
//     let userData = {
//         email: data.elements[0].value,
//         password: data.elements[1].value
//     }
//     return userData
// }

// sign up event 

$signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const userData = generateFormObject('signup', $signupForm)
    
    if (userData.password !== userData.passwordRepeat) {
        return alert('Passwords do not match')
    } 

    const jsonUserData = JSON.stringify(userData)


    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3000/users', true)
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(jsonUserData)
    console.log(jsonUserData)

    xhr.onloadend = (e) => {
        const error = JSON.parse(e.target.response)
        console.log()
        if (error.errors) {
            alert(error.errors.email.message)
        } 
        window.location.replace('tasks.html')
    }

})

// log in event

$loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const loginData = generateFormObject('login', $loginForm)
    console.log(loginData)

    const jsonUserData = JSON.stringify(userData)


    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3000/users/login', true)
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