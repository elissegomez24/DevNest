const { User, Job, Post } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    User: async () => {
      const users = await User.find({}).populate('jobs');
      return users.map(user => ({
        ...user.toObject(),
        jobs: user.jobs || []
      }));
    },
    oneUser: async (parent, { UserId }) => {
      return User.findOne({ _id: UserId });
    },
    Job: async () => {
      const data = Job.find({});
      console.log(data);
      return Job.find({});
    },
    OneJob: async (parent, { jobId }) => {
      console.log(job);
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
        const newUser = await User.create({ userName, password });

        // Sign token after successful user creation
        const token = signToken(newUser);

        return { token, user: newUser };
      } catch (error) {
        console.error('Error adding user:', error);
        throw new Error(`Failed to add user: ${error.message}`);
      }
    },

    login: async (parent, { userName, password }) => {
      const user = await User.findOne({ userName });
      if (!user) {
        throw new AuthenticationError('No user found with this username');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // Sign token after successful login
      const token = signToken(user);
      return { token, user };
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

      return {
        ...updatedUser.toObject(),
        jobs: updatedUser.jobs || []
      };
    },
    

      addPost: async (parent, { title, text }, context) => {
        
        if (!context.user) {
          throw new AuthenticationError('You need to be logged in to create a post');
        }
        
        const post = await Post.create({
          title,
          text,
          user: {
            userName: context.user.userName, 
            pfp: context.user.pfp
          }
        });
      
        return post;
      }
  },
};

module.exports = resolvers;
