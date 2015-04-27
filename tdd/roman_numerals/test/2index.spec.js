var test = require('tape'),
	tapSpec = require('tap-spec'),
	transformArabicNumberToRomanNumber = require('../combo');

test("transformArabicNumberToRomanNumber", function(n) {
	n.plan(21);

	n.throws(function() {
		transformArabicNumberToRomanNumber();
	});
	n.equal(transformArabicNumberToRomanNumber([]), 0, 'No book provided!!');
	n.equal(transformArabicNumberToRomanNumber([1]), 'I', '1 equals I..well done!!');
	n.equal(transformArabicNumberToRomanNumber([2]), 'II', '2 equals II..well done!!');
	n.equal(transformArabicNumberToRomanNumber([3]), 'III', '3 equals III..well done!!');
	n.equal(transformArabicNumberToRomanNumber([4]), 'IV', '4 equals IV..well done!!');
	n.equal(transformArabicNumberToRomanNumber([5]), 'V', '5 equals V..well done!!');
	n.equal(transformArabicNumberToRomanNumber([6]), 'VI', '6 equals VI..well done!!');
	n.equal(transformArabicNumberToRomanNumber([7]), 'VII', '7 equals VII..well done!!');
	n.equal(transformArabicNumberToRomanNumber([8]), 'VIII', '8 equals VIII..well done!!');
	n.equal(transformArabicNumberToRomanNumber([9]), 'IX', '9 equals IX..well done!!');
	n.equal(transformArabicNumberToRomanNumber([10]), 'X', '10 equals X..well done!!');
	n.equal(transformArabicNumberToRomanNumber([20]), 'XX', '20 equals XX..well done!!');
	n.equal(transformArabicNumberToRomanNumber([30]), 'XXX', '30 equals XXX..well done!!');
	n.equal(transformArabicNumberToRomanNumber([40]), 'XL', '40 equals XL..well done!!');
	n.equal(transformArabicNumberToRomanNumber([50]), 'L', '50 equals L..well done!!');
	n.equal(transformArabicNumberToRomanNumber([60]), 'LX', '60 equals LX..well done!!');
	n.equal(transformArabicNumberToRomanNumber([70]), 'LXX', '70 equals LXX..well done!!');
	n.equal(transformArabicNumberToRomanNumber([80]), 'LXXX', '80 equals LXXX..well done!!');
	n.equal(transformArabicNumberToRomanNumber([90]), 'XC', '90 equals XC..well done!!');
	n.equal(transformArabicNumberToRomanNumber([11]), 'XI', '11 XI..well done!!');

	n.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);

module.exports = transformArabicNumberToRomanNumber;