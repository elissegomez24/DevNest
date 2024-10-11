const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    autoIncrement: true,
  },
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
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],
});

const User = model('User', userSchema);

module.exports = User;