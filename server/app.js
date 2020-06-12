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
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

});

mongoose.connection.on("connected", () => {
    console.log("connected to the DB")
})

mongoose.connection.on("error", (error) => {
    console.log("error", error)
})


/////////////////////////////////////////////////////


app.get('/', async (req, res) => {
    try {
        let response = await Employee.find({})
        res.send(response)
    } catch (error) {
        alert(error);
    }
});

app.post('/send-data', async (req, res) => {
    try {
        const employee = new Employee({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            picture: req.body.picture,
            salary: req.body.salary,
            position: req.body.position
        })
        let response = await employee.save()
        console.log(response);
        res.send('sent successfully');
    } catch (error) {
        alert(error);
    }

});

app.delete('/delete', async (req, res) => {
    try {
        let response = await Employee.findByIdAndRemove(req.body.id)
        console.log(response)
        res.send("deleted")
    } catch (error) {
        alert(error);
    }
});

app.patch('/update', async (req, res) => {
    try {
        let response = await Employee.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            picture: req.body.picture,
            salary: req.body.salary,
            position: req.body.position
        })
        console.log(response)
        res.send("updated")
    } catch (error) {
        alert(error);
    }
});

app.listen(port, () => console.log(`Listening at ${port}`));