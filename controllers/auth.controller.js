const {messages, codes} = require('../config');
const {authSchema} = require('../dataBase')
const {passwordHash, tokenizer} = require('../helpers');
const {authorizationService} = require('../services');

module.exports = {
  signUp: async (req, res, next) => {
    try {
      const {password} = req.user;

      const hashPassword = await passwordHash.hash(password);
      await authorizationService.signUp({...req.user, password: hashPassword});

      res.status(codes.goodCodes.CREATED).json(messages.goodMessages.USER_CREATED);
    } catch (e) {
      next(e);
    }
  },

  signIn: async (req, res, next) => {
    try {
      const {password} = req.body;
      const user = req.user;

      await passwordHash.compare(password, user.password);

      const tokens = tokenizer();

      await authSchema.O_Auth.create({...tokens, _user_id: user._id})

      res.json({tokens})
    } catch (e) {
      next(e)
    }
  },

  profile: async (req, res, next) => {
    try {
      const { user } = req;

      res.json({firstName: user.firstName, lastName: user.lastName, email: user.email, phone: user.phone, role: user.role});
    } catch (e) {
      next(e);
    }
  }
}
