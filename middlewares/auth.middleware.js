const {authorizationService} = require('../services');
const {authValidator} = require('../validators');
const {codes, messages, errorHandler, constants} = require('../config');
const jwt = require('jsonwebtoken');

module.exports = {
  isValidUserRegister: async (req, res, next) => {
    try {
      const user = req.body;

      const {error} = await authValidator.register.registerValidator.validate(user);

      if (error) {
        throw new errorHandler(codes.errorCodes.BAD_REQUEST, messages.errorMessages.USER_IS_NOT_VALID)
      }

      req.user = user;
      next();
    } catch (e) {
      next(e);
    }
  },

  isEmailOrPhoneFree: async (req, res, next) => {
    try {
      const {email, phone} = req.body;

      const emailOrPhone = await authorizationService.findEmailAndPhone(email, phone);

      if (emailOrPhone.length > 0) {
        throw new errorHandler(codes.errorCodes.CONFLICT, messages.errorMessages.EMAIL_OR_PHONE_IN_USE);
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  isValidSignInFields: (req, res, next) => {
    try {
      const {login, password} = req.body;

      if (!login || !password) {
        throw new errorHandler(codes.errorCodes.BAD_REQUEST, messages.errorMessages.USER_IS_NOT_VALID);
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  isUserInDB: async (req, res, next) => {
    try {
      const {login, password} = req.body;

      const findUser = await authorizationService.isEmailOrPhone(login);
      if (!findUser) {
        throw new errorHandler(codes.errorCodes.UNAUTHORIZED, messages.errorMessages.USER_NOT_FOUND)
      }

      req.user = findUser;
      next();
    } catch (e) {
      next(e);
    }
  },

  checkAccessToken: async (req, res, next) => {
    try {
      const access_token = req.get(constants.AUTHORIZATION);

      if (!access_token) {
        throw new errorHandler(codes.errorCodes.UNAUTHORIZED, messages.errorMessages.TOKEN_IS_REQUIRED);
      }

      jwt.verify(access_token, constants.SECRET_WORD_ACC_TOKEN, err => {
        if (err) {
          throw new errorHandler(codes.errorCodes.UNAUTHORIZED, messages.errorMessages.TOKEN_IS_NOT_VALID)
        }
      })

      const { _user_id: user } = await authorizationService.findUser(access_token);

      if(!user){
        throw new errorHandler(codes.errorCodes.UNAUTHORIZED, messages.errorMessages.TOKEN_IS_NOT_VALID);
      }

      req.user = user;
      next();
    } catch (e) {
      next(e);
    }
  }
}
