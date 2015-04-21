var lodash = require('lodash');

var BASE_RULES = {
	'1': 'I',
	'5': 'V',
	'10': 'X',
	'50': 'L',
	'100': 'C',
	'500': 'D',
	'1000': 'M'
};

function romanNumerals(number) {
	validateInput(number);
	return transformNumeral(number);
}

function validateInput(number) {
	if (!number) {
		throw new Error('No number provided');
	}
}

function transformNumeral(number) {
	if (!number.length) {
		return 0;
	}
}

console.log(romanNumerals([]));

module.exports = romanNumerals;