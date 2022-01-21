const { connect, model } = require("mongoose");
const chalk = require("chalk");

module.exports = connect(
  "mongodb+srv://elzo:XhxnvNubdu@ertodatabase.ilvau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => {
    console.log(chalk.yellow("mongoDB connected"));
  },
  (e) => console.error(e)
);
