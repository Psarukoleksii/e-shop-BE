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
  // getAllSubCategories: async (req, res, next) => {
  //   try {
  //     const response = req.body;
  //   } catch (e) {
  //     next(e);
  //   }
  // },
  getProductsWithSameCategory: async (req, res, next) => {
    try {
      const { name } = req.query;

      const products = await productsService.getProducts(name);

      res.json(products);
    } catch (e) {
      next(e);
    }
  }
};
