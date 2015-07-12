var nock = require('nock'),
	http = require('http');

// mock the URL
var api = nock('http://javascriptplayground.com')
	.persist()
	.get('/test/')
	.reply(200, 'Hello World');

// make a HTTP request
http.get('http://javascriptplayground.com/test/', function(resp) {
	var str = '';
	resp.on('data', function(data) {
		str += data;
	});
	resp.on('end', function() {
		console.log('Got Result: ', str);
	});
});

// http.get code here
api.isDone();