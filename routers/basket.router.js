const { Router } = require('express');

const router = Router();

const { basketMiddleware } = require('../middlewares');
const { basketController } = require('../controllers');

router.post(
  '/buyProducts',
  basketMiddleware.isValidBasketRequest,
  basketMiddleware.isCountProductInStorage,
  basketController.buyProduct
);

module.exports = router;
