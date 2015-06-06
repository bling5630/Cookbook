var _ = require('lodash');

var NUMBER_A = 'a',
	NUMBER_B = 'b';

function Calculator(NUMBER_A, NUMBER_B) {
	return addNumbers(NUMBER_A, NUMBER_B);
}


function addNumbers(NUMBER_A, NUMBER_B) {
	return NUMBER_A + NUMBER_B;
}

function subtractNumbers(NUMBER_A, NUMBER_B) {
	return NUMBER_A - NUMBER_B;
}

module.exports = Calculator;

console.log(Calculator(1, 2));