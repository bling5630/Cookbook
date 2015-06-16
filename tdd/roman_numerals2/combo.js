var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function flipper(number) {
	for (var i = arr.length - 1; i >= 0; i--) {
		if (number % arr[4] === 0) {
			return 'Yes';
		} else {
			return 'No';
		}
	}
}

console.log(flipper(20));