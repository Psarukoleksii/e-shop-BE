const { basketService } = require('../services');
const { messages, codes } = require('../config');

module.exports = {
  buyProduct: async (req, res, next) => {
    try {
      await basketService.buyProduct(req.body);
      res.status(codes.goodCodes.OK).json(messages.goodMessages.PRODUCTS_IS_PURCHASED);
    } catch (e) {
      next(e);
    }
  }
};
