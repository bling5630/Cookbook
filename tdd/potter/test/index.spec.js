var test = require('tape'),
	tapSpec = require('tap-spec'),
	kataPotter = require('../index');

test("Potter", function(p) {
	p.plan(2);

	p.throws(function() {
		Potter();
	}, "kataPotter is running");

	p.equal(kataPotter(8, 2), 8 * 2, "The amount to be paid");

	p.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);


module.exports = kataPotter;