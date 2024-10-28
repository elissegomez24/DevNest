const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  user: {
    userName: {
      type: String,
      required: true,
    },
    pfp: {
      type: String,
    }
  }
});

const Post = model('Post', postSchema);

module.exports = Post;