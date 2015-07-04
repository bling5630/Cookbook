var test = require('tape'),
	tapSpec = require('tap-spec'),
	printResult = require('../src/combo');

test('printResult', function(n) {
	n.plan(2);
	n.equal(typeof printResult, 'function', 'should be a function');
	n.equal(typeof printResult(), 'undefined', 'should be a undefined');

	var input = [];
	printResult(input);
	n.equal([]);

	n.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);