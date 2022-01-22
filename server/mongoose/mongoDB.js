const { connect} = require("mongoose");
const chalk = require("chalk");
require("dotenv").config();

module.exports = connect(
  `mongodb+srv://elzo:${process.env.PAS}@ertodatabase.ilvau.mongodb.net/ertoDataBase?retryWrites=true&w=majority`,
  () => {
    console.log(chalk.yellow("mongoDB connected"));
  },
  (e) => console.error(e)
);
