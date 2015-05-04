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
		0: "",
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
		0: "",
		1: "C",
		2: "CC",
		3: "CCC",
		4: "CD",
		5: "D",
		6: "DC",
		7: "DCC",
		8: "DCCC",
		9: "CM"
	},

	BASE_RULES_FOURTH = {
		1: "M",
		2: "MM"
	};

var BASE_DIVIDENT_10 = 10,
	BASE_DIVIDENT_100 = 100,
	BASE_DIVIDENT_1000 = 1000;

function transformArabicNumberToRomanNumber(number) {
	validateInput(number);

	// 1-10
	if (number < BASE_DIVIDENT_10) {
		return convertNumbersUnderTen(number);
	}
	// 10-99
	else if (number >= BASE_DIVIDENT_10 && number < BASE_DIVIDENT_100) {
		return convertNumbersBetweenTenAndHundred(number);
	}
	// 100-999
	else if (number >= BASE_DIVIDENT_100 && number < BASE_DIVIDENT_1000) {
		return convertNumbersBetweenThousandAndHundred(number);
	}
	// 1000-2999
	else {
		return convertNumbersBetweenThousandAndThreeThousand(number);
	}
}

// 1-10 part

function convertNumbersUnderTen(number) {
	if (!number.length) {
		return 0;
	}
	return BASE_RULES_ONES[number];
}

// 10-99 part

function convertNumbersBetweenTenAndHundred(number) {

	var ones = number.toString().slice(1);

	var tens = parseInt(number / BASE_DIVIDENT_10);

	if (number % BASE_DIVIDENT_10 === 0) {
		return BASE_RULES_DOUBLES[tens];
	} else {
		return BASE_RULES_DOUBLES[tens] + BASE_RULES_ONES[ones];
	}
}

// 100-999 part

function convertNumbersBetweenThousandAndHundred(number) {

		var hundreds = number.toString().slice(0, 1),
			tens = number.toString().slice(1, 2),
			ones = number.toString().slice(2, 3);

		var hundredsDivident = parseInt(number / BASE_DIVIDENT_100);

		if (number % BASE_DIVIDENT_100 === 0) {
			return BASE_RULES_TRIPLES[hundredsDivident];
		} else {
			return BASE_RULES_TRIPLES[hundreds] + BASE_RULES_DOUBLES[tens] + BASE_RULES_ONES[ones];
		}
	}
	// 1000-2999 part

function convertNumbersBetweenThousandAndThreeThousand(number) {
	var thousands = number.toString().slice(0, 1),
		hundreds = number.toString().slice(1, 2),
		tens = number.toString().slice(2, 3),
		ones = number.toString().slice(3, 4);

	var thousandsDivident = parseInt(number / BASE_DIVIDENT_1000);

	if (number % BASE_DIVIDENT_1000 === 0) {
		return BASE_RULES_FOURTH[thousandsDivident];
	} else {
		return BASE_RULES_FOURTH[thousands] + BASE_RULES_TRIPLES[hundreds] + BASE_RULES_DOUBLES[tens] + BASE_RULES_ONES[ones];
	}

}

// input validation

function validateInput(number) {
	if (!number) {
		throw new Error('No number provided');
	}
	/*
		if (typeof number !== 'number') {
			throw new Error('Input is not a number');
		}
		*/
}

// print and convert numbers to roman numerals

console.log(transformArabicNumberToRomanNumber([1000]));

module.exports = transformArabicNumberToRomanNumber;