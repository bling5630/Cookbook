// KataFizzBuzz

var FIZZ_MESSAGE = "Fizz",
	BUZZ_MESSAGE = "Buzz",
	FIZZBUZZ_MESSAGE = "FizzBuzz",
	MEHH_MESSAGE = "Mehh";

var FIZZ_3 = 3,
	BUZZ_5 = 5,
	FIZZ_15 = 15;


function kataFizzBuzzCalclulator(number) {

	return calculateOutput(number);
}

function calculateOutput(number) {
	if (isDivisible(number, FIZZ_15)) {
		return FIZZBUZZ_MESSAGE;
	}
}

function isDivisible(number, divident) {
	return number % divident === 0;
}

console.log(kataFizzBuzzCalclulator(15));

module.exports = kataFizzBuzzCalclulator;

/**
var FIZZ_MESSAGE = "Fizz",
	BUZZ_MESSAGE = "Buzz",
	FIZZBUZZ_MESSAGE = "FizzBuzz",
	MEHH_MESSAGE = "Mehh";

var FIZZ_3 = 3,
	BUZZ_5 = 5,
	FIZZ_15 = 15;


function kataFizzBuzzCalclulator(number) {

	return calculateOutput(number);
}

function calculateOutput(number) {
	if (numberDivisibleBy15(number, FIZZ_15)) {
		return FIZZBUZZ_MESSAGE;
	}

}

function calculateOutput(number) {
	if (numberDivisibleBy5(number, BUZZ_5)) {
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
**/