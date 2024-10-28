import { gql } from "@apollo/client";

export const GET_JOB = gql`
query User {
  User {
    _id
    userName
  }
}
  query Job {
  Job {
    _id
    name
    description
    pay
  }
}
`;

export const QUERY_ONE_JOB = gql`
  query OneJob($jobId: ID!) {
  OneJob(jobId: $jobId) {
    _id
    name
    description
    pay
  }
}
`;

export const GET_ALL_USERS = gql`
query GetAllUsers {
  users {
    _id
    userName
    skills
    jobs {
      _id
      name
      description
      pay
    }
  }
}
`;

export const GET_USER_BY_ID = gql`
query GetUserById($userId: ID!) {
  user(id: $userId) {
    _id
    userName
    skills
    jobs {
      _id
      name
      description
      pay
    }
  }
}
`;

export const GET_ALL_JOBS = gql`
query GetAllJobs {
  jobs {
    _id
    name
    description
    pay
  }
}
`;

// export const GET_ALL_POSTS = gql`
// query GetAllPosts {
//   posts {
//     _id
//     userId
//     content
//     createdAt
//   }
// }
// `;

export const GET_ALL_SKILLS = gql`
query GetAllSkills {
  skills {
    _id
    name
    users {
      _id
      userName
    }
  }
}
`;
