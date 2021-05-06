const { basketValidator: { basketValidator } } = require('../validators');
const { messages, codes, errorHandler } = require('../config');
const { basketService } = require('../services');

module.exports = {
  isValidBasketRequest: (req, res, next) => {
    try {
      const { error } = basketValidator.validate(req.body);
      if (error) {
        throw new errorHandler(codes.errorCodes.BAD_REQUEST, messages.errorMessages.BASKET_PRODUCTS_IS_NOT_VALID);
      }

      next();
    } catch (e) {
      next(e);
    }
  },
  isCountProductInStorage: async (req, res, next) => {
    try {
      const response = await basketService.verifyIsCountProductInStorage(req.body);

      if (!response.length) {
        throw new errorHandler(codes.errorCodes.CONFLICT, messages.errorMessages.NOT_ENOUGH_COUNT_IN_STORAGE);
      }

      req.products = response;
      next();
    } catch (e) {
      next(e);
    }
  }
};
