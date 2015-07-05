// base the setup & packages

var app = require('express')(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 8080;

// add all environments

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// routes
// URL Parameters
// http://localhost:8080/api/users?id=4&token=sadsf4&geo=us

app.get('/api/users', function(req, res) {
	var user_id = req.param('id'),
		token = req.param('token'),
		geo = req.param('geo');

	res.send(user_id + ' ' + token + ' ' + geo);
});

// http://localhost:8080/api/1

app.param('/api/version', function(req, res) {
	res.send(req.params.version);
});

// Parameter middleware that will run before the next routes

app.param('name', function(req, res, next, name) {

	// check if the user with that name exists
	// do some validations
	// add -dude to the name

	var modified = name + ' dude ';

	// save name to the request
	req.name = modified;

	next();
});

// http://localhost:8080/api/users/chris

app.get('/api/users/:name', function(req, res) {
	// the user was found and is available in req.user
	res.send('What is up ' + req.name + '!');
});

// POST Parameters
// POST http://localhost:8080/api/users
// Parameters sent with 

app.post('/api/users', function(req, res) {
	var user_id = req.body('id'),
		token = req.body('token'),
		geo = req.body('geo');

	res.send(user_id + ' ' + token + ' ' + geo);
});

//listen on localhost:8080

app.listen(8080);
console.log('Server is running on the port ' + 8080);