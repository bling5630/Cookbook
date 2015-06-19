var test = require('tape'),
	tapSpec = require('tap-spec'),
	converter = require('../2index');

test('converter', function(c) {
	c.plan(24);
	c.equal(converter(0), '');
	c.equal(converter(1), 'I');
	c.equal(converter(2), 'II');
	c.equal(converter(3), 'III');
	c.equal(converter(4), 'IV');
	c.equal(converter(5), 'V');
	c.equal(converter(6), 'VI');
	c.equal(converter(7), 'VII');
	c.equal(converter(8), 'VIII');
	c.equal(converter(9), 'IX');
	c.equal(converter(10), 'X');
	c.equal(converter(11), 'XI');
	c.equal(converter(13), 'XIII');
	c.equal(converter(15), 'XV');
	c.equal(converter(17), 'XVII');
	c.equal(converter(19), 'XIX');
	c.equal(converter(21), 'XXI');
	c.equal(converter(27), 'XXVII');
	c.equal(converter(28), 'XXVIII');
	c.equal(converter(29), 'XXIX');
	c.equal(converter(30), 'XXX');
	c.equal(converter(31), 'XXXI');
	c.equal(converter(35), 'XXXV');
	c.equal(converter(39), 'XXXIX');


	c.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);