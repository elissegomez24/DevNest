const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
  jobs:[ 
    {
      type: Schema.Types.ObjectId,
      ref: 'Job',
      default: [] 
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});



const User = model('User', userSchema);

module.exports = User;