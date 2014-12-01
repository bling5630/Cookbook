// eventmitter
// nc localhost 8080

var net = require('net');
var format = require('util').format;

var server = net.createServer();

server.on('connection', function(conn) {
	var printPrefix = '[' + conn.remoteAddress + ':' +
		conn.remotePort + ']';

	function print() {
		var formatted = format.apply({}, arguments);
		console.log(printPrefix + formatted);
	}

	print('connected');

	conn.on('data', function(data) {
		print('got some data:', data);
	});

	conn.on('end', function() {
		print('ended.');
	});

	conn.on('close', function() {
		print('closed.');
	});

	conn.on('error', function() {
		print('error.');
	});

	conn.setEncoding('utf-8');

});

server.on('error', console.error);

server.listen(8080);