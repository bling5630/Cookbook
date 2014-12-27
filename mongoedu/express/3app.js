var app = require('express')();

app.get('/', function(req, res) {
	res.send("Hey Guys!!");
});

app.get('*', function(req, res) {
	res.status(404)
		.send("Page not found!!!");
});

app.listen(8080);
console.log("Server is working on the port " + 8080);