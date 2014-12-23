/** 
*Cannot call method 'abc' of undefined
* Made embedded error catcher
*/

process.on('uncaughtException', function(err) {
	console.log('Uncaught exception here', err);
});

var server =  require('http').createServer();

var a;

server.on('request', function(req, res) {
	a.abc();
	res.end('Thank you for using our service');
});

server.listen(8080);
console.log('This server is running on the port ' + 8080);