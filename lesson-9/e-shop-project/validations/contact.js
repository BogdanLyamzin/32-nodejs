const Joi = require("joi");

const joiContactSchema = Joi.object({
    name: Joi.string().required()
});

module.exports = joiContactSchema;