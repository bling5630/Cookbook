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
		10: "X",
		20: "XX",
		30: "XXX",
		40: "XL",
		50: "L",
		60: "LX",
		70: "LXX",
		80: "LXXX",
		90: "XC"
	},
	BASE_RULES_UNDER10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function romanNumerals(number) {
	validateInput(number);
	if (number < 10) {
		return transformNumeralUnderTen(number);
	} else {
		return transformNumeralDoubles(number);
	}
}

function validateInput(number) {
	if (!number) {
		throw new Error('No number provided');
	}
}

function transformNumeralUnderTen(number) {
	if (!number.length) {
		return 0;
	}
	return BASE_RULES_ONES[number];
}

function transformNumeralDoubles(number) {
	return BASE_RULES_DOUBLES[number];
}

console.log(romanNumerals([50]));
console.log(transformNumeralUnderTen([7]));
console.log(transformNumeralDoubles(70));

module.exports = romanNumerals;