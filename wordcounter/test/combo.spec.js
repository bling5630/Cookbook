var test = require('tape'),
	tapSpec = require('tap-spec'),
	calculateByFrequency = require('../src/combo');

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

	n.deepLooseEqual(calculateByFrequency(['car', 'car','car','car']), {
		'car': 4
	}, 'Car should be 4');

	n.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);