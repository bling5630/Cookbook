// sync version

var fs = require('fs');

var result = fs.readFile('/etc/passwd');
console.log('File contents: ', result);

// async version

var fs = require('fs');

function callback(err, results) {
	if (err) return handleError(err);
	console.log('File contents: ', result);
}

fs.readFile('/etc/passwd', callback);

// inline version

var fs = require('fs');

fs.readFile('/etc/passwd', function (err, results) {
		if (err) return handleError(err);
		console.log('File contents: ', result);
	});