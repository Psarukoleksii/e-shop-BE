const Joi = require('joi');

module.exports = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().trim().required(),
  role: Joi.string().trim(),
  phone: Joi.string().trim().required(),
  password: Joi.string().trim().required()
});

// todo regexp email, phone, password
