/**
 * module dependencies
 */

var app = require('express')(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	_ = require('lodash'),
	port = process.env.PORT || 3000;

// add all environments

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

// catch 404 and forward to error handler

app.use(function(req, res, next) {
	var err = new Error("Not found!!!");
	err.status = 404;
	next(err);
});

// app listen on localhost:3000

var server = app.listen(port, function() {
	console.log("Server started on port %s", server.address().port);
});