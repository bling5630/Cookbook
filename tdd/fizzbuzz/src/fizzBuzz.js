// KataFizzBuzz

var FizzBuzz = function fizzBuzzCalculator(number) {

var numberDivisibleBy3 = (number % 3) === 0,
	numberDivisibleBy5 = (number % 5) === 0,
	numberDivisibleBy15 = (number % 15) === 0;

	if (numberDivisibleBy15) {
		return "FizzBuzz";
	} else if (numberDivisibleBy5) {
		return "Fizz";
	} else if (numberDivisibleBy3) {
		return "Buzz";
	} else {
		return "Mehh";
	}};

console.log(FizzBuzz(15));

module.exports = FizzBuzz;