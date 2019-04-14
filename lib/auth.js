const jwt = require('jsonwebtoken');

const getUserFromToken = token => {
  const decodedToken = jwt.decode(token);
  const user = {};
  user.user_id = decodedToken.user_id;
  user.first_name = decodedToken.first_name;
  return user;
}

module.exports = getUserFromToken;