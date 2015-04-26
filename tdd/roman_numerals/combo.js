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

function joke(number) {
	var digits = number.toString()
		.split('');
	return BASE_RULES_ONES[digits.pop()] + BASE_RULES_DOUBLES[digits.pop()];
}

// console.log(joke([231223129876]));

function transformArabicNumberToRomanNumber(number) {
	if (isDoubleDigitsNumber(number)) {
		return joke(number);
	} else {
		return 'Give me a new number';
	}
}

console.log(transformArabicNumberToRomanNumber(11));

function isDoubleDigitsNumber(number) {
	if (countDigits(number) === BASE_DIVIDENT_2) {
		return 'This number has double digits ' + number;
	} else {
		throw new Error('Give me a new number');
		// return 'This number has ' + countDigits(number) + ' digits';
	}
}

function isTripleDigitsNumber(number) {
	if (countDigits(number) === BASE_DIVIDENT_3) {
		return 'This number has triple digits ' + number;
	} else {
		throw new Error('Give me a new number');
		// return 'This number has ' + countDigits(number) + ' digits';
	}
}

// in order to you could count the number of digits

function countDigits(number) {
	return number.toString().length;
}

console.log(countDigits(12213214231) + ' digits');
console.log(isDoubleDigitsNumber([23]));
console.log(isTripleDigitsNumber(123));


/** 
 * do it in the "mathematical" way
 * without treating the number as a string
 */

var num = 45;
var digits = [];
while (num > 0) {
	digits[digits.length] = num % 10;
	num = parseInt(num / 10);
}
digits.reverse();
console.log(BASE_RULES_ONES[digits.pop()] + BASE_RULES_DOUBLES[digits.pop()]);

// result [ 4, 5 ]