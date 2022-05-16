const express = require('express');
const bodyParser = require('body-parser')

// create an express instance
const app  = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// assign port
const port = 3000

// make request and send response
app.get('/', (req, res) => {
    res.json({ message: "Welcome API development"})
})

// listen for connections
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`,)
});


// MVC => Model, View, Controller
// Model = Business data
// View = Presentation layer (request/response)
// Controller = middle man between view and model