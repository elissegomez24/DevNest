import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom"; // Use useNavigate from React Router

"use client";

function JobCards({ jobs }) {
  const navigate = useNavigate(); // Initialize the React Router navigation

  const handleJobClick = (jobId) => {
    // Use navigate to go to the job details page
    navigate(`/JobDetails/${jobId}`);
  };

  return (
    <div className="flex flex-col items-center w-1/2 mx-auto">
      {jobs?.map((job) => (
        <button key={job._id} className="w-full">
          <Card
            onClick={() => handleJobClick(job._id)} // Attach the click handler
            className="w-full p-4 mb-6 border-4 border-slate-800 bg-slate-700 text-white hover:bg-slate-600 transition-colors">
            <div className="flex items-center">
              <div className="flex-grow">
                <h5 className="mb-2 text-2xl font-medium">
                  {job.name}
                </h5>
                <div className="mt-4">
                  <span className="text-xl font-bold">
                    ${job.pay}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </button>
      ))}
    </div>
  );
}

export default JobCards;
