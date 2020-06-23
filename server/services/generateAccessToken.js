const redis = require('redis');
const JWTR = require('jwt-redis').default;
// const redisClient = redis.createClient();
// const jwtr = new JWTR(redisClient);

const generateAccessToken = (user) => {
    return jwtr.sign(user, process.env.TOKEN_SECRET, { expiresIn: '10m' })
}

module.exports = generateAccessToken;