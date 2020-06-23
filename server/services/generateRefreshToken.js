const redis = require('redis');
const JWTR = require('jwt-redis').default;
const redisClient = redis.createClient();
const jwtr = new JWTR(redisClient);

const generateRefreshToken = (user) => {
    return jwtr.sign(user, process.env.REFRESH_TOKEN)
}

module.exports = generateRefreshToken;