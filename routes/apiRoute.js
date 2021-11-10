// Requiring the workout database model
const db = require("../models");
//Using module exports as a function using app for routing 
  module.exports = function(app) {
      //To get all the workouts
      app.get("/api/workouts", (req,res) => {
          db.Workout.find({}).then(dbWorkout => {
              res.json(dbWorkout)
          })
          .catch(err => {
            res.status(400).json(err);
          });
      })
     //This a post requesting creating an exercise specifically targeting exercise(req.body) inside the workout model
      app.post("/api/workouts", (req, res) => {
        db.Workout.create({exercises: req.body.exercises})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
     // This is a PUT request for finding the ID, using $inc to add up the duration, and using $push to push the exercise array into html document
    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
    
    });
//To get the range of all workouts
    app.get("/api/workouts/range", ({}, res) => {
        db.Workout.find({}).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
      });
  }
