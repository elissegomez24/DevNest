const typeDefs = `
  type User {
    _id: ID
    userName: String
    password: String!
    skills: [String]!
    jobs: [Job]
    posts: [Post]!
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
    text: String!
    user: User!
  }

  type Query {
    users: [User]!
    oneUser(userId: ID!): User
    jobs: [Job]!
    oneJob(jobId: ID!): Job
    posts: [Post]!
    post(postId: ID!): Post
  }

  type Mutation {
    addUser(userName: String!, password: String!): User
    addSkill(UserId: ID!, skill: String!): User
    removeSkill(UserId: ID!, skill: String!): User
    addJobToUser(userId: ID!, jobId: ID!): User
    removeJobFromUser(userId: ID!, jobId: ID!): User
    addPost(title: String!, text: String!): Post
  }
`;
