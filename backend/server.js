const express = require('express')

// EXPRESS APP
const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// LISTEN FOR REQUESTS
app.listen(4000, () => {
    console.log('listening on port 4000')
})