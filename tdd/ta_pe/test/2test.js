var test = require('tape');

test('deep equality', function(t) {
	t.plan(2);

	t.deepEqual([3, 4, 5], [1 * 3, 2 + 2, 10 - 5]);
	t.deepEqual({
		a: 7,
		b: [8, 9]
	}, {
		a: 3 + 4,
		b: [4 * 2].concat(3 * 3)
	});
});