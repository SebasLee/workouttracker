const mongoose = require('mongoose');
const MONGOPROJECT = process.env.MONGOPROJECT || `mongodb+srv://SebasLee:Videocraze98@sebaslee.ozqfl.mongodb.net/Workouttracker?retryWrites=true&w=majority
`;

mongoose.connect(MONGOPROJECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => console.log(`MongoDB connected successfully at ${MONGOPROJECT}`)) // Success Handler
  .catch((err) => console.log(`MongoDB connection error: ${err}`)) // Error Handler

module.exports = {
  Workout: require('./Workout'),
};

