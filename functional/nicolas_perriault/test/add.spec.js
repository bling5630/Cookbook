var test = require('tape'),
	tapSpec = require('tap-spec'),
	addNumbers = require('../src/add');

test('square', function(a) {
	a.plan(8);

	a.throws(function() {
		square();
	});

	a.equal(typeof addNumbers, 'function',
		'result should be a function');
	a.equal(typeof addNumbers(), 'number',
		'result should be a number');
	a.equal(typeof addNumbers(0), 'number',
		'result should be a number');
	a.equal(typeof addNumbers('0'), 'string',
		'result should be a string');
	a.equal(addNumbers(0), 0,
		'result should be a 0');
	a.equal(addNumbers(2), 4,
		'result should be a 4');
	a.equal(addNumbers(20), 40,
		'result should be a 40');

});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);

module.exports = addNumbers;