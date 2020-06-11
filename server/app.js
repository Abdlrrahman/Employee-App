const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
require('./models/Employee');

app.use(bodyParser.json())

const dotenv = require('dotenv');
dotenv.config();

const Employee = mongoose.model("employee");

const mongodb = `mongodb+srv://Abdo:${process.env.DB_PASSWORD}@cluster0-u4hb7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("connected to the DB")
})

mongoose.connection.on("error", (error) => {
    console.log("error", error)
})


/////////////////////////////////////////////////////


app.get('/', (req, res) => res.send('Hello World!'));

app.post('/send', (req, res) => {
    console.log(req.body);
    res.send('sent successfully');
});

app.listen(port, () => console.log(`Listening at ${port}`));