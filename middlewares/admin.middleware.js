const { errorHandler, codes, messages } = require('../config');
const { adminValidator } = require('../validators');

module.exports = {
  isValidProduct: async (req, res, next) => {
    try{
      const product = req.body;

      const { error } = await adminValidator.products.createProductValidator.validate(product);

      if ( error ) {
        throw new errorHandler(codes.errorCodes.BAD_REQUEST, messages.errorMessages.PRODUCT_IS_NOT_VALID);
      }

      req.product = product;
      next();
    } catch (e) {
      next(e);
    }
  }
}
