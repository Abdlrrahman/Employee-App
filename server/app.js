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

app.post('/send-data', (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position
    })
    employee.save()
        .then(data => {
            console.log(data);
            res.send('sent successfully');
        }).catch(error => {
            console.log(error)
        })

});

app.listen(port, () => console.log(`Listening at ${port}`));