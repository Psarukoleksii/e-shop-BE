const { usersSchema } = require('../dataBase');

module.exports = {
  findUserId: (id) => usersSchema.usersSchema.findOne({ id }),
};
