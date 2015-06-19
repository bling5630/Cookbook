var BASE_NUMBER = {
	1: 'I',
	4: 'IV',
	5: 'V',
	9: 'IX',
	10: 'X',

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
	}
	return output;
}

console.log(arabicToRoman(29));

module.exports = arabicToRoman;