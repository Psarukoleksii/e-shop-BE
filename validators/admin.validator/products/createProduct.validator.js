const Joi = require('joi');

module.exports = Joi.object({
  category: Joi.string().trim().required(),
  subCategory: Joi.string().trim().required(),
  name: Joi.string().trim().min(2).max(50),
  image: Joi.string().trim().required(),
  price: Joi.number().required(),
  producer: Joi.string().trim().required(),
  mass: Joi.number().required(),
  weight: Joi.string().trim().required(),
  counterInStorage: Joi.number().required(),
});
