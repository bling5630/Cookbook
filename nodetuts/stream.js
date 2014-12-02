// read stream

var fs = require('fs');

var readStream = fs.createReadStream(
	'/var/log/system.log');

readStream.on('data', function(data) {
	console.log('got some data:', data);
});

readStream.on('end', function(data) {
	console.log('ended');
});

// encoding the file

readStream.setEncoding('utf-8');
