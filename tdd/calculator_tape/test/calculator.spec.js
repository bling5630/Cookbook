var test = require('tape'),
	tapSpec = require('tap-spec'),
	calculator = require('../src/calculator');

test('calculator', function(c) {
	c.equal(calculator(1,2), 3);
	c.equal(calculator(2,1), 1);

	/*
	c.equal(calculator(1,2,3), 6);
	c.equal(calculator(1,2,3,4), 10);
	c.equal(calculator(1,2,3,4,5), 15);
	*/

	c.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);