const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title:{
        type: String
    },
    location: {
        type: String
    },
    minExp: {
        type: Number
    },
    salary: {
        type: Number
    },
    description: {
        type: String
    },
    company: {
        type: String
    },
    Skill: {
        type: [String]
    }
});

const jobModel = mongoose.model("jobs", jobSchema);

model.exports = jobModel;

