const { productSchema } = require('../dataBase');

module.exports = {
  // eslint-disable-next-line require-await
  addProduct: async (product) => productSchema.productSchema.create(product),

  createSubCategory: async (subCategory, product_id) => {
    const findSubCategory = await productSchema.subCategorySchema.findOne(subCategory);
    if (!findSubCategory) {
      const subCat = await productSchema.subCategorySchema.create(subCategory);
      await subCat._products_id.push(product_id);
      await subCat.save();
      return subCat._id;
    } else {
      await findSubCategory._products_id.push(product_id);
      await findSubCategory.save();
      return findSubCategory._id;
    }
  },
  createCategory: async (category, id) => {
    const findCategory = await productSchema.categorySchema.findOne(category);
    if (!findCategory) {
      const _category = await productSchema.categorySchema.create(category);
      await _category._subCategory_id.push(id);
      await _category.save();
      return;
    } console.log(findCategory);
    // else {
    //   await findCategory._subCategory_id.push(id);
    //   await findCategory.save();
    // }
  }
};
