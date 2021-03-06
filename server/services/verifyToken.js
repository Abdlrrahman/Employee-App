const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    const token = req.header("auth-token");

    if (!token) return res.status(401).send("Access Denied");
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.employer = verified;
        next();
    } catch (error) {
        console.log(error);
        res.status(400).send("Invalid Token");
    }
}

module.exports = auth;