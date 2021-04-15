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
  },
  getDetailsOfProduct: async (req, res, next) => {
    try {
      const { id } = req.query;
      const product = await productsService.getDetailsOfProduct(id);
      res.json(product);
    } catch (e) {
      next(e);
    }
  },
  addComment: async (req, res, next) => {
    try {
      const { user_id, product_id, comment } = req.body;
      const userComment = await productsService.addComment(user_id, product_id, comment);
      res.json(userComment);
    } catch (e) {
      next(e);
    }
  },
  rateProduct: async (req, res, next) => {
    try {
      const { user_id, product_id, rate } = req.body;
      console.log(user_id, product_id, rate);
      const rateProduct = await productsService.addRate(user_id, product_id, rate);
      res.json(rateProduct);
    } catch (e) {
      next(e);
    }
  }
};
