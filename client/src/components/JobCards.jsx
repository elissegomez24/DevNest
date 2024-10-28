import { Card } from "flowbite-react";
"use client";

function JobCards({ jobs }) {
    console.log('Jobs data:', jobs);
  return (
    <div className="flex flex-col items-center w-1/2 mx-auto">
      {jobs.map((job) => (
        <Card key={job._id} className="w-full p-4 mb-6 border-4 border-slate-800 bg-slate-700 text-white">
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
      ))}
    </div>
  );
}

export default JobCards;