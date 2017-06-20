'use strict';

//import and load .env file
require('dotenv').load();


//load modules
const path = require('path');
const handlebars = require('express-handlebars');
const express = require('express');
const app = express();
const routes = require('./routes/index.js');

//port depending on given vars
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));

//handlebars config
const hbs = handlebars.create({
    extname: ".hbs"
});

//use handlebars with config above
app.engine( 'hbs', handlebars( {
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
} ) );

app.set('view engine', '.hbs');

app.use(express.static('public'));

app.use(routes);

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
