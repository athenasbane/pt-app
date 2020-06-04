const serverRoute = 'http://localhost:3000/users'

const generateSignupObject = (data) => {
    
    
    let userData = {
            first: data.elements[0].value,
            last: data.elements[1].value,
            email: data.elements[2].value,
            password: data.elements[3].value,
            passwordRepeat: data.elements[4].value
        }
        return userData
}

// Sign up elements
const $signupForm = document.querySelector('#signup-form')

$signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const userData = generateSignupObject($signupForm)
    
    if (userData.password !== userData.passwordRepeat) {
        return alert('Passwords do not match')
    } 

    const jsonUserData = JSON.stringify(userData)


    const xhr = new XMLHttpRequest()
    xhr.open('POST', serverRoute, true)
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(jsonUserData)
    console.log(jsonUserData)

    xhr.onloadend = (e) => {
        const error = JSON.parse(e.target.response)
        
        if (error.code === 11000) {
            return alert('this email already exists please contact blah blah for support')
        } else if (error.message === 'User validation failed: password: Password cannot contain "password"') {
            return alert(error.errors.password.properties.message)
        } 
        window.location.replace('welcome.html')
    }

})
