const { basketValidator: { basketValidator } } = require('../validators');
const { messages, codes, errorHandler } = require('../config');

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
  }
};
