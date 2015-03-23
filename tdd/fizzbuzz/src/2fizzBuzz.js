// KataFizzBuzz

var FIZZ_MESSAGE = "Fizz",
	BUZZ_MESSAGE = "Buzz",
	FIZZBUZZ_MESSAGE = "FizzBuzz",
	MEHH_MESSAGE = "Mehh";

var FIZZ_BASE3 = 3,
	FIZZ_BASE5 = 5,
	FIZZ_BASE15 = 15;


function kataFizzBuzzCalclulator(number) {

	/**
		var numberDivisibleBy3 = (number % 3) === 0,
			numberDivisibleBy5 = (number % 5) === 0;
		numberDivisibleBy15 = (number % 15) === 0;
	**/

	return calculateOutput(number);
}

function calculateOutput(number) {
	if (numberDivisibleBy15(number, FIZZ_BASE15)) {
		return FIZZBUZZ_MESSAGE;
	}

}

function calculateOutput(number) {
	if (numberDivisibleBy5(number, FIZZ_BASE5)) {
		return BUZZ_MESSAGE;
	}

}

function numberDivisibleBy5(number, divident) {
	return number % divident === 0;
}

function numberDivisibleBy15(number, divident) {
	return number % divident === 0;
}

console.log(kataFizzBuzzCalclulator(5));

module.exports = kataFizzBuzzCalclulator;