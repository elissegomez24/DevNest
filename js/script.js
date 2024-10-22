document.getElementById('jobSearchForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const resultsDiv = document.getElementById('results');
  
    resultsDiv.innerHTML = '';
  
    const jobs = await fetchJobs(title, category, description);
  
    if (jobs.length === 0) {
      resultsDiv.innerHTML = '<p>No jobs found.</p>';
    } else {
      jobs.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('job-listing');
        jobDiv.innerHTML = `
          <h3>${job.title}</h3>
          <p>Category: ${job.category}</p>
          <p>${job.description}</p>
        `;
        resultsDiv.appendChild(jobDiv);
      });
    }
  });
  
  async function fetchJobs(title, category, description) {
    const allJobs = [
      { title: 'Software Engineer', category: 'IT', description: 'Develop software applications.' },
      { title: 'Product Manager', category: 'Management', description: 'Manage product development.' },
      { title: 'Graphic Designer', category: 'Design', description: 'Create visual content.' },
    ];
  
    return allJobs.filter(job =>
      job.title.toLowerCase().includes(title.toLowerCase()) &&
      job.category.toLowerCase().includes(category.toLowerCase()) &&
      job.description.toLowerCase().includes(description.toLowerCase())
    );
  }  
