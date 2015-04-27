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
	};

var BASE_DIVIDENT_2 = 2,
	BASE_DIVIDENT_3 = 3;

function transformArabicNumberToRomanNumber(number) {
	if (number < 10) {
		return BASE_RULES_ONES[number];
	} else if (isDoubleDigitsNumber(number)) {
		return implementSingleNumbersToRomanNumerals(number);
	} else {
		return 'Give me a new number';
	}
}

// todo - parseInt(number / 10)

function implementSingleNumbersToRomanNumerals(number) {
	var digits = number.toString()
		.split('');
	return BASE_RULES_DOUBLES[digits.shift()] + BASE_RULES_ONES[digits.shift()];
}

// transform numbers between 10 and 100

function isDoubleDigitsNumber(number) {
	if (countDigits(number) === BASE_DIVIDENT_2) {
		return 'This number has double digits ' + number;
	} else {
		throw new Error('Give me a new number');
	}
}

// transform numbers between 100 and 1000

function isTripleDigitsNumber(number) {
	if (countDigits(number) === BASE_DIVIDENT_3) {
		return 'This number has triple digits ' + number;
	} else {
		throw new Error('Give me a new number');
	}
}

// in order to you could count the number of digits

function countDigits(number) {
	return number.toString().length;
}

console.log(transformArabicNumberToRomanNumber(77));

module.exports = transformArabicNumberToRomanNumber;