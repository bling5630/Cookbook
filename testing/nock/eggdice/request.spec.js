var nock = require('nock'),
	test = require('tape'),
	http = require('https'),
	cheerio = require("cheerio"),
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
	t.plan(1);

	var scope = nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, 'mivan?');

	request(BASE_URL, function(err) {
		//t.error(err);
		t.ok(scope.isDone(),
			'Second test: requests satisfied');
		t.end();
	});

});

test('#3 statusCode check', function(t) {

	nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, 'mivan?');

	request(BASE_URL)
		.on('response', function(response) {
			t.equals(typeof response.statusCode,
				'number', 'Third test: statusCode is a number');
			t.end();
		});
});

test('#4 filter check', function(t) {
	t.plan(2);

	nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, 'mivan?');

	request(BASE_URL, function(error, response, body) {
		if (error) {
			console.log(error);
			return;
		}
		var $page = cheerio.load(body);
		var article = $page('body').text();

		t.equal(typeof article,
			'string', 'type of article is a string');

		t.equal(typeof body,
			'string', 'type of body is a string');
	});
});

test('#4 whatever', function(t) {

	var api = nock(BASE_MAIN_URL)
		.persist()
		.get(BASE_GET)
		.reply(200, 'mivan?');


	http.get(BASE_URL, function(response) {
		var str = '';
		response.on('data', function(data) {
			str += data;
		});
		response.on('end', function() {
			console.log('Got Result: ', str);
		});
		t.end();
	});



});

test.createStream()
	.pipe(tapSpec());