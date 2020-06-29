const db = require("../models");
const { ESRCH } = require("constants");

module.exports = (app) => {

    ///////////////////  GETS   /////////////////////////////////
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).sort({ "_id": -1 }).limit(1).then(data => {
            console.log(data)
            res.json(data)
        })
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).sort({ "_id": -1 }).limit(7)
            ////I have set a limit of 7 because the stats.js file shows 7 day graphs
            .then(data => {
                console.log(data);
                res.json(data);
            })
    })

    ////////////////////PUTS//////////////////////////////////
    app.put("/api/workouts/:id", (res, req) => {
        db.Workout.findOneAndUpdate(
            {
                _id: req.params._id
            },
            {
                "$push": { exercises: req.body }
            }
        )
    });

    ///////////// POSTS  //////////////////
    app.post("api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(data => {
                res.json(data)
            });
    })
};