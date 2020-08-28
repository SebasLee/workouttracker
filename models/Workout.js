const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cardio: {
        type: String,
    },
    jumpingjacks: {
        type: Boolean,
    },
    burpees: {
        type: Boolean,
    },
    pushups: {
        type: Boolean,
    },
    dips: {
        type: Boolean,
    },
    benchpress: {
        type: Boolean,
    },
    pullups: {
        type: Boolean,
    },
    dumbbellrow: {
        type: Boolean,
    },
    superman: {
        type: Boolean,
    },
    crunches: {
        type: Boolean,
    },
    bicycle: {
        type: Boolean,
    },
    leglifts: {
        type: Boolean,
    },
    planks: {
        type: Boolean,
    },
}, {timestamps: true});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
