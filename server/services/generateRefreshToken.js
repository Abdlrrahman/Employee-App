const jwt = require("jsonwebtoken");

const generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN)
}

module.exports = generateRefreshToken;