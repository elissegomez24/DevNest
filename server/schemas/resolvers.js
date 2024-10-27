const { User, Job, Post } = require('../models');
const mongoose = require('mongoose');
const { AuthenticationError, signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    User: async () => {
      const users = await User.find({}).populate('jobs');
      return users.map(user => ({
        ...user.toObject(),
        jobs: user.jobs || []
      }));
    },
    oneUser: async (parent, { user }) => {
      return User.findOne({ _id: user });
    },
    Job: async () => {
      const data = Job.find({});
      console.log(data);
      return Job.find({});
    },
    OneJob: async (parent, { jobId }) => {
      console.log(Job);
      return Job.findOne({ _id: jobId });
    },
    Post: async () => {
      const data = await Post.find({});
      console.log(data);
      return data;
    },
  },
  Mutation: {
    addUser: async (parent, { userName, password }) => {
      try {
        const existingUser = await User.findOne({ userName });
        if (existingUser) {
          throw new Error('Username already exists');
        }
        const newUser = new User({ userName, password });
        console.log(newUser);
        const savedUser = await newUser.save();
        return savedUser;
      } catch (error) {
        console.error('Error adding user:', error);
        throw new Error(`Failed to add user: ${error.message}`);
      }
    },
    addSkill: async (parent, { UserId, skill }) => {
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: UserId },
          { $addToSet: { skills: skill } },
          { new: true, runValidators: true }
        );

        if (!updatedUser) {
          throw new Error('User not found');
        }

        return updatedUser;
      } catch (error) {
        throw new Error(`Failed to add skill: ${error.message}`);
      }
    },
    removeSkill: async (parent, { UserId, skill }) => {
      return User.findOneAndUpdate(
        { _id: UserId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
    addJobToUser: async (parent, { userId, jobId }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { jobs: jobId } },
        { new: true, runValidators: true }
      ).populate('jobs');

      if (!updatedUser) {
        throw new Error('User not found');
      }

      return {
        ...updatedUser.toObject(),
        jobs: updatedUser.jobs || []
      };
    },
    removeJobFromUser: async (parent, { userId, jobId }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { jobs: jobId } },
        { new: true }
      ).populate('jobs');

      if (!updatedUser) {
        throw new Error('User not found');
      }

      const removedJob = !updatedUser.jobs.some(job => job._id.toString() === jobId);

      return {
        ...updatedUser.toObject(),
        jobs: updatedUser.jobs || []
      };
    },
 
      // Create the post with the associated user
      addPost: async (parent, { title, text }, context) => {
        const post = await Post.create({
          title,
          text,
          user: {
            userName: "User",
            pfp: "/defaultpfp.PNG"
          }
        });
      return post;
    },

    login: async (parent, { userName, password }) => {
      console.log(userName, password);
      const user = await User.findOne({ userName: userName });

      if (!user) {
          throw AuthenticationError;
      }

      const isMatch = await user.isCorrectPassword(password);
      if (!isMatch) {
          throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
  },

  logout: async (_, __, { user }) => {
    // Logic to handle user logout, e.g., clearing session or token
    // If you're using JWT, just inform the client to remove the token
    return { success: true, message: "Logged out successfully." };
},
  },
};

module.exports = resolvers;
