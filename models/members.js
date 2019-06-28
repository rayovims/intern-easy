const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    username: String,
    password: String,
    name: String,
    role: String
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;