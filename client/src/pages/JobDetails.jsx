import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ONE_JOB } from '../utils/queries';

const JobDetail = () => {
  const { jobId: paramJobId } = useParams();
  const jobId = paramJobId || ''; 

  // Fetch job details
  const { loading, error, data } = useQuery(QUERY_ONE_JOB, {
    variables: { jobId },
  });


  // Handle Apply Now button click
  const handleApply = () => {
    window.alert('Thank you for applying for the position!');
  };

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-10 text-center">
          {/* Job Details Heading and Description moved here */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-10">
            Job Details
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover more about this position and share your thoughts.
          </p>
        </div>

        <div className="flex justify-center items-start mt-4 mb-10 max-w-7xl mx-auto">
          {/* Right side: Job details and Apply button */}
          <div className="bg-slate-700 p-8 rounded-lg shadow-md w-1/2 mx-5 mt-4">
            {loading ? (
              <p className="text-white text-center">Loading job...</p>
            ) : error ? (
              <p className="text-red-400 text-center">Error loading job: {error.message}</p>
            ) : data?.OneJob ? (
              <div className="text-center">
                <p className="text-2xl font-semibold text-white mb-4">
                  {data.OneJob.name} {/* Display job name here */}
                </p>
                <p className="text-gray-300 mb-2">Description: {data.OneJob.description}</p>
                <p className="text-gray-300">Pay: ${data.OneJob.pay}</p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-200"
                  onClick={handleApply}
                >
                  Apply Now
                </button>
              </div>
            ) : (
              <p className="text-white text-center">No job found</p>
            )}
          </div>
        </div>

      </div>
    </>
  );
};

export default JobDetail;