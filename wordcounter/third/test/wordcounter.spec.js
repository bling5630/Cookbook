var test = require('tape'),
	tapSpec = require('tap-spec'),
	nock = require('nock'),
	wordcounter = require('../src/wordcounter'),
	calculateByFrequency = require('../src/calculateByFrequency'),
	clearTheParsedText = require('../src/clearTheParsedText'),
	filterByLength = require('../src/filterByLength');

var BASE_URL = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363',
	BASE_MAIN_URL = 'https://medium.com',
	BASE_GET = '/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';


test('has wordcounter function', function(t) {

	t.plan(1);

	t.equals(typeof wordcounter, 'function',
		'wordcounter is a function');

	t.end();
});

test('calculateByFrequency', function(t) {

	t.plan(5);

	t.equal(typeof calculateByFrequency,
		'function', 'should be a function');

	t.equal(typeof calculateByFrequency(),
		'object', 'should be a object');

	t.deepLooseEqual(calculateByFrequency(['musing']), {
		'musing': 1
	}, 'Musing should be 1');

	t.deepLooseEqual(calculateByFrequency(['musing', 'dance']), {
		'musing': 1,
		'dance': 1
	}, 'Musing and dance should be 1 and 1');

	t.deepLooseEqual(calculateByFrequency(['car', 'car', 'car', 'car']), {
		'car': 4
	}, 'Car should be 4');

	t.end();
});

test('filterByLength', function(t) {

	t.plan(9);

	t.equal(typeof filterByLength, 'function',
		'result should be a function');
	t.equal(typeof filterByLength(''), 'object',
		'result should be a object');
	t.equal(typeof filterByLength('1'), 'object',
		'result should be a object');
	t.equal(typeof filterByLength('abc'), 'object',
		'result should be a object');

	var BASE_INPUT = (' alma ');
	t.deepLooseEqual(filterByLength(BASE_INPUT), ['alma'],
		'result should be alma');

	var BASE_INPUT_1 = ('a b c d e f g h i j ');
	t.deepLooseEqual(filterByLength(BASE_INPUT_1), [],
		'result should be an empty array');

	var BASE_INPUT_2 = ('bsdifidbiédfbgofgbdsgb');
	t.deepLooseEqual(filterByLength(BASE_INPUT_2), [],
		'result should be an empty array');

	var BASE_INPUT_3 = BASE_INPUT + BASE_INPUT_1 + BASE_INPUT_2;
	t.deepLooseEqual(filterByLength(BASE_INPUT_3), ['alma'],
		'result should be alma');

	var BASE_INPUT_4 = BASE_INPUT_3 + ('bsdibfibfidbiédfbgofg bdsgb');
	t.deepLooseEqual(filterByLength(BASE_INPUT_4), ['alma', 'bdsgb'],
		'result should be alma and bdsgb');

	t.end();
});

test('clearTheParsedText', function(t) {

	t.plan(7);

	t.equal(typeof clearTheParsedText, 'function',
		'result should be a function');
	t.equal(typeof clearTheParsedText(''), 'string',
		'result should be a string');
	t.equal(typeof clearTheParsedText('alma'), 'string',
		'result should be a string');
	t.equal(clearTheParsedText('alma'), 'alma',
		'result should be a alma');
	t.equal(clearTheParsedText('5'), '',
		'result should be an empty string');
	t.equal(clearTheParsedText('5alma'), 'alma',
		'result should be an alma');

	var BASE_WORDS = ('and Sections":[{"type":2,"COLLECTION HeaderMetada": ');

	t.equal(clearTheParsedText(BASE_WORDS),
		'and sectionstypecollection headermetada ',
		'result should be a and sectionstype collection headermetada');

	t.end();
});

test('wordcounter method makes the correct api call',
	function(t) {

		t.plan(2);

		var scope = nock(BASE_MAIN_URL)
			.get(BASE_GET)
			.reply(200, 'what\'s up?');

		wordcounter(function(err) {

			t.error(err, 'Works without error!');
			t.ok(scope.isDone(),
				'wordcounter request is satisfied');
			t.end();
		});

	});

test('wordcounter body testing, saying what\'s up?',
	function(t) {

		t.plan(2);

		nock(BASE_MAIN_URL)
			.get(BASE_GET)
			.reply(200, 'what\'s up');

		wordcounter(function(err, body) {
			t.error(err, 'Works without error!');
			t.equals(body, '[]', 'this is an empty array');
			t.end();
		});
	});

test('wordcounter mocked HTML like name: alma, quantity: 1',
	function(t) {

		t.plan(1);

		var BASE_MOCK_HTML_ALMA =
			[
				'<!DOCTYPE html>',
				'<body>',
				'alma',
				'</body>',
				'</html>'

			].join('');

		nock(BASE_MAIN_URL)
			.get(BASE_GET)
			.reply(200, BASE_MOCK_HTML_ALMA);

		wordcounter(function(err, body) {
			t.deepEqual(JSON.parse(body), [{
				"name": "alma",
				"quantity": 1
			}], 'result is - name: alma, quantity: 1');
			t.end();
		});
	});

test('wordcounter mocked HTML like name: second, quantity: 1, name: third, quantity: 1, name: fourth, quantity: 1',
	function(t) {

		t.plan(1);

		var BASE_MOCK_HTML =
			[
				'<!DOCTYPE html>',
				'<body>',
				'<div id="comic">',
				'</div>',
				'<p> My second paragraph. </p>',
				'<p> My third paragraph. </p>',
				'<p> My fourth paragraph. </p>',
				'</body>',
				'</html>'

			].join('');

		nock(BASE_MAIN_URL)
			.get(BASE_GET)
			.reply(200, BASE_MOCK_HTML);

		wordcounter(function(err, body) {
			t.deepEqual(JSON.parse(body), [{
				name: 'second',
				quantity: 1
			}, {
				name: 'third',
				quantity: 1
			}, {
				name: 'fourth',
				quantity: 1
			}], 'result is - name: second, quantity: 1, name: third, quantity: 1, name: fourth, quantity: 1');
			t.end();
		});
	});

test.createStream()
	.pipe(tapSpec());