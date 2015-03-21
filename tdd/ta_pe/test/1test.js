var test = require('tape');

test('basic arithmetic', function(t) {
	t.plan(6);

	t.equal(2 + 3, 5);
	t.equal(7 * 8, 56);
	t.equal(7 - 8, -1);
	t.equal(30 + 30 * 1, 60);
	t.equal(7 * 7, 49);
	t.equal(7 + 8, 15);

	t.end();
});