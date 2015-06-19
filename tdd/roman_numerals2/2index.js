var BASE_NUMBERS = {
	1: 'I',
	4: 'IV',
	5: 'V',
	9: 'IX',
	10: 'X',
};

var NUMBERS = Object.keys(BASE_NUMBERS);

function converter(number) {
	var output = '';

	while (number) {
		for (var i = NUMBERS.length - 1; i >= 0; i--) {

			if (number - NUMBERS[i] >= 0) {
				number = number - NUMBERS[i];
				output = output + BASE_NUMBERS[NUMBERS[i]];
				break;
			}
		}
	}
	return output;
}

/*
function converter(number) {

	var output = '';

	while (number) {
		for (var i = NUMBERS.length - 1; i >= 0; i--) {
			if (number - NUMBERS[4] >= 0) {
				number = number - NUMBERS[4];
				output = output + BASE_NUMBERS[NUMBERS[4]];
			} else if (number - NUMBERS[3] >= 0) {
				number = number - NUMBERS[3];
				output = output + BASE_NUMBERS[NUMBERS[3]];
			} else if (number - NUMBERS[2] >= 0) {
				number = number - NUMBERS[2];
				output = output + BASE_NUMBERS[NUMBERS[2]];
			} else if (number - NUMBERS[1] >= 0) {
				number = number - NUMBERS[1];
				output = output + BASE_NUMBERS[NUMBERS[1]];
			} else if (number - NUMBERS[0] >= 0) {
				number = number - NUMBERS[0];
				output = output + BASE_NUMBERS[NUMBERS[0]];
			}
		}
	}
	return output;
}
*/

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

console.log(converter(1));

module.exports = converter;