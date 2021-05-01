const { Router } = require('express');

const router = Router();

const { productsController } = require('../controllers');
const { authMiddleware, rateMiddleware, userMiddleware } = require('../middlewares');

router.get('/categories', productsController.getAllCategories);
router.get('/allProductsWithSameCategory', productsController.getProductsWithSameCategory);
router.get('/subCategories', productsController.getSubCategoriesList);
router.get('/productsWithSameSubCategory', productsController.getProductsWithSameSubCategory);
router.get('/detailsProduct', productsController.getDetailsOfProduct);
router.get('/getRate', productsController.getRateProduct);
router.get('/getComments', productsController.getProductsComments);
router.get('/getNewProducts', productsController.getNewProducts);

router.post(
  '/addComment',
  authMiddleware.checkAccessToken,
  userMiddleware.isValidUserId,
  productsController.addComment
);

router.post(
  '/rateProduct',
  authMiddleware.checkAccessToken,
  userMiddleware.isValidUserId,
  rateMiddleware.numberOfRate,
  productsController.addRateProduct
);

module.exports = router;
