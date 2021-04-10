const Joi = require('joi');

module.exports = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  role: Joi.string(),
  phone: Joi.string().required(),
  password: Joi.string().required()
});
