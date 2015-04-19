var test = require('tape'),
	tapSpec = require('tap-spec'),
	romanNumerals = require('../index');

test("romanNumerals", function(n) {
	n.plan(1);
	n.throws(function() {
		romanNumerals();
	});

	n.end();
});

/*
test.createStream()
	.pipe(tapSpec)
	.pipe(process.stdout);
*/

module.exports = romanNumerals;