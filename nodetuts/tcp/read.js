// 19:30

var net = require('net'),
	JSONStream = require('json-stream');

module.exports = function(source) {
	var server = net.createServer();

	server.on('connection', function(socket) {
		var started = false;

		var stringifier = es.mapSync(function(data) {
			return JSON.stringify(data) + '\n';
		});

		// {"action" : "start"}
		// {"action" : "stop"}

		var actions = {
			start: function(command) {
				if (started) return;

				source
					.pipe(stringifier)
					.pipe(socket);

				started = true;
			}
		};

		var jsonStream = new JSONStream();

		jsonStream.('data', function(command) {
			var action = command.action;
			if (action && actions[action]) actions[action](command);
		});

		socket.pipe(jsonStream);
	});
	server.listen(4001);
};