const bcrypt = require('bcrypt');
const { messages, codes, errorHandler, constants } = require('../config');

module.exports = {
  hash: (password) => bcrypt.hash(password, 10),
  compare: async (password, hashPassword) => {
    const isPasswordEquals = await bcrypt.compare(password, hashPassword);

    if (!isPasswordEquals) {
      throw new errorHandler(codes.errorCodes.UNAUTHORIZED, messages.errorMessages.WRONG_PASSWORD_OR_EMAIL);
    }
  }
};
