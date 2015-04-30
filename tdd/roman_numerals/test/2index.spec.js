var test = require('tape'),
	tapSpec = require('tap-spec'),
	transformArabicNumberToRomanNumber = require('../combo');

test("transformArabicNumberToRomanNumber", function(n) {
	n.plan(32);

	n.throws(function() {
		transformArabicNumberToRomanNumber();
	});
	n.equal(transformArabicNumberToRomanNumber([]), 0, 'No number provided!!');
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
	n.equal(transformArabicNumberToRomanNumber([19]), 'XIX', '19 XIX..well done!!');
	n.equal(transformArabicNumberToRomanNumber([66]), 'LXVI', '66 LXVI..well done!!');
	n.equal(transformArabicNumberToRomanNumber([99]), 'XCIX', '99 XCIX..well done!!');
	n.equal(transformArabicNumberToRomanNumber([100]), 'C', '100 C..well done!!');
	n.equal(transformArabicNumberToRomanNumber([200]), 'CC', '200 CC..well done!!');
	n.equal(transformArabicNumberToRomanNumber([300]), 'CCC', '300 CCC..well done!!');
	n.equal(transformArabicNumberToRomanNumber([400]), 'CD', '400 CD..well done!!');
	n.equal(transformArabicNumberToRomanNumber([500]), 'D', '500 D..well done!!');
	n.equal(transformArabicNumberToRomanNumber([600]), 'DC', '600 DC..well done!!');
	n.equal(transformArabicNumberToRomanNumber([700]), 'DCC', '700 DCC..well done!!');
	n.equal(transformArabicNumberToRomanNumber([800]), 'DCCC', '800 DCCC..well done!!');
	n.equal(transformArabicNumberToRomanNumber([900]), 'CM', '900 CM..well done!!');

	n.end();
});

test.createStream()
	.pipe(tapSpec())
	.pipe(process.stdout);

module.exports = transformArabicNumberToRomanNumber;