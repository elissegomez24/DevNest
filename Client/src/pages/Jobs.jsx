import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from "@apollo/client";

// Separate the queries into two distinct constants
export const GET_USER = gql`
  query User {
    User {
      _id
      userName
    }
  }
`;

export const GET_JOB = gql`
  query Job {
    Job {
      _id
      name
      description
      pay
    }
  }
`;

export default function Job() {
  const { jobId } = useParams(); // Get jobId from URL parameters

  // Use only one query in useQuery hook
  const { loading, error, data } = useQuery(GET_JOB, {
    variables: { jobId }, // Pass the jobId to the query as a variable
  });

  return (
    <div>
      {/* Job Page Intro Section */}
      <h1>Job Details</h1>
      <p>Welcome to the Job Details Page. Here you can find details about the selected position.</p>

      {/* Job Section Design */}
      <section className="job" id="job">
        {loading ? (
          <p>Loading job...</p>
        ) : error ? (
          <p>Error loading job: {error.message}</p>
        ) : data?.job ? (
          <div className="job-box" key={data.job._id}>
            <div className="job-info">
              <h4>{data.job.name}</h4>
              <p>{data.job.description}</p>
              <p>Pay: ${data.job.pay}</p>
            </div>
            <div className="job-links">
              {/* Replace with job-specific links */}
              <a href="#apply" aria-label="Apply for Job">
                <i className="bx bx-link-external"></i> Apply
              </a>
              <a href="#details" aria-label="View Job Details">
                <i className="bx bx-info-circle"></i> Details
              </a>
            </div>
          </div>
        ) : (
          <p>No job found</p> // Handle case where no job is returned
        )}
      </section>
    </div>
  );
}