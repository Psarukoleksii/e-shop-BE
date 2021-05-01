const { messages, codes, errorHandler } = require('../config');

module.exports = {
  numberOfRate: (req, res, next) => {
    try {
      const { rate } = req.body;
      if (rate > 5 || rate < 0) {
        throw new errorHandler(codes.errorCodes.BAD_REQUEST, messages.errorMessages.NOT_VALID_RATE_PRODUCT);
      }
      next();
    } catch (e) {
      next(e);
    }
  }
};
