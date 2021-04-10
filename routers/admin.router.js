const { Router } = require('express');
const router = Router();

const { authMiddleware, adminMiddleware } = require('../middlewares');
const { adminController } = require('../controllers');

router.post(
  '/createProduct',
  authMiddleware.checkAccessToken,
  adminMiddleware.isValidProduct,
  adminController.addProductToDB
);

module.exports = router;
