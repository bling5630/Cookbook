/**
 * Module dependencies.
 */

var express = require('express'),
	path = require('path'),
	http = require('http'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	logger = require('morgan'),
	port = process.env.PORT || 3000;

var routes = require('./routes/home'),
	home = require('./routes/home');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Add all environments

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/routes', home);

// Catch 404 and forward to error handler


app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});


// App listen on localhost:3000

var server = app.listen(port, function() {
	console.log('Server started on %s', server.address().port);
});

//module.exports = app;