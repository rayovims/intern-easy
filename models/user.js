const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const idealCandidateSchema = new Schema({
    major: String,
    GPA: Number,
    skills: [String]
});

const IdealCandidate = mongoose.model("IdealCandidate", idealCandidateSchema);

module.exports = IdealCandidate;