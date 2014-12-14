//piping out 11:10 - 

var net = require('net'),
	JSONStream = require('json-stream'),
	filePath = __dirname + '/logs.json',
	file = require('fs')
	.createWriteStream(filePath, {
		flags: 'a'
	}),
	es = require('event-stream');

function identity(d) {
	return d;
}

var source = es.mapSync(identity);

var stringifier = es.mapSync(function(data) {
	return JSON.stringify(data) + '\n';
});

source
	.pipe(stringifier)
	.pipe(file);

var server = net.createServer();

server.on('connection', function(socket) {
	var jsonStream = new JSONStream();
	socket
		.pipe(jsonStream)
		.pipe(source, {
			end: false
		});
});

server.listen(4000);
console.log('Server is running on the server ' + 4000);

module.exports = source;