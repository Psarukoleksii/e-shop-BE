const Joi = require('joi');

module.exports = Joi.object({
  user_id: Joi.string().required(),
  product_id: Joi.string().required(),
  comment: Joi.string().trim().min(10).max(10000).required(),
});
