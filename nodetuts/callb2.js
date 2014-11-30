// callback function is the last argument

var fs = require('fs');

fs.readFile('/etc/passwd', 'utf-8', function (err, results) {
		if (err) return handleError(err);
		console.log('File contents: ', result);
	});