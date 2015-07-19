var test = require('tape'),
	tapSpec = require('tap-spec'),
	pushWordsIntoArray = require('../src/pushWordsIntoArray');

test('pushWordsIntoArray', function(n) {
	n.plan(2);

	n.equal(typeof pushWordsIntoArray, 'function',
		'pushWordsIntoArray should be a function');
	n.equal(typeof pushWordsIntoArray(), 'undefined',
		'should be a undefined');



	n.end();
});


/*
(node) warning: possible EventEmitter memory leak detected. 
11 listeners added. Use emitter.setMaxListeners() 
to increase limit.
*/

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);