const path = require("path");
const router = require("express").Router();
const db = require("../models/user");

router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

router.post("/api/saveUsers", function (req, res) {
    db.create({name: "Steve"});
})

module.exports = router;