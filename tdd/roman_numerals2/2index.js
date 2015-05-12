var BASE_NUMBERS = {
	1: 'I',
	2: 'II',
};

var NUMBERS = Object.keys(BASE_NUMBERS);

function converter(number) {

	var output = '';

	if (number - NUMBERS[1] >= 0) {
		number = number - NUMBERS[1];
		output = output + BASE_NUMBERS[NUMBERS[1]];
	} else if (number - NUMBERS[0] >= 0) {
		number = number - NUMBERS[0];
		output = output + BASE_NUMBERS[NUMBERS[0]];
	}
	else {return '';}

	return output;
}

/*
function validateInput(number) {
	if (!number) {
		throw new Error('Input is undefined!!');
	}
	if (typeof number !== 'number') {
		throw new Error('Input is not a number!!');
	}
}
*/


module.exports = converter;