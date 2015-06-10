var test = require('tape'),
	tapSpec = require('tap-spec'),
	calculator = require('../src/calculator');

test('calculator', function(c) {
	c.equal(calculator('+',1, 2), 3);
	c.equal(calculator('-',2, 1), 1);
	c.equal(calculator('*',1,20), 20);
	c.equal(calculator('+',11,2), 13);
	c.equal(calculator('/=',10,5), 2);
	c.equal(calculator('+',100,232), 332);
	c.equal(calculator('*',1,232), 232);
	c.equal(calculator('+',12,232), 244);
	c.equal(calculator('+',200,200), 400);
	c.equal(calculator('-',1,1), 0);
	c.equal(calculator('+',1234,232), 1466);
	c.equal(calculator('*',10,10), 100);
	

	c.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);