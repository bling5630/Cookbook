/**
 * Module dependencies.
 */

var app = require('express')(),
	logger = require('morgan'),
	port = process.env.PORT || 3000;

var datetime = require('./datetime');


// add all environments

app.use(logger('dev'));

// say hello Tamas and show the time

app.get('/', function(res) {
	res.send({
		message: 'Hi, my name is Tamas'
	});
});

app.get('/time', function(req, res) {
	res.status(200)
		.send(datetime);
});

app.get('/mix', function(req, res) {
	res.status(200)
		.send('Hi, my name is Tamas and ' + datetime);
});

// app listen on localhost:3000

var server = app.listen(port, function() {
	console.log('Server started on port 3000');
});