import  { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // filters seeded data
    const results = seeds.filter((job) => {
      const matchTitle = job.title.toLowerCase().includes(title.toLowerCase());
      const matchCategory = job.category.toLowerCase().includes(category.toLowerCase());
      const matchDescription = job.description.toLowerCase().includes(description.toLowerCase());

      return matchTitle && matchCategory && matchDescription;
    });

    setFilteredJobs(results);
  };

  return (
    <div className="container">
      <h1>Job Search</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Job Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter job title"
        />

        <label htmlFor="category">Job Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter job category"
        />

        <label htmlFor="description">Job Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter job description"
        />

        <button type="submit">Search Jobs</button>
      </form>

      <div className="results">
        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredJobs.map((job, index) => (
            <div key={index} className="job-listing">
              <h3>{job.title}</h3>
              <p>Category: {job.category}</p>
              <p>Description: {job.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;