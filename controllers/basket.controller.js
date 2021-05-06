const { basketService } = require('../services');
const { messages, codes } = require('../config');

module.exports = {
  buyProduct: async (req, res, next) => {
    try {
      const wishProducts = req.body;
      const { products } = req;

      await basketService.buyProduct(wishProducts, products);
      res.status(codes.goodCodes.OK).json(messages.goodMessages.PRODUCTS_IS_PURCHASED);
    } catch (e) {
      next(e);
    }
  }
};
