var test = require('tape'),
	tapSpec = require('tap-spec'),
	filterByLength = require('../src/combo');

test('filterByLength', function(n) {
	n.plan(9);

	n.equal(typeof filterByLength, 'function', 'should be a function');
	n.equal(typeof filterByLength(''), 'object', 'should be a object');
	n.equal(typeof filterByLength('1'), 'object', 'should be a object');
	n.equal(typeof filterByLength('abc'), 'object', 'should be a object');

	var input = (' alma ');
	n.deepLooseEqual(filterByLength(input), ['alma'], 'input should be alma');

	var input1 = ('a b c d e f g h i j ');
	n.deepLooseEqual(filterByLength(input1), [], 'input1 should be an empty array');

	var input2 = ('bsdifidbiédfbgofgbdsgb');
	n.deepLooseEqual(filterByLength(input2), [], 'input2 should be an empty array');
	
	var input3 = input + input1 + input2;
	n.deepLooseEqual(filterByLength(input3), ['alma'], 'input3 should be alma');

	var input4 = input3 + ('bsdibfibfidbiédfbgofg bdsgb');
	n.deepLooseEqual(filterByLength(input4), ['alma', 'bdsgb'], 'input4 should be alma');

	n.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);