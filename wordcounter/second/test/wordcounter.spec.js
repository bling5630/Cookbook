var test = require('tape'),
	tapSpec = require('tap-spec'),
	request = require("request"),
	cheerio = require("cheerio"),
	nock = require('nock'),
	wordcounter = require('../src/wordcounter'),
	calculateByFrequency = require('../src/calculateByFrequency'),
	clearTheParsedText = require('../src/clearTheParsedText'),
	filterByLength = require('../src/filterByLength');


test('wordcounter', function(n) {
	n.plan(1);
	n.equal(typeof wordcounter, 'object', 'should be a object');

	n.end();
});

test('calculateByFrequency', function(n) {
	n.plan(5);

	n.equal(typeof calculateByFrequency, 'function', 'should be a function');
	n.equal(typeof calculateByFrequency(), 'object', 'should be a object');

	n.deepLooseEqual(calculateByFrequency(['musing']), {
		'musing': 1
	}, 'Musing should be 1');

	n.deepLooseEqual(calculateByFrequency(['musing', 'dance']), {
		'musing': 1,
		'dance': 1
	}, 'Musing and dance should be 1 and 1');

	n.deepLooseEqual(calculateByFrequency(['car', 'car', 'car', 'car']), {
		'car': 4
	}, 'Car should be 4');

	n.end();
});

test('filterByLength', function(n) {
	n.plan(9);

	n.equal(typeof filterByLength, 'function',
		'result should be a function');
	n.equal(typeof filterByLength(''), 'object',
		'result should be a object');
	n.equal(typeof filterByLength('1'), 'object',
		'result should be a object');
	n.equal(typeof filterByLength('abc'), 'object',
		'result should be a object');

	var input = (' alma ');
	n.deepLooseEqual(filterByLength(input), ['alma'],
		'result should be alma');

	var input1 = ('a b c d e f g h i j ');
	n.deepLooseEqual(filterByLength(input1), [],
		'result should be an empty array');

	var input2 = ('bsdifidbiédfbgofgbdsgb');
	n.deepLooseEqual(filterByLength(input2), [],
		'result should be an empty array');

	var input3 = input + input1 + input2;
	n.deepLooseEqual(filterByLength(input3), ['alma'],
		'result should be alma');

	var input4 = input3 + ('bsdibfibfidbiédfbgofg bdsgb');
	n.deepLooseEqual(filterByLength(input4), ['alma', 'bdsgb'],
		'result should be alma and bdsgb');

	n.end();
});

test('clearTheParsedText', function(n) {
	n.plan(7);

	n.equal(typeof clearTheParsedText, 'function',
		'result should be a function');
	n.equal(typeof clearTheParsedText(''), 'string',
		'result should be a string');
	n.equal(typeof clearTheParsedText('alma'), 'string',
		'result should be a string');
	n.equal(clearTheParsedText('alma'), 'alma',
		'result should be a alma');
	n.equal(clearTheParsedText('5'), '',
		'result should be an empty string');
	n.equal(clearTheParsedText('5alma'), 'alma',
		'result should be an alma');

	var mixedWords = ('and Sections":[{"type":2,"COLLECTION HeaderMetada": ');
	n.equal(clearTheParsedText(mixedWords), 'and sectionstypecollection headermetada ',
		'result should be a and sectionstype collection headermetada');

	n.end();
});

test('module works', function(c) {
	c.plan(3);

	nock('https://medium.com')
		.get('/life-at-confetti')
		.reply(200, 'Hello from Medium');

	var scope = nock('https://medium.com')
		.get('/life-at-confetti')
		.reply(200, 'Hello from Medium');

	request('https://medium.com/life-at-confetti', function(err) {
		c.error(err, 'error');

		request('https://medium.com/life-at-confetti', function(err) {
			c.error(err, 'error');
			c.ok(scope.isDone(), 'request satisfied');
			c.end();
		});
	});
});


test('filter check', function(c) {
	c.plan(1);

	nock('https://medium.com')
		.get('/life-at-confetti')
		.reply(200, 'Hello from Medium');

	request('https://medium.com/life-at-confetti', function(error, response, body) {
		if (error) {
			console.log(error);
			return;
		}
		var $page = cheerio.load(body);
		var article = $page('body').text();

		c.equal(typeof article, 'string', 'type of article is a string');
	});
});

test.createStream()
	.pipe(tapSpec());