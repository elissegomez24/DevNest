const { User, Job, Post } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    // Fetch all users and populate their jobs
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

    // Fetch all jobs
    Job: async () => {
      try {
        const jobs = await Job.find({});
        console.log(jobs);
        return jobs;
      } catch (error) {
        console.error('Error fetching jobs:', error);
        throw new Error('Failed to fetch jobs');
      }
    },

    // Fetch one job by ID
    OneJob: async (parent, { jobId }) => {
      console.log(Job);
      return Job.findOne({ _id: jobId });
    },

    // Fetch all posts
    posts: async () => {
      return await Post.find({});
    }
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
        throw new AuthenticationError('No user found with this email');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // Sign token after successful login
      const token = signToken(user);
      return { token, user };
    },

    // Add a skill to a user
    addSkill: async (parent, { UserId, skill }, context) => {
      // Check if the user is logged in
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in to add a skill');
      }

      try {
        // Update the user by adding the skill to their skills array
        const updatedUser = await User.findOneAndUpdate(
          { _id: UserId },
          { $addToSet: { skills: skill } }, // Use $addToSet to avoid duplicates
          { new: true, runValidators: true }
        );

        // Handle the case where the user is not found
        if (!updatedUser) {
          throw new Error('User not found');
        }

        // Return the updated user
        return updatedUser;
      } catch (error) {
        console.error('Error adding skill:', error);
        throw new Error(`Failed to add skill: ${error.message}`);
      }
    },

    // Remove a skill from a user
    removeSkill: async (parent, { UserId, skill }) => {
      return User.findOneAndUpdate(
        { _id: UserId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },

    // Add a job to a user
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
        jobs: updatedUser.jobs || [],
      };
    },

    addJobToUser: async (parent, { userId, jobId }) => {
      try {
        // Fetch the job by its ID
        const job = await Job.findById(jobId);
        if (!job) {
          throw new Error('Job not found');
        }

        // Add the job to the user's jobs array
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { jobs: jobId } },
          { new: true, runValidators: true }
        ).populate('jobs');

        if (!updatedUser) {
          throw new Error('User not found');
        }

        // Return the user object and the job details
        return {
          user: {
            _id: updatedUser._id,
            userName: updatedUser.userName,  // Ensure the userName is included
          },
          job: {
            _id: job._id,
            name: job.name,
            description: job.description,
            pay: job.pay,
          },
        };
      } catch (error) {
        console.error('Error adding job to user:', error);
        throw new Error('Failed to add job to user');
      }
    },

    // Remove a job from a user
    removeJobFromUser: async (parent, { userId, jobId }, context) => {
      // Check if the user is logged in
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in to remove a job');
      }

      try {
        // Verify that the job exists
        const job = await Job.findById(jobId);
        if (!job) {
          throw new Error('Job not found');
        }

        // Update the user by removing the job from their jobs array
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          { $pull: { jobs: jobId } },  // Use $pull to remove the job
          { new: true, runValidators: true }
        ).populate('jobs'); // Populate jobs if you want to return them

        // Handle the case where the user is not found
        if (!updatedUser) {
          throw new Error('User not found');
        }

        // Return the user object and the job details
        return {
          user: {
            _id: updatedUser._id,
            userName: updatedUser.userName,
          },
          job: {
            _id: job._id,
            name: job.name,
            description: job.description,
            pay: job.pay,
          },
        };
      } catch (error) {
        console.error('Error removing job:', error);
        throw new Error(`Failed to remove job: ${error.message}`);
      };
    },


    addPost: async (parent, { title, text }) => {
      

      const post = await Post.create({
        title,
        text,
        user: {
          userName: 'Developer',
          pfp: 'default.PNG'
        }
      });

      return post;
    }
  },
};

module.exports = resolvers;
