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

const updateJob = async (req, res) => {
  console.log(req.body);
  const jobs = await jobModel.updateOne({
    _id: req.body._id
  }, {
    $set: {
      title: req.body.title
    }
  }) 
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
