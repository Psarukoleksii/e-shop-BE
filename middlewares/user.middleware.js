const { codes, messages, errorHandler } = require('../config');
const { userService } = require('../services');

module.exports = {
  isValidUserId: async (req, res, next) => {
    try {
      const { userId } = req.body;
      const user = await userService.findUserId(userId);
      if (!user) {
        throw new errorHandler(codes.errorCodes.FORBIDDEN, messages.errorMessages.USER_ID_IS_NOT_FOUND);
      }
      next();
    } catch (e) {
      next(e);
    }
  }
};
