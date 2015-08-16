var nock = require('nock'),
	test = require('tape'),
	http = require('http'),
	request = require('request'),
	tapSpec = require('tap-spec');

var wordCount = require('./request');

/*
// Tojas
nock('https://medium.com')
	.get('/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363')
	.reply(200, 'mivan?');

wordCount(function(err, body) {
	console.log(body === 'mivan?');
});
*/

var BASE_URL = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';
var BASE_MAIN_URL = 'https://medium.com';
var BASE_GET = '/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';

test('#1 - has wordCount method', function(t) {
	t.plan(1);
	t.equals(typeof wordCount, 'function', 'First test: wordCount is a function');
	t.end();
});

test('#2 - wordCount method makes the correct api call', function(t) {
	t.plan(3);
	nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, 'mivan?');

	var scope = nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, 'mivan?');

	request(BASE_URL, function(err) {
		t.error(err);

		request(BASE_URL, function(err) {
			t.error(err);
			t.ok(scope.isDone(),
				'Second test: requests satisfied');
			t.end();
		});
	});
});





test.createStream()
	.pipe(tapSpec());