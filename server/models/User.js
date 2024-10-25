const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    pfp: {
      type: String,
      default: '/defaultpfp.PNG', // You can set a default image
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
        default: [],
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Hash user password before saving
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Add virtual property for `jobCount` to count jobs
userSchema.virtual('jobCount').get(function () {
  return this.jobs.length;
});

// Add virtual property for `postCount` to count posts
userSchema.virtual('postCount').get(function () {
  return this.posts.length;
});

const User = model('User', userSchema);

module.exports = User;
