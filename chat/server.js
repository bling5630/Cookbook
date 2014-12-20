// base the setup

var socketio = require('socket.io');

// Listen on port 8080

var io = socketio.listen(8080);

io.sockets.on('connection', function() {
	// Broadcast a user's message to everyone else in the room
	socket.on('send', function(data) {
		io.sockets.emit('message', data);
	});
});

console.log('Server started on port' + 8080);