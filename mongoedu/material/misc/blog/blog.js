/**
 * Module dependencies.
 */

var app = require('express')(),
	logger = require('morgan'),
	cons = require('consolidate'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	MongoClient = require('mongodb'),
	routes = require('./routes');

// Set up the MongoDB

MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
	"use strict";
	if (err) throw err;

	// Register the template engine and logger

	app.engine('html', cons.swig);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');


	/**
	 * Express middleware to populte req.cookies
	 * and req.body
	 */

	app.use(logger("dev"));
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({
		extended: false
	}));
	app.use(bodyParser.json());

	routes(app, db);

// Listen on localhost:3000

	app.listen(3000);
	console.log('Blog listening on port ' + 3000);

});