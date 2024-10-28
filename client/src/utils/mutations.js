import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($userName: String!, $email: String!, $password: String!) {
  addUser(userName: $userName, email: $email, password: $password) {
    token
    user {
      _id
      userName
      email
      password
    }
  }
}
`;

export const ADD_LOGIN = gql`
mutation Login($userName: String!, $password: String!) {
  login(userName: $userName, password: $password) {
    token
    user {
      _id
      userName
      password
    }
  }
}
`;

export const ADD_JOB = gql`
mutation AddJobToUser($userId: ID!, $jobId: ID!) {
  addJobToUser(userId: $userId, jobId: $jobId) {
    user {
      _id
      userName
    }
    job {
      _id
      name
      description
      pay
    }
  }
}
`;

export const ADD_POST = gql`
mutation AddPost($title: String!, $text: String!) {
  addPost(title: $title, text: $text) {
    _id
    title
    text
    user {
      _id
      userName
      pfp
    }
  }
}
`;

export const ADD_SKILL = gql`
mutation AddSkill($userId: ID!, $skill: String!) {
  addSkill(UserId: $userId, skill: $skill) {
    _id
    userName
    skills
  }
}
`;

export const REMOVE_JOB = gql`
mutation RemoveJobFromUser($userId: ID!, $jobId: ID!) {
  removeJobFromUser(userId: $userId, jobId: $jobId) {
    user {
      _id
      userName
    }
    job {
      _id
      name
      description
      pay
    }
  }
}
`;

export const REMOVE_SKILL = gql`
mutation RemoveSkill($userId: ID!, $skill: String!) {
  removeSkill(UserId: $userId, skill: $skill) {
    _id
    userName
    skills
  }
}
`; 

export const SIGN_OUT = gql`
mutation SignOut {
  logout {
    success
    message
  }
}
`;

