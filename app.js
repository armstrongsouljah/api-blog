const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')

const blogRoutes = require('./views/index')

// create an express instance
const app  = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const { DATABASE_URL, } = process.env //helps encapsulate sensitive information
const { PORT } = process.env || 4000


// make request and send response
app.get('/', (req, res) => {
    res.json({ message: "Welcome API development"})
})

app.use('/blog', blogRoutes)

mongoose.connect(DATABASE_URL)
    .then(
        () => {
            app.listen(PORT, () => {
                console.log(`Server running at http://localhost:${PORT}`,)
            });
        })
    .catch(err => console.error(err))


// MVC => Model, View, Controller
// Model = Business data
// View = Presentation layer (request/response)
// Controller = middle man between view and model

// mongodb is database
//mongoose is on ORM(Object relational mapper)  mongodb interractivity