/**
for (var i = 1; i < 100; i++) {

	function FizzBuzz(number) {
		if (number % 15 === 0) {
			return "FizzBuzz";
		} else if (number % 5 === 0) {
			return "Fizz";
		} else if (number % 3 === 0) {
			return "Buzz";
		} else {
			return "Mehh";
		}
	}
}
**/

var number = true,
	FizzBuzz;

for (var i = 1; i < 100; i++) {

	 FizzBuzz = function(number) {
		if (number % 15 === 0) {
			return "FizzBuzz";
		} else if (number % 5 === 0) {
			return "Fizz";
		} else if (number % 3 === 0) {
			return "Buzz";
		} else {
			return "Mehh";
		}
	};
}
