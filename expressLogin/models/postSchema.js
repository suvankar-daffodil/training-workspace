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
    likes: [String],
    comments: [{ name: String, body: String, picture: String }]
  },
  {
    versionKey: false
  }
);

let Post = mongoose.model("post", postSchema);

module.exports = Post;
