const router = require("express").Router();
const mongoose = require('mongoose');
require('../models/Employee');
const Employee = mongoose.model("employee");
const verify = require('../services/verifyToken');



router.get('/', verify, async (req, res) => {
    try {
        let response = await Employee.find({})
        res.send(response)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
});

router.post('/send-data', verify, async (req, res) => {
    try {
        console.log(req.body.picture)
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
        res.send(response)
        // res.send('sent successfully');
    } catch (error) {
        console.log(error);
    }

});

router.delete('/delete', verify, async (req, res) => {
    try {
        let response = await Employee.findByIdAndRemove(req.body.id)
        console.log(response)
        res.send(response)
        // res.send("deleted")
    } catch (error) {
        console.log(error)
    }
});

router.patch('/update', verify, async (req, res) => {
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
        res.send(response)
        // res.send("updated")
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;