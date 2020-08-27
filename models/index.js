const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/workout';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => console.log(`MongoDB connected successfully at ${MONGODB_URI}`)) // Success Handler
  .catch((err) => console.log(`MongoDB connection error: ${err}`)) // Error Handler

module.exports = {
  Workout: require('./Workout'),
};

