const path = require("path");
const router = require("express").Router();
const db = require("../models/user");

router.get("/api/saveUsers", function (req, res) {
    db.create({name: "Raymundo", id: 1})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json(err));
})

module.exports = router;