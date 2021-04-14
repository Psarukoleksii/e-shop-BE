const { productsService } = require('../services');

module.exports = {
  getAllCategories: async (req, res, next) => {
    try {
      const categories = await productsService.getAllCategories();

      res.json(categories);
    } catch (e) {
      next(e);
    }
  },
  getProductsWithSameCategory: async (req, res, next) => {
    try {
      const { name } = req.query;
      const products = await productsService.getAllProductCategory(name);

      res.json(products);
    } catch (e) {
      next(e);
    }
  },
  getSubCategoriesList: async (req, res, next) => {
    try {
      const { name } = req.query;
      const subCategoriesList = await productsService.getSubCategories(name);
      res.json(subCategoriesList);
    } catch (e) {
      next(e);
    }
  },
  getProductsWithSameSubCategory: async (req, res, next) => {
    try {
      const { subname } = req.query;
      const products = await productsService.getProductsSubCategory(subname);
      res.json(products);
    } catch (e) {
      next(e);
    }
  }
};
