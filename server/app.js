const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

app.use(bodyParser.json())

const dotenv = require('dotenv');
dotenv.config();

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


const authRoute = require("./routes/auth");
app.use("/api/user", authRoute);


/////////////////////////////////////////////////////


const employeeRoute = require("./routes/employee");
app.use("/api/employee", employeeRoute);


app.listen(port, () => console.log(`Listening at ${port}`));