const db = require("../models");
const { ESRCH } = require("constants");
const { isUndefined } = require("util");

module.exports = (app) => {

    ///////////////////  GETS   /////////////////////////////////
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => {
            res.json(data)
        })
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).sort({ "_id": -1 }).limit(7)
            ////I have set a limit of 7 because the stats.js file shows 7 day graphs
            .then(data => {
                console.log(data.exercises);
                res.json(data);
            })
    })

    ////////////////////PUTS//////////////////////////////////
    app.put("/api/workouts/:id", (req, res) => {
        console.log("=".repeat(50) + "ln25")

        db.Workout.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                "$push": { exercises: req.body }
            }
        ).then(data => {
            res.json(data)
        }).catch(err => {
            console.log(err);
        })

    });

    ///////////// POSTS  //////////////////
    app.post("api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(data => {
                res.json(data)
            }).catch{
            err => {
                console.log(err);
            }
        }
    })
};