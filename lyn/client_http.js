var http = require('http');
var dir = process.argv[2];

http.get(dir, function(response) {
	response.setEncoding('utf8')
	response.on('data', console.log)
	response.on('error', console.error)
});