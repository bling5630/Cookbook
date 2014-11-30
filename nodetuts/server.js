var http = require('http');

var server = http.createServer();

function handleRequest(req, res) {
	res.writeHead(200, {
		'content-type': 'text/plain'
	});
	res.write('Hello_World');
	res.end();
}


server.on('request', handleRequest);

server.listen(8080);
console.log('server started on port %s', 8080);