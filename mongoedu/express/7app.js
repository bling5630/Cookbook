/**
 * Module dependencies.
 */

var app = require('express')(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	cons = require('consolidate');

// Add all environments

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

// Handler for internal server errors

function errorHandler(err, req, res, next) {
	console.error(err.message);
	console.error(err.stack);
	res.status(500);
	res.render('error_temaplate', {
		error: err
	});
}

app.use(errorHandler);

// Routing

app.get('/', function(req, res, next) {
	res.render('fruitPicker', {
		'fruits': [
			'apple',
			'orange',
			'banana',
			'peach'
		]
	});
});

app.post('/favorite_fruit', function(req, res, next) {
	var favorite = req.body.fruit;
	if (typeof favorite === 'undefined') {
		next(Error('Please choose a fruit!'));
	} else {
		res.send("Your favorite fruit is " + favorite);
	}
});

// Listen on localhost:8080

app.listen(8080);
console.log('Express server listening on port 8080');