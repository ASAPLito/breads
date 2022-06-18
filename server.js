const express = require('express');


// DEPENDENCIES
const methodOverride = require('method-override')
const breadsController = require('./controllers/breads_controller.js');

//Configuration
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();


// MIDDLEWARE
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about BREADS!')
});

//Breads
app.use('/breads', breadsController);

//404 Page
app.get('*', (req, res) => {
    res.send('404')
})

//LISTEN
app.listen(PORT, () => {
    console.log('nomming at port', PORT)
});
