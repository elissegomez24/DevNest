const db = require('../config/connection');
const { Job } = require('../models');
const jobSeeds = require('./jobSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Job', 'jobs');
    
    await Job.create(jobSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
