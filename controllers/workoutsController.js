const express = require('express');
const db = require('../models');
const router = express.Router();

// WORKOUT MODEL
const WORKOUT = require('../models/Workout');

// New Workout 
router.get('/new', (req, res) => {
  res.render('new');
});

// Create Workout
router.post('/', (req, res) => {
  console.log(req.body);
  db.Workout.create(req.body, (err, newWorkout) => {
    if (err) return console.log(err);
    res.redirect('/workouts');
  });
});

// One Single Workout Route (Show)
router.get('/:id', (req, res) => {
  db.Workout.findById(req.params.id, (err, foundWorkout) => {
    if (err) return console.log(err);
    res.render('show', {
      workout: foundWorkout,
    });
  });
});

// All Workoutss Route (Index)
router.get('/', (req, res) => {
  db.Workout.find({}, (err, allWorkout) => {
    if (err) return console.log(err);
    console.log('All Workout = ', allWorkout);
    res.render('index', {
      workouts: allWorkout,
    });
  });
});

// Edit One Workout (Edit)
router.get('/:id/edit', (req, res) => {
  db.Workout.findById(req.params.id, (err, foundWorkout) => {
    if (err) return console.log(err);
    res.render('edit', {
      workout: foundWorkout,
    });
  })
});

// Update One Workout (Update)
router.put('/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}, 
    (err, updatedWorkout) => {
      if (err) return console.log(err);
      updatedWorkout.update({})
      res.redirect('/workouts');
    }
  );
});

// Delete One Workout
router.delete('/:id', (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id, (err, deletedWorkout) => {
    if (err) return console.log(err);
    console.log('Deleted Workout = ', deletedWorkout);
    res.redirect('/workouts');
  });
});

module.exports = router;
