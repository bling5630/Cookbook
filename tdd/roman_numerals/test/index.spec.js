var test = require('tape'),
	tapSpec = require('tap-spec'),
	romanNumerals = require('../index');

test("romanNumerals", function(n) {
	n.plan(3);

	n.throws(function() {
		romanNumerals();
	});
	n.equal(romanNumerals([]), 0, 'No book provided!!');
	n.equal(romanNumerals([1]), 'I', '1 equals I..well done!!');


	n.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);

module.exports = romanNumerals;