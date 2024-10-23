import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($userName: String!, $password: String!) {
  addUser(userName: $userName, password: $password) {
    _id
    userName
    password
  }
}
`;

export const ADD_JOB = gql`
mutation AddJobToUser($userId: ID!, $jobId: ID!) {
  addJobToUser(userId: $userId, jobId: $jobId) {
    _id
    userName
    password
    jobs {
      _id
      name
      description
      pay
    }
  }
}
`;

export const ADD_POST = gql`
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
    _id
    userName
    password
    jobs {
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
