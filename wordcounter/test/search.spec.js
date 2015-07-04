var test = require('tape'),
	tapSpec = require('tap-spec'),
	wordcounter = require('../src/wordcounter');
//countWords = require('../src/wordcounter');

test('wordcounter', function(n) {
	n.plan(1);
	n.throws(function() {
		wordcounter();
	});
/*
	n.equal(typeof wordcounter, 'function', 'should be an function');
	n.equal(typeof wordcounter(), 'object', 'should be an object');
*/	
	n.end();
});

/*
test('data', function(n) {
	var input = ['from'];
	var output = countWords(input);
	n.equal(output, {
		from: 1
	});
	n.end();
});
*/

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);