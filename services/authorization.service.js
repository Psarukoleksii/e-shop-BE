const { usersSchema, authSchema } = require('../dataBase');

module.exports = {
  signUp: (userObject) => usersSchema.usersSchema.create(userObject),

  findEmailAndPhone: (email, phone) => usersSchema.usersSchema.find({ email, phone }),

  isEmailOrPhone: (login) => usersSchema.usersSchema.findOne({ $or: [{ email: `${login}` }, { phone: `${login}` }] }),

  findUser: (token) => authSchema.O_Auth.findOne({ access_token: token }).populate('_user_id'),
};
