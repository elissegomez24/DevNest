const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    pfp: String
    password: String

    skills: [String]
    jobs: [Job]
    posts: [Post]
  }

  type Job {
  _id: ID
  name: String
  description: String
  pay: Int
  }

  type Post {
  _id: ID
  title: String
  text:  String
  user:  User
  }

type Auth {
  token: ID
  user: User
}

  type Query {
    User: [User]!
    oneUser(user: ID!): User

    Job: [Job]!
    OneJob(jobId: ID!): Job

    Post: [Post]!
    post(post: ID!): Post
    posts: [Post]!
  }


  type Mutation {
    addUser(userName: String!, password: String!): User
    addSkill(UserId: ID!, skill: String!): User
    removeSkill(UserId: ID!, skill: String!): User
    addJobToUser(userId: ID!, jobId: ID!): User
    removeJobFromUser(userId: ID!, jobId: ID!): User
    addPost(title: String!, text: String! ): Post
    login(userName: String!, password: String!): Auth
    logout: LogoutResponse # Add this line

  }

type LogoutResponse {
  success: Boolean
  message: String
}
`;

module.exports = typeDefs;
