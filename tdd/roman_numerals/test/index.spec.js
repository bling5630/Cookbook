var test = require('tape'),
	tapSpec = require('tap-spec'),
	romanNumerals = require('../index');

test("romanNumerals", function(n) {
	n.plan(21);

	n.throws(function() {
		romanNumerals();
	});
	n.equal(romanNumerals([]), 0, 'No book provided!!');
	n.equal(romanNumerals([1]), 'I', '1 equals I..well done!!');
	n.equal(romanNumerals([2]), 'II', '2 equals II..well done!!');
	n.equal(romanNumerals([3]), 'III', '3 equals III..well done!!');
	n.equal(romanNumerals([4]), 'IV', '4 equals IV..well done!!');
	n.equal(romanNumerals([5]), 'V', '5 equals V..well done!!');
	n.equal(romanNumerals([6]), 'VI', '6 equals VI..well done!!');
	n.equal(romanNumerals([7]), 'VII', '7 equals VII..well done!!');
	n.equal(romanNumerals([8]), 'VIII', '8 equals VIII..well done!!');
	n.equal(romanNumerals([9]), 'IX', '9 equals IX..well done!!');
	n.equal(romanNumerals([10]), 'X', '10 equals X..well done!!');
	n.equal(romanNumerals([20]), 'XX', '20 equals XX..well done!!');
	n.equal(romanNumerals([30]), 'XXX', '30 equals XXX..well done!!');
	n.equal(romanNumerals([40]), 'XL', '40 equals XL..well done!!');
	n.equal(romanNumerals([50]), 'L', '50 equals L..well done!!');
	n.equal(romanNumerals([60]), 'LX', '60 equals LX..well done!!');
	n.equal(romanNumerals([70]), 'LXX', '70 equals LXX..well done!!');
	n.equal(romanNumerals([80]), 'LXXX', '80 equals LXXX..well done!!');
	n.equal(romanNumerals([90]), 'XC', '90 equals XC..well done!!');
	n.equal(romanNumerals([11]), 'XI', '11 XI..well done!!');

	n.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);

module.exports = romanNumerals;