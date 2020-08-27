const express = require('express');
const methodOverride = require('method-override');
const app = express(); 
const PORT = process.env.PORT || 4000;
const workoutsController = require('./controllers/workoutsController');
//const LEARN = require('./models/learnExercises');

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  const timeStamp = new Date().toLocaleTimeString();
  console.log(`${method} ${url} ${timeStamp}`);
  next();
});

// Learn Section
/*
app.get('/', (req, res) => {
  res.redirect('/learn');
})

app.get('/learn', (req, res) => {
  res.render('index', 
    {learn: LEARN},
  )
});

app.get('/learn/:index', (req, res) => {
  res.render('show', {
  learn: LEARN[req.params.index]
  })
});
*/

// CSS connection
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.send('<h1>Workout Tracker Empty Page</h1>');
});

app.use('/workouts', workoutsController);

app.get('*', (req, res) => {
  res.send('<h1>404 Page Not Found</h1>');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
