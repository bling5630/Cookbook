//simple exercises 0:00-6:50

var net = require('net'),
	filePath = __dirname + '/logs.json',
	file = require('fs')
	.createWriteStream(filePath, {
		flags: 'a'
	});

var server = net.createServer();

server.on('connection', function(socket) {
	socket.pipe(file, {
		end: false
	});
});

server.listen(4000);
console.log('Server is running on the server ' + 4000);