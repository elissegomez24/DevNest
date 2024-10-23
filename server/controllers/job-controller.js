// job-controller.js
const Job = require('../models/Job'); // Example import of Job model

// Create a new job posting
const createJob = async (req, res) => {
    try {
        const newJob = await Job.create({ ...req.body, userId: req.user._id }); // Assuming you save the userId
        res.status(201).json(newJob);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Get all job postings
const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.json(jobs);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Get a single job posting by ID
const getSingleJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found!' });
        }
        res.json(job);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Update a job posting
const updateJob = async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(req.params.jobId, req.body, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found!' });
        }
        res.json(updatedJob);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Delete a job posting
const deleteJob = async (req, res) => {
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.jobId);
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found!' });
        }
        res.json({ message: 'Job deleted successfully!' });
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    createJob,
    getAllJobs,
    getSingleJob,
    updateJob,
    deleteJob,
};
