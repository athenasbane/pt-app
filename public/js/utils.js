// const generateSignupObject = (data) => {
    
//     let userData = {
//             first: data.elements[0].value,
//             last: data.elements[1].value,
//             email: data.elements[2].value,
//             password: data.elements[3].value,
//             passwordRepeat: data.elements[4].value
//         }
//         return userData
// }

const generateLoginObject = (data) => {

    let loginData = {
        email: data.elements[0].value,
        password: data.elements[1].value

    }    

    return loginData
}

// modules.export = { generateSignupObject,
//                    generateLoginObject }