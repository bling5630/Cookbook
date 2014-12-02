// control flow, streaming data

var fs = require('fs');

var readStream = fs.createReadStream(
	'/var/log/system.log');

readStream.pause();

readStream.on('data', function(data) {
	console.log('got some data:', data);

	readStream.pause();

	setTimeout(function() {
	readStream.resume();
}, 1000);

});

readStream.on('end', function(data) {
	console.log('ended');
});

// encoding the file

readStream.setEncoding('utf-8');

setTimeout(function() {
	readStream.resume();
}, 1000);
