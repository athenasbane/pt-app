import {generateLoginObject } from './utils.js'

const $loginForm = document.querySelector('#login-form')

$loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const loginData = generateLoginObject($loginForm)
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