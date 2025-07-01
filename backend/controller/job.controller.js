const jobModel = require("../model/job.model");

const createJob = async (req, res) => {
  try {
    console.log(req.body);
    await jobModel.create(req.body); // use to create new
    res.json({
      success: true,
      message: " job created succesfully ",
    });

  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Invalid data",
    });
  }
};

const listJob = async(req, res) => {
  const jobs = await jobModel.find();
  res.json({
    success: true,
    message: "list job api",
    result: jobs
  });
};

const updateJob = (req, res) => {
  res.json({
    success: true,
    message: "job are upadted",
  });
};

const deleteJob = (req, res) => {
  res.json({
    success: true,
    message: "job are deleted",
  });
};

const jobController = {
  createJob,
  listJob,
  updateJob,
  deleteJob,
};

module.exports = jobController;
