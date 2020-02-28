const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    firstname:String,
    lastname: String,
    gender: String,
    googleId: String,
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
