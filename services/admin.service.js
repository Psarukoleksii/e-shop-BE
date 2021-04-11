const { productSchema } = require('../dataBase');

module.exports = {
  addProduct: async (product) => {
    const category = await productSchema.productSchema.findOne({ category: product.category });
    if (!category) {
      const newCategory = await productSchema.productSchema.create(product);
      newCategory.products.push(product.product);
      newCategory.save();
    } else {
      category.products.push(product.product);
      category.save();
    }
  }
};
