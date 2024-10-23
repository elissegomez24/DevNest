const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    password: String!
    skills: [String]!
    jobs: [Job]
    posts : [Post]!
  }

  type Job {
  _id: ID!
  name: String!
  description: String!
  pay: Int!
  }

  type Post {
  _id: ID!
  title: String!
  text:  String!
  user:  User!
  }

type Auth {
  token: ID!
  user: User
}

  # Important for useQuery: We define our Query type to inform our entry points
  # The Query type is built-in to GraphQL, so we only need to extend it to include which kinds of information we plan to request in our application

  type Query {
    User: [User]!
    oneUser(user: ID!): User

    Job: [Job]!
    OneJob(jobId: ID!): Job

    Post: [Post]!
    post(post: ID!): Post
  }

  # Important for useMutation: We define our Mutation type to inform our entrypoints

  type Mutation {
    addUser(userName: String!, password: String!): User
    addSkill(UserId: ID!, skill: String!): User
    removeSkill(UserId: ID!, skill: String!): User
    addJobToUser(userId: ID!, jobId: ID!): User
    removeJobFromUser(userId: ID!, jobId: ID!): User
    addPost(title: String!, text: String! ): Post
  }
`;

module.exports = typeDefs;



// {  "userId": "670d8f4dc544c1e40c7df392",
//   "jobId": "670d9f967f14478a2fe42387"
// "jobId": "670d9f967f14478a2fe42388"
// }
