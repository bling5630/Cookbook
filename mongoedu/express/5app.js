/**
 * Module dependencies.
 */

var app = require('express')(),
	cons = require('consolidate'),
	MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server;

// Add all environments

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

// Database

var mongoclient = new MongoClient(new Server('localhost', 27017, {
	'native_parser': true
}));
var db = mongoclient.db('course');

// Routing

app.get('/', function(req, res) {
	db.collection('hello_mongo_express').findOne({},
		function(err, doc) {
			res.render('hello', doc);
		});
});

app.get('*', function(req, res) {
	res.status(404)
		.send("Page not found!!!");
});

//listen on localhost:8080

mongoclient.open(function(err, mongoclient) {

	if (err) throw err;

	app.listen(8080);
	console.log("Server is working on the port " + 8080);
});