var BASE_NUMBER = {
	1: 'I',
	4: 'IV',
	5: 'V',

};

var NUMBERS = Object.keys(BASE_NUMBER);

function arabicToRoman(number) {
	var output = '';

	while (number) {
		for (var i = NUMBERS.length - 1; i >= 0; i--) {
			if (number - NUMBERS[i] >= 0) {
				number = number - NUMBERS[i];
				output = output + BASE_NUMBER[NUMBERS[i]];
				break;
			}
		}
	/*	if (number - NUMBERS[2] >= 0) {
			number = number - NUMBERS[2];
			output = output + BASE_NUMBER[NUMBERS[2]];
		} else if (number - NUMBERS[1] >= 0) {
			number = number - NUMBERS[1];
			output = output + BASE_NUMBER[NUMBERS[1]];
		} else {
			number = number - NUMBERS[0];
			output = output + BASE_NUMBER[NUMBERS[0]];
		} */
	}
	return output;
}


module.exports = arabicToRoman;