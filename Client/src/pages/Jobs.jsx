import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

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

export default function Job() {
  const { jobId } = useParams();
  const { loading, error, data } = useQuery(GET_JOB, {
    variables: { jobId },
  });

  return (
    <div>
      <h1>Job Details</h1>
      <p>Welcome to the Job Details Page. Here you can find details about the selected position.</p>
      
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
              <a href="#apply" aria-label="Apply for Job">
                <i className="bx bx-link-external"></i> Apply
              </a>
              <a href="#details" aria-label="View Job Details">
                <i className="bx bx-info-circle"></i> Details
              </a>
            </div>
          </div>
        ) : (
          <p>No job found</p>
        )}
      </section>
    </div>
  );
}