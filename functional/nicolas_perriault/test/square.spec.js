var test = require('tape'),
	tapSpec = require('tap-spec'),
	squareNumber = require('../src/square');

test('square', function(s) {
	s.plan(8);

	s.throws(function() {
		square();
	});

	s.equal(typeof squareNumber, 'function',
		'result should be a function');
	s.equal(typeof squareNumber(), 'number',
		'result should be a number');
	s.equal(typeof squareNumber(0), 'number',
		'result should be a number');
	s.equal(typeof squareNumber('0'), 'number',
		'result should be a number');
	s.equal(squareNumber(0), 0,
		'result should be a 0');
	s.equal(squareNumber(2), 4,
		'result should be a 4');
	s.equal(squareNumber(20), 400,
		'result should be a 400');

});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);

module.exports = squareNumber;