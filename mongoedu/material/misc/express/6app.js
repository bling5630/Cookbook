/**
 * Module dependencies.
 */

var app = require('express')(),
	logger = require('morgan'),
	cons = require('consolidate');

// Add all environments

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

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
app.use(logger("dev"));

// Routing

app.get('/:name', function(req, res, next) {
	var name = req.params.name;
	var getvar1 = req.query.getvar1;
	var getvar2 = req.query.getvar2;
	res.render('hello2', {
		name: name,
		getvar1: getvar1,
		getvar2: getvar2
	});
});

/*
app.get('*', function(req, res) {
	res.status(404)
		.send("Page not found!!!");
});
*/

//listen on localhost:8080

app.listen(8080);
console.log('Express server listening on port 8080');