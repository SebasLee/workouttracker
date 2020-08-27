/*
const express = require('express');
const app = express();
const db = require('./models/');

// Array of fruit to seed DB
const fruits = [
  {
    name: 'banana',
    color: 'yellow',
    readyToEat: true
  },
  {
    name: 'plum',
    color: 'plum',
    readyToEat: false
  },
  {
    name: 'boysenberry',
    color: 'purple',
    readyToEat: true
  },
  {
    name: 'fig',
    color: 'brown',
    readyToEat: false
  },
  {
    name: 'ugli',
    color: 'orange',
    readyToEat: true
  },
  {
    name: 'loquat',
    color: 'lapislazuli',
    readyToEat: true
  },
]

// start with a clean DB
db.Fruit.deleteMany({}, (err, r) => {
  if (err) return console.log(err);
  console.log(`Deleted ${r.deletedCount} fruits`);

  // now create fruits from the array
  db.Fruit.create(fruits, (err, newFruits) => {
    if (err) return console.log(err);
    console.log(`Created ${newFruits.length} new fruits`);
    process.exit();
  })
})
*/