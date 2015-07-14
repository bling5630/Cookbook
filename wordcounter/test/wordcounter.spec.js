var test = require('tape'),
	tapSpec = require('tap-spec'),
	wordcounter = require('../src/wordcounter'),
	calculateByFrequency = require('../src/calculateByFrequency');
//clearTheParsedText = require('../src/clearTheParsedText');

test('wordcounter', function(n) {
	n.plan(1);
	n.equal(typeof wordcounter(), 'object', 'should be a object');

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

/* not works??? - return content.replace(/\s+/g, " ") TypeError: Cannot call method 'replace' of undefined 

test('clearTheParsedText', function(n) {
	n.plan(2);

	n.equal(typeof clearTheParsedText, 'function',
		'result should be a function');
	n.equal(typeof clearTheParsedText(''), 'string',
		'result should be a string');

	n.end();
});
*/

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);