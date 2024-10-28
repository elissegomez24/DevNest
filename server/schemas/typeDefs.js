const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    pfp: String
    password: String
    skills: [Srting] 
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


type JobDetail {
  user: User 
  job: Job
}

type Skill {
  _id: ID
  userName: String!
  skills: [String] 
}

type RemoveJob {
  user: User 
  job: Job
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


  type Mutation {
  addUser(userName: String!, password: String!): Auth
  addSkill(UserId: ID!, skill: String!): Skill
  removeSkill(UserId: ID!, skill: String!): Skill
  addJobToUser(userId: ID!, jobId: ID!): JobDetail
  removeJobFromUser(userId: ID!, jobId: ID!): RemoveJob
  addPost(title: String!, text: String!): Post
  login(userName: String!, password: String!): Auth # <- Added login mutation here
  logout: LogoutResponse # Add this line
  }

type LogoutResponse {
  success: Boolean
  message: String
}
`;

module.exports = typeDefs;
