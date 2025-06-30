const jobModel = require('../model/job.model');

const createJob = async (req, res) => {
    const jobs = await jobModel.create(req.body);
    res.json({
        success:true,
        message: "create job api"
    })
};

const listJob = (req, res) => {
    res.json({
        success:true,
        message: "list job api"
    });
};

const updateJob = (req, res) => {
    res.json({
        success:true,
        message: "job are upadted"
    });
};

const deleteJob = (req, res) => {
    res.json({
        success: true,
        message: "job are deleted"
    });
};

const jobController = {
    createJob,
    listJob,
    updateJob,
    deleteJob
};

module.exports = jobController;