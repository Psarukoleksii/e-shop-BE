const { errorHandler, codes, messages } = require('../config');
const { adminValidator } = require('../validators');

module.exports = {
  isValidProduct: async (req, res, next) => {
    try {
      const { error } = await adminValidator.products.createProductValidator.validate(req.body);

      if (error) {
        // eslint-disable-next-line new-cap
        throw new errorHandler(codes.errorCodes.BAD_REQUEST, messages.errorMessages.PRODUCT_IS_NOT_VALID);
      }

      req.product = req.body;
      next();
    } catch (e) {
      next(e);
    }
  }
};
