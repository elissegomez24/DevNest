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
