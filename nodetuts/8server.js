// Cannot call method 'abc' of undefined

var server =  require('http').createServer();

var a;

server.on('request', function(req, res) {
	a.abc();
	res.end('Thank you for using our service');
});

server.listen(8080);
console.log('This server is running on the port ' + 8080);