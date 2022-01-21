const express = require("express");
const apiRouter = express.Router();

const {
  addUser,
  getAllUsers,
  getUser,
  deleteUser,
  editUser,
} = require("../controllers/controller");

apiRouter.get("/users", getAllUsers);

apiRouter.get("/user/:name", getUser);

apiRouter.post("/user/add", addUser);

apiRouter.put("/user/edit/:name", editUser);

apiRouter.delete("/user/:name", deleteUser);



module.exports = apiRouter;
