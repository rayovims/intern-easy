const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    major: String,
    GPA: String,
    skills: [String]
});

const User = mongoose.model("User", userSchema);

module.exports = User;