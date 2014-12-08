var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var movies = require('./routes/movies');
var mongoose = require('mongoose');

var app = express();


var dbName = 'movieDB',
connectionString = 'mongodb://localhost27017/database' + dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
	{extended: false}));
app.use(morgan("dev"));
app.use('/api', movies); //This is our route middleware
 
module.exports = app;