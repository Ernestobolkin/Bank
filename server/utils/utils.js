const User = require("../mongoose/userSchema")

const findUser = async (name) => {
  const res = await User.find({ fullName: name });
  return res;
};

module.exports = findUser ;