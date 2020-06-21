
const Joi = require("@hapi/joi");


const registerValidation = () => {
    const schema = {
        first_name: Joi.string()
            .min(6)
            .required(),
        last_name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        picture: Joi.string()
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
        company: Joi.string()
            .min(2)
            .required()
    }
    return Joi.validate(data, schema);
}

module.exports.registerValidation = registerValidation;