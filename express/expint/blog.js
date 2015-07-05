// base the setup

var app = require('express')(),
	logger = require('morgan'),
	hbs = require('hbs'),
	path = require('path'),
	port = process.env.PORT || 3000;

// add all environment

app.use(logger("dev"));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

// routes

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './public', "index.html"));
});

app.get('/about', function(req, res) {
	res.sendFile(path.join(__dirname, './public', "about.html"));
});

app.get('/article', function(req, res) {
	res.sendFile(path.join(__dirname, './public', "article.html"));

});

// listen on localhost:3000

var server = app.listen(port, function() {
	console.log('Server started on port %s ', server.address().port);
});