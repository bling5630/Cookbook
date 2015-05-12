var test = require('tape'),
	tapSpec = require('tap-spec'),
	converter = require('../2index');

test('converter', function(c) {
	c.plan(3);
	c.equal(converter(0), '', 'Null is an empty string!!');
	c.equal(converter(1), 'I', '1 means I!!');
	c.equal(converter(2), 'II', '2 means II!!');


	c.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);