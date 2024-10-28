const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: {
    type: String,
    required: true,
  },
    required: true,
  },
  text: {
    type: {
    type: String,
    required: true,
  },
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

module.exports = mongoose.model('Post', PostSchema);
