const bcrypt = require("bcrypt");

const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10);
};
const comparePasswords = (plainPassword, passwordEncript) => {
  return bcrypt.compareSync(plainPassword, passwordEncript);
};

module.exports = { hashPassword, comparePasswords };
