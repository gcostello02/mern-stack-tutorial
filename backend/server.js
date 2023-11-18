const express = require('express')

// EXPRESS APP
const app = express()

// LISTEN FOR REQUESTS
app.listen(4000, () => {
    console.log('listening on port 4000')
})