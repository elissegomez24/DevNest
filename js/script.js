document.getElementById('jobSearchForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('title').value.toLowerCase();
  const category = document.getElementById('category').value.toLowerCase();
  const description = document.getElementById('description').value.toLowerCase();
  const resultsDiv = document.getElementById('results');

  resultsDiv.innerHTML = '';

  // filters seeded data
  const filteredJobs = jobData.filter(job => {
    const matchTitle = job.title.toLowerCase().includes(title);
    const matchCategory = job.category.toLowerCase().includes(category);
    const matchDescription = job.description.toLowerCase().includes(description);

    return matchTitle && matchCategory && matchDescription && matchLocation;
  });

  // displays filtered data
  if (filteredJobs.length === 0) {
    resultsDiv.innerHTML = '<p>No jobs found.</p>';
  } else {
    filteredJobs.forEach(job => {
      const jobDiv = document.createElement('div');
      jobDiv.classList.add('job-listing');
      jobDiv.innerHTML = `
        <h3>${job.title}</h3>
        <p>Category: ${job.category}</p>
        <p>Description: ${job.description}</p>
        <p>Location: ${job.location}</p>
      `;
      resultsDiv.appendChild(jobDiv);
    });
  }
});