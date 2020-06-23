const router = require("express").Router();
const mongoose = require('mongoose');
require('../models/Employer');
const Employer = mongoose.model("employer");
const { registerValidation, loginValidation } = require("../services/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateAccessToken = require("../services/generateAccessToken");


router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await Employer.findOne({ email: req.body.email });

    if (emailExist) return res.status(400).send("Email already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    console.log(req.body)
    const employer = new Employer({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
        picture: req.body.picture,
        company: req.body.company
    })

    try {
        let response = await employer.save()
        console.log(response);
        res.send({ user: user._id })
        // res.send('sent successfully');
    } catch (error) {
        console.log(error);
    }

});

router.post('/login', async (req, res) => {
    try {
        const { error } = loginValidation(req.body);

        if (error) return res.status(400).send(error.details[0].message);

        const employer = await Employer.findOne({ email: req.body.email });

        if (!employer) return res.status(400).send("Email or password is wrong");

        const validPassword = await bcrypt.compare(req.body.password, employer.password)
        if (!validPassword) return res.status(400).send("Invalid password");

        const token = generateAccessToken(employer._id);
        const refreshToken = generateRefreshToken(employer._id);

        // res.header("refresh-token", refreshToken).send(refreshToken)
        res.header("auth-token", token, "refresh-token", refreshToken).send(token, refreshToken)

        // res.send('logged in');
        // console.log(req.body);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;