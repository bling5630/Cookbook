var lodash = require('lodash');

function romanNumerals(numbers) {
	validateInput(numbers);
}

function validateInput(numbers) {
	if (!numbers) {
		throw new Error('No number provided');
	}
}

console.log(romanNumerals([2]));