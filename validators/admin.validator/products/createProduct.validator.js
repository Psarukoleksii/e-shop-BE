const Joi = require('joi');

module.exports = Joi.object({
  category: Joi.string().required(),
  product: Joi.object({
    name: Joi.string().min(2).max(50),
    image: Joi.string().required(),
    producer: Joi.string(),
    mass: Joi.number().required(),
    weight: Joi.string().required(),
    counterInStorage: Joi.number().required(),
    counterOfPurchases: Joi.number().required(),
  })
});
