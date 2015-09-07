var test = require('tape'),
	tapSpec = require('tap-spec'),
	clearTheParsedText = require('../src/clearTheParsedText');

test('clearTheParsedText', function(n) {
	n.plan(5);

	n.equal(typeof clearTheParsedText, 'function',
		'result should be a function');
	n.equal(typeof clearTheParsedText(''), 'string',
		'result should be a string');
	
	n.equal(typeof clearTheParsedText('1'), 'string',
		'result should be a string');
	n.equal(typeof clearTheParsedText('abc'), 'string',
		'result should be a string');

	var input = ('alma "!"+!"+lbfdsbfadsf');
	n.equal(clearTheParsedText(input), 'alma lbfdsbfadsf',
		'result should be alma and lbfdsbfadsf');

	n.end();
});


test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);