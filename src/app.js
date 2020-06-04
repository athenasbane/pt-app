const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const path = require('path')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.use(express.json())
app.use(userRouter)

module.exports = app