const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    googleId: String,
    name: String,
    password: String,
    email: String,
    phone: Number,
    picture: String
  },
  {
    versionKey: false
  }
);

let User = mongoose.model("user", userSchema);

module.exports = User;
