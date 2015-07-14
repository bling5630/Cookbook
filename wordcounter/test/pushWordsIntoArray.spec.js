var test = require('tape'),
	tapSpec = require('tap-spec'),
	pushWordsIntoArray = require('../src/pushWordsIntoArray');

test('pushWordsIntoArray', function(n) {
	n.plan(1);

	n.equal(typeof pushWordsIntoArray, 'function', 'should be a function');
	//n.equal(typeof pushWordsIntoArray(), 'object', 'should be a object');



	n.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);