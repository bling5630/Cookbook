var test = require('tape'),
	tapSpec = require('tap-spec'),
	wordcounter = require('../src/wordcounter');

test('wordcounter', function(n) {
	n.plan(1);
	n.throws(function() {
		wordcounter();
	});
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);