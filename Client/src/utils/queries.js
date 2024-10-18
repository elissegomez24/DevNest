import { gql } from "@apollo/client";

const GET_JOB = gql`
  query GetJob($jobId: ID!) {
    job(id: $jobId) {
      _id
      name
      description
      pay
    }
  }
`;
