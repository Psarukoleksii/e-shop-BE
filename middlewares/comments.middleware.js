const { messages, codes, errorHandler } = require('../config');
const { productsValidator } = require('../validators');

module.exports = {
  commentsValidator: (req, res, next) => {
    try {
      const response = req.body;
      const { error } = productsValidator.commentValidator.validate(response);

      if (error) {
        throw new errorHandler(codes.errorCodes.BAD_REQUEST, messages.errorMessages.COMMENT_IS_NOT_VALID);
      }
      next();
    } catch (e) {
      next(e);
    }
  }
};
