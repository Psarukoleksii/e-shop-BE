const { productSchema } = require('../dataBase');

module.exports = {
  addProduct: (product) => productSchema.productSchema.create(product)
};
