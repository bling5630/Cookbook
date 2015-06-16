var BASE_NUMBERS = {
	1: 'I',
	4: 'IV',
	5: 'V',
	9: 'IX',
	10: 'X',
};

var NUMBERS = Object.keys(BASE_NUMBERS);

function numberConverter(number) {
	var output = '';

	while (number) {
		for (var i = NUMBERS.length - 1; i >= 0; i--) {

			if (number - NUMBERS[i] >= 0) {
				number = number - NUMBERS[i];
				output = output + BASE_NUMBERS[NUMBERS[i]];
			}
		}
	}
	return output;
}

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
console.log(converter(2));
console.log(converter(3));
console.log(converter(4));
console.log(converter(5));
console.log(converter(9));
console.log(converter(10));
console.log(converter(11));
console.log(converter(13));
console.log(converter(19));
console.log(converter(29));
console.log('break');
console.log(numberConverter(1));
console.log(numberConverter(2));
console.log(numberConverter(3));
console.log(numberConverter(4));
console.log(numberConverter(5));
console.log(numberConverter(9));
console.log(numberConverter(10));
console.log(numberConverter(11));
console.log(numberConverter(13));
console.log(numberConverter(19));
console.log(numberConverter(29));

kkbmodule.exports = converter;