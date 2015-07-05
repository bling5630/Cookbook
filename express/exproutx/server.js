/**
 * Module dependencies.
 */

var express = require('express'),
	logger = require('morgan'),
	app = express(),
	port = process.envPORT || 8080;


// Add all environments

app.use(logger("dev"));

// sample route with a route the way we're used to seeing it

app.get('/sample', function(req, res) {
	res.send("This is a sample!");
});

// Get an instance of router

var router = express.Router();

// Route middleware that will happen on every request

router.use(function(req, res, next) {

	console.log(req.method, req.url);

	next();
});

// Home page route (http://localhost:8080)

router.get('/', function(req, res) {
	res.send('I am the home page!');
});

router.get('/about', function(req, res) {
	res.send('I am the about page!');
});

router.param('name', function(req, res, next, name) {
	console.log('Doing name validation on ' + name);

	req.name = name;

	next();
});

router.get('/hello/:name', function(req, res) {
	res.send('Hello ' + req.name + '!');
});

// Apply the routes to our application

app.use('/', router);

app.route('/login')

	.get(function(req, res) {
		res.send('This is the login form!!');
	})

	.post(function(req, res) {
		console.log('Processing');
		res.send('Processing the login form!');
	});

// Listen on localhost:8080

app.listen(8080);
console.log("This server running on the server " + 8080);