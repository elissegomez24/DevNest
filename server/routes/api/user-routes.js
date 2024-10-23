const router = require('express').Router();
const {
    createJob,
    getAllJobs,
    getSingleJob,
    updateJob,
    deleteJob,
} = require('../../controllers/job-controller');

// Import middleware
const { authMiddleware } = require('../../utils/auth');

// Route for creating a new job posting
router.route('/').post(authMiddleware, createJob).get(getAllJobs);

// Route for a specific job posting
router.route('/:jobId').get(getSingleJob).put(authMiddleware, updateJob).delete(authMiddleware, deleteJob);

module.exports = router;
