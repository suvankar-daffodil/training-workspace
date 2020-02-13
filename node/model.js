const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  phone: Number,
  picture: String
});

let User = mongoose.model("user", userSchema);

module.exports = User;
