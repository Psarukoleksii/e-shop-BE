const Joi = require('joi');

const productSubSchema = Joi.array().items(
  Joi.object({
    product_id: Joi.string().trim().required(),
    count: Joi.number().min(1).required()
  })
);

module.exports = Joi.object({
  userId: Joi.string().trim().required(),
  products: productSubSchema
});
