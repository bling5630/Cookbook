var test = require("tape"),
	tapSpec = require("tap-spec"),
	kataPotter = require("../index");

test("Potter", function(p) {
	p.plan(8);

	p.throws(function() {
		Potter();
	});
	p.equal(kataPotter([]), 0, 'No book provided!!');
	p.equal(kataPotter([0]), 8, 'You should pay 8 Euros!!');
	p.equal(kataPotter([0, 1]), 8 * 2, 'You should pay 16 Euros!!');
	p.equal(kataPotter([0, 0]), 8 * 2 * 0.95, 'You should pay 15.2 Euros!!');
	p.equal(kataPotter([0, 0, 0]), 8 * 3 * 0.9, 'You should pay 21.6 Euros!!');
	p.equal(kataPotter([0, 0, 0, 0]), 8 * 4 * 0.8, 'You should pay 25.6 Euros!!');
	p.equal(kataPotter([0, 0, 0, 0, 0]), 8 * 5 * 0.75, 'You should pay 30 Euros!!');
	p.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);


module.exports = kataPotter;