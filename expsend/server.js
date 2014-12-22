var app = require('express')(),
	path = require('path'),
	logger = require('morgan'),
	port = process.env.PORT || 8080;


// add all environments

app.use(logger("dev"));

// viewed at http://localhost:8080

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/mickey', function(req, res) {
	res.sendFile(path.join(__dirname + '/mickey.jpg'));
});

app.get('/minnie', function(req, res) {
	res.sendFile(path.join(__dirname + '/minnie.png'));
});

app.get('/m&m', function(req, res) {
	res.sendFile(path.join(__dirname + '/m&m.jpg'));
});

//listen on localhost:8080

var server = app.listen(port, function() {
	console.log('Server started on %s', server.address().port);
});