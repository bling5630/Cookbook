// base the setup

var app = require('express')(),
	logger = require('morgan'),
	port = process.env.PORT || 3000;

// add all environment

app.use(logger("dev"));

// routes

app.get('/', function(req, res) {
		res.send("This would be some HTML");
	});

app.get('/api', function(req, res) {
		res.send({name:"Raymond", age:48});
	});

// listen on localhost:3000

var server = app.listen(port, function() {
	console.log('Server started on port %s ', server.address().port);
});