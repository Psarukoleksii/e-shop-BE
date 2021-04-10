const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  role: {type: String, default: 'user'},
  phone: {type: String},
  password: {type: String}
})

module.exports = model('User', usersSchema)
