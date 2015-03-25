var test = require('tape'),
	someModule = require('../');

test('fibwibblers and xyrscawlers', function(t) {
	t.plan(2);

	var x = someModule(2);
	t.equal(2, 22);

	t.equal(function(err, res) {
		t.equal(res, "boop");
	});
});