var nock = require('nock'),
	test = require('tape'),
	cheerio = require("cheerio"),
	tapSpec = require('tap-spec');


var wordCount = require('./request');

var BASE_URL = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363',
	BASE_MAIN_URL = 'https://medium.com',
	BASE_GET = '/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';

test('#1 - has wordCount method', function(t) {
	t.plan(1);
	t.equals(typeof wordCount, 'function', 'First test: wordCount is a function');
	t.end();
});

test('#2 - wordCount method makes the correct api call', function(t) {
	t.plan(2);

	var scope = nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, 'mivan?');

	wordCount(function(err) {
		t.error(err, 'Works without error!');
		t.ok(scope.isDone(),
			'Second test: requests satisfied');
		t.end();
	});

});

test('#3 - wordCount body mivan?', function(t) {
	t.plan(2);

	nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, 'mivan?');

	wordCount(function(err, body) {
		t.error(err, 'Works without error!');
		t.equals(body, 'mivan?');
		t.end();
	});
});

test('mivan?', function(t) {

	var BASE_MOCK_HTML =
		[
			'<!DOCTYPE html>',
			'<body>',
			'<div id="comic">',
			'</div>',
			'<p> My first paragraph. </p>',
			'<p> My second paragraph. </p>',
			'<p> My third paragraph. </p>',
			'<p> My fourth paragraph. </p>',
			'</body>',
			'</html>'

		].join('');

	nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, 'mivan?');

	wordCount(function(err, body) {
		t.equals(body, 'mivan?');
		t.end();
	});
});

test('mivan?', function(t) {

	var BASE_MOCK_HTML =
		[
			'<!DOCTYPE html>',
			'<body>',
			'<div id="comic">',
			'</div>',
			'<p> My first paragraph. </p>',
			'<p> My second paragraph. </p>',
			'<p> My third paragraph. </p>',
			'<p> My fourth paragraph. </p>',
			'</body>',
			'</html>'

		].join('');

	nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, BASE_MOCK_HTML);

	wordCount(function(err, body) {
		t.equals(body, BASE_MOCK_HTML);
		t.end();
	});
});

test.createStream()
	.pipe(tapSpec());