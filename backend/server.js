require('dotenv').config()

const express = require('express')

// EXPRESS APP
const app = express()

// MIDDLEWARE
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// ROUTES
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// LISTEN FOR REQUESTS
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})