const path = require("path");
const router = require("express").Router();
const db = require("../models");

router.post("/api/create/candidate", function (req, res) {
    db.IdealCandidates.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json(err));
})

router.get("/api/get/matching/candidates", function (req, res) {

    //for now returning everything eventually get query and enter here
    //first im going to need an ideal candidate to be created, then im going to 
    //need 

    db.Users.find({})
        .then(candidates => res.json(candidates))
        .catch(err => res.json(err));
})

module.exports = router;