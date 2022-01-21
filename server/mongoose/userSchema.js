const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  cash: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  credit: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
});

const User = model("UsersDadaBase", userSchema);

module.exports = User ;
