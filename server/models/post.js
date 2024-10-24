const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: String,
  text: String,
  user: {
    userName: String,
    pfp: String
  }
});

const Post = model('Post', postSchema);

module.exports = Post;
