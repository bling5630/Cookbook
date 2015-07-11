var test = require('tape'),
	tapSpec = require('tap-spec'),
	filterByLength = require('../src/filterByLength');

test('filterByLength', function(n) {
	n.plan(9);

	n.equal(typeof filterByLength, 'function', 
		'result should be a function');
	n.equal(typeof filterByLength(''), 'object', 
		'result should be a object');
	n.equal(typeof filterByLength('1'), 'object', 
		'result should be a object');
	n.equal(typeof filterByLength('abc'), 'object', 
		'result should be a object');

	var input = (' alma ');
	n.deepLooseEqual(filterByLength(input), ['alma'],
		'result should be alma');

	var input1 = ('a b c d e f g h i j ');
	n.deepLooseEqual(filterByLength(input1), [],
		'result should be an empty array');

	var input2 = ('bsdifidbiédfbgofgbdsgb');
	n.deepLooseEqual(filterByLength(input2), [],
		'result should be an empty array');

	var input3 = input + input1 + input2;
	n.deepLooseEqual(filterByLength(input3), ['alma'],
		'result should be alma');

	var input4 = input3 + ('bsdibfibfidbiédfbgofg bdsgb');
	n.deepLooseEqual(filterByLength(input4), ['alma', 'bdsgb'],
		'result should be alma and bdsgb');

	n.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);