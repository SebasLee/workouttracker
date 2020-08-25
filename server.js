const express = require('express'); 
const app = express();

const {chestTri} = require('./models/chestTri');

app.set('view engine', 'ejs');

const port = 4000;

/*
app.get ('/chestTri/', (req, res) => {
  res.send
})
*/
app.get('/', (req,res)=>{
    res.render('index',
    {pushday: chestTri},
    )
  });

//app.use('/pushes', pushController); 

app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>');
  });

app.listen(4000, ()=>{
    console.log("I am listening port 4000");
});