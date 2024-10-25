import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ONE_JOB } from '../utils/queries';
import { ADD_POST } from '../utils/mutations';
import { useState } from 'react';
import Footer from '../components/Footer';

const JobDetail = () => {
  const { jobId } = useParams(); // Get jobId from URL parameters

  // Use the useQuery hook to fetch job details
  const { loading, error, data } = useQuery(QUERY_ONE_JOB, {
    variables: { jobId }, // Pass the jobId to the query as a variable
  });

  // Define the mutation for adding a post
  const [addPost] = useMutation(ADD_POST, {
    onCompleted: (data) => {
      console.log('Post added:', data);
      // Optionally, reset form or show success message here
    },
    onError: (error) => {
      console.error('Error adding post:', error);
    },
  });

  const [postContent, setPostContent] = useState('');

  // Function to handle adding the post
  const handleAddPost = async (event) => {
    event.preventDefault();
    try {
      await addPost({
        variables: {
          jobId,
          content: postContent, // Use the state for post content
        },
      });
      setPostContent(''); // Reset post content after submission
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Job Details
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to the Job Details Page. Here you can find details about the selected position.
          </p>
        </div>

        <hr />

        {/* Job Section Design */}
        <section className="job" id="job">
          {loading ? (
            <p>Loading job...</p>
          ) : error ? (
            <p>Error loading job: {error.message}</p>
          ) : data?.OneJob ? (
            <div className="job-box" key={data.OneJob._id}>
              <div className="job-info p-5 bg-slate-700 rounded-xl border-2 border-slate-900">
                <h4 className="text-2xl font-semibold text-white">{data.OneJob.title}</h4>
                <p className="text-gray-300">{data.OneJob.description}</p>
                <p className="text-gray-300">Pay: ${data.OneJob.pay}</p>
              </div>
              <div className="job-links mt-4 flex justify-between">
                <button onClick={handleAddPost} aria-label="Add Post" className="bg-blue-500 text-white px-4 py-2 rounded">
                  <i className="bx bx-link-external"></i> Add Post
                </button>
                <a href="#details" aria-label="View Job Details" className="text-blue-500 underline">
                  <i className="bx bx-info-circle"></i> Details
                </a>
              </div>
            </div>
          ) : (
            <p>No job found</p> // Handle case where no job is returned
          )}
        </section>

        <hr />

        {/* Post Submission Form */}
        <div className="flex justify-center items-center mt-10 mb-10">
          <div className="w-full max-w-md p-5 bg-slate-700 rounded-xl border-2 border-slate-900">
            <form onSubmit={handleAddPost}>
              <label htmlFor="postContent" className="block text-sm font-medium leading-6 text-white text-center">
                Share Your Thoughts:
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <textarea
                  id="postContent"
                  name="postContent"
                  placeholder="Write your thoughts here..."
                  rows="4"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-6 mb-16 flex items-center justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Render the Footer Component */}
      <Footer />
    </>
  );
};

export default JobDetail;
