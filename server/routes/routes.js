const express = require("express");
const apiRouter = express.Router();

const {
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
} = require("../controllers/controller");

apiRouter.get("/users", getAllUsers);

apiRouter.get("/user/:name", getUser);

apiRouter.post("/user/add", addUser);

apiRouter.put("/user/edit/:name", editUser);

apiRouter.delete("/user/:name", deleteUser);

apiRouter.delete("/users/", deleteAll);

apiRouter.get("/users/statistics", getllSortUsers);

apiRouter.put("/users/withdraw", withdraw);

apiRouter.put("/users/depositing", depositing);

apiRouter.put("/users/transferring", transferring);

module.exports = apiRouter;
