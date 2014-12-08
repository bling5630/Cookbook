var fs = require('fs'),
	http = require('http');

http.create(function(req, res) {
	fs.createReadStream('/path/to/file')
	.pipe(res);
});