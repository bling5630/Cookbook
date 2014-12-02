var http = require('http');
var fs = require('fs');

function randomFileName() {
	return '/tmp/' + Date.now() + '_' + Math.random() * 100;
}

http.createServer(function(req, res) {
	var fileName = randomFileName();
	console.log('writting request to', fileName);
	req.pipe(fs.createWriteStream(fileName));

	res.writeHead(200, {
		'content-type': 'text/plain'
	});
	fs.createReadStream(__filename).pipe(res);

}).listen(8080);