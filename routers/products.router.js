const { Router } = require('express');

const router = Router();

const { productsController } = require('../controllers');

router.get('/categories', productsController.getAllCategories);
router.get('/allProductsWithSameCategory', productsController.getProductsWithSameCategory);
router.get('/subCategories', productsController.getSubCategoriesList);
router.get('/productsWithSameSubCategory', productsController.getProductsWithSameSubCategory);

module.exports = router;
