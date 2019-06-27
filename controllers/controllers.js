const path = require("path");
const router = require("express").Router();
const db = require("../models/user");

router.post("/api/create/candidate", function (req, res) {
    console.log(req.body);
    db.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json(err));
})

module.exports = router;