/**
 * trimming the server.js code
 */


require('http').createServer(function handleRequest(req, res) {
		res.writeHead(200, {
			'content-type': 'text/plain'
		});
		res.end('Hello_Guys');
	})
	.listen(8080);

console.log('server started on port %s', 8080);