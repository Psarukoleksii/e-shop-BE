const { productSchema } = require('../dataBase');

module.exports = {
  // eslint-disable-next-line require-await
  getAllCategories: async () => productSchema.productSchema.distinct('category'),

  // eslint-disable-next-line require-await
  getProducts: async (category) => productSchema.productSchema.find({ category: `${category}` }),
};
