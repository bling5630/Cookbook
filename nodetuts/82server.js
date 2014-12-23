// Use EventEmitter

var EventEmitter = require('events').EventEmitter;

var server = require('http').createServer();

var a;

server.on('request', function(req, res) {
	var ee = new EventEmitter();

	ee.on('error', function(err) {
		res.writeHead(500);
		res.end(err.message);
	});

	ee.emit('example', 1, 2, 3);
	ee.emit('error', new Error('Something terrible is happned!!'));
	res.end('Thank you for using our service');
});

//listen on localhost:8080

server.listen(8080);
console.log('This server is running on the port ' + 8080);