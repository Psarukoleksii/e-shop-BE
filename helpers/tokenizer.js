const jwt = require('jsonwebtoken');
const { constants } = require('../config');

module.exports = () => {
  const access_token = jwt.sign({}, constants.SECRET_WORD_ACC_TOKEN, {expiresIn: '1d'});
  const refresh_token = jwt.sign({}, constants.SECRET_WORD_REF_TOKEN, {expiresIn: '30d'});

  return {
    access_token,
    refresh_token
  }
}
