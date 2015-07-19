var test = require('tape'),
	tapSpec = require('tap-spec'),
	printTheFinalVersion = require('../src/printTheFinalVersion');

test('printTheFinalVersion', function(n) {
	n.plan(6);


	n.equal(typeof printTheFinalVersion, 'function', 
		'result should be a function');
	n.equal(typeof printTheFinalVersion(''), 'string', 
		'result should be a undefined');
	n.equal(typeof printTheFinalVersion('1'), 'string', 
		'result should be a string');
	n.equal(typeof printTheFinalVersion('abc'), 'string', 
		'result should be a string');
	n.equal(typeof printTheFinalVersion(1), 'number', 
		'result should be a number');
	var input = (' alma ');
	n.deepLooseEqual(printTheFinalVersion(input), ' alma ',
		'result should be alma');
	n.end();
});



test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);