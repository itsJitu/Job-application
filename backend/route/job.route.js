const express = require("express");

const router = express.Router();

const jobController = require("../controller/job.controller");



router.post("/create", jobController.createJob);

router.get("/list", jobController.listJob);

router.patch("/update",jobController.updateJob);

router.delete("/delete", jobController.deleteJob);


module.exports = router;