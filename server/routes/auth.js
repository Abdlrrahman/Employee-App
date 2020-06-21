const router = require("express").Router();
const mongoose = require('mongoose');
require('../models/Employer');
const Employer = mongoose.model("employer");
const { registerValidation } = require("../services/validation");


router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await Employer.findOne({ email: req.body.email });

    if (emailExist) return res.status(400).send("Email already exists");

    console.log(req.body)
    const employer = new Employer({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        picture: req.body.picture,
        company: req.body.company
    })

    try {
        let response = await employer.save()
        console.log(response);
        res.send(response)
        // res.send('sent successfully');
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;