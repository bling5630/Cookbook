// error is the first argument

var dns = require('dns');

dns.lookup('google.com', function(err, ip) {
	if (err) return handleError(err);
	
	console.log('google.com resolved to %s', ip);
});

// alternative

var dns = require('dns');

dns.lookup('google.com', function(err, ip) {
	if (err) {
		handleError(err);
		return;
	}
	console.log('google.com resolved to %s', ip);
});

// alternative #2

var dns = require('dns');

dns.lookup('google.com', function(err, ip) {
	if (err) {
		handleError(err);
	} else {
		console.log('google.com resolved to %s', ip);
	}
});