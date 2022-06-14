const express = require('express');

//Configuration
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about BREADS!')
});

//Breads
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);

//MIDDELWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//LISTEN
app.listen(PORT, () => {
    console.log('nomming at port', PORT)
});
