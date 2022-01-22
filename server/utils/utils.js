const User = require("../mongoose/userSchema");

const findUser = async (name) => {
  return await User.find({ fullName: name });
};

const updateUser = async (user, name, data) => {
  return await User.updateOne(
    { fullName: name },
    { cash: user[0].cash + data, credit: user[0].credit - data }
  );
};

module.exports = { findUser, updateUser };
