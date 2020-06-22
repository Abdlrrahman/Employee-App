const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '10m' })
}

module.exports = generateAccessToken;