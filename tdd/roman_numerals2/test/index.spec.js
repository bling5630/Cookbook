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
	r.equal(arabicToRoman(7), 'VII');
	r.equal(arabicToRoman(8), 'VIII');
	r.equal(arabicToRoman(9), 'IX');
	r.equal(arabicToRoman(10), 'X');
	r.equal(arabicToRoman(11), 'XI');
	r.equal(arabicToRoman(13), 'XIII');
	r.equal(arabicToRoman(15), 'XV');
	r.equal(arabicToRoman(16), "XVI");
	r.equal(arabicToRoman(17), 'XVII');
	r.equal(arabicToRoman(19), 'XIX');
	r.equal(arabicToRoman(21), 'XXI');
	r.equal(arabicToRoman(27), 'XXVII');
	r.equal(arabicToRoman(28), 'XXVIII');
	r.equal(arabicToRoman(29), 'XXIX');

	r.end();
});