import { gql } from "@apollo/client";

export const GET_JOB = gql`
query User {
  User {
    _id
    username
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
