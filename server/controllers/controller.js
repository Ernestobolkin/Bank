const User = require("../mongoose/userSchema");
const chalk = require("chalk");
const findUser = require("../utils/utils");

const addUser = async (req, res) => {
  const { fullName, cash, credit } = req.body;
  try {
    const data = { fullName, cash, credit };
    await User.create(data);
    res
      .status(200)
      .send(`User By The Name ${fullName} Was Created Successfully`);
  } catch (error) {
    res.status(404).send(`Sorry The Name ${fullName} Is Already Taken`);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const responseData = await User.find();
    if (responseData.length !== 0) {
      res.status(200).send(responseData);
    } else {
      throw new Error("Sorry No Users To Show");
    }
  } catch (error) {
    res.status(404).send(error.toString());
  }
};

const getUser = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await findUser(name);
    if (response.length !== 0) {
      res.status(200).send(response);
    } else {
      throw new Error(`Sorry User With The Name ${name} Is Not Found`);
    }
  } catch (error) {
    res.status(404).send(error.toString());
  }
};

const deleteUser = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await findUser(name);
    if (response.length !== 0) {
      await User.deleteOne({ fullName: name });
      res.status(200).send(`The User ${name} Was Deleted Successfully`);
    } else {
      throw new Error(`Sorry User With The Name ${name} Is Not Found`);
    }
  } catch (error) {
    res.status(404).send(error.toString());
  }
};

const editUser = async (req, res) => {
  const { name } = req.params;
  const { cash, credit } = req.body;
  try {
    const response = await findUser(name);
    if (response.length !== 0) {
      await User.updateOne({ fullName: name }, { cash, credit });
      res.status(200).send(`The User ${name} Was Updated Successfully`);
    } else {
      throw new Error(`Sorry User With The Name ${name} Is Not Found`);
    }
  } catch (error) {
    res.status(404).send(error.toString());
  }
};

module.exports = { addUser, getAllUsers, getUser, deleteUser, editUser };
