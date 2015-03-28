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
	} else if (isDivisible(number, BUZZ_5)) {
		return BUZZ_MESSAGE;
	} else if (isDivisible(number, FIZZ_3)) {
		return FIZZ_MESSAGE;
	} else {
		return MEHH_MESSAGE;
	}
}

function isDivisible(number, divident) {
	return number % divident === 0;
}

console.log(kataFizzBuzzCalclulator(3));

module.exports = kataFizzBuzzCalclulator;
