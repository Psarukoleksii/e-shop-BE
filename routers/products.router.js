const { Router } = require('express');

const router = Router();

const { productsController } = require('../controllers');

router.get('/categories', productsController.getAllCategories);
router.get('/allProductsWithSameCategory', productsController.getProductsWithSameCategory);

module.exports = router;
