const mongoose = require("mongoose");

let postSchema = mongoose.Schema(
  {
    userId: String,
    userName: String,
    title: String,
    tag: String,
    picture: String,
    date: String,
    time: String,
    likes: Number,
    comments: [String]
  },
  {
    versionKey: false
  }
);

let Post = mongoose.model("post", postSchema);

module.exports = Post;
