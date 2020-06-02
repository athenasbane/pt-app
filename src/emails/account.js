const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'benjamincollingwood@me.com',
        subject: 'Welcome to the Course!',
        text: `Welcome blah blah ${name} blah blah`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'benjamincollingwood@me.com',
        subject: 'Sorry to see you go!',
        text: `bye bye ${name}...`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}