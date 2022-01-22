const User = require("../mongoose/userSchema");
const { findUser, updateUser } = require("../utils/utils");

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

const deleteAll = async (req, res) => {
  try {
    const allUsers = await User.find();
    if (allUsers.length >= 0) {
      await User.deleteMany({});
      res.status(200).send("All Users Has Been Deleted");
    } else {
      throw new Error(`Sorry There Are No Users To Delete`);
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

const getllSortUsers = async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).send(data.sort((a, b) => b.credit - a.credit));
  } catch (error) {
    res.status(400).send("error");
  }
};

const withdraw = async (req, res) => {
  const { name, withdraw } = req.body;
  try {
    const user = await findUser(name);
    if (user.length !== 0) {
      await updateUser(user, name, +withdraw);
      const updatedUser = await findUser(name);
      res.send(`You Have ${updatedUser[0].credit} on you accaount`);
    } else {
      throw new Error(`Sorry User With The Name ${name} Is Not Found`);
    }
  } catch (error) {
    res.status(404).send(error.toString());
  }
};

const depositing = async (req, res) => {
  const { name, depositing } = req.body;
  try {
    const user = await findUser(name);
    if (user.length !== 0) {
      if (user[0].cash - +depositing >= 0) {
        await updateUser(user, name, -+depositing);
        const updatedUser = await findUser(name);
        res
          .status(200)
          .send(`You Have ${updatedUser[0].credit} on you accaount`);
      } else {
        throw new Error(`Sorry No Cash`);
      }
    } else {
      throw new Error(`Sorry User With The Name ${name} Is Not Found`);
    }
  } catch (error) {
    res.status(404).send(error.toString());
  }
};

const transferring = async (req, res) => {
  const { name, sender, amount } = req.body;
  console.log(name, sender, amount);
  try {
    const receiver = await findUser(name);
    const transmitter = await findUser(sender);
    if (transmitter.length !== 0 && receiver.length !== 0) {
      if (transmitter[0].credit - amount >= 0) {
        await User.updateOne(
          { fullName: name },
          { credit: receiver[0].credit + +amount }
        );
        await User.updateOne(
          { fullName: sender },
          { credit: transmitter[0].credit - +amount }
        );
      } else {
        throw new Error(`Sorry ${sender}, You Dont Have Enough Money`);
      }
      res.send(
        `Transferring Was Successfully. ${name}, Your Balance Is ${transmitter[0].credit}. ${sender}, Balance Your Balance Is ${receiver[0].credit}.`
      );
    } else {
      throw new Error(
        `Sorry User With The Name ${name} or ${sender} Is Not Found`
      );
    }
  } catch (error) {
    res.send(error.toString());
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUser,
  deleteUser,
  editUser,
  getllSortUsers,
  withdraw,
  depositing,
  transferring,
  deleteAll,
};
