const { basketSchema } = require('../dataBase');

module.exports = {
  buyProduct: (objOrder) => basketSchema.basketSchema.create(objOrder),
};
