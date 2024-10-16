import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom"; // If using react-router for routing

// GraphQL query to fetch a single job
const GET_JOB = gql`
  query Query($jobId: ID!) {
    OneJob(jobId: $jobId) {
      _id
      name
      description
      pay
    }
  }
`;

export default function Job() {
  const { jobId } = useParams(); // Get jobId from URL parameters
  const { loading, error, data } = useQuery(GET_JOB, {
    variables: { jobId }, // Pass jobId as a variable
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
        ) : data.OneJob ? ( // Check if OneJob exists
          <div className="job-box" key={data.OneJob._id}>
            <div className="job-info">
              <h4>{data.OneJob.name}</h4>
              <p>{data.OneJob.description}</p>
              <p>Pay: ${data.OneJob.pay}</p>
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
