var _ = require('lodash');

/*
function numberCalculator(NUMBER_A, NUMBER_B) {
	validateInput(NUMBER_A, NUMBER_B);
	return Calculator(OPERATOR, NUMBER_A, NUMBER_B);
}

function validateInput(NUMBER_A, NUMBER_B) {
	if (!NUMBER_A) {
		throw new Error('Input is undefined');
	}
	if (typeof NUMBER_A !== 'number') {
		throw new Error('Input is not a number');
	}
}
*/

function Calculator(OPERATOR, NUMBER_A, NUMBER_B) {
	if (OPERATOR === "+") {
		return addNumbers(NUMBER_A, NUMBER_B);
	} else if (OPERATOR === "-") {
		return subtractNumbers(NUMBER_A, NUMBER_B);
	} else if (OPERATOR === "*") {
		return timesNumbers(NUMBER_A, NUMBER_B);
	} else {
		return divideNumbers(NUMBER_A, NUMBER_B);
	}
}


function addNumbers(NUMBER_A, NUMBER_B) {
	return NUMBER_A + NUMBER_B;
}

function subtractNumbers(NUMBER_A, NUMBER_B) {
	return NUMBER_A - NUMBER_B;
}

function timesNumbers(NUMBER_A, NUMBER_B) {
	return NUMBER_A * NUMBER_B;
}

function divideNumbers(NUMBER_A, NUMBER_B) {
	return NUMBER_A /= NUMBER_B;
}

module.exports = Calculator;

console.log(Calculator("", 2, 1324));