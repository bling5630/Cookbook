/**
 * Module dependencies.
 */

var express = require('express'),
	path = require('path'),
	jade = require('jade'),
	bodyParser = require('body-parser'),
	logger = require('morgan');

var app = express(),
	router = express.Router();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// add all environments

app.use(router);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

router.all('/', function(req, res, next) {
	console.log('Someone made a request!!!');
	next();
});

var secretKey = "goat";

router.get('/', function(req, res) {
	res.render('index');
});

router.post('/secret', function(req, res) {
	var secret = req.body.secret;
	var user = {};
	user.authorised = secret === secretKey ? true : false;
	res.render('secret', user);
});

router.get('/secret/:key', function(req, res) {
	var secret = req.params.key;
	var user = {};
	user.authorised = secret === secretKey ? true : false;
	res.render('secret', user);
});

router.get('/secret', function() {
	var user = {
		authorised: false
	};
	res.render('secret', user);
});

//listen on localhost:3000

app.listen(3000);
console.log("Server started on port " + 3000);

module.exports = app;