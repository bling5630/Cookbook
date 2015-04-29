var _ = require('lodash');

var BASE_RULES_ONES = {
		0: '0',
		1: 'I',
		2: 'II',
		3: 'III',
		4: 'IV',
		5: 'V',
		6: 'VI',
		7: 'VII',
		8: 'VIII',
		9: 'IX'
	},

	BASE_RULES_DOUBLES = {
		1: "X",
		2: "XX",
		3: "XXX",
		4: "XL",
		5: "L",
		6: "LX",
		7: "LXX",
		8: "LXXX",
		9: "XC"
	},

	BASE_RULES_TRIPLES = {
		1: "C",
		2: "CC",
		3: "CCC",
		4: "CD",
		5: "D",
		6: "DC",
		7: "DCC",
		8: "DCCC",
		9: "CM"
	};

var BASE_DIVIDENT_10 = 10,
	BASE_DIVIDENT_100 = 100,
	BASE_DIVIDENT_1000 = 1000;

function transformArabicNumberToRomanNumber(number) {
	validateInput(number);
	if (number < BASE_DIVIDENT_10) {
		return convertNumbersUnderTen(number);
	} else return convertNumbersBetweenTenAndHundred(number);
}

function convertNumbersUnderTen(number) {
	if (!number.length) {
		return 0;
	}
	return BASE_RULES_ONES[number];
}

function convertNumbersBetweenTenAndHundred(number) {
	var digits = number.toString()
		.split('');

	var ones = digits.pop(),
		tens = parseInt(number / BASE_DIVIDENT_10);

	if (number % BASE_DIVIDENT_10 === 0) {
		return BASE_RULES_DOUBLES[tens];
	} else {
		return BASE_RULES_DOUBLES[tens] + BASE_RULES_ONES[ones];
	}
}

function validateInput(number) {
	if (!number) {
		throw new Error('No number provided');
	}
}

console.log(transformArabicNumberToRomanNumber(8));

module.exports = transformArabicNumberToRomanNumber;