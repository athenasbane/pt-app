const sgMail = require('@sendgrid/mail')
const adminEmail = "l_heath01@yahoo.co.uk"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Welcome Email

const sendWelcomeEmail = (email, first) => {
    sgMail.send({
        to: email,
        bcc: adminEmail,
        from: 'benjamincollingwood@me.com',
        subject: 'Welcome to the Course!',
        text: `Welcome blah blah ${first} blah blah`,
    })
}

// Leaving Email

const sendCancelationEmail = (email, first) => {
    sgMail.send({
        to: email,
        bcc: adminEmail,
        from: 'benjamincollingwood@me.com',
        subject: 'Sorry to see you go!',
        text: `bye bye ${first}...`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}