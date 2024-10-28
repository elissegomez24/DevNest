const mongoose = require('mongoose');

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Ensure this matches your User model name
    required: true,
  },
    userName: {
      type: String,
      required: true,
    },
    pfp: {
      type: String,
    }
  }
});

module.exports = mongoose.model('Post', PostSchema);
