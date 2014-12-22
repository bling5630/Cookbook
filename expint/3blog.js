// base the setup

var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	hbs = require('hbs'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 3000;

var blogEngine = require('./hp');

// add all environment

app.use(logger("dev"));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

app.use(express.static('public'));

// routes

app.get('/', function(req, res) {
	res.render('1index', {
		title: "My Blog",
		entries: blogEngine.getBlogEntries()
	});
});

app.get('/about', function(req, res) {
	res.render('1about', {
		title: "About Me"
	});
});

app.get('/article/:id', function(req, res) {
	var entry = blogEngine.getBlogEntry(req.params.id);
	res.render('1article', {
		title: entry.title,
		blog: entry
	});
});
// listen on localhost:3000

var server = app.listen(port, function() {
	console.log('Server started on port %s ', server.address().port);
});