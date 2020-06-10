const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const port = 3000
require('./models/Employee')

const Employee = mongoose.model("employee");

const mongodb = `mongodb+srv://Abdo:${process.env.DB_PASSWORD}@cluster0-u4hb7.mongodb.net/<dbname>?retryWrites=true&w=majority`

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Listening at ${port}`))