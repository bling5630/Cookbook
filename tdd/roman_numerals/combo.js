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
	else if (helper(number) === 2) {
		return convertNumbersBetweenTenAndHundred(number);
	}
	// 100-999
	else if (helper(number) === 3) {
		return convertNumbersBetweenThousandAndHundred(number);
	}
	// 1000-2999
	else {
		return convertNumbersBetweenThousandAndThreeThousand(number);
	}
}

// 1-10 part

function convertNumbersUnderTen(number) {

	return !number.length ? 0 : BASE_RULES_ONES[number];
}

// 10-99 part

function convertNumbersBetweenTenAndHundred(number) {

	return number % BASE_DIVIDENT_10 === 0 ? BASE_RULES_DOUBLES[sliceFirstDigit(number)] : shortcutterDoubles(number);
}

// 100-999 part

function convertNumbersBetweenThousandAndHundred(number) {

	return number % BASE_DIVIDENT_100 === 0 ? BASE_RULES_TRIPLES[sliceFirstDigit(number)] : shortcutterTriples(number);
}
// 1000-2999 part

function convertNumbersBetweenThousandAndThreeThousand(number) {

	return number % BASE_DIVIDENT_1000 === 0 ? BASE_RULES_FOURTH[sliceFirstDigit(number)] : shortcutterFourth(number);
}

// input validation

function validateInput(number) {
	if (!number) {
		throw new Error('No number provided');
	}
}

function numberBetween0_10(number) {
	if (number < BASE_DIVIDENT_10) {
		return convertNumbersUnderTen(number);
	}
}

function shortcutterDoubles(number) {
	return BASE_RULES_DOUBLES[sliceFirstDigit(number)] +
		BASE_RULES_ONES[sliceTheSecondDigit(number)];

}

function shortcutterTriples(number) {
	return BASE_RULES_TRIPLES[sliceFirstDigit(number)] +
		BASE_RULES_DOUBLES[sliceTheSecondDigit(number)] +
		BASE_RULES_ONES[sliceTheThirdDigit(number)];
}

function shortcutterFourth(number) {
	return BASE_RULES_FOURTH[sliceFirstDigit(number)] +
		BASE_RULES_TRIPLES[sliceTheSecondDigit(number)] +
		BASE_RULES_DOUBLES[sliceTheThirdDigit(number)] +
		BASE_RULES_ONES[sliceTheFourthDigit(number)];
}

function sliceFirstDigit(number) {
	return number.toString().slice(0, 1);
}

function sliceTheSecondDigit(number) {
	return number.toString().slice(1, 2);
}

function sliceTheThirdDigit(number) {
	return number.toString().slice(2, 3);
}

function sliceTheFourthDigit(number) {
	return number.toString().slice(3, 4);
}

function helper(number) {
	return number.toString().length;
}
// print and convert numbers to roman numerals

console.log(transformArabicNumberToRomanNumber([1000]));

module.exports = transformArabicNumberToRomanNumber;