const { db } = require("../models/Workout");

module.exports = (app) => {


    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => { res.json(data) })
    });
};