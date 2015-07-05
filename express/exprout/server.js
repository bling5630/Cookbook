// base the setup

var express = require('express'),
	logger = require('morgan'),
	app = express();
var router = express.Router(),
	port = process.env.PORT || 8080;


// add all environments

app.use(logger("dev"));
app.use('/', router);


// routes

app.route('/login')

	// show the form (GET http://localhost:8080/login)
	.get(function(req, res) {
		res.send('This is the login form');
	})

	// process the form (POST http://localhost:8080/login)
	.post(function(req, res) {
		console.log('Processing');
		res.send('Processing the login form!');
	});

// route middleware that will happen on every request

router.use(function(req, res, next) {

	// log each request to the console
	console.log(req.method, req.url);

	// continue doing what we were doing and go to the route
	next();
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
	res.send('im the home page!');
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
	res.send('im the about page!');
});

// route middleware to validate :name

router.param('name', function(req, res, next, name) {
	// do validation on name here
	// blah blah validation
	// log something so we know its working
	console.log('Doing name validation on ' + name);

	// once validation is done save the new item in the req
	req.name = name;

	// go to the next thing
	next();
});

// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function(req, res) {
	res.send('Hello ' + req.params.name + '!');
});


//listen on localhost:8080

var server = app.listen(port, function() {
	console.log('server started on port %s', server.address().port);
});