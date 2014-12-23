var EventEmitter = require('events').EventEmitter;
var domain = require('domain');
var fs = require('fs');
var server = require('http').createServer();

var a;

server.on('request', function(req, res) {

	var d = domain.create();

	d.add(req);
	d.add(res);

	var replied = false;

	d.on('error', function(err) {
		if (!replied) {
			replied = true;
			res.writeHead(500);
			res.end(err.message);
		} else {
			console.log(err);
		}
	});

	d.run(function() {
		fs.readFile(__filename, function(err, contents) {
			// throw new Error('halp!');
			if (err) throw err;
			res.end(contents);
		});
	});
});

//listen on localhost:8080

server.listen(8080);
console.log('This server is running on the port ' + 8080);