const path = require("path");
const router = require("express").Router();
const db = require("../models");

router.post("/api/create/candidate", function (req, res) {
    db.IdealCandidates.remove({}).then(()=> {
        db.IdealCandidates.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    })
})

router.post("/api/login", function (req, res) {
    // db.Members.create({username: "ray@mail.com", password: "123456", name: "Raymundo Ojeda", role: "Hiring Manager"});
    db.Members.findOne(req.body)
        .then(loggedIn => {
            if(loggedIn !== null) {
                res.json(loggedIn);
            }
        });
})

router.get("/api/get/matching/candidates", function (req, res) {

    //for now returning everything eventually get query and enter here
    //first im going to need an ideal candidate to be created, then im going to 
    //need 

    db.IdealCandidates.find({}).then(candidate=>{

        var skillset = candidate[0].skills[0]

        db.Users.find({$and: [ {GPA: {$gt:candidate[0].GPA}} , {skills:{$elemMatch:{$eq: skillset}}} , {Major:{$eq:candidate[0].major}} ]})

        .then(users => {
            res.json(users)
        })

    })

    // db.Users.find({})
    //     .then(candidates => res.json(candidates))
    //     .catch(err => res.json(err));
})

router.get("/api/testing", function (req, res) {

    db.IdealCandidates.find({}).then(candidate=>{

        var skillset = candidate[0].skills[0]

        db.Users.find({$and: [ {GPA: {$gt:candidate[0].GPA}} , {skills:{$elemMatch:{$eq: skillset}}} , {Major:{$eq:candidate[0].major}} ]})

        .then(users => {

            res.json(users)

        })

    })

})

module.exports = router;