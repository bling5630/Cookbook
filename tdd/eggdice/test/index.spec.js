var test = require('tape');

var fizzer = require('../');

test('fizz', function(t) {
	t.throws(function() {
		fizzer();
	});
	t.throws(function() {
		fizzer('majom');
	});

	t.equal(fizzer(1), '1');
	t.equal(fizzer(2), '2');
	t.equal(fizzer(7), 'fizz');
	t.equal(fizzer(14), 'fizz');

	t.end();
});