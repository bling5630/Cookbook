/**
 * Module dependencies.
 */

var app = require('express')(),
	cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

// Routing

app.get('/', function(req, res) {
	res.render('hello', {
		'name': 'Tamas'
	});
});

app.get('*', function(req, res) {
	res.status(404)
		.send("Page not found!!!");
});

//listen on localhost:8080

app.listen(8080);
console.log("Server is working on the port " + 8080);