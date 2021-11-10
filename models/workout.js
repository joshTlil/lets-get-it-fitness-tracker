const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
      exercises: [
    {
    type: {
        type: String,
        trim: true,
        required: "Needs a type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Needs a name of the workout"
    },
    duration: {
        type: Number,
        // required: "Needs the time length"
    },
    weight: {
        type: Number,
        // required: "Needs the weight for what your repping"
    },
    reps: {
        type: Number,
        // required: "How many reps are you doing"
    },
    sets: {
        type: Number,
        // required: "How many sets are you doing"
    }
 }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;