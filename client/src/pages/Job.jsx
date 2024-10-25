import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ONE_JOB } from '../utils/queries'; // Ensure this query is defined properly

const JobDetail = () => {
  const { jobId } = useParams(); // Get jobId from URL parameters

  // Use the useQuery hook to fetch job details
  const { loading, error, data } = useQuery(QUERY_ONE_JOB, {
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
        ) : data?.OneJob ? ( // Ensure you're accessing the right data structure
          <div className="job-box" key={data.OneJob._id}>
            <div className="job-info">
              <h4>{data.OneJob.title}</h4> {/* Change 'name' to 'title' based on your schema */}
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
};

export default JobDetail; // Export the JobDetail component
