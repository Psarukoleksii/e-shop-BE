const { Router } = require('express');

const router = Router();

const { productsController } = require('../controllers');

router.get('/categories', productsController.getAllCategories);
router.get('/allProductsWithSameCategory', productsController.getProductsWithSameCategory);
router.get('/subCategories', productsController.getSubCategoriesList);
router.get('/productsWithSameSubCategory', productsController.getProductsWithSameSubCategory);
router.get('/detailsProduct', productsController.getDetailsOfProduct);

router.post('/addComment', productsController.addComment);
router.post('/rateProduct', productsController.rateProduct);

module.exports = router;
