const Joi = require("@hapi/joi");


const registerValidation = (data) => {
    const schema = Joi.object({
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
    })
    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({

        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    })
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;