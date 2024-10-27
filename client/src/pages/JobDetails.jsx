import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ONE_JOB } from '../utils/queries';
import { ADD_POST } from '../utils/mutations';
import { useState } from 'react';
import Footer from '../components/Footer';

const JobDetail = () => {
  const { jobId: paramJobId } = useParams();
  const jobId = paramJobId || '671af84365e63780c76508b1'; // Default to specified job ID if not in params
  const [postContent, setPostContent] = useState('');

  // Fetch job details
  const { loading, error, data } = useQuery(QUERY_ONE_JOB, {
    variables: { jobId },
  });

  // Add post mutation
  const [addPost] = useMutation(ADD_POST, {
    onCompleted: () => setPostContent(''), // Clear input after successful post
    onError: (error) => console.error('Error adding post:', error), // Log errors
  });

  // Submit handler for adding a post
  const handleAddPost = async (event) => {
    event.preventDefault();
    if (postContent.trim()) {
      try {
        await addPost({ variables: { jobId, content: postContent } });
      } catch (err) {
        console.error('Failed to add post:', err);
      }
    }
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
          {/* Removed the left side: Image template */}

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
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-200">
                  Apply Now
                </button>
              </div>
            ) : (
              <p className="text-white text-center">No job found</p>
            )}
          </div>
        </div>

        {/* Post Submission Form moved higher */}
        <div className="flex justify-center items-center mb-10">
          <div className="w-full max-w-md p-5 bg-slate-700 rounded-xl border-2 border-slate-900 mx-auto">
            <form onSubmit={handleAddPost}>
              <label htmlFor="postContent" className="block text-sm font-medium text-white text-center">
                Share Your Thoughts:
              </label>
              <textarea
                id="postContent"
                name="postContent"
                placeholder="Write your thoughts here..."
                rows="4"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="block w-full rounded-md py-2 px-3 text-gray-900 focus:ring-indigo-600"
              />
              <div className="mt-6 flex justify-center">
                <button type="submit" className="bg-slate-500 text-white px-3.5 py-2.5 rounded-md">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default JobDetail;
