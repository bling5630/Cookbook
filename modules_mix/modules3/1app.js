var app = require('express')(),
	morgan = require('morgan'),
	port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get('/', function(req, res) {
	res.send('Hello_World');
});

//listen on localhost:3000

var server = app.listen(port, function() {
	console.log('Server started on port %s', server.address().port);
});

module.exports = app;