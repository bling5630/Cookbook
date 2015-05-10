var test = require('tape'),
	arabicToRoman = require('../index');

test('arabicToRoman', function(r) {
	r.equal(arabicToRoman(0), "");
	r.equal(arabicToRoman(1), "I");
	r.equal(arabicToRoman(2), "II");
	r.equal(arabicToRoman(3), "III");
	r.equal(arabicToRoman(4), "IV");
	r.equal(arabicToRoman(5), "V");
	r.equal(arabicToRoman(6), "VI");

	r.end();
});